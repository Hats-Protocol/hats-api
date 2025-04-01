// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace BaseSepoliaAncillaryTypes {
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

export type BaseSep_Agreement = {
  id: Scalars['ID']['output'];
  agreementEligibility: BaseSep_AgreementEligibility;
  agreement: Scalars['String']['output'];
  signers: Array<Scalars['String']['output']>;
  graceEndTime: Scalars['BigInt']['output'];
};

/**  Agreement Eligibility  */
export type BaseSep_AgreementEligibility = BaseSep_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  ownerHat: BaseSep_HatAuthority;
  arbitratorHat: BaseSep_HatAuthority;
  currentAgreement: BaseSep_Agreement;
  currentAgreementNumber: Scalars['BigInt']['output'];
  agreements: Array<BaseSep_Agreement>;
  badStandings: Array<Scalars['String']['output']>;
  events: Array<BaseSep_AgreementEvent>;
};


/**  Agreement Eligibility  */
export type BaseSep_AgreementEligibilityagreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Agreement_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Agreement_filter>;
};


/**  Agreement Eligibility  */
export type BaseSep_AgreementEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_AgreementEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_AgreementEvent_filter>;
};

export type BaseSep_AgreementEligibility_filter = {
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
  ownerHat_?: InputMaybe<BaseSep_HatAuthority_filter>;
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
  arbitratorHat_?: InputMaybe<BaseSep_HatAuthority_filter>;
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
  currentAgreement_?: InputMaybe<BaseSep_Agreement_filter>;
  currentAgreementNumber?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentAgreementNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  agreements_?: InputMaybe<BaseSep_Agreement_filter>;
  badStandings?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  events_?: InputMaybe<BaseSep_AgreementEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_AgreementEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_AgreementEligibility_filter>>>;
};

export type BaseSep_AgreementEligibility_orderBy =
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

export type BaseSep_AgreementEvent = {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  agreementEligibilityInstance: BaseSep_AgreementEligibility;
};

export type BaseSep_AgreementEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  agreementEligibilityInstance_?: InputMaybe<BaseSep_AgreementEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_AgreementEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_AgreementEvent_filter>>>;
};

export type BaseSep_AgreementEvent_orderBy =
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

export type BaseSep_Agreement_AgreementSetEvent = BaseSep_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  agreementEligibilityInstance: BaseSep_AgreementEligibility;
  agreement: Scalars['String']['output'];
  grace: Scalars['BigInt']['output'];
};

export type BaseSep_Agreement_AgreementSetEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  agreementEligibilityInstance_?: InputMaybe<BaseSep_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Agreement_AgreementSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Agreement_AgreementSetEvent_filter>>>;
};

export type BaseSep_Agreement_AgreementSetEvent_orderBy =
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

export type BaseSep_Agreement_AgreementSignedEvent = BaseSep_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  agreementEligibilityInstance: BaseSep_AgreementEligibility;
  signer: Scalars['String']['output'];
  agreement: Scalars['String']['output'];
};

export type BaseSep_Agreement_AgreementSignedEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  agreementEligibilityInstance_?: InputMaybe<BaseSep_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Agreement_AgreementSignedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Agreement_AgreementSignedEvent_filter>>>;
};

export type BaseSep_Agreement_AgreementSignedEvent_orderBy =
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

export type BaseSep_Agreement_ArbitratorHatSetEvent = BaseSep_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  agreementEligibilityInstance: BaseSep_AgreementEligibility;
  newArbitratorHat: Scalars['String']['output'];
};

export type BaseSep_Agreement_ArbitratorHatSetEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  agreementEligibilityInstance_?: InputMaybe<BaseSep_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Agreement_ArbitratorHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Agreement_ArbitratorHatSetEvent_filter>>>;
};

export type BaseSep_Agreement_ArbitratorHatSetEvent_orderBy =
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

export type BaseSep_Agreement_ForgivenMultipleEvent = BaseSep_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  agreementEligibilityInstance: BaseSep_AgreementEligibility;
  wearers: Array<Scalars['String']['output']>;
};

export type BaseSep_Agreement_ForgivenMultipleEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  agreementEligibilityInstance_?: InputMaybe<BaseSep_AgreementEligibility_filter>;
  wearers?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Agreement_ForgivenMultipleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Agreement_ForgivenMultipleEvent_filter>>>;
};

export type BaseSep_Agreement_ForgivenMultipleEvent_orderBy =
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
  | 'wearers';

export type BaseSep_Agreement_ForgivenSingleEvent = BaseSep_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  agreementEligibilityInstance: BaseSep_AgreementEligibility;
  wearer: Scalars['String']['output'];
};

export type BaseSep_Agreement_ForgivenSingleEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  agreementEligibilityInstance_?: InputMaybe<BaseSep_AgreementEligibility_filter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Agreement_ForgivenSingleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Agreement_ForgivenSingleEvent_filter>>>;
};

export type BaseSep_Agreement_ForgivenSingleEvent_orderBy =
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
  | 'wearer';

export type BaseSep_Agreement_HatClaimedWithAgreementEvent = BaseSep_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  agreementEligibilityInstance: BaseSep_AgreementEligibility;
  claimer: Scalars['String']['output'];
  hatId: Scalars['String']['output'];
  agreement: Scalars['String']['output'];
};

export type BaseSep_Agreement_HatClaimedWithAgreementEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  agreementEligibilityInstance_?: InputMaybe<BaseSep_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Agreement_HatClaimedWithAgreementEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Agreement_HatClaimedWithAgreementEvent_filter>>>;
};

export type BaseSep_Agreement_HatClaimedWithAgreementEvent_orderBy =
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

export type BaseSep_Agreement_OwnerHatSetEvent = BaseSep_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  agreementEligibilityInstance: BaseSep_AgreementEligibility;
  newOwnerHat: Scalars['String']['output'];
};

export type BaseSep_Agreement_OwnerHatSetEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  agreementEligibilityInstance_?: InputMaybe<BaseSep_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Agreement_OwnerHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Agreement_OwnerHatSetEvent_filter>>>;
};

export type BaseSep_Agreement_OwnerHatSetEvent_orderBy =
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

export type BaseSep_Agreement_RevokedMultipleEvent = BaseSep_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  agreementEligibilityInstance: BaseSep_AgreementEligibility;
  wearers: Array<Scalars['String']['output']>;
};

export type BaseSep_Agreement_RevokedMultipleEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  agreementEligibilityInstance_?: InputMaybe<BaseSep_AgreementEligibility_filter>;
  wearers?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Agreement_RevokedMultipleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Agreement_RevokedMultipleEvent_filter>>>;
};

export type BaseSep_Agreement_RevokedMultipleEvent_orderBy =
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
  | 'wearers';

export type BaseSep_Agreement_RevokedSingleEvent = BaseSep_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  agreementEligibilityInstance: BaseSep_AgreementEligibility;
  wearer: Scalars['String']['output'];
};

export type BaseSep_Agreement_RevokedSingleEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  agreementEligibilityInstance_?: InputMaybe<BaseSep_AgreementEligibility_filter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Agreement_RevokedSingleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Agreement_RevokedSingleEvent_filter>>>;
};

export type BaseSep_Agreement_RevokedSingleEvent_orderBy =
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
  | 'wearer';

export type BaseSep_Agreement_filter = {
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
  agreementEligibility_?: InputMaybe<BaseSep_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Agreement_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Agreement_filter>>>;
};

export type BaseSep_Agreement_orderBy =
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
export type BaseSep_AllowListEligibility = BaseSep_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  ownerHat: BaseSep_HatAuthority;
  arbitratorHat: BaseSep_HatAuthority;
  eligibilityData: Array<BaseSep_AllowListEligibilityData>;
  events: Array<BaseSep_AllowlistEvent>;
};


/**  Allowlist Eligibility  */
export type BaseSep_AllowListEligibilityeligibilityDataArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_AllowListEligibilityData_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_AllowListEligibilityData_filter>;
};


/**  Allowlist Eligibility  */
export type BaseSep_AllowListEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_AllowlistEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_AllowlistEvent_filter>;
};

export type BaseSep_AllowListEligibilityData = {
  id: Scalars['ID']['output'];
  allowListEligibility: BaseSep_AllowListEligibility;
  address: Scalars['String']['output'];
  eligible: Scalars['Boolean']['output'];
  badStanding: Scalars['Boolean']['output'];
};

export type BaseSep_AllowListEligibilityData_filter = {
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
  allowListEligibility_?: InputMaybe<BaseSep_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_AllowListEligibilityData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_AllowListEligibilityData_filter>>>;
};

export type BaseSep_AllowListEligibilityData_orderBy =
  | 'id'
  | 'allowListEligibility'
  | 'allowListEligibility__id'
  | 'allowListEligibility__version'
  | 'allowListEligibility__hatId'
  | 'address'
  | 'eligible'
  | 'badStanding';

export type BaseSep_AllowListEligibility_filter = {
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
  ownerHat_?: InputMaybe<BaseSep_HatAuthority_filter>;
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
  arbitratorHat_?: InputMaybe<BaseSep_HatAuthority_filter>;
  eligibilityData_?: InputMaybe<BaseSep_AllowListEligibilityData_filter>;
  events_?: InputMaybe<BaseSep_AllowlistEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_AllowListEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_AllowListEligibility_filter>>>;
};

export type BaseSep_AllowListEligibility_orderBy =
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

export type BaseSep_AllowlistEvent = {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  allowlistEligibilityInstance: BaseSep_AllowListEligibility;
};

export type BaseSep_AllowlistEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  allowlistEligibilityInstance_?: InputMaybe<BaseSep_AllowListEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_AllowlistEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_AllowlistEvent_filter>>>;
};

export type BaseSep_AllowlistEvent_orderBy =
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

export type BaseSep_Allowlist_AccountAddedEvent = BaseSep_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  allowlistEligibilityInstance: BaseSep_AllowListEligibility;
  account: Scalars['String']['output'];
};

export type BaseSep_Allowlist_AccountAddedEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  allowlistEligibilityInstance_?: InputMaybe<BaseSep_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Allowlist_AccountAddedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Allowlist_AccountAddedEvent_filter>>>;
};

export type BaseSep_Allowlist_AccountAddedEvent_orderBy =
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

export type BaseSep_Allowlist_AccountRemovedEvent = BaseSep_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  allowlistEligibilityInstance: BaseSep_AllowListEligibility;
  account: Scalars['String']['output'];
};

export type BaseSep_Allowlist_AccountRemovedEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  allowlistEligibilityInstance_?: InputMaybe<BaseSep_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Allowlist_AccountRemovedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Allowlist_AccountRemovedEvent_filter>>>;
};

export type BaseSep_Allowlist_AccountRemovedEvent_orderBy =
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

export type BaseSep_Allowlist_AccountStandingChangedEvent = BaseSep_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  allowlistEligibilityInstance: BaseSep_AllowListEligibility;
  account: Scalars['String']['output'];
  standing: Scalars['Boolean']['output'];
};

export type BaseSep_Allowlist_AccountStandingChangedEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  allowlistEligibilityInstance_?: InputMaybe<BaseSep_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Allowlist_AccountStandingChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Allowlist_AccountStandingChangedEvent_filter>>>;
};

export type BaseSep_Allowlist_AccountStandingChangedEvent_orderBy =
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

export type BaseSep_Allowlist_AccountsAddedEvent = BaseSep_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  allowlistEligibilityInstance: BaseSep_AllowListEligibility;
  accounts: Array<Scalars['String']['output']>;
};

export type BaseSep_Allowlist_AccountsAddedEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  allowlistEligibilityInstance_?: InputMaybe<BaseSep_AllowListEligibility_filter>;
  accounts?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Allowlist_AccountsAddedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Allowlist_AccountsAddedEvent_filter>>>;
};

export type BaseSep_Allowlist_AccountsAddedEvent_orderBy =
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

export type BaseSep_Allowlist_AccountsRemovedEvent = BaseSep_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  allowlistEligibilityInstance: BaseSep_AllowListEligibility;
  accounts: Array<Scalars['String']['output']>;
};

export type BaseSep_Allowlist_AccountsRemovedEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  allowlistEligibilityInstance_?: InputMaybe<BaseSep_AllowListEligibility_filter>;
  accounts?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Allowlist_AccountsRemovedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Allowlist_AccountsRemovedEvent_filter>>>;
};

export type BaseSep_Allowlist_AccountsRemovedEvent_orderBy =
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

export type BaseSep_Allowlist_AccountsStandingChangedEvent = BaseSep_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  allowlistEligibilityInstance: BaseSep_AllowListEligibility;
  accounts: Array<Scalars['String']['output']>;
  standings: Array<Scalars['Boolean']['output']>;
};

export type BaseSep_Allowlist_AccountsStandingChangedEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  allowlistEligibilityInstance_?: InputMaybe<BaseSep_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Allowlist_AccountsStandingChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Allowlist_AccountsStandingChangedEvent_filter>>>;
};

export type BaseSep_Allowlist_AccountsStandingChangedEvent_orderBy =
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

export type BaseSep_Allowlist_ArbitratorHatSetEvent = BaseSep_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  allowlistEligibilityInstance: BaseSep_AllowListEligibility;
  newArbitratorHat: Scalars['String']['output'];
};

export type BaseSep_Allowlist_ArbitratorHatSetEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  allowlistEligibilityInstance_?: InputMaybe<BaseSep_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Allowlist_ArbitratorHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Allowlist_ArbitratorHatSetEvent_filter>>>;
};

export type BaseSep_Allowlist_ArbitratorHatSetEvent_orderBy =
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

export type BaseSep_Allowlist_OwnerHatSetEvent = BaseSep_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  allowlistEligibilityInstance: BaseSep_AllowListEligibility;
  newOwnerHat: Scalars['String']['output'];
};

export type BaseSep_Allowlist_OwnerHatSetEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  allowlistEligibilityInstance_?: InputMaybe<BaseSep_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Allowlist_OwnerHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Allowlist_OwnerHatSetEvent_filter>>>;
};

export type BaseSep_Allowlist_OwnerHatSetEvent_orderBy =
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

export type BaseSep_BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type BaseSep_Block_height = {
  hash?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

/**  Charecter Sheets Level Eligibility  */
export type BaseSep_CharacterSheetsLevelEligibility = BaseSep_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  hatAdmins: Array<BaseSep_HatAuthority>;
};


/**  Charecter Sheets Level Eligibility  */
export type BaseSep_CharacterSheetsLevelEligibilityhatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatAuthority_filter>;
};

export type BaseSep_CharacterSheetsLevelEligibility_filter = {
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
  hatAdmins_?: InputMaybe<BaseSep_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_CharacterSheetsLevelEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_CharacterSheetsLevelEligibility_filter>>>;
};

export type BaseSep_CharacterSheetsLevelEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'hatAdmins';

/**  CoLinks Eligibility  */
export type BaseSep_CoLinksEligibility = BaseSep_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  threshold: Scalars['BigInt']['output'];
};

export type BaseSep_CoLinksEligibility_filter = {
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_CoLinksEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_CoLinksEligibility_filter>>>;
};

export type BaseSep_CoLinksEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'threshold';

export type BaseSep_ElectionEvent = {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  electionEligibilityInstance: BaseSep_HatsElectionEligibility;
};

export type BaseSep_ElectionEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  electionEligibilityInstance_?: InputMaybe<BaseSep_HatsElectionEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_ElectionEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_ElectionEvent_filter>>>;
};

export type BaseSep_ElectionEvent_orderBy =
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

export type BaseSep_ElectionTerm = {
  id: Scalars['ID']['output'];
  hatsElectionEligibility: BaseSep_HatsElectionEligibility;
  /** first term starts when 'elect' is called, next terms start when 'startNextTerm' is called */
  termStartedAt?: Maybe<Scalars['BigInt']['output']>;
  termEnd: Scalars['BigInt']['output'];
  /** election is completed when 'elect' is called */
  electionCompletedAt?: Maybe<Scalars['BigInt']['output']>;
  electedAccounts?: Maybe<Array<Scalars['String']['output']>>;
};

export type BaseSep_ElectionTerm_filter = {
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
  hatsElectionEligibility_?: InputMaybe<BaseSep_HatsElectionEligibility_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_ElectionTerm_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_ElectionTerm_filter>>>;
};

export type BaseSep_ElectionTerm_orderBy =
  | 'id'
  | 'hatsElectionEligibility'
  | 'hatsElectionEligibility__id'
  | 'hatsElectionEligibility__version'
  | 'hatsElectionEligibility__hatId'
  | 'termStartedAt'
  | 'termEnd'
  | 'electionCompletedAt'
  | 'electedAccounts';

export type BaseSep_Election_ElectionCompletedEvent = BaseSep_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  electionEligibilityInstance: BaseSep_HatsElectionEligibility;
  termEnd: Scalars['BigInt']['output'];
  winners: Array<Scalars['String']['output']>;
};

export type BaseSep_Election_ElectionCompletedEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  electionEligibilityInstance_?: InputMaybe<BaseSep_HatsElectionEligibility_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Election_ElectionCompletedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Election_ElectionCompletedEvent_filter>>>;
};

export type BaseSep_Election_ElectionCompletedEvent_orderBy =
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

export type BaseSep_Election_ElectionOpenedEvent = BaseSep_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  electionEligibilityInstance: BaseSep_HatsElectionEligibility;
  nextTermEnd: Scalars['BigInt']['output'];
};

export type BaseSep_Election_ElectionOpenedEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  electionEligibilityInstance_?: InputMaybe<BaseSep_HatsElectionEligibility_filter>;
  nextTermEnd?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_not?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nextTermEnd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Election_ElectionOpenedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Election_ElectionOpenedEvent_filter>>>;
};

export type BaseSep_Election_ElectionOpenedEvent_orderBy =
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

export type BaseSep_Election_NewTermStartedEvent = BaseSep_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  electionEligibilityInstance: BaseSep_HatsElectionEligibility;
  termEnd: Scalars['BigInt']['output'];
};

export type BaseSep_Election_NewTermStartedEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  electionEligibilityInstance_?: InputMaybe<BaseSep_HatsElectionEligibility_filter>;
  termEnd?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_not?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  termEnd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Election_NewTermStartedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Election_NewTermStartedEvent_filter>>>;
};

export type BaseSep_Election_NewTermStartedEvent_orderBy =
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

export type BaseSep_Election_RecalledEvent = BaseSep_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  electionEligibilityInstance: BaseSep_HatsElectionEligibility;
  termEnd: Scalars['BigInt']['output'];
  accounts: Array<Scalars['String']['output']>;
};

export type BaseSep_Election_RecalledEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  electionEligibilityInstance_?: InputMaybe<BaseSep_HatsElectionEligibility_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Election_RecalledEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Election_RecalledEvent_filter>>>;
};

export type BaseSep_Election_RecalledEvent_orderBy =
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

export type BaseSep_EligibilitiesRuleset = {
  id: Scalars['ID']['output'];
  eligibilitiesChain: BaseSep_HatsEligibilitiesChain;
  modules: Array<BaseSep_HatsModule>;
};


export type BaseSep_EligibilitiesRulesetmodulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsModule_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsModule_filter>;
};

export type BaseSep_EligibilitiesRuleset_filter = {
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
  eligibilitiesChain_?: InputMaybe<BaseSep_HatsEligibilitiesChain_filter>;
  modules?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_not?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_?: InputMaybe<BaseSep_HatsModule_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_EligibilitiesRuleset_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_EligibilitiesRuleset_filter>>>;
};

export type BaseSep_EligibilitiesRuleset_orderBy =
  | 'id'
  | 'eligibilitiesChain'
  | 'eligibilitiesChain__id'
  | 'eligibilitiesChain__version'
  | 'eligibilitiesChain__hatId'
  | 'eligibilitiesChain__numRulesets'
  | 'modules';

/**  Erc1155 Eligibility  */
export type BaseSep_Erc1155Eligibility = BaseSep_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  contractAddress: Scalars['String']['output'];
  tokens: Array<Scalars['BigInt']['output']>;
  minBalances: Array<Scalars['BigInt']['output']>;
};

export type BaseSep_Erc1155Eligibility_filter = {
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Erc1155Eligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Erc1155Eligibility_filter>>>;
};

export type BaseSep_Erc1155Eligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'contractAddress'
  | 'tokens'
  | 'minBalances';

/**  Erc20 Eligibility  */
export type BaseSep_Erc20Eligibility = BaseSep_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  token: Scalars['String']['output'];
  minBalance: Scalars['BigInt']['output'];
};

export type BaseSep_Erc20Eligibility_filter = {
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Erc20Eligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Erc20Eligibility_filter>>>;
};

export type BaseSep_Erc20Eligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'token'
  | 'minBalance';

/**  Erc721 Eligibility  */
export type BaseSep_Erc721Eligibility = BaseSep_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  token: Scalars['String']['output'];
  minBalance: Scalars['BigInt']['output'];
};

export type BaseSep_Erc721Eligibility_filter = {
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Erc721Eligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Erc721Eligibility_filter>>>;
};

export type BaseSep_Erc721Eligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'token'
  | 'minBalance';

/**  Gitcoin Passport Eligibility  */
export type BaseSep_GitcoinPassportEligibility = BaseSep_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  decoder: Scalars['String']['output'];
  scoreCriterion: Scalars['BigInt']['output'];
};

export type BaseSep_GitcoinPassportEligibility_filter = {
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_GitcoinPassportEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_GitcoinPassportEligibility_filter>>>;
};

export type BaseSep_GitcoinPassportEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'decoder'
  | 'scoreCriterion';

export type BaseSep_HatAuthority = {
  id: Scalars['ID']['output'];
  /** pre computed hats account address with a salt value of 1, null only if the hat was not created yet */
  primaryHatsAccount1ofNAddress?: Maybe<Scalars['String']['output']>;
  hatsAccount1ofN: Array<BaseSep_HatsAccount1ofN>;
  hsgOwner: Array<BaseSep_HatsSignerGate>;
  hsgSigner: Array<BaseSep_HatsSignerGate>;
  hsgV2Owner: Array<BaseSep_HatsSignerGateV2>;
  hsgV2Signer: Array<BaseSep_HatsSignerGateV2>;
  jokeraceAdmin: Array<BaseSep_JokeRaceEligibility>;
  allowListOwner: Array<BaseSep_AllowListEligibility>;
  allowListArbitrator: Array<BaseSep_AllowListEligibility>;
  electionsBallotBox: Array<BaseSep_HatsElectionEligibility>;
  electionsAdmin: Array<BaseSep_HatsElectionEligibility>;
  eligibilityTogglePassthrough: Array<BaseSep_PassthroughModule>;
  stakingJudge: Array<BaseSep_StakingEligibility>;
  stakingRecipient: Array<BaseSep_StakingEligibility>;
  stakingHatAdmins: Array<BaseSep_StakingEligibility>;
  seasonHatAdmins: Array<BaseSep_SeasonToggle>;
  characterSheetsLevelHatAdmins: Array<BaseSep_CharacterSheetsLevelEligibility>;
  agreementOwner: Array<BaseSep_AgreementEligibility>;
  agreementArbitrator: Array<BaseSep_AgreementEligibility>;
  baalStakingJudge: Array<BaseSep_HatsStakingShaman>;
  hatsFarcasterDelegatorOwner: Array<BaseSep_HatsFarcasterDelegator>;
  hatsFarcasterDelegatorCaster: Array<BaseSep_HatsFarcasterDelegator>;
};


