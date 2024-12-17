// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace CeloAncillaryTypes {
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
  Celo_BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Celo_Bytes: { input: any; output: any; }
  Celo_Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Celo_Aggregation_interval =
  | 'hour'
  | 'day';

export type Celo_Agreement = {
  id: Scalars['ID']['output'];
  agreementEligibility: Celo_AgreementEligibility;
  agreement: Scalars['String']['output'];
  signers: Array<Scalars['String']['output']>;
  graceEndTime: Scalars['BigInt']['output'];
};

/**  Agreement Eligibility  */
export type Celo_AgreementEligibility = Celo_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  ownerHat: Celo_HatAuthority;
  arbitratorHat: Celo_HatAuthority;
  currentAgreement: Celo_Agreement;
  currentAgreementNumber: Scalars['BigInt']['output'];
  agreements: Array<Celo_Agreement>;
  badStandings: Array<Scalars['String']['output']>;
  events: Array<Celo_AgreementEvent>;
};


/**  Agreement Eligibility  */
export type Celo_AgreementEligibilityagreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Agreement_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Agreement_filter>;
};


/**  Agreement Eligibility  */
export type Celo_AgreementEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_AgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_AgreementEvent_filter>;
};

export type Celo_AgreementEligibility_filter = {
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
  ownerHat_?: InputMaybe<Celo_HatAuthority_filter>;
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
  arbitratorHat_?: InputMaybe<Celo_HatAuthority_filter>;
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
  currentAgreement_?: InputMaybe<Celo_Agreement_filter>;
  currentAgreementNumber?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentAgreementNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  agreements_?: InputMaybe<Celo_Agreement_filter>;
  badStandings?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  events_?: InputMaybe<Celo_AgreementEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_AgreementEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_AgreementEligibility_filter>>>;
};

export type Celo_AgreementEligibility_orderBy =
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

export type Celo_AgreementEvent = {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  agreementEligibilityInstance: Celo_AgreementEligibility;
};

export type Celo_AgreementEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  agreementEligibilityInstance_?: InputMaybe<Celo_AgreementEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_AgreementEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_AgreementEvent_filter>>>;
};

export type Celo_AgreementEvent_orderBy =
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

export type Celo_Agreement_AgreementSetEvent = Celo_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  agreementEligibilityInstance: Celo_AgreementEligibility;
  agreement: Scalars['String']['output'];
  grace: Scalars['BigInt']['output'];
};

export type Celo_Agreement_AgreementSetEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  agreementEligibilityInstance_?: InputMaybe<Celo_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Agreement_AgreementSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Agreement_AgreementSetEvent_filter>>>;
};

export type Celo_Agreement_AgreementSetEvent_orderBy =
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

export type Celo_Agreement_AgreementSignedEvent = Celo_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  agreementEligibilityInstance: Celo_AgreementEligibility;
  signer: Scalars['String']['output'];
  agreement: Scalars['String']['output'];
};

export type Celo_Agreement_AgreementSignedEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  agreementEligibilityInstance_?: InputMaybe<Celo_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Agreement_AgreementSignedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Agreement_AgreementSignedEvent_filter>>>;
};

export type Celo_Agreement_AgreementSignedEvent_orderBy =
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

export type Celo_Agreement_ArbitratorHatSetEvent = Celo_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  agreementEligibilityInstance: Celo_AgreementEligibility;
  newArbitratorHat: Scalars['String']['output'];
};

export type Celo_Agreement_ArbitratorHatSetEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  agreementEligibilityInstance_?: InputMaybe<Celo_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Agreement_ArbitratorHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Agreement_ArbitratorHatSetEvent_filter>>>;
};

export type Celo_Agreement_ArbitratorHatSetEvent_orderBy =
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

export type Celo_Agreement_HatClaimedWithAgreementEvent = Celo_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  agreementEligibilityInstance: Celo_AgreementEligibility;
  claimer: Scalars['String']['output'];
  hatId: Scalars['String']['output'];
  agreement: Scalars['String']['output'];
};

export type Celo_Agreement_HatClaimedWithAgreementEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  agreementEligibilityInstance_?: InputMaybe<Celo_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Agreement_HatClaimedWithAgreementEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Agreement_HatClaimedWithAgreementEvent_filter>>>;
};

export type Celo_Agreement_HatClaimedWithAgreementEvent_orderBy =
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

export type Celo_Agreement_OwnerHatSetEvent = Celo_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  agreementEligibilityInstance: Celo_AgreementEligibility;
  newOwnerHat: Scalars['String']['output'];
};

export type Celo_Agreement_OwnerHatSetEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  agreementEligibilityInstance_?: InputMaybe<Celo_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Agreement_OwnerHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Agreement_OwnerHatSetEvent_filter>>>;
};

export type Celo_Agreement_OwnerHatSetEvent_orderBy =
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

export type Celo_Agreement_filter = {
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
  agreementEligibility_?: InputMaybe<Celo_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Agreement_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Agreement_filter>>>;
};

export type Celo_Agreement_orderBy =
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
export type Celo_AllowListEligibility = Celo_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  ownerHat: Celo_HatAuthority;
  arbitratorHat: Celo_HatAuthority;
  eligibilityData: Array<Celo_AllowListEligibilityData>;
  events: Array<Celo_AllowlistEvent>;
};


/**  Allowlist Eligibility  */
export type Celo_AllowListEligibilityeligibilityDataArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_AllowListEligibilityData_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_AllowListEligibilityData_filter>;
};


/**  Allowlist Eligibility  */
export type Celo_AllowListEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_AllowlistEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_AllowlistEvent_filter>;
};

export type Celo_AllowListEligibilityData = {
  id: Scalars['ID']['output'];
  allowListEligibility: Celo_AllowListEligibility;
  address: Scalars['String']['output'];
  eligible: Scalars['Boolean']['output'];
  badStanding: Scalars['Boolean']['output'];
};

export type Celo_AllowListEligibilityData_filter = {
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
  allowListEligibility_?: InputMaybe<Celo_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_AllowListEligibilityData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_AllowListEligibilityData_filter>>>;
};

export type Celo_AllowListEligibilityData_orderBy =
  | 'id'
  | 'allowListEligibility'
  | 'allowListEligibility__id'
  | 'allowListEligibility__version'
  | 'allowListEligibility__hatId'
  | 'address'
  | 'eligible'
  | 'badStanding';

export type Celo_AllowListEligibility_filter = {
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
  ownerHat_?: InputMaybe<Celo_HatAuthority_filter>;
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
  arbitratorHat_?: InputMaybe<Celo_HatAuthority_filter>;
  eligibilityData_?: InputMaybe<Celo_AllowListEligibilityData_filter>;
  events_?: InputMaybe<Celo_AllowlistEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_AllowListEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_AllowListEligibility_filter>>>;
};

export type Celo_AllowListEligibility_orderBy =
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

export type Celo_AllowlistEvent = {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  allowlistEligibilityInstance: Celo_AllowListEligibility;
};

export type Celo_AllowlistEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  allowlistEligibilityInstance_?: InputMaybe<Celo_AllowListEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_AllowlistEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_AllowlistEvent_filter>>>;
};

export type Celo_AllowlistEvent_orderBy =
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

export type Celo_Allowlist_AccountAddedEvent = Celo_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  allowlistEligibilityInstance: Celo_AllowListEligibility;
  account: Scalars['String']['output'];
};

export type Celo_Allowlist_AccountAddedEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  allowlistEligibilityInstance_?: InputMaybe<Celo_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Allowlist_AccountAddedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Allowlist_AccountAddedEvent_filter>>>;
};

export type Celo_Allowlist_AccountAddedEvent_orderBy =
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

export type Celo_Allowlist_AccountRemovedEvent = Celo_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  allowlistEligibilityInstance: Celo_AllowListEligibility;
  account: Scalars['String']['output'];
};

export type Celo_Allowlist_AccountRemovedEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  allowlistEligibilityInstance_?: InputMaybe<Celo_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Allowlist_AccountRemovedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Allowlist_AccountRemovedEvent_filter>>>;
};

export type Celo_Allowlist_AccountRemovedEvent_orderBy =
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

export type Celo_Allowlist_AccountStandingChangedEvent = Celo_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  allowlistEligibilityInstance: Celo_AllowListEligibility;
  account: Scalars['String']['output'];
  standing: Scalars['Boolean']['output'];
};

export type Celo_Allowlist_AccountStandingChangedEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  allowlistEligibilityInstance_?: InputMaybe<Celo_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Allowlist_AccountStandingChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Allowlist_AccountStandingChangedEvent_filter>>>;
};

export type Celo_Allowlist_AccountStandingChangedEvent_orderBy =
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

export type Celo_Allowlist_AccountsAddedEvent = Celo_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  allowlistEligibilityInstance: Celo_AllowListEligibility;
  accounts: Array<Scalars['String']['output']>;
};

export type Celo_Allowlist_AccountsAddedEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  allowlistEligibilityInstance_?: InputMaybe<Celo_AllowListEligibility_filter>;
  accounts?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Allowlist_AccountsAddedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Allowlist_AccountsAddedEvent_filter>>>;
};

export type Celo_Allowlist_AccountsAddedEvent_orderBy =
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

export type Celo_Allowlist_AccountsRemovedEvent = Celo_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  allowlistEligibilityInstance: Celo_AllowListEligibility;
  accounts: Array<Scalars['String']['output']>;
};

export type Celo_Allowlist_AccountsRemovedEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  allowlistEligibilityInstance_?: InputMaybe<Celo_AllowListEligibility_filter>;
  accounts?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Allowlist_AccountsRemovedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Allowlist_AccountsRemovedEvent_filter>>>;
};

export type Celo_Allowlist_AccountsRemovedEvent_orderBy =
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

export type Celo_Allowlist_AccountsStandingChangedEvent = Celo_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  allowlistEligibilityInstance: Celo_AllowListEligibility;
  accounts: Array<Scalars['String']['output']>;
  standings: Array<Scalars['Boolean']['output']>;
};

export type Celo_Allowlist_AccountsStandingChangedEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  allowlistEligibilityInstance_?: InputMaybe<Celo_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Allowlist_AccountsStandingChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Allowlist_AccountsStandingChangedEvent_filter>>>;
};

export type Celo_Allowlist_AccountsStandingChangedEvent_orderBy =
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

export type Celo_Allowlist_ArbitratorHatSetEvent = Celo_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  allowlistEligibilityInstance: Celo_AllowListEligibility;
  newArbitratorHat: Scalars['String']['output'];
};

export type Celo_Allowlist_ArbitratorHatSetEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  allowlistEligibilityInstance_?: InputMaybe<Celo_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Allowlist_ArbitratorHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Allowlist_ArbitratorHatSetEvent_filter>>>;
};

export type Celo_Allowlist_ArbitratorHatSetEvent_orderBy =
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

export type Celo_Allowlist_OwnerHatSetEvent = Celo_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  allowlistEligibilityInstance: Celo_AllowListEligibility;
  newOwnerHat: Scalars['String']['output'];
};

export type Celo_Allowlist_OwnerHatSetEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  allowlistEligibilityInstance_?: InputMaybe<Celo_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Allowlist_OwnerHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Allowlist_OwnerHatSetEvent_filter>>>;
};

export type Celo_Allowlist_OwnerHatSetEvent_orderBy =
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

export type Celo_BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Celo_Block_height = {
  hash?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

/**  Charecter Sheets Level Eligibility  */
export type Celo_CharacterSheetsLevelEligibility = Celo_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  hatAdmins: Array<Celo_HatAuthority>;
};


/**  Charecter Sheets Level Eligibility  */
export type Celo_CharacterSheetsLevelEligibilityhatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatAuthority_filter>;
};

export type Celo_CharacterSheetsLevelEligibility_filter = {
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
  hatAdmins_?: InputMaybe<Celo_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_CharacterSheetsLevelEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_CharacterSheetsLevelEligibility_filter>>>;
};

export type Celo_CharacterSheetsLevelEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'hatAdmins';

/**  CoLinks Eligibility  */
export type Celo_CoLinksEligibility = Celo_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  threshold: Scalars['BigInt']['output'];
};

export type Celo_CoLinksEligibility_filter = {
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_CoLinksEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_CoLinksEligibility_filter>>>;
};

export type Celo_CoLinksEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'threshold';

export type Celo_ElectionEvent = {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  electionEligibilityInstance: Celo_HatsElectionEligibility;
};

export type Celo_ElectionEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  electionEligibilityInstance_?: InputMaybe<Celo_HatsElectionEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_ElectionEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_ElectionEvent_filter>>>;
};

export type Celo_ElectionEvent_orderBy =
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

export type Celo_ElectionTerm = {
  id: Scalars['ID']['output'];
  hatsElectionEligibility: Celo_HatsElectionEligibility;
  /** first term starts when 'elect' is called, next terms start when 'startNextTerm' is called */
  termStartedAt?: Maybe<Scalars['BigInt']['output']>;
  termEnd: Scalars['BigInt']['output'];
  /** election is completed when 'elect' is called */
  electionCompletedAt?: Maybe<Scalars['BigInt']['output']>;
  electedAccounts?: Maybe<Array<Scalars['String']['output']>>;
};

export type Celo_ElectionTerm_filter = {
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
  hatsElectionEligibility_?: InputMaybe<Celo_HatsElectionEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_ElectionTerm_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_ElectionTerm_filter>>>;
};

export type Celo_ElectionTerm_orderBy =
  | 'id'
  | 'hatsElectionEligibility'
  | 'hatsElectionEligibility__id'
  | 'hatsElectionEligibility__version'
  | 'hatsElectionEligibility__hatId'
  | 'termStartedAt'
  | 'termEnd'
  | 'electionCompletedAt'
  | 'electedAccounts';

export type Celo_Election_ElectionCompletedEvent = Celo_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  electionEligibilityInstance: Celo_HatsElectionEligibility;
  termEnd: Scalars['BigInt']['output'];
  winners: Array<Scalars['String']['output']>;
};

export type Celo_Election_ElectionCompletedEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  electionEligibilityInstance_?: InputMaybe<Celo_HatsElectionEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Election_ElectionCompletedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Election_ElectionCompletedEvent_filter>>>;
};

export type Celo_Election_ElectionCompletedEvent_orderBy =
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

export type Celo_Election_ElectionOpenedEvent = Celo_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  electionEligibilityInstance: Celo_HatsElectionEligibility;
  nextTermEnd: Scalars['BigInt']['output'];
};

export type Celo_Election_ElectionOpenedEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  electionEligibilityInstance_?: InputMaybe<Celo_HatsElectionEligibility_filter>;
  nextTermEnd?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_not?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nextTermEnd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Election_ElectionOpenedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Election_ElectionOpenedEvent_filter>>>;
};

export type Celo_Election_ElectionOpenedEvent_orderBy =
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

export type Celo_Election_NewTermStartedEvent = Celo_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  electionEligibilityInstance: Celo_HatsElectionEligibility;
  termEnd: Scalars['BigInt']['output'];
};

export type Celo_Election_NewTermStartedEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  electionEligibilityInstance_?: InputMaybe<Celo_HatsElectionEligibility_filter>;
  termEnd?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_not?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  termEnd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Election_NewTermStartedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Election_NewTermStartedEvent_filter>>>;
};

export type Celo_Election_NewTermStartedEvent_orderBy =
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

export type Celo_Election_RecalledEvent = Celo_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  electionEligibilityInstance: Celo_HatsElectionEligibility;
  termEnd: Scalars['BigInt']['output'];
  accounts: Array<Scalars['String']['output']>;
};

export type Celo_Election_RecalledEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  electionEligibilityInstance_?: InputMaybe<Celo_HatsElectionEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Election_RecalledEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Election_RecalledEvent_filter>>>;
};

export type Celo_Election_RecalledEvent_orderBy =
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

export type Celo_EligibilitiesRuleset = {
  id: Scalars['ID']['output'];
  eligibilitiesChain: Celo_HatsEligibilitiesChain;
  modules: Array<Celo_HatsModule>;
};


export type Celo_EligibilitiesRulesetmodulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsModule_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsModule_filter>;
};

export type Celo_EligibilitiesRuleset_filter = {
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
  eligibilitiesChain_?: InputMaybe<Celo_HatsEligibilitiesChain_filter>;
  modules?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_not?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_?: InputMaybe<Celo_HatsModule_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_EligibilitiesRuleset_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_EligibilitiesRuleset_filter>>>;
};

export type Celo_EligibilitiesRuleset_orderBy =
  | 'id'
  | 'eligibilitiesChain'
  | 'eligibilitiesChain__id'
  | 'eligibilitiesChain__version'
  | 'eligibilitiesChain__hatId'
  | 'eligibilitiesChain__numRulesets'
  | 'modules';

/**  Erc1155 Eligibility  */
export type Celo_Erc1155Eligibility = Celo_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  contractAddress: Scalars['String']['output'];
  tokens: Array<Scalars['BigInt']['output']>;
  minBalances: Array<Scalars['BigInt']['output']>;
};

export type Celo_Erc1155Eligibility_filter = {
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Erc1155Eligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Erc1155Eligibility_filter>>>;
};

export type Celo_Erc1155Eligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'contractAddress'
  | 'tokens'
  | 'minBalances';

/**  Erc20 Eligibility  */
export type Celo_Erc20Eligibility = Celo_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  token: Scalars['String']['output'];
  minBalance: Scalars['BigInt']['output'];
};

export type Celo_Erc20Eligibility_filter = {
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Erc20Eligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Erc20Eligibility_filter>>>;
};

export type Celo_Erc20Eligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'token'
  | 'minBalance';

/**  Erc721 Eligibility  */
export type Celo_Erc721Eligibility = Celo_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  token: Scalars['String']['output'];
  minBalance: Scalars['BigInt']['output'];
};

export type Celo_Erc721Eligibility_filter = {
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Erc721Eligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Erc721Eligibility_filter>>>;
};

export type Celo_Erc721Eligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'token'
  | 'minBalance';

/**  Gitcoin Passport Eligibility  */
export type Celo_GitcoinPassportEligibility = Celo_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  decoder: Scalars['String']['output'];
  scoreCriterion: Scalars['BigInt']['output'];
};

export type Celo_GitcoinPassportEligibility_filter = {
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_GitcoinPassportEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_GitcoinPassportEligibility_filter>>>;
};

export type Celo_GitcoinPassportEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'decoder'
  | 'scoreCriterion';

export type Celo_HatAuthority = {
  id: Scalars['ID']['output'];
  /** pre computed hats account address with a salt value of 1, null only if the hat was not created yet */
  primaryHatsAccount1ofNAddress?: Maybe<Scalars['String']['output']>;
  hatsAccount1ofN: Array<Celo_HatsAccount1ofN>;
  hsgOwner: Array<Celo_HatsSignerGate>;
  hsgSigner: Array<Celo_HatsSignerGate>;
  hsgV2Owner: Array<Celo_HatsSignerGateV2>;
  hsgV2Signer: Array<Celo_HatsSignerGateV2>;
  jokeraceAdmin: Array<Celo_JokeRaceEligibility>;
  allowListOwner: Array<Celo_AllowListEligibility>;
  allowListArbitrator: Array<Celo_AllowListEligibility>;
  electionsBallotBox: Array<Celo_HatsElectionEligibility>;
  electionsAdmin: Array<Celo_HatsElectionEligibility>;
  eligibilityTogglePassthrough: Array<Celo_PassthroughModule>;
  stakingJudge: Array<Celo_StakingEligibility>;
  stakingRecipient: Array<Celo_StakingEligibility>;
  stakingHatAdmins: Array<Celo_StakingEligibility>;
  seasonHatAdmins: Array<Celo_SeasonToggle>;
  characterSheetsLevelHatAdmins: Array<Celo_CharacterSheetsLevelEligibility>;
  agreementOwner: Array<Celo_AgreementEligibility>;
  agreementArbitrator: Array<Celo_AgreementEligibility>;
  baalStakingJudge: Array<Celo_HatsStakingShaman>;
  hatsFarcasterDelegatorOwner: Array<Celo_HatsFarcasterDelegator>;
  hatsFarcasterDelegatorCaster: Array<Celo_HatsFarcasterDelegator>;
};


export type Celo_HatAuthorityhatsAccount1ofNArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsAccount1ofN_filter>;
};


export type Celo_HatAuthorityhsgOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGate_filter>;
};


export type Celo_HatAuthorityhsgSignerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGate_filter>;
};


export type Celo_HatAuthorityhsgV2OwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_filter>;
};


export type Celo_HatAuthorityhsgV2SignerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_filter>;
};


export type Celo_HatAuthorityjokeraceAdminArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_JokeRaceEligibility_filter>;
};


export type Celo_HatAuthorityallowListOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_AllowListEligibility_filter>;
};


export type Celo_HatAuthorityallowListArbitratorArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_AllowListEligibility_filter>;
};


export type Celo_HatAuthorityelectionsBallotBoxArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsElectionEligibility_filter>;
};


export type Celo_HatAuthorityelectionsAdminArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsElectionEligibility_filter>;
};


export type Celo_HatAuthorityeligibilityTogglePassthroughArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_PassthroughModule_filter>;
};


export type Celo_HatAuthoritystakingJudgeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_StakingEligibility_filter>;
};


export type Celo_HatAuthoritystakingRecipientArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_StakingEligibility_filter>;
};


export type Celo_HatAuthoritystakingHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_StakingEligibility_filter>;
};


