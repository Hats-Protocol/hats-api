// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace BaseSepoliaMainTypes {
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
  BaseSep_BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  BaseSep_Bytes: { input: any; output: any; }
  BaseSep_Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type BaseSep_Aggregation_interval =
  | 'hour'
  | 'day';

export type BaseSep_BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type BaseSep_Block_height = {
  hash?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type BaseSep_ClaimsHatter = {
  id: Scalars['ID']['output'];
  claimableHats: Array<BaseSep_Hat>;
  claimableForHats: Array<BaseSep_Hat>;
};


export type BaseSep_ClaimsHatterclaimableHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Hat_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Hat_filter>;
};


export type BaseSep_ClaimsHatterclaimableForHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Hat_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Hat_filter>;
};

export type BaseSep_ClaimsHatter_filter = {
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
  claimableHats_?: InputMaybe<BaseSep_Hat_filter>;
  claimableForHats?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_?: InputMaybe<BaseSep_Hat_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_ClaimsHatter_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_ClaimsHatter_filter>>>;
};

export type BaseSep_ClaimsHatter_orderBy =
  | 'id'
  | 'claimableHats'
  | 'claimableForHats';

export type BaseSep_Hat = {
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
  tree: BaseSep_Tree;
  wearers: Array<BaseSep_Wearer>;
  admin: BaseSep_Hat;
  badStandings: Array<BaseSep_Wearer>;
  claimableBy: Array<BaseSep_ClaimsHatter>;
  claimableForBy: Array<BaseSep_ClaimsHatter>;
  linkRequestFromTree: Array<BaseSep_Tree>;
  subHats: Array<BaseSep_Hat>;
  linkedTrees: Array<BaseSep_Tree>;
  events: Array<BaseSep_HatsEvent>;
};


export type BaseSep_HatwearersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Wearer_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Wearer_filter>;
};


export type BaseSep_HatbadStandingsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Wearer_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Wearer_filter>;
};


export type BaseSep_HatclaimableByArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_ClaimsHatter_filter>;
};


export type BaseSep_HatclaimableForByArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_ClaimsHatter_filter>;
};


export type BaseSep_HatlinkRequestFromTreeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Tree_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Tree_filter>;
};


export type BaseSep_HatsubHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Hat_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Hat_filter>;
};


export type BaseSep_HatlinkedTreesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Tree_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Tree_filter>;
};


export type BaseSep_HateventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsEvent_filter>;
};

export type BaseSep_HatBurnedEvent = BaseSep_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: BaseSep_Tree;
  hat: BaseSep_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  wearer: BaseSep_Wearer;
  operator: Scalars['String']['output'];
};

export type BaseSep_HatBurnedEvent_filter = {
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
  tree_?: InputMaybe<BaseSep_Tree_filter>;
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
  hat_?: InputMaybe<BaseSep_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
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
  wearer_?: InputMaybe<BaseSep_Wearer_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatBurnedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatBurnedEvent_filter>>>;
};

export type BaseSep_HatBurnedEvent_orderBy =
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

export type BaseSep_HatCreatedEvent = BaseSep_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: BaseSep_Tree;
  hat: BaseSep_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  hatDetails: Scalars['String']['output'];
  hatMaxSupply: Scalars['BigInt']['output'];
  hatEligibility: Scalars['String']['output'];
  hatToggle: Scalars['String']['output'];
  hatMutable: Scalars['Boolean']['output'];
  hatImageUri: Scalars['String']['output'];
};

export type BaseSep_HatCreatedEvent_filter = {
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
  tree_?: InputMaybe<BaseSep_Tree_filter>;
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
  hat_?: InputMaybe<BaseSep_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatCreatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatCreatedEvent_filter>>>;
};

export type BaseSep_HatCreatedEvent_orderBy =
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

export type BaseSep_HatDetailsChangedEvent = BaseSep_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: BaseSep_Tree;
  hat: BaseSep_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  hatNewDetails: Scalars['String']['output'];
};

export type BaseSep_HatDetailsChangedEvent_filter = {
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
  tree_?: InputMaybe<BaseSep_Tree_filter>;
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
  hat_?: InputMaybe<BaseSep_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatDetailsChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatDetailsChangedEvent_filter>>>;
};

export type BaseSep_HatDetailsChangedEvent_orderBy =
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

export type BaseSep_HatEligibilityChangedEvent = BaseSep_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: BaseSep_Tree;
  hat: BaseSep_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  hatNewEligibility: Scalars['String']['output'];
};

export type BaseSep_HatEligibilityChangedEvent_filter = {
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
  tree_?: InputMaybe<BaseSep_Tree_filter>;
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
  hat_?: InputMaybe<BaseSep_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatEligibilityChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatEligibilityChangedEvent_filter>>>;
};