export type BaseSep_HatAuthorityhatsAccount1ofNArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsAccount1ofN_filter>;
};


export type BaseSep_HatAuthorityhsgOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGate_filter>;
};


export type BaseSep_HatAuthorityhsgSignerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGate_filter>;
};


export type BaseSep_HatAuthorityhsgV2OwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_filter>;
};


export type BaseSep_HatAuthorityhsgV2SignerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_filter>;
};


export type BaseSep_HatAuthorityjokeraceAdminArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_JokeRaceEligibility_filter>;
};


export type BaseSep_HatAuthorityallowListOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_AllowListEligibility_filter>;
};


export type BaseSep_HatAuthorityallowListArbitratorArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_AllowListEligibility_filter>;
};


export type BaseSep_HatAuthorityelectionsBallotBoxArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsElectionEligibility_filter>;
};


export type BaseSep_HatAuthorityelectionsAdminArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsElectionEligibility_filter>;
};


export type BaseSep_HatAuthorityeligibilityTogglePassthroughArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_PassthroughModule_filter>;
};


export type BaseSep_HatAuthoritystakingJudgeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_StakingEligibility_filter>;
};


export type BaseSep_HatAuthoritystakingRecipientArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_StakingEligibility_filter>;
};


export type BaseSep_HatAuthoritystakingHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_StakingEligibility_filter>;
};


export type BaseSep_HatAuthorityseasonHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_SeasonToggle_filter>;
};


export type BaseSep_HatAuthoritycharacterSheetsLevelHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_CharacterSheetsLevelEligibility_filter>;
};


export type BaseSep_HatAuthorityagreementOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_AgreementEligibility_filter>;
};


export type BaseSep_HatAuthorityagreementArbitratorArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_AgreementEligibility_filter>;
};


export type BaseSep_HatAuthoritybaalStakingJudgeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsStakingShaman_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsStakingShaman_filter>;
};


export type BaseSep_HatAuthorityhatsFarcasterDelegatorOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsFarcasterDelegator_filter>;
};


export type BaseSep_HatAuthorityhatsFarcasterDelegatorCasterArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsFarcasterDelegator_filter>;
};

export type BaseSep_HatAuthority_filter = {
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
  hatsAccount1ofN_?: InputMaybe<BaseSep_HatsAccount1ofN_filter>;
  hsgOwner_?: InputMaybe<BaseSep_HatsSignerGate_filter>;
  hsgSigner_?: InputMaybe<BaseSep_HatsSignerGate_filter>;
  hsgV2Owner_?: InputMaybe<BaseSep_HatsSignerGateV2_filter>;
  hsgV2Signer_?: InputMaybe<BaseSep_HatsSignerGateV2_filter>;
  jokeraceAdmin_?: InputMaybe<BaseSep_JokeRaceEligibility_filter>;
  allowListOwner_?: InputMaybe<BaseSep_AllowListEligibility_filter>;
  allowListArbitrator_?: InputMaybe<BaseSep_AllowListEligibility_filter>;
  electionsBallotBox_?: InputMaybe<BaseSep_HatsElectionEligibility_filter>;
  electionsAdmin_?: InputMaybe<BaseSep_HatsElectionEligibility_filter>;
  eligibilityTogglePassthrough_?: InputMaybe<BaseSep_PassthroughModule_filter>;
  stakingJudge_?: InputMaybe<BaseSep_StakingEligibility_filter>;
  stakingRecipient_?: InputMaybe<BaseSep_StakingEligibility_filter>;
  stakingHatAdmins_?: InputMaybe<BaseSep_StakingEligibility_filter>;
  seasonHatAdmins_?: InputMaybe<BaseSep_SeasonToggle_filter>;
  characterSheetsLevelHatAdmins_?: InputMaybe<BaseSep_CharacterSheetsLevelEligibility_filter>;
  agreementOwner_?: InputMaybe<BaseSep_AgreementEligibility_filter>;
  agreementArbitrator_?: InputMaybe<BaseSep_AgreementEligibility_filter>;
  baalStakingJudge_?: InputMaybe<BaseSep_HatsStakingShaman_filter>;
  hatsFarcasterDelegatorOwner_?: InputMaybe<BaseSep_HatsFarcasterDelegator_filter>;
  hatsFarcasterDelegatorCaster_?: InputMaybe<BaseSep_HatsFarcasterDelegator_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatAuthority_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatAuthority_filter>>>;
};

export type BaseSep_HatAuthority_orderBy =
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
export type BaseSep_HatControlledModule = BaseSep_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  controllerHatId: Scalars['String']['output'];
  wearersStatusData: Array<BaseSep_HatControlledModuleWearerStatus>;
  hatsStatusData: Array<BaseSep_HatControlledModuleHatStatus>;
  events: Array<BaseSep_HatControlledModuleEvent>;
};


/**  Hat Controlled Module  */
export type BaseSep_HatControlledModulewearersStatusDataArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatControlledModuleWearerStatus_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatControlledModuleWearerStatus_filter>;
};


/**  Hat Controlled Module  */
export type BaseSep_HatControlledModulehatsStatusDataArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatControlledModuleHatStatus_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatControlledModuleHatStatus_filter>;
};


/**  Hat Controlled Module  */
export type BaseSep_HatControlledModuleeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatControlledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatControlledModuleEvent_filter>;
};

export type BaseSep_HatControlledModuleEvent = {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  hatControlledModuleInstance: BaseSep_HatControlledModule;
};

export type BaseSep_HatControlledModuleEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  hatControlledModuleInstance_?: InputMaybe<BaseSep_HatControlledModule_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatControlledModuleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatControlledModuleEvent_filter>>>;
};

export type BaseSep_HatControlledModuleEvent_orderBy =
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

export type BaseSep_HatControlledModuleHatStatus = {
  id: Scalars['ID']['output'];
  hatControlledModule: BaseSep_HatControlledModule;
  hatId: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
};

export type BaseSep_HatControlledModuleHatStatus_filter = {
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
  hatControlledModule_?: InputMaybe<BaseSep_HatControlledModule_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatControlledModuleHatStatus_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatControlledModuleHatStatus_filter>>>;
};

export type BaseSep_HatControlledModuleHatStatus_orderBy =
  | 'id'
  | 'hatControlledModule'
  | 'hatControlledModule__id'
  | 'hatControlledModule__version'
  | 'hatControlledModule__hatId'
  | 'hatControlledModule__controllerHatId'
  | 'hatId'
  | 'active';

export type BaseSep_HatControlledModuleWearerStatus = {
  id: Scalars['ID']['output'];
  hatControlledModule: BaseSep_HatControlledModule;
  hatId: Scalars['String']['output'];
  wearer: Scalars['String']['output'];
  eligible: Scalars['Boolean']['output'];
  standing: Scalars['Boolean']['output'];
};

export type BaseSep_HatControlledModuleWearerStatus_filter = {
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
  hatControlledModule_?: InputMaybe<BaseSep_HatControlledModule_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatControlledModuleWearerStatus_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatControlledModuleWearerStatus_filter>>>;
};

export type BaseSep_HatControlledModuleWearerStatus_orderBy =
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

export type BaseSep_HatControlledModule_filter = {
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
  wearersStatusData_?: InputMaybe<BaseSep_HatControlledModuleWearerStatus_filter>;
  hatsStatusData_?: InputMaybe<BaseSep_HatControlledModuleHatStatus_filter>;
  events_?: InputMaybe<BaseSep_HatControlledModuleEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatControlledModule_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatControlledModule_filter>>>;
};

export type BaseSep_HatControlledModule_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'controllerHatId'
  | 'wearersStatusData'
  | 'hatsStatusData'
  | 'events';

export type BaseSep_HatControlled_HatStatusSet = BaseSep_HatControlledModuleEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  hatControlledModuleInstance: BaseSep_HatControlledModule;
  hatId: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
};

export type BaseSep_HatControlled_HatStatusSet_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  hatControlledModuleInstance_?: InputMaybe<BaseSep_HatControlledModule_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatControlled_HatStatusSet_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatControlled_HatStatusSet_filter>>>;
};

export type BaseSep_HatControlled_HatStatusSet_orderBy =
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

export type BaseSep_HatControlled_WearerStatusSet = BaseSep_HatControlledModuleEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  hatControlledModuleInstance: BaseSep_HatControlledModule;
  wearer: Scalars['String']['output'];
  hatId: Scalars['String']['output'];
  eligible: Scalars['Boolean']['output'];
  standing: Scalars['Boolean']['output'];
};

export type BaseSep_HatControlled_WearerStatusSet_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  hatControlledModuleInstance_?: InputMaybe<BaseSep_HatControlledModule_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatControlled_WearerStatusSet_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatControlled_WearerStatusSet_filter>>>;
};

export type BaseSep_HatControlled_WearerStatusSet_orderBy =
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
export type BaseSep_HatWearingEligibility = BaseSep_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  criterionHat: Scalars['String']['output'];
};

export type BaseSep_HatWearingEligibility_filter = {
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatWearingEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatWearingEligibility_filter>>>;
};

export type BaseSep_HatWearingEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'criterionHat';

/** Hats Account 1ofN */
export type BaseSep_HatsAccount1ofN = {
  id: Scalars['ID']['output'];
  accountOfHat: BaseSep_HatAuthority;
  operations: Array<BaseSep_HatsAccount1ofNOperation>;
};


/** Hats Account 1ofN */
export type BaseSep_HatsAccount1ofNoperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsAccount1ofNOperation_filter>;
};

export type BaseSep_HatsAccount1ofNOperation = {
  id: Scalars['ID']['output'];
  hatsAccount: BaseSep_HatsAccount1ofN;
  signer: Scalars['String']['output'];
  to: Scalars['String']['output'];
  value: Scalars['BigInt']['output'];
  callData: Scalars['BaseSep_Bytes']['output'];
  operationType: BaseSep_HatsAccountOperationType;
};

export type BaseSep_HatsAccount1ofNOperation_filter = {
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
  hatsAccount_?: InputMaybe<BaseSep_HatsAccount1ofN_filter>;
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
  callData?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  callData_not?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  callData_gt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  callData_lt?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  callData_gte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  callData_lte?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  callData_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  callData_not_in?: InputMaybe<Array<Scalars['BaseSep_Bytes']['input']>>;
  callData_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  callData_not_contains?: InputMaybe<Scalars['BaseSep_Bytes']['input']>;
  operationType?: InputMaybe<BaseSep_HatsAccountOperationType>;
  operationType_not?: InputMaybe<BaseSep_HatsAccountOperationType>;
  operationType_in?: InputMaybe<Array<BaseSep_HatsAccountOperationType>>;
  operationType_not_in?: InputMaybe<Array<BaseSep_HatsAccountOperationType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatsAccount1ofNOperation_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatsAccount1ofNOperation_filter>>>;
};

export type BaseSep_HatsAccount1ofNOperation_orderBy =
  | 'id'
  | 'hatsAccount'
  | 'hatsAccount__id'
  | 'signer'
  | 'to'
  | 'value'
  | 'callData'
  | 'operationType';

export type BaseSep_HatsAccount1ofN_filter = {
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
  accountOfHat_?: InputMaybe<BaseSep_HatAuthority_filter>;
  operations_?: InputMaybe<BaseSep_HatsAccount1ofNOperation_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatsAccount1ofN_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatsAccount1ofN_filter>>>;
};

export type BaseSep_HatsAccount1ofN_orderBy =
  | 'id'
  | 'accountOfHat'
  | 'accountOfHat__id'
  | 'accountOfHat__primaryHatsAccount1ofNAddress'
  | 'operations';

export type BaseSep_HatsAccountOperationType =
  | 'Call'
  | 'DelegateCall';

/** HatsElection Eligibility */
export type BaseSep_HatsElectionEligibility = BaseSep_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  ballotBoxHat: BaseSep_HatAuthority;
  adminHat: Array<BaseSep_HatAuthority>;
  terms: Array<BaseSep_ElectionTerm>;
  currentTerm?: Maybe<BaseSep_ElectionTerm>;
  events: Array<BaseSep_ElectionEvent>;
};


/** HatsElection Eligibility */
export type BaseSep_HatsElectionEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatAuthority_filter>;
};


/** HatsElection Eligibility */
export type BaseSep_HatsElectionEligibilitytermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_ElectionTerm_filter>;
};


/** HatsElection Eligibility */
export type BaseSep_HatsElectionEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_ElectionEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_ElectionEvent_filter>;
};

export type BaseSep_HatsElectionEligibility_filter = {
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
  ballotBoxHat_?: InputMaybe<BaseSep_HatAuthority_filter>;
  adminHat?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_?: InputMaybe<BaseSep_HatAuthority_filter>;
  terms_?: InputMaybe<BaseSep_ElectionTerm_filter>;
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
  currentTerm_?: InputMaybe<BaseSep_ElectionTerm_filter>;
  events_?: InputMaybe<BaseSep_ElectionEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatsElectionEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatsElectionEligibility_filter>>>;
};

export type BaseSep_HatsElectionEligibility_orderBy =
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
export type BaseSep_HatsEligibilitiesChain = BaseSep_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  rulesets: Array<BaseSep_EligibilitiesRuleset>;
  moduleAddresses: Array<Scalars['String']['output']>;
  numRulesets: Scalars['BigInt']['output'];
};


/**  Chains  */
export type BaseSep_HatsEligibilitiesChainrulesetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_EligibilitiesRuleset_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_EligibilitiesRuleset_filter>;
};

export type BaseSep_HatsEligibilitiesChain_filter = {
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
  rulesets_?: InputMaybe<BaseSep_EligibilitiesRuleset_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatsEligibilitiesChain_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatsEligibilitiesChain_filter>>>;
};

export type BaseSep_HatsEligibilitiesChain_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'rulesets'
  | 'moduleAddresses'
  | 'numRulesets';

/** Farcaster Delegator */
export type BaseSep_HatsFarcasterDelegator = {
  id: Scalars['ID']['output'];
  caster: BaseSep_HatAuthority;
  owner: BaseSep_HatAuthority;
};

export type BaseSep_HatsFarcasterDelegator_filter = {
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
  caster_?: InputMaybe<BaseSep_HatAuthority_filter>;
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
  owner_?: InputMaybe<BaseSep_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatsFarcasterDelegator_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatsFarcasterDelegator_filter>>>;
};

export type BaseSep_HatsFarcasterDelegator_orderBy =
  | 'id'
  | 'caster'
  | 'caster__id'
  | 'caster__primaryHatsAccount1ofNAddress'
  | 'owner'
  | 'owner__id'
  | 'owner__primaryHatsAccount1ofNAddress';

/**  *** Modules ***  */
export type BaseSep_HatsModule = {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
};

export type BaseSep_HatsModuleEvent = {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
};

export type BaseSep_HatsModuleEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatsModuleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatsModuleEvent_filter>>>;
};

export type BaseSep_HatsModuleEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID';

export type BaseSep_HatsModule_filter = {
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatsModule_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatsModule_filter>>>;
};

export type BaseSep_HatsModule_orderBy =
  | 'id'
  | 'version'
  | 'hatId';

/** Hats Signer Gate */
export type BaseSep_HatsSignerGate = {
  id: Scalars['ID']['output'];
  type: BaseSep_HatsSignerGateType;
  ownerHat: BaseSep_HatAuthority;
  signerHats: Array<BaseSep_HatAuthority>;
  safe: Scalars['String']['output'];
  minThreshold: Scalars['BigInt']['output'];
  targetThreshold: Scalars['BigInt']['output'];
  maxSigners: Scalars['BigInt']['output'];
};


/** Hats Signer Gate */
export type BaseSep_HatsSignerGatesignerHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatAuthority_filter>;
};

export type BaseSep_HatsSignerGateType =
  | 'Single'
  | 'Multi';

/** HSG v2 */
export type BaseSep_HatsSignerGateV2 = {
  id: Scalars['ID']['output'];
  ownerHat: BaseSep_HatAuthority;
  signerHats: Array<BaseSep_HatAuthority>;
  safe: Scalars['String']['output'];
  locked: Scalars['Boolean']['output'];
  claimableFor: Scalars['Boolean']['output'];
  implementation: Scalars['String']['output'];
  enabledDelegatecallTargets: Array<Scalars['String']['output']>;
  thresholdType: BaseSep_HatsSignerGateV2ThresholdType;
  minThreshold: Scalars['BigInt']['output'];
  targetThreshold: Scalars['BigInt']['output'];
  guard: Scalars['String']['output'];
  modules: Array<Scalars['String']['output']>;
  events: Array<BaseSep_HatsSignerGateV2Event>;
};


/** HSG v2 */
export type BaseSep_HatsSignerGateV2signerHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatAuthority_filter>;
};


/** HSG v2 */
export type BaseSep_HatsSignerGateV2eventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2Event_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2Event_filter>;
};

export type BaseSep_HatsSignerGateV2Event = {
  id: Scalars['ID']['output'];
  hsg: BaseSep_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
};

export type BaseSep_HatsSignerGateV2Event_filter = {
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
  hsg_?: InputMaybe<BaseSep_HatsSignerGateV2_filter>;
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
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2Event_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2Event_filter>>>;
};

export type BaseSep_HatsSignerGateV2Event_orderBy =
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

export type BaseSep_HatsSignerGateV2ThresholdType =
  | 'ABSOLUTE'
  | 'PROPORTIONAL';

export type BaseSep_HatsSignerGateV2_ChangedGuardEvent = BaseSep_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: BaseSep_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  guard: Scalars['String']['output'];
};

export type BaseSep_HatsSignerGateV2_ChangedGuardEvent_filter = {
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
  hsg_?: InputMaybe<BaseSep_HatsSignerGateV2_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2_ChangedGuardEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2_ChangedGuardEvent_filter>>>;
};

export type BaseSep_HatsSignerGateV2_ChangedGuardEvent_orderBy =
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

export type BaseSep_HatsSignerGateV2_ClaimableForSetEvent = BaseSep_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: BaseSep_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  claimableFor: Scalars['Boolean']['output'];
};

export type BaseSep_HatsSignerGateV2_ClaimableForSetEvent_filter = {
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
  hsg_?: InputMaybe<BaseSep_HatsSignerGateV2_filter>;
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
  claimableFor?: InputMaybe<Scalars['Boolean']['input']>;
  claimableFor_not?: InputMaybe<Scalars['Boolean']['input']>;
  claimableFor_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  claimableFor_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2_ClaimableForSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2_ClaimableForSetEvent_filter>>>;
};

export type BaseSep_HatsSignerGateV2_ClaimableForSetEvent_orderBy =
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

export type BaseSep_HatsSignerGateV2_DelegatecallTargetEnabledEvent = BaseSep_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: BaseSep_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  target: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
};

export type BaseSep_HatsSignerGateV2_DelegatecallTargetEnabledEvent_filter = {
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
  hsg_?: InputMaybe<BaseSep_HatsSignerGateV2_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2_DelegatecallTargetEnabledEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2_DelegatecallTargetEnabledEvent_filter>>>;
};

export type BaseSep_HatsSignerGateV2_DelegatecallTargetEnabledEvent_orderBy =
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

export type BaseSep_HatsSignerGateV2_DetachedEvent = BaseSep_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: BaseSep_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
};

export type BaseSep_HatsSignerGateV2_DetachedEvent_filter = {
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
  hsg_?: InputMaybe<BaseSep_HatsSignerGateV2_filter>;
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
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2_DetachedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2_DetachedEvent_filter>>>;
};

export type BaseSep_HatsSignerGateV2_DetachedEvent_orderBy =
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

export type BaseSep_HatsSignerGateV2_DisabledModuleEvent = BaseSep_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: BaseSep_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  module: Scalars['String']['output'];
};

export type BaseSep_HatsSignerGateV2_DisabledModuleEvent_filter = {
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
  hsg_?: InputMaybe<BaseSep_HatsSignerGateV2_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2_DisabledModuleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2_DisabledModuleEvent_filter>>>;
};

export type BaseSep_HatsSignerGateV2_DisabledModuleEvent_orderBy =
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

export type BaseSep_HatsSignerGateV2_EnabledModuleEvent = BaseSep_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: BaseSep_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  module: Scalars['String']['output'];
};

export type BaseSep_HatsSignerGateV2_EnabledModuleEvent_filter = {
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
  hsg_?: InputMaybe<BaseSep_HatsSignerGateV2_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2_EnabledModuleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2_EnabledModuleEvent_filter>>>;
};

export type BaseSep_HatsSignerGateV2_EnabledModuleEvent_orderBy =
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

export type BaseSep_HatsSignerGateV2_HSGLockedEvent = BaseSep_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: BaseSep_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
};

export type BaseSep_HatsSignerGateV2_HSGLockedEvent_filter = {
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
  hsg_?: InputMaybe<BaseSep_HatsSignerGateV2_filter>;
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
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2_HSGLockedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2_HSGLockedEvent_filter>>>;
};

export type BaseSep_HatsSignerGateV2_HSGLockedEvent_orderBy =
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

export type BaseSep_HatsSignerGateV2_MigratedEvent = BaseSep_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: BaseSep_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  newHsg: Scalars['String']['output'];
};

export type BaseSep_HatsSignerGateV2_MigratedEvent_filter = {
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
  hsg_?: InputMaybe<BaseSep_HatsSignerGateV2_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2_MigratedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2_MigratedEvent_filter>>>;
};

export type BaseSep_HatsSignerGateV2_MigratedEvent_orderBy =
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

export type BaseSep_HatsSignerGateV2_OwnerHatSetEvent = BaseSep_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: BaseSep_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  ownerHat: Scalars['String']['output'];
};

export type BaseSep_HatsSignerGateV2_OwnerHatSetEvent_filter = {
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
  hsg_?: InputMaybe<BaseSep_HatsSignerGateV2_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2_OwnerHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2_OwnerHatSetEvent_filter>>>;
};

export type BaseSep_HatsSignerGateV2_OwnerHatSetEvent_orderBy =
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

export type BaseSep_HatsSignerGateV2_RegisteredEvent = BaseSep_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: BaseSep_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  hatId: Scalars['String']['output'];
  signer: Scalars['String']['output'];
};

export type BaseSep_HatsSignerGateV2_RegisteredEvent_filter = {
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
  hsg_?: InputMaybe<BaseSep_HatsSignerGateV2_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2_RegisteredEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2_RegisteredEvent_filter>>>;
};

export type BaseSep_HatsSignerGateV2_RegisteredEvent_orderBy =
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

export type BaseSep_HatsSignerGateV2_SignerHatsAddedEvent = BaseSep_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: BaseSep_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  newSignerHats: Array<Scalars['String']['output']>;
};

export type BaseSep_HatsSignerGateV2_SignerHatsAddedEvent_filter = {
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
  hsg_?: InputMaybe<BaseSep_HatsSignerGateV2_filter>;
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
  newSignerHats?: InputMaybe<Array<Scalars['String']['input']>>;
  newSignerHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  newSignerHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  newSignerHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  newSignerHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  newSignerHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2_SignerHatsAddedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2_SignerHatsAddedEvent_filter>>>;
};

export type BaseSep_HatsSignerGateV2_SignerHatsAddedEvent_orderBy =
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

export type BaseSep_HatsSignerGateV2_ThresholdConfigSetEvent = BaseSep_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: BaseSep_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  thresholdType: BaseSep_HatsSignerGateV2ThresholdType;
  minThreshold: Scalars['BigInt']['output'];
  targetThreshold: Scalars['BigInt']['output'];
};

