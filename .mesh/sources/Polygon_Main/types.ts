// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace PolygonMainTypes {
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
  Pol_BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Pol_Bytes: { input: any; output: any; }
  Pol_Int8: { input: any; output: any; }
};

export type Pol_BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Pol_Block_height = {
  hash?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Pol_ClaimsHatter = {
  id: Scalars['ID']['output'];
  claimableHats: Array<Pol_Hat>;
  claimableForHats: Array<Pol_Hat>;
};


export type Pol_ClaimsHatterclaimableHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_Hat_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_Hat_filter>;
};


export type Pol_ClaimsHatterclaimableForHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_Hat_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_Hat_filter>;
};

export type Pol_ClaimsHatter_filter = {
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
  claimableHats_?: InputMaybe<Pol_Hat_filter>;
  claimableForHats?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_?: InputMaybe<Pol_Hat_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_ClaimsHatter_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_ClaimsHatter_filter>>>;
};

export type Pol_ClaimsHatter_orderBy =
  | 'id'
  | 'claimableHats'
  | 'claimableForHats';

export type Pol_Hat = {
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
  tree: Pol_Tree;
  wearers: Array<Pol_Wearer>;
  admin: Pol_Hat;
  badStandings: Array<Pol_Wearer>;
  claimableBy: Array<Pol_ClaimsHatter>;
  claimableForBy: Array<Pol_ClaimsHatter>;
  linkRequestFromTree: Array<Pol_Tree>;
  subHats: Array<Pol_Hat>;
  linkedTrees: Array<Pol_Tree>;
  events: Array<Pol_HatsEvent>;
};


export type Pol_HatwearersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_Wearer_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_Wearer_filter>;
};


export type Pol_HatbadStandingsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_Wearer_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_Wearer_filter>;
};


export type Pol_HatclaimableByArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_ClaimsHatter_filter>;
};


export type Pol_HatclaimableForByArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_ClaimsHatter_filter>;
};


export type Pol_HatlinkRequestFromTreeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_Tree_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_Tree_filter>;
};


export type Pol_HatsubHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_Hat_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_Hat_filter>;
};


export type Pol_HatlinkedTreesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_Tree_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_Tree_filter>;
};


export type Pol_HateventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatsEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatsEvent_filter>;
};

export type Pol_HatBurnedEvent = Pol_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Pol_Tree;
  hat: Pol_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Pol_Bytes']['output'];
  wearer: Pol_Wearer;
  operator: Scalars['String']['output'];
};

export type Pol_HatBurnedEvent_filter = {
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
  tree_?: InputMaybe<Pol_Tree_filter>;
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
  hat_?: InputMaybe<Pol_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
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
  wearer_?: InputMaybe<Pol_Wearer_filter>;
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
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_HatBurnedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_HatBurnedEvent_filter>>>;
};

export type Pol_HatBurnedEvent_orderBy =
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

export type Pol_HatCreatedEvent = Pol_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Pol_Tree;
  hat: Pol_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Pol_Bytes']['output'];
  hatDetails: Scalars['String']['output'];
  hatMaxSupply: Scalars['BigInt']['output'];
  hatEligibility: Scalars['String']['output'];
  hatToggle: Scalars['String']['output'];
  hatMutable: Scalars['Boolean']['output'];
  hatImageUri: Scalars['String']['output'];
};

export type Pol_HatCreatedEvent_filter = {
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
  tree_?: InputMaybe<Pol_Tree_filter>;
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
  hat_?: InputMaybe<Pol_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
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
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_HatCreatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_HatCreatedEvent_filter>>>;
};

export type Pol_HatCreatedEvent_orderBy =
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

export type Pol_HatDetailsChangedEvent = Pol_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Pol_Tree;
  hat: Pol_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Pol_Bytes']['output'];
  hatNewDetails: Scalars['String']['output'];
};

export type Pol_HatDetailsChangedEvent_filter = {
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
  tree_?: InputMaybe<Pol_Tree_filter>;
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
  hat_?: InputMaybe<Pol_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
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
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_HatDetailsChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_HatDetailsChangedEvent_filter>>>;
};

export type Pol_HatDetailsChangedEvent_orderBy =
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

export type Pol_HatEligibilityChangedEvent = Pol_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Pol_Tree;
  hat: Pol_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Pol_Bytes']['output'];
  hatNewEligibility: Scalars['String']['output'];
};

export type Pol_HatEligibilityChangedEvent_filter = {
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
  tree_?: InputMaybe<Pol_Tree_filter>;
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
  hat_?: InputMaybe<Pol_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
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
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_HatEligibilityChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_HatEligibilityChangedEvent_filter>>>;
};

export type Pol_HatEligibilityChangedEvent_orderBy =
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

export type Pol_HatImageURIChangedEvent = Pol_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Pol_Tree;
  hat: Pol_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Pol_Bytes']['output'];
  hatNewImageURI: Scalars['String']['output'];
};

