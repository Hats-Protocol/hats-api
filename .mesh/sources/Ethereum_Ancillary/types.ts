// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace EthereumAncillaryTypes {
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
  Eth_BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Eth_Bytes: { input: any; output: any; }
  Eth_Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Eth_Aggregation_interval =
  | 'hour'
  | 'day';

export type Eth_Agreement = {
  id: Scalars['ID']['output'];
  agreementEligibility: Eth_AgreementEligibility;
  agreement: Scalars['String']['output'];
  signers: Array<Scalars['String']['output']>;
  graceEndTime: Scalars['BigInt']['output'];
};

/**  Agreement Eligibility  */
export type Eth_AgreementEligibility = Eth_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  ownerHat: Eth_HatAuthority;
  arbitratorHat: Eth_HatAuthority;
  currentAgreement: Eth_Agreement;
  currentAgreementNumber: Scalars['BigInt']['output'];
  agreements: Array<Eth_Agreement>;
  badStandings: Array<Scalars['String']['output']>;
  events: Array<Eth_AgreementEvent>;
};


/**  Agreement Eligibility  */
export type Eth_AgreementEligibilityagreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Agreement_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Agreement_filter>;
};


/**  Agreement Eligibility  */
export type Eth_AgreementEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_AgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_AgreementEvent_filter>;
};

export type Eth_AgreementEligibility_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_gt?: InputMaybe<Scalars['String']['input']>;
  version_lt?: InputMaybe<Scalars['String']['input']>;
  version_gte?: InputMaybe<Scalars['String']['input']>;
  version_lte?: InputMaybe<Scalars['String']['input']>;
  version_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId?: InputMaybe<Scalars['String']['input']>;
  hatId_not?: InputMaybe<Scalars['String']['input']>;
  hatId_gt?: InputMaybe<Scalars['String']['input']>;
  hatId_lt?: InputMaybe<Scalars['String']['input']>;
  hatId_gte?: InputMaybe<Scalars['String']['input']>;
  hatId_lte?: InputMaybe<Scalars['String']['input']>;
  hatId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not?: InputMaybe<Scalars['String']['input']>;
  ownerHat_gt?: InputMaybe<Scalars['String']['input']>;
  ownerHat_lt?: InputMaybe<Scalars['String']['input']>;
  ownerHat_gte?: InputMaybe<Scalars['String']['input']>;
  ownerHat_lte?: InputMaybe<Scalars['String']['input']>;
  ownerHat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ownerHat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ownerHat_contains?: InputMaybe<Scalars['String']['input']>;
  ownerHat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_contains?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_starts_with?: InputMaybe<Scalars['String']['input']>;
  ownerHat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_ends_with?: InputMaybe<Scalars['String']['input']>;
  ownerHat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_?: InputMaybe<Eth_HatAuthority_filter>;
  arbitratorHat?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_not?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_gt?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_lt?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_gte?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_lte?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  arbitratorHat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  arbitratorHat_contains?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_not_contains?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_starts_with?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_ends_with?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_?: InputMaybe<Eth_HatAuthority_filter>;
  currentAgreement?: InputMaybe<Scalars['String']['input']>;
  currentAgreement_not?: InputMaybe<Scalars['String']['input']>;
  currentAgreement_gt?: InputMaybe<Scalars['String']['input']>;
  currentAgreement_lt?: InputMaybe<Scalars['String']['input']>;
  currentAgreement_gte?: InputMaybe<Scalars['String']['input']>;
  currentAgreement_lte?: InputMaybe<Scalars['String']['input']>;
  currentAgreement_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currentAgreement_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currentAgreement_contains?: InputMaybe<Scalars['String']['input']>;
  currentAgreement_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currentAgreement_not_contains?: InputMaybe<Scalars['String']['input']>;
  currentAgreement_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currentAgreement_starts_with?: InputMaybe<Scalars['String']['input']>;
  currentAgreement_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentAgreement_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  currentAgreement_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentAgreement_ends_with?: InputMaybe<Scalars['String']['input']>;
  currentAgreement_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentAgreement_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  currentAgreement_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentAgreement_?: InputMaybe<Eth_Agreement_filter>;
  currentAgreementNumber?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentAgreementNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  agreements_?: InputMaybe<Eth_Agreement_filter>;
  badStandings?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  events_?: InputMaybe<Eth_AgreementEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_AgreementEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_AgreementEligibility_filter>>>;
};

export type Eth_AgreementEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'ownerHat'
  | 'ownerHat__id'
  | 'ownerHat__primaryHatsAccount1ofNAddress'
  | 'arbitratorHat'
  | 'arbitratorHat__id'
  | 'arbitratorHat__primaryHatsAccount1ofNAddress'
  | 'currentAgreement'
  | 'currentAgreement__id'
  | 'currentAgreement__agreement'
  | 'currentAgreement__graceEndTime'
  | 'currentAgreementNumber'
  | 'agreements'
  | 'badStandings'
  | 'events';

export type Eth_AgreementEvent = {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  agreementEligibilityInstance: Eth_AgreementEligibility;
};

export type Eth_AgreementEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  agreementEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  agreementEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  agreementEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_?: InputMaybe<Eth_AgreementEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_AgreementEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_AgreementEvent_filter>>>;
};

export type Eth_AgreementEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'agreementEligibilityInstance'
  | 'agreementEligibilityInstance__id'
  | 'agreementEligibilityInstance__version'
  | 'agreementEligibilityInstance__hatId'
  | 'agreementEligibilityInstance__currentAgreementNumber';

export type Eth_Agreement_AgreementSetEvent = Eth_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  agreementEligibilityInstance: Eth_AgreementEligibility;
  agreement: Scalars['String']['output'];
  grace: Scalars['BigInt']['output'];
};

export type Eth_Agreement_AgreementSetEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  agreementEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  agreementEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  agreementEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_?: InputMaybe<Eth_AgreementEligibility_filter>;
  agreement?: InputMaybe<Scalars['String']['input']>;
  agreement_not?: InputMaybe<Scalars['String']['input']>;
  agreement_gt?: InputMaybe<Scalars['String']['input']>;
  agreement_lt?: InputMaybe<Scalars['String']['input']>;
  agreement_gte?: InputMaybe<Scalars['String']['input']>;
  agreement_lte?: InputMaybe<Scalars['String']['input']>;
  agreement_in?: InputMaybe<Array<Scalars['String']['input']>>;
  agreement_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  agreement_contains?: InputMaybe<Scalars['String']['input']>;
  agreement_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  agreement_not_contains?: InputMaybe<Scalars['String']['input']>;
  agreement_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  agreement_starts_with?: InputMaybe<Scalars['String']['input']>;
  agreement_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreement_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  agreement_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreement_ends_with?: InputMaybe<Scalars['String']['input']>;
  agreement_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreement_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  agreement_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  grace?: InputMaybe<Scalars['BigInt']['input']>;
  grace_not?: InputMaybe<Scalars['BigInt']['input']>;
  grace_gt?: InputMaybe<Scalars['BigInt']['input']>;
  grace_lt?: InputMaybe<Scalars['BigInt']['input']>;
  grace_gte?: InputMaybe<Scalars['BigInt']['input']>;
  grace_lte?: InputMaybe<Scalars['BigInt']['input']>;
  grace_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  grace_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Agreement_AgreementSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Agreement_AgreementSetEvent_filter>>>;
};

export type Eth_Agreement_AgreementSetEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'agreementEligibilityInstance'
  | 'agreementEligibilityInstance__id'
  | 'agreementEligibilityInstance__version'
  | 'agreementEligibilityInstance__hatId'
  | 'agreementEligibilityInstance__currentAgreementNumber'
  | 'agreement'
  | 'grace';

export type Eth_Agreement_AgreementSignedEvent = Eth_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  agreementEligibilityInstance: Eth_AgreementEligibility;
  signer: Scalars['String']['output'];
  agreement: Scalars['String']['output'];
};

export type Eth_Agreement_AgreementSignedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  agreementEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  agreementEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  agreementEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_?: InputMaybe<Eth_AgreementEligibility_filter>;
  signer?: InputMaybe<Scalars['String']['input']>;
  signer_not?: InputMaybe<Scalars['String']['input']>;
  signer_gt?: InputMaybe<Scalars['String']['input']>;
  signer_lt?: InputMaybe<Scalars['String']['input']>;
  signer_gte?: InputMaybe<Scalars['String']['input']>;
  signer_lte?: InputMaybe<Scalars['String']['input']>;
  signer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  signer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  signer_contains?: InputMaybe<Scalars['String']['input']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_not_contains?: InputMaybe<Scalars['String']['input']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_starts_with?: InputMaybe<Scalars['String']['input']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_ends_with?: InputMaybe<Scalars['String']['input']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreement?: InputMaybe<Scalars['String']['input']>;
  agreement_not?: InputMaybe<Scalars['String']['input']>;
  agreement_gt?: InputMaybe<Scalars['String']['input']>;
  agreement_lt?: InputMaybe<Scalars['String']['input']>;
  agreement_gte?: InputMaybe<Scalars['String']['input']>;
  agreement_lte?: InputMaybe<Scalars['String']['input']>;
  agreement_in?: InputMaybe<Array<Scalars['String']['input']>>;
  agreement_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  agreement_contains?: InputMaybe<Scalars['String']['input']>;
  agreement_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  agreement_not_contains?: InputMaybe<Scalars['String']['input']>;
  agreement_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  agreement_starts_with?: InputMaybe<Scalars['String']['input']>;
  agreement_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreement_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  agreement_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreement_ends_with?: InputMaybe<Scalars['String']['input']>;
  agreement_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreement_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  agreement_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Agreement_AgreementSignedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Agreement_AgreementSignedEvent_filter>>>;
};

export type Eth_Agreement_AgreementSignedEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'agreementEligibilityInstance'
  | 'agreementEligibilityInstance__id'
  | 'agreementEligibilityInstance__version'
  | 'agreementEligibilityInstance__hatId'
  | 'agreementEligibilityInstance__currentAgreementNumber'
  | 'signer'
  | 'agreement';

export type Eth_Agreement_ArbitratorHatSetEvent = Eth_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  agreementEligibilityInstance: Eth_AgreementEligibility;
  newArbitratorHat: Scalars['String']['output'];
};

export type Eth_Agreement_ArbitratorHatSetEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  agreementEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  agreementEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  agreementEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_?: InputMaybe<Eth_AgreementEligibility_filter>;
  newArbitratorHat?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_not?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_gt?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_lt?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_gte?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_lte?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newArbitratorHat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newArbitratorHat_contains?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_not_contains?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_starts_with?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_ends_with?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Agreement_ArbitratorHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Agreement_ArbitratorHatSetEvent_filter>>>;
};

export type Eth_Agreement_ArbitratorHatSetEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'agreementEligibilityInstance'
  | 'agreementEligibilityInstance__id'
  | 'agreementEligibilityInstance__version'
  | 'agreementEligibilityInstance__hatId'
  | 'agreementEligibilityInstance__currentAgreementNumber'
  | 'newArbitratorHat';

export type Eth_Agreement_HatClaimedWithAgreementEvent = Eth_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  agreementEligibilityInstance: Eth_AgreementEligibility;
  claimer: Scalars['String']['output'];
  hatId: Scalars['String']['output'];
  agreement: Scalars['String']['output'];
};

export type Eth_Agreement_HatClaimedWithAgreementEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  agreementEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  agreementEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  agreementEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_?: InputMaybe<Eth_AgreementEligibility_filter>;
  claimer?: InputMaybe<Scalars['String']['input']>;
  claimer_not?: InputMaybe<Scalars['String']['input']>;
  claimer_gt?: InputMaybe<Scalars['String']['input']>;
  claimer_lt?: InputMaybe<Scalars['String']['input']>;
  claimer_gte?: InputMaybe<Scalars['String']['input']>;
  claimer_lte?: InputMaybe<Scalars['String']['input']>;
  claimer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  claimer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  claimer_contains?: InputMaybe<Scalars['String']['input']>;
  claimer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  claimer_not_contains?: InputMaybe<Scalars['String']['input']>;
  claimer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  claimer_starts_with?: InputMaybe<Scalars['String']['input']>;
  claimer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  claimer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  claimer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  claimer_ends_with?: InputMaybe<Scalars['String']['input']>;
  claimer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  claimer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  claimer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId?: InputMaybe<Scalars['String']['input']>;
  hatId_not?: InputMaybe<Scalars['String']['input']>;
  hatId_gt?: InputMaybe<Scalars['String']['input']>;
  hatId_lt?: InputMaybe<Scalars['String']['input']>;
  hatId_gte?: InputMaybe<Scalars['String']['input']>;
  hatId_lte?: InputMaybe<Scalars['String']['input']>;
  hatId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreement?: InputMaybe<Scalars['String']['input']>;
  agreement_not?: InputMaybe<Scalars['String']['input']>;
  agreement_gt?: InputMaybe<Scalars['String']['input']>;
  agreement_lt?: InputMaybe<Scalars['String']['input']>;
  agreement_gte?: InputMaybe<Scalars['String']['input']>;
  agreement_lte?: InputMaybe<Scalars['String']['input']>;
  agreement_in?: InputMaybe<Array<Scalars['String']['input']>>;
  agreement_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  agreement_contains?: InputMaybe<Scalars['String']['input']>;
  agreement_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  agreement_not_contains?: InputMaybe<Scalars['String']['input']>;
  agreement_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  agreement_starts_with?: InputMaybe<Scalars['String']['input']>;
  agreement_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreement_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  agreement_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreement_ends_with?: InputMaybe<Scalars['String']['input']>;
  agreement_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreement_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  agreement_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Agreement_HatClaimedWithAgreementEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Agreement_HatClaimedWithAgreementEvent_filter>>>;
};

export type Eth_Agreement_HatClaimedWithAgreementEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'agreementEligibilityInstance'
  | 'agreementEligibilityInstance__id'
  | 'agreementEligibilityInstance__version'
  | 'agreementEligibilityInstance__hatId'
  | 'agreementEligibilityInstance__currentAgreementNumber'
  | 'claimer'
  | 'hatId'
  | 'agreement';

export type Eth_Agreement_OwnerHatSetEvent = Eth_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  agreementEligibilityInstance: Eth_AgreementEligibility;
  newOwnerHat: Scalars['String']['output'];
};

export type Eth_Agreement_OwnerHatSetEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  agreementEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  agreementEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  agreementEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibilityInstance_?: InputMaybe<Eth_AgreementEligibility_filter>;
  newOwnerHat?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_not?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_gt?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_lt?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_gte?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_lte?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newOwnerHat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newOwnerHat_contains?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_not_contains?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_starts_with?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_ends_with?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Agreement_OwnerHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Agreement_OwnerHatSetEvent_filter>>>;
};

export type Eth_Agreement_OwnerHatSetEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'agreementEligibilityInstance'
  | 'agreementEligibilityInstance__id'
  | 'agreementEligibilityInstance__version'
  | 'agreementEligibilityInstance__hatId'
  | 'agreementEligibilityInstance__currentAgreementNumber'
  | 'newOwnerHat';

export type Eth_Agreement_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  agreementEligibility?: InputMaybe<Scalars['String']['input']>;
  agreementEligibility_not?: InputMaybe<Scalars['String']['input']>;
  agreementEligibility_gt?: InputMaybe<Scalars['String']['input']>;
  agreementEligibility_lt?: InputMaybe<Scalars['String']['input']>;
  agreementEligibility_gte?: InputMaybe<Scalars['String']['input']>;
  agreementEligibility_lte?: InputMaybe<Scalars['String']['input']>;
  agreementEligibility_in?: InputMaybe<Array<Scalars['String']['input']>>;
  agreementEligibility_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  agreementEligibility_contains?: InputMaybe<Scalars['String']['input']>;
  agreementEligibility_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibility_not_contains?: InputMaybe<Scalars['String']['input']>;
  agreementEligibility_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibility_starts_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibility_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibility_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibility_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibility_ends_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibility_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibility_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  agreementEligibility_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreementEligibility_?: InputMaybe<Eth_AgreementEligibility_filter>;
  agreement?: InputMaybe<Scalars['String']['input']>;
  agreement_not?: InputMaybe<Scalars['String']['input']>;
  agreement_gt?: InputMaybe<Scalars['String']['input']>;
  agreement_lt?: InputMaybe<Scalars['String']['input']>;
  agreement_gte?: InputMaybe<Scalars['String']['input']>;
  agreement_lte?: InputMaybe<Scalars['String']['input']>;
  agreement_in?: InputMaybe<Array<Scalars['String']['input']>>;
  agreement_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  agreement_contains?: InputMaybe<Scalars['String']['input']>;
  agreement_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  agreement_not_contains?: InputMaybe<Scalars['String']['input']>;
  agreement_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  agreement_starts_with?: InputMaybe<Scalars['String']['input']>;
  agreement_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreement_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  agreement_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreement_ends_with?: InputMaybe<Scalars['String']['input']>;
  agreement_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agreement_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  agreement_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signers?: InputMaybe<Array<Scalars['String']['input']>>;
  signers_not?: InputMaybe<Array<Scalars['String']['input']>>;
  signers_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signers_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signers_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signers_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  graceEndTime?: InputMaybe<Scalars['BigInt']['input']>;
  graceEndTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  graceEndTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  graceEndTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  graceEndTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  graceEndTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  graceEndTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  graceEndTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Agreement_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Agreement_filter>>>;
};

export type Eth_Agreement_orderBy =
  | 'id'
  | 'agreementEligibility'
  | 'agreementEligibility__id'
  | 'agreementEligibility__version'
  | 'agreementEligibility__hatId'
  | 'agreementEligibility__currentAgreementNumber'
  | 'agreement'
  | 'signers'
  | 'graceEndTime';

/**  Allowlist Eligibility  */
export type Eth_AllowListEligibility = Eth_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  ownerHat: Eth_HatAuthority;
  arbitratorHat: Eth_HatAuthority;
  eligibilityData: Array<Eth_AllowListEligibilityData>;
  events: Array<Eth_AllowlistEvent>;
};


/**  Allowlist Eligibility  */
export type Eth_AllowListEligibilityeligibilityDataArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_AllowListEligibilityData_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_AllowListEligibilityData_filter>;
};


/**  Allowlist Eligibility  */
export type Eth_AllowListEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_AllowlistEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_AllowlistEvent_filter>;
};

export type Eth_AllowListEligibilityData = {
  id: Scalars['ID']['output'];
  allowListEligibility: Eth_AllowListEligibility;
  address: Scalars['String']['output'];
  eligible: Scalars['Boolean']['output'];
  badStanding: Scalars['Boolean']['output'];
};

export type Eth_AllowListEligibilityData_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  allowListEligibility?: InputMaybe<Scalars['String']['input']>;
  allowListEligibility_not?: InputMaybe<Scalars['String']['input']>;
  allowListEligibility_gt?: InputMaybe<Scalars['String']['input']>;
  allowListEligibility_lt?: InputMaybe<Scalars['String']['input']>;
  allowListEligibility_gte?: InputMaybe<Scalars['String']['input']>;
  allowListEligibility_lte?: InputMaybe<Scalars['String']['input']>;
  allowListEligibility_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allowListEligibility_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allowListEligibility_contains?: InputMaybe<Scalars['String']['input']>;
  allowListEligibility_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allowListEligibility_not_contains?: InputMaybe<Scalars['String']['input']>;
  allowListEligibility_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allowListEligibility_starts_with?: InputMaybe<Scalars['String']['input']>;
  allowListEligibility_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowListEligibility_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  allowListEligibility_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowListEligibility_ends_with?: InputMaybe<Scalars['String']['input']>;
  allowListEligibility_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowListEligibility_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  allowListEligibility_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowListEligibility_?: InputMaybe<Eth_AllowListEligibility_filter>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_gt?: InputMaybe<Scalars['String']['input']>;
  address_lt?: InputMaybe<Scalars['String']['input']>;
  address_gte?: InputMaybe<Scalars['String']['input']>;
  address_lte?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  eligible?: InputMaybe<Scalars['Boolean']['input']>;
  eligible_not?: InputMaybe<Scalars['Boolean']['input']>;
  eligible_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  eligible_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  badStanding?: InputMaybe<Scalars['Boolean']['input']>;
  badStanding_not?: InputMaybe<Scalars['Boolean']['input']>;
  badStanding_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  badStanding_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_AllowListEligibilityData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_AllowListEligibilityData_filter>>>;
};

export type Eth_AllowListEligibilityData_orderBy =
  | 'id'
  | 'allowListEligibility'
  | 'allowListEligibility__id'
  | 'allowListEligibility__version'
  | 'allowListEligibility__hatId'
  | 'address'
  | 'eligible'
  | 'badStanding';

export type Eth_AllowListEligibility_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_gt?: InputMaybe<Scalars['String']['input']>;
  version_lt?: InputMaybe<Scalars['String']['input']>;
  version_gte?: InputMaybe<Scalars['String']['input']>;
  version_lte?: InputMaybe<Scalars['String']['input']>;
  version_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId?: InputMaybe<Scalars['String']['input']>;
  hatId_not?: InputMaybe<Scalars['String']['input']>;
  hatId_gt?: InputMaybe<Scalars['String']['input']>;
  hatId_lt?: InputMaybe<Scalars['String']['input']>;
  hatId_gte?: InputMaybe<Scalars['String']['input']>;
  hatId_lte?: InputMaybe<Scalars['String']['input']>;
  hatId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not?: InputMaybe<Scalars['String']['input']>;
  ownerHat_gt?: InputMaybe<Scalars['String']['input']>;
  ownerHat_lt?: InputMaybe<Scalars['String']['input']>;
  ownerHat_gte?: InputMaybe<Scalars['String']['input']>;
  ownerHat_lte?: InputMaybe<Scalars['String']['input']>;
  ownerHat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ownerHat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ownerHat_contains?: InputMaybe<Scalars['String']['input']>;
  ownerHat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_contains?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_starts_with?: InputMaybe<Scalars['String']['input']>;
  ownerHat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_ends_with?: InputMaybe<Scalars['String']['input']>;
  ownerHat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_?: InputMaybe<Eth_HatAuthority_filter>;
  arbitratorHat?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_not?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_gt?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_lt?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_gte?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_lte?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  arbitratorHat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  arbitratorHat_contains?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_not_contains?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_starts_with?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_ends_with?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitratorHat_?: InputMaybe<Eth_HatAuthority_filter>;
  eligibilityData_?: InputMaybe<Eth_AllowListEligibilityData_filter>;
  events_?: InputMaybe<Eth_AllowlistEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_AllowListEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_AllowListEligibility_filter>>>;
};

export type Eth_AllowListEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'ownerHat'
  | 'ownerHat__id'
  | 'ownerHat__primaryHatsAccount1ofNAddress'
  | 'arbitratorHat'
  | 'arbitratorHat__id'
  | 'arbitratorHat__primaryHatsAccount1ofNAddress'
  | 'eligibilityData'
  | 'events';

export type Eth_AllowlistEvent = {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  allowlistEligibilityInstance: Eth_AllowListEligibility;
};

export type Eth_AllowlistEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  allowlistEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allowlistEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allowlistEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_?: InputMaybe<Eth_AllowListEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_AllowlistEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_AllowlistEvent_filter>>>;
};

export type Eth_AllowlistEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'allowlistEligibilityInstance'
  | 'allowlistEligibilityInstance__id'
  | 'allowlistEligibilityInstance__version'
  | 'allowlistEligibilityInstance__hatId';

export type Eth_Allowlist_AccountAddedEvent = Eth_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  allowlistEligibilityInstance: Eth_AllowListEligibility;
  account: Scalars['String']['output'];
};

export type Eth_Allowlist_AccountAddedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  allowlistEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allowlistEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allowlistEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_?: InputMaybe<Eth_AllowListEligibility_filter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Allowlist_AccountAddedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Allowlist_AccountAddedEvent_filter>>>;
};

export type Eth_Allowlist_AccountAddedEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'allowlistEligibilityInstance'
  | 'allowlistEligibilityInstance__id'
  | 'allowlistEligibilityInstance__version'
  | 'allowlistEligibilityInstance__hatId'
  | 'account';

export type Eth_Allowlist_AccountRemovedEvent = Eth_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  allowlistEligibilityInstance: Eth_AllowListEligibility;
  account: Scalars['String']['output'];
};

export type Eth_Allowlist_AccountRemovedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  allowlistEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allowlistEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allowlistEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_?: InputMaybe<Eth_AllowListEligibility_filter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Allowlist_AccountRemovedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Allowlist_AccountRemovedEvent_filter>>>;
};

export type Eth_Allowlist_AccountRemovedEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'allowlistEligibilityInstance'
  | 'allowlistEligibilityInstance__id'
  | 'allowlistEligibilityInstance__version'
  | 'allowlistEligibilityInstance__hatId'
  | 'account';

export type Eth_Allowlist_AccountStandingChangedEvent = Eth_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  allowlistEligibilityInstance: Eth_AllowListEligibility;
  account: Scalars['String']['output'];
  standing: Scalars['Boolean']['output'];
};

export type Eth_Allowlist_AccountStandingChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  allowlistEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allowlistEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allowlistEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_?: InputMaybe<Eth_AllowListEligibility_filter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  standing?: InputMaybe<Scalars['Boolean']['input']>;
  standing_not?: InputMaybe<Scalars['Boolean']['input']>;
  standing_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  standing_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Allowlist_AccountStandingChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Allowlist_AccountStandingChangedEvent_filter>>>;
};

export type Eth_Allowlist_AccountStandingChangedEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'allowlistEligibilityInstance'
  | 'allowlistEligibilityInstance__id'
  | 'allowlistEligibilityInstance__version'
  | 'allowlistEligibilityInstance__hatId'
  | 'account'
  | 'standing';

export type Eth_Allowlist_AccountsAddedEvent = Eth_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  allowlistEligibilityInstance: Eth_AllowListEligibility;
  accounts: Array<Scalars['String']['output']>;
};

export type Eth_Allowlist_AccountsAddedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  allowlistEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allowlistEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allowlistEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_?: InputMaybe<Eth_AllowListEligibility_filter>;
  accounts?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Allowlist_AccountsAddedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Allowlist_AccountsAddedEvent_filter>>>;
};

export type Eth_Allowlist_AccountsAddedEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'allowlistEligibilityInstance'
  | 'allowlistEligibilityInstance__id'
  | 'allowlistEligibilityInstance__version'
  | 'allowlistEligibilityInstance__hatId'
  | 'accounts';

export type Eth_Allowlist_AccountsRemovedEvent = Eth_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  allowlistEligibilityInstance: Eth_AllowListEligibility;
  accounts: Array<Scalars['String']['output']>;
};

export type Eth_Allowlist_AccountsRemovedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  allowlistEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allowlistEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allowlistEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_?: InputMaybe<Eth_AllowListEligibility_filter>;
  accounts?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Allowlist_AccountsRemovedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Allowlist_AccountsRemovedEvent_filter>>>;
};

export type Eth_Allowlist_AccountsRemovedEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'allowlistEligibilityInstance'
  | 'allowlistEligibilityInstance__id'
  | 'allowlistEligibilityInstance__version'
  | 'allowlistEligibilityInstance__hatId'
  | 'accounts';

export type Eth_Allowlist_AccountsStandingChangedEvent = Eth_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  allowlistEligibilityInstance: Eth_AllowListEligibility;
  accounts: Array<Scalars['String']['output']>;
  standings: Array<Scalars['Boolean']['output']>;
};

export type Eth_Allowlist_AccountsStandingChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  allowlistEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allowlistEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allowlistEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_?: InputMaybe<Eth_AllowListEligibility_filter>;
  accounts?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  standings?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  standings_not?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  standings_contains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  standings_contains_nocase?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  standings_not_contains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  standings_not_contains_nocase?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Allowlist_AccountsStandingChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Allowlist_AccountsStandingChangedEvent_filter>>>;
};

export type Eth_Allowlist_AccountsStandingChangedEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'allowlistEligibilityInstance'
  | 'allowlistEligibilityInstance__id'
  | 'allowlistEligibilityInstance__version'
  | 'allowlistEligibilityInstance__hatId'
  | 'accounts'
  | 'standings';

export type Eth_Allowlist_ArbitratorHatSetEvent = Eth_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  allowlistEligibilityInstance: Eth_AllowListEligibility;
  newArbitratorHat: Scalars['String']['output'];
};

export type Eth_Allowlist_ArbitratorHatSetEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  allowlistEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allowlistEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allowlistEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_?: InputMaybe<Eth_AllowListEligibility_filter>;
  newArbitratorHat?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_not?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_gt?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_lt?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_gte?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_lte?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newArbitratorHat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newArbitratorHat_contains?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_not_contains?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_starts_with?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_ends_with?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  newArbitratorHat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Allowlist_ArbitratorHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Allowlist_ArbitratorHatSetEvent_filter>>>;
};

export type Eth_Allowlist_ArbitratorHatSetEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'allowlistEligibilityInstance'
  | 'allowlistEligibilityInstance__id'
  | 'allowlistEligibilityInstance__version'
  | 'allowlistEligibilityInstance__hatId'
  | 'newArbitratorHat';

export type Eth_Allowlist_OwnerHatSetEvent = Eth_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  allowlistEligibilityInstance: Eth_AllowListEligibility;
  newOwnerHat: Scalars['String']['output'];
};

export type Eth_Allowlist_OwnerHatSetEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  allowlistEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allowlistEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allowlistEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowlistEligibilityInstance_?: InputMaybe<Eth_AllowListEligibility_filter>;
  newOwnerHat?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_not?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_gt?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_lt?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_gte?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_lte?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newOwnerHat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newOwnerHat_contains?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_not_contains?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_starts_with?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_ends_with?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  newOwnerHat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Allowlist_OwnerHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Allowlist_OwnerHatSetEvent_filter>>>;
};

export type Eth_Allowlist_OwnerHatSetEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'allowlistEligibilityInstance'
  | 'allowlistEligibilityInstance__id'
  | 'allowlistEligibilityInstance__version'
  | 'allowlistEligibilityInstance__hatId'
  | 'newOwnerHat';

export type Eth_BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Eth_Block_height = {
  hash?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

/**  Charecter Sheets Level Eligibility  */
export type Eth_CharacterSheetsLevelEligibility = Eth_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  hatAdmins: Array<Eth_HatAuthority>;
};


/**  Charecter Sheets Level Eligibility  */
export type Eth_CharacterSheetsLevelEligibilityhatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatAuthority_filter>;
};

export type Eth_CharacterSheetsLevelEligibility_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_gt?: InputMaybe<Scalars['String']['input']>;
  version_lt?: InputMaybe<Scalars['String']['input']>;
  version_gte?: InputMaybe<Scalars['String']['input']>;
  version_lte?: InputMaybe<Scalars['String']['input']>;
  version_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId?: InputMaybe<Scalars['String']['input']>;
  hatId_not?: InputMaybe<Scalars['String']['input']>;
  hatId_gt?: InputMaybe<Scalars['String']['input']>;
  hatId_lt?: InputMaybe<Scalars['String']['input']>;
  hatId_gte?: InputMaybe<Scalars['String']['input']>;
  hatId_lte?: InputMaybe<Scalars['String']['input']>;
  hatId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatAdmins?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_?: InputMaybe<Eth_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_CharacterSheetsLevelEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_CharacterSheetsLevelEligibility_filter>>>;
};

export type Eth_CharacterSheetsLevelEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'hatAdmins';

/**  CoLinks Eligibility  */
export type Eth_CoLinksEligibility = Eth_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  threshold: Scalars['BigInt']['output'];
};

export type Eth_CoLinksEligibility_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_gt?: InputMaybe<Scalars['String']['input']>;
  version_lt?: InputMaybe<Scalars['String']['input']>;
  version_gte?: InputMaybe<Scalars['String']['input']>;
  version_lte?: InputMaybe<Scalars['String']['input']>;
  version_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId?: InputMaybe<Scalars['String']['input']>;
  hatId_not?: InputMaybe<Scalars['String']['input']>;
  hatId_gt?: InputMaybe<Scalars['String']['input']>;
  hatId_lt?: InputMaybe<Scalars['String']['input']>;
  hatId_gte?: InputMaybe<Scalars['String']['input']>;
  hatId_lte?: InputMaybe<Scalars['String']['input']>;
  hatId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  threshold?: InputMaybe<Scalars['BigInt']['input']>;
  threshold_not?: InputMaybe<Scalars['BigInt']['input']>;
  threshold_gt?: InputMaybe<Scalars['BigInt']['input']>;
  threshold_lt?: InputMaybe<Scalars['BigInt']['input']>;
  threshold_gte?: InputMaybe<Scalars['BigInt']['input']>;
  threshold_lte?: InputMaybe<Scalars['BigInt']['input']>;
  threshold_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  threshold_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_CoLinksEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_CoLinksEligibility_filter>>>;
};

export type Eth_CoLinksEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'threshold';

export type Eth_ElectionEvent = {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  electionEligibilityInstance: Eth_HatsElectionEligibility;
};

export type Eth_ElectionEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  electionEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  electionEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  electionEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_?: InputMaybe<Eth_HatsElectionEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_ElectionEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_ElectionEvent_filter>>>;
};

export type Eth_ElectionEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'electionEligibilityInstance'
  | 'electionEligibilityInstance__id'
  | 'electionEligibilityInstance__version'
  | 'electionEligibilityInstance__hatId';

export type Eth_ElectionTerm = {
  id: Scalars['ID']['output'];
  hatsElectionEligibility: Eth_HatsElectionEligibility;
  /** first term starts when 'elect' is called, next terms start when 'startNextTerm' is called */
  termStartedAt?: Maybe<Scalars['BigInt']['output']>;
  termEnd: Scalars['BigInt']['output'];
  /** election is completed when 'elect' is called */
  electionCompletedAt?: Maybe<Scalars['BigInt']['output']>;
  electedAccounts?: Maybe<Array<Scalars['String']['output']>>;
};

export type Eth_ElectionTerm_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  hatsElectionEligibility?: InputMaybe<Scalars['String']['input']>;
  hatsElectionEligibility_not?: InputMaybe<Scalars['String']['input']>;
  hatsElectionEligibility_gt?: InputMaybe<Scalars['String']['input']>;
  hatsElectionEligibility_lt?: InputMaybe<Scalars['String']['input']>;
  hatsElectionEligibility_gte?: InputMaybe<Scalars['String']['input']>;
  hatsElectionEligibility_lte?: InputMaybe<Scalars['String']['input']>;
  hatsElectionEligibility_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatsElectionEligibility_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatsElectionEligibility_contains?: InputMaybe<Scalars['String']['input']>;
  hatsElectionEligibility_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatsElectionEligibility_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatsElectionEligibility_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatsElectionEligibility_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatsElectionEligibility_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatsElectionEligibility_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatsElectionEligibility_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatsElectionEligibility_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatsElectionEligibility_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatsElectionEligibility_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatsElectionEligibility_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatsElectionEligibility_?: InputMaybe<Eth_HatsElectionEligibility_filter>;
  termStartedAt?: InputMaybe<Scalars['BigInt']['input']>;
  termStartedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  termStartedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  termStartedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  termStartedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  termStartedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  termStartedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  termStartedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  termEnd?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_not?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  termEnd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  electionCompletedAt?: InputMaybe<Scalars['BigInt']['input']>;
  electionCompletedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  electionCompletedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  electionCompletedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  electionCompletedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  electionCompletedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  electionCompletedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  electionCompletedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  electedAccounts?: InputMaybe<Array<Scalars['String']['input']>>;
  electedAccounts_not?: InputMaybe<Array<Scalars['String']['input']>>;
  electedAccounts_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  electedAccounts_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  electedAccounts_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  electedAccounts_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_ElectionTerm_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_ElectionTerm_filter>>>;
};

