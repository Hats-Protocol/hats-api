// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ArbitrumMainTypes {
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
  Arb_BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Arb_Bytes: { input: any; output: any; }
  Arb_Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Arb_Aggregation_interval =
  | 'hour'
  | 'day';

export type Arb_BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Arb_Block_height = {
  hash?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Arb_ClaimsHatter = {
  id: Scalars['ID']['output'];
  claimableHats: Array<Arb_Hat>;
  claimableForHats: Array<Arb_Hat>;
};


export type Arb_ClaimsHatterclaimableHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Hat_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Hat_filter>;
};


export type Arb_ClaimsHatterclaimableForHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Hat_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Hat_filter>;
};

export type Arb_ClaimsHatter_filter = {
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
  claimableHats_?: InputMaybe<Arb_Hat_filter>;
  claimableForHats?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_?: InputMaybe<Arb_Hat_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_ClaimsHatter_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_ClaimsHatter_filter>>>;
};

export type Arb_ClaimsHatter_orderBy =
  | 'id'
  | 'claimableHats'
  | 'claimableForHats';

export type Arb_Hat = {
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
  tree: Arb_Tree;
  wearers: Array<Arb_Wearer>;
  admin: Arb_Hat;
  badStandings: Array<Arb_Wearer>;
  claimableBy: Array<Arb_ClaimsHatter>;
  claimableForBy: Array<Arb_ClaimsHatter>;
  linkRequestFromTree: Array<Arb_Tree>;
  subHats: Array<Arb_Hat>;
  linkedTrees: Array<Arb_Tree>;
  events: Array<Arb_HatsEvent>;
};


export type Arb_HatwearersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Wearer_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Wearer_filter>;
};


export type Arb_HatbadStandingsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Wearer_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Wearer_filter>;
};


export type Arb_HatclaimableByArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_ClaimsHatter_filter>;
};


export type Arb_HatclaimableForByArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_ClaimsHatter_filter>;
};


export type Arb_HatlinkRequestFromTreeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Tree_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Tree_filter>;
};


export type Arb_HatsubHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Hat_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Hat_filter>;
};


export type Arb_HatlinkedTreesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Tree_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Tree_filter>;
};


export type Arb_HateventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsEvent_filter>;
};

export type Arb_HatBurnedEvent = Arb_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Arb_Tree;
  hat: Arb_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  wearer: Arb_Wearer;
  operator: Scalars['String']['output'];
};

export type Arb_HatBurnedEvent_filter = {
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
  tree_?: InputMaybe<Arb_Tree_filter>;
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
  hat_?: InputMaybe<Arb_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
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
  wearer_?: InputMaybe<Arb_Wearer_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_HatBurnedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_HatBurnedEvent_filter>>>;
};

export type Arb_HatBurnedEvent_orderBy =
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

export type Arb_HatCreatedEvent = Arb_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Arb_Tree;
  hat: Arb_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  hatDetails: Scalars['String']['output'];
  hatMaxSupply: Scalars['BigInt']['output'];
  hatEligibility: Scalars['String']['output'];
  hatToggle: Scalars['String']['output'];
  hatMutable: Scalars['Boolean']['output'];
  hatImageUri: Scalars['String']['output'];
};

export type Arb_HatCreatedEvent_filter = {
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
  tree_?: InputMaybe<Arb_Tree_filter>;
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
  hat_?: InputMaybe<Arb_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_HatCreatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_HatCreatedEvent_filter>>>;
};

export type Arb_HatCreatedEvent_orderBy =
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

export type Arb_HatDetailsChangedEvent = Arb_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Arb_Tree;
  hat: Arb_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  hatNewDetails: Scalars['String']['output'];
};

export type Arb_HatDetailsChangedEvent_filter = {
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
  tree_?: InputMaybe<Arb_Tree_filter>;
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
  hat_?: InputMaybe<Arb_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_HatDetailsChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_HatDetailsChangedEvent_filter>>>;
};

export type Arb_HatDetailsChangedEvent_orderBy =
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

export type Arb_HatEligibilityChangedEvent = Arb_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Arb_Tree;
  hat: Arb_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  hatNewEligibility: Scalars['String']['output'];
};

export type Arb_HatEligibilityChangedEvent_filter = {
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
  tree_?: InputMaybe<Arb_Tree_filter>;
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
  hat_?: InputMaybe<Arb_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_HatEligibilityChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_HatEligibilityChangedEvent_filter>>>;
};

export type Arb_HatEligibilityChangedEvent_orderBy =
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

export type Arb_HatImageURIChangedEvent = Arb_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Arb_Tree;
  hat: Arb_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  hatNewImageURI: Scalars['String']['output'];
};