export type BaseSep_HatsSignerGateV2_ThresholdConfigSetEvent_filter = {
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
  hsg_?: InputMaybe<BaseSep_HatsSignerGateV2_filter>;
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
  thresholdType?: InputMaybe<BaseSep_HatsSignerGateV2ThresholdType>;
  thresholdType_not?: InputMaybe<BaseSep_HatsSignerGateV2ThresholdType>;
  thresholdType_in?: InputMaybe<Array<BaseSep_HatsSignerGateV2ThresholdType>>;
  thresholdType_not_in?: InputMaybe<Array<BaseSep_HatsSignerGateV2ThresholdType>>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2_ThresholdConfigSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2_ThresholdConfigSetEvent_filter>>>;
};

export type BaseSep_HatsSignerGateV2_ThresholdConfigSetEvent_orderBy =
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

export type BaseSep_HatsSignerGateV2_filter = {
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
  ownerHat_?: InputMaybe<BaseSep_HatAuthority_filter>;
  signerHats?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_?: InputMaybe<BaseSep_HatAuthority_filter>;
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
  thresholdType?: InputMaybe<BaseSep_HatsSignerGateV2ThresholdType>;
  thresholdType_not?: InputMaybe<BaseSep_HatsSignerGateV2ThresholdType>;
  thresholdType_in?: InputMaybe<Array<BaseSep_HatsSignerGateV2ThresholdType>>;
  thresholdType_not_in?: InputMaybe<Array<BaseSep_HatsSignerGateV2ThresholdType>>;
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
  events_?: InputMaybe<BaseSep_HatsSignerGateV2Event_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGateV2_filter>>>;
};

export type BaseSep_HatsSignerGateV2_orderBy =
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

export type BaseSep_HatsSignerGate_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  type?: InputMaybe<BaseSep_HatsSignerGateType>;
  type_not?: InputMaybe<BaseSep_HatsSignerGateType>;
  type_in?: InputMaybe<Array<BaseSep_HatsSignerGateType>>;
  type_not_in?: InputMaybe<Array<BaseSep_HatsSignerGateType>>;
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
  ownerHat_?: InputMaybe<BaseSep_HatAuthority_filter>;
  signerHats?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_?: InputMaybe<BaseSep_HatAuthority_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatsSignerGate_filter>>>;
};

export type BaseSep_HatsSignerGate_orderBy =
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

export type BaseSep_HatsStakingShaman = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  judgeHat: BaseSep_HatAuthority;
  baal: Scalars['String']['output'];
  stakingProxyImpl: Scalars['String']['output'];
  sharesToken: Scalars['String']['output'];
  minStake: Scalars['BigInt']['output'];
  coolDownBuffer: Scalars['BigInt']['output'];
  stakes: Array<BaseSep_ShamanStake>;
};


export type BaseSep_HatsStakingShamanstakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_ShamanStake_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_ShamanStake_filter>;
};

export type BaseSep_HatsStakingShaman_filter = {
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
  judgeHat_?: InputMaybe<BaseSep_HatAuthority_filter>;
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
  stakes_?: InputMaybe<BaseSep_ShamanStake_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_HatsStakingShaman_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_HatsStakingShaman_filter>>>;
};

export type BaseSep_HatsStakingShaman_orderBy =
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
export type BaseSep_JokeRaceEligibility = BaseSep_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  adminHat: Array<BaseSep_HatAuthority>;
  currentTerm?: Maybe<BaseSep_JokeRaceEligibilityTerm>;
  nextTerm?: Maybe<BaseSep_JokeRaceEligibilityTerm>;
  allTerms: Array<BaseSep_JokeRaceEligibilityTerm>;
  events: Array<BaseSep_JokeRaceEvent>;
};


/**  Jokerace Eligibility  */
export type BaseSep_JokeRaceEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatAuthority_filter>;
};


/**  Jokerace Eligibility  */
export type BaseSep_JokeRaceEligibilityallTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_JokeRaceEligibilityTerm_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_JokeRaceEligibilityTerm_filter>;
};


/**  Jokerace Eligibility  */
export type BaseSep_JokeRaceEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_JokeRaceEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_JokeRaceEvent_filter>;
};

export type BaseSep_JokeRaceEligibilityTerm = {
  id: Scalars['ID']['output'];
  jokeRaceEligibility: BaseSep_JokeRaceEligibility;
  termStartedAt?: Maybe<Scalars['BigInt']['output']>;
  termEndsAt: Scalars['BigInt']['output'];
  topK: Scalars['BigInt']['output'];
  transitionPeriod: Scalars['BigInt']['output'];
  contest: Scalars['String']['output'];
  winners?: Maybe<Array<Scalars['String']['output']>>;
};

export type BaseSep_JokeRaceEligibilityTerm_filter = {
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
  jokeRaceEligibility_?: InputMaybe<BaseSep_JokeRaceEligibility_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_JokeRaceEligibilityTerm_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_JokeRaceEligibilityTerm_filter>>>;
};

export type BaseSep_JokeRaceEligibilityTerm_orderBy =
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

export type BaseSep_JokeRaceEligibility_filter = {
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
  adminHat_?: InputMaybe<BaseSep_HatAuthority_filter>;
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
  currentTerm_?: InputMaybe<BaseSep_JokeRaceEligibilityTerm_filter>;
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
  nextTerm_?: InputMaybe<BaseSep_JokeRaceEligibilityTerm_filter>;
  allTerms_?: InputMaybe<BaseSep_JokeRaceEligibilityTerm_filter>;
  events_?: InputMaybe<BaseSep_JokeRaceEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_JokeRaceEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_JokeRaceEligibility_filter>>>;
};

export type BaseSep_JokeRaceEligibility_orderBy =
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

export type BaseSep_JokeRaceEvent = {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  jokeRaceEligibilityInstance: BaseSep_JokeRaceEligibility;
};

export type BaseSep_JokeRaceEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  jokeRaceEligibilityInstance_?: InputMaybe<BaseSep_JokeRaceEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_JokeRaceEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_JokeRaceEvent_filter>>>;
};

export type BaseSep_JokeRaceEvent_orderBy =
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

export type BaseSep_JokeRace_NextTermSetEvent = BaseSep_JokeRaceEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  jokeRaceEligibilityInstance: BaseSep_JokeRaceEligibility;
  newContest: Scalars['String']['output'];
  newTopK: Scalars['BigInt']['output'];
  newTermEnd: Scalars['BigInt']['output'];
  newTransitionPeriod: Scalars['BigInt']['output'];
};

export type BaseSep_JokeRace_NextTermSetEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  jokeRaceEligibilityInstance_?: InputMaybe<BaseSep_JokeRaceEligibility_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_JokeRace_NextTermSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_JokeRace_NextTermSetEvent_filter>>>;
};

export type BaseSep_JokeRace_NextTermSetEvent_orderBy =
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

export type BaseSep_JokeRace_TermStartedEvent = BaseSep_JokeRaceEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  jokeRaceEligibilityInstance: BaseSep_JokeRaceEligibility;
  contest: Scalars['String']['output'];
  topK: Scalars['BigInt']['output'];
  termEnd: Scalars['BigInt']['output'];
  transitionPeriod: Scalars['BigInt']['output'];
};

export type BaseSep_JokeRace_TermStartedEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  jokeRaceEligibilityInstance_?: InputMaybe<BaseSep_JokeRaceEligibility_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_JokeRace_TermStartedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_JokeRace_TermStartedEvent_filter>>>;
};

export type BaseSep_JokeRace_TermStartedEvent_orderBy =
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
export type BaseSep_OrderDirection =
  | 'asc'
  | 'desc';

/**  Passthrough Module  */
export type BaseSep_PassthroughModule = BaseSep_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  passthroughHat: BaseSep_HatAuthority;
};

export type BaseSep_PassthroughModule_filter = {
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
  passthroughHat_?: InputMaybe<BaseSep_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_PassthroughModule_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_PassthroughModule_filter>>>;
};

export type BaseSep_PassthroughModule_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'passthroughHat'
  | 'passthroughHat__id'
  | 'passthroughHat__primaryHatsAccount1ofNAddress';

/**  Public Lock V14 Eligibility  */
export type BaseSep_PublicLockV14Eligibility = BaseSep_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  lock: Scalars['String']['output'];
  referrer: Scalars['String']['output'];
  referrerFeePercentage: Scalars['BigInt']['output'];
};

export type BaseSep_PublicLockV14Eligibility_filter = {
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_PublicLockV14Eligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_PublicLockV14Eligibility_filter>>>;
};

export type BaseSep_PublicLockV14Eligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'lock'
  | 'referrer'
  | 'referrerFeePercentage';

export type Query = {
  BaseSep_hatAuthority?: Maybe<BaseSep_HatAuthority>;
  BaseSep_hatAuthorities: Array<BaseSep_HatAuthority>;
  BaseSep_hatsSignerGate?: Maybe<BaseSep_HatsSignerGate>;
  BaseSep_hatsSignerGates: Array<BaseSep_HatsSignerGate>;
  BaseSep_hatsSignerGateV2?: Maybe<BaseSep_HatsSignerGateV2>;
  BaseSep_hatsSignerGateV2S: Array<BaseSep_HatsSignerGateV2>;
  BaseSep_hatsSignerGateV2OwnerHatSetEvent?: Maybe<BaseSep_HatsSignerGateV2_OwnerHatSetEvent>;
  BaseSep_hatsSignerGateV2OwnerHatSetEvents: Array<BaseSep_HatsSignerGateV2_OwnerHatSetEvent>;
  BaseSep_hatsSignerGateV2SignerHatsAddedEvent?: Maybe<BaseSep_HatsSignerGateV2_SignerHatsAddedEvent>;
  BaseSep_hatsSignerGateV2SignerHatsAddedEvents: Array<BaseSep_HatsSignerGateV2_SignerHatsAddedEvent>;
  BaseSep_hatsSignerGateV2ThresholdConfigSetEvent?: Maybe<BaseSep_HatsSignerGateV2_ThresholdConfigSetEvent>;
  BaseSep_hatsSignerGateV2ThresholdConfigSetEvents: Array<BaseSep_HatsSignerGateV2_ThresholdConfigSetEvent>;
  BaseSep_hatsSignerGateV2HSGLockedEvent?: Maybe<BaseSep_HatsSignerGateV2_HSGLockedEvent>;
  BaseSep_hatsSignerGateV2HSGLockedEvents: Array<BaseSep_HatsSignerGateV2_HSGLockedEvent>;
  BaseSep_hatsSignerGateV2ClaimableForSetEvent?: Maybe<BaseSep_HatsSignerGateV2_ClaimableForSetEvent>;
  BaseSep_hatsSignerGateV2ClaimableForSetEvents: Array<BaseSep_HatsSignerGateV2_ClaimableForSetEvent>;
  BaseSep_hatsSignerGateV2DetachedEvent?: Maybe<BaseSep_HatsSignerGateV2_DetachedEvent>;
  BaseSep_hatsSignerGateV2DetachedEvents: Array<BaseSep_HatsSignerGateV2_DetachedEvent>;
  BaseSep_hatsSignerGateV2MigratedEvent?: Maybe<BaseSep_HatsSignerGateV2_MigratedEvent>;
  BaseSep_hatsSignerGateV2MigratedEvents: Array<BaseSep_HatsSignerGateV2_MigratedEvent>;
  BaseSep_hatsSignerGateV2DelegatecallTargetEnabledEvent?: Maybe<BaseSep_HatsSignerGateV2_DelegatecallTargetEnabledEvent>;
  BaseSep_hatsSignerGateV2DelegatecallTargetEnabledEvents: Array<BaseSep_HatsSignerGateV2_DelegatecallTargetEnabledEvent>;
  BaseSep_hatsSignerGateV2RegisteredEvent?: Maybe<BaseSep_HatsSignerGateV2_RegisteredEvent>;
  BaseSep_hatsSignerGateV2RegisteredEvents: Array<BaseSep_HatsSignerGateV2_RegisteredEvent>;
  BaseSep_hatsSignerGateV2ChangedGuardEvent?: Maybe<BaseSep_HatsSignerGateV2_ChangedGuardEvent>;
  BaseSep_hatsSignerGateV2ChangedGuardEvents: Array<BaseSep_HatsSignerGateV2_ChangedGuardEvent>;
  BaseSep_hatsSignerGateV2EnabledModuleEvent?: Maybe<BaseSep_HatsSignerGateV2_EnabledModuleEvent>;
  BaseSep_hatsSignerGateV2EnabledModuleEvents: Array<BaseSep_HatsSignerGateV2_EnabledModuleEvent>;
  BaseSep_hatsSignerGateV2DisabledModuleEvent?: Maybe<BaseSep_HatsSignerGateV2_DisabledModuleEvent>;
  BaseSep_hatsSignerGateV2DisabledModuleEvents: Array<BaseSep_HatsSignerGateV2_DisabledModuleEvent>;
  BaseSep_hatsAccount1OfN?: Maybe<BaseSep_HatsAccount1ofN>;
  BaseSep_hatsAccount1OfNs: Array<BaseSep_HatsAccount1ofN>;
  BaseSep_hatsAccount1OfNOperation?: Maybe<BaseSep_HatsAccount1ofNOperation>;
  BaseSep_hatsAccount1OfNOperations: Array<BaseSep_HatsAccount1ofNOperation>;
  BaseSep_hatsStakingShaman?: Maybe<BaseSep_HatsStakingShaman>;
  BaseSep_hatsStakingShamans: Array<BaseSep_HatsStakingShaman>;
  BaseSep_shamanStake?: Maybe<BaseSep_ShamanStake>;
  BaseSep_shamanStakes: Array<BaseSep_ShamanStake>;
  BaseSep_hatsFarcasterDelegator?: Maybe<BaseSep_HatsFarcasterDelegator>;
  BaseSep_hatsFarcasterDelegators: Array<BaseSep_HatsFarcasterDelegator>;
  BaseSep_jokeRaceEligibility?: Maybe<BaseSep_JokeRaceEligibility>;
  BaseSep_jokeRaceEligibilities: Array<BaseSep_JokeRaceEligibility>;
  BaseSep_jokeRaceEligibilityTerm?: Maybe<BaseSep_JokeRaceEligibilityTerm>;
  BaseSep_jokeRaceEligibilityTerms: Array<BaseSep_JokeRaceEligibilityTerm>;
  BaseSep_jokeRaceNextTermSetEvent?: Maybe<BaseSep_JokeRace_NextTermSetEvent>;
  BaseSep_jokeRaceNextTermSetEvents: Array<BaseSep_JokeRace_NextTermSetEvent>;
  BaseSep_jokeRaceTermStartedEvent?: Maybe<BaseSep_JokeRace_TermStartedEvent>;
  BaseSep_jokeRaceTermStartedEvents: Array<BaseSep_JokeRace_TermStartedEvent>;
  BaseSep_allowListEligibility?: Maybe<BaseSep_AllowListEligibility>;
  BaseSep_allowListEligibilities: Array<BaseSep_AllowListEligibility>;
  BaseSep_allowListEligibilityData?: Maybe<BaseSep_AllowListEligibilityData>;
  BaseSep_allowListEligibilityDatas: Array<BaseSep_AllowListEligibilityData>;
  BaseSep_allowlistAccountAddedEvent?: Maybe<BaseSep_Allowlist_AccountAddedEvent>;
  BaseSep_allowlistAccountAddedEvents: Array<BaseSep_Allowlist_AccountAddedEvent>;
  BaseSep_allowlistAccountsAddedEvent?: Maybe<BaseSep_Allowlist_AccountsAddedEvent>;
  BaseSep_allowlistAccountsAddedEvents: Array<BaseSep_Allowlist_AccountsAddedEvent>;
  BaseSep_allowlistAccountRemovedEvent?: Maybe<BaseSep_Allowlist_AccountRemovedEvent>;
  BaseSep_allowlistAccountRemovedEvents: Array<BaseSep_Allowlist_AccountRemovedEvent>;
  BaseSep_allowlistAccountsRemovedEvent?: Maybe<BaseSep_Allowlist_AccountsRemovedEvent>;
  BaseSep_allowlistAccountsRemovedEvents: Array<BaseSep_Allowlist_AccountsRemovedEvent>;
  BaseSep_allowlistAccountStandingChangedEvent?: Maybe<BaseSep_Allowlist_AccountStandingChangedEvent>;
  BaseSep_allowlistAccountStandingChangedEvents: Array<BaseSep_Allowlist_AccountStandingChangedEvent>;
  BaseSep_allowlistAccountsStandingChangedEvent?: Maybe<BaseSep_Allowlist_AccountsStandingChangedEvent>;
  BaseSep_allowlistAccountsStandingChangedEvents: Array<BaseSep_Allowlist_AccountsStandingChangedEvent>;
  BaseSep_allowlistOwnerHatSetEvent?: Maybe<BaseSep_Allowlist_OwnerHatSetEvent>;
  BaseSep_allowlistOwnerHatSetEvents: Array<BaseSep_Allowlist_OwnerHatSetEvent>;
  BaseSep_allowlistArbitratorHatSetEvent?: Maybe<BaseSep_Allowlist_ArbitratorHatSetEvent>;
  BaseSep_allowlistArbitratorHatSetEvents: Array<BaseSep_Allowlist_ArbitratorHatSetEvent>;
  BaseSep_hatsElectionEligibility?: Maybe<BaseSep_HatsElectionEligibility>;
  BaseSep_hatsElectionEligibilities: Array<BaseSep_HatsElectionEligibility>;
  BaseSep_electionTerm?: Maybe<BaseSep_ElectionTerm>;
  BaseSep_electionTerms: Array<BaseSep_ElectionTerm>;
  BaseSep_electionElectionOpenedEvent?: Maybe<BaseSep_Election_ElectionOpenedEvent>;
  BaseSep_electionElectionOpenedEvents: Array<BaseSep_Election_ElectionOpenedEvent>;
  BaseSep_electionElectionCompletedEvent?: Maybe<BaseSep_Election_ElectionCompletedEvent>;
  BaseSep_electionElectionCompletedEvents: Array<BaseSep_Election_ElectionCompletedEvent>;
  BaseSep_electionNewTermStartedEvent?: Maybe<BaseSep_Election_NewTermStartedEvent>;
  BaseSep_electionNewTermStartedEvents: Array<BaseSep_Election_NewTermStartedEvent>;
  BaseSep_electionRecalledEvent?: Maybe<BaseSep_Election_RecalledEvent>;
  BaseSep_electionRecalledEvents: Array<BaseSep_Election_RecalledEvent>;
  BaseSep_passthroughModule?: Maybe<BaseSep_PassthroughModule>;
  BaseSep_passthroughModules: Array<BaseSep_PassthroughModule>;
  BaseSep_stakingEligibility?: Maybe<BaseSep_StakingEligibility>;
  BaseSep_stakingEligibilities: Array<BaseSep_StakingEligibility>;
  BaseSep_stake?: Maybe<BaseSep_Stake>;
  BaseSep_stakes: Array<BaseSep_Stake>;
  BaseSep_stakingStakedEvent?: Maybe<BaseSep_Staking_StakedEvent>;
  BaseSep_stakingStakedEvents: Array<BaseSep_Staking_StakedEvent>;
  BaseSep_stakingUnstakeBegunEvent?: Maybe<BaseSep_Staking_UnstakeBegunEvent>;
  BaseSep_stakingUnstakeBegunEvents: Array<BaseSep_Staking_UnstakeBegunEvent>;
  BaseSep_stakingSlashedEvent?: Maybe<BaseSep_Staking_SlashedEvent>;
  BaseSep_stakingSlashedEvents: Array<BaseSep_Staking_SlashedEvent>;
  BaseSep_stakingMinStakeChangedEvent?: Maybe<BaseSep_Staking_MinStakeChangedEvent>;
  BaseSep_stakingMinStakeChangedEvents: Array<BaseSep_Staking_MinStakeChangedEvent>;
  BaseSep_stakingJudgeHatChangedEvent?: Maybe<BaseSep_Staking_JudgeHatChangedEvent>;
  BaseSep_stakingJudgeHatChangedEvents: Array<BaseSep_Staking_JudgeHatChangedEvent>;
  BaseSep_stakingRecipientHatChangedEvent?: Maybe<BaseSep_Staking_RecipientHatChangedEvent>;
  BaseSep_stakingRecipientHatChangedEvents: Array<BaseSep_Staking_RecipientHatChangedEvent>;
  BaseSep_stakingCooldownPeriodChangedEvent?: Maybe<BaseSep_Staking_CooldownPeriodChangedEvent>;
  BaseSep_stakingCooldownPeriodChangedEvents: Array<BaseSep_Staking_CooldownPeriodChangedEvent>;
  BaseSep_stakingForgivenEvent?: Maybe<BaseSep_Staking_ForgivenEvent>;
  BaseSep_stakingForgivenEvents: Array<BaseSep_Staking_ForgivenEvent>;
  BaseSep_seasonToggle?: Maybe<BaseSep_SeasonToggle>;
  BaseSep_seasonToggles: Array<BaseSep_SeasonToggle>;
  BaseSep_characterSheetsLevelEligibility?: Maybe<BaseSep_CharacterSheetsLevelEligibility>;
  BaseSep_characterSheetsLevelEligibilities: Array<BaseSep_CharacterSheetsLevelEligibility>;
  BaseSep_agreementEligibility?: Maybe<BaseSep_AgreementEligibility>;
  BaseSep_agreementEligibilities: Array<BaseSep_AgreementEligibility>;
  BaseSep_agreement?: Maybe<BaseSep_Agreement>;
  BaseSep_agreements: Array<BaseSep_Agreement>;
  BaseSep_agreementHatClaimedWithAgreementEvent?: Maybe<BaseSep_Agreement_HatClaimedWithAgreementEvent>;
  BaseSep_agreementHatClaimedWithAgreementEvents: Array<BaseSep_Agreement_HatClaimedWithAgreementEvent>;
  BaseSep_agreementAgreementSignedEvent?: Maybe<BaseSep_Agreement_AgreementSignedEvent>;
  BaseSep_agreementAgreementSignedEvents: Array<BaseSep_Agreement_AgreementSignedEvent>;
  BaseSep_agreementAgreementSetEvent?: Maybe<BaseSep_Agreement_AgreementSetEvent>;
  BaseSep_agreementAgreementSetEvents: Array<BaseSep_Agreement_AgreementSetEvent>;
  BaseSep_agreementOwnerHatSetEvent?: Maybe<BaseSep_Agreement_OwnerHatSetEvent>;
  BaseSep_agreementOwnerHatSetEvents: Array<BaseSep_Agreement_OwnerHatSetEvent>;
  BaseSep_agreementArbitratorHatSetEvent?: Maybe<BaseSep_Agreement_ArbitratorHatSetEvent>;
  BaseSep_agreementArbitratorHatSetEvents: Array<BaseSep_Agreement_ArbitratorHatSetEvent>;
  BaseSep_agreementRevokedSingleEvent?: Maybe<BaseSep_Agreement_RevokedSingleEvent>;
  BaseSep_agreementRevokedSingleEvents: Array<BaseSep_Agreement_RevokedSingleEvent>;
  BaseSep_agreementRevokedMultipleEvent?: Maybe<BaseSep_Agreement_RevokedMultipleEvent>;
  BaseSep_agreementRevokedMultipleEvents: Array<BaseSep_Agreement_RevokedMultipleEvent>;
  BaseSep_agreementForgivenSingleEvent?: Maybe<BaseSep_Agreement_ForgivenSingleEvent>;
  BaseSep_agreementForgivenSingleEvents: Array<BaseSep_Agreement_ForgivenSingleEvent>;
  BaseSep_agreementForgivenMultipleEvent?: Maybe<BaseSep_Agreement_ForgivenMultipleEvent>;
  BaseSep_agreementForgivenMultipleEvents: Array<BaseSep_Agreement_ForgivenMultipleEvent>;
  BaseSep_erc20Eligibility?: Maybe<BaseSep_Erc20Eligibility>;
  BaseSep_erc20Eligibilities: Array<BaseSep_Erc20Eligibility>;
  BaseSep_erc721Eligibility?: Maybe<BaseSep_Erc721Eligibility>;
  BaseSep_erc721Eligibilities: Array<BaseSep_Erc721Eligibility>;
  BaseSep_erc1155Eligibility?: Maybe<BaseSep_Erc1155Eligibility>;
  BaseSep_erc1155Eligibilities: Array<BaseSep_Erc1155Eligibility>;
  BaseSep_hatWearingEligibility?: Maybe<BaseSep_HatWearingEligibility>;
  BaseSep_hatWearingEligibilities: Array<BaseSep_HatWearingEligibility>;
  BaseSep_gitcoinPassportEligibility?: Maybe<BaseSep_GitcoinPassportEligibility>;
  BaseSep_gitcoinPassportEligibilities: Array<BaseSep_GitcoinPassportEligibility>;
  BaseSep_coLinksEligibility?: Maybe<BaseSep_CoLinksEligibility>;
  BaseSep_coLinksEligibilities: Array<BaseSep_CoLinksEligibility>;
  BaseSep_hatControlledModule?: Maybe<BaseSep_HatControlledModule>;
  BaseSep_hatControlledModules: Array<BaseSep_HatControlledModule>;
  BaseSep_hatControlledModuleWearerStatus?: Maybe<BaseSep_HatControlledModuleWearerStatus>;
  BaseSep_hatControlledModuleWearerStatuses: Array<BaseSep_HatControlledModuleWearerStatus>;
  BaseSep_hatControlledModuleHatStatus?: Maybe<BaseSep_HatControlledModuleHatStatus>;
  BaseSep_hatControlledModuleHatStatuses: Array<BaseSep_HatControlledModuleHatStatus>;
  BaseSep_hatControlledWearerStatusSet?: Maybe<BaseSep_HatControlled_WearerStatusSet>;
  BaseSep_hatControlledWearerStatusSets: Array<BaseSep_HatControlled_WearerStatusSet>;
  BaseSep_hatControlledHatStatusSet?: Maybe<BaseSep_HatControlled_HatStatusSet>;
  BaseSep_hatControlledHatStatusSets: Array<BaseSep_HatControlled_HatStatusSet>;
  BaseSep_publicLockV14Eligibility?: Maybe<BaseSep_PublicLockV14Eligibility>;
  BaseSep_publicLockV14Eligibilities: Array<BaseSep_PublicLockV14Eligibility>;
  BaseSep_hatsEligibilitiesChain?: Maybe<BaseSep_HatsEligibilitiesChain>;
  BaseSep_hatsEligibilitiesChains: Array<BaseSep_HatsEligibilitiesChain>;
  BaseSep_eligibilitiesRuleset?: Maybe<BaseSep_EligibilitiesRuleset>;
  BaseSep_eligibilitiesRulesets: Array<BaseSep_EligibilitiesRuleset>;
  BaseSep_hatsSignerGateV2Event?: Maybe<BaseSep_HatsSignerGateV2Event>;
  BaseSep_hatsSignerGateV2Events: Array<BaseSep_HatsSignerGateV2Event>;
  BaseSep_hatsModule?: Maybe<BaseSep_HatsModule>;
  BaseSep_hatsModules: Array<BaseSep_HatsModule>;
  BaseSep_hatsModuleEvent?: Maybe<BaseSep_HatsModuleEvent>;
  BaseSep_hatsModuleEvents: Array<BaseSep_HatsModuleEvent>;
  BaseSep_jokeRaceEvent?: Maybe<BaseSep_JokeRaceEvent>;
  BaseSep_jokeRaceEvents: Array<BaseSep_JokeRaceEvent>;
  BaseSep_allowlistEvent?: Maybe<BaseSep_AllowlistEvent>;
  BaseSep_allowlistEvents: Array<BaseSep_AllowlistEvent>;
  BaseSep_electionEvent?: Maybe<BaseSep_ElectionEvent>;
  BaseSep_electionEvents: Array<BaseSep_ElectionEvent>;
  BaseSep_stakingEvent?: Maybe<BaseSep_StakingEvent>;
  BaseSep_stakingEvents: Array<BaseSep_StakingEvent>;
  BaseSep_agreementEvent?: Maybe<BaseSep_AgreementEvent>;
  BaseSep_agreementEvents: Array<BaseSep_AgreementEvent>;
  BaseSep_hatControlledModuleEvent?: Maybe<BaseSep_HatControlledModuleEvent>;
  BaseSep_hatControlledModuleEvents: Array<BaseSep_HatControlledModuleEvent>;
  /** Access to subgraph metadata */
  BaseSep__meta?: Maybe<BaseSep__Meta_>;
};


