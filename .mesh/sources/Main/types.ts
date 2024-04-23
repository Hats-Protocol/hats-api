// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace MainTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type ClaimsHatter = {
  id: Scalars['ID']['output'];
  claimableHats: Array<Hat>;
  claimableForHats: Array<Hat>;
};


export type ClaimsHatterclaimableHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Hat_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Hat_filter>;
};


export type ClaimsHatterclaimableForHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Hat_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Hat_filter>;
};

export type ClaimsHatter_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  claimableHats?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableHats_?: InputMaybe<Hat_filter>;
  claimableForHats?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_?: InputMaybe<Hat_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ClaimsHatter_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ClaimsHatter_filter>>>;
};

export type ClaimsHatter_orderBy =
  | 'id'
  | 'claimableHats'
  | 'claimableForHats';

export type Hat = {
  id: Scalars['ID']['output'];
  prettyId: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  details: Scalars['String']['output'];
  maxSupply: Scalars['BigInt']['output'];
  eligibility: Scalars['String']['output'];
  toggle: Scalars['String']['output'];
  mutable: Scalars['Boolean']['output'];
  imageUri: Scalars['String']['output'];
  levelAtLocalTree: Scalars['Int']['output'];
  currentSupply: Scalars['BigInt']['output'];
  tree: Tree;
  wearers: Array<Wearer>;
  admin: Hat;
  badStandings: Array<Wearer>;
  claimableBy: Array<ClaimsHatter>;
  claimableForBy: Array<ClaimsHatter>;
  linkRequestFromTree: Array<Tree>;
  subHats: Array<Hat>;
  linkedTrees: Array<Tree>;
  events: Array<HatsEvent>;
};


export type HatwearersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Wearer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Wearer_filter>;
};


export type HatbadStandingsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Wearer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Wearer_filter>;
};


export type HatclaimableByArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimsHatter_filter>;
};


export type HatclaimableForByArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimsHatter_filter>;
};


export type HatlinkRequestFromTreeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Tree_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Tree_filter>;
};


export type HatsubHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Hat_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Hat_filter>;
};


export type HatlinkedTreesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Tree_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Tree_filter>;
};


export type HateventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HatsEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HatsEvent_filter>;
};

export type HatBurnedEvent = HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Tree;
  hat: Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Bytes']['output'];
  wearer: Wearer;
  operator: Scalars['String']['output'];
};

export type HatBurnedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Hat_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  wearer?: InputMaybe<Scalars['String']['input']>;
  wearer_not?: InputMaybe<Scalars['String']['input']>;
  wearer_gt?: InputMaybe<Scalars['String']['input']>;
  wearer_lt?: InputMaybe<Scalars['String']['input']>;
  wearer_gte?: InputMaybe<Scalars['String']['input']>;
  wearer_lte?: InputMaybe<Scalars['String']['input']>;
  wearer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  wearer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  wearer_contains?: InputMaybe<Scalars['String']['input']>;
  wearer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  wearer_not_contains?: InputMaybe<Scalars['String']['input']>;
  wearer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  wearer_starts_with?: InputMaybe<Scalars['String']['input']>;
  wearer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wearer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  wearer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wearer_ends_with?: InputMaybe<Scalars['String']['input']>;
  wearer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wearer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  wearer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wearer_?: InputMaybe<Wearer_filter>;
  operator?: InputMaybe<Scalars['String']['input']>;
  operator_not?: InputMaybe<Scalars['String']['input']>;
  operator_gt?: InputMaybe<Scalars['String']['input']>;
  operator_lt?: InputMaybe<Scalars['String']['input']>;
  operator_gte?: InputMaybe<Scalars['String']['input']>;
  operator_lte?: InputMaybe<Scalars['String']['input']>;
  operator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  operator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  operator_contains?: InputMaybe<Scalars['String']['input']>;
  operator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  operator_not_contains?: InputMaybe<Scalars['String']['input']>;
  operator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  operator_starts_with?: InputMaybe<Scalars['String']['input']>;
  operator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  operator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operator_ends_with?: InputMaybe<Scalars['String']['input']>;
  operator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  operator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HatBurnedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<HatBurnedEvent_filter>>>;
};

export type HatBurnedEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'wearer'
  | 'wearer__id'
  | 'operator';

export type HatCreatedEvent = HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Tree;
  hat: Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Bytes']['output'];
  hatDetails: Scalars['String']['output'];
  hatMaxSupply: Scalars['BigInt']['output'];
  hatEligibility: Scalars['String']['output'];
  hatToggle: Scalars['String']['output'];
  hatMutable: Scalars['Boolean']['output'];
  hatImageUri: Scalars['String']['output'];
};

export type HatCreatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Hat_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hatDetails?: InputMaybe<Scalars['String']['input']>;
  hatDetails_not?: InputMaybe<Scalars['String']['input']>;
  hatDetails_gt?: InputMaybe<Scalars['String']['input']>;
  hatDetails_lt?: InputMaybe<Scalars['String']['input']>;
  hatDetails_gte?: InputMaybe<Scalars['String']['input']>;
  hatDetails_lte?: InputMaybe<Scalars['String']['input']>;
  hatDetails_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatDetails_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatDetails_contains?: InputMaybe<Scalars['String']['input']>;
  hatDetails_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatDetails_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatDetails_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatDetails_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatDetails_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatDetails_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatDetails_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatDetails_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatDetails_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatDetails_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatDetails_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatMaxSupply?: InputMaybe<Scalars['BigInt']['input']>;
  hatMaxSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  hatMaxSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  hatMaxSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  hatMaxSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  hatMaxSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  hatMaxSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hatMaxSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hatEligibility?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_not?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_gt?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_lt?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_gte?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_lte?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatEligibility_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatEligibility_contains?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatToggle?: InputMaybe<Scalars['String']['input']>;
  hatToggle_not?: InputMaybe<Scalars['String']['input']>;
  hatToggle_gt?: InputMaybe<Scalars['String']['input']>;
  hatToggle_lt?: InputMaybe<Scalars['String']['input']>;
  hatToggle_gte?: InputMaybe<Scalars['String']['input']>;
  hatToggle_lte?: InputMaybe<Scalars['String']['input']>;
  hatToggle_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatToggle_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatToggle_contains?: InputMaybe<Scalars['String']['input']>;
  hatToggle_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatToggle_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatToggle_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatToggle_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatToggle_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatToggle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatToggle_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatToggle_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatToggle_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatToggle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatToggle_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatMutable?: InputMaybe<Scalars['Boolean']['input']>;
  hatMutable_not?: InputMaybe<Scalars['Boolean']['input']>;
  hatMutable_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  hatMutable_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  hatImageUri?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_not?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_gt?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_lt?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_gte?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_lte?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatImageUri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatImageUri_contains?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HatCreatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<HatCreatedEvent_filter>>>;
};

