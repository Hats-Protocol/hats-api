export interface ResolverRoot {
  id: string;
  details?: string;
  imageUri?: string;
  eligibility?: string;
  toggle?: string;
  wearers?: Array<{ id: string }>;
}

export interface ResolverContext {
  [key: string]: {
    Query: {
      [key: string]: (args: any) => Promise<any>;
    };
  };
}

// Common resolver types
export interface WearerResolvers {
  ensName: {
    resolve: (root: ResolverRoot) => Promise<string | null>;
  };
  isContract: {
    resolve: (root: ResolverRoot) => Promise<boolean>;
  };
  contractName: {
    resolve: (root: ResolverRoot) => Promise<string | null>;
  };
}

export interface HatResolvers {
  detailsMetadata: {
    resolve: (root: ResolverRoot) => Promise<string | null>;
  };
  authorities: {
    selectionSet?: string;
    resolve: (
      root: ResolverRoot,
      _args: any,
      context: ResolverContext
    ) => Promise<any>;
  };
  eligibleWearers: {
    resolve: (root: ResolverRoot) => Promise<string[]>;
  };
  eligibilityEnsName: {
    resolve: (root: ResolverRoot) => Promise<string | null>;
  };
  toggleEnsName: {
    resolve: (root: ResolverRoot) => Promise<string | null>;
  };
  isImageValid: {
    resolve: (root: ResolverRoot) => Promise<boolean>;
  };
  nearestImage: {
    resolve: (root: ResolverRoot) => Promise<string>;
  };
  eligibilityIsContract: {
    resolve: (root: ResolverRoot) => Promise<boolean>;
  };
  eligibilityContractName: {
    resolve: (root: ResolverRoot) => Promise<string | null>;
  };
  toggleIsContract: {
    resolve: (root: ResolverRoot) => Promise<boolean>;
  };
  toggleContractName: {
    resolve: (root: ResolverRoot) => Promise<string | null>;
  };
  dynamicStatus: {
    resolve: (root: ResolverRoot) => Promise<boolean>;
  };
}
