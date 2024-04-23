// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace BaseMainTypes {
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
  Base_BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Base_Bytes: { input: any; output: any; }
  Base_Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Base_Aggregation_interval =
  | 'hour'
  | 'day';

export type Base_BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Base_Block_height = {
  hash?: InputMaybe<Scalars['Base_Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Base_ClaimsHatter = {
  id: Scalars['ID']['output'];
  claimableHats: Array<Base_Hat>;
  claimableForHats: Array<Base_Hat>;
};


export type Base_ClaimsHatterclaimableHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Hat_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Hat_filter>;
};


export type Base_ClaimsHatterclaimableForHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Hat_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Hat_filter>;
};

export type Base_ClaimsHatter_filter = {
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
  claimableHats_?: InputMaybe<Base_Hat_filter>;
  claimableForHats?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_?: InputMaybe<Base_Hat_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_ClaimsHatter_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_ClaimsHatter_filter>>>;
};

export type Base_ClaimsHatter_orderBy =
  | 'id'
  | 'claimableHats'
  | 'claimableForHats';

export type Base_Hat = {
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
  tree: Base_Tree;
  wearers: Array<Base_Wearer>;
  admin: Base_Hat;
  badStandings: Array<Base_Wearer>;
  claimableBy: Array<Base_ClaimsHatter>;
  claimableForBy: Array<Base_ClaimsHatter>;
  linkRequestFromTree: Array<Base_Tree>;
  subHats: Array<Base_Hat>;
  linkedTrees: Array<Base_Tree>;
  events: Array<Base_HatsEvent>;
};


export type Base_HatwearersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Wearer_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Wearer_filter>;
};


export type Base_HatbadStandingsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Wearer_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Wearer_filter>;
};


export type Base_HatclaimableByArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_ClaimsHatter_filter>;
};


export type Base_HatclaimableForByArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_ClaimsHatter_filter>;
};


export type Base_HatlinkRequestFromTreeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Tree_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Tree_filter>;
};


export type Base_HatsubHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Hat_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Hat_filter>;
};


export type Base_HatlinkedTreesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Tree_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Tree_filter>;
};


export type Base_HateventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsEvent_filter>;
};

export type Base_HatBurnedEvent = Base_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Base_Tree;
  hat: Base_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  wearer: Base_Wearer;
  operator: Scalars['String']['output'];
};

export type Base_HatBurnedEvent_filter = {
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
  tree_?: InputMaybe<Base_Tree_filter>;
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
  hat_?: InputMaybe<Base_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
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
  wearer_?: InputMaybe<Base_Wearer_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatBurnedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatBurnedEvent_filter>>>;
};

export type Base_HatBurnedEvent_orderBy =
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

export type Base_HatCreatedEvent = Base_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Base_Tree;
  hat: Base_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  hatDetails: Scalars['String']['output'];
  hatMaxSupply: Scalars['BigInt']['output'];
  hatEligibility: Scalars['String']['output'];
  hatToggle: Scalars['String']['output'];
  hatMutable: Scalars['Boolean']['output'];
  hatImageUri: Scalars['String']['output'];
};

export type Base_HatCreatedEvent_filter = {
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
  tree_?: InputMaybe<Base_Tree_filter>;
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
  hat_?: InputMaybe<Base_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatCreatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatCreatedEvent_filter>>>;
};

export type Base_HatCreatedEvent_orderBy =
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

export type Base_HatDetailsChangedEvent = Base_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Base_Tree;
  hat: Base_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  hatNewDetails: Scalars['String']['output'];
};

export type Base_HatDetailsChangedEvent_filter = {
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
  tree_?: InputMaybe<Base_Tree_filter>;
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
  hat_?: InputMaybe<Base_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatDetailsChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatDetailsChangedEvent_filter>>>;
};

export type Base_HatDetailsChangedEvent_orderBy =
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

export type Base_HatEligibilityChangedEvent = Base_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Base_Tree;
  hat: Base_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  hatNewEligibility: Scalars['String']['output'];
};

export type Base_HatEligibilityChangedEvent_filter = {
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
  tree_?: InputMaybe<Base_Tree_filter>;
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
  hat_?: InputMaybe<Base_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatEligibilityChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatEligibilityChangedEvent_filter>>>;
};

export type Base_HatEligibilityChangedEvent_orderBy =
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

export type Base_HatImageURIChangedEvent = Base_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Base_Tree;
  hat: Base_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  hatNewImageURI: Scalars['String']['output'];
};

