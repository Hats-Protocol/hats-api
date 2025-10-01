import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { RedisCacheClient } from '../../src/redis'
import { Redis } from 'ioredis'

describe('RedisCacheClient', () => {
  let cacheClient: RedisCacheClient
  let redisClient: Redis

  beforeEach(async () => {
    cacheClient = new RedisCacheClient()
    redisClient = cacheClient.getRedisClient()
    // Clear all data before each test
    await redisClient.flushall()
  })

  afterEach(async () => {
    // Clean up after each test
    await redisClient.flushall()
    await redisClient.quit()
  })

  describe('Connection', () => {
    it('should connect to Redis successfully', async () => {
      const pong = await redisClient.ping()
      expect(pong).toBe('PONG')
    })

    it('should set and get values', async () => {
      await redisClient.set('test-key', 'test-value')
      const value = await redisClient.get('test-key')
      expect(value).toBe('test-value')
    })
  })

  describe('invalidateEntity', () => {
    it('should invalidate entity with matching cache keys', async () => {
      // Setup: Add cache entries that contain the entity pattern
      await redisClient.set('response-cache:mainnet_Hat.0x123:query1', 'data1')
      await redisClient.set('response-cache:query2:mainnet_Hat.0x123', 'data2')
      await redisClient.set('response-cache:different:query', 'data3')

      // Execute
      await cacheClient.invalidateEntity('1', 'tx123', 'mainnet_Hat', '0x123')

      // Verify: The keys containing the entity pattern should have been deleted
      expect(await redisClient.get('response-cache:mainnet_Hat.0x123:query1')).toBeNull()
      expect(await redisClient.get('response-cache:query2:mainnet_Hat.0x123')).toBeNull()
      // The unmatched key should still exist
      expect(await redisClient.get('response-cache:different:query')).toBe('data3')
    })

    it('should handle empty scan results gracefully', async () => {
      // No matching keys in Redis
      
      // Should not throw when no keys match
      await expect(
        cacheClient.invalidateEntity('1', 'tx123', 'mainnet_Hat', '0x999')
      ).resolves.not.toThrow()
    })

    it('should batch delete operations when many keys are found', async () => {
      // Setup many cache entries that contain the entity pattern
      for (let i = 0; i < 150; i++) {
        await redisClient.set(`response-cache:mainnet_Hat.0x456:query${i}`, `data${i}`)
      }

      // Execute - this should batch the deletes internally
      await cacheClient.invalidateEntity('1', 'tx123', 'mainnet_Hat', '0x456')

      // Verify all matching keys were deleted
      for (let i = 0; i < 150; i++) {
        expect(await redisClient.get(`response-cache:mainnet_Hat.0x456:query${i}`)).toBeNull()
      }
    }, 30000)
  })

  describe('invalidateHatsInTree', () => {
    it('should invalidate all hats in a specific tree', async () => {
      const treeId = '0x00000001'
      
      // Setup cache entries that simulate hat entries in a tree
      // The tree invalidation expects hat IDs in format: 0x{treeId without 0x}{56 more hex chars} = 66 chars total
      const hatId1 = `0x00000001${'0'.repeat(56)}`; // Tree 0x00000001 hat
      const hatId2 = `0x00000001${'1'.repeat(56)}`; // Tree 0x00000001 hat
      const hatId3 = `0x00000001${'2'.repeat(56)}`; // Tree 0x00000001 hat  
      const differentTreeHatId = `0x00000002${'0'.repeat(56)}`; // Different tree
      
      await redisClient.set(`response-cache:mainnet_Hat.${hatId1}:query1`, 'data1')
      await redisClient.set(`response-cache:query2:mainnet_Hat.${hatId2}`, 'data2')
      await redisClient.set(`response-cache:mainnet_Hat.${hatId3}:another`, 'data3')
      await redisClient.set(`response-cache:mainnet_Hat.${differentTreeHatId}:query`, 'data4') // Different tree

      await cacheClient.invalidateHatsInTree('1', 'tx123', 'mainnet', treeId)

      // Tree-related keys should be deleted
      expect(await redisClient.get(`response-cache:mainnet_Hat.${hatId1}:query1`)).toBeNull()
      expect(await redisClient.get(`response-cache:query2:mainnet_Hat.${hatId2}`)).toBeNull()
      expect(await redisClient.get(`response-cache:mainnet_Hat.${hatId3}:another`)).toBeNull()
      // Different tree key should remain
      expect(await redisClient.get(`response-cache:mainnet_Hat.${differentTreeHatId}:query`)).toBe('data4')
    })

    it('should handle tree invalidation with no matching keys', async () => {
      const treeId = '0x99999999'

      // Should not throw when no keys match
      await expect(
        cacheClient.invalidateHatsInTree('1', 'tx123', 'mainnet', treeId)
      ).resolves.not.toThrow()
    })
  })

  describe('invalidateAllForNetwork', () => {
    it('should invalidate all cache entries for a specific network', async () => {
      // Setup: Add cache entries for multiple networks
      await redisClient.set('response-cache:hash1:Eth_Hat.0x123:query1', 'eth-data1')
      await redisClient.set('response-cache:hash2:Eth_Wearer.0x456:query2', 'eth-data2')
      await redisClient.set('response-cache:hash3:Op_Hat.0x789:query3', 'op-data1')
      await redisClient.set('response-cache:hash4:Base_Tree.0xabc:query4', 'base-data1')
      await redisClient.set('response-cache:hash5:non-network:query5', 'other-data')

      // Execute: Invalidate all Ethereum cache entries
      const deletedCount = await cacheClient.invalidateAllForNetwork('1')

      // Verify: Only Ethereum entries should be deleted
      expect(deletedCount).toBe(2)
      expect(await redisClient.get('response-cache:hash1:Eth_Hat.0x123:query1')).toBeNull()
      expect(await redisClient.get('response-cache:hash2:Eth_Wearer.0x456:query2')).toBeNull()
      // Other networks should remain
      expect(await redisClient.get('response-cache:hash3:Op_Hat.0x789:query3')).toBe('op-data1')
      expect(await redisClient.get('response-cache:hash4:Base_Tree.0xabc:query4')).toBe('base-data1')
      expect(await redisClient.get('response-cache:hash5:non-network:query5')).toBe('other-data')
    })

    it('should handle invalidation with no matching keys for network', async () => {
      // Setup: Add cache entries for other networks only
      await redisClient.set('response-cache:hash1:Op_Hat.0x123:query1', 'op-data1')
      await redisClient.set('response-cache:hash2:Base_Tree.0x456:query2', 'base-data1')

      // Execute: Try to invalidate Ethereum cache entries (should find none)
      const deletedCount = await cacheClient.invalidateAllForNetwork('1')

      // Verify: No entries deleted, other networks remain
      expect(deletedCount).toBe(0)
      expect(await redisClient.get('response-cache:hash1:Op_Hat.0x123:query1')).toBe('op-data1')
      expect(await redisClient.get('response-cache:hash2:Base_Tree.0x456:query2')).toBe('base-data1')
    })

    it('should throw error for unsupported network ID', async () => {
      // Execute & Verify: Should throw for invalid network ID
      await expect(
        cacheClient.invalidateAllForNetwork('999')
      ).rejects.toThrow('Unsupported network ID: 999')
    })
  })
})