export type Arb_HatImageURIChangedEvent_filter = {
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
  tree_?: InputMaybe<Arb_Tree_filter>;
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
  hat_?: InputMaybe<Arb_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_HatImageURIChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_HatImageURIChangedEvent_filter>>>;
};

export type Arb_HatImageURIChangedEvent_orderBy =
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

export type Arb_HatMaxSupplyChangedEvent = Arb_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Arb_Tree;
  hat: Arb_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  hatNewMaxSupply: Scalars['BigInt']['output'];
};

export type Arb_HatMaxSupplyChangedEvent_filter = {
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
  tree_?: InputMaybe<Arb_Tree_filter>;
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
  hat_?: InputMaybe<Arb_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  hatNewMaxSupply?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hatNewMaxSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_HatMaxSupplyChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_HatMaxSupplyChangedEvent_filter>>>;
};

export type Arb_HatMaxSupplyChangedEvent_orderBy =
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

export type Arb_HatMintedEvent = Arb_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Arb_Tree;
  hat: Arb_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  wearer: Arb_Wearer;
  operator: Scalars['String']['output'];
};

export type Arb_HatMintedEvent_filter = {
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
  tree_?: InputMaybe<Arb_Tree_filter>;
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
  hat_?: InputMaybe<Arb_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
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
  wearer_?: InputMaybe<Arb_Wearer_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_HatMintedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_HatMintedEvent_filter>>>;
};

export type Arb_HatMintedEvent_orderBy =
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

export type Arb_HatMutabilityChangedEvent = Arb_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Arb_Tree;
  hat: Arb_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
};

export type Arb_HatMutabilityChangedEvent_filter = {
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
  tree_?: InputMaybe<Arb_Tree_filter>;
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
  hat_?: InputMaybe<Arb_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_HatMutabilityChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_HatMutabilityChangedEvent_filter>>>;
};

export type Arb_HatMutabilityChangedEvent_orderBy =
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

export type Arb_HatStatusChangedEvent = Arb_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Arb_Tree;
  hat: Arb_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  hatNewStatus: Scalars['Boolean']['output'];
};

export type Arb_HatStatusChangedEvent_filter = {
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
  tree_?: InputMaybe<Arb_Tree_filter>;
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
  hat_?: InputMaybe<Arb_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  hatNewStatus?: InputMaybe<Scalars['Boolean']['input']>;
  hatNewStatus_not?: InputMaybe<Scalars['Boolean']['input']>;
  hatNewStatus_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  hatNewStatus_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_HatStatusChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_HatStatusChangedEvent_filter>>>;
};

export type Arb_HatStatusChangedEvent_orderBy =
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

export type Arb_HatToggleChangedEvent = Arb_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Arb_Tree;
  hat: Arb_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  hatNewToggle: Scalars['String']['output'];
};

export type Arb_HatToggleChangedEvent_filter = {
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
  tree_?: InputMaybe<Arb_Tree_filter>;
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
  hat_?: InputMaybe<Arb_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_HatToggleChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_HatToggleChangedEvent_filter>>>;
};

export type Arb_HatToggleChangedEvent_orderBy =
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

export type Arb_Hat_filter = {
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
  tree_?: InputMaybe<Arb_Tree_filter>;
  wearers?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_?: InputMaybe<Arb_Wearer_filter>;
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
  admin_?: InputMaybe<Arb_Hat_filter>;
  badStandings?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_?: InputMaybe<Arb_Wearer_filter>;
  claimableBy_?: InputMaybe<Arb_ClaimsHatter_filter>;
  claimableForBy_?: InputMaybe<Arb_ClaimsHatter_filter>;
  linkRequestFromTree_?: InputMaybe<Arb_Tree_filter>;
  subHats_?: InputMaybe<Arb_Hat_filter>;
  linkedTrees_?: InputMaybe<Arb_Tree_filter>;
  events_?: InputMaybe<Arb_HatsEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Hat_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Hat_filter>>>;
};

export type Arb_Hat_orderBy =
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

export type Arb_HatsEvent = {
  id: Scalars['ID']['output'];
  tree: Arb_Tree;
  hat: Arb_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
};

export type Arb_HatsEvent_filter = {
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
  tree_?: InputMaybe<Arb_Tree_filter>;
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
  hat_?: InputMaybe<Arb_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_HatsEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_HatsEvent_filter>>>;
};

