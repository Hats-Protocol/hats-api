import { Resolvers } from "../.mesh";
import axios from "axios";

const resolvers: Resolvers = {
  Eth_Hat: {
    detailsMetadata: {
      resolve: async (root, _args, context, info) => {
        if (root.details.startsWith("ipfs://")) {
          const cid = root.details.slice(7);
          try {
            const res = await axios.get(`https://ipfs.io/ipfs/${cid}`);
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
  },
  Op_Hat: {
    detailsMetadata: {
      resolve: async (root, _args, context, info) => {
        if (root.details.startsWith("ipfs://")) {
          const cid = root.details.slice(7);
          try {
            const res = await axios.get(`https://ipfs.io/ipfs/${cid}`);
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
  },
  Arb_Hat: {
    detailsMetadata: {
      resolve: async (root, _args, context, info) => {
        if (root.details.startsWith("ipfs://")) {
          const cid = root.details.slice(7);
          try {
            const res = await axios.get(`https://ipfs.io/ipfs/${cid}`);
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
  },
  Pol_Hat: {
    detailsMetadata: {
      resolve: async (root, _args, context, info) => {
        if (root.details.startsWith("ipfs://")) {
          const cid = root.details.slice(7);
          try {
            const res = await axios.get(`https://ipfs.io/ipfs/${cid}`);
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
  },
  Gno_Hat: {
    detailsMetadata: {
      resolve: async (root, _args, context, info) => {
        if (root.details.startsWith("ipfs://")) {
          const cid = root.details.slice(7);
          try {
            const res = await axios.get(`https://ipfs.io/ipfs/${cid}`);
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
  },
  Base_Hat: {
    detailsMetadata: {
      resolve: async (root, _args, context, info) => {
        if (root.details.startsWith("ipfs://")) {
          const cid = root.details.slice(7);
          try {
            const res = await axios.get(`https://ipfs.io/ipfs/${cid}`);
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
  },
  Celo_Hat: {
    detailsMetadata: {
      resolve: async (root, _args, context, info) => {
        if (root.details.startsWith("ipfs://")) {
          const cid = root.details.slice(7);
          try {
            const res = await axios.get(`https://ipfs.io/ipfs/${cid}`);
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
  },
};

export default resolvers;