export type Pol_HatImageURIChangedEvent_filter = {
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
  tree_?: InputMaybe<Pol_Tree_filter>;
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
  hat_?: InputMaybe<Pol_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
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
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_HatImageURIChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_HatImageURIChangedEvent_filter>>>;
};

export type Pol_HatImageURIChangedEvent_orderBy =
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

export type Pol_HatMaxSupplyChangedEvent = Pol_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Pol_Tree;
  hat: Pol_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Pol_Bytes']['output'];
  hatNewMaxSupply: Scalars['BigInt']['output'];
};

export type Pol_HatMaxSupplyChangedEvent_filter = {
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
  tree_?: InputMaybe<Pol_Tree_filter>;
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
  hat_?: InputMaybe<Pol_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  hatNewMaxSupply?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hatNewMaxSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_HatMaxSupplyChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_HatMaxSupplyChangedEvent_filter>>>;
};

export type Pol_HatMaxSupplyChangedEvent_orderBy =
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

export type Pol_HatMintedEvent = Pol_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Pol_Tree;
  hat: Pol_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Pol_Bytes']['output'];
  wearer: Pol_Wearer;
  operator: Scalars['String']['output'];
};

export type Pol_HatMintedEvent_filter = {
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
  tree_?: InputMaybe<Pol_Tree_filter>;
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
  hat_?: InputMaybe<Pol_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
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
  wearer_?: InputMaybe<Pol_Wearer_filter>;
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
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_HatMintedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_HatMintedEvent_filter>>>;
};

export type Pol_HatMintedEvent_orderBy =
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

export type Pol_HatMutabilityChangedEvent = Pol_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Pol_Tree;
  hat: Pol_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Pol_Bytes']['output'];
};

export type Pol_HatMutabilityChangedEvent_filter = {
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
  tree_?: InputMaybe<Pol_Tree_filter>;
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
  hat_?: InputMaybe<Pol_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_HatMutabilityChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_HatMutabilityChangedEvent_filter>>>;
};

export type Pol_HatMutabilityChangedEvent_orderBy =
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

export type Pol_HatStatusChangedEvent = Pol_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Pol_Tree;
  hat: Pol_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Pol_Bytes']['output'];
  hatNewStatus: Scalars['Boolean']['output'];
};

export type Pol_HatStatusChangedEvent_filter = {
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
  tree_?: InputMaybe<Pol_Tree_filter>;
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
  hat_?: InputMaybe<Pol_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  hatNewStatus?: InputMaybe<Scalars['Boolean']['input']>;
  hatNewStatus_not?: InputMaybe<Scalars['Boolean']['input']>;
  hatNewStatus_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  hatNewStatus_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_HatStatusChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_HatStatusChangedEvent_filter>>>;
};

export type Pol_HatStatusChangedEvent_orderBy =
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

export type Pol_HatToggleChangedEvent = Pol_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Pol_Tree;
  hat: Pol_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Pol_Bytes']['output'];
  hatNewToggle: Scalars['String']['output'];
};

export type Pol_HatToggleChangedEvent_filter = {
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
  tree_?: InputMaybe<Pol_Tree_filter>;
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
  hat_?: InputMaybe<Pol_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
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
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_HatToggleChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_HatToggleChangedEvent_filter>>>;
};

export type Pol_HatToggleChangedEvent_orderBy =
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

export type Pol_Hat_filter = {
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
  tree_?: InputMaybe<Pol_Tree_filter>;
  wearers?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_?: InputMaybe<Pol_Wearer_filter>;
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
  admin_?: InputMaybe<Pol_Hat_filter>;
  badStandings?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_?: InputMaybe<Pol_Wearer_filter>;
  claimableBy_?: InputMaybe<Pol_ClaimsHatter_filter>;
  claimableForBy_?: InputMaybe<Pol_ClaimsHatter_filter>;
  linkRequestFromTree_?: InputMaybe<Pol_Tree_filter>;
  subHats_?: InputMaybe<Pol_Hat_filter>;
  linkedTrees_?: InputMaybe<Pol_Tree_filter>;
  events_?: InputMaybe<Pol_HatsEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_Hat_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_Hat_filter>>>;
};

export type Pol_Hat_orderBy =
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

export type Pol_HatsEvent = {
  id: Scalars['ID']['output'];
  tree: Pol_Tree;
  hat: Pol_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Pol_Bytes']['output'];
};

export type Pol_HatsEvent_filter = {
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
  tree_?: InputMaybe<Pol_Tree_filter>;
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
  hat_?: InputMaybe<Pol_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_HatsEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_HatsEvent_filter>>>;
};