export type Arb_HatsEvent_orderBy =
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
export type Arb_OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  Arb_hat?: Maybe<Arb_Hat>;
  Arb_hats: Array<Arb_Hat>;
  Arb_wearer?: Maybe<Arb_Wearer>;
  Arb_wearers: Array<Arb_Wearer>;
  Arb_tree?: Maybe<Arb_Tree>;
  Arb_trees: Array<Arb_Tree>;
  Arb_hatCreatedEvent?: Maybe<Arb_HatCreatedEvent>;
  Arb_hatCreatedEvents: Array<Arb_HatCreatedEvent>;
  Arb_hatMintedEvent?: Maybe<Arb_HatMintedEvent>;
  Arb_hatMintedEvents: Array<Arb_HatMintedEvent>;
  Arb_hatBurnedEvent?: Maybe<Arb_HatBurnedEvent>;
  Arb_hatBurnedEvents: Array<Arb_HatBurnedEvent>;
  Arb_hatStatusChangedEvent?: Maybe<Arb_HatStatusChangedEvent>;
  Arb_hatStatusChangedEvents: Array<Arb_HatStatusChangedEvent>;
  Arb_hatDetailsChangedEvent?: Maybe<Arb_HatDetailsChangedEvent>;
  Arb_hatDetailsChangedEvents: Array<Arb_HatDetailsChangedEvent>;
  Arb_hatEligibilityChangedEvent?: Maybe<Arb_HatEligibilityChangedEvent>;
  Arb_hatEligibilityChangedEvents: Array<Arb_HatEligibilityChangedEvent>;
  Arb_hatToggleChangedEvent?: Maybe<Arb_HatToggleChangedEvent>;
  Arb_hatToggleChangedEvents: Array<Arb_HatToggleChangedEvent>;
  Arb_hatMutabilityChangedEvent?: Maybe<Arb_HatMutabilityChangedEvent>;
  Arb_hatMutabilityChangedEvents: Array<Arb_HatMutabilityChangedEvent>;
  Arb_hatMaxSupplyChangedEvent?: Maybe<Arb_HatMaxSupplyChangedEvent>;
  Arb_hatMaxSupplyChangedEvents: Array<Arb_HatMaxSupplyChangedEvent>;
  Arb_hatImageURIChangedEvent?: Maybe<Arb_HatImageURIChangedEvent>;
  Arb_hatImageURIChangedEvents: Array<Arb_HatImageURIChangedEvent>;
  Arb_topHatLinkRequestedEvent?: Maybe<Arb_TopHatLinkRequestedEvent>;
  Arb_topHatLinkRequestedEvents: Array<Arb_TopHatLinkRequestedEvent>;
  Arb_topHatLinkedEvent?: Maybe<Arb_TopHatLinkedEvent>;
  Arb_topHatLinkedEvents: Array<Arb_TopHatLinkedEvent>;
  Arb_wearerStandingChangedEvent?: Maybe<Arb_WearerStandingChangedEvent>;
  Arb_wearerStandingChangedEvents: Array<Arb_WearerStandingChangedEvent>;
  Arb_claimsHatter?: Maybe<Arb_ClaimsHatter>;
  Arb_claimsHatters: Array<Arb_ClaimsHatter>;
  Arb_hatsEvent?: Maybe<Arb_HatsEvent>;
  Arb_hatsEvents: Array<Arb_HatsEvent>;
  /** Access to subgraph metadata */
  Arb__meta?: Maybe<Arb__Meta_>;
};


export type QueryArb_hatArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Hat_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Hat_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_wearerArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_wearersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Wearer_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Wearer_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_treeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_treesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Tree_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Tree_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatCreatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatCreatedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatMintedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatMintedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatMintedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatMintedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatBurnedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatBurnedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatBurnedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatBurnedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatStatusChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatStatusChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatStatusChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatStatusChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatDetailsChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatDetailsChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatDetailsChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatDetailsChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatEligibilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatEligibilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatEligibilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatEligibilityChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatToggleChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatToggleChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatToggleChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatToggleChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatMutabilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatMutabilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatMutabilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatMutabilityChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatMaxSupplyChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatMaxSupplyChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatMaxSupplyChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatMaxSupplyChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatImageURIChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatImageURIChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatImageURIChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatImageURIChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_topHatLinkRequestedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_topHatLinkRequestedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_TopHatLinkRequestedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_TopHatLinkRequestedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_topHatLinkedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_topHatLinkedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_TopHatLinkedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_TopHatLinkedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_wearerStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_wearerStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_WearerStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_WearerStandingChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_claimsHatterArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_claimsHattersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_ClaimsHatter_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatsEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatsEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb__metaArgs = {
  block?: InputMaybe<Arb_Block_height>;
};