export type Eth_ElectionTerm_orderBy =
  | 'id'
  | 'hatsElectionEligibility'
  | 'hatsElectionEligibility__id'
  | 'hatsElectionEligibility__version'
  | 'hatsElectionEligibility__hatId'
  | 'termStartedAt'
  | 'termEnd'
  | 'electionCompletedAt'
  | 'electedAccounts';

export type Eth_Election_ElectionCompletedEvent = Eth_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  electionEligibilityInstance: Eth_HatsElectionEligibility;
  termEnd: Scalars['BigInt']['output'];
  winners: Array<Scalars['String']['output']>;
};

export type Eth_Election_ElectionCompletedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  electionEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  electionEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  electionEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_?: InputMaybe<Eth_HatsElectionEligibility_filter>;
  termEnd?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_not?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  termEnd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  winners?: InputMaybe<Array<Scalars['String']['input']>>;
  winners_not?: InputMaybe<Array<Scalars['String']['input']>>;
  winners_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  winners_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  winners_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  winners_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Election_ElectionCompletedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Election_ElectionCompletedEvent_filter>>>;
};

export type Eth_Election_ElectionCompletedEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'electionEligibilityInstance'
  | 'electionEligibilityInstance__id'
  | 'electionEligibilityInstance__version'
  | 'electionEligibilityInstance__hatId'
  | 'termEnd'
  | 'winners';

export type Eth_Election_ElectionOpenedEvent = Eth_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  electionEligibilityInstance: Eth_HatsElectionEligibility;
  nextTermEnd: Scalars['BigInt']['output'];
};

export type Eth_Election_ElectionOpenedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  electionEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  electionEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  electionEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_?: InputMaybe<Eth_HatsElectionEligibility_filter>;
  nextTermEnd?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_not?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nextTermEnd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Election_ElectionOpenedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Election_ElectionOpenedEvent_filter>>>;
};

export type Eth_Election_ElectionOpenedEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'electionEligibilityInstance'
  | 'electionEligibilityInstance__id'
  | 'electionEligibilityInstance__version'
  | 'electionEligibilityInstance__hatId'
  | 'nextTermEnd';

export type Eth_Election_NewTermStartedEvent = Eth_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  electionEligibilityInstance: Eth_HatsElectionEligibility;
  termEnd: Scalars['BigInt']['output'];
};

export type Eth_Election_NewTermStartedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  electionEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  electionEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  electionEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_?: InputMaybe<Eth_HatsElectionEligibility_filter>;
  termEnd?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_not?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  termEnd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Election_NewTermStartedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Election_NewTermStartedEvent_filter>>>;
};

export type Eth_Election_NewTermStartedEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'electionEligibilityInstance'
  | 'electionEligibilityInstance__id'
  | 'electionEligibilityInstance__version'
  | 'electionEligibilityInstance__hatId'
  | 'termEnd';

export type Eth_Election_RecalledEvent = Eth_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  electionEligibilityInstance: Eth_HatsElectionEligibility;
  termEnd: Scalars['BigInt']['output'];
  accounts: Array<Scalars['String']['output']>;
};

export type Eth_Election_RecalledEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  electionEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  electionEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  electionEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  electionEligibilityInstance_?: InputMaybe<Eth_HatsElectionEligibility_filter>;
  termEnd?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_not?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  termEnd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accounts?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Election_RecalledEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Election_RecalledEvent_filter>>>;
};

export type Eth_Election_RecalledEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'electionEligibilityInstance'
  | 'electionEligibilityInstance__id'
  | 'electionEligibilityInstance__version'
  | 'electionEligibilityInstance__hatId'
  | 'termEnd'
  | 'accounts';

export type Eth_EligibilitiesRuleset = {
  id: Scalars['ID']['output'];
  eligibilitiesChain: Eth_HatsEligibilitiesChain;
  modules: Array<Eth_HatsModule>;
};


export type Eth_EligibilitiesRulesetmodulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsModule_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsModule_filter>;
};

export type Eth_EligibilitiesRuleset_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  eligibilitiesChain?: InputMaybe<Scalars['String']['input']>;
  eligibilitiesChain_not?: InputMaybe<Scalars['String']['input']>;
  eligibilitiesChain_gt?: InputMaybe<Scalars['String']['input']>;
  eligibilitiesChain_lt?: InputMaybe<Scalars['String']['input']>;
  eligibilitiesChain_gte?: InputMaybe<Scalars['String']['input']>;
  eligibilitiesChain_lte?: InputMaybe<Scalars['String']['input']>;
  eligibilitiesChain_in?: InputMaybe<Array<Scalars['String']['input']>>;
  eligibilitiesChain_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  eligibilitiesChain_contains?: InputMaybe<Scalars['String']['input']>;
  eligibilitiesChain_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  eligibilitiesChain_not_contains?: InputMaybe<Scalars['String']['input']>;
  eligibilitiesChain_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  eligibilitiesChain_starts_with?: InputMaybe<Scalars['String']['input']>;
  eligibilitiesChain_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  eligibilitiesChain_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  eligibilitiesChain_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  eligibilitiesChain_ends_with?: InputMaybe<Scalars['String']['input']>;
  eligibilitiesChain_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  eligibilitiesChain_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  eligibilitiesChain_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  eligibilitiesChain_?: InputMaybe<Eth_HatsEligibilitiesChain_filter>;
  modules?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_not?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_?: InputMaybe<Eth_HatsModule_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_EligibilitiesRuleset_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_EligibilitiesRuleset_filter>>>;
};

export type Eth_EligibilitiesRuleset_orderBy =
  | 'id'
  | 'eligibilitiesChain'
  | 'eligibilitiesChain__id'
  | 'eligibilitiesChain__version'
  | 'eligibilitiesChain__hatId'
  | 'eligibilitiesChain__numRulesets'
  | 'modules';

/**  Erc1155 Eligibility  */
export type Eth_Erc1155Eligibility = Eth_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  contractAddress: Scalars['String']['output'];
  tokens: Array<Scalars['BigInt']['output']>;
  minBalances: Array<Scalars['BigInt']['output']>;
};

export type Eth_Erc1155Eligibility_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_gt?: InputMaybe<Scalars['String']['input']>;
  version_lt?: InputMaybe<Scalars['String']['input']>;
  version_gte?: InputMaybe<Scalars['String']['input']>;
  version_lte?: InputMaybe<Scalars['String']['input']>;
  version_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId?: InputMaybe<Scalars['String']['input']>;
  hatId_not?: InputMaybe<Scalars['String']['input']>;
  hatId_gt?: InputMaybe<Scalars['String']['input']>;
  hatId_lt?: InputMaybe<Scalars['String']['input']>;
  hatId_gte?: InputMaybe<Scalars['String']['input']>;
  hatId_lte?: InputMaybe<Scalars['String']['input']>;
  hatId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contractAddress?: InputMaybe<Scalars['String']['input']>;
  contractAddress_not?: InputMaybe<Scalars['String']['input']>;
  contractAddress_gt?: InputMaybe<Scalars['String']['input']>;
  contractAddress_lt?: InputMaybe<Scalars['String']['input']>;
  contractAddress_gte?: InputMaybe<Scalars['String']['input']>;
  contractAddress_lte?: InputMaybe<Scalars['String']['input']>;
  contractAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contractAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contractAddress_contains?: InputMaybe<Scalars['String']['input']>;
  contractAddress_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contractAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  contractAddress_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contractAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  contractAddress_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contractAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  contractAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contractAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  contractAddress_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contractAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  contractAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokens?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokens_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokens_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokens_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokens_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokens_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minBalances?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minBalances_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minBalances_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minBalances_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minBalances_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minBalances_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Erc1155Eligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Erc1155Eligibility_filter>>>;
};

export type Eth_Erc1155Eligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'contractAddress'
  | 'tokens'
  | 'minBalances';

/**  Erc20 Eligibility  */
export type Eth_Erc20Eligibility = Eth_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  token: Scalars['String']['output'];
  minBalance: Scalars['BigInt']['output'];
};

export type Eth_Erc20Eligibility_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_gt?: InputMaybe<Scalars['String']['input']>;
  version_lt?: InputMaybe<Scalars['String']['input']>;
  version_gte?: InputMaybe<Scalars['String']['input']>;
  version_lte?: InputMaybe<Scalars['String']['input']>;
  version_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId?: InputMaybe<Scalars['String']['input']>;
  hatId_not?: InputMaybe<Scalars['String']['input']>;
  hatId_gt?: InputMaybe<Scalars['String']['input']>;
  hatId_lt?: InputMaybe<Scalars['String']['input']>;
  hatId_gte?: InputMaybe<Scalars['String']['input']>;
  hatId_lte?: InputMaybe<Scalars['String']['input']>;
  hatId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  minBalance?: InputMaybe<Scalars['BigInt']['input']>;
  minBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
  minBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minBalance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minBalance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Erc20Eligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Erc20Eligibility_filter>>>;
};

export type Eth_Erc20Eligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'token'
  | 'minBalance';

/**  Erc721 Eligibility  */
export type Eth_Erc721Eligibility = Eth_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  token: Scalars['String']['output'];
  minBalance: Scalars['BigInt']['output'];
};

export type Eth_Erc721Eligibility_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_gt?: InputMaybe<Scalars['String']['input']>;
  version_lt?: InputMaybe<Scalars['String']['input']>;
  version_gte?: InputMaybe<Scalars['String']['input']>;
  version_lte?: InputMaybe<Scalars['String']['input']>;
  version_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId?: InputMaybe<Scalars['String']['input']>;
  hatId_not?: InputMaybe<Scalars['String']['input']>;
  hatId_gt?: InputMaybe<Scalars['String']['input']>;
  hatId_lt?: InputMaybe<Scalars['String']['input']>;
  hatId_gte?: InputMaybe<Scalars['String']['input']>;
  hatId_lte?: InputMaybe<Scalars['String']['input']>;
  hatId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  minBalance?: InputMaybe<Scalars['BigInt']['input']>;
  minBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
  minBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minBalance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minBalance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Erc721Eligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Erc721Eligibility_filter>>>;
};

export type Eth_Erc721Eligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'token'
  | 'minBalance';

/**  Gitcoin Passport Eligibility  */
export type Eth_GitcoinPassportEligibility = Eth_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  decoder: Scalars['String']['output'];
  scoreCriterion: Scalars['BigInt']['output'];
};

export type Eth_GitcoinPassportEligibility_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_gt?: InputMaybe<Scalars['String']['input']>;
  version_lt?: InputMaybe<Scalars['String']['input']>;
  version_gte?: InputMaybe<Scalars['String']['input']>;
  version_lte?: InputMaybe<Scalars['String']['input']>;
  version_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId?: InputMaybe<Scalars['String']['input']>;
  hatId_not?: InputMaybe<Scalars['String']['input']>;
  hatId_gt?: InputMaybe<Scalars['String']['input']>;
  hatId_lt?: InputMaybe<Scalars['String']['input']>;
  hatId_gte?: InputMaybe<Scalars['String']['input']>;
  hatId_lte?: InputMaybe<Scalars['String']['input']>;
  hatId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  decoder?: InputMaybe<Scalars['String']['input']>;
  decoder_not?: InputMaybe<Scalars['String']['input']>;
  decoder_gt?: InputMaybe<Scalars['String']['input']>;
  decoder_lt?: InputMaybe<Scalars['String']['input']>;
  decoder_gte?: InputMaybe<Scalars['String']['input']>;
  decoder_lte?: InputMaybe<Scalars['String']['input']>;
  decoder_in?: InputMaybe<Array<Scalars['String']['input']>>;
  decoder_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  decoder_contains?: InputMaybe<Scalars['String']['input']>;
  decoder_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  decoder_not_contains?: InputMaybe<Scalars['String']['input']>;
  decoder_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  decoder_starts_with?: InputMaybe<Scalars['String']['input']>;
  decoder_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  decoder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  decoder_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  decoder_ends_with?: InputMaybe<Scalars['String']['input']>;
  decoder_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  decoder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  decoder_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  scoreCriterion?: InputMaybe<Scalars['BigInt']['input']>;
  scoreCriterion_not?: InputMaybe<Scalars['BigInt']['input']>;
  scoreCriterion_gt?: InputMaybe<Scalars['BigInt']['input']>;
  scoreCriterion_lt?: InputMaybe<Scalars['BigInt']['input']>;
  scoreCriterion_gte?: InputMaybe<Scalars['BigInt']['input']>;
  scoreCriterion_lte?: InputMaybe<Scalars['BigInt']['input']>;
  scoreCriterion_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  scoreCriterion_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_GitcoinPassportEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_GitcoinPassportEligibility_filter>>>;
};

export type Eth_GitcoinPassportEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'decoder'
  | 'scoreCriterion';

export type Eth_HatAuthority = {
  id: Scalars['ID']['output'];
  /** pre computed hats account address with a salt value of 1, null only if the hat was not created yet */
  primaryHatsAccount1ofNAddress?: Maybe<Scalars['String']['output']>;
  hatsAccount1ofN: Array<Eth_HatsAccount1ofN>;
  hsgOwner: Array<Eth_HatsSignerGate>;
  hsgSigner: Array<Eth_HatsSignerGate>;
  hsgV2Owner: Array<Eth_HatsSignerGateV2>;
  hsgV2Signer: Array<Eth_HatsSignerGateV2>;
  jokeraceAdmin: Array<Eth_JokeRaceEligibility>;
  allowListOwner: Array<Eth_AllowListEligibility>;
  allowListArbitrator: Array<Eth_AllowListEligibility>;
  electionsBallotBox: Array<Eth_HatsElectionEligibility>;
  electionsAdmin: Array<Eth_HatsElectionEligibility>;
  eligibilityTogglePassthrough: Array<Eth_PassthroughModule>;
  stakingJudge: Array<Eth_StakingEligibility>;
  stakingRecipient: Array<Eth_StakingEligibility>;
  stakingHatAdmins: Array<Eth_StakingEligibility>;
  seasonHatAdmins: Array<Eth_SeasonToggle>;
  characterSheetsLevelHatAdmins: Array<Eth_CharacterSheetsLevelEligibility>;
  agreementOwner: Array<Eth_AgreementEligibility>;
  agreementArbitrator: Array<Eth_AgreementEligibility>;
  baalStakingJudge: Array<Eth_HatsStakingShaman>;
  hatsFarcasterDelegatorOwner: Array<Eth_HatsFarcasterDelegator>;
  hatsFarcasterDelegatorCaster: Array<Eth_HatsFarcasterDelegator>;
};


export type Eth_HatAuthorityhatsAccount1ofNArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsAccount1ofN_filter>;
};


export type Eth_HatAuthorityhsgOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGate_filter>;
};


export type Eth_HatAuthorityhsgSignerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGate_filter>;
};


export type Eth_HatAuthorityhsgV2OwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_filter>;
};


export type Eth_HatAuthorityhsgV2SignerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_filter>;
};


export type Eth_HatAuthorityjokeraceAdminArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_JokeRaceEligibility_filter>;
};


export type Eth_HatAuthorityallowListOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_AllowListEligibility_filter>;
};


export type Eth_HatAuthorityallowListArbitratorArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_AllowListEligibility_filter>;
};


export type Eth_HatAuthorityelectionsBallotBoxArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsElectionEligibility_filter>;
};


export type Eth_HatAuthorityelectionsAdminArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsElectionEligibility_filter>;
};


export type Eth_HatAuthorityeligibilityTogglePassthroughArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_PassthroughModule_filter>;
};


export type Eth_HatAuthoritystakingJudgeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_StakingEligibility_filter>;
};


export type Eth_HatAuthoritystakingRecipientArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_StakingEligibility_filter>;
};


export type Eth_HatAuthoritystakingHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_StakingEligibility_filter>;
};


export type Eth_HatAuthorityseasonHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_SeasonToggle_filter>;
};


export type Eth_HatAuthoritycharacterSheetsLevelHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_CharacterSheetsLevelEligibility_filter>;
};


export type Eth_HatAuthorityagreementOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_AgreementEligibility_filter>;
};


export type Eth_HatAuthorityagreementArbitratorArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_AgreementEligibility_filter>;
};


export type Eth_HatAuthoritybaalStakingJudgeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsStakingShaman_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsStakingShaman_filter>;
};


export type Eth_HatAuthorityhatsFarcasterDelegatorOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsFarcasterDelegator_filter>;
};


export type Eth_HatAuthorityhatsFarcasterDelegatorCasterArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsFarcasterDelegator_filter>;
};

export type Eth_HatAuthority_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  primaryHatsAccount1ofNAddress?: InputMaybe<Scalars['String']['input']>;
  primaryHatsAccount1ofNAddress_not?: InputMaybe<Scalars['String']['input']>;
  primaryHatsAccount1ofNAddress_gt?: InputMaybe<Scalars['String']['input']>;
  primaryHatsAccount1ofNAddress_lt?: InputMaybe<Scalars['String']['input']>;
  primaryHatsAccount1ofNAddress_gte?: InputMaybe<Scalars['String']['input']>;
  primaryHatsAccount1ofNAddress_lte?: InputMaybe<Scalars['String']['input']>;
  primaryHatsAccount1ofNAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  primaryHatsAccount1ofNAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  primaryHatsAccount1ofNAddress_contains?: InputMaybe<Scalars['String']['input']>;
  primaryHatsAccount1ofNAddress_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  primaryHatsAccount1ofNAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  primaryHatsAccount1ofNAddress_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  primaryHatsAccount1ofNAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  primaryHatsAccount1ofNAddress_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  primaryHatsAccount1ofNAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  primaryHatsAccount1ofNAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  primaryHatsAccount1ofNAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  primaryHatsAccount1ofNAddress_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  primaryHatsAccount1ofNAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  primaryHatsAccount1ofNAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatsAccount1ofN_?: InputMaybe<Eth_HatsAccount1ofN_filter>;
  hsgOwner_?: InputMaybe<Eth_HatsSignerGate_filter>;
  hsgSigner_?: InputMaybe<Eth_HatsSignerGate_filter>;
  hsgV2Owner_?: InputMaybe<Eth_HatsSignerGateV2_filter>;
  hsgV2Signer_?: InputMaybe<Eth_HatsSignerGateV2_filter>;
  jokeraceAdmin_?: InputMaybe<Eth_JokeRaceEligibility_filter>;
  allowListOwner_?: InputMaybe<Eth_AllowListEligibility_filter>;
  allowListArbitrator_?: InputMaybe<Eth_AllowListEligibility_filter>;
  electionsBallotBox_?: InputMaybe<Eth_HatsElectionEligibility_filter>;
  electionsAdmin_?: InputMaybe<Eth_HatsElectionEligibility_filter>;
  eligibilityTogglePassthrough_?: InputMaybe<Eth_PassthroughModule_filter>;
  stakingJudge_?: InputMaybe<Eth_StakingEligibility_filter>;
  stakingRecipient_?: InputMaybe<Eth_StakingEligibility_filter>;
  stakingHatAdmins_?: InputMaybe<Eth_StakingEligibility_filter>;
  seasonHatAdmins_?: InputMaybe<Eth_SeasonToggle_filter>;
  characterSheetsLevelHatAdmins_?: InputMaybe<Eth_CharacterSheetsLevelEligibility_filter>;
  agreementOwner_?: InputMaybe<Eth_AgreementEligibility_filter>;
  agreementArbitrator_?: InputMaybe<Eth_AgreementEligibility_filter>;
  baalStakingJudge_?: InputMaybe<Eth_HatsStakingShaman_filter>;
  hatsFarcasterDelegatorOwner_?: InputMaybe<Eth_HatsFarcasterDelegator_filter>;
  hatsFarcasterDelegatorCaster_?: InputMaybe<Eth_HatsFarcasterDelegator_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatAuthority_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatAuthority_filter>>>;
};

export type Eth_HatAuthority_orderBy =
  | 'id'
  | 'primaryHatsAccount1ofNAddress'
  | 'hatsAccount1ofN'
  | 'hsgOwner'
  | 'hsgSigner'
  | 'hsgV2Owner'
  | 'hsgV2Signer'
  | 'jokeraceAdmin'
  | 'allowListOwner'
  | 'allowListArbitrator'
  | 'electionsBallotBox'
  | 'electionsAdmin'
  | 'eligibilityTogglePassthrough'
  | 'stakingJudge'
  | 'stakingRecipient'
  | 'stakingHatAdmins'
  | 'seasonHatAdmins'
  | 'characterSheetsLevelHatAdmins'
  | 'agreementOwner'
  | 'agreementArbitrator'
  | 'baalStakingJudge'
  | 'hatsFarcasterDelegatorOwner'
  | 'hatsFarcasterDelegatorCaster';

/**  Hat Controlled Module  */
export type Eth_HatControlledModule = Eth_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  controllerHatId: Scalars['String']['output'];
  wearersStatusData: Array<Eth_HatControlledModuleWearerStatus>;
  hatsStatusData: Array<Eth_HatControlledModuleHatStatus>;
  events: Array<Eth_HatControlledModuleEvent>;
};


/**  Hat Controlled Module  */
export type Eth_HatControlledModulewearersStatusDataArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatControlledModuleWearerStatus_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatControlledModuleWearerStatus_filter>;
};


/**  Hat Controlled Module  */
export type Eth_HatControlledModulehatsStatusDataArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatControlledModuleHatStatus_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatControlledModuleHatStatus_filter>;
};


/**  Hat Controlled Module  */
export type Eth_HatControlledModuleeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatControlledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatControlledModuleEvent_filter>;
};

export type Eth_HatControlledModuleEvent = {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  hatControlledModuleInstance: Eth_HatControlledModule;
};

export type Eth_HatControlledModuleEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  hatControlledModuleInstance?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_not?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_gt?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_lt?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_gte?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_lte?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatControlledModuleInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatControlledModuleInstance_contains?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_?: InputMaybe<Eth_HatControlledModule_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatControlledModuleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatControlledModuleEvent_filter>>>;
};

export type Eth_HatControlledModuleEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'hatControlledModuleInstance'
  | 'hatControlledModuleInstance__id'
  | 'hatControlledModuleInstance__version'
  | 'hatControlledModuleInstance__hatId'
  | 'hatControlledModuleInstance__controllerHatId';

export type Eth_HatControlledModuleHatStatus = {
  id: Scalars['ID']['output'];
  hatControlledModule: Eth_HatControlledModule;
  hatId: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
};

export type Eth_HatControlledModuleHatStatus_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  hatControlledModule?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_not?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_gt?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_lt?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_gte?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_lte?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatControlledModule_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatControlledModule_contains?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_?: InputMaybe<Eth_HatControlledModule_filter>;
  hatId?: InputMaybe<Scalars['String']['input']>;
  hatId_not?: InputMaybe<Scalars['String']['input']>;
  hatId_gt?: InputMaybe<Scalars['String']['input']>;
  hatId_lt?: InputMaybe<Scalars['String']['input']>;
  hatId_gte?: InputMaybe<Scalars['String']['input']>;
  hatId_lte?: InputMaybe<Scalars['String']['input']>;
  hatId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  active_not?: InputMaybe<Scalars['Boolean']['input']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatControlledModuleHatStatus_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatControlledModuleHatStatus_filter>>>;
};

export type Eth_HatControlledModuleHatStatus_orderBy =
  | 'id'
  | 'hatControlledModule'
  | 'hatControlledModule__id'
  | 'hatControlledModule__version'
  | 'hatControlledModule__hatId'
  | 'hatControlledModule__controllerHatId'
  | 'hatId'
  | 'active';

export type Eth_HatControlledModuleWearerStatus = {
  id: Scalars['ID']['output'];
  hatControlledModule: Eth_HatControlledModule;
  hatId: Scalars['String']['output'];
  wearer: Scalars['String']['output'];
  eligible: Scalars['Boolean']['output'];
  standing: Scalars['Boolean']['output'];
};

export type Eth_HatControlledModuleWearerStatus_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  hatControlledModule?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_not?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_gt?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_lt?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_gte?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_lte?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatControlledModule_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatControlledModule_contains?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModule_?: InputMaybe<Eth_HatControlledModule_filter>;
  hatId?: InputMaybe<Scalars['String']['input']>;
  hatId_not?: InputMaybe<Scalars['String']['input']>;
  hatId_gt?: InputMaybe<Scalars['String']['input']>;
  hatId_lt?: InputMaybe<Scalars['String']['input']>;
  hatId_gte?: InputMaybe<Scalars['String']['input']>;
  hatId_lte?: InputMaybe<Scalars['String']['input']>;
  hatId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
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
  eligible?: InputMaybe<Scalars['Boolean']['input']>;
  eligible_not?: InputMaybe<Scalars['Boolean']['input']>;
  eligible_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  eligible_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  standing?: InputMaybe<Scalars['Boolean']['input']>;
  standing_not?: InputMaybe<Scalars['Boolean']['input']>;
  standing_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  standing_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatControlledModuleWearerStatus_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatControlledModuleWearerStatus_filter>>>;
};

export type Eth_HatControlledModuleWearerStatus_orderBy =
  | 'id'
  | 'hatControlledModule'
  | 'hatControlledModule__id'
  | 'hatControlledModule__version'
  | 'hatControlledModule__hatId'
  | 'hatControlledModule__controllerHatId'
  | 'hatId'
  | 'wearer'
  | 'eligible'
  | 'standing';

export type Eth_HatControlledModule_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_gt?: InputMaybe<Scalars['String']['input']>;
  version_lt?: InputMaybe<Scalars['String']['input']>;
  version_gte?: InputMaybe<Scalars['String']['input']>;
  version_lte?: InputMaybe<Scalars['String']['input']>;
  version_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId?: InputMaybe<Scalars['String']['input']>;
  hatId_not?: InputMaybe<Scalars['String']['input']>;
  hatId_gt?: InputMaybe<Scalars['String']['input']>;
  hatId_lt?: InputMaybe<Scalars['String']['input']>;
  hatId_gte?: InputMaybe<Scalars['String']['input']>;
  hatId_lte?: InputMaybe<Scalars['String']['input']>;
  hatId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  controllerHatId?: InputMaybe<Scalars['String']['input']>;
  controllerHatId_not?: InputMaybe<Scalars['String']['input']>;
  controllerHatId_gt?: InputMaybe<Scalars['String']['input']>;
  controllerHatId_lt?: InputMaybe<Scalars['String']['input']>;
  controllerHatId_gte?: InputMaybe<Scalars['String']['input']>;
  controllerHatId_lte?: InputMaybe<Scalars['String']['input']>;
  controllerHatId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  controllerHatId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  controllerHatId_contains?: InputMaybe<Scalars['String']['input']>;
  controllerHatId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  controllerHatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  controllerHatId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  controllerHatId_starts_with?: InputMaybe<Scalars['String']['input']>;
  controllerHatId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  controllerHatId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  controllerHatId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  controllerHatId_ends_with?: InputMaybe<Scalars['String']['input']>;
  controllerHatId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  controllerHatId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  controllerHatId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wearersStatusData_?: InputMaybe<Eth_HatControlledModuleWearerStatus_filter>;
  hatsStatusData_?: InputMaybe<Eth_HatControlledModuleHatStatus_filter>;
  events_?: InputMaybe<Eth_HatControlledModuleEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatControlledModule_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatControlledModule_filter>>>;
};

export type Eth_HatControlledModule_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'controllerHatId'
  | 'wearersStatusData'
  | 'hatsStatusData'
  | 'events';

export type Eth_HatControlled_HatStatusSet = Eth_HatControlledModuleEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  hatControlledModuleInstance: Eth_HatControlledModule;
  hatId: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
};

export type Eth_HatControlled_HatStatusSet_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  hatControlledModuleInstance?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_not?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_gt?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_lt?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_gte?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_lte?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatControlledModuleInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatControlledModuleInstance_contains?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_?: InputMaybe<Eth_HatControlledModule_filter>;
  hatId?: InputMaybe<Scalars['String']['input']>;
  hatId_not?: InputMaybe<Scalars['String']['input']>;
  hatId_gt?: InputMaybe<Scalars['String']['input']>;
  hatId_lt?: InputMaybe<Scalars['String']['input']>;
  hatId_gte?: InputMaybe<Scalars['String']['input']>;
  hatId_lte?: InputMaybe<Scalars['String']['input']>;
  hatId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  active_not?: InputMaybe<Scalars['Boolean']['input']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatControlled_HatStatusSet_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatControlled_HatStatusSet_filter>>>;
};

export type Eth_HatControlled_HatStatusSet_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'hatControlledModuleInstance'
  | 'hatControlledModuleInstance__id'
  | 'hatControlledModuleInstance__version'
  | 'hatControlledModuleInstance__hatId'
  | 'hatControlledModuleInstance__controllerHatId'
  | 'hatId'
  | 'active';

export type Eth_HatControlled_WearerStatusSet = Eth_HatControlledModuleEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  hatControlledModuleInstance: Eth_HatControlledModule;
  wearer: Scalars['String']['output'];
  hatId: Scalars['String']['output'];
  eligible: Scalars['Boolean']['output'];
  standing: Scalars['Boolean']['output'];
};

export type Eth_HatControlled_WearerStatusSet_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  hatControlledModuleInstance?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_not?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_gt?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_lt?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_gte?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_lte?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatControlledModuleInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatControlledModuleInstance_contains?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatControlledModuleInstance_?: InputMaybe<Eth_HatControlledModule_filter>;
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
  hatId?: InputMaybe<Scalars['String']['input']>;
  hatId_not?: InputMaybe<Scalars['String']['input']>;
  hatId_gt?: InputMaybe<Scalars['String']['input']>;
  hatId_lt?: InputMaybe<Scalars['String']['input']>;
  hatId_gte?: InputMaybe<Scalars['String']['input']>;
  hatId_lte?: InputMaybe<Scalars['String']['input']>;
  hatId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  eligible?: InputMaybe<Scalars['Boolean']['input']>;
  eligible_not?: InputMaybe<Scalars['Boolean']['input']>;
  eligible_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  eligible_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  standing?: InputMaybe<Scalars['Boolean']['input']>;
  standing_not?: InputMaybe<Scalars['Boolean']['input']>;
  standing_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  standing_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatControlled_WearerStatusSet_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatControlled_WearerStatusSet_filter>>>;
};

export type Eth_HatControlled_WearerStatusSet_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'hatControlledModuleInstance'
  | 'hatControlledModuleInstance__id'
  | 'hatControlledModuleInstance__version'
  | 'hatControlledModuleInstance__hatId'
  | 'hatControlledModuleInstance__controllerHatId'
  | 'wearer'
  | 'hatId'
  | 'eligible'
  | 'standing';

/**  Hat Wearing Eligibility  */
export type Eth_HatWearingEligibility = Eth_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  criterionHat: Scalars['String']['output'];
};

export type Eth_HatWearingEligibility_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_gt?: InputMaybe<Scalars['String']['input']>;
  version_lt?: InputMaybe<Scalars['String']['input']>;
  version_gte?: InputMaybe<Scalars['String']['input']>;
  version_lte?: InputMaybe<Scalars['String']['input']>;
  version_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId?: InputMaybe<Scalars['String']['input']>;
  hatId_not?: InputMaybe<Scalars['String']['input']>;
  hatId_gt?: InputMaybe<Scalars['String']['input']>;
  hatId_lt?: InputMaybe<Scalars['String']['input']>;
  hatId_gte?: InputMaybe<Scalars['String']['input']>;
  hatId_lte?: InputMaybe<Scalars['String']['input']>;
  hatId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  criterionHat?: InputMaybe<Scalars['String']['input']>;
  criterionHat_not?: InputMaybe<Scalars['String']['input']>;
  criterionHat_gt?: InputMaybe<Scalars['String']['input']>;
  criterionHat_lt?: InputMaybe<Scalars['String']['input']>;
  criterionHat_gte?: InputMaybe<Scalars['String']['input']>;
  criterionHat_lte?: InputMaybe<Scalars['String']['input']>;
  criterionHat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  criterionHat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  criterionHat_contains?: InputMaybe<Scalars['String']['input']>;
  criterionHat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  criterionHat_not_contains?: InputMaybe<Scalars['String']['input']>;
  criterionHat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  criterionHat_starts_with?: InputMaybe<Scalars['String']['input']>;
  criterionHat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  criterionHat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  criterionHat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  criterionHat_ends_with?: InputMaybe<Scalars['String']['input']>;
  criterionHat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  criterionHat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  criterionHat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatWearingEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatWearingEligibility_filter>>>;
};

export type Eth_HatWearingEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'criterionHat';

/** Hats Account 1ofN */
export type Eth_HatsAccount1ofN = {
  id: Scalars['ID']['output'];
  accountOfHat: Eth_HatAuthority;
  operations: Array<Eth_HatsAccount1ofNOperation>;
};


/** Hats Account 1ofN */
export type Eth_HatsAccount1ofNoperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsAccount1ofNOperation_filter>;
};

export type Eth_HatsAccount1ofNOperation = {
  id: Scalars['ID']['output'];
  hatsAccount: Eth_HatsAccount1ofN;
  signer: Scalars['String']['output'];
  to: Scalars['String']['output'];
  value: Scalars['BigInt']['output'];
  callData: Scalars['Eth_Bytes']['output'];
  operationType: Eth_HatsAccountOperationType;
};

export type Eth_HatsAccount1ofNOperation_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  hatsAccount?: InputMaybe<Scalars['String']['input']>;
  hatsAccount_not?: InputMaybe<Scalars['String']['input']>;
  hatsAccount_gt?: InputMaybe<Scalars['String']['input']>;
  hatsAccount_lt?: InputMaybe<Scalars['String']['input']>;
  hatsAccount_gte?: InputMaybe<Scalars['String']['input']>;
  hatsAccount_lte?: InputMaybe<Scalars['String']['input']>;
  hatsAccount_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatsAccount_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatsAccount_contains?: InputMaybe<Scalars['String']['input']>;
  hatsAccount_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatsAccount_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatsAccount_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatsAccount_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatsAccount_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatsAccount_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatsAccount_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatsAccount_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatsAccount_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatsAccount_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatsAccount_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatsAccount_?: InputMaybe<Eth_HatsAccount1ofN_filter>;
  signer?: InputMaybe<Scalars['String']['input']>;
  signer_not?: InputMaybe<Scalars['String']['input']>;
  signer_gt?: InputMaybe<Scalars['String']['input']>;
  signer_lt?: InputMaybe<Scalars['String']['input']>;
  signer_gte?: InputMaybe<Scalars['String']['input']>;
  signer_lte?: InputMaybe<Scalars['String']['input']>;
  signer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  signer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  signer_contains?: InputMaybe<Scalars['String']['input']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_not_contains?: InputMaybe<Scalars['String']['input']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_starts_with?: InputMaybe<Scalars['String']['input']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_ends_with?: InputMaybe<Scalars['String']['input']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  to_not?: InputMaybe<Scalars['String']['input']>;
  to_gt?: InputMaybe<Scalars['String']['input']>;
  to_lt?: InputMaybe<Scalars['String']['input']>;
  to_gte?: InputMaybe<Scalars['String']['input']>;
  to_lte?: InputMaybe<Scalars['String']['input']>;
  to_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_contains?: InputMaybe<Scalars['String']['input']>;
  to_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_contains?: InputMaybe<Scalars['String']['input']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['BigInt']['input']>;
  value_not?: InputMaybe<Scalars['BigInt']['input']>;
  value_gt?: InputMaybe<Scalars['BigInt']['input']>;
  value_lt?: InputMaybe<Scalars['BigInt']['input']>;
  value_gte?: InputMaybe<Scalars['BigInt']['input']>;
  value_lte?: InputMaybe<Scalars['BigInt']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  callData?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  callData_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  callData_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  callData_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  callData_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  callData_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  callData_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  callData_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  callData_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  callData_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  operationType?: InputMaybe<Eth_HatsAccountOperationType>;
  operationType_not?: InputMaybe<Eth_HatsAccountOperationType>;
  operationType_in?: InputMaybe<Array<Eth_HatsAccountOperationType>>;
  operationType_not_in?: InputMaybe<Array<Eth_HatsAccountOperationType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsAccount1ofNOperation_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsAccount1ofNOperation_filter>>>;
};