export type BaseSep_HatEligibilityChangedEvent_orderBy =
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

export type BaseSep_HatImageURIChangedEvent = BaseSep_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: BaseSep_Tree;
  hat: BaseSep_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  hatNewImageURI: Scalars['String']['output'];
};

export type BaseSep_HatImageURIChangedEvent_filter = {
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
  tree_?: InputMaybe<BaseSep_Tree_filter>;
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
  hat_?: InputMaybe<BaseSep_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatImageURIChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatImageURIChangedEvent_filter>>>;
};

export type BaseSep_HatImageURIChangedEvent_orderBy =
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

export type BaseSep_HatMaxSupplyChangedEvent = BaseSep_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: BaseSep_Tree;
  hat: BaseSep_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  hatNewMaxSupply: Scalars['BigInt']['output'];
};

export type BaseSep_HatMaxSupplyChangedEvent_filter = {
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
  tree_?: InputMaybe<BaseSep_Tree_filter>;
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
  hat_?: InputMaybe<BaseSep_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  hatNewMaxSupply?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hatNewMaxSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatMaxSupplyChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatMaxSupplyChangedEvent_filter>>>;
};

export type BaseSep_HatMaxSupplyChangedEvent_orderBy =
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

export type BaseSep_HatMintedEvent = BaseSep_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: BaseSep_Tree;
  hat: BaseSep_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  wearer: BaseSep_Wearer;
  operator: Scalars['String']['output'];
};

export type BaseSep_HatMintedEvent_filter = {
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
  tree_?: InputMaybe<BaseSep_Tree_filter>;
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
  hat_?: InputMaybe<BaseSep_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
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
  wearer_?: InputMaybe<BaseSep_Wearer_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatMintedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatMintedEvent_filter>>>;
};

export type BaseSep_HatMintedEvent_orderBy =
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

export type BaseSep_HatMutabilityChangedEvent = BaseSep_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: BaseSep_Tree;
  hat: BaseSep_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
};

export type BaseSep_HatMutabilityChangedEvent_filter = {
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
  tree_?: InputMaybe<BaseSep_Tree_filter>;
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
  hat_?: InputMaybe<BaseSep_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatMutabilityChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatMutabilityChangedEvent_filter>>>;
};

export type BaseSep_HatMutabilityChangedEvent_orderBy =
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

export type BaseSep_HatStatusChangedEvent = BaseSep_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: BaseSep_Tree;
  hat: BaseSep_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  hatNewStatus: Scalars['Boolean']['output'];
};

export type BaseSep_HatStatusChangedEvent_filter = {
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
  tree_?: InputMaybe<BaseSep_Tree_filter>;
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
  hat_?: InputMaybe<BaseSep_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  hatNewStatus?: InputMaybe<Scalars['Boolean']['input']>;
  hatNewStatus_not?: InputMaybe<Scalars['Boolean']['input']>;
  hatNewStatus_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  hatNewStatus_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatStatusChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatStatusChangedEvent_filter>>>;
};

export type BaseSep_HatStatusChangedEvent_orderBy =
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

export type BaseSep_HatToggleChangedEvent = BaseSep_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: BaseSep_Tree;
  hat: BaseSep_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  hatNewToggle: Scalars['String']['output'];
};

export type BaseSep_HatToggleChangedEvent_filter = {
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
  tree_?: InputMaybe<BaseSep_Tree_filter>;
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
  hat_?: InputMaybe<BaseSep_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatToggleChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatToggleChangedEvent_filter>>>;
};

export type BaseSep_HatToggleChangedEvent_orderBy =
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

export type BaseSep_Hat_filter = {
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
  tree_?: InputMaybe<BaseSep_Tree_filter>;
  wearers?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_?: InputMaybe<BaseSep_Wearer_filter>;
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
  admin_?: InputMaybe<BaseSep_Hat_filter>;
  badStandings?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_?: InputMaybe<BaseSep_Wearer_filter>;
  claimableBy_?: InputMaybe<BaseSep_ClaimsHatter_filter>;
  claimableForBy_?: InputMaybe<BaseSep_ClaimsHatter_filter>;
  linkRequestFromTree_?: InputMaybe<BaseSep_Tree_filter>;
  subHats_?: InputMaybe<BaseSep_Hat_filter>;
  linkedTrees_?: InputMaybe<BaseSep_Tree_filter>;
  events_?: InputMaybe<BaseSep_HatsEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Hat_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Hat_filter>>>;
};

export type BaseSep_Hat_orderBy =
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

export type BaseSep_HatsEvent = {
  id: Scalars['ID']['output'];
  tree: BaseSep_Tree;
  hat: BaseSep_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
};