export type Subscription = {
  Arb_hat?: Maybe<Arb_Hat>;
  Arb_hats: Array<Arb_Hat>;
  Arb_wearer?: Maybe<Arb_Wearer>;
  Arb_wearers: Array<Arb_Wearer>;
  Arb_tree?: Maybe<Arb_Tree>;
  Arb_trees: Array<Arb_Tree>;
  Arb_hatCreatedEvent?: Maybe<Arb_HatCreatedEvent>;
  Arb_hatCreatedEvents: Array<Arb_HatCreatedEvent>;
  Arb_hatMintedEvent?: Maybe<Arb_HatMintedEvent>;
  Arb_hatMintedEvents: Array<Arb_HatMintedEvent>;
  Arb_hatBurnedEvent?: Maybe<Arb_HatBurnedEvent>;
  Arb_hatBurnedEvents: Array<Arb_HatBurnedEvent>;
  Arb_hatStatusChangedEvent?: Maybe<Arb_HatStatusChangedEvent>;
  Arb_hatStatusChangedEvents: Array<Arb_HatStatusChangedEvent>;
  Arb_hatDetailsChangedEvent?: Maybe<Arb_HatDetailsChangedEvent>;
  Arb_hatDetailsChangedEvents: Array<Arb_HatDetailsChangedEvent>;
  Arb_hatEligibilityChangedEvent?: Maybe<Arb_HatEligibilityChangedEvent>;
  Arb_hatEligibilityChangedEvents: Array<Arb_HatEligibilityChangedEvent>;
  Arb_hatToggleChangedEvent?: Maybe<Arb_HatToggleChangedEvent>;
  Arb_hatToggleChangedEvents: Array<Arb_HatToggleChangedEvent>;
  Arb_hatMutabilityChangedEvent?: Maybe<Arb_HatMutabilityChangedEvent>;
  Arb_hatMutabilityChangedEvents: Array<Arb_HatMutabilityChangedEvent>;
  Arb_hatMaxSupplyChangedEvent?: Maybe<Arb_HatMaxSupplyChangedEvent>;
  Arb_hatMaxSupplyChangedEvents: Array<Arb_HatMaxSupplyChangedEvent>;
  Arb_hatImageURIChangedEvent?: Maybe<Arb_HatImageURIChangedEvent>;
  Arb_hatImageURIChangedEvents: Array<Arb_HatImageURIChangedEvent>;
  Arb_topHatLinkRequestedEvent?: Maybe<Arb_TopHatLinkRequestedEvent>;
  Arb_topHatLinkRequestedEvents: Array<Arb_TopHatLinkRequestedEvent>;
  Arb_topHatLinkedEvent?: Maybe<Arb_TopHatLinkedEvent>;
  Arb_topHatLinkedEvents: Array<Arb_TopHatLinkedEvent>;
  Arb_wearerStandingChangedEvent?: Maybe<Arb_WearerStandingChangedEvent>;
  Arb_wearerStandingChangedEvents: Array<Arb_WearerStandingChangedEvent>;
  Arb_claimsHatter?: Maybe<Arb_ClaimsHatter>;
  Arb_claimsHatters: Array<Arb_ClaimsHatter>;
  Arb_hatsEvent?: Maybe<Arb_HatsEvent>;
  Arb_hatsEvents: Array<Arb_HatsEvent>;
  /** Access to subgraph metadata */
  Arb__meta?: Maybe<Arb__Meta_>;
};


export type SubscriptionArb_hatArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Hat_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Hat_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_wearerArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_wearersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Wearer_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Wearer_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_treeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_treesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Tree_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Tree_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatCreatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatCreatedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatMintedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatMintedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatMintedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatMintedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatBurnedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatBurnedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatBurnedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatBurnedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatStatusChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatStatusChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatStatusChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatStatusChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatDetailsChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatDetailsChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatDetailsChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatDetailsChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatEligibilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatEligibilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatEligibilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatEligibilityChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatToggleChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatToggleChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatToggleChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatToggleChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatMutabilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatMutabilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatMutabilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatMutabilityChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatMaxSupplyChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatMaxSupplyChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatMaxSupplyChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatMaxSupplyChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatImageURIChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatImageURIChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatImageURIChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatImageURIChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_topHatLinkRequestedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_topHatLinkRequestedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_TopHatLinkRequestedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_TopHatLinkRequestedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_topHatLinkedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_topHatLinkedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_TopHatLinkedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_TopHatLinkedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_wearerStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_wearerStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_WearerStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_WearerStandingChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_claimsHatterArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_claimsHattersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_ClaimsHatter_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatsEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatsEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb__metaArgs = {
  block?: InputMaybe<Arb_Block_height>;
};