export type Eth_HatsAccount1ofNOperation_orderBy =
  | 'id'
  | 'hatsAccount'
  | 'hatsAccount__id'
  | 'signer'
  | 'to'
  | 'value'
  | 'callData'
  | 'operationType';

export type Eth_HatsAccount1ofN_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  accountOfHat?: InputMaybe<Scalars['String']['input']>;
  accountOfHat_not?: InputMaybe<Scalars['String']['input']>;
  accountOfHat_gt?: InputMaybe<Scalars['String']['input']>;
  accountOfHat_lt?: InputMaybe<Scalars['String']['input']>;
  accountOfHat_gte?: InputMaybe<Scalars['String']['input']>;
  accountOfHat_lte?: InputMaybe<Scalars['String']['input']>;
  accountOfHat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  accountOfHat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  accountOfHat_contains?: InputMaybe<Scalars['String']['input']>;
  accountOfHat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  accountOfHat_not_contains?: InputMaybe<Scalars['String']['input']>;
  accountOfHat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  accountOfHat_starts_with?: InputMaybe<Scalars['String']['input']>;
  accountOfHat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accountOfHat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  accountOfHat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accountOfHat_ends_with?: InputMaybe<Scalars['String']['input']>;
  accountOfHat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accountOfHat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  accountOfHat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accountOfHat_?: InputMaybe<Eth_HatAuthority_filter>;
  operations_?: InputMaybe<Eth_HatsAccount1ofNOperation_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsAccount1ofN_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsAccount1ofN_filter>>>;
};

export type Eth_HatsAccount1ofN_orderBy =
  | 'id'
  | 'accountOfHat'
  | 'accountOfHat__id'
  | 'accountOfHat__primaryHatsAccount1ofNAddress'
  | 'operations';

export type Eth_HatsAccountOperationType =
  | 'Call'
  | 'DelegateCall';

/** HatsElection Eligibility */
export type Eth_HatsElectionEligibility = Eth_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  ballotBoxHat: Eth_HatAuthority;
  adminHat: Array<Eth_HatAuthority>;
  terms: Array<Eth_ElectionTerm>;
  currentTerm?: Maybe<Eth_ElectionTerm>;
  events: Array<Eth_ElectionEvent>;
};


/** HatsElection Eligibility */
export type Eth_HatsElectionEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatAuthority_filter>;
};


/** HatsElection Eligibility */
export type Eth_HatsElectionEligibilitytermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_ElectionTerm_filter>;
};


/** HatsElection Eligibility */
export type Eth_HatsElectionEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_ElectionEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_ElectionEvent_filter>;
};

export type Eth_HatsElectionEligibility_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_gt?: InputMaybe<Scalars['String']['input']>;
  version_lt?: InputMaybe<Scalars['String']['input']>;
  version_gte?: InputMaybe<Scalars['String']['input']>;
  version_lte?: InputMaybe<Scalars['String']['input']>;
  version_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId?: InputMaybe<Scalars['String']['input']>;
  hatId_not?: InputMaybe<Scalars['String']['input']>;
  hatId_gt?: InputMaybe<Scalars['String']['input']>;
  hatId_lt?: InputMaybe<Scalars['String']['input']>;
  hatId_gte?: InputMaybe<Scalars['String']['input']>;
  hatId_lte?: InputMaybe<Scalars['String']['input']>;
  hatId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ballotBoxHat?: InputMaybe<Scalars['String']['input']>;
  ballotBoxHat_not?: InputMaybe<Scalars['String']['input']>;
  ballotBoxHat_gt?: InputMaybe<Scalars['String']['input']>;
  ballotBoxHat_lt?: InputMaybe<Scalars['String']['input']>;
  ballotBoxHat_gte?: InputMaybe<Scalars['String']['input']>;
  ballotBoxHat_lte?: InputMaybe<Scalars['String']['input']>;
  ballotBoxHat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ballotBoxHat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ballotBoxHat_contains?: InputMaybe<Scalars['String']['input']>;
  ballotBoxHat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ballotBoxHat_not_contains?: InputMaybe<Scalars['String']['input']>;
  ballotBoxHat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ballotBoxHat_starts_with?: InputMaybe<Scalars['String']['input']>;
  ballotBoxHat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ballotBoxHat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ballotBoxHat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ballotBoxHat_ends_with?: InputMaybe<Scalars['String']['input']>;
  ballotBoxHat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ballotBoxHat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ballotBoxHat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ballotBoxHat_?: InputMaybe<Eth_HatAuthority_filter>;
  adminHat?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_?: InputMaybe<Eth_HatAuthority_filter>;
  terms_?: InputMaybe<Eth_ElectionTerm_filter>;
  currentTerm?: InputMaybe<Scalars['String']['input']>;
  currentTerm_not?: InputMaybe<Scalars['String']['input']>;
  currentTerm_gt?: InputMaybe<Scalars['String']['input']>;
  currentTerm_lt?: InputMaybe<Scalars['String']['input']>;
  currentTerm_gte?: InputMaybe<Scalars['String']['input']>;
  currentTerm_lte?: InputMaybe<Scalars['String']['input']>;
  currentTerm_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currentTerm_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currentTerm_contains?: InputMaybe<Scalars['String']['input']>;
  currentTerm_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currentTerm_not_contains?: InputMaybe<Scalars['String']['input']>;
  currentTerm_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currentTerm_starts_with?: InputMaybe<Scalars['String']['input']>;
  currentTerm_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentTerm_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  currentTerm_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentTerm_ends_with?: InputMaybe<Scalars['String']['input']>;
  currentTerm_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentTerm_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  currentTerm_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentTerm_?: InputMaybe<Eth_ElectionTerm_filter>;
  events_?: InputMaybe<Eth_ElectionEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsElectionEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsElectionEligibility_filter>>>;
};

export type Eth_HatsElectionEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'ballotBoxHat'
  | 'ballotBoxHat__id'
  | 'ballotBoxHat__primaryHatsAccount1ofNAddress'
  | 'adminHat'
  | 'terms'
  | 'currentTerm'
  | 'currentTerm__id'
  | 'currentTerm__termStartedAt'
  | 'currentTerm__termEnd'
  | 'currentTerm__electionCompletedAt'
  | 'events';

/**  Chains  */
export type Eth_HatsEligibilitiesChain = Eth_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  rulesets: Array<Eth_EligibilitiesRuleset>;
  moduleAddresses: Array<Scalars['String']['output']>;
  numRulesets: Scalars['BigInt']['output'];
};


/**  Chains  */
export type Eth_HatsEligibilitiesChainrulesetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_EligibilitiesRuleset_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_EligibilitiesRuleset_filter>;
};

export type Eth_HatsEligibilitiesChain_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_gt?: InputMaybe<Scalars['String']['input']>;
  version_lt?: InputMaybe<Scalars['String']['input']>;
  version_gte?: InputMaybe<Scalars['String']['input']>;
  version_lte?: InputMaybe<Scalars['String']['input']>;
  version_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId?: InputMaybe<Scalars['String']['input']>;
  hatId_not?: InputMaybe<Scalars['String']['input']>;
  hatId_gt?: InputMaybe<Scalars['String']['input']>;
  hatId_lt?: InputMaybe<Scalars['String']['input']>;
  hatId_gte?: InputMaybe<Scalars['String']['input']>;
  hatId_lte?: InputMaybe<Scalars['String']['input']>;
  hatId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  rulesets_?: InputMaybe<Eth_EligibilitiesRuleset_filter>;
  moduleAddresses?: InputMaybe<Array<Scalars['String']['input']>>;
  moduleAddresses_not?: InputMaybe<Array<Scalars['String']['input']>>;
  moduleAddresses_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  moduleAddresses_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  moduleAddresses_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  moduleAddresses_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  numRulesets?: InputMaybe<Scalars['BigInt']['input']>;
  numRulesets_not?: InputMaybe<Scalars['BigInt']['input']>;
  numRulesets_gt?: InputMaybe<Scalars['BigInt']['input']>;
  numRulesets_lt?: InputMaybe<Scalars['BigInt']['input']>;
  numRulesets_gte?: InputMaybe<Scalars['BigInt']['input']>;
  numRulesets_lte?: InputMaybe<Scalars['BigInt']['input']>;
  numRulesets_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  numRulesets_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsEligibilitiesChain_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsEligibilitiesChain_filter>>>;
};

export type Eth_HatsEligibilitiesChain_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'rulesets'
  | 'moduleAddresses'
  | 'numRulesets';

/** Farcaster Delegator */
export type Eth_HatsFarcasterDelegator = {
  id: Scalars['ID']['output'];
  caster: Eth_HatAuthority;
  owner: Eth_HatAuthority;
};

export type Eth_HatsFarcasterDelegator_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  caster?: InputMaybe<Scalars['String']['input']>;
  caster_not?: InputMaybe<Scalars['String']['input']>;
  caster_gt?: InputMaybe<Scalars['String']['input']>;
  caster_lt?: InputMaybe<Scalars['String']['input']>;
  caster_gte?: InputMaybe<Scalars['String']['input']>;
  caster_lte?: InputMaybe<Scalars['String']['input']>;
  caster_in?: InputMaybe<Array<Scalars['String']['input']>>;
  caster_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  caster_contains?: InputMaybe<Scalars['String']['input']>;
  caster_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  caster_not_contains?: InputMaybe<Scalars['String']['input']>;
  caster_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  caster_starts_with?: InputMaybe<Scalars['String']['input']>;
  caster_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  caster_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  caster_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  caster_ends_with?: InputMaybe<Scalars['String']['input']>;
  caster_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  caster_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  caster_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  caster_?: InputMaybe<Eth_HatAuthority_filter>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<Eth_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsFarcasterDelegator_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsFarcasterDelegator_filter>>>;
};

export type Eth_HatsFarcasterDelegator_orderBy =
  | 'id'
  | 'caster'
  | 'caster__id'
  | 'caster__primaryHatsAccount1ofNAddress'
  | 'owner'
  | 'owner__id'
  | 'owner__primaryHatsAccount1ofNAddress';

/**  *** Modules ***  */
export type Eth_HatsModule = {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
};

export type Eth_HatsModuleEvent = {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
};

export type Eth_HatsModuleEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsModuleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsModuleEvent_filter>>>;
};

export type Eth_HatsModuleEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID';

export type Eth_HatsModule_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_gt?: InputMaybe<Scalars['String']['input']>;
  version_lt?: InputMaybe<Scalars['String']['input']>;
  version_gte?: InputMaybe<Scalars['String']['input']>;
  version_lte?: InputMaybe<Scalars['String']['input']>;
  version_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId?: InputMaybe<Scalars['String']['input']>;
  hatId_not?: InputMaybe<Scalars['String']['input']>;
  hatId_gt?: InputMaybe<Scalars['String']['input']>;
  hatId_lt?: InputMaybe<Scalars['String']['input']>;
  hatId_gte?: InputMaybe<Scalars['String']['input']>;
  hatId_lte?: InputMaybe<Scalars['String']['input']>;
  hatId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsModule_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsModule_filter>>>;
};

export type Eth_HatsModule_orderBy =
  | 'id'
  | 'version'
  | 'hatId';

/** Hats Signer Gate */
export type Eth_HatsSignerGate = {
  id: Scalars['ID']['output'];
  type: Eth_HatsSignerGateType;
  ownerHat: Eth_HatAuthority;
  signerHats: Array<Eth_HatAuthority>;
  safe: Scalars['String']['output'];
  minThreshold: Scalars['BigInt']['output'];
  targetThreshold: Scalars['BigInt']['output'];
  maxSigners: Scalars['BigInt']['output'];
};


/** Hats Signer Gate */
export type Eth_HatsSignerGatesignerHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatAuthority_filter>;
};

export type Eth_HatsSignerGateType =
  | 'Single'
  | 'Multi';

/** HSG v2 */
export type Eth_HatsSignerGateV2 = {
  id: Scalars['ID']['output'];
  ownerHat: Eth_HatAuthority;
  signerHats: Array<Eth_HatAuthority>;
  safe: Scalars['String']['output'];
  locked: Scalars['Boolean']['output'];
  claimableFor: Scalars['Boolean']['output'];
  implementation: Scalars['String']['output'];
  enabledDelegatecallTargets: Array<Scalars['String']['output']>;
  thresholdType: Eth_HatsSignerGateV2ThresholdType;
  minThreshold: Scalars['BigInt']['output'];
  targetThreshold: Scalars['BigInt']['output'];
  guard: Scalars['String']['output'];
  modules: Array<Scalars['String']['output']>;
  events: Array<Eth_HatsSignerGateV2Event>;
};


/** HSG v2 */
export type Eth_HatsSignerGateV2signerHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatAuthority_filter>;
};


/** HSG v2 */
export type Eth_HatsSignerGateV2eventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2Event_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2Event_filter>;
};

export type Eth_HatsSignerGateV2Event = {
  id: Scalars['ID']['output'];
  hsg: Eth_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
};

export type Eth_HatsSignerGateV2Event_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  hsg?: InputMaybe<Scalars['String']['input']>;
  hsg_not?: InputMaybe<Scalars['String']['input']>;
  hsg_gt?: InputMaybe<Scalars['String']['input']>;
  hsg_lt?: InputMaybe<Scalars['String']['input']>;
  hsg_gte?: InputMaybe<Scalars['String']['input']>;
  hsg_lte?: InputMaybe<Scalars['String']['input']>;
  hsg_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hsg_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hsg_contains?: InputMaybe<Scalars['String']['input']>;
  hsg_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_contains?: InputMaybe<Scalars['String']['input']>;
  hsg_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_starts_with?: InputMaybe<Scalars['String']['input']>;
  hsg_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hsg_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_ends_with?: InputMaybe<Scalars['String']['input']>;
  hsg_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hsg_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_?: InputMaybe<Eth_HatsSignerGateV2_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2Event_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2Event_filter>>>;
};

export type Eth_HatsSignerGateV2Event_orderBy =
  | 'id'
  | 'hsg'
  | 'hsg__id'
  | 'hsg__safe'
  | 'hsg__locked'
  | 'hsg__claimableFor'
  | 'hsg__implementation'
  | 'hsg__thresholdType'
  | 'hsg__minThreshold'
  | 'hsg__targetThreshold'
  | 'hsg__guard'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID';

export type Eth_HatsSignerGateV2ThresholdType =
  | 'ABSOLUTE'
  | 'PROPORTIONAL';

export type Eth_HatsSignerGateV2_ChangedGuardEvent = Eth_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Eth_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  guard: Scalars['String']['output'];
};

export type Eth_HatsSignerGateV2_ChangedGuardEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  hsg?: InputMaybe<Scalars['String']['input']>;
  hsg_not?: InputMaybe<Scalars['String']['input']>;
  hsg_gt?: InputMaybe<Scalars['String']['input']>;
  hsg_lt?: InputMaybe<Scalars['String']['input']>;
  hsg_gte?: InputMaybe<Scalars['String']['input']>;
  hsg_lte?: InputMaybe<Scalars['String']['input']>;
  hsg_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hsg_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hsg_contains?: InputMaybe<Scalars['String']['input']>;
  hsg_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_contains?: InputMaybe<Scalars['String']['input']>;
  hsg_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_starts_with?: InputMaybe<Scalars['String']['input']>;
  hsg_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hsg_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_ends_with?: InputMaybe<Scalars['String']['input']>;
  hsg_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hsg_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_?: InputMaybe<Eth_HatsSignerGateV2_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  guard?: InputMaybe<Scalars['String']['input']>;
  guard_not?: InputMaybe<Scalars['String']['input']>;
  guard_gt?: InputMaybe<Scalars['String']['input']>;
  guard_lt?: InputMaybe<Scalars['String']['input']>;
  guard_gte?: InputMaybe<Scalars['String']['input']>;
  guard_lte?: InputMaybe<Scalars['String']['input']>;
  guard_in?: InputMaybe<Array<Scalars['String']['input']>>;
  guard_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  guard_contains?: InputMaybe<Scalars['String']['input']>;
  guard_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  guard_not_contains?: InputMaybe<Scalars['String']['input']>;
  guard_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  guard_starts_with?: InputMaybe<Scalars['String']['input']>;
  guard_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  guard_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  guard_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  guard_ends_with?: InputMaybe<Scalars['String']['input']>;
  guard_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  guard_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  guard_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2_ChangedGuardEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2_ChangedGuardEvent_filter>>>;
};

export type Eth_HatsSignerGateV2_ChangedGuardEvent_orderBy =
  | 'id'
  | 'hsg'
  | 'hsg__id'
  | 'hsg__safe'
  | 'hsg__locked'
  | 'hsg__claimableFor'
  | 'hsg__implementation'
  | 'hsg__thresholdType'
  | 'hsg__minThreshold'
  | 'hsg__targetThreshold'
  | 'hsg__guard'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'guard';

export type Eth_HatsSignerGateV2_ClaimableForSetEvent = Eth_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Eth_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  claimableFor: Scalars['Boolean']['output'];
};

export type Eth_HatsSignerGateV2_ClaimableForSetEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  hsg?: InputMaybe<Scalars['String']['input']>;
  hsg_not?: InputMaybe<Scalars['String']['input']>;
  hsg_gt?: InputMaybe<Scalars['String']['input']>;
  hsg_lt?: InputMaybe<Scalars['String']['input']>;
  hsg_gte?: InputMaybe<Scalars['String']['input']>;
  hsg_lte?: InputMaybe<Scalars['String']['input']>;
  hsg_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hsg_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hsg_contains?: InputMaybe<Scalars['String']['input']>;
  hsg_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_contains?: InputMaybe<Scalars['String']['input']>;
  hsg_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_starts_with?: InputMaybe<Scalars['String']['input']>;
  hsg_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hsg_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_ends_with?: InputMaybe<Scalars['String']['input']>;
  hsg_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hsg_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_?: InputMaybe<Eth_HatsSignerGateV2_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  claimableFor?: InputMaybe<Scalars['Boolean']['input']>;
  claimableFor_not?: InputMaybe<Scalars['Boolean']['input']>;
  claimableFor_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  claimableFor_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2_ClaimableForSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2_ClaimableForSetEvent_filter>>>;
};

export type Eth_HatsSignerGateV2_ClaimableForSetEvent_orderBy =
  | 'id'
  | 'hsg'
  | 'hsg__id'
  | 'hsg__safe'
  | 'hsg__locked'
  | 'hsg__claimableFor'
  | 'hsg__implementation'
  | 'hsg__thresholdType'
  | 'hsg__minThreshold'
  | 'hsg__targetThreshold'
  | 'hsg__guard'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'claimableFor';

export type Eth_HatsSignerGateV2_DelegatecallTargetEnabledEvent = Eth_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Eth_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  target: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
};

export type Eth_HatsSignerGateV2_DelegatecallTargetEnabledEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  hsg?: InputMaybe<Scalars['String']['input']>;
  hsg_not?: InputMaybe<Scalars['String']['input']>;
  hsg_gt?: InputMaybe<Scalars['String']['input']>;
  hsg_lt?: InputMaybe<Scalars['String']['input']>;
  hsg_gte?: InputMaybe<Scalars['String']['input']>;
  hsg_lte?: InputMaybe<Scalars['String']['input']>;
  hsg_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hsg_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hsg_contains?: InputMaybe<Scalars['String']['input']>;
  hsg_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_contains?: InputMaybe<Scalars['String']['input']>;
  hsg_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_starts_with?: InputMaybe<Scalars['String']['input']>;
  hsg_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hsg_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_ends_with?: InputMaybe<Scalars['String']['input']>;
  hsg_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hsg_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_?: InputMaybe<Eth_HatsSignerGateV2_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  target?: InputMaybe<Scalars['String']['input']>;
  target_not?: InputMaybe<Scalars['String']['input']>;
  target_gt?: InputMaybe<Scalars['String']['input']>;
  target_lt?: InputMaybe<Scalars['String']['input']>;
  target_gte?: InputMaybe<Scalars['String']['input']>;
  target_lte?: InputMaybe<Scalars['String']['input']>;
  target_in?: InputMaybe<Array<Scalars['String']['input']>>;
  target_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  target_contains?: InputMaybe<Scalars['String']['input']>;
  target_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  target_not_contains?: InputMaybe<Scalars['String']['input']>;
  target_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  target_starts_with?: InputMaybe<Scalars['String']['input']>;
  target_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  target_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target_ends_with?: InputMaybe<Scalars['String']['input']>;
  target_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  target_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  enabled_not?: InputMaybe<Scalars['Boolean']['input']>;
  enabled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  enabled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2_DelegatecallTargetEnabledEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2_DelegatecallTargetEnabledEvent_filter>>>;
};

export type Eth_HatsSignerGateV2_DelegatecallTargetEnabledEvent_orderBy =
  | 'id'
  | 'hsg'
  | 'hsg__id'
  | 'hsg__safe'
  | 'hsg__locked'
  | 'hsg__claimableFor'
  | 'hsg__implementation'
  | 'hsg__thresholdType'
  | 'hsg__minThreshold'
  | 'hsg__targetThreshold'
  | 'hsg__guard'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'target'
  | 'enabled';

export type Eth_HatsSignerGateV2_DetachedEvent = Eth_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Eth_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
};

export type Eth_HatsSignerGateV2_DetachedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  hsg?: InputMaybe<Scalars['String']['input']>;
  hsg_not?: InputMaybe<Scalars['String']['input']>;
  hsg_gt?: InputMaybe<Scalars['String']['input']>;
  hsg_lt?: InputMaybe<Scalars['String']['input']>;
  hsg_gte?: InputMaybe<Scalars['String']['input']>;
  hsg_lte?: InputMaybe<Scalars['String']['input']>;
  hsg_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hsg_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hsg_contains?: InputMaybe<Scalars['String']['input']>;
  hsg_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_contains?: InputMaybe<Scalars['String']['input']>;
  hsg_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_starts_with?: InputMaybe<Scalars['String']['input']>;
  hsg_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hsg_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_ends_with?: InputMaybe<Scalars['String']['input']>;
  hsg_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hsg_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_?: InputMaybe<Eth_HatsSignerGateV2_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2_DetachedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2_DetachedEvent_filter>>>;
};

export type Eth_HatsSignerGateV2_DetachedEvent_orderBy =
  | 'id'
  | 'hsg'
  | 'hsg__id'
  | 'hsg__safe'
  | 'hsg__locked'
  | 'hsg__claimableFor'
  | 'hsg__implementation'
  | 'hsg__thresholdType'
  | 'hsg__minThreshold'
  | 'hsg__targetThreshold'
  | 'hsg__guard'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID';

export type Eth_HatsSignerGateV2_DisabledModuleEvent = Eth_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Eth_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  module: Scalars['String']['output'];
};

export type Eth_HatsSignerGateV2_DisabledModuleEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  hsg?: InputMaybe<Scalars['String']['input']>;
  hsg_not?: InputMaybe<Scalars['String']['input']>;
  hsg_gt?: InputMaybe<Scalars['String']['input']>;
  hsg_lt?: InputMaybe<Scalars['String']['input']>;
  hsg_gte?: InputMaybe<Scalars['String']['input']>;
  hsg_lte?: InputMaybe<Scalars['String']['input']>;
  hsg_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hsg_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hsg_contains?: InputMaybe<Scalars['String']['input']>;
  hsg_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_contains?: InputMaybe<Scalars['String']['input']>;
  hsg_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_starts_with?: InputMaybe<Scalars['String']['input']>;
  hsg_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hsg_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_ends_with?: InputMaybe<Scalars['String']['input']>;
  hsg_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hsg_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_?: InputMaybe<Eth_HatsSignerGateV2_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2_DisabledModuleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2_DisabledModuleEvent_filter>>>;
};

export type Eth_HatsSignerGateV2_DisabledModuleEvent_orderBy =
  | 'id'
  | 'hsg'
  | 'hsg__id'
  | 'hsg__safe'
  | 'hsg__locked'
  | 'hsg__claimableFor'
  | 'hsg__implementation'
  | 'hsg__thresholdType'
  | 'hsg__minThreshold'
  | 'hsg__targetThreshold'
  | 'hsg__guard'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'module';

export type Eth_HatsSignerGateV2_EnabledModuleEvent = Eth_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Eth_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  module: Scalars['String']['output'];
};

export type Eth_HatsSignerGateV2_EnabledModuleEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  hsg?: InputMaybe<Scalars['String']['input']>;
  hsg_not?: InputMaybe<Scalars['String']['input']>;
  hsg_gt?: InputMaybe<Scalars['String']['input']>;
  hsg_lt?: InputMaybe<Scalars['String']['input']>;
  hsg_gte?: InputMaybe<Scalars['String']['input']>;
  hsg_lte?: InputMaybe<Scalars['String']['input']>;
  hsg_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hsg_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hsg_contains?: InputMaybe<Scalars['String']['input']>;
  hsg_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_contains?: InputMaybe<Scalars['String']['input']>;
  hsg_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_starts_with?: InputMaybe<Scalars['String']['input']>;
  hsg_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hsg_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_ends_with?: InputMaybe<Scalars['String']['input']>;
  hsg_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hsg_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_?: InputMaybe<Eth_HatsSignerGateV2_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2_EnabledModuleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2_EnabledModuleEvent_filter>>>;
};

export type Eth_HatsSignerGateV2_EnabledModuleEvent_orderBy =
  | 'id'
  | 'hsg'
  | 'hsg__id'
  | 'hsg__safe'
  | 'hsg__locked'
  | 'hsg__claimableFor'
  | 'hsg__implementation'
  | 'hsg__thresholdType'
  | 'hsg__minThreshold'
  | 'hsg__targetThreshold'
  | 'hsg__guard'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'module';

export type Eth_HatsSignerGateV2_HSGLockedEvent = Eth_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Eth_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
};

export type Eth_HatsSignerGateV2_HSGLockedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  hsg?: InputMaybe<Scalars['String']['input']>;
  hsg_not?: InputMaybe<Scalars['String']['input']>;
  hsg_gt?: InputMaybe<Scalars['String']['input']>;
  hsg_lt?: InputMaybe<Scalars['String']['input']>;
  hsg_gte?: InputMaybe<Scalars['String']['input']>;
  hsg_lte?: InputMaybe<Scalars['String']['input']>;
  hsg_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hsg_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hsg_contains?: InputMaybe<Scalars['String']['input']>;
  hsg_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_contains?: InputMaybe<Scalars['String']['input']>;
  hsg_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_starts_with?: InputMaybe<Scalars['String']['input']>;
  hsg_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hsg_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_ends_with?: InputMaybe<Scalars['String']['input']>;
  hsg_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hsg_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_?: InputMaybe<Eth_HatsSignerGateV2_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2_HSGLockedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2_HSGLockedEvent_filter>>>;
};

export type Eth_HatsSignerGateV2_HSGLockedEvent_orderBy =
  | 'id'
  | 'hsg'
  | 'hsg__id'
  | 'hsg__safe'
  | 'hsg__locked'
  | 'hsg__claimableFor'
  | 'hsg__implementation'
  | 'hsg__thresholdType'
  | 'hsg__minThreshold'
  | 'hsg__targetThreshold'
  | 'hsg__guard'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID';

export type Eth_HatsSignerGateV2_MigratedEvent = Eth_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Eth_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  newHsg: Scalars['String']['output'];
};

export type Eth_HatsSignerGateV2_MigratedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  hsg?: InputMaybe<Scalars['String']['input']>;
  hsg_not?: InputMaybe<Scalars['String']['input']>;
  hsg_gt?: InputMaybe<Scalars['String']['input']>;
  hsg_lt?: InputMaybe<Scalars['String']['input']>;
  hsg_gte?: InputMaybe<Scalars['String']['input']>;
  hsg_lte?: InputMaybe<Scalars['String']['input']>;
  hsg_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hsg_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hsg_contains?: InputMaybe<Scalars['String']['input']>;
  hsg_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_contains?: InputMaybe<Scalars['String']['input']>;
  hsg_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_starts_with?: InputMaybe<Scalars['String']['input']>;
  hsg_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hsg_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_ends_with?: InputMaybe<Scalars['String']['input']>;
  hsg_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hsg_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_?: InputMaybe<Eth_HatsSignerGateV2_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  newHsg?: InputMaybe<Scalars['String']['input']>;
  newHsg_not?: InputMaybe<Scalars['String']['input']>;
  newHsg_gt?: InputMaybe<Scalars['String']['input']>;
  newHsg_lt?: InputMaybe<Scalars['String']['input']>;
  newHsg_gte?: InputMaybe<Scalars['String']['input']>;
  newHsg_lte?: InputMaybe<Scalars['String']['input']>;
  newHsg_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newHsg_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newHsg_contains?: InputMaybe<Scalars['String']['input']>;
  newHsg_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newHsg_not_contains?: InputMaybe<Scalars['String']['input']>;
  newHsg_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newHsg_starts_with?: InputMaybe<Scalars['String']['input']>;
  newHsg_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newHsg_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  newHsg_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newHsg_ends_with?: InputMaybe<Scalars['String']['input']>;
  newHsg_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newHsg_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  newHsg_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2_MigratedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2_MigratedEvent_filter>>>;
};

export type Eth_HatsSignerGateV2_MigratedEvent_orderBy =
  | 'id'
  | 'hsg'
  | 'hsg__id'
  | 'hsg__safe'
  | 'hsg__locked'
  | 'hsg__claimableFor'
  | 'hsg__implementation'
  | 'hsg__thresholdType'
  | 'hsg__minThreshold'
  | 'hsg__targetThreshold'
  | 'hsg__guard'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'newHsg';

export type Eth_HatsSignerGateV2_OwnerHatSetEvent = Eth_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Eth_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  ownerHat: Scalars['String']['output'];
};

export type Eth_HatsSignerGateV2_OwnerHatSetEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  hsg?: InputMaybe<Scalars['String']['input']>;
  hsg_not?: InputMaybe<Scalars['String']['input']>;
  hsg_gt?: InputMaybe<Scalars['String']['input']>;
  hsg_lt?: InputMaybe<Scalars['String']['input']>;
  hsg_gte?: InputMaybe<Scalars['String']['input']>;
  hsg_lte?: InputMaybe<Scalars['String']['input']>;
  hsg_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hsg_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hsg_contains?: InputMaybe<Scalars['String']['input']>;
  hsg_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_contains?: InputMaybe<Scalars['String']['input']>;
  hsg_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_starts_with?: InputMaybe<Scalars['String']['input']>;
  hsg_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hsg_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_ends_with?: InputMaybe<Scalars['String']['input']>;
  hsg_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hsg_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_?: InputMaybe<Eth_HatsSignerGateV2_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  ownerHat?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not?: InputMaybe<Scalars['String']['input']>;
  ownerHat_gt?: InputMaybe<Scalars['String']['input']>;
  ownerHat_lt?: InputMaybe<Scalars['String']['input']>;
  ownerHat_gte?: InputMaybe<Scalars['String']['input']>;
  ownerHat_lte?: InputMaybe<Scalars['String']['input']>;
  ownerHat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ownerHat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ownerHat_contains?: InputMaybe<Scalars['String']['input']>;
  ownerHat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_contains?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_starts_with?: InputMaybe<Scalars['String']['input']>;
  ownerHat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_ends_with?: InputMaybe<Scalars['String']['input']>;
  ownerHat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2_OwnerHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2_OwnerHatSetEvent_filter>>>;
};

export type Eth_HatsSignerGateV2_OwnerHatSetEvent_orderBy =
  | 'id'
  | 'hsg'
  | 'hsg__id'
  | 'hsg__safe'
  | 'hsg__locked'
  | 'hsg__claimableFor'
  | 'hsg__implementation'
  | 'hsg__thresholdType'
  | 'hsg__minThreshold'
  | 'hsg__targetThreshold'
  | 'hsg__guard'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'ownerHat';

export type Eth_HatsSignerGateV2_RegisteredEvent = Eth_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Eth_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  hatId: Scalars['String']['output'];
  signer: Scalars['String']['output'];
};

export type Eth_HatsSignerGateV2_RegisteredEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  hsg?: InputMaybe<Scalars['String']['input']>;
  hsg_not?: InputMaybe<Scalars['String']['input']>;
  hsg_gt?: InputMaybe<Scalars['String']['input']>;
  hsg_lt?: InputMaybe<Scalars['String']['input']>;
  hsg_gte?: InputMaybe<Scalars['String']['input']>;
  hsg_lte?: InputMaybe<Scalars['String']['input']>;
  hsg_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hsg_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hsg_contains?: InputMaybe<Scalars['String']['input']>;
  hsg_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_contains?: InputMaybe<Scalars['String']['input']>;
  hsg_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_starts_with?: InputMaybe<Scalars['String']['input']>;
  hsg_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hsg_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_ends_with?: InputMaybe<Scalars['String']['input']>;
  hsg_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hsg_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_?: InputMaybe<Eth_HatsSignerGateV2_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  hatId?: InputMaybe<Scalars['String']['input']>;
  hatId_not?: InputMaybe<Scalars['String']['input']>;
  hatId_gt?: InputMaybe<Scalars['String']['input']>;
  hatId_lt?: InputMaybe<Scalars['String']['input']>;
  hatId_gte?: InputMaybe<Scalars['String']['input']>;
  hatId_lte?: InputMaybe<Scalars['String']['input']>;
  hatId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer?: InputMaybe<Scalars['String']['input']>;
  signer_not?: InputMaybe<Scalars['String']['input']>;
  signer_gt?: InputMaybe<Scalars['String']['input']>;
  signer_lt?: InputMaybe<Scalars['String']['input']>;
  signer_gte?: InputMaybe<Scalars['String']['input']>;
  signer_lte?: InputMaybe<Scalars['String']['input']>;
  signer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  signer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  signer_contains?: InputMaybe<Scalars['String']['input']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_not_contains?: InputMaybe<Scalars['String']['input']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_starts_with?: InputMaybe<Scalars['String']['input']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_ends_with?: InputMaybe<Scalars['String']['input']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2_RegisteredEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2_RegisteredEvent_filter>>>;
};

export type Eth_HatsSignerGateV2_RegisteredEvent_orderBy =
  | 'id'
  | 'hsg'
  | 'hsg__id'
  | 'hsg__safe'
  | 'hsg__locked'
  | 'hsg__claimableFor'
  | 'hsg__implementation'
  | 'hsg__thresholdType'
  | 'hsg__minThreshold'
  | 'hsg__targetThreshold'
  | 'hsg__guard'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'hatId'
  | 'signer';

export type Eth_HatsSignerGateV2_SignerHatsAddedEvent = Eth_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Eth_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  newSignerHats: Array<Scalars['String']['output']>;
};