export type Celo_HatAuthorityseasonHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_SeasonToggle_filter>;
};


export type Celo_HatAuthoritycharacterSheetsLevelHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_CharacterSheetsLevelEligibility_filter>;
};


export type Celo_HatAuthorityagreementOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_AgreementEligibility_filter>;
};


export type Celo_HatAuthorityagreementArbitratorArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_AgreementEligibility_filter>;
};


export type Celo_HatAuthoritybaalStakingJudgeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsStakingShaman_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsStakingShaman_filter>;
};


export type Celo_HatAuthorityhatsFarcasterDelegatorOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsFarcasterDelegator_filter>;
};


export type Celo_HatAuthorityhatsFarcasterDelegatorCasterArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsFarcasterDelegator_filter>;
};

export type Celo_HatAuthority_filter = {
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
  hatsAccount1ofN_?: InputMaybe<Celo_HatsAccount1ofN_filter>;
  hsgOwner_?: InputMaybe<Celo_HatsSignerGate_filter>;
  hsgSigner_?: InputMaybe<Celo_HatsSignerGate_filter>;
  hsgV2Owner_?: InputMaybe<Celo_HatsSignerGateV2_filter>;
  hsgV2Signer_?: InputMaybe<Celo_HatsSignerGateV2_filter>;
  jokeraceAdmin_?: InputMaybe<Celo_JokeRaceEligibility_filter>;
  allowListOwner_?: InputMaybe<Celo_AllowListEligibility_filter>;
  allowListArbitrator_?: InputMaybe<Celo_AllowListEligibility_filter>;
  electionsBallotBox_?: InputMaybe<Celo_HatsElectionEligibility_filter>;
  electionsAdmin_?: InputMaybe<Celo_HatsElectionEligibility_filter>;
  eligibilityTogglePassthrough_?: InputMaybe<Celo_PassthroughModule_filter>;
  stakingJudge_?: InputMaybe<Celo_StakingEligibility_filter>;
  stakingRecipient_?: InputMaybe<Celo_StakingEligibility_filter>;
  stakingHatAdmins_?: InputMaybe<Celo_StakingEligibility_filter>;
  seasonHatAdmins_?: InputMaybe<Celo_SeasonToggle_filter>;
  characterSheetsLevelHatAdmins_?: InputMaybe<Celo_CharacterSheetsLevelEligibility_filter>;
  agreementOwner_?: InputMaybe<Celo_AgreementEligibility_filter>;
  agreementArbitrator_?: InputMaybe<Celo_AgreementEligibility_filter>;
  baalStakingJudge_?: InputMaybe<Celo_HatsStakingShaman_filter>;
  hatsFarcasterDelegatorOwner_?: InputMaybe<Celo_HatsFarcasterDelegator_filter>;
  hatsFarcasterDelegatorCaster_?: InputMaybe<Celo_HatsFarcasterDelegator_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatAuthority_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatAuthority_filter>>>;
};

export type Celo_HatAuthority_orderBy =
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
export type Celo_HatControlledModule = Celo_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  controllerHatId: Scalars['String']['output'];
  wearersStatusData: Array<Celo_HatControlledModuleWearerStatus>;
  hatsStatusData: Array<Celo_HatControlledModuleHatStatus>;
  events: Array<Celo_HatControlledModuleEvent>;
};


/**  Hat Controlled Module  */
export type Celo_HatControlledModulewearersStatusDataArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatControlledModuleWearerStatus_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatControlledModuleWearerStatus_filter>;
};


/**  Hat Controlled Module  */
export type Celo_HatControlledModulehatsStatusDataArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatControlledModuleHatStatus_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatControlledModuleHatStatus_filter>;
};


/**  Hat Controlled Module  */
export type Celo_HatControlledModuleeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatControlledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatControlledModuleEvent_filter>;
};

export type Celo_HatControlledModuleEvent = {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  hatControlledModuleInstance: Celo_HatControlledModule;
};

export type Celo_HatControlledModuleEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  hatControlledModuleInstance_?: InputMaybe<Celo_HatControlledModule_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatControlledModuleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatControlledModuleEvent_filter>>>;
};

export type Celo_HatControlledModuleEvent_orderBy =
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

export type Celo_HatControlledModuleHatStatus = {
  id: Scalars['ID']['output'];
  hatControlledModule: Celo_HatControlledModule;
  hatId: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
};

export type Celo_HatControlledModuleHatStatus_filter = {
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
  hatControlledModule_?: InputMaybe<Celo_HatControlledModule_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatControlledModuleHatStatus_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatControlledModuleHatStatus_filter>>>;
};

export type Celo_HatControlledModuleHatStatus_orderBy =
  | 'id'
  | 'hatControlledModule'
  | 'hatControlledModule__id'
  | 'hatControlledModule__version'
  | 'hatControlledModule__hatId'
  | 'hatControlledModule__controllerHatId'
  | 'hatId'
  | 'active';

export type Celo_HatControlledModuleWearerStatus = {
  id: Scalars['ID']['output'];
  hatControlledModule: Celo_HatControlledModule;
  hatId: Scalars['String']['output'];
  wearer: Scalars['String']['output'];
  eligible: Scalars['Boolean']['output'];
  standing: Scalars['Boolean']['output'];
};

export type Celo_HatControlledModuleWearerStatus_filter = {
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
  hatControlledModule_?: InputMaybe<Celo_HatControlledModule_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatControlledModuleWearerStatus_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatControlledModuleWearerStatus_filter>>>;
};

export type Celo_HatControlledModuleWearerStatus_orderBy =
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

export type Celo_HatControlledModule_filter = {
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
  wearersStatusData_?: InputMaybe<Celo_HatControlledModuleWearerStatus_filter>;
  hatsStatusData_?: InputMaybe<Celo_HatControlledModuleHatStatus_filter>;
  events_?: InputMaybe<Celo_HatControlledModuleEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatControlledModule_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatControlledModule_filter>>>;
};

export type Celo_HatControlledModule_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'controllerHatId'
  | 'wearersStatusData'
  | 'hatsStatusData'
  | 'events';

export type Celo_HatControlled_HatStatusSet = Celo_HatControlledModuleEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  hatControlledModuleInstance: Celo_HatControlledModule;
  hatId: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
};

export type Celo_HatControlled_HatStatusSet_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  hatControlledModuleInstance_?: InputMaybe<Celo_HatControlledModule_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatControlled_HatStatusSet_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatControlled_HatStatusSet_filter>>>;
};

export type Celo_HatControlled_HatStatusSet_orderBy =
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

export type Celo_HatControlled_WearerStatusSet = Celo_HatControlledModuleEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  hatControlledModuleInstance: Celo_HatControlledModule;
  wearer: Scalars['String']['output'];
  hatId: Scalars['String']['output'];
  eligible: Scalars['Boolean']['output'];
  standing: Scalars['Boolean']['output'];
};

export type Celo_HatControlled_WearerStatusSet_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  hatControlledModuleInstance_?: InputMaybe<Celo_HatControlledModule_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatControlled_WearerStatusSet_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatControlled_WearerStatusSet_filter>>>;
};

export type Celo_HatControlled_WearerStatusSet_orderBy =
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
export type Celo_HatWearingEligibility = Celo_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  criterionHat: Scalars['String']['output'];
};

export type Celo_HatWearingEligibility_filter = {
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatWearingEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatWearingEligibility_filter>>>;
};

export type Celo_HatWearingEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'criterionHat';

/** Hats Account 1ofN */
export type Celo_HatsAccount1ofN = {
  id: Scalars['ID']['output'];
  accountOfHat: Celo_HatAuthority;
  operations: Array<Celo_HatsAccount1ofNOperation>;
};


/** Hats Account 1ofN */
export type Celo_HatsAccount1ofNoperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsAccount1ofNOperation_filter>;
};

export type Celo_HatsAccount1ofNOperation = {
  id: Scalars['ID']['output'];
  hatsAccount: Celo_HatsAccount1ofN;
  signer: Scalars['String']['output'];
  to: Scalars['String']['output'];
  value: Scalars['BigInt']['output'];
  callData: Scalars['Celo_Bytes']['output'];
  operationType: Celo_HatsAccountOperationType;
};

export type Celo_HatsAccount1ofNOperation_filter = {
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
  hatsAccount_?: InputMaybe<Celo_HatsAccount1ofN_filter>;
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
  callData?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  callData_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  callData_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  callData_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  callData_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  callData_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  callData_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  callData_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  callData_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  callData_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  operationType?: InputMaybe<Celo_HatsAccountOperationType>;
  operationType_not?: InputMaybe<Celo_HatsAccountOperationType>;
  operationType_in?: InputMaybe<Array<Celo_HatsAccountOperationType>>;
  operationType_not_in?: InputMaybe<Array<Celo_HatsAccountOperationType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsAccount1ofNOperation_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsAccount1ofNOperation_filter>>>;
};

export type Celo_HatsAccount1ofNOperation_orderBy =
  | 'id'
  | 'hatsAccount'
  | 'hatsAccount__id'
  | 'signer'
  | 'to'
  | 'value'
  | 'callData'
  | 'operationType';

export type Celo_HatsAccount1ofN_filter = {
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
  accountOfHat_?: InputMaybe<Celo_HatAuthority_filter>;
  operations_?: InputMaybe<Celo_HatsAccount1ofNOperation_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsAccount1ofN_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsAccount1ofN_filter>>>;
};

export type Celo_HatsAccount1ofN_orderBy =
  | 'id'
  | 'accountOfHat'
  | 'accountOfHat__id'
  | 'accountOfHat__primaryHatsAccount1ofNAddress'
  | 'operations';

export type Celo_HatsAccountOperationType =
  | 'Call'
  | 'DelegateCall';

/** HatsElection Eligibility */
export type Celo_HatsElectionEligibility = Celo_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  ballotBoxHat: Celo_HatAuthority;
  adminHat: Array<Celo_HatAuthority>;
  terms: Array<Celo_ElectionTerm>;
  currentTerm?: Maybe<Celo_ElectionTerm>;
  events: Array<Celo_ElectionEvent>;
};


/** HatsElection Eligibility */
export type Celo_HatsElectionEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatAuthority_filter>;
};


/** HatsElection Eligibility */
export type Celo_HatsElectionEligibilitytermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_ElectionTerm_filter>;
};


/** HatsElection Eligibility */
export type Celo_HatsElectionEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_ElectionEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_ElectionEvent_filter>;
};

export type Celo_HatsElectionEligibility_filter = {
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
  ballotBoxHat_?: InputMaybe<Celo_HatAuthority_filter>;
  adminHat?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_?: InputMaybe<Celo_HatAuthority_filter>;
  terms_?: InputMaybe<Celo_ElectionTerm_filter>;
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
  currentTerm_?: InputMaybe<Celo_ElectionTerm_filter>;
  events_?: InputMaybe<Celo_ElectionEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsElectionEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsElectionEligibility_filter>>>;
};

export type Celo_HatsElectionEligibility_orderBy =
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
export type Celo_HatsEligibilitiesChain = Celo_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  rulesets: Array<Celo_EligibilitiesRuleset>;
  moduleAddresses: Array<Scalars['String']['output']>;
  numRulesets: Scalars['BigInt']['output'];
};


/**  Chains  */
export type Celo_HatsEligibilitiesChainrulesetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_EligibilitiesRuleset_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_EligibilitiesRuleset_filter>;
};

export type Celo_HatsEligibilitiesChain_filter = {
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
  rulesets_?: InputMaybe<Celo_EligibilitiesRuleset_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsEligibilitiesChain_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsEligibilitiesChain_filter>>>;
};

export type Celo_HatsEligibilitiesChain_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'rulesets'
  | 'moduleAddresses'
  | 'numRulesets';

/** Farcaster Delegator */
export type Celo_HatsFarcasterDelegator = {
  id: Scalars['ID']['output'];
  caster: Celo_HatAuthority;
  owner: Celo_HatAuthority;
};

export type Celo_HatsFarcasterDelegator_filter = {
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
  caster_?: InputMaybe<Celo_HatAuthority_filter>;
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
  owner_?: InputMaybe<Celo_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsFarcasterDelegator_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsFarcasterDelegator_filter>>>;
};

export type Celo_HatsFarcasterDelegator_orderBy =
  | 'id'
  | 'caster'
  | 'caster__id'
  | 'caster__primaryHatsAccount1ofNAddress'
  | 'owner'
  | 'owner__id'
  | 'owner__primaryHatsAccount1ofNAddress';

/**  *** Modules ***  */
export type Celo_HatsModule = {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
};

export type Celo_HatsModuleEvent = {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
};

export type Celo_HatsModuleEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsModuleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsModuleEvent_filter>>>;
};

export type Celo_HatsModuleEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID';

export type Celo_HatsModule_filter = {
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsModule_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsModule_filter>>>;
};

export type Celo_HatsModule_orderBy =
  | 'id'
  | 'version'
  | 'hatId';

/** Hats Signer Gate */
export type Celo_HatsSignerGate = {
  id: Scalars['ID']['output'];
  type: Celo_HatsSignerGateType;
  ownerHat: Celo_HatAuthority;
  signerHats: Array<Celo_HatAuthority>;
  safe: Scalars['String']['output'];
  minThreshold: Scalars['BigInt']['output'];
  targetThreshold: Scalars['BigInt']['output'];
  maxSigners: Scalars['BigInt']['output'];
};


/** Hats Signer Gate */
export type Celo_HatsSignerGatesignerHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatAuthority_filter>;
};

export type Celo_HatsSignerGateType =
  | 'Single'
  | 'Multi';

/** HSG v2 */
export type Celo_HatsSignerGateV2 = {
  id: Scalars['ID']['output'];
  ownerHat: Celo_HatAuthority;
  signerHats: Array<Celo_HatAuthority>;
  safe: Scalars['String']['output'];
  locked: Scalars['Boolean']['output'];
  claimableFor: Scalars['Boolean']['output'];
  implementation: Scalars['String']['output'];
  enabledDelegatecallTargets: Array<Scalars['String']['output']>;
  thresholdType: Celo_HatsSignerGateV2ThresholdType;
  minThreshold: Scalars['BigInt']['output'];
  targetThreshold: Scalars['BigInt']['output'];
  guard: Scalars['String']['output'];
  modules: Array<Scalars['String']['output']>;
  events: Array<Celo_HatsSignerGateV2Event>;
};


/** HSG v2 */
export type Celo_HatsSignerGateV2signerHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatAuthority_filter>;
};


/** HSG v2 */
export type Celo_HatsSignerGateV2eventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2Event_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2Event_filter>;
};

export type Celo_HatsSignerGateV2Event = {
  id: Scalars['ID']['output'];
  hsg: Celo_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
};

export type Celo_HatsSignerGateV2Event_filter = {
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
  hsg_?: InputMaybe<Celo_HatsSignerGateV2_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2Event_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2Event_filter>>>;
};

export type Celo_HatsSignerGateV2Event_orderBy =
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

export type Celo_HatsSignerGateV2ThresholdType =
  | 'ABSOLUTE'
  | 'PROPORTIONAL';

export type Celo_HatsSignerGateV2_ChangedGuardEvent = Celo_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Celo_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  guard: Scalars['String']['output'];
};

export type Celo_HatsSignerGateV2_ChangedGuardEvent_filter = {
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
  hsg_?: InputMaybe<Celo_HatsSignerGateV2_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2_ChangedGuardEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2_ChangedGuardEvent_filter>>>;
};

export type Celo_HatsSignerGateV2_ChangedGuardEvent_orderBy =
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

export type Celo_HatsSignerGateV2_ClaimableForSetEvent = Celo_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Celo_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  claimableFor: Scalars['Boolean']['output'];
};

export type Celo_HatsSignerGateV2_ClaimableForSetEvent_filter = {
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
  hsg_?: InputMaybe<Celo_HatsSignerGateV2_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  claimableFor?: InputMaybe<Scalars['Boolean']['input']>;
  claimableFor_not?: InputMaybe<Scalars['Boolean']['input']>;
  claimableFor_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  claimableFor_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2_ClaimableForSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2_ClaimableForSetEvent_filter>>>;
};

export type Celo_HatsSignerGateV2_ClaimableForSetEvent_orderBy =
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

export type Celo_HatsSignerGateV2_DelegatecallTargetEnabledEvent = Celo_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Celo_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  target: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
};

export type Celo_HatsSignerGateV2_DelegatecallTargetEnabledEvent_filter = {
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
  hsg_?: InputMaybe<Celo_HatsSignerGateV2_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2_DelegatecallTargetEnabledEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2_DelegatecallTargetEnabledEvent_filter>>>;
};

export type Celo_HatsSignerGateV2_DelegatecallTargetEnabledEvent_orderBy =
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

export type Celo_HatsSignerGateV2_DetachedEvent = Celo_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Celo_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
};

export type Celo_HatsSignerGateV2_DetachedEvent_filter = {
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
  hsg_?: InputMaybe<Celo_HatsSignerGateV2_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2_DetachedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2_DetachedEvent_filter>>>;
};

export type Celo_HatsSignerGateV2_DetachedEvent_orderBy =
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

export type Celo_HatsSignerGateV2_DisabledModuleEvent = Celo_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Celo_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  module: Scalars['String']['output'];
};

export type Celo_HatsSignerGateV2_DisabledModuleEvent_filter = {
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
  hsg_?: InputMaybe<Celo_HatsSignerGateV2_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2_DisabledModuleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2_DisabledModuleEvent_filter>>>;
};

export type Celo_HatsSignerGateV2_DisabledModuleEvent_orderBy =
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

export type Celo_HatsSignerGateV2_EnabledModuleEvent = Celo_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Celo_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  module: Scalars['String']['output'];
};

export type Celo_HatsSignerGateV2_EnabledModuleEvent_filter = {
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
  hsg_?: InputMaybe<Celo_HatsSignerGateV2_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2_EnabledModuleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2_EnabledModuleEvent_filter>>>;
};

export type Celo_HatsSignerGateV2_EnabledModuleEvent_orderBy =
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

export type Celo_HatsSignerGateV2_HSGLockedEvent = Celo_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Celo_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
};

export type Celo_HatsSignerGateV2_HSGLockedEvent_filter = {
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
  hsg_?: InputMaybe<Celo_HatsSignerGateV2_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2_HSGLockedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2_HSGLockedEvent_filter>>>;
};

export type Celo_HatsSignerGateV2_HSGLockedEvent_orderBy =
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

export type Celo_HatsSignerGateV2_MigratedEvent = Celo_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Celo_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  newHsg: Scalars['String']['output'];
};

export type Celo_HatsSignerGateV2_MigratedEvent_filter = {
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
  hsg_?: InputMaybe<Celo_HatsSignerGateV2_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2_MigratedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2_MigratedEvent_filter>>>;
};

export type Celo_HatsSignerGateV2_MigratedEvent_orderBy =
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

export type Celo_HatsSignerGateV2_OwnerHatSetEvent = Celo_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Celo_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  ownerHat: Scalars['String']['output'];
};

export type Celo_HatsSignerGateV2_OwnerHatSetEvent_filter = {
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
  hsg_?: InputMaybe<Celo_HatsSignerGateV2_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2_OwnerHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2_OwnerHatSetEvent_filter>>>;
};

export type Celo_HatsSignerGateV2_OwnerHatSetEvent_orderBy =
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

export type Celo_HatsSignerGateV2_RegisteredEvent = Celo_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Celo_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  hatId: Scalars['String']['output'];
  signer: Scalars['String']['output'];
};

export type Celo_HatsSignerGateV2_RegisteredEvent_filter = {
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
  hsg_?: InputMaybe<Celo_HatsSignerGateV2_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2_RegisteredEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2_RegisteredEvent_filter>>>;
};

export type Celo_HatsSignerGateV2_RegisteredEvent_orderBy =
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

export type Celo_HatsSignerGateV2_SignerHatsAddedEvent = Celo_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Celo_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  newSignerHats: Array<Scalars['String']['output']>;
};

export type Celo_HatsSignerGateV2_SignerHatsAddedEvent_filter = {
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
  hsg_?: InputMaybe<Celo_HatsSignerGateV2_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  newSignerHats?: InputMaybe<Array<Scalars['String']['input']>>;
  newSignerHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  newSignerHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  newSignerHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  newSignerHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  newSignerHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2_SignerHatsAddedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2_SignerHatsAddedEvent_filter>>>;
};

export type Celo_HatsSignerGateV2_SignerHatsAddedEvent_orderBy =
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

export type Celo_HatsSignerGateV2_ThresholdConfigSetEvent = Celo_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Celo_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  thresholdType: Celo_HatsSignerGateV2ThresholdType;
  minThreshold: Scalars['BigInt']['output'];
  targetThreshold: Scalars['BigInt']['output'];
};

export type Celo_HatsSignerGateV2_ThresholdConfigSetEvent_filter = {
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
  hsg_?: InputMaybe<Celo_HatsSignerGateV2_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  thresholdType?: InputMaybe<Celo_HatsSignerGateV2ThresholdType>;
  thresholdType_not?: InputMaybe<Celo_HatsSignerGateV2ThresholdType>;
  thresholdType_in?: InputMaybe<Array<Celo_HatsSignerGateV2ThresholdType>>;
  thresholdType_not_in?: InputMaybe<Array<Celo_HatsSignerGateV2ThresholdType>>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2_ThresholdConfigSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2_ThresholdConfigSetEvent_filter>>>;
};

