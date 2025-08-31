import logger from "./log";

export interface RetryOptions {
  maxAttempts: number;
  baseDelay: number;
  maxDelay?: number;
  backoffFactor?: number;
  retryCondition?: (error: any) => boolean;
}

export interface RetryState {
  attempt: number;
  lastError: any;
  totalDelay: number;
}

export const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const calculateDelay = (
  attempt: number,
  baseDelay: number,
  backoffFactor: number = 2,
  maxDelay: number = 30000
): number => {
  const exponentialDelay = baseDelay * Math.pow(backoffFactor, attempt - 1);
  const jitter = Math.random() * 0.1 * exponentialDelay;
  return Math.min(exponentialDelay + jitter, maxDelay);
};

export const defaultRetryCondition = (error: any): boolean => {
  // Retry on network errors, timeouts, and temporary failures
  if (typeof error === 'string') {
    const errorLower = error.toLowerCase();
    return (
      errorLower.includes('timeout') ||
      errorLower.includes('network') ||
      errorLower.includes('connection') ||
      errorLower.includes('socket') ||
      errorLower.includes('econnreset') ||
      errorLower.includes('enotfound')
    );
  }
  
  if (error?.code) {
    const retryableCodes = [
      'TIMEOUT',
      'NETWORK_ERROR',
      'CONNECTION_REFUSED',
      'ECONNRESET',
      'ENOTFOUND',
      'ETIMEDOUT',
      'ECONNABORTED'
    ];
    return retryableCodes.includes(error.code);
  }
  
  if (error?.response?.status) {
    // Retry on 5xx server errors and 429 rate limiting
    return error.response.status >= 500 || error.response.status === 429;
  }
  
  return false;
};

export async function retryAsync<T>(
  operation: () => Promise<T>,
  options: RetryOptions,
  context?: string
): Promise<T> {
  const {
    maxAttempts,
    baseDelay,
    maxDelay = 30000,
    backoffFactor = 2,
    retryCondition = defaultRetryCondition
  } = options;
  
  let lastError: any;
  
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const result = await operation();
      if (attempt > 1 && context) {
        logger.log({
          level: "info",
          message: `${context}: succeeded on attempt ${attempt}`,
        });
      }
      return result;
    } catch (error) {
      lastError = error;
      
      if (attempt === maxAttempts || !retryCondition(error)) {
        if (context) {
          logger.log({
            level: "error",
            message: `${context}: failed after ${attempt} attempts`,
            error: error,
          });
        }
        throw error;
      }
      
      const delay = calculateDelay(attempt, baseDelay, backoffFactor, maxDelay);
      
      if (context) {
        logger.log({
          level: "warn",
          message: `${context}: attempt ${attempt} failed, retrying in ${delay}ms`,
          error: error,
        });
      }
      
      await sleep(delay);
    }
  }
  
  throw lastError;
}

export class CircuitBreaker {
  private failures: number = 0;
  private lastFailureTime: number = 0;
  private state: 'CLOSED' | 'OPEN' | 'HALF_OPEN' = 'CLOSED';
  
  constructor(
    private readonly failureThreshold: number = 5,
    private readonly timeout: number = 60000,
    private readonly context: string = 'CircuitBreaker'
  ) {}
  
  async execute<T>(operation: () => Promise<T>): Promise<T> {
    if (this.state === 'OPEN') {
      if (Date.now() - this.lastFailureTime < this.timeout) {
        throw new Error(`${this.context}: Circuit breaker is OPEN`);
      }
      this.state = 'HALF_OPEN';
    }
    
    try {
      const result = await operation();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }
  
  private onSuccess(): void {
    this.failures = 0;
    this.state = 'CLOSED';
  }
  
  private onFailure(): void {
    this.failures++;
    this.lastFailureTime = Date.now();
    
    if (this.failures >= this.failureThreshold) {
      this.state = 'OPEN';
      logger.log({
        level: "error",
        message: `${this.context}: Circuit breaker opened after ${this.failures} failures`,
      });
    }
  }
  
  getState(): string {
    return this.state;
  }
  
  getFailures(): number {
    return this.failures;
  }
}