export type HatCreatedEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'hatDetails'
  | 'hatMaxSupply'
  | 'hatEligibility'
  | 'hatToggle'
  | 'hatMutable'
  | 'hatImageUri';

export type HatDetailsChangedEvent = HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Tree;
  hat: Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Bytes']['output'];
  hatNewDetails: Scalars['String']['output'];
};

export type HatDetailsChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Hat_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hatNewDetails?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_not?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_gt?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_lt?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_gte?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_lte?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatNewDetails_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatNewDetails_contains?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HatDetailsChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<HatDetailsChangedEvent_filter>>>;
};

export type HatDetailsChangedEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'hatNewDetails';

export type HatEligibilityChangedEvent = HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Tree;
  hat: Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Bytes']['output'];
  hatNewEligibility: Scalars['String']['output'];
};

export type HatEligibilityChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Hat_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hatNewEligibility?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_not?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_gt?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_lt?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_gte?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_lte?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatNewEligibility_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatNewEligibility_contains?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HatEligibilityChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<HatEligibilityChangedEvent_filter>>>;
};

export type HatEligibilityChangedEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'hatNewEligibility';

export type HatImageURIChangedEvent = HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Tree;
  hat: Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Bytes']['output'];
  hatNewImageURI: Scalars['String']['output'];
};

export type HatImageURIChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Hat_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hatNewImageURI?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_not?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_gt?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_lt?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_gte?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_lte?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatNewImageURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatNewImageURI_contains?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HatImageURIChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<HatImageURIChangedEvent_filter>>>;
};

export type HatImageURIChangedEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'hatNewImageURI';

export type HatMaxSupplyChangedEvent = HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Tree;
  hat: Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Bytes']['output'];
  hatNewMaxSupply: Scalars['BigInt']['output'];
};

export type HatMaxSupplyChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Hat_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hatNewMaxSupply?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hatNewMaxSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HatMaxSupplyChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<HatMaxSupplyChangedEvent_filter>>>;
};

export type HatMaxSupplyChangedEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'hatNewMaxSupply';

export type HatMintedEvent = HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Tree;
  hat: Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Bytes']['output'];
  wearer: Wearer;
  operator: Scalars['String']['output'];
};

export type HatMintedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Hat_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  wearer?: InputMaybe<Scalars['String']['input']>;
  wearer_not?: InputMaybe<Scalars['String']['input']>;
  wearer_gt?: InputMaybe<Scalars['String']['input']>;
  wearer_lt?: InputMaybe<Scalars['String']['input']>;
  wearer_gte?: InputMaybe<Scalars['String']['input']>;
  wearer_lte?: InputMaybe<Scalars['String']['input']>;
  wearer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  wearer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  wearer_contains?: InputMaybe<Scalars['String']['input']>;
  wearer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  wearer_not_contains?: InputMaybe<Scalars['String']['input']>;
  wearer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  wearer_starts_with?: InputMaybe<Scalars['String']['input']>;
  wearer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wearer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  wearer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wearer_ends_with?: InputMaybe<Scalars['String']['input']>;
  wearer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wearer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  wearer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wearer_?: InputMaybe<Wearer_filter>;
  operator?: InputMaybe<Scalars['String']['input']>;
  operator_not?: InputMaybe<Scalars['String']['input']>;
  operator_gt?: InputMaybe<Scalars['String']['input']>;
  operator_lt?: InputMaybe<Scalars['String']['input']>;
  operator_gte?: InputMaybe<Scalars['String']['input']>;
  operator_lte?: InputMaybe<Scalars['String']['input']>;
  operator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  operator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  operator_contains?: InputMaybe<Scalars['String']['input']>;
  operator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  operator_not_contains?: InputMaybe<Scalars['String']['input']>;
  operator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  operator_starts_with?: InputMaybe<Scalars['String']['input']>;
  operator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  operator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operator_ends_with?: InputMaybe<Scalars['String']['input']>;
  operator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  operator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HatMintedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<HatMintedEvent_filter>>>;
};

export type HatMintedEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'wearer'
  | 'wearer__id'
  | 'operator';

export type HatMutabilityChangedEvent = HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Tree;
  hat: Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Bytes']['output'];
};

export type HatMutabilityChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Hat_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HatMutabilityChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<HatMutabilityChangedEvent_filter>>>;
};

export type HatMutabilityChangedEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID';

export type HatStatusChangedEvent = HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Tree;
  hat: Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Bytes']['output'];
  hatNewStatus: Scalars['Boolean']['output'];
};

export type HatStatusChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Hat_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hatNewStatus?: InputMaybe<Scalars['Boolean']['input']>;
  hatNewStatus_not?: InputMaybe<Scalars['Boolean']['input']>;
  hatNewStatus_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  hatNewStatus_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HatStatusChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<HatStatusChangedEvent_filter>>>;
};

export type HatStatusChangedEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'hatNewStatus';

export type HatToggleChangedEvent = HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Tree;
  hat: Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Bytes']['output'];
  hatNewToggle: Scalars['String']['output'];
};

export type HatToggleChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Hat_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hatNewToggle?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_not?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_gt?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_lt?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_gte?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_lte?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatNewToggle_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatNewToggle_contains?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HatToggleChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<HatToggleChangedEvent_filter>>>;
};

export type HatToggleChangedEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'hatNewToggle';