export type Eth_HatsSignerGateV2_SignerHatsAddedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  hsg?: InputMaybe<Scalars['String']['input']>;
  hsg_not?: InputMaybe<Scalars['String']['input']>;
  hsg_gt?: InputMaybe<Scalars['String']['input']>;
  hsg_lt?: InputMaybe<Scalars['String']['input']>;
  hsg_gte?: InputMaybe<Scalars['String']['input']>;
  hsg_lte?: InputMaybe<Scalars['String']['input']>;
  hsg_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hsg_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hsg_contains?: InputMaybe<Scalars['String']['input']>;
  hsg_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_contains?: InputMaybe<Scalars['String']['input']>;
  hsg_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_starts_with?: InputMaybe<Scalars['String']['input']>;
  hsg_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hsg_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_ends_with?: InputMaybe<Scalars['String']['input']>;
  hsg_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hsg_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_?: InputMaybe<Eth_HatsSignerGateV2_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  newSignerHats?: InputMaybe<Array<Scalars['String']['input']>>;
  newSignerHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  newSignerHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  newSignerHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  newSignerHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  newSignerHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2_SignerHatsAddedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2_SignerHatsAddedEvent_filter>>>;
};

export type Eth_HatsSignerGateV2_SignerHatsAddedEvent_orderBy =
  | 'id'
  | 'hsg'
  | 'hsg__id'
  | 'hsg__safe'
  | 'hsg__locked'
  | 'hsg__claimableFor'
  | 'hsg__implementation'
  | 'hsg__thresholdType'
  | 'hsg__minThreshold'
  | 'hsg__targetThreshold'
  | 'hsg__guard'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'newSignerHats';

export type Eth_HatsSignerGateV2_ThresholdConfigSetEvent = Eth_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Eth_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  thresholdType: Eth_HatsSignerGateV2ThresholdType;
  minThreshold: Scalars['BigInt']['output'];
  targetThreshold: Scalars['BigInt']['output'];
};

export type Eth_HatsSignerGateV2_ThresholdConfigSetEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  hsg?: InputMaybe<Scalars['String']['input']>;
  hsg_not?: InputMaybe<Scalars['String']['input']>;
  hsg_gt?: InputMaybe<Scalars['String']['input']>;
  hsg_lt?: InputMaybe<Scalars['String']['input']>;
  hsg_gte?: InputMaybe<Scalars['String']['input']>;
  hsg_lte?: InputMaybe<Scalars['String']['input']>;
  hsg_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hsg_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hsg_contains?: InputMaybe<Scalars['String']['input']>;
  hsg_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_contains?: InputMaybe<Scalars['String']['input']>;
  hsg_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_starts_with?: InputMaybe<Scalars['String']['input']>;
  hsg_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hsg_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_ends_with?: InputMaybe<Scalars['String']['input']>;
  hsg_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hsg_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hsg_?: InputMaybe<Eth_HatsSignerGateV2_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  thresholdType?: InputMaybe<Eth_HatsSignerGateV2ThresholdType>;
  thresholdType_not?: InputMaybe<Eth_HatsSignerGateV2ThresholdType>;
  thresholdType_in?: InputMaybe<Array<Eth_HatsSignerGateV2ThresholdType>>;
  thresholdType_not_in?: InputMaybe<Array<Eth_HatsSignerGateV2ThresholdType>>;
  minThreshold?: InputMaybe<Scalars['BigInt']['input']>;
  minThreshold_not?: InputMaybe<Scalars['BigInt']['input']>;
  minThreshold_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minThreshold_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minThreshold_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minThreshold_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minThreshold_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  targetThreshold?: InputMaybe<Scalars['BigInt']['input']>;
  targetThreshold_not?: InputMaybe<Scalars['BigInt']['input']>;
  targetThreshold_gt?: InputMaybe<Scalars['BigInt']['input']>;
  targetThreshold_lt?: InputMaybe<Scalars['BigInt']['input']>;
  targetThreshold_gte?: InputMaybe<Scalars['BigInt']['input']>;
  targetThreshold_lte?: InputMaybe<Scalars['BigInt']['input']>;
  targetThreshold_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  targetThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2_ThresholdConfigSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2_ThresholdConfigSetEvent_filter>>>;
};

export type Eth_HatsSignerGateV2_ThresholdConfigSetEvent_orderBy =
  | 'id'
  | 'hsg'
  | 'hsg__id'
  | 'hsg__safe'
  | 'hsg__locked'
  | 'hsg__claimableFor'
  | 'hsg__implementation'
  | 'hsg__thresholdType'
  | 'hsg__minThreshold'
  | 'hsg__targetThreshold'
  | 'hsg__guard'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'thresholdType'
  | 'minThreshold'
  | 'targetThreshold';

export type Eth_HatsSignerGateV2_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  ownerHat?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not?: InputMaybe<Scalars['String']['input']>;
  ownerHat_gt?: InputMaybe<Scalars['String']['input']>;
  ownerHat_lt?: InputMaybe<Scalars['String']['input']>;
  ownerHat_gte?: InputMaybe<Scalars['String']['input']>;
  ownerHat_lte?: InputMaybe<Scalars['String']['input']>;
  ownerHat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ownerHat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ownerHat_contains?: InputMaybe<Scalars['String']['input']>;
  ownerHat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_contains?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_starts_with?: InputMaybe<Scalars['String']['input']>;
  ownerHat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_ends_with?: InputMaybe<Scalars['String']['input']>;
  ownerHat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_?: InputMaybe<Eth_HatAuthority_filter>;
  signerHats?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_?: InputMaybe<Eth_HatAuthority_filter>;
  safe?: InputMaybe<Scalars['String']['input']>;
  safe_not?: InputMaybe<Scalars['String']['input']>;
  safe_gt?: InputMaybe<Scalars['String']['input']>;
  safe_lt?: InputMaybe<Scalars['String']['input']>;
  safe_gte?: InputMaybe<Scalars['String']['input']>;
  safe_lte?: InputMaybe<Scalars['String']['input']>;
  safe_in?: InputMaybe<Array<Scalars['String']['input']>>;
  safe_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  safe_contains?: InputMaybe<Scalars['String']['input']>;
  safe_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  safe_not_contains?: InputMaybe<Scalars['String']['input']>;
  safe_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  safe_starts_with?: InputMaybe<Scalars['String']['input']>;
  safe_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  safe_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  safe_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  safe_ends_with?: InputMaybe<Scalars['String']['input']>;
  safe_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  safe_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  safe_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  locked_not?: InputMaybe<Scalars['Boolean']['input']>;
  locked_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  locked_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  claimableFor?: InputMaybe<Scalars['Boolean']['input']>;
  claimableFor_not?: InputMaybe<Scalars['Boolean']['input']>;
  claimableFor_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  claimableFor_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  implementation?: InputMaybe<Scalars['String']['input']>;
  implementation_not?: InputMaybe<Scalars['String']['input']>;
  implementation_gt?: InputMaybe<Scalars['String']['input']>;
  implementation_lt?: InputMaybe<Scalars['String']['input']>;
  implementation_gte?: InputMaybe<Scalars['String']['input']>;
  implementation_lte?: InputMaybe<Scalars['String']['input']>;
  implementation_in?: InputMaybe<Array<Scalars['String']['input']>>;
  implementation_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  implementation_contains?: InputMaybe<Scalars['String']['input']>;
  implementation_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  implementation_not_contains?: InputMaybe<Scalars['String']['input']>;
  implementation_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  implementation_starts_with?: InputMaybe<Scalars['String']['input']>;
  implementation_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  implementation_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  implementation_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  implementation_ends_with?: InputMaybe<Scalars['String']['input']>;
  implementation_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  implementation_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  implementation_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  enabledDelegatecallTargets?: InputMaybe<Array<Scalars['String']['input']>>;
  enabledDelegatecallTargets_not?: InputMaybe<Array<Scalars['String']['input']>>;
  enabledDelegatecallTargets_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  enabledDelegatecallTargets_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  enabledDelegatecallTargets_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  enabledDelegatecallTargets_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  thresholdType?: InputMaybe<Eth_HatsSignerGateV2ThresholdType>;
  thresholdType_not?: InputMaybe<Eth_HatsSignerGateV2ThresholdType>;
  thresholdType_in?: InputMaybe<Array<Eth_HatsSignerGateV2ThresholdType>>;
  thresholdType_not_in?: InputMaybe<Array<Eth_HatsSignerGateV2ThresholdType>>;
  minThreshold?: InputMaybe<Scalars['BigInt']['input']>;
  minThreshold_not?: InputMaybe<Scalars['BigInt']['input']>;
  minThreshold_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minThreshold_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minThreshold_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minThreshold_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minThreshold_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  targetThreshold?: InputMaybe<Scalars['BigInt']['input']>;
  targetThreshold_not?: InputMaybe<Scalars['BigInt']['input']>;
  targetThreshold_gt?: InputMaybe<Scalars['BigInt']['input']>;
  targetThreshold_lt?: InputMaybe<Scalars['BigInt']['input']>;
  targetThreshold_gte?: InputMaybe<Scalars['BigInt']['input']>;
  targetThreshold_lte?: InputMaybe<Scalars['BigInt']['input']>;
  targetThreshold_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  targetThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  guard?: InputMaybe<Scalars['String']['input']>;
  guard_not?: InputMaybe<Scalars['String']['input']>;
  guard_gt?: InputMaybe<Scalars['String']['input']>;
  guard_lt?: InputMaybe<Scalars['String']['input']>;
  guard_gte?: InputMaybe<Scalars['String']['input']>;
  guard_lte?: InputMaybe<Scalars['String']['input']>;
  guard_in?: InputMaybe<Array<Scalars['String']['input']>>;
  guard_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  guard_contains?: InputMaybe<Scalars['String']['input']>;
  guard_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  guard_not_contains?: InputMaybe<Scalars['String']['input']>;
  guard_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  guard_starts_with?: InputMaybe<Scalars['String']['input']>;
  guard_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  guard_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  guard_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  guard_ends_with?: InputMaybe<Scalars['String']['input']>;
  guard_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  guard_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  guard_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  modules?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_not?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  events_?: InputMaybe<Eth_HatsSignerGateV2Event_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGateV2_filter>>>;
};

export type Eth_HatsSignerGateV2_orderBy =
  | 'id'
  | 'ownerHat'
  | 'ownerHat__id'
  | 'ownerHat__primaryHatsAccount1ofNAddress'
  | 'signerHats'
  | 'safe'
  | 'locked'
  | 'claimableFor'
  | 'implementation'
  | 'enabledDelegatecallTargets'
  | 'thresholdType'
  | 'minThreshold'
  | 'targetThreshold'
  | 'guard'
  | 'modules'
  | 'events';

export type Eth_HatsSignerGate_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  type?: InputMaybe<Eth_HatsSignerGateType>;
  type_not?: InputMaybe<Eth_HatsSignerGateType>;
  type_in?: InputMaybe<Array<Eth_HatsSignerGateType>>;
  type_not_in?: InputMaybe<Array<Eth_HatsSignerGateType>>;
  ownerHat?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not?: InputMaybe<Scalars['String']['input']>;
  ownerHat_gt?: InputMaybe<Scalars['String']['input']>;
  ownerHat_lt?: InputMaybe<Scalars['String']['input']>;
  ownerHat_gte?: InputMaybe<Scalars['String']['input']>;
  ownerHat_lte?: InputMaybe<Scalars['String']['input']>;
  ownerHat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ownerHat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ownerHat_contains?: InputMaybe<Scalars['String']['input']>;
  ownerHat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_contains?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_starts_with?: InputMaybe<Scalars['String']['input']>;
  ownerHat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_ends_with?: InputMaybe<Scalars['String']['input']>;
  ownerHat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ownerHat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownerHat_?: InputMaybe<Eth_HatAuthority_filter>;
  signerHats?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_?: InputMaybe<Eth_HatAuthority_filter>;
  safe?: InputMaybe<Scalars['String']['input']>;
  safe_not?: InputMaybe<Scalars['String']['input']>;
  safe_gt?: InputMaybe<Scalars['String']['input']>;
  safe_lt?: InputMaybe<Scalars['String']['input']>;
  safe_gte?: InputMaybe<Scalars['String']['input']>;
  safe_lte?: InputMaybe<Scalars['String']['input']>;
  safe_in?: InputMaybe<Array<Scalars['String']['input']>>;
  safe_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  safe_contains?: InputMaybe<Scalars['String']['input']>;
  safe_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  safe_not_contains?: InputMaybe<Scalars['String']['input']>;
  safe_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  safe_starts_with?: InputMaybe<Scalars['String']['input']>;
  safe_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  safe_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  safe_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  safe_ends_with?: InputMaybe<Scalars['String']['input']>;
  safe_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  safe_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  safe_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  minThreshold?: InputMaybe<Scalars['BigInt']['input']>;
  minThreshold_not?: InputMaybe<Scalars['BigInt']['input']>;
  minThreshold_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minThreshold_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minThreshold_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minThreshold_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minThreshold_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  targetThreshold?: InputMaybe<Scalars['BigInt']['input']>;
  targetThreshold_not?: InputMaybe<Scalars['BigInt']['input']>;
  targetThreshold_gt?: InputMaybe<Scalars['BigInt']['input']>;
  targetThreshold_lt?: InputMaybe<Scalars['BigInt']['input']>;
  targetThreshold_gte?: InputMaybe<Scalars['BigInt']['input']>;
  targetThreshold_lte?: InputMaybe<Scalars['BigInt']['input']>;
  targetThreshold_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  targetThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxSigners?: InputMaybe<Scalars['BigInt']['input']>;
  maxSigners_not?: InputMaybe<Scalars['BigInt']['input']>;
  maxSigners_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxSigners_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxSigners_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxSigners_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxSigners_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxSigners_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGate_filter>>>;
};

export type Eth_HatsSignerGate_orderBy =
  | 'id'
  | 'type'
  | 'ownerHat'
  | 'ownerHat__id'
  | 'ownerHat__primaryHatsAccount1ofNAddress'
  | 'signerHats'
  | 'safe'
  | 'minThreshold'
  | 'targetThreshold'
  | 'maxSigners';

export type Eth_HatsStakingShaman = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  judgeHat: Eth_HatAuthority;
  baal: Scalars['String']['output'];
  stakingProxyImpl: Scalars['String']['output'];
  sharesToken: Scalars['String']['output'];
  minStake: Scalars['BigInt']['output'];
  coolDownBuffer: Scalars['BigInt']['output'];
  stakes: Array<Eth_ShamanStake>;
};


export type Eth_HatsStakingShamanstakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_ShamanStake_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_ShamanStake_filter>;
};

export type Eth_HatsStakingShaman_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  hatId?: InputMaybe<Scalars['String']['input']>;
  hatId_not?: InputMaybe<Scalars['String']['input']>;
  hatId_gt?: InputMaybe<Scalars['String']['input']>;
  hatId_lt?: InputMaybe<Scalars['String']['input']>;
  hatId_gte?: InputMaybe<Scalars['String']['input']>;
  hatId_lte?: InputMaybe<Scalars['String']['input']>;
  hatId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  judgeHat?: InputMaybe<Scalars['String']['input']>;
  judgeHat_not?: InputMaybe<Scalars['String']['input']>;
  judgeHat_gt?: InputMaybe<Scalars['String']['input']>;
  judgeHat_lt?: InputMaybe<Scalars['String']['input']>;
  judgeHat_gte?: InputMaybe<Scalars['String']['input']>;
  judgeHat_lte?: InputMaybe<Scalars['String']['input']>;
  judgeHat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  judgeHat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  judgeHat_contains?: InputMaybe<Scalars['String']['input']>;
  judgeHat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  judgeHat_not_contains?: InputMaybe<Scalars['String']['input']>;
  judgeHat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  judgeHat_starts_with?: InputMaybe<Scalars['String']['input']>;
  judgeHat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  judgeHat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  judgeHat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  judgeHat_ends_with?: InputMaybe<Scalars['String']['input']>;
  judgeHat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  judgeHat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  judgeHat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  judgeHat_?: InputMaybe<Eth_HatAuthority_filter>;
  baal?: InputMaybe<Scalars['String']['input']>;
  baal_not?: InputMaybe<Scalars['String']['input']>;
  baal_gt?: InputMaybe<Scalars['String']['input']>;
  baal_lt?: InputMaybe<Scalars['String']['input']>;
  baal_gte?: InputMaybe<Scalars['String']['input']>;
  baal_lte?: InputMaybe<Scalars['String']['input']>;
  baal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  baal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  baal_contains?: InputMaybe<Scalars['String']['input']>;
  baal_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  baal_not_contains?: InputMaybe<Scalars['String']['input']>;
  baal_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  baal_starts_with?: InputMaybe<Scalars['String']['input']>;
  baal_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  baal_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  baal_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  baal_ends_with?: InputMaybe<Scalars['String']['input']>;
  baal_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  baal_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  baal_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingProxyImpl?: InputMaybe<Scalars['String']['input']>;
  stakingProxyImpl_not?: InputMaybe<Scalars['String']['input']>;
  stakingProxyImpl_gt?: InputMaybe<Scalars['String']['input']>;
  stakingProxyImpl_lt?: InputMaybe<Scalars['String']['input']>;
  stakingProxyImpl_gte?: InputMaybe<Scalars['String']['input']>;
  stakingProxyImpl_lte?: InputMaybe<Scalars['String']['input']>;
  stakingProxyImpl_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stakingProxyImpl_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stakingProxyImpl_contains?: InputMaybe<Scalars['String']['input']>;
  stakingProxyImpl_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingProxyImpl_not_contains?: InputMaybe<Scalars['String']['input']>;
  stakingProxyImpl_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingProxyImpl_starts_with?: InputMaybe<Scalars['String']['input']>;
  stakingProxyImpl_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingProxyImpl_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  stakingProxyImpl_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingProxyImpl_ends_with?: InputMaybe<Scalars['String']['input']>;
  stakingProxyImpl_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingProxyImpl_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  stakingProxyImpl_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sharesToken?: InputMaybe<Scalars['String']['input']>;
  sharesToken_not?: InputMaybe<Scalars['String']['input']>;
  sharesToken_gt?: InputMaybe<Scalars['String']['input']>;
  sharesToken_lt?: InputMaybe<Scalars['String']['input']>;
  sharesToken_gte?: InputMaybe<Scalars['String']['input']>;
  sharesToken_lte?: InputMaybe<Scalars['String']['input']>;
  sharesToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sharesToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sharesToken_contains?: InputMaybe<Scalars['String']['input']>;
  sharesToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sharesToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  sharesToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sharesToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  sharesToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sharesToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sharesToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sharesToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  sharesToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sharesToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sharesToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  minStake?: InputMaybe<Scalars['BigInt']['input']>;
  minStake_not?: InputMaybe<Scalars['BigInt']['input']>;
  minStake_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minStake_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minStake_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minStake_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minStake_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minStake_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  coolDownBuffer?: InputMaybe<Scalars['BigInt']['input']>;
  coolDownBuffer_not?: InputMaybe<Scalars['BigInt']['input']>;
  coolDownBuffer_gt?: InputMaybe<Scalars['BigInt']['input']>;
  coolDownBuffer_lt?: InputMaybe<Scalars['BigInt']['input']>;
  coolDownBuffer_gte?: InputMaybe<Scalars['BigInt']['input']>;
  coolDownBuffer_lte?: InputMaybe<Scalars['BigInt']['input']>;
  coolDownBuffer_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  coolDownBuffer_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakes_?: InputMaybe<Eth_ShamanStake_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsStakingShaman_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsStakingShaman_filter>>>;
};

export type Eth_HatsStakingShaman_orderBy =
  | 'id'
  | 'hatId'
  | 'judgeHat'
  | 'judgeHat__id'
  | 'judgeHat__primaryHatsAccount1ofNAddress'
  | 'baal'
  | 'stakingProxyImpl'
  | 'sharesToken'
  | 'minStake'
  | 'coolDownBuffer'
  | 'stakes';

/**  Jokerace Eligibility  */
export type Eth_JokeRaceEligibility = Eth_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  adminHat: Array<Eth_HatAuthority>;
  currentTerm?: Maybe<Eth_JokeRaceEligibilityTerm>;
  nextTerm?: Maybe<Eth_JokeRaceEligibilityTerm>;
  allTerms: Array<Eth_JokeRaceEligibilityTerm>;
  events: Array<Eth_JokeRaceEvent>;
};


/**  Jokerace Eligibility  */
export type Eth_JokeRaceEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatAuthority_filter>;
};


/**  Jokerace Eligibility  */
export type Eth_JokeRaceEligibilityallTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_JokeRaceEligibilityTerm_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_JokeRaceEligibilityTerm_filter>;
};


/**  Jokerace Eligibility  */
export type Eth_JokeRaceEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_JokeRaceEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_JokeRaceEvent_filter>;
};

export type Eth_JokeRaceEligibilityTerm = {
  id: Scalars['ID']['output'];
  jokeRaceEligibility: Eth_JokeRaceEligibility;
  termStartedAt?: Maybe<Scalars['BigInt']['output']>;
  termEndsAt: Scalars['BigInt']['output'];
  topK: Scalars['BigInt']['output'];
  transitionPeriod: Scalars['BigInt']['output'];
  contest: Scalars['String']['output'];
  winners?: Maybe<Array<Scalars['String']['output']>>;
};

export type Eth_JokeRaceEligibilityTerm_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  jokeRaceEligibility?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibility_not?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibility_gt?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibility_lt?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibility_gte?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibility_lte?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibility_in?: InputMaybe<Array<Scalars['String']['input']>>;
  jokeRaceEligibility_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  jokeRaceEligibility_contains?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibility_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibility_not_contains?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibility_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibility_starts_with?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibility_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibility_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibility_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibility_ends_with?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibility_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibility_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibility_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibility_?: InputMaybe<Eth_JokeRaceEligibility_filter>;
  termStartedAt?: InputMaybe<Scalars['BigInt']['input']>;
  termStartedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  termStartedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  termStartedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  termStartedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  termStartedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  termStartedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  termStartedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  termEndsAt?: InputMaybe<Scalars['BigInt']['input']>;
  termEndsAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  termEndsAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  termEndsAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  termEndsAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  termEndsAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  termEndsAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  termEndsAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  topK?: InputMaybe<Scalars['BigInt']['input']>;
  topK_not?: InputMaybe<Scalars['BigInt']['input']>;
  topK_gt?: InputMaybe<Scalars['BigInt']['input']>;
  topK_lt?: InputMaybe<Scalars['BigInt']['input']>;
  topK_gte?: InputMaybe<Scalars['BigInt']['input']>;
  topK_lte?: InputMaybe<Scalars['BigInt']['input']>;
  topK_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  topK_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transitionPeriod?: InputMaybe<Scalars['BigInt']['input']>;
  transitionPeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
  transitionPeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
  transitionPeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
  transitionPeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
  transitionPeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
  transitionPeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transitionPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contest?: InputMaybe<Scalars['String']['input']>;
  contest_not?: InputMaybe<Scalars['String']['input']>;
  contest_gt?: InputMaybe<Scalars['String']['input']>;
  contest_lt?: InputMaybe<Scalars['String']['input']>;
  contest_gte?: InputMaybe<Scalars['String']['input']>;
  contest_lte?: InputMaybe<Scalars['String']['input']>;
  contest_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contest_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contest_contains?: InputMaybe<Scalars['String']['input']>;
  contest_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contest_not_contains?: InputMaybe<Scalars['String']['input']>;
  contest_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contest_starts_with?: InputMaybe<Scalars['String']['input']>;
  contest_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contest_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  contest_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contest_ends_with?: InputMaybe<Scalars['String']['input']>;
  contest_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contest_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  contest_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  winners?: InputMaybe<Array<Scalars['String']['input']>>;
  winners_not?: InputMaybe<Array<Scalars['String']['input']>>;
  winners_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  winners_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  winners_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  winners_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_JokeRaceEligibilityTerm_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_JokeRaceEligibilityTerm_filter>>>;
};

export type Eth_JokeRaceEligibilityTerm_orderBy =
  | 'id'
  | 'jokeRaceEligibility'
  | 'jokeRaceEligibility__id'
  | 'jokeRaceEligibility__version'
  | 'jokeRaceEligibility__hatId'
  | 'termStartedAt'
  | 'termEndsAt'
  | 'topK'
  | 'transitionPeriod'
  | 'contest'
  | 'winners';

export type Eth_JokeRaceEligibility_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_gt?: InputMaybe<Scalars['String']['input']>;
  version_lt?: InputMaybe<Scalars['String']['input']>;
  version_gte?: InputMaybe<Scalars['String']['input']>;
  version_lte?: InputMaybe<Scalars['String']['input']>;
  version_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId?: InputMaybe<Scalars['String']['input']>;
  hatId_not?: InputMaybe<Scalars['String']['input']>;
  hatId_gt?: InputMaybe<Scalars['String']['input']>;
  hatId_lt?: InputMaybe<Scalars['String']['input']>;
  hatId_gte?: InputMaybe<Scalars['String']['input']>;
  hatId_lte?: InputMaybe<Scalars['String']['input']>;
  hatId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  adminHat?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_?: InputMaybe<Eth_HatAuthority_filter>;
  currentTerm?: InputMaybe<Scalars['String']['input']>;
  currentTerm_not?: InputMaybe<Scalars['String']['input']>;
  currentTerm_gt?: InputMaybe<Scalars['String']['input']>;
  currentTerm_lt?: InputMaybe<Scalars['String']['input']>;
  currentTerm_gte?: InputMaybe<Scalars['String']['input']>;
  currentTerm_lte?: InputMaybe<Scalars['String']['input']>;
  currentTerm_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currentTerm_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currentTerm_contains?: InputMaybe<Scalars['String']['input']>;
  currentTerm_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currentTerm_not_contains?: InputMaybe<Scalars['String']['input']>;
  currentTerm_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currentTerm_starts_with?: InputMaybe<Scalars['String']['input']>;
  currentTerm_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentTerm_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  currentTerm_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentTerm_ends_with?: InputMaybe<Scalars['String']['input']>;
  currentTerm_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentTerm_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  currentTerm_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentTerm_?: InputMaybe<Eth_JokeRaceEligibilityTerm_filter>;
  nextTerm?: InputMaybe<Scalars['String']['input']>;
  nextTerm_not?: InputMaybe<Scalars['String']['input']>;
  nextTerm_gt?: InputMaybe<Scalars['String']['input']>;
  nextTerm_lt?: InputMaybe<Scalars['String']['input']>;
  nextTerm_gte?: InputMaybe<Scalars['String']['input']>;
  nextTerm_lte?: InputMaybe<Scalars['String']['input']>;
  nextTerm_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nextTerm_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nextTerm_contains?: InputMaybe<Scalars['String']['input']>;
  nextTerm_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nextTerm_not_contains?: InputMaybe<Scalars['String']['input']>;
  nextTerm_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nextTerm_starts_with?: InputMaybe<Scalars['String']['input']>;
  nextTerm_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nextTerm_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nextTerm_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nextTerm_ends_with?: InputMaybe<Scalars['String']['input']>;
  nextTerm_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nextTerm_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nextTerm_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nextTerm_?: InputMaybe<Eth_JokeRaceEligibilityTerm_filter>;
  allTerms_?: InputMaybe<Eth_JokeRaceEligibilityTerm_filter>;
  events_?: InputMaybe<Eth_JokeRaceEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_JokeRaceEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_JokeRaceEligibility_filter>>>;
};

export type Eth_JokeRaceEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'adminHat'
  | 'currentTerm'
  | 'currentTerm__id'
  | 'currentTerm__termStartedAt'
  | 'currentTerm__termEndsAt'
  | 'currentTerm__topK'
  | 'currentTerm__transitionPeriod'
  | 'currentTerm__contest'
  | 'nextTerm'
  | 'nextTerm__id'
  | 'nextTerm__termStartedAt'
  | 'nextTerm__termEndsAt'
  | 'nextTerm__topK'
  | 'nextTerm__transitionPeriod'
  | 'nextTerm__contest'
  | 'allTerms'
  | 'events';

export type Eth_JokeRaceEvent = {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  jokeRaceEligibilityInstance: Eth_JokeRaceEligibility;
};

export type Eth_JokeRaceEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  jokeRaceEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  jokeRaceEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  jokeRaceEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_?: InputMaybe<Eth_JokeRaceEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_JokeRaceEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_JokeRaceEvent_filter>>>;
};

export type Eth_JokeRaceEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'jokeRaceEligibilityInstance'
  | 'jokeRaceEligibilityInstance__id'
  | 'jokeRaceEligibilityInstance__version'
  | 'jokeRaceEligibilityInstance__hatId';

export type Eth_JokeRace_NextTermSetEvent = Eth_JokeRaceEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  jokeRaceEligibilityInstance: Eth_JokeRaceEligibility;
  newContest: Scalars['String']['output'];
  newTopK: Scalars['BigInt']['output'];
  newTermEnd: Scalars['BigInt']['output'];
  newTransitionPeriod: Scalars['BigInt']['output'];
};

export type Eth_JokeRace_NextTermSetEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  jokeRaceEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  jokeRaceEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  jokeRaceEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_?: InputMaybe<Eth_JokeRaceEligibility_filter>;
  newContest?: InputMaybe<Scalars['String']['input']>;
  newContest_not?: InputMaybe<Scalars['String']['input']>;
  newContest_gt?: InputMaybe<Scalars['String']['input']>;
  newContest_lt?: InputMaybe<Scalars['String']['input']>;
  newContest_gte?: InputMaybe<Scalars['String']['input']>;
  newContest_lte?: InputMaybe<Scalars['String']['input']>;
  newContest_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newContest_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newContest_contains?: InputMaybe<Scalars['String']['input']>;
  newContest_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newContest_not_contains?: InputMaybe<Scalars['String']['input']>;
  newContest_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newContest_starts_with?: InputMaybe<Scalars['String']['input']>;
  newContest_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newContest_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  newContest_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newContest_ends_with?: InputMaybe<Scalars['String']['input']>;
  newContest_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newContest_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  newContest_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newTopK?: InputMaybe<Scalars['BigInt']['input']>;
  newTopK_not?: InputMaybe<Scalars['BigInt']['input']>;
  newTopK_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newTopK_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newTopK_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newTopK_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newTopK_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newTopK_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newTermEnd?: InputMaybe<Scalars['BigInt']['input']>;
  newTermEnd_not?: InputMaybe<Scalars['BigInt']['input']>;
  newTermEnd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newTermEnd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newTermEnd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newTermEnd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newTermEnd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newTermEnd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newTransitionPeriod?: InputMaybe<Scalars['BigInt']['input']>;
  newTransitionPeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
  newTransitionPeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newTransitionPeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newTransitionPeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newTransitionPeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newTransitionPeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newTransitionPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_JokeRace_NextTermSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_JokeRace_NextTermSetEvent_filter>>>;
};

export type Eth_JokeRace_NextTermSetEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'jokeRaceEligibilityInstance'
  | 'jokeRaceEligibilityInstance__id'
  | 'jokeRaceEligibilityInstance__version'
  | 'jokeRaceEligibilityInstance__hatId'
  | 'newContest'
  | 'newTopK'
  | 'newTermEnd'
  | 'newTransitionPeriod';

export type Eth_JokeRace_TermStartedEvent = Eth_JokeRaceEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  jokeRaceEligibilityInstance: Eth_JokeRaceEligibility;
  contest: Scalars['String']['output'];
  topK: Scalars['BigInt']['output'];
  termEnd: Scalars['BigInt']['output'];
  transitionPeriod: Scalars['BigInt']['output'];
};

export type Eth_JokeRace_TermStartedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  jokeRaceEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  jokeRaceEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  jokeRaceEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  jokeRaceEligibilityInstance_?: InputMaybe<Eth_JokeRaceEligibility_filter>;
  contest?: InputMaybe<Scalars['String']['input']>;
  contest_not?: InputMaybe<Scalars['String']['input']>;
  contest_gt?: InputMaybe<Scalars['String']['input']>;
  contest_lt?: InputMaybe<Scalars['String']['input']>;
  contest_gte?: InputMaybe<Scalars['String']['input']>;
  contest_lte?: InputMaybe<Scalars['String']['input']>;
  contest_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contest_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contest_contains?: InputMaybe<Scalars['String']['input']>;
  contest_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contest_not_contains?: InputMaybe<Scalars['String']['input']>;
  contest_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contest_starts_with?: InputMaybe<Scalars['String']['input']>;
  contest_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contest_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  contest_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contest_ends_with?: InputMaybe<Scalars['String']['input']>;
  contest_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contest_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  contest_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  topK?: InputMaybe<Scalars['BigInt']['input']>;
  topK_not?: InputMaybe<Scalars['BigInt']['input']>;
  topK_gt?: InputMaybe<Scalars['BigInt']['input']>;
  topK_lt?: InputMaybe<Scalars['BigInt']['input']>;
  topK_gte?: InputMaybe<Scalars['BigInt']['input']>;
  topK_lte?: InputMaybe<Scalars['BigInt']['input']>;
  topK_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  topK_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  termEnd?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_not?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  termEnd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transitionPeriod?: InputMaybe<Scalars['BigInt']['input']>;
  transitionPeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
  transitionPeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
  transitionPeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
  transitionPeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
  transitionPeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
  transitionPeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transitionPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_JokeRace_TermStartedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_JokeRace_TermStartedEvent_filter>>>;
};

export type Eth_JokeRace_TermStartedEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'jokeRaceEligibilityInstance'
  | 'jokeRaceEligibilityInstance__id'
  | 'jokeRaceEligibilityInstance__version'
  | 'jokeRaceEligibilityInstance__hatId'
  | 'contest'
  | 'topK'
  | 'termEnd'
  | 'transitionPeriod';

/** Defines the order direction, either ascending or descending */
export type Eth_OrderDirection =
  | 'asc'
  | 'desc';

/**  Passthrough Module  */
export type Eth_PassthroughModule = Eth_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  passthroughHat: Eth_HatAuthority;
};

export type Eth_PassthroughModule_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_gt?: InputMaybe<Scalars['String']['input']>;
  version_lt?: InputMaybe<Scalars['String']['input']>;
  version_gte?: InputMaybe<Scalars['String']['input']>;
  version_lte?: InputMaybe<Scalars['String']['input']>;
  version_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId?: InputMaybe<Scalars['String']['input']>;
  hatId_not?: InputMaybe<Scalars['String']['input']>;
  hatId_gt?: InputMaybe<Scalars['String']['input']>;
  hatId_lt?: InputMaybe<Scalars['String']['input']>;
  hatId_gte?: InputMaybe<Scalars['String']['input']>;
  hatId_lte?: InputMaybe<Scalars['String']['input']>;
  hatId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  passthroughHat?: InputMaybe<Scalars['String']['input']>;
  passthroughHat_not?: InputMaybe<Scalars['String']['input']>;
  passthroughHat_gt?: InputMaybe<Scalars['String']['input']>;
  passthroughHat_lt?: InputMaybe<Scalars['String']['input']>;
  passthroughHat_gte?: InputMaybe<Scalars['String']['input']>;
  passthroughHat_lte?: InputMaybe<Scalars['String']['input']>;
  passthroughHat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  passthroughHat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  passthroughHat_contains?: InputMaybe<Scalars['String']['input']>;
  passthroughHat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  passthroughHat_not_contains?: InputMaybe<Scalars['String']['input']>;
  passthroughHat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  passthroughHat_starts_with?: InputMaybe<Scalars['String']['input']>;
  passthroughHat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  passthroughHat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  passthroughHat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  passthroughHat_ends_with?: InputMaybe<Scalars['String']['input']>;
  passthroughHat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  passthroughHat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  passthroughHat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  passthroughHat_?: InputMaybe<Eth_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_PassthroughModule_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_PassthroughModule_filter>>>;
};

