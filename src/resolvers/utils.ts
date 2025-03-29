import { NetworkConfig } from '../config/networks';
import {
  getWearersEligibility,
  getEnsName,
  getHatImage,
  isContract,
  getContractName,
  getHatStatus,
} from '../web3';
import axios from 'axios';

// Types for resolver parameters
export interface ResolverContext {
  [key: string]: any;
}

export interface ResolverInfo {
  [key: string]: any;
}

export interface ResolverRoot {
  id: string;
  [key: string]: any;
}

// Common resolver patterns
export const createEnsNameResolver = (network: NetworkConfig) => {
  return async (address: `0x${string}`): Promise<string | null> => {
    return getEnsName(network.chainId, address);
  };
};

export const createContractResolver = (network: NetworkConfig) => {
  return async (address: `0x${string}`): Promise<boolean> => {
    return isContract(network.chainId, address);
  };
};

export const createContractNameResolver = (network: NetworkConfig) => {
  return async (address: `0x${string}`): Promise<string | null> => {
    return getContractName(network.chainId, address);
  };
};

export const createIpfsResolver = async (
  ipfsUri: string
): Promise<string | null> => {
  if (!ipfsUri.startsWith('ipfs://')) return null;

  const cid = ipfsUri.slice(7);
  try {
    const res = await axios.get(
      `${process.env.PINATA_GATEWAY_URL}${cid}?pinataGatewayToken=${process.env.PINATA_GATEWAY_TOKEN}`,
      { timeout: 12000 }
    );
    return res.status === 200 ? JSON.stringify(res.data) : null;
  } catch (err) {
    return null;
  }
};

export const createImageValidator = async (
  imageUri: string
): Promise<boolean> => {
  try {
    const url = imageUri.startsWith('ipfs://')
      ? `${process.env.PINATA_GATEWAY_URL}${imageUri.slice(
          7
        )}?pinataGatewayToken=${process.env.PINATA_GATEWAY_TOKEN}`
      : imageUri;

    const res = await axios.head(url, { timeout: 7000 });
    return res.headers['content-type']?.startsWith('image/') ?? false;
  } catch (err) {
    return false;
  }
};

export const createEligibilityChecker = (network: NetworkConfig) => {
  return async (
    hatId: string,
    wearers: Array<{ id: string }>
  ): Promise<string[]> => {
    const wearersEligibility = await getWearersEligibility(
      network.chainId,
      BigInt(hatId),
      wearers.map((w) => w.id as `0x${string}`)
    );

    return wearers
      .filter((w) => wearersEligibility[w.id as `0x${string}`] === true)
      .map((w) => w.id);
  };
};

export const createHatStatusResolver = (network: NetworkConfig) => {
  return async (hatId: string): Promise<boolean> => {
    return getHatStatus(network.chainId, BigInt(hatId));
  };
};

export const createHatImageResolver = (network: NetworkConfig) => {
  return async (hatId: string): Promise<string> => {
    return getHatImage(network.chainId, BigInt(hatId));
  };
};
