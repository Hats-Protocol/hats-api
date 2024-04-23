// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace GnosisMainTypes {
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
  Gno_BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Gno_Bytes: { input: any; output: any; }
  Gno_Int8: { input: any; output: any; }
};

export type Gno_BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Gno_Block_height = {
  hash?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Gno_ClaimsHatter = {
  id: Scalars['ID']['output'];
  claimableHats: Array<Gno_Hat>;
  claimableForHats: Array<Gno_Hat>;
};


export type Gno_ClaimsHatterclaimableHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Hat_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Hat_filter>;
};


export type Gno_ClaimsHatterclaimableForHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Hat_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Hat_filter>;
};

export type Gno_ClaimsHatter_filter = {
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
  claimableHats_?: InputMaybe<Gno_Hat_filter>;
  claimableForHats?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_?: InputMaybe<Gno_Hat_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_ClaimsHatter_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_ClaimsHatter_filter>>>;
};

export type Gno_ClaimsHatter_orderBy =
  | 'id'
  | 'claimableHats'
  | 'claimableForHats';

export type Gno_Hat = {
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
  tree: Gno_Tree;
  wearers: Array<Gno_Wearer>;
  admin: Gno_Hat;
  badStandings: Array<Gno_Wearer>;
  claimableBy: Array<Gno_ClaimsHatter>;
  claimableForBy: Array<Gno_ClaimsHatter>;
  linkRequestFromTree: Array<Gno_Tree>;
  subHats: Array<Gno_Hat>;
  linkedTrees: Array<Gno_Tree>;
  events: Array<Gno_HatsEvent>;
};


export type Gno_HatwearersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Wearer_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Wearer_filter>;
};


export type Gno_HatbadStandingsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Wearer_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Wearer_filter>;
};


export type Gno_HatclaimableByArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_ClaimsHatter_filter>;
};


export type Gno_HatclaimableForByArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_ClaimsHatter_filter>;
};


export type Gno_HatlinkRequestFromTreeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Tree_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Tree_filter>;
};


export type Gno_HatsubHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Hat_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Hat_filter>;
};


export type Gno_HatlinkedTreesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Tree_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Tree_filter>;
};


export type Gno_HateventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsEvent_filter>;
};

export type Gno_HatBurnedEvent = Gno_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Gno_Tree;
  hat: Gno_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  wearer: Gno_Wearer;
  operator: Scalars['String']['output'];
};

export type Gno_HatBurnedEvent_filter = {
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
  tree_?: InputMaybe<Gno_Tree_filter>;
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
  hat_?: InputMaybe<Gno_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
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
  wearer_?: InputMaybe<Gno_Wearer_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_HatBurnedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_HatBurnedEvent_filter>>>;
};

export type Gno_HatBurnedEvent_orderBy =
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

export type Gno_HatCreatedEvent = Gno_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Gno_Tree;
  hat: Gno_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  hatDetails: Scalars['String']['output'];
  hatMaxSupply: Scalars['BigInt']['output'];
  hatEligibility: Scalars['String']['output'];
  hatToggle: Scalars['String']['output'];
  hatMutable: Scalars['Boolean']['output'];
  hatImageUri: Scalars['String']['output'];
};

export type Gno_HatCreatedEvent_filter = {
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
  tree_?: InputMaybe<Gno_Tree_filter>;
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
  hat_?: InputMaybe<Gno_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_HatCreatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_HatCreatedEvent_filter>>>;
};

export type Gno_HatCreatedEvent_orderBy =
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

export type Gno_HatDetailsChangedEvent = Gno_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Gno_Tree;
  hat: Gno_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  hatNewDetails: Scalars['String']['output'];
};

export type Gno_HatDetailsChangedEvent_filter = {
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
  tree_?: InputMaybe<Gno_Tree_filter>;
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
  hat_?: InputMaybe<Gno_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_HatDetailsChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_HatDetailsChangedEvent_filter>>>;
};

export type Gno_HatDetailsChangedEvent_orderBy =
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

export type Gno_HatEligibilityChangedEvent = Gno_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Gno_Tree;
  hat: Gno_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  hatNewEligibility: Scalars['String']['output'];
};

export type Gno_HatEligibilityChangedEvent_filter = {
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
  tree_?: InputMaybe<Gno_Tree_filter>;
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
  hat_?: InputMaybe<Gno_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_HatEligibilityChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_HatEligibilityChangedEvent_filter>>>;
};

export type Gno_HatEligibilityChangedEvent_orderBy =
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

export type Gno_HatImageURIChangedEvent = Gno_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Gno_Tree;
  hat: Gno_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  hatNewImageURI: Scalars['String']['output'];
};