export type BaseSep_HatsEvent_filter = {
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
  tree_?: InputMaybe<BaseSep_Tree_filter>;
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
  hat_?: InputMaybe<BaseSep_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatsEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatsEvent_filter>>>;
};

export type BaseSep_HatsEvent_orderBy =
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
export type BaseSep_OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  BaseSep_hat?: Maybe<BaseSep_Hat>;
  BaseSep_hats: Array<BaseSep_Hat>;
  BaseSep_wearer?: Maybe<BaseSep_Wearer>;
  BaseSep_wearers: Array<BaseSep_Wearer>;
  BaseSep_tree?: Maybe<BaseSep_Tree>;
  BaseSep_trees: Array<BaseSep_Tree>;
  BaseSep_hatCreatedEvent?: Maybe<BaseSep_HatCreatedEvent>;
  BaseSep_hatCreatedEvents: Array<BaseSep_HatCreatedEvent>;
  BaseSep_hatMintedEvent?: Maybe<BaseSep_HatMintedEvent>;
  BaseSep_hatMintedEvents: Array<BaseSep_HatMintedEvent>;
  BaseSep_hatBurnedEvent?: Maybe<BaseSep_HatBurnedEvent>;
  BaseSep_hatBurnedEvents: Array<BaseSep_HatBurnedEvent>;
  BaseSep_hatStatusChangedEvent?: Maybe<BaseSep_HatStatusChangedEvent>;
  BaseSep_hatStatusChangedEvents: Array<BaseSep_HatStatusChangedEvent>;
  BaseSep_hatDetailsChangedEvent?: Maybe<BaseSep_HatDetailsChangedEvent>;
  BaseSep_hatDetailsChangedEvents: Array<BaseSep_HatDetailsChangedEvent>;
  BaseSep_hatEligibilityChangedEvent?: Maybe<BaseSep_HatEligibilityChangedEvent>;
  BaseSep_hatEligibilityChangedEvents: Array<BaseSep_HatEligibilityChangedEvent>;
  BaseSep_hatToggleChangedEvent?: Maybe<BaseSep_HatToggleChangedEvent>;
  BaseSep_hatToggleChangedEvents: Array<BaseSep_HatToggleChangedEvent>;
  BaseSep_hatMutabilityChangedEvent?: Maybe<BaseSep_HatMutabilityChangedEvent>;
  BaseSep_hatMutabilityChangedEvents: Array<BaseSep_HatMutabilityChangedEvent>;
  BaseSep_hatMaxSupplyChangedEvent?: Maybe<BaseSep_HatMaxSupplyChangedEvent>;
  BaseSep_hatMaxSupplyChangedEvents: Array<BaseSep_HatMaxSupplyChangedEvent>;
  BaseSep_hatImageURIChangedEvent?: Maybe<BaseSep_HatImageURIChangedEvent>;
  BaseSep_hatImageURIChangedEvents: Array<BaseSep_HatImageURIChangedEvent>;
  BaseSep_topHatLinkRequestedEvent?: Maybe<BaseSep_TopHatLinkRequestedEvent>;
  BaseSep_topHatLinkRequestedEvents: Array<BaseSep_TopHatLinkRequestedEvent>;
  BaseSep_topHatLinkedEvent?: Maybe<BaseSep_TopHatLinkedEvent>;
  BaseSep_topHatLinkedEvents: Array<BaseSep_TopHatLinkedEvent>;
  BaseSep_wearerStandingChangedEvent?: Maybe<BaseSep_WearerStandingChangedEvent>;
  BaseSep_wearerStandingChangedEvents: Array<BaseSep_WearerStandingChangedEvent>;
  BaseSep_claimsHatter?: Maybe<BaseSep_ClaimsHatter>;
  BaseSep_claimsHatters: Array<BaseSep_ClaimsHatter>;
  BaseSep_hatsEvent?: Maybe<BaseSep_HatsEvent>;
  BaseSep_hatsEvents: Array<BaseSep_HatsEvent>;
  /** Access to subgraph metadata */
  BaseSep__meta?: Maybe<BaseSep__Meta_>;
};