export type Pol_HatsEvent_orderBy =
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
export type Pol_OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  Pol_hat?: Maybe<Pol_Hat>;
  Pol_hats: Array<Pol_Hat>;
  Pol_wearer?: Maybe<Pol_Wearer>;
  Pol_wearers: Array<Pol_Wearer>;
  Pol_tree?: Maybe<Pol_Tree>;
  Pol_trees: Array<Pol_Tree>;
  Pol_hatCreatedEvent?: Maybe<Pol_HatCreatedEvent>;
  Pol_hatCreatedEvents: Array<Pol_HatCreatedEvent>;
  Pol_hatMintedEvent?: Maybe<Pol_HatMintedEvent>;
  Pol_hatMintedEvents: Array<Pol_HatMintedEvent>;
  Pol_hatBurnedEvent?: Maybe<Pol_HatBurnedEvent>;
  Pol_hatBurnedEvents: Array<Pol_HatBurnedEvent>;
  Pol_hatStatusChangedEvent?: Maybe<Pol_HatStatusChangedEvent>;
  Pol_hatStatusChangedEvents: Array<Pol_HatStatusChangedEvent>;
  Pol_hatDetailsChangedEvent?: Maybe<Pol_HatDetailsChangedEvent>;
  Pol_hatDetailsChangedEvents: Array<Pol_HatDetailsChangedEvent>;
  Pol_hatEligibilityChangedEvent?: Maybe<Pol_HatEligibilityChangedEvent>;
  Pol_hatEligibilityChangedEvents: Array<Pol_HatEligibilityChangedEvent>;
  Pol_hatToggleChangedEvent?: Maybe<Pol_HatToggleChangedEvent>;
  Pol_hatToggleChangedEvents: Array<Pol_HatToggleChangedEvent>;
  Pol_hatMutabilityChangedEvent?: Maybe<Pol_HatMutabilityChangedEvent>;
  Pol_hatMutabilityChangedEvents: Array<Pol_HatMutabilityChangedEvent>;
  Pol_hatMaxSupplyChangedEvent?: Maybe<Pol_HatMaxSupplyChangedEvent>;
  Pol_hatMaxSupplyChangedEvents: Array<Pol_HatMaxSupplyChangedEvent>;
  Pol_hatImageURIChangedEvent?: Maybe<Pol_HatImageURIChangedEvent>;
  Pol_hatImageURIChangedEvents: Array<Pol_HatImageURIChangedEvent>;
  Pol_topHatLinkRequestedEvent?: Maybe<Pol_TopHatLinkRequestedEvent>;
  Pol_topHatLinkRequestedEvents: Array<Pol_TopHatLinkRequestedEvent>;
  Pol_topHatLinkedEvent?: Maybe<Pol_TopHatLinkedEvent>;
  Pol_topHatLinkedEvents: Array<Pol_TopHatLinkedEvent>;
  Pol_wearerStandingChangedEvent?: Maybe<Pol_WearerStandingChangedEvent>;
  Pol_wearerStandingChangedEvents: Array<Pol_WearerStandingChangedEvent>;
  Pol_claimsHatter?: Maybe<Pol_ClaimsHatter>;
  Pol_claimsHatters: Array<Pol_ClaimsHatter>;
  Pol_hatsEvent?: Maybe<Pol_HatsEvent>;
  Pol_hatsEvents: Array<Pol_HatsEvent>;
  /** Access to subgraph metadata */
  Pol__meta?: Maybe<Pol__Meta_>;
};


export type QueryPol_hatArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_Hat_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_Hat_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_wearerArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_wearersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_Wearer_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_Wearer_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_treeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_treesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_Tree_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_Tree_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatCreatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatCreatedEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatMintedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatMintedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatMintedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatMintedEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatBurnedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatBurnedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatBurnedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatBurnedEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatStatusChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatStatusChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatStatusChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatStatusChangedEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatDetailsChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatDetailsChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatDetailsChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatDetailsChangedEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatEligibilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatEligibilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatEligibilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatEligibilityChangedEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatToggleChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatToggleChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatToggleChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatToggleChangedEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatMutabilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatMutabilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatMutabilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatMutabilityChangedEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatMaxSupplyChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatMaxSupplyChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatMaxSupplyChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatMaxSupplyChangedEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatImageURIChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatImageURIChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatImageURIChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatImageURIChangedEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_topHatLinkRequestedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_topHatLinkRequestedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_TopHatLinkRequestedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_TopHatLinkRequestedEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_topHatLinkedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_topHatLinkedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_TopHatLinkedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_TopHatLinkedEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_wearerStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_wearerStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_WearerStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_WearerStandingChangedEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_claimsHatterArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_claimsHattersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_ClaimsHatter_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatsEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatsEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatsEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatsEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol__metaArgs = {
  block?: InputMaybe<Pol_Block_height>;
};