export type Gno_HatImageURIChangedEvent_filter = {
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
  tree_?: InputMaybe<Gno_Tree_filter>;
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
  hat_?: InputMaybe<Gno_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_HatImageURIChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_HatImageURIChangedEvent_filter>>>;
};

export type Gno_HatImageURIChangedEvent_orderBy =
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

export type Gno_HatMaxSupplyChangedEvent = Gno_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Gno_Tree;
  hat: Gno_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  hatNewMaxSupply: Scalars['BigInt']['output'];
};

export type Gno_HatMaxSupplyChangedEvent_filter = {
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
  tree_?: InputMaybe<Gno_Tree_filter>;
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
  hat_?: InputMaybe<Gno_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  hatNewMaxSupply?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hatNewMaxSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_HatMaxSupplyChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_HatMaxSupplyChangedEvent_filter>>>;
};

export type Gno_HatMaxSupplyChangedEvent_orderBy =
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

export type Gno_HatMintedEvent = Gno_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Gno_Tree;
  hat: Gno_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  wearer: Gno_Wearer;
  operator: Scalars['String']['output'];
};

export type Gno_HatMintedEvent_filter = {
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
  tree_?: InputMaybe<Gno_Tree_filter>;
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
  hat_?: InputMaybe<Gno_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
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
  wearer_?: InputMaybe<Gno_Wearer_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_HatMintedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_HatMintedEvent_filter>>>;
};

export type Gno_HatMintedEvent_orderBy =
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

export type Gno_HatMutabilityChangedEvent = Gno_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Gno_Tree;
  hat: Gno_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
};

export type Gno_HatMutabilityChangedEvent_filter = {
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
  tree_?: InputMaybe<Gno_Tree_filter>;
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
  hat_?: InputMaybe<Gno_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_HatMutabilityChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_HatMutabilityChangedEvent_filter>>>;
};

export type Gno_HatMutabilityChangedEvent_orderBy =
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

export type Gno_HatStatusChangedEvent = Gno_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Gno_Tree;
  hat: Gno_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  hatNewStatus: Scalars['Boolean']['output'];
};

export type Gno_HatStatusChangedEvent_filter = {
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
  tree_?: InputMaybe<Gno_Tree_filter>;
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
  hat_?: InputMaybe<Gno_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  hatNewStatus?: InputMaybe<Scalars['Boolean']['input']>;
  hatNewStatus_not?: InputMaybe<Scalars['Boolean']['input']>;
  hatNewStatus_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  hatNewStatus_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_HatStatusChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_HatStatusChangedEvent_filter>>>;
};

export type Gno_HatStatusChangedEvent_orderBy =
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

export type Gno_HatToggleChangedEvent = Gno_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Gno_Tree;
  hat: Gno_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  hatNewToggle: Scalars['String']['output'];
};

export type Gno_HatToggleChangedEvent_filter = {
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
  tree_?: InputMaybe<Gno_Tree_filter>;
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
  hat_?: InputMaybe<Gno_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_HatToggleChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_HatToggleChangedEvent_filter>>>;
};

export type Gno_HatToggleChangedEvent_orderBy =
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

export type Gno_Hat_filter = {
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
  tree_?: InputMaybe<Gno_Tree_filter>;
  wearers?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_?: InputMaybe<Gno_Wearer_filter>;
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
  admin_?: InputMaybe<Gno_Hat_filter>;
  badStandings?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_?: InputMaybe<Gno_Wearer_filter>;
  claimableBy_?: InputMaybe<Gno_ClaimsHatter_filter>;
  claimableForBy_?: InputMaybe<Gno_ClaimsHatter_filter>;
  linkRequestFromTree_?: InputMaybe<Gno_Tree_filter>;
  subHats_?: InputMaybe<Gno_Hat_filter>;
  linkedTrees_?: InputMaybe<Gno_Tree_filter>;
  events_?: InputMaybe<Gno_HatsEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Hat_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Hat_filter>>>;
};

export type Gno_Hat_orderBy =
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

export type Gno_HatsEvent = {
  id: Scalars['ID']['output'];
  tree: Gno_Tree;
  hat: Gno_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
};

export type Gno_HatsEvent_filter = {
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
  tree_?: InputMaybe<Gno_Tree_filter>;
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
  hat_?: InputMaybe<Gno_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_HatsEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_HatsEvent_filter>>>;
};

