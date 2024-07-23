import { Resolvers } from "../.mesh";
import { getWearersEligibility, getEnsName, getHatImage } from "./web3";
import axios from "axios";

const resolvers: Resolvers = {
  Eth_Wearer: {
    ensName: {
      resolve: async (root, _args, context, info) => {
        const ensName = await getEnsName("1", root.id as `0x${string}`);
        return ensName;
      },
    },
  },
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
    eligibilityEnsName: {
      resolve: async (root, _args, context, info) => {
        const eligibility = root.eligibility;
        const ensName = await getEnsName("1", eligibility as `0x${string}`);
        return ensName;
      },
    },
    toggleEnsName: {
      resolve: async (root, _args, context, info) => {
        const toggle = root.toggle;
        const ensName = await getEnsName("1", toggle as `0x${string}`);
        return ensName;
      },
    },
    isImageValid: {
      resolve: async (root, _args, context, info) => {
        const imageUri = root.imageUri;
        if (imageUri.startsWith("ipfs://")) {
          const cid = imageUri.slice(7);
          try {
            const res = await axios.head(
              `${process.env.PINATA_GATEWAY_URL}${cid}?pinataGatewayToken=${process.env.PINATA_GATEWAY_TOKEN}`,
              { timeout: 7000 }
            );
            const contentType = res.headers["content-type"];
            if (contentType.startsWith("image/")) {
              return true;
            } else {
              return false;
            }
          } catch (err) {
            return false;
          }
        } else {
          try {
            const res = await axios.head(imageUri, { timeout: 7000 });
            const contentType = res.headers["content-type"];
            if (contentType.startsWith("image/")) {
              return true;
            } else {
              return false;
            }
          } catch (err) {
            return false;
          }
        }
      },
    },
    nearestImage: {
      resolve: async (root, _args, context, info) => {
        const image = await getHatImage("1", BigInt(root.id));
        return image;
      },
    },
  },
  Op_Wearer: {
    ensName: {
      resolve: async (root, _args, context, info) => {
        const ensName = await getEnsName("10", root.id as `0x${string}`);
        return ensName;
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
    eligibilityEnsName: {
      resolve: async (root, _args, context, info) => {
        const eligibility = root.eligibility;
        const ensName = await getEnsName("10", eligibility as `0x${string}`);
        return ensName;
      },
    },
    toggleEnsName: {
      resolve: async (root, _args, context, info) => {
        const toggle = root.toggle;
        const ensName = await getEnsName("10", toggle as `0x${string}`);
        return ensName;
      },
    },
    isImageValid: {
      resolve: async (root, _args, context, info) => {
        const imageUri = root.imageUri;
        if (imageUri.startsWith("ipfs://")) {
          const cid = imageUri.slice(7);
          try {
            const res = await axios.head(
              `${process.env.PINATA_GATEWAY_URL}${cid}?pinataGatewayToken=${process.env.PINATA_GATEWAY_TOKEN}`,
              { timeout: 7000 }
            );
            const contentType = res.headers["content-type"];
            if (contentType.startsWith("image/")) {
              return true;
            } else {
              return false;
            }
          } catch (err) {
            return false;
          }
        } else {
          try {
            const res = await axios.head(imageUri, { timeout: 7000 });
            const contentType = res.headers["content-type"];
            if (contentType.startsWith("image/")) {
              return true;
            } else {
              return false;
            }
          } catch (err) {
            return false;
          }
        }
      },
    },
    nearestImage: {
      resolve: async (root, _args, context, info) => {
        const image = await getHatImage("10", BigInt(root.id));
        return image;
      },
    },
  },
  Arb_Wearer: {
    ensName: {
      resolve: async (root, _args, context, info) => {
        const ensName = await getEnsName("42161", root.id as `0x${string}`);
        return ensName;
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
    eligibilityEnsName: {
      resolve: async (root, _args, context, info) => {
        const eligibility = root.eligibility;
        const ensName = await getEnsName("42161", eligibility as `0x${string}`);
        return ensName;
      },
    },
    toggleEnsName: {
      resolve: async (root, _args, context, info) => {
        const toggle = root.toggle;
        const ensName = await getEnsName("42161", toggle as `0x${string}`);
        return ensName;
      },
    },
    isImageValid: {
      resolve: async (root, _args, context, info) => {
        const imageUri = root.imageUri;
        if (imageUri.startsWith("ipfs://")) {
          const cid = imageUri.slice(7);
          try {
            const res = await axios.head(
              `${process.env.PINATA_GATEWAY_URL}${cid}?pinataGatewayToken=${process.env.PINATA_GATEWAY_TOKEN}`,
              { timeout: 7000 }
            );
            const contentType = res.headers["content-type"];
            if (contentType.startsWith("image/")) {
              return true;
            } else {
              return false;
            }
          } catch (err) {
            return false;
          }
        } else {
          try {
            const res = await axios.head(imageUri, { timeout: 7000 });
            const contentType = res.headers["content-type"];
            if (contentType.startsWith("image/")) {
              return true;
            } else {
              return false;
            }
          } catch (err) {
            return false;
          }
        }
      },
    },
    nearestImage: {
      resolve: async (root, _args, context, info) => {
        const image = await getHatImage("42161", BigInt(root.id));
        return image;
      },
    },
  },
  Pol_Wearer: {
    ensName: {
      resolve: async (root, _args, context, info) => {
        const ensName = await getEnsName("137", root.id as `0x${string}`);
        return ensName;
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
    eligibilityEnsName: {
      resolve: async (root, _args, context, info) => {
        const eligibility = root.eligibility;
        const ensName = await getEnsName("137", eligibility as `0x${string}`);
        return ensName;
      },
    },
    toggleEnsName: {
      resolve: async (root, _args, context, info) => {
        const toggle = root.toggle;
        const ensName = await getEnsName("137", toggle as `0x${string}`);
        return ensName;
      },
    },
    isImageValid: {
      resolve: async (root, _args, context, info) => {
        const imageUri = root.imageUri;
        if (imageUri.startsWith("ipfs://")) {
          const cid = imageUri.slice(7);
          try {
            const res = await axios.head(
              `${process.env.PINATA_GATEWAY_URL}${cid}?pinataGatewayToken=${process.env.PINATA_GATEWAY_TOKEN}`,
              { timeout: 7000 }
            );
            const contentType = res.headers["content-type"];
            if (contentType.startsWith("image/")) {
              return true;
            } else {
              return false;
            }
          } catch (err) {
            return false;
          }
        } else {
          try {
            const res = await axios.head(imageUri, { timeout: 7000 });
            const contentType = res.headers["content-type"];
            if (contentType.startsWith("image/")) {
              return true;
            } else {
              return false;
            }
          } catch (err) {
            return false;
          }
        }
      },
    },
    nearestImage: {
      resolve: async (root, _args, context, info) => {
        const image = await getHatImage("137", BigInt(root.id));
        return image;
      },
    },
  },
  Gno_Wearer: {
    ensName: {
      resolve: async (root, _args, context, info) => {
        const ensName = await getEnsName("100", root.id as `0x${string}`);
        return ensName;
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
    eligibilityEnsName: {
      resolve: async (root, _args, context, info) => {
        const eligibility = root.eligibility;
        const ensName = await getEnsName("100", eligibility as `0x${string}`);
        return ensName;
      },
    },
    toggleEnsName: {
      resolve: async (root, _args, context, info) => {
        const toggle = root.toggle;
        const ensName = await getEnsName("100", toggle as `0x${string}`);
        return ensName;
      },
    },
    isImageValid: {
      resolve: async (root, _args, context, info) => {
        const imageUri = root.imageUri;
        if (imageUri.startsWith("ipfs://")) {
          const cid = imageUri.slice(7);
          try {
            const res = await axios.head(
              `${process.env.PINATA_GATEWAY_URL}${cid}?pinataGatewayToken=${process.env.PINATA_GATEWAY_TOKEN}`,
              { timeout: 7000 }
            );
            const contentType = res.headers["content-type"];
            if (contentType.startsWith("image/")) {
              return true;
            } else {
              return false;
            }
          } catch (err) {
            return false;
          }
        } else {
          try {
            const res = await axios.head(imageUri, { timeout: 7000 });
            const contentType = res.headers["content-type"];
            if (contentType.startsWith("image/")) {
              return true;
            } else {
              return false;
            }
          } catch (err) {
            return false;
          }
        }
      },
    },
    nearestImage: {
      resolve: async (root, _args, context, info) => {
        const image = await getHatImage("100", BigInt(root.id));
        return image;
      },
    },
  },
  Base_Wearer: {
    ensName: {
      resolve: async (root, _args, context, info) => {
        const ensName = await getEnsName("8453", root.id as `0x${string}`);
        return ensName;
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
    eligibilityEnsName: {
      resolve: async (root, _args, context, info) => {
        const eligibility = root.eligibility;
        const ensName = await getEnsName("8453", eligibility as `0x${string}`);
        return ensName;
      },
    },
    toggleEnsName: {
      resolve: async (root, _args, context, info) => {
        const toggle = root.toggle;
        const ensName = await getEnsName("8453", toggle as `0x${string}`);
        return ensName;
      },
    },
    isImageValid: {
      resolve: async (root, _args, context, info) => {
        const imageUri = root.imageUri;
        if (imageUri.startsWith("ipfs://")) {
          const cid = imageUri.slice(7);
          try {
            const res = await axios.head(
              `${process.env.PINATA_GATEWAY_URL}${cid}?pinataGatewayToken=${process.env.PINATA_GATEWAY_TOKEN}`,
              { timeout: 7000 }
            );
            const contentType = res.headers["content-type"];
            if (contentType.startsWith("image/")) {
              return true;
            } else {
              return false;
            }
          } catch (err) {
            return false;
          }
        } else {
          try {
            const res = await axios.head(imageUri, { timeout: 7000 });
            const contentType = res.headers["content-type"];
            if (contentType.startsWith("image/")) {
              return true;
            } else {
              return false;
            }
          } catch (err) {
            return false;
          }
        }
      },
    },
    nearestImage: {
      resolve: async (root, _args, context, info) => {
        const image = await getHatImage("8453", BigInt(root.id));
        return image;
      },
    },
  },
  Celo_Wearer: {
    ensName: {
      resolve: async (root, _args, context, info) => {
        const ensName = await getEnsName("42220", root.id as `0x${string}`);
        return ensName;
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
    eligibilityEnsName: {
      resolve: async (root, _args, context, info) => {
        const eligibility = root.eligibility;
        const ensName = await getEnsName("42220", eligibility as `0x${string}`);
        return ensName;
      },
    },
    toggleEnsName: {
      resolve: async (root, _args, context, info) => {
        const toggle = root.toggle;
        const ensName = await getEnsName("42220", toggle as `0x${string}`);
        return ensName;
      },
    },
    isImageValid: {
      resolve: async (root, _args, context, info) => {
        const imageUri = root.imageUri;
        if (imageUri.startsWith("ipfs://")) {
          const cid = imageUri.slice(7);
          try {
            const res = await axios.head(
              `${process.env.PINATA_GATEWAY_URL}${cid}?pinataGatewayToken=${process.env.PINATA_GATEWAY_TOKEN}`,
              { timeout: 7000 }
            );
            const contentType = res.headers["content-type"];
            if (contentType.startsWith("image/")) {
              return true;
            } else {
              return false;
            }
          } catch (err) {
            return false;
          }
        } else {
          try {
            const res = await axios.head(imageUri, { timeout: 7000 });
            const contentType = res.headers["content-type"];
            if (contentType.startsWith("image/")) {
              return true;
            } else {
              return false;
            }
          } catch (err) {
            return false;
          }
        }
      },
    },
    nearestImage: {
      resolve: async (root, _args, context, info) => {
        const image = await getHatImage("42220", BigInt(root.id));
        return image;
      },
    },
  },
  Sep_Wearer: {
    ensName: {
      resolve: async (root, _args, context, info) => {
        const ensName = await getEnsName("11155111", root.id as `0x${string}`);
        return ensName;
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
    eligibilityEnsName: {
      resolve: async (root, _args, context, info) => {
        const eligibility = root.eligibility;
        const ensName = await getEnsName(
          "11155111",
          eligibility as `0x${string}`
        );
        return ensName;
      },
    },
    toggleEnsName: {
      resolve: async (root, _args, context, info) => {
        const toggle = root.toggle;
        const ensName = await getEnsName("11155111", toggle as `0x${string}`);
        return ensName;
      },
    },
    isImageValid: {
      resolve: async (root, _args, context, info) => {
        const imageUri = root.imageUri;
        if (imageUri.startsWith("ipfs://")) {
          const cid = imageUri.slice(7);
          try {
            const res = await axios.head(
              `${process.env.PINATA_GATEWAY_URL}${cid}?pinataGatewayToken=${process.env.PINATA_GATEWAY_TOKEN}`,
              { timeout: 7000 }
            );
            const contentType = res.headers["content-type"];
            if (contentType.startsWith("image/")) {
              return true;
            } else {
              return false;
            }
          } catch (err) {
            return false;
          }
        } else {
          try {
            const res = await axios.head(imageUri, { timeout: 7000 });
            const contentType = res.headers["content-type"];
            if (contentType.startsWith("image/")) {
              return true;
            } else {
              return false;
            }
          } catch (err) {
            return false;
          }
        }
      },
    },
    nearestImage: {
      resolve: async (root, _args, context, info) => {
        const image = await getHatImage("11155111", BigInt(root.id));
        return image;
      },
    },
  },
};

export default resolvers;