export type Base_HatImageURIChangedEvent_filter = {
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
  tree_?: InputMaybe<Base_Tree_filter>;
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
  hat_?: InputMaybe<Base_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatImageURIChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatImageURIChangedEvent_filter>>>;
};

export type Base_HatImageURIChangedEvent_orderBy =
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

export type Base_HatMaxSupplyChangedEvent = Base_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Base_Tree;
  hat: Base_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  hatNewMaxSupply: Scalars['BigInt']['output'];
};

export type Base_HatMaxSupplyChangedEvent_filter = {
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
  tree_?: InputMaybe<Base_Tree_filter>;
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
  hat_?: InputMaybe<Base_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
  hatNewMaxSupply?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hatNewMaxSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatMaxSupplyChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatMaxSupplyChangedEvent_filter>>>;
};

export type Base_HatMaxSupplyChangedEvent_orderBy =
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

export type Base_HatMintedEvent = Base_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Base_Tree;
  hat: Base_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  wearer: Base_Wearer;
  operator: Scalars['String']['output'];
};

export type Base_HatMintedEvent_filter = {
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
  tree_?: InputMaybe<Base_Tree_filter>;
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
  hat_?: InputMaybe<Base_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
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
  wearer_?: InputMaybe<Base_Wearer_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatMintedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatMintedEvent_filter>>>;
};

export type Base_HatMintedEvent_orderBy =
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

export type Base_HatMutabilityChangedEvent = Base_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Base_Tree;
  hat: Base_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
};

export type Base_HatMutabilityChangedEvent_filter = {
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
  tree_?: InputMaybe<Base_Tree_filter>;
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
  hat_?: InputMaybe<Base_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatMutabilityChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatMutabilityChangedEvent_filter>>>;
};

export type Base_HatMutabilityChangedEvent_orderBy =
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

export type Base_HatStatusChangedEvent = Base_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Base_Tree;
  hat: Base_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  hatNewStatus: Scalars['Boolean']['output'];
};

export type Base_HatStatusChangedEvent_filter = {
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
  tree_?: InputMaybe<Base_Tree_filter>;
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
  hat_?: InputMaybe<Base_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
  hatNewStatus?: InputMaybe<Scalars['Boolean']['input']>;
  hatNewStatus_not?: InputMaybe<Scalars['Boolean']['input']>;
  hatNewStatus_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  hatNewStatus_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatStatusChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatStatusChangedEvent_filter>>>;
};

export type Base_HatStatusChangedEvent_orderBy =
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

export type Base_HatToggleChangedEvent = Base_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Base_Tree;
  hat: Base_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  hatNewToggle: Scalars['String']['output'];
};

export type Base_HatToggleChangedEvent_filter = {
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
  tree_?: InputMaybe<Base_Tree_filter>;
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
  hat_?: InputMaybe<Base_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatToggleChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatToggleChangedEvent_filter>>>;
};

export type Base_HatToggleChangedEvent_orderBy =
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

export type Base_Hat_filter = {
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
  tree_?: InputMaybe<Base_Tree_filter>;
  wearers?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_?: InputMaybe<Base_Wearer_filter>;
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
  admin_?: InputMaybe<Base_Hat_filter>;
  badStandings?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_?: InputMaybe<Base_Wearer_filter>;
  claimableBy_?: InputMaybe<Base_ClaimsHatter_filter>;
  claimableForBy_?: InputMaybe<Base_ClaimsHatter_filter>;
  linkRequestFromTree_?: InputMaybe<Base_Tree_filter>;
  subHats_?: InputMaybe<Base_Hat_filter>;
  linkedTrees_?: InputMaybe<Base_Tree_filter>;
  events_?: InputMaybe<Base_HatsEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Hat_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Hat_filter>>>;
};

export type Base_Hat_orderBy =
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

export type Base_HatsEvent = {
  id: Scalars['ID']['output'];
  tree: Base_Tree;
  hat: Base_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
};

export type Base_HatsEvent_filter = {
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
  tree_?: InputMaybe<Base_Tree_filter>;
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
  hat_?: InputMaybe<Base_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatsEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatsEvent_filter>>>;
};

