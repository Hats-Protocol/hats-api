// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace GnosisAncillaryTypes {
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
  Timestamp: { input: any; output: any; }
};

export type Gno_Aggregation_interval =
  | 'hour'
  | 'day';

export type Gno_Agreement = {
  id: Scalars['ID']['output'];
  agreementEligibility: Gno_AgreementEligibility;
  agreement: Scalars['String']['output'];
  signers: Array<Scalars['String']['output']>;
  graceEndTime: Scalars['BigInt']['output'];
};

/**  Agreement Eligibility  */
export type Gno_AgreementEligibility = Gno_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  ownerHat: Gno_HatAuthority;
  arbitratorHat: Gno_HatAuthority;
  currentAgreement: Gno_Agreement;
  currentAgreementNumber: Scalars['BigInt']['output'];
  agreements: Array<Gno_Agreement>;
  events: Array<Gno_AgreementEvent>;
};


/**  Agreement Eligibility  */
export type Gno_AgreementEligibilityagreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Agreement_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Agreement_filter>;
};


/**  Agreement Eligibility  */
export type Gno_AgreementEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_AgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_AgreementEvent_filter>;
};

export type Gno_AgreementEligibility_filter = {
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
  ownerHat_?: InputMaybe<Gno_HatAuthority_filter>;
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
  arbitratorHat_?: InputMaybe<Gno_HatAuthority_filter>;
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
  currentAgreement_?: InputMaybe<Gno_Agreement_filter>;
  currentAgreementNumber?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentAgreementNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  agreements_?: InputMaybe<Gno_Agreement_filter>;
  events_?: InputMaybe<Gno_AgreementEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_AgreementEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_AgreementEligibility_filter>>>;
};

export type Gno_AgreementEligibility_orderBy =
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
  | 'events';

export type Gno_AgreementEvent = {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  agreementEligibilityInstance: Gno_AgreementEligibility;
};

export type Gno_AgreementEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  agreementEligibilityInstance_?: InputMaybe<Gno_AgreementEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_AgreementEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_AgreementEvent_filter>>>;
};

export type Gno_AgreementEvent_orderBy =
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

export type Gno_Agreement_AgreementSetEvent = Gno_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  agreementEligibilityInstance: Gno_AgreementEligibility;
  agreement: Scalars['String']['output'];
  grace: Scalars['BigInt']['output'];
};

export type Gno_Agreement_AgreementSetEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  agreementEligibilityInstance_?: InputMaybe<Gno_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Agreement_AgreementSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Agreement_AgreementSetEvent_filter>>>;
};

export type Gno_Agreement_AgreementSetEvent_orderBy =
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

export type Gno_Agreement_AgreementSignedEvent = Gno_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  agreementEligibilityInstance: Gno_AgreementEligibility;
  signer: Scalars['String']['output'];
  agreement: Scalars['String']['output'];
};

export type Gno_Agreement_AgreementSignedEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  agreementEligibilityInstance_?: InputMaybe<Gno_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Agreement_AgreementSignedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Agreement_AgreementSignedEvent_filter>>>;
};

export type Gno_Agreement_AgreementSignedEvent_orderBy =
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

export type Gno_Agreement_ArbitratorHatSetEvent = Gno_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  agreementEligibilityInstance: Gno_AgreementEligibility;
  newArbitratorHat: Scalars['String']['output'];
};

export type Gno_Agreement_ArbitratorHatSetEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  agreementEligibilityInstance_?: InputMaybe<Gno_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Agreement_ArbitratorHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Agreement_ArbitratorHatSetEvent_filter>>>;
};

export type Gno_Agreement_ArbitratorHatSetEvent_orderBy =
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

export type Gno_Agreement_HatClaimedWithAgreementEvent = Gno_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  agreementEligibilityInstance: Gno_AgreementEligibility;
  claimer: Scalars['String']['output'];
  hatId: Scalars['String']['output'];
  agreement: Scalars['String']['output'];
};

export type Gno_Agreement_HatClaimedWithAgreementEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  agreementEligibilityInstance_?: InputMaybe<Gno_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Agreement_HatClaimedWithAgreementEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Agreement_HatClaimedWithAgreementEvent_filter>>>;
};

export type Gno_Agreement_HatClaimedWithAgreementEvent_orderBy =
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

export type Gno_Agreement_OwnerHatSetEvent = Gno_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  agreementEligibilityInstance: Gno_AgreementEligibility;
  newOwnerHat: Scalars['String']['output'];
};

export type Gno_Agreement_OwnerHatSetEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  agreementEligibilityInstance_?: InputMaybe<Gno_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Agreement_OwnerHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Agreement_OwnerHatSetEvent_filter>>>;
};

export type Gno_Agreement_OwnerHatSetEvent_orderBy =
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

export type Gno_Agreement_filter = {
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
  agreementEligibility_?: InputMaybe<Gno_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Agreement_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Agreement_filter>>>;
};

export type Gno_Agreement_orderBy =
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
export type Gno_AllowListEligibility = Gno_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  ownerHat: Gno_HatAuthority;
  arbitratorHat: Gno_HatAuthority;
  eligibilityData: Array<Gno_AllowListEligibilityData>;
  events: Array<Gno_AllowlistEvent>;
};


/**  Allowlist Eligibility  */
export type Gno_AllowListEligibilityeligibilityDataArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_AllowListEligibilityData_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_AllowListEligibilityData_filter>;
};


/**  Allowlist Eligibility  */
export type Gno_AllowListEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_AllowlistEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_AllowlistEvent_filter>;
};

export type Gno_AllowListEligibilityData = {
  id: Scalars['ID']['output'];
  allowListEligibility: Gno_AllowListEligibility;
  address: Scalars['String']['output'];
  eligible: Scalars['Boolean']['output'];
  badStanding: Scalars['Boolean']['output'];
};

export type Gno_AllowListEligibilityData_filter = {
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
  allowListEligibility_?: InputMaybe<Gno_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_AllowListEligibilityData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_AllowListEligibilityData_filter>>>;
};

export type Gno_AllowListEligibilityData_orderBy =
  | 'id'
  | 'allowListEligibility'
  | 'allowListEligibility__id'
  | 'allowListEligibility__version'
  | 'allowListEligibility__hatId'
  | 'address'
  | 'eligible'
  | 'badStanding';

export type Gno_AllowListEligibility_filter = {
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
  ownerHat_?: InputMaybe<Gno_HatAuthority_filter>;
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
  arbitratorHat_?: InputMaybe<Gno_HatAuthority_filter>;
  eligibilityData_?: InputMaybe<Gno_AllowListEligibilityData_filter>;
  events_?: InputMaybe<Gno_AllowlistEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_AllowListEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_AllowListEligibility_filter>>>;
};

export type Gno_AllowListEligibility_orderBy =
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

export type Gno_AllowlistEvent = {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  allowlistEligibilityInstance: Gno_AllowListEligibility;
};

export type Gno_AllowlistEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  allowlistEligibilityInstance_?: InputMaybe<Gno_AllowListEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_AllowlistEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_AllowlistEvent_filter>>>;
};

export type Gno_AllowlistEvent_orderBy =
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

export type Gno_Allowlist_AccountAddedEvent = Gno_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  allowlistEligibilityInstance: Gno_AllowListEligibility;
  account: Scalars['String']['output'];
};

export type Gno_Allowlist_AccountAddedEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  allowlistEligibilityInstance_?: InputMaybe<Gno_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Allowlist_AccountAddedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Allowlist_AccountAddedEvent_filter>>>;
};

export type Gno_Allowlist_AccountAddedEvent_orderBy =
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

export type Gno_Allowlist_AccountRemovedEvent = Gno_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  allowlistEligibilityInstance: Gno_AllowListEligibility;
  account: Scalars['String']['output'];
};

export type Gno_Allowlist_AccountRemovedEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  allowlistEligibilityInstance_?: InputMaybe<Gno_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Allowlist_AccountRemovedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Allowlist_AccountRemovedEvent_filter>>>;
};

export type Gno_Allowlist_AccountRemovedEvent_orderBy =
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

export type Gno_Allowlist_AccountStandingChangedEvent = Gno_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  allowlistEligibilityInstance: Gno_AllowListEligibility;
  account: Scalars['String']['output'];
  standing: Scalars['Boolean']['output'];
};

export type Gno_Allowlist_AccountStandingChangedEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  allowlistEligibilityInstance_?: InputMaybe<Gno_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Allowlist_AccountStandingChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Allowlist_AccountStandingChangedEvent_filter>>>;
};

export type Gno_Allowlist_AccountStandingChangedEvent_orderBy =
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

export type Gno_Allowlist_AccountsAddedEvent = Gno_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  allowlistEligibilityInstance: Gno_AllowListEligibility;
  accounts: Array<Scalars['String']['output']>;
};

export type Gno_Allowlist_AccountsAddedEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  allowlistEligibilityInstance_?: InputMaybe<Gno_AllowListEligibility_filter>;
  accounts?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Allowlist_AccountsAddedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Allowlist_AccountsAddedEvent_filter>>>;
};

export type Gno_Allowlist_AccountsAddedEvent_orderBy =
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

export type Gno_Allowlist_AccountsRemovedEvent = Gno_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  allowlistEligibilityInstance: Gno_AllowListEligibility;
  accounts: Array<Scalars['String']['output']>;
};

export type Gno_Allowlist_AccountsRemovedEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  allowlistEligibilityInstance_?: InputMaybe<Gno_AllowListEligibility_filter>;
  accounts?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Allowlist_AccountsRemovedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Allowlist_AccountsRemovedEvent_filter>>>;
};

export type Gno_Allowlist_AccountsRemovedEvent_orderBy =
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

export type Gno_Allowlist_AccountsStandingChangedEvent = Gno_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  allowlistEligibilityInstance: Gno_AllowListEligibility;
  accounts: Array<Scalars['String']['output']>;
  standings: Array<Scalars['Boolean']['output']>;
};

export type Gno_Allowlist_AccountsStandingChangedEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  allowlistEligibilityInstance_?: InputMaybe<Gno_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Allowlist_AccountsStandingChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Allowlist_AccountsStandingChangedEvent_filter>>>;
};

export type Gno_Allowlist_AccountsStandingChangedEvent_orderBy =
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

export type Gno_Allowlist_ArbitratorHatSetEvent = Gno_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  allowlistEligibilityInstance: Gno_AllowListEligibility;
  newArbitratorHat: Scalars['String']['output'];
};

export type Gno_Allowlist_ArbitratorHatSetEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  allowlistEligibilityInstance_?: InputMaybe<Gno_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Allowlist_ArbitratorHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Allowlist_ArbitratorHatSetEvent_filter>>>;
};

export type Gno_Allowlist_ArbitratorHatSetEvent_orderBy =
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

export type Gno_Allowlist_OwnerHatSetEvent = Gno_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  allowlistEligibilityInstance: Gno_AllowListEligibility;
  newOwnerHat: Scalars['String']['output'];
};

export type Gno_Allowlist_OwnerHatSetEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  allowlistEligibilityInstance_?: InputMaybe<Gno_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Allowlist_OwnerHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Allowlist_OwnerHatSetEvent_filter>>>;
};

export type Gno_Allowlist_OwnerHatSetEvent_orderBy =
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

export type Gno_BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Gno_Block_height = {
  hash?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

/**  Charecter Sheets Level Eligibility  */
export type Gno_CharacterSheetsLevelEligibility = Gno_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  hatAdmins: Array<Gno_HatAuthority>;
};


/**  Charecter Sheets Level Eligibility  */
export type Gno_CharacterSheetsLevelEligibilityhatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatAuthority_filter>;
};

export type Gno_CharacterSheetsLevelEligibility_filter = {
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
  hatAdmins_?: InputMaybe<Gno_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_CharacterSheetsLevelEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_CharacterSheetsLevelEligibility_filter>>>;
};

export type Gno_CharacterSheetsLevelEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'hatAdmins';

/**  CoLinks Eligibility  */
export type Gno_CoLinksEligibility = Gno_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  threshold: Scalars['BigInt']['output'];
};

export type Gno_CoLinksEligibility_filter = {
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_CoLinksEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_CoLinksEligibility_filter>>>;
};

export type Gno_CoLinksEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'threshold';

export type Gno_ElectionEvent = {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  electionEligibilityInstance: Gno_HatsElectionEligibility;
};

export type Gno_ElectionEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  electionEligibilityInstance_?: InputMaybe<Gno_HatsElectionEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_ElectionEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_ElectionEvent_filter>>>;
};

export type Gno_ElectionEvent_orderBy =
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

export type Gno_ElectionTerm = {
  id: Scalars['ID']['output'];
  hatsElectionEligibility: Gno_HatsElectionEligibility;
  /** first term starts when 'elect' is called, next terms start when 'startNextTerm' is called */
  termStartedAt?: Maybe<Scalars['BigInt']['output']>;
  termEnd: Scalars['BigInt']['output'];
  /** election is completed when 'elect' is called */
  electionCompletedAt?: Maybe<Scalars['BigInt']['output']>;
  electedAccounts?: Maybe<Array<Scalars['String']['output']>>;
};

export type Gno_ElectionTerm_filter = {
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
  hatsElectionEligibility_?: InputMaybe<Gno_HatsElectionEligibility_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_ElectionTerm_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_ElectionTerm_filter>>>;
};

export type Gno_ElectionTerm_orderBy =
  | 'id'
  | 'hatsElectionEligibility'
  | 'hatsElectionEligibility__id'
  | 'hatsElectionEligibility__version'
  | 'hatsElectionEligibility__hatId'
  | 'termStartedAt'
  | 'termEnd'
  | 'electionCompletedAt'
  | 'electedAccounts';

export type Gno_Election_ElectionCompletedEvent = Gno_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  electionEligibilityInstance: Gno_HatsElectionEligibility;
  termEnd: Scalars['BigInt']['output'];
  winners: Array<Scalars['String']['output']>;
};

export type Gno_Election_ElectionCompletedEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  electionEligibilityInstance_?: InputMaybe<Gno_HatsElectionEligibility_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Election_ElectionCompletedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Election_ElectionCompletedEvent_filter>>>;
};

export type Gno_Election_ElectionCompletedEvent_orderBy =
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

export type Gno_Election_ElectionOpenedEvent = Gno_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  electionEligibilityInstance: Gno_HatsElectionEligibility;
  nextTermEnd: Scalars['BigInt']['output'];
};

export type Gno_Election_ElectionOpenedEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  electionEligibilityInstance_?: InputMaybe<Gno_HatsElectionEligibility_filter>;
  nextTermEnd?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_not?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nextTermEnd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Election_ElectionOpenedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Election_ElectionOpenedEvent_filter>>>;
};

export type Gno_Election_ElectionOpenedEvent_orderBy =
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

export type Gno_Election_NewTermStartedEvent = Gno_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  electionEligibilityInstance: Gno_HatsElectionEligibility;
  termEnd: Scalars['BigInt']['output'];
};

export type Gno_Election_NewTermStartedEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  electionEligibilityInstance_?: InputMaybe<Gno_HatsElectionEligibility_filter>;
  termEnd?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_not?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  termEnd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Election_NewTermStartedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Election_NewTermStartedEvent_filter>>>;
};

export type Gno_Election_NewTermStartedEvent_orderBy =
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

export type Gno_Election_RecalledEvent = Gno_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  electionEligibilityInstance: Gno_HatsElectionEligibility;
  termEnd: Scalars['BigInt']['output'];
  accounts: Array<Scalars['String']['output']>;
};