export type Arb_TopHatLinkRequestedEvent = Arb_HatsEvent & {
  /** tree field is the tree that is being linked, hat field is the tree top hat */
  id: Scalars['ID']['output'];
  tree: Arb_Tree;
  hat: Arb_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  newAdmin: Arb_Hat;
};

export type Arb_TopHatLinkRequestedEvent_filter = {
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
  tree_?: InputMaybe<Arb_Tree_filter>;
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
  hat_?: InputMaybe<Arb_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
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
  newAdmin_?: InputMaybe<Arb_Hat_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_TopHatLinkRequestedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_TopHatLinkRequestedEvent_filter>>>;
};

export type Arb_TopHatLinkRequestedEvent_orderBy =
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

export type Arb_TopHatLinkedEvent = Arb_HatsEvent & {
  /** tree field is the tree that is being linked, hat field is the tree top hat */
  id: Scalars['ID']['output'];
  tree: Arb_Tree;
  hat: Arb_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  newAdmin: Arb_Hat;
};

export type Arb_TopHatLinkedEvent_filter = {
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
  tree_?: InputMaybe<Arb_Tree_filter>;
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
  hat_?: InputMaybe<Arb_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
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
  newAdmin_?: InputMaybe<Arb_Hat_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_TopHatLinkedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_TopHatLinkedEvent_filter>>>;
};

export type Arb_TopHatLinkedEvent_orderBy =
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

export type Arb_Tree = {
  /** Tree ID is its top hat domain - first 4 bytes of the top hat ID */
  id: Scalars['ID']['output'];
  childOfTree?: Maybe<Arb_Tree>;
  linkedToHat?: Maybe<Arb_Hat>;
  requestedLinkToTree?: Maybe<Arb_Tree>;
  requestedLinkToHat?: Maybe<Arb_Hat>;
  linkRequestFromTree: Array<Arb_Tree>;
  hats: Array<Arb_Hat>;
  parentOfTrees: Array<Arb_Tree>;
  events: Array<Arb_HatsEvent>;
};


export type Arb_TreelinkRequestFromTreeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Tree_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Tree_filter>;
};


export type Arb_TreehatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Hat_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Hat_filter>;
};


export type Arb_TreeparentOfTreesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Tree_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Tree_filter>;
};


export type Arb_TreeeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsEvent_filter>;
};

export type Arb_Tree_filter = {
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
  childOfTree_?: InputMaybe<Arb_Tree_filter>;
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
  linkedToHat_?: InputMaybe<Arb_Hat_filter>;
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
  requestedLinkToTree_?: InputMaybe<Arb_Tree_filter>;
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
  requestedLinkToHat_?: InputMaybe<Arb_Hat_filter>;
  linkRequestFromTree_?: InputMaybe<Arb_Tree_filter>;
  hats_?: InputMaybe<Arb_Hat_filter>;
  parentOfTrees_?: InputMaybe<Arb_Tree_filter>;
  events_?: InputMaybe<Arb_HatsEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Tree_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Tree_filter>>>;
};

export type Arb_Tree_orderBy =
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

export type Arb_Wearer = {
  id: Scalars['ID']['output'];
  currentHats: Array<Arb_Hat>;
  mintEvent: Array<Arb_HatMintedEvent>;
  burnEvent: Array<Arb_HatBurnedEvent>;
};


export type Arb_WearercurrentHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Hat_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Hat_filter>;
};


export type Arb_WearermintEventArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatMintedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatMintedEvent_filter>;
};


export type Arb_WearerburnEventArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatBurnedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatBurnedEvent_filter>;
};

export type Arb_WearerStandingChangedEvent = Arb_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Arb_Tree;
  hat: Arb_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  wearer: Arb_Wearer;
  wearerStanding: Scalars['Boolean']['output'];
};

export type Arb_WearerStandingChangedEvent_filter = {
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
  tree_?: InputMaybe<Arb_Tree_filter>;
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
  hat_?: InputMaybe<Arb_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
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
  wearer_?: InputMaybe<Arb_Wearer_filter>;
  wearerStanding?: InputMaybe<Scalars['Boolean']['input']>;
  wearerStanding_not?: InputMaybe<Scalars['Boolean']['input']>;
  wearerStanding_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  wearerStanding_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_WearerStandingChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_WearerStandingChangedEvent_filter>>>;
};

export type Arb_WearerStandingChangedEvent_orderBy =
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

export type Arb_Wearer_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  currentHats_?: InputMaybe<Arb_Hat_filter>;
  mintEvent_?: InputMaybe<Arb_HatMintedEvent_filter>;
  burnEvent_?: InputMaybe<Arb_HatBurnedEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Wearer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Wearer_filter>>>;
};

