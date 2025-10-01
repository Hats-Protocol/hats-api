import { describe, it, expect, vi, beforeEach } from 'vitest';
import { sendSubgraphFailureNotification, getLastNotificationTime, clearRateLimit } from '../../src/telegram-notifier';

// Mock node-telegram-bot-api
vi.mock('node-telegram-bot-api', () => {
  const mockBot = {
    sendMessage: vi.fn(),
  };

  return {
    default: vi.fn(() => mockBot),
  };
});

// Mock environment variables
const mockEnv = {
  TELEGRAM_BOT_TOKEN: 'test-token',
  TECH_ALERTS_CHAT_ID: 'test-chat-id',
  ENABLE_SUBGRAPH_NOTIFICATIONS: 'true',
  NODE_ENV: 'test',
};

describe('telegram-notifier', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    // Set up environment variables
    Object.entries(mockEnv).forEach(([key, value]) => {
      process.env[key] = value;
    });

    // Clear rate limits for all tests
    clearRateLimit('1');
    clearRateLimit('137');
  });

  it('should send subgraph failure notification successfully', async () => {
    const TelegramBot = await import('node-telegram-bot-api');
    const mockSendMessage = vi.fn().mockResolvedValue({ message_id: 123 });

    // Mock the bot instance
    (TelegramBot.default as any).mockImplementation(() => ({
      sendMessage: mockSendMessage,
    }));

    // Clear module cache to reload with new mocks
    vi.resetModules();
    const { sendSubgraphFailureNotification } = await import('../../src/telegram-notifier');

    const result = await sendSubgraphFailureNotification({
      chainId: '1',
      txHash: '0x1234567890123456789012345678901234567890',
      currentBlock: BigInt(18000000),
      subgraphBlock: BigInt(17999950),
      error: 'Timeout waiting for block sync',
      attempt: 3,
      maxAttempts: 3,
    });

    expect(result).toBe(true);
    expect(mockSendMessage).toHaveBeenCalledWith(
      'test-chat-id',
      expect.stringContaining('🚨 *SUBGRAPH SYNC FAILURE* 🚨'),
      {
        parse_mode: 'MarkdownV2',
        disable_web_page_preview: true,
      }
    );

    // Check that the message contains expected content
    const sentMessage = mockSendMessage.mock.calls[0][1];
    expect(sentMessage).toContain('Ethereum');
    expect(sentMessage).toContain('0x123456\\.\\.\\.567890'); // Escaped for Telegram
    expect(sentMessage).toContain('18000000');
    expect(sentMessage).toContain('17999950');
    expect(sentMessage).toContain('3/3');
  });

  it('should handle rate limiting correctly', async () => {
    const TelegramBot = await import('node-telegram-bot-api');
    const mockSendMessage = vi.fn().mockResolvedValue({ message_id: 123 });

    // Mock the bot instance
    (TelegramBot.default as any).mockImplementation(() => ({
      sendMessage: mockSendMessage,
    }));

    // Clear module cache to reload with new mocks
    vi.resetModules();
    const { sendSubgraphFailureNotification, getLastNotificationTime } = await import('../../src/telegram-notifier');

    const notificationParams = {
      chainId: '1',
      txHash: '0x1234567890123456789012345678901234567890',
      currentBlock: BigInt(18000000),
      subgraphBlock: null,
      error: 'Subgraph timeout',
      attempt: 3,
      maxAttempts: 3,
    };

    // First notification should go through
    const result1 = await sendSubgraphFailureNotification(notificationParams);
    expect(result1).toBe(true);
    expect(mockSendMessage).toHaveBeenCalledTimes(1);

    // Second notification should be rate limited
    const result2 = await sendSubgraphFailureNotification(notificationParams);
    expect(result2).toBe(false);
    expect(mockSendMessage).toHaveBeenCalledTimes(1); // Still only called once

    // Check that last notification time was recorded
    const lastTime = getLastNotificationTime('1');
    expect(lastTime).toBeTypeOf('number');
    expect(lastTime).toBeGreaterThan(Date.now() - 5000); // Within last 5 seconds
  });

  it('should skip notifications when disabled', async () => {
    process.env.ENABLE_SUBGRAPH_NOTIFICATIONS = 'false';

    // Clear module cache to reload with new env vars
    vi.resetModules();
    const { sendSubgraphFailureNotification } = await import('../../src/telegram-notifier');

    const result = await sendSubgraphFailureNotification({
      chainId: '1',
      txHash: '0x1234567890123456789012345678901234567890',
      currentBlock: BigInt(18000000),
      subgraphBlock: BigInt(17999950),
      error: 'Test error',
      attempt: 3,
      maxAttempts: 3,
    });

    expect(result).toBe(false);
  });

  it('should handle missing telegram credentials gracefully', async () => {
    delete process.env.TELEGRAM_BOT_TOKEN;
    delete process.env.TECH_ALERTS_CHAT_ID;

    // Clear module cache to reload with new env vars
    vi.resetModules();
    const { sendSubgraphFailureNotification } = await import('../../src/telegram-notifier');

    const result = await sendSubgraphFailureNotification({
      chainId: '1',
      txHash: '0x1234567890123456789012345678901234567890',
      currentBlock: BigInt(18000000),
      subgraphBlock: null,
      error: 'Test error',
      attempt: 3,
      maxAttempts: 3,
    });

    expect(result).toBe(false);
  });

  it('should format message correctly for subgraph with no response', async () => {
    const TelegramBot = await import('node-telegram-bot-api');
    const mockSendMessage = vi.fn().mockResolvedValue({ message_id: 123 });

    // Mock the bot instance
    (TelegramBot.default as any).mockImplementation(() => ({
      sendMessage: mockSendMessage,
    }));

    // Clear module cache to reload with new mocks
    vi.resetModules();
    const { sendSubgraphFailureNotification } = await import('../../src/telegram-notifier');

    await sendSubgraphFailureNotification({
      chainId: '137', // Polygon
      txHash: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
      currentBlock: BigInt(50000000),
      subgraphBlock: null, // No response from subgraph
      error: 'Connection timeout',
      attempt: 3,
      maxAttempts: 3,
    });

    const sentMessage = mockSendMessage.mock.calls[0][1];
    expect(sentMessage).toContain('Polygon');
    expect(sentMessage).toContain('0xabcdef\\.\\.\\.efabcd'); // Escaped for Telegram
    expect(sentMessage).toContain('50000000');
    expect(sentMessage).toContain('No Response');
  });
});