export type Subscription = {
  Pol_hat?: Maybe<Pol_Hat>;
  Pol_hats: Array<Pol_Hat>;
  Pol_wearer?: Maybe<Pol_Wearer>;
  Pol_wearers: Array<Pol_Wearer>;
  Pol_tree?: Maybe<Pol_Tree>;
  Pol_trees: Array<Pol_Tree>;
  Pol_hatCreatedEvent?: Maybe<Pol_HatCreatedEvent>;
  Pol_hatCreatedEvents: Array<Pol_HatCreatedEvent>;
  Pol_hatMintedEvent?: Maybe<Pol_HatMintedEvent>;
  Pol_hatMintedEvents: Array<Pol_HatMintedEvent>;
  Pol_hatBurnedEvent?: Maybe<Pol_HatBurnedEvent>;
  Pol_hatBurnedEvents: Array<Pol_HatBurnedEvent>;
  Pol_hatStatusChangedEvent?: Maybe<Pol_HatStatusChangedEvent>;
  Pol_hatStatusChangedEvents: Array<Pol_HatStatusChangedEvent>;
  Pol_hatDetailsChangedEvent?: Maybe<Pol_HatDetailsChangedEvent>;
  Pol_hatDetailsChangedEvents: Array<Pol_HatDetailsChangedEvent>;
  Pol_hatEligibilityChangedEvent?: Maybe<Pol_HatEligibilityChangedEvent>;
  Pol_hatEligibilityChangedEvents: Array<Pol_HatEligibilityChangedEvent>;
  Pol_hatToggleChangedEvent?: Maybe<Pol_HatToggleChangedEvent>;
  Pol_hatToggleChangedEvents: Array<Pol_HatToggleChangedEvent>;
  Pol_hatMutabilityChangedEvent?: Maybe<Pol_HatMutabilityChangedEvent>;
  Pol_hatMutabilityChangedEvents: Array<Pol_HatMutabilityChangedEvent>;
  Pol_hatMaxSupplyChangedEvent?: Maybe<Pol_HatMaxSupplyChangedEvent>;
  Pol_hatMaxSupplyChangedEvents: Array<Pol_HatMaxSupplyChangedEvent>;
  Pol_hatImageURIChangedEvent?: Maybe<Pol_HatImageURIChangedEvent>;
  Pol_hatImageURIChangedEvents: Array<Pol_HatImageURIChangedEvent>;
  Pol_topHatLinkRequestedEvent?: Maybe<Pol_TopHatLinkRequestedEvent>;
  Pol_topHatLinkRequestedEvents: Array<Pol_TopHatLinkRequestedEvent>;
  Pol_topHatLinkedEvent?: Maybe<Pol_TopHatLinkedEvent>;
  Pol_topHatLinkedEvents: Array<Pol_TopHatLinkedEvent>;
  Pol_wearerStandingChangedEvent?: Maybe<Pol_WearerStandingChangedEvent>;
  Pol_wearerStandingChangedEvents: Array<Pol_WearerStandingChangedEvent>;
  Pol_claimsHatter?: Maybe<Pol_ClaimsHatter>;
  Pol_claimsHatters: Array<Pol_ClaimsHatter>;
  Pol_hatsEvent?: Maybe<Pol_HatsEvent>;
  Pol_hatsEvents: Array<Pol_HatsEvent>;
  /** Access to subgraph metadata */
  Pol__meta?: Maybe<Pol__Meta_>;
};


export type SubscriptionPol_hatArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_Hat_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_Hat_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_wearerArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_wearersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_Wearer_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_Wearer_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_treeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_treesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_Tree_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_Tree_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatCreatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatCreatedEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatMintedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatMintedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatMintedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatMintedEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatBurnedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatBurnedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatBurnedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatBurnedEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatStatusChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatStatusChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatStatusChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatStatusChangedEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatDetailsChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatDetailsChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatDetailsChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatDetailsChangedEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatEligibilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatEligibilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatEligibilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatEligibilityChangedEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatToggleChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatToggleChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatToggleChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatToggleChangedEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatMutabilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatMutabilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatMutabilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatMutabilityChangedEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatMaxSupplyChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatMaxSupplyChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatMaxSupplyChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatMaxSupplyChangedEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatImageURIChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatImageURIChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatImageURIChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatImageURIChangedEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_topHatLinkRequestedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_topHatLinkRequestedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_TopHatLinkRequestedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_TopHatLinkRequestedEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_topHatLinkedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_topHatLinkedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_TopHatLinkedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_TopHatLinkedEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_wearerStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_wearerStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_WearerStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_WearerStandingChangedEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_claimsHatterArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_claimsHattersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_ClaimsHatter_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatsEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatsEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatsEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatsEvent_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol__metaArgs = {
  block?: InputMaybe<Pol_Block_height>;
};

export type Pol_TopHatLinkRequestedEvent = Pol_HatsEvent & {
  /** tree field is the tree that is being linked, hat field is the tree top hat */
  id: Scalars['ID']['output'];
  tree: Pol_Tree;
  hat: Pol_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Pol_Bytes']['output'];
  newAdmin: Pol_Hat;
};