export type Celo_HatsSignerGateV2_ThresholdConfigSetEvent_orderBy =
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

export type Celo_HatsSignerGateV2_filter = {
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
  ownerHat_?: InputMaybe<Celo_HatAuthority_filter>;
  signerHats?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_?: InputMaybe<Celo_HatAuthority_filter>;
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
  thresholdType?: InputMaybe<Celo_HatsSignerGateV2ThresholdType>;
  thresholdType_not?: InputMaybe<Celo_HatsSignerGateV2ThresholdType>;
  thresholdType_in?: InputMaybe<Array<Celo_HatsSignerGateV2ThresholdType>>;
  thresholdType_not_in?: InputMaybe<Array<Celo_HatsSignerGateV2ThresholdType>>;
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
  events_?: InputMaybe<Celo_HatsSignerGateV2Event_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGateV2_filter>>>;
};

export type Celo_HatsSignerGateV2_orderBy =
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

export type Celo_HatsSignerGate_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  type?: InputMaybe<Celo_HatsSignerGateType>;
  type_not?: InputMaybe<Celo_HatsSignerGateType>;
  type_in?: InputMaybe<Array<Celo_HatsSignerGateType>>;
  type_not_in?: InputMaybe<Array<Celo_HatsSignerGateType>>;
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
  ownerHat_?: InputMaybe<Celo_HatAuthority_filter>;
  signerHats?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_?: InputMaybe<Celo_HatAuthority_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGate_filter>>>;
};

export type Celo_HatsSignerGate_orderBy =
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

export type Celo_HatsStakingShaman = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  judgeHat: Celo_HatAuthority;
  baal: Scalars['String']['output'];
  stakingProxyImpl: Scalars['String']['output'];
  sharesToken: Scalars['String']['output'];
  minStake: Scalars['BigInt']['output'];
  coolDownBuffer: Scalars['BigInt']['output'];
  stakes: Array<Celo_ShamanStake>;
};


export type Celo_HatsStakingShamanstakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_ShamanStake_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_ShamanStake_filter>;
};

export type Celo_HatsStakingShaman_filter = {
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
  judgeHat_?: InputMaybe<Celo_HatAuthority_filter>;
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
  stakes_?: InputMaybe<Celo_ShamanStake_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsStakingShaman_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsStakingShaman_filter>>>;
};

export type Celo_HatsStakingShaman_orderBy =
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
export type Celo_JokeRaceEligibility = Celo_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  adminHat: Array<Celo_HatAuthority>;
  currentTerm?: Maybe<Celo_JokeRaceEligibilityTerm>;
  nextTerm?: Maybe<Celo_JokeRaceEligibilityTerm>;
  allTerms: Array<Celo_JokeRaceEligibilityTerm>;
  events: Array<Celo_JokeRaceEvent>;
};


/**  Jokerace Eligibility  */
export type Celo_JokeRaceEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatAuthority_filter>;
};


/**  Jokerace Eligibility  */
export type Celo_JokeRaceEligibilityallTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_JokeRaceEligibilityTerm_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_JokeRaceEligibilityTerm_filter>;
};


/**  Jokerace Eligibility  */
export type Celo_JokeRaceEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_JokeRaceEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_JokeRaceEvent_filter>;
};

export type Celo_JokeRaceEligibilityTerm = {
  id: Scalars['ID']['output'];
  jokeRaceEligibility: Celo_JokeRaceEligibility;
  termStartedAt?: Maybe<Scalars['BigInt']['output']>;
  termEndsAt: Scalars['BigInt']['output'];
  topK: Scalars['BigInt']['output'];
  transitionPeriod: Scalars['BigInt']['output'];
  contest: Scalars['String']['output'];
  winners?: Maybe<Array<Scalars['String']['output']>>;
};

export type Celo_JokeRaceEligibilityTerm_filter = {
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
  jokeRaceEligibility_?: InputMaybe<Celo_JokeRaceEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_JokeRaceEligibilityTerm_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_JokeRaceEligibilityTerm_filter>>>;
};

export type Celo_JokeRaceEligibilityTerm_orderBy =
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

export type Celo_JokeRaceEligibility_filter = {
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
  adminHat_?: InputMaybe<Celo_HatAuthority_filter>;
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
  currentTerm_?: InputMaybe<Celo_JokeRaceEligibilityTerm_filter>;
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
  nextTerm_?: InputMaybe<Celo_JokeRaceEligibilityTerm_filter>;
  allTerms_?: InputMaybe<Celo_JokeRaceEligibilityTerm_filter>;
  events_?: InputMaybe<Celo_JokeRaceEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_JokeRaceEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_JokeRaceEligibility_filter>>>;
};

export type Celo_JokeRaceEligibility_orderBy =
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

export type Celo_JokeRaceEvent = {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  jokeRaceEligibilityInstance: Celo_JokeRaceEligibility;
};

export type Celo_JokeRaceEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  jokeRaceEligibilityInstance_?: InputMaybe<Celo_JokeRaceEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_JokeRaceEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_JokeRaceEvent_filter>>>;
};

export type Celo_JokeRaceEvent_orderBy =
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

export type Celo_JokeRace_NextTermSetEvent = Celo_JokeRaceEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  jokeRaceEligibilityInstance: Celo_JokeRaceEligibility;
  newContest: Scalars['String']['output'];
  newTopK: Scalars['BigInt']['output'];
  newTermEnd: Scalars['BigInt']['output'];
  newTransitionPeriod: Scalars['BigInt']['output'];
};

export type Celo_JokeRace_NextTermSetEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  jokeRaceEligibilityInstance_?: InputMaybe<Celo_JokeRaceEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_JokeRace_NextTermSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_JokeRace_NextTermSetEvent_filter>>>;
};

export type Celo_JokeRace_NextTermSetEvent_orderBy =
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

export type Celo_JokeRace_TermStartedEvent = Celo_JokeRaceEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  jokeRaceEligibilityInstance: Celo_JokeRaceEligibility;
  contest: Scalars['String']['output'];
  topK: Scalars['BigInt']['output'];
  termEnd: Scalars['BigInt']['output'];
  transitionPeriod: Scalars['BigInt']['output'];
};

export type Celo_JokeRace_TermStartedEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  jokeRaceEligibilityInstance_?: InputMaybe<Celo_JokeRaceEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_JokeRace_TermStartedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_JokeRace_TermStartedEvent_filter>>>;
};

export type Celo_JokeRace_TermStartedEvent_orderBy =
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
export type Celo_OrderDirection =
  | 'asc'
  | 'desc';

/**  Passthrough Module  */
export type Celo_PassthroughModule = Celo_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  passthroughHat: Celo_HatAuthority;
};

export type Celo_PassthroughModule_filter = {
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
  passthroughHat_?: InputMaybe<Celo_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_PassthroughModule_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_PassthroughModule_filter>>>;
};

export type Celo_PassthroughModule_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'passthroughHat'
  | 'passthroughHat__id'
  | 'passthroughHat__primaryHatsAccount1ofNAddress';

/**  Public Lock V14 Eligibility  */
export type Celo_PublicLockV14Eligibility = Celo_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  lock: Scalars['String']['output'];
  referrer: Scalars['String']['output'];
  referrerFeePercentage: Scalars['BigInt']['output'];
};

export type Celo_PublicLockV14Eligibility_filter = {
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_PublicLockV14Eligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_PublicLockV14Eligibility_filter>>>;
};

export type Celo_PublicLockV14Eligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'lock'
  | 'referrer'
  | 'referrerFeePercentage';

export type Query = {
  Celo_hatAuthority?: Maybe<Celo_HatAuthority>;
  Celo_hatAuthorities: Array<Celo_HatAuthority>;
  Celo_hatsSignerGate?: Maybe<Celo_HatsSignerGate>;
  Celo_hatsSignerGates: Array<Celo_HatsSignerGate>;
  Celo_hatsSignerGateV2?: Maybe<Celo_HatsSignerGateV2>;
  Celo_hatsSignerGateV2S: Array<Celo_HatsSignerGateV2>;
  Celo_hatsSignerGateV2OwnerHatSetEvent?: Maybe<Celo_HatsSignerGateV2_OwnerHatSetEvent>;
  Celo_hatsSignerGateV2OwnerHatSetEvents: Array<Celo_HatsSignerGateV2_OwnerHatSetEvent>;
  Celo_hatsSignerGateV2SignerHatsAddedEvent?: Maybe<Celo_HatsSignerGateV2_SignerHatsAddedEvent>;
  Celo_hatsSignerGateV2SignerHatsAddedEvents: Array<Celo_HatsSignerGateV2_SignerHatsAddedEvent>;
  Celo_hatsSignerGateV2ThresholdConfigSetEvent?: Maybe<Celo_HatsSignerGateV2_ThresholdConfigSetEvent>;
  Celo_hatsSignerGateV2ThresholdConfigSetEvents: Array<Celo_HatsSignerGateV2_ThresholdConfigSetEvent>;
  Celo_hatsSignerGateV2HSGLockedEvent?: Maybe<Celo_HatsSignerGateV2_HSGLockedEvent>;
  Celo_hatsSignerGateV2HSGLockedEvents: Array<Celo_HatsSignerGateV2_HSGLockedEvent>;
  Celo_hatsSignerGateV2ClaimableForSetEvent?: Maybe<Celo_HatsSignerGateV2_ClaimableForSetEvent>;
  Celo_hatsSignerGateV2ClaimableForSetEvents: Array<Celo_HatsSignerGateV2_ClaimableForSetEvent>;
  Celo_hatsSignerGateV2DetachedEvent?: Maybe<Celo_HatsSignerGateV2_DetachedEvent>;
  Celo_hatsSignerGateV2DetachedEvents: Array<Celo_HatsSignerGateV2_DetachedEvent>;
  Celo_hatsSignerGateV2MigratedEvent?: Maybe<Celo_HatsSignerGateV2_MigratedEvent>;
  Celo_hatsSignerGateV2MigratedEvents: Array<Celo_HatsSignerGateV2_MigratedEvent>;
  Celo_hatsSignerGateV2DelegatecallTargetEnabledEvent?: Maybe<Celo_HatsSignerGateV2_DelegatecallTargetEnabledEvent>;
  Celo_hatsSignerGateV2DelegatecallTargetEnabledEvents: Array<Celo_HatsSignerGateV2_DelegatecallTargetEnabledEvent>;
  Celo_hatsSignerGateV2RegisteredEvent?: Maybe<Celo_HatsSignerGateV2_RegisteredEvent>;
  Celo_hatsSignerGateV2RegisteredEvents: Array<Celo_HatsSignerGateV2_RegisteredEvent>;
  Celo_hatsSignerGateV2ChangedGuardEvent?: Maybe<Celo_HatsSignerGateV2_ChangedGuardEvent>;
  Celo_hatsSignerGateV2ChangedGuardEvents: Array<Celo_HatsSignerGateV2_ChangedGuardEvent>;
  Celo_hatsSignerGateV2EnabledModuleEvent?: Maybe<Celo_HatsSignerGateV2_EnabledModuleEvent>;
  Celo_hatsSignerGateV2EnabledModuleEvents: Array<Celo_HatsSignerGateV2_EnabledModuleEvent>;
  Celo_hatsSignerGateV2DisabledModuleEvent?: Maybe<Celo_HatsSignerGateV2_DisabledModuleEvent>;
  Celo_hatsSignerGateV2DisabledModuleEvents: Array<Celo_HatsSignerGateV2_DisabledModuleEvent>;
  Celo_hatsAccount1OfN?: Maybe<Celo_HatsAccount1ofN>;
  Celo_hatsAccount1OfNs: Array<Celo_HatsAccount1ofN>;
  Celo_hatsAccount1OfNOperation?: Maybe<Celo_HatsAccount1ofNOperation>;
  Celo_hatsAccount1OfNOperations: Array<Celo_HatsAccount1ofNOperation>;
  Celo_hatsStakingShaman?: Maybe<Celo_HatsStakingShaman>;
  Celo_hatsStakingShamans: Array<Celo_HatsStakingShaman>;
  Celo_shamanStake?: Maybe<Celo_ShamanStake>;
  Celo_shamanStakes: Array<Celo_ShamanStake>;
  Celo_hatsFarcasterDelegator?: Maybe<Celo_HatsFarcasterDelegator>;
  Celo_hatsFarcasterDelegators: Array<Celo_HatsFarcasterDelegator>;
  Celo_jokeRaceEligibility?: Maybe<Celo_JokeRaceEligibility>;
  Celo_jokeRaceEligibilities: Array<Celo_JokeRaceEligibility>;
  Celo_jokeRaceEligibilityTerm?: Maybe<Celo_JokeRaceEligibilityTerm>;
  Celo_jokeRaceEligibilityTerms: Array<Celo_JokeRaceEligibilityTerm>;
  Celo_jokeRaceNextTermSetEvent?: Maybe<Celo_JokeRace_NextTermSetEvent>;
  Celo_jokeRaceNextTermSetEvents: Array<Celo_JokeRace_NextTermSetEvent>;
  Celo_jokeRaceTermStartedEvent?: Maybe<Celo_JokeRace_TermStartedEvent>;
  Celo_jokeRaceTermStartedEvents: Array<Celo_JokeRace_TermStartedEvent>;
  Celo_allowListEligibility?: Maybe<Celo_AllowListEligibility>;
  Celo_allowListEligibilities: Array<Celo_AllowListEligibility>;
  Celo_allowListEligibilityData?: Maybe<Celo_AllowListEligibilityData>;
  Celo_allowListEligibilityDatas: Array<Celo_AllowListEligibilityData>;
  Celo_allowlistAccountAddedEvent?: Maybe<Celo_Allowlist_AccountAddedEvent>;
  Celo_allowlistAccountAddedEvents: Array<Celo_Allowlist_AccountAddedEvent>;
  Celo_allowlistAccountsAddedEvent?: Maybe<Celo_Allowlist_AccountsAddedEvent>;
  Celo_allowlistAccountsAddedEvents: Array<Celo_Allowlist_AccountsAddedEvent>;
  Celo_allowlistAccountRemovedEvent?: Maybe<Celo_Allowlist_AccountRemovedEvent>;
  Celo_allowlistAccountRemovedEvents: Array<Celo_Allowlist_AccountRemovedEvent>;
  Celo_allowlistAccountsRemovedEvent?: Maybe<Celo_Allowlist_AccountsRemovedEvent>;
  Celo_allowlistAccountsRemovedEvents: Array<Celo_Allowlist_AccountsRemovedEvent>;
  Celo_allowlistAccountStandingChangedEvent?: Maybe<Celo_Allowlist_AccountStandingChangedEvent>;
  Celo_allowlistAccountStandingChangedEvents: Array<Celo_Allowlist_AccountStandingChangedEvent>;
  Celo_allowlistAccountsStandingChangedEvent?: Maybe<Celo_Allowlist_AccountsStandingChangedEvent>;
  Celo_allowlistAccountsStandingChangedEvents: Array<Celo_Allowlist_AccountsStandingChangedEvent>;
  Celo_allowlistOwnerHatSetEvent?: Maybe<Celo_Allowlist_OwnerHatSetEvent>;
  Celo_allowlistOwnerHatSetEvents: Array<Celo_Allowlist_OwnerHatSetEvent>;
  Celo_allowlistArbitratorHatSetEvent?: Maybe<Celo_Allowlist_ArbitratorHatSetEvent>;
  Celo_allowlistArbitratorHatSetEvents: Array<Celo_Allowlist_ArbitratorHatSetEvent>;
  Celo_hatsElectionEligibility?: Maybe<Celo_HatsElectionEligibility>;
  Celo_hatsElectionEligibilities: Array<Celo_HatsElectionEligibility>;
  Celo_electionTerm?: Maybe<Celo_ElectionTerm>;
  Celo_electionTerms: Array<Celo_ElectionTerm>;
  Celo_electionElectionOpenedEvent?: Maybe<Celo_Election_ElectionOpenedEvent>;
  Celo_electionElectionOpenedEvents: Array<Celo_Election_ElectionOpenedEvent>;
  Celo_electionElectionCompletedEvent?: Maybe<Celo_Election_ElectionCompletedEvent>;
  Celo_electionElectionCompletedEvents: Array<Celo_Election_ElectionCompletedEvent>;
  Celo_electionNewTermStartedEvent?: Maybe<Celo_Election_NewTermStartedEvent>;
  Celo_electionNewTermStartedEvents: Array<Celo_Election_NewTermStartedEvent>;
  Celo_electionRecalledEvent?: Maybe<Celo_Election_RecalledEvent>;
  Celo_electionRecalledEvents: Array<Celo_Election_RecalledEvent>;
  Celo_passthroughModule?: Maybe<Celo_PassthroughModule>;
  Celo_passthroughModules: Array<Celo_PassthroughModule>;
  Celo_stakingEligibility?: Maybe<Celo_StakingEligibility>;
  Celo_stakingEligibilities: Array<Celo_StakingEligibility>;
  Celo_stake?: Maybe<Celo_Stake>;
  Celo_stakes: Array<Celo_Stake>;
  Celo_stakingStakedEvent?: Maybe<Celo_Staking_StakedEvent>;
  Celo_stakingStakedEvents: Array<Celo_Staking_StakedEvent>;
  Celo_stakingUnstakeBegunEvent?: Maybe<Celo_Staking_UnstakeBegunEvent>;
  Celo_stakingUnstakeBegunEvents: Array<Celo_Staking_UnstakeBegunEvent>;
  Celo_stakingSlashedEvent?: Maybe<Celo_Staking_SlashedEvent>;
  Celo_stakingSlashedEvents: Array<Celo_Staking_SlashedEvent>;
  Celo_stakingMinStakeChangedEvent?: Maybe<Celo_Staking_MinStakeChangedEvent>;
  Celo_stakingMinStakeChangedEvents: Array<Celo_Staking_MinStakeChangedEvent>;
  Celo_stakingJudgeHatChangedEvent?: Maybe<Celo_Staking_JudgeHatChangedEvent>;
  Celo_stakingJudgeHatChangedEvents: Array<Celo_Staking_JudgeHatChangedEvent>;
  Celo_stakingRecipientHatChangedEvent?: Maybe<Celo_Staking_RecipientHatChangedEvent>;
  Celo_stakingRecipientHatChangedEvents: Array<Celo_Staking_RecipientHatChangedEvent>;
  Celo_stakingCooldownPeriodChangedEvent?: Maybe<Celo_Staking_CooldownPeriodChangedEvent>;
  Celo_stakingCooldownPeriodChangedEvents: Array<Celo_Staking_CooldownPeriodChangedEvent>;
  Celo_stakingForgivenEvent?: Maybe<Celo_Staking_ForgivenEvent>;
  Celo_stakingForgivenEvents: Array<Celo_Staking_ForgivenEvent>;
  Celo_seasonToggle?: Maybe<Celo_SeasonToggle>;
  Celo_seasonToggles: Array<Celo_SeasonToggle>;
  Celo_characterSheetsLevelEligibility?: Maybe<Celo_CharacterSheetsLevelEligibility>;
  Celo_characterSheetsLevelEligibilities: Array<Celo_CharacterSheetsLevelEligibility>;
  Celo_agreementEligibility?: Maybe<Celo_AgreementEligibility>;
  Celo_agreementEligibilities: Array<Celo_AgreementEligibility>;
  Celo_agreement?: Maybe<Celo_Agreement>;
  Celo_agreements: Array<Celo_Agreement>;
  Celo_agreementHatClaimedWithAgreementEvent?: Maybe<Celo_Agreement_HatClaimedWithAgreementEvent>;
  Celo_agreementHatClaimedWithAgreementEvents: Array<Celo_Agreement_HatClaimedWithAgreementEvent>;
  Celo_agreementAgreementSignedEvent?: Maybe<Celo_Agreement_AgreementSignedEvent>;
  Celo_agreementAgreementSignedEvents: Array<Celo_Agreement_AgreementSignedEvent>;
  Celo_agreementAgreementSetEvent?: Maybe<Celo_Agreement_AgreementSetEvent>;
  Celo_agreementAgreementSetEvents: Array<Celo_Agreement_AgreementSetEvent>;
  Celo_agreementOwnerHatSetEvent?: Maybe<Celo_Agreement_OwnerHatSetEvent>;
  Celo_agreementOwnerHatSetEvents: Array<Celo_Agreement_OwnerHatSetEvent>;
  Celo_agreementArbitratorHatSetEvent?: Maybe<Celo_Agreement_ArbitratorHatSetEvent>;
  Celo_agreementArbitratorHatSetEvents: Array<Celo_Agreement_ArbitratorHatSetEvent>;
  Celo_erc20Eligibility?: Maybe<Celo_Erc20Eligibility>;
  Celo_erc20Eligibilities: Array<Celo_Erc20Eligibility>;
  Celo_erc721Eligibility?: Maybe<Celo_Erc721Eligibility>;
  Celo_erc721Eligibilities: Array<Celo_Erc721Eligibility>;
  Celo_erc1155Eligibility?: Maybe<Celo_Erc1155Eligibility>;
  Celo_erc1155Eligibilities: Array<Celo_Erc1155Eligibility>;
  Celo_hatWearingEligibility?: Maybe<Celo_HatWearingEligibility>;
  Celo_hatWearingEligibilities: Array<Celo_HatWearingEligibility>;
  Celo_gitcoinPassportEligibility?: Maybe<Celo_GitcoinPassportEligibility>;
  Celo_gitcoinPassportEligibilities: Array<Celo_GitcoinPassportEligibility>;
  Celo_coLinksEligibility?: Maybe<Celo_CoLinksEligibility>;
  Celo_coLinksEligibilities: Array<Celo_CoLinksEligibility>;
  Celo_hatControlledModule?: Maybe<Celo_HatControlledModule>;
  Celo_hatControlledModules: Array<Celo_HatControlledModule>;
  Celo_hatControlledModuleWearerStatus?: Maybe<Celo_HatControlledModuleWearerStatus>;
  Celo_hatControlledModuleWearerStatuses: Array<Celo_HatControlledModuleWearerStatus>;
  Celo_hatControlledModuleHatStatus?: Maybe<Celo_HatControlledModuleHatStatus>;
  Celo_hatControlledModuleHatStatuses: Array<Celo_HatControlledModuleHatStatus>;
  Celo_hatControlledWearerStatusSet?: Maybe<Celo_HatControlled_WearerStatusSet>;
  Celo_hatControlledWearerStatusSets: Array<Celo_HatControlled_WearerStatusSet>;
  Celo_hatControlledHatStatusSet?: Maybe<Celo_HatControlled_HatStatusSet>;
  Celo_hatControlledHatStatusSets: Array<Celo_HatControlled_HatStatusSet>;
  Celo_publicLockV14Eligibility?: Maybe<Celo_PublicLockV14Eligibility>;
  Celo_publicLockV14Eligibilities: Array<Celo_PublicLockV14Eligibility>;
  Celo_hatsEligibilitiesChain?: Maybe<Celo_HatsEligibilitiesChain>;
  Celo_hatsEligibilitiesChains: Array<Celo_HatsEligibilitiesChain>;
  Celo_eligibilitiesRuleset?: Maybe<Celo_EligibilitiesRuleset>;
  Celo_eligibilitiesRulesets: Array<Celo_EligibilitiesRuleset>;
  Celo_hatsSignerGateV2Event?: Maybe<Celo_HatsSignerGateV2Event>;
  Celo_hatsSignerGateV2Events: Array<Celo_HatsSignerGateV2Event>;
  Celo_hatsModule?: Maybe<Celo_HatsModule>;
  Celo_hatsModules: Array<Celo_HatsModule>;
  Celo_hatsModuleEvent?: Maybe<Celo_HatsModuleEvent>;
  Celo_hatsModuleEvents: Array<Celo_HatsModuleEvent>;
  Celo_jokeRaceEvent?: Maybe<Celo_JokeRaceEvent>;
  Celo_jokeRaceEvents: Array<Celo_JokeRaceEvent>;
  Celo_allowlistEvent?: Maybe<Celo_AllowlistEvent>;
  Celo_allowlistEvents: Array<Celo_AllowlistEvent>;
  Celo_electionEvent?: Maybe<Celo_ElectionEvent>;
  Celo_electionEvents: Array<Celo_ElectionEvent>;
  Celo_stakingEvent?: Maybe<Celo_StakingEvent>;
  Celo_stakingEvents: Array<Celo_StakingEvent>;
  Celo_agreementEvent?: Maybe<Celo_AgreementEvent>;
  Celo_agreementEvents: Array<Celo_AgreementEvent>;
  Celo_hatControlledModuleEvent?: Maybe<Celo_HatControlledModuleEvent>;
  Celo_hatControlledModuleEvents: Array<Celo_HatControlledModuleEvent>;
  /** Access to subgraph metadata */
  Celo__meta?: Maybe<Celo__Meta_>;
};


