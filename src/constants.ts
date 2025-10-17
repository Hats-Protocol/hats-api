import { parseAbi } from 'viem';
import {
  mainnet,
  optimism,
  gnosis,
  celo,
  base,
  sepolia,
  arbitrum,
  polygon,
  baseSepolia,
} from 'viem/chains';
import type { Chain } from 'viem';
import { HATS_ABI } from '@hatsprotocol/sdk-v1-core';

export { HATS_ABI };

export const CHAIN_ID_TO_SOCKET_URL: { [key: string]: string } = {
  1: process.env.ETHEREUM_SOCKET_URL as string,
  10: process.env.OPTIMISM_SOCKET_URL as string,
  42161: process.env.ARBITRUM_SOCKET_URL as string,
  100: process.env.GNOSIS_SOCKET_URL as string,
  8453: process.env.BASE_SOCKET_URL as string,
  42220: process.env.CELO_SOCKET_URL as string,
  11155111: process.env.SEPOLIA_SOCKET_URL as string,
  137: process.env.POLYGON_SOCKET_URL as string,
  84532: process.env.BASE_SEPOLIA_SOCKET_URL as string,
};

export const CHAIN_ID_TO_HTTP_URL: { [key: string]: string } = {
  1: process.env.ETHEREUM_HTTP_URL as string,
  10: process.env.OPTIMISM_HTTP_URL as string,
  42161: process.env.ARBITRUM_HTTP_URL as string,
  100: process.env.GNOSIS_HTTP_URL as string,
  8453: process.env.BASE_HTTP_URL as string,
  42220: process.env.CELO_HTTP_URL as string,
  11155111: process.env.SEPOLIA_HTTP_URL as string,
  137: process.env.POLYGON_HTTP_URL as string,
  84532: process.env.BASE_SEPOLIA_HTTP_URL as string,
};

export const CHAIN_ID_TO_ENTITY_PREFIX: { [key: string]: string } = {
  1: 'Eth',
  10: 'Op',
  42161: 'Arb',
  100: 'Gno',
  8453: 'Base',
  42220: 'Celo',
  11155111: 'Sep',
  137: 'Pol',
  84532: 'BaseSep',
};

export const CHAIN_ID_TO_NETWORK_NAME: { [key: string]: string } = {
  1: 'Ethereum',
  10: 'Optimism',
  42161: 'Arbitrum',
  100: 'Gnosis',
  8453: 'Base',
  42220: 'Celo',
  11155111: 'Sepolia',
  137: 'Polygon',
  84532: 'Base Sepolia',
};

export const CHAIN_ID_TO_VIEM_CHAIN: { [key: string]: Chain } = {
  1: mainnet,
  10: optimism,
  42161: arbitrum,
  100: gnosis,
  8453: base,
  42220: celo,
  11155111: sepolia,
  137: polygon,
  84532: baseSepolia,
};

const GATEWAY_URL = `https://gateway.thegraph.com/api`;
const gatewayNetworkUrl = (id: string) => {
  return `${GATEWAY_URL}/subgraphs/id/${id}`; // ! USES SUBGRAPH ID, NOT DEPLOYMENT
};

export const CHAIN_ID_TO_MAIN_SUBGRAPH: { [key: string]: string } = {
  1: gatewayNetworkUrl('AtrhAMCcVfPbmejxTez3G59Kdfu5tMFoiPsTUjdCzpKx'),
  10: gatewayNetworkUrl('9nmXXk3ysDVY4sFygWQNQknwiJLCPnrUNzDRw8bxw61q'),
  42161: gatewayNetworkUrl('4CiXQPjzKshBbyK2dgJiknTNWcj8cGUJsopTsXfm5HEk'),
  100: gatewayNetworkUrl('2VPQUuAeS9Xy8VtinpjHRJEMnZS1sqzFQyCHAys1wb5n'),
  42220: gatewayNetworkUrl('GpKseh3Z4nX2X8W5HjQPp5hpSSxPxsaQ3t1KpEjhvz7t'),
  137: gatewayNetworkUrl('7MxsRb1p4UQNET8AgrWd93h3GUgeQ7NWrk5SHLEPCxBP'),
  8453: gatewayNetworkUrl('FWeAqrp36QYqv9gDWLwr7em8vtvPnPrmRRQgnBb6QbBs'),
  // testnets
  11155111: gatewayNetworkUrl('GphqDnDUibK3keP5vNSDgnKxidvLKtdM7j9FA1Lpe6sX'),
  84532: gatewayNetworkUrl('ErLvK6LwwsxkRqd8jvDJ258qfxn1hXhjFGnX78rq1g45'),
};

export const CHAIN_TO_ETHERSCAN_API: { [key: string]: string } = {
  1: 'https://api.etherscan.io/api',
  10: 'https://api-optimistic.etherscan.io/api',
  100: 'https://api.gnosisscan.io/api',
  137: 'https://api.polygonscan.com/api',
  8453: 'https://api.basescan.org/api',
  42161: 'https://api.arbiscan.io/api',
  42220: 'https://api.celoscan.io/api',
  11155111: 'https://api-sepolia.etherscan.io/api',
  84532: 'https://api-sepolia.basescan.org/api',
};