export type Eth_PassthroughModule_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'passthroughHat'
  | 'passthroughHat__id'
  | 'passthroughHat__primaryHatsAccount1ofNAddress';

/**  Public Lock V14 Eligibility  */
export type Eth_PublicLockV14Eligibility = Eth_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  lock: Scalars['String']['output'];
  referrer: Scalars['String']['output'];
  referrerFeePercentage: Scalars['BigInt']['output'];
};

export type Eth_PublicLockV14Eligibility_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_gt?: InputMaybe<Scalars['String']['input']>;
  version_lt?: InputMaybe<Scalars['String']['input']>;
  version_gte?: InputMaybe<Scalars['String']['input']>;
  version_lte?: InputMaybe<Scalars['String']['input']>;
  version_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId?: InputMaybe<Scalars['String']['input']>;
  hatId_not?: InputMaybe<Scalars['String']['input']>;
  hatId_gt?: InputMaybe<Scalars['String']['input']>;
  hatId_lt?: InputMaybe<Scalars['String']['input']>;
  hatId_gte?: InputMaybe<Scalars['String']['input']>;
  hatId_lte?: InputMaybe<Scalars['String']['input']>;
  hatId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lock?: InputMaybe<Scalars['String']['input']>;
  lock_not?: InputMaybe<Scalars['String']['input']>;
  lock_gt?: InputMaybe<Scalars['String']['input']>;
  lock_lt?: InputMaybe<Scalars['String']['input']>;
  lock_gte?: InputMaybe<Scalars['String']['input']>;
  lock_lte?: InputMaybe<Scalars['String']['input']>;
  lock_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lock_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lock_contains?: InputMaybe<Scalars['String']['input']>;
  lock_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lock_not_contains?: InputMaybe<Scalars['String']['input']>;
  lock_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lock_starts_with?: InputMaybe<Scalars['String']['input']>;
  lock_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lock_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lock_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lock_ends_with?: InputMaybe<Scalars['String']['input']>;
  lock_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lock_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lock_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer?: InputMaybe<Scalars['String']['input']>;
  referrer_not?: InputMaybe<Scalars['String']['input']>;
  referrer_gt?: InputMaybe<Scalars['String']['input']>;
  referrer_lt?: InputMaybe<Scalars['String']['input']>;
  referrer_gte?: InputMaybe<Scalars['String']['input']>;
  referrer_lte?: InputMaybe<Scalars['String']['input']>;
  referrer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  referrer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  referrer_contains?: InputMaybe<Scalars['String']['input']>;
  referrer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_not_contains?: InputMaybe<Scalars['String']['input']>;
  referrer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_starts_with?: InputMaybe<Scalars['String']['input']>;
  referrer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  referrer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_ends_with?: InputMaybe<Scalars['String']['input']>;
  referrer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  referrer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  referrerFeePercentage?: InputMaybe<Scalars['BigInt']['input']>;
  referrerFeePercentage_not?: InputMaybe<Scalars['BigInt']['input']>;
  referrerFeePercentage_gt?: InputMaybe<Scalars['BigInt']['input']>;
  referrerFeePercentage_lt?: InputMaybe<Scalars['BigInt']['input']>;
  referrerFeePercentage_gte?: InputMaybe<Scalars['BigInt']['input']>;
  referrerFeePercentage_lte?: InputMaybe<Scalars['BigInt']['input']>;
  referrerFeePercentage_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  referrerFeePercentage_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_PublicLockV14Eligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_PublicLockV14Eligibility_filter>>>;
};

export type Eth_PublicLockV14Eligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'lock'
  | 'referrer'
  | 'referrerFeePercentage';

export type Query = {
  Eth_hatAuthority?: Maybe<Eth_HatAuthority>;
  Eth_hatAuthorities: Array<Eth_HatAuthority>;
  Eth_hatsSignerGate?: Maybe<Eth_HatsSignerGate>;
  Eth_hatsSignerGates: Array<Eth_HatsSignerGate>;
  Eth_hatsSignerGateV2?: Maybe<Eth_HatsSignerGateV2>;
  Eth_hatsSignerGateV2S: Array<Eth_HatsSignerGateV2>;
  Eth_hatsSignerGateV2OwnerHatSetEvent?: Maybe<Eth_HatsSignerGateV2_OwnerHatSetEvent>;
  Eth_hatsSignerGateV2OwnerHatSetEvents: Array<Eth_HatsSignerGateV2_OwnerHatSetEvent>;
  Eth_hatsSignerGateV2SignerHatsAddedEvent?: Maybe<Eth_HatsSignerGateV2_SignerHatsAddedEvent>;
  Eth_hatsSignerGateV2SignerHatsAddedEvents: Array<Eth_HatsSignerGateV2_SignerHatsAddedEvent>;
  Eth_hatsSignerGateV2ThresholdConfigSetEvent?: Maybe<Eth_HatsSignerGateV2_ThresholdConfigSetEvent>;
  Eth_hatsSignerGateV2ThresholdConfigSetEvents: Array<Eth_HatsSignerGateV2_ThresholdConfigSetEvent>;
  Eth_hatsSignerGateV2HSGLockedEvent?: Maybe<Eth_HatsSignerGateV2_HSGLockedEvent>;
  Eth_hatsSignerGateV2HSGLockedEvents: Array<Eth_HatsSignerGateV2_HSGLockedEvent>;
  Eth_hatsSignerGateV2ClaimableForSetEvent?: Maybe<Eth_HatsSignerGateV2_ClaimableForSetEvent>;
  Eth_hatsSignerGateV2ClaimableForSetEvents: Array<Eth_HatsSignerGateV2_ClaimableForSetEvent>;
  Eth_hatsSignerGateV2DetachedEvent?: Maybe<Eth_HatsSignerGateV2_DetachedEvent>;
  Eth_hatsSignerGateV2DetachedEvents: Array<Eth_HatsSignerGateV2_DetachedEvent>;
  Eth_hatsSignerGateV2MigratedEvent?: Maybe<Eth_HatsSignerGateV2_MigratedEvent>;
  Eth_hatsSignerGateV2MigratedEvents: Array<Eth_HatsSignerGateV2_MigratedEvent>;
  Eth_hatsSignerGateV2DelegatecallTargetEnabledEvent?: Maybe<Eth_HatsSignerGateV2_DelegatecallTargetEnabledEvent>;
  Eth_hatsSignerGateV2DelegatecallTargetEnabledEvents: Array<Eth_HatsSignerGateV2_DelegatecallTargetEnabledEvent>;
  Eth_hatsSignerGateV2RegisteredEvent?: Maybe<Eth_HatsSignerGateV2_RegisteredEvent>;
  Eth_hatsSignerGateV2RegisteredEvents: Array<Eth_HatsSignerGateV2_RegisteredEvent>;
  Eth_hatsSignerGateV2ChangedGuardEvent?: Maybe<Eth_HatsSignerGateV2_ChangedGuardEvent>;
  Eth_hatsSignerGateV2ChangedGuardEvents: Array<Eth_HatsSignerGateV2_ChangedGuardEvent>;
  Eth_hatsSignerGateV2EnabledModuleEvent?: Maybe<Eth_HatsSignerGateV2_EnabledModuleEvent>;
  Eth_hatsSignerGateV2EnabledModuleEvents: Array<Eth_HatsSignerGateV2_EnabledModuleEvent>;
  Eth_hatsSignerGateV2DisabledModuleEvent?: Maybe<Eth_HatsSignerGateV2_DisabledModuleEvent>;
  Eth_hatsSignerGateV2DisabledModuleEvents: Array<Eth_HatsSignerGateV2_DisabledModuleEvent>;
  Eth_hatsAccount1OfN?: Maybe<Eth_HatsAccount1ofN>;
  Eth_hatsAccount1OfNs: Array<Eth_HatsAccount1ofN>;
  Eth_hatsAccount1OfNOperation?: Maybe<Eth_HatsAccount1ofNOperation>;
  Eth_hatsAccount1OfNOperations: Array<Eth_HatsAccount1ofNOperation>;
  Eth_hatsStakingShaman?: Maybe<Eth_HatsStakingShaman>;
  Eth_hatsStakingShamans: Array<Eth_HatsStakingShaman>;
  Eth_shamanStake?: Maybe<Eth_ShamanStake>;
  Eth_shamanStakes: Array<Eth_ShamanStake>;
  Eth_hatsFarcasterDelegator?: Maybe<Eth_HatsFarcasterDelegator>;
  Eth_hatsFarcasterDelegators: Array<Eth_HatsFarcasterDelegator>;
  Eth_jokeRaceEligibility?: Maybe<Eth_JokeRaceEligibility>;
  Eth_jokeRaceEligibilities: Array<Eth_JokeRaceEligibility>;
  Eth_jokeRaceEligibilityTerm?: Maybe<Eth_JokeRaceEligibilityTerm>;
  Eth_jokeRaceEligibilityTerms: Array<Eth_JokeRaceEligibilityTerm>;
  Eth_jokeRaceNextTermSetEvent?: Maybe<Eth_JokeRace_NextTermSetEvent>;
  Eth_jokeRaceNextTermSetEvents: Array<Eth_JokeRace_NextTermSetEvent>;
  Eth_jokeRaceTermStartedEvent?: Maybe<Eth_JokeRace_TermStartedEvent>;
  Eth_jokeRaceTermStartedEvents: Array<Eth_JokeRace_TermStartedEvent>;
  Eth_allowListEligibility?: Maybe<Eth_AllowListEligibility>;
  Eth_allowListEligibilities: Array<Eth_AllowListEligibility>;
  Eth_allowListEligibilityData?: Maybe<Eth_AllowListEligibilityData>;
  Eth_allowListEligibilityDatas: Array<Eth_AllowListEligibilityData>;
  Eth_allowlistAccountAddedEvent?: Maybe<Eth_Allowlist_AccountAddedEvent>;
  Eth_allowlistAccountAddedEvents: Array<Eth_Allowlist_AccountAddedEvent>;
  Eth_allowlistAccountsAddedEvent?: Maybe<Eth_Allowlist_AccountsAddedEvent>;
  Eth_allowlistAccountsAddedEvents: Array<Eth_Allowlist_AccountsAddedEvent>;
  Eth_allowlistAccountRemovedEvent?: Maybe<Eth_Allowlist_AccountRemovedEvent>;
  Eth_allowlistAccountRemovedEvents: Array<Eth_Allowlist_AccountRemovedEvent>;
  Eth_allowlistAccountsRemovedEvent?: Maybe<Eth_Allowlist_AccountsRemovedEvent>;
  Eth_allowlistAccountsRemovedEvents: Array<Eth_Allowlist_AccountsRemovedEvent>;
  Eth_allowlistAccountStandingChangedEvent?: Maybe<Eth_Allowlist_AccountStandingChangedEvent>;
  Eth_allowlistAccountStandingChangedEvents: Array<Eth_Allowlist_AccountStandingChangedEvent>;
  Eth_allowlistAccountsStandingChangedEvent?: Maybe<Eth_Allowlist_AccountsStandingChangedEvent>;
  Eth_allowlistAccountsStandingChangedEvents: Array<Eth_Allowlist_AccountsStandingChangedEvent>;
  Eth_allowlistOwnerHatSetEvent?: Maybe<Eth_Allowlist_OwnerHatSetEvent>;
  Eth_allowlistOwnerHatSetEvents: Array<Eth_Allowlist_OwnerHatSetEvent>;
  Eth_allowlistArbitratorHatSetEvent?: Maybe<Eth_Allowlist_ArbitratorHatSetEvent>;
  Eth_allowlistArbitratorHatSetEvents: Array<Eth_Allowlist_ArbitratorHatSetEvent>;
  Eth_hatsElectionEligibility?: Maybe<Eth_HatsElectionEligibility>;
  Eth_hatsElectionEligibilities: Array<Eth_HatsElectionEligibility>;
  Eth_electionTerm?: Maybe<Eth_ElectionTerm>;
  Eth_electionTerms: Array<Eth_ElectionTerm>;
  Eth_electionElectionOpenedEvent?: Maybe<Eth_Election_ElectionOpenedEvent>;
  Eth_electionElectionOpenedEvents: Array<Eth_Election_ElectionOpenedEvent>;
  Eth_electionElectionCompletedEvent?: Maybe<Eth_Election_ElectionCompletedEvent>;
  Eth_electionElectionCompletedEvents: Array<Eth_Election_ElectionCompletedEvent>;
  Eth_electionNewTermStartedEvent?: Maybe<Eth_Election_NewTermStartedEvent>;
  Eth_electionNewTermStartedEvents: Array<Eth_Election_NewTermStartedEvent>;
  Eth_electionRecalledEvent?: Maybe<Eth_Election_RecalledEvent>;
  Eth_electionRecalledEvents: Array<Eth_Election_RecalledEvent>;
  Eth_passthroughModule?: Maybe<Eth_PassthroughModule>;
  Eth_passthroughModules: Array<Eth_PassthroughModule>;
  Eth_stakingEligibility?: Maybe<Eth_StakingEligibility>;
  Eth_stakingEligibilities: Array<Eth_StakingEligibility>;
  Eth_stake?: Maybe<Eth_Stake>;
  Eth_stakes: Array<Eth_Stake>;
  Eth_stakingStakedEvent?: Maybe<Eth_Staking_StakedEvent>;
  Eth_stakingStakedEvents: Array<Eth_Staking_StakedEvent>;
  Eth_stakingUnstakeBegunEvent?: Maybe<Eth_Staking_UnstakeBegunEvent>;
  Eth_stakingUnstakeBegunEvents: Array<Eth_Staking_UnstakeBegunEvent>;
  Eth_stakingSlashedEvent?: Maybe<Eth_Staking_SlashedEvent>;
  Eth_stakingSlashedEvents: Array<Eth_Staking_SlashedEvent>;
  Eth_stakingMinStakeChangedEvent?: Maybe<Eth_Staking_MinStakeChangedEvent>;
  Eth_stakingMinStakeChangedEvents: Array<Eth_Staking_MinStakeChangedEvent>;
  Eth_stakingJudgeHatChangedEvent?: Maybe<Eth_Staking_JudgeHatChangedEvent>;
  Eth_stakingJudgeHatChangedEvents: Array<Eth_Staking_JudgeHatChangedEvent>;
  Eth_stakingRecipientHatChangedEvent?: Maybe<Eth_Staking_RecipientHatChangedEvent>;
  Eth_stakingRecipientHatChangedEvents: Array<Eth_Staking_RecipientHatChangedEvent>;
  Eth_stakingCooldownPeriodChangedEvent?: Maybe<Eth_Staking_CooldownPeriodChangedEvent>;
  Eth_stakingCooldownPeriodChangedEvents: Array<Eth_Staking_CooldownPeriodChangedEvent>;
  Eth_stakingForgivenEvent?: Maybe<Eth_Staking_ForgivenEvent>;
  Eth_stakingForgivenEvents: Array<Eth_Staking_ForgivenEvent>;
  Eth_seasonToggle?: Maybe<Eth_SeasonToggle>;
  Eth_seasonToggles: Array<Eth_SeasonToggle>;
  Eth_characterSheetsLevelEligibility?: Maybe<Eth_CharacterSheetsLevelEligibility>;
  Eth_characterSheetsLevelEligibilities: Array<Eth_CharacterSheetsLevelEligibility>;
  Eth_agreementEligibility?: Maybe<Eth_AgreementEligibility>;
  Eth_agreementEligibilities: Array<Eth_AgreementEligibility>;
  Eth_agreement?: Maybe<Eth_Agreement>;
  Eth_agreements: Array<Eth_Agreement>;
  Eth_agreementHatClaimedWithAgreementEvent?: Maybe<Eth_Agreement_HatClaimedWithAgreementEvent>;
  Eth_agreementHatClaimedWithAgreementEvents: Array<Eth_Agreement_HatClaimedWithAgreementEvent>;
  Eth_agreementAgreementSignedEvent?: Maybe<Eth_Agreement_AgreementSignedEvent>;
  Eth_agreementAgreementSignedEvents: Array<Eth_Agreement_AgreementSignedEvent>;
  Eth_agreementAgreementSetEvent?: Maybe<Eth_Agreement_AgreementSetEvent>;
  Eth_agreementAgreementSetEvents: Array<Eth_Agreement_AgreementSetEvent>;
  Eth_agreementOwnerHatSetEvent?: Maybe<Eth_Agreement_OwnerHatSetEvent>;
  Eth_agreementOwnerHatSetEvents: Array<Eth_Agreement_OwnerHatSetEvent>;
  Eth_agreementArbitratorHatSetEvent?: Maybe<Eth_Agreement_ArbitratorHatSetEvent>;
  Eth_agreementArbitratorHatSetEvents: Array<Eth_Agreement_ArbitratorHatSetEvent>;
  Eth_erc20Eligibility?: Maybe<Eth_Erc20Eligibility>;
  Eth_erc20Eligibilities: Array<Eth_Erc20Eligibility>;
  Eth_erc721Eligibility?: Maybe<Eth_Erc721Eligibility>;
  Eth_erc721Eligibilities: Array<Eth_Erc721Eligibility>;
  Eth_erc1155Eligibility?: Maybe<Eth_Erc1155Eligibility>;
  Eth_erc1155Eligibilities: Array<Eth_Erc1155Eligibility>;
  Eth_hatWearingEligibility?: Maybe<Eth_HatWearingEligibility>;
  Eth_hatWearingEligibilities: Array<Eth_HatWearingEligibility>;
  Eth_gitcoinPassportEligibility?: Maybe<Eth_GitcoinPassportEligibility>;
  Eth_gitcoinPassportEligibilities: Array<Eth_GitcoinPassportEligibility>;
  Eth_coLinksEligibility?: Maybe<Eth_CoLinksEligibility>;
  Eth_coLinksEligibilities: Array<Eth_CoLinksEligibility>;
  Eth_hatControlledModule?: Maybe<Eth_HatControlledModule>;
  Eth_hatControlledModules: Array<Eth_HatControlledModule>;
  Eth_hatControlledModuleWearerStatus?: Maybe<Eth_HatControlledModuleWearerStatus>;
  Eth_hatControlledModuleWearerStatuses: Array<Eth_HatControlledModuleWearerStatus>;
  Eth_hatControlledModuleHatStatus?: Maybe<Eth_HatControlledModuleHatStatus>;
  Eth_hatControlledModuleHatStatuses: Array<Eth_HatControlledModuleHatStatus>;
  Eth_hatControlledWearerStatusSet?: Maybe<Eth_HatControlled_WearerStatusSet>;
  Eth_hatControlledWearerStatusSets: Array<Eth_HatControlled_WearerStatusSet>;
  Eth_hatControlledHatStatusSet?: Maybe<Eth_HatControlled_HatStatusSet>;
  Eth_hatControlledHatStatusSets: Array<Eth_HatControlled_HatStatusSet>;
  Eth_publicLockV14Eligibility?: Maybe<Eth_PublicLockV14Eligibility>;
  Eth_publicLockV14Eligibilities: Array<Eth_PublicLockV14Eligibility>;
  Eth_hatsEligibilitiesChain?: Maybe<Eth_HatsEligibilitiesChain>;
  Eth_hatsEligibilitiesChains: Array<Eth_HatsEligibilitiesChain>;
  Eth_eligibilitiesRuleset?: Maybe<Eth_EligibilitiesRuleset>;
  Eth_eligibilitiesRulesets: Array<Eth_EligibilitiesRuleset>;
  Eth_hatsSignerGateV2Event?: Maybe<Eth_HatsSignerGateV2Event>;
  Eth_hatsSignerGateV2Events: Array<Eth_HatsSignerGateV2Event>;
  Eth_hatsModule?: Maybe<Eth_HatsModule>;
  Eth_hatsModules: Array<Eth_HatsModule>;
  Eth_hatsModuleEvent?: Maybe<Eth_HatsModuleEvent>;
  Eth_hatsModuleEvents: Array<Eth_HatsModuleEvent>;
  Eth_jokeRaceEvent?: Maybe<Eth_JokeRaceEvent>;
  Eth_jokeRaceEvents: Array<Eth_JokeRaceEvent>;
  Eth_allowlistEvent?: Maybe<Eth_AllowlistEvent>;
  Eth_allowlistEvents: Array<Eth_AllowlistEvent>;
  Eth_electionEvent?: Maybe<Eth_ElectionEvent>;
  Eth_electionEvents: Array<Eth_ElectionEvent>;
  Eth_stakingEvent?: Maybe<Eth_StakingEvent>;
  Eth_stakingEvents: Array<Eth_StakingEvent>;
  Eth_agreementEvent?: Maybe<Eth_AgreementEvent>;
  Eth_agreementEvents: Array<Eth_AgreementEvent>;
  Eth_hatControlledModuleEvent?: Maybe<Eth_HatControlledModuleEvent>;
  Eth_hatControlledModuleEvents: Array<Eth_HatControlledModuleEvent>;
  /** Access to subgraph metadata */
  Eth__meta?: Maybe<Eth__Meta_>;
};


export type QueryEth_hatAuthorityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatAuthoritiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatAuthority_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGate_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2Args = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2SArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2OwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2OwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2SignerHatsAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2SignerHatsAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_SignerHatsAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_SignerHatsAddedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2ThresholdConfigSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2ThresholdConfigSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_ThresholdConfigSetEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_ThresholdConfigSetEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2HSGLockedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2HSGLockedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_HSGLockedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_HSGLockedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2ClaimableForSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2ClaimableForSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_ClaimableForSetEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_ClaimableForSetEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2DetachedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2DetachedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_DetachedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_DetachedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2MigratedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2MigratedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_MigratedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_MigratedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2DelegatecallTargetEnabledEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2DelegatecallTargetEnabledEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_DelegatecallTargetEnabledEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_DelegatecallTargetEnabledEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2RegisteredEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2RegisteredEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_RegisteredEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_RegisteredEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2ChangedGuardEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2ChangedGuardEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_ChangedGuardEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_ChangedGuardEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2EnabledModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2EnabledModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_EnabledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_EnabledModuleEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2DisabledModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2DisabledModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_DisabledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_DisabledModuleEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsAccount1OfNArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsAccount1OfNsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsAccount1ofN_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsAccount1OfNOperationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsAccount1OfNOperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsAccount1ofNOperation_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsStakingShamanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsStakingShamansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsStakingShaman_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsStakingShaman_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_shamanStakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_shamanStakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_ShamanStake_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_ShamanStake_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsFarcasterDelegatorArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsFarcasterDelegatorsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsFarcasterDelegator_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_jokeRaceEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_jokeRaceEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_JokeRaceEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_jokeRaceEligibilityTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_jokeRaceEligibilityTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_JokeRaceEligibilityTerm_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_JokeRaceEligibilityTerm_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_jokeRaceNextTermSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_jokeRaceNextTermSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_JokeRace_NextTermSetEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_JokeRace_NextTermSetEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_jokeRaceTermStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_jokeRaceTermStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_JokeRace_TermStartedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_JokeRace_TermStartedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_allowListEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_allowListEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_AllowListEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_allowListEligibilityDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_allowListEligibilityDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_AllowListEligibilityData_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_AllowListEligibilityData_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_allowlistAccountAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_allowlistAccountAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Allowlist_AccountAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Allowlist_AccountAddedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_allowlistAccountsAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_allowlistAccountsAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Allowlist_AccountsAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Allowlist_AccountsAddedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_allowlistAccountRemovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_allowlistAccountRemovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Allowlist_AccountRemovedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Allowlist_AccountRemovedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_allowlistAccountsRemovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_allowlistAccountsRemovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Allowlist_AccountsRemovedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Allowlist_AccountsRemovedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_allowlistAccountStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_allowlistAccountStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Allowlist_AccountStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Allowlist_AccountStandingChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_allowlistAccountsStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_allowlistAccountsStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Allowlist_AccountsStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Allowlist_AccountsStandingChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_allowlistOwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_allowlistOwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Allowlist_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Allowlist_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_allowlistArbitratorHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_allowlistArbitratorHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Allowlist_ArbitratorHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Allowlist_ArbitratorHatSetEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsElectionEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsElectionEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsElectionEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_electionTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_electionTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_ElectionTerm_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_electionElectionOpenedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_electionElectionOpenedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Election_ElectionOpenedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Election_ElectionOpenedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_electionElectionCompletedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_electionElectionCompletedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Election_ElectionCompletedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Election_ElectionCompletedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_electionNewTermStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_electionNewTermStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Election_NewTermStartedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Election_NewTermStartedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_electionRecalledEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_electionRecalledEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Election_RecalledEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Election_RecalledEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_passthroughModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_passthroughModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_PassthroughModule_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_stakingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_stakingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_StakingEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_stakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_stakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Stake_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Stake_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_stakingStakedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_stakingStakedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Staking_StakedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Staking_StakedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_stakingUnstakeBegunEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_stakingUnstakeBegunEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Staking_UnstakeBegunEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Staking_UnstakeBegunEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_stakingSlashedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_stakingSlashedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Staking_SlashedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Staking_SlashedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_stakingMinStakeChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_stakingMinStakeChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Staking_MinStakeChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Staking_MinStakeChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_stakingJudgeHatChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_stakingJudgeHatChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Staking_JudgeHatChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Staking_JudgeHatChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_stakingRecipientHatChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_stakingRecipientHatChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Staking_RecipientHatChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Staking_RecipientHatChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_stakingCooldownPeriodChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_stakingCooldownPeriodChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Staking_CooldownPeriodChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Staking_CooldownPeriodChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_stakingForgivenEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_stakingForgivenEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Staking_ForgivenEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Staking_ForgivenEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_seasonToggleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_seasonTogglesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_SeasonToggle_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_characterSheetsLevelEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_characterSheetsLevelEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_CharacterSheetsLevelEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_agreementEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_agreementEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_AgreementEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_agreementArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_agreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Agreement_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Agreement_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_agreementHatClaimedWithAgreementEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_agreementHatClaimedWithAgreementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Agreement_HatClaimedWithAgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Agreement_HatClaimedWithAgreementEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_agreementAgreementSignedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_agreementAgreementSignedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Agreement_AgreementSignedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Agreement_AgreementSignedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_agreementAgreementSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_agreementAgreementSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Agreement_AgreementSetEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Agreement_AgreementSetEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_agreementOwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_agreementOwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Agreement_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Agreement_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_agreementArbitratorHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_agreementArbitratorHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Agreement_ArbitratorHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Agreement_ArbitratorHatSetEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_erc20EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_erc20EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Erc20Eligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Erc20Eligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_erc721EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_erc721EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Erc721Eligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Erc721Eligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_erc1155EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_erc1155EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Erc1155Eligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Erc1155Eligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatWearingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatWearingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatWearingEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatWearingEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_gitcoinPassportEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_gitcoinPassportEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_GitcoinPassportEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_GitcoinPassportEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_coLinksEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_coLinksEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_CoLinksEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_CoLinksEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatControlledModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatControlledModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatControlledModule_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatControlledModule_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatControlledModuleWearerStatusArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatControlledModuleWearerStatusesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatControlledModuleWearerStatus_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatControlledModuleWearerStatus_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatControlledModuleHatStatusArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatControlledModuleHatStatusesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatControlledModuleHatStatus_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatControlledModuleHatStatus_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatControlledWearerStatusSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatControlledWearerStatusSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatControlled_WearerStatusSet_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatControlled_WearerStatusSet_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatControlledHatStatusSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatControlledHatStatusSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatControlled_HatStatusSet_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatControlled_HatStatusSet_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_publicLockV14EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_publicLockV14EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_PublicLockV14Eligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_PublicLockV14Eligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsEligibilitiesChainArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsEligibilitiesChainsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsEligibilitiesChain_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsEligibilitiesChain_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_eligibilitiesRulesetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_eligibilitiesRulesetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_EligibilitiesRuleset_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_EligibilitiesRuleset_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2EventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateV2EventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2Event_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2Event_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsModule_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsModule_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsModuleEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_jokeRaceEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_jokeRaceEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_JokeRaceEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_JokeRaceEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_allowlistEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_allowlistEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_AllowlistEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_AllowlistEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_electionEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_electionEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_ElectionEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_ElectionEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_stakingEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_stakingEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_StakingEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_StakingEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_agreementEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_agreementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_AgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_AgreementEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatControlledModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatControlledModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatControlledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatControlledModuleEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth__metaArgs = {
  block?: InputMaybe<Eth_Block_height>;
};

/**  Season Toggle  */
export type Eth_SeasonToggle = Eth_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  hatAdmins: Array<Eth_HatAuthority>;
};


/**  Season Toggle  */
export type Eth_SeasonTogglehatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatAuthority_filter>;
};

export type Eth_SeasonToggle_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_gt?: InputMaybe<Scalars['String']['input']>;
  version_lt?: InputMaybe<Scalars['String']['input']>;
  version_gte?: InputMaybe<Scalars['String']['input']>;
  version_lte?: InputMaybe<Scalars['String']['input']>;
  version_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId?: InputMaybe<Scalars['String']['input']>;
  hatId_not?: InputMaybe<Scalars['String']['input']>;
  hatId_gt?: InputMaybe<Scalars['String']['input']>;
  hatId_lt?: InputMaybe<Scalars['String']['input']>;
  hatId_gte?: InputMaybe<Scalars['String']['input']>;
  hatId_lte?: InputMaybe<Scalars['String']['input']>;
  hatId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatAdmins?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_?: InputMaybe<Eth_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_SeasonToggle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_SeasonToggle_filter>>>;
};

export type Eth_SeasonToggle_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'hatAdmins';

/** Shaman Stake */
export type Eth_ShamanStake = {
  id: Scalars['ID']['output'];
  stakingShaman: Eth_HatsStakingShaman;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  unstakingAmount: Scalars['BigInt']['output'];
  canUnstakeAfter: Scalars['BigInt']['output'];
};

export type Eth_ShamanStake_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  stakingShaman?: InputMaybe<Scalars['String']['input']>;
  stakingShaman_not?: InputMaybe<Scalars['String']['input']>;
  stakingShaman_gt?: InputMaybe<Scalars['String']['input']>;
  stakingShaman_lt?: InputMaybe<Scalars['String']['input']>;
  stakingShaman_gte?: InputMaybe<Scalars['String']['input']>;
  stakingShaman_lte?: InputMaybe<Scalars['String']['input']>;
  stakingShaman_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stakingShaman_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stakingShaman_contains?: InputMaybe<Scalars['String']['input']>;
  stakingShaman_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingShaman_not_contains?: InputMaybe<Scalars['String']['input']>;
  stakingShaman_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingShaman_starts_with?: InputMaybe<Scalars['String']['input']>;
  stakingShaman_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingShaman_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  stakingShaman_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingShaman_ends_with?: InputMaybe<Scalars['String']['input']>;
  stakingShaman_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingShaman_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  stakingShaman_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingShaman_?: InputMaybe<Eth_HatsStakingShaman_filter>;
  staker?: InputMaybe<Scalars['String']['input']>;
  staker_not?: InputMaybe<Scalars['String']['input']>;
  staker_gt?: InputMaybe<Scalars['String']['input']>;
  staker_lt?: InputMaybe<Scalars['String']['input']>;
  staker_gte?: InputMaybe<Scalars['String']['input']>;
  staker_lte?: InputMaybe<Scalars['String']['input']>;
  staker_in?: InputMaybe<Array<Scalars['String']['input']>>;
  staker_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  staker_contains?: InputMaybe<Scalars['String']['input']>;
  staker_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_not_contains?: InputMaybe<Scalars['String']['input']>;
  staker_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_starts_with?: InputMaybe<Scalars['String']['input']>;
  staker_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  staker_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_ends_with?: InputMaybe<Scalars['String']['input']>;
  staker_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  staker_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unstakingAmount?: InputMaybe<Scalars['BigInt']['input']>;
  unstakingAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  unstakingAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unstakingAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unstakingAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unstakingAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unstakingAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unstakingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  canUnstakeAfter?: InputMaybe<Scalars['BigInt']['input']>;
  canUnstakeAfter_not?: InputMaybe<Scalars['BigInt']['input']>;
  canUnstakeAfter_gt?: InputMaybe<Scalars['BigInt']['input']>;
  canUnstakeAfter_lt?: InputMaybe<Scalars['BigInt']['input']>;
  canUnstakeAfter_gte?: InputMaybe<Scalars['BigInt']['input']>;
  canUnstakeAfter_lte?: InputMaybe<Scalars['BigInt']['input']>;
  canUnstakeAfter_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  canUnstakeAfter_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_ShamanStake_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_ShamanStake_filter>>>;
};

export type Eth_ShamanStake_orderBy =
  | 'id'
  | 'stakingShaman'
  | 'stakingShaman__id'
  | 'stakingShaman__hatId'
  | 'stakingShaman__baal'
  | 'stakingShaman__stakingProxyImpl'
  | 'stakingShaman__sharesToken'
  | 'stakingShaman__minStake'
  | 'stakingShaman__coolDownBuffer'
  | 'staker'
  | 'amount'
  | 'unstakingAmount'
  | 'canUnstakeAfter';

export type Eth_Stake = {
  id: Scalars['ID']['output'];
  stakingEligiblity: Eth_StakingEligibility;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  slashed: Scalars['Boolean']['output'];
  cooldownAmount: Scalars['BigInt']['output'];
  cooldownEndsAt: Scalars['BigInt']['output'];
};

export type Eth_Stake_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  stakingEligiblity?: InputMaybe<Scalars['String']['input']>;
  stakingEligiblity_not?: InputMaybe<Scalars['String']['input']>;
  stakingEligiblity_gt?: InputMaybe<Scalars['String']['input']>;
  stakingEligiblity_lt?: InputMaybe<Scalars['String']['input']>;
  stakingEligiblity_gte?: InputMaybe<Scalars['String']['input']>;
  stakingEligiblity_lte?: InputMaybe<Scalars['String']['input']>;
  stakingEligiblity_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stakingEligiblity_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stakingEligiblity_contains?: InputMaybe<Scalars['String']['input']>;
  stakingEligiblity_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligiblity_not_contains?: InputMaybe<Scalars['String']['input']>;
  stakingEligiblity_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligiblity_starts_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligiblity_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligiblity_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligiblity_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligiblity_ends_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligiblity_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligiblity_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligiblity_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligiblity_?: InputMaybe<Eth_StakingEligibility_filter>;
  staker?: InputMaybe<Scalars['String']['input']>;
  staker_not?: InputMaybe<Scalars['String']['input']>;
  staker_gt?: InputMaybe<Scalars['String']['input']>;
  staker_lt?: InputMaybe<Scalars['String']['input']>;
  staker_gte?: InputMaybe<Scalars['String']['input']>;
  staker_lte?: InputMaybe<Scalars['String']['input']>;
  staker_in?: InputMaybe<Array<Scalars['String']['input']>>;
  staker_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  staker_contains?: InputMaybe<Scalars['String']['input']>;
  staker_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_not_contains?: InputMaybe<Scalars['String']['input']>;
  staker_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_starts_with?: InputMaybe<Scalars['String']['input']>;
  staker_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  staker_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_ends_with?: InputMaybe<Scalars['String']['input']>;
  staker_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  staker_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  slashed?: InputMaybe<Scalars['Boolean']['input']>;
  slashed_not?: InputMaybe<Scalars['Boolean']['input']>;
  slashed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  slashed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  cooldownAmount?: InputMaybe<Scalars['BigInt']['input']>;
  cooldownAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  cooldownAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cooldownAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cooldownAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cooldownAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cooldownAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cooldownAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cooldownEndsAt?: InputMaybe<Scalars['BigInt']['input']>;
  cooldownEndsAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  cooldownEndsAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cooldownEndsAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cooldownEndsAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cooldownEndsAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cooldownEndsAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cooldownEndsAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Stake_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Stake_filter>>>;
};