export type Gno_Election_RecalledEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  electionEligibilityInstance_?: InputMaybe<Gno_HatsElectionEligibility_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Election_RecalledEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Election_RecalledEvent_filter>>>;
};

export type Gno_Election_RecalledEvent_orderBy =
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

/**  Erc1155 Eligibility  */
export type Gno_Erc1155Eligibility = Gno_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  contractAddress: Scalars['String']['output'];
  tokens: Array<Scalars['BigInt']['output']>;
  minBalances: Array<Scalars['BigInt']['output']>;
};

export type Gno_Erc1155Eligibility_filter = {
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Erc1155Eligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Erc1155Eligibility_filter>>>;
};

export type Gno_Erc1155Eligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'contractAddress'
  | 'tokens'
  | 'minBalances';

/**  Erc20 Eligibility  */
export type Gno_Erc20Eligibility = Gno_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  token: Scalars['String']['output'];
  minBalance: Scalars['BigInt']['output'];
};

export type Gno_Erc20Eligibility_filter = {
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Erc20Eligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Erc20Eligibility_filter>>>;
};

export type Gno_Erc20Eligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'token'
  | 'minBalance';

/**  Erc721 Eligibility  */
export type Gno_Erc721Eligibility = Gno_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  token: Scalars['String']['output'];
  minBalance: Scalars['BigInt']['output'];
};

export type Gno_Erc721Eligibility_filter = {
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Erc721Eligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Erc721Eligibility_filter>>>;
};

export type Gno_Erc721Eligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'token'
  | 'minBalance';

/**  Gitcoin Passport Eligibility  */
export type Gno_GitcoinPassportEligibility = Gno_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  decoder: Scalars['String']['output'];
  scoreCriterion: Scalars['BigInt']['output'];
};

export type Gno_GitcoinPassportEligibility_filter = {
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_GitcoinPassportEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_GitcoinPassportEligibility_filter>>>;
};

export type Gno_GitcoinPassportEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'decoder'
  | 'scoreCriterion';

export type Gno_HatAuthority = {
  id: Scalars['ID']['output'];
  /** pre computed hats account address with a salt value of 1, null only if the hat was not created yet */
  primaryHatsAccount1ofNAddress?: Maybe<Scalars['String']['output']>;
  hatsAccount1ofN: Array<Gno_HatsAccount1ofN>;
  hsgOwner: Array<Gno_HatsSignerGate>;
  hsgSigner: Array<Gno_HatsSignerGate>;
  jokeraceAdmin: Array<Gno_JokeRaceEligibility>;
  allowListOwner: Array<Gno_AllowListEligibility>;
  allowListArbitrator: Array<Gno_AllowListEligibility>;
  electionsBallotBox: Array<Gno_HatsElectionEligibility>;
  electionsAdmin: Array<Gno_HatsElectionEligibility>;
  eligibilityTogglePassthrough: Array<Gno_PassthroughModule>;
  stakingJudge: Array<Gno_StakingEligibility>;
  stakingRecipient: Array<Gno_StakingEligibility>;
  stakingHatAdmins: Array<Gno_StakingEligibility>;
  seasonHatAdmins: Array<Gno_SeasonToggle>;
  characterSheetsLevelHatAdmins: Array<Gno_CharacterSheetsLevelEligibility>;
  agreementOwner: Array<Gno_AgreementEligibility>;
  agreementArbitrator: Array<Gno_AgreementEligibility>;
  baalStakingJudge: Array<Gno_HatsStakingShaman>;
  hatsFarcasterDelegatorOwner: Array<Gno_HatsFarcasterDelegator>;
  hatsFarcasterDelegatorCaster: Array<Gno_HatsFarcasterDelegator>;
};


export type Gno_HatAuthorityhatsAccount1ofNArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsAccount1ofN_filter>;
};


export type Gno_HatAuthorityhsgOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsSignerGate_filter>;
};


export type Gno_HatAuthorityhsgSignerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsSignerGate_filter>;
};


export type Gno_HatAuthorityjokeraceAdminArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_JokeRaceEligibility_filter>;
};


export type Gno_HatAuthorityallowListOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_AllowListEligibility_filter>;
};


export type Gno_HatAuthorityallowListArbitratorArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_AllowListEligibility_filter>;
};


export type Gno_HatAuthorityelectionsBallotBoxArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsElectionEligibility_filter>;
};


export type Gno_HatAuthorityelectionsAdminArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsElectionEligibility_filter>;
};


export type Gno_HatAuthorityeligibilityTogglePassthroughArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_PassthroughModule_filter>;
};


export type Gno_HatAuthoritystakingJudgeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_StakingEligibility_filter>;
};


export type Gno_HatAuthoritystakingRecipientArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_StakingEligibility_filter>;
};


export type Gno_HatAuthoritystakingHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_StakingEligibility_filter>;
};


export type Gno_HatAuthorityseasonHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_SeasonToggle_filter>;
};


export type Gno_HatAuthoritycharacterSheetsLevelHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_CharacterSheetsLevelEligibility_filter>;
};


export type Gno_HatAuthorityagreementOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_AgreementEligibility_filter>;
};


export type Gno_HatAuthorityagreementArbitratorArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_AgreementEligibility_filter>;
};


export type Gno_HatAuthoritybaalStakingJudgeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsStakingShaman_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsStakingShaman_filter>;
};


export type Gno_HatAuthorityhatsFarcasterDelegatorOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsFarcasterDelegator_filter>;
};


export type Gno_HatAuthorityhatsFarcasterDelegatorCasterArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsFarcasterDelegator_filter>;
};

export type Gno_HatAuthority_filter = {
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
  hatsAccount1ofN_?: InputMaybe<Gno_HatsAccount1ofN_filter>;
  hsgOwner_?: InputMaybe<Gno_HatsSignerGate_filter>;
  hsgSigner_?: InputMaybe<Gno_HatsSignerGate_filter>;
  jokeraceAdmin_?: InputMaybe<Gno_JokeRaceEligibility_filter>;
  allowListOwner_?: InputMaybe<Gno_AllowListEligibility_filter>;
  allowListArbitrator_?: InputMaybe<Gno_AllowListEligibility_filter>;
  electionsBallotBox_?: InputMaybe<Gno_HatsElectionEligibility_filter>;
  electionsAdmin_?: InputMaybe<Gno_HatsElectionEligibility_filter>;
  eligibilityTogglePassthrough_?: InputMaybe<Gno_PassthroughModule_filter>;
  stakingJudge_?: InputMaybe<Gno_StakingEligibility_filter>;
  stakingRecipient_?: InputMaybe<Gno_StakingEligibility_filter>;
  stakingHatAdmins_?: InputMaybe<Gno_StakingEligibility_filter>;
  seasonHatAdmins_?: InputMaybe<Gno_SeasonToggle_filter>;
  characterSheetsLevelHatAdmins_?: InputMaybe<Gno_CharacterSheetsLevelEligibility_filter>;
  agreementOwner_?: InputMaybe<Gno_AgreementEligibility_filter>;
  agreementArbitrator_?: InputMaybe<Gno_AgreementEligibility_filter>;
  baalStakingJudge_?: InputMaybe<Gno_HatsStakingShaman_filter>;
  hatsFarcasterDelegatorOwner_?: InputMaybe<Gno_HatsFarcasterDelegator_filter>;
  hatsFarcasterDelegatorCaster_?: InputMaybe<Gno_HatsFarcasterDelegator_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_HatAuthority_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_HatAuthority_filter>>>;
};

export type Gno_HatAuthority_orderBy =
  | 'id'
  | 'primaryHatsAccount1ofNAddress'
  | 'hatsAccount1ofN'
  | 'hsgOwner'
  | 'hsgSigner'
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

/**  Hat Wearing Eligibility  */
export type Gno_HatWearingEligibility = Gno_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  criterionHat: Scalars['String']['output'];
};

export type Gno_HatWearingEligibility_filter = {
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_HatWearingEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_HatWearingEligibility_filter>>>;
};

export type Gno_HatWearingEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'criterionHat';

export type Gno_HatsAccount1ofN = {
  id: Scalars['ID']['output'];
  accountOfHat: Gno_HatAuthority;
  operations: Array<Gno_HatsAccount1ofNOperation>;
};


export type Gno_HatsAccount1ofNoperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsAccount1ofNOperation_filter>;
};

export type Gno_HatsAccount1ofNOperation = {
  id: Scalars['ID']['output'];
  hatsAccount: Gno_HatsAccount1ofN;
  signer: Scalars['String']['output'];
  to: Scalars['String']['output'];
  value: Scalars['BigInt']['output'];
  callData: Scalars['Gno_Bytes']['output'];
  operationType: Gno_HatsAccountOperationType;
};

export type Gno_HatsAccount1ofNOperation_filter = {
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
  hatsAccount_?: InputMaybe<Gno_HatsAccount1ofN_filter>;
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
  callData?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  callData_not?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  callData_gt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  callData_lt?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  callData_gte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  callData_lte?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  callData_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  callData_not_in?: InputMaybe<Array<Scalars['Gno_Bytes']['input']>>;
  callData_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  callData_not_contains?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  operationType?: InputMaybe<Gno_HatsAccountOperationType>;
  operationType_not?: InputMaybe<Gno_HatsAccountOperationType>;
  operationType_in?: InputMaybe<Array<Gno_HatsAccountOperationType>>;
  operationType_not_in?: InputMaybe<Array<Gno_HatsAccountOperationType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_HatsAccount1ofNOperation_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_HatsAccount1ofNOperation_filter>>>;
};

export type Gno_HatsAccount1ofNOperation_orderBy =
  | 'id'
  | 'hatsAccount'
  | 'hatsAccount__id'
  | 'signer'
  | 'to'
  | 'value'
  | 'callData'
  | 'operationType';

export type Gno_HatsAccount1ofN_filter = {
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
  accountOfHat_?: InputMaybe<Gno_HatAuthority_filter>;
  operations_?: InputMaybe<Gno_HatsAccount1ofNOperation_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_HatsAccount1ofN_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_HatsAccount1ofN_filter>>>;
};

export type Gno_HatsAccount1ofN_orderBy =
  | 'id'
  | 'accountOfHat'
  | 'accountOfHat__id'
  | 'accountOfHat__primaryHatsAccount1ofNAddress'
  | 'operations';

export type Gno_HatsAccountOperationType =
  | 'Call'
  | 'DelegateCall';

/** HatsElection Eligibility */
export type Gno_HatsElectionEligibility = Gno_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  ballotBoxHat: Gno_HatAuthority;
  adminHat: Array<Gno_HatAuthority>;
  terms: Array<Gno_ElectionTerm>;
  currentTerm?: Maybe<Gno_ElectionTerm>;
  events: Array<Gno_ElectionEvent>;
};


/** HatsElection Eligibility */
export type Gno_HatsElectionEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatAuthority_filter>;
};


/** HatsElection Eligibility */
export type Gno_HatsElectionEligibilitytermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_ElectionTerm_filter>;
};


/** HatsElection Eligibility */
export type Gno_HatsElectionEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_ElectionEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_ElectionEvent_filter>;
};

export type Gno_HatsElectionEligibility_filter = {
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
  ballotBoxHat_?: InputMaybe<Gno_HatAuthority_filter>;
  adminHat?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_?: InputMaybe<Gno_HatAuthority_filter>;
  terms_?: InputMaybe<Gno_ElectionTerm_filter>;
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
  currentTerm_?: InputMaybe<Gno_ElectionTerm_filter>;
  events_?: InputMaybe<Gno_ElectionEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_HatsElectionEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_HatsElectionEligibility_filter>>>;
};

export type Gno_HatsElectionEligibility_orderBy =
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

export type Gno_HatsFarcasterDelegator = {
  id: Scalars['ID']['output'];
  caster: Gno_HatAuthority;
  owner: Gno_HatAuthority;
};

export type Gno_HatsFarcasterDelegator_filter = {
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
  caster_?: InputMaybe<Gno_HatAuthority_filter>;
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
  owner_?: InputMaybe<Gno_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_HatsFarcasterDelegator_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_HatsFarcasterDelegator_filter>>>;
};

export type Gno_HatsFarcasterDelegator_orderBy =
  | 'id'
  | 'caster'
  | 'caster__id'
  | 'caster__primaryHatsAccount1ofNAddress'
  | 'owner'
  | 'owner__id'
  | 'owner__primaryHatsAccount1ofNAddress';

/**  *** Modules ***  */
export type Gno_HatsModule = {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
};

export type Gno_HatsModuleEvent = {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
};

export type Gno_HatsModuleEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  and?: InputMaybe<Array<InputMaybe<Gno_HatsModuleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_HatsModuleEvent_filter>>>;
};

export type Gno_HatsModuleEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID';

export type Gno_HatsModule_filter = {
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_HatsModule_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_HatsModule_filter>>>;
};

export type Gno_HatsModule_orderBy =
  | 'id'
  | 'version'
  | 'hatId';

/**  *** Gates ***  */
export type Gno_HatsSignerGate = {
  id: Scalars['ID']['output'];
  type: Gno_HatsSignerGateType;
  ownerHat: Gno_HatAuthority;
  signerHats: Array<Gno_HatAuthority>;
  safe: Scalars['String']['output'];
  minThreshold: Scalars['BigInt']['output'];
  targetThreshold: Scalars['BigInt']['output'];
  maxSigners: Scalars['BigInt']['output'];
};


/**  *** Gates ***  */
export type Gno_HatsSignerGatesignerHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatAuthority_filter>;
};

export type Gno_HatsSignerGateType =
  | 'Single'
  | 'Multi';

export type Gno_HatsSignerGate_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  type?: InputMaybe<Gno_HatsSignerGateType>;
  type_not?: InputMaybe<Gno_HatsSignerGateType>;
  type_in?: InputMaybe<Array<Gno_HatsSignerGateType>>;
  type_not_in?: InputMaybe<Array<Gno_HatsSignerGateType>>;
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
  ownerHat_?: InputMaybe<Gno_HatAuthority_filter>;
  signerHats?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_?: InputMaybe<Gno_HatAuthority_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_HatsSignerGate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_HatsSignerGate_filter>>>;
};

export type Gno_HatsSignerGate_orderBy =
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

export type Gno_HatsStakingShaman = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  judgeHat: Gno_HatAuthority;
  baal: Scalars['String']['output'];
  stakingProxyImpl: Scalars['String']['output'];
  sharesToken: Scalars['String']['output'];
  minStake: Scalars['BigInt']['output'];
  coolDownBuffer: Scalars['BigInt']['output'];
  stakes: Array<Gno_ShamanStake>;
};


export type Gno_HatsStakingShamanstakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_ShamanStake_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_ShamanStake_filter>;
};

export type Gno_HatsStakingShaman_filter = {
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
  judgeHat_?: InputMaybe<Gno_HatAuthority_filter>;
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
  stakes_?: InputMaybe<Gno_ShamanStake_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_HatsStakingShaman_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_HatsStakingShaman_filter>>>;
};

export type Gno_HatsStakingShaman_orderBy =
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
export type Gno_JokeRaceEligibility = Gno_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  adminHat: Array<Gno_HatAuthority>;
  currentTerm?: Maybe<Gno_JokeRaceEligibilityTerm>;
  nextTerm?: Maybe<Gno_JokeRaceEligibilityTerm>;
  allTerms: Array<Gno_JokeRaceEligibilityTerm>;
  events: Array<Gno_JokeRaceEvent>;
};


