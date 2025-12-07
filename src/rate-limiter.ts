import Bottleneck from "bottleneck";
import { CHAIN_ID_TO_HTTP_URL } from "./constants";
import logger from "./log";

// Rate limiter configuration per chain
// QuickNode free tier: ~25 requests/second
// We'll be conservative: 10 requests/second with some reservoir
const RATE_LIMIT_CONFIG = {
  maxConcurrent: 5, // Max concurrent requests
  minTime: 100, // Minimum time between requests (100ms = 10 req/sec)
  reservoir: 50, // Initial burst capacity
  reservoirRefreshAmount: 50, // Refill amount
  reservoirRefreshInterval: 5000, // Refill every 5 seconds
};

// Create a rate limiter for each chain
export const chainRateLimiters: Record<string, Bottleneck> = {};

export const getRateLimiter = (chainId: string): Bottleneck => {
  if (!chainRateLimiters[chainId]) {
    chainRateLimiters[chainId] = new Bottleneck({
      ...RATE_LIMIT_CONFIG,
      id: `chain-${chainId}`,
    });

    // Log when rate limiting occurs
    chainRateLimiters[chainId].on("depleted", () => {
      logger.log({
        level: "warn",
        message: `Rate limiter depleted for chain ${chainId}, requests will be queued`,
        chainId,
      });
    });

    chainRateLimiters[chainId].on("error", (error) => {
      logger.log({
        level: "error",
        message: `Rate limiter error for chain ${chainId}`,
        chainId,
        error,
      });
    });
  }

  return chainRateLimiters[chainId];
};

// Initialize rate limiters for all supported chains
export const initializeRateLimiters = () => {
  Object.keys(CHAIN_ID_TO_HTTP_URL).forEach((chainId) => {
    getRateLimiter(chainId);
  });
  logger.log({
    level: "info",
    message: `Initialized rate limiters for ${Object.keys(chainRateLimiters).length} chains`,
  });
};

// Helper to wrap async functions with rate limiting
export const withRateLimit = <T extends any[], R>(
  chainId: string,
  fn: (...args: T) => Promise<R>
) => {
  const limiter = getRateLimiter(chainId);
  return (...args: T): Promise<R> => {
    return limiter.schedule(() => fn(...args));
  };
};