export type Eth_Stake_orderBy =
  | 'id'
  | 'stakingEligiblity'
  | 'stakingEligiblity__id'
  | 'stakingEligiblity__version'
  | 'stakingEligiblity__hatId'
  | 'stakingEligiblity__token'
  | 'stakingEligiblity__minStake'
  | 'stakingEligiblity__cooldownPeriod'
  | 'stakingEligiblity__totalSlashedStakes'
  | 'staker'
  | 'amount'
  | 'slashed'
  | 'cooldownAmount'
  | 'cooldownEndsAt';

/**  Staking Eligibility  */
export type Eth_StakingEligibility = Eth_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  token: Scalars['String']['output'];
  judgeHat: Eth_HatAuthority;
  recipientHat: Eth_HatAuthority;
  hatAdmins: Array<Eth_HatAuthority>;
  minStake: Scalars['BigInt']['output'];
  cooldownPeriod: Scalars['BigInt']['output'];
  totalSlashedStakes: Scalars['BigInt']['output'];
  stakes: Array<Eth_Stake>;
  events: Array<Eth_StakingEvent>;
};


/**  Staking Eligibility  */
export type Eth_StakingEligibilityhatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatAuthority_filter>;
};


/**  Staking Eligibility  */
export type Eth_StakingEligibilitystakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Stake_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Stake_filter>;
};


/**  Staking Eligibility  */
export type Eth_StakingEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_StakingEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_StakingEvent_filter>;
};

export type Eth_StakingEligibility_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_gt?: InputMaybe<Scalars['String']['input']>;
  version_lt?: InputMaybe<Scalars['String']['input']>;
  version_gte?: InputMaybe<Scalars['String']['input']>;
  version_lte?: InputMaybe<Scalars['String']['input']>;
  version_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId?: InputMaybe<Scalars['String']['input']>;
  hatId_not?: InputMaybe<Scalars['String']['input']>;
  hatId_gt?: InputMaybe<Scalars['String']['input']>;
  hatId_lt?: InputMaybe<Scalars['String']['input']>;
  hatId_gte?: InputMaybe<Scalars['String']['input']>;
  hatId_lte?: InputMaybe<Scalars['String']['input']>;
  hatId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatId_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  judgeHat?: InputMaybe<Scalars['String']['input']>;
  judgeHat_not?: InputMaybe<Scalars['String']['input']>;
  judgeHat_gt?: InputMaybe<Scalars['String']['input']>;
  judgeHat_lt?: InputMaybe<Scalars['String']['input']>;
  judgeHat_gte?: InputMaybe<Scalars['String']['input']>;
  judgeHat_lte?: InputMaybe<Scalars['String']['input']>;
  judgeHat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  judgeHat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  judgeHat_contains?: InputMaybe<Scalars['String']['input']>;
  judgeHat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  judgeHat_not_contains?: InputMaybe<Scalars['String']['input']>;
  judgeHat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  judgeHat_starts_with?: InputMaybe<Scalars['String']['input']>;
  judgeHat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  judgeHat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  judgeHat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  judgeHat_ends_with?: InputMaybe<Scalars['String']['input']>;
  judgeHat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  judgeHat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  judgeHat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  judgeHat_?: InputMaybe<Eth_HatAuthority_filter>;
  recipientHat?: InputMaybe<Scalars['String']['input']>;
  recipientHat_not?: InputMaybe<Scalars['String']['input']>;
  recipientHat_gt?: InputMaybe<Scalars['String']['input']>;
  recipientHat_lt?: InputMaybe<Scalars['String']['input']>;
  recipientHat_gte?: InputMaybe<Scalars['String']['input']>;
  recipientHat_lte?: InputMaybe<Scalars['String']['input']>;
  recipientHat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  recipientHat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  recipientHat_contains?: InputMaybe<Scalars['String']['input']>;
  recipientHat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  recipientHat_not_contains?: InputMaybe<Scalars['String']['input']>;
  recipientHat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  recipientHat_starts_with?: InputMaybe<Scalars['String']['input']>;
  recipientHat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  recipientHat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  recipientHat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  recipientHat_ends_with?: InputMaybe<Scalars['String']['input']>;
  recipientHat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  recipientHat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  recipientHat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  recipientHat_?: InputMaybe<Eth_HatAuthority_filter>;
  hatAdmins?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_?: InputMaybe<Eth_HatAuthority_filter>;
  minStake?: InputMaybe<Scalars['BigInt']['input']>;
  minStake_not?: InputMaybe<Scalars['BigInt']['input']>;
  minStake_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minStake_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minStake_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minStake_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minStake_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minStake_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cooldownPeriod?: InputMaybe<Scalars['BigInt']['input']>;
  cooldownPeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
  cooldownPeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cooldownPeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cooldownPeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cooldownPeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cooldownPeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cooldownPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSlashedStakes?: InputMaybe<Scalars['BigInt']['input']>;
  totalSlashedStakes_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSlashedStakes_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSlashedStakes_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSlashedStakes_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSlashedStakes_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSlashedStakes_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSlashedStakes_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakes_?: InputMaybe<Eth_Stake_filter>;
  events_?: InputMaybe<Eth_StakingEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_StakingEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_StakingEligibility_filter>>>;
};

export type Eth_StakingEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'token'
  | 'judgeHat'
  | 'judgeHat__id'
  | 'judgeHat__primaryHatsAccount1ofNAddress'
  | 'recipientHat'
  | 'recipientHat__id'
  | 'recipientHat__primaryHatsAccount1ofNAddress'
  | 'hatAdmins'
  | 'minStake'
  | 'cooldownPeriod'
  | 'totalSlashedStakes'
  | 'stakes'
  | 'events';

export type Eth_StakingEvent = {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  stakingEligibilityInstance: Eth_StakingEligibility;
};

export type Eth_StakingEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  stakingEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stakingEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stakingEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_?: InputMaybe<Eth_StakingEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_StakingEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_StakingEvent_filter>>>;
};

export type Eth_StakingEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'stakingEligibilityInstance'
  | 'stakingEligibilityInstance__id'
  | 'stakingEligibilityInstance__version'
  | 'stakingEligibilityInstance__hatId'
  | 'stakingEligibilityInstance__token'
  | 'stakingEligibilityInstance__minStake'
  | 'stakingEligibilityInstance__cooldownPeriod'
  | 'stakingEligibilityInstance__totalSlashedStakes';

export type Eth_Staking_CooldownPeriodChangedEvent = Eth_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  stakingEligibilityInstance: Eth_StakingEligibility;
  newDelay: Scalars['BigInt']['output'];
};

export type Eth_Staking_CooldownPeriodChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  stakingEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stakingEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stakingEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_?: InputMaybe<Eth_StakingEligibility_filter>;
  newDelay?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_not?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newDelay_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Staking_CooldownPeriodChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Staking_CooldownPeriodChangedEvent_filter>>>;
};

export type Eth_Staking_CooldownPeriodChangedEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'stakingEligibilityInstance'
  | 'stakingEligibilityInstance__id'
  | 'stakingEligibilityInstance__version'
  | 'stakingEligibilityInstance__hatId'
  | 'stakingEligibilityInstance__token'
  | 'stakingEligibilityInstance__minStake'
  | 'stakingEligibilityInstance__cooldownPeriod'
  | 'stakingEligibilityInstance__totalSlashedStakes'
  | 'newDelay';

export type Eth_Staking_ForgivenEvent = Eth_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  stakingEligibilityInstance: Eth_StakingEligibility;
  staker: Scalars['String']['output'];
};

export type Eth_Staking_ForgivenEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  stakingEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stakingEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stakingEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_?: InputMaybe<Eth_StakingEligibility_filter>;
  staker?: InputMaybe<Scalars['String']['input']>;
  staker_not?: InputMaybe<Scalars['String']['input']>;
  staker_gt?: InputMaybe<Scalars['String']['input']>;
  staker_lt?: InputMaybe<Scalars['String']['input']>;
  staker_gte?: InputMaybe<Scalars['String']['input']>;
  staker_lte?: InputMaybe<Scalars['String']['input']>;
  staker_in?: InputMaybe<Array<Scalars['String']['input']>>;
  staker_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  staker_contains?: InputMaybe<Scalars['String']['input']>;
  staker_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_not_contains?: InputMaybe<Scalars['String']['input']>;
  staker_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_starts_with?: InputMaybe<Scalars['String']['input']>;
  staker_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  staker_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_ends_with?: InputMaybe<Scalars['String']['input']>;
  staker_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  staker_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Staking_ForgivenEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Staking_ForgivenEvent_filter>>>;
};

export type Eth_Staking_ForgivenEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'stakingEligibilityInstance'
  | 'stakingEligibilityInstance__id'
  | 'stakingEligibilityInstance__version'
  | 'stakingEligibilityInstance__hatId'
  | 'stakingEligibilityInstance__token'
  | 'stakingEligibilityInstance__minStake'
  | 'stakingEligibilityInstance__cooldownPeriod'
  | 'stakingEligibilityInstance__totalSlashedStakes'
  | 'staker';

export type Eth_Staking_JudgeHatChangedEvent = Eth_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  stakingEligibilityInstance: Eth_StakingEligibility;
  newJudgeHat: Scalars['String']['output'];
};

export type Eth_Staking_JudgeHatChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  stakingEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stakingEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stakingEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_?: InputMaybe<Eth_StakingEligibility_filter>;
  newJudgeHat?: InputMaybe<Scalars['String']['input']>;
  newJudgeHat_not?: InputMaybe<Scalars['String']['input']>;
  newJudgeHat_gt?: InputMaybe<Scalars['String']['input']>;
  newJudgeHat_lt?: InputMaybe<Scalars['String']['input']>;
  newJudgeHat_gte?: InputMaybe<Scalars['String']['input']>;
  newJudgeHat_lte?: InputMaybe<Scalars['String']['input']>;
  newJudgeHat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newJudgeHat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newJudgeHat_contains?: InputMaybe<Scalars['String']['input']>;
  newJudgeHat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newJudgeHat_not_contains?: InputMaybe<Scalars['String']['input']>;
  newJudgeHat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newJudgeHat_starts_with?: InputMaybe<Scalars['String']['input']>;
  newJudgeHat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newJudgeHat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  newJudgeHat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newJudgeHat_ends_with?: InputMaybe<Scalars['String']['input']>;
  newJudgeHat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newJudgeHat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  newJudgeHat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Staking_JudgeHatChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Staking_JudgeHatChangedEvent_filter>>>;
};

export type Eth_Staking_JudgeHatChangedEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'stakingEligibilityInstance'
  | 'stakingEligibilityInstance__id'
  | 'stakingEligibilityInstance__version'
  | 'stakingEligibilityInstance__hatId'
  | 'stakingEligibilityInstance__token'
  | 'stakingEligibilityInstance__minStake'
  | 'stakingEligibilityInstance__cooldownPeriod'
  | 'stakingEligibilityInstance__totalSlashedStakes'
  | 'newJudgeHat';

export type Eth_Staking_MinStakeChangedEvent = Eth_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  stakingEligibilityInstance: Eth_StakingEligibility;
  newMinStake: Scalars['BigInt']['output'];
};

export type Eth_Staking_MinStakeChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  stakingEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stakingEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stakingEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_?: InputMaybe<Eth_StakingEligibility_filter>;
  newMinStake?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_not?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newMinStake_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Staking_MinStakeChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Staking_MinStakeChangedEvent_filter>>>;
};

export type Eth_Staking_MinStakeChangedEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'stakingEligibilityInstance'
  | 'stakingEligibilityInstance__id'
  | 'stakingEligibilityInstance__version'
  | 'stakingEligibilityInstance__hatId'
  | 'stakingEligibilityInstance__token'
  | 'stakingEligibilityInstance__minStake'
  | 'stakingEligibilityInstance__cooldownPeriod'
  | 'stakingEligibilityInstance__totalSlashedStakes'
  | 'newMinStake';

export type Eth_Staking_RecipientHatChangedEvent = Eth_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  stakingEligibilityInstance: Eth_StakingEligibility;
  newRecipientHat: Scalars['String']['output'];
};

export type Eth_Staking_RecipientHatChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  stakingEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stakingEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stakingEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_?: InputMaybe<Eth_StakingEligibility_filter>;
  newRecipientHat?: InputMaybe<Scalars['String']['input']>;
  newRecipientHat_not?: InputMaybe<Scalars['String']['input']>;
  newRecipientHat_gt?: InputMaybe<Scalars['String']['input']>;
  newRecipientHat_lt?: InputMaybe<Scalars['String']['input']>;
  newRecipientHat_gte?: InputMaybe<Scalars['String']['input']>;
  newRecipientHat_lte?: InputMaybe<Scalars['String']['input']>;
  newRecipientHat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newRecipientHat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newRecipientHat_contains?: InputMaybe<Scalars['String']['input']>;
  newRecipientHat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newRecipientHat_not_contains?: InputMaybe<Scalars['String']['input']>;
  newRecipientHat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newRecipientHat_starts_with?: InputMaybe<Scalars['String']['input']>;
  newRecipientHat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newRecipientHat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  newRecipientHat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newRecipientHat_ends_with?: InputMaybe<Scalars['String']['input']>;
  newRecipientHat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newRecipientHat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  newRecipientHat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Staking_RecipientHatChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Staking_RecipientHatChangedEvent_filter>>>;
};

export type Eth_Staking_RecipientHatChangedEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'stakingEligibilityInstance'
  | 'stakingEligibilityInstance__id'
  | 'stakingEligibilityInstance__version'
  | 'stakingEligibilityInstance__hatId'
  | 'stakingEligibilityInstance__token'
  | 'stakingEligibilityInstance__minStake'
  | 'stakingEligibilityInstance__cooldownPeriod'
  | 'stakingEligibilityInstance__totalSlashedStakes'
  | 'newRecipientHat';

export type Eth_Staking_SlashedEvent = Eth_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  stakingEligibilityInstance: Eth_StakingEligibility;
  wearer: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
};

export type Eth_Staking_SlashedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  stakingEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stakingEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stakingEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_?: InputMaybe<Eth_StakingEligibility_filter>;
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
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Staking_SlashedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Staking_SlashedEvent_filter>>>;
};

export type Eth_Staking_SlashedEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'stakingEligibilityInstance'
  | 'stakingEligibilityInstance__id'
  | 'stakingEligibilityInstance__version'
  | 'stakingEligibilityInstance__hatId'
  | 'stakingEligibilityInstance__token'
  | 'stakingEligibilityInstance__minStake'
  | 'stakingEligibilityInstance__cooldownPeriod'
  | 'stakingEligibilityInstance__totalSlashedStakes'
  | 'wearer'
  | 'amount';

export type Eth_Staking_StakedEvent = Eth_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  stakingEligibilityInstance: Eth_StakingEligibility;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
};

export type Eth_Staking_StakedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  stakingEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stakingEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stakingEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_?: InputMaybe<Eth_StakingEligibility_filter>;
  staker?: InputMaybe<Scalars['String']['input']>;
  staker_not?: InputMaybe<Scalars['String']['input']>;
  staker_gt?: InputMaybe<Scalars['String']['input']>;
  staker_lt?: InputMaybe<Scalars['String']['input']>;
  staker_gte?: InputMaybe<Scalars['String']['input']>;
  staker_lte?: InputMaybe<Scalars['String']['input']>;
  staker_in?: InputMaybe<Array<Scalars['String']['input']>>;
  staker_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  staker_contains?: InputMaybe<Scalars['String']['input']>;
  staker_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_not_contains?: InputMaybe<Scalars['String']['input']>;
  staker_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_starts_with?: InputMaybe<Scalars['String']['input']>;
  staker_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  staker_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_ends_with?: InputMaybe<Scalars['String']['input']>;
  staker_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  staker_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Staking_StakedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Staking_StakedEvent_filter>>>;
};

export type Eth_Staking_StakedEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'stakingEligibilityInstance'
  | 'stakingEligibilityInstance__id'
  | 'stakingEligibilityInstance__version'
  | 'stakingEligibilityInstance__hatId'
  | 'stakingEligibilityInstance__token'
  | 'stakingEligibilityInstance__minStake'
  | 'stakingEligibilityInstance__cooldownPeriod'
  | 'stakingEligibilityInstance__totalSlashedStakes'
  | 'staker'
  | 'amount';

export type Eth_Staking_UnstakeBegunEvent = Eth_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Eth_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  stakingEligibilityInstance: Eth_StakingEligibility;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  cooldownEnd: Scalars['BigInt']['output'];
};

export type Eth_Staking_UnstakeBegunEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Eth_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  stakingEligibilityInstance?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_gt?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_lt?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_gte?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_lte?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stakingEligibilityInstance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stakingEligibilityInstance_contains?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_contains?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_starts_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_ends_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakingEligibilityInstance_?: InputMaybe<Eth_StakingEligibility_filter>;
  staker?: InputMaybe<Scalars['String']['input']>;
  staker_not?: InputMaybe<Scalars['String']['input']>;
  staker_gt?: InputMaybe<Scalars['String']['input']>;
  staker_lt?: InputMaybe<Scalars['String']['input']>;
  staker_gte?: InputMaybe<Scalars['String']['input']>;
  staker_lte?: InputMaybe<Scalars['String']['input']>;
  staker_in?: InputMaybe<Array<Scalars['String']['input']>>;
  staker_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  staker_contains?: InputMaybe<Scalars['String']['input']>;
  staker_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_not_contains?: InputMaybe<Scalars['String']['input']>;
  staker_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_starts_with?: InputMaybe<Scalars['String']['input']>;
  staker_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  staker_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_ends_with?: InputMaybe<Scalars['String']['input']>;
  staker_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  staker_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cooldownEnd?: InputMaybe<Scalars['BigInt']['input']>;
  cooldownEnd_not?: InputMaybe<Scalars['BigInt']['input']>;
  cooldownEnd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cooldownEnd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cooldownEnd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cooldownEnd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cooldownEnd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cooldownEnd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Staking_UnstakeBegunEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Staking_UnstakeBegunEvent_filter>>>;
};

export type Eth_Staking_UnstakeBegunEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'stakingEligibilityInstance'
  | 'stakingEligibilityInstance__id'
  | 'stakingEligibilityInstance__version'
  | 'stakingEligibilityInstance__hatId'
  | 'stakingEligibilityInstance__token'
  | 'stakingEligibilityInstance__minStake'
  | 'stakingEligibilityInstance__cooldownPeriod'
  | 'stakingEligibilityInstance__totalSlashedStakes'
  | 'staker'
  | 'amount'
  | 'cooldownEnd';

export type Subscription = {
  Eth_hatAuthority?: Maybe<Eth_HatAuthority>;
  Eth_hatAuthorities: Array<Eth_HatAuthority>;
  Eth_hatsSignerGate?: Maybe<Eth_HatsSignerGate>;
  Eth_hatsSignerGates: Array<Eth_HatsSignerGate>;
  Eth_hatsSignerGateV2?: Maybe<Eth_HatsSignerGateV2>;
  Eth_hatsSignerGateV2S: Array<Eth_HatsSignerGateV2>;
  Eth_hatsSignerGateV2OwnerHatSetEvent?: Maybe<Eth_HatsSignerGateV2_OwnerHatSetEvent>;
  Eth_hatsSignerGateV2OwnerHatSetEvents: Array<Eth_HatsSignerGateV2_OwnerHatSetEvent>;
  Eth_hatsSignerGateV2SignerHatsAddedEvent?: Maybe<Eth_HatsSignerGateV2_SignerHatsAddedEvent>;
  Eth_hatsSignerGateV2SignerHatsAddedEvents: Array<Eth_HatsSignerGateV2_SignerHatsAddedEvent>;
  Eth_hatsSignerGateV2ThresholdConfigSetEvent?: Maybe<Eth_HatsSignerGateV2_ThresholdConfigSetEvent>;
  Eth_hatsSignerGateV2ThresholdConfigSetEvents: Array<Eth_HatsSignerGateV2_ThresholdConfigSetEvent>;
  Eth_hatsSignerGateV2HSGLockedEvent?: Maybe<Eth_HatsSignerGateV2_HSGLockedEvent>;
  Eth_hatsSignerGateV2HSGLockedEvents: Array<Eth_HatsSignerGateV2_HSGLockedEvent>;
  Eth_hatsSignerGateV2ClaimableForSetEvent?: Maybe<Eth_HatsSignerGateV2_ClaimableForSetEvent>;
  Eth_hatsSignerGateV2ClaimableForSetEvents: Array<Eth_HatsSignerGateV2_ClaimableForSetEvent>;
  Eth_hatsSignerGateV2DetachedEvent?: Maybe<Eth_HatsSignerGateV2_DetachedEvent>;
  Eth_hatsSignerGateV2DetachedEvents: Array<Eth_HatsSignerGateV2_DetachedEvent>;
  Eth_hatsSignerGateV2MigratedEvent?: Maybe<Eth_HatsSignerGateV2_MigratedEvent>;
  Eth_hatsSignerGateV2MigratedEvents: Array<Eth_HatsSignerGateV2_MigratedEvent>;
  Eth_hatsSignerGateV2DelegatecallTargetEnabledEvent?: Maybe<Eth_HatsSignerGateV2_DelegatecallTargetEnabledEvent>;
  Eth_hatsSignerGateV2DelegatecallTargetEnabledEvents: Array<Eth_HatsSignerGateV2_DelegatecallTargetEnabledEvent>;
  Eth_hatsSignerGateV2RegisteredEvent?: Maybe<Eth_HatsSignerGateV2_RegisteredEvent>;
  Eth_hatsSignerGateV2RegisteredEvents: Array<Eth_HatsSignerGateV2_RegisteredEvent>;
  Eth_hatsSignerGateV2ChangedGuardEvent?: Maybe<Eth_HatsSignerGateV2_ChangedGuardEvent>;
  Eth_hatsSignerGateV2ChangedGuardEvents: Array<Eth_HatsSignerGateV2_ChangedGuardEvent>;
  Eth_hatsSignerGateV2EnabledModuleEvent?: Maybe<Eth_HatsSignerGateV2_EnabledModuleEvent>;
  Eth_hatsSignerGateV2EnabledModuleEvents: Array<Eth_HatsSignerGateV2_EnabledModuleEvent>;
  Eth_hatsSignerGateV2DisabledModuleEvent?: Maybe<Eth_HatsSignerGateV2_DisabledModuleEvent>;
  Eth_hatsSignerGateV2DisabledModuleEvents: Array<Eth_HatsSignerGateV2_DisabledModuleEvent>;
  Eth_hatsAccount1OfN?: Maybe<Eth_HatsAccount1ofN>;
  Eth_hatsAccount1OfNs: Array<Eth_HatsAccount1ofN>;
  Eth_hatsAccount1OfNOperation?: Maybe<Eth_HatsAccount1ofNOperation>;
  Eth_hatsAccount1OfNOperations: Array<Eth_HatsAccount1ofNOperation>;
  Eth_hatsStakingShaman?: Maybe<Eth_HatsStakingShaman>;
  Eth_hatsStakingShamans: Array<Eth_HatsStakingShaman>;
  Eth_shamanStake?: Maybe<Eth_ShamanStake>;
  Eth_shamanStakes: Array<Eth_ShamanStake>;
  Eth_hatsFarcasterDelegator?: Maybe<Eth_HatsFarcasterDelegator>;
  Eth_hatsFarcasterDelegators: Array<Eth_HatsFarcasterDelegator>;
  Eth_jokeRaceEligibility?: Maybe<Eth_JokeRaceEligibility>;
  Eth_jokeRaceEligibilities: Array<Eth_JokeRaceEligibility>;
  Eth_jokeRaceEligibilityTerm?: Maybe<Eth_JokeRaceEligibilityTerm>;
  Eth_jokeRaceEligibilityTerms: Array<Eth_JokeRaceEligibilityTerm>;
  Eth_jokeRaceNextTermSetEvent?: Maybe<Eth_JokeRace_NextTermSetEvent>;
  Eth_jokeRaceNextTermSetEvents: Array<Eth_JokeRace_NextTermSetEvent>;
  Eth_jokeRaceTermStartedEvent?: Maybe<Eth_JokeRace_TermStartedEvent>;
  Eth_jokeRaceTermStartedEvents: Array<Eth_JokeRace_TermStartedEvent>;
  Eth_allowListEligibility?: Maybe<Eth_AllowListEligibility>;
  Eth_allowListEligibilities: Array<Eth_AllowListEligibility>;
  Eth_allowListEligibilityData?: Maybe<Eth_AllowListEligibilityData>;
  Eth_allowListEligibilityDatas: Array<Eth_AllowListEligibilityData>;
  Eth_allowlistAccountAddedEvent?: Maybe<Eth_Allowlist_AccountAddedEvent>;
  Eth_allowlistAccountAddedEvents: Array<Eth_Allowlist_AccountAddedEvent>;
  Eth_allowlistAccountsAddedEvent?: Maybe<Eth_Allowlist_AccountsAddedEvent>;
  Eth_allowlistAccountsAddedEvents: Array<Eth_Allowlist_AccountsAddedEvent>;
  Eth_allowlistAccountRemovedEvent?: Maybe<Eth_Allowlist_AccountRemovedEvent>;
  Eth_allowlistAccountRemovedEvents: Array<Eth_Allowlist_AccountRemovedEvent>;
  Eth_allowlistAccountsRemovedEvent?: Maybe<Eth_Allowlist_AccountsRemovedEvent>;
  Eth_allowlistAccountsRemovedEvents: Array<Eth_Allowlist_AccountsRemovedEvent>;
  Eth_allowlistAccountStandingChangedEvent?: Maybe<Eth_Allowlist_AccountStandingChangedEvent>;
  Eth_allowlistAccountStandingChangedEvents: Array<Eth_Allowlist_AccountStandingChangedEvent>;
  Eth_allowlistAccountsStandingChangedEvent?: Maybe<Eth_Allowlist_AccountsStandingChangedEvent>;
  Eth_allowlistAccountsStandingChangedEvents: Array<Eth_Allowlist_AccountsStandingChangedEvent>;
  Eth_allowlistOwnerHatSetEvent?: Maybe<Eth_Allowlist_OwnerHatSetEvent>;
  Eth_allowlistOwnerHatSetEvents: Array<Eth_Allowlist_OwnerHatSetEvent>;
  Eth_allowlistArbitratorHatSetEvent?: Maybe<Eth_Allowlist_ArbitratorHatSetEvent>;
  Eth_allowlistArbitratorHatSetEvents: Array<Eth_Allowlist_ArbitratorHatSetEvent>;
  Eth_hatsElectionEligibility?: Maybe<Eth_HatsElectionEligibility>;
  Eth_hatsElectionEligibilities: Array<Eth_HatsElectionEligibility>;
  Eth_electionTerm?: Maybe<Eth_ElectionTerm>;
  Eth_electionTerms: Array<Eth_ElectionTerm>;
  Eth_electionElectionOpenedEvent?: Maybe<Eth_Election_ElectionOpenedEvent>;
  Eth_electionElectionOpenedEvents: Array<Eth_Election_ElectionOpenedEvent>;
  Eth_electionElectionCompletedEvent?: Maybe<Eth_Election_ElectionCompletedEvent>;
  Eth_electionElectionCompletedEvents: Array<Eth_Election_ElectionCompletedEvent>;
  Eth_electionNewTermStartedEvent?: Maybe<Eth_Election_NewTermStartedEvent>;
  Eth_electionNewTermStartedEvents: Array<Eth_Election_NewTermStartedEvent>;
  Eth_electionRecalledEvent?: Maybe<Eth_Election_RecalledEvent>;
  Eth_electionRecalledEvents: Array<Eth_Election_RecalledEvent>;
  Eth_passthroughModule?: Maybe<Eth_PassthroughModule>;
  Eth_passthroughModules: Array<Eth_PassthroughModule>;
  Eth_stakingEligibility?: Maybe<Eth_StakingEligibility>;
  Eth_stakingEligibilities: Array<Eth_StakingEligibility>;
  Eth_stake?: Maybe<Eth_Stake>;
  Eth_stakes: Array<Eth_Stake>;
  Eth_stakingStakedEvent?: Maybe<Eth_Staking_StakedEvent>;
  Eth_stakingStakedEvents: Array<Eth_Staking_StakedEvent>;
  Eth_stakingUnstakeBegunEvent?: Maybe<Eth_Staking_UnstakeBegunEvent>;
  Eth_stakingUnstakeBegunEvents: Array<Eth_Staking_UnstakeBegunEvent>;
  Eth_stakingSlashedEvent?: Maybe<Eth_Staking_SlashedEvent>;
  Eth_stakingSlashedEvents: Array<Eth_Staking_SlashedEvent>;
  Eth_stakingMinStakeChangedEvent?: Maybe<Eth_Staking_MinStakeChangedEvent>;
  Eth_stakingMinStakeChangedEvents: Array<Eth_Staking_MinStakeChangedEvent>;
  Eth_stakingJudgeHatChangedEvent?: Maybe<Eth_Staking_JudgeHatChangedEvent>;
  Eth_stakingJudgeHatChangedEvents: Array<Eth_Staking_JudgeHatChangedEvent>;
  Eth_stakingRecipientHatChangedEvent?: Maybe<Eth_Staking_RecipientHatChangedEvent>;
  Eth_stakingRecipientHatChangedEvents: Array<Eth_Staking_RecipientHatChangedEvent>;
  Eth_stakingCooldownPeriodChangedEvent?: Maybe<Eth_Staking_CooldownPeriodChangedEvent>;
  Eth_stakingCooldownPeriodChangedEvents: Array<Eth_Staking_CooldownPeriodChangedEvent>;
  Eth_stakingForgivenEvent?: Maybe<Eth_Staking_ForgivenEvent>;
  Eth_stakingForgivenEvents: Array<Eth_Staking_ForgivenEvent>;
  Eth_seasonToggle?: Maybe<Eth_SeasonToggle>;
  Eth_seasonToggles: Array<Eth_SeasonToggle>;
  Eth_characterSheetsLevelEligibility?: Maybe<Eth_CharacterSheetsLevelEligibility>;
  Eth_characterSheetsLevelEligibilities: Array<Eth_CharacterSheetsLevelEligibility>;
  Eth_agreementEligibility?: Maybe<Eth_AgreementEligibility>;
  Eth_agreementEligibilities: Array<Eth_AgreementEligibility>;
  Eth_agreement?: Maybe<Eth_Agreement>;
  Eth_agreements: Array<Eth_Agreement>;
  Eth_agreementHatClaimedWithAgreementEvent?: Maybe<Eth_Agreement_HatClaimedWithAgreementEvent>;
  Eth_agreementHatClaimedWithAgreementEvents: Array<Eth_Agreement_HatClaimedWithAgreementEvent>;
  Eth_agreementAgreementSignedEvent?: Maybe<Eth_Agreement_AgreementSignedEvent>;
  Eth_agreementAgreementSignedEvents: Array<Eth_Agreement_AgreementSignedEvent>;
  Eth_agreementAgreementSetEvent?: Maybe<Eth_Agreement_AgreementSetEvent>;
  Eth_agreementAgreementSetEvents: Array<Eth_Agreement_AgreementSetEvent>;
  Eth_agreementOwnerHatSetEvent?: Maybe<Eth_Agreement_OwnerHatSetEvent>;
  Eth_agreementOwnerHatSetEvents: Array<Eth_Agreement_OwnerHatSetEvent>;
  Eth_agreementArbitratorHatSetEvent?: Maybe<Eth_Agreement_ArbitratorHatSetEvent>;
  Eth_agreementArbitratorHatSetEvents: Array<Eth_Agreement_ArbitratorHatSetEvent>;
  Eth_erc20Eligibility?: Maybe<Eth_Erc20Eligibility>;
  Eth_erc20Eligibilities: Array<Eth_Erc20Eligibility>;
  Eth_erc721Eligibility?: Maybe<Eth_Erc721Eligibility>;
  Eth_erc721Eligibilities: Array<Eth_Erc721Eligibility>;
  Eth_erc1155Eligibility?: Maybe<Eth_Erc1155Eligibility>;
  Eth_erc1155Eligibilities: Array<Eth_Erc1155Eligibility>;
  Eth_hatWearingEligibility?: Maybe<Eth_HatWearingEligibility>;
  Eth_hatWearingEligibilities: Array<Eth_HatWearingEligibility>;
  Eth_gitcoinPassportEligibility?: Maybe<Eth_GitcoinPassportEligibility>;
  Eth_gitcoinPassportEligibilities: Array<Eth_GitcoinPassportEligibility>;
  Eth_coLinksEligibility?: Maybe<Eth_CoLinksEligibility>;
  Eth_coLinksEligibilities: Array<Eth_CoLinksEligibility>;
  Eth_hatControlledModule?: Maybe<Eth_HatControlledModule>;
  Eth_hatControlledModules: Array<Eth_HatControlledModule>;
  Eth_hatControlledModuleWearerStatus?: Maybe<Eth_HatControlledModuleWearerStatus>;
  Eth_hatControlledModuleWearerStatuses: Array<Eth_HatControlledModuleWearerStatus>;
  Eth_hatControlledModuleHatStatus?: Maybe<Eth_HatControlledModuleHatStatus>;
  Eth_hatControlledModuleHatStatuses: Array<Eth_HatControlledModuleHatStatus>;
  Eth_hatControlledWearerStatusSet?: Maybe<Eth_HatControlled_WearerStatusSet>;
  Eth_hatControlledWearerStatusSets: Array<Eth_HatControlled_WearerStatusSet>;
  Eth_hatControlledHatStatusSet?: Maybe<Eth_HatControlled_HatStatusSet>;
  Eth_hatControlledHatStatusSets: Array<Eth_HatControlled_HatStatusSet>;
  Eth_publicLockV14Eligibility?: Maybe<Eth_PublicLockV14Eligibility>;
  Eth_publicLockV14Eligibilities: Array<Eth_PublicLockV14Eligibility>;
  Eth_hatsEligibilitiesChain?: Maybe<Eth_HatsEligibilitiesChain>;
  Eth_hatsEligibilitiesChains: Array<Eth_HatsEligibilitiesChain>;
  Eth_eligibilitiesRuleset?: Maybe<Eth_EligibilitiesRuleset>;
  Eth_eligibilitiesRulesets: Array<Eth_EligibilitiesRuleset>;
  Eth_hatsSignerGateV2Event?: Maybe<Eth_HatsSignerGateV2Event>;
  Eth_hatsSignerGateV2Events: Array<Eth_HatsSignerGateV2Event>;
  Eth_hatsModule?: Maybe<Eth_HatsModule>;
  Eth_hatsModules: Array<Eth_HatsModule>;
  Eth_hatsModuleEvent?: Maybe<Eth_HatsModuleEvent>;
  Eth_hatsModuleEvents: Array<Eth_HatsModuleEvent>;
  Eth_jokeRaceEvent?: Maybe<Eth_JokeRaceEvent>;
  Eth_jokeRaceEvents: Array<Eth_JokeRaceEvent>;
  Eth_allowlistEvent?: Maybe<Eth_AllowlistEvent>;
  Eth_allowlistEvents: Array<Eth_AllowlistEvent>;
  Eth_electionEvent?: Maybe<Eth_ElectionEvent>;
  Eth_electionEvents: Array<Eth_ElectionEvent>;
  Eth_stakingEvent?: Maybe<Eth_StakingEvent>;
  Eth_stakingEvents: Array<Eth_StakingEvent>;
  Eth_agreementEvent?: Maybe<Eth_AgreementEvent>;
  Eth_agreementEvents: Array<Eth_AgreementEvent>;
  Eth_hatControlledModuleEvent?: Maybe<Eth_HatControlledModuleEvent>;
  Eth_hatControlledModuleEvents: Array<Eth_HatControlledModuleEvent>;
  /** Access to subgraph metadata */
  Eth__meta?: Maybe<Eth__Meta_>;
};