export type QueryCelo_hatAuthorityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatAuthoritiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatAuthority_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGate_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2Args = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2SArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2OwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2OwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2SignerHatsAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2SignerHatsAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_SignerHatsAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_SignerHatsAddedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2ThresholdConfigSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2ThresholdConfigSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_ThresholdConfigSetEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_ThresholdConfigSetEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2HSGLockedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2HSGLockedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_HSGLockedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_HSGLockedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2ClaimableForSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2ClaimableForSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_ClaimableForSetEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_ClaimableForSetEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2DetachedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2DetachedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_DetachedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_DetachedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2MigratedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2MigratedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_MigratedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_MigratedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2DelegatecallTargetEnabledEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2DelegatecallTargetEnabledEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_DelegatecallTargetEnabledEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_DelegatecallTargetEnabledEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2RegisteredEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2RegisteredEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_RegisteredEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_RegisteredEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2ChangedGuardEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2ChangedGuardEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_ChangedGuardEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_ChangedGuardEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2EnabledModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2EnabledModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_EnabledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_EnabledModuleEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2DisabledModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2DisabledModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_DisabledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_DisabledModuleEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsAccount1OfNArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsAccount1OfNsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsAccount1ofN_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsAccount1OfNOperationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsAccount1OfNOperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsAccount1ofNOperation_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsStakingShamanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsStakingShamansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsStakingShaman_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsStakingShaman_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_shamanStakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_shamanStakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_ShamanStake_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_ShamanStake_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsFarcasterDelegatorArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsFarcasterDelegatorsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsFarcasterDelegator_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_jokeRaceEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_jokeRaceEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_JokeRaceEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_jokeRaceEligibilityTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_jokeRaceEligibilityTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_JokeRaceEligibilityTerm_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_JokeRaceEligibilityTerm_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_jokeRaceNextTermSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_jokeRaceNextTermSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_JokeRace_NextTermSetEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_JokeRace_NextTermSetEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_jokeRaceTermStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_jokeRaceTermStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_JokeRace_TermStartedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_JokeRace_TermStartedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_allowListEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_allowListEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_AllowListEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_allowListEligibilityDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_allowListEligibilityDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_AllowListEligibilityData_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_AllowListEligibilityData_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_allowlistAccountAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_allowlistAccountAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Allowlist_AccountAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Allowlist_AccountAddedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_allowlistAccountsAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_allowlistAccountsAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Allowlist_AccountsAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Allowlist_AccountsAddedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_allowlistAccountRemovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_allowlistAccountRemovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Allowlist_AccountRemovedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Allowlist_AccountRemovedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_allowlistAccountsRemovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_allowlistAccountsRemovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Allowlist_AccountsRemovedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Allowlist_AccountsRemovedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_allowlistAccountStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_allowlistAccountStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Allowlist_AccountStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Allowlist_AccountStandingChangedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_allowlistAccountsStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_allowlistAccountsStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Allowlist_AccountsStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Allowlist_AccountsStandingChangedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_allowlistOwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_allowlistOwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Allowlist_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Allowlist_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_allowlistArbitratorHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_allowlistArbitratorHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Allowlist_ArbitratorHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Allowlist_ArbitratorHatSetEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsElectionEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsElectionEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsElectionEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_electionTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_electionTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_ElectionTerm_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_electionElectionOpenedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_electionElectionOpenedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Election_ElectionOpenedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Election_ElectionOpenedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_electionElectionCompletedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_electionElectionCompletedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Election_ElectionCompletedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Election_ElectionCompletedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_electionNewTermStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_electionNewTermStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Election_NewTermStartedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Election_NewTermStartedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_electionRecalledEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_electionRecalledEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Election_RecalledEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Election_RecalledEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_passthroughModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_passthroughModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_PassthroughModule_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_stakingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_stakingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_StakingEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_stakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_stakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Stake_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Stake_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_stakingStakedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_stakingStakedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Staking_StakedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Staking_StakedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_stakingUnstakeBegunEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_stakingUnstakeBegunEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Staking_UnstakeBegunEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Staking_UnstakeBegunEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_stakingSlashedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_stakingSlashedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Staking_SlashedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Staking_SlashedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_stakingMinStakeChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_stakingMinStakeChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Staking_MinStakeChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Staking_MinStakeChangedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_stakingJudgeHatChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_stakingJudgeHatChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Staking_JudgeHatChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Staking_JudgeHatChangedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_stakingRecipientHatChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_stakingRecipientHatChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Staking_RecipientHatChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Staking_RecipientHatChangedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_stakingCooldownPeriodChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_stakingCooldownPeriodChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Staking_CooldownPeriodChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Staking_CooldownPeriodChangedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_stakingForgivenEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_stakingForgivenEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Staking_ForgivenEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Staking_ForgivenEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_seasonToggleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_seasonTogglesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_SeasonToggle_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_characterSheetsLevelEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_characterSheetsLevelEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_CharacterSheetsLevelEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_agreementEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_agreementEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_AgreementEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_agreementArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_agreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Agreement_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Agreement_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_agreementHatClaimedWithAgreementEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_agreementHatClaimedWithAgreementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Agreement_HatClaimedWithAgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Agreement_HatClaimedWithAgreementEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_agreementAgreementSignedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_agreementAgreementSignedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Agreement_AgreementSignedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Agreement_AgreementSignedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_agreementAgreementSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_agreementAgreementSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Agreement_AgreementSetEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Agreement_AgreementSetEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_agreementOwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_agreementOwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Agreement_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Agreement_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_agreementArbitratorHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_agreementArbitratorHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Agreement_ArbitratorHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Agreement_ArbitratorHatSetEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_erc20EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_erc20EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Erc20Eligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Erc20Eligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_erc721EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_erc721EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Erc721Eligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Erc721Eligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_erc1155EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_erc1155EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Erc1155Eligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Erc1155Eligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatWearingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatWearingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatWearingEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatWearingEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_gitcoinPassportEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_gitcoinPassportEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_GitcoinPassportEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_GitcoinPassportEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_coLinksEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_coLinksEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_CoLinksEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_CoLinksEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatControlledModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatControlledModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatControlledModule_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatControlledModule_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatControlledModuleWearerStatusArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatControlledModuleWearerStatusesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatControlledModuleWearerStatus_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatControlledModuleWearerStatus_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatControlledModuleHatStatusArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatControlledModuleHatStatusesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatControlledModuleHatStatus_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatControlledModuleHatStatus_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatControlledWearerStatusSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatControlledWearerStatusSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatControlled_WearerStatusSet_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatControlled_WearerStatusSet_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatControlledHatStatusSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatControlledHatStatusSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatControlled_HatStatusSet_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatControlled_HatStatusSet_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_publicLockV14EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_publicLockV14EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_PublicLockV14Eligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_PublicLockV14Eligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsEligibilitiesChainArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsEligibilitiesChainsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsEligibilitiesChain_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsEligibilitiesChain_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_eligibilitiesRulesetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_eligibilitiesRulesetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_EligibilitiesRuleset_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_EligibilitiesRuleset_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2EventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateV2EventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2Event_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2Event_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsModule_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsModule_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsModuleEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_jokeRaceEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_jokeRaceEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_JokeRaceEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_JokeRaceEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_allowlistEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_allowlistEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_AllowlistEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_AllowlistEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_electionEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_electionEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_ElectionEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_ElectionEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_stakingEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_stakingEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_StakingEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_StakingEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_agreementEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_agreementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_AgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_AgreementEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatControlledModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatControlledModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatControlledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatControlledModuleEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo__metaArgs = {
  block?: InputMaybe<Celo_Block_height>;
};

/**  Season Toggle  */
export type Celo_SeasonToggle = Celo_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  hatAdmins: Array<Celo_HatAuthority>;
};


/**  Season Toggle  */
export type Celo_SeasonTogglehatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatAuthority_filter>;
};

export type Celo_SeasonToggle_filter = {
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
  hatAdmins_?: InputMaybe<Celo_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_SeasonToggle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_SeasonToggle_filter>>>;
};

export type Celo_SeasonToggle_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'hatAdmins';

/** Shaman Stake */
export type Celo_ShamanStake = {
  id: Scalars['ID']['output'];
  stakingShaman: Celo_HatsStakingShaman;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  unstakingAmount: Scalars['BigInt']['output'];
  canUnstakeAfter: Scalars['BigInt']['output'];
};

export type Celo_ShamanStake_filter = {
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
  stakingShaman_?: InputMaybe<Celo_HatsStakingShaman_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_ShamanStake_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_ShamanStake_filter>>>;
};

export type Celo_ShamanStake_orderBy =
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

export type Celo_Stake = {
  id: Scalars['ID']['output'];
  stakingEligiblity: Celo_StakingEligibility;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  slashed: Scalars['Boolean']['output'];
  cooldownAmount: Scalars['BigInt']['output'];
  cooldownEndsAt: Scalars['BigInt']['output'];
};

export type Celo_Stake_filter = {
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
  stakingEligiblity_?: InputMaybe<Celo_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Stake_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Stake_filter>>>;
};

export type Celo_Stake_orderBy =
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
export type Celo_StakingEligibility = Celo_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  token: Scalars['String']['output'];
  judgeHat: Celo_HatAuthority;
  recipientHat: Celo_HatAuthority;
  hatAdmins: Array<Celo_HatAuthority>;
  minStake: Scalars['BigInt']['output'];
  cooldownPeriod: Scalars['BigInt']['output'];
  totalSlashedStakes: Scalars['BigInt']['output'];
  stakes: Array<Celo_Stake>;
  events: Array<Celo_StakingEvent>;
};


/**  Staking Eligibility  */
export type Celo_StakingEligibilityhatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatAuthority_filter>;
};


/**  Staking Eligibility  */
export type Celo_StakingEligibilitystakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Stake_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Stake_filter>;
};


/**  Staking Eligibility  */
export type Celo_StakingEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_StakingEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_StakingEvent_filter>;
};

export type Celo_StakingEligibility_filter = {
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
  judgeHat_?: InputMaybe<Celo_HatAuthority_filter>;
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
  recipientHat_?: InputMaybe<Celo_HatAuthority_filter>;
  hatAdmins?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_?: InputMaybe<Celo_HatAuthority_filter>;
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
  stakes_?: InputMaybe<Celo_Stake_filter>;
  events_?: InputMaybe<Celo_StakingEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_StakingEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_StakingEligibility_filter>>>;
};

export type Celo_StakingEligibility_orderBy =
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

export type Celo_StakingEvent = {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  stakingEligibilityInstance: Celo_StakingEligibility;
};

export type Celo_StakingEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  stakingEligibilityInstance_?: InputMaybe<Celo_StakingEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_StakingEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_StakingEvent_filter>>>;
};

export type Celo_StakingEvent_orderBy =
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

export type Celo_Staking_CooldownPeriodChangedEvent = Celo_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  stakingEligibilityInstance: Celo_StakingEligibility;
  newDelay: Scalars['BigInt']['output'];
};

export type Celo_Staking_CooldownPeriodChangedEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  stakingEligibilityInstance_?: InputMaybe<Celo_StakingEligibility_filter>;
  newDelay?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_not?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newDelay_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Staking_CooldownPeriodChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Staking_CooldownPeriodChangedEvent_filter>>>;
};

export type Celo_Staking_CooldownPeriodChangedEvent_orderBy =
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

export type Celo_Staking_ForgivenEvent = Celo_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  stakingEligibilityInstance: Celo_StakingEligibility;
  staker: Scalars['String']['output'];
};

export type Celo_Staking_ForgivenEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  stakingEligibilityInstance_?: InputMaybe<Celo_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Staking_ForgivenEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Staking_ForgivenEvent_filter>>>;
};

export type Celo_Staking_ForgivenEvent_orderBy =
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

export type Celo_Staking_JudgeHatChangedEvent = Celo_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  stakingEligibilityInstance: Celo_StakingEligibility;
  newJudgeHat: Scalars['String']['output'];
};

export type Celo_Staking_JudgeHatChangedEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  stakingEligibilityInstance_?: InputMaybe<Celo_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Staking_JudgeHatChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Staking_JudgeHatChangedEvent_filter>>>;
};

export type Celo_Staking_JudgeHatChangedEvent_orderBy =
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

export type Celo_Staking_MinStakeChangedEvent = Celo_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  stakingEligibilityInstance: Celo_StakingEligibility;
  newMinStake: Scalars['BigInt']['output'];
};

export type Celo_Staking_MinStakeChangedEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  stakingEligibilityInstance_?: InputMaybe<Celo_StakingEligibility_filter>;
  newMinStake?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_not?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newMinStake_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Staking_MinStakeChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Staking_MinStakeChangedEvent_filter>>>;
};

export type Celo_Staking_MinStakeChangedEvent_orderBy =
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

export type Celo_Staking_RecipientHatChangedEvent = Celo_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  stakingEligibilityInstance: Celo_StakingEligibility;
  newRecipientHat: Scalars['String']['output'];
};

export type Celo_Staking_RecipientHatChangedEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  stakingEligibilityInstance_?: InputMaybe<Celo_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Staking_RecipientHatChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Staking_RecipientHatChangedEvent_filter>>>;
};

export type Celo_Staking_RecipientHatChangedEvent_orderBy =
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

export type Celo_Staking_SlashedEvent = Celo_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  stakingEligibilityInstance: Celo_StakingEligibility;
  wearer: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
};

export type Celo_Staking_SlashedEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  stakingEligibilityInstance_?: InputMaybe<Celo_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Staking_SlashedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Staking_SlashedEvent_filter>>>;
};

export type Celo_Staking_SlashedEvent_orderBy =
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

export type Celo_Staking_StakedEvent = Celo_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  stakingEligibilityInstance: Celo_StakingEligibility;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
};

export type Celo_Staking_StakedEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  stakingEligibilityInstance_?: InputMaybe<Celo_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Staking_StakedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Staking_StakedEvent_filter>>>;
};

export type Celo_Staking_StakedEvent_orderBy =
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

export type Celo_Staking_UnstakeBegunEvent = Celo_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Celo_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Celo_Bytes']['output'];
  stakingEligibilityInstance: Celo_StakingEligibility;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  cooldownEnd: Scalars['BigInt']['output'];
};

export type Celo_Staking_UnstakeBegunEvent_filter = {
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
  module_?: InputMaybe<Celo_HatsModule_filter>;
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
  transactionID?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
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
  stakingEligibilityInstance_?: InputMaybe<Celo_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Staking_UnstakeBegunEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Staking_UnstakeBegunEvent_filter>>>;
};