export type QueryBaseSep_hatAuthorityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatAuthoritiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatAuthority_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGate_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2Args = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2SArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2OwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2OwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_OwnerHatSetEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2SignerHatsAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2SignerHatsAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_SignerHatsAddedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_SignerHatsAddedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2ThresholdConfigSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2ThresholdConfigSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_ThresholdConfigSetEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_ThresholdConfigSetEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2HSGLockedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2HSGLockedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_HSGLockedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_HSGLockedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2ClaimableForSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2ClaimableForSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_ClaimableForSetEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_ClaimableForSetEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2DetachedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2DetachedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_DetachedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_DetachedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2MigratedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2MigratedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_MigratedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_MigratedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2DelegatecallTargetEnabledEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2DelegatecallTargetEnabledEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_DelegatecallTargetEnabledEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_DelegatecallTargetEnabledEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2RegisteredEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2RegisteredEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_RegisteredEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_RegisteredEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2ChangedGuardEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2ChangedGuardEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_ChangedGuardEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_ChangedGuardEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2EnabledModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2EnabledModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_EnabledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_EnabledModuleEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2DisabledModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2DisabledModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_DisabledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_DisabledModuleEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsAccount1OfNArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsAccount1OfNsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsAccount1ofN_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsAccount1OfNOperationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsAccount1OfNOperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsAccount1ofNOperation_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsStakingShamanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsStakingShamansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsStakingShaman_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsStakingShaman_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_shamanStakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_shamanStakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_ShamanStake_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_ShamanStake_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsFarcasterDelegatorArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsFarcasterDelegatorsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsFarcasterDelegator_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_jokeRaceEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_jokeRaceEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_JokeRaceEligibility_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_jokeRaceEligibilityTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_jokeRaceEligibilityTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_JokeRaceEligibilityTerm_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_JokeRaceEligibilityTerm_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_jokeRaceNextTermSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_jokeRaceNextTermSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_JokeRace_NextTermSetEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_JokeRace_NextTermSetEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_jokeRaceTermStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_jokeRaceTermStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_JokeRace_TermStartedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_JokeRace_TermStartedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_allowListEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_allowListEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_AllowListEligibility_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_allowListEligibilityDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_allowListEligibilityDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_AllowListEligibilityData_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_AllowListEligibilityData_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_allowlistAccountAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_allowlistAccountAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Allowlist_AccountAddedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Allowlist_AccountAddedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_allowlistAccountsAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_allowlistAccountsAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Allowlist_AccountsAddedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Allowlist_AccountsAddedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_allowlistAccountRemovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_allowlistAccountRemovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Allowlist_AccountRemovedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Allowlist_AccountRemovedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_allowlistAccountsRemovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_allowlistAccountsRemovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Allowlist_AccountsRemovedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Allowlist_AccountsRemovedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_allowlistAccountStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_allowlistAccountStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Allowlist_AccountStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Allowlist_AccountStandingChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_allowlistAccountsStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_allowlistAccountsStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Allowlist_AccountsStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Allowlist_AccountsStandingChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_allowlistOwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_allowlistOwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Allowlist_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Allowlist_OwnerHatSetEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_allowlistArbitratorHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_allowlistArbitratorHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Allowlist_ArbitratorHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Allowlist_ArbitratorHatSetEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsElectionEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsElectionEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsElectionEligibility_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_electionTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_electionTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_ElectionTerm_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_electionElectionOpenedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_electionElectionOpenedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Election_ElectionOpenedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Election_ElectionOpenedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_electionElectionCompletedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_electionElectionCompletedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Election_ElectionCompletedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Election_ElectionCompletedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_electionNewTermStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_electionNewTermStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Election_NewTermStartedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Election_NewTermStartedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_electionRecalledEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_electionRecalledEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Election_RecalledEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Election_RecalledEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_passthroughModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_passthroughModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_PassthroughModule_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_stakingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_stakingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_StakingEligibility_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_stakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_stakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Stake_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Stake_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_stakingStakedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_stakingStakedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Staking_StakedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Staking_StakedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_stakingUnstakeBegunEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_stakingUnstakeBegunEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Staking_UnstakeBegunEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Staking_UnstakeBegunEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_stakingSlashedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_stakingSlashedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Staking_SlashedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Staking_SlashedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_stakingMinStakeChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_stakingMinStakeChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Staking_MinStakeChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Staking_MinStakeChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_stakingJudgeHatChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_stakingJudgeHatChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Staking_JudgeHatChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Staking_JudgeHatChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_stakingRecipientHatChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_stakingRecipientHatChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Staking_RecipientHatChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Staking_RecipientHatChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_stakingCooldownPeriodChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_stakingCooldownPeriodChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Staking_CooldownPeriodChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Staking_CooldownPeriodChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_stakingForgivenEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_stakingForgivenEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Staking_ForgivenEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Staking_ForgivenEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_seasonToggleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_seasonTogglesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_SeasonToggle_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_characterSheetsLevelEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_characterSheetsLevelEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_CharacterSheetsLevelEligibility_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_agreementEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_agreementEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_AgreementEligibility_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_agreementArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_agreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Agreement_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Agreement_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_agreementHatClaimedWithAgreementEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_agreementHatClaimedWithAgreementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Agreement_HatClaimedWithAgreementEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Agreement_HatClaimedWithAgreementEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_agreementAgreementSignedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_agreementAgreementSignedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Agreement_AgreementSignedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Agreement_AgreementSignedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_agreementAgreementSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_agreementAgreementSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Agreement_AgreementSetEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Agreement_AgreementSetEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_agreementOwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_agreementOwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Agreement_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Agreement_OwnerHatSetEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_agreementArbitratorHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_agreementArbitratorHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Agreement_ArbitratorHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Agreement_ArbitratorHatSetEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_agreementRevokedSingleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_agreementRevokedSingleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Agreement_RevokedSingleEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Agreement_RevokedSingleEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_agreementRevokedMultipleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_agreementRevokedMultipleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Agreement_RevokedMultipleEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Agreement_RevokedMultipleEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_agreementForgivenSingleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_agreementForgivenSingleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Agreement_ForgivenSingleEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Agreement_ForgivenSingleEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_agreementForgivenMultipleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_agreementForgivenMultipleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Agreement_ForgivenMultipleEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Agreement_ForgivenMultipleEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_erc20EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_erc20EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Erc20Eligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Erc20Eligibility_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_erc721EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_erc721EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Erc721Eligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Erc721Eligibility_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_erc1155EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_erc1155EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Erc1155Eligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Erc1155Eligibility_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatWearingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatWearingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatWearingEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatWearingEligibility_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_gitcoinPassportEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_gitcoinPassportEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_GitcoinPassportEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_GitcoinPassportEligibility_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_coLinksEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_coLinksEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_CoLinksEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_CoLinksEligibility_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatControlledModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatControlledModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatControlledModule_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatControlledModule_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatControlledModuleWearerStatusArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatControlledModuleWearerStatusesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatControlledModuleWearerStatus_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatControlledModuleWearerStatus_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatControlledModuleHatStatusArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatControlledModuleHatStatusesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatControlledModuleHatStatus_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatControlledModuleHatStatus_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatControlledWearerStatusSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatControlledWearerStatusSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatControlled_WearerStatusSet_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatControlled_WearerStatusSet_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatControlledHatStatusSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatControlledHatStatusSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatControlled_HatStatusSet_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatControlled_HatStatusSet_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_publicLockV14EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_publicLockV14EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_PublicLockV14Eligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_PublicLockV14Eligibility_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsEligibilitiesChainArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsEligibilitiesChainsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsEligibilitiesChain_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsEligibilitiesChain_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_eligibilitiesRulesetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_eligibilitiesRulesetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_EligibilitiesRuleset_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_EligibilitiesRuleset_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2EventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsSignerGateV2EventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2Event_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2Event_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsModule_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsModule_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatsModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsModuleEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsModuleEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_jokeRaceEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_jokeRaceEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_JokeRaceEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_JokeRaceEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_allowlistEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_allowlistEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_AllowlistEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_AllowlistEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_electionEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_electionEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_ElectionEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_ElectionEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_stakingEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_stakingEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_StakingEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_StakingEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_agreementEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_agreementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_AgreementEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_AgreementEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatControlledModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep_hatControlledModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatControlledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatControlledModuleEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type QueryBaseSep__metaArgs = {
  block?: InputMaybe<BaseSep_Block_height>;
};

/**  Season Toggle  */
export type BaseSep_SeasonToggle = BaseSep_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  hatAdmins: Array<BaseSep_HatAuthority>;
};


/**  Season Toggle  */
export type BaseSep_SeasonTogglehatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatAuthority_filter>;
};

export type BaseSep_SeasonToggle_filter = {
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
  hatAdmins_?: InputMaybe<BaseSep_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_SeasonToggle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_SeasonToggle_filter>>>;
};

export type BaseSep_SeasonToggle_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'hatAdmins';

/** Shaman Stake */
export type BaseSep_ShamanStake = {
  id: Scalars['ID']['output'];
  stakingShaman: BaseSep_HatsStakingShaman;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  unstakingAmount: Scalars['BigInt']['output'];
  canUnstakeAfter: Scalars['BigInt']['output'];
};

export type BaseSep_ShamanStake_filter = {
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
  stakingShaman_?: InputMaybe<BaseSep_HatsStakingShaman_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_ShamanStake_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_ShamanStake_filter>>>;
};

export type BaseSep_ShamanStake_orderBy =
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

export type BaseSep_Stake = {
  id: Scalars['ID']['output'];
  stakingEligiblity: BaseSep_StakingEligibility;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  slashed: Scalars['Boolean']['output'];
  cooldownAmount: Scalars['BigInt']['output'];
  cooldownEndsAt: Scalars['BigInt']['output'];
};

export type BaseSep_Stake_filter = {
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
  stakingEligiblity_?: InputMaybe<BaseSep_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Stake_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Stake_filter>>>;
};

export type BaseSep_Stake_orderBy =
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
export type BaseSep_StakingEligibility = BaseSep_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  token: Scalars['String']['output'];
  judgeHat: BaseSep_HatAuthority;
  recipientHat: BaseSep_HatAuthority;
  hatAdmins: Array<BaseSep_HatAuthority>;
  minStake: Scalars['BigInt']['output'];
  cooldownPeriod: Scalars['BigInt']['output'];
  totalSlashedStakes: Scalars['BigInt']['output'];
  stakes: Array<BaseSep_Stake>;
  events: Array<BaseSep_StakingEvent>;
};


/**  Staking Eligibility  */
export type BaseSep_StakingEligibilityhatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatAuthority_filter>;
};


/**  Staking Eligibility  */
export type BaseSep_StakingEligibilitystakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Stake_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Stake_filter>;
};


/**  Staking Eligibility  */
export type BaseSep_StakingEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_StakingEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_StakingEvent_filter>;
};

export type BaseSep_StakingEligibility_filter = {
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
  judgeHat_?: InputMaybe<BaseSep_HatAuthority_filter>;
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
  recipientHat_?: InputMaybe<BaseSep_HatAuthority_filter>;
  hatAdmins?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_?: InputMaybe<BaseSep_HatAuthority_filter>;
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
  stakes_?: InputMaybe<BaseSep_Stake_filter>;
  events_?: InputMaybe<BaseSep_StakingEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_StakingEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_StakingEligibility_filter>>>;
};

export type BaseSep_StakingEligibility_orderBy =
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

export type BaseSep_StakingEvent = {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  stakingEligibilityInstance: BaseSep_StakingEligibility;
};

export type BaseSep_StakingEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  stakingEligibilityInstance_?: InputMaybe<BaseSep_StakingEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_StakingEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_StakingEvent_filter>>>;
};

export type BaseSep_StakingEvent_orderBy =
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

export type BaseSep_Staking_CooldownPeriodChangedEvent = BaseSep_StakingEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  stakingEligibilityInstance: BaseSep_StakingEligibility;
  newDelay: Scalars['BigInt']['output'];
};

export type BaseSep_Staking_CooldownPeriodChangedEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  stakingEligibilityInstance_?: InputMaybe<BaseSep_StakingEligibility_filter>;
  newDelay?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_not?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newDelay_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Staking_CooldownPeriodChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Staking_CooldownPeriodChangedEvent_filter>>>;
};

export type BaseSep_Staking_CooldownPeriodChangedEvent_orderBy =
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

export type BaseSep_Staking_ForgivenEvent = BaseSep_StakingEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  stakingEligibilityInstance: BaseSep_StakingEligibility;
  staker: Scalars['String']['output'];
};

export type BaseSep_Staking_ForgivenEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  stakingEligibilityInstance_?: InputMaybe<BaseSep_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Staking_ForgivenEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Staking_ForgivenEvent_filter>>>;
};

export type BaseSep_Staking_ForgivenEvent_orderBy =
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

export type BaseSep_Staking_JudgeHatChangedEvent = BaseSep_StakingEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  stakingEligibilityInstance: BaseSep_StakingEligibility;
  newJudgeHat: Scalars['String']['output'];
};

export type BaseSep_Staking_JudgeHatChangedEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  stakingEligibilityInstance_?: InputMaybe<BaseSep_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Staking_JudgeHatChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Staking_JudgeHatChangedEvent_filter>>>;
};

export type BaseSep_Staking_JudgeHatChangedEvent_orderBy =
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

export type BaseSep_Staking_MinStakeChangedEvent = BaseSep_StakingEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  stakingEligibilityInstance: BaseSep_StakingEligibility;
  newMinStake: Scalars['BigInt']['output'];
};

export type BaseSep_Staking_MinStakeChangedEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  stakingEligibilityInstance_?: InputMaybe<BaseSep_StakingEligibility_filter>;
  newMinStake?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_not?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newMinStake_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Staking_MinStakeChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Staking_MinStakeChangedEvent_filter>>>;
};

export type BaseSep_Staking_MinStakeChangedEvent_orderBy =
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

export type BaseSep_Staking_RecipientHatChangedEvent = BaseSep_StakingEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  stakingEligibilityInstance: BaseSep_StakingEligibility;
  newRecipientHat: Scalars['String']['output'];
};

export type BaseSep_Staking_RecipientHatChangedEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  stakingEligibilityInstance_?: InputMaybe<BaseSep_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Staking_RecipientHatChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Staking_RecipientHatChangedEvent_filter>>>;
};

export type BaseSep_Staking_RecipientHatChangedEvent_orderBy =
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

export type BaseSep_Staking_SlashedEvent = BaseSep_StakingEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  stakingEligibilityInstance: BaseSep_StakingEligibility;
  wearer: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
};

export type BaseSep_Staking_SlashedEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  stakingEligibilityInstance_?: InputMaybe<BaseSep_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Staking_SlashedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Staking_SlashedEvent_filter>>>;
};

export type BaseSep_Staking_SlashedEvent_orderBy =
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

export type BaseSep_Staking_StakedEvent = BaseSep_StakingEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  stakingEligibilityInstance: BaseSep_StakingEligibility;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
};

export type BaseSep_Staking_StakedEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  stakingEligibilityInstance_?: InputMaybe<BaseSep_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Staking_StakedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Staking_StakedEvent_filter>>>;
};

export type BaseSep_Staking_StakedEvent_orderBy =
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

export type BaseSep_Staking_UnstakeBegunEvent = BaseSep_StakingEvent & {
  id: Scalars['ID']['output'];
  module: BaseSep_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['BaseSep_Bytes']['output'];
  stakingEligibilityInstance: BaseSep_StakingEligibility;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  cooldownEnd: Scalars['BigInt']['output'];
};

export type BaseSep_Staking_UnstakeBegunEvent_filter = {
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
  module_?: InputMaybe<BaseSep_HatsModule_filter>;
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
  stakingEligibilityInstance_?: InputMaybe<BaseSep_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<BaseSep_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseSep_Staking_UnstakeBegunEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BaseSep_Staking_UnstakeBegunEvent_filter>>>;
};