export type Hat_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  prettyId?: InputMaybe<Scalars['String']['input']>;
  prettyId_not?: InputMaybe<Scalars['String']['input']>;
  prettyId_gt?: InputMaybe<Scalars['String']['input']>;
  prettyId_lt?: InputMaybe<Scalars['String']['input']>;
  prettyId_gte?: InputMaybe<Scalars['String']['input']>;
  prettyId_lte?: InputMaybe<Scalars['String']['input']>;
  prettyId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  prettyId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  prettyId_contains?: InputMaybe<Scalars['String']['input']>;
  prettyId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  prettyId_not_contains?: InputMaybe<Scalars['String']['input']>;
  prettyId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  prettyId_starts_with?: InputMaybe<Scalars['String']['input']>;
  prettyId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  prettyId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  prettyId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  prettyId_ends_with?: InputMaybe<Scalars['String']['input']>;
  prettyId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  prettyId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  prettyId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  status_not?: InputMaybe<Scalars['Boolean']['input']>;
  status_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  status_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  details?: InputMaybe<Scalars['String']['input']>;
  details_not?: InputMaybe<Scalars['String']['input']>;
  details_gt?: InputMaybe<Scalars['String']['input']>;
  details_lt?: InputMaybe<Scalars['String']['input']>;
  details_gte?: InputMaybe<Scalars['String']['input']>;
  details_lte?: InputMaybe<Scalars['String']['input']>;
  details_in?: InputMaybe<Array<Scalars['String']['input']>>;
  details_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  details_contains?: InputMaybe<Scalars['String']['input']>;
  details_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  details_not_contains?: InputMaybe<Scalars['String']['input']>;
  details_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  details_starts_with?: InputMaybe<Scalars['String']['input']>;
  details_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  details_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  details_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  details_ends_with?: InputMaybe<Scalars['String']['input']>;
  details_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  details_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  details_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  maxSupply?: InputMaybe<Scalars['BigInt']['input']>;
  maxSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  maxSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eligibility?: InputMaybe<Scalars['String']['input']>;
  eligibility_not?: InputMaybe<Scalars['String']['input']>;
  eligibility_gt?: InputMaybe<Scalars['String']['input']>;
  eligibility_lt?: InputMaybe<Scalars['String']['input']>;
  eligibility_gte?: InputMaybe<Scalars['String']['input']>;
  eligibility_lte?: InputMaybe<Scalars['String']['input']>;
  eligibility_in?: InputMaybe<Array<Scalars['String']['input']>>;
  eligibility_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  eligibility_contains?: InputMaybe<Scalars['String']['input']>;
  eligibility_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  eligibility_not_contains?: InputMaybe<Scalars['String']['input']>;
  eligibility_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  eligibility_starts_with?: InputMaybe<Scalars['String']['input']>;
  eligibility_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  eligibility_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  eligibility_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  eligibility_ends_with?: InputMaybe<Scalars['String']['input']>;
  eligibility_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  eligibility_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  eligibility_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  toggle?: InputMaybe<Scalars['String']['input']>;
  toggle_not?: InputMaybe<Scalars['String']['input']>;
  toggle_gt?: InputMaybe<Scalars['String']['input']>;
  toggle_lt?: InputMaybe<Scalars['String']['input']>;
  toggle_gte?: InputMaybe<Scalars['String']['input']>;
  toggle_lte?: InputMaybe<Scalars['String']['input']>;
  toggle_in?: InputMaybe<Array<Scalars['String']['input']>>;
  toggle_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  toggle_contains?: InputMaybe<Scalars['String']['input']>;
  toggle_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  toggle_not_contains?: InputMaybe<Scalars['String']['input']>;
  toggle_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  toggle_starts_with?: InputMaybe<Scalars['String']['input']>;
  toggle_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  toggle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  toggle_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  toggle_ends_with?: InputMaybe<Scalars['String']['input']>;
  toggle_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  toggle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  toggle_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mutable?: InputMaybe<Scalars['Boolean']['input']>;
  mutable_not?: InputMaybe<Scalars['Boolean']['input']>;
  mutable_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  mutable_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  imageUri?: InputMaybe<Scalars['String']['input']>;
  imageUri_not?: InputMaybe<Scalars['String']['input']>;
  imageUri_gt?: InputMaybe<Scalars['String']['input']>;
  imageUri_lt?: InputMaybe<Scalars['String']['input']>;
  imageUri_gte?: InputMaybe<Scalars['String']['input']>;
  imageUri_lte?: InputMaybe<Scalars['String']['input']>;
  imageUri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  imageUri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  imageUri_contains?: InputMaybe<Scalars['String']['input']>;
  imageUri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  imageUri_not_contains?: InputMaybe<Scalars['String']['input']>;
  imageUri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  imageUri_starts_with?: InputMaybe<Scalars['String']['input']>;
  imageUri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  imageUri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  imageUri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  imageUri_ends_with?: InputMaybe<Scalars['String']['input']>;
  imageUri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  imageUri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  imageUri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  levelAtLocalTree?: InputMaybe<Scalars['Int']['input']>;
  levelAtLocalTree_not?: InputMaybe<Scalars['Int']['input']>;
  levelAtLocalTree_gt?: InputMaybe<Scalars['Int']['input']>;
  levelAtLocalTree_lt?: InputMaybe<Scalars['Int']['input']>;
  levelAtLocalTree_gte?: InputMaybe<Scalars['Int']['input']>;
  levelAtLocalTree_lte?: InputMaybe<Scalars['Int']['input']>;
  levelAtLocalTree_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  levelAtLocalTree_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  currentSupply?: InputMaybe<Scalars['BigInt']['input']>;
  currentSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Tree_filter>;
  wearers?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_?: InputMaybe<Wearer_filter>;
  admin?: InputMaybe<Scalars['String']['input']>;
  admin_not?: InputMaybe<Scalars['String']['input']>;
  admin_gt?: InputMaybe<Scalars['String']['input']>;
  admin_lt?: InputMaybe<Scalars['String']['input']>;
  admin_gte?: InputMaybe<Scalars['String']['input']>;
  admin_lte?: InputMaybe<Scalars['String']['input']>;
  admin_in?: InputMaybe<Array<Scalars['String']['input']>>;
  admin_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  admin_contains?: InputMaybe<Scalars['String']['input']>;
  admin_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_not_contains?: InputMaybe<Scalars['String']['input']>;
  admin_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_starts_with?: InputMaybe<Scalars['String']['input']>;
  admin_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  admin_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_ends_with?: InputMaybe<Scalars['String']['input']>;
  admin_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  admin_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_?: InputMaybe<Hat_filter>;
  badStandings?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_?: InputMaybe<Wearer_filter>;
  claimableBy_?: InputMaybe<ClaimsHatter_filter>;
  claimableForBy_?: InputMaybe<ClaimsHatter_filter>;
  linkRequestFromTree_?: InputMaybe<Tree_filter>;
  subHats_?: InputMaybe<Hat_filter>;
  linkedTrees_?: InputMaybe<Tree_filter>;
  events_?: InputMaybe<HatsEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Hat_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Hat_filter>>>;
};

export type Hat_orderBy =
  | 'id'
  | 'prettyId'
  | 'status'
  | 'createdAt'
  | 'details'
  | 'maxSupply'
  | 'eligibility'
  | 'toggle'
  | 'mutable'
  | 'imageUri'
  | 'levelAtLocalTree'
  | 'currentSupply'
  | 'tree'
  | 'tree__id'
  | 'wearers'
  | 'admin'
  | 'admin__id'
  | 'admin__prettyId'
  | 'admin__status'
  | 'admin__createdAt'
  | 'admin__details'
  | 'admin__maxSupply'
  | 'admin__eligibility'
  | 'admin__toggle'
  | 'admin__mutable'
  | 'admin__imageUri'
  | 'admin__levelAtLocalTree'
  | 'admin__currentSupply'
  | 'badStandings'
  | 'claimableBy'
  | 'claimableForBy'
  | 'linkRequestFromTree'
  | 'subHats'
  | 'linkedTrees'
  | 'events';

export type HatsEvent = {
  id: Scalars['ID']['output'];
  tree: Tree;
  hat: Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Bytes']['output'];
};

export type HatsEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Hat_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HatsEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<HatsEvent_filter>>>;
};

