import { Resolvers } from "../.mesh";
import {
  getWearersEligibility,
  getEnsName,
  getHatImage,
  isContract,
  getContractName,
  getHatStatus,
} from "./web3";
import axios from "axios";

const resolvers: Resolvers = {
  Eth_Wearer: {
    ensName: {
      resolve: async (root, _args, context, info) => {
        const ensName = await getEnsName("1", root.id as `0x${string}`);
        return ensName;
      },
    },
    isContract: {
      resolve: async (root, _args, context, info) => {
        const res = await isContract("1", root.id as `0x${string}`);
        return res;
      },
    },
    contractName: {
      resolve: async (root, _args, context, info) => {
        const name = await getContractName("1", root.id as `0x${string}`);
        return name;
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
              { timeout: 12000 }
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
    eligibilityIsContract: {
      resolve: async (root, _args, context, info) => {
        const eligibility = root.eligibility;
        const res = await isContract("1", eligibility as `0x${string}`);
        return res;
      },
    },
    eligibilityContractName: {
      resolve: async (root, _args, context, info) => {
        const name = await getContractName(
          "1",
          root.eligibility as `0x${string}`
        );
        return name;
      },
    },
    toggleIsContract: {
      resolve: async (root, _args, context, info) => {
        const toggle = root.toggle;
        const res = await isContract("1", toggle as `0x${string}`);
        return res;
      },
    },
    toggleContractName: {
      resolve: async (root, _args, context, info) => {
        const name = await getContractName("1", root.toggle as `0x${string}`);
        return name;
      },
    },
    dynamicStatus: {
      resolve: async (root, _args, context, info) => {
        const status = await getHatStatus("1", BigInt(root.id));
        return status;
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
    isContract: {
      resolve: async (root, _args, context, info) => {
        const res = await isContract("10", root.id as `0x${string}`);
        return res;
      },
    },
    contractName: {
      resolve: async (root, _args, context, info) => {
        const name = await getContractName("10", root.id as `0x${string}`);
        return name;
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
              { timeout: 12000 }
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
    eligibilityIsContract: {
      resolve: async (root, _args, context, info) => {
        const eligibility = root.eligibility;
        const res = await isContract("10", eligibility as `0x${string}`);
        return res;
      },
    },
    eligibilityContractName: {
      resolve: async (root, _args, context, info) => {
        const name = await getContractName(
          "10",
          root.eligibility as `0x${string}`
        );
        return name;
      },
    },
    toggleIsContract: {
      resolve: async (root, _args, context, info) => {
        const toggle = root.toggle;
        const res = await isContract("10", toggle as `0x${string}`);
        return res;
      },
    },
    toggleContractName: {
      resolve: async (root, _args, context, info) => {
        const name = await getContractName("10", root.toggle as `0x${string}`);
        return name;
      },
    },
    dynamicStatus: {
      resolve: async (root, _args, context, info) => {
        const status = await getHatStatus("10", BigInt(root.id));
        return status;
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
    isContract: {
      resolve: async (root, _args, context, info) => {
        const res = await isContract("42161", root.id as `0x${string}`);
        return res;
      },
    },
    contractName: {
      resolve: async (root, _args, context, info) => {
        const name = await getContractName("42161", root.id as `0x${string}`);
        return name;
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
              { timeout: 12000 }
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
    eligibilityIsContract: {
      resolve: async (root, _args, context, info) => {
        const eligibility = root.eligibility;
        const res = await isContract("42161", eligibility as `0x${string}`);
        return res;
      },
    },
    eligibilityContractName: {
      resolve: async (root, _args, context, info) => {
        const name = await getContractName(
          "42161",
          root.eligibility as `0x${string}`
        );
        return name;
      },
    },
    toggleIsContract: {
      resolve: async (root, _args, context, info) => {
        const toggle = root.toggle;
        const res = await isContract("42161", toggle as `0x${string}`);
        return res;
      },
    },
    toggleContractName: {
      resolve: async (root, _args, context, info) => {
        const name = await getContractName(
          "42161",
          root.toggle as `0x${string}`
        );
        return name;
      },
    },
    dynamicStatus: {
      resolve: async (root, _args, context, info) => {
        const status = await getHatStatus("42161", BigInt(root.id));
        return status;
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
    isContract: {
      resolve: async (root, _args, context, info) => {
        const res = await isContract("137", root.id as `0x${string}`);
        return res;
      },
    },
    contractName: {
      resolve: async (root, _args, context, info) => {
        const name = await getContractName("137", root.id as `0x${string}`);
        return name;
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
              { timeout: 12000 }
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
    eligibilityIsContract: {
      resolve: async (root, _args, context, info) => {
        const eligibility = root.eligibility;
        const res = await isContract("137", eligibility as `0x${string}`);
        return res;
      },
    },
    eligibilityContractName: {
      resolve: async (root, _args, context, info) => {
        const name = await getContractName(
          "137",
          root.eligibility as `0x${string}`
        );
        return name;
      },
    },
    toggleIsContract: {
      resolve: async (root, _args, context, info) => {
        const toggle = root.toggle;
        const res = await isContract("137", toggle as `0x${string}`);
        return res;
      },
    },
    toggleContractName: {
      resolve: async (root, _args, context, info) => {
        const name = await getContractName("137", root.toggle as `0x${string}`);
        return name;
      },
    },
    dynamicStatus: {
      resolve: async (root, _args, context, info) => {
        const status = await getHatStatus("137", BigInt(root.id));
        return status;
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
    isContract: {
      resolve: async (root, _args, context, info) => {
        const res = await isContract("100", root.id as `0x${string}`);
        return res;
      },
    },
    contractName: {
      resolve: async (root, _args, context, info) => {
        const name = await getContractName("100", root.id as `0x${string}`);
        return name;
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
              { timeout: 12000 }
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
    eligibilityIsContract: {
      resolve: async (root, _args, context, info) => {
        const eligibility = root.eligibility;
        const res = await isContract("100", eligibility as `0x${string}`);
        return res;
      },
    },
    eligibilityContractName: {
      resolve: async (root, _args, context, info) => {
        const name = await getContractName(
          "100",
          root.eligibility as `0x${string}`
        );
        return name;
      },
    },
    toggleIsContract: {
      resolve: async (root, _args, context, info) => {
        const toggle = root.toggle;
        const res = await isContract("100", toggle as `0x${string}`);
        return res;
      },
    },
    toggleContractName: {
      resolve: async (root, _args, context, info) => {
        const name = await getContractName("100", root.toggle as `0x${string}`);
        return name;
      },
    },
    dynamicStatus: {
      resolve: async (root, _args, context, info) => {
        const status = await getHatStatus("100", BigInt(root.id));
        return status;
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
    isContract: {
      resolve: async (root, _args, context, info) => {
        const res = await isContract("8453", root.id as `0x${string}`);
        return res;
      },
    },
    contractName: {
      resolve: async (root, _args, context, info) => {
        const name = await getContractName("8453", root.id as `0x${string}`);
        return name;
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
              { timeout: 12000 }
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
    eligibilityIsContract: {
      resolve: async (root, _args, context, info) => {
        const eligibility = root.eligibility;
        const res = await isContract("8453", eligibility as `0x${string}`);
        return res;
      },
    },
    eligibilityContractName: {
      resolve: async (root, _args, context, info) => {
        const name = await getContractName(
          "8453",
          root.eligibility as `0x${string}`
        );
        return name;
      },
    },
    toggleIsContract: {
      resolve: async (root, _args, context, info) => {
        const toggle = root.toggle;
        const res = await isContract("8453", toggle as `0x${string}`);
        return res;
      },
    },
    toggleContractName: {
      resolve: async (root, _args, context, info) => {
        const name = await getContractName(
          "8453",
          root.toggle as `0x${string}`
        );
        return name;
      },
    },
    dynamicStatus: {
      resolve: async (root, _args, context, info) => {
        const status = await getHatStatus("8453", BigInt(root.id));
        return status;
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
    isContract: {
      resolve: async (root, _args, context, info) => {
        const res = await isContract("42220", root.id as `0x${string}`);
        return res;
      },
    },
    contractName: {
      resolve: async (root, _args, context, info) => {
        const name = await getContractName("42220", root.id as `0x${string}`);
        return name;
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
              { timeout: 12000 }
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
    eligibilityIsContract: {
      resolve: async (root, _args, context, info) => {
        const eligibility = root.eligibility;
        const res = await isContract("42220", eligibility as `0x${string}`);
        return res;
      },
    },
    eligibilityContractName: {
      resolve: async (root, _args, context, info) => {
        const name = await getContractName(
          "42220",
          root.eligibility as `0x${string}`
        );
        return name;
      },
    },
    toggleIsContract: {
      resolve: async (root, _args, context, info) => {
        const toggle = root.toggle;
        const res = await isContract("42220", toggle as `0x${string}`);
        return res;
      },
    },
    toggleContractName: {
      resolve: async (root, _args, context, info) => {
        const name = await getContractName(
          "42220",
          root.toggle as `0x${string}`
        );
        return name;
      },
    },
    dynamicStatus: {
      resolve: async (root, _args, context, info) => {
        const status = await getHatStatus("42220", BigInt(root.id));
        return status;
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
    isContract: {
      resolve: async (root, _args, context, info) => {
        const res = await isContract("11155111", root.id as `0x${string}`);
        return res;
      },
    },
    contractName: {
      resolve: async (root, _args, context, info) => {
        const name = await getContractName(
          "11155111",
          root.id as `0x${string}`
        );
        return name;
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
              { timeout: 12000 }
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
    eligibilityIsContract: {
      resolve: async (root, _args, context, info) => {
        const eligibility = root.eligibility;
        const res = await isContract("11155111", eligibility as `0x${string}`);
        return res;
      },
    },
    eligibilityContractName: {
      resolve: async (root, _args, context, info) => {
        const name = await getContractName(
          "11155111",
          root.eligibility as `0x${string}`
        );
        return name;
      },
    },
    toggleIsContract: {
      resolve: async (root, _args, context, info) => {
        const toggle = root.toggle;
        const res = await isContract("11155111", toggle as `0x${string}`);
        return res;
      },
    },
    toggleContractName: {
      resolve: async (root, _args, context, info) => {
        const name = await getContractName(
          "11155111",
          root.toggle as `0x${string}`
        );
        return name;
      },
    },
    dynamicStatus: {
      resolve: async (root, _args, context, info) => {
        const status = await getHatStatus("11155111", BigInt(root.id));
        return status;
      },
    },
  },
};

export default resolvers;