export type BaseSep_Staking_UnstakeBegunEvent_orderBy =
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
  BaseSep_hatAuthority?: Maybe<BaseSep_HatAuthority>;
  BaseSep_hatAuthorities: Array<BaseSep_HatAuthority>;
  BaseSep_hatsSignerGate?: Maybe<BaseSep_HatsSignerGate>;
  BaseSep_hatsSignerGates: Array<BaseSep_HatsSignerGate>;
  BaseSep_hatsSignerGateV2?: Maybe<BaseSep_HatsSignerGateV2>;
  BaseSep_hatsSignerGateV2S: Array<BaseSep_HatsSignerGateV2>;
  BaseSep_hatsSignerGateV2OwnerHatSetEvent?: Maybe<BaseSep_HatsSignerGateV2_OwnerHatSetEvent>;
  BaseSep_hatsSignerGateV2OwnerHatSetEvents: Array<BaseSep_HatsSignerGateV2_OwnerHatSetEvent>;
  BaseSep_hatsSignerGateV2SignerHatsAddedEvent?: Maybe<BaseSep_HatsSignerGateV2_SignerHatsAddedEvent>;
  BaseSep_hatsSignerGateV2SignerHatsAddedEvents: Array<BaseSep_HatsSignerGateV2_SignerHatsAddedEvent>;
  BaseSep_hatsSignerGateV2ThresholdConfigSetEvent?: Maybe<BaseSep_HatsSignerGateV2_ThresholdConfigSetEvent>;
  BaseSep_hatsSignerGateV2ThresholdConfigSetEvents: Array<BaseSep_HatsSignerGateV2_ThresholdConfigSetEvent>;
  BaseSep_hatsSignerGateV2HSGLockedEvent?: Maybe<BaseSep_HatsSignerGateV2_HSGLockedEvent>;
  BaseSep_hatsSignerGateV2HSGLockedEvents: Array<BaseSep_HatsSignerGateV2_HSGLockedEvent>;
  BaseSep_hatsSignerGateV2ClaimableForSetEvent?: Maybe<BaseSep_HatsSignerGateV2_ClaimableForSetEvent>;
  BaseSep_hatsSignerGateV2ClaimableForSetEvents: Array<BaseSep_HatsSignerGateV2_ClaimableForSetEvent>;
  BaseSep_hatsSignerGateV2DetachedEvent?: Maybe<BaseSep_HatsSignerGateV2_DetachedEvent>;
  BaseSep_hatsSignerGateV2DetachedEvents: Array<BaseSep_HatsSignerGateV2_DetachedEvent>;
  BaseSep_hatsSignerGateV2MigratedEvent?: Maybe<BaseSep_HatsSignerGateV2_MigratedEvent>;
  BaseSep_hatsSignerGateV2MigratedEvents: Array<BaseSep_HatsSignerGateV2_MigratedEvent>;
  BaseSep_hatsSignerGateV2DelegatecallTargetEnabledEvent?: Maybe<BaseSep_HatsSignerGateV2_DelegatecallTargetEnabledEvent>;
  BaseSep_hatsSignerGateV2DelegatecallTargetEnabledEvents: Array<BaseSep_HatsSignerGateV2_DelegatecallTargetEnabledEvent>;
  BaseSep_hatsSignerGateV2RegisteredEvent?: Maybe<BaseSep_HatsSignerGateV2_RegisteredEvent>;
  BaseSep_hatsSignerGateV2RegisteredEvents: Array<BaseSep_HatsSignerGateV2_RegisteredEvent>;
  BaseSep_hatsSignerGateV2ChangedGuardEvent?: Maybe<BaseSep_HatsSignerGateV2_ChangedGuardEvent>;
  BaseSep_hatsSignerGateV2ChangedGuardEvents: Array<BaseSep_HatsSignerGateV2_ChangedGuardEvent>;
  BaseSep_hatsSignerGateV2EnabledModuleEvent?: Maybe<BaseSep_HatsSignerGateV2_EnabledModuleEvent>;
  BaseSep_hatsSignerGateV2EnabledModuleEvents: Array<BaseSep_HatsSignerGateV2_EnabledModuleEvent>;
  BaseSep_hatsSignerGateV2DisabledModuleEvent?: Maybe<BaseSep_HatsSignerGateV2_DisabledModuleEvent>;
  BaseSep_hatsSignerGateV2DisabledModuleEvents: Array<BaseSep_HatsSignerGateV2_DisabledModuleEvent>;
  BaseSep_hatsAccount1OfN?: Maybe<BaseSep_HatsAccount1ofN>;
  BaseSep_hatsAccount1OfNs: Array<BaseSep_HatsAccount1ofN>;
  BaseSep_hatsAccount1OfNOperation?: Maybe<BaseSep_HatsAccount1ofNOperation>;
  BaseSep_hatsAccount1OfNOperations: Array<BaseSep_HatsAccount1ofNOperation>;
  BaseSep_hatsStakingShaman?: Maybe<BaseSep_HatsStakingShaman>;
  BaseSep_hatsStakingShamans: Array<BaseSep_HatsStakingShaman>;
  BaseSep_shamanStake?: Maybe<BaseSep_ShamanStake>;
  BaseSep_shamanStakes: Array<BaseSep_ShamanStake>;
  BaseSep_hatsFarcasterDelegator?: Maybe<BaseSep_HatsFarcasterDelegator>;
  BaseSep_hatsFarcasterDelegators: Array<BaseSep_HatsFarcasterDelegator>;
  BaseSep_jokeRaceEligibility?: Maybe<BaseSep_JokeRaceEligibility>;
  BaseSep_jokeRaceEligibilities: Array<BaseSep_JokeRaceEligibility>;
  BaseSep_jokeRaceEligibilityTerm?: Maybe<BaseSep_JokeRaceEligibilityTerm>;
  BaseSep_jokeRaceEligibilityTerms: Array<BaseSep_JokeRaceEligibilityTerm>;
  BaseSep_jokeRaceNextTermSetEvent?: Maybe<BaseSep_JokeRace_NextTermSetEvent>;
  BaseSep_jokeRaceNextTermSetEvents: Array<BaseSep_JokeRace_NextTermSetEvent>;
  BaseSep_jokeRaceTermStartedEvent?: Maybe<BaseSep_JokeRace_TermStartedEvent>;
  BaseSep_jokeRaceTermStartedEvents: Array<BaseSep_JokeRace_TermStartedEvent>;
  BaseSep_allowListEligibility?: Maybe<BaseSep_AllowListEligibility>;
  BaseSep_allowListEligibilities: Array<BaseSep_AllowListEligibility>;
  BaseSep_allowListEligibilityData?: Maybe<BaseSep_AllowListEligibilityData>;
  BaseSep_allowListEligibilityDatas: Array<BaseSep_AllowListEligibilityData>;
  BaseSep_allowlistAccountAddedEvent?: Maybe<BaseSep_Allowlist_AccountAddedEvent>;
  BaseSep_allowlistAccountAddedEvents: Array<BaseSep_Allowlist_AccountAddedEvent>;
  BaseSep_allowlistAccountsAddedEvent?: Maybe<BaseSep_Allowlist_AccountsAddedEvent>;
  BaseSep_allowlistAccountsAddedEvents: Array<BaseSep_Allowlist_AccountsAddedEvent>;
  BaseSep_allowlistAccountRemovedEvent?: Maybe<BaseSep_Allowlist_AccountRemovedEvent>;
  BaseSep_allowlistAccountRemovedEvents: Array<BaseSep_Allowlist_AccountRemovedEvent>;
  BaseSep_allowlistAccountsRemovedEvent?: Maybe<BaseSep_Allowlist_AccountsRemovedEvent>;
  BaseSep_allowlistAccountsRemovedEvents: Array<BaseSep_Allowlist_AccountsRemovedEvent>;
  BaseSep_allowlistAccountStandingChangedEvent?: Maybe<BaseSep_Allowlist_AccountStandingChangedEvent>;
  BaseSep_allowlistAccountStandingChangedEvents: Array<BaseSep_Allowlist_AccountStandingChangedEvent>;
  BaseSep_allowlistAccountsStandingChangedEvent?: Maybe<BaseSep_Allowlist_AccountsStandingChangedEvent>;
  BaseSep_allowlistAccountsStandingChangedEvents: Array<BaseSep_Allowlist_AccountsStandingChangedEvent>;
  BaseSep_allowlistOwnerHatSetEvent?: Maybe<BaseSep_Allowlist_OwnerHatSetEvent>;
  BaseSep_allowlistOwnerHatSetEvents: Array<BaseSep_Allowlist_OwnerHatSetEvent>;
  BaseSep_allowlistArbitratorHatSetEvent?: Maybe<BaseSep_Allowlist_ArbitratorHatSetEvent>;
  BaseSep_allowlistArbitratorHatSetEvents: Array<BaseSep_Allowlist_ArbitratorHatSetEvent>;
  BaseSep_hatsElectionEligibility?: Maybe<BaseSep_HatsElectionEligibility>;
  BaseSep_hatsElectionEligibilities: Array<BaseSep_HatsElectionEligibility>;
  BaseSep_electionTerm?: Maybe<BaseSep_ElectionTerm>;
  BaseSep_electionTerms: Array<BaseSep_ElectionTerm>;
  BaseSep_electionElectionOpenedEvent?: Maybe<BaseSep_Election_ElectionOpenedEvent>;
  BaseSep_electionElectionOpenedEvents: Array<BaseSep_Election_ElectionOpenedEvent>;
  BaseSep_electionElectionCompletedEvent?: Maybe<BaseSep_Election_ElectionCompletedEvent>;
  BaseSep_electionElectionCompletedEvents: Array<BaseSep_Election_ElectionCompletedEvent>;
  BaseSep_electionNewTermStartedEvent?: Maybe<BaseSep_Election_NewTermStartedEvent>;
  BaseSep_electionNewTermStartedEvents: Array<BaseSep_Election_NewTermStartedEvent>;
  BaseSep_electionRecalledEvent?: Maybe<BaseSep_Election_RecalledEvent>;
  BaseSep_electionRecalledEvents: Array<BaseSep_Election_RecalledEvent>;
  BaseSep_passthroughModule?: Maybe<BaseSep_PassthroughModule>;
  BaseSep_passthroughModules: Array<BaseSep_PassthroughModule>;
  BaseSep_stakingEligibility?: Maybe<BaseSep_StakingEligibility>;
  BaseSep_stakingEligibilities: Array<BaseSep_StakingEligibility>;
  BaseSep_stake?: Maybe<BaseSep_Stake>;
  BaseSep_stakes: Array<BaseSep_Stake>;
  BaseSep_stakingStakedEvent?: Maybe<BaseSep_Staking_StakedEvent>;
  BaseSep_stakingStakedEvents: Array<BaseSep_Staking_StakedEvent>;
  BaseSep_stakingUnstakeBegunEvent?: Maybe<BaseSep_Staking_UnstakeBegunEvent>;
  BaseSep_stakingUnstakeBegunEvents: Array<BaseSep_Staking_UnstakeBegunEvent>;
  BaseSep_stakingSlashedEvent?: Maybe<BaseSep_Staking_SlashedEvent>;
  BaseSep_stakingSlashedEvents: Array<BaseSep_Staking_SlashedEvent>;
  BaseSep_stakingMinStakeChangedEvent?: Maybe<BaseSep_Staking_MinStakeChangedEvent>;
  BaseSep_stakingMinStakeChangedEvents: Array<BaseSep_Staking_MinStakeChangedEvent>;
  BaseSep_stakingJudgeHatChangedEvent?: Maybe<BaseSep_Staking_JudgeHatChangedEvent>;
  BaseSep_stakingJudgeHatChangedEvents: Array<BaseSep_Staking_JudgeHatChangedEvent>;
  BaseSep_stakingRecipientHatChangedEvent?: Maybe<BaseSep_Staking_RecipientHatChangedEvent>;
  BaseSep_stakingRecipientHatChangedEvents: Array<BaseSep_Staking_RecipientHatChangedEvent>;
  BaseSep_stakingCooldownPeriodChangedEvent?: Maybe<BaseSep_Staking_CooldownPeriodChangedEvent>;
  BaseSep_stakingCooldownPeriodChangedEvents: Array<BaseSep_Staking_CooldownPeriodChangedEvent>;
  BaseSep_stakingForgivenEvent?: Maybe<BaseSep_Staking_ForgivenEvent>;
  BaseSep_stakingForgivenEvents: Array<BaseSep_Staking_ForgivenEvent>;
  BaseSep_seasonToggle?: Maybe<BaseSep_SeasonToggle>;
  BaseSep_seasonToggles: Array<BaseSep_SeasonToggle>;
  BaseSep_characterSheetsLevelEligibility?: Maybe<BaseSep_CharacterSheetsLevelEligibility>;
  BaseSep_characterSheetsLevelEligibilities: Array<BaseSep_CharacterSheetsLevelEligibility>;
  BaseSep_agreementEligibility?: Maybe<BaseSep_AgreementEligibility>;
  BaseSep_agreementEligibilities: Array<BaseSep_AgreementEligibility>;
  BaseSep_agreement?: Maybe<BaseSep_Agreement>;
  BaseSep_agreements: Array<BaseSep_Agreement>;
  BaseSep_agreementHatClaimedWithAgreementEvent?: Maybe<BaseSep_Agreement_HatClaimedWithAgreementEvent>;
  BaseSep_agreementHatClaimedWithAgreementEvents: Array<BaseSep_Agreement_HatClaimedWithAgreementEvent>;
  BaseSep_agreementAgreementSignedEvent?: Maybe<BaseSep_Agreement_AgreementSignedEvent>;
  BaseSep_agreementAgreementSignedEvents: Array<BaseSep_Agreement_AgreementSignedEvent>;
  BaseSep_agreementAgreementSetEvent?: Maybe<BaseSep_Agreement_AgreementSetEvent>;
  BaseSep_agreementAgreementSetEvents: Array<BaseSep_Agreement_AgreementSetEvent>;
  BaseSep_agreementOwnerHatSetEvent?: Maybe<BaseSep_Agreement_OwnerHatSetEvent>;
  BaseSep_agreementOwnerHatSetEvents: Array<BaseSep_Agreement_OwnerHatSetEvent>;
  BaseSep_agreementArbitratorHatSetEvent?: Maybe<BaseSep_Agreement_ArbitratorHatSetEvent>;
  BaseSep_agreementArbitratorHatSetEvents: Array<BaseSep_Agreement_ArbitratorHatSetEvent>;
  BaseSep_agreementRevokedSingleEvent?: Maybe<BaseSep_Agreement_RevokedSingleEvent>;
  BaseSep_agreementRevokedSingleEvents: Array<BaseSep_Agreement_RevokedSingleEvent>;
  BaseSep_agreementRevokedMultipleEvent?: Maybe<BaseSep_Agreement_RevokedMultipleEvent>;
  BaseSep_agreementRevokedMultipleEvents: Array<BaseSep_Agreement_RevokedMultipleEvent>;
  BaseSep_agreementForgivenSingleEvent?: Maybe<BaseSep_Agreement_ForgivenSingleEvent>;
  BaseSep_agreementForgivenSingleEvents: Array<BaseSep_Agreement_ForgivenSingleEvent>;
  BaseSep_agreementForgivenMultipleEvent?: Maybe<BaseSep_Agreement_ForgivenMultipleEvent>;
  BaseSep_agreementForgivenMultipleEvents: Array<BaseSep_Agreement_ForgivenMultipleEvent>;
  BaseSep_erc20Eligibility?: Maybe<BaseSep_Erc20Eligibility>;
  BaseSep_erc20Eligibilities: Array<BaseSep_Erc20Eligibility>;
  BaseSep_erc721Eligibility?: Maybe<BaseSep_Erc721Eligibility>;
  BaseSep_erc721Eligibilities: Array<BaseSep_Erc721Eligibility>;
  BaseSep_erc1155Eligibility?: Maybe<BaseSep_Erc1155Eligibility>;
  BaseSep_erc1155Eligibilities: Array<BaseSep_Erc1155Eligibility>;
  BaseSep_hatWearingEligibility?: Maybe<BaseSep_HatWearingEligibility>;
  BaseSep_hatWearingEligibilities: Array<BaseSep_HatWearingEligibility>;
  BaseSep_gitcoinPassportEligibility?: Maybe<BaseSep_GitcoinPassportEligibility>;
  BaseSep_gitcoinPassportEligibilities: Array<BaseSep_GitcoinPassportEligibility>;
  BaseSep_coLinksEligibility?: Maybe<BaseSep_CoLinksEligibility>;
  BaseSep_coLinksEligibilities: Array<BaseSep_CoLinksEligibility>;
  BaseSep_hatControlledModule?: Maybe<BaseSep_HatControlledModule>;
  BaseSep_hatControlledModules: Array<BaseSep_HatControlledModule>;
  BaseSep_hatControlledModuleWearerStatus?: Maybe<BaseSep_HatControlledModuleWearerStatus>;
  BaseSep_hatControlledModuleWearerStatuses: Array<BaseSep_HatControlledModuleWearerStatus>;
  BaseSep_hatControlledModuleHatStatus?: Maybe<BaseSep_HatControlledModuleHatStatus>;
  BaseSep_hatControlledModuleHatStatuses: Array<BaseSep_HatControlledModuleHatStatus>;
  BaseSep_hatControlledWearerStatusSet?: Maybe<BaseSep_HatControlled_WearerStatusSet>;
  BaseSep_hatControlledWearerStatusSets: Array<BaseSep_HatControlled_WearerStatusSet>;
  BaseSep_hatControlledHatStatusSet?: Maybe<BaseSep_HatControlled_HatStatusSet>;
  BaseSep_hatControlledHatStatusSets: Array<BaseSep_HatControlled_HatStatusSet>;
  BaseSep_publicLockV14Eligibility?: Maybe<BaseSep_PublicLockV14Eligibility>;
  BaseSep_publicLockV14Eligibilities: Array<BaseSep_PublicLockV14Eligibility>;
  BaseSep_hatsEligibilitiesChain?: Maybe<BaseSep_HatsEligibilitiesChain>;
  BaseSep_hatsEligibilitiesChains: Array<BaseSep_HatsEligibilitiesChain>;
  BaseSep_eligibilitiesRuleset?: Maybe<BaseSep_EligibilitiesRuleset>;
  BaseSep_eligibilitiesRulesets: Array<BaseSep_EligibilitiesRuleset>;
  BaseSep_hatsSignerGateV2Event?: Maybe<BaseSep_HatsSignerGateV2Event>;
  BaseSep_hatsSignerGateV2Events: Array<BaseSep_HatsSignerGateV2Event>;
  BaseSep_hatsModule?: Maybe<BaseSep_HatsModule>;
  BaseSep_hatsModules: Array<BaseSep_HatsModule>;
  BaseSep_hatsModuleEvent?: Maybe<BaseSep_HatsModuleEvent>;
  BaseSep_hatsModuleEvents: Array<BaseSep_HatsModuleEvent>;
  BaseSep_jokeRaceEvent?: Maybe<BaseSep_JokeRaceEvent>;
  BaseSep_jokeRaceEvents: Array<BaseSep_JokeRaceEvent>;
  BaseSep_allowlistEvent?: Maybe<BaseSep_AllowlistEvent>;
  BaseSep_allowlistEvents: Array<BaseSep_AllowlistEvent>;
  BaseSep_electionEvent?: Maybe<BaseSep_ElectionEvent>;
  BaseSep_electionEvents: Array<BaseSep_ElectionEvent>;
  BaseSep_stakingEvent?: Maybe<BaseSep_StakingEvent>;
  BaseSep_stakingEvents: Array<BaseSep_StakingEvent>;
  BaseSep_agreementEvent?: Maybe<BaseSep_AgreementEvent>;
  BaseSep_agreementEvents: Array<BaseSep_AgreementEvent>;
  BaseSep_hatControlledModuleEvent?: Maybe<BaseSep_HatControlledModuleEvent>;
  BaseSep_hatControlledModuleEvents: Array<BaseSep_HatControlledModuleEvent>;
  /** Access to subgraph metadata */
  BaseSep__meta?: Maybe<BaseSep__Meta_>;
};


export type SubscriptionBaseSep_hatAuthorityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatAuthoritiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatAuthority_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGate_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2Args = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2SArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2OwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2OwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_OwnerHatSetEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2SignerHatsAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2SignerHatsAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_SignerHatsAddedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_SignerHatsAddedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2ThresholdConfigSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2ThresholdConfigSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_ThresholdConfigSetEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_ThresholdConfigSetEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2HSGLockedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2HSGLockedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_HSGLockedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_HSGLockedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2ClaimableForSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2ClaimableForSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_ClaimableForSetEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_ClaimableForSetEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2DetachedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2DetachedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_DetachedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_DetachedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2MigratedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2MigratedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_MigratedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_MigratedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2DelegatecallTargetEnabledEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2DelegatecallTargetEnabledEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_DelegatecallTargetEnabledEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_DelegatecallTargetEnabledEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2RegisteredEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2RegisteredEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_RegisteredEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_RegisteredEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2ChangedGuardEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2ChangedGuardEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_ChangedGuardEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_ChangedGuardEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2EnabledModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2EnabledModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_EnabledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_EnabledModuleEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2DisabledModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2DisabledModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2_DisabledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2_DisabledModuleEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsAccount1OfNArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsAccount1OfNsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsAccount1ofN_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsAccount1OfNOperationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsAccount1OfNOperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsAccount1ofNOperation_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsStakingShamanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsStakingShamansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsStakingShaman_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsStakingShaman_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_shamanStakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_shamanStakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_ShamanStake_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_ShamanStake_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsFarcasterDelegatorArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsFarcasterDelegatorsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsFarcasterDelegator_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_jokeRaceEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_jokeRaceEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_JokeRaceEligibility_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_jokeRaceEligibilityTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_jokeRaceEligibilityTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_JokeRaceEligibilityTerm_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_JokeRaceEligibilityTerm_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_jokeRaceNextTermSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_jokeRaceNextTermSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_JokeRace_NextTermSetEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_JokeRace_NextTermSetEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_jokeRaceTermStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_jokeRaceTermStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_JokeRace_TermStartedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_JokeRace_TermStartedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_allowListEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_allowListEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_AllowListEligibility_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_allowListEligibilityDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_allowListEligibilityDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_AllowListEligibilityData_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_AllowListEligibilityData_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_allowlistAccountAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_allowlistAccountAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Allowlist_AccountAddedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Allowlist_AccountAddedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_allowlistAccountsAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_allowlistAccountsAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Allowlist_AccountsAddedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Allowlist_AccountsAddedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_allowlistAccountRemovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_allowlistAccountRemovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Allowlist_AccountRemovedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Allowlist_AccountRemovedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_allowlistAccountsRemovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_allowlistAccountsRemovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Allowlist_AccountsRemovedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Allowlist_AccountsRemovedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_allowlistAccountStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_allowlistAccountStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Allowlist_AccountStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Allowlist_AccountStandingChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_allowlistAccountsStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_allowlistAccountsStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Allowlist_AccountsStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Allowlist_AccountsStandingChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_allowlistOwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_allowlistOwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Allowlist_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Allowlist_OwnerHatSetEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_allowlistArbitratorHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_allowlistArbitratorHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Allowlist_ArbitratorHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Allowlist_ArbitratorHatSetEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsElectionEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsElectionEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsElectionEligibility_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_electionTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_electionTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_ElectionTerm_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_electionElectionOpenedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_electionElectionOpenedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Election_ElectionOpenedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Election_ElectionOpenedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_electionElectionCompletedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_electionElectionCompletedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Election_ElectionCompletedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Election_ElectionCompletedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_electionNewTermStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_electionNewTermStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Election_NewTermStartedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Election_NewTermStartedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_electionRecalledEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_electionRecalledEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Election_RecalledEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Election_RecalledEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_passthroughModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_passthroughModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_PassthroughModule_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_stakingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_stakingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_StakingEligibility_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_stakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_stakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Stake_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Stake_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_stakingStakedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_stakingStakedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Staking_StakedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Staking_StakedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_stakingUnstakeBegunEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_stakingUnstakeBegunEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Staking_UnstakeBegunEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Staking_UnstakeBegunEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_stakingSlashedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_stakingSlashedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Staking_SlashedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Staking_SlashedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_stakingMinStakeChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_stakingMinStakeChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Staking_MinStakeChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Staking_MinStakeChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_stakingJudgeHatChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_stakingJudgeHatChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Staking_JudgeHatChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Staking_JudgeHatChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_stakingRecipientHatChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_stakingRecipientHatChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Staking_RecipientHatChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Staking_RecipientHatChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_stakingCooldownPeriodChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_stakingCooldownPeriodChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Staking_CooldownPeriodChangedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Staking_CooldownPeriodChangedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_stakingForgivenEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_stakingForgivenEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Staking_ForgivenEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Staking_ForgivenEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_seasonToggleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_seasonTogglesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_SeasonToggle_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_characterSheetsLevelEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_characterSheetsLevelEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_CharacterSheetsLevelEligibility_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_agreementEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_agreementEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_AgreementEligibility_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_agreementArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_agreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Agreement_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Agreement_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_agreementHatClaimedWithAgreementEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_agreementHatClaimedWithAgreementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Agreement_HatClaimedWithAgreementEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Agreement_HatClaimedWithAgreementEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_agreementAgreementSignedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_agreementAgreementSignedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Agreement_AgreementSignedEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Agreement_AgreementSignedEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_agreementAgreementSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_agreementAgreementSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Agreement_AgreementSetEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Agreement_AgreementSetEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_agreementOwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_agreementOwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Agreement_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Agreement_OwnerHatSetEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_agreementArbitratorHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_agreementArbitratorHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Agreement_ArbitratorHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Agreement_ArbitratorHatSetEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_agreementRevokedSingleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_agreementRevokedSingleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Agreement_RevokedSingleEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Agreement_RevokedSingleEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_agreementRevokedMultipleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_agreementRevokedMultipleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Agreement_RevokedMultipleEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Agreement_RevokedMultipleEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_agreementForgivenSingleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_agreementForgivenSingleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Agreement_ForgivenSingleEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Agreement_ForgivenSingleEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_agreementForgivenMultipleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_agreementForgivenMultipleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Agreement_ForgivenMultipleEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Agreement_ForgivenMultipleEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_erc20EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_erc20EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Erc20Eligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Erc20Eligibility_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_erc721EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_erc721EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Erc721Eligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Erc721Eligibility_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_erc1155EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_erc1155EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_Erc1155Eligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_Erc1155Eligibility_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatWearingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatWearingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatWearingEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatWearingEligibility_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_gitcoinPassportEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_gitcoinPassportEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_GitcoinPassportEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_GitcoinPassportEligibility_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_coLinksEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_coLinksEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_CoLinksEligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_CoLinksEligibility_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatControlledModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatControlledModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatControlledModule_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatControlledModule_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatControlledModuleWearerStatusArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatControlledModuleWearerStatusesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatControlledModuleWearerStatus_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatControlledModuleWearerStatus_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatControlledModuleHatStatusArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatControlledModuleHatStatusesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatControlledModuleHatStatus_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatControlledModuleHatStatus_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatControlledWearerStatusSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatControlledWearerStatusSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatControlled_WearerStatusSet_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatControlled_WearerStatusSet_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatControlledHatStatusSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatControlledHatStatusSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatControlled_HatStatusSet_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatControlled_HatStatusSet_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_publicLockV14EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_publicLockV14EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_PublicLockV14Eligibility_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_PublicLockV14Eligibility_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsEligibilitiesChainArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsEligibilitiesChainsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsEligibilitiesChain_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsEligibilitiesChain_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_eligibilitiesRulesetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_eligibilitiesRulesetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_EligibilitiesRuleset_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_EligibilitiesRuleset_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2EventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsSignerGateV2EventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsSignerGateV2Event_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsSignerGateV2Event_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsModule_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsModule_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatsModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatsModuleEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatsModuleEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_jokeRaceEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_jokeRaceEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_JokeRaceEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_JokeRaceEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_allowlistEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_allowlistEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_AllowlistEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_AllowlistEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_electionEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_electionEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_ElectionEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_ElectionEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_stakingEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_stakingEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_StakingEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_StakingEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_agreementEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_agreementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_AgreementEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_AgreementEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatControlledModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep_hatControlledModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseSep_HatControlledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<BaseSep_OrderDirection>;
  where?: InputMaybe<BaseSep_HatControlledModuleEvent_filter>;
  block?: InputMaybe<BaseSep_Block_height>;
  subgraphError?: BaseSep__SubgraphErrorPolicy_;
};