export type HatsEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  Ethereum_hat?: Maybe<Hat>;
  Ethereum_hats: Array<Hat>;
  Ethereum_wearer?: Maybe<Wearer>;
  Ethereum_wearers: Array<Wearer>;
  Ethereum_tree?: Maybe<Tree>;
  Ethereum_trees: Array<Tree>;
  Ethereum_hatCreatedEvent?: Maybe<HatCreatedEvent>;
  Ethereum_hatCreatedEvents: Array<HatCreatedEvent>;
  Ethereum_hatMintedEvent?: Maybe<HatMintedEvent>;
  Ethereum_hatMintedEvents: Array<HatMintedEvent>;
  Ethereum_hatBurnedEvent?: Maybe<HatBurnedEvent>;
  Ethereum_hatBurnedEvents: Array<HatBurnedEvent>;
  Ethereum_hatStatusChangedEvent?: Maybe<HatStatusChangedEvent>;
  Ethereum_hatStatusChangedEvents: Array<HatStatusChangedEvent>;
  Ethereum_hatDetailsChangedEvent?: Maybe<HatDetailsChangedEvent>;
  Ethereum_hatDetailsChangedEvents: Array<HatDetailsChangedEvent>;
  Ethereum_hatEligibilityChangedEvent?: Maybe<HatEligibilityChangedEvent>;
  Ethereum_hatEligibilityChangedEvents: Array<HatEligibilityChangedEvent>;
  Ethereum_hatToggleChangedEvent?: Maybe<HatToggleChangedEvent>;
  Ethereum_hatToggleChangedEvents: Array<HatToggleChangedEvent>;
  Ethereum_hatMutabilityChangedEvent?: Maybe<HatMutabilityChangedEvent>;
  Ethereum_hatMutabilityChangedEvents: Array<HatMutabilityChangedEvent>;
  Ethereum_hatMaxSupplyChangedEvent?: Maybe<HatMaxSupplyChangedEvent>;
  Ethereum_hatMaxSupplyChangedEvents: Array<HatMaxSupplyChangedEvent>;
  Ethereum_hatImageURIChangedEvent?: Maybe<HatImageURIChangedEvent>;
  Ethereum_hatImageURIChangedEvents: Array<HatImageURIChangedEvent>;
  Ethereum_topHatLinkRequestedEvent?: Maybe<TopHatLinkRequestedEvent>;
  Ethereum_topHatLinkRequestedEvents: Array<TopHatLinkRequestedEvent>;
  Ethereum_topHatLinkedEvent?: Maybe<TopHatLinkedEvent>;
  Ethereum_topHatLinkedEvents: Array<TopHatLinkedEvent>;
  Ethereum_wearerStandingChangedEvent?: Maybe<WearerStandingChangedEvent>;
  Ethereum_wearerStandingChangedEvents: Array<WearerStandingChangedEvent>;
  Ethereum_claimsHatter?: Maybe<ClaimsHatter>;
  Ethereum_claimsHatters: Array<ClaimsHatter>;
  Ethereum_hatsEvent?: Maybe<HatsEvent>;
  Ethereum_hatsEvents: Array<HatsEvent>;
  /** Access to subgraph metadata */
  Ethereum__meta?: Maybe<_Meta_>;
};


export type QueryEthereum_hatArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_hatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Hat_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Hat_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_wearerArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_wearersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Wearer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Wearer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_treeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_treesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Tree_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Tree_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_hatCreatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_hatCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HatCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HatCreatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_hatMintedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_hatMintedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HatMintedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HatMintedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_hatBurnedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_hatBurnedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HatBurnedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HatBurnedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_hatStatusChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_hatStatusChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HatStatusChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HatStatusChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_hatDetailsChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_hatDetailsChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HatDetailsChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HatDetailsChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_hatEligibilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_hatEligibilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HatEligibilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HatEligibilityChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_hatToggleChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_hatToggleChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HatToggleChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HatToggleChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_hatMutabilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_hatMutabilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HatMutabilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HatMutabilityChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_hatMaxSupplyChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_hatMaxSupplyChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HatMaxSupplyChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HatMaxSupplyChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_hatImageURIChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_hatImageURIChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HatImageURIChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HatImageURIChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_topHatLinkRequestedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_topHatLinkRequestedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TopHatLinkRequestedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TopHatLinkRequestedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_topHatLinkedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_topHatLinkedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TopHatLinkedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TopHatLinkedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_wearerStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_wearerStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WearerStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WearerStandingChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_claimsHatterArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_claimsHattersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimsHatter_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_hatsEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum_hatsEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HatsEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HatsEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEthereum__metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  Ethereum_hat?: Maybe<Hat>;
  Ethereum_hats: Array<Hat>;
  Ethereum_wearer?: Maybe<Wearer>;
  Ethereum_wearers: Array<Wearer>;
  Ethereum_tree?: Maybe<Tree>;
  Ethereum_trees: Array<Tree>;
  Ethereum_hatCreatedEvent?: Maybe<HatCreatedEvent>;
  Ethereum_hatCreatedEvents: Array<HatCreatedEvent>;
  Ethereum_hatMintedEvent?: Maybe<HatMintedEvent>;
  Ethereum_hatMintedEvents: Array<HatMintedEvent>;
  Ethereum_hatBurnedEvent?: Maybe<HatBurnedEvent>;
  Ethereum_hatBurnedEvents: Array<HatBurnedEvent>;
  Ethereum_hatStatusChangedEvent?: Maybe<HatStatusChangedEvent>;
  Ethereum_hatStatusChangedEvents: Array<HatStatusChangedEvent>;
  Ethereum_hatDetailsChangedEvent?: Maybe<HatDetailsChangedEvent>;
  Ethereum_hatDetailsChangedEvents: Array<HatDetailsChangedEvent>;
  Ethereum_hatEligibilityChangedEvent?: Maybe<HatEligibilityChangedEvent>;
  Ethereum_hatEligibilityChangedEvents: Array<HatEligibilityChangedEvent>;
  Ethereum_hatToggleChangedEvent?: Maybe<HatToggleChangedEvent>;
  Ethereum_hatToggleChangedEvents: Array<HatToggleChangedEvent>;
  Ethereum_hatMutabilityChangedEvent?: Maybe<HatMutabilityChangedEvent>;
  Ethereum_hatMutabilityChangedEvents: Array<HatMutabilityChangedEvent>;
  Ethereum_hatMaxSupplyChangedEvent?: Maybe<HatMaxSupplyChangedEvent>;
  Ethereum_hatMaxSupplyChangedEvents: Array<HatMaxSupplyChangedEvent>;
  Ethereum_hatImageURIChangedEvent?: Maybe<HatImageURIChangedEvent>;
  Ethereum_hatImageURIChangedEvents: Array<HatImageURIChangedEvent>;
  Ethereum_topHatLinkRequestedEvent?: Maybe<TopHatLinkRequestedEvent>;
  Ethereum_topHatLinkRequestedEvents: Array<TopHatLinkRequestedEvent>;
  Ethereum_topHatLinkedEvent?: Maybe<TopHatLinkedEvent>;
  Ethereum_topHatLinkedEvents: Array<TopHatLinkedEvent>;
  Ethereum_wearerStandingChangedEvent?: Maybe<WearerStandingChangedEvent>;
  Ethereum_wearerStandingChangedEvents: Array<WearerStandingChangedEvent>;
  Ethereum_claimsHatter?: Maybe<ClaimsHatter>;
  Ethereum_claimsHatters: Array<ClaimsHatter>;
  Ethereum_hatsEvent?: Maybe<HatsEvent>;
  Ethereum_hatsEvents: Array<HatsEvent>;
  /** Access to subgraph metadata */
  Ethereum__meta?: Maybe<_Meta_>;
};