export type Gno_HatsEvent_orderBy =
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
export type Gno_OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  Gno_hat?: Maybe<Gno_Hat>;
  Gno_hats: Array<Gno_Hat>;
  Gno_wearer?: Maybe<Gno_Wearer>;
  Gno_wearers: Array<Gno_Wearer>;
  Gno_tree?: Maybe<Gno_Tree>;
  Gno_trees: Array<Gno_Tree>;
  Gno_hatCreatedEvent?: Maybe<Gno_HatCreatedEvent>;
  Gno_hatCreatedEvents: Array<Gno_HatCreatedEvent>;
  Gno_hatMintedEvent?: Maybe<Gno_HatMintedEvent>;
  Gno_hatMintedEvents: Array<Gno_HatMintedEvent>;
  Gno_hatBurnedEvent?: Maybe<Gno_HatBurnedEvent>;
  Gno_hatBurnedEvents: Array<Gno_HatBurnedEvent>;
  Gno_hatStatusChangedEvent?: Maybe<Gno_HatStatusChangedEvent>;
  Gno_hatStatusChangedEvents: Array<Gno_HatStatusChangedEvent>;
  Gno_hatDetailsChangedEvent?: Maybe<Gno_HatDetailsChangedEvent>;
  Gno_hatDetailsChangedEvents: Array<Gno_HatDetailsChangedEvent>;
  Gno_hatEligibilityChangedEvent?: Maybe<Gno_HatEligibilityChangedEvent>;
  Gno_hatEligibilityChangedEvents: Array<Gno_HatEligibilityChangedEvent>;
  Gno_hatToggleChangedEvent?: Maybe<Gno_HatToggleChangedEvent>;
  Gno_hatToggleChangedEvents: Array<Gno_HatToggleChangedEvent>;
  Gno_hatMutabilityChangedEvent?: Maybe<Gno_HatMutabilityChangedEvent>;
  Gno_hatMutabilityChangedEvents: Array<Gno_HatMutabilityChangedEvent>;
  Gno_hatMaxSupplyChangedEvent?: Maybe<Gno_HatMaxSupplyChangedEvent>;
  Gno_hatMaxSupplyChangedEvents: Array<Gno_HatMaxSupplyChangedEvent>;
  Gno_hatImageURIChangedEvent?: Maybe<Gno_HatImageURIChangedEvent>;
  Gno_hatImageURIChangedEvents: Array<Gno_HatImageURIChangedEvent>;
  Gno_topHatLinkRequestedEvent?: Maybe<Gno_TopHatLinkRequestedEvent>;
  Gno_topHatLinkRequestedEvents: Array<Gno_TopHatLinkRequestedEvent>;
  Gno_topHatLinkedEvent?: Maybe<Gno_TopHatLinkedEvent>;
  Gno_topHatLinkedEvents: Array<Gno_TopHatLinkedEvent>;
  Gno_wearerStandingChangedEvent?: Maybe<Gno_WearerStandingChangedEvent>;
  Gno_wearerStandingChangedEvents: Array<Gno_WearerStandingChangedEvent>;
  Gno_claimsHatter?: Maybe<Gno_ClaimsHatter>;
  Gno_claimsHatters: Array<Gno_ClaimsHatter>;
  Gno_hatsEvent?: Maybe<Gno_HatsEvent>;
  Gno_hatsEvents: Array<Gno_HatsEvent>;
  /** Access to subgraph metadata */
  Gno__meta?: Maybe<Gno__Meta_>;
};


export type QueryGno_hatArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Hat_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Hat_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_wearerArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_wearersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Wearer_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Wearer_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_treeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_treesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Tree_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Tree_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatCreatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatCreatedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatMintedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatMintedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatMintedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatMintedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatBurnedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatBurnedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatBurnedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatBurnedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatStatusChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatStatusChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatStatusChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatStatusChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatDetailsChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatDetailsChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatDetailsChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatDetailsChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatEligibilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatEligibilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatEligibilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatEligibilityChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatToggleChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatToggleChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatToggleChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatToggleChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatMutabilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatMutabilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatMutabilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatMutabilityChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatMaxSupplyChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatMaxSupplyChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatMaxSupplyChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatMaxSupplyChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatImageURIChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatImageURIChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatImageURIChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatImageURIChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_topHatLinkRequestedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_topHatLinkRequestedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_TopHatLinkRequestedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_TopHatLinkRequestedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_topHatLinkedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_topHatLinkedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_TopHatLinkedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_TopHatLinkedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_wearerStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_wearerStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_WearerStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_WearerStandingChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_claimsHatterArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_claimsHattersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_ClaimsHatter_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatsEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatsEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno__metaArgs = {
  block?: InputMaybe<Gno_Block_height>;
};