export type Base_HatsEvent_orderBy =
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
export type Base_OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  Base_hat?: Maybe<Base_Hat>;
  Base_hats: Array<Base_Hat>;
  Base_wearer?: Maybe<Base_Wearer>;
  Base_wearers: Array<Base_Wearer>;
  Base_tree?: Maybe<Base_Tree>;
  Base_trees: Array<Base_Tree>;
  Base_hatCreatedEvent?: Maybe<Base_HatCreatedEvent>;
  Base_hatCreatedEvents: Array<Base_HatCreatedEvent>;
  Base_hatMintedEvent?: Maybe<Base_HatMintedEvent>;
  Base_hatMintedEvents: Array<Base_HatMintedEvent>;
  Base_hatBurnedEvent?: Maybe<Base_HatBurnedEvent>;
  Base_hatBurnedEvents: Array<Base_HatBurnedEvent>;
  Base_hatStatusChangedEvent?: Maybe<Base_HatStatusChangedEvent>;
  Base_hatStatusChangedEvents: Array<Base_HatStatusChangedEvent>;
  Base_hatDetailsChangedEvent?: Maybe<Base_HatDetailsChangedEvent>;
  Base_hatDetailsChangedEvents: Array<Base_HatDetailsChangedEvent>;
  Base_hatEligibilityChangedEvent?: Maybe<Base_HatEligibilityChangedEvent>;
  Base_hatEligibilityChangedEvents: Array<Base_HatEligibilityChangedEvent>;
  Base_hatToggleChangedEvent?: Maybe<Base_HatToggleChangedEvent>;
  Base_hatToggleChangedEvents: Array<Base_HatToggleChangedEvent>;
  Base_hatMutabilityChangedEvent?: Maybe<Base_HatMutabilityChangedEvent>;
  Base_hatMutabilityChangedEvents: Array<Base_HatMutabilityChangedEvent>;
  Base_hatMaxSupplyChangedEvent?: Maybe<Base_HatMaxSupplyChangedEvent>;
  Base_hatMaxSupplyChangedEvents: Array<Base_HatMaxSupplyChangedEvent>;
  Base_hatImageURIChangedEvent?: Maybe<Base_HatImageURIChangedEvent>;
  Base_hatImageURIChangedEvents: Array<Base_HatImageURIChangedEvent>;
  Base_topHatLinkRequestedEvent?: Maybe<Base_TopHatLinkRequestedEvent>;
  Base_topHatLinkRequestedEvents: Array<Base_TopHatLinkRequestedEvent>;
  Base_topHatLinkedEvent?: Maybe<Base_TopHatLinkedEvent>;
  Base_topHatLinkedEvents: Array<Base_TopHatLinkedEvent>;
  Base_wearerStandingChangedEvent?: Maybe<Base_WearerStandingChangedEvent>;
  Base_wearerStandingChangedEvents: Array<Base_WearerStandingChangedEvent>;
  Base_claimsHatter?: Maybe<Base_ClaimsHatter>;
  Base_claimsHatters: Array<Base_ClaimsHatter>;
  Base_hatsEvent?: Maybe<Base_HatsEvent>;
  Base_hatsEvents: Array<Base_HatsEvent>;
  /** Access to subgraph metadata */
  Base__meta?: Maybe<Base__Meta_>;
};


export type QueryBase_hatArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Hat_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Hat_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_wearerArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_wearersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Wearer_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Wearer_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_treeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_treesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Tree_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Tree_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatCreatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatCreatedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatMintedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatMintedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatMintedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatMintedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatBurnedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatBurnedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatBurnedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatBurnedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatStatusChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatStatusChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatStatusChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatStatusChangedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatDetailsChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatDetailsChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatDetailsChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatDetailsChangedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatEligibilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatEligibilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatEligibilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatEligibilityChangedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatToggleChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatToggleChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatToggleChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatToggleChangedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatMutabilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatMutabilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatMutabilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatMutabilityChangedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatMaxSupplyChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatMaxSupplyChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatMaxSupplyChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatMaxSupplyChangedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatImageURIChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatImageURIChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatImageURIChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatImageURIChangedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_topHatLinkRequestedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_topHatLinkRequestedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_TopHatLinkRequestedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_TopHatLinkRequestedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_topHatLinkedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_topHatLinkedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_TopHatLinkedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_TopHatLinkedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_wearerStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_wearerStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_WearerStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_WearerStandingChangedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_claimsHatterArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_claimsHattersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_ClaimsHatter_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase__metaArgs = {
  block?: InputMaybe<Base_Block_height>;
};

