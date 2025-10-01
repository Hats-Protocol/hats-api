import TelegramBot from 'node-telegram-bot-api';
import { CHAIN_ID_TO_NETWORK_NAME } from './constants';
import logger from './log';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TECH_ALERTS_CHAT_ID = process.env.TECH_ALERTS_CHAT_ID;
const ENABLE_SUBGRAPH_NOTIFICATIONS = process.env.ENABLE_SUBGRAPH_NOTIFICATIONS !== 'false';

const TEST_PREFIX = '⚙️ TEST ⚙️ ';

// Rate limiting: track last notification time per chain (10-minute intervals)
const lastNotificationTimes: Map<string, number> = new Map();
const NOTIFICATION_INTERVAL_MS = 10 * 60 * 1000; // 10 minutes

let bot: TelegramBot | null = null;

// Initialize bot if credentials are available
if (TELEGRAM_BOT_TOKEN && TECH_ALERTS_CHAT_ID) {
  bot = new TelegramBot(TELEGRAM_BOT_TOKEN);
} else {
  logger.log({
    level: 'warn',
    message: 'Telegram bot not initialized: TELEGRAM_BOT_TOKEN or TECH_ALERTS_CHAT_ID not set',
  });
}

export const testPrefix = () => {
  const isTest = process.env.NODE_ENV === 'development';
  return isTest ? TEST_PREFIX : '';
};

/**
 * Sanitize message for Telegram API
 * @param message - message to sanitize
 * @returns sanitized message
 */
export const sanitizeMessage = (message: string | null | undefined) => {
  if (!message) return undefined;
  return message.replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&');
};

/**
 * Check if enough time has passed since last notification for this chain
 * @param chainId - chain identifier
 * @returns true if notification should be sent
 */
const shouldSendNotification = (chainId: string): boolean => {
  const now = Date.now();
  const lastNotification = lastNotificationTimes.get(chainId) || 0;
  const timeSinceLastNotification = now - lastNotification;

  if (timeSinceLastNotification >= NOTIFICATION_INTERVAL_MS) {
    lastNotificationTimes.set(chainId, now);
    return true;
  }

  logger.log({
    level: 'info',
    message: `Subgraph notification rate limited for chain ${chainId}`,
    chainId,
    timeSinceLastNotification,
    intervalMs: NOTIFICATION_INTERVAL_MS,
  });

  return false;
};

/**
 * Format transaction hash for display (shortened)
 * @param txHash - full transaction hash
 * @returns shortened hash for display
 */
const formatTxHash = (txHash: string): string => {
  return `${txHash.slice(0, 8)}...${txHash.slice(-6)}`;
};

/**
 * Send subgraph failure notification to Telegram
 * @param chainId - chain identifier
 * @param txHash - transaction hash that failed
 * @param currentBlock - current blockchain block number
 * @param subgraphBlock - last block seen by subgraph (or null if no response)
 * @param error - error message
 * @param attempt - current attempt number
 * @param maxAttempts - maximum attempts
 * @returns true if message sent, false if skipped/failed
 */
export const sendSubgraphFailureNotification = async ({
  chainId,
  txHash,
  currentBlock,
  subgraphBlock,
  error,
  attempt,
  maxAttempts,
}: {
  chainId: string;
  txHash: string;
  currentBlock: bigint | null;
  subgraphBlock: bigint | null;
  error: string;
  attempt: number;
  maxAttempts: number;
}): Promise<boolean> => {
  // Check if notifications are enabled
  if (!ENABLE_SUBGRAPH_NOTIFICATIONS) {
    logger.log({
      level: 'info',
      message: 'Subgraph notifications disabled, skipping notification',
      chainId,
      txHash,
    });
    return false;
  }

  // Check if bot is initialized
  if (!bot || !TECH_ALERTS_CHAT_ID) {
    logger.log({
      level: 'warn',
      message: 'Telegram bot not configured, cannot send subgraph failure notification',
      chainId,
      txHash,
    });
    return false;
  }

  // Check rate limiting
  if (!shouldSendNotification(chainId)) {
    return false;
  }

  const networkName = CHAIN_ID_TO_NETWORK_NAME[chainId] || `Chain ${chainId}`;
  const formattedTxHash = formatTxHash(txHash);
  const currentBlockStr = currentBlock ? currentBlock.toString() : 'Unknown';
  const subgraphBlockStr = subgraphBlock ? subgraphBlock.toString() : 'No Response';

  // Format the error message to be more readable
  const sanitizedError = sanitizeMessage(error.slice(0, 200)); // Limit error length

  const message = `${testPrefix()}🚨 *SUBGRAPH SYNC FAILURE* 🚨

*Network:* ${sanitizeMessage(networkName)}
*Transaction:* \`${sanitizeMessage(formattedTxHash)}\`
*Current Block:* ${sanitizeMessage(currentBlockStr)}
*Subgraph Block:* ${sanitizeMessage(subgraphBlockStr)}
*Error:* ${sanitizedError}
*Attempts:* ${attempt}/${maxAttempts} \\(Final\\)`;

  try {
    await bot.sendMessage(TECH_ALERTS_CHAT_ID, message, {
      parse_mode: 'MarkdownV2',
      disable_web_page_preview: true,
    });

    logger.log({
      level: 'info',
      message: 'Subgraph failure notification sent successfully',
      chainId,
      txHash,
      chatId: TECH_ALERTS_CHAT_ID,
    });

    return true;
  } catch (telegramError) {
    logger.log({
      level: 'error',
      message: 'Failed to send subgraph failure notification',
      chainId,
      txHash,
      error: telegramError,
    });

    return false;
  }
};

/**
 * Get the last notification time for a chain (for testing/monitoring)
 * @param chainId - chain identifier
 * @returns timestamp of last notification or null
 */
export const getLastNotificationTime = (chainId: string): number | null => {
  return lastNotificationTimes.get(chainId) || null;
};

/**
 * Clear rate limiting for a chain (for testing)
 * @param chainId - chain identifier
 */
export const clearRateLimit = (chainId: string): void => {
  lastNotificationTimes.delete(chainId);
};