export type Subscription = {
  Gno_hat?: Maybe<Gno_Hat>;
  Gno_hats: Array<Gno_Hat>;
  Gno_wearer?: Maybe<Gno_Wearer>;
  Gno_wearers: Array<Gno_Wearer>;
  Gno_tree?: Maybe<Gno_Tree>;
  Gno_trees: Array<Gno_Tree>;
  Gno_hatCreatedEvent?: Maybe<Gno_HatCreatedEvent>;
  Gno_hatCreatedEvents: Array<Gno_HatCreatedEvent>;
  Gno_hatMintedEvent?: Maybe<Gno_HatMintedEvent>;
  Gno_hatMintedEvents: Array<Gno_HatMintedEvent>;
  Gno_hatBurnedEvent?: Maybe<Gno_HatBurnedEvent>;
  Gno_hatBurnedEvents: Array<Gno_HatBurnedEvent>;
  Gno_hatStatusChangedEvent?: Maybe<Gno_HatStatusChangedEvent>;
  Gno_hatStatusChangedEvents: Array<Gno_HatStatusChangedEvent>;
  Gno_hatDetailsChangedEvent?: Maybe<Gno_HatDetailsChangedEvent>;
  Gno_hatDetailsChangedEvents: Array<Gno_HatDetailsChangedEvent>;
  Gno_hatEligibilityChangedEvent?: Maybe<Gno_HatEligibilityChangedEvent>;
  Gno_hatEligibilityChangedEvents: Array<Gno_HatEligibilityChangedEvent>;
  Gno_hatToggleChangedEvent?: Maybe<Gno_HatToggleChangedEvent>;
  Gno_hatToggleChangedEvents: Array<Gno_HatToggleChangedEvent>;
  Gno_hatMutabilityChangedEvent?: Maybe<Gno_HatMutabilityChangedEvent>;
  Gno_hatMutabilityChangedEvents: Array<Gno_HatMutabilityChangedEvent>;
  Gno_hatMaxSupplyChangedEvent?: Maybe<Gno_HatMaxSupplyChangedEvent>;
  Gno_hatMaxSupplyChangedEvents: Array<Gno_HatMaxSupplyChangedEvent>;
  Gno_hatImageURIChangedEvent?: Maybe<Gno_HatImageURIChangedEvent>;
  Gno_hatImageURIChangedEvents: Array<Gno_HatImageURIChangedEvent>;
  Gno_topHatLinkRequestedEvent?: Maybe<Gno_TopHatLinkRequestedEvent>;
  Gno_topHatLinkRequestedEvents: Array<Gno_TopHatLinkRequestedEvent>;
  Gno_topHatLinkedEvent?: Maybe<Gno_TopHatLinkedEvent>;
  Gno_topHatLinkedEvents: Array<Gno_TopHatLinkedEvent>;
  Gno_wearerStandingChangedEvent?: Maybe<Gno_WearerStandingChangedEvent>;
  Gno_wearerStandingChangedEvents: Array<Gno_WearerStandingChangedEvent>;
  Gno_claimsHatter?: Maybe<Gno_ClaimsHatter>;
  Gno_claimsHatters: Array<Gno_ClaimsHatter>;
  Gno_hatsEvent?: Maybe<Gno_HatsEvent>;
  Gno_hatsEvents: Array<Gno_HatsEvent>;
  /** Access to subgraph metadata */
  Gno__meta?: Maybe<Gno__Meta_>;
};


export type SubscriptionGno_hatArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Hat_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Hat_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_wearerArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_wearersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Wearer_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Wearer_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_treeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_treesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Tree_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Tree_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatCreatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatCreatedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatMintedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatMintedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatMintedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatMintedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatBurnedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatBurnedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatBurnedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatBurnedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatStatusChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatStatusChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatStatusChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatStatusChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatDetailsChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatDetailsChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatDetailsChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatDetailsChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatEligibilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatEligibilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatEligibilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatEligibilityChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatToggleChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatToggleChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatToggleChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatToggleChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatMutabilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatMutabilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatMutabilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatMutabilityChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatMaxSupplyChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatMaxSupplyChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatMaxSupplyChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatMaxSupplyChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatImageURIChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatImageURIChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatImageURIChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatImageURIChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_topHatLinkRequestedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_topHatLinkRequestedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_TopHatLinkRequestedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_TopHatLinkRequestedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_topHatLinkedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_topHatLinkedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_TopHatLinkedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_TopHatLinkedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_wearerStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_wearerStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_WearerStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_WearerStandingChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_claimsHatterArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_claimsHattersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_ClaimsHatter_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatsEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatsEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno__metaArgs = {
  block?: InputMaybe<Gno_Block_height>;
};