export type Pol_TopHatLinkRequestedEvent_filter = {
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
  tree_?: InputMaybe<Pol_Tree_filter>;
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
  hat_?: InputMaybe<Pol_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
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
  newAdmin_?: InputMaybe<Pol_Hat_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_TopHatLinkRequestedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_TopHatLinkRequestedEvent_filter>>>;
};

export type Pol_TopHatLinkRequestedEvent_orderBy =
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

export type Pol_TopHatLinkedEvent = Pol_HatsEvent & {
  /** tree field is the tree that is being linked, hat field is the tree top hat */
  id: Scalars['ID']['output'];
  tree: Pol_Tree;
  hat: Pol_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Pol_Bytes']['output'];
  newAdmin: Pol_Hat;
};

export type Pol_TopHatLinkedEvent_filter = {
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
  tree_?: InputMaybe<Pol_Tree_filter>;
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
  hat_?: InputMaybe<Pol_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
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
  newAdmin_?: InputMaybe<Pol_Hat_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_TopHatLinkedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_TopHatLinkedEvent_filter>>>;
};

export type Pol_TopHatLinkedEvent_orderBy =
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

export type Pol_Tree = {
  /** Tree ID is its top hat domain - first 4 bytes of the top hat ID */
  id: Scalars['ID']['output'];
  childOfTree?: Maybe<Pol_Tree>;
  linkedToHat?: Maybe<Pol_Hat>;
  requestedLinkToTree?: Maybe<Pol_Tree>;
  requestedLinkToHat?: Maybe<Pol_Hat>;
  linkRequestFromTree: Array<Pol_Tree>;
  hats: Array<Pol_Hat>;
  parentOfTrees: Array<Pol_Tree>;
  events: Array<Pol_HatsEvent>;
};


export type Pol_TreelinkRequestFromTreeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_Tree_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_Tree_filter>;
};


export type Pol_TreehatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_Hat_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_Hat_filter>;
};


export type Pol_TreeparentOfTreesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_Tree_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_Tree_filter>;
};


export type Pol_TreeeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatsEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatsEvent_filter>;
};

export type Pol_Tree_filter = {
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
  childOfTree_?: InputMaybe<Pol_Tree_filter>;
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
  linkedToHat_?: InputMaybe<Pol_Hat_filter>;
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
  requestedLinkToTree_?: InputMaybe<Pol_Tree_filter>;
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
  requestedLinkToHat_?: InputMaybe<Pol_Hat_filter>;
  linkRequestFromTree_?: InputMaybe<Pol_Tree_filter>;
  hats_?: InputMaybe<Pol_Hat_filter>;
  parentOfTrees_?: InputMaybe<Pol_Tree_filter>;
  events_?: InputMaybe<Pol_HatsEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_Tree_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_Tree_filter>>>;
};

export type Pol_Tree_orderBy =
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

export type Pol_Wearer = {
  id: Scalars['ID']['output'];
  currentHats: Array<Pol_Hat>;
  mintEvent: Array<Pol_HatMintedEvent>;
  burnEvent: Array<Pol_HatBurnedEvent>;
};


export type Pol_WearercurrentHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_Hat_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_Hat_filter>;
};


export type Pol_WearermintEventArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatMintedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatMintedEvent_filter>;
};


export type Pol_WearerburnEventArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatBurnedEvent_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatBurnedEvent_filter>;
};

export type Pol_WearerStandingChangedEvent = Pol_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Pol_Tree;
  hat: Pol_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Pol_Bytes']['output'];
  wearer: Pol_Wearer;
  wearerStanding: Scalars['Boolean']['output'];
};

export type Pol_WearerStandingChangedEvent_filter = {
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
  tree_?: InputMaybe<Pol_Tree_filter>;
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
  hat_?: InputMaybe<Pol_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
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
  wearer_?: InputMaybe<Pol_Wearer_filter>;
  wearerStanding?: InputMaybe<Scalars['Boolean']['input']>;
  wearerStanding_not?: InputMaybe<Scalars['Boolean']['input']>;
  wearerStanding_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  wearerStanding_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_WearerStandingChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_WearerStandingChangedEvent_filter>>>;
};

export type Pol_WearerStandingChangedEvent_orderBy =
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

export type Pol_Wearer_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  currentHats_?: InputMaybe<Pol_Hat_filter>;
  mintEvent_?: InputMaybe<Pol_HatMintedEvent_filter>;
  burnEvent_?: InputMaybe<Pol_HatBurnedEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_Wearer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_Wearer_filter>>>;
};

export type Pol_Wearer_orderBy =
  | 'id'
  | 'currentHats'
  | 'mintEvent'
  | 'burnEvent';

