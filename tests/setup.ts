import { vi, beforeAll, afterEach } from 'vitest'
import dotenv from 'dotenv'
import { Redis } from 'ioredis'

// Load environment variables for tests
dotenv.config({ path: '.env.test' })

// Ensure test environment is set
process.env.NODE_ENV = 'test'

// Check Redis availability before running any tests
beforeAll(async () => {
  const redisConfig = {
    port: Number(process.env.REDIS_PORT || 6380),
    host: process.env.REDIS_HOST || 'localhost',
    password: process.env.REDIS_PASSWORD || 'testpassword123',
    retryStrategy: () => null, // Don't retry, fail fast
    lazyConnect: true,
    connectTimeout: 3000,
  }

  const client = new Redis(redisConfig)

  try {
    await client.connect()
    const result = await client.ping()
    if (result !== 'PONG') {
      throw new Error('Redis did not respond with PONG')
    }
    await client.quit()
  } catch (error) {
    await client.quit().catch(() => { })
    console.error('\n❌ Redis is not available for tests')
    console.error(`   Expected Redis on ${redisConfig.host}:${redisConfig.port}`)
    console.error('\n   To start Redis test container, run:')
    console.error('   pnpm test:redis:start')
    console.error('\n   Or run tests with Redis included:')
    console.error('   pnpm test:with-redis\n')
    throw new Error('Redis is not running. Please start the Redis test container.')
  }
}, 10000) // 10 second timeout for setup

// Mock Winston logger to avoid console noise during tests
vi.mock('../src/log', () => ({
  default: {
    log: vi.fn(),
    info: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
    debug: vi.fn(),
  }
}))

// Global test cleanup
afterEach(() => {
  vi.clearAllMocks()
})