export type SubscriptionEthereum_hatArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_hatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Hat_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Hat_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_wearerArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_wearersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Wearer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Wearer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_treeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_treesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Tree_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Tree_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_hatCreatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_hatCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HatCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HatCreatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_hatMintedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_hatMintedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HatMintedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HatMintedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_hatBurnedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_hatBurnedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HatBurnedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HatBurnedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_hatStatusChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_hatStatusChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HatStatusChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HatStatusChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_hatDetailsChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_hatDetailsChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HatDetailsChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HatDetailsChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_hatEligibilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_hatEligibilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HatEligibilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HatEligibilityChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_hatToggleChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_hatToggleChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HatToggleChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HatToggleChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_hatMutabilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_hatMutabilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HatMutabilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HatMutabilityChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_hatMaxSupplyChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_hatMaxSupplyChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HatMaxSupplyChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HatMaxSupplyChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_hatImageURIChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_hatImageURIChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HatImageURIChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HatImageURIChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_topHatLinkRequestedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_topHatLinkRequestedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TopHatLinkRequestedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TopHatLinkRequestedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_topHatLinkedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_topHatLinkedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TopHatLinkedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TopHatLinkedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_wearerStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_wearerStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WearerStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WearerStandingChangedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_claimsHatterArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_claimsHattersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimsHatter_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_hatsEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum_hatsEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HatsEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HatsEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEthereum__metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type TopHatLinkRequestedEvent = HatsEvent & {
  /** tree field is the tree that is being linked, hat field is the tree top hat */
  id: Scalars['ID']['output'];
  tree: Tree;
  hat: Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Bytes']['output'];
  newAdmin: Hat;
};

export type TopHatLinkRequestedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Hat_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newAdmin?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not?: InputMaybe<Scalars['String']['input']>;
  newAdmin_gt?: InputMaybe<Scalars['String']['input']>;
  newAdmin_lt?: InputMaybe<Scalars['String']['input']>;
  newAdmin_gte?: InputMaybe<Scalars['String']['input']>;
  newAdmin_lte?: InputMaybe<Scalars['String']['input']>;
  newAdmin_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newAdmin_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newAdmin_contains?: InputMaybe<Scalars['String']['input']>;
  newAdmin_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not_contains?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdmin_starts_with?: InputMaybe<Scalars['String']['input']>;
  newAdmin_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdmin_ends_with?: InputMaybe<Scalars['String']['input']>;
  newAdmin_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdmin_?: InputMaybe<Hat_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TopHatLinkRequestedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TopHatLinkRequestedEvent_filter>>>;
};

export type TopHatLinkRequestedEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'newAdmin'
  | 'newAdmin__id'
  | 'newAdmin__prettyId'
  | 'newAdmin__status'
  | 'newAdmin__createdAt'
  | 'newAdmin__details'
  | 'newAdmin__maxSupply'
  | 'newAdmin__eligibility'
  | 'newAdmin__toggle'
  | 'newAdmin__mutable'
  | 'newAdmin__imageUri'
  | 'newAdmin__levelAtLocalTree'
  | 'newAdmin__currentSupply';

export type TopHatLinkedEvent = HatsEvent & {
  /** tree field is the tree that is being linked, hat field is the tree top hat */
  id: Scalars['ID']['output'];
  tree: Tree;
  hat: Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Bytes']['output'];
  newAdmin: Hat;
};

export type TopHatLinkedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Hat_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newAdmin?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not?: InputMaybe<Scalars['String']['input']>;
  newAdmin_gt?: InputMaybe<Scalars['String']['input']>;
  newAdmin_lt?: InputMaybe<Scalars['String']['input']>;
  newAdmin_gte?: InputMaybe<Scalars['String']['input']>;
  newAdmin_lte?: InputMaybe<Scalars['String']['input']>;
  newAdmin_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newAdmin_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newAdmin_contains?: InputMaybe<Scalars['String']['input']>;
  newAdmin_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not_contains?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdmin_starts_with?: InputMaybe<Scalars['String']['input']>;
  newAdmin_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdmin_ends_with?: InputMaybe<Scalars['String']['input']>;
  newAdmin_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdmin_?: InputMaybe<Hat_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TopHatLinkedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TopHatLinkedEvent_filter>>>;
};

export type TopHatLinkedEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'newAdmin'
  | 'newAdmin__id'
  | 'newAdmin__prettyId'
  | 'newAdmin__status'
  | 'newAdmin__createdAt'
  | 'newAdmin__details'
  | 'newAdmin__maxSupply'
  | 'newAdmin__eligibility'
  | 'newAdmin__toggle'
  | 'newAdmin__mutable'
  | 'newAdmin__imageUri'
  | 'newAdmin__levelAtLocalTree'
  | 'newAdmin__currentSupply';

export type Tree = {
  /** Tree ID is its top hat domain - first 4 bytes of the top hat ID */
  id: Scalars['ID']['output'];
  childOfTree?: Maybe<Tree>;
  linkedToHat?: Maybe<Hat>;
  requestedLinkToTree?: Maybe<Tree>;
  requestedLinkToHat?: Maybe<Hat>;
  linkRequestFromTree: Array<Tree>;
  hats: Array<Hat>;
  parentOfTrees: Array<Tree>;
  events: Array<HatsEvent>;
};


export type TreelinkRequestFromTreeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Tree_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Tree_filter>;
};


export type TreehatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Hat_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Hat_filter>;
};


export type TreeparentOfTreesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Tree_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Tree_filter>;
};


export type TreeeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HatsEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HatsEvent_filter>;
};