export type Subscription = {
  Base_hat?: Maybe<Base_Hat>;
  Base_hats: Array<Base_Hat>;
  Base_wearer?: Maybe<Base_Wearer>;
  Base_wearers: Array<Base_Wearer>;
  Base_tree?: Maybe<Base_Tree>;
  Base_trees: Array<Base_Tree>;
  Base_hatCreatedEvent?: Maybe<Base_HatCreatedEvent>;
  Base_hatCreatedEvents: Array<Base_HatCreatedEvent>;
  Base_hatMintedEvent?: Maybe<Base_HatMintedEvent>;
  Base_hatMintedEvents: Array<Base_HatMintedEvent>;
  Base_hatBurnedEvent?: Maybe<Base_HatBurnedEvent>;
  Base_hatBurnedEvents: Array<Base_HatBurnedEvent>;
  Base_hatStatusChangedEvent?: Maybe<Base_HatStatusChangedEvent>;
  Base_hatStatusChangedEvents: Array<Base_HatStatusChangedEvent>;
  Base_hatDetailsChangedEvent?: Maybe<Base_HatDetailsChangedEvent>;
  Base_hatDetailsChangedEvents: Array<Base_HatDetailsChangedEvent>;
  Base_hatEligibilityChangedEvent?: Maybe<Base_HatEligibilityChangedEvent>;
  Base_hatEligibilityChangedEvents: Array<Base_HatEligibilityChangedEvent>;
  Base_hatToggleChangedEvent?: Maybe<Base_HatToggleChangedEvent>;
  Base_hatToggleChangedEvents: Array<Base_HatToggleChangedEvent>;
  Base_hatMutabilityChangedEvent?: Maybe<Base_HatMutabilityChangedEvent>;
  Base_hatMutabilityChangedEvents: Array<Base_HatMutabilityChangedEvent>;
  Base_hatMaxSupplyChangedEvent?: Maybe<Base_HatMaxSupplyChangedEvent>;
  Base_hatMaxSupplyChangedEvents: Array<Base_HatMaxSupplyChangedEvent>;
  Base_hatImageURIChangedEvent?: Maybe<Base_HatImageURIChangedEvent>;
  Base_hatImageURIChangedEvents: Array<Base_HatImageURIChangedEvent>;
  Base_topHatLinkRequestedEvent?: Maybe<Base_TopHatLinkRequestedEvent>;
  Base_topHatLinkRequestedEvents: Array<Base_TopHatLinkRequestedEvent>;
  Base_topHatLinkedEvent?: Maybe<Base_TopHatLinkedEvent>;
  Base_topHatLinkedEvents: Array<Base_TopHatLinkedEvent>;
  Base_wearerStandingChangedEvent?: Maybe<Base_WearerStandingChangedEvent>;
  Base_wearerStandingChangedEvents: Array<Base_WearerStandingChangedEvent>;
  Base_claimsHatter?: Maybe<Base_ClaimsHatter>;
  Base_claimsHatters: Array<Base_ClaimsHatter>;
  Base_hatsEvent?: Maybe<Base_HatsEvent>;
  Base_hatsEvents: Array<Base_HatsEvent>;
  /** Access to subgraph metadata */
  Base__meta?: Maybe<Base__Meta_>;
};


export type SubscriptionBase_hatArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Hat_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Hat_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_wearerArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_wearersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Wearer_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Wearer_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_treeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_treesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Tree_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Tree_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatCreatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatCreatedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatMintedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatMintedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatMintedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatMintedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatBurnedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatBurnedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatBurnedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatBurnedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatStatusChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatStatusChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatStatusChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatStatusChangedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatDetailsChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatDetailsChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatDetailsChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatDetailsChangedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatEligibilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatEligibilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatEligibilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatEligibilityChangedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatToggleChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatToggleChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatToggleChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatToggleChangedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatMutabilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatMutabilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatMutabilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatMutabilityChangedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatMaxSupplyChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatMaxSupplyChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatMaxSupplyChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatMaxSupplyChangedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatImageURIChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatImageURIChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatImageURIChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatImageURIChangedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_topHatLinkRequestedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_topHatLinkRequestedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_TopHatLinkRequestedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_TopHatLinkRequestedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_topHatLinkedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_topHatLinkedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_TopHatLinkedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_TopHatLinkedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_wearerStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_wearerStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_WearerStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_WearerStandingChangedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_claimsHatterArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_claimsHattersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_ClaimsHatter_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatsEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatsEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase__metaArgs = {
  block?: InputMaybe<Base_Block_height>;
};

export type Base_TopHatLinkRequestedEvent = Base_HatsEvent & {
  /** tree field is the tree that is being linked, hat field is the tree top hat */
  id: Scalars['ID']['output'];
  tree: Base_Tree;
  hat: Base_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  newAdmin: Base_Hat;
};

export type Base_TopHatLinkRequestedEvent_filter = {
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
  tree_?: InputMaybe<Base_Tree_filter>;
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
  hat_?: InputMaybe<Base_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
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
  newAdmin_?: InputMaybe<Base_Hat_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_TopHatLinkRequestedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_TopHatLinkRequestedEvent_filter>>>;
};