export const CHAIN_TO_ETHERSCAN_API_KEY: { [key: string]: string } = {
  1: process.env.ETHERSCAN_API_KEY as string,
  10: process.env.OPSCAN_API_KEY as string,
  100: process.env.GNOSISSCAN_API_KEY as string,
  137: process.env.POLYGONSCAN_API_KEY as string,
  8453: process.env.BASESCAN_API_KEY as string,
  42161: process.env.ARBISCAN_API_KEY as string,
  42220: process.env.CELOSCAN_API_KEY as string,
  11155111: process.env.ETHERSCAN_API_KEY as string,
  84532: process.env.BASESCAN_API_KEY as string,
};

export const HATS_ADDRESS = '0x3bc1A0Ad72417f2d411118085256fC53CBdDd137';
export const MODULE_PROXY_FACTORY_ADDRESS = '0x000000000000aDdB49795b0f9bA5BC298cDda236';
export const HSG_V2_IMPLEMENTATION = '0x148057884AC910Bdd93693F230C5c35a8c47CA3b';

// Timeout configuration
export const TRANSACTION_PROCESSING_TIMEOUT = parseInt(process.env.TRANSACTION_PROCESSING_TIMEOUT || '60000');
export const SUBGRAPH_SYNC_TIMEOUT = parseInt(process.env.SUBGRAPH_SYNC_TIMEOUT || '30000');
export const WEBSOCKET_RETRY_ATTEMPTS = parseInt(process.env.WEBSOCKET_RETRY_ATTEMPTS || '3');
export const WEBSOCKET_RETRY_DELAY = parseInt(process.env.WEBSOCKET_RETRY_DELAY || '30000');

// Chain-specific optimizations for high-volume networks
export const HIGH_VOLUME_CHAINS = new Set(['100', '8453', '137']); // Gnosis, Base, Polygon
export const CHAIN_SPECIFIC_CONFIG: Record<string, {
  useWebSocket: boolean;
  pollingInterval?: number; // in milliseconds
  transactionTimeout?: number; // in milliseconds
}> = {
  '100': { // Gnosis - 5 second blocks
    useWebSocket: false,
    pollingInterval: 30000, // Poll every 30 seconds instead of watching every block
    transactionTimeout: 20000,
  },
  '8453': { // Base - 2 second blocks
    useWebSocket: false,
    pollingInterval: 30000, // Poll every 30 seconds
    transactionTimeout: 15000,
  },
  '137': { // Polygon - fast blocks
    useWebSocket: false,
    pollingInterval: 30000, // Poll every 30 seconds
    transactionTimeout: 20000,
  },
  // Low-volume chains use WebSocket by default
  '1': { useWebSocket: true }, // Ethereum Mainnet
  '10': { useWebSocket: true }, // Optimism
  '42161': { useWebSocket: true }, // Arbitrum
  '42220': { useWebSocket: true }, // Celo
  '11155111': { useWebSocket: true }, // Sepolia
  '84532': { useWebSocket: true }, // Base Sepolia
};

export const CLAIMS_HATTER_EVENTS = parseAbi([
  'event HatsClaimabilitySet(uint256[] hatIds, uint8[] claimTypes)',
  'event HatClaimabilitySet(uint256 hatId, uint8 claimType)',
]);

export const MODULE_PROXY_FACTORY_EVENTS = parseAbi([
  'event ModuleProxyCreation(address indexed proxy, address indexed masterCopy)',
]);

// TODO export from @hatsprotocol/sdk-v1-core
export const HATS_EVENTS = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'hatId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'newDetails',
        type: 'string',
      },
    ],
    name: 'HatDetailsChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'details',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'maxSupply',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'eligibility',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'toggle',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'mutable_',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'imageURI',
        type: 'string',
      },
    ],
    name: 'HatCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'hatId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'newDetails',
        type: 'string',
      },
    ],
    name: 'HatDetailsChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'hatId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newEligibility',
        type: 'address',
      },
    ],
    name: 'HatEligibilityChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'hatId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'newImageURI',
        type: 'string',
      },
    ],
    name: 'HatImageURIChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'hatId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'newMaxSupply',
        type: 'uint32',
      },
    ],
    name: 'HatMaxSupplyChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'hatId',
        type: 'uint256',
      },
    ],
    name: 'HatMutabilityChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'hatId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'newStatus',
        type: 'bool',
      },
    ],
    name: 'HatStatusChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'hatId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newToggle',
        type: 'address',
      },
    ],
    name: 'HatToggleChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint32',
        name: 'domain',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newAdmin',
        type: 'uint256',
      },
    ],
    name: 'TopHatLinkRequested',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint32',
        name: 'domain',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newAdmin',
        type: 'uint256',
      },
    ],
    name: 'TopHatLinked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'TransferSingle',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'hatId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'wearer',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'wearerStanding',
        type: 'bool',
      },
    ],
    name: 'WearerStandingChanged',
    type: 'event',
  },
] as const;