export type QueryBaseSep_hatArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Hat_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Hat_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_wearerArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_wearersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Wearer_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Wearer_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_treeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_treesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Tree_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Tree_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatCreatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatCreatedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatMintedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatMintedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatMintedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatMintedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatBurnedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatBurnedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatBurnedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatBurnedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatStatusChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatStatusChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatStatusChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatStatusChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatDetailsChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatDetailsChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatDetailsChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatDetailsChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatEligibilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatEligibilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatEligibilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatEligibilityChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatToggleChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatToggleChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatToggleChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatToggleChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatMutabilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatMutabilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatMutabilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatMutabilityChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatMaxSupplyChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatMaxSupplyChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatMaxSupplyChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatMaxSupplyChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatImageURIChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatImageURIChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatImageURIChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatImageURIChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_topHatLinkRequestedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_topHatLinkRequestedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_TopHatLinkRequestedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_TopHatLinkRequestedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_topHatLinkedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_topHatLinkedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_TopHatLinkedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_TopHatLinkedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_wearerStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_wearerStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_WearerStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_WearerStandingChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_claimsHatterArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_claimsHattersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_ClaimsHatter_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep__metaArgs = {
  block?: InputMaybe<BaseSep_Block_height>;
};

export type Subscription = {
  BaseSep_hat?: Maybe<BaseSep_Hat>;
  BaseSep_hats: Array<BaseSep_Hat>;
  BaseSep_wearer?: Maybe<BaseSep_Wearer>;
  BaseSep_wearers: Array<BaseSep_Wearer>;
  BaseSep_tree?: Maybe<BaseSep_Tree>;
  BaseSep_trees: Array<BaseSep_Tree>;
  BaseSep_hatCreatedEvent?: Maybe<BaseSep_HatCreatedEvent>;
  BaseSep_hatCreatedEvents: Array<BaseSep_HatCreatedEvent>;
  BaseSep_hatMintedEvent?: Maybe<BaseSep_HatMintedEvent>;
  BaseSep_hatMintedEvents: Array<BaseSep_HatMintedEvent>;
  BaseSep_hatBurnedEvent?: Maybe<BaseSep_HatBurnedEvent>;
  BaseSep_hatBurnedEvents: Array<BaseSep_HatBurnedEvent>;
  BaseSep_hatStatusChangedEvent?: Maybe<BaseSep_HatStatusChangedEvent>;
  BaseSep_hatStatusChangedEvents: Array<BaseSep_HatStatusChangedEvent>;
  BaseSep_hatDetailsChangedEvent?: Maybe<BaseSep_HatDetailsChangedEvent>;
  BaseSep_hatDetailsChangedEvents: Array<BaseSep_HatDetailsChangedEvent>;
  BaseSep_hatEligibilityChangedEvent?: Maybe<BaseSep_HatEligibilityChangedEvent>;
  BaseSep_hatEligibilityChangedEvents: Array<BaseSep_HatEligibilityChangedEvent>;
  BaseSep_hatToggleChangedEvent?: Maybe<BaseSep_HatToggleChangedEvent>;
  BaseSep_hatToggleChangedEvents: Array<BaseSep_HatToggleChangedEvent>;
  BaseSep_hatMutabilityChangedEvent?: Maybe<BaseSep_HatMutabilityChangedEvent>;
  BaseSep_hatMutabilityChangedEvents: Array<BaseSep_HatMutabilityChangedEvent>;
  BaseSep_hatMaxSupplyChangedEvent?: Maybe<BaseSep_HatMaxSupplyChangedEvent>;
  BaseSep_hatMaxSupplyChangedEvents: Array<BaseSep_HatMaxSupplyChangedEvent>;
  BaseSep_hatImageURIChangedEvent?: Maybe<BaseSep_HatImageURIChangedEvent>;
  BaseSep_hatImageURIChangedEvents: Array<BaseSep_HatImageURIChangedEvent>;
  BaseSep_topHatLinkRequestedEvent?: Maybe<BaseSep_TopHatLinkRequestedEvent>;
  BaseSep_topHatLinkRequestedEvents: Array<BaseSep_TopHatLinkRequestedEvent>;
  BaseSep_topHatLinkedEvent?: Maybe<BaseSep_TopHatLinkedEvent>;
  BaseSep_topHatLinkedEvents: Array<BaseSep_TopHatLinkedEvent>;
  BaseSep_wearerStandingChangedEvent?: Maybe<BaseSep_WearerStandingChangedEvent>;
  BaseSep_wearerStandingChangedEvents: Array<BaseSep_WearerStandingChangedEvent>;
  BaseSep_claimsHatter?: Maybe<BaseSep_ClaimsHatter>;
  BaseSep_claimsHatters: Array<BaseSep_ClaimsHatter>;
  BaseSep_hatsEvent?: Maybe<BaseSep_HatsEvent>;
  BaseSep_hatsEvents: Array<BaseSep_HatsEvent>;
  /** Access to subgraph metadata */
  BaseSep__meta?: Maybe<BaseSep__Meta_>;
};