export type Gno_TopHatLinkRequestedEvent = Gno_HatsEvent & {
  /** tree field is the tree that is being linked, hat field is the tree top hat */
  id: Scalars['ID']['output'];
  tree: Gno_Tree;
  hat: Gno_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  newAdmin: Gno_Hat;
};

export type Gno_TopHatLinkRequestedEvent_filter = {
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
  tree_?: InputMaybe<Gno_Tree_filter>;
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
  hat_?: InputMaybe<Gno_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
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
  newAdmin_?: InputMaybe<Gno_Hat_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_TopHatLinkRequestedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_TopHatLinkRequestedEvent_filter>>>;
};

export type Gno_TopHatLinkRequestedEvent_orderBy =
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

export type Gno_TopHatLinkedEvent = Gno_HatsEvent & {
  /** tree field is the tree that is being linked, hat field is the tree top hat */
  id: Scalars['ID']['output'];
  tree: Gno_Tree;
  hat: Gno_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  newAdmin: Gno_Hat;
};

export type Gno_TopHatLinkedEvent_filter = {
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
  tree_?: InputMaybe<Gno_Tree_filter>;
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
  hat_?: InputMaybe<Gno_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
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
  newAdmin_?: InputMaybe<Gno_Hat_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_TopHatLinkedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_TopHatLinkedEvent_filter>>>;
};

export type Gno_TopHatLinkedEvent_orderBy =
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

export type Gno_Tree = {
  /** Tree ID is its top hat domain - first 4 bytes of the top hat ID */
  id: Scalars['ID']['output'];
  childOfTree?: Maybe<Gno_Tree>;
  linkedToHat?: Maybe<Gno_Hat>;
  requestedLinkToTree?: Maybe<Gno_Tree>;
  requestedLinkToHat?: Maybe<Gno_Hat>;
  linkRequestFromTree: Array<Gno_Tree>;
  hats: Array<Gno_Hat>;
  parentOfTrees: Array<Gno_Tree>;
  events: Array<Gno_HatsEvent>;
};


export type Gno_TreelinkRequestFromTreeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Tree_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Tree_filter>;
};


export type Gno_TreehatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Hat_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Hat_filter>;
};


export type Gno_TreeparentOfTreesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Tree_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Tree_filter>;
};


export type Gno_TreeeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsEvent_filter>;
};

export type Gno_Tree_filter = {
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
  childOfTree_?: InputMaybe<Gno_Tree_filter>;
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
  linkedToHat_?: InputMaybe<Gno_Hat_filter>;
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
  requestedLinkToTree_?: InputMaybe<Gno_Tree_filter>;
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
  requestedLinkToHat_?: InputMaybe<Gno_Hat_filter>;
  linkRequestFromTree_?: InputMaybe<Gno_Tree_filter>;
  hats_?: InputMaybe<Gno_Hat_filter>;
  parentOfTrees_?: InputMaybe<Gno_Tree_filter>;
  events_?: InputMaybe<Gno_HatsEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Tree_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Tree_filter>>>;
};

export type Gno_Tree_orderBy =
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

export type Gno_Wearer = {
  id: Scalars['ID']['output'];
  currentHats: Array<Gno_Hat>;
  mintEvent: Array<Gno_HatMintedEvent>;
  burnEvent: Array<Gno_HatBurnedEvent>;
};


export type Gno_WearercurrentHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Hat_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Hat_filter>;
};


export type Gno_WearermintEventArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatMintedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatMintedEvent_filter>;
};


export type Gno_WearerburnEventArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatBurnedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatBurnedEvent_filter>;
};

export type Gno_WearerStandingChangedEvent = Gno_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Gno_Tree;
  hat: Gno_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  wearer: Gno_Wearer;
  wearerStanding: Scalars['Boolean']['output'];
};

export type Gno_WearerStandingChangedEvent_filter = {
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
  tree_?: InputMaybe<Gno_Tree_filter>;
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
  hat_?: InputMaybe<Gno_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
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
  wearer_?: InputMaybe<Gno_Wearer_filter>;
  wearerStanding?: InputMaybe<Scalars['Boolean']['input']>;
  wearerStanding_not?: InputMaybe<Scalars['Boolean']['input']>;
  wearerStanding_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  wearerStanding_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_WearerStandingChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_WearerStandingChangedEvent_filter>>>;
};

export type Gno_WearerStandingChangedEvent_orderBy =
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

export type Gno_Wearer_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  currentHats_?: InputMaybe<Gno_Hat_filter>;
  mintEvent_?: InputMaybe<Gno_HatMintedEvent_filter>;
  burnEvent_?: InputMaybe<Gno_HatBurnedEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Wearer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Wearer_filter>>>;
};