export type Celo_Staking_UnstakeBegunEvent_orderBy =
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
  Celo_hatAuthority?: Maybe<Celo_HatAuthority>;
  Celo_hatAuthorities: Array<Celo_HatAuthority>;
  Celo_hatsSignerGate?: Maybe<Celo_HatsSignerGate>;
  Celo_hatsSignerGates: Array<Celo_HatsSignerGate>;
  Celo_hatsSignerGateV2?: Maybe<Celo_HatsSignerGateV2>;
  Celo_hatsSignerGateV2S: Array<Celo_HatsSignerGateV2>;
  Celo_hatsSignerGateV2OwnerHatSetEvent?: Maybe<Celo_HatsSignerGateV2_OwnerHatSetEvent>;
  Celo_hatsSignerGateV2OwnerHatSetEvents: Array<Celo_HatsSignerGateV2_OwnerHatSetEvent>;
  Celo_hatsSignerGateV2SignerHatsAddedEvent?: Maybe<Celo_HatsSignerGateV2_SignerHatsAddedEvent>;
  Celo_hatsSignerGateV2SignerHatsAddedEvents: Array<Celo_HatsSignerGateV2_SignerHatsAddedEvent>;
  Celo_hatsSignerGateV2ThresholdConfigSetEvent?: Maybe<Celo_HatsSignerGateV2_ThresholdConfigSetEvent>;
  Celo_hatsSignerGateV2ThresholdConfigSetEvents: Array<Celo_HatsSignerGateV2_ThresholdConfigSetEvent>;
  Celo_hatsSignerGateV2HSGLockedEvent?: Maybe<Celo_HatsSignerGateV2_HSGLockedEvent>;
  Celo_hatsSignerGateV2HSGLockedEvents: Array<Celo_HatsSignerGateV2_HSGLockedEvent>;
  Celo_hatsSignerGateV2ClaimableForSetEvent?: Maybe<Celo_HatsSignerGateV2_ClaimableForSetEvent>;
  Celo_hatsSignerGateV2ClaimableForSetEvents: Array<Celo_HatsSignerGateV2_ClaimableForSetEvent>;
  Celo_hatsSignerGateV2DetachedEvent?: Maybe<Celo_HatsSignerGateV2_DetachedEvent>;
  Celo_hatsSignerGateV2DetachedEvents: Array<Celo_HatsSignerGateV2_DetachedEvent>;
  Celo_hatsSignerGateV2MigratedEvent?: Maybe<Celo_HatsSignerGateV2_MigratedEvent>;
  Celo_hatsSignerGateV2MigratedEvents: Array<Celo_HatsSignerGateV2_MigratedEvent>;
  Celo_hatsSignerGateV2DelegatecallTargetEnabledEvent?: Maybe<Celo_HatsSignerGateV2_DelegatecallTargetEnabledEvent>;
  Celo_hatsSignerGateV2DelegatecallTargetEnabledEvents: Array<Celo_HatsSignerGateV2_DelegatecallTargetEnabledEvent>;
  Celo_hatsSignerGateV2RegisteredEvent?: Maybe<Celo_HatsSignerGateV2_RegisteredEvent>;
  Celo_hatsSignerGateV2RegisteredEvents: Array<Celo_HatsSignerGateV2_RegisteredEvent>;
  Celo_hatsSignerGateV2ChangedGuardEvent?: Maybe<Celo_HatsSignerGateV2_ChangedGuardEvent>;
  Celo_hatsSignerGateV2ChangedGuardEvents: Array<Celo_HatsSignerGateV2_ChangedGuardEvent>;
  Celo_hatsSignerGateV2EnabledModuleEvent?: Maybe<Celo_HatsSignerGateV2_EnabledModuleEvent>;
  Celo_hatsSignerGateV2EnabledModuleEvents: Array<Celo_HatsSignerGateV2_EnabledModuleEvent>;
  Celo_hatsSignerGateV2DisabledModuleEvent?: Maybe<Celo_HatsSignerGateV2_DisabledModuleEvent>;
  Celo_hatsSignerGateV2DisabledModuleEvents: Array<Celo_HatsSignerGateV2_DisabledModuleEvent>;
  Celo_hatsAccount1OfN?: Maybe<Celo_HatsAccount1ofN>;
  Celo_hatsAccount1OfNs: Array<Celo_HatsAccount1ofN>;
  Celo_hatsAccount1OfNOperation?: Maybe<Celo_HatsAccount1ofNOperation>;
  Celo_hatsAccount1OfNOperations: Array<Celo_HatsAccount1ofNOperation>;
  Celo_hatsStakingShaman?: Maybe<Celo_HatsStakingShaman>;
  Celo_hatsStakingShamans: Array<Celo_HatsStakingShaman>;
  Celo_shamanStake?: Maybe<Celo_ShamanStake>;
  Celo_shamanStakes: Array<Celo_ShamanStake>;
  Celo_hatsFarcasterDelegator?: Maybe<Celo_HatsFarcasterDelegator>;
  Celo_hatsFarcasterDelegators: Array<Celo_HatsFarcasterDelegator>;
  Celo_jokeRaceEligibility?: Maybe<Celo_JokeRaceEligibility>;
  Celo_jokeRaceEligibilities: Array<Celo_JokeRaceEligibility>;
  Celo_jokeRaceEligibilityTerm?: Maybe<Celo_JokeRaceEligibilityTerm>;
  Celo_jokeRaceEligibilityTerms: Array<Celo_JokeRaceEligibilityTerm>;
  Celo_jokeRaceNextTermSetEvent?: Maybe<Celo_JokeRace_NextTermSetEvent>;
  Celo_jokeRaceNextTermSetEvents: Array<Celo_JokeRace_NextTermSetEvent>;
  Celo_jokeRaceTermStartedEvent?: Maybe<Celo_JokeRace_TermStartedEvent>;
  Celo_jokeRaceTermStartedEvents: Array<Celo_JokeRace_TermStartedEvent>;
  Celo_allowListEligibility?: Maybe<Celo_AllowListEligibility>;
  Celo_allowListEligibilities: Array<Celo_AllowListEligibility>;
  Celo_allowListEligibilityData?: Maybe<Celo_AllowListEligibilityData>;
  Celo_allowListEligibilityDatas: Array<Celo_AllowListEligibilityData>;
  Celo_allowlistAccountAddedEvent?: Maybe<Celo_Allowlist_AccountAddedEvent>;
  Celo_allowlistAccountAddedEvents: Array<Celo_Allowlist_AccountAddedEvent>;
  Celo_allowlistAccountsAddedEvent?: Maybe<Celo_Allowlist_AccountsAddedEvent>;
  Celo_allowlistAccountsAddedEvents: Array<Celo_Allowlist_AccountsAddedEvent>;
  Celo_allowlistAccountRemovedEvent?: Maybe<Celo_Allowlist_AccountRemovedEvent>;
  Celo_allowlistAccountRemovedEvents: Array<Celo_Allowlist_AccountRemovedEvent>;
  Celo_allowlistAccountsRemovedEvent?: Maybe<Celo_Allowlist_AccountsRemovedEvent>;
  Celo_allowlistAccountsRemovedEvents: Array<Celo_Allowlist_AccountsRemovedEvent>;
  Celo_allowlistAccountStandingChangedEvent?: Maybe<Celo_Allowlist_AccountStandingChangedEvent>;
  Celo_allowlistAccountStandingChangedEvents: Array<Celo_Allowlist_AccountStandingChangedEvent>;
  Celo_allowlistAccountsStandingChangedEvent?: Maybe<Celo_Allowlist_AccountsStandingChangedEvent>;
  Celo_allowlistAccountsStandingChangedEvents: Array<Celo_Allowlist_AccountsStandingChangedEvent>;
  Celo_allowlistOwnerHatSetEvent?: Maybe<Celo_Allowlist_OwnerHatSetEvent>;
  Celo_allowlistOwnerHatSetEvents: Array<Celo_Allowlist_OwnerHatSetEvent>;
  Celo_allowlistArbitratorHatSetEvent?: Maybe<Celo_Allowlist_ArbitratorHatSetEvent>;
  Celo_allowlistArbitratorHatSetEvents: Array<Celo_Allowlist_ArbitratorHatSetEvent>;
  Celo_hatsElectionEligibility?: Maybe<Celo_HatsElectionEligibility>;
  Celo_hatsElectionEligibilities: Array<Celo_HatsElectionEligibility>;
  Celo_electionTerm?: Maybe<Celo_ElectionTerm>;
  Celo_electionTerms: Array<Celo_ElectionTerm>;
  Celo_electionElectionOpenedEvent?: Maybe<Celo_Election_ElectionOpenedEvent>;
  Celo_electionElectionOpenedEvents: Array<Celo_Election_ElectionOpenedEvent>;
  Celo_electionElectionCompletedEvent?: Maybe<Celo_Election_ElectionCompletedEvent>;
  Celo_electionElectionCompletedEvents: Array<Celo_Election_ElectionCompletedEvent>;
  Celo_electionNewTermStartedEvent?: Maybe<Celo_Election_NewTermStartedEvent>;
  Celo_electionNewTermStartedEvents: Array<Celo_Election_NewTermStartedEvent>;
  Celo_electionRecalledEvent?: Maybe<Celo_Election_RecalledEvent>;
  Celo_electionRecalledEvents: Array<Celo_Election_RecalledEvent>;
  Celo_passthroughModule?: Maybe<Celo_PassthroughModule>;
  Celo_passthroughModules: Array<Celo_PassthroughModule>;
  Celo_stakingEligibility?: Maybe<Celo_StakingEligibility>;
  Celo_stakingEligibilities: Array<Celo_StakingEligibility>;
  Celo_stake?: Maybe<Celo_Stake>;
  Celo_stakes: Array<Celo_Stake>;
  Celo_stakingStakedEvent?: Maybe<Celo_Staking_StakedEvent>;
  Celo_stakingStakedEvents: Array<Celo_Staking_StakedEvent>;
  Celo_stakingUnstakeBegunEvent?: Maybe<Celo_Staking_UnstakeBegunEvent>;
  Celo_stakingUnstakeBegunEvents: Array<Celo_Staking_UnstakeBegunEvent>;
  Celo_stakingSlashedEvent?: Maybe<Celo_Staking_SlashedEvent>;
  Celo_stakingSlashedEvents: Array<Celo_Staking_SlashedEvent>;
  Celo_stakingMinStakeChangedEvent?: Maybe<Celo_Staking_MinStakeChangedEvent>;
  Celo_stakingMinStakeChangedEvents: Array<Celo_Staking_MinStakeChangedEvent>;
  Celo_stakingJudgeHatChangedEvent?: Maybe<Celo_Staking_JudgeHatChangedEvent>;
  Celo_stakingJudgeHatChangedEvents: Array<Celo_Staking_JudgeHatChangedEvent>;
  Celo_stakingRecipientHatChangedEvent?: Maybe<Celo_Staking_RecipientHatChangedEvent>;
  Celo_stakingRecipientHatChangedEvents: Array<Celo_Staking_RecipientHatChangedEvent>;
  Celo_stakingCooldownPeriodChangedEvent?: Maybe<Celo_Staking_CooldownPeriodChangedEvent>;
  Celo_stakingCooldownPeriodChangedEvents: Array<Celo_Staking_CooldownPeriodChangedEvent>;
  Celo_stakingForgivenEvent?: Maybe<Celo_Staking_ForgivenEvent>;
  Celo_stakingForgivenEvents: Array<Celo_Staking_ForgivenEvent>;
  Celo_seasonToggle?: Maybe<Celo_SeasonToggle>;
  Celo_seasonToggles: Array<Celo_SeasonToggle>;
  Celo_characterSheetsLevelEligibility?: Maybe<Celo_CharacterSheetsLevelEligibility>;
  Celo_characterSheetsLevelEligibilities: Array<Celo_CharacterSheetsLevelEligibility>;
  Celo_agreementEligibility?: Maybe<Celo_AgreementEligibility>;
  Celo_agreementEligibilities: Array<Celo_AgreementEligibility>;
  Celo_agreement?: Maybe<Celo_Agreement>;
  Celo_agreements: Array<Celo_Agreement>;
  Celo_agreementHatClaimedWithAgreementEvent?: Maybe<Celo_Agreement_HatClaimedWithAgreementEvent>;
  Celo_agreementHatClaimedWithAgreementEvents: Array<Celo_Agreement_HatClaimedWithAgreementEvent>;
  Celo_agreementAgreementSignedEvent?: Maybe<Celo_Agreement_AgreementSignedEvent>;
  Celo_agreementAgreementSignedEvents: Array<Celo_Agreement_AgreementSignedEvent>;
  Celo_agreementAgreementSetEvent?: Maybe<Celo_Agreement_AgreementSetEvent>;
  Celo_agreementAgreementSetEvents: Array<Celo_Agreement_AgreementSetEvent>;
  Celo_agreementOwnerHatSetEvent?: Maybe<Celo_Agreement_OwnerHatSetEvent>;
  Celo_agreementOwnerHatSetEvents: Array<Celo_Agreement_OwnerHatSetEvent>;
  Celo_agreementArbitratorHatSetEvent?: Maybe<Celo_Agreement_ArbitratorHatSetEvent>;
  Celo_agreementArbitratorHatSetEvents: Array<Celo_Agreement_ArbitratorHatSetEvent>;
  Celo_erc20Eligibility?: Maybe<Celo_Erc20Eligibility>;
  Celo_erc20Eligibilities: Array<Celo_Erc20Eligibility>;
  Celo_erc721Eligibility?: Maybe<Celo_Erc721Eligibility>;
  Celo_erc721Eligibilities: Array<Celo_Erc721Eligibility>;
  Celo_erc1155Eligibility?: Maybe<Celo_Erc1155Eligibility>;
  Celo_erc1155Eligibilities: Array<Celo_Erc1155Eligibility>;
  Celo_hatWearingEligibility?: Maybe<Celo_HatWearingEligibility>;
  Celo_hatWearingEligibilities: Array<Celo_HatWearingEligibility>;
  Celo_gitcoinPassportEligibility?: Maybe<Celo_GitcoinPassportEligibility>;
  Celo_gitcoinPassportEligibilities: Array<Celo_GitcoinPassportEligibility>;
  Celo_coLinksEligibility?: Maybe<Celo_CoLinksEligibility>;
  Celo_coLinksEligibilities: Array<Celo_CoLinksEligibility>;
  Celo_hatControlledModule?: Maybe<Celo_HatControlledModule>;
  Celo_hatControlledModules: Array<Celo_HatControlledModule>;
  Celo_hatControlledModuleWearerStatus?: Maybe<Celo_HatControlledModuleWearerStatus>;
  Celo_hatControlledModuleWearerStatuses: Array<Celo_HatControlledModuleWearerStatus>;
  Celo_hatControlledModuleHatStatus?: Maybe<Celo_HatControlledModuleHatStatus>;
  Celo_hatControlledModuleHatStatuses: Array<Celo_HatControlledModuleHatStatus>;
  Celo_hatControlledWearerStatusSet?: Maybe<Celo_HatControlled_WearerStatusSet>;
  Celo_hatControlledWearerStatusSets: Array<Celo_HatControlled_WearerStatusSet>;
  Celo_hatControlledHatStatusSet?: Maybe<Celo_HatControlled_HatStatusSet>;
  Celo_hatControlledHatStatusSets: Array<Celo_HatControlled_HatStatusSet>;
  Celo_publicLockV14Eligibility?: Maybe<Celo_PublicLockV14Eligibility>;
  Celo_publicLockV14Eligibilities: Array<Celo_PublicLockV14Eligibility>;
  Celo_hatsEligibilitiesChain?: Maybe<Celo_HatsEligibilitiesChain>;
  Celo_hatsEligibilitiesChains: Array<Celo_HatsEligibilitiesChain>;
  Celo_eligibilitiesRuleset?: Maybe<Celo_EligibilitiesRuleset>;
  Celo_eligibilitiesRulesets: Array<Celo_EligibilitiesRuleset>;
  Celo_hatsSignerGateV2Event?: Maybe<Celo_HatsSignerGateV2Event>;
  Celo_hatsSignerGateV2Events: Array<Celo_HatsSignerGateV2Event>;
  Celo_hatsModule?: Maybe<Celo_HatsModule>;
  Celo_hatsModules: Array<Celo_HatsModule>;
  Celo_hatsModuleEvent?: Maybe<Celo_HatsModuleEvent>;
  Celo_hatsModuleEvents: Array<Celo_HatsModuleEvent>;
  Celo_jokeRaceEvent?: Maybe<Celo_JokeRaceEvent>;
  Celo_jokeRaceEvents: Array<Celo_JokeRaceEvent>;
  Celo_allowlistEvent?: Maybe<Celo_AllowlistEvent>;
  Celo_allowlistEvents: Array<Celo_AllowlistEvent>;
  Celo_electionEvent?: Maybe<Celo_ElectionEvent>;
  Celo_electionEvents: Array<Celo_ElectionEvent>;
  Celo_stakingEvent?: Maybe<Celo_StakingEvent>;
  Celo_stakingEvents: Array<Celo_StakingEvent>;
  Celo_agreementEvent?: Maybe<Celo_AgreementEvent>;
  Celo_agreementEvents: Array<Celo_AgreementEvent>;
  Celo_hatControlledModuleEvent?: Maybe<Celo_HatControlledModuleEvent>;
  Celo_hatControlledModuleEvents: Array<Celo_HatControlledModuleEvent>;
  /** Access to subgraph metadata */
  Celo__meta?: Maybe<Celo__Meta_>;
};


export type SubscriptionCelo_hatAuthorityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatAuthoritiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatAuthority_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGate_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2Args = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2SArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2OwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2OwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2SignerHatsAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2SignerHatsAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_SignerHatsAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_SignerHatsAddedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2ThresholdConfigSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2ThresholdConfigSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_ThresholdConfigSetEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_ThresholdConfigSetEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2HSGLockedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2HSGLockedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_HSGLockedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_HSGLockedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2ClaimableForSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2ClaimableForSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_ClaimableForSetEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_ClaimableForSetEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2DetachedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2DetachedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_DetachedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_DetachedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2MigratedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2MigratedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_MigratedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_MigratedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2DelegatecallTargetEnabledEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2DelegatecallTargetEnabledEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_DelegatecallTargetEnabledEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_DelegatecallTargetEnabledEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2RegisteredEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2RegisteredEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_RegisteredEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_RegisteredEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2ChangedGuardEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2ChangedGuardEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_ChangedGuardEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_ChangedGuardEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2EnabledModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2EnabledModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_EnabledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_EnabledModuleEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2DisabledModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2DisabledModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2_DisabledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2_DisabledModuleEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsAccount1OfNArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsAccount1OfNsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsAccount1ofN_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsAccount1OfNOperationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsAccount1OfNOperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsAccount1ofNOperation_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsStakingShamanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsStakingShamansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsStakingShaman_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsStakingShaman_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_shamanStakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_shamanStakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_ShamanStake_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_ShamanStake_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsFarcasterDelegatorArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsFarcasterDelegatorsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsFarcasterDelegator_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_jokeRaceEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_jokeRaceEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_JokeRaceEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_jokeRaceEligibilityTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_jokeRaceEligibilityTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_JokeRaceEligibilityTerm_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_JokeRaceEligibilityTerm_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_jokeRaceNextTermSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_jokeRaceNextTermSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_JokeRace_NextTermSetEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_JokeRace_NextTermSetEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_jokeRaceTermStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_jokeRaceTermStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_JokeRace_TermStartedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_JokeRace_TermStartedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_allowListEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_allowListEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_AllowListEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_allowListEligibilityDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_allowListEligibilityDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_AllowListEligibilityData_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_AllowListEligibilityData_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_allowlistAccountAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_allowlistAccountAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Allowlist_AccountAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Allowlist_AccountAddedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_allowlistAccountsAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_allowlistAccountsAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Allowlist_AccountsAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Allowlist_AccountsAddedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_allowlistAccountRemovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_allowlistAccountRemovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Allowlist_AccountRemovedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Allowlist_AccountRemovedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_allowlistAccountsRemovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_allowlistAccountsRemovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Allowlist_AccountsRemovedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Allowlist_AccountsRemovedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_allowlistAccountStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_allowlistAccountStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Allowlist_AccountStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Allowlist_AccountStandingChangedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_allowlistAccountsStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_allowlistAccountsStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Allowlist_AccountsStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Allowlist_AccountsStandingChangedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_allowlistOwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_allowlistOwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Allowlist_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Allowlist_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_allowlistArbitratorHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_allowlistArbitratorHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Allowlist_ArbitratorHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Allowlist_ArbitratorHatSetEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsElectionEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsElectionEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsElectionEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_electionTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_electionTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_ElectionTerm_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_electionElectionOpenedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_electionElectionOpenedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Election_ElectionOpenedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Election_ElectionOpenedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_electionElectionCompletedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_electionElectionCompletedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Election_ElectionCompletedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Election_ElectionCompletedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_electionNewTermStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_electionNewTermStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Election_NewTermStartedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Election_NewTermStartedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_electionRecalledEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_electionRecalledEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Election_RecalledEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Election_RecalledEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_passthroughModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_passthroughModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_PassthroughModule_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_stakingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_stakingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_StakingEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_stakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_stakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Stake_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Stake_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_stakingStakedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_stakingStakedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Staking_StakedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Staking_StakedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_stakingUnstakeBegunEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_stakingUnstakeBegunEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Staking_UnstakeBegunEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Staking_UnstakeBegunEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_stakingSlashedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_stakingSlashedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Staking_SlashedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Staking_SlashedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_stakingMinStakeChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_stakingMinStakeChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Staking_MinStakeChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Staking_MinStakeChangedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_stakingJudgeHatChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_stakingJudgeHatChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Staking_JudgeHatChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Staking_JudgeHatChangedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_stakingRecipientHatChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_stakingRecipientHatChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Staking_RecipientHatChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Staking_RecipientHatChangedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_stakingCooldownPeriodChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_stakingCooldownPeriodChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Staking_CooldownPeriodChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Staking_CooldownPeriodChangedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_stakingForgivenEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_stakingForgivenEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Staking_ForgivenEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Staking_ForgivenEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_seasonToggleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_seasonTogglesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_SeasonToggle_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_characterSheetsLevelEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_characterSheetsLevelEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_CharacterSheetsLevelEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_agreementEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_agreementEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_AgreementEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_agreementArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_agreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Agreement_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Agreement_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_agreementHatClaimedWithAgreementEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_agreementHatClaimedWithAgreementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Agreement_HatClaimedWithAgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Agreement_HatClaimedWithAgreementEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_agreementAgreementSignedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_agreementAgreementSignedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Agreement_AgreementSignedEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Agreement_AgreementSignedEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_agreementAgreementSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_agreementAgreementSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Agreement_AgreementSetEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Agreement_AgreementSetEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_agreementOwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_agreementOwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Agreement_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Agreement_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_agreementArbitratorHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_agreementArbitratorHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Agreement_ArbitratorHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Agreement_ArbitratorHatSetEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_erc20EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_erc20EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Erc20Eligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Erc20Eligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_erc721EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_erc721EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Erc721Eligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Erc721Eligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_erc1155EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_erc1155EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Erc1155Eligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Erc1155Eligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatWearingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatWearingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatWearingEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatWearingEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_gitcoinPassportEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_gitcoinPassportEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_GitcoinPassportEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_GitcoinPassportEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_coLinksEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_coLinksEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_CoLinksEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_CoLinksEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatControlledModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatControlledModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatControlledModule_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatControlledModule_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatControlledModuleWearerStatusArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatControlledModuleWearerStatusesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatControlledModuleWearerStatus_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatControlledModuleWearerStatus_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatControlledModuleHatStatusArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatControlledModuleHatStatusesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatControlledModuleHatStatus_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatControlledModuleHatStatus_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatControlledWearerStatusSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatControlledWearerStatusSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatControlled_WearerStatusSet_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatControlled_WearerStatusSet_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatControlledHatStatusSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatControlledHatStatusSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatControlled_HatStatusSet_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatControlled_HatStatusSet_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_publicLockV14EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_publicLockV14EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_PublicLockV14Eligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_PublicLockV14Eligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsEligibilitiesChainArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsEligibilitiesChainsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsEligibilitiesChain_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsEligibilitiesChain_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_eligibilitiesRulesetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_eligibilitiesRulesetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_EligibilitiesRuleset_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_EligibilitiesRuleset_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2EventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateV2EventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGateV2Event_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGateV2Event_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsModule_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsModule_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsModuleEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_jokeRaceEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_jokeRaceEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_JokeRaceEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_JokeRaceEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_allowlistEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_allowlistEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_AllowlistEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_AllowlistEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_electionEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_electionEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_ElectionEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_ElectionEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_stakingEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_stakingEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_StakingEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_StakingEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_agreementEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_agreementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_AgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_AgreementEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatControlledModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatControlledModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatControlledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatControlledModuleEvent_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo__metaArgs = {
  block?: InputMaybe<Celo_Block_height>;
};