export type Base_TopHatLinkRequestedEvent_orderBy =
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

export type Base_TopHatLinkedEvent = Base_HatsEvent & {
  /** tree field is the tree that is being linked, hat field is the tree top hat */
  id: Scalars['ID']['output'];
  tree: Base_Tree;
  hat: Base_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  newAdmin: Base_Hat;
};

export type Base_TopHatLinkedEvent_filter = {
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
  tree_?: InputMaybe<Base_Tree_filter>;
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
  hat_?: InputMaybe<Base_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
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
  newAdmin_?: InputMaybe<Base_Hat_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_TopHatLinkedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_TopHatLinkedEvent_filter>>>;
};

export type Base_TopHatLinkedEvent_orderBy =
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

export type Base_Tree = {
  /** Tree ID is its top hat domain - first 4 bytes of the top hat ID */
  id: Scalars['ID']['output'];
  childOfTree?: Maybe<Base_Tree>;
  linkedToHat?: Maybe<Base_Hat>;
  requestedLinkToTree?: Maybe<Base_Tree>;
  requestedLinkToHat?: Maybe<Base_Hat>;
  linkRequestFromTree: Array<Base_Tree>;
  hats: Array<Base_Hat>;
  parentOfTrees: Array<Base_Tree>;
  events: Array<Base_HatsEvent>;
};


export type Base_TreelinkRequestFromTreeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Tree_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Tree_filter>;
};


export type Base_TreehatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Hat_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Hat_filter>;
};


export type Base_TreeparentOfTreesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Tree_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Tree_filter>;
};


export type Base_TreeeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsEvent_filter>;
};

export type Base_Tree_filter = {
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
  childOfTree_?: InputMaybe<Base_Tree_filter>;
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
  linkedToHat_?: InputMaybe<Base_Hat_filter>;
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
  requestedLinkToTree_?: InputMaybe<Base_Tree_filter>;
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
  requestedLinkToHat_?: InputMaybe<Base_Hat_filter>;
  linkRequestFromTree_?: InputMaybe<Base_Tree_filter>;
  hats_?: InputMaybe<Base_Hat_filter>;
  parentOfTrees_?: InputMaybe<Base_Tree_filter>;
  events_?: InputMaybe<Base_HatsEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Tree_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Tree_filter>>>;
};

export type Base_Tree_orderBy =
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

export type Base_Wearer = {
  id: Scalars['ID']['output'];
  currentHats: Array<Base_Hat>;
  mintEvent: Array<Base_HatMintedEvent>;
  burnEvent: Array<Base_HatBurnedEvent>;
};


export type Base_WearercurrentHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Hat_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Hat_filter>;
};


export type Base_WearermintEventArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatMintedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatMintedEvent_filter>;
};


export type Base_WearerburnEventArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatBurnedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatBurnedEvent_filter>;
};

export type Base_WearerStandingChangedEvent = Base_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Base_Tree;
  hat: Base_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  wearer: Base_Wearer;
  wearerStanding: Scalars['Boolean']['output'];
};

export type Base_WearerStandingChangedEvent_filter = {
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
  tree_?: InputMaybe<Base_Tree_filter>;
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
  hat_?: InputMaybe<Base_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
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
  wearer_?: InputMaybe<Base_Wearer_filter>;
  wearerStanding?: InputMaybe<Scalars['Boolean']['input']>;
  wearerStanding_not?: InputMaybe<Scalars['Boolean']['input']>;
  wearerStanding_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  wearerStanding_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_WearerStandingChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_WearerStandingChangedEvent_filter>>>;
};

export type Base_WearerStandingChangedEvent_orderBy =
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

export type Base_Wearer_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  currentHats_?: InputMaybe<Base_Hat_filter>;
  mintEvent_?: InputMaybe<Base_HatMintedEvent_filter>;
  burnEvent_?: InputMaybe<Base_HatBurnedEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Wearer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Wearer_filter>>>;
};

export type Base_Wearer_orderBy =
  | 'id'
  | 'currentHats'
  | 'mintEvent'
  | 'burnEvent';

export type Base__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Base_Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Base_Bytes']['output']>;
};