export type Gno_Wearer_orderBy =
  | 'id'
  | 'currentHats'
  | 'mintEvent'
  | 'burnEvent';

export type Gno__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Gno_Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type Gno__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: Gno__Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type Gno__SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  Gno_hat: InContextSdkMethod<Query['Gno_hat'], QueryGno_hatArgs, MeshContext>,
  /** null **/
  Gno_hats: InContextSdkMethod<Query['Gno_hats'], QueryGno_hatsArgs, MeshContext>,
  /** null **/
  Gno_wearer: InContextSdkMethod<Query['Gno_wearer'], QueryGno_wearerArgs, MeshContext>,
  /** null **/
  Gno_wearers: InContextSdkMethod<Query['Gno_wearers'], QueryGno_wearersArgs, MeshContext>,
  /** null **/
  Gno_tree: InContextSdkMethod<Query['Gno_tree'], QueryGno_treeArgs, MeshContext>,
  /** null **/
  Gno_trees: InContextSdkMethod<Query['Gno_trees'], QueryGno_treesArgs, MeshContext>,
  /** null **/
  Gno_hatCreatedEvent: InContextSdkMethod<Query['Gno_hatCreatedEvent'], QueryGno_hatCreatedEventArgs, MeshContext>,
  /** null **/
  Gno_hatCreatedEvents: InContextSdkMethod<Query['Gno_hatCreatedEvents'], QueryGno_hatCreatedEventsArgs, MeshContext>,
  /** null **/
  Gno_hatMintedEvent: InContextSdkMethod<Query['Gno_hatMintedEvent'], QueryGno_hatMintedEventArgs, MeshContext>,
  /** null **/
  Gno_hatMintedEvents: InContextSdkMethod<Query['Gno_hatMintedEvents'], QueryGno_hatMintedEventsArgs, MeshContext>,
  /** null **/
  Gno_hatBurnedEvent: InContextSdkMethod<Query['Gno_hatBurnedEvent'], QueryGno_hatBurnedEventArgs, MeshContext>,
  /** null **/
  Gno_hatBurnedEvents: InContextSdkMethod<Query['Gno_hatBurnedEvents'], QueryGno_hatBurnedEventsArgs, MeshContext>,
  /** null **/
  Gno_hatStatusChangedEvent: InContextSdkMethod<Query['Gno_hatStatusChangedEvent'], QueryGno_hatStatusChangedEventArgs, MeshContext>,
  /** null **/
  Gno_hatStatusChangedEvents: InContextSdkMethod<Query['Gno_hatStatusChangedEvents'], QueryGno_hatStatusChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_hatDetailsChangedEvent: InContextSdkMethod<Query['Gno_hatDetailsChangedEvent'], QueryGno_hatDetailsChangedEventArgs, MeshContext>,
  /** null **/
  Gno_hatDetailsChangedEvents: InContextSdkMethod<Query['Gno_hatDetailsChangedEvents'], QueryGno_hatDetailsChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_hatEligibilityChangedEvent: InContextSdkMethod<Query['Gno_hatEligibilityChangedEvent'], QueryGno_hatEligibilityChangedEventArgs, MeshContext>,
  /** null **/
  Gno_hatEligibilityChangedEvents: InContextSdkMethod<Query['Gno_hatEligibilityChangedEvents'], QueryGno_hatEligibilityChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_hatToggleChangedEvent: InContextSdkMethod<Query['Gno_hatToggleChangedEvent'], QueryGno_hatToggleChangedEventArgs, MeshContext>,
  /** null **/
  Gno_hatToggleChangedEvents: InContextSdkMethod<Query['Gno_hatToggleChangedEvents'], QueryGno_hatToggleChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_hatMutabilityChangedEvent: InContextSdkMethod<Query['Gno_hatMutabilityChangedEvent'], QueryGno_hatMutabilityChangedEventArgs, MeshContext>,
  /** null **/
  Gno_hatMutabilityChangedEvents: InContextSdkMethod<Query['Gno_hatMutabilityChangedEvents'], QueryGno_hatMutabilityChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_hatMaxSupplyChangedEvent: InContextSdkMethod<Query['Gno_hatMaxSupplyChangedEvent'], QueryGno_hatMaxSupplyChangedEventArgs, MeshContext>,
  /** null **/
  Gno_hatMaxSupplyChangedEvents: InContextSdkMethod<Query['Gno_hatMaxSupplyChangedEvents'], QueryGno_hatMaxSupplyChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_hatImageURIChangedEvent: InContextSdkMethod<Query['Gno_hatImageURIChangedEvent'], QueryGno_hatImageURIChangedEventArgs, MeshContext>,
  /** null **/
  Gno_hatImageURIChangedEvents: InContextSdkMethod<Query['Gno_hatImageURIChangedEvents'], QueryGno_hatImageURIChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_topHatLinkRequestedEvent: InContextSdkMethod<Query['Gno_topHatLinkRequestedEvent'], QueryGno_topHatLinkRequestedEventArgs, MeshContext>,
  /** null **/
  Gno_topHatLinkRequestedEvents: InContextSdkMethod<Query['Gno_topHatLinkRequestedEvents'], QueryGno_topHatLinkRequestedEventsArgs, MeshContext>,
  /** null **/
  Gno_topHatLinkedEvent: InContextSdkMethod<Query['Gno_topHatLinkedEvent'], QueryGno_topHatLinkedEventArgs, MeshContext>,
  /** null **/
  Gno_topHatLinkedEvents: InContextSdkMethod<Query['Gno_topHatLinkedEvents'], QueryGno_topHatLinkedEventsArgs, MeshContext>,
  /** null **/
  Gno_wearerStandingChangedEvent: InContextSdkMethod<Query['Gno_wearerStandingChangedEvent'], QueryGno_wearerStandingChangedEventArgs, MeshContext>,
  /** null **/
  Gno_wearerStandingChangedEvents: InContextSdkMethod<Query['Gno_wearerStandingChangedEvents'], QueryGno_wearerStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_claimsHatter: InContextSdkMethod<Query['Gno_claimsHatter'], QueryGno_claimsHatterArgs, MeshContext>,
  /** null **/
  Gno_claimsHatters: InContextSdkMethod<Query['Gno_claimsHatters'], QueryGno_claimsHattersArgs, MeshContext>,
  /** null **/
  Gno_hatsEvent: InContextSdkMethod<Query['Gno_hatsEvent'], QueryGno_hatsEventArgs, MeshContext>,
  /** null **/
  Gno_hatsEvents: InContextSdkMethod<Query['Gno_hatsEvents'], QueryGno_hatsEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Gno__meta: InContextSdkMethod<Query['Gno__meta'], QueryGno__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  Gno_hat: InContextSdkMethod<Subscription['Gno_hat'], SubscriptionGno_hatArgs, MeshContext>,
  /** null **/
  Gno_hats: InContextSdkMethod<Subscription['Gno_hats'], SubscriptionGno_hatsArgs, MeshContext>,
  /** null **/
  Gno_wearer: InContextSdkMethod<Subscription['Gno_wearer'], SubscriptionGno_wearerArgs, MeshContext>,
  /** null **/
  Gno_wearers: InContextSdkMethod<Subscription['Gno_wearers'], SubscriptionGno_wearersArgs, MeshContext>,
  /** null **/
  Gno_tree: InContextSdkMethod<Subscription['Gno_tree'], SubscriptionGno_treeArgs, MeshContext>,
  /** null **/
  Gno_trees: InContextSdkMethod<Subscription['Gno_trees'], SubscriptionGno_treesArgs, MeshContext>,
  /** null **/
  Gno_hatCreatedEvent: InContextSdkMethod<Subscription['Gno_hatCreatedEvent'], SubscriptionGno_hatCreatedEventArgs, MeshContext>,
  /** null **/
  Gno_hatCreatedEvents: InContextSdkMethod<Subscription['Gno_hatCreatedEvents'], SubscriptionGno_hatCreatedEventsArgs, MeshContext>,
  /** null **/
  Gno_hatMintedEvent: InContextSdkMethod<Subscription['Gno_hatMintedEvent'], SubscriptionGno_hatMintedEventArgs, MeshContext>,
  /** null **/
  Gno_hatMintedEvents: InContextSdkMethod<Subscription['Gno_hatMintedEvents'], SubscriptionGno_hatMintedEventsArgs, MeshContext>,
  /** null **/
  Gno_hatBurnedEvent: InContextSdkMethod<Subscription['Gno_hatBurnedEvent'], SubscriptionGno_hatBurnedEventArgs, MeshContext>,
  /** null **/
  Gno_hatBurnedEvents: InContextSdkMethod<Subscription['Gno_hatBurnedEvents'], SubscriptionGno_hatBurnedEventsArgs, MeshContext>,
  /** null **/
  Gno_hatStatusChangedEvent: InContextSdkMethod<Subscription['Gno_hatStatusChangedEvent'], SubscriptionGno_hatStatusChangedEventArgs, MeshContext>,
  /** null **/
  Gno_hatStatusChangedEvents: InContextSdkMethod<Subscription['Gno_hatStatusChangedEvents'], SubscriptionGno_hatStatusChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_hatDetailsChangedEvent: InContextSdkMethod<Subscription['Gno_hatDetailsChangedEvent'], SubscriptionGno_hatDetailsChangedEventArgs, MeshContext>,
  /** null **/
  Gno_hatDetailsChangedEvents: InContextSdkMethod<Subscription['Gno_hatDetailsChangedEvents'], SubscriptionGno_hatDetailsChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_hatEligibilityChangedEvent: InContextSdkMethod<Subscription['Gno_hatEligibilityChangedEvent'], SubscriptionGno_hatEligibilityChangedEventArgs, MeshContext>,
  /** null **/
  Gno_hatEligibilityChangedEvents: InContextSdkMethod<Subscription['Gno_hatEligibilityChangedEvents'], SubscriptionGno_hatEligibilityChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_hatToggleChangedEvent: InContextSdkMethod<Subscription['Gno_hatToggleChangedEvent'], SubscriptionGno_hatToggleChangedEventArgs, MeshContext>,
  /** null **/
  Gno_hatToggleChangedEvents: InContextSdkMethod<Subscription['Gno_hatToggleChangedEvents'], SubscriptionGno_hatToggleChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_hatMutabilityChangedEvent: InContextSdkMethod<Subscription['Gno_hatMutabilityChangedEvent'], SubscriptionGno_hatMutabilityChangedEventArgs, MeshContext>,
  /** null **/
  Gno_hatMutabilityChangedEvents: InContextSdkMethod<Subscription['Gno_hatMutabilityChangedEvents'], SubscriptionGno_hatMutabilityChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_hatMaxSupplyChangedEvent: InContextSdkMethod<Subscription['Gno_hatMaxSupplyChangedEvent'], SubscriptionGno_hatMaxSupplyChangedEventArgs, MeshContext>,
  /** null **/
  Gno_hatMaxSupplyChangedEvents: InContextSdkMethod<Subscription['Gno_hatMaxSupplyChangedEvents'], SubscriptionGno_hatMaxSupplyChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_hatImageURIChangedEvent: InContextSdkMethod<Subscription['Gno_hatImageURIChangedEvent'], SubscriptionGno_hatImageURIChangedEventArgs, MeshContext>,
  /** null **/
  Gno_hatImageURIChangedEvents: InContextSdkMethod<Subscription['Gno_hatImageURIChangedEvents'], SubscriptionGno_hatImageURIChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_topHatLinkRequestedEvent: InContextSdkMethod<Subscription['Gno_topHatLinkRequestedEvent'], SubscriptionGno_topHatLinkRequestedEventArgs, MeshContext>,
  /** null **/
  Gno_topHatLinkRequestedEvents: InContextSdkMethod<Subscription['Gno_topHatLinkRequestedEvents'], SubscriptionGno_topHatLinkRequestedEventsArgs, MeshContext>,
  /** null **/
  Gno_topHatLinkedEvent: InContextSdkMethod<Subscription['Gno_topHatLinkedEvent'], SubscriptionGno_topHatLinkedEventArgs, MeshContext>,
  /** null **/
  Gno_topHatLinkedEvents: InContextSdkMethod<Subscription['Gno_topHatLinkedEvents'], SubscriptionGno_topHatLinkedEventsArgs, MeshContext>,
  /** null **/
  Gno_wearerStandingChangedEvent: InContextSdkMethod<Subscription['Gno_wearerStandingChangedEvent'], SubscriptionGno_wearerStandingChangedEventArgs, MeshContext>,
  /** null **/
  Gno_wearerStandingChangedEvents: InContextSdkMethod<Subscription['Gno_wearerStandingChangedEvents'], SubscriptionGno_wearerStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_claimsHatter: InContextSdkMethod<Subscription['Gno_claimsHatter'], SubscriptionGno_claimsHatterArgs, MeshContext>,
  /** null **/
  Gno_claimsHatters: InContextSdkMethod<Subscription['Gno_claimsHatters'], SubscriptionGno_claimsHattersArgs, MeshContext>,
  /** null **/
  Gno_hatsEvent: InContextSdkMethod<Subscription['Gno_hatsEvent'], SubscriptionGno_hatsEventArgs, MeshContext>,
  /** null **/
  Gno_hatsEvents: InContextSdkMethod<Subscription['Gno_hatsEvents'], SubscriptionGno_hatsEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Gno__meta: InContextSdkMethod<Subscription['Gno__meta'], SubscriptionGno__metaArgs, MeshContext>
  };

  export type Context = {
      ["Gnosis_Main"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
