import { describe, it, expect, beforeEach, vi } from "vitest";
import { createDataLoaders } from "../../src/data-loaders";
import * as web3 from "../../src/web3";

// Mock the web3 module
vi.mock("../../src/web3", () => ({
  getHatImages: vi.fn(),
}));

describe("DataLoaders", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("createDataLoaders", () => {
    it("should batch multiple requests within the same tick", async () => {
      const mockGetHatImages = vi.mocked(web3.getHatImages);
      const chainId = "1";
      const hatId1 = BigInt("0x00000001000000000000000000000000000000000000000000000000");
      const hatId2 = BigInt("0x00000002000000000000000000000000000000000000000000000000");
      const hatId3 = BigInt("0x00000003000000000000000000000000000000000000000000000000");

      // Mock the batched response
      mockGetHatImages.mockResolvedValue([
        "ipfs://image1",
        "ipfs://image2",
        "ipfs://image3",
      ]);

      const dataLoaders = createDataLoaders();
      const loader = dataLoaders.hatImages[chainId];

      // Make three requests simultaneously
      const results = await Promise.all([
        loader.load(hatId1),
        loader.load(hatId2),
        loader.load(hatId3),
      ]);

      // Verify all requests were batched into a single call
      expect(mockGetHatImages).toHaveBeenCalledTimes(1);
      expect(mockGetHatImages).toHaveBeenCalledWith(chainId, [
        hatId1,
        hatId2,
        hatId3,
      ]);

      // Verify correct results
      expect(results).toEqual(["ipfs://image1", "ipfs://image2", "ipfs://image3"]);
    });

    it("should cache results and not make duplicate requests", async () => {
      const mockGetHatImages = vi.mocked(web3.getHatImages);
      const chainId = "1";
      const hatId = BigInt("0x00000001000000000000000000000000000000000000000000000000");

      mockGetHatImages.mockResolvedValue(["ipfs://image1"]);

      const dataLoaders = createDataLoaders();
      const loader = dataLoaders.hatImages[chainId];

      // Make the same request twice
      const result1 = await loader.load(hatId);
      const result2 = await loader.load(hatId);

      // Should only call the underlying function once
      expect(mockGetHatImages).toHaveBeenCalledTimes(1);
      expect(result1).toBe(result2);
      expect(result1).toBe("ipfs://image1");
    });

    it("should handle different chains separately", async () => {
      const mockGetHatImages = vi.mocked(web3.getHatImages);
      const hatId = BigInt("0x00000001000000000000000000000000000000000000000000000000");

      mockGetHatImages
        .mockResolvedValueOnce(["ipfs://mainnet-image"])
        .mockResolvedValueOnce(["ipfs://polygon-image"]);

      const dataLoaders = createDataLoaders();
      const mainnetLoader = dataLoaders.hatImages["1"];
      const polygonLoader = dataLoaders.hatImages["137"];

      const [mainnetResult, polygonResult] = await Promise.all([
        mainnetLoader.load(hatId),
        polygonLoader.load(hatId),
      ]);

      // Should make separate calls for different chains
      expect(mockGetHatImages).toHaveBeenCalledTimes(2);
      expect(mockGetHatImages).toHaveBeenCalledWith("1", [hatId]);
      expect(mockGetHatImages).toHaveBeenCalledWith("137", [hatId]);

      expect(mainnetResult).toBe("ipfs://mainnet-image");
      expect(polygonResult).toBe("ipfs://polygon-image");
    });

    it("should isolate caches between different DataLoader instances", async () => {
      const mockGetHatImages = vi.mocked(web3.getHatImages);
      const chainId = "1";
      const hatId = BigInt("0x00000001000000000000000000000000000000000000000000000000");

      mockGetHatImages.mockResolvedValue(["ipfs://image1"]);

      // Create two separate DataLoader instances (simulating two different requests)
      const dataLoaders1 = createDataLoaders();
      const dataLoaders2 = createDataLoaders();

      // First instance
      await dataLoaders1.hatImages[chainId].load(hatId);
      expect(mockGetHatImages).toHaveBeenCalledTimes(1);

      // Second instance should make a new call (separate cache)
      await dataLoaders2.hatImages[chainId].load(hatId);
      expect(mockGetHatImages).toHaveBeenCalledTimes(2);
    });

    it("should handle empty results gracefully", async () => {
      const mockGetHatImages = vi.mocked(web3.getHatImages);
      const chainId = "1";
      const hatId = BigInt("0x00000001000000000000000000000000000000000000000000000000");

      mockGetHatImages.mockResolvedValue([""]);

      const dataLoaders = createDataLoaders();
      const loader = dataLoaders.hatImages[chainId];
      const result = await loader.load(hatId);

      expect(result).toBe("");
    });
  });
});