/**  Jokerace Eligibility  */
export type Gno_JokeRaceEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatAuthority_filter>;
};


/**  Jokerace Eligibility  */
export type Gno_JokeRaceEligibilityallTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_JokeRaceEligibilityTerm_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_JokeRaceEligibilityTerm_filter>;
};


/**  Jokerace Eligibility  */
export type Gno_JokeRaceEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_JokeRaceEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_JokeRaceEvent_filter>;
};

export type Gno_JokeRaceEligibilityTerm = {
  id: Scalars['ID']['output'];
  jokeRaceEligibility: Gno_JokeRaceEligibility;
  termStartedAt?: Maybe<Scalars['BigInt']['output']>;
  termEndsAt: Scalars['BigInt']['output'];
  topK: Scalars['BigInt']['output'];
  transitionPeriod: Scalars['BigInt']['output'];
  contest: Scalars['String']['output'];
  winners?: Maybe<Array<Scalars['String']['output']>>;
};

export type Gno_JokeRaceEligibilityTerm_filter = {
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
  jokeRaceEligibility_?: InputMaybe<Gno_JokeRaceEligibility_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_JokeRaceEligibilityTerm_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_JokeRaceEligibilityTerm_filter>>>;
};

export type Gno_JokeRaceEligibilityTerm_orderBy =
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

export type Gno_JokeRaceEligibility_filter = {
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
  adminHat_?: InputMaybe<Gno_HatAuthority_filter>;
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
  currentTerm_?: InputMaybe<Gno_JokeRaceEligibilityTerm_filter>;
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
  nextTerm_?: InputMaybe<Gno_JokeRaceEligibilityTerm_filter>;
  allTerms_?: InputMaybe<Gno_JokeRaceEligibilityTerm_filter>;
  events_?: InputMaybe<Gno_JokeRaceEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_JokeRaceEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_JokeRaceEligibility_filter>>>;
};

export type Gno_JokeRaceEligibility_orderBy =
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

export type Gno_JokeRaceEvent = {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  jokeRaceEligibilityInstance: Gno_JokeRaceEligibility;
};

export type Gno_JokeRaceEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  jokeRaceEligibilityInstance_?: InputMaybe<Gno_JokeRaceEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_JokeRaceEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_JokeRaceEvent_filter>>>;
};

export type Gno_JokeRaceEvent_orderBy =
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

export type Gno_JokeRace_NextTermSetEvent = Gno_JokeRaceEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  jokeRaceEligibilityInstance: Gno_JokeRaceEligibility;
  newContest: Scalars['String']['output'];
  newTopK: Scalars['BigInt']['output'];
  newTermEnd: Scalars['BigInt']['output'];
  newTransitionPeriod: Scalars['BigInt']['output'];
};

export type Gno_JokeRace_NextTermSetEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  jokeRaceEligibilityInstance_?: InputMaybe<Gno_JokeRaceEligibility_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_JokeRace_NextTermSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_JokeRace_NextTermSetEvent_filter>>>;
};

export type Gno_JokeRace_NextTermSetEvent_orderBy =
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

export type Gno_JokeRace_TermStartedEvent = Gno_JokeRaceEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  jokeRaceEligibilityInstance: Gno_JokeRaceEligibility;
  contest: Scalars['String']['output'];
  topK: Scalars['BigInt']['output'];
  termEnd: Scalars['BigInt']['output'];
  transitionPeriod: Scalars['BigInt']['output'];
};

export type Gno_JokeRace_TermStartedEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  jokeRaceEligibilityInstance_?: InputMaybe<Gno_JokeRaceEligibility_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_JokeRace_TermStartedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_JokeRace_TermStartedEvent_filter>>>;
};

export type Gno_JokeRace_TermStartedEvent_orderBy =
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
export type Gno_OrderDirection =
  | 'asc'
  | 'desc';

/**  Passthrough Module  */
export type Gno_PassthroughModule = Gno_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  passthroughHat: Gno_HatAuthority;
};

export type Gno_PassthroughModule_filter = {
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
  passthroughHat_?: InputMaybe<Gno_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_PassthroughModule_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_PassthroughModule_filter>>>;
};

export type Gno_PassthroughModule_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'passthroughHat'
  | 'passthroughHat__id'
  | 'passthroughHat__primaryHatsAccount1ofNAddress';

export type Query = {
  Gno_hatAuthority?: Maybe<Gno_HatAuthority>;
  Gno_hatAuthorities: Array<Gno_HatAuthority>;
  Gno_hatsSignerGate?: Maybe<Gno_HatsSignerGate>;
  Gno_hatsSignerGates: Array<Gno_HatsSignerGate>;
  Gno_hatsAccount1OfN?: Maybe<Gno_HatsAccount1ofN>;
  Gno_hatsAccount1OfNs: Array<Gno_HatsAccount1ofN>;
  Gno_hatsAccount1OfNOperation?: Maybe<Gno_HatsAccount1ofNOperation>;
  Gno_hatsAccount1OfNOperations: Array<Gno_HatsAccount1ofNOperation>;
  Gno_hatsStakingShaman?: Maybe<Gno_HatsStakingShaman>;
  Gno_hatsStakingShamans: Array<Gno_HatsStakingShaman>;
  Gno_shamanStake?: Maybe<Gno_ShamanStake>;
  Gno_shamanStakes: Array<Gno_ShamanStake>;
  Gno_hatsFarcasterDelegator?: Maybe<Gno_HatsFarcasterDelegator>;
  Gno_hatsFarcasterDelegators: Array<Gno_HatsFarcasterDelegator>;
  Gno_jokeRaceEligibility?: Maybe<Gno_JokeRaceEligibility>;
  Gno_jokeRaceEligibilities: Array<Gno_JokeRaceEligibility>;
  Gno_jokeRaceEligibilityTerm?: Maybe<Gno_JokeRaceEligibilityTerm>;
  Gno_jokeRaceEligibilityTerms: Array<Gno_JokeRaceEligibilityTerm>;
  Gno_jokeRaceNextTermSetEvent?: Maybe<Gno_JokeRace_NextTermSetEvent>;
  Gno_jokeRaceNextTermSetEvents: Array<Gno_JokeRace_NextTermSetEvent>;
  Gno_jokeRaceTermStartedEvent?: Maybe<Gno_JokeRace_TermStartedEvent>;
  Gno_jokeRaceTermStartedEvents: Array<Gno_JokeRace_TermStartedEvent>;
  Gno_allowListEligibility?: Maybe<Gno_AllowListEligibility>;
  Gno_allowListEligibilities: Array<Gno_AllowListEligibility>;
  Gno_allowListEligibilityData?: Maybe<Gno_AllowListEligibilityData>;
  Gno_allowListEligibilityDatas: Array<Gno_AllowListEligibilityData>;
  Gno_allowlistAccountAddedEvent?: Maybe<Gno_Allowlist_AccountAddedEvent>;
  Gno_allowlistAccountAddedEvents: Array<Gno_Allowlist_AccountAddedEvent>;
  Gno_allowlistAccountsAddedEvent?: Maybe<Gno_Allowlist_AccountsAddedEvent>;
  Gno_allowlistAccountsAddedEvents: Array<Gno_Allowlist_AccountsAddedEvent>;
  Gno_allowlistAccountRemovedEvent?: Maybe<Gno_Allowlist_AccountRemovedEvent>;
  Gno_allowlistAccountRemovedEvents: Array<Gno_Allowlist_AccountRemovedEvent>;
  Gno_allowlistAccountsRemovedEvent?: Maybe<Gno_Allowlist_AccountsRemovedEvent>;
  Gno_allowlistAccountsRemovedEvents: Array<Gno_Allowlist_AccountsRemovedEvent>;
  Gno_allowlistAccountStandingChangedEvent?: Maybe<Gno_Allowlist_AccountStandingChangedEvent>;
  Gno_allowlistAccountStandingChangedEvents: Array<Gno_Allowlist_AccountStandingChangedEvent>;
  Gno_allowlistAccountsStandingChangedEvent?: Maybe<Gno_Allowlist_AccountsStandingChangedEvent>;
  Gno_allowlistAccountsStandingChangedEvents: Array<Gno_Allowlist_AccountsStandingChangedEvent>;
  Gno_allowlistOwnerHatSetEvent?: Maybe<Gno_Allowlist_OwnerHatSetEvent>;
  Gno_allowlistOwnerHatSetEvents: Array<Gno_Allowlist_OwnerHatSetEvent>;
  Gno_allowlistArbitratorHatSetEvent?: Maybe<Gno_Allowlist_ArbitratorHatSetEvent>;
  Gno_allowlistArbitratorHatSetEvents: Array<Gno_Allowlist_ArbitratorHatSetEvent>;
  Gno_hatsElectionEligibility?: Maybe<Gno_HatsElectionEligibility>;
  Gno_hatsElectionEligibilities: Array<Gno_HatsElectionEligibility>;
  Gno_electionTerm?: Maybe<Gno_ElectionTerm>;
  Gno_electionTerms: Array<Gno_ElectionTerm>;
  Gno_electionElectionOpenedEvent?: Maybe<Gno_Election_ElectionOpenedEvent>;
  Gno_electionElectionOpenedEvents: Array<Gno_Election_ElectionOpenedEvent>;
  Gno_electionElectionCompletedEvent?: Maybe<Gno_Election_ElectionCompletedEvent>;
  Gno_electionElectionCompletedEvents: Array<Gno_Election_ElectionCompletedEvent>;
  Gno_electionNewTermStartedEvent?: Maybe<Gno_Election_NewTermStartedEvent>;
  Gno_electionNewTermStartedEvents: Array<Gno_Election_NewTermStartedEvent>;
  Gno_electionRecalledEvent?: Maybe<Gno_Election_RecalledEvent>;
  Gno_electionRecalledEvents: Array<Gno_Election_RecalledEvent>;
  Gno_passthroughModule?: Maybe<Gno_PassthroughModule>;
  Gno_passthroughModules: Array<Gno_PassthroughModule>;
  Gno_stakingEligibility?: Maybe<Gno_StakingEligibility>;
  Gno_stakingEligibilities: Array<Gno_StakingEligibility>;
  Gno_stake?: Maybe<Gno_Stake>;
  Gno_stakes: Array<Gno_Stake>;
  Gno_stakingStakedEvent?: Maybe<Gno_Staking_StakedEvent>;
  Gno_stakingStakedEvents: Array<Gno_Staking_StakedEvent>;
  Gno_stakingUnstakeBegunEvent?: Maybe<Gno_Staking_UnstakeBegunEvent>;
  Gno_stakingUnstakeBegunEvents: Array<Gno_Staking_UnstakeBegunEvent>;
  Gno_stakingSlashedEvent?: Maybe<Gno_Staking_SlashedEvent>;
  Gno_stakingSlashedEvents: Array<Gno_Staking_SlashedEvent>;
  Gno_stakingMinStakeChangedEvent?: Maybe<Gno_Staking_MinStakeChangedEvent>;
  Gno_stakingMinStakeChangedEvents: Array<Gno_Staking_MinStakeChangedEvent>;
  Gno_stakingJudgeHatChangedEvent?: Maybe<Gno_Staking_JudgeHatChangedEvent>;
  Gno_stakingJudgeHatChangedEvents: Array<Gno_Staking_JudgeHatChangedEvent>;
  Gno_stakingRecipientHatChangedEvent?: Maybe<Gno_Staking_RecipientHatChangedEvent>;
  Gno_stakingRecipientHatChangedEvents: Array<Gno_Staking_RecipientHatChangedEvent>;
  Gno_stakingCooldownPeriodChangedEvent?: Maybe<Gno_Staking_CooldownPeriodChangedEvent>;
  Gno_stakingCooldownPeriodChangedEvents: Array<Gno_Staking_CooldownPeriodChangedEvent>;
  Gno_stakingForgivenEvent?: Maybe<Gno_Staking_ForgivenEvent>;
  Gno_stakingForgivenEvents: Array<Gno_Staking_ForgivenEvent>;
  Gno_seasonToggle?: Maybe<Gno_SeasonToggle>;
  Gno_seasonToggles: Array<Gno_SeasonToggle>;
  Gno_characterSheetsLevelEligibility?: Maybe<Gno_CharacterSheetsLevelEligibility>;
  Gno_characterSheetsLevelEligibilities: Array<Gno_CharacterSheetsLevelEligibility>;
  Gno_agreementEligibility?: Maybe<Gno_AgreementEligibility>;
  Gno_agreementEligibilities: Array<Gno_AgreementEligibility>;
  Gno_agreement?: Maybe<Gno_Agreement>;
  Gno_agreements: Array<Gno_Agreement>;
  Gno_agreementHatClaimedWithAgreementEvent?: Maybe<Gno_Agreement_HatClaimedWithAgreementEvent>;
  Gno_agreementHatClaimedWithAgreementEvents: Array<Gno_Agreement_HatClaimedWithAgreementEvent>;
  Gno_agreementAgreementSignedEvent?: Maybe<Gno_Agreement_AgreementSignedEvent>;
  Gno_agreementAgreementSignedEvents: Array<Gno_Agreement_AgreementSignedEvent>;
  Gno_agreementAgreementSetEvent?: Maybe<Gno_Agreement_AgreementSetEvent>;
  Gno_agreementAgreementSetEvents: Array<Gno_Agreement_AgreementSetEvent>;
  Gno_agreementOwnerHatSetEvent?: Maybe<Gno_Agreement_OwnerHatSetEvent>;
  Gno_agreementOwnerHatSetEvents: Array<Gno_Agreement_OwnerHatSetEvent>;
  Gno_agreementArbitratorHatSetEvent?: Maybe<Gno_Agreement_ArbitratorHatSetEvent>;
  Gno_agreementArbitratorHatSetEvents: Array<Gno_Agreement_ArbitratorHatSetEvent>;
  Gno_erc20Eligibility?: Maybe<Gno_Erc20Eligibility>;
  Gno_erc20Eligibilities: Array<Gno_Erc20Eligibility>;
  Gno_erc721Eligibility?: Maybe<Gno_Erc721Eligibility>;
  Gno_erc721Eligibilities: Array<Gno_Erc721Eligibility>;
  Gno_erc1155Eligibility?: Maybe<Gno_Erc1155Eligibility>;
  Gno_erc1155Eligibilities: Array<Gno_Erc1155Eligibility>;
  Gno_hatWearingEligibility?: Maybe<Gno_HatWearingEligibility>;
  Gno_hatWearingEligibilities: Array<Gno_HatWearingEligibility>;
  Gno_gitcoinPassportEligibility?: Maybe<Gno_GitcoinPassportEligibility>;
  Gno_gitcoinPassportEligibilities: Array<Gno_GitcoinPassportEligibility>;
  Gno_coLinksEligibility?: Maybe<Gno_CoLinksEligibility>;
  Gno_coLinksEligibilities: Array<Gno_CoLinksEligibility>;
  Gno_hatsModule?: Maybe<Gno_HatsModule>;
  Gno_hatsModules: Array<Gno_HatsModule>;
  Gno_hatsModuleEvent?: Maybe<Gno_HatsModuleEvent>;
  Gno_hatsModuleEvents: Array<Gno_HatsModuleEvent>;
  Gno_jokeRaceEvent?: Maybe<Gno_JokeRaceEvent>;
  Gno_jokeRaceEvents: Array<Gno_JokeRaceEvent>;
  Gno_allowlistEvent?: Maybe<Gno_AllowlistEvent>;
  Gno_allowlistEvents: Array<Gno_AllowlistEvent>;
  Gno_electionEvent?: Maybe<Gno_ElectionEvent>;
  Gno_electionEvents: Array<Gno_ElectionEvent>;
  Gno_stakingEvent?: Maybe<Gno_StakingEvent>;
  Gno_stakingEvents: Array<Gno_StakingEvent>;
  Gno_agreementEvent?: Maybe<Gno_AgreementEvent>;
  Gno_agreementEvents: Array<Gno_AgreementEvent>;
  /** Access to subgraph metadata */
  Gno__meta?: Maybe<Gno__Meta_>;
};


