import { Resolvers } from "../.mesh";
import { getWearersEligibility } from "./web3";
import axios from "axios";

const resolvers: Resolvers = {
  Eth_Hat: {
    detailsMetadata: {
      resolve: async (root, _args, context, info) => {
        if (root.details.startsWith("ipfs://")) {
          const cid = root.details.slice(7);
          try {
            const res = await axios.get(
              `${process.env.PINATA_GATEWAY_URL}${cid}?pinataGatewayToken=${process.env.PINATA_GATEWAY_TOKEN}`,
              { timeout: 7000 }
            );
            if (res.status === 200) {
              return JSON.stringify(res.data);
            } else {
              return null;
            }
          } catch (err) {
            return null;
          }
        } else {
          return null;
        }
      },
    },
    authorities: {
      selectionSet: /* GraphQL */ `
        {
          id
        }
      `,
      resolve: async (root, _args, context, info) => {
        return await context.Ethereum_Ancillary.Query.Eth_hatAuthority({
          root,
          args: {
            id: root.id,
          },
          context,
          info,
        });
      },
    },
    eligibleWearers: {
      resolve: async (root, _args, context, info) => {
        const wearers = root.wearers;
        const wearersEligibility = await getWearersEligibility(
          "1",
          BigInt(root.id),
          wearers.map((w) => w.id as `0x${string}`)
        );

        return wearers
          .filter((w) => wearersEligibility[w.id as `0x${string}`] === true)
          .map((w) => w.id);
      },
    },
  },
  Op_Hat: {
    detailsMetadata: {
      resolve: async (root, _args, context, info) => {
        if (root.details.startsWith("ipfs://")) {
          const cid = root.details.slice(7);
          try {
            const res = await axios.get(
              `${process.env.PINATA_GATEWAY_URL}${cid}?pinataGatewayToken=${process.env.PINATA_GATEWAY_TOKEN}`,
              { timeout: 7000 }
            );
            if (res.status === 200) {
              return JSON.stringify(res.data);
            } else {
              return null;
            }
          } catch (err) {
            return null;
          }
        } else {
          return null;
        }
      },
    },
    authorities: {
      selectionSet: /* GraphQL */ `
        {
          id
        }
      `,
      resolve: async (root, _args, context, info) => {
        return await context.Optimism_Ancillary.Query.Op_hatAuthority({
          root,
          args: {
            id: root.id,
          },
          context,
          info,
        });
      },
    },
    eligibleWearers: {
      resolve: async (root, _args, context, info) => {
        const wearers = root.wearers;
        const wearersEligibility = await getWearersEligibility(
          "10",
          BigInt(root.id),
          wearers.map((w) => w.id as `0x${string}`)
        );

        return wearers
          .filter((w) => wearersEligibility[w.id as `0x${string}`] === true)
          .map((w) => w.id);
      },
    },
  },
  Arb_Hat: {
    detailsMetadata: {
      resolve: async (root, _args, context, info) => {
        if (root.details.startsWith("ipfs://")) {
          const cid = root.details.slice(7);
          try {
            const res = await axios.get(
              `${process.env.PINATA_GATEWAY_URL}${cid}?pinataGatewayToken=${process.env.PINATA_GATEWAY_TOKEN}`,
              { timeout: 7000 }
            );
            if (res.status === 200) {
              return JSON.stringify(res.data);
            } else {
              return null;
            }
          } catch (err) {
            return null;
          }
        } else {
          return null;
        }
      },
    },
    authorities: {
      selectionSet: /* GraphQL */ `
        {
          id
        }
      `,
      resolve: async (root, _args, context, info) => {
        return await context.Arbitrum_Ancillary.Query.Arb_hatAuthority({
          root,
          args: {
            id: root.id,
          },
          context,
          info,
        });
      },
    },
    eligibleWearers: {
      resolve: async (root, _args, context, info) => {
        const wearers = root.wearers;
        const wearersEligibility = await getWearersEligibility(
          "42161",
          BigInt(root.id),
          wearers.map((w) => w.id as `0x${string}`)
        );

        return wearers
          .filter((w) => wearersEligibility[w.id as `0x${string}`] === true)
          .map((w) => w.id);
      },
    },
  },
  Pol_Hat: {
    detailsMetadata: {
      resolve: async (root, _args, context, info) => {
        if (root.details.startsWith("ipfs://")) {
          const cid = root.details.slice(7);
          try {
            const res = await axios.get(
              `${process.env.PINATA_GATEWAY_URL}${cid}?pinataGatewayToken=${process.env.PINATA_GATEWAY_TOKEN}`,
              { timeout: 7000 }
            );
            if (res.status === 200) {
              return JSON.stringify(res.data);
            } else {
              return null;
            }
          } catch (err) {
            return null;
          }
        } else {
          return null;
        }
      },
    },
    authorities: {
      selectionSet: /* GraphQL */ `
        {
          id
        }
      `,
      resolve: async (root, _args, context, info) => {
        return await context.Polygon_Ancillary.Query.Pol_hatAuthority({
          root,
          args: {
            id: root.id,
          },
          context,
          info,
        });
      },
    },
    eligibleWearers: {
      resolve: async (root, _args, context, info) => {
        const wearers = root.wearers;
        const wearersEligibility = await getWearersEligibility(
          "137",
          BigInt(root.id),
          wearers.map((w) => w.id as `0x${string}`)
        );

        return wearers
          .filter((w) => wearersEligibility[w.id as `0x${string}`] === true)
          .map((w) => w.id);
      },
    },
  },
  Gno_Hat: {
    detailsMetadata: {
      resolve: async (root, _args, context, info) => {
        if (root.details.startsWith("ipfs://")) {
          const cid = root.details.slice(7);
          try {
            const res = await axios.get(
              `${process.env.PINATA_GATEWAY_URL}${cid}?pinataGatewayToken=${process.env.PINATA_GATEWAY_TOKEN}`,
              { timeout: 7000 }
            );
            if (res.status === 200) {
              return JSON.stringify(res.data);
            } else {
              return null;
            }
          } catch (err) {
            return null;
          }
        } else {
          return null;
        }
      },
    },
    authorities: {
      selectionSet: /* GraphQL */ `
        {
          id
        }
      `,
      resolve: async (root, _args, context, info) => {
        return await context.Gnosis_Ancillary.Query.Gno_hatAuthority({
          root,
          args: {
            id: root.id,
          },
          context,
          info,
        });
      },
    },
    eligibleWearers: {
      resolve: async (root, _args, context, info) => {
        const wearers = root.wearers;
        const wearersEligibility = await getWearersEligibility(
          "100",
          BigInt(root.id),
          wearers.map((w) => w.id as `0x${string}`)
        );

        return wearers
          .filter((w) => wearersEligibility[w.id as `0x${string}`] === true)
          .map((w) => w.id);
      },
    },
  },
  Base_Hat: {
    detailsMetadata: {
      resolve: async (root, _args, context, info) => {
        if (root.details.startsWith("ipfs://")) {
          const cid = root.details.slice(7);
          try {
            const res = await axios.get(
              `${process.env.PINATA_GATEWAY_URL}${cid}?pinataGatewayToken=${process.env.PINATA_GATEWAY_TOKEN}`,
              { timeout: 7000 }
            );
            if (res.status === 200) {
              return JSON.stringify(res.data);
            } else {
              return null;
            }
          } catch (err) {
            return null;
          }
        } else {
          return null;
        }
      },
    },
    authorities: {
      selectionSet: /* GraphQL */ `
        {
          id
        }
      `,
      resolve: async (root, _args, context, info) => {
        return await context.Base_Ancillary.Query.Base_hatAuthority({
          root,
          args: {
            id: root.id,
          },
          context,
          info,
        });
      },
    },
    eligibleWearers: {
      resolve: async (root, _args, context, info) => {
        const wearers = root.wearers;
        const wearersEligibility = await getWearersEligibility(
          "8453",
          BigInt(root.id),
          wearers.map((w) => w.id as `0x${string}`)
        );

        return wearers
          .filter((w) => wearersEligibility[w.id as `0x${string}`] === true)
          .map((w) => w.id);
      },
    },
  },
  Celo_Hat: {
    detailsMetadata: {
      resolve: async (root, _args, context, info) => {
        if (root.details.startsWith("ipfs://")) {
          const cid = root.details.slice(7);
          try {
            const res = await axios.get(
              `${process.env.PINATA_GATEWAY_URL}${cid}?pinataGatewayToken=${process.env.PINATA_GATEWAY_TOKEN}`,
              { timeout: 7000 }
            );
            if (res.status === 200) {
              return JSON.stringify(res.data);
            } else {
              return null;
            }
          } catch (err) {
            return null;
          }
        } else {
          return null;
        }
      },
    },
    authorities: {
      selectionSet: /* GraphQL */ `
        {
          id
        }
      `,
      resolve: async (root, _args, context, info) => {
        return await context.Celo_Ancillary.Query.Celo_hatAuthority({
          root,
          args: {
            id: root.id,
          },
          context,
          info,
        });
      },
    },
    eligibleWearers: {
      resolve: async (root, _args, context, info) => {
        const wearers = root.wearers;
        const wearersEligibility = await getWearersEligibility(
          "42220",
          BigInt(root.id),
          wearers.map((w) => w.id as `0x${string}`)
        );

        return wearers
          .filter((w) => wearersEligibility[w.id as `0x${string}`] === true)
          .map((w) => w.id);
      },
    },
  },
  Sep_Hat: {
    detailsMetadata: {
      resolve: async (root, _args, context, info) => {
        if (root.details.startsWith("ipfs://")) {
          const cid = root.details.slice(7);
          try {
            const res = await axios.get(
              `${process.env.PINATA_GATEWAY_URL}${cid}?pinataGatewayToken=${process.env.PINATA_GATEWAY_TOKEN}`,
              { timeout: 7000 }
            );
            if (res.status === 200) {
              return JSON.stringify(res.data);
            } else {
              return null;
            }
          } catch (err) {
            return null;
          }
        } else {
          return null;
        }
      },
    },
    authorities: {
      selectionSet: /* GraphQL */ `
        {
          id
        }
      `,
      resolve: async (root, _args, context, info) => {
        return await context.Sepolia_Ancillary.Query.Sep_hatAuthority({
          root,
          args: {
            id: root.id,
          },
          context,
          info,
        });
      },
    },
    eligibleWearers: {
      resolve: async (root, _args, context, info) => {
        const wearers = root.wearers;
        const wearersEligibility = await getWearersEligibility(
          "11155111",
          BigInt(root.id),
          wearers.map((w) => w.id as `0x${string}`)
        );

        return wearers
          .filter((w) => wearersEligibility[w.id as `0x${string}`] === true)
          .map((w) => w.id);
      },
    },
  },
};

export default resolvers;