export type SubscriptionEth_hatAuthorityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatAuthoritiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatAuthority_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGate_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2Args = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2SArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2OwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2OwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2SignerHatsAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2SignerHatsAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_SignerHatsAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_SignerHatsAddedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2ThresholdConfigSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2ThresholdConfigSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_ThresholdConfigSetEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_ThresholdConfigSetEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2HSGLockedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2HSGLockedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_HSGLockedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_HSGLockedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2ClaimableForSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2ClaimableForSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_ClaimableForSetEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_ClaimableForSetEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2DetachedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2DetachedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_DetachedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_DetachedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2MigratedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2MigratedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_MigratedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_MigratedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2DelegatecallTargetEnabledEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2DelegatecallTargetEnabledEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_DelegatecallTargetEnabledEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_DelegatecallTargetEnabledEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2RegisteredEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2RegisteredEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_RegisteredEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_RegisteredEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2ChangedGuardEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2ChangedGuardEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_ChangedGuardEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_ChangedGuardEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2EnabledModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2EnabledModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_EnabledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_EnabledModuleEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2DisabledModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2DisabledModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2_DisabledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2_DisabledModuleEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsAccount1OfNArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsAccount1OfNsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsAccount1ofN_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsAccount1OfNOperationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsAccount1OfNOperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsAccount1ofNOperation_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsStakingShamanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsStakingShamansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsStakingShaman_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsStakingShaman_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_shamanStakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_shamanStakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_ShamanStake_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_ShamanStake_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsFarcasterDelegatorArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsFarcasterDelegatorsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsFarcasterDelegator_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_jokeRaceEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_jokeRaceEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_JokeRaceEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_jokeRaceEligibilityTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_jokeRaceEligibilityTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_JokeRaceEligibilityTerm_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_JokeRaceEligibilityTerm_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_jokeRaceNextTermSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_jokeRaceNextTermSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_JokeRace_NextTermSetEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_JokeRace_NextTermSetEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_jokeRaceTermStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_jokeRaceTermStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_JokeRace_TermStartedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_JokeRace_TermStartedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_allowListEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_allowListEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_AllowListEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_allowListEligibilityDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_allowListEligibilityDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_AllowListEligibilityData_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_AllowListEligibilityData_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_allowlistAccountAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_allowlistAccountAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Allowlist_AccountAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Allowlist_AccountAddedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_allowlistAccountsAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_allowlistAccountsAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Allowlist_AccountsAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Allowlist_AccountsAddedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_allowlistAccountRemovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_allowlistAccountRemovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Allowlist_AccountRemovedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Allowlist_AccountRemovedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_allowlistAccountsRemovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_allowlistAccountsRemovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Allowlist_AccountsRemovedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Allowlist_AccountsRemovedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_allowlistAccountStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_allowlistAccountStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Allowlist_AccountStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Allowlist_AccountStandingChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_allowlistAccountsStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_allowlistAccountsStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Allowlist_AccountsStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Allowlist_AccountsStandingChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_allowlistOwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_allowlistOwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Allowlist_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Allowlist_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_allowlistArbitratorHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_allowlistArbitratorHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Allowlist_ArbitratorHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Allowlist_ArbitratorHatSetEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsElectionEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsElectionEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsElectionEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_electionTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_electionTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_ElectionTerm_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_electionElectionOpenedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_electionElectionOpenedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Election_ElectionOpenedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Election_ElectionOpenedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_electionElectionCompletedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_electionElectionCompletedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Election_ElectionCompletedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Election_ElectionCompletedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_electionNewTermStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_electionNewTermStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Election_NewTermStartedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Election_NewTermStartedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_electionRecalledEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_electionRecalledEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Election_RecalledEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Election_RecalledEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_passthroughModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_passthroughModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_PassthroughModule_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_stakingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_stakingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_StakingEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_stakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_stakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Stake_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Stake_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_stakingStakedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_stakingStakedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Staking_StakedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Staking_StakedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_stakingUnstakeBegunEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_stakingUnstakeBegunEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Staking_UnstakeBegunEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Staking_UnstakeBegunEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_stakingSlashedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_stakingSlashedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Staking_SlashedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Staking_SlashedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_stakingMinStakeChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_stakingMinStakeChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Staking_MinStakeChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Staking_MinStakeChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_stakingJudgeHatChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_stakingJudgeHatChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Staking_JudgeHatChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Staking_JudgeHatChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_stakingRecipientHatChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_stakingRecipientHatChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Staking_RecipientHatChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Staking_RecipientHatChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_stakingCooldownPeriodChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_stakingCooldownPeriodChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Staking_CooldownPeriodChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Staking_CooldownPeriodChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_stakingForgivenEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_stakingForgivenEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Staking_ForgivenEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Staking_ForgivenEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_seasonToggleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_seasonTogglesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_SeasonToggle_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_characterSheetsLevelEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_characterSheetsLevelEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_CharacterSheetsLevelEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_agreementEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_agreementEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_AgreementEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_agreementArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_agreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Agreement_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Agreement_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_agreementHatClaimedWithAgreementEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_agreementHatClaimedWithAgreementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Agreement_HatClaimedWithAgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Agreement_HatClaimedWithAgreementEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_agreementAgreementSignedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_agreementAgreementSignedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Agreement_AgreementSignedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Agreement_AgreementSignedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_agreementAgreementSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_agreementAgreementSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Agreement_AgreementSetEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Agreement_AgreementSetEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_agreementOwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_agreementOwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Agreement_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Agreement_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_agreementArbitratorHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_agreementArbitratorHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Agreement_ArbitratorHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Agreement_ArbitratorHatSetEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_erc20EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_erc20EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Erc20Eligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Erc20Eligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_erc721EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_erc721EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Erc721Eligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Erc721Eligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_erc1155EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_erc1155EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Erc1155Eligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Erc1155Eligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatWearingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatWearingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatWearingEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatWearingEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_gitcoinPassportEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_gitcoinPassportEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_GitcoinPassportEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_GitcoinPassportEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_coLinksEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_coLinksEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_CoLinksEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_CoLinksEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatControlledModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatControlledModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatControlledModule_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatControlledModule_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatControlledModuleWearerStatusArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatControlledModuleWearerStatusesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatControlledModuleWearerStatus_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatControlledModuleWearerStatus_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatControlledModuleHatStatusArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatControlledModuleHatStatusesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatControlledModuleHatStatus_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatControlledModuleHatStatus_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatControlledWearerStatusSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatControlledWearerStatusSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatControlled_WearerStatusSet_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatControlled_WearerStatusSet_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatControlledHatStatusSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatControlledHatStatusSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatControlled_HatStatusSet_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatControlled_HatStatusSet_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_publicLockV14EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_publicLockV14EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_PublicLockV14Eligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_PublicLockV14Eligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsEligibilitiesChainArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsEligibilitiesChainsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsEligibilitiesChain_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsEligibilitiesChain_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_eligibilitiesRulesetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_eligibilitiesRulesetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_EligibilitiesRuleset_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_EligibilitiesRuleset_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2EventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateV2EventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGateV2Event_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGateV2Event_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsModule_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsModule_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsModuleEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_jokeRaceEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_jokeRaceEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_JokeRaceEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_JokeRaceEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_allowlistEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_allowlistEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_AllowlistEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_AllowlistEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_electionEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_electionEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_ElectionEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_ElectionEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_stakingEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_stakingEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_StakingEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_StakingEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_agreementEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_agreementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_AgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_AgreementEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatControlledModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatControlledModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatControlledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatControlledModuleEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth__metaArgs = {
  block?: InputMaybe<Eth_Block_height>;
};

export type Eth__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Eth_Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Eth_Bytes']['output']>;
};