export type SubscriptionBaseSep_hatArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Hat_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Hat_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_wearerArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_wearersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Wearer_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Wearer_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_treeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_treesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Tree_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Tree_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatCreatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatCreatedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatMintedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatMintedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatMintedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatMintedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatBurnedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatBurnedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatBurnedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatBurnedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatStatusChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatStatusChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatStatusChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatStatusChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatDetailsChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatDetailsChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatDetailsChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatDetailsChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatEligibilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatEligibilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatEligibilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatEligibilityChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatToggleChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatToggleChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatToggleChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatToggleChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatMutabilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatMutabilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatMutabilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatMutabilityChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatMaxSupplyChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatMaxSupplyChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatMaxSupplyChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatMaxSupplyChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatImageURIChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatImageURIChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatImageURIChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatImageURIChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_topHatLinkRequestedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_topHatLinkRequestedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_TopHatLinkRequestedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_TopHatLinkRequestedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_topHatLinkedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_topHatLinkedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_TopHatLinkedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_TopHatLinkedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_wearerStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_wearerStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_WearerStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_WearerStandingChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_claimsHatterArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_claimsHattersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_ClaimsHatter_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep__metaArgs = {
  block?: InputMaybe<BaseSep_Block_height>;
};

export type BaseSep_TopHatLinkRequestedEvent = BaseSep_HatsEvent & {
  /** tree field is the tree that is being linked, hat field is the tree top hat */
  id: Scalars['ID']['output'];
  tree: BaseSep_Tree;
  hat: BaseSep_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  newAdmin: BaseSep_Hat;
};

export type BaseSep_TopHatLinkRequestedEvent_filter = {
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
  tree_?: InputMaybe<BaseSep_Tree_filter>;
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
  hat_?: InputMaybe<BaseSep_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
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
  newAdmin_?: InputMaybe<BaseSep_Hat_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_TopHatLinkRequestedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_TopHatLinkRequestedEvent_filter>>>;
};

export type BaseSep_TopHatLinkRequestedEvent_orderBy =
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

export type BaseSep_TopHatLinkedEvent = BaseSep_HatsEvent & {
  /** tree field is the tree that is being linked, hat field is the tree top hat */
  id: Scalars['ID']['output'];
  tree: BaseSep_Tree;
  hat: BaseSep_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  newAdmin: BaseSep_Hat;
};

export type BaseSep_TopHatLinkedEvent_filter = {
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
  tree_?: InputMaybe<BaseSep_Tree_filter>;
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
  hat_?: InputMaybe<BaseSep_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
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
  newAdmin_?: InputMaybe<BaseSep_Hat_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_TopHatLinkedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_TopHatLinkedEvent_filter>>>;
};

export type BaseSep_TopHatLinkedEvent_orderBy =
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

export type BaseSep_Tree = {
  /** Tree ID is its top hat domain - first 4 bytes of the top hat ID */
  id: Scalars['ID']['output'];
  childOfTree?: Maybe<BaseSep_Tree>;
  linkedToHat?: Maybe<BaseSep_Hat>;
  requestedLinkToTree?: Maybe<BaseSep_Tree>;
  requestedLinkToHat?: Maybe<BaseSep_Hat>;
  linkRequestFromTree: Array<BaseSep_Tree>;
  hats: Array<BaseSep_Hat>;
  parentOfTrees: Array<BaseSep_Tree>;
  events: Array<BaseSep_HatsEvent>;
};


export type BaseSep_TreelinkRequestFromTreeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Tree_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Tree_filter>;
};


export type BaseSep_TreehatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Hat_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Hat_filter>;
};


export type BaseSep_TreeparentOfTreesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Tree_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Tree_filter>;
};


export type BaseSep_TreeeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsEvent_filter>;
};

export type BaseSep_Tree_filter = {
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
  childOfTree_?: InputMaybe<BaseSep_Tree_filter>;
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
  linkedToHat_?: InputMaybe<BaseSep_Hat_filter>;
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
  requestedLinkToTree_?: InputMaybe<BaseSep_Tree_filter>;
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
  requestedLinkToHat_?: InputMaybe<BaseSep_Hat_filter>;
  linkRequestFromTree_?: InputMaybe<BaseSep_Tree_filter>;
  hats_?: InputMaybe<BaseSep_Hat_filter>;
  parentOfTrees_?: InputMaybe<BaseSep_Tree_filter>;
  events_?: InputMaybe<BaseSep_HatsEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Tree_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Tree_filter>>>;
};

export type BaseSep_Tree_orderBy =
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

export type BaseSep_Wearer = {
  id: Scalars['ID']['output'];
  currentHats: Array<BaseSep_Hat>;
  mintEvent: Array<BaseSep_HatMintedEvent>;
  burnEvent: Array<BaseSep_HatBurnedEvent>;
};


export type BaseSep_WearercurrentHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Hat_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Hat_filter>;
};