/** The type for the top-level _meta field */
export type Base__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: Base__Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type Base__SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  Base_hat: InContextSdkMethod<Query['Base_hat'], QueryBase_hatArgs, MeshContext>,
  /** null **/
  Base_hats: InContextSdkMethod<Query['Base_hats'], QueryBase_hatsArgs, MeshContext>,
  /** null **/
  Base_wearer: InContextSdkMethod<Query['Base_wearer'], QueryBase_wearerArgs, MeshContext>,
  /** null **/
  Base_wearers: InContextSdkMethod<Query['Base_wearers'], QueryBase_wearersArgs, MeshContext>,
  /** null **/
  Base_tree: InContextSdkMethod<Query['Base_tree'], QueryBase_treeArgs, MeshContext>,
  /** null **/
  Base_trees: InContextSdkMethod<Query['Base_trees'], QueryBase_treesArgs, MeshContext>,
  /** null **/
  Base_hatCreatedEvent: InContextSdkMethod<Query['Base_hatCreatedEvent'], QueryBase_hatCreatedEventArgs, MeshContext>,
  /** null **/
  Base_hatCreatedEvents: InContextSdkMethod<Query['Base_hatCreatedEvents'], QueryBase_hatCreatedEventsArgs, MeshContext>,
  /** null **/
  Base_hatMintedEvent: InContextSdkMethod<Query['Base_hatMintedEvent'], QueryBase_hatMintedEventArgs, MeshContext>,
  /** null **/
  Base_hatMintedEvents: InContextSdkMethod<Query['Base_hatMintedEvents'], QueryBase_hatMintedEventsArgs, MeshContext>,
  /** null **/
  Base_hatBurnedEvent: InContextSdkMethod<Query['Base_hatBurnedEvent'], QueryBase_hatBurnedEventArgs, MeshContext>,
  /** null **/
  Base_hatBurnedEvents: InContextSdkMethod<Query['Base_hatBurnedEvents'], QueryBase_hatBurnedEventsArgs, MeshContext>,
  /** null **/
  Base_hatStatusChangedEvent: InContextSdkMethod<Query['Base_hatStatusChangedEvent'], QueryBase_hatStatusChangedEventArgs, MeshContext>,
  /** null **/
  Base_hatStatusChangedEvents: InContextSdkMethod<Query['Base_hatStatusChangedEvents'], QueryBase_hatStatusChangedEventsArgs, MeshContext>,
  /** null **/
  Base_hatDetailsChangedEvent: InContextSdkMethod<Query['Base_hatDetailsChangedEvent'], QueryBase_hatDetailsChangedEventArgs, MeshContext>,
  /** null **/
  Base_hatDetailsChangedEvents: InContextSdkMethod<Query['Base_hatDetailsChangedEvents'], QueryBase_hatDetailsChangedEventsArgs, MeshContext>,
  /** null **/
  Base_hatEligibilityChangedEvent: InContextSdkMethod<Query['Base_hatEligibilityChangedEvent'], QueryBase_hatEligibilityChangedEventArgs, MeshContext>,
  /** null **/
  Base_hatEligibilityChangedEvents: InContextSdkMethod<Query['Base_hatEligibilityChangedEvents'], QueryBase_hatEligibilityChangedEventsArgs, MeshContext>,
  /** null **/
  Base_hatToggleChangedEvent: InContextSdkMethod<Query['Base_hatToggleChangedEvent'], QueryBase_hatToggleChangedEventArgs, MeshContext>,
  /** null **/
  Base_hatToggleChangedEvents: InContextSdkMethod<Query['Base_hatToggleChangedEvents'], QueryBase_hatToggleChangedEventsArgs, MeshContext>,
  /** null **/
  Base_hatMutabilityChangedEvent: InContextSdkMethod<Query['Base_hatMutabilityChangedEvent'], QueryBase_hatMutabilityChangedEventArgs, MeshContext>,
  /** null **/
  Base_hatMutabilityChangedEvents: InContextSdkMethod<Query['Base_hatMutabilityChangedEvents'], QueryBase_hatMutabilityChangedEventsArgs, MeshContext>,
  /** null **/
  Base_hatMaxSupplyChangedEvent: InContextSdkMethod<Query['Base_hatMaxSupplyChangedEvent'], QueryBase_hatMaxSupplyChangedEventArgs, MeshContext>,
  /** null **/
  Base_hatMaxSupplyChangedEvents: InContextSdkMethod<Query['Base_hatMaxSupplyChangedEvents'], QueryBase_hatMaxSupplyChangedEventsArgs, MeshContext>,
  /** null **/
  Base_hatImageURIChangedEvent: InContextSdkMethod<Query['Base_hatImageURIChangedEvent'], QueryBase_hatImageURIChangedEventArgs, MeshContext>,
  /** null **/
  Base_hatImageURIChangedEvents: InContextSdkMethod<Query['Base_hatImageURIChangedEvents'], QueryBase_hatImageURIChangedEventsArgs, MeshContext>,
  /** null **/
  Base_topHatLinkRequestedEvent: InContextSdkMethod<Query['Base_topHatLinkRequestedEvent'], QueryBase_topHatLinkRequestedEventArgs, MeshContext>,
  /** null **/
  Base_topHatLinkRequestedEvents: InContextSdkMethod<Query['Base_topHatLinkRequestedEvents'], QueryBase_topHatLinkRequestedEventsArgs, MeshContext>,
  /** null **/
  Base_topHatLinkedEvent: InContextSdkMethod<Query['Base_topHatLinkedEvent'], QueryBase_topHatLinkedEventArgs, MeshContext>,
  /** null **/
  Base_topHatLinkedEvents: InContextSdkMethod<Query['Base_topHatLinkedEvents'], QueryBase_topHatLinkedEventsArgs, MeshContext>,
  /** null **/
  Base_wearerStandingChangedEvent: InContextSdkMethod<Query['Base_wearerStandingChangedEvent'], QueryBase_wearerStandingChangedEventArgs, MeshContext>,
  /** null **/
  Base_wearerStandingChangedEvents: InContextSdkMethod<Query['Base_wearerStandingChangedEvents'], QueryBase_wearerStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Base_claimsHatter: InContextSdkMethod<Query['Base_claimsHatter'], QueryBase_claimsHatterArgs, MeshContext>,
  /** null **/
  Base_claimsHatters: InContextSdkMethod<Query['Base_claimsHatters'], QueryBase_claimsHattersArgs, MeshContext>,
  /** null **/
  Base_hatsEvent: InContextSdkMethod<Query['Base_hatsEvent'], QueryBase_hatsEventArgs, MeshContext>,
  /** null **/
  Base_hatsEvents: InContextSdkMethod<Query['Base_hatsEvents'], QueryBase_hatsEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Base__meta: InContextSdkMethod<Query['Base__meta'], QueryBase__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  Base_hat: InContextSdkMethod<Subscription['Base_hat'], SubscriptionBase_hatArgs, MeshContext>,
  /** null **/
  Base_hats: InContextSdkMethod<Subscription['Base_hats'], SubscriptionBase_hatsArgs, MeshContext>,
  /** null **/
  Base_wearer: InContextSdkMethod<Subscription['Base_wearer'], SubscriptionBase_wearerArgs, MeshContext>,
  /** null **/
  Base_wearers: InContextSdkMethod<Subscription['Base_wearers'], SubscriptionBase_wearersArgs, MeshContext>,
  /** null **/
  Base_tree: InContextSdkMethod<Subscription['Base_tree'], SubscriptionBase_treeArgs, MeshContext>,
  /** null **/
  Base_trees: InContextSdkMethod<Subscription['Base_trees'], SubscriptionBase_treesArgs, MeshContext>,
  /** null **/
  Base_hatCreatedEvent: InContextSdkMethod<Subscription['Base_hatCreatedEvent'], SubscriptionBase_hatCreatedEventArgs, MeshContext>,
  /** null **/
  Base_hatCreatedEvents: InContextSdkMethod<Subscription['Base_hatCreatedEvents'], SubscriptionBase_hatCreatedEventsArgs, MeshContext>,
  /** null **/
  Base_hatMintedEvent: InContextSdkMethod<Subscription['Base_hatMintedEvent'], SubscriptionBase_hatMintedEventArgs, MeshContext>,
  /** null **/
  Base_hatMintedEvents: InContextSdkMethod<Subscription['Base_hatMintedEvents'], SubscriptionBase_hatMintedEventsArgs, MeshContext>,
  /** null **/
  Base_hatBurnedEvent: InContextSdkMethod<Subscription['Base_hatBurnedEvent'], SubscriptionBase_hatBurnedEventArgs, MeshContext>,
  /** null **/
  Base_hatBurnedEvents: InContextSdkMethod<Subscription['Base_hatBurnedEvents'], SubscriptionBase_hatBurnedEventsArgs, MeshContext>,
  /** null **/
  Base_hatStatusChangedEvent: InContextSdkMethod<Subscription['Base_hatStatusChangedEvent'], SubscriptionBase_hatStatusChangedEventArgs, MeshContext>,
  /** null **/
  Base_hatStatusChangedEvents: InContextSdkMethod<Subscription['Base_hatStatusChangedEvents'], SubscriptionBase_hatStatusChangedEventsArgs, MeshContext>,
  /** null **/
  Base_hatDetailsChangedEvent: InContextSdkMethod<Subscription['Base_hatDetailsChangedEvent'], SubscriptionBase_hatDetailsChangedEventArgs, MeshContext>,
  /** null **/
  Base_hatDetailsChangedEvents: InContextSdkMethod<Subscription['Base_hatDetailsChangedEvents'], SubscriptionBase_hatDetailsChangedEventsArgs, MeshContext>,
  /** null **/
  Base_hatEligibilityChangedEvent: InContextSdkMethod<Subscription['Base_hatEligibilityChangedEvent'], SubscriptionBase_hatEligibilityChangedEventArgs, MeshContext>,
  /** null **/
  Base_hatEligibilityChangedEvents: InContextSdkMethod<Subscription['Base_hatEligibilityChangedEvents'], SubscriptionBase_hatEligibilityChangedEventsArgs, MeshContext>,
  /** null **/
  Base_hatToggleChangedEvent: InContextSdkMethod<Subscription['Base_hatToggleChangedEvent'], SubscriptionBase_hatToggleChangedEventArgs, MeshContext>,
  /** null **/
  Base_hatToggleChangedEvents: InContextSdkMethod<Subscription['Base_hatToggleChangedEvents'], SubscriptionBase_hatToggleChangedEventsArgs, MeshContext>,
  /** null **/
  Base_hatMutabilityChangedEvent: InContextSdkMethod<Subscription['Base_hatMutabilityChangedEvent'], SubscriptionBase_hatMutabilityChangedEventArgs, MeshContext>,
  /** null **/
  Base_hatMutabilityChangedEvents: InContextSdkMethod<Subscription['Base_hatMutabilityChangedEvents'], SubscriptionBase_hatMutabilityChangedEventsArgs, MeshContext>,
  /** null **/
  Base_hatMaxSupplyChangedEvent: InContextSdkMethod<Subscription['Base_hatMaxSupplyChangedEvent'], SubscriptionBase_hatMaxSupplyChangedEventArgs, MeshContext>,
  /** null **/
  Base_hatMaxSupplyChangedEvents: InContextSdkMethod<Subscription['Base_hatMaxSupplyChangedEvents'], SubscriptionBase_hatMaxSupplyChangedEventsArgs, MeshContext>,
  /** null **/
  Base_hatImageURIChangedEvent: InContextSdkMethod<Subscription['Base_hatImageURIChangedEvent'], SubscriptionBase_hatImageURIChangedEventArgs, MeshContext>,
  /** null **/
  Base_hatImageURIChangedEvents: InContextSdkMethod<Subscription['Base_hatImageURIChangedEvents'], SubscriptionBase_hatImageURIChangedEventsArgs, MeshContext>,
  /** null **/
  Base_topHatLinkRequestedEvent: InContextSdkMethod<Subscription['Base_topHatLinkRequestedEvent'], SubscriptionBase_topHatLinkRequestedEventArgs, MeshContext>,
  /** null **/
  Base_topHatLinkRequestedEvents: InContextSdkMethod<Subscription['Base_topHatLinkRequestedEvents'], SubscriptionBase_topHatLinkRequestedEventsArgs, MeshContext>,
  /** null **/
  Base_topHatLinkedEvent: InContextSdkMethod<Subscription['Base_topHatLinkedEvent'], SubscriptionBase_topHatLinkedEventArgs, MeshContext>,
  /** null **/
  Base_topHatLinkedEvents: InContextSdkMethod<Subscription['Base_topHatLinkedEvents'], SubscriptionBase_topHatLinkedEventsArgs, MeshContext>,
  /** null **/
  Base_wearerStandingChangedEvent: InContextSdkMethod<Subscription['Base_wearerStandingChangedEvent'], SubscriptionBase_wearerStandingChangedEventArgs, MeshContext>,
  /** null **/
  Base_wearerStandingChangedEvents: InContextSdkMethod<Subscription['Base_wearerStandingChangedEvents'], SubscriptionBase_wearerStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Base_claimsHatter: InContextSdkMethod<Subscription['Base_claimsHatter'], SubscriptionBase_claimsHatterArgs, MeshContext>,
  /** null **/
  Base_claimsHatters: InContextSdkMethod<Subscription['Base_claimsHatters'], SubscriptionBase_claimsHattersArgs, MeshContext>,
  /** null **/
  Base_hatsEvent: InContextSdkMethod<Subscription['Base_hatsEvent'], SubscriptionBase_hatsEventArgs, MeshContext>,
  /** null **/
  Base_hatsEvents: InContextSdkMethod<Subscription['Base_hatsEvents'], SubscriptionBase_hatsEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Base__meta: InContextSdkMethod<Subscription['Base__meta'], SubscriptionBase__metaArgs, MeshContext>
  };

  export type Context = {
      ["Base_Main"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