export type Tree_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  childOfTree?: InputMaybe<Scalars['String']['input']>;
  childOfTree_not?: InputMaybe<Scalars['String']['input']>;
  childOfTree_gt?: InputMaybe<Scalars['String']['input']>;
  childOfTree_lt?: InputMaybe<Scalars['String']['input']>;
  childOfTree_gte?: InputMaybe<Scalars['String']['input']>;
  childOfTree_lte?: InputMaybe<Scalars['String']['input']>;
  childOfTree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  childOfTree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  childOfTree_contains?: InputMaybe<Scalars['String']['input']>;
  childOfTree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  childOfTree_not_contains?: InputMaybe<Scalars['String']['input']>;
  childOfTree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  childOfTree_starts_with?: InputMaybe<Scalars['String']['input']>;
  childOfTree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  childOfTree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  childOfTree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  childOfTree_ends_with?: InputMaybe<Scalars['String']['input']>;
  childOfTree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  childOfTree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  childOfTree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  childOfTree_?: InputMaybe<Tree_filter>;
  linkedToHat?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_not?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_gt?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_lt?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_gte?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_lte?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  linkedToHat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  linkedToHat_contains?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_starts_with?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_ends_with?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_?: InputMaybe<Hat_filter>;
  requestedLinkToTree?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_not?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_gt?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_lt?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_gte?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_lte?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  requestedLinkToTree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  requestedLinkToTree_contains?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_not_contains?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_starts_with?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_ends_with?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_?: InputMaybe<Tree_filter>;
  requestedLinkToHat?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_not?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_gt?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_lt?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_gte?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_lte?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  requestedLinkToHat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  requestedLinkToHat_contains?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_not_contains?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_starts_with?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_ends_with?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_?: InputMaybe<Hat_filter>;
  linkRequestFromTree_?: InputMaybe<Tree_filter>;
  hats_?: InputMaybe<Hat_filter>;
  parentOfTrees_?: InputMaybe<Tree_filter>;
  events_?: InputMaybe<HatsEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Tree_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Tree_filter>>>;
};

export type Tree_orderBy =
  | 'id'
  | 'childOfTree'
  | 'childOfTree__id'
  | 'linkedToHat'
  | 'linkedToHat__id'
  | 'linkedToHat__prettyId'
  | 'linkedToHat__status'
  | 'linkedToHat__createdAt'
  | 'linkedToHat__details'
  | 'linkedToHat__maxSupply'
  | 'linkedToHat__eligibility'
  | 'linkedToHat__toggle'
  | 'linkedToHat__mutable'
  | 'linkedToHat__imageUri'
  | 'linkedToHat__levelAtLocalTree'
  | 'linkedToHat__currentSupply'
  | 'requestedLinkToTree'
  | 'requestedLinkToTree__id'
  | 'requestedLinkToHat'
  | 'requestedLinkToHat__id'
  | 'requestedLinkToHat__prettyId'
  | 'requestedLinkToHat__status'
  | 'requestedLinkToHat__createdAt'
  | 'requestedLinkToHat__details'
  | 'requestedLinkToHat__maxSupply'
  | 'requestedLinkToHat__eligibility'
  | 'requestedLinkToHat__toggle'
  | 'requestedLinkToHat__mutable'
  | 'requestedLinkToHat__imageUri'
  | 'requestedLinkToHat__levelAtLocalTree'
  | 'requestedLinkToHat__currentSupply'
  | 'linkRequestFromTree'
  | 'hats'
  | 'parentOfTrees'
  | 'events';

export type Wearer = {
  id: Scalars['ID']['output'];
  currentHats: Array<Hat>;
  mintEvent: Array<HatMintedEvent>;
  burnEvent: Array<HatBurnedEvent>;
};


export type WearercurrentHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Hat_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Hat_filter>;
};


export type WearermintEventArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HatMintedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HatMintedEvent_filter>;
};


export type WearerburnEventArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HatBurnedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HatBurnedEvent_filter>;
};

export type WearerStandingChangedEvent = HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Tree;
  hat: Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Bytes']['output'];
  wearer: Wearer;
  wearerStanding: Scalars['Boolean']['output'];
};

export type WearerStandingChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Hat_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  wearer?: InputMaybe<Scalars['String']['input']>;
  wearer_not?: InputMaybe<Scalars['String']['input']>;
  wearer_gt?: InputMaybe<Scalars['String']['input']>;
  wearer_lt?: InputMaybe<Scalars['String']['input']>;
  wearer_gte?: InputMaybe<Scalars['String']['input']>;
  wearer_lte?: InputMaybe<Scalars['String']['input']>;
  wearer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  wearer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  wearer_contains?: InputMaybe<Scalars['String']['input']>;
  wearer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  wearer_not_contains?: InputMaybe<Scalars['String']['input']>;
  wearer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  wearer_starts_with?: InputMaybe<Scalars['String']['input']>;
  wearer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wearer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  wearer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wearer_ends_with?: InputMaybe<Scalars['String']['input']>;
  wearer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wearer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  wearer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wearer_?: InputMaybe<Wearer_filter>;
  wearerStanding?: InputMaybe<Scalars['Boolean']['input']>;
  wearerStanding_not?: InputMaybe<Scalars['Boolean']['input']>;
  wearerStanding_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  wearerStanding_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<WearerStandingChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<WearerStandingChangedEvent_filter>>>;
};

export type WearerStandingChangedEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'wearer'
  | 'wearer__id'
  | 'wearerStanding';

export type Wearer_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  currentHats_?: InputMaybe<Hat_filter>;
  mintEvent_?: InputMaybe<HatMintedEvent_filter>;
  burnEvent_?: InputMaybe<HatBurnedEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Wearer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Wearer_filter>>>;
};