export type BaseSep_WearermintEventArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatMintedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatMintedEvent_filter>;
};


export type BaseSep_WearerburnEventArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatBurnedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatBurnedEvent_filter>;
};

export type BaseSep_WearerStandingChangedEvent = BaseSep_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: BaseSep_Tree;
  hat: BaseSep_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  wearer: BaseSep_Wearer;
  wearerStanding: Scalars['Boolean']['output'];
};

export type BaseSep_WearerStandingChangedEvent_filter = {
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
  tree_?: InputMaybe<BaseSep_Tree_filter>;
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
  hat_?: InputMaybe<BaseSep_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
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
  wearer_?: InputMaybe<BaseSep_Wearer_filter>;
  wearerStanding?: InputMaybe<Scalars['Boolean']['input']>;
  wearerStanding_not?: InputMaybe<Scalars['Boolean']['input']>;
  wearerStanding_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  wearerStanding_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_WearerStandingChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_WearerStandingChangedEvent_filter>>>;
};

export type BaseSep_WearerStandingChangedEvent_orderBy =
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

export type BaseSep_Wearer_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  currentHats_?: InputMaybe<BaseSep_Hat_filter>;
  mintEvent_?: InputMaybe<BaseSep_HatMintedEvent_filter>;
  burnEvent_?: InputMaybe<BaseSep_HatBurnedEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Wearer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Wearer_filter>>>;
};

export type BaseSep_Wearer_orderBy =
  | 'id'
  | 'currentHats'
  | 'mintEvent'
  | 'burnEvent';

export type BaseSep__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['BaseSep_Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['BaseSep_Bytes']['output']>;
};