export type Pol__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Pol_Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type Pol__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: Pol__Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type Pol__SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  Pol_hat: InContextSdkMethod<Query['Pol_hat'], QueryPol_hatArgs, MeshContext>,
  /** null **/
  Pol_hats: InContextSdkMethod<Query['Pol_hats'], QueryPol_hatsArgs, MeshContext>,
  /** null **/
  Pol_wearer: InContextSdkMethod<Query['Pol_wearer'], QueryPol_wearerArgs, MeshContext>,
  /** null **/
  Pol_wearers: InContextSdkMethod<Query['Pol_wearers'], QueryPol_wearersArgs, MeshContext>,
  /** null **/
  Pol_tree: InContextSdkMethod<Query['Pol_tree'], QueryPol_treeArgs, MeshContext>,
  /** null **/
  Pol_trees: InContextSdkMethod<Query['Pol_trees'], QueryPol_treesArgs, MeshContext>,
  /** null **/
  Pol_hatCreatedEvent: InContextSdkMethod<Query['Pol_hatCreatedEvent'], QueryPol_hatCreatedEventArgs, MeshContext>,
  /** null **/
  Pol_hatCreatedEvents: InContextSdkMethod<Query['Pol_hatCreatedEvents'], QueryPol_hatCreatedEventsArgs, MeshContext>,
  /** null **/
  Pol_hatMintedEvent: InContextSdkMethod<Query['Pol_hatMintedEvent'], QueryPol_hatMintedEventArgs, MeshContext>,
  /** null **/
  Pol_hatMintedEvents: InContextSdkMethod<Query['Pol_hatMintedEvents'], QueryPol_hatMintedEventsArgs, MeshContext>,
  /** null **/
  Pol_hatBurnedEvent: InContextSdkMethod<Query['Pol_hatBurnedEvent'], QueryPol_hatBurnedEventArgs, MeshContext>,
  /** null **/
  Pol_hatBurnedEvents: InContextSdkMethod<Query['Pol_hatBurnedEvents'], QueryPol_hatBurnedEventsArgs, MeshContext>,
  /** null **/
  Pol_hatStatusChangedEvent: InContextSdkMethod<Query['Pol_hatStatusChangedEvent'], QueryPol_hatStatusChangedEventArgs, MeshContext>,
  /** null **/
  Pol_hatStatusChangedEvents: InContextSdkMethod<Query['Pol_hatStatusChangedEvents'], QueryPol_hatStatusChangedEventsArgs, MeshContext>,
  /** null **/
  Pol_hatDetailsChangedEvent: InContextSdkMethod<Query['Pol_hatDetailsChangedEvent'], QueryPol_hatDetailsChangedEventArgs, MeshContext>,
  /** null **/
  Pol_hatDetailsChangedEvents: InContextSdkMethod<Query['Pol_hatDetailsChangedEvents'], QueryPol_hatDetailsChangedEventsArgs, MeshContext>,
  /** null **/
  Pol_hatEligibilityChangedEvent: InContextSdkMethod<Query['Pol_hatEligibilityChangedEvent'], QueryPol_hatEligibilityChangedEventArgs, MeshContext>,
  /** null **/
  Pol_hatEligibilityChangedEvents: InContextSdkMethod<Query['Pol_hatEligibilityChangedEvents'], QueryPol_hatEligibilityChangedEventsArgs, MeshContext>,
  /** null **/
  Pol_hatToggleChangedEvent: InContextSdkMethod<Query['Pol_hatToggleChangedEvent'], QueryPol_hatToggleChangedEventArgs, MeshContext>,
  /** null **/
  Pol_hatToggleChangedEvents: InContextSdkMethod<Query['Pol_hatToggleChangedEvents'], QueryPol_hatToggleChangedEventsArgs, MeshContext>,
  /** null **/
  Pol_hatMutabilityChangedEvent: InContextSdkMethod<Query['Pol_hatMutabilityChangedEvent'], QueryPol_hatMutabilityChangedEventArgs, MeshContext>,
  /** null **/
  Pol_hatMutabilityChangedEvents: InContextSdkMethod<Query['Pol_hatMutabilityChangedEvents'], QueryPol_hatMutabilityChangedEventsArgs, MeshContext>,
  /** null **/
  Pol_hatMaxSupplyChangedEvent: InContextSdkMethod<Query['Pol_hatMaxSupplyChangedEvent'], QueryPol_hatMaxSupplyChangedEventArgs, MeshContext>,
  /** null **/
  Pol_hatMaxSupplyChangedEvents: InContextSdkMethod<Query['Pol_hatMaxSupplyChangedEvents'], QueryPol_hatMaxSupplyChangedEventsArgs, MeshContext>,
  /** null **/
  Pol_hatImageURIChangedEvent: InContextSdkMethod<Query['Pol_hatImageURIChangedEvent'], QueryPol_hatImageURIChangedEventArgs, MeshContext>,
  /** null **/
  Pol_hatImageURIChangedEvents: InContextSdkMethod<Query['Pol_hatImageURIChangedEvents'], QueryPol_hatImageURIChangedEventsArgs, MeshContext>,
  /** null **/
  Pol_topHatLinkRequestedEvent: InContextSdkMethod<Query['Pol_topHatLinkRequestedEvent'], QueryPol_topHatLinkRequestedEventArgs, MeshContext>,
  /** null **/
  Pol_topHatLinkRequestedEvents: InContextSdkMethod<Query['Pol_topHatLinkRequestedEvents'], QueryPol_topHatLinkRequestedEventsArgs, MeshContext>,
  /** null **/
  Pol_topHatLinkedEvent: InContextSdkMethod<Query['Pol_topHatLinkedEvent'], QueryPol_topHatLinkedEventArgs, MeshContext>,
  /** null **/
  Pol_topHatLinkedEvents: InContextSdkMethod<Query['Pol_topHatLinkedEvents'], QueryPol_topHatLinkedEventsArgs, MeshContext>,
  /** null **/
  Pol_wearerStandingChangedEvent: InContextSdkMethod<Query['Pol_wearerStandingChangedEvent'], QueryPol_wearerStandingChangedEventArgs, MeshContext>,
  /** null **/
  Pol_wearerStandingChangedEvents: InContextSdkMethod<Query['Pol_wearerStandingChangedEvents'], QueryPol_wearerStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Pol_claimsHatter: InContextSdkMethod<Query['Pol_claimsHatter'], QueryPol_claimsHatterArgs, MeshContext>,
  /** null **/
  Pol_claimsHatters: InContextSdkMethod<Query['Pol_claimsHatters'], QueryPol_claimsHattersArgs, MeshContext>,
  /** null **/
  Pol_hatsEvent: InContextSdkMethod<Query['Pol_hatsEvent'], QueryPol_hatsEventArgs, MeshContext>,
  /** null **/
  Pol_hatsEvents: InContextSdkMethod<Query['Pol_hatsEvents'], QueryPol_hatsEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Pol__meta: InContextSdkMethod<Query['Pol__meta'], QueryPol__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  Pol_hat: InContextSdkMethod<Subscription['Pol_hat'], SubscriptionPol_hatArgs, MeshContext>,
  /** null **/
  Pol_hats: InContextSdkMethod<Subscription['Pol_hats'], SubscriptionPol_hatsArgs, MeshContext>,
  /** null **/
  Pol_wearer: InContextSdkMethod<Subscription['Pol_wearer'], SubscriptionPol_wearerArgs, MeshContext>,
  /** null **/
  Pol_wearers: InContextSdkMethod<Subscription['Pol_wearers'], SubscriptionPol_wearersArgs, MeshContext>,
  /** null **/
  Pol_tree: InContextSdkMethod<Subscription['Pol_tree'], SubscriptionPol_treeArgs, MeshContext>,
  /** null **/
  Pol_trees: InContextSdkMethod<Subscription['Pol_trees'], SubscriptionPol_treesArgs, MeshContext>,
  /** null **/
  Pol_hatCreatedEvent: InContextSdkMethod<Subscription['Pol_hatCreatedEvent'], SubscriptionPol_hatCreatedEventArgs, MeshContext>,
  /** null **/
  Pol_hatCreatedEvents: InContextSdkMethod<Subscription['Pol_hatCreatedEvents'], SubscriptionPol_hatCreatedEventsArgs, MeshContext>,
  /** null **/
  Pol_hatMintedEvent: InContextSdkMethod<Subscription['Pol_hatMintedEvent'], SubscriptionPol_hatMintedEventArgs, MeshContext>,
  /** null **/
  Pol_hatMintedEvents: InContextSdkMethod<Subscription['Pol_hatMintedEvents'], SubscriptionPol_hatMintedEventsArgs, MeshContext>,
  /** null **/
  Pol_hatBurnedEvent: InContextSdkMethod<Subscription['Pol_hatBurnedEvent'], SubscriptionPol_hatBurnedEventArgs, MeshContext>,
  /** null **/
  Pol_hatBurnedEvents: InContextSdkMethod<Subscription['Pol_hatBurnedEvents'], SubscriptionPol_hatBurnedEventsArgs, MeshContext>,
  /** null **/
  Pol_hatStatusChangedEvent: InContextSdkMethod<Subscription['Pol_hatStatusChangedEvent'], SubscriptionPol_hatStatusChangedEventArgs, MeshContext>,
  /** null **/
  Pol_hatStatusChangedEvents: InContextSdkMethod<Subscription['Pol_hatStatusChangedEvents'], SubscriptionPol_hatStatusChangedEventsArgs, MeshContext>,
  /** null **/
  Pol_hatDetailsChangedEvent: InContextSdkMethod<Subscription['Pol_hatDetailsChangedEvent'], SubscriptionPol_hatDetailsChangedEventArgs, MeshContext>,
  /** null **/
  Pol_hatDetailsChangedEvents: InContextSdkMethod<Subscription['Pol_hatDetailsChangedEvents'], SubscriptionPol_hatDetailsChangedEventsArgs, MeshContext>,
  /** null **/
  Pol_hatEligibilityChangedEvent: InContextSdkMethod<Subscription['Pol_hatEligibilityChangedEvent'], SubscriptionPol_hatEligibilityChangedEventArgs, MeshContext>,
  /** null **/
  Pol_hatEligibilityChangedEvents: InContextSdkMethod<Subscription['Pol_hatEligibilityChangedEvents'], SubscriptionPol_hatEligibilityChangedEventsArgs, MeshContext>,
  /** null **/
  Pol_hatToggleChangedEvent: InContextSdkMethod<Subscription['Pol_hatToggleChangedEvent'], SubscriptionPol_hatToggleChangedEventArgs, MeshContext>,
  /** null **/
  Pol_hatToggleChangedEvents: InContextSdkMethod<Subscription['Pol_hatToggleChangedEvents'], SubscriptionPol_hatToggleChangedEventsArgs, MeshContext>,
  /** null **/
  Pol_hatMutabilityChangedEvent: InContextSdkMethod<Subscription['Pol_hatMutabilityChangedEvent'], SubscriptionPol_hatMutabilityChangedEventArgs, MeshContext>,
  /** null **/
  Pol_hatMutabilityChangedEvents: InContextSdkMethod<Subscription['Pol_hatMutabilityChangedEvents'], SubscriptionPol_hatMutabilityChangedEventsArgs, MeshContext>,
  /** null **/
  Pol_hatMaxSupplyChangedEvent: InContextSdkMethod<Subscription['Pol_hatMaxSupplyChangedEvent'], SubscriptionPol_hatMaxSupplyChangedEventArgs, MeshContext>,
  /** null **/
  Pol_hatMaxSupplyChangedEvents: InContextSdkMethod<Subscription['Pol_hatMaxSupplyChangedEvents'], SubscriptionPol_hatMaxSupplyChangedEventsArgs, MeshContext>,
  /** null **/
  Pol_hatImageURIChangedEvent: InContextSdkMethod<Subscription['Pol_hatImageURIChangedEvent'], SubscriptionPol_hatImageURIChangedEventArgs, MeshContext>,
  /** null **/
  Pol_hatImageURIChangedEvents: InContextSdkMethod<Subscription['Pol_hatImageURIChangedEvents'], SubscriptionPol_hatImageURIChangedEventsArgs, MeshContext>,
  /** null **/
  Pol_topHatLinkRequestedEvent: InContextSdkMethod<Subscription['Pol_topHatLinkRequestedEvent'], SubscriptionPol_topHatLinkRequestedEventArgs, MeshContext>,
  /** null **/
  Pol_topHatLinkRequestedEvents: InContextSdkMethod<Subscription['Pol_topHatLinkRequestedEvents'], SubscriptionPol_topHatLinkRequestedEventsArgs, MeshContext>,
  /** null **/
  Pol_topHatLinkedEvent: InContextSdkMethod<Subscription['Pol_topHatLinkedEvent'], SubscriptionPol_topHatLinkedEventArgs, MeshContext>,
  /** null **/
  Pol_topHatLinkedEvents: InContextSdkMethod<Subscription['Pol_topHatLinkedEvents'], SubscriptionPol_topHatLinkedEventsArgs, MeshContext>,
  /** null **/
  Pol_wearerStandingChangedEvent: InContextSdkMethod<Subscription['Pol_wearerStandingChangedEvent'], SubscriptionPol_wearerStandingChangedEventArgs, MeshContext>,
  /** null **/
  Pol_wearerStandingChangedEvents: InContextSdkMethod<Subscription['Pol_wearerStandingChangedEvents'], SubscriptionPol_wearerStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Pol_claimsHatter: InContextSdkMethod<Subscription['Pol_claimsHatter'], SubscriptionPol_claimsHatterArgs, MeshContext>,
  /** null **/
  Pol_claimsHatters: InContextSdkMethod<Subscription['Pol_claimsHatters'], SubscriptionPol_claimsHattersArgs, MeshContext>,
  /** null **/
  Pol_hatsEvent: InContextSdkMethod<Subscription['Pol_hatsEvent'], SubscriptionPol_hatsEventArgs, MeshContext>,
  /** null **/
  Pol_hatsEvents: InContextSdkMethod<Subscription['Pol_hatsEvents'], SubscriptionPol_hatsEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Pol__meta: InContextSdkMethod<Subscription['Pol__meta'], SubscriptionPol__metaArgs, MeshContext>
  };

  export type Context = {
      ["Polygon_Main"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
