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
      // Setup: Create entity-based cache entries
      // Entity key is a Redis Set containing response IDs
      const entityKey = 'entity:mainnet_Hat:0x123'
      await redisClient.sadd(entityKey, 'response1', 'response2')

      // Response keys contain the actual cached data
      await redisClient.set('response:response1', 'data1')
      await redisClient.set('response:response2', 'data2')

      // Different entity that should not be affected
      await redisClient.set('response:different', 'data3')

      // Execute
      await cacheClient.invalidateEntity('1', 'tx123', 'mainnet_Hat', '0x123')

      // Verify: The entity key and its associated response keys should be deleted
      expect(await redisClient.exists(entityKey)).toBe(0)
      expect(await redisClient.get('response:response1')).toBeNull()
      expect(await redisClient.get('response:response2')).toBeNull()
      // The unrelated response key should still exist
      expect(await redisClient.get('response:different')).toBe('data3')
    })

    it('should handle empty scan results gracefully', async () => {
      // No matching keys in Redis
      
      // Should not throw when no keys match
      await expect(
        cacheClient.invalidateEntity('1', 'tx123', 'mainnet_Hat', '0x999')
      ).resolves.not.toThrow()
    })

    it('should batch delete operations when many keys are found', async () => {
      // Setup: Create entity with many associated response keys
      const entityKey = 'entity:mainnet_Hat:0x456'
      const responseIds: string[] = []

      for (let i = 0; i < 150; i++) {
        responseIds.push(`response${i}`)
      }

      // Add all response IDs to the entity set
      await redisClient.sadd(entityKey, ...responseIds)

      // Create all response keys
      for (let i = 0; i < 150; i++) {
        await redisClient.set(`response:response${i}`, `data${i}`)
      }

      // Execute - this should batch the deletes internally
      await cacheClient.invalidateEntity('1', 'tx123', 'mainnet_Hat', '0x456')

      // Verify entity key and all response keys were deleted
      expect(await redisClient.exists(entityKey)).toBe(0)
      for (let i = 0; i < 150; i++) {
        expect(await redisClient.get(`response:response${i}`)).toBeNull()
      }
    }, 30000)
  })

  describe('invalidateHatsInTree', () => {
    it('should invalidate all hats in a specific tree', async () => {
      const treeId = '0x00000001'
      const networkPrefix = 'Eth_' // Network ID '1' uses 'Eth_' entity prefix

      // Setup cache entries that simulate hat entries in a tree
      // The tree invalidation expects hat IDs in format: 0x{treeId without 0x}{56 more hex chars} = 66 chars total
      const hatId1 = `0x00000001${'0'.repeat(56)}`; // Tree 0x00000001 hat
      const hatId2 = `0x00000001${'1'.repeat(56)}`; // Tree 0x00000001 hat
      const hatId3 = `0x00000001${'2'.repeat(56)}`; // Tree 0x00000001 hat
      const differentTreeHatId = `0x00000002${'0'.repeat(56)}`; // Different tree

      // Create entity keys for hats in tree 0x00000001
      await redisClient.sadd(`entity:${networkPrefix}Hat:${hatId1}`, 'resp1')
      await redisClient.sadd(`entity:${networkPrefix}Hat:${hatId2}`, 'resp2')
      await redisClient.sadd(`entity:${networkPrefix}Hat:${hatId3}`, 'resp3')
      await redisClient.sadd(`entity:${networkPrefix}Hat:${differentTreeHatId}`, 'resp4')

      // Create response keys
      await redisClient.set('response:resp1', 'data1')
      await redisClient.set('response:resp2', 'data2')
      await redisClient.set('response:resp3', 'data3')
      await redisClient.set('response:resp4', 'data4')

      await cacheClient.invalidateHatsInTree('1', 'tx123', 'Eth_', treeId)

      // Tree-related keys should be deleted
      expect(await redisClient.exists(`entity:${networkPrefix}Hat:${hatId1}`)).toBe(0)
      expect(await redisClient.exists(`entity:${networkPrefix}Hat:${hatId2}`)).toBe(0)
      expect(await redisClient.exists(`entity:${networkPrefix}Hat:${hatId3}`)).toBe(0)
      expect(await redisClient.get('response:resp1')).toBeNull()
      expect(await redisClient.get('response:resp2')).toBeNull()
      expect(await redisClient.get('response:resp3')).toBeNull()

      // Different tree key should remain
      expect(await redisClient.exists(`entity:${networkPrefix}Hat:${differentTreeHatId}`)).toBe(1)
      expect(await redisClient.get('response:resp4')).toBe('data4')
    })

    it('should handle tree invalidation with no matching keys', async () => {
      const treeId = '0x99999999'

      // Should not throw when no keys match
      await expect(
        cacheClient.invalidateHatsInTree('1', 'tx123', 'Eth_', treeId)
      ).resolves.not.toThrow()
    })
  })

  describe('invalidateAllForNetwork', () => {
    it('should invalidate all cache entries for a specific network', async () => {
      // Setup: Add entity-based cache entries for multiple networks
      // Ethereum entities (network ID '1' uses 'Eth_' prefix)
      await redisClient.sadd('entity:Eth_Hat:0x123', 'ethresp1')
      await redisClient.sadd('entity:Eth_Wearer:0x456', 'ethresp2')

      // Other network entities
      await redisClient.sadd('entity:Op_Hat:0x789', 'opresp1')
      await redisClient.sadd('entity:Base_Tree:0xabc', 'baseresp1')

      // Response keys
      await redisClient.set('response:ethresp1', 'eth-data1')
      await redisClient.set('response:ethresp2', 'eth-data2')
      await redisClient.set('response:opresp1', 'op-data1')
      await redisClient.set('response:baseresp1', 'base-data1')
      await redisClient.set('response:other', 'other-data')

      // Execute: Invalidate all Ethereum cache entries
      const deletedCount = await cacheClient.invalidateAllForNetwork('1')

      // Verify: Only Ethereum entries should be deleted
      expect(deletedCount).toBe(2)
      expect(await redisClient.exists('entity:Eth_Hat:0x123')).toBe(0)
      expect(await redisClient.exists('entity:Eth_Wearer:0x456')).toBe(0)
      expect(await redisClient.get('response:ethresp1')).toBeNull()
      expect(await redisClient.get('response:ethresp2')).toBeNull()

      // Other networks should remain
      expect(await redisClient.exists('entity:Op_Hat:0x789')).toBe(1)
      expect(await redisClient.exists('entity:Base_Tree:0xabc')).toBe(1)
      expect(await redisClient.get('response:opresp1')).toBe('op-data1')
      expect(await redisClient.get('response:baseresp1')).toBe('base-data1')
      expect(await redisClient.get('response:other')).toBe('other-data')
    })

    it('should handle invalidation with no matching keys for network', async () => {
      // Setup: Add entity-based cache entries for other networks only
      await redisClient.sadd('entity:Op_Hat:0x123', 'opresp1')
      await redisClient.sadd('entity:Base_Tree:0x456', 'baseresp1')
      await redisClient.set('response:opresp1', 'op-data1')
      await redisClient.set('response:baseresp1', 'base-data1')

      // Execute: Try to invalidate Ethereum cache entries (should find none)
      const deletedCount = await cacheClient.invalidateAllForNetwork('1')

      // Verify: No entries deleted, other networks remain
      expect(deletedCount).toBe(0)
      expect(await redisClient.exists('entity:Op_Hat:0x123')).toBe(1)
      expect(await redisClient.exists('entity:Base_Tree:0x456')).toBe(1)
      expect(await redisClient.get('response:opresp1')).toBe('op-data1')
      expect(await redisClient.get('response:baseresp1')).toBe('base-data1')
    })

    it('should throw error for unsupported network ID', async () => {
      // Execute & Verify: Should throw for invalid network ID
      await expect(
        cacheClient.invalidateAllForNetwork('999')
      ).rejects.toThrow('Unsupported network ID: 999')
    })
  })
})