/** The type for the top-level _meta field */
export type Eth__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: Eth__Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type Eth__SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  Eth_hatAuthority: InContextSdkMethod<Query['Eth_hatAuthority'], QueryEth_hatAuthorityArgs, MeshContext>,
  /** null **/
  Eth_hatAuthorities: InContextSdkMethod<Query['Eth_hatAuthorities'], QueryEth_hatAuthoritiesArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGate: InContextSdkMethod<Query['Eth_hatsSignerGate'], QueryEth_hatsSignerGateArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGates: InContextSdkMethod<Query['Eth_hatsSignerGates'], QueryEth_hatsSignerGatesArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2: InContextSdkMethod<Query['Eth_hatsSignerGateV2'], QueryEth_hatsSignerGateV2Args, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2S: InContextSdkMethod<Query['Eth_hatsSignerGateV2S'], QueryEth_hatsSignerGateV2SArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2OwnerHatSetEvent: InContextSdkMethod<Query['Eth_hatsSignerGateV2OwnerHatSetEvent'], QueryEth_hatsSignerGateV2OwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2OwnerHatSetEvents: InContextSdkMethod<Query['Eth_hatsSignerGateV2OwnerHatSetEvents'], QueryEth_hatsSignerGateV2OwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2SignerHatsAddedEvent: InContextSdkMethod<Query['Eth_hatsSignerGateV2SignerHatsAddedEvent'], QueryEth_hatsSignerGateV2SignerHatsAddedEventArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2SignerHatsAddedEvents: InContextSdkMethod<Query['Eth_hatsSignerGateV2SignerHatsAddedEvents'], QueryEth_hatsSignerGateV2SignerHatsAddedEventsArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2ThresholdConfigSetEvent: InContextSdkMethod<Query['Eth_hatsSignerGateV2ThresholdConfigSetEvent'], QueryEth_hatsSignerGateV2ThresholdConfigSetEventArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2ThresholdConfigSetEvents: InContextSdkMethod<Query['Eth_hatsSignerGateV2ThresholdConfigSetEvents'], QueryEth_hatsSignerGateV2ThresholdConfigSetEventsArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2HSGLockedEvent: InContextSdkMethod<Query['Eth_hatsSignerGateV2HSGLockedEvent'], QueryEth_hatsSignerGateV2HSGLockedEventArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2HSGLockedEvents: InContextSdkMethod<Query['Eth_hatsSignerGateV2HSGLockedEvents'], QueryEth_hatsSignerGateV2HSGLockedEventsArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2ClaimableForSetEvent: InContextSdkMethod<Query['Eth_hatsSignerGateV2ClaimableForSetEvent'], QueryEth_hatsSignerGateV2ClaimableForSetEventArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2ClaimableForSetEvents: InContextSdkMethod<Query['Eth_hatsSignerGateV2ClaimableForSetEvents'], QueryEth_hatsSignerGateV2ClaimableForSetEventsArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2DetachedEvent: InContextSdkMethod<Query['Eth_hatsSignerGateV2DetachedEvent'], QueryEth_hatsSignerGateV2DetachedEventArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2DetachedEvents: InContextSdkMethod<Query['Eth_hatsSignerGateV2DetachedEvents'], QueryEth_hatsSignerGateV2DetachedEventsArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2MigratedEvent: InContextSdkMethod<Query['Eth_hatsSignerGateV2MigratedEvent'], QueryEth_hatsSignerGateV2MigratedEventArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2MigratedEvents: InContextSdkMethod<Query['Eth_hatsSignerGateV2MigratedEvents'], QueryEth_hatsSignerGateV2MigratedEventsArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2DelegatecallTargetEnabledEvent: InContextSdkMethod<Query['Eth_hatsSignerGateV2DelegatecallTargetEnabledEvent'], QueryEth_hatsSignerGateV2DelegatecallTargetEnabledEventArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2DelegatecallTargetEnabledEvents: InContextSdkMethod<Query['Eth_hatsSignerGateV2DelegatecallTargetEnabledEvents'], QueryEth_hatsSignerGateV2DelegatecallTargetEnabledEventsArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2RegisteredEvent: InContextSdkMethod<Query['Eth_hatsSignerGateV2RegisteredEvent'], QueryEth_hatsSignerGateV2RegisteredEventArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2RegisteredEvents: InContextSdkMethod<Query['Eth_hatsSignerGateV2RegisteredEvents'], QueryEth_hatsSignerGateV2RegisteredEventsArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2ChangedGuardEvent: InContextSdkMethod<Query['Eth_hatsSignerGateV2ChangedGuardEvent'], QueryEth_hatsSignerGateV2ChangedGuardEventArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2ChangedGuardEvents: InContextSdkMethod<Query['Eth_hatsSignerGateV2ChangedGuardEvents'], QueryEth_hatsSignerGateV2ChangedGuardEventsArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2EnabledModuleEvent: InContextSdkMethod<Query['Eth_hatsSignerGateV2EnabledModuleEvent'], QueryEth_hatsSignerGateV2EnabledModuleEventArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2EnabledModuleEvents: InContextSdkMethod<Query['Eth_hatsSignerGateV2EnabledModuleEvents'], QueryEth_hatsSignerGateV2EnabledModuleEventsArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2DisabledModuleEvent: InContextSdkMethod<Query['Eth_hatsSignerGateV2DisabledModuleEvent'], QueryEth_hatsSignerGateV2DisabledModuleEventArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2DisabledModuleEvents: InContextSdkMethod<Query['Eth_hatsSignerGateV2DisabledModuleEvents'], QueryEth_hatsSignerGateV2DisabledModuleEventsArgs, MeshContext>,
  /** null **/
  Eth_hatsAccount1OfN: InContextSdkMethod<Query['Eth_hatsAccount1OfN'], QueryEth_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  Eth_hatsAccount1OfNs: InContextSdkMethod<Query['Eth_hatsAccount1OfNs'], QueryEth_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  Eth_hatsAccount1OfNOperation: InContextSdkMethod<Query['Eth_hatsAccount1OfNOperation'], QueryEth_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  Eth_hatsAccount1OfNOperations: InContextSdkMethod<Query['Eth_hatsAccount1OfNOperations'], QueryEth_hatsAccount1OfNOperationsArgs, MeshContext>,
  /** null **/
  Eth_hatsStakingShaman: InContextSdkMethod<Query['Eth_hatsStakingShaman'], QueryEth_hatsStakingShamanArgs, MeshContext>,
  /** null **/
  Eth_hatsStakingShamans: InContextSdkMethod<Query['Eth_hatsStakingShamans'], QueryEth_hatsStakingShamansArgs, MeshContext>,
  /** null **/
  Eth_shamanStake: InContextSdkMethod<Query['Eth_shamanStake'], QueryEth_shamanStakeArgs, MeshContext>,
  /** null **/
  Eth_shamanStakes: InContextSdkMethod<Query['Eth_shamanStakes'], QueryEth_shamanStakesArgs, MeshContext>,
  /** null **/
  Eth_hatsFarcasterDelegator: InContextSdkMethod<Query['Eth_hatsFarcasterDelegator'], QueryEth_hatsFarcasterDelegatorArgs, MeshContext>,
  /** null **/
  Eth_hatsFarcasterDelegators: InContextSdkMethod<Query['Eth_hatsFarcasterDelegators'], QueryEth_hatsFarcasterDelegatorsArgs, MeshContext>,
  /** null **/
  Eth_jokeRaceEligibility: InContextSdkMethod<Query['Eth_jokeRaceEligibility'], QueryEth_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  Eth_jokeRaceEligibilities: InContextSdkMethod<Query['Eth_jokeRaceEligibilities'], QueryEth_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_jokeRaceEligibilityTerm: InContextSdkMethod<Query['Eth_jokeRaceEligibilityTerm'], QueryEth_jokeRaceEligibilityTermArgs, MeshContext>,
  /** null **/
  Eth_jokeRaceEligibilityTerms: InContextSdkMethod<Query['Eth_jokeRaceEligibilityTerms'], QueryEth_jokeRaceEligibilityTermsArgs, MeshContext>,
  /** null **/
  Eth_jokeRaceNextTermSetEvent: InContextSdkMethod<Query['Eth_jokeRaceNextTermSetEvent'], QueryEth_jokeRaceNextTermSetEventArgs, MeshContext>,
  /** null **/
  Eth_jokeRaceNextTermSetEvents: InContextSdkMethod<Query['Eth_jokeRaceNextTermSetEvents'], QueryEth_jokeRaceNextTermSetEventsArgs, MeshContext>,
  /** null **/
  Eth_jokeRaceTermStartedEvent: InContextSdkMethod<Query['Eth_jokeRaceTermStartedEvent'], QueryEth_jokeRaceTermStartedEventArgs, MeshContext>,
  /** null **/
  Eth_jokeRaceTermStartedEvents: InContextSdkMethod<Query['Eth_jokeRaceTermStartedEvents'], QueryEth_jokeRaceTermStartedEventsArgs, MeshContext>,
  /** null **/
  Eth_allowListEligibility: InContextSdkMethod<Query['Eth_allowListEligibility'], QueryEth_allowListEligibilityArgs, MeshContext>,
  /** null **/
  Eth_allowListEligibilities: InContextSdkMethod<Query['Eth_allowListEligibilities'], QueryEth_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_allowListEligibilityData: InContextSdkMethod<Query['Eth_allowListEligibilityData'], QueryEth_allowListEligibilityDataArgs, MeshContext>,
  /** null **/
  Eth_allowListEligibilityDatas: InContextSdkMethod<Query['Eth_allowListEligibilityDatas'], QueryEth_allowListEligibilityDatasArgs, MeshContext>,
  /** null **/
  Eth_allowlistAccountAddedEvent: InContextSdkMethod<Query['Eth_allowlistAccountAddedEvent'], QueryEth_allowlistAccountAddedEventArgs, MeshContext>,
  /** null **/
  Eth_allowlistAccountAddedEvents: InContextSdkMethod<Query['Eth_allowlistAccountAddedEvents'], QueryEth_allowlistAccountAddedEventsArgs, MeshContext>,
  /** null **/
  Eth_allowlistAccountsAddedEvent: InContextSdkMethod<Query['Eth_allowlistAccountsAddedEvent'], QueryEth_allowlistAccountsAddedEventArgs, MeshContext>,
  /** null **/
  Eth_allowlistAccountsAddedEvents: InContextSdkMethod<Query['Eth_allowlistAccountsAddedEvents'], QueryEth_allowlistAccountsAddedEventsArgs, MeshContext>,
  /** null **/
  Eth_allowlistAccountRemovedEvent: InContextSdkMethod<Query['Eth_allowlistAccountRemovedEvent'], QueryEth_allowlistAccountRemovedEventArgs, MeshContext>,
  /** null **/
  Eth_allowlistAccountRemovedEvents: InContextSdkMethod<Query['Eth_allowlistAccountRemovedEvents'], QueryEth_allowlistAccountRemovedEventsArgs, MeshContext>,
  /** null **/
  Eth_allowlistAccountsRemovedEvent: InContextSdkMethod<Query['Eth_allowlistAccountsRemovedEvent'], QueryEth_allowlistAccountsRemovedEventArgs, MeshContext>,
  /** null **/
  Eth_allowlistAccountsRemovedEvents: InContextSdkMethod<Query['Eth_allowlistAccountsRemovedEvents'], QueryEth_allowlistAccountsRemovedEventsArgs, MeshContext>,
  /** null **/
  Eth_allowlistAccountStandingChangedEvent: InContextSdkMethod<Query['Eth_allowlistAccountStandingChangedEvent'], QueryEth_allowlistAccountStandingChangedEventArgs, MeshContext>,
  /** null **/
  Eth_allowlistAccountStandingChangedEvents: InContextSdkMethod<Query['Eth_allowlistAccountStandingChangedEvents'], QueryEth_allowlistAccountStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Eth_allowlistAccountsStandingChangedEvent: InContextSdkMethod<Query['Eth_allowlistAccountsStandingChangedEvent'], QueryEth_allowlistAccountsStandingChangedEventArgs, MeshContext>,
  /** null **/
  Eth_allowlistAccountsStandingChangedEvents: InContextSdkMethod<Query['Eth_allowlistAccountsStandingChangedEvents'], QueryEth_allowlistAccountsStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Eth_allowlistOwnerHatSetEvent: InContextSdkMethod<Query['Eth_allowlistOwnerHatSetEvent'], QueryEth_allowlistOwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Eth_allowlistOwnerHatSetEvents: InContextSdkMethod<Query['Eth_allowlistOwnerHatSetEvents'], QueryEth_allowlistOwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Eth_allowlistArbitratorHatSetEvent: InContextSdkMethod<Query['Eth_allowlistArbitratorHatSetEvent'], QueryEth_allowlistArbitratorHatSetEventArgs, MeshContext>,
  /** null **/
  Eth_allowlistArbitratorHatSetEvents: InContextSdkMethod<Query['Eth_allowlistArbitratorHatSetEvents'], QueryEth_allowlistArbitratorHatSetEventsArgs, MeshContext>,
  /** null **/
  Eth_hatsElectionEligibility: InContextSdkMethod<Query['Eth_hatsElectionEligibility'], QueryEth_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  Eth_hatsElectionEligibilities: InContextSdkMethod<Query['Eth_hatsElectionEligibilities'], QueryEth_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_electionTerm: InContextSdkMethod<Query['Eth_electionTerm'], QueryEth_electionTermArgs, MeshContext>,
  /** null **/
  Eth_electionTerms: InContextSdkMethod<Query['Eth_electionTerms'], QueryEth_electionTermsArgs, MeshContext>,
  /** null **/
  Eth_electionElectionOpenedEvent: InContextSdkMethod<Query['Eth_electionElectionOpenedEvent'], QueryEth_electionElectionOpenedEventArgs, MeshContext>,
  /** null **/
  Eth_electionElectionOpenedEvents: InContextSdkMethod<Query['Eth_electionElectionOpenedEvents'], QueryEth_electionElectionOpenedEventsArgs, MeshContext>,
  /** null **/
  Eth_electionElectionCompletedEvent: InContextSdkMethod<Query['Eth_electionElectionCompletedEvent'], QueryEth_electionElectionCompletedEventArgs, MeshContext>,
  /** null **/
  Eth_electionElectionCompletedEvents: InContextSdkMethod<Query['Eth_electionElectionCompletedEvents'], QueryEth_electionElectionCompletedEventsArgs, MeshContext>,
  /** null **/
  Eth_electionNewTermStartedEvent: InContextSdkMethod<Query['Eth_electionNewTermStartedEvent'], QueryEth_electionNewTermStartedEventArgs, MeshContext>,
  /** null **/
  Eth_electionNewTermStartedEvents: InContextSdkMethod<Query['Eth_electionNewTermStartedEvents'], QueryEth_electionNewTermStartedEventsArgs, MeshContext>,
  /** null **/
  Eth_electionRecalledEvent: InContextSdkMethod<Query['Eth_electionRecalledEvent'], QueryEth_electionRecalledEventArgs, MeshContext>,
  /** null **/
  Eth_electionRecalledEvents: InContextSdkMethod<Query['Eth_electionRecalledEvents'], QueryEth_electionRecalledEventsArgs, MeshContext>,
  /** null **/
  Eth_passthroughModule: InContextSdkMethod<Query['Eth_passthroughModule'], QueryEth_passthroughModuleArgs, MeshContext>,
  /** null **/
  Eth_passthroughModules: InContextSdkMethod<Query['Eth_passthroughModules'], QueryEth_passthroughModulesArgs, MeshContext>,
  /** null **/
  Eth_stakingEligibility: InContextSdkMethod<Query['Eth_stakingEligibility'], QueryEth_stakingEligibilityArgs, MeshContext>,
  /** null **/
  Eth_stakingEligibilities: InContextSdkMethod<Query['Eth_stakingEligibilities'], QueryEth_stakingEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_stake: InContextSdkMethod<Query['Eth_stake'], QueryEth_stakeArgs, MeshContext>,
  /** null **/
  Eth_stakes: InContextSdkMethod<Query['Eth_stakes'], QueryEth_stakesArgs, MeshContext>,
  /** null **/
  Eth_stakingStakedEvent: InContextSdkMethod<Query['Eth_stakingStakedEvent'], QueryEth_stakingStakedEventArgs, MeshContext>,
  /** null **/
  Eth_stakingStakedEvents: InContextSdkMethod<Query['Eth_stakingStakedEvents'], QueryEth_stakingStakedEventsArgs, MeshContext>,
  /** null **/
  Eth_stakingUnstakeBegunEvent: InContextSdkMethod<Query['Eth_stakingUnstakeBegunEvent'], QueryEth_stakingUnstakeBegunEventArgs, MeshContext>,
  /** null **/
  Eth_stakingUnstakeBegunEvents: InContextSdkMethod<Query['Eth_stakingUnstakeBegunEvents'], QueryEth_stakingUnstakeBegunEventsArgs, MeshContext>,
  /** null **/
  Eth_stakingSlashedEvent: InContextSdkMethod<Query['Eth_stakingSlashedEvent'], QueryEth_stakingSlashedEventArgs, MeshContext>,
  /** null **/
  Eth_stakingSlashedEvents: InContextSdkMethod<Query['Eth_stakingSlashedEvents'], QueryEth_stakingSlashedEventsArgs, MeshContext>,
  /** null **/
  Eth_stakingMinStakeChangedEvent: InContextSdkMethod<Query['Eth_stakingMinStakeChangedEvent'], QueryEth_stakingMinStakeChangedEventArgs, MeshContext>,
  /** null **/
  Eth_stakingMinStakeChangedEvents: InContextSdkMethod<Query['Eth_stakingMinStakeChangedEvents'], QueryEth_stakingMinStakeChangedEventsArgs, MeshContext>,
  /** null **/
  Eth_stakingJudgeHatChangedEvent: InContextSdkMethod<Query['Eth_stakingJudgeHatChangedEvent'], QueryEth_stakingJudgeHatChangedEventArgs, MeshContext>,
  /** null **/
  Eth_stakingJudgeHatChangedEvents: InContextSdkMethod<Query['Eth_stakingJudgeHatChangedEvents'], QueryEth_stakingJudgeHatChangedEventsArgs, MeshContext>,
  /** null **/
  Eth_stakingRecipientHatChangedEvent: InContextSdkMethod<Query['Eth_stakingRecipientHatChangedEvent'], QueryEth_stakingRecipientHatChangedEventArgs, MeshContext>,
  /** null **/
  Eth_stakingRecipientHatChangedEvents: InContextSdkMethod<Query['Eth_stakingRecipientHatChangedEvents'], QueryEth_stakingRecipientHatChangedEventsArgs, MeshContext>,
  /** null **/
  Eth_stakingCooldownPeriodChangedEvent: InContextSdkMethod<Query['Eth_stakingCooldownPeriodChangedEvent'], QueryEth_stakingCooldownPeriodChangedEventArgs, MeshContext>,
  /** null **/
  Eth_stakingCooldownPeriodChangedEvents: InContextSdkMethod<Query['Eth_stakingCooldownPeriodChangedEvents'], QueryEth_stakingCooldownPeriodChangedEventsArgs, MeshContext>,
  /** null **/
  Eth_stakingForgivenEvent: InContextSdkMethod<Query['Eth_stakingForgivenEvent'], QueryEth_stakingForgivenEventArgs, MeshContext>,
  /** null **/
  Eth_stakingForgivenEvents: InContextSdkMethod<Query['Eth_stakingForgivenEvents'], QueryEth_stakingForgivenEventsArgs, MeshContext>,
  /** null **/
  Eth_seasonToggle: InContextSdkMethod<Query['Eth_seasonToggle'], QueryEth_seasonToggleArgs, MeshContext>,
  /** null **/
  Eth_seasonToggles: InContextSdkMethod<Query['Eth_seasonToggles'], QueryEth_seasonTogglesArgs, MeshContext>,
  /** null **/
  Eth_characterSheetsLevelEligibility: InContextSdkMethod<Query['Eth_characterSheetsLevelEligibility'], QueryEth_characterSheetsLevelEligibilityArgs, MeshContext>,
  /** null **/
  Eth_characterSheetsLevelEligibilities: InContextSdkMethod<Query['Eth_characterSheetsLevelEligibilities'], QueryEth_characterSheetsLevelEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_agreementEligibility: InContextSdkMethod<Query['Eth_agreementEligibility'], QueryEth_agreementEligibilityArgs, MeshContext>,
  /** null **/
  Eth_agreementEligibilities: InContextSdkMethod<Query['Eth_agreementEligibilities'], QueryEth_agreementEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_agreement: InContextSdkMethod<Query['Eth_agreement'], QueryEth_agreementArgs, MeshContext>,
  /** null **/
  Eth_agreements: InContextSdkMethod<Query['Eth_agreements'], QueryEth_agreementsArgs, MeshContext>,
  /** null **/
  Eth_agreementHatClaimedWithAgreementEvent: InContextSdkMethod<Query['Eth_agreementHatClaimedWithAgreementEvent'], QueryEth_agreementHatClaimedWithAgreementEventArgs, MeshContext>,
  /** null **/
  Eth_agreementHatClaimedWithAgreementEvents: InContextSdkMethod<Query['Eth_agreementHatClaimedWithAgreementEvents'], QueryEth_agreementHatClaimedWithAgreementEventsArgs, MeshContext>,
  /** null **/
  Eth_agreementAgreementSignedEvent: InContextSdkMethod<Query['Eth_agreementAgreementSignedEvent'], QueryEth_agreementAgreementSignedEventArgs, MeshContext>,
  /** null **/
  Eth_agreementAgreementSignedEvents: InContextSdkMethod<Query['Eth_agreementAgreementSignedEvents'], QueryEth_agreementAgreementSignedEventsArgs, MeshContext>,
  /** null **/
  Eth_agreementAgreementSetEvent: InContextSdkMethod<Query['Eth_agreementAgreementSetEvent'], QueryEth_agreementAgreementSetEventArgs, MeshContext>,
  /** null **/
  Eth_agreementAgreementSetEvents: InContextSdkMethod<Query['Eth_agreementAgreementSetEvents'], QueryEth_agreementAgreementSetEventsArgs, MeshContext>,
  /** null **/
  Eth_agreementOwnerHatSetEvent: InContextSdkMethod<Query['Eth_agreementOwnerHatSetEvent'], QueryEth_agreementOwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Eth_agreementOwnerHatSetEvents: InContextSdkMethod<Query['Eth_agreementOwnerHatSetEvents'], QueryEth_agreementOwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Eth_agreementArbitratorHatSetEvent: InContextSdkMethod<Query['Eth_agreementArbitratorHatSetEvent'], QueryEth_agreementArbitratorHatSetEventArgs, MeshContext>,
  /** null **/
  Eth_agreementArbitratorHatSetEvents: InContextSdkMethod<Query['Eth_agreementArbitratorHatSetEvents'], QueryEth_agreementArbitratorHatSetEventsArgs, MeshContext>,
  /** null **/
  Eth_erc20Eligibility: InContextSdkMethod<Query['Eth_erc20Eligibility'], QueryEth_erc20EligibilityArgs, MeshContext>,
  /** null **/
  Eth_erc20Eligibilities: InContextSdkMethod<Query['Eth_erc20Eligibilities'], QueryEth_erc20EligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_erc721Eligibility: InContextSdkMethod<Query['Eth_erc721Eligibility'], QueryEth_erc721EligibilityArgs, MeshContext>,
  /** null **/
  Eth_erc721Eligibilities: InContextSdkMethod<Query['Eth_erc721Eligibilities'], QueryEth_erc721EligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_erc1155Eligibility: InContextSdkMethod<Query['Eth_erc1155Eligibility'], QueryEth_erc1155EligibilityArgs, MeshContext>,
  /** null **/
  Eth_erc1155Eligibilities: InContextSdkMethod<Query['Eth_erc1155Eligibilities'], QueryEth_erc1155EligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_hatWearingEligibility: InContextSdkMethod<Query['Eth_hatWearingEligibility'], QueryEth_hatWearingEligibilityArgs, MeshContext>,
  /** null **/
  Eth_hatWearingEligibilities: InContextSdkMethod<Query['Eth_hatWearingEligibilities'], QueryEth_hatWearingEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_gitcoinPassportEligibility: InContextSdkMethod<Query['Eth_gitcoinPassportEligibility'], QueryEth_gitcoinPassportEligibilityArgs, MeshContext>,
  /** null **/
  Eth_gitcoinPassportEligibilities: InContextSdkMethod<Query['Eth_gitcoinPassportEligibilities'], QueryEth_gitcoinPassportEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_coLinksEligibility: InContextSdkMethod<Query['Eth_coLinksEligibility'], QueryEth_coLinksEligibilityArgs, MeshContext>,
  /** null **/
  Eth_coLinksEligibilities: InContextSdkMethod<Query['Eth_coLinksEligibilities'], QueryEth_coLinksEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_hatControlledModule: InContextSdkMethod<Query['Eth_hatControlledModule'], QueryEth_hatControlledModuleArgs, MeshContext>,
  /** null **/
  Eth_hatControlledModules: InContextSdkMethod<Query['Eth_hatControlledModules'], QueryEth_hatControlledModulesArgs, MeshContext>,
  /** null **/
  Eth_hatControlledModuleWearerStatus: InContextSdkMethod<Query['Eth_hatControlledModuleWearerStatus'], QueryEth_hatControlledModuleWearerStatusArgs, MeshContext>,
  /** null **/
  Eth_hatControlledModuleWearerStatuses: InContextSdkMethod<Query['Eth_hatControlledModuleWearerStatuses'], QueryEth_hatControlledModuleWearerStatusesArgs, MeshContext>,
  /** null **/
  Eth_hatControlledModuleHatStatus: InContextSdkMethod<Query['Eth_hatControlledModuleHatStatus'], QueryEth_hatControlledModuleHatStatusArgs, MeshContext>,
  /** null **/
  Eth_hatControlledModuleHatStatuses: InContextSdkMethod<Query['Eth_hatControlledModuleHatStatuses'], QueryEth_hatControlledModuleHatStatusesArgs, MeshContext>,
  /** null **/
  Eth_hatControlledWearerStatusSet: InContextSdkMethod<Query['Eth_hatControlledWearerStatusSet'], QueryEth_hatControlledWearerStatusSetArgs, MeshContext>,
  /** null **/
  Eth_hatControlledWearerStatusSets: InContextSdkMethod<Query['Eth_hatControlledWearerStatusSets'], QueryEth_hatControlledWearerStatusSetsArgs, MeshContext>,
  /** null **/
  Eth_hatControlledHatStatusSet: InContextSdkMethod<Query['Eth_hatControlledHatStatusSet'], QueryEth_hatControlledHatStatusSetArgs, MeshContext>,
  /** null **/
  Eth_hatControlledHatStatusSets: InContextSdkMethod<Query['Eth_hatControlledHatStatusSets'], QueryEth_hatControlledHatStatusSetsArgs, MeshContext>,
  /** null **/
  Eth_publicLockV14Eligibility: InContextSdkMethod<Query['Eth_publicLockV14Eligibility'], QueryEth_publicLockV14EligibilityArgs, MeshContext>,
  /** null **/
  Eth_publicLockV14Eligibilities: InContextSdkMethod<Query['Eth_publicLockV14Eligibilities'], QueryEth_publicLockV14EligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_hatsEligibilitiesChain: InContextSdkMethod<Query['Eth_hatsEligibilitiesChain'], QueryEth_hatsEligibilitiesChainArgs, MeshContext>,
  /** null **/
  Eth_hatsEligibilitiesChains: InContextSdkMethod<Query['Eth_hatsEligibilitiesChains'], QueryEth_hatsEligibilitiesChainsArgs, MeshContext>,
  /** null **/
  Eth_eligibilitiesRuleset: InContextSdkMethod<Query['Eth_eligibilitiesRuleset'], QueryEth_eligibilitiesRulesetArgs, MeshContext>,
  /** null **/
  Eth_eligibilitiesRulesets: InContextSdkMethod<Query['Eth_eligibilitiesRulesets'], QueryEth_eligibilitiesRulesetsArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2Event: InContextSdkMethod<Query['Eth_hatsSignerGateV2Event'], QueryEth_hatsSignerGateV2EventArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2Events: InContextSdkMethod<Query['Eth_hatsSignerGateV2Events'], QueryEth_hatsSignerGateV2EventsArgs, MeshContext>,
  /** null **/
  Eth_hatsModule: InContextSdkMethod<Query['Eth_hatsModule'], QueryEth_hatsModuleArgs, MeshContext>,
  /** null **/
  Eth_hatsModules: InContextSdkMethod<Query['Eth_hatsModules'], QueryEth_hatsModulesArgs, MeshContext>,
  /** null **/
  Eth_hatsModuleEvent: InContextSdkMethod<Query['Eth_hatsModuleEvent'], QueryEth_hatsModuleEventArgs, MeshContext>,
  /** null **/
  Eth_hatsModuleEvents: InContextSdkMethod<Query['Eth_hatsModuleEvents'], QueryEth_hatsModuleEventsArgs, MeshContext>,
  /** null **/
  Eth_jokeRaceEvent: InContextSdkMethod<Query['Eth_jokeRaceEvent'], QueryEth_jokeRaceEventArgs, MeshContext>,
  /** null **/
  Eth_jokeRaceEvents: InContextSdkMethod<Query['Eth_jokeRaceEvents'], QueryEth_jokeRaceEventsArgs, MeshContext>,
  /** null **/
  Eth_allowlistEvent: InContextSdkMethod<Query['Eth_allowlistEvent'], QueryEth_allowlistEventArgs, MeshContext>,
  /** null **/
  Eth_allowlistEvents: InContextSdkMethod<Query['Eth_allowlistEvents'], QueryEth_allowlistEventsArgs, MeshContext>,
  /** null **/
  Eth_electionEvent: InContextSdkMethod<Query['Eth_electionEvent'], QueryEth_electionEventArgs, MeshContext>,
  /** null **/
  Eth_electionEvents: InContextSdkMethod<Query['Eth_electionEvents'], QueryEth_electionEventsArgs, MeshContext>,
  /** null **/
  Eth_stakingEvent: InContextSdkMethod<Query['Eth_stakingEvent'], QueryEth_stakingEventArgs, MeshContext>,
  /** null **/
  Eth_stakingEvents: InContextSdkMethod<Query['Eth_stakingEvents'], QueryEth_stakingEventsArgs, MeshContext>,
  /** null **/
  Eth_agreementEvent: InContextSdkMethod<Query['Eth_agreementEvent'], QueryEth_agreementEventArgs, MeshContext>,
  /** null **/
  Eth_agreementEvents: InContextSdkMethod<Query['Eth_agreementEvents'], QueryEth_agreementEventsArgs, MeshContext>,
  /** null **/
  Eth_hatControlledModuleEvent: InContextSdkMethod<Query['Eth_hatControlledModuleEvent'], QueryEth_hatControlledModuleEventArgs, MeshContext>,
  /** null **/
  Eth_hatControlledModuleEvents: InContextSdkMethod<Query['Eth_hatControlledModuleEvents'], QueryEth_hatControlledModuleEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Eth__meta: InContextSdkMethod<Query['Eth__meta'], QueryEth__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  Eth_hatAuthority: InContextSdkMethod<Subscription['Eth_hatAuthority'], SubscriptionEth_hatAuthorityArgs, MeshContext>,
  /** null **/
  Eth_hatAuthorities: InContextSdkMethod<Subscription['Eth_hatAuthorities'], SubscriptionEth_hatAuthoritiesArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGate: InContextSdkMethod<Subscription['Eth_hatsSignerGate'], SubscriptionEth_hatsSignerGateArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGates: InContextSdkMethod<Subscription['Eth_hatsSignerGates'], SubscriptionEth_hatsSignerGatesArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2'], SubscriptionEth_hatsSignerGateV2Args, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2S: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2S'], SubscriptionEth_hatsSignerGateV2SArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2OwnerHatSetEvent: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2OwnerHatSetEvent'], SubscriptionEth_hatsSignerGateV2OwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2OwnerHatSetEvents: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2OwnerHatSetEvents'], SubscriptionEth_hatsSignerGateV2OwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2SignerHatsAddedEvent: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2SignerHatsAddedEvent'], SubscriptionEth_hatsSignerGateV2SignerHatsAddedEventArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2SignerHatsAddedEvents: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2SignerHatsAddedEvents'], SubscriptionEth_hatsSignerGateV2SignerHatsAddedEventsArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2ThresholdConfigSetEvent: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2ThresholdConfigSetEvent'], SubscriptionEth_hatsSignerGateV2ThresholdConfigSetEventArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2ThresholdConfigSetEvents: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2ThresholdConfigSetEvents'], SubscriptionEth_hatsSignerGateV2ThresholdConfigSetEventsArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2HSGLockedEvent: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2HSGLockedEvent'], SubscriptionEth_hatsSignerGateV2HSGLockedEventArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2HSGLockedEvents: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2HSGLockedEvents'], SubscriptionEth_hatsSignerGateV2HSGLockedEventsArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2ClaimableForSetEvent: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2ClaimableForSetEvent'], SubscriptionEth_hatsSignerGateV2ClaimableForSetEventArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2ClaimableForSetEvents: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2ClaimableForSetEvents'], SubscriptionEth_hatsSignerGateV2ClaimableForSetEventsArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2DetachedEvent: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2DetachedEvent'], SubscriptionEth_hatsSignerGateV2DetachedEventArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2DetachedEvents: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2DetachedEvents'], SubscriptionEth_hatsSignerGateV2DetachedEventsArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2MigratedEvent: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2MigratedEvent'], SubscriptionEth_hatsSignerGateV2MigratedEventArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2MigratedEvents: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2MigratedEvents'], SubscriptionEth_hatsSignerGateV2MigratedEventsArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2DelegatecallTargetEnabledEvent: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2DelegatecallTargetEnabledEvent'], SubscriptionEth_hatsSignerGateV2DelegatecallTargetEnabledEventArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2DelegatecallTargetEnabledEvents: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2DelegatecallTargetEnabledEvents'], SubscriptionEth_hatsSignerGateV2DelegatecallTargetEnabledEventsArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2RegisteredEvent: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2RegisteredEvent'], SubscriptionEth_hatsSignerGateV2RegisteredEventArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2RegisteredEvents: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2RegisteredEvents'], SubscriptionEth_hatsSignerGateV2RegisteredEventsArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2ChangedGuardEvent: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2ChangedGuardEvent'], SubscriptionEth_hatsSignerGateV2ChangedGuardEventArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2ChangedGuardEvents: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2ChangedGuardEvents'], SubscriptionEth_hatsSignerGateV2ChangedGuardEventsArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2EnabledModuleEvent: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2EnabledModuleEvent'], SubscriptionEth_hatsSignerGateV2EnabledModuleEventArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2EnabledModuleEvents: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2EnabledModuleEvents'], SubscriptionEth_hatsSignerGateV2EnabledModuleEventsArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2DisabledModuleEvent: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2DisabledModuleEvent'], SubscriptionEth_hatsSignerGateV2DisabledModuleEventArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2DisabledModuleEvents: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2DisabledModuleEvents'], SubscriptionEth_hatsSignerGateV2DisabledModuleEventsArgs, MeshContext>,
  /** null **/
  Eth_hatsAccount1OfN: InContextSdkMethod<Subscription['Eth_hatsAccount1OfN'], SubscriptionEth_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  Eth_hatsAccount1OfNs: InContextSdkMethod<Subscription['Eth_hatsAccount1OfNs'], SubscriptionEth_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  Eth_hatsAccount1OfNOperation: InContextSdkMethod<Subscription['Eth_hatsAccount1OfNOperation'], SubscriptionEth_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  Eth_hatsAccount1OfNOperations: InContextSdkMethod<Subscription['Eth_hatsAccount1OfNOperations'], SubscriptionEth_hatsAccount1OfNOperationsArgs, MeshContext>,
  /** null **/
  Eth_hatsStakingShaman: InContextSdkMethod<Subscription['Eth_hatsStakingShaman'], SubscriptionEth_hatsStakingShamanArgs, MeshContext>,
  /** null **/
  Eth_hatsStakingShamans: InContextSdkMethod<Subscription['Eth_hatsStakingShamans'], SubscriptionEth_hatsStakingShamansArgs, MeshContext>,
  /** null **/
  Eth_shamanStake: InContextSdkMethod<Subscription['Eth_shamanStake'], SubscriptionEth_shamanStakeArgs, MeshContext>,
  /** null **/
  Eth_shamanStakes: InContextSdkMethod<Subscription['Eth_shamanStakes'], SubscriptionEth_shamanStakesArgs, MeshContext>,
  /** null **/
  Eth_hatsFarcasterDelegator: InContextSdkMethod<Subscription['Eth_hatsFarcasterDelegator'], SubscriptionEth_hatsFarcasterDelegatorArgs, MeshContext>,
  /** null **/
  Eth_hatsFarcasterDelegators: InContextSdkMethod<Subscription['Eth_hatsFarcasterDelegators'], SubscriptionEth_hatsFarcasterDelegatorsArgs, MeshContext>,
  /** null **/
  Eth_jokeRaceEligibility: InContextSdkMethod<Subscription['Eth_jokeRaceEligibility'], SubscriptionEth_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  Eth_jokeRaceEligibilities: InContextSdkMethod<Subscription['Eth_jokeRaceEligibilities'], SubscriptionEth_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_jokeRaceEligibilityTerm: InContextSdkMethod<Subscription['Eth_jokeRaceEligibilityTerm'], SubscriptionEth_jokeRaceEligibilityTermArgs, MeshContext>,
  /** null **/
  Eth_jokeRaceEligibilityTerms: InContextSdkMethod<Subscription['Eth_jokeRaceEligibilityTerms'], SubscriptionEth_jokeRaceEligibilityTermsArgs, MeshContext>,
  /** null **/
  Eth_jokeRaceNextTermSetEvent: InContextSdkMethod<Subscription['Eth_jokeRaceNextTermSetEvent'], SubscriptionEth_jokeRaceNextTermSetEventArgs, MeshContext>,
  /** null **/
  Eth_jokeRaceNextTermSetEvents: InContextSdkMethod<Subscription['Eth_jokeRaceNextTermSetEvents'], SubscriptionEth_jokeRaceNextTermSetEventsArgs, MeshContext>,
  /** null **/
  Eth_jokeRaceTermStartedEvent: InContextSdkMethod<Subscription['Eth_jokeRaceTermStartedEvent'], SubscriptionEth_jokeRaceTermStartedEventArgs, MeshContext>,
  /** null **/
  Eth_jokeRaceTermStartedEvents: InContextSdkMethod<Subscription['Eth_jokeRaceTermStartedEvents'], SubscriptionEth_jokeRaceTermStartedEventsArgs, MeshContext>,
  /** null **/
  Eth_allowListEligibility: InContextSdkMethod<Subscription['Eth_allowListEligibility'], SubscriptionEth_allowListEligibilityArgs, MeshContext>,
  /** null **/
  Eth_allowListEligibilities: InContextSdkMethod<Subscription['Eth_allowListEligibilities'], SubscriptionEth_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_allowListEligibilityData: InContextSdkMethod<Subscription['Eth_allowListEligibilityData'], SubscriptionEth_allowListEligibilityDataArgs, MeshContext>,
  /** null **/
  Eth_allowListEligibilityDatas: InContextSdkMethod<Subscription['Eth_allowListEligibilityDatas'], SubscriptionEth_allowListEligibilityDatasArgs, MeshContext>,
  /** null **/
  Eth_allowlistAccountAddedEvent: InContextSdkMethod<Subscription['Eth_allowlistAccountAddedEvent'], SubscriptionEth_allowlistAccountAddedEventArgs, MeshContext>,
  /** null **/
  Eth_allowlistAccountAddedEvents: InContextSdkMethod<Subscription['Eth_allowlistAccountAddedEvents'], SubscriptionEth_allowlistAccountAddedEventsArgs, MeshContext>,
  /** null **/
  Eth_allowlistAccountsAddedEvent: InContextSdkMethod<Subscription['Eth_allowlistAccountsAddedEvent'], SubscriptionEth_allowlistAccountsAddedEventArgs, MeshContext>,
  /** null **/
  Eth_allowlistAccountsAddedEvents: InContextSdkMethod<Subscription['Eth_allowlistAccountsAddedEvents'], SubscriptionEth_allowlistAccountsAddedEventsArgs, MeshContext>,
  /** null **/
  Eth_allowlistAccountRemovedEvent: InContextSdkMethod<Subscription['Eth_allowlistAccountRemovedEvent'], SubscriptionEth_allowlistAccountRemovedEventArgs, MeshContext>,
  /** null **/
  Eth_allowlistAccountRemovedEvents: InContextSdkMethod<Subscription['Eth_allowlistAccountRemovedEvents'], SubscriptionEth_allowlistAccountRemovedEventsArgs, MeshContext>,
  /** null **/
  Eth_allowlistAccountsRemovedEvent: InContextSdkMethod<Subscription['Eth_allowlistAccountsRemovedEvent'], SubscriptionEth_allowlistAccountsRemovedEventArgs, MeshContext>,
  /** null **/
  Eth_allowlistAccountsRemovedEvents: InContextSdkMethod<Subscription['Eth_allowlistAccountsRemovedEvents'], SubscriptionEth_allowlistAccountsRemovedEventsArgs, MeshContext>,
  /** null **/
  Eth_allowlistAccountStandingChangedEvent: InContextSdkMethod<Subscription['Eth_allowlistAccountStandingChangedEvent'], SubscriptionEth_allowlistAccountStandingChangedEventArgs, MeshContext>,
  /** null **/
  Eth_allowlistAccountStandingChangedEvents: InContextSdkMethod<Subscription['Eth_allowlistAccountStandingChangedEvents'], SubscriptionEth_allowlistAccountStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Eth_allowlistAccountsStandingChangedEvent: InContextSdkMethod<Subscription['Eth_allowlistAccountsStandingChangedEvent'], SubscriptionEth_allowlistAccountsStandingChangedEventArgs, MeshContext>,
  /** null **/
  Eth_allowlistAccountsStandingChangedEvents: InContextSdkMethod<Subscription['Eth_allowlistAccountsStandingChangedEvents'], SubscriptionEth_allowlistAccountsStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Eth_allowlistOwnerHatSetEvent: InContextSdkMethod<Subscription['Eth_allowlistOwnerHatSetEvent'], SubscriptionEth_allowlistOwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Eth_allowlistOwnerHatSetEvents: InContextSdkMethod<Subscription['Eth_allowlistOwnerHatSetEvents'], SubscriptionEth_allowlistOwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Eth_allowlistArbitratorHatSetEvent: InContextSdkMethod<Subscription['Eth_allowlistArbitratorHatSetEvent'], SubscriptionEth_allowlistArbitratorHatSetEventArgs, MeshContext>,
  /** null **/
  Eth_allowlistArbitratorHatSetEvents: InContextSdkMethod<Subscription['Eth_allowlistArbitratorHatSetEvents'], SubscriptionEth_allowlistArbitratorHatSetEventsArgs, MeshContext>,
  /** null **/
  Eth_hatsElectionEligibility: InContextSdkMethod<Subscription['Eth_hatsElectionEligibility'], SubscriptionEth_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  Eth_hatsElectionEligibilities: InContextSdkMethod<Subscription['Eth_hatsElectionEligibilities'], SubscriptionEth_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_electionTerm: InContextSdkMethod<Subscription['Eth_electionTerm'], SubscriptionEth_electionTermArgs, MeshContext>,
  /** null **/
  Eth_electionTerms: InContextSdkMethod<Subscription['Eth_electionTerms'], SubscriptionEth_electionTermsArgs, MeshContext>,
  /** null **/
  Eth_electionElectionOpenedEvent: InContextSdkMethod<Subscription['Eth_electionElectionOpenedEvent'], SubscriptionEth_electionElectionOpenedEventArgs, MeshContext>,
  /** null **/
  Eth_electionElectionOpenedEvents: InContextSdkMethod<Subscription['Eth_electionElectionOpenedEvents'], SubscriptionEth_electionElectionOpenedEventsArgs, MeshContext>,
  /** null **/
  Eth_electionElectionCompletedEvent: InContextSdkMethod<Subscription['Eth_electionElectionCompletedEvent'], SubscriptionEth_electionElectionCompletedEventArgs, MeshContext>,
  /** null **/
  Eth_electionElectionCompletedEvents: InContextSdkMethod<Subscription['Eth_electionElectionCompletedEvents'], SubscriptionEth_electionElectionCompletedEventsArgs, MeshContext>,
  /** null **/
  Eth_electionNewTermStartedEvent: InContextSdkMethod<Subscription['Eth_electionNewTermStartedEvent'], SubscriptionEth_electionNewTermStartedEventArgs, MeshContext>,
  /** null **/
  Eth_electionNewTermStartedEvents: InContextSdkMethod<Subscription['Eth_electionNewTermStartedEvents'], SubscriptionEth_electionNewTermStartedEventsArgs, MeshContext>,
  /** null **/
  Eth_electionRecalledEvent: InContextSdkMethod<Subscription['Eth_electionRecalledEvent'], SubscriptionEth_electionRecalledEventArgs, MeshContext>,
  /** null **/
  Eth_electionRecalledEvents: InContextSdkMethod<Subscription['Eth_electionRecalledEvents'], SubscriptionEth_electionRecalledEventsArgs, MeshContext>,
  /** null **/
  Eth_passthroughModule: InContextSdkMethod<Subscription['Eth_passthroughModule'], SubscriptionEth_passthroughModuleArgs, MeshContext>,
  /** null **/
  Eth_passthroughModules: InContextSdkMethod<Subscription['Eth_passthroughModules'], SubscriptionEth_passthroughModulesArgs, MeshContext>,
  /** null **/
  Eth_stakingEligibility: InContextSdkMethod<Subscription['Eth_stakingEligibility'], SubscriptionEth_stakingEligibilityArgs, MeshContext>,
  /** null **/
  Eth_stakingEligibilities: InContextSdkMethod<Subscription['Eth_stakingEligibilities'], SubscriptionEth_stakingEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_stake: InContextSdkMethod<Subscription['Eth_stake'], SubscriptionEth_stakeArgs, MeshContext>,
  /** null **/
  Eth_stakes: InContextSdkMethod<Subscription['Eth_stakes'], SubscriptionEth_stakesArgs, MeshContext>,
  /** null **/
  Eth_stakingStakedEvent: InContextSdkMethod<Subscription['Eth_stakingStakedEvent'], SubscriptionEth_stakingStakedEventArgs, MeshContext>,
  /** null **/
  Eth_stakingStakedEvents: InContextSdkMethod<Subscription['Eth_stakingStakedEvents'], SubscriptionEth_stakingStakedEventsArgs, MeshContext>,
  /** null **/
  Eth_stakingUnstakeBegunEvent: InContextSdkMethod<Subscription['Eth_stakingUnstakeBegunEvent'], SubscriptionEth_stakingUnstakeBegunEventArgs, MeshContext>,
  /** null **/
  Eth_stakingUnstakeBegunEvents: InContextSdkMethod<Subscription['Eth_stakingUnstakeBegunEvents'], SubscriptionEth_stakingUnstakeBegunEventsArgs, MeshContext>,
  /** null **/
  Eth_stakingSlashedEvent: InContextSdkMethod<Subscription['Eth_stakingSlashedEvent'], SubscriptionEth_stakingSlashedEventArgs, MeshContext>,
  /** null **/
  Eth_stakingSlashedEvents: InContextSdkMethod<Subscription['Eth_stakingSlashedEvents'], SubscriptionEth_stakingSlashedEventsArgs, MeshContext>,
  /** null **/
  Eth_stakingMinStakeChangedEvent: InContextSdkMethod<Subscription['Eth_stakingMinStakeChangedEvent'], SubscriptionEth_stakingMinStakeChangedEventArgs, MeshContext>,
  /** null **/
  Eth_stakingMinStakeChangedEvents: InContextSdkMethod<Subscription['Eth_stakingMinStakeChangedEvents'], SubscriptionEth_stakingMinStakeChangedEventsArgs, MeshContext>,
  /** null **/
  Eth_stakingJudgeHatChangedEvent: InContextSdkMethod<Subscription['Eth_stakingJudgeHatChangedEvent'], SubscriptionEth_stakingJudgeHatChangedEventArgs, MeshContext>,
  /** null **/
  Eth_stakingJudgeHatChangedEvents: InContextSdkMethod<Subscription['Eth_stakingJudgeHatChangedEvents'], SubscriptionEth_stakingJudgeHatChangedEventsArgs, MeshContext>,
  /** null **/
  Eth_stakingRecipientHatChangedEvent: InContextSdkMethod<Subscription['Eth_stakingRecipientHatChangedEvent'], SubscriptionEth_stakingRecipientHatChangedEventArgs, MeshContext>,
  /** null **/
  Eth_stakingRecipientHatChangedEvents: InContextSdkMethod<Subscription['Eth_stakingRecipientHatChangedEvents'], SubscriptionEth_stakingRecipientHatChangedEventsArgs, MeshContext>,
  /** null **/
  Eth_stakingCooldownPeriodChangedEvent: InContextSdkMethod<Subscription['Eth_stakingCooldownPeriodChangedEvent'], SubscriptionEth_stakingCooldownPeriodChangedEventArgs, MeshContext>,
  /** null **/
  Eth_stakingCooldownPeriodChangedEvents: InContextSdkMethod<Subscription['Eth_stakingCooldownPeriodChangedEvents'], SubscriptionEth_stakingCooldownPeriodChangedEventsArgs, MeshContext>,
  /** null **/
  Eth_stakingForgivenEvent: InContextSdkMethod<Subscription['Eth_stakingForgivenEvent'], SubscriptionEth_stakingForgivenEventArgs, MeshContext>,
  /** null **/
  Eth_stakingForgivenEvents: InContextSdkMethod<Subscription['Eth_stakingForgivenEvents'], SubscriptionEth_stakingForgivenEventsArgs, MeshContext>,
  /** null **/
  Eth_seasonToggle: InContextSdkMethod<Subscription['Eth_seasonToggle'], SubscriptionEth_seasonToggleArgs, MeshContext>,
  /** null **/
  Eth_seasonToggles: InContextSdkMethod<Subscription['Eth_seasonToggles'], SubscriptionEth_seasonTogglesArgs, MeshContext>,
  /** null **/
  Eth_characterSheetsLevelEligibility: InContextSdkMethod<Subscription['Eth_characterSheetsLevelEligibility'], SubscriptionEth_characterSheetsLevelEligibilityArgs, MeshContext>,
  /** null **/
  Eth_characterSheetsLevelEligibilities: InContextSdkMethod<Subscription['Eth_characterSheetsLevelEligibilities'], SubscriptionEth_characterSheetsLevelEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_agreementEligibility: InContextSdkMethod<Subscription['Eth_agreementEligibility'], SubscriptionEth_agreementEligibilityArgs, MeshContext>,
  /** null **/
  Eth_agreementEligibilities: InContextSdkMethod<Subscription['Eth_agreementEligibilities'], SubscriptionEth_agreementEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_agreement: InContextSdkMethod<Subscription['Eth_agreement'], SubscriptionEth_agreementArgs, MeshContext>,
  /** null **/
  Eth_agreements: InContextSdkMethod<Subscription['Eth_agreements'], SubscriptionEth_agreementsArgs, MeshContext>,
  /** null **/
  Eth_agreementHatClaimedWithAgreementEvent: InContextSdkMethod<Subscription['Eth_agreementHatClaimedWithAgreementEvent'], SubscriptionEth_agreementHatClaimedWithAgreementEventArgs, MeshContext>,
  /** null **/
  Eth_agreementHatClaimedWithAgreementEvents: InContextSdkMethod<Subscription['Eth_agreementHatClaimedWithAgreementEvents'], SubscriptionEth_agreementHatClaimedWithAgreementEventsArgs, MeshContext>,
  /** null **/
  Eth_agreementAgreementSignedEvent: InContextSdkMethod<Subscription['Eth_agreementAgreementSignedEvent'], SubscriptionEth_agreementAgreementSignedEventArgs, MeshContext>,
  /** null **/
  Eth_agreementAgreementSignedEvents: InContextSdkMethod<Subscription['Eth_agreementAgreementSignedEvents'], SubscriptionEth_agreementAgreementSignedEventsArgs, MeshContext>,
  /** null **/
  Eth_agreementAgreementSetEvent: InContextSdkMethod<Subscription['Eth_agreementAgreementSetEvent'], SubscriptionEth_agreementAgreementSetEventArgs, MeshContext>,
  /** null **/
  Eth_agreementAgreementSetEvents: InContextSdkMethod<Subscription['Eth_agreementAgreementSetEvents'], SubscriptionEth_agreementAgreementSetEventsArgs, MeshContext>,
  /** null **/
  Eth_agreementOwnerHatSetEvent: InContextSdkMethod<Subscription['Eth_agreementOwnerHatSetEvent'], SubscriptionEth_agreementOwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Eth_agreementOwnerHatSetEvents: InContextSdkMethod<Subscription['Eth_agreementOwnerHatSetEvents'], SubscriptionEth_agreementOwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Eth_agreementArbitratorHatSetEvent: InContextSdkMethod<Subscription['Eth_agreementArbitratorHatSetEvent'], SubscriptionEth_agreementArbitratorHatSetEventArgs, MeshContext>,
  /** null **/
  Eth_agreementArbitratorHatSetEvents: InContextSdkMethod<Subscription['Eth_agreementArbitratorHatSetEvents'], SubscriptionEth_agreementArbitratorHatSetEventsArgs, MeshContext>,
  /** null **/
  Eth_erc20Eligibility: InContextSdkMethod<Subscription['Eth_erc20Eligibility'], SubscriptionEth_erc20EligibilityArgs, MeshContext>,
  /** null **/
  Eth_erc20Eligibilities: InContextSdkMethod<Subscription['Eth_erc20Eligibilities'], SubscriptionEth_erc20EligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_erc721Eligibility: InContextSdkMethod<Subscription['Eth_erc721Eligibility'], SubscriptionEth_erc721EligibilityArgs, MeshContext>,
  /** null **/
  Eth_erc721Eligibilities: InContextSdkMethod<Subscription['Eth_erc721Eligibilities'], SubscriptionEth_erc721EligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_erc1155Eligibility: InContextSdkMethod<Subscription['Eth_erc1155Eligibility'], SubscriptionEth_erc1155EligibilityArgs, MeshContext>,
  /** null **/
  Eth_erc1155Eligibilities: InContextSdkMethod<Subscription['Eth_erc1155Eligibilities'], SubscriptionEth_erc1155EligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_hatWearingEligibility: InContextSdkMethod<Subscription['Eth_hatWearingEligibility'], SubscriptionEth_hatWearingEligibilityArgs, MeshContext>,
  /** null **/
  Eth_hatWearingEligibilities: InContextSdkMethod<Subscription['Eth_hatWearingEligibilities'], SubscriptionEth_hatWearingEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_gitcoinPassportEligibility: InContextSdkMethod<Subscription['Eth_gitcoinPassportEligibility'], SubscriptionEth_gitcoinPassportEligibilityArgs, MeshContext>,
  /** null **/
  Eth_gitcoinPassportEligibilities: InContextSdkMethod<Subscription['Eth_gitcoinPassportEligibilities'], SubscriptionEth_gitcoinPassportEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_coLinksEligibility: InContextSdkMethod<Subscription['Eth_coLinksEligibility'], SubscriptionEth_coLinksEligibilityArgs, MeshContext>,
  /** null **/
  Eth_coLinksEligibilities: InContextSdkMethod<Subscription['Eth_coLinksEligibilities'], SubscriptionEth_coLinksEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_hatControlledModule: InContextSdkMethod<Subscription['Eth_hatControlledModule'], SubscriptionEth_hatControlledModuleArgs, MeshContext>,
  /** null **/
  Eth_hatControlledModules: InContextSdkMethod<Subscription['Eth_hatControlledModules'], SubscriptionEth_hatControlledModulesArgs, MeshContext>,
  /** null **/
  Eth_hatControlledModuleWearerStatus: InContextSdkMethod<Subscription['Eth_hatControlledModuleWearerStatus'], SubscriptionEth_hatControlledModuleWearerStatusArgs, MeshContext>,
  /** null **/
  Eth_hatControlledModuleWearerStatuses: InContextSdkMethod<Subscription['Eth_hatControlledModuleWearerStatuses'], SubscriptionEth_hatControlledModuleWearerStatusesArgs, MeshContext>,
  /** null **/
  Eth_hatControlledModuleHatStatus: InContextSdkMethod<Subscription['Eth_hatControlledModuleHatStatus'], SubscriptionEth_hatControlledModuleHatStatusArgs, MeshContext>,
  /** null **/
  Eth_hatControlledModuleHatStatuses: InContextSdkMethod<Subscription['Eth_hatControlledModuleHatStatuses'], SubscriptionEth_hatControlledModuleHatStatusesArgs, MeshContext>,
  /** null **/
  Eth_hatControlledWearerStatusSet: InContextSdkMethod<Subscription['Eth_hatControlledWearerStatusSet'], SubscriptionEth_hatControlledWearerStatusSetArgs, MeshContext>,
  /** null **/
  Eth_hatControlledWearerStatusSets: InContextSdkMethod<Subscription['Eth_hatControlledWearerStatusSets'], SubscriptionEth_hatControlledWearerStatusSetsArgs, MeshContext>,
  /** null **/
  Eth_hatControlledHatStatusSet: InContextSdkMethod<Subscription['Eth_hatControlledHatStatusSet'], SubscriptionEth_hatControlledHatStatusSetArgs, MeshContext>,
  /** null **/
  Eth_hatControlledHatStatusSets: InContextSdkMethod<Subscription['Eth_hatControlledHatStatusSets'], SubscriptionEth_hatControlledHatStatusSetsArgs, MeshContext>,
  /** null **/
  Eth_publicLockV14Eligibility: InContextSdkMethod<Subscription['Eth_publicLockV14Eligibility'], SubscriptionEth_publicLockV14EligibilityArgs, MeshContext>,
  /** null **/
  Eth_publicLockV14Eligibilities: InContextSdkMethod<Subscription['Eth_publicLockV14Eligibilities'], SubscriptionEth_publicLockV14EligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_hatsEligibilitiesChain: InContextSdkMethod<Subscription['Eth_hatsEligibilitiesChain'], SubscriptionEth_hatsEligibilitiesChainArgs, MeshContext>,
  /** null **/
  Eth_hatsEligibilitiesChains: InContextSdkMethod<Subscription['Eth_hatsEligibilitiesChains'], SubscriptionEth_hatsEligibilitiesChainsArgs, MeshContext>,
  /** null **/
  Eth_eligibilitiesRuleset: InContextSdkMethod<Subscription['Eth_eligibilitiesRuleset'], SubscriptionEth_eligibilitiesRulesetArgs, MeshContext>,
  /** null **/
  Eth_eligibilitiesRulesets: InContextSdkMethod<Subscription['Eth_eligibilitiesRulesets'], SubscriptionEth_eligibilitiesRulesetsArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2Event: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2Event'], SubscriptionEth_hatsSignerGateV2EventArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGateV2Events: InContextSdkMethod<Subscription['Eth_hatsSignerGateV2Events'], SubscriptionEth_hatsSignerGateV2EventsArgs, MeshContext>,
  /** null **/
  Eth_hatsModule: InContextSdkMethod<Subscription['Eth_hatsModule'], SubscriptionEth_hatsModuleArgs, MeshContext>,
  /** null **/
  Eth_hatsModules: InContextSdkMethod<Subscription['Eth_hatsModules'], SubscriptionEth_hatsModulesArgs, MeshContext>,
  /** null **/
  Eth_hatsModuleEvent: InContextSdkMethod<Subscription['Eth_hatsModuleEvent'], SubscriptionEth_hatsModuleEventArgs, MeshContext>,
  /** null **/
  Eth_hatsModuleEvents: InContextSdkMethod<Subscription['Eth_hatsModuleEvents'], SubscriptionEth_hatsModuleEventsArgs, MeshContext>,
  /** null **/
  Eth_jokeRaceEvent: InContextSdkMethod<Subscription['Eth_jokeRaceEvent'], SubscriptionEth_jokeRaceEventArgs, MeshContext>,
  /** null **/
  Eth_jokeRaceEvents: InContextSdkMethod<Subscription['Eth_jokeRaceEvents'], SubscriptionEth_jokeRaceEventsArgs, MeshContext>,
  /** null **/
  Eth_allowlistEvent: InContextSdkMethod<Subscription['Eth_allowlistEvent'], SubscriptionEth_allowlistEventArgs, MeshContext>,
  /** null **/
  Eth_allowlistEvents: InContextSdkMethod<Subscription['Eth_allowlistEvents'], SubscriptionEth_allowlistEventsArgs, MeshContext>,
  /** null **/
  Eth_electionEvent: InContextSdkMethod<Subscription['Eth_electionEvent'], SubscriptionEth_electionEventArgs, MeshContext>,
  /** null **/
  Eth_electionEvents: InContextSdkMethod<Subscription['Eth_electionEvents'], SubscriptionEth_electionEventsArgs, MeshContext>,
  /** null **/
  Eth_stakingEvent: InContextSdkMethod<Subscription['Eth_stakingEvent'], SubscriptionEth_stakingEventArgs, MeshContext>,
  /** null **/
  Eth_stakingEvents: InContextSdkMethod<Subscription['Eth_stakingEvents'], SubscriptionEth_stakingEventsArgs, MeshContext>,
  /** null **/
  Eth_agreementEvent: InContextSdkMethod<Subscription['Eth_agreementEvent'], SubscriptionEth_agreementEventArgs, MeshContext>,
  /** null **/
  Eth_agreementEvents: InContextSdkMethod<Subscription['Eth_agreementEvents'], SubscriptionEth_agreementEventsArgs, MeshContext>,
  /** null **/
  Eth_hatControlledModuleEvent: InContextSdkMethod<Subscription['Eth_hatControlledModuleEvent'], SubscriptionEth_hatControlledModuleEventArgs, MeshContext>,
  /** null **/
  Eth_hatControlledModuleEvents: InContextSdkMethod<Subscription['Eth_hatControlledModuleEvents'], SubscriptionEth_hatControlledModuleEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Eth__meta: InContextSdkMethod<Subscription['Eth__meta'], SubscriptionEth__metaArgs, MeshContext>
  };

  export type Context = {
      ["Ethereum_Ancillary"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