export type SubscriptionBaseSep__metaArgs = {
  block?: InputMaybe<BaseSep_Block_height>;
};

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
  BaseSep_hatAuthority: InContextSdkMethod<Query['BaseSep_hatAuthority'], QueryBaseSep_hatAuthorityArgs, MeshContext>,
  /** null **/
  BaseSep_hatAuthorities: InContextSdkMethod<Query['BaseSep_hatAuthorities'], QueryBaseSep_hatAuthoritiesArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGate: InContextSdkMethod<Query['BaseSep_hatsSignerGate'], QueryBaseSep_hatsSignerGateArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGates: InContextSdkMethod<Query['BaseSep_hatsSignerGates'], QueryBaseSep_hatsSignerGatesArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2'], QueryBaseSep_hatsSignerGateV2Args, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2S: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2S'], QueryBaseSep_hatsSignerGateV2SArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2OwnerHatSetEvent: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2OwnerHatSetEvent'], QueryBaseSep_hatsSignerGateV2OwnerHatSetEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2OwnerHatSetEvents: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2OwnerHatSetEvents'], QueryBaseSep_hatsSignerGateV2OwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2SignerHatsAddedEvent: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2SignerHatsAddedEvent'], QueryBaseSep_hatsSignerGateV2SignerHatsAddedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2SignerHatsAddedEvents: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2SignerHatsAddedEvents'], QueryBaseSep_hatsSignerGateV2SignerHatsAddedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2ThresholdConfigSetEvent: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2ThresholdConfigSetEvent'], QueryBaseSep_hatsSignerGateV2ThresholdConfigSetEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2ThresholdConfigSetEvents: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2ThresholdConfigSetEvents'], QueryBaseSep_hatsSignerGateV2ThresholdConfigSetEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2HSGLockedEvent: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2HSGLockedEvent'], QueryBaseSep_hatsSignerGateV2HSGLockedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2HSGLockedEvents: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2HSGLockedEvents'], QueryBaseSep_hatsSignerGateV2HSGLockedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2ClaimableForSetEvent: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2ClaimableForSetEvent'], QueryBaseSep_hatsSignerGateV2ClaimableForSetEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2ClaimableForSetEvents: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2ClaimableForSetEvents'], QueryBaseSep_hatsSignerGateV2ClaimableForSetEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2DetachedEvent: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2DetachedEvent'], QueryBaseSep_hatsSignerGateV2DetachedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2DetachedEvents: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2DetachedEvents'], QueryBaseSep_hatsSignerGateV2DetachedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2MigratedEvent: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2MigratedEvent'], QueryBaseSep_hatsSignerGateV2MigratedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2MigratedEvents: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2MigratedEvents'], QueryBaseSep_hatsSignerGateV2MigratedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2DelegatecallTargetEnabledEvent: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2DelegatecallTargetEnabledEvent'], QueryBaseSep_hatsSignerGateV2DelegatecallTargetEnabledEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2DelegatecallTargetEnabledEvents: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2DelegatecallTargetEnabledEvents'], QueryBaseSep_hatsSignerGateV2DelegatecallTargetEnabledEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2RegisteredEvent: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2RegisteredEvent'], QueryBaseSep_hatsSignerGateV2RegisteredEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2RegisteredEvents: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2RegisteredEvents'], QueryBaseSep_hatsSignerGateV2RegisteredEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2ChangedGuardEvent: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2ChangedGuardEvent'], QueryBaseSep_hatsSignerGateV2ChangedGuardEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2ChangedGuardEvents: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2ChangedGuardEvents'], QueryBaseSep_hatsSignerGateV2ChangedGuardEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2EnabledModuleEvent: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2EnabledModuleEvent'], QueryBaseSep_hatsSignerGateV2EnabledModuleEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2EnabledModuleEvents: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2EnabledModuleEvents'], QueryBaseSep_hatsSignerGateV2EnabledModuleEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2DisabledModuleEvent: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2DisabledModuleEvent'], QueryBaseSep_hatsSignerGateV2DisabledModuleEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2DisabledModuleEvents: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2DisabledModuleEvents'], QueryBaseSep_hatsSignerGateV2DisabledModuleEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsAccount1OfN: InContextSdkMethod<Query['BaseSep_hatsAccount1OfN'], QueryBaseSep_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  BaseSep_hatsAccount1OfNs: InContextSdkMethod<Query['BaseSep_hatsAccount1OfNs'], QueryBaseSep_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsAccount1OfNOperation: InContextSdkMethod<Query['BaseSep_hatsAccount1OfNOperation'], QueryBaseSep_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  BaseSep_hatsAccount1OfNOperations: InContextSdkMethod<Query['BaseSep_hatsAccount1OfNOperations'], QueryBaseSep_hatsAccount1OfNOperationsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsStakingShaman: InContextSdkMethod<Query['BaseSep_hatsStakingShaman'], QueryBaseSep_hatsStakingShamanArgs, MeshContext>,
  /** null **/
  BaseSep_hatsStakingShamans: InContextSdkMethod<Query['BaseSep_hatsStakingShamans'], QueryBaseSep_hatsStakingShamansArgs, MeshContext>,
  /** null **/
  BaseSep_shamanStake: InContextSdkMethod<Query['BaseSep_shamanStake'], QueryBaseSep_shamanStakeArgs, MeshContext>,
  /** null **/
  BaseSep_shamanStakes: InContextSdkMethod<Query['BaseSep_shamanStakes'], QueryBaseSep_shamanStakesArgs, MeshContext>,
  /** null **/
  BaseSep_hatsFarcasterDelegator: InContextSdkMethod<Query['BaseSep_hatsFarcasterDelegator'], QueryBaseSep_hatsFarcasterDelegatorArgs, MeshContext>,
  /** null **/
  BaseSep_hatsFarcasterDelegators: InContextSdkMethod<Query['BaseSep_hatsFarcasterDelegators'], QueryBaseSep_hatsFarcasterDelegatorsArgs, MeshContext>,
  /** null **/
  BaseSep_jokeRaceEligibility: InContextSdkMethod<Query['BaseSep_jokeRaceEligibility'], QueryBaseSep_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  BaseSep_jokeRaceEligibilities: InContextSdkMethod<Query['BaseSep_jokeRaceEligibilities'], QueryBaseSep_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  BaseSep_jokeRaceEligibilityTerm: InContextSdkMethod<Query['BaseSep_jokeRaceEligibilityTerm'], QueryBaseSep_jokeRaceEligibilityTermArgs, MeshContext>,
  /** null **/
  BaseSep_jokeRaceEligibilityTerms: InContextSdkMethod<Query['BaseSep_jokeRaceEligibilityTerms'], QueryBaseSep_jokeRaceEligibilityTermsArgs, MeshContext>,
  /** null **/
  BaseSep_jokeRaceNextTermSetEvent: InContextSdkMethod<Query['BaseSep_jokeRaceNextTermSetEvent'], QueryBaseSep_jokeRaceNextTermSetEventArgs, MeshContext>,
  /** null **/
  BaseSep_jokeRaceNextTermSetEvents: InContextSdkMethod<Query['BaseSep_jokeRaceNextTermSetEvents'], QueryBaseSep_jokeRaceNextTermSetEventsArgs, MeshContext>,
  /** null **/
  BaseSep_jokeRaceTermStartedEvent: InContextSdkMethod<Query['BaseSep_jokeRaceTermStartedEvent'], QueryBaseSep_jokeRaceTermStartedEventArgs, MeshContext>,
  /** null **/
  BaseSep_jokeRaceTermStartedEvents: InContextSdkMethod<Query['BaseSep_jokeRaceTermStartedEvents'], QueryBaseSep_jokeRaceTermStartedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_allowListEligibility: InContextSdkMethod<Query['BaseSep_allowListEligibility'], QueryBaseSep_allowListEligibilityArgs, MeshContext>,
  /** null **/
  BaseSep_allowListEligibilities: InContextSdkMethod<Query['BaseSep_allowListEligibilities'], QueryBaseSep_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  BaseSep_allowListEligibilityData: InContextSdkMethod<Query['BaseSep_allowListEligibilityData'], QueryBaseSep_allowListEligibilityDataArgs, MeshContext>,
  /** null **/
  BaseSep_allowListEligibilityDatas: InContextSdkMethod<Query['BaseSep_allowListEligibilityDatas'], QueryBaseSep_allowListEligibilityDatasArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistAccountAddedEvent: InContextSdkMethod<Query['BaseSep_allowlistAccountAddedEvent'], QueryBaseSep_allowlistAccountAddedEventArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistAccountAddedEvents: InContextSdkMethod<Query['BaseSep_allowlistAccountAddedEvents'], QueryBaseSep_allowlistAccountAddedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistAccountsAddedEvent: InContextSdkMethod<Query['BaseSep_allowlistAccountsAddedEvent'], QueryBaseSep_allowlistAccountsAddedEventArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistAccountsAddedEvents: InContextSdkMethod<Query['BaseSep_allowlistAccountsAddedEvents'], QueryBaseSep_allowlistAccountsAddedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistAccountRemovedEvent: InContextSdkMethod<Query['BaseSep_allowlistAccountRemovedEvent'], QueryBaseSep_allowlistAccountRemovedEventArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistAccountRemovedEvents: InContextSdkMethod<Query['BaseSep_allowlistAccountRemovedEvents'], QueryBaseSep_allowlistAccountRemovedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistAccountsRemovedEvent: InContextSdkMethod<Query['BaseSep_allowlistAccountsRemovedEvent'], QueryBaseSep_allowlistAccountsRemovedEventArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistAccountsRemovedEvents: InContextSdkMethod<Query['BaseSep_allowlistAccountsRemovedEvents'], QueryBaseSep_allowlistAccountsRemovedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistAccountStandingChangedEvent: InContextSdkMethod<Query['BaseSep_allowlistAccountStandingChangedEvent'], QueryBaseSep_allowlistAccountStandingChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistAccountStandingChangedEvents: InContextSdkMethod<Query['BaseSep_allowlistAccountStandingChangedEvents'], QueryBaseSep_allowlistAccountStandingChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistAccountsStandingChangedEvent: InContextSdkMethod<Query['BaseSep_allowlistAccountsStandingChangedEvent'], QueryBaseSep_allowlistAccountsStandingChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistAccountsStandingChangedEvents: InContextSdkMethod<Query['BaseSep_allowlistAccountsStandingChangedEvents'], QueryBaseSep_allowlistAccountsStandingChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistOwnerHatSetEvent: InContextSdkMethod<Query['BaseSep_allowlistOwnerHatSetEvent'], QueryBaseSep_allowlistOwnerHatSetEventArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistOwnerHatSetEvents: InContextSdkMethod<Query['BaseSep_allowlistOwnerHatSetEvents'], QueryBaseSep_allowlistOwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistArbitratorHatSetEvent: InContextSdkMethod<Query['BaseSep_allowlistArbitratorHatSetEvent'], QueryBaseSep_allowlistArbitratorHatSetEventArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistArbitratorHatSetEvents: InContextSdkMethod<Query['BaseSep_allowlistArbitratorHatSetEvents'], QueryBaseSep_allowlistArbitratorHatSetEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsElectionEligibility: InContextSdkMethod<Query['BaseSep_hatsElectionEligibility'], QueryBaseSep_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  BaseSep_hatsElectionEligibilities: InContextSdkMethod<Query['BaseSep_hatsElectionEligibilities'], QueryBaseSep_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  BaseSep_electionTerm: InContextSdkMethod<Query['BaseSep_electionTerm'], QueryBaseSep_electionTermArgs, MeshContext>,
  /** null **/
  BaseSep_electionTerms: InContextSdkMethod<Query['BaseSep_electionTerms'], QueryBaseSep_electionTermsArgs, MeshContext>,
  /** null **/
  BaseSep_electionElectionOpenedEvent: InContextSdkMethod<Query['BaseSep_electionElectionOpenedEvent'], QueryBaseSep_electionElectionOpenedEventArgs, MeshContext>,
  /** null **/
  BaseSep_electionElectionOpenedEvents: InContextSdkMethod<Query['BaseSep_electionElectionOpenedEvents'], QueryBaseSep_electionElectionOpenedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_electionElectionCompletedEvent: InContextSdkMethod<Query['BaseSep_electionElectionCompletedEvent'], QueryBaseSep_electionElectionCompletedEventArgs, MeshContext>,
  /** null **/
  BaseSep_electionElectionCompletedEvents: InContextSdkMethod<Query['BaseSep_electionElectionCompletedEvents'], QueryBaseSep_electionElectionCompletedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_electionNewTermStartedEvent: InContextSdkMethod<Query['BaseSep_electionNewTermStartedEvent'], QueryBaseSep_electionNewTermStartedEventArgs, MeshContext>,
  /** null **/
  BaseSep_electionNewTermStartedEvents: InContextSdkMethod<Query['BaseSep_electionNewTermStartedEvents'], QueryBaseSep_electionNewTermStartedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_electionRecalledEvent: InContextSdkMethod<Query['BaseSep_electionRecalledEvent'], QueryBaseSep_electionRecalledEventArgs, MeshContext>,
  /** null **/
  BaseSep_electionRecalledEvents: InContextSdkMethod<Query['BaseSep_electionRecalledEvents'], QueryBaseSep_electionRecalledEventsArgs, MeshContext>,
  /** null **/
  BaseSep_passthroughModule: InContextSdkMethod<Query['BaseSep_passthroughModule'], QueryBaseSep_passthroughModuleArgs, MeshContext>,
  /** null **/
  BaseSep_passthroughModules: InContextSdkMethod<Query['BaseSep_passthroughModules'], QueryBaseSep_passthroughModulesArgs, MeshContext>,
  /** null **/
  BaseSep_stakingEligibility: InContextSdkMethod<Query['BaseSep_stakingEligibility'], QueryBaseSep_stakingEligibilityArgs, MeshContext>,
  /** null **/
  BaseSep_stakingEligibilities: InContextSdkMethod<Query['BaseSep_stakingEligibilities'], QueryBaseSep_stakingEligibilitiesArgs, MeshContext>,
  /** null **/
  BaseSep_stake: InContextSdkMethod<Query['BaseSep_stake'], QueryBaseSep_stakeArgs, MeshContext>,
  /** null **/
  BaseSep_stakes: InContextSdkMethod<Query['BaseSep_stakes'], QueryBaseSep_stakesArgs, MeshContext>,
  /** null **/
  BaseSep_stakingStakedEvent: InContextSdkMethod<Query['BaseSep_stakingStakedEvent'], QueryBaseSep_stakingStakedEventArgs, MeshContext>,
  /** null **/
  BaseSep_stakingStakedEvents: InContextSdkMethod<Query['BaseSep_stakingStakedEvents'], QueryBaseSep_stakingStakedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_stakingUnstakeBegunEvent: InContextSdkMethod<Query['BaseSep_stakingUnstakeBegunEvent'], QueryBaseSep_stakingUnstakeBegunEventArgs, MeshContext>,
  /** null **/
  BaseSep_stakingUnstakeBegunEvents: InContextSdkMethod<Query['BaseSep_stakingUnstakeBegunEvents'], QueryBaseSep_stakingUnstakeBegunEventsArgs, MeshContext>,
  /** null **/
  BaseSep_stakingSlashedEvent: InContextSdkMethod<Query['BaseSep_stakingSlashedEvent'], QueryBaseSep_stakingSlashedEventArgs, MeshContext>,
  /** null **/
  BaseSep_stakingSlashedEvents: InContextSdkMethod<Query['BaseSep_stakingSlashedEvents'], QueryBaseSep_stakingSlashedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_stakingMinStakeChangedEvent: InContextSdkMethod<Query['BaseSep_stakingMinStakeChangedEvent'], QueryBaseSep_stakingMinStakeChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_stakingMinStakeChangedEvents: InContextSdkMethod<Query['BaseSep_stakingMinStakeChangedEvents'], QueryBaseSep_stakingMinStakeChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_stakingJudgeHatChangedEvent: InContextSdkMethod<Query['BaseSep_stakingJudgeHatChangedEvent'], QueryBaseSep_stakingJudgeHatChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_stakingJudgeHatChangedEvents: InContextSdkMethod<Query['BaseSep_stakingJudgeHatChangedEvents'], QueryBaseSep_stakingJudgeHatChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_stakingRecipientHatChangedEvent: InContextSdkMethod<Query['BaseSep_stakingRecipientHatChangedEvent'], QueryBaseSep_stakingRecipientHatChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_stakingRecipientHatChangedEvents: InContextSdkMethod<Query['BaseSep_stakingRecipientHatChangedEvents'], QueryBaseSep_stakingRecipientHatChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_stakingCooldownPeriodChangedEvent: InContextSdkMethod<Query['BaseSep_stakingCooldownPeriodChangedEvent'], QueryBaseSep_stakingCooldownPeriodChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_stakingCooldownPeriodChangedEvents: InContextSdkMethod<Query['BaseSep_stakingCooldownPeriodChangedEvents'], QueryBaseSep_stakingCooldownPeriodChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_stakingForgivenEvent: InContextSdkMethod<Query['BaseSep_stakingForgivenEvent'], QueryBaseSep_stakingForgivenEventArgs, MeshContext>,
  /** null **/
  BaseSep_stakingForgivenEvents: InContextSdkMethod<Query['BaseSep_stakingForgivenEvents'], QueryBaseSep_stakingForgivenEventsArgs, MeshContext>,
  /** null **/
  BaseSep_seasonToggle: InContextSdkMethod<Query['BaseSep_seasonToggle'], QueryBaseSep_seasonToggleArgs, MeshContext>,
  /** null **/
  BaseSep_seasonToggles: InContextSdkMethod<Query['BaseSep_seasonToggles'], QueryBaseSep_seasonTogglesArgs, MeshContext>,
  /** null **/
  BaseSep_characterSheetsLevelEligibility: InContextSdkMethod<Query['BaseSep_characterSheetsLevelEligibility'], QueryBaseSep_characterSheetsLevelEligibilityArgs, MeshContext>,
  /** null **/
  BaseSep_characterSheetsLevelEligibilities: InContextSdkMethod<Query['BaseSep_characterSheetsLevelEligibilities'], QueryBaseSep_characterSheetsLevelEligibilitiesArgs, MeshContext>,
  /** null **/
  BaseSep_agreementEligibility: InContextSdkMethod<Query['BaseSep_agreementEligibility'], QueryBaseSep_agreementEligibilityArgs, MeshContext>,
  /** null **/
  BaseSep_agreementEligibilities: InContextSdkMethod<Query['BaseSep_agreementEligibilities'], QueryBaseSep_agreementEligibilitiesArgs, MeshContext>,
  /** null **/
  BaseSep_agreement: InContextSdkMethod<Query['BaseSep_agreement'], QueryBaseSep_agreementArgs, MeshContext>,
  /** null **/
  BaseSep_agreements: InContextSdkMethod<Query['BaseSep_agreements'], QueryBaseSep_agreementsArgs, MeshContext>,
  /** null **/
  BaseSep_agreementHatClaimedWithAgreementEvent: InContextSdkMethod<Query['BaseSep_agreementHatClaimedWithAgreementEvent'], QueryBaseSep_agreementHatClaimedWithAgreementEventArgs, MeshContext>,
  /** null **/
  BaseSep_agreementHatClaimedWithAgreementEvents: InContextSdkMethod<Query['BaseSep_agreementHatClaimedWithAgreementEvents'], QueryBaseSep_agreementHatClaimedWithAgreementEventsArgs, MeshContext>,
  /** null **/
  BaseSep_agreementAgreementSignedEvent: InContextSdkMethod<Query['BaseSep_agreementAgreementSignedEvent'], QueryBaseSep_agreementAgreementSignedEventArgs, MeshContext>,
  /** null **/
  BaseSep_agreementAgreementSignedEvents: InContextSdkMethod<Query['BaseSep_agreementAgreementSignedEvents'], QueryBaseSep_agreementAgreementSignedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_agreementAgreementSetEvent: InContextSdkMethod<Query['BaseSep_agreementAgreementSetEvent'], QueryBaseSep_agreementAgreementSetEventArgs, MeshContext>,
  /** null **/
  BaseSep_agreementAgreementSetEvents: InContextSdkMethod<Query['BaseSep_agreementAgreementSetEvents'], QueryBaseSep_agreementAgreementSetEventsArgs, MeshContext>,
  /** null **/
  BaseSep_agreementOwnerHatSetEvent: InContextSdkMethod<Query['BaseSep_agreementOwnerHatSetEvent'], QueryBaseSep_agreementOwnerHatSetEventArgs, MeshContext>,
  /** null **/
  BaseSep_agreementOwnerHatSetEvents: InContextSdkMethod<Query['BaseSep_agreementOwnerHatSetEvents'], QueryBaseSep_agreementOwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  BaseSep_agreementArbitratorHatSetEvent: InContextSdkMethod<Query['BaseSep_agreementArbitratorHatSetEvent'], QueryBaseSep_agreementArbitratorHatSetEventArgs, MeshContext>,
  /** null **/
  BaseSep_agreementArbitratorHatSetEvents: InContextSdkMethod<Query['BaseSep_agreementArbitratorHatSetEvents'], QueryBaseSep_agreementArbitratorHatSetEventsArgs, MeshContext>,
  /** null **/
  BaseSep_agreementRevokedSingleEvent: InContextSdkMethod<Query['BaseSep_agreementRevokedSingleEvent'], QueryBaseSep_agreementRevokedSingleEventArgs, MeshContext>,
  /** null **/
  BaseSep_agreementRevokedSingleEvents: InContextSdkMethod<Query['BaseSep_agreementRevokedSingleEvents'], QueryBaseSep_agreementRevokedSingleEventsArgs, MeshContext>,
  /** null **/
  BaseSep_agreementRevokedMultipleEvent: InContextSdkMethod<Query['BaseSep_agreementRevokedMultipleEvent'], QueryBaseSep_agreementRevokedMultipleEventArgs, MeshContext>,
  /** null **/
  BaseSep_agreementRevokedMultipleEvents: InContextSdkMethod<Query['BaseSep_agreementRevokedMultipleEvents'], QueryBaseSep_agreementRevokedMultipleEventsArgs, MeshContext>,
  /** null **/
  BaseSep_agreementForgivenSingleEvent: InContextSdkMethod<Query['BaseSep_agreementForgivenSingleEvent'], QueryBaseSep_agreementForgivenSingleEventArgs, MeshContext>,
  /** null **/
  BaseSep_agreementForgivenSingleEvents: InContextSdkMethod<Query['BaseSep_agreementForgivenSingleEvents'], QueryBaseSep_agreementForgivenSingleEventsArgs, MeshContext>,
  /** null **/
  BaseSep_agreementForgivenMultipleEvent: InContextSdkMethod<Query['BaseSep_agreementForgivenMultipleEvent'], QueryBaseSep_agreementForgivenMultipleEventArgs, MeshContext>,
  /** null **/
  BaseSep_agreementForgivenMultipleEvents: InContextSdkMethod<Query['BaseSep_agreementForgivenMultipleEvents'], QueryBaseSep_agreementForgivenMultipleEventsArgs, MeshContext>,
  /** null **/
  BaseSep_erc20Eligibility: InContextSdkMethod<Query['BaseSep_erc20Eligibility'], QueryBaseSep_erc20EligibilityArgs, MeshContext>,
  /** null **/
  BaseSep_erc20Eligibilities: InContextSdkMethod<Query['BaseSep_erc20Eligibilities'], QueryBaseSep_erc20EligibilitiesArgs, MeshContext>,
  /** null **/
  BaseSep_erc721Eligibility: InContextSdkMethod<Query['BaseSep_erc721Eligibility'], QueryBaseSep_erc721EligibilityArgs, MeshContext>,
  /** null **/
  BaseSep_erc721Eligibilities: InContextSdkMethod<Query['BaseSep_erc721Eligibilities'], QueryBaseSep_erc721EligibilitiesArgs, MeshContext>,
  /** null **/
  BaseSep_erc1155Eligibility: InContextSdkMethod<Query['BaseSep_erc1155Eligibility'], QueryBaseSep_erc1155EligibilityArgs, MeshContext>,
  /** null **/
  BaseSep_erc1155Eligibilities: InContextSdkMethod<Query['BaseSep_erc1155Eligibilities'], QueryBaseSep_erc1155EligibilitiesArgs, MeshContext>,
  /** null **/
  BaseSep_hatWearingEligibility: InContextSdkMethod<Query['BaseSep_hatWearingEligibility'], QueryBaseSep_hatWearingEligibilityArgs, MeshContext>,
  /** null **/
  BaseSep_hatWearingEligibilities: InContextSdkMethod<Query['BaseSep_hatWearingEligibilities'], QueryBaseSep_hatWearingEligibilitiesArgs, MeshContext>,
  /** null **/
  BaseSep_gitcoinPassportEligibility: InContextSdkMethod<Query['BaseSep_gitcoinPassportEligibility'], QueryBaseSep_gitcoinPassportEligibilityArgs, MeshContext>,
  /** null **/
  BaseSep_gitcoinPassportEligibilities: InContextSdkMethod<Query['BaseSep_gitcoinPassportEligibilities'], QueryBaseSep_gitcoinPassportEligibilitiesArgs, MeshContext>,
  /** null **/
  BaseSep_coLinksEligibility: InContextSdkMethod<Query['BaseSep_coLinksEligibility'], QueryBaseSep_coLinksEligibilityArgs, MeshContext>,
  /** null **/
  BaseSep_coLinksEligibilities: InContextSdkMethod<Query['BaseSep_coLinksEligibilities'], QueryBaseSep_coLinksEligibilitiesArgs, MeshContext>,
  /** null **/
  BaseSep_hatControlledModule: InContextSdkMethod<Query['BaseSep_hatControlledModule'], QueryBaseSep_hatControlledModuleArgs, MeshContext>,
  /** null **/
  BaseSep_hatControlledModules: InContextSdkMethod<Query['BaseSep_hatControlledModules'], QueryBaseSep_hatControlledModulesArgs, MeshContext>,
  /** null **/
  BaseSep_hatControlledModuleWearerStatus: InContextSdkMethod<Query['BaseSep_hatControlledModuleWearerStatus'], QueryBaseSep_hatControlledModuleWearerStatusArgs, MeshContext>,
  /** null **/
  BaseSep_hatControlledModuleWearerStatuses: InContextSdkMethod<Query['BaseSep_hatControlledModuleWearerStatuses'], QueryBaseSep_hatControlledModuleWearerStatusesArgs, MeshContext>,
  /** null **/
  BaseSep_hatControlledModuleHatStatus: InContextSdkMethod<Query['BaseSep_hatControlledModuleHatStatus'], QueryBaseSep_hatControlledModuleHatStatusArgs, MeshContext>,
  /** null **/
  BaseSep_hatControlledModuleHatStatuses: InContextSdkMethod<Query['BaseSep_hatControlledModuleHatStatuses'], QueryBaseSep_hatControlledModuleHatStatusesArgs, MeshContext>,
  /** null **/
  BaseSep_hatControlledWearerStatusSet: InContextSdkMethod<Query['BaseSep_hatControlledWearerStatusSet'], QueryBaseSep_hatControlledWearerStatusSetArgs, MeshContext>,
  /** null **/
  BaseSep_hatControlledWearerStatusSets: InContextSdkMethod<Query['BaseSep_hatControlledWearerStatusSets'], QueryBaseSep_hatControlledWearerStatusSetsArgs, MeshContext>,
  /** null **/
  BaseSep_hatControlledHatStatusSet: InContextSdkMethod<Query['BaseSep_hatControlledHatStatusSet'], QueryBaseSep_hatControlledHatStatusSetArgs, MeshContext>,
  /** null **/
  BaseSep_hatControlledHatStatusSets: InContextSdkMethod<Query['BaseSep_hatControlledHatStatusSets'], QueryBaseSep_hatControlledHatStatusSetsArgs, MeshContext>,
  /** null **/
  BaseSep_publicLockV14Eligibility: InContextSdkMethod<Query['BaseSep_publicLockV14Eligibility'], QueryBaseSep_publicLockV14EligibilityArgs, MeshContext>,
  /** null **/
  BaseSep_publicLockV14Eligibilities: InContextSdkMethod<Query['BaseSep_publicLockV14Eligibilities'], QueryBaseSep_publicLockV14EligibilitiesArgs, MeshContext>,
  /** null **/
  BaseSep_hatsEligibilitiesChain: InContextSdkMethod<Query['BaseSep_hatsEligibilitiesChain'], QueryBaseSep_hatsEligibilitiesChainArgs, MeshContext>,
  /** null **/
  BaseSep_hatsEligibilitiesChains: InContextSdkMethod<Query['BaseSep_hatsEligibilitiesChains'], QueryBaseSep_hatsEligibilitiesChainsArgs, MeshContext>,
  /** null **/
  BaseSep_eligibilitiesRuleset: InContextSdkMethod<Query['BaseSep_eligibilitiesRuleset'], QueryBaseSep_eligibilitiesRulesetArgs, MeshContext>,
  /** null **/
  BaseSep_eligibilitiesRulesets: InContextSdkMethod<Query['BaseSep_eligibilitiesRulesets'], QueryBaseSep_eligibilitiesRulesetsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2Event: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2Event'], QueryBaseSep_hatsSignerGateV2EventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2Events: InContextSdkMethod<Query['BaseSep_hatsSignerGateV2Events'], QueryBaseSep_hatsSignerGateV2EventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsModule: InContextSdkMethod<Query['BaseSep_hatsModule'], QueryBaseSep_hatsModuleArgs, MeshContext>,
  /** null **/
  BaseSep_hatsModules: InContextSdkMethod<Query['BaseSep_hatsModules'], QueryBaseSep_hatsModulesArgs, MeshContext>,
  /** null **/
  BaseSep_hatsModuleEvent: InContextSdkMethod<Query['BaseSep_hatsModuleEvent'], QueryBaseSep_hatsModuleEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsModuleEvents: InContextSdkMethod<Query['BaseSep_hatsModuleEvents'], QueryBaseSep_hatsModuleEventsArgs, MeshContext>,
  /** null **/
  BaseSep_jokeRaceEvent: InContextSdkMethod<Query['BaseSep_jokeRaceEvent'], QueryBaseSep_jokeRaceEventArgs, MeshContext>,
  /** null **/
  BaseSep_jokeRaceEvents: InContextSdkMethod<Query['BaseSep_jokeRaceEvents'], QueryBaseSep_jokeRaceEventsArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistEvent: InContextSdkMethod<Query['BaseSep_allowlistEvent'], QueryBaseSep_allowlistEventArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistEvents: InContextSdkMethod<Query['BaseSep_allowlistEvents'], QueryBaseSep_allowlistEventsArgs, MeshContext>,
  /** null **/
  BaseSep_electionEvent: InContextSdkMethod<Query['BaseSep_electionEvent'], QueryBaseSep_electionEventArgs, MeshContext>,
  /** null **/
  BaseSep_electionEvents: InContextSdkMethod<Query['BaseSep_electionEvents'], QueryBaseSep_electionEventsArgs, MeshContext>,
  /** null **/
  BaseSep_stakingEvent: InContextSdkMethod<Query['BaseSep_stakingEvent'], QueryBaseSep_stakingEventArgs, MeshContext>,
  /** null **/
  BaseSep_stakingEvents: InContextSdkMethod<Query['BaseSep_stakingEvents'], QueryBaseSep_stakingEventsArgs, MeshContext>,
  /** null **/
  BaseSep_agreementEvent: InContextSdkMethod<Query['BaseSep_agreementEvent'], QueryBaseSep_agreementEventArgs, MeshContext>,
  /** null **/
  BaseSep_agreementEvents: InContextSdkMethod<Query['BaseSep_agreementEvents'], QueryBaseSep_agreementEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatControlledModuleEvent: InContextSdkMethod<Query['BaseSep_hatControlledModuleEvent'], QueryBaseSep_hatControlledModuleEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatControlledModuleEvents: InContextSdkMethod<Query['BaseSep_hatControlledModuleEvents'], QueryBaseSep_hatControlledModuleEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  BaseSep__meta: InContextSdkMethod<Query['BaseSep__meta'], QueryBaseSep__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  BaseSep_hatAuthority: InContextSdkMethod<Subscription['BaseSep_hatAuthority'], SubscriptionBaseSep_hatAuthorityArgs, MeshContext>,
  /** null **/
  BaseSep_hatAuthorities: InContextSdkMethod<Subscription['BaseSep_hatAuthorities'], SubscriptionBaseSep_hatAuthoritiesArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGate: InContextSdkMethod<Subscription['BaseSep_hatsSignerGate'], SubscriptionBaseSep_hatsSignerGateArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGates: InContextSdkMethod<Subscription['BaseSep_hatsSignerGates'], SubscriptionBaseSep_hatsSignerGatesArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2'], SubscriptionBaseSep_hatsSignerGateV2Args, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2S: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2S'], SubscriptionBaseSep_hatsSignerGateV2SArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2OwnerHatSetEvent: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2OwnerHatSetEvent'], SubscriptionBaseSep_hatsSignerGateV2OwnerHatSetEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2OwnerHatSetEvents: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2OwnerHatSetEvents'], SubscriptionBaseSep_hatsSignerGateV2OwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2SignerHatsAddedEvent: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2SignerHatsAddedEvent'], SubscriptionBaseSep_hatsSignerGateV2SignerHatsAddedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2SignerHatsAddedEvents: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2SignerHatsAddedEvents'], SubscriptionBaseSep_hatsSignerGateV2SignerHatsAddedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2ThresholdConfigSetEvent: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2ThresholdConfigSetEvent'], SubscriptionBaseSep_hatsSignerGateV2ThresholdConfigSetEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2ThresholdConfigSetEvents: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2ThresholdConfigSetEvents'], SubscriptionBaseSep_hatsSignerGateV2ThresholdConfigSetEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2HSGLockedEvent: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2HSGLockedEvent'], SubscriptionBaseSep_hatsSignerGateV2HSGLockedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2HSGLockedEvents: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2HSGLockedEvents'], SubscriptionBaseSep_hatsSignerGateV2HSGLockedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2ClaimableForSetEvent: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2ClaimableForSetEvent'], SubscriptionBaseSep_hatsSignerGateV2ClaimableForSetEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2ClaimableForSetEvents: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2ClaimableForSetEvents'], SubscriptionBaseSep_hatsSignerGateV2ClaimableForSetEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2DetachedEvent: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2DetachedEvent'], SubscriptionBaseSep_hatsSignerGateV2DetachedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2DetachedEvents: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2DetachedEvents'], SubscriptionBaseSep_hatsSignerGateV2DetachedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2MigratedEvent: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2MigratedEvent'], SubscriptionBaseSep_hatsSignerGateV2MigratedEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2MigratedEvents: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2MigratedEvents'], SubscriptionBaseSep_hatsSignerGateV2MigratedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2DelegatecallTargetEnabledEvent: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2DelegatecallTargetEnabledEvent'], SubscriptionBaseSep_hatsSignerGateV2DelegatecallTargetEnabledEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2DelegatecallTargetEnabledEvents: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2DelegatecallTargetEnabledEvents'], SubscriptionBaseSep_hatsSignerGateV2DelegatecallTargetEnabledEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2RegisteredEvent: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2RegisteredEvent'], SubscriptionBaseSep_hatsSignerGateV2RegisteredEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2RegisteredEvents: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2RegisteredEvents'], SubscriptionBaseSep_hatsSignerGateV2RegisteredEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2ChangedGuardEvent: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2ChangedGuardEvent'], SubscriptionBaseSep_hatsSignerGateV2ChangedGuardEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2ChangedGuardEvents: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2ChangedGuardEvents'], SubscriptionBaseSep_hatsSignerGateV2ChangedGuardEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2EnabledModuleEvent: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2EnabledModuleEvent'], SubscriptionBaseSep_hatsSignerGateV2EnabledModuleEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2EnabledModuleEvents: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2EnabledModuleEvents'], SubscriptionBaseSep_hatsSignerGateV2EnabledModuleEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2DisabledModuleEvent: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2DisabledModuleEvent'], SubscriptionBaseSep_hatsSignerGateV2DisabledModuleEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2DisabledModuleEvents: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2DisabledModuleEvents'], SubscriptionBaseSep_hatsSignerGateV2DisabledModuleEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsAccount1OfN: InContextSdkMethod<Subscription['BaseSep_hatsAccount1OfN'], SubscriptionBaseSep_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  BaseSep_hatsAccount1OfNs: InContextSdkMethod<Subscription['BaseSep_hatsAccount1OfNs'], SubscriptionBaseSep_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsAccount1OfNOperation: InContextSdkMethod<Subscription['BaseSep_hatsAccount1OfNOperation'], SubscriptionBaseSep_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  BaseSep_hatsAccount1OfNOperations: InContextSdkMethod<Subscription['BaseSep_hatsAccount1OfNOperations'], SubscriptionBaseSep_hatsAccount1OfNOperationsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsStakingShaman: InContextSdkMethod<Subscription['BaseSep_hatsStakingShaman'], SubscriptionBaseSep_hatsStakingShamanArgs, MeshContext>,
  /** null **/
  BaseSep_hatsStakingShamans: InContextSdkMethod<Subscription['BaseSep_hatsStakingShamans'], SubscriptionBaseSep_hatsStakingShamansArgs, MeshContext>,
  /** null **/
  BaseSep_shamanStake: InContextSdkMethod<Subscription['BaseSep_shamanStake'], SubscriptionBaseSep_shamanStakeArgs, MeshContext>,
  /** null **/
  BaseSep_shamanStakes: InContextSdkMethod<Subscription['BaseSep_shamanStakes'], SubscriptionBaseSep_shamanStakesArgs, MeshContext>,
  /** null **/
  BaseSep_hatsFarcasterDelegator: InContextSdkMethod<Subscription['BaseSep_hatsFarcasterDelegator'], SubscriptionBaseSep_hatsFarcasterDelegatorArgs, MeshContext>,
  /** null **/
  BaseSep_hatsFarcasterDelegators: InContextSdkMethod<Subscription['BaseSep_hatsFarcasterDelegators'], SubscriptionBaseSep_hatsFarcasterDelegatorsArgs, MeshContext>,
  /** null **/
  BaseSep_jokeRaceEligibility: InContextSdkMethod<Subscription['BaseSep_jokeRaceEligibility'], SubscriptionBaseSep_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  BaseSep_jokeRaceEligibilities: InContextSdkMethod<Subscription['BaseSep_jokeRaceEligibilities'], SubscriptionBaseSep_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  BaseSep_jokeRaceEligibilityTerm: InContextSdkMethod<Subscription['BaseSep_jokeRaceEligibilityTerm'], SubscriptionBaseSep_jokeRaceEligibilityTermArgs, MeshContext>,
  /** null **/
  BaseSep_jokeRaceEligibilityTerms: InContextSdkMethod<Subscription['BaseSep_jokeRaceEligibilityTerms'], SubscriptionBaseSep_jokeRaceEligibilityTermsArgs, MeshContext>,
  /** null **/
  BaseSep_jokeRaceNextTermSetEvent: InContextSdkMethod<Subscription['BaseSep_jokeRaceNextTermSetEvent'], SubscriptionBaseSep_jokeRaceNextTermSetEventArgs, MeshContext>,
  /** null **/
  BaseSep_jokeRaceNextTermSetEvents: InContextSdkMethod<Subscription['BaseSep_jokeRaceNextTermSetEvents'], SubscriptionBaseSep_jokeRaceNextTermSetEventsArgs, MeshContext>,
  /** null **/
  BaseSep_jokeRaceTermStartedEvent: InContextSdkMethod<Subscription['BaseSep_jokeRaceTermStartedEvent'], SubscriptionBaseSep_jokeRaceTermStartedEventArgs, MeshContext>,
  /** null **/
  BaseSep_jokeRaceTermStartedEvents: InContextSdkMethod<Subscription['BaseSep_jokeRaceTermStartedEvents'], SubscriptionBaseSep_jokeRaceTermStartedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_allowListEligibility: InContextSdkMethod<Subscription['BaseSep_allowListEligibility'], SubscriptionBaseSep_allowListEligibilityArgs, MeshContext>,
  /** null **/
  BaseSep_allowListEligibilities: InContextSdkMethod<Subscription['BaseSep_allowListEligibilities'], SubscriptionBaseSep_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  BaseSep_allowListEligibilityData: InContextSdkMethod<Subscription['BaseSep_allowListEligibilityData'], SubscriptionBaseSep_allowListEligibilityDataArgs, MeshContext>,
  /** null **/
  BaseSep_allowListEligibilityDatas: InContextSdkMethod<Subscription['BaseSep_allowListEligibilityDatas'], SubscriptionBaseSep_allowListEligibilityDatasArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistAccountAddedEvent: InContextSdkMethod<Subscription['BaseSep_allowlistAccountAddedEvent'], SubscriptionBaseSep_allowlistAccountAddedEventArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistAccountAddedEvents: InContextSdkMethod<Subscription['BaseSep_allowlistAccountAddedEvents'], SubscriptionBaseSep_allowlistAccountAddedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistAccountsAddedEvent: InContextSdkMethod<Subscription['BaseSep_allowlistAccountsAddedEvent'], SubscriptionBaseSep_allowlistAccountsAddedEventArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistAccountsAddedEvents: InContextSdkMethod<Subscription['BaseSep_allowlistAccountsAddedEvents'], SubscriptionBaseSep_allowlistAccountsAddedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistAccountRemovedEvent: InContextSdkMethod<Subscription['BaseSep_allowlistAccountRemovedEvent'], SubscriptionBaseSep_allowlistAccountRemovedEventArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistAccountRemovedEvents: InContextSdkMethod<Subscription['BaseSep_allowlistAccountRemovedEvents'], SubscriptionBaseSep_allowlistAccountRemovedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistAccountsRemovedEvent: InContextSdkMethod<Subscription['BaseSep_allowlistAccountsRemovedEvent'], SubscriptionBaseSep_allowlistAccountsRemovedEventArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistAccountsRemovedEvents: InContextSdkMethod<Subscription['BaseSep_allowlistAccountsRemovedEvents'], SubscriptionBaseSep_allowlistAccountsRemovedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistAccountStandingChangedEvent: InContextSdkMethod<Subscription['BaseSep_allowlistAccountStandingChangedEvent'], SubscriptionBaseSep_allowlistAccountStandingChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistAccountStandingChangedEvents: InContextSdkMethod<Subscription['BaseSep_allowlistAccountStandingChangedEvents'], SubscriptionBaseSep_allowlistAccountStandingChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistAccountsStandingChangedEvent: InContextSdkMethod<Subscription['BaseSep_allowlistAccountsStandingChangedEvent'], SubscriptionBaseSep_allowlistAccountsStandingChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistAccountsStandingChangedEvents: InContextSdkMethod<Subscription['BaseSep_allowlistAccountsStandingChangedEvents'], SubscriptionBaseSep_allowlistAccountsStandingChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistOwnerHatSetEvent: InContextSdkMethod<Subscription['BaseSep_allowlistOwnerHatSetEvent'], SubscriptionBaseSep_allowlistOwnerHatSetEventArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistOwnerHatSetEvents: InContextSdkMethod<Subscription['BaseSep_allowlistOwnerHatSetEvents'], SubscriptionBaseSep_allowlistOwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistArbitratorHatSetEvent: InContextSdkMethod<Subscription['BaseSep_allowlistArbitratorHatSetEvent'], SubscriptionBaseSep_allowlistArbitratorHatSetEventArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistArbitratorHatSetEvents: InContextSdkMethod<Subscription['BaseSep_allowlistArbitratorHatSetEvents'], SubscriptionBaseSep_allowlistArbitratorHatSetEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsElectionEligibility: InContextSdkMethod<Subscription['BaseSep_hatsElectionEligibility'], SubscriptionBaseSep_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  BaseSep_hatsElectionEligibilities: InContextSdkMethod<Subscription['BaseSep_hatsElectionEligibilities'], SubscriptionBaseSep_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  BaseSep_electionTerm: InContextSdkMethod<Subscription['BaseSep_electionTerm'], SubscriptionBaseSep_electionTermArgs, MeshContext>,
  /** null **/
  BaseSep_electionTerms: InContextSdkMethod<Subscription['BaseSep_electionTerms'], SubscriptionBaseSep_electionTermsArgs, MeshContext>,
  /** null **/
  BaseSep_electionElectionOpenedEvent: InContextSdkMethod<Subscription['BaseSep_electionElectionOpenedEvent'], SubscriptionBaseSep_electionElectionOpenedEventArgs, MeshContext>,
  /** null **/
  BaseSep_electionElectionOpenedEvents: InContextSdkMethod<Subscription['BaseSep_electionElectionOpenedEvents'], SubscriptionBaseSep_electionElectionOpenedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_electionElectionCompletedEvent: InContextSdkMethod<Subscription['BaseSep_electionElectionCompletedEvent'], SubscriptionBaseSep_electionElectionCompletedEventArgs, MeshContext>,
  /** null **/
  BaseSep_electionElectionCompletedEvents: InContextSdkMethod<Subscription['BaseSep_electionElectionCompletedEvents'], SubscriptionBaseSep_electionElectionCompletedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_electionNewTermStartedEvent: InContextSdkMethod<Subscription['BaseSep_electionNewTermStartedEvent'], SubscriptionBaseSep_electionNewTermStartedEventArgs, MeshContext>,
  /** null **/
  BaseSep_electionNewTermStartedEvents: InContextSdkMethod<Subscription['BaseSep_electionNewTermStartedEvents'], SubscriptionBaseSep_electionNewTermStartedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_electionRecalledEvent: InContextSdkMethod<Subscription['BaseSep_electionRecalledEvent'], SubscriptionBaseSep_electionRecalledEventArgs, MeshContext>,
  /** null **/
  BaseSep_electionRecalledEvents: InContextSdkMethod<Subscription['BaseSep_electionRecalledEvents'], SubscriptionBaseSep_electionRecalledEventsArgs, MeshContext>,
  /** null **/
  BaseSep_passthroughModule: InContextSdkMethod<Subscription['BaseSep_passthroughModule'], SubscriptionBaseSep_passthroughModuleArgs, MeshContext>,
  /** null **/
  BaseSep_passthroughModules: InContextSdkMethod<Subscription['BaseSep_passthroughModules'], SubscriptionBaseSep_passthroughModulesArgs, MeshContext>,
  /** null **/
  BaseSep_stakingEligibility: InContextSdkMethod<Subscription['BaseSep_stakingEligibility'], SubscriptionBaseSep_stakingEligibilityArgs, MeshContext>,
  /** null **/
  BaseSep_stakingEligibilities: InContextSdkMethod<Subscription['BaseSep_stakingEligibilities'], SubscriptionBaseSep_stakingEligibilitiesArgs, MeshContext>,
  /** null **/
  BaseSep_stake: InContextSdkMethod<Subscription['BaseSep_stake'], SubscriptionBaseSep_stakeArgs, MeshContext>,
  /** null **/
  BaseSep_stakes: InContextSdkMethod<Subscription['BaseSep_stakes'], SubscriptionBaseSep_stakesArgs, MeshContext>,
  /** null **/
  BaseSep_stakingStakedEvent: InContextSdkMethod<Subscription['BaseSep_stakingStakedEvent'], SubscriptionBaseSep_stakingStakedEventArgs, MeshContext>,
  /** null **/
  BaseSep_stakingStakedEvents: InContextSdkMethod<Subscription['BaseSep_stakingStakedEvents'], SubscriptionBaseSep_stakingStakedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_stakingUnstakeBegunEvent: InContextSdkMethod<Subscription['BaseSep_stakingUnstakeBegunEvent'], SubscriptionBaseSep_stakingUnstakeBegunEventArgs, MeshContext>,
  /** null **/
  BaseSep_stakingUnstakeBegunEvents: InContextSdkMethod<Subscription['BaseSep_stakingUnstakeBegunEvents'], SubscriptionBaseSep_stakingUnstakeBegunEventsArgs, MeshContext>,
  /** null **/
  BaseSep_stakingSlashedEvent: InContextSdkMethod<Subscription['BaseSep_stakingSlashedEvent'], SubscriptionBaseSep_stakingSlashedEventArgs, MeshContext>,
  /** null **/
  BaseSep_stakingSlashedEvents: InContextSdkMethod<Subscription['BaseSep_stakingSlashedEvents'], SubscriptionBaseSep_stakingSlashedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_stakingMinStakeChangedEvent: InContextSdkMethod<Subscription['BaseSep_stakingMinStakeChangedEvent'], SubscriptionBaseSep_stakingMinStakeChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_stakingMinStakeChangedEvents: InContextSdkMethod<Subscription['BaseSep_stakingMinStakeChangedEvents'], SubscriptionBaseSep_stakingMinStakeChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_stakingJudgeHatChangedEvent: InContextSdkMethod<Subscription['BaseSep_stakingJudgeHatChangedEvent'], SubscriptionBaseSep_stakingJudgeHatChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_stakingJudgeHatChangedEvents: InContextSdkMethod<Subscription['BaseSep_stakingJudgeHatChangedEvents'], SubscriptionBaseSep_stakingJudgeHatChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_stakingRecipientHatChangedEvent: InContextSdkMethod<Subscription['BaseSep_stakingRecipientHatChangedEvent'], SubscriptionBaseSep_stakingRecipientHatChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_stakingRecipientHatChangedEvents: InContextSdkMethod<Subscription['BaseSep_stakingRecipientHatChangedEvents'], SubscriptionBaseSep_stakingRecipientHatChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_stakingCooldownPeriodChangedEvent: InContextSdkMethod<Subscription['BaseSep_stakingCooldownPeriodChangedEvent'], SubscriptionBaseSep_stakingCooldownPeriodChangedEventArgs, MeshContext>,
  /** null **/
  BaseSep_stakingCooldownPeriodChangedEvents: InContextSdkMethod<Subscription['BaseSep_stakingCooldownPeriodChangedEvents'], SubscriptionBaseSep_stakingCooldownPeriodChangedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_stakingForgivenEvent: InContextSdkMethod<Subscription['BaseSep_stakingForgivenEvent'], SubscriptionBaseSep_stakingForgivenEventArgs, MeshContext>,
  /** null **/
  BaseSep_stakingForgivenEvents: InContextSdkMethod<Subscription['BaseSep_stakingForgivenEvents'], SubscriptionBaseSep_stakingForgivenEventsArgs, MeshContext>,
  /** null **/
  BaseSep_seasonToggle: InContextSdkMethod<Subscription['BaseSep_seasonToggle'], SubscriptionBaseSep_seasonToggleArgs, MeshContext>,
  /** null **/
  BaseSep_seasonToggles: InContextSdkMethod<Subscription['BaseSep_seasonToggles'], SubscriptionBaseSep_seasonTogglesArgs, MeshContext>,
  /** null **/
  BaseSep_characterSheetsLevelEligibility: InContextSdkMethod<Subscription['BaseSep_characterSheetsLevelEligibility'], SubscriptionBaseSep_characterSheetsLevelEligibilityArgs, MeshContext>,
  /** null **/
  BaseSep_characterSheetsLevelEligibilities: InContextSdkMethod<Subscription['BaseSep_characterSheetsLevelEligibilities'], SubscriptionBaseSep_characterSheetsLevelEligibilitiesArgs, MeshContext>,
  /** null **/
  BaseSep_agreementEligibility: InContextSdkMethod<Subscription['BaseSep_agreementEligibility'], SubscriptionBaseSep_agreementEligibilityArgs, MeshContext>,
  /** null **/
  BaseSep_agreementEligibilities: InContextSdkMethod<Subscription['BaseSep_agreementEligibilities'], SubscriptionBaseSep_agreementEligibilitiesArgs, MeshContext>,
  /** null **/
  BaseSep_agreement: InContextSdkMethod<Subscription['BaseSep_agreement'], SubscriptionBaseSep_agreementArgs, MeshContext>,
  /** null **/
  BaseSep_agreements: InContextSdkMethod<Subscription['BaseSep_agreements'], SubscriptionBaseSep_agreementsArgs, MeshContext>,
  /** null **/
  BaseSep_agreementHatClaimedWithAgreementEvent: InContextSdkMethod<Subscription['BaseSep_agreementHatClaimedWithAgreementEvent'], SubscriptionBaseSep_agreementHatClaimedWithAgreementEventArgs, MeshContext>,
  /** null **/
  BaseSep_agreementHatClaimedWithAgreementEvents: InContextSdkMethod<Subscription['BaseSep_agreementHatClaimedWithAgreementEvents'], SubscriptionBaseSep_agreementHatClaimedWithAgreementEventsArgs, MeshContext>,
  /** null **/
  BaseSep_agreementAgreementSignedEvent: InContextSdkMethod<Subscription['BaseSep_agreementAgreementSignedEvent'], SubscriptionBaseSep_agreementAgreementSignedEventArgs, MeshContext>,
  /** null **/
  BaseSep_agreementAgreementSignedEvents: InContextSdkMethod<Subscription['BaseSep_agreementAgreementSignedEvents'], SubscriptionBaseSep_agreementAgreementSignedEventsArgs, MeshContext>,
  /** null **/
  BaseSep_agreementAgreementSetEvent: InContextSdkMethod<Subscription['BaseSep_agreementAgreementSetEvent'], SubscriptionBaseSep_agreementAgreementSetEventArgs, MeshContext>,
  /** null **/
  BaseSep_agreementAgreementSetEvents: InContextSdkMethod<Subscription['BaseSep_agreementAgreementSetEvents'], SubscriptionBaseSep_agreementAgreementSetEventsArgs, MeshContext>,
  /** null **/
  BaseSep_agreementOwnerHatSetEvent: InContextSdkMethod<Subscription['BaseSep_agreementOwnerHatSetEvent'], SubscriptionBaseSep_agreementOwnerHatSetEventArgs, MeshContext>,
  /** null **/
  BaseSep_agreementOwnerHatSetEvents: InContextSdkMethod<Subscription['BaseSep_agreementOwnerHatSetEvents'], SubscriptionBaseSep_agreementOwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  BaseSep_agreementArbitratorHatSetEvent: InContextSdkMethod<Subscription['BaseSep_agreementArbitratorHatSetEvent'], SubscriptionBaseSep_agreementArbitratorHatSetEventArgs, MeshContext>,
  /** null **/
  BaseSep_agreementArbitratorHatSetEvents: InContextSdkMethod<Subscription['BaseSep_agreementArbitratorHatSetEvents'], SubscriptionBaseSep_agreementArbitratorHatSetEventsArgs, MeshContext>,
  /** null **/
  BaseSep_agreementRevokedSingleEvent: InContextSdkMethod<Subscription['BaseSep_agreementRevokedSingleEvent'], SubscriptionBaseSep_agreementRevokedSingleEventArgs, MeshContext>,
  /** null **/
  BaseSep_agreementRevokedSingleEvents: InContextSdkMethod<Subscription['BaseSep_agreementRevokedSingleEvents'], SubscriptionBaseSep_agreementRevokedSingleEventsArgs, MeshContext>,
  /** null **/
  BaseSep_agreementRevokedMultipleEvent: InContextSdkMethod<Subscription['BaseSep_agreementRevokedMultipleEvent'], SubscriptionBaseSep_agreementRevokedMultipleEventArgs, MeshContext>,
  /** null **/
  BaseSep_agreementRevokedMultipleEvents: InContextSdkMethod<Subscription['BaseSep_agreementRevokedMultipleEvents'], SubscriptionBaseSep_agreementRevokedMultipleEventsArgs, MeshContext>,
  /** null **/
  BaseSep_agreementForgivenSingleEvent: InContextSdkMethod<Subscription['BaseSep_agreementForgivenSingleEvent'], SubscriptionBaseSep_agreementForgivenSingleEventArgs, MeshContext>,
  /** null **/
  BaseSep_agreementForgivenSingleEvents: InContextSdkMethod<Subscription['BaseSep_agreementForgivenSingleEvents'], SubscriptionBaseSep_agreementForgivenSingleEventsArgs, MeshContext>,
  /** null **/
  BaseSep_agreementForgivenMultipleEvent: InContextSdkMethod<Subscription['BaseSep_agreementForgivenMultipleEvent'], SubscriptionBaseSep_agreementForgivenMultipleEventArgs, MeshContext>,
  /** null **/
  BaseSep_agreementForgivenMultipleEvents: InContextSdkMethod<Subscription['BaseSep_agreementForgivenMultipleEvents'], SubscriptionBaseSep_agreementForgivenMultipleEventsArgs, MeshContext>,
  /** null **/
  BaseSep_erc20Eligibility: InContextSdkMethod<Subscription['BaseSep_erc20Eligibility'], SubscriptionBaseSep_erc20EligibilityArgs, MeshContext>,
  /** null **/
  BaseSep_erc20Eligibilities: InContextSdkMethod<Subscription['BaseSep_erc20Eligibilities'], SubscriptionBaseSep_erc20EligibilitiesArgs, MeshContext>,
  /** null **/
  BaseSep_erc721Eligibility: InContextSdkMethod<Subscription['BaseSep_erc721Eligibility'], SubscriptionBaseSep_erc721EligibilityArgs, MeshContext>,
  /** null **/
  BaseSep_erc721Eligibilities: InContextSdkMethod<Subscription['BaseSep_erc721Eligibilities'], SubscriptionBaseSep_erc721EligibilitiesArgs, MeshContext>,
  /** null **/
  BaseSep_erc1155Eligibility: InContextSdkMethod<Subscription['BaseSep_erc1155Eligibility'], SubscriptionBaseSep_erc1155EligibilityArgs, MeshContext>,
  /** null **/
  BaseSep_erc1155Eligibilities: InContextSdkMethod<Subscription['BaseSep_erc1155Eligibilities'], SubscriptionBaseSep_erc1155EligibilitiesArgs, MeshContext>,
  /** null **/
  BaseSep_hatWearingEligibility: InContextSdkMethod<Subscription['BaseSep_hatWearingEligibility'], SubscriptionBaseSep_hatWearingEligibilityArgs, MeshContext>,
  /** null **/
  BaseSep_hatWearingEligibilities: InContextSdkMethod<Subscription['BaseSep_hatWearingEligibilities'], SubscriptionBaseSep_hatWearingEligibilitiesArgs, MeshContext>,
  /** null **/
  BaseSep_gitcoinPassportEligibility: InContextSdkMethod<Subscription['BaseSep_gitcoinPassportEligibility'], SubscriptionBaseSep_gitcoinPassportEligibilityArgs, MeshContext>,
  /** null **/
  BaseSep_gitcoinPassportEligibilities: InContextSdkMethod<Subscription['BaseSep_gitcoinPassportEligibilities'], SubscriptionBaseSep_gitcoinPassportEligibilitiesArgs, MeshContext>,
  /** null **/
  BaseSep_coLinksEligibility: InContextSdkMethod<Subscription['BaseSep_coLinksEligibility'], SubscriptionBaseSep_coLinksEligibilityArgs, MeshContext>,
  /** null **/
  BaseSep_coLinksEligibilities: InContextSdkMethod<Subscription['BaseSep_coLinksEligibilities'], SubscriptionBaseSep_coLinksEligibilitiesArgs, MeshContext>,
  /** null **/
  BaseSep_hatControlledModule: InContextSdkMethod<Subscription['BaseSep_hatControlledModule'], SubscriptionBaseSep_hatControlledModuleArgs, MeshContext>,
  /** null **/
  BaseSep_hatControlledModules: InContextSdkMethod<Subscription['BaseSep_hatControlledModules'], SubscriptionBaseSep_hatControlledModulesArgs, MeshContext>,
  /** null **/
  BaseSep_hatControlledModuleWearerStatus: InContextSdkMethod<Subscription['BaseSep_hatControlledModuleWearerStatus'], SubscriptionBaseSep_hatControlledModuleWearerStatusArgs, MeshContext>,
  /** null **/
  BaseSep_hatControlledModuleWearerStatuses: InContextSdkMethod<Subscription['BaseSep_hatControlledModuleWearerStatuses'], SubscriptionBaseSep_hatControlledModuleWearerStatusesArgs, MeshContext>,
  /** null **/
  BaseSep_hatControlledModuleHatStatus: InContextSdkMethod<Subscription['BaseSep_hatControlledModuleHatStatus'], SubscriptionBaseSep_hatControlledModuleHatStatusArgs, MeshContext>,
  /** null **/
  BaseSep_hatControlledModuleHatStatuses: InContextSdkMethod<Subscription['BaseSep_hatControlledModuleHatStatuses'], SubscriptionBaseSep_hatControlledModuleHatStatusesArgs, MeshContext>,
  /** null **/
  BaseSep_hatControlledWearerStatusSet: InContextSdkMethod<Subscription['BaseSep_hatControlledWearerStatusSet'], SubscriptionBaseSep_hatControlledWearerStatusSetArgs, MeshContext>,
  /** null **/
  BaseSep_hatControlledWearerStatusSets: InContextSdkMethod<Subscription['BaseSep_hatControlledWearerStatusSets'], SubscriptionBaseSep_hatControlledWearerStatusSetsArgs, MeshContext>,
  /** null **/
  BaseSep_hatControlledHatStatusSet: InContextSdkMethod<Subscription['BaseSep_hatControlledHatStatusSet'], SubscriptionBaseSep_hatControlledHatStatusSetArgs, MeshContext>,
  /** null **/
  BaseSep_hatControlledHatStatusSets: InContextSdkMethod<Subscription['BaseSep_hatControlledHatStatusSets'], SubscriptionBaseSep_hatControlledHatStatusSetsArgs, MeshContext>,
  /** null **/
  BaseSep_publicLockV14Eligibility: InContextSdkMethod<Subscription['BaseSep_publicLockV14Eligibility'], SubscriptionBaseSep_publicLockV14EligibilityArgs, MeshContext>,
  /** null **/
  BaseSep_publicLockV14Eligibilities: InContextSdkMethod<Subscription['BaseSep_publicLockV14Eligibilities'], SubscriptionBaseSep_publicLockV14EligibilitiesArgs, MeshContext>,
  /** null **/
  BaseSep_hatsEligibilitiesChain: InContextSdkMethod<Subscription['BaseSep_hatsEligibilitiesChain'], SubscriptionBaseSep_hatsEligibilitiesChainArgs, MeshContext>,
  /** null **/
  BaseSep_hatsEligibilitiesChains: InContextSdkMethod<Subscription['BaseSep_hatsEligibilitiesChains'], SubscriptionBaseSep_hatsEligibilitiesChainsArgs, MeshContext>,
  /** null **/
  BaseSep_eligibilitiesRuleset: InContextSdkMethod<Subscription['BaseSep_eligibilitiesRuleset'], SubscriptionBaseSep_eligibilitiesRulesetArgs, MeshContext>,
  /** null **/
  BaseSep_eligibilitiesRulesets: InContextSdkMethod<Subscription['BaseSep_eligibilitiesRulesets'], SubscriptionBaseSep_eligibilitiesRulesetsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2Event: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2Event'], SubscriptionBaseSep_hatsSignerGateV2EventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsSignerGateV2Events: InContextSdkMethod<Subscription['BaseSep_hatsSignerGateV2Events'], SubscriptionBaseSep_hatsSignerGateV2EventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatsModule: InContextSdkMethod<Subscription['BaseSep_hatsModule'], SubscriptionBaseSep_hatsModuleArgs, MeshContext>,
  /** null **/
  BaseSep_hatsModules: InContextSdkMethod<Subscription['BaseSep_hatsModules'], SubscriptionBaseSep_hatsModulesArgs, MeshContext>,
  /** null **/
  BaseSep_hatsModuleEvent: InContextSdkMethod<Subscription['BaseSep_hatsModuleEvent'], SubscriptionBaseSep_hatsModuleEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatsModuleEvents: InContextSdkMethod<Subscription['BaseSep_hatsModuleEvents'], SubscriptionBaseSep_hatsModuleEventsArgs, MeshContext>,
  /** null **/
  BaseSep_jokeRaceEvent: InContextSdkMethod<Subscription['BaseSep_jokeRaceEvent'], SubscriptionBaseSep_jokeRaceEventArgs, MeshContext>,
  /** null **/
  BaseSep_jokeRaceEvents: InContextSdkMethod<Subscription['BaseSep_jokeRaceEvents'], SubscriptionBaseSep_jokeRaceEventsArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistEvent: InContextSdkMethod<Subscription['BaseSep_allowlistEvent'], SubscriptionBaseSep_allowlistEventArgs, MeshContext>,
  /** null **/
  BaseSep_allowlistEvents: InContextSdkMethod<Subscription['BaseSep_allowlistEvents'], SubscriptionBaseSep_allowlistEventsArgs, MeshContext>,
  /** null **/
  BaseSep_electionEvent: InContextSdkMethod<Subscription['BaseSep_electionEvent'], SubscriptionBaseSep_electionEventArgs, MeshContext>,
  /** null **/
  BaseSep_electionEvents: InContextSdkMethod<Subscription['BaseSep_electionEvents'], SubscriptionBaseSep_electionEventsArgs, MeshContext>,
  /** null **/
  BaseSep_stakingEvent: InContextSdkMethod<Subscription['BaseSep_stakingEvent'], SubscriptionBaseSep_stakingEventArgs, MeshContext>,
  /** null **/
  BaseSep_stakingEvents: InContextSdkMethod<Subscription['BaseSep_stakingEvents'], SubscriptionBaseSep_stakingEventsArgs, MeshContext>,
  /** null **/
  BaseSep_agreementEvent: InContextSdkMethod<Subscription['BaseSep_agreementEvent'], SubscriptionBaseSep_agreementEventArgs, MeshContext>,
  /** null **/
  BaseSep_agreementEvents: InContextSdkMethod<Subscription['BaseSep_agreementEvents'], SubscriptionBaseSep_agreementEventsArgs, MeshContext>,
  /** null **/
  BaseSep_hatControlledModuleEvent: InContextSdkMethod<Subscription['BaseSep_hatControlledModuleEvent'], SubscriptionBaseSep_hatControlledModuleEventArgs, MeshContext>,
  /** null **/
  BaseSep_hatControlledModuleEvents: InContextSdkMethod<Subscription['BaseSep_hatControlledModuleEvents'], SubscriptionBaseSep_hatControlledModuleEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  BaseSep__meta: InContextSdkMethod<Subscription['BaseSep__meta'], SubscriptionBaseSep__metaArgs, MeshContext>
  };

  export type Context = {
      ["BaseSepolia_Ancillary"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