/** The type for the top-level _meta field */
export type BaseSep__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: BaseSep__Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type BaseSep__SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  BaseSep_hat: InContextSdkMethod<Query['BaseSep_hat'], QueryBaseSep_hatArgs, MeshContext>,
  /** null **/
  BaseSep_hats: InContextSdkMethod<Query['BaseSep_hats'], QueryBaseSep_hatsArgs, MeshContext>,
  /** null **/
  BaseSep_wearer: InContextSdkMethod<Query['BaseSep_wearer'], QueryBaseSep_wearerArgs, MeshContext>,
  /** null **/
  BaseSep_wearers: InContextSdkMethod<Query['BaseSep_wearers'], QueryBaseSep_wearersArgs, MeshContext>,
  /** null **/
  BaseSep_tree: InContextSdkMethod<Query['BaseSep_tree'], QueryBaseSep_treeArgs, MeshContext>,
  /** null **/
  BaseSep_trees: InContextSdkMethod<Query['BaseSep_trees'], QueryBaseSep_treesArgs, MeshContext>,
  /** null **/
  BaseSep_hatCreatedEvent: InContextSdkMethod<Query['BaseSep_hatCreatedEvent'], QueryBaseSep_hatCreatedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatCreatedEvents: InContextSdkMethod<Query['BaseSep_hatCreatedEvents'], QueryBaseSep_hatCreatedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatMintedEvent: InContextSdkMethod<Query['BaseSep_hatMintedEvent'], QueryBaseSep_hatMintedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatMintedEvents: InContextSdkMethod<Query['BaseSep_hatMintedEvents'], QueryBaseSep_hatMintedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatBurnedEvent: InContextSdkMethod<Query['BaseSep_hatBurnedEvent'], QueryBaseSep_hatBurnedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatBurnedEvents: InContextSdkMethod<Query['BaseSep_hatBurnedEvents'], QueryBaseSep_hatBurnedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatStatusChangedEvent: InContextSdkMethod<Query['BaseSep_hatStatusChangedEvent'], QueryBaseSep_hatStatusChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatStatusChangedEvents: InContextSdkMethod<Query['BaseSep_hatStatusChangedEvents'], QueryBaseSep_hatStatusChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatDetailsChangedEvent: InContextSdkMethod<Query['BaseSep_hatDetailsChangedEvent'], QueryBaseSep_hatDetailsChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatDetailsChangedEvents: InContextSdkMethod<Query['BaseSep_hatDetailsChangedEvents'], QueryBaseSep_hatDetailsChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatEligibilityChangedEvent: InContextSdkMethod<Query['BaseSep_hatEligibilityChangedEvent'], QueryBaseSep_hatEligibilityChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatEligibilityChangedEvents: InContextSdkMethod<Query['BaseSep_hatEligibilityChangedEvents'], QueryBaseSep_hatEligibilityChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatToggleChangedEvent: InContextSdkMethod<Query['BaseSep_hatToggleChangedEvent'], QueryBaseSep_hatToggleChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatToggleChangedEvents: InContextSdkMethod<Query['BaseSep_hatToggleChangedEvents'], QueryBaseSep_hatToggleChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatMutabilityChangedEvent: InContextSdkMethod<Query['BaseSep_hatMutabilityChangedEvent'], QueryBaseSep_hatMutabilityChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatMutabilityChangedEvents: InContextSdkMethod<Query['BaseSep_hatMutabilityChangedEvents'], QueryBaseSep_hatMutabilityChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatMaxSupplyChangedEvent: InContextSdkMethod<Query['BaseSep_hatMaxSupplyChangedEvent'], QueryBaseSep_hatMaxSupplyChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatMaxSupplyChangedEvents: InContextSdkMethod<Query['BaseSep_hatMaxSupplyChangedEvents'], QueryBaseSep_hatMaxSupplyChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatImageURIChangedEvent: InContextSdkMethod<Query['BaseSep_hatImageURIChangedEvent'], QueryBaseSep_hatImageURIChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatImageURIChangedEvents: InContextSdkMethod<Query['BaseSep_hatImageURIChangedEvents'], QueryBaseSep_hatImageURIChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_topHatLinkRequestedEvent: InContextSdkMethod<Query['BaseSep_topHatLinkRequestedEvent'], QueryBaseSep_topHatLinkRequestedEventArgs, MeshContext>,
  /** null **/
  BaseSep_topHatLinkRequestedEvents: InContextSdkMethod<Query['BaseSep_topHatLinkRequestedEvents'], QueryBaseSep_topHatLinkRequestedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_topHatLinkedEvent: InContextSdkMethod<Query['BaseSep_topHatLinkedEvent'], QueryBaseSep_topHatLinkedEventArgs, MeshContext>,
  /** null **/
  BaseSep_topHatLinkedEvents: InContextSdkMethod<Query['BaseSep_topHatLinkedEvents'], QueryBaseSep_topHatLinkedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_wearerStandingChangedEvent: InContextSdkMethod<Query['BaseSep_wearerStandingChangedEvent'], QueryBaseSep_wearerStandingChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_wearerStandingChangedEvents: InContextSdkMethod<Query['BaseSep_wearerStandingChangedEvents'], QueryBaseSep_wearerStandingChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_claimsHatter: InContextSdkMethod<Query['BaseSep_claimsHatter'], QueryBaseSep_claimsHatterArgs, MeshContext>,
  /** null **/
  BaseSep_claimsHatters: InContextSdkMethod<Query['BaseSep_claimsHatters'], QueryBaseSep_claimsHattersArgs, MeshContext>,
  /** null **/
  BaseSep_hatsEvent: InContextSdkMethod<Query['BaseSep_hatsEvent'], QueryBaseSep_hatsEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsEvents: InContextSdkMethod<Query['BaseSep_hatsEvents'], QueryBaseSep_hatsEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  BaseSep__meta: InContextSdkMethod<Query['BaseSep__meta'], QueryBaseSep__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  BaseSep_hat: InContextSdkMethod<Subscription['BaseSep_hat'], SubscriptionBaseSep_hatArgs, MeshContext>,
  /** null **/
  BaseSep_hats: InContextSdkMethod<Subscription['BaseSep_hats'], SubscriptionBaseSep_hatsArgs, MeshContext>,
  /** null **/
  BaseSep_wearer: InContextSdkMethod<Subscription['BaseSep_wearer'], SubscriptionBaseSep_wearerArgs, MeshContext>,
  /** null **/
  BaseSep_wearers: InContextSdkMethod<Subscription['BaseSep_wearers'], SubscriptionBaseSep_wearersArgs, MeshContext>,
  /** null **/
  BaseSep_tree: InContextSdkMethod<Subscription['BaseSep_tree'], SubscriptionBaseSep_treeArgs, MeshContext>,
  /** null **/
  BaseSep_trees: InContextSdkMethod<Subscription['BaseSep_trees'], SubscriptionBaseSep_treesArgs, MeshContext>,
  /** null **/
  BaseSep_hatCreatedEvent: InContextSdkMethod<Subscription['BaseSep_hatCreatedEvent'], SubscriptionBaseSep_hatCreatedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatCreatedEvents: InContextSdkMethod<Subscription['BaseSep_hatCreatedEvents'], SubscriptionBaseSep_hatCreatedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatMintedEvent: InContextSdkMethod<Subscription['BaseSep_hatMintedEvent'], SubscriptionBaseSep_hatMintedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatMintedEvents: InContextSdkMethod<Subscription['BaseSep_hatMintedEvents'], SubscriptionBaseSep_hatMintedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatBurnedEvent: InContextSdkMethod<Subscription['BaseSep_hatBurnedEvent'], SubscriptionBaseSep_hatBurnedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatBurnedEvents: InContextSdkMethod<Subscription['BaseSep_hatBurnedEvents'], SubscriptionBaseSep_hatBurnedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatStatusChangedEvent: InContextSdkMethod<Subscription['BaseSep_hatStatusChangedEvent'], SubscriptionBaseSep_hatStatusChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatStatusChangedEvents: InContextSdkMethod<Subscription['BaseSep_hatStatusChangedEvents'], SubscriptionBaseSep_hatStatusChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatDetailsChangedEvent: InContextSdkMethod<Subscription['BaseSep_hatDetailsChangedEvent'], SubscriptionBaseSep_hatDetailsChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatDetailsChangedEvents: InContextSdkMethod<Subscription['BaseSep_hatDetailsChangedEvents'], SubscriptionBaseSep_hatDetailsChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatEligibilityChangedEvent: InContextSdkMethod<Subscription['BaseSep_hatEligibilityChangedEvent'], SubscriptionBaseSep_hatEligibilityChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatEligibilityChangedEvents: InContextSdkMethod<Subscription['BaseSep_hatEligibilityChangedEvents'], SubscriptionBaseSep_hatEligibilityChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatToggleChangedEvent: InContextSdkMethod<Subscription['BaseSep_hatToggleChangedEvent'], SubscriptionBaseSep_hatToggleChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatToggleChangedEvents: InContextSdkMethod<Subscription['BaseSep_hatToggleChangedEvents'], SubscriptionBaseSep_hatToggleChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatMutabilityChangedEvent: InContextSdkMethod<Subscription['BaseSep_hatMutabilityChangedEvent'], SubscriptionBaseSep_hatMutabilityChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatMutabilityChangedEvents: InContextSdkMethod<Subscription['BaseSep_hatMutabilityChangedEvents'], SubscriptionBaseSep_hatMutabilityChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatMaxSupplyChangedEvent: InContextSdkMethod<Subscription['BaseSep_hatMaxSupplyChangedEvent'], SubscriptionBaseSep_hatMaxSupplyChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatMaxSupplyChangedEvents: InContextSdkMethod<Subscription['BaseSep_hatMaxSupplyChangedEvents'], SubscriptionBaseSep_hatMaxSupplyChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatImageURIChangedEvent: InContextSdkMethod<Subscription['BaseSep_hatImageURIChangedEvent'], SubscriptionBaseSep_hatImageURIChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatImageURIChangedEvents: InContextSdkMethod<Subscription['BaseSep_hatImageURIChangedEvents'], SubscriptionBaseSep_hatImageURIChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_topHatLinkRequestedEvent: InContextSdkMethod<Subscription['BaseSep_topHatLinkRequestedEvent'], SubscriptionBaseSep_topHatLinkRequestedEventArgs, MeshContext>,
  /** null **/
  BaseSep_topHatLinkRequestedEvents: InContextSdkMethod<Subscription['BaseSep_topHatLinkRequestedEvents'], SubscriptionBaseSep_topHatLinkRequestedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_topHatLinkedEvent: InContextSdkMethod<Subscription['BaseSep_topHatLinkedEvent'], SubscriptionBaseSep_topHatLinkedEventArgs, MeshContext>,
  /** null **/
  BaseSep_topHatLinkedEvents: InContextSdkMethod<Subscription['BaseSep_topHatLinkedEvents'], SubscriptionBaseSep_topHatLinkedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_wearerStandingChangedEvent: InContextSdkMethod<Subscription['BaseSep_wearerStandingChangedEvent'], SubscriptionBaseSep_wearerStandingChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_wearerStandingChangedEvents: InContextSdkMethod<Subscription['BaseSep_wearerStandingChangedEvents'], SubscriptionBaseSep_wearerStandingChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_claimsHatter: InContextSdkMethod<Subscription['BaseSep_claimsHatter'], SubscriptionBaseSep_claimsHatterArgs, MeshContext>,
  /** null **/
  BaseSep_claimsHatters: InContextSdkMethod<Subscription['BaseSep_claimsHatters'], SubscriptionBaseSep_claimsHattersArgs, MeshContext>,
  /** null **/
  BaseSep_hatsEvent: InContextSdkMethod<Subscription['BaseSep_hatsEvent'], SubscriptionBaseSep_hatsEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsEvents: InContextSdkMethod<Subscription['BaseSep_hatsEvents'], SubscriptionBaseSep_hatsEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  BaseSep__meta: InContextSdkMethod<Subscription['BaseSep__meta'], SubscriptionBaseSep__metaArgs, MeshContext>
  };

  export type Context = {
      ["BaseSepolia_Main"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