export type Arb_Wearer_orderBy =
  | 'id'
  | 'currentHats'
  | 'mintEvent'
  | 'burnEvent';

export type Arb__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Arb_Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Arb_Bytes']['output']>;
};

/** The type for the top-level _meta field */
export type Arb__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: Arb__Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type Arb__SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  Arb_hat: InContextSdkMethod<Query['Arb_hat'], QueryArb_hatArgs, MeshContext>,
  /** null **/
  Arb_hats: InContextSdkMethod<Query['Arb_hats'], QueryArb_hatsArgs, MeshContext>,
  /** null **/
  Arb_wearer: InContextSdkMethod<Query['Arb_wearer'], QueryArb_wearerArgs, MeshContext>,
  /** null **/
  Arb_wearers: InContextSdkMethod<Query['Arb_wearers'], QueryArb_wearersArgs, MeshContext>,
  /** null **/
  Arb_tree: InContextSdkMethod<Query['Arb_tree'], QueryArb_treeArgs, MeshContext>,
  /** null **/
  Arb_trees: InContextSdkMethod<Query['Arb_trees'], QueryArb_treesArgs, MeshContext>,
  /** null **/
  Arb_hatCreatedEvent: InContextSdkMethod<Query['Arb_hatCreatedEvent'], QueryArb_hatCreatedEventArgs, MeshContext>,
  /** null **/
  Arb_hatCreatedEvents: InContextSdkMethod<Query['Arb_hatCreatedEvents'], QueryArb_hatCreatedEventsArgs, MeshContext>,
  /** null **/
  Arb_hatMintedEvent: InContextSdkMethod<Query['Arb_hatMintedEvent'], QueryArb_hatMintedEventArgs, MeshContext>,
  /** null **/
  Arb_hatMintedEvents: InContextSdkMethod<Query['Arb_hatMintedEvents'], QueryArb_hatMintedEventsArgs, MeshContext>,
  /** null **/
  Arb_hatBurnedEvent: InContextSdkMethod<Query['Arb_hatBurnedEvent'], QueryArb_hatBurnedEventArgs, MeshContext>,
  /** null **/
  Arb_hatBurnedEvents: InContextSdkMethod<Query['Arb_hatBurnedEvents'], QueryArb_hatBurnedEventsArgs, MeshContext>,
  /** null **/
  Arb_hatStatusChangedEvent: InContextSdkMethod<Query['Arb_hatStatusChangedEvent'], QueryArb_hatStatusChangedEventArgs, MeshContext>,
  /** null **/
  Arb_hatStatusChangedEvents: InContextSdkMethod<Query['Arb_hatStatusChangedEvents'], QueryArb_hatStatusChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_hatDetailsChangedEvent: InContextSdkMethod<Query['Arb_hatDetailsChangedEvent'], QueryArb_hatDetailsChangedEventArgs, MeshContext>,
  /** null **/
  Arb_hatDetailsChangedEvents: InContextSdkMethod<Query['Arb_hatDetailsChangedEvents'], QueryArb_hatDetailsChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_hatEligibilityChangedEvent: InContextSdkMethod<Query['Arb_hatEligibilityChangedEvent'], QueryArb_hatEligibilityChangedEventArgs, MeshContext>,
  /** null **/
  Arb_hatEligibilityChangedEvents: InContextSdkMethod<Query['Arb_hatEligibilityChangedEvents'], QueryArb_hatEligibilityChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_hatToggleChangedEvent: InContextSdkMethod<Query['Arb_hatToggleChangedEvent'], QueryArb_hatToggleChangedEventArgs, MeshContext>,
  /** null **/
  Arb_hatToggleChangedEvents: InContextSdkMethod<Query['Arb_hatToggleChangedEvents'], QueryArb_hatToggleChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_hatMutabilityChangedEvent: InContextSdkMethod<Query['Arb_hatMutabilityChangedEvent'], QueryArb_hatMutabilityChangedEventArgs, MeshContext>,
  /** null **/
  Arb_hatMutabilityChangedEvents: InContextSdkMethod<Query['Arb_hatMutabilityChangedEvents'], QueryArb_hatMutabilityChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_hatMaxSupplyChangedEvent: InContextSdkMethod<Query['Arb_hatMaxSupplyChangedEvent'], QueryArb_hatMaxSupplyChangedEventArgs, MeshContext>,
  /** null **/
  Arb_hatMaxSupplyChangedEvents: InContextSdkMethod<Query['Arb_hatMaxSupplyChangedEvents'], QueryArb_hatMaxSupplyChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_hatImageURIChangedEvent: InContextSdkMethod<Query['Arb_hatImageURIChangedEvent'], QueryArb_hatImageURIChangedEventArgs, MeshContext>,
  /** null **/
  Arb_hatImageURIChangedEvents: InContextSdkMethod<Query['Arb_hatImageURIChangedEvents'], QueryArb_hatImageURIChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_topHatLinkRequestedEvent: InContextSdkMethod<Query['Arb_topHatLinkRequestedEvent'], QueryArb_topHatLinkRequestedEventArgs, MeshContext>,
  /** null **/
  Arb_topHatLinkRequestedEvents: InContextSdkMethod<Query['Arb_topHatLinkRequestedEvents'], QueryArb_topHatLinkRequestedEventsArgs, MeshContext>,
  /** null **/
  Arb_topHatLinkedEvent: InContextSdkMethod<Query['Arb_topHatLinkedEvent'], QueryArb_topHatLinkedEventArgs, MeshContext>,
  /** null **/
  Arb_topHatLinkedEvents: InContextSdkMethod<Query['Arb_topHatLinkedEvents'], QueryArb_topHatLinkedEventsArgs, MeshContext>,
  /** null **/
  Arb_wearerStandingChangedEvent: InContextSdkMethod<Query['Arb_wearerStandingChangedEvent'], QueryArb_wearerStandingChangedEventArgs, MeshContext>,
  /** null **/
  Arb_wearerStandingChangedEvents: InContextSdkMethod<Query['Arb_wearerStandingChangedEvents'], QueryArb_wearerStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_claimsHatter: InContextSdkMethod<Query['Arb_claimsHatter'], QueryArb_claimsHatterArgs, MeshContext>,
  /** null **/
  Arb_claimsHatters: InContextSdkMethod<Query['Arb_claimsHatters'], QueryArb_claimsHattersArgs, MeshContext>,
  /** null **/
  Arb_hatsEvent: InContextSdkMethod<Query['Arb_hatsEvent'], QueryArb_hatsEventArgs, MeshContext>,
  /** null **/
  Arb_hatsEvents: InContextSdkMethod<Query['Arb_hatsEvents'], QueryArb_hatsEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Arb__meta: InContextSdkMethod<Query['Arb__meta'], QueryArb__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  Arb_hat: InContextSdkMethod<Subscription['Arb_hat'], SubscriptionArb_hatArgs, MeshContext>,
  /** null **/
  Arb_hats: InContextSdkMethod<Subscription['Arb_hats'], SubscriptionArb_hatsArgs, MeshContext>,
  /** null **/
  Arb_wearer: InContextSdkMethod<Subscription['Arb_wearer'], SubscriptionArb_wearerArgs, MeshContext>,
  /** null **/
  Arb_wearers: InContextSdkMethod<Subscription['Arb_wearers'], SubscriptionArb_wearersArgs, MeshContext>,
  /** null **/
  Arb_tree: InContextSdkMethod<Subscription['Arb_tree'], SubscriptionArb_treeArgs, MeshContext>,
  /** null **/
  Arb_trees: InContextSdkMethod<Subscription['Arb_trees'], SubscriptionArb_treesArgs, MeshContext>,
  /** null **/
  Arb_hatCreatedEvent: InContextSdkMethod<Subscription['Arb_hatCreatedEvent'], SubscriptionArb_hatCreatedEventArgs, MeshContext>,
  /** null **/
  Arb_hatCreatedEvents: InContextSdkMethod<Subscription['Arb_hatCreatedEvents'], SubscriptionArb_hatCreatedEventsArgs, MeshContext>,
  /** null **/
  Arb_hatMintedEvent: InContextSdkMethod<Subscription['Arb_hatMintedEvent'], SubscriptionArb_hatMintedEventArgs, MeshContext>,
  /** null **/
  Arb_hatMintedEvents: InContextSdkMethod<Subscription['Arb_hatMintedEvents'], SubscriptionArb_hatMintedEventsArgs, MeshContext>,
  /** null **/
  Arb_hatBurnedEvent: InContextSdkMethod<Subscription['Arb_hatBurnedEvent'], SubscriptionArb_hatBurnedEventArgs, MeshContext>,
  /** null **/
  Arb_hatBurnedEvents: InContextSdkMethod<Subscription['Arb_hatBurnedEvents'], SubscriptionArb_hatBurnedEventsArgs, MeshContext>,
  /** null **/
  Arb_hatStatusChangedEvent: InContextSdkMethod<Subscription['Arb_hatStatusChangedEvent'], SubscriptionArb_hatStatusChangedEventArgs, MeshContext>,
  /** null **/
  Arb_hatStatusChangedEvents: InContextSdkMethod<Subscription['Arb_hatStatusChangedEvents'], SubscriptionArb_hatStatusChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_hatDetailsChangedEvent: InContextSdkMethod<Subscription['Arb_hatDetailsChangedEvent'], SubscriptionArb_hatDetailsChangedEventArgs, MeshContext>,
  /** null **/
  Arb_hatDetailsChangedEvents: InContextSdkMethod<Subscription['Arb_hatDetailsChangedEvents'], SubscriptionArb_hatDetailsChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_hatEligibilityChangedEvent: InContextSdkMethod<Subscription['Arb_hatEligibilityChangedEvent'], SubscriptionArb_hatEligibilityChangedEventArgs, MeshContext>,
  /** null **/
  Arb_hatEligibilityChangedEvents: InContextSdkMethod<Subscription['Arb_hatEligibilityChangedEvents'], SubscriptionArb_hatEligibilityChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_hatToggleChangedEvent: InContextSdkMethod<Subscription['Arb_hatToggleChangedEvent'], SubscriptionArb_hatToggleChangedEventArgs, MeshContext>,
  /** null **/
  Arb_hatToggleChangedEvents: InContextSdkMethod<Subscription['Arb_hatToggleChangedEvents'], SubscriptionArb_hatToggleChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_hatMutabilityChangedEvent: InContextSdkMethod<Subscription['Arb_hatMutabilityChangedEvent'], SubscriptionArb_hatMutabilityChangedEventArgs, MeshContext>,
  /** null **/
  Arb_hatMutabilityChangedEvents: InContextSdkMethod<Subscription['Arb_hatMutabilityChangedEvents'], SubscriptionArb_hatMutabilityChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_hatMaxSupplyChangedEvent: InContextSdkMethod<Subscription['Arb_hatMaxSupplyChangedEvent'], SubscriptionArb_hatMaxSupplyChangedEventArgs, MeshContext>,
  /** null **/
  Arb_hatMaxSupplyChangedEvents: InContextSdkMethod<Subscription['Arb_hatMaxSupplyChangedEvents'], SubscriptionArb_hatMaxSupplyChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_hatImageURIChangedEvent: InContextSdkMethod<Subscription['Arb_hatImageURIChangedEvent'], SubscriptionArb_hatImageURIChangedEventArgs, MeshContext>,
  /** null **/
  Arb_hatImageURIChangedEvents: InContextSdkMethod<Subscription['Arb_hatImageURIChangedEvents'], SubscriptionArb_hatImageURIChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_topHatLinkRequestedEvent: InContextSdkMethod<Subscription['Arb_topHatLinkRequestedEvent'], SubscriptionArb_topHatLinkRequestedEventArgs, MeshContext>,
  /** null **/
  Arb_topHatLinkRequestedEvents: InContextSdkMethod<Subscription['Arb_topHatLinkRequestedEvents'], SubscriptionArb_topHatLinkRequestedEventsArgs, MeshContext>,
  /** null **/
  Arb_topHatLinkedEvent: InContextSdkMethod<Subscription['Arb_topHatLinkedEvent'], SubscriptionArb_topHatLinkedEventArgs, MeshContext>,
  /** null **/
  Arb_topHatLinkedEvents: InContextSdkMethod<Subscription['Arb_topHatLinkedEvents'], SubscriptionArb_topHatLinkedEventsArgs, MeshContext>,
  /** null **/
  Arb_wearerStandingChangedEvent: InContextSdkMethod<Subscription['Arb_wearerStandingChangedEvent'], SubscriptionArb_wearerStandingChangedEventArgs, MeshContext>,
  /** null **/
  Arb_wearerStandingChangedEvents: InContextSdkMethod<Subscription['Arb_wearerStandingChangedEvents'], SubscriptionArb_wearerStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_claimsHatter: InContextSdkMethod<Subscription['Arb_claimsHatter'], SubscriptionArb_claimsHatterArgs, MeshContext>,
  /** null **/
  Arb_claimsHatters: InContextSdkMethod<Subscription['Arb_claimsHatters'], SubscriptionArb_claimsHattersArgs, MeshContext>,
  /** null **/
  Arb_hatsEvent: InContextSdkMethod<Subscription['Arb_hatsEvent'], SubscriptionArb_hatsEventArgs, MeshContext>,
  /** null **/
  Arb_hatsEvents: InContextSdkMethod<Subscription['Arb_hatsEvents'], SubscriptionArb_hatsEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Arb__meta: InContextSdkMethod<Subscription['Arb__meta'], SubscriptionArb__metaArgs, MeshContext>
  };

  export type Context = {
      ["Arbitrum_Main"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