export type Celo__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Celo_Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Celo_Bytes']['output']>;
};

/** The type for the top-level _meta field */
export type Celo__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: Celo__Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type Celo__SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  Celo_hatAuthority: InContextSdkMethod<Query['Celo_hatAuthority'], QueryCelo_hatAuthorityArgs, MeshContext>,
  /** null **/
  Celo_hatAuthorities: InContextSdkMethod<Query['Celo_hatAuthorities'], QueryCelo_hatAuthoritiesArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGate: InContextSdkMethod<Query['Celo_hatsSignerGate'], QueryCelo_hatsSignerGateArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGates: InContextSdkMethod<Query['Celo_hatsSignerGates'], QueryCelo_hatsSignerGatesArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2: InContextSdkMethod<Query['Celo_hatsSignerGateV2'], QueryCelo_hatsSignerGateV2Args, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2S: InContextSdkMethod<Query['Celo_hatsSignerGateV2S'], QueryCelo_hatsSignerGateV2SArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2OwnerHatSetEvent: InContextSdkMethod<Query['Celo_hatsSignerGateV2OwnerHatSetEvent'], QueryCelo_hatsSignerGateV2OwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2OwnerHatSetEvents: InContextSdkMethod<Query['Celo_hatsSignerGateV2OwnerHatSetEvents'], QueryCelo_hatsSignerGateV2OwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2SignerHatsAddedEvent: InContextSdkMethod<Query['Celo_hatsSignerGateV2SignerHatsAddedEvent'], QueryCelo_hatsSignerGateV2SignerHatsAddedEventArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2SignerHatsAddedEvents: InContextSdkMethod<Query['Celo_hatsSignerGateV2SignerHatsAddedEvents'], QueryCelo_hatsSignerGateV2SignerHatsAddedEventsArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2ThresholdConfigSetEvent: InContextSdkMethod<Query['Celo_hatsSignerGateV2ThresholdConfigSetEvent'], QueryCelo_hatsSignerGateV2ThresholdConfigSetEventArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2ThresholdConfigSetEvents: InContextSdkMethod<Query['Celo_hatsSignerGateV2ThresholdConfigSetEvents'], QueryCelo_hatsSignerGateV2ThresholdConfigSetEventsArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2HSGLockedEvent: InContextSdkMethod<Query['Celo_hatsSignerGateV2HSGLockedEvent'], QueryCelo_hatsSignerGateV2HSGLockedEventArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2HSGLockedEvents: InContextSdkMethod<Query['Celo_hatsSignerGateV2HSGLockedEvents'], QueryCelo_hatsSignerGateV2HSGLockedEventsArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2ClaimableForSetEvent: InContextSdkMethod<Query['Celo_hatsSignerGateV2ClaimableForSetEvent'], QueryCelo_hatsSignerGateV2ClaimableForSetEventArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2ClaimableForSetEvents: InContextSdkMethod<Query['Celo_hatsSignerGateV2ClaimableForSetEvents'], QueryCelo_hatsSignerGateV2ClaimableForSetEventsArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2DetachedEvent: InContextSdkMethod<Query['Celo_hatsSignerGateV2DetachedEvent'], QueryCelo_hatsSignerGateV2DetachedEventArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2DetachedEvents: InContextSdkMethod<Query['Celo_hatsSignerGateV2DetachedEvents'], QueryCelo_hatsSignerGateV2DetachedEventsArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2MigratedEvent: InContextSdkMethod<Query['Celo_hatsSignerGateV2MigratedEvent'], QueryCelo_hatsSignerGateV2MigratedEventArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2MigratedEvents: InContextSdkMethod<Query['Celo_hatsSignerGateV2MigratedEvents'], QueryCelo_hatsSignerGateV2MigratedEventsArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2DelegatecallTargetEnabledEvent: InContextSdkMethod<Query['Celo_hatsSignerGateV2DelegatecallTargetEnabledEvent'], QueryCelo_hatsSignerGateV2DelegatecallTargetEnabledEventArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2DelegatecallTargetEnabledEvents: InContextSdkMethod<Query['Celo_hatsSignerGateV2DelegatecallTargetEnabledEvents'], QueryCelo_hatsSignerGateV2DelegatecallTargetEnabledEventsArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2RegisteredEvent: InContextSdkMethod<Query['Celo_hatsSignerGateV2RegisteredEvent'], QueryCelo_hatsSignerGateV2RegisteredEventArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2RegisteredEvents: InContextSdkMethod<Query['Celo_hatsSignerGateV2RegisteredEvents'], QueryCelo_hatsSignerGateV2RegisteredEventsArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2ChangedGuardEvent: InContextSdkMethod<Query['Celo_hatsSignerGateV2ChangedGuardEvent'], QueryCelo_hatsSignerGateV2ChangedGuardEventArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2ChangedGuardEvents: InContextSdkMethod<Query['Celo_hatsSignerGateV2ChangedGuardEvents'], QueryCelo_hatsSignerGateV2ChangedGuardEventsArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2EnabledModuleEvent: InContextSdkMethod<Query['Celo_hatsSignerGateV2EnabledModuleEvent'], QueryCelo_hatsSignerGateV2EnabledModuleEventArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2EnabledModuleEvents: InContextSdkMethod<Query['Celo_hatsSignerGateV2EnabledModuleEvents'], QueryCelo_hatsSignerGateV2EnabledModuleEventsArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2DisabledModuleEvent: InContextSdkMethod<Query['Celo_hatsSignerGateV2DisabledModuleEvent'], QueryCelo_hatsSignerGateV2DisabledModuleEventArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2DisabledModuleEvents: InContextSdkMethod<Query['Celo_hatsSignerGateV2DisabledModuleEvents'], QueryCelo_hatsSignerGateV2DisabledModuleEventsArgs, MeshContext>,
  /** null **/
  Celo_hatsAccount1OfN: InContextSdkMethod<Query['Celo_hatsAccount1OfN'], QueryCelo_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  Celo_hatsAccount1OfNs: InContextSdkMethod<Query['Celo_hatsAccount1OfNs'], QueryCelo_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  Celo_hatsAccount1OfNOperation: InContextSdkMethod<Query['Celo_hatsAccount1OfNOperation'], QueryCelo_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  Celo_hatsAccount1OfNOperations: InContextSdkMethod<Query['Celo_hatsAccount1OfNOperations'], QueryCelo_hatsAccount1OfNOperationsArgs, MeshContext>,
  /** null **/
  Celo_hatsStakingShaman: InContextSdkMethod<Query['Celo_hatsStakingShaman'], QueryCelo_hatsStakingShamanArgs, MeshContext>,
  /** null **/
  Celo_hatsStakingShamans: InContextSdkMethod<Query['Celo_hatsStakingShamans'], QueryCelo_hatsStakingShamansArgs, MeshContext>,
  /** null **/
  Celo_shamanStake: InContextSdkMethod<Query['Celo_shamanStake'], QueryCelo_shamanStakeArgs, MeshContext>,
  /** null **/
  Celo_shamanStakes: InContextSdkMethod<Query['Celo_shamanStakes'], QueryCelo_shamanStakesArgs, MeshContext>,
  /** null **/
  Celo_hatsFarcasterDelegator: InContextSdkMethod<Query['Celo_hatsFarcasterDelegator'], QueryCelo_hatsFarcasterDelegatorArgs, MeshContext>,
  /** null **/
  Celo_hatsFarcasterDelegators: InContextSdkMethod<Query['Celo_hatsFarcasterDelegators'], QueryCelo_hatsFarcasterDelegatorsArgs, MeshContext>,
  /** null **/
  Celo_jokeRaceEligibility: InContextSdkMethod<Query['Celo_jokeRaceEligibility'], QueryCelo_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  Celo_jokeRaceEligibilities: InContextSdkMethod<Query['Celo_jokeRaceEligibilities'], QueryCelo_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_jokeRaceEligibilityTerm: InContextSdkMethod<Query['Celo_jokeRaceEligibilityTerm'], QueryCelo_jokeRaceEligibilityTermArgs, MeshContext>,
  /** null **/
  Celo_jokeRaceEligibilityTerms: InContextSdkMethod<Query['Celo_jokeRaceEligibilityTerms'], QueryCelo_jokeRaceEligibilityTermsArgs, MeshContext>,
  /** null **/
  Celo_jokeRaceNextTermSetEvent: InContextSdkMethod<Query['Celo_jokeRaceNextTermSetEvent'], QueryCelo_jokeRaceNextTermSetEventArgs, MeshContext>,
  /** null **/
  Celo_jokeRaceNextTermSetEvents: InContextSdkMethod<Query['Celo_jokeRaceNextTermSetEvents'], QueryCelo_jokeRaceNextTermSetEventsArgs, MeshContext>,
  /** null **/
  Celo_jokeRaceTermStartedEvent: InContextSdkMethod<Query['Celo_jokeRaceTermStartedEvent'], QueryCelo_jokeRaceTermStartedEventArgs, MeshContext>,
  /** null **/
  Celo_jokeRaceTermStartedEvents: InContextSdkMethod<Query['Celo_jokeRaceTermStartedEvents'], QueryCelo_jokeRaceTermStartedEventsArgs, MeshContext>,
  /** null **/
  Celo_allowListEligibility: InContextSdkMethod<Query['Celo_allowListEligibility'], QueryCelo_allowListEligibilityArgs, MeshContext>,
  /** null **/
  Celo_allowListEligibilities: InContextSdkMethod<Query['Celo_allowListEligibilities'], QueryCelo_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_allowListEligibilityData: InContextSdkMethod<Query['Celo_allowListEligibilityData'], QueryCelo_allowListEligibilityDataArgs, MeshContext>,
  /** null **/
  Celo_allowListEligibilityDatas: InContextSdkMethod<Query['Celo_allowListEligibilityDatas'], QueryCelo_allowListEligibilityDatasArgs, MeshContext>,
  /** null **/
  Celo_allowlistAccountAddedEvent: InContextSdkMethod<Query['Celo_allowlistAccountAddedEvent'], QueryCelo_allowlistAccountAddedEventArgs, MeshContext>,
  /** null **/
  Celo_allowlistAccountAddedEvents: InContextSdkMethod<Query['Celo_allowlistAccountAddedEvents'], QueryCelo_allowlistAccountAddedEventsArgs, MeshContext>,
  /** null **/
  Celo_allowlistAccountsAddedEvent: InContextSdkMethod<Query['Celo_allowlistAccountsAddedEvent'], QueryCelo_allowlistAccountsAddedEventArgs, MeshContext>,
  /** null **/
  Celo_allowlistAccountsAddedEvents: InContextSdkMethod<Query['Celo_allowlistAccountsAddedEvents'], QueryCelo_allowlistAccountsAddedEventsArgs, MeshContext>,
  /** null **/
  Celo_allowlistAccountRemovedEvent: InContextSdkMethod<Query['Celo_allowlistAccountRemovedEvent'], QueryCelo_allowlistAccountRemovedEventArgs, MeshContext>,
  /** null **/
  Celo_allowlistAccountRemovedEvents: InContextSdkMethod<Query['Celo_allowlistAccountRemovedEvents'], QueryCelo_allowlistAccountRemovedEventsArgs, MeshContext>,
  /** null **/
  Celo_allowlistAccountsRemovedEvent: InContextSdkMethod<Query['Celo_allowlistAccountsRemovedEvent'], QueryCelo_allowlistAccountsRemovedEventArgs, MeshContext>,
  /** null **/
  Celo_allowlistAccountsRemovedEvents: InContextSdkMethod<Query['Celo_allowlistAccountsRemovedEvents'], QueryCelo_allowlistAccountsRemovedEventsArgs, MeshContext>,
  /** null **/
  Celo_allowlistAccountStandingChangedEvent: InContextSdkMethod<Query['Celo_allowlistAccountStandingChangedEvent'], QueryCelo_allowlistAccountStandingChangedEventArgs, MeshContext>,
  /** null **/
  Celo_allowlistAccountStandingChangedEvents: InContextSdkMethod<Query['Celo_allowlistAccountStandingChangedEvents'], QueryCelo_allowlistAccountStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Celo_allowlistAccountsStandingChangedEvent: InContextSdkMethod<Query['Celo_allowlistAccountsStandingChangedEvent'], QueryCelo_allowlistAccountsStandingChangedEventArgs, MeshContext>,
  /** null **/
  Celo_allowlistAccountsStandingChangedEvents: InContextSdkMethod<Query['Celo_allowlistAccountsStandingChangedEvents'], QueryCelo_allowlistAccountsStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Celo_allowlistOwnerHatSetEvent: InContextSdkMethod<Query['Celo_allowlistOwnerHatSetEvent'], QueryCelo_allowlistOwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Celo_allowlistOwnerHatSetEvents: InContextSdkMethod<Query['Celo_allowlistOwnerHatSetEvents'], QueryCelo_allowlistOwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Celo_allowlistArbitratorHatSetEvent: InContextSdkMethod<Query['Celo_allowlistArbitratorHatSetEvent'], QueryCelo_allowlistArbitratorHatSetEventArgs, MeshContext>,
  /** null **/
  Celo_allowlistArbitratorHatSetEvents: InContextSdkMethod<Query['Celo_allowlistArbitratorHatSetEvents'], QueryCelo_allowlistArbitratorHatSetEventsArgs, MeshContext>,
  /** null **/
  Celo_hatsElectionEligibility: InContextSdkMethod<Query['Celo_hatsElectionEligibility'], QueryCelo_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  Celo_hatsElectionEligibilities: InContextSdkMethod<Query['Celo_hatsElectionEligibilities'], QueryCelo_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_electionTerm: InContextSdkMethod<Query['Celo_electionTerm'], QueryCelo_electionTermArgs, MeshContext>,
  /** null **/
  Celo_electionTerms: InContextSdkMethod<Query['Celo_electionTerms'], QueryCelo_electionTermsArgs, MeshContext>,
  /** null **/
  Celo_electionElectionOpenedEvent: InContextSdkMethod<Query['Celo_electionElectionOpenedEvent'], QueryCelo_electionElectionOpenedEventArgs, MeshContext>,
  /** null **/
  Celo_electionElectionOpenedEvents: InContextSdkMethod<Query['Celo_electionElectionOpenedEvents'], QueryCelo_electionElectionOpenedEventsArgs, MeshContext>,
  /** null **/
  Celo_electionElectionCompletedEvent: InContextSdkMethod<Query['Celo_electionElectionCompletedEvent'], QueryCelo_electionElectionCompletedEventArgs, MeshContext>,
  /** null **/
  Celo_electionElectionCompletedEvents: InContextSdkMethod<Query['Celo_electionElectionCompletedEvents'], QueryCelo_electionElectionCompletedEventsArgs, MeshContext>,
  /** null **/
  Celo_electionNewTermStartedEvent: InContextSdkMethod<Query['Celo_electionNewTermStartedEvent'], QueryCelo_electionNewTermStartedEventArgs, MeshContext>,
  /** null **/
  Celo_electionNewTermStartedEvents: InContextSdkMethod<Query['Celo_electionNewTermStartedEvents'], QueryCelo_electionNewTermStartedEventsArgs, MeshContext>,
  /** null **/
  Celo_electionRecalledEvent: InContextSdkMethod<Query['Celo_electionRecalledEvent'], QueryCelo_electionRecalledEventArgs, MeshContext>,
  /** null **/
  Celo_electionRecalledEvents: InContextSdkMethod<Query['Celo_electionRecalledEvents'], QueryCelo_electionRecalledEventsArgs, MeshContext>,
  /** null **/
  Celo_passthroughModule: InContextSdkMethod<Query['Celo_passthroughModule'], QueryCelo_passthroughModuleArgs, MeshContext>,
  /** null **/
  Celo_passthroughModules: InContextSdkMethod<Query['Celo_passthroughModules'], QueryCelo_passthroughModulesArgs, MeshContext>,
  /** null **/
  Celo_stakingEligibility: InContextSdkMethod<Query['Celo_stakingEligibility'], QueryCelo_stakingEligibilityArgs, MeshContext>,
  /** null **/
  Celo_stakingEligibilities: InContextSdkMethod<Query['Celo_stakingEligibilities'], QueryCelo_stakingEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_stake: InContextSdkMethod<Query['Celo_stake'], QueryCelo_stakeArgs, MeshContext>,
  /** null **/
  Celo_stakes: InContextSdkMethod<Query['Celo_stakes'], QueryCelo_stakesArgs, MeshContext>,
  /** null **/
  Celo_stakingStakedEvent: InContextSdkMethod<Query['Celo_stakingStakedEvent'], QueryCelo_stakingStakedEventArgs, MeshContext>,
  /** null **/
  Celo_stakingStakedEvents: InContextSdkMethod<Query['Celo_stakingStakedEvents'], QueryCelo_stakingStakedEventsArgs, MeshContext>,
  /** null **/
  Celo_stakingUnstakeBegunEvent: InContextSdkMethod<Query['Celo_stakingUnstakeBegunEvent'], QueryCelo_stakingUnstakeBegunEventArgs, MeshContext>,
  /** null **/
  Celo_stakingUnstakeBegunEvents: InContextSdkMethod<Query['Celo_stakingUnstakeBegunEvents'], QueryCelo_stakingUnstakeBegunEventsArgs, MeshContext>,
  /** null **/
  Celo_stakingSlashedEvent: InContextSdkMethod<Query['Celo_stakingSlashedEvent'], QueryCelo_stakingSlashedEventArgs, MeshContext>,
  /** null **/
  Celo_stakingSlashedEvents: InContextSdkMethod<Query['Celo_stakingSlashedEvents'], QueryCelo_stakingSlashedEventsArgs, MeshContext>,
  /** null **/
  Celo_stakingMinStakeChangedEvent: InContextSdkMethod<Query['Celo_stakingMinStakeChangedEvent'], QueryCelo_stakingMinStakeChangedEventArgs, MeshContext>,
  /** null **/
  Celo_stakingMinStakeChangedEvents: InContextSdkMethod<Query['Celo_stakingMinStakeChangedEvents'], QueryCelo_stakingMinStakeChangedEventsArgs, MeshContext>,
  /** null **/
  Celo_stakingJudgeHatChangedEvent: InContextSdkMethod<Query['Celo_stakingJudgeHatChangedEvent'], QueryCelo_stakingJudgeHatChangedEventArgs, MeshContext>,
  /** null **/
  Celo_stakingJudgeHatChangedEvents: InContextSdkMethod<Query['Celo_stakingJudgeHatChangedEvents'], QueryCelo_stakingJudgeHatChangedEventsArgs, MeshContext>,
  /** null **/
  Celo_stakingRecipientHatChangedEvent: InContextSdkMethod<Query['Celo_stakingRecipientHatChangedEvent'], QueryCelo_stakingRecipientHatChangedEventArgs, MeshContext>,
  /** null **/
  Celo_stakingRecipientHatChangedEvents: InContextSdkMethod<Query['Celo_stakingRecipientHatChangedEvents'], QueryCelo_stakingRecipientHatChangedEventsArgs, MeshContext>,
  /** null **/
  Celo_stakingCooldownPeriodChangedEvent: InContextSdkMethod<Query['Celo_stakingCooldownPeriodChangedEvent'], QueryCelo_stakingCooldownPeriodChangedEventArgs, MeshContext>,
  /** null **/
  Celo_stakingCooldownPeriodChangedEvents: InContextSdkMethod<Query['Celo_stakingCooldownPeriodChangedEvents'], QueryCelo_stakingCooldownPeriodChangedEventsArgs, MeshContext>,
  /** null **/
  Celo_stakingForgivenEvent: InContextSdkMethod<Query['Celo_stakingForgivenEvent'], QueryCelo_stakingForgivenEventArgs, MeshContext>,
  /** null **/
  Celo_stakingForgivenEvents: InContextSdkMethod<Query['Celo_stakingForgivenEvents'], QueryCelo_stakingForgivenEventsArgs, MeshContext>,
  /** null **/
  Celo_seasonToggle: InContextSdkMethod<Query['Celo_seasonToggle'], QueryCelo_seasonToggleArgs, MeshContext>,
  /** null **/
  Celo_seasonToggles: InContextSdkMethod<Query['Celo_seasonToggles'], QueryCelo_seasonTogglesArgs, MeshContext>,
  /** null **/
  Celo_characterSheetsLevelEligibility: InContextSdkMethod<Query['Celo_characterSheetsLevelEligibility'], QueryCelo_characterSheetsLevelEligibilityArgs, MeshContext>,
  /** null **/
  Celo_characterSheetsLevelEligibilities: InContextSdkMethod<Query['Celo_characterSheetsLevelEligibilities'], QueryCelo_characterSheetsLevelEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_agreementEligibility: InContextSdkMethod<Query['Celo_agreementEligibility'], QueryCelo_agreementEligibilityArgs, MeshContext>,
  /** null **/
  Celo_agreementEligibilities: InContextSdkMethod<Query['Celo_agreementEligibilities'], QueryCelo_agreementEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_agreement: InContextSdkMethod<Query['Celo_agreement'], QueryCelo_agreementArgs, MeshContext>,
  /** null **/
  Celo_agreements: InContextSdkMethod<Query['Celo_agreements'], QueryCelo_agreementsArgs, MeshContext>,
  /** null **/
  Celo_agreementHatClaimedWithAgreementEvent: InContextSdkMethod<Query['Celo_agreementHatClaimedWithAgreementEvent'], QueryCelo_agreementHatClaimedWithAgreementEventArgs, MeshContext>,
  /** null **/
  Celo_agreementHatClaimedWithAgreementEvents: InContextSdkMethod<Query['Celo_agreementHatClaimedWithAgreementEvents'], QueryCelo_agreementHatClaimedWithAgreementEventsArgs, MeshContext>,
  /** null **/
  Celo_agreementAgreementSignedEvent: InContextSdkMethod<Query['Celo_agreementAgreementSignedEvent'], QueryCelo_agreementAgreementSignedEventArgs, MeshContext>,
  /** null **/
  Celo_agreementAgreementSignedEvents: InContextSdkMethod<Query['Celo_agreementAgreementSignedEvents'], QueryCelo_agreementAgreementSignedEventsArgs, MeshContext>,
  /** null **/
  Celo_agreementAgreementSetEvent: InContextSdkMethod<Query['Celo_agreementAgreementSetEvent'], QueryCelo_agreementAgreementSetEventArgs, MeshContext>,
  /** null **/
  Celo_agreementAgreementSetEvents: InContextSdkMethod<Query['Celo_agreementAgreementSetEvents'], QueryCelo_agreementAgreementSetEventsArgs, MeshContext>,
  /** null **/
  Celo_agreementOwnerHatSetEvent: InContextSdkMethod<Query['Celo_agreementOwnerHatSetEvent'], QueryCelo_agreementOwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Celo_agreementOwnerHatSetEvents: InContextSdkMethod<Query['Celo_agreementOwnerHatSetEvents'], QueryCelo_agreementOwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Celo_agreementArbitratorHatSetEvent: InContextSdkMethod<Query['Celo_agreementArbitratorHatSetEvent'], QueryCelo_agreementArbitratorHatSetEventArgs, MeshContext>,
  /** null **/
  Celo_agreementArbitratorHatSetEvents: InContextSdkMethod<Query['Celo_agreementArbitratorHatSetEvents'], QueryCelo_agreementArbitratorHatSetEventsArgs, MeshContext>,
  /** null **/
  Celo_erc20Eligibility: InContextSdkMethod<Query['Celo_erc20Eligibility'], QueryCelo_erc20EligibilityArgs, MeshContext>,
  /** null **/
  Celo_erc20Eligibilities: InContextSdkMethod<Query['Celo_erc20Eligibilities'], QueryCelo_erc20EligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_erc721Eligibility: InContextSdkMethod<Query['Celo_erc721Eligibility'], QueryCelo_erc721EligibilityArgs, MeshContext>,
  /** null **/
  Celo_erc721Eligibilities: InContextSdkMethod<Query['Celo_erc721Eligibilities'], QueryCelo_erc721EligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_erc1155Eligibility: InContextSdkMethod<Query['Celo_erc1155Eligibility'], QueryCelo_erc1155EligibilityArgs, MeshContext>,
  /** null **/
  Celo_erc1155Eligibilities: InContextSdkMethod<Query['Celo_erc1155Eligibilities'], QueryCelo_erc1155EligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_hatWearingEligibility: InContextSdkMethod<Query['Celo_hatWearingEligibility'], QueryCelo_hatWearingEligibilityArgs, MeshContext>,
  /** null **/
  Celo_hatWearingEligibilities: InContextSdkMethod<Query['Celo_hatWearingEligibilities'], QueryCelo_hatWearingEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_gitcoinPassportEligibility: InContextSdkMethod<Query['Celo_gitcoinPassportEligibility'], QueryCelo_gitcoinPassportEligibilityArgs, MeshContext>,
  /** null **/
  Celo_gitcoinPassportEligibilities: InContextSdkMethod<Query['Celo_gitcoinPassportEligibilities'], QueryCelo_gitcoinPassportEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_coLinksEligibility: InContextSdkMethod<Query['Celo_coLinksEligibility'], QueryCelo_coLinksEligibilityArgs, MeshContext>,
  /** null **/
  Celo_coLinksEligibilities: InContextSdkMethod<Query['Celo_coLinksEligibilities'], QueryCelo_coLinksEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_hatControlledModule: InContextSdkMethod<Query['Celo_hatControlledModule'], QueryCelo_hatControlledModuleArgs, MeshContext>,
  /** null **/
  Celo_hatControlledModules: InContextSdkMethod<Query['Celo_hatControlledModules'], QueryCelo_hatControlledModulesArgs, MeshContext>,
  /** null **/
  Celo_hatControlledModuleWearerStatus: InContextSdkMethod<Query['Celo_hatControlledModuleWearerStatus'], QueryCelo_hatControlledModuleWearerStatusArgs, MeshContext>,
  /** null **/
  Celo_hatControlledModuleWearerStatuses: InContextSdkMethod<Query['Celo_hatControlledModuleWearerStatuses'], QueryCelo_hatControlledModuleWearerStatusesArgs, MeshContext>,
  /** null **/
  Celo_hatControlledModuleHatStatus: InContextSdkMethod<Query['Celo_hatControlledModuleHatStatus'], QueryCelo_hatControlledModuleHatStatusArgs, MeshContext>,
  /** null **/
  Celo_hatControlledModuleHatStatuses: InContextSdkMethod<Query['Celo_hatControlledModuleHatStatuses'], QueryCelo_hatControlledModuleHatStatusesArgs, MeshContext>,
  /** null **/
  Celo_hatControlledWearerStatusSet: InContextSdkMethod<Query['Celo_hatControlledWearerStatusSet'], QueryCelo_hatControlledWearerStatusSetArgs, MeshContext>,
  /** null **/
  Celo_hatControlledWearerStatusSets: InContextSdkMethod<Query['Celo_hatControlledWearerStatusSets'], QueryCelo_hatControlledWearerStatusSetsArgs, MeshContext>,
  /** null **/
  Celo_hatControlledHatStatusSet: InContextSdkMethod<Query['Celo_hatControlledHatStatusSet'], QueryCelo_hatControlledHatStatusSetArgs, MeshContext>,
  /** null **/
  Celo_hatControlledHatStatusSets: InContextSdkMethod<Query['Celo_hatControlledHatStatusSets'], QueryCelo_hatControlledHatStatusSetsArgs, MeshContext>,
  /** null **/
  Celo_publicLockV14Eligibility: InContextSdkMethod<Query['Celo_publicLockV14Eligibility'], QueryCelo_publicLockV14EligibilityArgs, MeshContext>,
  /** null **/
  Celo_publicLockV14Eligibilities: InContextSdkMethod<Query['Celo_publicLockV14Eligibilities'], QueryCelo_publicLockV14EligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_hatsEligibilitiesChain: InContextSdkMethod<Query['Celo_hatsEligibilitiesChain'], QueryCelo_hatsEligibilitiesChainArgs, MeshContext>,
  /** null **/
  Celo_hatsEligibilitiesChains: InContextSdkMethod<Query['Celo_hatsEligibilitiesChains'], QueryCelo_hatsEligibilitiesChainsArgs, MeshContext>,
  /** null **/
  Celo_eligibilitiesRuleset: InContextSdkMethod<Query['Celo_eligibilitiesRuleset'], QueryCelo_eligibilitiesRulesetArgs, MeshContext>,
  /** null **/
  Celo_eligibilitiesRulesets: InContextSdkMethod<Query['Celo_eligibilitiesRulesets'], QueryCelo_eligibilitiesRulesetsArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2Event: InContextSdkMethod<Query['Celo_hatsSignerGateV2Event'], QueryCelo_hatsSignerGateV2EventArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2Events: InContextSdkMethod<Query['Celo_hatsSignerGateV2Events'], QueryCelo_hatsSignerGateV2EventsArgs, MeshContext>,
  /** null **/
  Celo_hatsModule: InContextSdkMethod<Query['Celo_hatsModule'], QueryCelo_hatsModuleArgs, MeshContext>,
  /** null **/
  Celo_hatsModules: InContextSdkMethod<Query['Celo_hatsModules'], QueryCelo_hatsModulesArgs, MeshContext>,
  /** null **/
  Celo_hatsModuleEvent: InContextSdkMethod<Query['Celo_hatsModuleEvent'], QueryCelo_hatsModuleEventArgs, MeshContext>,
  /** null **/
  Celo_hatsModuleEvents: InContextSdkMethod<Query['Celo_hatsModuleEvents'], QueryCelo_hatsModuleEventsArgs, MeshContext>,
  /** null **/
  Celo_jokeRaceEvent: InContextSdkMethod<Query['Celo_jokeRaceEvent'], QueryCelo_jokeRaceEventArgs, MeshContext>,
  /** null **/
  Celo_jokeRaceEvents: InContextSdkMethod<Query['Celo_jokeRaceEvents'], QueryCelo_jokeRaceEventsArgs, MeshContext>,
  /** null **/
  Celo_allowlistEvent: InContextSdkMethod<Query['Celo_allowlistEvent'], QueryCelo_allowlistEventArgs, MeshContext>,
  /** null **/
  Celo_allowlistEvents: InContextSdkMethod<Query['Celo_allowlistEvents'], QueryCelo_allowlistEventsArgs, MeshContext>,
  /** null **/
  Celo_electionEvent: InContextSdkMethod<Query['Celo_electionEvent'], QueryCelo_electionEventArgs, MeshContext>,
  /** null **/
  Celo_electionEvents: InContextSdkMethod<Query['Celo_electionEvents'], QueryCelo_electionEventsArgs, MeshContext>,
  /** null **/
  Celo_stakingEvent: InContextSdkMethod<Query['Celo_stakingEvent'], QueryCelo_stakingEventArgs, MeshContext>,
  /** null **/
  Celo_stakingEvents: InContextSdkMethod<Query['Celo_stakingEvents'], QueryCelo_stakingEventsArgs, MeshContext>,
  /** null **/
  Celo_agreementEvent: InContextSdkMethod<Query['Celo_agreementEvent'], QueryCelo_agreementEventArgs, MeshContext>,
  /** null **/
  Celo_agreementEvents: InContextSdkMethod<Query['Celo_agreementEvents'], QueryCelo_agreementEventsArgs, MeshContext>,
  /** null **/
  Celo_hatControlledModuleEvent: InContextSdkMethod<Query['Celo_hatControlledModuleEvent'], QueryCelo_hatControlledModuleEventArgs, MeshContext>,
  /** null **/
  Celo_hatControlledModuleEvents: InContextSdkMethod<Query['Celo_hatControlledModuleEvents'], QueryCelo_hatControlledModuleEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Celo__meta: InContextSdkMethod<Query['Celo__meta'], QueryCelo__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  Celo_hatAuthority: InContextSdkMethod<Subscription['Celo_hatAuthority'], SubscriptionCelo_hatAuthorityArgs, MeshContext>,
  /** null **/
  Celo_hatAuthorities: InContextSdkMethod<Subscription['Celo_hatAuthorities'], SubscriptionCelo_hatAuthoritiesArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGate: InContextSdkMethod<Subscription['Celo_hatsSignerGate'], SubscriptionCelo_hatsSignerGateArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGates: InContextSdkMethod<Subscription['Celo_hatsSignerGates'], SubscriptionCelo_hatsSignerGatesArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2'], SubscriptionCelo_hatsSignerGateV2Args, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2S: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2S'], SubscriptionCelo_hatsSignerGateV2SArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2OwnerHatSetEvent: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2OwnerHatSetEvent'], SubscriptionCelo_hatsSignerGateV2OwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2OwnerHatSetEvents: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2OwnerHatSetEvents'], SubscriptionCelo_hatsSignerGateV2OwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2SignerHatsAddedEvent: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2SignerHatsAddedEvent'], SubscriptionCelo_hatsSignerGateV2SignerHatsAddedEventArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2SignerHatsAddedEvents: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2SignerHatsAddedEvents'], SubscriptionCelo_hatsSignerGateV2SignerHatsAddedEventsArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2ThresholdConfigSetEvent: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2ThresholdConfigSetEvent'], SubscriptionCelo_hatsSignerGateV2ThresholdConfigSetEventArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2ThresholdConfigSetEvents: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2ThresholdConfigSetEvents'], SubscriptionCelo_hatsSignerGateV2ThresholdConfigSetEventsArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2HSGLockedEvent: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2HSGLockedEvent'], SubscriptionCelo_hatsSignerGateV2HSGLockedEventArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2HSGLockedEvents: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2HSGLockedEvents'], SubscriptionCelo_hatsSignerGateV2HSGLockedEventsArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2ClaimableForSetEvent: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2ClaimableForSetEvent'], SubscriptionCelo_hatsSignerGateV2ClaimableForSetEventArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2ClaimableForSetEvents: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2ClaimableForSetEvents'], SubscriptionCelo_hatsSignerGateV2ClaimableForSetEventsArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2DetachedEvent: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2DetachedEvent'], SubscriptionCelo_hatsSignerGateV2DetachedEventArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2DetachedEvents: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2DetachedEvents'], SubscriptionCelo_hatsSignerGateV2DetachedEventsArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2MigratedEvent: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2MigratedEvent'], SubscriptionCelo_hatsSignerGateV2MigratedEventArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2MigratedEvents: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2MigratedEvents'], SubscriptionCelo_hatsSignerGateV2MigratedEventsArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2DelegatecallTargetEnabledEvent: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2DelegatecallTargetEnabledEvent'], SubscriptionCelo_hatsSignerGateV2DelegatecallTargetEnabledEventArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2DelegatecallTargetEnabledEvents: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2DelegatecallTargetEnabledEvents'], SubscriptionCelo_hatsSignerGateV2DelegatecallTargetEnabledEventsArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2RegisteredEvent: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2RegisteredEvent'], SubscriptionCelo_hatsSignerGateV2RegisteredEventArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2RegisteredEvents: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2RegisteredEvents'], SubscriptionCelo_hatsSignerGateV2RegisteredEventsArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2ChangedGuardEvent: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2ChangedGuardEvent'], SubscriptionCelo_hatsSignerGateV2ChangedGuardEventArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2ChangedGuardEvents: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2ChangedGuardEvents'], SubscriptionCelo_hatsSignerGateV2ChangedGuardEventsArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2EnabledModuleEvent: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2EnabledModuleEvent'], SubscriptionCelo_hatsSignerGateV2EnabledModuleEventArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2EnabledModuleEvents: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2EnabledModuleEvents'], SubscriptionCelo_hatsSignerGateV2EnabledModuleEventsArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2DisabledModuleEvent: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2DisabledModuleEvent'], SubscriptionCelo_hatsSignerGateV2DisabledModuleEventArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2DisabledModuleEvents: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2DisabledModuleEvents'], SubscriptionCelo_hatsSignerGateV2DisabledModuleEventsArgs, MeshContext>,
  /** null **/
  Celo_hatsAccount1OfN: InContextSdkMethod<Subscription['Celo_hatsAccount1OfN'], SubscriptionCelo_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  Celo_hatsAccount1OfNs: InContextSdkMethod<Subscription['Celo_hatsAccount1OfNs'], SubscriptionCelo_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  Celo_hatsAccount1OfNOperation: InContextSdkMethod<Subscription['Celo_hatsAccount1OfNOperation'], SubscriptionCelo_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  Celo_hatsAccount1OfNOperations: InContextSdkMethod<Subscription['Celo_hatsAccount1OfNOperations'], SubscriptionCelo_hatsAccount1OfNOperationsArgs, MeshContext>,
  /** null **/
  Celo_hatsStakingShaman: InContextSdkMethod<Subscription['Celo_hatsStakingShaman'], SubscriptionCelo_hatsStakingShamanArgs, MeshContext>,
  /** null **/
  Celo_hatsStakingShamans: InContextSdkMethod<Subscription['Celo_hatsStakingShamans'], SubscriptionCelo_hatsStakingShamansArgs, MeshContext>,
  /** null **/
  Celo_shamanStake: InContextSdkMethod<Subscription['Celo_shamanStake'], SubscriptionCelo_shamanStakeArgs, MeshContext>,
  /** null **/
  Celo_shamanStakes: InContextSdkMethod<Subscription['Celo_shamanStakes'], SubscriptionCelo_shamanStakesArgs, MeshContext>,
  /** null **/
  Celo_hatsFarcasterDelegator: InContextSdkMethod<Subscription['Celo_hatsFarcasterDelegator'], SubscriptionCelo_hatsFarcasterDelegatorArgs, MeshContext>,
  /** null **/
  Celo_hatsFarcasterDelegators: InContextSdkMethod<Subscription['Celo_hatsFarcasterDelegators'], SubscriptionCelo_hatsFarcasterDelegatorsArgs, MeshContext>,
  /** null **/
  Celo_jokeRaceEligibility: InContextSdkMethod<Subscription['Celo_jokeRaceEligibility'], SubscriptionCelo_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  Celo_jokeRaceEligibilities: InContextSdkMethod<Subscription['Celo_jokeRaceEligibilities'], SubscriptionCelo_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_jokeRaceEligibilityTerm: InContextSdkMethod<Subscription['Celo_jokeRaceEligibilityTerm'], SubscriptionCelo_jokeRaceEligibilityTermArgs, MeshContext>,
  /** null **/
  Celo_jokeRaceEligibilityTerms: InContextSdkMethod<Subscription['Celo_jokeRaceEligibilityTerms'], SubscriptionCelo_jokeRaceEligibilityTermsArgs, MeshContext>,
  /** null **/
  Celo_jokeRaceNextTermSetEvent: InContextSdkMethod<Subscription['Celo_jokeRaceNextTermSetEvent'], SubscriptionCelo_jokeRaceNextTermSetEventArgs, MeshContext>,
  /** null **/
  Celo_jokeRaceNextTermSetEvents: InContextSdkMethod<Subscription['Celo_jokeRaceNextTermSetEvents'], SubscriptionCelo_jokeRaceNextTermSetEventsArgs, MeshContext>,
  /** null **/
  Celo_jokeRaceTermStartedEvent: InContextSdkMethod<Subscription['Celo_jokeRaceTermStartedEvent'], SubscriptionCelo_jokeRaceTermStartedEventArgs, MeshContext>,
  /** null **/
  Celo_jokeRaceTermStartedEvents: InContextSdkMethod<Subscription['Celo_jokeRaceTermStartedEvents'], SubscriptionCelo_jokeRaceTermStartedEventsArgs, MeshContext>,
  /** null **/
  Celo_allowListEligibility: InContextSdkMethod<Subscription['Celo_allowListEligibility'], SubscriptionCelo_allowListEligibilityArgs, MeshContext>,
  /** null **/
  Celo_allowListEligibilities: InContextSdkMethod<Subscription['Celo_allowListEligibilities'], SubscriptionCelo_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_allowListEligibilityData: InContextSdkMethod<Subscription['Celo_allowListEligibilityData'], SubscriptionCelo_allowListEligibilityDataArgs, MeshContext>,
  /** null **/
  Celo_allowListEligibilityDatas: InContextSdkMethod<Subscription['Celo_allowListEligibilityDatas'], SubscriptionCelo_allowListEligibilityDatasArgs, MeshContext>,
  /** null **/
  Celo_allowlistAccountAddedEvent: InContextSdkMethod<Subscription['Celo_allowlistAccountAddedEvent'], SubscriptionCelo_allowlistAccountAddedEventArgs, MeshContext>,
  /** null **/
  Celo_allowlistAccountAddedEvents: InContextSdkMethod<Subscription['Celo_allowlistAccountAddedEvents'], SubscriptionCelo_allowlistAccountAddedEventsArgs, MeshContext>,
  /** null **/
  Celo_allowlistAccountsAddedEvent: InContextSdkMethod<Subscription['Celo_allowlistAccountsAddedEvent'], SubscriptionCelo_allowlistAccountsAddedEventArgs, MeshContext>,
  /** null **/
  Celo_allowlistAccountsAddedEvents: InContextSdkMethod<Subscription['Celo_allowlistAccountsAddedEvents'], SubscriptionCelo_allowlistAccountsAddedEventsArgs, MeshContext>,
  /** null **/
  Celo_allowlistAccountRemovedEvent: InContextSdkMethod<Subscription['Celo_allowlistAccountRemovedEvent'], SubscriptionCelo_allowlistAccountRemovedEventArgs, MeshContext>,
  /** null **/
  Celo_allowlistAccountRemovedEvents: InContextSdkMethod<Subscription['Celo_allowlistAccountRemovedEvents'], SubscriptionCelo_allowlistAccountRemovedEventsArgs, MeshContext>,
  /** null **/
  Celo_allowlistAccountsRemovedEvent: InContextSdkMethod<Subscription['Celo_allowlistAccountsRemovedEvent'], SubscriptionCelo_allowlistAccountsRemovedEventArgs, MeshContext>,
  /** null **/
  Celo_allowlistAccountsRemovedEvents: InContextSdkMethod<Subscription['Celo_allowlistAccountsRemovedEvents'], SubscriptionCelo_allowlistAccountsRemovedEventsArgs, MeshContext>,
  /** null **/
  Celo_allowlistAccountStandingChangedEvent: InContextSdkMethod<Subscription['Celo_allowlistAccountStandingChangedEvent'], SubscriptionCelo_allowlistAccountStandingChangedEventArgs, MeshContext>,
  /** null **/
  Celo_allowlistAccountStandingChangedEvents: InContextSdkMethod<Subscription['Celo_allowlistAccountStandingChangedEvents'], SubscriptionCelo_allowlistAccountStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Celo_allowlistAccountsStandingChangedEvent: InContextSdkMethod<Subscription['Celo_allowlistAccountsStandingChangedEvent'], SubscriptionCelo_allowlistAccountsStandingChangedEventArgs, MeshContext>,
  /** null **/
  Celo_allowlistAccountsStandingChangedEvents: InContextSdkMethod<Subscription['Celo_allowlistAccountsStandingChangedEvents'], SubscriptionCelo_allowlistAccountsStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Celo_allowlistOwnerHatSetEvent: InContextSdkMethod<Subscription['Celo_allowlistOwnerHatSetEvent'], SubscriptionCelo_allowlistOwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Celo_allowlistOwnerHatSetEvents: InContextSdkMethod<Subscription['Celo_allowlistOwnerHatSetEvents'], SubscriptionCelo_allowlistOwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Celo_allowlistArbitratorHatSetEvent: InContextSdkMethod<Subscription['Celo_allowlistArbitratorHatSetEvent'], SubscriptionCelo_allowlistArbitratorHatSetEventArgs, MeshContext>,
  /** null **/
  Celo_allowlistArbitratorHatSetEvents: InContextSdkMethod<Subscription['Celo_allowlistArbitratorHatSetEvents'], SubscriptionCelo_allowlistArbitratorHatSetEventsArgs, MeshContext>,
  /** null **/
  Celo_hatsElectionEligibility: InContextSdkMethod<Subscription['Celo_hatsElectionEligibility'], SubscriptionCelo_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  Celo_hatsElectionEligibilities: InContextSdkMethod<Subscription['Celo_hatsElectionEligibilities'], SubscriptionCelo_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_electionTerm: InContextSdkMethod<Subscription['Celo_electionTerm'], SubscriptionCelo_electionTermArgs, MeshContext>,
  /** null **/
  Celo_electionTerms: InContextSdkMethod<Subscription['Celo_electionTerms'], SubscriptionCelo_electionTermsArgs, MeshContext>,
  /** null **/
  Celo_electionElectionOpenedEvent: InContextSdkMethod<Subscription['Celo_electionElectionOpenedEvent'], SubscriptionCelo_electionElectionOpenedEventArgs, MeshContext>,
  /** null **/
  Celo_electionElectionOpenedEvents: InContextSdkMethod<Subscription['Celo_electionElectionOpenedEvents'], SubscriptionCelo_electionElectionOpenedEventsArgs, MeshContext>,
  /** null **/
  Celo_electionElectionCompletedEvent: InContextSdkMethod<Subscription['Celo_electionElectionCompletedEvent'], SubscriptionCelo_electionElectionCompletedEventArgs, MeshContext>,
  /** null **/
  Celo_electionElectionCompletedEvents: InContextSdkMethod<Subscription['Celo_electionElectionCompletedEvents'], SubscriptionCelo_electionElectionCompletedEventsArgs, MeshContext>,
  /** null **/
  Celo_electionNewTermStartedEvent: InContextSdkMethod<Subscription['Celo_electionNewTermStartedEvent'], SubscriptionCelo_electionNewTermStartedEventArgs, MeshContext>,
  /** null **/
  Celo_electionNewTermStartedEvents: InContextSdkMethod<Subscription['Celo_electionNewTermStartedEvents'], SubscriptionCelo_electionNewTermStartedEventsArgs, MeshContext>,
  /** null **/
  Celo_electionRecalledEvent: InContextSdkMethod<Subscription['Celo_electionRecalledEvent'], SubscriptionCelo_electionRecalledEventArgs, MeshContext>,
  /** null **/
  Celo_electionRecalledEvents: InContextSdkMethod<Subscription['Celo_electionRecalledEvents'], SubscriptionCelo_electionRecalledEventsArgs, MeshContext>,
  /** null **/
  Celo_passthroughModule: InContextSdkMethod<Subscription['Celo_passthroughModule'], SubscriptionCelo_passthroughModuleArgs, MeshContext>,
  /** null **/
  Celo_passthroughModules: InContextSdkMethod<Subscription['Celo_passthroughModules'], SubscriptionCelo_passthroughModulesArgs, MeshContext>,
  /** null **/
  Celo_stakingEligibility: InContextSdkMethod<Subscription['Celo_stakingEligibility'], SubscriptionCelo_stakingEligibilityArgs, MeshContext>,
  /** null **/
  Celo_stakingEligibilities: InContextSdkMethod<Subscription['Celo_stakingEligibilities'], SubscriptionCelo_stakingEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_stake: InContextSdkMethod<Subscription['Celo_stake'], SubscriptionCelo_stakeArgs, MeshContext>,
  /** null **/
  Celo_stakes: InContextSdkMethod<Subscription['Celo_stakes'], SubscriptionCelo_stakesArgs, MeshContext>,
  /** null **/
  Celo_stakingStakedEvent: InContextSdkMethod<Subscription['Celo_stakingStakedEvent'], SubscriptionCelo_stakingStakedEventArgs, MeshContext>,
  /** null **/
  Celo_stakingStakedEvents: InContextSdkMethod<Subscription['Celo_stakingStakedEvents'], SubscriptionCelo_stakingStakedEventsArgs, MeshContext>,
  /** null **/
  Celo_stakingUnstakeBegunEvent: InContextSdkMethod<Subscription['Celo_stakingUnstakeBegunEvent'], SubscriptionCelo_stakingUnstakeBegunEventArgs, MeshContext>,
  /** null **/
  Celo_stakingUnstakeBegunEvents: InContextSdkMethod<Subscription['Celo_stakingUnstakeBegunEvents'], SubscriptionCelo_stakingUnstakeBegunEventsArgs, MeshContext>,
  /** null **/
  Celo_stakingSlashedEvent: InContextSdkMethod<Subscription['Celo_stakingSlashedEvent'], SubscriptionCelo_stakingSlashedEventArgs, MeshContext>,
  /** null **/
  Celo_stakingSlashedEvents: InContextSdkMethod<Subscription['Celo_stakingSlashedEvents'], SubscriptionCelo_stakingSlashedEventsArgs, MeshContext>,
  /** null **/
  Celo_stakingMinStakeChangedEvent: InContextSdkMethod<Subscription['Celo_stakingMinStakeChangedEvent'], SubscriptionCelo_stakingMinStakeChangedEventArgs, MeshContext>,
  /** null **/
  Celo_stakingMinStakeChangedEvents: InContextSdkMethod<Subscription['Celo_stakingMinStakeChangedEvents'], SubscriptionCelo_stakingMinStakeChangedEventsArgs, MeshContext>,
  /** null **/
  Celo_stakingJudgeHatChangedEvent: InContextSdkMethod<Subscription['Celo_stakingJudgeHatChangedEvent'], SubscriptionCelo_stakingJudgeHatChangedEventArgs, MeshContext>,
  /** null **/
  Celo_stakingJudgeHatChangedEvents: InContextSdkMethod<Subscription['Celo_stakingJudgeHatChangedEvents'], SubscriptionCelo_stakingJudgeHatChangedEventsArgs, MeshContext>,
  /** null **/
  Celo_stakingRecipientHatChangedEvent: InContextSdkMethod<Subscription['Celo_stakingRecipientHatChangedEvent'], SubscriptionCelo_stakingRecipientHatChangedEventArgs, MeshContext>,
  /** null **/
  Celo_stakingRecipientHatChangedEvents: InContextSdkMethod<Subscription['Celo_stakingRecipientHatChangedEvents'], SubscriptionCelo_stakingRecipientHatChangedEventsArgs, MeshContext>,
  /** null **/
  Celo_stakingCooldownPeriodChangedEvent: InContextSdkMethod<Subscription['Celo_stakingCooldownPeriodChangedEvent'], SubscriptionCelo_stakingCooldownPeriodChangedEventArgs, MeshContext>,
  /** null **/
  Celo_stakingCooldownPeriodChangedEvents: InContextSdkMethod<Subscription['Celo_stakingCooldownPeriodChangedEvents'], SubscriptionCelo_stakingCooldownPeriodChangedEventsArgs, MeshContext>,
  /** null **/
  Celo_stakingForgivenEvent: InContextSdkMethod<Subscription['Celo_stakingForgivenEvent'], SubscriptionCelo_stakingForgivenEventArgs, MeshContext>,
  /** null **/
  Celo_stakingForgivenEvents: InContextSdkMethod<Subscription['Celo_stakingForgivenEvents'], SubscriptionCelo_stakingForgivenEventsArgs, MeshContext>,
  /** null **/
  Celo_seasonToggle: InContextSdkMethod<Subscription['Celo_seasonToggle'], SubscriptionCelo_seasonToggleArgs, MeshContext>,
  /** null **/
  Celo_seasonToggles: InContextSdkMethod<Subscription['Celo_seasonToggles'], SubscriptionCelo_seasonTogglesArgs, MeshContext>,
  /** null **/
  Celo_characterSheetsLevelEligibility: InContextSdkMethod<Subscription['Celo_characterSheetsLevelEligibility'], SubscriptionCelo_characterSheetsLevelEligibilityArgs, MeshContext>,
  /** null **/
  Celo_characterSheetsLevelEligibilities: InContextSdkMethod<Subscription['Celo_characterSheetsLevelEligibilities'], SubscriptionCelo_characterSheetsLevelEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_agreementEligibility: InContextSdkMethod<Subscription['Celo_agreementEligibility'], SubscriptionCelo_agreementEligibilityArgs, MeshContext>,
  /** null **/
  Celo_agreementEligibilities: InContextSdkMethod<Subscription['Celo_agreementEligibilities'], SubscriptionCelo_agreementEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_agreement: InContextSdkMethod<Subscription['Celo_agreement'], SubscriptionCelo_agreementArgs, MeshContext>,
  /** null **/
  Celo_agreements: InContextSdkMethod<Subscription['Celo_agreements'], SubscriptionCelo_agreementsArgs, MeshContext>,
  /** null **/
  Celo_agreementHatClaimedWithAgreementEvent: InContextSdkMethod<Subscription['Celo_agreementHatClaimedWithAgreementEvent'], SubscriptionCelo_agreementHatClaimedWithAgreementEventArgs, MeshContext>,
  /** null **/
  Celo_agreementHatClaimedWithAgreementEvents: InContextSdkMethod<Subscription['Celo_agreementHatClaimedWithAgreementEvents'], SubscriptionCelo_agreementHatClaimedWithAgreementEventsArgs, MeshContext>,
  /** null **/
  Celo_agreementAgreementSignedEvent: InContextSdkMethod<Subscription['Celo_agreementAgreementSignedEvent'], SubscriptionCelo_agreementAgreementSignedEventArgs, MeshContext>,
  /** null **/
  Celo_agreementAgreementSignedEvents: InContextSdkMethod<Subscription['Celo_agreementAgreementSignedEvents'], SubscriptionCelo_agreementAgreementSignedEventsArgs, MeshContext>,
  /** null **/
  Celo_agreementAgreementSetEvent: InContextSdkMethod<Subscription['Celo_agreementAgreementSetEvent'], SubscriptionCelo_agreementAgreementSetEventArgs, MeshContext>,
  /** null **/
  Celo_agreementAgreementSetEvents: InContextSdkMethod<Subscription['Celo_agreementAgreementSetEvents'], SubscriptionCelo_agreementAgreementSetEventsArgs, MeshContext>,
  /** null **/
  Celo_agreementOwnerHatSetEvent: InContextSdkMethod<Subscription['Celo_agreementOwnerHatSetEvent'], SubscriptionCelo_agreementOwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Celo_agreementOwnerHatSetEvents: InContextSdkMethod<Subscription['Celo_agreementOwnerHatSetEvents'], SubscriptionCelo_agreementOwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Celo_agreementArbitratorHatSetEvent: InContextSdkMethod<Subscription['Celo_agreementArbitratorHatSetEvent'], SubscriptionCelo_agreementArbitratorHatSetEventArgs, MeshContext>,
  /** null **/
  Celo_agreementArbitratorHatSetEvents: InContextSdkMethod<Subscription['Celo_agreementArbitratorHatSetEvents'], SubscriptionCelo_agreementArbitratorHatSetEventsArgs, MeshContext>,
  /** null **/
  Celo_erc20Eligibility: InContextSdkMethod<Subscription['Celo_erc20Eligibility'], SubscriptionCelo_erc20EligibilityArgs, MeshContext>,
  /** null **/
  Celo_erc20Eligibilities: InContextSdkMethod<Subscription['Celo_erc20Eligibilities'], SubscriptionCelo_erc20EligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_erc721Eligibility: InContextSdkMethod<Subscription['Celo_erc721Eligibility'], SubscriptionCelo_erc721EligibilityArgs, MeshContext>,
  /** null **/
  Celo_erc721Eligibilities: InContextSdkMethod<Subscription['Celo_erc721Eligibilities'], SubscriptionCelo_erc721EligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_erc1155Eligibility: InContextSdkMethod<Subscription['Celo_erc1155Eligibility'], SubscriptionCelo_erc1155EligibilityArgs, MeshContext>,
  /** null **/
  Celo_erc1155Eligibilities: InContextSdkMethod<Subscription['Celo_erc1155Eligibilities'], SubscriptionCelo_erc1155EligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_hatWearingEligibility: InContextSdkMethod<Subscription['Celo_hatWearingEligibility'], SubscriptionCelo_hatWearingEligibilityArgs, MeshContext>,
  /** null **/
  Celo_hatWearingEligibilities: InContextSdkMethod<Subscription['Celo_hatWearingEligibilities'], SubscriptionCelo_hatWearingEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_gitcoinPassportEligibility: InContextSdkMethod<Subscription['Celo_gitcoinPassportEligibility'], SubscriptionCelo_gitcoinPassportEligibilityArgs, MeshContext>,
  /** null **/
  Celo_gitcoinPassportEligibilities: InContextSdkMethod<Subscription['Celo_gitcoinPassportEligibilities'], SubscriptionCelo_gitcoinPassportEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_coLinksEligibility: InContextSdkMethod<Subscription['Celo_coLinksEligibility'], SubscriptionCelo_coLinksEligibilityArgs, MeshContext>,
  /** null **/
  Celo_coLinksEligibilities: InContextSdkMethod<Subscription['Celo_coLinksEligibilities'], SubscriptionCelo_coLinksEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_hatControlledModule: InContextSdkMethod<Subscription['Celo_hatControlledModule'], SubscriptionCelo_hatControlledModuleArgs, MeshContext>,
  /** null **/
  Celo_hatControlledModules: InContextSdkMethod<Subscription['Celo_hatControlledModules'], SubscriptionCelo_hatControlledModulesArgs, MeshContext>,
  /** null **/
  Celo_hatControlledModuleWearerStatus: InContextSdkMethod<Subscription['Celo_hatControlledModuleWearerStatus'], SubscriptionCelo_hatControlledModuleWearerStatusArgs, MeshContext>,
  /** null **/
  Celo_hatControlledModuleWearerStatuses: InContextSdkMethod<Subscription['Celo_hatControlledModuleWearerStatuses'], SubscriptionCelo_hatControlledModuleWearerStatusesArgs, MeshContext>,
  /** null **/
  Celo_hatControlledModuleHatStatus: InContextSdkMethod<Subscription['Celo_hatControlledModuleHatStatus'], SubscriptionCelo_hatControlledModuleHatStatusArgs, MeshContext>,
  /** null **/
  Celo_hatControlledModuleHatStatuses: InContextSdkMethod<Subscription['Celo_hatControlledModuleHatStatuses'], SubscriptionCelo_hatControlledModuleHatStatusesArgs, MeshContext>,
  /** null **/
  Celo_hatControlledWearerStatusSet: InContextSdkMethod<Subscription['Celo_hatControlledWearerStatusSet'], SubscriptionCelo_hatControlledWearerStatusSetArgs, MeshContext>,
  /** null **/
  Celo_hatControlledWearerStatusSets: InContextSdkMethod<Subscription['Celo_hatControlledWearerStatusSets'], SubscriptionCelo_hatControlledWearerStatusSetsArgs, MeshContext>,
  /** null **/
  Celo_hatControlledHatStatusSet: InContextSdkMethod<Subscription['Celo_hatControlledHatStatusSet'], SubscriptionCelo_hatControlledHatStatusSetArgs, MeshContext>,
  /** null **/
  Celo_hatControlledHatStatusSets: InContextSdkMethod<Subscription['Celo_hatControlledHatStatusSets'], SubscriptionCelo_hatControlledHatStatusSetsArgs, MeshContext>,
  /** null **/
  Celo_publicLockV14Eligibility: InContextSdkMethod<Subscription['Celo_publicLockV14Eligibility'], SubscriptionCelo_publicLockV14EligibilityArgs, MeshContext>,
  /** null **/
  Celo_publicLockV14Eligibilities: InContextSdkMethod<Subscription['Celo_publicLockV14Eligibilities'], SubscriptionCelo_publicLockV14EligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_hatsEligibilitiesChain: InContextSdkMethod<Subscription['Celo_hatsEligibilitiesChain'], SubscriptionCelo_hatsEligibilitiesChainArgs, MeshContext>,
  /** null **/
  Celo_hatsEligibilitiesChains: InContextSdkMethod<Subscription['Celo_hatsEligibilitiesChains'], SubscriptionCelo_hatsEligibilitiesChainsArgs, MeshContext>,
  /** null **/
  Celo_eligibilitiesRuleset: InContextSdkMethod<Subscription['Celo_eligibilitiesRuleset'], SubscriptionCelo_eligibilitiesRulesetArgs, MeshContext>,
  /** null **/
  Celo_eligibilitiesRulesets: InContextSdkMethod<Subscription['Celo_eligibilitiesRulesets'], SubscriptionCelo_eligibilitiesRulesetsArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2Event: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2Event'], SubscriptionCelo_hatsSignerGateV2EventArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGateV2Events: InContextSdkMethod<Subscription['Celo_hatsSignerGateV2Events'], SubscriptionCelo_hatsSignerGateV2EventsArgs, MeshContext>,
  /** null **/
  Celo_hatsModule: InContextSdkMethod<Subscription['Celo_hatsModule'], SubscriptionCelo_hatsModuleArgs, MeshContext>,
  /** null **/
  Celo_hatsModules: InContextSdkMethod<Subscription['Celo_hatsModules'], SubscriptionCelo_hatsModulesArgs, MeshContext>,
  /** null **/
  Celo_hatsModuleEvent: InContextSdkMethod<Subscription['Celo_hatsModuleEvent'], SubscriptionCelo_hatsModuleEventArgs, MeshContext>,
  /** null **/
  Celo_hatsModuleEvents: InContextSdkMethod<Subscription['Celo_hatsModuleEvents'], SubscriptionCelo_hatsModuleEventsArgs, MeshContext>,
  /** null **/
  Celo_jokeRaceEvent: InContextSdkMethod<Subscription['Celo_jokeRaceEvent'], SubscriptionCelo_jokeRaceEventArgs, MeshContext>,
  /** null **/
  Celo_jokeRaceEvents: InContextSdkMethod<Subscription['Celo_jokeRaceEvents'], SubscriptionCelo_jokeRaceEventsArgs, MeshContext>,
  /** null **/
  Celo_allowlistEvent: InContextSdkMethod<Subscription['Celo_allowlistEvent'], SubscriptionCelo_allowlistEventArgs, MeshContext>,
  /** null **/
  Celo_allowlistEvents: InContextSdkMethod<Subscription['Celo_allowlistEvents'], SubscriptionCelo_allowlistEventsArgs, MeshContext>,
  /** null **/
  Celo_electionEvent: InContextSdkMethod<Subscription['Celo_electionEvent'], SubscriptionCelo_electionEventArgs, MeshContext>,
  /** null **/
  Celo_electionEvents: InContextSdkMethod<Subscription['Celo_electionEvents'], SubscriptionCelo_electionEventsArgs, MeshContext>,
  /** null **/
  Celo_stakingEvent: InContextSdkMethod<Subscription['Celo_stakingEvent'], SubscriptionCelo_stakingEventArgs, MeshContext>,
  /** null **/
  Celo_stakingEvents: InContextSdkMethod<Subscription['Celo_stakingEvents'], SubscriptionCelo_stakingEventsArgs, MeshContext>,
  /** null **/
  Celo_agreementEvent: InContextSdkMethod<Subscription['Celo_agreementEvent'], SubscriptionCelo_agreementEventArgs, MeshContext>,
  /** null **/
  Celo_agreementEvents: InContextSdkMethod<Subscription['Celo_agreementEvents'], SubscriptionCelo_agreementEventsArgs, MeshContext>,
  /** null **/
  Celo_hatControlledModuleEvent: InContextSdkMethod<Subscription['Celo_hatControlledModuleEvent'], SubscriptionCelo_hatControlledModuleEventArgs, MeshContext>,
  /** null **/
  Celo_hatControlledModuleEvents: InContextSdkMethod<Subscription['Celo_hatControlledModuleEvents'], SubscriptionCelo_hatControlledModuleEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Celo__meta: InContextSdkMethod<Subscription['Celo__meta'], SubscriptionCelo__metaArgs, MeshContext>
  };

  export type Context = {
      ["Celo_Ancillary"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