export type QueryGno_hatAuthorityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatAuthoritiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatAuthority_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatsSignerGateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatsSignerGatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsSignerGate_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatsAccount1OfNArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatsAccount1OfNsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsAccount1ofN_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatsAccount1OfNOperationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatsAccount1OfNOperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsAccount1ofNOperation_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatsStakingShamanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatsStakingShamansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsStakingShaman_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsStakingShaman_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_shamanStakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_shamanStakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_ShamanStake_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_ShamanStake_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatsFarcasterDelegatorArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatsFarcasterDelegatorsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsFarcasterDelegator_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_jokeRaceEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_jokeRaceEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_JokeRaceEligibility_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_jokeRaceEligibilityTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_jokeRaceEligibilityTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_JokeRaceEligibilityTerm_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_JokeRaceEligibilityTerm_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_jokeRaceNextTermSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_jokeRaceNextTermSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_JokeRace_NextTermSetEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_JokeRace_NextTermSetEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_jokeRaceTermStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_jokeRaceTermStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_JokeRace_TermStartedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_JokeRace_TermStartedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_allowListEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_allowListEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_AllowListEligibility_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_allowListEligibilityDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_allowListEligibilityDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_AllowListEligibilityData_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_AllowListEligibilityData_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_allowlistAccountAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_allowlistAccountAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Allowlist_AccountAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Allowlist_AccountAddedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_allowlistAccountsAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_allowlistAccountsAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Allowlist_AccountsAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Allowlist_AccountsAddedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_allowlistAccountRemovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_allowlistAccountRemovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Allowlist_AccountRemovedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Allowlist_AccountRemovedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_allowlistAccountsRemovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_allowlistAccountsRemovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Allowlist_AccountsRemovedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Allowlist_AccountsRemovedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_allowlistAccountStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_allowlistAccountStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Allowlist_AccountStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Allowlist_AccountStandingChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_allowlistAccountsStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_allowlistAccountsStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Allowlist_AccountsStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Allowlist_AccountsStandingChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_allowlistOwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_allowlistOwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Allowlist_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Allowlist_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_allowlistArbitratorHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_allowlistArbitratorHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Allowlist_ArbitratorHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Allowlist_ArbitratorHatSetEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatsElectionEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatsElectionEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsElectionEligibility_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_electionTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_electionTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_ElectionTerm_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_electionElectionOpenedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_electionElectionOpenedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Election_ElectionOpenedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Election_ElectionOpenedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_electionElectionCompletedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_electionElectionCompletedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Election_ElectionCompletedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Election_ElectionCompletedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_electionNewTermStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_electionNewTermStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Election_NewTermStartedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Election_NewTermStartedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_electionRecalledEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_electionRecalledEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Election_RecalledEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Election_RecalledEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_passthroughModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_passthroughModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_PassthroughModule_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_stakingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_stakingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_StakingEligibility_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_stakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_stakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Stake_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Stake_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_stakingStakedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_stakingStakedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Staking_StakedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Staking_StakedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_stakingUnstakeBegunEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_stakingUnstakeBegunEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Staking_UnstakeBegunEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Staking_UnstakeBegunEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_stakingSlashedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_stakingSlashedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Staking_SlashedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Staking_SlashedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_stakingMinStakeChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_stakingMinStakeChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Staking_MinStakeChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Staking_MinStakeChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_stakingJudgeHatChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_stakingJudgeHatChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Staking_JudgeHatChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Staking_JudgeHatChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_stakingRecipientHatChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_stakingRecipientHatChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Staking_RecipientHatChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Staking_RecipientHatChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_stakingCooldownPeriodChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_stakingCooldownPeriodChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Staking_CooldownPeriodChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Staking_CooldownPeriodChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_stakingForgivenEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_stakingForgivenEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Staking_ForgivenEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Staking_ForgivenEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_seasonToggleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_seasonTogglesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_SeasonToggle_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_characterSheetsLevelEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_characterSheetsLevelEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_CharacterSheetsLevelEligibility_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_agreementEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_agreementEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_AgreementEligibility_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_agreementArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_agreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Agreement_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Agreement_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_agreementHatClaimedWithAgreementEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_agreementHatClaimedWithAgreementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Agreement_HatClaimedWithAgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Agreement_HatClaimedWithAgreementEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_agreementAgreementSignedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_agreementAgreementSignedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Agreement_AgreementSignedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Agreement_AgreementSignedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_agreementAgreementSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_agreementAgreementSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Agreement_AgreementSetEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Agreement_AgreementSetEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_agreementOwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_agreementOwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Agreement_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Agreement_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_agreementArbitratorHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_agreementArbitratorHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Agreement_ArbitratorHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Agreement_ArbitratorHatSetEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_erc20EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_erc20EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Erc20Eligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Erc20Eligibility_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_erc721EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_erc721EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Erc721Eligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Erc721Eligibility_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_erc1155EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_erc1155EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Erc1155Eligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Erc1155Eligibility_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatWearingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatWearingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatWearingEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatWearingEligibility_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_gitcoinPassportEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_gitcoinPassportEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_GitcoinPassportEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_GitcoinPassportEligibility_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_coLinksEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_coLinksEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_CoLinksEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_CoLinksEligibility_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatsModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatsModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsModule_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsModule_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatsModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_hatsModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsModuleEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_jokeRaceEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_jokeRaceEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_JokeRaceEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_JokeRaceEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_allowlistEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_allowlistEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_AllowlistEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_AllowlistEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_electionEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_electionEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_ElectionEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_ElectionEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_stakingEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_stakingEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_StakingEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_StakingEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_agreementEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno_agreementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_AgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_AgreementEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type QueryGno__metaArgs = {
  block?: InputMaybe<Gno_Block_height>;
};

/**  Season Toggle  */
export type Gno_SeasonToggle = Gno_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  hatAdmins: Array<Gno_HatAuthority>;
};


/**  Season Toggle  */
export type Gno_SeasonTogglehatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatAuthority_filter>;
};

export type Gno_SeasonToggle_filter = {
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
  hatAdmins_?: InputMaybe<Gno_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_SeasonToggle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_SeasonToggle_filter>>>;
};

export type Gno_SeasonToggle_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'hatAdmins';

export type Gno_ShamanStake = {
  id: Scalars['ID']['output'];
  stakingShaman: Gno_HatsStakingShaman;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  unstakingAmount: Scalars['BigInt']['output'];
  canUnstakeAfter: Scalars['BigInt']['output'];
};

export type Gno_ShamanStake_filter = {
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
  stakingShaman_?: InputMaybe<Gno_HatsStakingShaman_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_ShamanStake_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_ShamanStake_filter>>>;
};

export type Gno_ShamanStake_orderBy =
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

export type Gno_Stake = {
  id: Scalars['ID']['output'];
  stakingEligiblity: Gno_StakingEligibility;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  slashed: Scalars['Boolean']['output'];
  cooldownAmount: Scalars['BigInt']['output'];
  cooldownEndsAt: Scalars['BigInt']['output'];
};

export type Gno_Stake_filter = {
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
  stakingEligiblity_?: InputMaybe<Gno_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Stake_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Stake_filter>>>;
};

export type Gno_Stake_orderBy =
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
export type Gno_StakingEligibility = Gno_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  token: Scalars['String']['output'];
  judgeHat: Gno_HatAuthority;
  recipientHat: Gno_HatAuthority;
  hatAdmins: Array<Gno_HatAuthority>;
  minStake: Scalars['BigInt']['output'];
  cooldownPeriod: Scalars['BigInt']['output'];
  totalSlashedStakes: Scalars['BigInt']['output'];
  stakes: Array<Gno_Stake>;
  events: Array<Gno_StakingEvent>;
};


/**  Staking Eligibility  */
export type Gno_StakingEligibilityhatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatAuthority_filter>;
};


/**  Staking Eligibility  */
export type Gno_StakingEligibilitystakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Stake_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Stake_filter>;
};


/**  Staking Eligibility  */
export type Gno_StakingEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_StakingEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_StakingEvent_filter>;
};

export type Gno_StakingEligibility_filter = {
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
  judgeHat_?: InputMaybe<Gno_HatAuthority_filter>;
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
  recipientHat_?: InputMaybe<Gno_HatAuthority_filter>;
  hatAdmins?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_?: InputMaybe<Gno_HatAuthority_filter>;
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
  stakes_?: InputMaybe<Gno_Stake_filter>;
  events_?: InputMaybe<Gno_StakingEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_StakingEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_StakingEligibility_filter>>>;
};

export type Gno_StakingEligibility_orderBy =
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

export type Gno_StakingEvent = {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  stakingEligibilityInstance: Gno_StakingEligibility;
};

export type Gno_StakingEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  stakingEligibilityInstance_?: InputMaybe<Gno_StakingEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_StakingEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_StakingEvent_filter>>>;
};

export type Gno_StakingEvent_orderBy =
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

export type Gno_Staking_CooldownPeriodChangedEvent = Gno_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  stakingEligibilityInstance: Gno_StakingEligibility;
  newDelay: Scalars['BigInt']['output'];
};

export type Gno_Staking_CooldownPeriodChangedEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  stakingEligibilityInstance_?: InputMaybe<Gno_StakingEligibility_filter>;
  newDelay?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_not?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newDelay_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Staking_CooldownPeriodChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Staking_CooldownPeriodChangedEvent_filter>>>;
};

export type Gno_Staking_CooldownPeriodChangedEvent_orderBy =
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

export type Gno_Staking_ForgivenEvent = Gno_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  stakingEligibilityInstance: Gno_StakingEligibility;
  staker: Scalars['String']['output'];
};

export type Gno_Staking_ForgivenEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  stakingEligibilityInstance_?: InputMaybe<Gno_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Staking_ForgivenEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Staking_ForgivenEvent_filter>>>;
};

export type Gno_Staking_ForgivenEvent_orderBy =
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

export type Gno_Staking_JudgeHatChangedEvent = Gno_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  stakingEligibilityInstance: Gno_StakingEligibility;
  newJudgeHat: Scalars['String']['output'];
};

export type Gno_Staking_JudgeHatChangedEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  stakingEligibilityInstance_?: InputMaybe<Gno_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Staking_JudgeHatChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Staking_JudgeHatChangedEvent_filter>>>;
};

export type Gno_Staking_JudgeHatChangedEvent_orderBy =
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

export type Gno_Staking_MinStakeChangedEvent = Gno_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  stakingEligibilityInstance: Gno_StakingEligibility;
  newMinStake: Scalars['BigInt']['output'];
};

export type Gno_Staking_MinStakeChangedEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  stakingEligibilityInstance_?: InputMaybe<Gno_StakingEligibility_filter>;
  newMinStake?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_not?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newMinStake_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Staking_MinStakeChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Staking_MinStakeChangedEvent_filter>>>;
};

export type Gno_Staking_MinStakeChangedEvent_orderBy =
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

export type Gno_Staking_RecipientHatChangedEvent = Gno_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  stakingEligibilityInstance: Gno_StakingEligibility;
  newRecipientHat: Scalars['String']['output'];
};

export type Gno_Staking_RecipientHatChangedEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  stakingEligibilityInstance_?: InputMaybe<Gno_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Staking_RecipientHatChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Staking_RecipientHatChangedEvent_filter>>>;
};

export type Gno_Staking_RecipientHatChangedEvent_orderBy =
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

export type Gno_Staking_SlashedEvent = Gno_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  stakingEligibilityInstance: Gno_StakingEligibility;
  wearer: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
};

export type Gno_Staking_SlashedEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  stakingEligibilityInstance_?: InputMaybe<Gno_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Staking_SlashedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Staking_SlashedEvent_filter>>>;
};

export type Gno_Staking_SlashedEvent_orderBy =
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

export type Gno_Staking_StakedEvent = Gno_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  stakingEligibilityInstance: Gno_StakingEligibility;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
};

export type Gno_Staking_StakedEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  stakingEligibilityInstance_?: InputMaybe<Gno_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Staking_StakedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Staking_StakedEvent_filter>>>;
};

export type Gno_Staking_StakedEvent_orderBy =
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

export type Gno_Staking_UnstakeBegunEvent = Gno_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Gno_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Gno_Bytes']['output'];
  stakingEligibilityInstance: Gno_StakingEligibility;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  cooldownEnd: Scalars['BigInt']['output'];
};

export type Gno_Staking_UnstakeBegunEvent_filter = {
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
  module_?: InputMaybe<Gno_HatsModule_filter>;
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
  stakingEligibilityInstance_?: InputMaybe<Gno_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_Staking_UnstakeBegunEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_Staking_UnstakeBegunEvent_filter>>>;
};