export type Wearer_orderBy =
  | 'id'
  | 'currentHats'
  | 'mintEvent'
  | 'burnEvent';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  Ethereum_hat: InContextSdkMethod<Query['Ethereum_hat'], QueryEthereum_hatArgs, MeshContext>,
  /** null **/
  Ethereum_hats: InContextSdkMethod<Query['Ethereum_hats'], QueryEthereum_hatsArgs, MeshContext>,
  /** null **/
  Ethereum_wearer: InContextSdkMethod<Query['Ethereum_wearer'], QueryEthereum_wearerArgs, MeshContext>,
  /** null **/
  Ethereum_wearers: InContextSdkMethod<Query['Ethereum_wearers'], QueryEthereum_wearersArgs, MeshContext>,
  /** null **/
  Ethereum_tree: InContextSdkMethod<Query['Ethereum_tree'], QueryEthereum_treeArgs, MeshContext>,
  /** null **/
  Ethereum_trees: InContextSdkMethod<Query['Ethereum_trees'], QueryEthereum_treesArgs, MeshContext>,
  /** null **/
  Ethereum_hatCreatedEvent: InContextSdkMethod<Query['Ethereum_hatCreatedEvent'], QueryEthereum_hatCreatedEventArgs, MeshContext>,
  /** null **/
  Ethereum_hatCreatedEvents: InContextSdkMethod<Query['Ethereum_hatCreatedEvents'], QueryEthereum_hatCreatedEventsArgs, MeshContext>,
  /** null **/
  Ethereum_hatMintedEvent: InContextSdkMethod<Query['Ethereum_hatMintedEvent'], QueryEthereum_hatMintedEventArgs, MeshContext>,
  /** null **/
  Ethereum_hatMintedEvents: InContextSdkMethod<Query['Ethereum_hatMintedEvents'], QueryEthereum_hatMintedEventsArgs, MeshContext>,
  /** null **/
  Ethereum_hatBurnedEvent: InContextSdkMethod<Query['Ethereum_hatBurnedEvent'], QueryEthereum_hatBurnedEventArgs, MeshContext>,
  /** null **/
  Ethereum_hatBurnedEvents: InContextSdkMethod<Query['Ethereum_hatBurnedEvents'], QueryEthereum_hatBurnedEventsArgs, MeshContext>,
  /** null **/
  Ethereum_hatStatusChangedEvent: InContextSdkMethod<Query['Ethereum_hatStatusChangedEvent'], QueryEthereum_hatStatusChangedEventArgs, MeshContext>,
  /** null **/
  Ethereum_hatStatusChangedEvents: InContextSdkMethod<Query['Ethereum_hatStatusChangedEvents'], QueryEthereum_hatStatusChangedEventsArgs, MeshContext>,
  /** null **/
  Ethereum_hatDetailsChangedEvent: InContextSdkMethod<Query['Ethereum_hatDetailsChangedEvent'], QueryEthereum_hatDetailsChangedEventArgs, MeshContext>,
  /** null **/
  Ethereum_hatDetailsChangedEvents: InContextSdkMethod<Query['Ethereum_hatDetailsChangedEvents'], QueryEthereum_hatDetailsChangedEventsArgs, MeshContext>,
  /** null **/
  Ethereum_hatEligibilityChangedEvent: InContextSdkMethod<Query['Ethereum_hatEligibilityChangedEvent'], QueryEthereum_hatEligibilityChangedEventArgs, MeshContext>,
  /** null **/
  Ethereum_hatEligibilityChangedEvents: InContextSdkMethod<Query['Ethereum_hatEligibilityChangedEvents'], QueryEthereum_hatEligibilityChangedEventsArgs, MeshContext>,
  /** null **/
  Ethereum_hatToggleChangedEvent: InContextSdkMethod<Query['Ethereum_hatToggleChangedEvent'], QueryEthereum_hatToggleChangedEventArgs, MeshContext>,
  /** null **/
  Ethereum_hatToggleChangedEvents: InContextSdkMethod<Query['Ethereum_hatToggleChangedEvents'], QueryEthereum_hatToggleChangedEventsArgs, MeshContext>,
  /** null **/
  Ethereum_hatMutabilityChangedEvent: InContextSdkMethod<Query['Ethereum_hatMutabilityChangedEvent'], QueryEthereum_hatMutabilityChangedEventArgs, MeshContext>,
  /** null **/
  Ethereum_hatMutabilityChangedEvents: InContextSdkMethod<Query['Ethereum_hatMutabilityChangedEvents'], QueryEthereum_hatMutabilityChangedEventsArgs, MeshContext>,
  /** null **/
  Ethereum_hatMaxSupplyChangedEvent: InContextSdkMethod<Query['Ethereum_hatMaxSupplyChangedEvent'], QueryEthereum_hatMaxSupplyChangedEventArgs, MeshContext>,
  /** null **/
  Ethereum_hatMaxSupplyChangedEvents: InContextSdkMethod<Query['Ethereum_hatMaxSupplyChangedEvents'], QueryEthereum_hatMaxSupplyChangedEventsArgs, MeshContext>,
  /** null **/
  Ethereum_hatImageURIChangedEvent: InContextSdkMethod<Query['Ethereum_hatImageURIChangedEvent'], QueryEthereum_hatImageURIChangedEventArgs, MeshContext>,
  /** null **/
  Ethereum_hatImageURIChangedEvents: InContextSdkMethod<Query['Ethereum_hatImageURIChangedEvents'], QueryEthereum_hatImageURIChangedEventsArgs, MeshContext>,
  /** null **/
  Ethereum_topHatLinkRequestedEvent: InContextSdkMethod<Query['Ethereum_topHatLinkRequestedEvent'], QueryEthereum_topHatLinkRequestedEventArgs, MeshContext>,
  /** null **/
  Ethereum_topHatLinkRequestedEvents: InContextSdkMethod<Query['Ethereum_topHatLinkRequestedEvents'], QueryEthereum_topHatLinkRequestedEventsArgs, MeshContext>,
  /** null **/
  Ethereum_topHatLinkedEvent: InContextSdkMethod<Query['Ethereum_topHatLinkedEvent'], QueryEthereum_topHatLinkedEventArgs, MeshContext>,
  /** null **/
  Ethereum_topHatLinkedEvents: InContextSdkMethod<Query['Ethereum_topHatLinkedEvents'], QueryEthereum_topHatLinkedEventsArgs, MeshContext>,
  /** null **/
  Ethereum_wearerStandingChangedEvent: InContextSdkMethod<Query['Ethereum_wearerStandingChangedEvent'], QueryEthereum_wearerStandingChangedEventArgs, MeshContext>,
  /** null **/
  Ethereum_wearerStandingChangedEvents: InContextSdkMethod<Query['Ethereum_wearerStandingChangedEvents'], QueryEthereum_wearerStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Ethereum_claimsHatter: InContextSdkMethod<Query['Ethereum_claimsHatter'], QueryEthereum_claimsHatterArgs, MeshContext>,
  /** null **/
  Ethereum_claimsHatters: InContextSdkMethod<Query['Ethereum_claimsHatters'], QueryEthereum_claimsHattersArgs, MeshContext>,
  /** null **/
  Ethereum_hatsEvent: InContextSdkMethod<Query['Ethereum_hatsEvent'], QueryEthereum_hatsEventArgs, MeshContext>,
  /** null **/
  Ethereum_hatsEvents: InContextSdkMethod<Query['Ethereum_hatsEvents'], QueryEthereum_hatsEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Ethereum__meta: InContextSdkMethod<Query['Ethereum__meta'], QueryEthereum__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  Ethereum_hat: InContextSdkMethod<Subscription['Ethereum_hat'], SubscriptionEthereum_hatArgs, MeshContext>,
  /** null **/
  Ethereum_hats: InContextSdkMethod<Subscription['Ethereum_hats'], SubscriptionEthereum_hatsArgs, MeshContext>,
  /** null **/
  Ethereum_wearer: InContextSdkMethod<Subscription['Ethereum_wearer'], SubscriptionEthereum_wearerArgs, MeshContext>,
  /** null **/
  Ethereum_wearers: InContextSdkMethod<Subscription['Ethereum_wearers'], SubscriptionEthereum_wearersArgs, MeshContext>,
  /** null **/
  Ethereum_tree: InContextSdkMethod<Subscription['Ethereum_tree'], SubscriptionEthereum_treeArgs, MeshContext>,
  /** null **/
  Ethereum_trees: InContextSdkMethod<Subscription['Ethereum_trees'], SubscriptionEthereum_treesArgs, MeshContext>,
  /** null **/
  Ethereum_hatCreatedEvent: InContextSdkMethod<Subscription['Ethereum_hatCreatedEvent'], SubscriptionEthereum_hatCreatedEventArgs, MeshContext>,
  /** null **/
  Ethereum_hatCreatedEvents: InContextSdkMethod<Subscription['Ethereum_hatCreatedEvents'], SubscriptionEthereum_hatCreatedEventsArgs, MeshContext>,
  /** null **/
  Ethereum_hatMintedEvent: InContextSdkMethod<Subscription['Ethereum_hatMintedEvent'], SubscriptionEthereum_hatMintedEventArgs, MeshContext>,
  /** null **/
  Ethereum_hatMintedEvents: InContextSdkMethod<Subscription['Ethereum_hatMintedEvents'], SubscriptionEthereum_hatMintedEventsArgs, MeshContext>,
  /** null **/
  Ethereum_hatBurnedEvent: InContextSdkMethod<Subscription['Ethereum_hatBurnedEvent'], SubscriptionEthereum_hatBurnedEventArgs, MeshContext>,
  /** null **/
  Ethereum_hatBurnedEvents: InContextSdkMethod<Subscription['Ethereum_hatBurnedEvents'], SubscriptionEthereum_hatBurnedEventsArgs, MeshContext>,
  /** null **/
  Ethereum_hatStatusChangedEvent: InContextSdkMethod<Subscription['Ethereum_hatStatusChangedEvent'], SubscriptionEthereum_hatStatusChangedEventArgs, MeshContext>,
  /** null **/
  Ethereum_hatStatusChangedEvents: InContextSdkMethod<Subscription['Ethereum_hatStatusChangedEvents'], SubscriptionEthereum_hatStatusChangedEventsArgs, MeshContext>,
  /** null **/
  Ethereum_hatDetailsChangedEvent: InContextSdkMethod<Subscription['Ethereum_hatDetailsChangedEvent'], SubscriptionEthereum_hatDetailsChangedEventArgs, MeshContext>,
  /** null **/
  Ethereum_hatDetailsChangedEvents: InContextSdkMethod<Subscription['Ethereum_hatDetailsChangedEvents'], SubscriptionEthereum_hatDetailsChangedEventsArgs, MeshContext>,
  /** null **/
  Ethereum_hatEligibilityChangedEvent: InContextSdkMethod<Subscription['Ethereum_hatEligibilityChangedEvent'], SubscriptionEthereum_hatEligibilityChangedEventArgs, MeshContext>,
  /** null **/
  Ethereum_hatEligibilityChangedEvents: InContextSdkMethod<Subscription['Ethereum_hatEligibilityChangedEvents'], SubscriptionEthereum_hatEligibilityChangedEventsArgs, MeshContext>,
  /** null **/
  Ethereum_hatToggleChangedEvent: InContextSdkMethod<Subscription['Ethereum_hatToggleChangedEvent'], SubscriptionEthereum_hatToggleChangedEventArgs, MeshContext>,
  /** null **/
  Ethereum_hatToggleChangedEvents: InContextSdkMethod<Subscription['Ethereum_hatToggleChangedEvents'], SubscriptionEthereum_hatToggleChangedEventsArgs, MeshContext>,
  /** null **/
  Ethereum_hatMutabilityChangedEvent: InContextSdkMethod<Subscription['Ethereum_hatMutabilityChangedEvent'], SubscriptionEthereum_hatMutabilityChangedEventArgs, MeshContext>,
  /** null **/
  Ethereum_hatMutabilityChangedEvents: InContextSdkMethod<Subscription['Ethereum_hatMutabilityChangedEvents'], SubscriptionEthereum_hatMutabilityChangedEventsArgs, MeshContext>,
  /** null **/
  Ethereum_hatMaxSupplyChangedEvent: InContextSdkMethod<Subscription['Ethereum_hatMaxSupplyChangedEvent'], SubscriptionEthereum_hatMaxSupplyChangedEventArgs, MeshContext>,
  /** null **/
  Ethereum_hatMaxSupplyChangedEvents: InContextSdkMethod<Subscription['Ethereum_hatMaxSupplyChangedEvents'], SubscriptionEthereum_hatMaxSupplyChangedEventsArgs, MeshContext>,
  /** null **/
  Ethereum_hatImageURIChangedEvent: InContextSdkMethod<Subscription['Ethereum_hatImageURIChangedEvent'], SubscriptionEthereum_hatImageURIChangedEventArgs, MeshContext>,
  /** null **/
  Ethereum_hatImageURIChangedEvents: InContextSdkMethod<Subscription['Ethereum_hatImageURIChangedEvents'], SubscriptionEthereum_hatImageURIChangedEventsArgs, MeshContext>,
  /** null **/
  Ethereum_topHatLinkRequestedEvent: InContextSdkMethod<Subscription['Ethereum_topHatLinkRequestedEvent'], SubscriptionEthereum_topHatLinkRequestedEventArgs, MeshContext>,
  /** null **/
  Ethereum_topHatLinkRequestedEvents: InContextSdkMethod<Subscription['Ethereum_topHatLinkRequestedEvents'], SubscriptionEthereum_topHatLinkRequestedEventsArgs, MeshContext>,
  /** null **/
  Ethereum_topHatLinkedEvent: InContextSdkMethod<Subscription['Ethereum_topHatLinkedEvent'], SubscriptionEthereum_topHatLinkedEventArgs, MeshContext>,
  /** null **/
  Ethereum_topHatLinkedEvents: InContextSdkMethod<Subscription['Ethereum_topHatLinkedEvents'], SubscriptionEthereum_topHatLinkedEventsArgs, MeshContext>,
  /** null **/
  Ethereum_wearerStandingChangedEvent: InContextSdkMethod<Subscription['Ethereum_wearerStandingChangedEvent'], SubscriptionEthereum_wearerStandingChangedEventArgs, MeshContext>,
  /** null **/
  Ethereum_wearerStandingChangedEvents: InContextSdkMethod<Subscription['Ethereum_wearerStandingChangedEvents'], SubscriptionEthereum_wearerStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Ethereum_claimsHatter: InContextSdkMethod<Subscription['Ethereum_claimsHatter'], SubscriptionEthereum_claimsHatterArgs, MeshContext>,
  /** null **/
  Ethereum_claimsHatters: InContextSdkMethod<Subscription['Ethereum_claimsHatters'], SubscriptionEthereum_claimsHattersArgs, MeshContext>,
  /** null **/
  Ethereum_hatsEvent: InContextSdkMethod<Subscription['Ethereum_hatsEvent'], SubscriptionEthereum_hatsEventArgs, MeshContext>,
  /** null **/
  Ethereum_hatsEvents: InContextSdkMethod<Subscription['Ethereum_hatsEvents'], SubscriptionEthereum_hatsEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Ethereum__meta: InContextSdkMethod<Subscription['Ethereum__meta'], SubscriptionEthereum__metaArgs, MeshContext>
  };

  export type Context = {
      ["Main"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