export type Gno_Staking_UnstakeBegunEvent_orderBy =
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
  Gno_hatAuthority?: Maybe<Gno_HatAuthority>;
  Gno_hatAuthorities: Array<Gno_HatAuthority>;
  Gno_hatsSignerGate?: Maybe<Gno_HatsSignerGate>;
  Gno_hatsSignerGates: Array<Gno_HatsSignerGate>;
  Gno_hatsAccount1OfN?: Maybe<Gno_HatsAccount1ofN>;
  Gno_hatsAccount1OfNs: Array<Gno_HatsAccount1ofN>;
  Gno_hatsAccount1OfNOperation?: Maybe<Gno_HatsAccount1ofNOperation>;
  Gno_hatsAccount1OfNOperations: Array<Gno_HatsAccount1ofNOperation>;
  Gno_hatsStakingShaman?: Maybe<Gno_HatsStakingShaman>;
  Gno_hatsStakingShamans: Array<Gno_HatsStakingShaman>;
  Gno_shamanStake?: Maybe<Gno_ShamanStake>;
  Gno_shamanStakes: Array<Gno_ShamanStake>;
  Gno_hatsFarcasterDelegator?: Maybe<Gno_HatsFarcasterDelegator>;
  Gno_hatsFarcasterDelegators: Array<Gno_HatsFarcasterDelegator>;
  Gno_jokeRaceEligibility?: Maybe<Gno_JokeRaceEligibility>;
  Gno_jokeRaceEligibilities: Array<Gno_JokeRaceEligibility>;
  Gno_jokeRaceEligibilityTerm?: Maybe<Gno_JokeRaceEligibilityTerm>;
  Gno_jokeRaceEligibilityTerms: Array<Gno_JokeRaceEligibilityTerm>;
  Gno_jokeRaceNextTermSetEvent?: Maybe<Gno_JokeRace_NextTermSetEvent>;
  Gno_jokeRaceNextTermSetEvents: Array<Gno_JokeRace_NextTermSetEvent>;
  Gno_jokeRaceTermStartedEvent?: Maybe<Gno_JokeRace_TermStartedEvent>;
  Gno_jokeRaceTermStartedEvents: Array<Gno_JokeRace_TermStartedEvent>;
  Gno_allowListEligibility?: Maybe<Gno_AllowListEligibility>;
  Gno_allowListEligibilities: Array<Gno_AllowListEligibility>;
  Gno_allowListEligibilityData?: Maybe<Gno_AllowListEligibilityData>;
  Gno_allowListEligibilityDatas: Array<Gno_AllowListEligibilityData>;
  Gno_allowlistAccountAddedEvent?: Maybe<Gno_Allowlist_AccountAddedEvent>;
  Gno_allowlistAccountAddedEvents: Array<Gno_Allowlist_AccountAddedEvent>;
  Gno_allowlistAccountsAddedEvent?: Maybe<Gno_Allowlist_AccountsAddedEvent>;
  Gno_allowlistAccountsAddedEvents: Array<Gno_Allowlist_AccountsAddedEvent>;
  Gno_allowlistAccountRemovedEvent?: Maybe<Gno_Allowlist_AccountRemovedEvent>;
  Gno_allowlistAccountRemovedEvents: Array<Gno_Allowlist_AccountRemovedEvent>;
  Gno_allowlistAccountsRemovedEvent?: Maybe<Gno_Allowlist_AccountsRemovedEvent>;
  Gno_allowlistAccountsRemovedEvents: Array<Gno_Allowlist_AccountsRemovedEvent>;
  Gno_allowlistAccountStandingChangedEvent?: Maybe<Gno_Allowlist_AccountStandingChangedEvent>;
  Gno_allowlistAccountStandingChangedEvents: Array<Gno_Allowlist_AccountStandingChangedEvent>;
  Gno_allowlistAccountsStandingChangedEvent?: Maybe<Gno_Allowlist_AccountsStandingChangedEvent>;
  Gno_allowlistAccountsStandingChangedEvents: Array<Gno_Allowlist_AccountsStandingChangedEvent>;
  Gno_allowlistOwnerHatSetEvent?: Maybe<Gno_Allowlist_OwnerHatSetEvent>;
  Gno_allowlistOwnerHatSetEvents: Array<Gno_Allowlist_OwnerHatSetEvent>;
  Gno_allowlistArbitratorHatSetEvent?: Maybe<Gno_Allowlist_ArbitratorHatSetEvent>;
  Gno_allowlistArbitratorHatSetEvents: Array<Gno_Allowlist_ArbitratorHatSetEvent>;
  Gno_hatsElectionEligibility?: Maybe<Gno_HatsElectionEligibility>;
  Gno_hatsElectionEligibilities: Array<Gno_HatsElectionEligibility>;
  Gno_electionTerm?: Maybe<Gno_ElectionTerm>;
  Gno_electionTerms: Array<Gno_ElectionTerm>;
  Gno_electionElectionOpenedEvent?: Maybe<Gno_Election_ElectionOpenedEvent>;
  Gno_electionElectionOpenedEvents: Array<Gno_Election_ElectionOpenedEvent>;
  Gno_electionElectionCompletedEvent?: Maybe<Gno_Election_ElectionCompletedEvent>;
  Gno_electionElectionCompletedEvents: Array<Gno_Election_ElectionCompletedEvent>;
  Gno_electionNewTermStartedEvent?: Maybe<Gno_Election_NewTermStartedEvent>;
  Gno_electionNewTermStartedEvents: Array<Gno_Election_NewTermStartedEvent>;
  Gno_electionRecalledEvent?: Maybe<Gno_Election_RecalledEvent>;
  Gno_electionRecalledEvents: Array<Gno_Election_RecalledEvent>;
  Gno_passthroughModule?: Maybe<Gno_PassthroughModule>;
  Gno_passthroughModules: Array<Gno_PassthroughModule>;
  Gno_stakingEligibility?: Maybe<Gno_StakingEligibility>;
  Gno_stakingEligibilities: Array<Gno_StakingEligibility>;
  Gno_stake?: Maybe<Gno_Stake>;
  Gno_stakes: Array<Gno_Stake>;
  Gno_stakingStakedEvent?: Maybe<Gno_Staking_StakedEvent>;
  Gno_stakingStakedEvents: Array<Gno_Staking_StakedEvent>;
  Gno_stakingUnstakeBegunEvent?: Maybe<Gno_Staking_UnstakeBegunEvent>;
  Gno_stakingUnstakeBegunEvents: Array<Gno_Staking_UnstakeBegunEvent>;
  Gno_stakingSlashedEvent?: Maybe<Gno_Staking_SlashedEvent>;
  Gno_stakingSlashedEvents: Array<Gno_Staking_SlashedEvent>;
  Gno_stakingMinStakeChangedEvent?: Maybe<Gno_Staking_MinStakeChangedEvent>;
  Gno_stakingMinStakeChangedEvents: Array<Gno_Staking_MinStakeChangedEvent>;
  Gno_stakingJudgeHatChangedEvent?: Maybe<Gno_Staking_JudgeHatChangedEvent>;
  Gno_stakingJudgeHatChangedEvents: Array<Gno_Staking_JudgeHatChangedEvent>;
  Gno_stakingRecipientHatChangedEvent?: Maybe<Gno_Staking_RecipientHatChangedEvent>;
  Gno_stakingRecipientHatChangedEvents: Array<Gno_Staking_RecipientHatChangedEvent>;
  Gno_stakingCooldownPeriodChangedEvent?: Maybe<Gno_Staking_CooldownPeriodChangedEvent>;
  Gno_stakingCooldownPeriodChangedEvents: Array<Gno_Staking_CooldownPeriodChangedEvent>;
  Gno_stakingForgivenEvent?: Maybe<Gno_Staking_ForgivenEvent>;
  Gno_stakingForgivenEvents: Array<Gno_Staking_ForgivenEvent>;
  Gno_seasonToggle?: Maybe<Gno_SeasonToggle>;
  Gno_seasonToggles: Array<Gno_SeasonToggle>;
  Gno_characterSheetsLevelEligibility?: Maybe<Gno_CharacterSheetsLevelEligibility>;
  Gno_characterSheetsLevelEligibilities: Array<Gno_CharacterSheetsLevelEligibility>;
  Gno_agreementEligibility?: Maybe<Gno_AgreementEligibility>;
  Gno_agreementEligibilities: Array<Gno_AgreementEligibility>;
  Gno_agreement?: Maybe<Gno_Agreement>;
  Gno_agreements: Array<Gno_Agreement>;
  Gno_agreementHatClaimedWithAgreementEvent?: Maybe<Gno_Agreement_HatClaimedWithAgreementEvent>;
  Gno_agreementHatClaimedWithAgreementEvents: Array<Gno_Agreement_HatClaimedWithAgreementEvent>;
  Gno_agreementAgreementSignedEvent?: Maybe<Gno_Agreement_AgreementSignedEvent>;
  Gno_agreementAgreementSignedEvents: Array<Gno_Agreement_AgreementSignedEvent>;
  Gno_agreementAgreementSetEvent?: Maybe<Gno_Agreement_AgreementSetEvent>;
  Gno_agreementAgreementSetEvents: Array<Gno_Agreement_AgreementSetEvent>;
  Gno_agreementOwnerHatSetEvent?: Maybe<Gno_Agreement_OwnerHatSetEvent>;
  Gno_agreementOwnerHatSetEvents: Array<Gno_Agreement_OwnerHatSetEvent>;
  Gno_agreementArbitratorHatSetEvent?: Maybe<Gno_Agreement_ArbitratorHatSetEvent>;
  Gno_agreementArbitratorHatSetEvents: Array<Gno_Agreement_ArbitratorHatSetEvent>;
  Gno_erc20Eligibility?: Maybe<Gno_Erc20Eligibility>;
  Gno_erc20Eligibilities: Array<Gno_Erc20Eligibility>;
  Gno_erc721Eligibility?: Maybe<Gno_Erc721Eligibility>;
  Gno_erc721Eligibilities: Array<Gno_Erc721Eligibility>;
  Gno_erc1155Eligibility?: Maybe<Gno_Erc1155Eligibility>;
  Gno_erc1155Eligibilities: Array<Gno_Erc1155Eligibility>;
  Gno_hatWearingEligibility?: Maybe<Gno_HatWearingEligibility>;
  Gno_hatWearingEligibilities: Array<Gno_HatWearingEligibility>;
  Gno_gitcoinPassportEligibility?: Maybe<Gno_GitcoinPassportEligibility>;
  Gno_gitcoinPassportEligibilities: Array<Gno_GitcoinPassportEligibility>;
  Gno_coLinksEligibility?: Maybe<Gno_CoLinksEligibility>;
  Gno_coLinksEligibilities: Array<Gno_CoLinksEligibility>;
  Gno_hatsModule?: Maybe<Gno_HatsModule>;
  Gno_hatsModules: Array<Gno_HatsModule>;
  Gno_hatsModuleEvent?: Maybe<Gno_HatsModuleEvent>;
  Gno_hatsModuleEvents: Array<Gno_HatsModuleEvent>;
  Gno_jokeRaceEvent?: Maybe<Gno_JokeRaceEvent>;
  Gno_jokeRaceEvents: Array<Gno_JokeRaceEvent>;
  Gno_allowlistEvent?: Maybe<Gno_AllowlistEvent>;
  Gno_allowlistEvents: Array<Gno_AllowlistEvent>;
  Gno_electionEvent?: Maybe<Gno_ElectionEvent>;
  Gno_electionEvents: Array<Gno_ElectionEvent>;
  Gno_stakingEvent?: Maybe<Gno_StakingEvent>;
  Gno_stakingEvents: Array<Gno_StakingEvent>;
  Gno_agreementEvent?: Maybe<Gno_AgreementEvent>;
  Gno_agreementEvents: Array<Gno_AgreementEvent>;
  /** Access to subgraph metadata */
  Gno__meta?: Maybe<Gno__Meta_>;
};


export type SubscriptionGno_hatAuthorityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatAuthoritiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatAuthority_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatsSignerGateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatsSignerGatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsSignerGate_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatsAccount1OfNArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatsAccount1OfNsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsAccount1ofN_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatsAccount1OfNOperationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatsAccount1OfNOperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsAccount1ofNOperation_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatsStakingShamanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatsStakingShamansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsStakingShaman_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsStakingShaman_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_shamanStakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_shamanStakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_ShamanStake_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_ShamanStake_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatsFarcasterDelegatorArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatsFarcasterDelegatorsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsFarcasterDelegator_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_jokeRaceEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_jokeRaceEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_JokeRaceEligibility_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_jokeRaceEligibilityTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_jokeRaceEligibilityTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_JokeRaceEligibilityTerm_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_JokeRaceEligibilityTerm_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_jokeRaceNextTermSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_jokeRaceNextTermSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_JokeRace_NextTermSetEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_JokeRace_NextTermSetEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_jokeRaceTermStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_jokeRaceTermStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_JokeRace_TermStartedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_JokeRace_TermStartedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_allowListEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_allowListEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_AllowListEligibility_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_allowListEligibilityDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_allowListEligibilityDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_AllowListEligibilityData_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_AllowListEligibilityData_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_allowlistAccountAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_allowlistAccountAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Allowlist_AccountAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Allowlist_AccountAddedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_allowlistAccountsAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_allowlistAccountsAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Allowlist_AccountsAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Allowlist_AccountsAddedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_allowlistAccountRemovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_allowlistAccountRemovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Allowlist_AccountRemovedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Allowlist_AccountRemovedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_allowlistAccountsRemovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_allowlistAccountsRemovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Allowlist_AccountsRemovedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Allowlist_AccountsRemovedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_allowlistAccountStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_allowlistAccountStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Allowlist_AccountStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Allowlist_AccountStandingChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_allowlistAccountsStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_allowlistAccountsStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Allowlist_AccountsStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Allowlist_AccountsStandingChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_allowlistOwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_allowlistOwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Allowlist_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Allowlist_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_allowlistArbitratorHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_allowlistArbitratorHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Allowlist_ArbitratorHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Allowlist_ArbitratorHatSetEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatsElectionEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatsElectionEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsElectionEligibility_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_electionTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_electionTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_ElectionTerm_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_electionElectionOpenedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_electionElectionOpenedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Election_ElectionOpenedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Election_ElectionOpenedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_electionElectionCompletedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_electionElectionCompletedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Election_ElectionCompletedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Election_ElectionCompletedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_electionNewTermStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_electionNewTermStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Election_NewTermStartedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Election_NewTermStartedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_electionRecalledEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_electionRecalledEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Election_RecalledEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Election_RecalledEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_passthroughModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_passthroughModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_PassthroughModule_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_stakingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_stakingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_StakingEligibility_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_stakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_stakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Stake_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Stake_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_stakingStakedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_stakingStakedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Staking_StakedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Staking_StakedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_stakingUnstakeBegunEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_stakingUnstakeBegunEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Staking_UnstakeBegunEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Staking_UnstakeBegunEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_stakingSlashedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_stakingSlashedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Staking_SlashedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Staking_SlashedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_stakingMinStakeChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_stakingMinStakeChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Staking_MinStakeChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Staking_MinStakeChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_stakingJudgeHatChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_stakingJudgeHatChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Staking_JudgeHatChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Staking_JudgeHatChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_stakingRecipientHatChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_stakingRecipientHatChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Staking_RecipientHatChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Staking_RecipientHatChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_stakingCooldownPeriodChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_stakingCooldownPeriodChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Staking_CooldownPeriodChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Staking_CooldownPeriodChangedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_stakingForgivenEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_stakingForgivenEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Staking_ForgivenEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Staking_ForgivenEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_seasonToggleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_seasonTogglesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_SeasonToggle_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_characterSheetsLevelEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_characterSheetsLevelEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_CharacterSheetsLevelEligibility_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_agreementEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_agreementEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_AgreementEligibility_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_agreementArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_agreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Agreement_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Agreement_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_agreementHatClaimedWithAgreementEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_agreementHatClaimedWithAgreementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Agreement_HatClaimedWithAgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Agreement_HatClaimedWithAgreementEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_agreementAgreementSignedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_agreementAgreementSignedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Agreement_AgreementSignedEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Agreement_AgreementSignedEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_agreementAgreementSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_agreementAgreementSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Agreement_AgreementSetEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Agreement_AgreementSetEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_agreementOwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_agreementOwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Agreement_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Agreement_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_agreementArbitratorHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_agreementArbitratorHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Agreement_ArbitratorHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Agreement_ArbitratorHatSetEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_erc20EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_erc20EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Erc20Eligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Erc20Eligibility_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_erc721EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_erc721EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Erc721Eligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Erc721Eligibility_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_erc1155EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_erc1155EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Erc1155Eligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Erc1155Eligibility_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatWearingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatWearingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatWearingEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatWearingEligibility_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_gitcoinPassportEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_gitcoinPassportEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_GitcoinPassportEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_GitcoinPassportEligibility_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_coLinksEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_coLinksEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_CoLinksEligibility_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_CoLinksEligibility_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatsModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatsModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsModule_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsModule_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatsModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_hatsModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatsModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatsModuleEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_jokeRaceEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_jokeRaceEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_JokeRaceEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_JokeRaceEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_allowlistEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_allowlistEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_AllowlistEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_AllowlistEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_electionEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_electionEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_ElectionEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_ElectionEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_stakingEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_stakingEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_StakingEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_StakingEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_agreementEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno_agreementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_AgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_AgreementEvent_filter>;
  block?: InputMaybe<Gno_Block_height>;
  subgraphError?: Gno__SubgraphErrorPolicy_;
};


export type SubscriptionGno__metaArgs = {
  block?: InputMaybe<Gno_Block_height>;
};

export type Gno__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Gno_Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Gno_Bytes']['output']>;
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
  Gno_hatAuthority: InContextSdkMethod<Query['Gno_hatAuthority'], QueryGno_hatAuthorityArgs, MeshContext>,
  /** null **/
  Gno_hatAuthorities: InContextSdkMethod<Query['Gno_hatAuthorities'], QueryGno_hatAuthoritiesArgs, MeshContext>,
  /** null **/
  Gno_hatsSignerGate: InContextSdkMethod<Query['Gno_hatsSignerGate'], QueryGno_hatsSignerGateArgs, MeshContext>,
  /** null **/
  Gno_hatsSignerGates: InContextSdkMethod<Query['Gno_hatsSignerGates'], QueryGno_hatsSignerGatesArgs, MeshContext>,
  /** null **/
  Gno_hatsAccount1OfN: InContextSdkMethod<Query['Gno_hatsAccount1OfN'], QueryGno_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  Gno_hatsAccount1OfNs: InContextSdkMethod<Query['Gno_hatsAccount1OfNs'], QueryGno_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  Gno_hatsAccount1OfNOperation: InContextSdkMethod<Query['Gno_hatsAccount1OfNOperation'], QueryGno_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  Gno_hatsAccount1OfNOperations: InContextSdkMethod<Query['Gno_hatsAccount1OfNOperations'], QueryGno_hatsAccount1OfNOperationsArgs, MeshContext>,
  /** null **/
  Gno_hatsStakingShaman: InContextSdkMethod<Query['Gno_hatsStakingShaman'], QueryGno_hatsStakingShamanArgs, MeshContext>,
  /** null **/
  Gno_hatsStakingShamans: InContextSdkMethod<Query['Gno_hatsStakingShamans'], QueryGno_hatsStakingShamansArgs, MeshContext>,
  /** null **/
  Gno_shamanStake: InContextSdkMethod<Query['Gno_shamanStake'], QueryGno_shamanStakeArgs, MeshContext>,
  /** null **/
  Gno_shamanStakes: InContextSdkMethod<Query['Gno_shamanStakes'], QueryGno_shamanStakesArgs, MeshContext>,
  /** null **/
  Gno_hatsFarcasterDelegator: InContextSdkMethod<Query['Gno_hatsFarcasterDelegator'], QueryGno_hatsFarcasterDelegatorArgs, MeshContext>,
  /** null **/
  Gno_hatsFarcasterDelegators: InContextSdkMethod<Query['Gno_hatsFarcasterDelegators'], QueryGno_hatsFarcasterDelegatorsArgs, MeshContext>,
  /** null **/
  Gno_jokeRaceEligibility: InContextSdkMethod<Query['Gno_jokeRaceEligibility'], QueryGno_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  Gno_jokeRaceEligibilities: InContextSdkMethod<Query['Gno_jokeRaceEligibilities'], QueryGno_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_jokeRaceEligibilityTerm: InContextSdkMethod<Query['Gno_jokeRaceEligibilityTerm'], QueryGno_jokeRaceEligibilityTermArgs, MeshContext>,
  /** null **/
  Gno_jokeRaceEligibilityTerms: InContextSdkMethod<Query['Gno_jokeRaceEligibilityTerms'], QueryGno_jokeRaceEligibilityTermsArgs, MeshContext>,
  /** null **/
  Gno_jokeRaceNextTermSetEvent: InContextSdkMethod<Query['Gno_jokeRaceNextTermSetEvent'], QueryGno_jokeRaceNextTermSetEventArgs, MeshContext>,
  /** null **/
  Gno_jokeRaceNextTermSetEvents: InContextSdkMethod<Query['Gno_jokeRaceNextTermSetEvents'], QueryGno_jokeRaceNextTermSetEventsArgs, MeshContext>,
  /** null **/
  Gno_jokeRaceTermStartedEvent: InContextSdkMethod<Query['Gno_jokeRaceTermStartedEvent'], QueryGno_jokeRaceTermStartedEventArgs, MeshContext>,
  /** null **/
  Gno_jokeRaceTermStartedEvents: InContextSdkMethod<Query['Gno_jokeRaceTermStartedEvents'], QueryGno_jokeRaceTermStartedEventsArgs, MeshContext>,
  /** null **/
  Gno_allowListEligibility: InContextSdkMethod<Query['Gno_allowListEligibility'], QueryGno_allowListEligibilityArgs, MeshContext>,
  /** null **/
  Gno_allowListEligibilities: InContextSdkMethod<Query['Gno_allowListEligibilities'], QueryGno_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_allowListEligibilityData: InContextSdkMethod<Query['Gno_allowListEligibilityData'], QueryGno_allowListEligibilityDataArgs, MeshContext>,
  /** null **/
  Gno_allowListEligibilityDatas: InContextSdkMethod<Query['Gno_allowListEligibilityDatas'], QueryGno_allowListEligibilityDatasArgs, MeshContext>,
  /** null **/
  Gno_allowlistAccountAddedEvent: InContextSdkMethod<Query['Gno_allowlistAccountAddedEvent'], QueryGno_allowlistAccountAddedEventArgs, MeshContext>,
  /** null **/
  Gno_allowlistAccountAddedEvents: InContextSdkMethod<Query['Gno_allowlistAccountAddedEvents'], QueryGno_allowlistAccountAddedEventsArgs, MeshContext>,
  /** null **/
  Gno_allowlistAccountsAddedEvent: InContextSdkMethod<Query['Gno_allowlistAccountsAddedEvent'], QueryGno_allowlistAccountsAddedEventArgs, MeshContext>,
  /** null **/
  Gno_allowlistAccountsAddedEvents: InContextSdkMethod<Query['Gno_allowlistAccountsAddedEvents'], QueryGno_allowlistAccountsAddedEventsArgs, MeshContext>,
  /** null **/
  Gno_allowlistAccountRemovedEvent: InContextSdkMethod<Query['Gno_allowlistAccountRemovedEvent'], QueryGno_allowlistAccountRemovedEventArgs, MeshContext>,
  /** null **/
  Gno_allowlistAccountRemovedEvents: InContextSdkMethod<Query['Gno_allowlistAccountRemovedEvents'], QueryGno_allowlistAccountRemovedEventsArgs, MeshContext>,
  /** null **/
  Gno_allowlistAccountsRemovedEvent: InContextSdkMethod<Query['Gno_allowlistAccountsRemovedEvent'], QueryGno_allowlistAccountsRemovedEventArgs, MeshContext>,
  /** null **/
  Gno_allowlistAccountsRemovedEvents: InContextSdkMethod<Query['Gno_allowlistAccountsRemovedEvents'], QueryGno_allowlistAccountsRemovedEventsArgs, MeshContext>,
  /** null **/
  Gno_allowlistAccountStandingChangedEvent: InContextSdkMethod<Query['Gno_allowlistAccountStandingChangedEvent'], QueryGno_allowlistAccountStandingChangedEventArgs, MeshContext>,
  /** null **/
  Gno_allowlistAccountStandingChangedEvents: InContextSdkMethod<Query['Gno_allowlistAccountStandingChangedEvents'], QueryGno_allowlistAccountStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_allowlistAccountsStandingChangedEvent: InContextSdkMethod<Query['Gno_allowlistAccountsStandingChangedEvent'], QueryGno_allowlistAccountsStandingChangedEventArgs, MeshContext>,
  /** null **/
  Gno_allowlistAccountsStandingChangedEvents: InContextSdkMethod<Query['Gno_allowlistAccountsStandingChangedEvents'], QueryGno_allowlistAccountsStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_allowlistOwnerHatSetEvent: InContextSdkMethod<Query['Gno_allowlistOwnerHatSetEvent'], QueryGno_allowlistOwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Gno_allowlistOwnerHatSetEvents: InContextSdkMethod<Query['Gno_allowlistOwnerHatSetEvents'], QueryGno_allowlistOwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Gno_allowlistArbitratorHatSetEvent: InContextSdkMethod<Query['Gno_allowlistArbitratorHatSetEvent'], QueryGno_allowlistArbitratorHatSetEventArgs, MeshContext>,
  /** null **/
  Gno_allowlistArbitratorHatSetEvents: InContextSdkMethod<Query['Gno_allowlistArbitratorHatSetEvents'], QueryGno_allowlistArbitratorHatSetEventsArgs, MeshContext>,
  /** null **/
  Gno_hatsElectionEligibility: InContextSdkMethod<Query['Gno_hatsElectionEligibility'], QueryGno_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  Gno_hatsElectionEligibilities: InContextSdkMethod<Query['Gno_hatsElectionEligibilities'], QueryGno_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_electionTerm: InContextSdkMethod<Query['Gno_electionTerm'], QueryGno_electionTermArgs, MeshContext>,
  /** null **/
  Gno_electionTerms: InContextSdkMethod<Query['Gno_electionTerms'], QueryGno_electionTermsArgs, MeshContext>,
  /** null **/
  Gno_electionElectionOpenedEvent: InContextSdkMethod<Query['Gno_electionElectionOpenedEvent'], QueryGno_electionElectionOpenedEventArgs, MeshContext>,
  /** null **/
  Gno_electionElectionOpenedEvents: InContextSdkMethod<Query['Gno_electionElectionOpenedEvents'], QueryGno_electionElectionOpenedEventsArgs, MeshContext>,
  /** null **/
  Gno_electionElectionCompletedEvent: InContextSdkMethod<Query['Gno_electionElectionCompletedEvent'], QueryGno_electionElectionCompletedEventArgs, MeshContext>,
  /** null **/
  Gno_electionElectionCompletedEvents: InContextSdkMethod<Query['Gno_electionElectionCompletedEvents'], QueryGno_electionElectionCompletedEventsArgs, MeshContext>,
  /** null **/
  Gno_electionNewTermStartedEvent: InContextSdkMethod<Query['Gno_electionNewTermStartedEvent'], QueryGno_electionNewTermStartedEventArgs, MeshContext>,
  /** null **/
  Gno_electionNewTermStartedEvents: InContextSdkMethod<Query['Gno_electionNewTermStartedEvents'], QueryGno_electionNewTermStartedEventsArgs, MeshContext>,
  /** null **/
  Gno_electionRecalledEvent: InContextSdkMethod<Query['Gno_electionRecalledEvent'], QueryGno_electionRecalledEventArgs, MeshContext>,
  /** null **/
  Gno_electionRecalledEvents: InContextSdkMethod<Query['Gno_electionRecalledEvents'], QueryGno_electionRecalledEventsArgs, MeshContext>,
  /** null **/
  Gno_passthroughModule: InContextSdkMethod<Query['Gno_passthroughModule'], QueryGno_passthroughModuleArgs, MeshContext>,
  /** null **/
  Gno_passthroughModules: InContextSdkMethod<Query['Gno_passthroughModules'], QueryGno_passthroughModulesArgs, MeshContext>,
  /** null **/
  Gno_stakingEligibility: InContextSdkMethod<Query['Gno_stakingEligibility'], QueryGno_stakingEligibilityArgs, MeshContext>,
  /** null **/
  Gno_stakingEligibilities: InContextSdkMethod<Query['Gno_stakingEligibilities'], QueryGno_stakingEligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_stake: InContextSdkMethod<Query['Gno_stake'], QueryGno_stakeArgs, MeshContext>,
  /** null **/
  Gno_stakes: InContextSdkMethod<Query['Gno_stakes'], QueryGno_stakesArgs, MeshContext>,
  /** null **/
  Gno_stakingStakedEvent: InContextSdkMethod<Query['Gno_stakingStakedEvent'], QueryGno_stakingStakedEventArgs, MeshContext>,
  /** null **/
  Gno_stakingStakedEvents: InContextSdkMethod<Query['Gno_stakingStakedEvents'], QueryGno_stakingStakedEventsArgs, MeshContext>,
  /** null **/
  Gno_stakingUnstakeBegunEvent: InContextSdkMethod<Query['Gno_stakingUnstakeBegunEvent'], QueryGno_stakingUnstakeBegunEventArgs, MeshContext>,
  /** null **/
  Gno_stakingUnstakeBegunEvents: InContextSdkMethod<Query['Gno_stakingUnstakeBegunEvents'], QueryGno_stakingUnstakeBegunEventsArgs, MeshContext>,
  /** null **/
  Gno_stakingSlashedEvent: InContextSdkMethod<Query['Gno_stakingSlashedEvent'], QueryGno_stakingSlashedEventArgs, MeshContext>,
  /** null **/
  Gno_stakingSlashedEvents: InContextSdkMethod<Query['Gno_stakingSlashedEvents'], QueryGno_stakingSlashedEventsArgs, MeshContext>,
  /** null **/
  Gno_stakingMinStakeChangedEvent: InContextSdkMethod<Query['Gno_stakingMinStakeChangedEvent'], QueryGno_stakingMinStakeChangedEventArgs, MeshContext>,
  /** null **/
  Gno_stakingMinStakeChangedEvents: InContextSdkMethod<Query['Gno_stakingMinStakeChangedEvents'], QueryGno_stakingMinStakeChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_stakingJudgeHatChangedEvent: InContextSdkMethod<Query['Gno_stakingJudgeHatChangedEvent'], QueryGno_stakingJudgeHatChangedEventArgs, MeshContext>,
  /** null **/
  Gno_stakingJudgeHatChangedEvents: InContextSdkMethod<Query['Gno_stakingJudgeHatChangedEvents'], QueryGno_stakingJudgeHatChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_stakingRecipientHatChangedEvent: InContextSdkMethod<Query['Gno_stakingRecipientHatChangedEvent'], QueryGno_stakingRecipientHatChangedEventArgs, MeshContext>,
  /** null **/
  Gno_stakingRecipientHatChangedEvents: InContextSdkMethod<Query['Gno_stakingRecipientHatChangedEvents'], QueryGno_stakingRecipientHatChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_stakingCooldownPeriodChangedEvent: InContextSdkMethod<Query['Gno_stakingCooldownPeriodChangedEvent'], QueryGno_stakingCooldownPeriodChangedEventArgs, MeshContext>,
  /** null **/
  Gno_stakingCooldownPeriodChangedEvents: InContextSdkMethod<Query['Gno_stakingCooldownPeriodChangedEvents'], QueryGno_stakingCooldownPeriodChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_stakingForgivenEvent: InContextSdkMethod<Query['Gno_stakingForgivenEvent'], QueryGno_stakingForgivenEventArgs, MeshContext>,
  /** null **/
  Gno_stakingForgivenEvents: InContextSdkMethod<Query['Gno_stakingForgivenEvents'], QueryGno_stakingForgivenEventsArgs, MeshContext>,
  /** null **/
  Gno_seasonToggle: InContextSdkMethod<Query['Gno_seasonToggle'], QueryGno_seasonToggleArgs, MeshContext>,
  /** null **/
  Gno_seasonToggles: InContextSdkMethod<Query['Gno_seasonToggles'], QueryGno_seasonTogglesArgs, MeshContext>,
  /** null **/
  Gno_characterSheetsLevelEligibility: InContextSdkMethod<Query['Gno_characterSheetsLevelEligibility'], QueryGno_characterSheetsLevelEligibilityArgs, MeshContext>,
  /** null **/
  Gno_characterSheetsLevelEligibilities: InContextSdkMethod<Query['Gno_characterSheetsLevelEligibilities'], QueryGno_characterSheetsLevelEligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_agreementEligibility: InContextSdkMethod<Query['Gno_agreementEligibility'], QueryGno_agreementEligibilityArgs, MeshContext>,
  /** null **/
  Gno_agreementEligibilities: InContextSdkMethod<Query['Gno_agreementEligibilities'], QueryGno_agreementEligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_agreement: InContextSdkMethod<Query['Gno_agreement'], QueryGno_agreementArgs, MeshContext>,
  /** null **/
  Gno_agreements: InContextSdkMethod<Query['Gno_agreements'], QueryGno_agreementsArgs, MeshContext>,
  /** null **/
  Gno_agreementHatClaimedWithAgreementEvent: InContextSdkMethod<Query['Gno_agreementHatClaimedWithAgreementEvent'], QueryGno_agreementHatClaimedWithAgreementEventArgs, MeshContext>,
  /** null **/
  Gno_agreementHatClaimedWithAgreementEvents: InContextSdkMethod<Query['Gno_agreementHatClaimedWithAgreementEvents'], QueryGno_agreementHatClaimedWithAgreementEventsArgs, MeshContext>,
  /** null **/
  Gno_agreementAgreementSignedEvent: InContextSdkMethod<Query['Gno_agreementAgreementSignedEvent'], QueryGno_agreementAgreementSignedEventArgs, MeshContext>,
  /** null **/
  Gno_agreementAgreementSignedEvents: InContextSdkMethod<Query['Gno_agreementAgreementSignedEvents'], QueryGno_agreementAgreementSignedEventsArgs, MeshContext>,
  /** null **/
  Gno_agreementAgreementSetEvent: InContextSdkMethod<Query['Gno_agreementAgreementSetEvent'], QueryGno_agreementAgreementSetEventArgs, MeshContext>,
  /** null **/
  Gno_agreementAgreementSetEvents: InContextSdkMethod<Query['Gno_agreementAgreementSetEvents'], QueryGno_agreementAgreementSetEventsArgs, MeshContext>,
  /** null **/
  Gno_agreementOwnerHatSetEvent: InContextSdkMethod<Query['Gno_agreementOwnerHatSetEvent'], QueryGno_agreementOwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Gno_agreementOwnerHatSetEvents: InContextSdkMethod<Query['Gno_agreementOwnerHatSetEvents'], QueryGno_agreementOwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Gno_agreementArbitratorHatSetEvent: InContextSdkMethod<Query['Gno_agreementArbitratorHatSetEvent'], QueryGno_agreementArbitratorHatSetEventArgs, MeshContext>,
  /** null **/
  Gno_agreementArbitratorHatSetEvents: InContextSdkMethod<Query['Gno_agreementArbitratorHatSetEvents'], QueryGno_agreementArbitratorHatSetEventsArgs, MeshContext>,
  /** null **/
  Gno_erc20Eligibility: InContextSdkMethod<Query['Gno_erc20Eligibility'], QueryGno_erc20EligibilityArgs, MeshContext>,
  /** null **/
  Gno_erc20Eligibilities: InContextSdkMethod<Query['Gno_erc20Eligibilities'], QueryGno_erc20EligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_erc721Eligibility: InContextSdkMethod<Query['Gno_erc721Eligibility'], QueryGno_erc721EligibilityArgs, MeshContext>,
  /** null **/
  Gno_erc721Eligibilities: InContextSdkMethod<Query['Gno_erc721Eligibilities'], QueryGno_erc721EligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_erc1155Eligibility: InContextSdkMethod<Query['Gno_erc1155Eligibility'], QueryGno_erc1155EligibilityArgs, MeshContext>,
  /** null **/
  Gno_erc1155Eligibilities: InContextSdkMethod<Query['Gno_erc1155Eligibilities'], QueryGno_erc1155EligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_hatWearingEligibility: InContextSdkMethod<Query['Gno_hatWearingEligibility'], QueryGno_hatWearingEligibilityArgs, MeshContext>,
  /** null **/
  Gno_hatWearingEligibilities: InContextSdkMethod<Query['Gno_hatWearingEligibilities'], QueryGno_hatWearingEligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_gitcoinPassportEligibility: InContextSdkMethod<Query['Gno_gitcoinPassportEligibility'], QueryGno_gitcoinPassportEligibilityArgs, MeshContext>,
  /** null **/
  Gno_gitcoinPassportEligibilities: InContextSdkMethod<Query['Gno_gitcoinPassportEligibilities'], QueryGno_gitcoinPassportEligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_coLinksEligibility: InContextSdkMethod<Query['Gno_coLinksEligibility'], QueryGno_coLinksEligibilityArgs, MeshContext>,
  /** null **/
  Gno_coLinksEligibilities: InContextSdkMethod<Query['Gno_coLinksEligibilities'], QueryGno_coLinksEligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_hatsModule: InContextSdkMethod<Query['Gno_hatsModule'], QueryGno_hatsModuleArgs, MeshContext>,
  /** null **/
  Gno_hatsModules: InContextSdkMethod<Query['Gno_hatsModules'], QueryGno_hatsModulesArgs, MeshContext>,
  /** null **/
  Gno_hatsModuleEvent: InContextSdkMethod<Query['Gno_hatsModuleEvent'], QueryGno_hatsModuleEventArgs, MeshContext>,
  /** null **/
  Gno_hatsModuleEvents: InContextSdkMethod<Query['Gno_hatsModuleEvents'], QueryGno_hatsModuleEventsArgs, MeshContext>,
  /** null **/
  Gno_jokeRaceEvent: InContextSdkMethod<Query['Gno_jokeRaceEvent'], QueryGno_jokeRaceEventArgs, MeshContext>,
  /** null **/
  Gno_jokeRaceEvents: InContextSdkMethod<Query['Gno_jokeRaceEvents'], QueryGno_jokeRaceEventsArgs, MeshContext>,
  /** null **/
  Gno_allowlistEvent: InContextSdkMethod<Query['Gno_allowlistEvent'], QueryGno_allowlistEventArgs, MeshContext>,
  /** null **/
  Gno_allowlistEvents: InContextSdkMethod<Query['Gno_allowlistEvents'], QueryGno_allowlistEventsArgs, MeshContext>,
  /** null **/
  Gno_electionEvent: InContextSdkMethod<Query['Gno_electionEvent'], QueryGno_electionEventArgs, MeshContext>,
  /** null **/
  Gno_electionEvents: InContextSdkMethod<Query['Gno_electionEvents'], QueryGno_electionEventsArgs, MeshContext>,
  /** null **/
  Gno_stakingEvent: InContextSdkMethod<Query['Gno_stakingEvent'], QueryGno_stakingEventArgs, MeshContext>,
  /** null **/
  Gno_stakingEvents: InContextSdkMethod<Query['Gno_stakingEvents'], QueryGno_stakingEventsArgs, MeshContext>,
  /** null **/
  Gno_agreementEvent: InContextSdkMethod<Query['Gno_agreementEvent'], QueryGno_agreementEventArgs, MeshContext>,
  /** null **/
  Gno_agreementEvents: InContextSdkMethod<Query['Gno_agreementEvents'], QueryGno_agreementEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Gno__meta: InContextSdkMethod<Query['Gno__meta'], QueryGno__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  Gno_hatAuthority: InContextSdkMethod<Subscription['Gno_hatAuthority'], SubscriptionGno_hatAuthorityArgs, MeshContext>,
  /** null **/
  Gno_hatAuthorities: InContextSdkMethod<Subscription['Gno_hatAuthorities'], SubscriptionGno_hatAuthoritiesArgs, MeshContext>,
  /** null **/
  Gno_hatsSignerGate: InContextSdkMethod<Subscription['Gno_hatsSignerGate'], SubscriptionGno_hatsSignerGateArgs, MeshContext>,
  /** null **/
  Gno_hatsSignerGates: InContextSdkMethod<Subscription['Gno_hatsSignerGates'], SubscriptionGno_hatsSignerGatesArgs, MeshContext>,
  /** null **/
  Gno_hatsAccount1OfN: InContextSdkMethod<Subscription['Gno_hatsAccount1OfN'], SubscriptionGno_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  Gno_hatsAccount1OfNs: InContextSdkMethod<Subscription['Gno_hatsAccount1OfNs'], SubscriptionGno_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  Gno_hatsAccount1OfNOperation: InContextSdkMethod<Subscription['Gno_hatsAccount1OfNOperation'], SubscriptionGno_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  Gno_hatsAccount1OfNOperations: InContextSdkMethod<Subscription['Gno_hatsAccount1OfNOperations'], SubscriptionGno_hatsAccount1OfNOperationsArgs, MeshContext>,
  /** null **/
  Gno_hatsStakingShaman: InContextSdkMethod<Subscription['Gno_hatsStakingShaman'], SubscriptionGno_hatsStakingShamanArgs, MeshContext>,
  /** null **/
  Gno_hatsStakingShamans: InContextSdkMethod<Subscription['Gno_hatsStakingShamans'], SubscriptionGno_hatsStakingShamansArgs, MeshContext>,
  /** null **/
  Gno_shamanStake: InContextSdkMethod<Subscription['Gno_shamanStake'], SubscriptionGno_shamanStakeArgs, MeshContext>,
  /** null **/
  Gno_shamanStakes: InContextSdkMethod<Subscription['Gno_shamanStakes'], SubscriptionGno_shamanStakesArgs, MeshContext>,
  /** null **/
  Gno_hatsFarcasterDelegator: InContextSdkMethod<Subscription['Gno_hatsFarcasterDelegator'], SubscriptionGno_hatsFarcasterDelegatorArgs, MeshContext>,
  /** null **/
  Gno_hatsFarcasterDelegators: InContextSdkMethod<Subscription['Gno_hatsFarcasterDelegators'], SubscriptionGno_hatsFarcasterDelegatorsArgs, MeshContext>,
  /** null **/
  Gno_jokeRaceEligibility: InContextSdkMethod<Subscription['Gno_jokeRaceEligibility'], SubscriptionGno_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  Gno_jokeRaceEligibilities: InContextSdkMethod<Subscription['Gno_jokeRaceEligibilities'], SubscriptionGno_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_jokeRaceEligibilityTerm: InContextSdkMethod<Subscription['Gno_jokeRaceEligibilityTerm'], SubscriptionGno_jokeRaceEligibilityTermArgs, MeshContext>,
  /** null **/
  Gno_jokeRaceEligibilityTerms: InContextSdkMethod<Subscription['Gno_jokeRaceEligibilityTerms'], SubscriptionGno_jokeRaceEligibilityTermsArgs, MeshContext>,
  /** null **/
  Gno_jokeRaceNextTermSetEvent: InContextSdkMethod<Subscription['Gno_jokeRaceNextTermSetEvent'], SubscriptionGno_jokeRaceNextTermSetEventArgs, MeshContext>,
  /** null **/
  Gno_jokeRaceNextTermSetEvents: InContextSdkMethod<Subscription['Gno_jokeRaceNextTermSetEvents'], SubscriptionGno_jokeRaceNextTermSetEventsArgs, MeshContext>,
  /** null **/
  Gno_jokeRaceTermStartedEvent: InContextSdkMethod<Subscription['Gno_jokeRaceTermStartedEvent'], SubscriptionGno_jokeRaceTermStartedEventArgs, MeshContext>,
  /** null **/
  Gno_jokeRaceTermStartedEvents: InContextSdkMethod<Subscription['Gno_jokeRaceTermStartedEvents'], SubscriptionGno_jokeRaceTermStartedEventsArgs, MeshContext>,
  /** null **/
  Gno_allowListEligibility: InContextSdkMethod<Subscription['Gno_allowListEligibility'], SubscriptionGno_allowListEligibilityArgs, MeshContext>,
  /** null **/
  Gno_allowListEligibilities: InContextSdkMethod<Subscription['Gno_allowListEligibilities'], SubscriptionGno_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_allowListEligibilityData: InContextSdkMethod<Subscription['Gno_allowListEligibilityData'], SubscriptionGno_allowListEligibilityDataArgs, MeshContext>,
  /** null **/
  Gno_allowListEligibilityDatas: InContextSdkMethod<Subscription['Gno_allowListEligibilityDatas'], SubscriptionGno_allowListEligibilityDatasArgs, MeshContext>,
  /** null **/
  Gno_allowlistAccountAddedEvent: InContextSdkMethod<Subscription['Gno_allowlistAccountAddedEvent'], SubscriptionGno_allowlistAccountAddedEventArgs, MeshContext>,
  /** null **/
  Gno_allowlistAccountAddedEvents: InContextSdkMethod<Subscription['Gno_allowlistAccountAddedEvents'], SubscriptionGno_allowlistAccountAddedEventsArgs, MeshContext>,
  /** null **/
  Gno_allowlistAccountsAddedEvent: InContextSdkMethod<Subscription['Gno_allowlistAccountsAddedEvent'], SubscriptionGno_allowlistAccountsAddedEventArgs, MeshContext>,
  /** null **/
  Gno_allowlistAccountsAddedEvents: InContextSdkMethod<Subscription['Gno_allowlistAccountsAddedEvents'], SubscriptionGno_allowlistAccountsAddedEventsArgs, MeshContext>,
  /** null **/
  Gno_allowlistAccountRemovedEvent: InContextSdkMethod<Subscription['Gno_allowlistAccountRemovedEvent'], SubscriptionGno_allowlistAccountRemovedEventArgs, MeshContext>,
  /** null **/
  Gno_allowlistAccountRemovedEvents: InContextSdkMethod<Subscription['Gno_allowlistAccountRemovedEvents'], SubscriptionGno_allowlistAccountRemovedEventsArgs, MeshContext>,
  /** null **/
  Gno_allowlistAccountsRemovedEvent: InContextSdkMethod<Subscription['Gno_allowlistAccountsRemovedEvent'], SubscriptionGno_allowlistAccountsRemovedEventArgs, MeshContext>,
  /** null **/
  Gno_allowlistAccountsRemovedEvents: InContextSdkMethod<Subscription['Gno_allowlistAccountsRemovedEvents'], SubscriptionGno_allowlistAccountsRemovedEventsArgs, MeshContext>,
  /** null **/
  Gno_allowlistAccountStandingChangedEvent: InContextSdkMethod<Subscription['Gno_allowlistAccountStandingChangedEvent'], SubscriptionGno_allowlistAccountStandingChangedEventArgs, MeshContext>,
  /** null **/
  Gno_allowlistAccountStandingChangedEvents: InContextSdkMethod<Subscription['Gno_allowlistAccountStandingChangedEvents'], SubscriptionGno_allowlistAccountStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_allowlistAccountsStandingChangedEvent: InContextSdkMethod<Subscription['Gno_allowlistAccountsStandingChangedEvent'], SubscriptionGno_allowlistAccountsStandingChangedEventArgs, MeshContext>,
  /** null **/
  Gno_allowlistAccountsStandingChangedEvents: InContextSdkMethod<Subscription['Gno_allowlistAccountsStandingChangedEvents'], SubscriptionGno_allowlistAccountsStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_allowlistOwnerHatSetEvent: InContextSdkMethod<Subscription['Gno_allowlistOwnerHatSetEvent'], SubscriptionGno_allowlistOwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Gno_allowlistOwnerHatSetEvents: InContextSdkMethod<Subscription['Gno_allowlistOwnerHatSetEvents'], SubscriptionGno_allowlistOwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Gno_allowlistArbitratorHatSetEvent: InContextSdkMethod<Subscription['Gno_allowlistArbitratorHatSetEvent'], SubscriptionGno_allowlistArbitratorHatSetEventArgs, MeshContext>,
  /** null **/
  Gno_allowlistArbitratorHatSetEvents: InContextSdkMethod<Subscription['Gno_allowlistArbitratorHatSetEvents'], SubscriptionGno_allowlistArbitratorHatSetEventsArgs, MeshContext>,
  /** null **/
  Gno_hatsElectionEligibility: InContextSdkMethod<Subscription['Gno_hatsElectionEligibility'], SubscriptionGno_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  Gno_hatsElectionEligibilities: InContextSdkMethod<Subscription['Gno_hatsElectionEligibilities'], SubscriptionGno_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_electionTerm: InContextSdkMethod<Subscription['Gno_electionTerm'], SubscriptionGno_electionTermArgs, MeshContext>,
  /** null **/
  Gno_electionTerms: InContextSdkMethod<Subscription['Gno_electionTerms'], SubscriptionGno_electionTermsArgs, MeshContext>,
  /** null **/
  Gno_electionElectionOpenedEvent: InContextSdkMethod<Subscription['Gno_electionElectionOpenedEvent'], SubscriptionGno_electionElectionOpenedEventArgs, MeshContext>,
  /** null **/
  Gno_electionElectionOpenedEvents: InContextSdkMethod<Subscription['Gno_electionElectionOpenedEvents'], SubscriptionGno_electionElectionOpenedEventsArgs, MeshContext>,
  /** null **/
  Gno_electionElectionCompletedEvent: InContextSdkMethod<Subscription['Gno_electionElectionCompletedEvent'], SubscriptionGno_electionElectionCompletedEventArgs, MeshContext>,
  /** null **/
  Gno_electionElectionCompletedEvents: InContextSdkMethod<Subscription['Gno_electionElectionCompletedEvents'], SubscriptionGno_electionElectionCompletedEventsArgs, MeshContext>,
  /** null **/
  Gno_electionNewTermStartedEvent: InContextSdkMethod<Subscription['Gno_electionNewTermStartedEvent'], SubscriptionGno_electionNewTermStartedEventArgs, MeshContext>,
  /** null **/
  Gno_electionNewTermStartedEvents: InContextSdkMethod<Subscription['Gno_electionNewTermStartedEvents'], SubscriptionGno_electionNewTermStartedEventsArgs, MeshContext>,
  /** null **/
  Gno_electionRecalledEvent: InContextSdkMethod<Subscription['Gno_electionRecalledEvent'], SubscriptionGno_electionRecalledEventArgs, MeshContext>,
  /** null **/
  Gno_electionRecalledEvents: InContextSdkMethod<Subscription['Gno_electionRecalledEvents'], SubscriptionGno_electionRecalledEventsArgs, MeshContext>,
  /** null **/
  Gno_passthroughModule: InContextSdkMethod<Subscription['Gno_passthroughModule'], SubscriptionGno_passthroughModuleArgs, MeshContext>,
  /** null **/
  Gno_passthroughModules: InContextSdkMethod<Subscription['Gno_passthroughModules'], SubscriptionGno_passthroughModulesArgs, MeshContext>,
  /** null **/
  Gno_stakingEligibility: InContextSdkMethod<Subscription['Gno_stakingEligibility'], SubscriptionGno_stakingEligibilityArgs, MeshContext>,
  /** null **/
  Gno_stakingEligibilities: InContextSdkMethod<Subscription['Gno_stakingEligibilities'], SubscriptionGno_stakingEligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_stake: InContextSdkMethod<Subscription['Gno_stake'], SubscriptionGno_stakeArgs, MeshContext>,
  /** null **/
  Gno_stakes: InContextSdkMethod<Subscription['Gno_stakes'], SubscriptionGno_stakesArgs, MeshContext>,
  /** null **/
  Gno_stakingStakedEvent: InContextSdkMethod<Subscription['Gno_stakingStakedEvent'], SubscriptionGno_stakingStakedEventArgs, MeshContext>,
  /** null **/
  Gno_stakingStakedEvents: InContextSdkMethod<Subscription['Gno_stakingStakedEvents'], SubscriptionGno_stakingStakedEventsArgs, MeshContext>,
  /** null **/
  Gno_stakingUnstakeBegunEvent: InContextSdkMethod<Subscription['Gno_stakingUnstakeBegunEvent'], SubscriptionGno_stakingUnstakeBegunEventArgs, MeshContext>,
  /** null **/
  Gno_stakingUnstakeBegunEvents: InContextSdkMethod<Subscription['Gno_stakingUnstakeBegunEvents'], SubscriptionGno_stakingUnstakeBegunEventsArgs, MeshContext>,
  /** null **/
  Gno_stakingSlashedEvent: InContextSdkMethod<Subscription['Gno_stakingSlashedEvent'], SubscriptionGno_stakingSlashedEventArgs, MeshContext>,
  /** null **/
  Gno_stakingSlashedEvents: InContextSdkMethod<Subscription['Gno_stakingSlashedEvents'], SubscriptionGno_stakingSlashedEventsArgs, MeshContext>,
  /** null **/
  Gno_stakingMinStakeChangedEvent: InContextSdkMethod<Subscription['Gno_stakingMinStakeChangedEvent'], SubscriptionGno_stakingMinStakeChangedEventArgs, MeshContext>,
  /** null **/
  Gno_stakingMinStakeChangedEvents: InContextSdkMethod<Subscription['Gno_stakingMinStakeChangedEvents'], SubscriptionGno_stakingMinStakeChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_stakingJudgeHatChangedEvent: InContextSdkMethod<Subscription['Gno_stakingJudgeHatChangedEvent'], SubscriptionGno_stakingJudgeHatChangedEventArgs, MeshContext>,
  /** null **/
  Gno_stakingJudgeHatChangedEvents: InContextSdkMethod<Subscription['Gno_stakingJudgeHatChangedEvents'], SubscriptionGno_stakingJudgeHatChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_stakingRecipientHatChangedEvent: InContextSdkMethod<Subscription['Gno_stakingRecipientHatChangedEvent'], SubscriptionGno_stakingRecipientHatChangedEventArgs, MeshContext>,
  /** null **/
  Gno_stakingRecipientHatChangedEvents: InContextSdkMethod<Subscription['Gno_stakingRecipientHatChangedEvents'], SubscriptionGno_stakingRecipientHatChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_stakingCooldownPeriodChangedEvent: InContextSdkMethod<Subscription['Gno_stakingCooldownPeriodChangedEvent'], SubscriptionGno_stakingCooldownPeriodChangedEventArgs, MeshContext>,
  /** null **/
  Gno_stakingCooldownPeriodChangedEvents: InContextSdkMethod<Subscription['Gno_stakingCooldownPeriodChangedEvents'], SubscriptionGno_stakingCooldownPeriodChangedEventsArgs, MeshContext>,
  /** null **/
  Gno_stakingForgivenEvent: InContextSdkMethod<Subscription['Gno_stakingForgivenEvent'], SubscriptionGno_stakingForgivenEventArgs, MeshContext>,
  /** null **/
  Gno_stakingForgivenEvents: InContextSdkMethod<Subscription['Gno_stakingForgivenEvents'], SubscriptionGno_stakingForgivenEventsArgs, MeshContext>,
  /** null **/
  Gno_seasonToggle: InContextSdkMethod<Subscription['Gno_seasonToggle'], SubscriptionGno_seasonToggleArgs, MeshContext>,
  /** null **/
  Gno_seasonToggles: InContextSdkMethod<Subscription['Gno_seasonToggles'], SubscriptionGno_seasonTogglesArgs, MeshContext>,
  /** null **/
  Gno_characterSheetsLevelEligibility: InContextSdkMethod<Subscription['Gno_characterSheetsLevelEligibility'], SubscriptionGno_characterSheetsLevelEligibilityArgs, MeshContext>,
  /** null **/
  Gno_characterSheetsLevelEligibilities: InContextSdkMethod<Subscription['Gno_characterSheetsLevelEligibilities'], SubscriptionGno_characterSheetsLevelEligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_agreementEligibility: InContextSdkMethod<Subscription['Gno_agreementEligibility'], SubscriptionGno_agreementEligibilityArgs, MeshContext>,
  /** null **/
  Gno_agreementEligibilities: InContextSdkMethod<Subscription['Gno_agreementEligibilities'], SubscriptionGno_agreementEligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_agreement: InContextSdkMethod<Subscription['Gno_agreement'], SubscriptionGno_agreementArgs, MeshContext>,
  /** null **/
  Gno_agreements: InContextSdkMethod<Subscription['Gno_agreements'], SubscriptionGno_agreementsArgs, MeshContext>,
  /** null **/
  Gno_agreementHatClaimedWithAgreementEvent: InContextSdkMethod<Subscription['Gno_agreementHatClaimedWithAgreementEvent'], SubscriptionGno_agreementHatClaimedWithAgreementEventArgs, MeshContext>,
  /** null **/
  Gno_agreementHatClaimedWithAgreementEvents: InContextSdkMethod<Subscription['Gno_agreementHatClaimedWithAgreementEvents'], SubscriptionGno_agreementHatClaimedWithAgreementEventsArgs, MeshContext>,
  /** null **/
  Gno_agreementAgreementSignedEvent: InContextSdkMethod<Subscription['Gno_agreementAgreementSignedEvent'], SubscriptionGno_agreementAgreementSignedEventArgs, MeshContext>,
  /** null **/
  Gno_agreementAgreementSignedEvents: InContextSdkMethod<Subscription['Gno_agreementAgreementSignedEvents'], SubscriptionGno_agreementAgreementSignedEventsArgs, MeshContext>,
  /** null **/
  Gno_agreementAgreementSetEvent: InContextSdkMethod<Subscription['Gno_agreementAgreementSetEvent'], SubscriptionGno_agreementAgreementSetEventArgs, MeshContext>,
  /** null **/
  Gno_agreementAgreementSetEvents: InContextSdkMethod<Subscription['Gno_agreementAgreementSetEvents'], SubscriptionGno_agreementAgreementSetEventsArgs, MeshContext>,
  /** null **/
  Gno_agreementOwnerHatSetEvent: InContextSdkMethod<Subscription['Gno_agreementOwnerHatSetEvent'], SubscriptionGno_agreementOwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Gno_agreementOwnerHatSetEvents: InContextSdkMethod<Subscription['Gno_agreementOwnerHatSetEvents'], SubscriptionGno_agreementOwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Gno_agreementArbitratorHatSetEvent: InContextSdkMethod<Subscription['Gno_agreementArbitratorHatSetEvent'], SubscriptionGno_agreementArbitratorHatSetEventArgs, MeshContext>,
  /** null **/
  Gno_agreementArbitratorHatSetEvents: InContextSdkMethod<Subscription['Gno_agreementArbitratorHatSetEvents'], SubscriptionGno_agreementArbitratorHatSetEventsArgs, MeshContext>,
  /** null **/
  Gno_erc20Eligibility: InContextSdkMethod<Subscription['Gno_erc20Eligibility'], SubscriptionGno_erc20EligibilityArgs, MeshContext>,
  /** null **/
  Gno_erc20Eligibilities: InContextSdkMethod<Subscription['Gno_erc20Eligibilities'], SubscriptionGno_erc20EligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_erc721Eligibility: InContextSdkMethod<Subscription['Gno_erc721Eligibility'], SubscriptionGno_erc721EligibilityArgs, MeshContext>,
  /** null **/
  Gno_erc721Eligibilities: InContextSdkMethod<Subscription['Gno_erc721Eligibilities'], SubscriptionGno_erc721EligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_erc1155Eligibility: InContextSdkMethod<Subscription['Gno_erc1155Eligibility'], SubscriptionGno_erc1155EligibilityArgs, MeshContext>,
  /** null **/
  Gno_erc1155Eligibilities: InContextSdkMethod<Subscription['Gno_erc1155Eligibilities'], SubscriptionGno_erc1155EligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_hatWearingEligibility: InContextSdkMethod<Subscription['Gno_hatWearingEligibility'], SubscriptionGno_hatWearingEligibilityArgs, MeshContext>,
  /** null **/
  Gno_hatWearingEligibilities: InContextSdkMethod<Subscription['Gno_hatWearingEligibilities'], SubscriptionGno_hatWearingEligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_gitcoinPassportEligibility: InContextSdkMethod<Subscription['Gno_gitcoinPassportEligibility'], SubscriptionGno_gitcoinPassportEligibilityArgs, MeshContext>,
  /** null **/
  Gno_gitcoinPassportEligibilities: InContextSdkMethod<Subscription['Gno_gitcoinPassportEligibilities'], SubscriptionGno_gitcoinPassportEligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_coLinksEligibility: InContextSdkMethod<Subscription['Gno_coLinksEligibility'], SubscriptionGno_coLinksEligibilityArgs, MeshContext>,
  /** null **/
  Gno_coLinksEligibilities: InContextSdkMethod<Subscription['Gno_coLinksEligibilities'], SubscriptionGno_coLinksEligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_hatsModule: InContextSdkMethod<Subscription['Gno_hatsModule'], SubscriptionGno_hatsModuleArgs, MeshContext>,
  /** null **/
  Gno_hatsModules: InContextSdkMethod<Subscription['Gno_hatsModules'], SubscriptionGno_hatsModulesArgs, MeshContext>,
  /** null **/
  Gno_hatsModuleEvent: InContextSdkMethod<Subscription['Gno_hatsModuleEvent'], SubscriptionGno_hatsModuleEventArgs, MeshContext>,
  /** null **/
  Gno_hatsModuleEvents: InContextSdkMethod<Subscription['Gno_hatsModuleEvents'], SubscriptionGno_hatsModuleEventsArgs, MeshContext>,
  /** null **/
  Gno_jokeRaceEvent: InContextSdkMethod<Subscription['Gno_jokeRaceEvent'], SubscriptionGno_jokeRaceEventArgs, MeshContext>,
  /** null **/
  Gno_jokeRaceEvents: InContextSdkMethod<Subscription['Gno_jokeRaceEvents'], SubscriptionGno_jokeRaceEventsArgs, MeshContext>,
  /** null **/
  Gno_allowlistEvent: InContextSdkMethod<Subscription['Gno_allowlistEvent'], SubscriptionGno_allowlistEventArgs, MeshContext>,
  /** null **/
  Gno_allowlistEvents: InContextSdkMethod<Subscription['Gno_allowlistEvents'], SubscriptionGno_allowlistEventsArgs, MeshContext>,
  /** null **/
  Gno_electionEvent: InContextSdkMethod<Subscription['Gno_electionEvent'], SubscriptionGno_electionEventArgs, MeshContext>,
  /** null **/
  Gno_electionEvents: InContextSdkMethod<Subscription['Gno_electionEvents'], SubscriptionGno_electionEventsArgs, MeshContext>,
  /** null **/
  Gno_stakingEvent: InContextSdkMethod<Subscription['Gno_stakingEvent'], SubscriptionGno_stakingEventArgs, MeshContext>,
  /** null **/
  Gno_stakingEvents: InContextSdkMethod<Subscription['Gno_stakingEvents'], SubscriptionGno_stakingEventsArgs, MeshContext>,
  /** null **/
  Gno_agreementEvent: InContextSdkMethod<Subscription['Gno_agreementEvent'], SubscriptionGno_agreementEventArgs, MeshContext>,
  /** null **/
  Gno_agreementEvents: InContextSdkMethod<Subscription['Gno_agreementEvents'], SubscriptionGno_agreementEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Gno__meta: InContextSdkMethod<Subscription['Gno__meta'], SubscriptionGno__metaArgs, MeshContext>
  };

  export type Context = {
      ["Gnosis_Ancillary"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
