// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace BaseAncillaryTypes {
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

export type Base_Agreement = {
  id: Scalars['ID']['output'];
  agreementEligibility: Base_AgreementEligibility;
  agreement: Scalars['String']['output'];
  signers: Array<Scalars['String']['output']>;
  graceEndTime: Scalars['BigInt']['output'];
};

/**  Agreement Eligibility  */
export type Base_AgreementEligibility = Base_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  ownerHat: Base_HatAuthority;
  arbitratorHat: Base_HatAuthority;
  currentAgreement: Base_Agreement;
  currentAgreementNumber: Scalars['BigInt']['output'];
  agreements: Array<Base_Agreement>;
  badStandings: Array<Scalars['String']['output']>;
  events: Array<Base_AgreementEvent>;
};


/**  Agreement Eligibility  */
export type Base_AgreementEligibilityagreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Agreement_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Agreement_filter>;
};


/**  Agreement Eligibility  */
export type Base_AgreementEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_AgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_AgreementEvent_filter>;
};

export type Base_AgreementEligibility_filter = {
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
  ownerHat_?: InputMaybe<Base_HatAuthority_filter>;
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
  arbitratorHat_?: InputMaybe<Base_HatAuthority_filter>;
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
  currentAgreement_?: InputMaybe<Base_Agreement_filter>;
  currentAgreementNumber?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentAgreementNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  agreements_?: InputMaybe<Base_Agreement_filter>;
  badStandings?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  events_?: InputMaybe<Base_AgreementEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_AgreementEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_AgreementEligibility_filter>>>;
};

export type Base_AgreementEligibility_orderBy =
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

export type Base_AgreementEvent = {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  agreementEligibilityInstance: Base_AgreementEligibility;
};

export type Base_AgreementEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  agreementEligibilityInstance_?: InputMaybe<Base_AgreementEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_AgreementEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_AgreementEvent_filter>>>;
};

export type Base_AgreementEvent_orderBy =
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

export type Base_Agreement_AgreementSetEvent = Base_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  agreementEligibilityInstance: Base_AgreementEligibility;
  agreement: Scalars['String']['output'];
  grace: Scalars['BigInt']['output'];
};

export type Base_Agreement_AgreementSetEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  agreementEligibilityInstance_?: InputMaybe<Base_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Agreement_AgreementSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Agreement_AgreementSetEvent_filter>>>;
};

export type Base_Agreement_AgreementSetEvent_orderBy =
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

export type Base_Agreement_AgreementSignedEvent = Base_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  agreementEligibilityInstance: Base_AgreementEligibility;
  signer: Scalars['String']['output'];
  agreement: Scalars['String']['output'];
};

export type Base_Agreement_AgreementSignedEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  agreementEligibilityInstance_?: InputMaybe<Base_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Agreement_AgreementSignedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Agreement_AgreementSignedEvent_filter>>>;
};

export type Base_Agreement_AgreementSignedEvent_orderBy =
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

export type Base_Agreement_ArbitratorHatSetEvent = Base_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  agreementEligibilityInstance: Base_AgreementEligibility;
  newArbitratorHat: Scalars['String']['output'];
};

export type Base_Agreement_ArbitratorHatSetEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  agreementEligibilityInstance_?: InputMaybe<Base_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Agreement_ArbitratorHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Agreement_ArbitratorHatSetEvent_filter>>>;
};

export type Base_Agreement_ArbitratorHatSetEvent_orderBy =
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

export type Base_Agreement_ForgivenMultipleEvent = Base_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  agreementEligibilityInstance: Base_AgreementEligibility;
  wearers: Array<Scalars['String']['output']>;
};

export type Base_Agreement_ForgivenMultipleEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  agreementEligibilityInstance_?: InputMaybe<Base_AgreementEligibility_filter>;
  wearers?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Agreement_ForgivenMultipleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Agreement_ForgivenMultipleEvent_filter>>>;
};

export type Base_Agreement_ForgivenMultipleEvent_orderBy =
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

export type Base_Agreement_ForgivenSingleEvent = Base_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  agreementEligibilityInstance: Base_AgreementEligibility;
  wearer: Scalars['String']['output'];
};

export type Base_Agreement_ForgivenSingleEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  agreementEligibilityInstance_?: InputMaybe<Base_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Agreement_ForgivenSingleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Agreement_ForgivenSingleEvent_filter>>>;
};

export type Base_Agreement_ForgivenSingleEvent_orderBy =
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

export type Base_Agreement_HatClaimedWithAgreementEvent = Base_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  agreementEligibilityInstance: Base_AgreementEligibility;
  claimer: Scalars['String']['output'];
  hatId: Scalars['String']['output'];
  agreement: Scalars['String']['output'];
};

export type Base_Agreement_HatClaimedWithAgreementEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  agreementEligibilityInstance_?: InputMaybe<Base_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Agreement_HatClaimedWithAgreementEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Agreement_HatClaimedWithAgreementEvent_filter>>>;
};

export type Base_Agreement_HatClaimedWithAgreementEvent_orderBy =
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

export type Base_Agreement_OwnerHatSetEvent = Base_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  agreementEligibilityInstance: Base_AgreementEligibility;
  newOwnerHat: Scalars['String']['output'];
};

export type Base_Agreement_OwnerHatSetEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  agreementEligibilityInstance_?: InputMaybe<Base_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Agreement_OwnerHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Agreement_OwnerHatSetEvent_filter>>>;
};

export type Base_Agreement_OwnerHatSetEvent_orderBy =
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

export type Base_Agreement_RevokedMultipleEvent = Base_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  agreementEligibilityInstance: Base_AgreementEligibility;
  wearers: Array<Scalars['String']['output']>;
};

export type Base_Agreement_RevokedMultipleEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  agreementEligibilityInstance_?: InputMaybe<Base_AgreementEligibility_filter>;
  wearers?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Agreement_RevokedMultipleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Agreement_RevokedMultipleEvent_filter>>>;
};

export type Base_Agreement_RevokedMultipleEvent_orderBy =
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

export type Base_Agreement_RevokedSingleEvent = Base_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  agreementEligibilityInstance: Base_AgreementEligibility;
  wearer: Scalars['String']['output'];
};

export type Base_Agreement_RevokedSingleEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  agreementEligibilityInstance_?: InputMaybe<Base_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Agreement_RevokedSingleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Agreement_RevokedSingleEvent_filter>>>;
};

export type Base_Agreement_RevokedSingleEvent_orderBy =
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

export type Base_Agreement_filter = {
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
  agreementEligibility_?: InputMaybe<Base_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Agreement_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Agreement_filter>>>;
};

export type Base_Agreement_orderBy =
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
export type Base_AllowListEligibility = Base_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  ownerHat: Base_HatAuthority;
  arbitratorHat: Base_HatAuthority;
  eligibilityData: Array<Base_AllowListEligibilityData>;
  events: Array<Base_AllowlistEvent>;
};


/**  Allowlist Eligibility  */
export type Base_AllowListEligibilityeligibilityDataArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_AllowListEligibilityData_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_AllowListEligibilityData_filter>;
};


/**  Allowlist Eligibility  */
export type Base_AllowListEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_AllowlistEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_AllowlistEvent_filter>;
};

export type Base_AllowListEligibilityData = {
  id: Scalars['ID']['output'];
  allowListEligibility: Base_AllowListEligibility;
  address: Scalars['String']['output'];
  eligible: Scalars['Boolean']['output'];
  badStanding: Scalars['Boolean']['output'];
};

export type Base_AllowListEligibilityData_filter = {
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
  allowListEligibility_?: InputMaybe<Base_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_AllowListEligibilityData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_AllowListEligibilityData_filter>>>;
};

export type Base_AllowListEligibilityData_orderBy =
  | 'id'
  | 'allowListEligibility'
  | 'allowListEligibility__id'
  | 'allowListEligibility__version'
  | 'allowListEligibility__hatId'
  | 'address'
  | 'eligible'
  | 'badStanding';

export type Base_AllowListEligibility_filter = {
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
  ownerHat_?: InputMaybe<Base_HatAuthority_filter>;
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
  arbitratorHat_?: InputMaybe<Base_HatAuthority_filter>;
  eligibilityData_?: InputMaybe<Base_AllowListEligibilityData_filter>;
  events_?: InputMaybe<Base_AllowlistEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_AllowListEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_AllowListEligibility_filter>>>;
};

export type Base_AllowListEligibility_orderBy =
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

export type Base_AllowlistEvent = {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  allowlistEligibilityInstance: Base_AllowListEligibility;
};

export type Base_AllowlistEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  allowlistEligibilityInstance_?: InputMaybe<Base_AllowListEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_AllowlistEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_AllowlistEvent_filter>>>;
};

export type Base_AllowlistEvent_orderBy =
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

export type Base_Allowlist_AccountAddedEvent = Base_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  allowlistEligibilityInstance: Base_AllowListEligibility;
  account: Scalars['String']['output'];
};

export type Base_Allowlist_AccountAddedEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  allowlistEligibilityInstance_?: InputMaybe<Base_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Allowlist_AccountAddedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Allowlist_AccountAddedEvent_filter>>>;
};

export type Base_Allowlist_AccountAddedEvent_orderBy =
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

export type Base_Allowlist_AccountRemovedEvent = Base_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  allowlistEligibilityInstance: Base_AllowListEligibility;
  account: Scalars['String']['output'];
};

export type Base_Allowlist_AccountRemovedEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  allowlistEligibilityInstance_?: InputMaybe<Base_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Allowlist_AccountRemovedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Allowlist_AccountRemovedEvent_filter>>>;
};

export type Base_Allowlist_AccountRemovedEvent_orderBy =
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

export type Base_Allowlist_AccountStandingChangedEvent = Base_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  allowlistEligibilityInstance: Base_AllowListEligibility;
  account: Scalars['String']['output'];
  standing: Scalars['Boolean']['output'];
};

export type Base_Allowlist_AccountStandingChangedEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  allowlistEligibilityInstance_?: InputMaybe<Base_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Allowlist_AccountStandingChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Allowlist_AccountStandingChangedEvent_filter>>>;
};

export type Base_Allowlist_AccountStandingChangedEvent_orderBy =
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

export type Base_Allowlist_AccountsAddedEvent = Base_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  allowlistEligibilityInstance: Base_AllowListEligibility;
  accounts: Array<Scalars['String']['output']>;
};

export type Base_Allowlist_AccountsAddedEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  allowlistEligibilityInstance_?: InputMaybe<Base_AllowListEligibility_filter>;
  accounts?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Allowlist_AccountsAddedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Allowlist_AccountsAddedEvent_filter>>>;
};

export type Base_Allowlist_AccountsAddedEvent_orderBy =
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

export type Base_Allowlist_AccountsRemovedEvent = Base_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  allowlistEligibilityInstance: Base_AllowListEligibility;
  accounts: Array<Scalars['String']['output']>;
};

export type Base_Allowlist_AccountsRemovedEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  allowlistEligibilityInstance_?: InputMaybe<Base_AllowListEligibility_filter>;
  accounts?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Allowlist_AccountsRemovedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Allowlist_AccountsRemovedEvent_filter>>>;
};

export type Base_Allowlist_AccountsRemovedEvent_orderBy =
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

export type Base_Allowlist_AccountsStandingChangedEvent = Base_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  allowlistEligibilityInstance: Base_AllowListEligibility;
  accounts: Array<Scalars['String']['output']>;
  standings: Array<Scalars['Boolean']['output']>;
};

export type Base_Allowlist_AccountsStandingChangedEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  allowlistEligibilityInstance_?: InputMaybe<Base_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Allowlist_AccountsStandingChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Allowlist_AccountsStandingChangedEvent_filter>>>;
};

export type Base_Allowlist_AccountsStandingChangedEvent_orderBy =
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

export type Base_Allowlist_ArbitratorHatSetEvent = Base_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  allowlistEligibilityInstance: Base_AllowListEligibility;
  newArbitratorHat: Scalars['String']['output'];
};

export type Base_Allowlist_ArbitratorHatSetEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  allowlistEligibilityInstance_?: InputMaybe<Base_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Allowlist_ArbitratorHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Allowlist_ArbitratorHatSetEvent_filter>>>;
};

export type Base_Allowlist_ArbitratorHatSetEvent_orderBy =
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

export type Base_Allowlist_OwnerHatSetEvent = Base_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  allowlistEligibilityInstance: Base_AllowListEligibility;
  newOwnerHat: Scalars['String']['output'];
};

export type Base_Allowlist_OwnerHatSetEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  allowlistEligibilityInstance_?: InputMaybe<Base_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Allowlist_OwnerHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Allowlist_OwnerHatSetEvent_filter>>>;
};

export type Base_Allowlist_OwnerHatSetEvent_orderBy =
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

export type Base_BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Base_Block_height = {
  hash?: InputMaybe<Scalars['Base_Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

/**  Charecter Sheets Level Eligibility  */
export type Base_CharacterSheetsLevelEligibility = Base_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  hatAdmins: Array<Base_HatAuthority>;
};


/**  Charecter Sheets Level Eligibility  */
export type Base_CharacterSheetsLevelEligibilityhatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatAuthority_filter>;
};

export type Base_CharacterSheetsLevelEligibility_filter = {
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
  hatAdmins_?: InputMaybe<Base_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_CharacterSheetsLevelEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_CharacterSheetsLevelEligibility_filter>>>;
};

export type Base_CharacterSheetsLevelEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'hatAdmins';

/**  CoLinks Eligibility  */
export type Base_CoLinksEligibility = Base_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  threshold: Scalars['BigInt']['output'];
};

export type Base_CoLinksEligibility_filter = {
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_CoLinksEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_CoLinksEligibility_filter>>>;
};

export type Base_CoLinksEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'threshold';

export type Base_ElectionEvent = {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  electionEligibilityInstance: Base_HatsElectionEligibility;
};

export type Base_ElectionEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  electionEligibilityInstance_?: InputMaybe<Base_HatsElectionEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_ElectionEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_ElectionEvent_filter>>>;
};

export type Base_ElectionEvent_orderBy =
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

export type Base_ElectionTerm = {
  id: Scalars['ID']['output'];
  hatsElectionEligibility: Base_HatsElectionEligibility;
  /** first term starts when 'elect' is called, next terms start when 'startNextTerm' is called */
  termStartedAt?: Maybe<Scalars['BigInt']['output']>;
  termEnd: Scalars['BigInt']['output'];
  /** election is completed when 'elect' is called */
  electionCompletedAt?: Maybe<Scalars['BigInt']['output']>;
  electedAccounts?: Maybe<Array<Scalars['String']['output']>>;
};

export type Base_ElectionTerm_filter = {
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
  hatsElectionEligibility_?: InputMaybe<Base_HatsElectionEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_ElectionTerm_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_ElectionTerm_filter>>>;
};

export type Base_ElectionTerm_orderBy =
  | 'id'
  | 'hatsElectionEligibility'
  | 'hatsElectionEligibility__id'
  | 'hatsElectionEligibility__version'
  | 'hatsElectionEligibility__hatId'
  | 'termStartedAt'
  | 'termEnd'
  | 'electionCompletedAt'
  | 'electedAccounts';

export type Base_Election_ElectionCompletedEvent = Base_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  electionEligibilityInstance: Base_HatsElectionEligibility;
  termEnd: Scalars['BigInt']['output'];
  winners: Array<Scalars['String']['output']>;
};

export type Base_Election_ElectionCompletedEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  electionEligibilityInstance_?: InputMaybe<Base_HatsElectionEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Election_ElectionCompletedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Election_ElectionCompletedEvent_filter>>>;
};

export type Base_Election_ElectionCompletedEvent_orderBy =
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

export type Base_Election_ElectionOpenedEvent = Base_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  electionEligibilityInstance: Base_HatsElectionEligibility;
  nextTermEnd: Scalars['BigInt']['output'];
};

export type Base_Election_ElectionOpenedEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  electionEligibilityInstance_?: InputMaybe<Base_HatsElectionEligibility_filter>;
  nextTermEnd?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_not?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nextTermEnd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Election_ElectionOpenedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Election_ElectionOpenedEvent_filter>>>;
};

export type Base_Election_ElectionOpenedEvent_orderBy =
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

export type Base_Election_NewTermStartedEvent = Base_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  electionEligibilityInstance: Base_HatsElectionEligibility;
  termEnd: Scalars['BigInt']['output'];
};

export type Base_Election_NewTermStartedEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  electionEligibilityInstance_?: InputMaybe<Base_HatsElectionEligibility_filter>;
  termEnd?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_not?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  termEnd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Election_NewTermStartedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Election_NewTermStartedEvent_filter>>>;
};

export type Base_Election_NewTermStartedEvent_orderBy =
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

export type Base_Election_RecalledEvent = Base_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  electionEligibilityInstance: Base_HatsElectionEligibility;
  termEnd: Scalars['BigInt']['output'];
  accounts: Array<Scalars['String']['output']>;
};

export type Base_Election_RecalledEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  electionEligibilityInstance_?: InputMaybe<Base_HatsElectionEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Election_RecalledEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Election_RecalledEvent_filter>>>;
};

export type Base_Election_RecalledEvent_orderBy =
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

export type Base_EligibilitiesRuleset = {
  id: Scalars['ID']['output'];
  eligibilitiesChain: Base_HatsEligibilitiesChain;
  modules: Array<Base_HatsModule>;
};


export type Base_EligibilitiesRulesetmodulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsModule_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsModule_filter>;
};

export type Base_EligibilitiesRuleset_filter = {
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
  eligibilitiesChain_?: InputMaybe<Base_HatsEligibilitiesChain_filter>;
  modules?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_not?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_?: InputMaybe<Base_HatsModule_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_EligibilitiesRuleset_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_EligibilitiesRuleset_filter>>>;
};

export type Base_EligibilitiesRuleset_orderBy =
  | 'id'
  | 'eligibilitiesChain'
  | 'eligibilitiesChain__id'
  | 'eligibilitiesChain__version'
  | 'eligibilitiesChain__hatId'
  | 'eligibilitiesChain__numRulesets'
  | 'modules';

/**  Erc1155 Eligibility  */
export type Base_Erc1155Eligibility = Base_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  contractAddress: Scalars['String']['output'];
  tokens: Array<Scalars['BigInt']['output']>;
  minBalances: Array<Scalars['BigInt']['output']>;
};

export type Base_Erc1155Eligibility_filter = {
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Erc1155Eligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Erc1155Eligibility_filter>>>;
};

export type Base_Erc1155Eligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'contractAddress'
  | 'tokens'
  | 'minBalances';

/**  Erc20 Eligibility  */
export type Base_Erc20Eligibility = Base_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  token: Scalars['String']['output'];
  minBalance: Scalars['BigInt']['output'];
};

export type Base_Erc20Eligibility_filter = {
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Erc20Eligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Erc20Eligibility_filter>>>;
};

export type Base_Erc20Eligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'token'
  | 'minBalance';

/**  Erc721 Eligibility  */
export type Base_Erc721Eligibility = Base_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  token: Scalars['String']['output'];
  minBalance: Scalars['BigInt']['output'];
};

export type Base_Erc721Eligibility_filter = {
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Erc721Eligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Erc721Eligibility_filter>>>;
};

export type Base_Erc721Eligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'token'
  | 'minBalance';

/**  Gitcoin Passport Eligibility  */
export type Base_GitcoinPassportEligibility = Base_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  decoder: Scalars['String']['output'];
  scoreCriterion: Scalars['BigInt']['output'];
};

export type Base_GitcoinPassportEligibility_filter = {
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_GitcoinPassportEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_GitcoinPassportEligibility_filter>>>;
};

export type Base_GitcoinPassportEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'decoder'
  | 'scoreCriterion';

export type Base_HatAuthority = {
  id: Scalars['ID']['output'];
  /** pre computed hats account address with a salt value of 1, null only if the hat was not created yet */
  primaryHatsAccount1ofNAddress?: Maybe<Scalars['String']['output']>;
  hatsAccount1ofN: Array<Base_HatsAccount1ofN>;
  hsgOwner: Array<Base_HatsSignerGate>;
  hsgSigner: Array<Base_HatsSignerGate>;
  hsgV2Owner: Array<Base_HatsSignerGateV2>;
  hsgV2Signer: Array<Base_HatsSignerGateV2>;
  jokeraceAdmin: Array<Base_JokeRaceEligibility>;
  allowListOwner: Array<Base_AllowListEligibility>;
  allowListArbitrator: Array<Base_AllowListEligibility>;
  electionsBallotBox: Array<Base_HatsElectionEligibility>;
  electionsAdmin: Array<Base_HatsElectionEligibility>;
  eligibilityTogglePassthrough: Array<Base_PassthroughModule>;
  stakingJudge: Array<Base_StakingEligibility>;
  stakingRecipient: Array<Base_StakingEligibility>;
  stakingHatAdmins: Array<Base_StakingEligibility>;
  seasonHatAdmins: Array<Base_SeasonToggle>;
  characterSheetsLevelHatAdmins: Array<Base_CharacterSheetsLevelEligibility>;
  agreementOwner: Array<Base_AgreementEligibility>;
  agreementArbitrator: Array<Base_AgreementEligibility>;
  baalStakingJudge: Array<Base_HatsStakingShaman>;
  hatsFarcasterDelegatorOwner: Array<Base_HatsFarcasterDelegator>;
  hatsFarcasterDelegatorCaster: Array<Base_HatsFarcasterDelegator>;
};


export type Base_HatAuthorityhatsAccount1ofNArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsAccount1ofN_filter>;
};


export type Base_HatAuthorityhsgOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsSignerGate_filter>;
};


export type Base_HatAuthorityhsgSignerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsSignerGate_filter>;
};


export type Base_HatAuthorityhsgV2OwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsSignerGateV2_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsSignerGateV2_filter>;
};


export type Base_HatAuthorityhsgV2SignerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsSignerGateV2_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsSignerGateV2_filter>;
};


export type Base_HatAuthorityjokeraceAdminArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_JokeRaceEligibility_filter>;
};


export type Base_HatAuthorityallowListOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_AllowListEligibility_filter>;
};


export type Base_HatAuthorityallowListArbitratorArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_AllowListEligibility_filter>;
};


export type Base_HatAuthorityelectionsBallotBoxArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsElectionEligibility_filter>;
};


export type Base_HatAuthorityelectionsAdminArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsElectionEligibility_filter>;
};


export type Base_HatAuthorityeligibilityTogglePassthroughArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_PassthroughModule_filter>;
};


export type Base_HatAuthoritystakingJudgeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_StakingEligibility_filter>;
};


export type Base_HatAuthoritystakingRecipientArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_StakingEligibility_filter>;
};


export type Base_HatAuthoritystakingHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_StakingEligibility_filter>;
};


export type Base_HatAuthorityseasonHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_SeasonToggle_filter>;
};


export type Base_HatAuthoritycharacterSheetsLevelHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_CharacterSheetsLevelEligibility_filter>;
};


export type Base_HatAuthorityagreementOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_AgreementEligibility_filter>;
};


export type Base_HatAuthorityagreementArbitratorArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_AgreementEligibility_filter>;
};


export type Base_HatAuthoritybaalStakingJudgeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsStakingShaman_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsStakingShaman_filter>;
};


export type Base_HatAuthorityhatsFarcasterDelegatorOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsFarcasterDelegator_filter>;
};


export type Base_HatAuthorityhatsFarcasterDelegatorCasterArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsFarcasterDelegator_filter>;
};

export type Base_HatAuthority_filter = {
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
  hatsAccount1ofN_?: InputMaybe<Base_HatsAccount1ofN_filter>;
  hsgOwner_?: InputMaybe<Base_HatsSignerGate_filter>;
  hsgSigner_?: InputMaybe<Base_HatsSignerGate_filter>;
  hsgV2Owner_?: InputMaybe<Base_HatsSignerGateV2_filter>;
  hsgV2Signer_?: InputMaybe<Base_HatsSignerGateV2_filter>;
  jokeraceAdmin_?: InputMaybe<Base_JokeRaceEligibility_filter>;
  allowListOwner_?: InputMaybe<Base_AllowListEligibility_filter>;
  allowListArbitrator_?: InputMaybe<Base_AllowListEligibility_filter>;
  electionsBallotBox_?: InputMaybe<Base_HatsElectionEligibility_filter>;
  electionsAdmin_?: InputMaybe<Base_HatsElectionEligibility_filter>;
  eligibilityTogglePassthrough_?: InputMaybe<Base_PassthroughModule_filter>;
  stakingJudge_?: InputMaybe<Base_StakingEligibility_filter>;
  stakingRecipient_?: InputMaybe<Base_StakingEligibility_filter>;
  stakingHatAdmins_?: InputMaybe<Base_StakingEligibility_filter>;
  seasonHatAdmins_?: InputMaybe<Base_SeasonToggle_filter>;
  characterSheetsLevelHatAdmins_?: InputMaybe<Base_CharacterSheetsLevelEligibility_filter>;
  agreementOwner_?: InputMaybe<Base_AgreementEligibility_filter>;
  agreementArbitrator_?: InputMaybe<Base_AgreementEligibility_filter>;
  baalStakingJudge_?: InputMaybe<Base_HatsStakingShaman_filter>;
  hatsFarcasterDelegatorOwner_?: InputMaybe<Base_HatsFarcasterDelegator_filter>;
  hatsFarcasterDelegatorCaster_?: InputMaybe<Base_HatsFarcasterDelegator_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatAuthority_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatAuthority_filter>>>;
};

export type Base_HatAuthority_orderBy =
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
export type Base_HatControlledModule = Base_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  controllerHatId: Scalars['String']['output'];
  wearersStatusData: Array<Base_HatControlledModuleWearerStatus>;
  hatsStatusData: Array<Base_HatControlledModuleHatStatus>;
  events: Array<Base_HatControlledModuleEvent>;
};


/**  Hat Controlled Module  */
export type Base_HatControlledModulewearersStatusDataArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatControlledModuleWearerStatus_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatControlledModuleWearerStatus_filter>;
};


/**  Hat Controlled Module  */
export type Base_HatControlledModulehatsStatusDataArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatControlledModuleHatStatus_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatControlledModuleHatStatus_filter>;
};


/**  Hat Controlled Module  */
export type Base_HatControlledModuleeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatControlledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatControlledModuleEvent_filter>;
};

export type Base_HatControlledModuleEvent = {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  hatControlledModuleInstance: Base_HatControlledModule;
};

export type Base_HatControlledModuleEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  hatControlledModuleInstance_?: InputMaybe<Base_HatControlledModule_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatControlledModuleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatControlledModuleEvent_filter>>>;
};

export type Base_HatControlledModuleEvent_orderBy =
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

export type Base_HatControlledModuleHatStatus = {
  id: Scalars['ID']['output'];
  hatControlledModule: Base_HatControlledModule;
  hatId: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
};

export type Base_HatControlledModuleHatStatus_filter = {
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
  hatControlledModule_?: InputMaybe<Base_HatControlledModule_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatControlledModuleHatStatus_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatControlledModuleHatStatus_filter>>>;
};

export type Base_HatControlledModuleHatStatus_orderBy =
  | 'id'
  | 'hatControlledModule'
  | 'hatControlledModule__id'
  | 'hatControlledModule__version'
  | 'hatControlledModule__hatId'
  | 'hatControlledModule__controllerHatId'
  | 'hatId'
  | 'active';

export type Base_HatControlledModuleWearerStatus = {
  id: Scalars['ID']['output'];
  hatControlledModule: Base_HatControlledModule;
  hatId: Scalars['String']['output'];
  wearer: Scalars['String']['output'];
  eligible: Scalars['Boolean']['output'];
  standing: Scalars['Boolean']['output'];
};

export type Base_HatControlledModuleWearerStatus_filter = {
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
  hatControlledModule_?: InputMaybe<Base_HatControlledModule_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatControlledModuleWearerStatus_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatControlledModuleWearerStatus_filter>>>;
};

export type Base_HatControlledModuleWearerStatus_orderBy =
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

export type Base_HatControlledModule_filter = {
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
  wearersStatusData_?: InputMaybe<Base_HatControlledModuleWearerStatus_filter>;
  hatsStatusData_?: InputMaybe<Base_HatControlledModuleHatStatus_filter>;
  events_?: InputMaybe<Base_HatControlledModuleEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatControlledModule_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatControlledModule_filter>>>;
};

export type Base_HatControlledModule_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'controllerHatId'
  | 'wearersStatusData'
  | 'hatsStatusData'
  | 'events';

export type Base_HatControlled_HatStatusSet = Base_HatControlledModuleEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  hatControlledModuleInstance: Base_HatControlledModule;
  hatId: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
};

export type Base_HatControlled_HatStatusSet_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  hatControlledModuleInstance_?: InputMaybe<Base_HatControlledModule_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatControlled_HatStatusSet_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatControlled_HatStatusSet_filter>>>;
};

export type Base_HatControlled_HatStatusSet_orderBy =
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

export type Base_HatControlled_WearerStatusSet = Base_HatControlledModuleEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  hatControlledModuleInstance: Base_HatControlledModule;
  wearer: Scalars['String']['output'];
  hatId: Scalars['String']['output'];
  eligible: Scalars['Boolean']['output'];
  standing: Scalars['Boolean']['output'];
};

export type Base_HatControlled_WearerStatusSet_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  hatControlledModuleInstance_?: InputMaybe<Base_HatControlledModule_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatControlled_WearerStatusSet_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatControlled_WearerStatusSet_filter>>>;
};

export type Base_HatControlled_WearerStatusSet_orderBy =
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
export type Base_HatWearingEligibility = Base_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  criterionHat: Scalars['String']['output'];
};

export type Base_HatWearingEligibility_filter = {
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatWearingEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatWearingEligibility_filter>>>;
};

export type Base_HatWearingEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'criterionHat';

/** Hats Account 1ofN */
export type Base_HatsAccount1ofN = {
  id: Scalars['ID']['output'];
  accountOfHat: Base_HatAuthority;
  operations: Array<Base_HatsAccount1ofNOperation>;
};


/** Hats Account 1ofN */
export type Base_HatsAccount1ofNoperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsAccount1ofNOperation_filter>;
};

export type Base_HatsAccount1ofNOperation = {
  id: Scalars['ID']['output'];
  hatsAccount: Base_HatsAccount1ofN;
  signer: Scalars['String']['output'];
  to: Scalars['String']['output'];
  value: Scalars['BigInt']['output'];
  callData: Scalars['Base_Bytes']['output'];
  operationType: Base_HatsAccountOperationType;
};

export type Base_HatsAccount1ofNOperation_filter = {
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
  hatsAccount_?: InputMaybe<Base_HatsAccount1ofN_filter>;
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
  callData?: InputMaybe<Scalars['Base_Bytes']['input']>;
  callData_not?: InputMaybe<Scalars['Base_Bytes']['input']>;
  callData_gt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  callData_lt?: InputMaybe<Scalars['Base_Bytes']['input']>;
  callData_gte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  callData_lte?: InputMaybe<Scalars['Base_Bytes']['input']>;
  callData_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  callData_not_in?: InputMaybe<Array<Scalars['Base_Bytes']['input']>>;
  callData_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
  callData_not_contains?: InputMaybe<Scalars['Base_Bytes']['input']>;
  operationType?: InputMaybe<Base_HatsAccountOperationType>;
  operationType_not?: InputMaybe<Base_HatsAccountOperationType>;
  operationType_in?: InputMaybe<Array<Base_HatsAccountOperationType>>;
  operationType_not_in?: InputMaybe<Array<Base_HatsAccountOperationType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatsAccount1ofNOperation_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatsAccount1ofNOperation_filter>>>;
};

export type Base_HatsAccount1ofNOperation_orderBy =
  | 'id'
  | 'hatsAccount'
  | 'hatsAccount__id'
  | 'signer'
  | 'to'
  | 'value'
  | 'callData'
  | 'operationType';

export type Base_HatsAccount1ofN_filter = {
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
  accountOfHat_?: InputMaybe<Base_HatAuthority_filter>;
  operations_?: InputMaybe<Base_HatsAccount1ofNOperation_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatsAccount1ofN_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatsAccount1ofN_filter>>>;
};

export type Base_HatsAccount1ofN_orderBy =
  | 'id'
  | 'accountOfHat'
  | 'accountOfHat__id'
  | 'accountOfHat__primaryHatsAccount1ofNAddress'
  | 'operations';

export type Base_HatsAccountOperationType =
  | 'Call'
  | 'DelegateCall';

/** HatsElection Eligibility */
export type Base_HatsElectionEligibility = Base_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  ballotBoxHat: Base_HatAuthority;
  adminHat: Array<Base_HatAuthority>;
  terms: Array<Base_ElectionTerm>;
  currentTerm?: Maybe<Base_ElectionTerm>;
  events: Array<Base_ElectionEvent>;
};


/** HatsElection Eligibility */
export type Base_HatsElectionEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatAuthority_filter>;
};


/** HatsElection Eligibility */
export type Base_HatsElectionEligibilitytermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_ElectionTerm_filter>;
};


/** HatsElection Eligibility */
export type Base_HatsElectionEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_ElectionEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_ElectionEvent_filter>;
};

export type Base_HatsElectionEligibility_filter = {
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
  ballotBoxHat_?: InputMaybe<Base_HatAuthority_filter>;
  adminHat?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_?: InputMaybe<Base_HatAuthority_filter>;
  terms_?: InputMaybe<Base_ElectionTerm_filter>;
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
  currentTerm_?: InputMaybe<Base_ElectionTerm_filter>;
  events_?: InputMaybe<Base_ElectionEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatsElectionEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatsElectionEligibility_filter>>>;
};

export type Base_HatsElectionEligibility_orderBy =
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
export type Base_HatsEligibilitiesChain = Base_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  rulesets: Array<Base_EligibilitiesRuleset>;
  moduleAddresses: Array<Scalars['String']['output']>;
  numRulesets: Scalars['BigInt']['output'];
};


/**  Chains  */
export type Base_HatsEligibilitiesChainrulesetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_EligibilitiesRuleset_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_EligibilitiesRuleset_filter>;
};

export type Base_HatsEligibilitiesChain_filter = {
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
  rulesets_?: InputMaybe<Base_EligibilitiesRuleset_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatsEligibilitiesChain_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatsEligibilitiesChain_filter>>>;
};

export type Base_HatsEligibilitiesChain_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'rulesets'
  | 'moduleAddresses'
  | 'numRulesets';

/** Farcaster Delegator */
export type Base_HatsFarcasterDelegator = {
  id: Scalars['ID']['output'];
  caster: Base_HatAuthority;
  owner: Base_HatAuthority;
};

export type Base_HatsFarcasterDelegator_filter = {
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
  caster_?: InputMaybe<Base_HatAuthority_filter>;
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
  owner_?: InputMaybe<Base_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatsFarcasterDelegator_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatsFarcasterDelegator_filter>>>;
};

export type Base_HatsFarcasterDelegator_orderBy =
  | 'id'
  | 'caster'
  | 'caster__id'
  | 'caster__primaryHatsAccount1ofNAddress'
  | 'owner'
  | 'owner__id'
  | 'owner__primaryHatsAccount1ofNAddress';

/**  *** Modules ***  */
export type Base_HatsModule = {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
};

export type Base_HatsModuleEvent = {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
};

export type Base_HatsModuleEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  and?: InputMaybe<Array<InputMaybe<Base_HatsModuleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatsModuleEvent_filter>>>;
};

export type Base_HatsModuleEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID';

export type Base_HatsModule_filter = {
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatsModule_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatsModule_filter>>>;
};

export type Base_HatsModule_orderBy =
  | 'id'
  | 'version'
  | 'hatId';

/** Hats Signer Gate */
export type Base_HatsSignerGate = {
  id: Scalars['ID']['output'];
  type: Base_HatsSignerGateType;
  ownerHat: Base_HatAuthority;
  signerHats: Array<Base_HatAuthority>;
  safe: Scalars['String']['output'];
  minThreshold: Scalars['BigInt']['output'];
  targetThreshold: Scalars['BigInt']['output'];
  maxSigners: Scalars['BigInt']['output'];
};


/** Hats Signer Gate */
export type Base_HatsSignerGatesignerHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatAuthority_filter>;
};

export type Base_HatsSignerGateType =
  | 'Single'
  | 'Multi';

/** HSG v2 */
export type Base_HatsSignerGateV2 = {
  id: Scalars['ID']['output'];
  ownerHat: Base_HatAuthority;
  signerHats: Array<Base_HatAuthority>;
  safe: Scalars['String']['output'];
  locked: Scalars['Boolean']['output'];
  claimableFor: Scalars['Boolean']['output'];
  implementation: Scalars['String']['output'];
  enabledDelegatecallTargets: Array<Scalars['String']['output']>;
  thresholdType: Base_HatsSignerGateV2ThresholdType;
  minThreshold: Scalars['BigInt']['output'];
  targetThreshold: Scalars['BigInt']['output'];
  guard: Scalars['String']['output'];
  modules: Array<Scalars['String']['output']>;
  events: Array<Base_HatsSignerGateV2Event>;
};


/** HSG v2 */
export type Base_HatsSignerGateV2signerHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatAuthority_filter>;
};


/** HSG v2 */
export type Base_HatsSignerGateV2eventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsSignerGateV2Event_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsSignerGateV2Event_filter>;
};

export type Base_HatsSignerGateV2Event = {
  id: Scalars['ID']['output'];
  hsg: Base_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
};

export type Base_HatsSignerGateV2Event_filter = {
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
  hsg_?: InputMaybe<Base_HatsSignerGateV2_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  and?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2Event_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2Event_filter>>>;
};

export type Base_HatsSignerGateV2Event_orderBy =
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

export type Base_HatsSignerGateV2ThresholdType =
  | 'ABSOLUTE'
  | 'PROPORTIONAL';

export type Base_HatsSignerGateV2_ChangedGuardEvent = Base_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Base_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  guard: Scalars['String']['output'];
};

export type Base_HatsSignerGateV2_ChangedGuardEvent_filter = {
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
  hsg_?: InputMaybe<Base_HatsSignerGateV2_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2_ChangedGuardEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2_ChangedGuardEvent_filter>>>;
};

export type Base_HatsSignerGateV2_ChangedGuardEvent_orderBy =
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

export type Base_HatsSignerGateV2_ClaimableForSetEvent = Base_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Base_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  claimableFor: Scalars['Boolean']['output'];
};

export type Base_HatsSignerGateV2_ClaimableForSetEvent_filter = {
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
  hsg_?: InputMaybe<Base_HatsSignerGateV2_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  claimableFor?: InputMaybe<Scalars['Boolean']['input']>;
  claimableFor_not?: InputMaybe<Scalars['Boolean']['input']>;
  claimableFor_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  claimableFor_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2_ClaimableForSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2_ClaimableForSetEvent_filter>>>;
};

export type Base_HatsSignerGateV2_ClaimableForSetEvent_orderBy =
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

export type Base_HatsSignerGateV2_DelegatecallTargetEnabledEvent = Base_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Base_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  target: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
};

export type Base_HatsSignerGateV2_DelegatecallTargetEnabledEvent_filter = {
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
  hsg_?: InputMaybe<Base_HatsSignerGateV2_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2_DelegatecallTargetEnabledEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2_DelegatecallTargetEnabledEvent_filter>>>;
};

export type Base_HatsSignerGateV2_DelegatecallTargetEnabledEvent_orderBy =
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

export type Base_HatsSignerGateV2_DetachedEvent = Base_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Base_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
};

export type Base_HatsSignerGateV2_DetachedEvent_filter = {
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
  hsg_?: InputMaybe<Base_HatsSignerGateV2_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  and?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2_DetachedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2_DetachedEvent_filter>>>;
};

export type Base_HatsSignerGateV2_DetachedEvent_orderBy =
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

export type Base_HatsSignerGateV2_DisabledModuleEvent = Base_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Base_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  module: Scalars['String']['output'];
};

export type Base_HatsSignerGateV2_DisabledModuleEvent_filter = {
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
  hsg_?: InputMaybe<Base_HatsSignerGateV2_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2_DisabledModuleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2_DisabledModuleEvent_filter>>>;
};

export type Base_HatsSignerGateV2_DisabledModuleEvent_orderBy =
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

export type Base_HatsSignerGateV2_EnabledModuleEvent = Base_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Base_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  module: Scalars['String']['output'];
};

export type Base_HatsSignerGateV2_EnabledModuleEvent_filter = {
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
  hsg_?: InputMaybe<Base_HatsSignerGateV2_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2_EnabledModuleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2_EnabledModuleEvent_filter>>>;
};

export type Base_HatsSignerGateV2_EnabledModuleEvent_orderBy =
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

export type Base_HatsSignerGateV2_HSGLockedEvent = Base_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Base_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
};

export type Base_HatsSignerGateV2_HSGLockedEvent_filter = {
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
  hsg_?: InputMaybe<Base_HatsSignerGateV2_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  and?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2_HSGLockedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2_HSGLockedEvent_filter>>>;
};

export type Base_HatsSignerGateV2_HSGLockedEvent_orderBy =
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

export type Base_HatsSignerGateV2_MigratedEvent = Base_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Base_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  newHsg: Scalars['String']['output'];
};

export type Base_HatsSignerGateV2_MigratedEvent_filter = {
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
  hsg_?: InputMaybe<Base_HatsSignerGateV2_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2_MigratedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2_MigratedEvent_filter>>>;
};

export type Base_HatsSignerGateV2_MigratedEvent_orderBy =
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

export type Base_HatsSignerGateV2_OwnerHatSetEvent = Base_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Base_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  ownerHat: Scalars['String']['output'];
};

export type Base_HatsSignerGateV2_OwnerHatSetEvent_filter = {
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
  hsg_?: InputMaybe<Base_HatsSignerGateV2_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2_OwnerHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2_OwnerHatSetEvent_filter>>>;
};

export type Base_HatsSignerGateV2_OwnerHatSetEvent_orderBy =
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

export type Base_HatsSignerGateV2_RegisteredEvent = Base_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Base_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  hatId: Scalars['String']['output'];
  signer: Scalars['String']['output'];
};

export type Base_HatsSignerGateV2_RegisteredEvent_filter = {
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
  hsg_?: InputMaybe<Base_HatsSignerGateV2_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2_RegisteredEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2_RegisteredEvent_filter>>>;
};

export type Base_HatsSignerGateV2_RegisteredEvent_orderBy =
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

export type Base_HatsSignerGateV2_SignerHatsAddedEvent = Base_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Base_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  newSignerHats: Array<Scalars['String']['output']>;
};

export type Base_HatsSignerGateV2_SignerHatsAddedEvent_filter = {
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
  hsg_?: InputMaybe<Base_HatsSignerGateV2_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  newSignerHats?: InputMaybe<Array<Scalars['String']['input']>>;
  newSignerHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  newSignerHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  newSignerHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  newSignerHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  newSignerHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2_SignerHatsAddedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2_SignerHatsAddedEvent_filter>>>;
};

export type Base_HatsSignerGateV2_SignerHatsAddedEvent_orderBy =
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

export type Base_HatsSignerGateV2_ThresholdConfigSetEvent = Base_HatsSignerGateV2Event & {
  id: Scalars['ID']['output'];
  hsg: Base_HatsSignerGateV2;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  thresholdType: Base_HatsSignerGateV2ThresholdType;
  minThreshold: Scalars['BigInt']['output'];
  targetThreshold: Scalars['BigInt']['output'];
};

export type Base_HatsSignerGateV2_ThresholdConfigSetEvent_filter = {
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
  hsg_?: InputMaybe<Base_HatsSignerGateV2_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  thresholdType?: InputMaybe<Base_HatsSignerGateV2ThresholdType>;
  thresholdType_not?: InputMaybe<Base_HatsSignerGateV2ThresholdType>;
  thresholdType_in?: InputMaybe<Array<Base_HatsSignerGateV2ThresholdType>>;
  thresholdType_not_in?: InputMaybe<Array<Base_HatsSignerGateV2ThresholdType>>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2_ThresholdConfigSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2_ThresholdConfigSetEvent_filter>>>;
};

export type Base_HatsSignerGateV2_ThresholdConfigSetEvent_orderBy =
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

export type Base_HatsSignerGateV2_filter = {
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
  ownerHat_?: InputMaybe<Base_HatAuthority_filter>;
  signerHats?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_?: InputMaybe<Base_HatAuthority_filter>;
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
  thresholdType?: InputMaybe<Base_HatsSignerGateV2ThresholdType>;
  thresholdType_not?: InputMaybe<Base_HatsSignerGateV2ThresholdType>;
  thresholdType_in?: InputMaybe<Array<Base_HatsSignerGateV2ThresholdType>>;
  thresholdType_not_in?: InputMaybe<Array<Base_HatsSignerGateV2ThresholdType>>;
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
  events_?: InputMaybe<Base_HatsSignerGateV2Event_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatsSignerGateV2_filter>>>;
};

export type Base_HatsSignerGateV2_orderBy =
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

export type Base_HatsSignerGate_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  type?: InputMaybe<Base_HatsSignerGateType>;
  type_not?: InputMaybe<Base_HatsSignerGateType>;
  type_in?: InputMaybe<Array<Base_HatsSignerGateType>>;
  type_not_in?: InputMaybe<Array<Base_HatsSignerGateType>>;
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
  ownerHat_?: InputMaybe<Base_HatAuthority_filter>;
  signerHats?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_?: InputMaybe<Base_HatAuthority_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatsSignerGate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatsSignerGate_filter>>>;
};

export type Base_HatsSignerGate_orderBy =
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

export type Base_HatsStakingShaman = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  judgeHat: Base_HatAuthority;
  baal: Scalars['String']['output'];
  stakingProxyImpl: Scalars['String']['output'];
  sharesToken: Scalars['String']['output'];
  minStake: Scalars['BigInt']['output'];
  coolDownBuffer: Scalars['BigInt']['output'];
  stakes: Array<Base_ShamanStake>;
};


export type Base_HatsStakingShamanstakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_ShamanStake_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_ShamanStake_filter>;
};

export type Base_HatsStakingShaman_filter = {
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
  judgeHat_?: InputMaybe<Base_HatAuthority_filter>;
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
  stakes_?: InputMaybe<Base_ShamanStake_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatsStakingShaman_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatsStakingShaman_filter>>>;
};

export type Base_HatsStakingShaman_orderBy =
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
export type Base_JokeRaceEligibility = Base_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  adminHat: Array<Base_HatAuthority>;
  currentTerm?: Maybe<Base_JokeRaceEligibilityTerm>;
  nextTerm?: Maybe<Base_JokeRaceEligibilityTerm>;
  allTerms: Array<Base_JokeRaceEligibilityTerm>;
  events: Array<Base_JokeRaceEvent>;
};


/**  Jokerace Eligibility  */
export type Base_JokeRaceEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatAuthority_filter>;
};


/**  Jokerace Eligibility  */
export type Base_JokeRaceEligibilityallTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_JokeRaceEligibilityTerm_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_JokeRaceEligibilityTerm_filter>;
};


/**  Jokerace Eligibility  */
export type Base_JokeRaceEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_JokeRaceEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_JokeRaceEvent_filter>;
};

export type Base_JokeRaceEligibilityTerm = {
  id: Scalars['ID']['output'];
  jokeRaceEligibility: Base_JokeRaceEligibility;
  termStartedAt?: Maybe<Scalars['BigInt']['output']>;
  termEndsAt: Scalars['BigInt']['output'];
  topK: Scalars['BigInt']['output'];
  transitionPeriod: Scalars['BigInt']['output'];
  contest: Scalars['String']['output'];
  winners?: Maybe<Array<Scalars['String']['output']>>;
};

export type Base_JokeRaceEligibilityTerm_filter = {
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
  jokeRaceEligibility_?: InputMaybe<Base_JokeRaceEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_JokeRaceEligibilityTerm_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_JokeRaceEligibilityTerm_filter>>>;
};

export type Base_JokeRaceEligibilityTerm_orderBy =
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

export type Base_JokeRaceEligibility_filter = {
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
  adminHat_?: InputMaybe<Base_HatAuthority_filter>;
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
  currentTerm_?: InputMaybe<Base_JokeRaceEligibilityTerm_filter>;
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
  nextTerm_?: InputMaybe<Base_JokeRaceEligibilityTerm_filter>;
  allTerms_?: InputMaybe<Base_JokeRaceEligibilityTerm_filter>;
  events_?: InputMaybe<Base_JokeRaceEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_JokeRaceEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_JokeRaceEligibility_filter>>>;
};

export type Base_JokeRaceEligibility_orderBy =
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

export type Base_JokeRaceEvent = {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  jokeRaceEligibilityInstance: Base_JokeRaceEligibility;
};

export type Base_JokeRaceEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  jokeRaceEligibilityInstance_?: InputMaybe<Base_JokeRaceEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_JokeRaceEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_JokeRaceEvent_filter>>>;
};

export type Base_JokeRaceEvent_orderBy =
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

export type Base_JokeRace_NextTermSetEvent = Base_JokeRaceEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  jokeRaceEligibilityInstance: Base_JokeRaceEligibility;
  newContest: Scalars['String']['output'];
  newTopK: Scalars['BigInt']['output'];
  newTermEnd: Scalars['BigInt']['output'];
  newTransitionPeriod: Scalars['BigInt']['output'];
};

export type Base_JokeRace_NextTermSetEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  jokeRaceEligibilityInstance_?: InputMaybe<Base_JokeRaceEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_JokeRace_NextTermSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_JokeRace_NextTermSetEvent_filter>>>;
};

export type Base_JokeRace_NextTermSetEvent_orderBy =
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

export type Base_JokeRace_TermStartedEvent = Base_JokeRaceEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  jokeRaceEligibilityInstance: Base_JokeRaceEligibility;
  contest: Scalars['String']['output'];
  topK: Scalars['BigInt']['output'];
  termEnd: Scalars['BigInt']['output'];
  transitionPeriod: Scalars['BigInt']['output'];
};

export type Base_JokeRace_TermStartedEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  jokeRaceEligibilityInstance_?: InputMaybe<Base_JokeRaceEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_JokeRace_TermStartedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_JokeRace_TermStartedEvent_filter>>>;
};

export type Base_JokeRace_TermStartedEvent_orderBy =
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
export type Base_OrderDirection =
  | 'asc'
  | 'desc';

/**  Passthrough Module  */
export type Base_PassthroughModule = Base_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  passthroughHat: Base_HatAuthority;
};

export type Base_PassthroughModule_filter = {
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
  passthroughHat_?: InputMaybe<Base_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_PassthroughModule_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_PassthroughModule_filter>>>;
};

export type Base_PassthroughModule_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'passthroughHat'
  | 'passthroughHat__id'
  | 'passthroughHat__primaryHatsAccount1ofNAddress';

/**  Public Lock V14 Eligibility  */
export type Base_PublicLockV14Eligibility = Base_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  lock: Scalars['String']['output'];
  referrer: Scalars['String']['output'];
  referrerFeePercentage: Scalars['BigInt']['output'];
};

export type Base_PublicLockV14Eligibility_filter = {
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_PublicLockV14Eligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_PublicLockV14Eligibility_filter>>>;
};

export type Base_PublicLockV14Eligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'lock'
  | 'referrer'
  | 'referrerFeePercentage';

export type Query = {
  Base_hatAuthority?: Maybe<Base_HatAuthority>;
  Base_hatAuthorities: Array<Base_HatAuthority>;
  Base_hatsSignerGate?: Maybe<Base_HatsSignerGate>;
  Base_hatsSignerGates: Array<Base_HatsSignerGate>;
  Base_hatsSignerGateV2?: Maybe<Base_HatsSignerGateV2>;
  Base_hatsSignerGateV2S: Array<Base_HatsSignerGateV2>;
  Base_hatsSignerGateV2OwnerHatSetEvent?: Maybe<Base_HatsSignerGateV2_OwnerHatSetEvent>;
  Base_hatsSignerGateV2OwnerHatSetEvents: Array<Base_HatsSignerGateV2_OwnerHatSetEvent>;
  Base_hatsSignerGateV2SignerHatsAddedEvent?: Maybe<Base_HatsSignerGateV2_SignerHatsAddedEvent>;
  Base_hatsSignerGateV2SignerHatsAddedEvents: Array<Base_HatsSignerGateV2_SignerHatsAddedEvent>;
  Base_hatsSignerGateV2ThresholdConfigSetEvent?: Maybe<Base_HatsSignerGateV2_ThresholdConfigSetEvent>;
  Base_hatsSignerGateV2ThresholdConfigSetEvents: Array<Base_HatsSignerGateV2_ThresholdConfigSetEvent>;
  Base_hatsSignerGateV2HSGLockedEvent?: Maybe<Base_HatsSignerGateV2_HSGLockedEvent>;
  Base_hatsSignerGateV2HSGLockedEvents: Array<Base_HatsSignerGateV2_HSGLockedEvent>;
  Base_hatsSignerGateV2ClaimableForSetEvent?: Maybe<Base_HatsSignerGateV2_ClaimableForSetEvent>;
  Base_hatsSignerGateV2ClaimableForSetEvents: Array<Base_HatsSignerGateV2_ClaimableForSetEvent>;
  Base_hatsSignerGateV2DetachedEvent?: Maybe<Base_HatsSignerGateV2_DetachedEvent>;
  Base_hatsSignerGateV2DetachedEvents: Array<Base_HatsSignerGateV2_DetachedEvent>;
  Base_hatsSignerGateV2MigratedEvent?: Maybe<Base_HatsSignerGateV2_MigratedEvent>;
  Base_hatsSignerGateV2MigratedEvents: Array<Base_HatsSignerGateV2_MigratedEvent>;
  Base_hatsSignerGateV2DelegatecallTargetEnabledEvent?: Maybe<Base_HatsSignerGateV2_DelegatecallTargetEnabledEvent>;
  Base_hatsSignerGateV2DelegatecallTargetEnabledEvents: Array<Base_HatsSignerGateV2_DelegatecallTargetEnabledEvent>;
  Base_hatsSignerGateV2RegisteredEvent?: Maybe<Base_HatsSignerGateV2_RegisteredEvent>;
  Base_hatsSignerGateV2RegisteredEvents: Array<Base_HatsSignerGateV2_RegisteredEvent>;
  Base_hatsSignerGateV2ChangedGuardEvent?: Maybe<Base_HatsSignerGateV2_ChangedGuardEvent>;
  Base_hatsSignerGateV2ChangedGuardEvents: Array<Base_HatsSignerGateV2_ChangedGuardEvent>;
  Base_hatsSignerGateV2EnabledModuleEvent?: Maybe<Base_HatsSignerGateV2_EnabledModuleEvent>;
  Base_hatsSignerGateV2EnabledModuleEvents: Array<Base_HatsSignerGateV2_EnabledModuleEvent>;
  Base_hatsSignerGateV2DisabledModuleEvent?: Maybe<Base_HatsSignerGateV2_DisabledModuleEvent>;
  Base_hatsSignerGateV2DisabledModuleEvents: Array<Base_HatsSignerGateV2_DisabledModuleEvent>;
  Base_hatsAccount1OfN?: Maybe<Base_HatsAccount1ofN>;
  Base_hatsAccount1OfNs: Array<Base_HatsAccount1ofN>;
  Base_hatsAccount1OfNOperation?: Maybe<Base_HatsAccount1ofNOperation>;
  Base_hatsAccount1OfNOperations: Array<Base_HatsAccount1ofNOperation>;
  Base_hatsStakingShaman?: Maybe<Base_HatsStakingShaman>;
  Base_hatsStakingShamans: Array<Base_HatsStakingShaman>;
  Base_shamanStake?: Maybe<Base_ShamanStake>;
  Base_shamanStakes: Array<Base_ShamanStake>;
  Base_hatsFarcasterDelegator?: Maybe<Base_HatsFarcasterDelegator>;
  Base_hatsFarcasterDelegators: Array<Base_HatsFarcasterDelegator>;
  Base_jokeRaceEligibility?: Maybe<Base_JokeRaceEligibility>;
  Base_jokeRaceEligibilities: Array<Base_JokeRaceEligibility>;
  Base_jokeRaceEligibilityTerm?: Maybe<Base_JokeRaceEligibilityTerm>;
  Base_jokeRaceEligibilityTerms: Array<Base_JokeRaceEligibilityTerm>;
  Base_jokeRaceNextTermSetEvent?: Maybe<Base_JokeRace_NextTermSetEvent>;
  Base_jokeRaceNextTermSetEvents: Array<Base_JokeRace_NextTermSetEvent>;
  Base_jokeRaceTermStartedEvent?: Maybe<Base_JokeRace_TermStartedEvent>;
  Base_jokeRaceTermStartedEvents: Array<Base_JokeRace_TermStartedEvent>;
  Base_allowListEligibility?: Maybe<Base_AllowListEligibility>;
  Base_allowListEligibilities: Array<Base_AllowListEligibility>;
  Base_allowListEligibilityData?: Maybe<Base_AllowListEligibilityData>;
  Base_allowListEligibilityDatas: Array<Base_AllowListEligibilityData>;
  Base_allowlistAccountAddedEvent?: Maybe<Base_Allowlist_AccountAddedEvent>;
  Base_allowlistAccountAddedEvents: Array<Base_Allowlist_AccountAddedEvent>;
  Base_allowlistAccountsAddedEvent?: Maybe<Base_Allowlist_AccountsAddedEvent>;
  Base_allowlistAccountsAddedEvents: Array<Base_Allowlist_AccountsAddedEvent>;
  Base_allowlistAccountRemovedEvent?: Maybe<Base_Allowlist_AccountRemovedEvent>;
  Base_allowlistAccountRemovedEvents: Array<Base_Allowlist_AccountRemovedEvent>;
  Base_allowlistAccountsRemovedEvent?: Maybe<Base_Allowlist_AccountsRemovedEvent>;
  Base_allowlistAccountsRemovedEvents: Array<Base_Allowlist_AccountsRemovedEvent>;
  Base_allowlistAccountStandingChangedEvent?: Maybe<Base_Allowlist_AccountStandingChangedEvent>;
  Base_allowlistAccountStandingChangedEvents: Array<Base_Allowlist_AccountStandingChangedEvent>;
  Base_allowlistAccountsStandingChangedEvent?: Maybe<Base_Allowlist_AccountsStandingChangedEvent>;
  Base_allowlistAccountsStandingChangedEvents: Array<Base_Allowlist_AccountsStandingChangedEvent>;
  Base_allowlistOwnerHatSetEvent?: Maybe<Base_Allowlist_OwnerHatSetEvent>;
  Base_allowlistOwnerHatSetEvents: Array<Base_Allowlist_OwnerHatSetEvent>;
  Base_allowlistArbitratorHatSetEvent?: Maybe<Base_Allowlist_ArbitratorHatSetEvent>;
  Base_allowlistArbitratorHatSetEvents: Array<Base_Allowlist_ArbitratorHatSetEvent>;
  Base_hatsElectionEligibility?: Maybe<Base_HatsElectionEligibility>;
  Base_hatsElectionEligibilities: Array<Base_HatsElectionEligibility>;
  Base_electionTerm?: Maybe<Base_ElectionTerm>;
  Base_electionTerms: Array<Base_ElectionTerm>;
  Base_electionElectionOpenedEvent?: Maybe<Base_Election_ElectionOpenedEvent>;
  Base_electionElectionOpenedEvents: Array<Base_Election_ElectionOpenedEvent>;
  Base_electionElectionCompletedEvent?: Maybe<Base_Election_ElectionCompletedEvent>;
  Base_electionElectionCompletedEvents: Array<Base_Election_ElectionCompletedEvent>;
  Base_electionNewTermStartedEvent?: Maybe<Base_Election_NewTermStartedEvent>;
  Base_electionNewTermStartedEvents: Array<Base_Election_NewTermStartedEvent>;
  Base_electionRecalledEvent?: Maybe<Base_Election_RecalledEvent>;
  Base_electionRecalledEvents: Array<Base_Election_RecalledEvent>;
  Base_passthroughModule?: Maybe<Base_PassthroughModule>;
  Base_passthroughModules: Array<Base_PassthroughModule>;
  Base_stakingEligibility?: Maybe<Base_StakingEligibility>;
  Base_stakingEligibilities: Array<Base_StakingEligibility>;
  Base_stake?: Maybe<Base_Stake>;
  Base_stakes: Array<Base_Stake>;
  Base_stakingStakedEvent?: Maybe<Base_Staking_StakedEvent>;
  Base_stakingStakedEvents: Array<Base_Staking_StakedEvent>;
  Base_stakingUnstakeBegunEvent?: Maybe<Base_Staking_UnstakeBegunEvent>;
  Base_stakingUnstakeBegunEvents: Array<Base_Staking_UnstakeBegunEvent>;
  Base_stakingSlashedEvent?: Maybe<Base_Staking_SlashedEvent>;
  Base_stakingSlashedEvents: Array<Base_Staking_SlashedEvent>;
  Base_stakingMinStakeChangedEvent?: Maybe<Base_Staking_MinStakeChangedEvent>;
  Base_stakingMinStakeChangedEvents: Array<Base_Staking_MinStakeChangedEvent>;
  Base_stakingJudgeHatChangedEvent?: Maybe<Base_Staking_JudgeHatChangedEvent>;
  Base_stakingJudgeHatChangedEvents: Array<Base_Staking_JudgeHatChangedEvent>;
  Base_stakingRecipientHatChangedEvent?: Maybe<Base_Staking_RecipientHatChangedEvent>;
  Base_stakingRecipientHatChangedEvents: Array<Base_Staking_RecipientHatChangedEvent>;
  Base_stakingCooldownPeriodChangedEvent?: Maybe<Base_Staking_CooldownPeriodChangedEvent>;
  Base_stakingCooldownPeriodChangedEvents: Array<Base_Staking_CooldownPeriodChangedEvent>;
  Base_stakingForgivenEvent?: Maybe<Base_Staking_ForgivenEvent>;
  Base_stakingForgivenEvents: Array<Base_Staking_ForgivenEvent>;
  Base_seasonToggle?: Maybe<Base_SeasonToggle>;
  Base_seasonToggles: Array<Base_SeasonToggle>;
  Base_characterSheetsLevelEligibility?: Maybe<Base_CharacterSheetsLevelEligibility>;
  Base_characterSheetsLevelEligibilities: Array<Base_CharacterSheetsLevelEligibility>;
  Base_agreementEligibility?: Maybe<Base_AgreementEligibility>;
  Base_agreementEligibilities: Array<Base_AgreementEligibility>;
  Base_agreement?: Maybe<Base_Agreement>;
  Base_agreements: Array<Base_Agreement>;
  Base_agreementHatClaimedWithAgreementEvent?: Maybe<Base_Agreement_HatClaimedWithAgreementEvent>;
  Base_agreementHatClaimedWithAgreementEvents: Array<Base_Agreement_HatClaimedWithAgreementEvent>;
  Base_agreementAgreementSignedEvent?: Maybe<Base_Agreement_AgreementSignedEvent>;
  Base_agreementAgreementSignedEvents: Array<Base_Agreement_AgreementSignedEvent>;
  Base_agreementAgreementSetEvent?: Maybe<Base_Agreement_AgreementSetEvent>;
  Base_agreementAgreementSetEvents: Array<Base_Agreement_AgreementSetEvent>;
  Base_agreementOwnerHatSetEvent?: Maybe<Base_Agreement_OwnerHatSetEvent>;
  Base_agreementOwnerHatSetEvents: Array<Base_Agreement_OwnerHatSetEvent>;
  Base_agreementArbitratorHatSetEvent?: Maybe<Base_Agreement_ArbitratorHatSetEvent>;
  Base_agreementArbitratorHatSetEvents: Array<Base_Agreement_ArbitratorHatSetEvent>;
  Base_agreementRevokedSingleEvent?: Maybe<Base_Agreement_RevokedSingleEvent>;
  Base_agreementRevokedSingleEvents: Array<Base_Agreement_RevokedSingleEvent>;
  Base_agreementRevokedMultipleEvent?: Maybe<Base_Agreement_RevokedMultipleEvent>;
  Base_agreementRevokedMultipleEvents: Array<Base_Agreement_RevokedMultipleEvent>;
  Base_agreementForgivenSingleEvent?: Maybe<Base_Agreement_ForgivenSingleEvent>;
  Base_agreementForgivenSingleEvents: Array<Base_Agreement_ForgivenSingleEvent>;
  Base_agreementForgivenMultipleEvent?: Maybe<Base_Agreement_ForgivenMultipleEvent>;
  Base_agreementForgivenMultipleEvents: Array<Base_Agreement_ForgivenMultipleEvent>;
  Base_erc20Eligibility?: Maybe<Base_Erc20Eligibility>;
  Base_erc20Eligibilities: Array<Base_Erc20Eligibility>;
  Base_erc721Eligibility?: Maybe<Base_Erc721Eligibility>;
  Base_erc721Eligibilities: Array<Base_Erc721Eligibility>;
  Base_erc1155Eligibility?: Maybe<Base_Erc1155Eligibility>;
  Base_erc1155Eligibilities: Array<Base_Erc1155Eligibility>;
  Base_hatWearingEligibility?: Maybe<Base_HatWearingEligibility>;
  Base_hatWearingEligibilities: Array<Base_HatWearingEligibility>;
  Base_gitcoinPassportEligibility?: Maybe<Base_GitcoinPassportEligibility>;
  Base_gitcoinPassportEligibilities: Array<Base_GitcoinPassportEligibility>;
  Base_coLinksEligibility?: Maybe<Base_CoLinksEligibility>;
  Base_coLinksEligibilities: Array<Base_CoLinksEligibility>;
  Base_hatControlledModule?: Maybe<Base_HatControlledModule>;
  Base_hatControlledModules: Array<Base_HatControlledModule>;
  Base_hatControlledModuleWearerStatus?: Maybe<Base_HatControlledModuleWearerStatus>;
  Base_hatControlledModuleWearerStatuses: Array<Base_HatControlledModuleWearerStatus>;
  Base_hatControlledModuleHatStatus?: Maybe<Base_HatControlledModuleHatStatus>;
  Base_hatControlledModuleHatStatuses: Array<Base_HatControlledModuleHatStatus>;
  Base_hatControlledWearerStatusSet?: Maybe<Base_HatControlled_WearerStatusSet>;
  Base_hatControlledWearerStatusSets: Array<Base_HatControlled_WearerStatusSet>;
  Base_hatControlledHatStatusSet?: Maybe<Base_HatControlled_HatStatusSet>;
  Base_hatControlledHatStatusSets: Array<Base_HatControlled_HatStatusSet>;
  Base_publicLockV14Eligibility?: Maybe<Base_PublicLockV14Eligibility>;
  Base_publicLockV14Eligibilities: Array<Base_PublicLockV14Eligibility>;
  Base_hatsEligibilitiesChain?: Maybe<Base_HatsEligibilitiesChain>;
  Base_hatsEligibilitiesChains: Array<Base_HatsEligibilitiesChain>;
  Base_eligibilitiesRuleset?: Maybe<Base_EligibilitiesRuleset>;
  Base_eligibilitiesRulesets: Array<Base_EligibilitiesRuleset>;
  Base_hatsSignerGateV2Event?: Maybe<Base_HatsSignerGateV2Event>;
  Base_hatsSignerGateV2Events: Array<Base_HatsSignerGateV2Event>;
  Base_hatsModule?: Maybe<Base_HatsModule>;
  Base_hatsModules: Array<Base_HatsModule>;
  Base_hatsModuleEvent?: Maybe<Base_HatsModuleEvent>;
  Base_hatsModuleEvents: Array<Base_HatsModuleEvent>;
  Base_jokeRaceEvent?: Maybe<Base_JokeRaceEvent>;
  Base_jokeRaceEvents: Array<Base_JokeRaceEvent>;
  Base_allowlistEvent?: Maybe<Base_AllowlistEvent>;
  Base_allowlistEvents: Array<Base_AllowlistEvent>;
  Base_electionEvent?: Maybe<Base_ElectionEvent>;
  Base_electionEvents: Array<Base_ElectionEvent>;
  Base_stakingEvent?: Maybe<Base_StakingEvent>;
  Base_stakingEvents: Array<Base_StakingEvent>;
  Base_agreementEvent?: Maybe<Base_AgreementEvent>;
  Base_agreementEvents: Array<Base_AgreementEvent>;
  Base_hatControlledModuleEvent?: Maybe<Base_HatControlledModuleEvent>;
  Base_hatControlledModuleEvents: Array<Base_HatControlledModuleEvent>;
  /** Access to subgraph metadata */
  Base__meta?: Maybe<Base__Meta_>;
};


export type QueryBase_hatAuthorityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatAuthoritiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatAuthority_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsSignerGate_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2Args = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2SArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsSignerGateV2_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsSignerGateV2_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2OwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2OwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsSignerGateV2_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsSignerGateV2_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2SignerHatsAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2SignerHatsAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsSignerGateV2_SignerHatsAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsSignerGateV2_SignerHatsAddedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2ThresholdConfigSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2ThresholdConfigSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsSignerGateV2_ThresholdConfigSetEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsSignerGateV2_ThresholdConfigSetEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2HSGLockedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2HSGLockedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsSignerGateV2_HSGLockedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsSignerGateV2_HSGLockedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2ClaimableForSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2ClaimableForSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsSignerGateV2_ClaimableForSetEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsSignerGateV2_ClaimableForSetEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2DetachedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2DetachedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsSignerGateV2_DetachedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsSignerGateV2_DetachedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2MigratedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2MigratedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsSignerGateV2_MigratedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsSignerGateV2_MigratedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2DelegatecallTargetEnabledEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2DelegatecallTargetEnabledEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsSignerGateV2_DelegatecallTargetEnabledEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsSignerGateV2_DelegatecallTargetEnabledEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2RegisteredEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2RegisteredEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsSignerGateV2_RegisteredEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsSignerGateV2_RegisteredEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2ChangedGuardEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2ChangedGuardEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsSignerGateV2_ChangedGuardEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsSignerGateV2_ChangedGuardEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2EnabledModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2EnabledModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsSignerGateV2_EnabledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsSignerGateV2_EnabledModuleEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2DisabledModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2DisabledModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsSignerGateV2_DisabledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsSignerGateV2_DisabledModuleEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsAccount1OfNArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsAccount1OfNsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsAccount1ofN_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsAccount1OfNOperationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsAccount1OfNOperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsAccount1ofNOperation_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsStakingShamanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsStakingShamansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsStakingShaman_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsStakingShaman_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_shamanStakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_shamanStakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_ShamanStake_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_ShamanStake_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsFarcasterDelegatorArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsFarcasterDelegatorsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsFarcasterDelegator_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_jokeRaceEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_jokeRaceEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_JokeRaceEligibility_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_jokeRaceEligibilityTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_jokeRaceEligibilityTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_JokeRaceEligibilityTerm_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_JokeRaceEligibilityTerm_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_jokeRaceNextTermSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_jokeRaceNextTermSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_JokeRace_NextTermSetEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_JokeRace_NextTermSetEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_jokeRaceTermStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_jokeRaceTermStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_JokeRace_TermStartedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_JokeRace_TermStartedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_allowListEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_allowListEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_AllowListEligibility_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_allowListEligibilityDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_allowListEligibilityDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_AllowListEligibilityData_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_AllowListEligibilityData_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_allowlistAccountAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_allowlistAccountAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Allowlist_AccountAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Allowlist_AccountAddedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_allowlistAccountsAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_allowlistAccountsAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Allowlist_AccountsAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Allowlist_AccountsAddedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_allowlistAccountRemovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_allowlistAccountRemovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Allowlist_AccountRemovedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Allowlist_AccountRemovedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_allowlistAccountsRemovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_allowlistAccountsRemovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Allowlist_AccountsRemovedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Allowlist_AccountsRemovedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_allowlistAccountStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_allowlistAccountStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Allowlist_AccountStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Allowlist_AccountStandingChangedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_allowlistAccountsStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_allowlistAccountsStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Allowlist_AccountsStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Allowlist_AccountsStandingChangedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_allowlistOwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_allowlistOwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Allowlist_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Allowlist_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_allowlistArbitratorHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_allowlistArbitratorHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Allowlist_ArbitratorHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Allowlist_ArbitratorHatSetEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsElectionEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsElectionEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsElectionEligibility_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_electionTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_electionTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_ElectionTerm_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_electionElectionOpenedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_electionElectionOpenedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Election_ElectionOpenedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Election_ElectionOpenedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_electionElectionCompletedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_electionElectionCompletedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Election_ElectionCompletedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Election_ElectionCompletedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_electionNewTermStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_electionNewTermStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Election_NewTermStartedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Election_NewTermStartedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_electionRecalledEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_electionRecalledEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Election_RecalledEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Election_RecalledEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_passthroughModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_passthroughModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_PassthroughModule_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_stakingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_stakingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_StakingEligibility_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_stakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_stakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Stake_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Stake_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_stakingStakedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_stakingStakedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Staking_StakedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Staking_StakedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_stakingUnstakeBegunEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_stakingUnstakeBegunEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Staking_UnstakeBegunEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Staking_UnstakeBegunEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_stakingSlashedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_stakingSlashedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Staking_SlashedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Staking_SlashedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_stakingMinStakeChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_stakingMinStakeChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Staking_MinStakeChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Staking_MinStakeChangedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_stakingJudgeHatChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_stakingJudgeHatChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Staking_JudgeHatChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Staking_JudgeHatChangedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_stakingRecipientHatChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_stakingRecipientHatChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Staking_RecipientHatChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Staking_RecipientHatChangedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_stakingCooldownPeriodChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_stakingCooldownPeriodChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Staking_CooldownPeriodChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Staking_CooldownPeriodChangedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_stakingForgivenEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_stakingForgivenEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Staking_ForgivenEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Staking_ForgivenEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_seasonToggleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_seasonTogglesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_SeasonToggle_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_characterSheetsLevelEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_characterSheetsLevelEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_CharacterSheetsLevelEligibility_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_agreementEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_agreementEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_AgreementEligibility_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_agreementArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_agreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Agreement_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Agreement_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_agreementHatClaimedWithAgreementEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_agreementHatClaimedWithAgreementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Agreement_HatClaimedWithAgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Agreement_HatClaimedWithAgreementEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_agreementAgreementSignedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_agreementAgreementSignedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Agreement_AgreementSignedEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Agreement_AgreementSignedEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_agreementAgreementSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_agreementAgreementSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Agreement_AgreementSetEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Agreement_AgreementSetEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_agreementOwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_agreementOwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Agreement_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Agreement_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_agreementArbitratorHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_agreementArbitratorHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Agreement_ArbitratorHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Agreement_ArbitratorHatSetEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_agreementRevokedSingleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_agreementRevokedSingleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Agreement_RevokedSingleEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Agreement_RevokedSingleEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_agreementRevokedMultipleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_agreementRevokedMultipleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Agreement_RevokedMultipleEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Agreement_RevokedMultipleEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_agreementForgivenSingleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_agreementForgivenSingleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Agreement_ForgivenSingleEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Agreement_ForgivenSingleEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_agreementForgivenMultipleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_agreementForgivenMultipleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Agreement_ForgivenMultipleEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Agreement_ForgivenMultipleEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_erc20EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_erc20EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Erc20Eligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Erc20Eligibility_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_erc721EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_erc721EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Erc721Eligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Erc721Eligibility_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_erc1155EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_erc1155EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Erc1155Eligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Erc1155Eligibility_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatWearingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatWearingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatWearingEligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatWearingEligibility_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_gitcoinPassportEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_gitcoinPassportEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_GitcoinPassportEligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_GitcoinPassportEligibility_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_coLinksEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_coLinksEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_CoLinksEligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_CoLinksEligibility_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatControlledModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatControlledModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatControlledModule_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatControlledModule_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatControlledModuleWearerStatusArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatControlledModuleWearerStatusesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatControlledModuleWearerStatus_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatControlledModuleWearerStatus_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatControlledModuleHatStatusArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatControlledModuleHatStatusesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatControlledModuleHatStatus_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatControlledModuleHatStatus_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatControlledWearerStatusSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatControlledWearerStatusSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatControlled_WearerStatusSet_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatControlled_WearerStatusSet_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatControlledHatStatusSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatControlledHatStatusSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatControlled_HatStatusSet_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatControlled_HatStatusSet_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_publicLockV14EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_publicLockV14EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_PublicLockV14Eligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_PublicLockV14Eligibility_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsEligibilitiesChainArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsEligibilitiesChainsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsEligibilitiesChain_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsEligibilitiesChain_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_eligibilitiesRulesetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_eligibilitiesRulesetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_EligibilitiesRuleset_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_EligibilitiesRuleset_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2EventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsSignerGateV2EventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsSignerGateV2Event_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsSignerGateV2Event_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsModule_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsModule_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatsModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsModuleEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_jokeRaceEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_jokeRaceEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_JokeRaceEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_JokeRaceEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_allowlistEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_allowlistEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_AllowlistEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_AllowlistEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_electionEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_electionEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_ElectionEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_ElectionEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_stakingEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_stakingEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_StakingEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_StakingEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_agreementEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_agreementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_AgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_AgreementEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatControlledModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase_hatControlledModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatControlledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatControlledModuleEvent_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type QueryBase__metaArgs = {
  block?: InputMaybe<Base_Block_height>;
};

/**  Season Toggle  */
export type Base_SeasonToggle = Base_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  hatAdmins: Array<Base_HatAuthority>;
};


/**  Season Toggle  */
export type Base_SeasonTogglehatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatAuthority_filter>;
};

export type Base_SeasonToggle_filter = {
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
  hatAdmins_?: InputMaybe<Base_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_SeasonToggle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_SeasonToggle_filter>>>;
};

export type Base_SeasonToggle_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'hatAdmins';

/** Shaman Stake */
export type Base_ShamanStake = {
  id: Scalars['ID']['output'];
  stakingShaman: Base_HatsStakingShaman;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  unstakingAmount: Scalars['BigInt']['output'];
  canUnstakeAfter: Scalars['BigInt']['output'];
};

export type Base_ShamanStake_filter = {
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
  stakingShaman_?: InputMaybe<Base_HatsStakingShaman_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_ShamanStake_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_ShamanStake_filter>>>;
};

export type Base_ShamanStake_orderBy =
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

export type Base_Stake = {
  id: Scalars['ID']['output'];
  stakingEligiblity: Base_StakingEligibility;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  slashed: Scalars['Boolean']['output'];
  cooldownAmount: Scalars['BigInt']['output'];
  cooldownEndsAt: Scalars['BigInt']['output'];
};

export type Base_Stake_filter = {
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
  stakingEligiblity_?: InputMaybe<Base_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Stake_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Stake_filter>>>;
};

export type Base_Stake_orderBy =
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
export type Base_StakingEligibility = Base_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  token: Scalars['String']['output'];
  judgeHat: Base_HatAuthority;
  recipientHat: Base_HatAuthority;
  hatAdmins: Array<Base_HatAuthority>;
  minStake: Scalars['BigInt']['output'];
  cooldownPeriod: Scalars['BigInt']['output'];
  totalSlashedStakes: Scalars['BigInt']['output'];
  stakes: Array<Base_Stake>;
  events: Array<Base_StakingEvent>;
};


/**  Staking Eligibility  */
export type Base_StakingEligibilityhatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatAuthority_filter>;
};


/**  Staking Eligibility  */
export type Base_StakingEligibilitystakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Stake_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Stake_filter>;
};


/**  Staking Eligibility  */
export type Base_StakingEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_StakingEvent_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_StakingEvent_filter>;
};

export type Base_StakingEligibility_filter = {
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
  judgeHat_?: InputMaybe<Base_HatAuthority_filter>;
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
  recipientHat_?: InputMaybe<Base_HatAuthority_filter>;
  hatAdmins?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_?: InputMaybe<Base_HatAuthority_filter>;
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
  stakes_?: InputMaybe<Base_Stake_filter>;
  events_?: InputMaybe<Base_StakingEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_StakingEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_StakingEligibility_filter>>>;
};

export type Base_StakingEligibility_orderBy =
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

export type Base_StakingEvent = {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  stakingEligibilityInstance: Base_StakingEligibility;
};

export type Base_StakingEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  stakingEligibilityInstance_?: InputMaybe<Base_StakingEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_StakingEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_StakingEvent_filter>>>;
};

export type Base_StakingEvent_orderBy =
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

export type Base_Staking_CooldownPeriodChangedEvent = Base_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  stakingEligibilityInstance: Base_StakingEligibility;
  newDelay: Scalars['BigInt']['output'];
};

export type Base_Staking_CooldownPeriodChangedEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  stakingEligibilityInstance_?: InputMaybe<Base_StakingEligibility_filter>;
  newDelay?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_not?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newDelay_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Staking_CooldownPeriodChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Staking_CooldownPeriodChangedEvent_filter>>>;
};

export type Base_Staking_CooldownPeriodChangedEvent_orderBy =
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

export type Base_Staking_ForgivenEvent = Base_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  stakingEligibilityInstance: Base_StakingEligibility;
  staker: Scalars['String']['output'];
};

export type Base_Staking_ForgivenEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  stakingEligibilityInstance_?: InputMaybe<Base_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Staking_ForgivenEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Staking_ForgivenEvent_filter>>>;
};

export type Base_Staking_ForgivenEvent_orderBy =
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

export type Base_Staking_JudgeHatChangedEvent = Base_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  stakingEligibilityInstance: Base_StakingEligibility;
  newJudgeHat: Scalars['String']['output'];
};

export type Base_Staking_JudgeHatChangedEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  stakingEligibilityInstance_?: InputMaybe<Base_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Staking_JudgeHatChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Staking_JudgeHatChangedEvent_filter>>>;
};

export type Base_Staking_JudgeHatChangedEvent_orderBy =
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

export type Base_Staking_MinStakeChangedEvent = Base_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  stakingEligibilityInstance: Base_StakingEligibility;
  newMinStake: Scalars['BigInt']['output'];
};

export type Base_Staking_MinStakeChangedEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  stakingEligibilityInstance_?: InputMaybe<Base_StakingEligibility_filter>;
  newMinStake?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_not?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newMinStake_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Staking_MinStakeChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Staking_MinStakeChangedEvent_filter>>>;
};

export type Base_Staking_MinStakeChangedEvent_orderBy =
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

export type Base_Staking_RecipientHatChangedEvent = Base_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  stakingEligibilityInstance: Base_StakingEligibility;
  newRecipientHat: Scalars['String']['output'];
};

export type Base_Staking_RecipientHatChangedEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  stakingEligibilityInstance_?: InputMaybe<Base_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Staking_RecipientHatChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Staking_RecipientHatChangedEvent_filter>>>;
};

export type Base_Staking_RecipientHatChangedEvent_orderBy =
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

export type Base_Staking_SlashedEvent = Base_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  stakingEligibilityInstance: Base_StakingEligibility;
  wearer: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
};

export type Base_Staking_SlashedEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  stakingEligibilityInstance_?: InputMaybe<Base_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Staking_SlashedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Staking_SlashedEvent_filter>>>;
};

export type Base_Staking_SlashedEvent_orderBy =
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

export type Base_Staking_StakedEvent = Base_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  stakingEligibilityInstance: Base_StakingEligibility;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
};

export type Base_Staking_StakedEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  stakingEligibilityInstance_?: InputMaybe<Base_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Staking_StakedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Staking_StakedEvent_filter>>>;
};

export type Base_Staking_StakedEvent_orderBy =
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

export type Base_Staking_UnstakeBegunEvent = Base_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Base_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Base_Bytes']['output'];
  stakingEligibilityInstance: Base_StakingEligibility;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  cooldownEnd: Scalars['BigInt']['output'];
};

export type Base_Staking_UnstakeBegunEvent_filter = {
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
  module_?: InputMaybe<Base_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  stakingEligibilityInstance_?: InputMaybe<Base_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_Staking_UnstakeBegunEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_Staking_UnstakeBegunEvent_filter>>>;
};

export type Base_Staking_UnstakeBegunEvent_orderBy =
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
  Base_hatAuthority: InContextSdkMethod<Query['Base_hatAuthority'], QueryBase_hatAuthorityArgs, MeshContext>,
  /** null **/
  Base_hatAuthorities: InContextSdkMethod<Query['Base_hatAuthorities'], QueryBase_hatAuthoritiesArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGate: InContextSdkMethod<Query['Base_hatsSignerGate'], QueryBase_hatsSignerGateArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGates: InContextSdkMethod<Query['Base_hatsSignerGates'], QueryBase_hatsSignerGatesArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2: InContextSdkMethod<Query['Base_hatsSignerGateV2'], QueryBase_hatsSignerGateV2Args, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2S: InContextSdkMethod<Query['Base_hatsSignerGateV2S'], QueryBase_hatsSignerGateV2SArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2OwnerHatSetEvent: InContextSdkMethod<Query['Base_hatsSignerGateV2OwnerHatSetEvent'], QueryBase_hatsSignerGateV2OwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2OwnerHatSetEvents: InContextSdkMethod<Query['Base_hatsSignerGateV2OwnerHatSetEvents'], QueryBase_hatsSignerGateV2OwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2SignerHatsAddedEvent: InContextSdkMethod<Query['Base_hatsSignerGateV2SignerHatsAddedEvent'], QueryBase_hatsSignerGateV2SignerHatsAddedEventArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2SignerHatsAddedEvents: InContextSdkMethod<Query['Base_hatsSignerGateV2SignerHatsAddedEvents'], QueryBase_hatsSignerGateV2SignerHatsAddedEventsArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2ThresholdConfigSetEvent: InContextSdkMethod<Query['Base_hatsSignerGateV2ThresholdConfigSetEvent'], QueryBase_hatsSignerGateV2ThresholdConfigSetEventArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2ThresholdConfigSetEvents: InContextSdkMethod<Query['Base_hatsSignerGateV2ThresholdConfigSetEvents'], QueryBase_hatsSignerGateV2ThresholdConfigSetEventsArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2HSGLockedEvent: InContextSdkMethod<Query['Base_hatsSignerGateV2HSGLockedEvent'], QueryBase_hatsSignerGateV2HSGLockedEventArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2HSGLockedEvents: InContextSdkMethod<Query['Base_hatsSignerGateV2HSGLockedEvents'], QueryBase_hatsSignerGateV2HSGLockedEventsArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2ClaimableForSetEvent: InContextSdkMethod<Query['Base_hatsSignerGateV2ClaimableForSetEvent'], QueryBase_hatsSignerGateV2ClaimableForSetEventArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2ClaimableForSetEvents: InContextSdkMethod<Query['Base_hatsSignerGateV2ClaimableForSetEvents'], QueryBase_hatsSignerGateV2ClaimableForSetEventsArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2DetachedEvent: InContextSdkMethod<Query['Base_hatsSignerGateV2DetachedEvent'], QueryBase_hatsSignerGateV2DetachedEventArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2DetachedEvents: InContextSdkMethod<Query['Base_hatsSignerGateV2DetachedEvents'], QueryBase_hatsSignerGateV2DetachedEventsArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2MigratedEvent: InContextSdkMethod<Query['Base_hatsSignerGateV2MigratedEvent'], QueryBase_hatsSignerGateV2MigratedEventArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2MigratedEvents: InContextSdkMethod<Query['Base_hatsSignerGateV2MigratedEvents'], QueryBase_hatsSignerGateV2MigratedEventsArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2DelegatecallTargetEnabledEvent: InContextSdkMethod<Query['Base_hatsSignerGateV2DelegatecallTargetEnabledEvent'], QueryBase_hatsSignerGateV2DelegatecallTargetEnabledEventArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2DelegatecallTargetEnabledEvents: InContextSdkMethod<Query['Base_hatsSignerGateV2DelegatecallTargetEnabledEvents'], QueryBase_hatsSignerGateV2DelegatecallTargetEnabledEventsArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2RegisteredEvent: InContextSdkMethod<Query['Base_hatsSignerGateV2RegisteredEvent'], QueryBase_hatsSignerGateV2RegisteredEventArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2RegisteredEvents: InContextSdkMethod<Query['Base_hatsSignerGateV2RegisteredEvents'], QueryBase_hatsSignerGateV2RegisteredEventsArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2ChangedGuardEvent: InContextSdkMethod<Query['Base_hatsSignerGateV2ChangedGuardEvent'], QueryBase_hatsSignerGateV2ChangedGuardEventArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2ChangedGuardEvents: InContextSdkMethod<Query['Base_hatsSignerGateV2ChangedGuardEvents'], QueryBase_hatsSignerGateV2ChangedGuardEventsArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2EnabledModuleEvent: InContextSdkMethod<Query['Base_hatsSignerGateV2EnabledModuleEvent'], QueryBase_hatsSignerGateV2EnabledModuleEventArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2EnabledModuleEvents: InContextSdkMethod<Query['Base_hatsSignerGateV2EnabledModuleEvents'], QueryBase_hatsSignerGateV2EnabledModuleEventsArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2DisabledModuleEvent: InContextSdkMethod<Query['Base_hatsSignerGateV2DisabledModuleEvent'], QueryBase_hatsSignerGateV2DisabledModuleEventArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2DisabledModuleEvents: InContextSdkMethod<Query['Base_hatsSignerGateV2DisabledModuleEvents'], QueryBase_hatsSignerGateV2DisabledModuleEventsArgs, MeshContext>,
  /** null **/
  Base_hatsAccount1OfN: InContextSdkMethod<Query['Base_hatsAccount1OfN'], QueryBase_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  Base_hatsAccount1OfNs: InContextSdkMethod<Query['Base_hatsAccount1OfNs'], QueryBase_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  Base_hatsAccount1OfNOperation: InContextSdkMethod<Query['Base_hatsAccount1OfNOperation'], QueryBase_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  Base_hatsAccount1OfNOperations: InContextSdkMethod<Query['Base_hatsAccount1OfNOperations'], QueryBase_hatsAccount1OfNOperationsArgs, MeshContext>,
  /** null **/
  Base_hatsStakingShaman: InContextSdkMethod<Query['Base_hatsStakingShaman'], QueryBase_hatsStakingShamanArgs, MeshContext>,
  /** null **/
  Base_hatsStakingShamans: InContextSdkMethod<Query['Base_hatsStakingShamans'], QueryBase_hatsStakingShamansArgs, MeshContext>,
  /** null **/
  Base_shamanStake: InContextSdkMethod<Query['Base_shamanStake'], QueryBase_shamanStakeArgs, MeshContext>,
  /** null **/
  Base_shamanStakes: InContextSdkMethod<Query['Base_shamanStakes'], QueryBase_shamanStakesArgs, MeshContext>,
  /** null **/
  Base_hatsFarcasterDelegator: InContextSdkMethod<Query['Base_hatsFarcasterDelegator'], QueryBase_hatsFarcasterDelegatorArgs, MeshContext>,
  /** null **/
  Base_hatsFarcasterDelegators: InContextSdkMethod<Query['Base_hatsFarcasterDelegators'], QueryBase_hatsFarcasterDelegatorsArgs, MeshContext>,
  /** null **/
  Base_jokeRaceEligibility: InContextSdkMethod<Query['Base_jokeRaceEligibility'], QueryBase_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  Base_jokeRaceEligibilities: InContextSdkMethod<Query['Base_jokeRaceEligibilities'], QueryBase_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  Base_jokeRaceEligibilityTerm: InContextSdkMethod<Query['Base_jokeRaceEligibilityTerm'], QueryBase_jokeRaceEligibilityTermArgs, MeshContext>,
  /** null **/
  Base_jokeRaceEligibilityTerms: InContextSdkMethod<Query['Base_jokeRaceEligibilityTerms'], QueryBase_jokeRaceEligibilityTermsArgs, MeshContext>,
  /** null **/
  Base_jokeRaceNextTermSetEvent: InContextSdkMethod<Query['Base_jokeRaceNextTermSetEvent'], QueryBase_jokeRaceNextTermSetEventArgs, MeshContext>,
  /** null **/
  Base_jokeRaceNextTermSetEvents: InContextSdkMethod<Query['Base_jokeRaceNextTermSetEvents'], QueryBase_jokeRaceNextTermSetEventsArgs, MeshContext>,
  /** null **/
  Base_jokeRaceTermStartedEvent: InContextSdkMethod<Query['Base_jokeRaceTermStartedEvent'], QueryBase_jokeRaceTermStartedEventArgs, MeshContext>,
  /** null **/
  Base_jokeRaceTermStartedEvents: InContextSdkMethod<Query['Base_jokeRaceTermStartedEvents'], QueryBase_jokeRaceTermStartedEventsArgs, MeshContext>,
  /** null **/
  Base_allowListEligibility: InContextSdkMethod<Query['Base_allowListEligibility'], QueryBase_allowListEligibilityArgs, MeshContext>,
  /** null **/
  Base_allowListEligibilities: InContextSdkMethod<Query['Base_allowListEligibilities'], QueryBase_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  Base_allowListEligibilityData: InContextSdkMethod<Query['Base_allowListEligibilityData'], QueryBase_allowListEligibilityDataArgs, MeshContext>,
  /** null **/
  Base_allowListEligibilityDatas: InContextSdkMethod<Query['Base_allowListEligibilityDatas'], QueryBase_allowListEligibilityDatasArgs, MeshContext>,
  /** null **/
  Base_allowlistAccountAddedEvent: InContextSdkMethod<Query['Base_allowlistAccountAddedEvent'], QueryBase_allowlistAccountAddedEventArgs, MeshContext>,
  /** null **/
  Base_allowlistAccountAddedEvents: InContextSdkMethod<Query['Base_allowlistAccountAddedEvents'], QueryBase_allowlistAccountAddedEventsArgs, MeshContext>,
  /** null **/
  Base_allowlistAccountsAddedEvent: InContextSdkMethod<Query['Base_allowlistAccountsAddedEvent'], QueryBase_allowlistAccountsAddedEventArgs, MeshContext>,
  /** null **/
  Base_allowlistAccountsAddedEvents: InContextSdkMethod<Query['Base_allowlistAccountsAddedEvents'], QueryBase_allowlistAccountsAddedEventsArgs, MeshContext>,
  /** null **/
  Base_allowlistAccountRemovedEvent: InContextSdkMethod<Query['Base_allowlistAccountRemovedEvent'], QueryBase_allowlistAccountRemovedEventArgs, MeshContext>,
  /** null **/
  Base_allowlistAccountRemovedEvents: InContextSdkMethod<Query['Base_allowlistAccountRemovedEvents'], QueryBase_allowlistAccountRemovedEventsArgs, MeshContext>,
  /** null **/
  Base_allowlistAccountsRemovedEvent: InContextSdkMethod<Query['Base_allowlistAccountsRemovedEvent'], QueryBase_allowlistAccountsRemovedEventArgs, MeshContext>,
  /** null **/
  Base_allowlistAccountsRemovedEvents: InContextSdkMethod<Query['Base_allowlistAccountsRemovedEvents'], QueryBase_allowlistAccountsRemovedEventsArgs, MeshContext>,
  /** null **/
  Base_allowlistAccountStandingChangedEvent: InContextSdkMethod<Query['Base_allowlistAccountStandingChangedEvent'], QueryBase_allowlistAccountStandingChangedEventArgs, MeshContext>,
  /** null **/
  Base_allowlistAccountStandingChangedEvents: InContextSdkMethod<Query['Base_allowlistAccountStandingChangedEvents'], QueryBase_allowlistAccountStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Base_allowlistAccountsStandingChangedEvent: InContextSdkMethod<Query['Base_allowlistAccountsStandingChangedEvent'], QueryBase_allowlistAccountsStandingChangedEventArgs, MeshContext>,
  /** null **/
  Base_allowlistAccountsStandingChangedEvents: InContextSdkMethod<Query['Base_allowlistAccountsStandingChangedEvents'], QueryBase_allowlistAccountsStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Base_allowlistOwnerHatSetEvent: InContextSdkMethod<Query['Base_allowlistOwnerHatSetEvent'], QueryBase_allowlistOwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Base_allowlistOwnerHatSetEvents: InContextSdkMethod<Query['Base_allowlistOwnerHatSetEvents'], QueryBase_allowlistOwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Base_allowlistArbitratorHatSetEvent: InContextSdkMethod<Query['Base_allowlistArbitratorHatSetEvent'], QueryBase_allowlistArbitratorHatSetEventArgs, MeshContext>,
  /** null **/
  Base_allowlistArbitratorHatSetEvents: InContextSdkMethod<Query['Base_allowlistArbitratorHatSetEvents'], QueryBase_allowlistArbitratorHatSetEventsArgs, MeshContext>,
  /** null **/
  Base_hatsElectionEligibility: InContextSdkMethod<Query['Base_hatsElectionEligibility'], QueryBase_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  Base_hatsElectionEligibilities: InContextSdkMethod<Query['Base_hatsElectionEligibilities'], QueryBase_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  Base_electionTerm: InContextSdkMethod<Query['Base_electionTerm'], QueryBase_electionTermArgs, MeshContext>,
  /** null **/
  Base_electionTerms: InContextSdkMethod<Query['Base_electionTerms'], QueryBase_electionTermsArgs, MeshContext>,
  /** null **/
  Base_electionElectionOpenedEvent: InContextSdkMethod<Query['Base_electionElectionOpenedEvent'], QueryBase_electionElectionOpenedEventArgs, MeshContext>,
  /** null **/
  Base_electionElectionOpenedEvents: InContextSdkMethod<Query['Base_electionElectionOpenedEvents'], QueryBase_electionElectionOpenedEventsArgs, MeshContext>,
  /** null **/
  Base_electionElectionCompletedEvent: InContextSdkMethod<Query['Base_electionElectionCompletedEvent'], QueryBase_electionElectionCompletedEventArgs, MeshContext>,
  /** null **/
  Base_electionElectionCompletedEvents: InContextSdkMethod<Query['Base_electionElectionCompletedEvents'], QueryBase_electionElectionCompletedEventsArgs, MeshContext>,
  /** null **/
  Base_electionNewTermStartedEvent: InContextSdkMethod<Query['Base_electionNewTermStartedEvent'], QueryBase_electionNewTermStartedEventArgs, MeshContext>,
  /** null **/
  Base_electionNewTermStartedEvents: InContextSdkMethod<Query['Base_electionNewTermStartedEvents'], QueryBase_electionNewTermStartedEventsArgs, MeshContext>,
  /** null **/
  Base_electionRecalledEvent: InContextSdkMethod<Query['Base_electionRecalledEvent'], QueryBase_electionRecalledEventArgs, MeshContext>,
  /** null **/
  Base_electionRecalledEvents: InContextSdkMethod<Query['Base_electionRecalledEvents'], QueryBase_electionRecalledEventsArgs, MeshContext>,
  /** null **/
  Base_passthroughModule: InContextSdkMethod<Query['Base_passthroughModule'], QueryBase_passthroughModuleArgs, MeshContext>,
  /** null **/
  Base_passthroughModules: InContextSdkMethod<Query['Base_passthroughModules'], QueryBase_passthroughModulesArgs, MeshContext>,
  /** null **/
  Base_stakingEligibility: InContextSdkMethod<Query['Base_stakingEligibility'], QueryBase_stakingEligibilityArgs, MeshContext>,
  /** null **/
  Base_stakingEligibilities: InContextSdkMethod<Query['Base_stakingEligibilities'], QueryBase_stakingEligibilitiesArgs, MeshContext>,
  /** null **/
  Base_stake: InContextSdkMethod<Query['Base_stake'], QueryBase_stakeArgs, MeshContext>,
  /** null **/
  Base_stakes: InContextSdkMethod<Query['Base_stakes'], QueryBase_stakesArgs, MeshContext>,
  /** null **/
  Base_stakingStakedEvent: InContextSdkMethod<Query['Base_stakingStakedEvent'], QueryBase_stakingStakedEventArgs, MeshContext>,
  /** null **/
  Base_stakingStakedEvents: InContextSdkMethod<Query['Base_stakingStakedEvents'], QueryBase_stakingStakedEventsArgs, MeshContext>,
  /** null **/
  Base_stakingUnstakeBegunEvent: InContextSdkMethod<Query['Base_stakingUnstakeBegunEvent'], QueryBase_stakingUnstakeBegunEventArgs, MeshContext>,
  /** null **/
  Base_stakingUnstakeBegunEvents: InContextSdkMethod<Query['Base_stakingUnstakeBegunEvents'], QueryBase_stakingUnstakeBegunEventsArgs, MeshContext>,
  /** null **/
  Base_stakingSlashedEvent: InContextSdkMethod<Query['Base_stakingSlashedEvent'], QueryBase_stakingSlashedEventArgs, MeshContext>,
  /** null **/
  Base_stakingSlashedEvents: InContextSdkMethod<Query['Base_stakingSlashedEvents'], QueryBase_stakingSlashedEventsArgs, MeshContext>,
  /** null **/
  Base_stakingMinStakeChangedEvent: InContextSdkMethod<Query['Base_stakingMinStakeChangedEvent'], QueryBase_stakingMinStakeChangedEventArgs, MeshContext>,
  /** null **/
  Base_stakingMinStakeChangedEvents: InContextSdkMethod<Query['Base_stakingMinStakeChangedEvents'], QueryBase_stakingMinStakeChangedEventsArgs, MeshContext>,
  /** null **/
  Base_stakingJudgeHatChangedEvent: InContextSdkMethod<Query['Base_stakingJudgeHatChangedEvent'], QueryBase_stakingJudgeHatChangedEventArgs, MeshContext>,
  /** null **/
  Base_stakingJudgeHatChangedEvents: InContextSdkMethod<Query['Base_stakingJudgeHatChangedEvents'], QueryBase_stakingJudgeHatChangedEventsArgs, MeshContext>,
  /** null **/
  Base_stakingRecipientHatChangedEvent: InContextSdkMethod<Query['Base_stakingRecipientHatChangedEvent'], QueryBase_stakingRecipientHatChangedEventArgs, MeshContext>,
  /** null **/
  Base_stakingRecipientHatChangedEvents: InContextSdkMethod<Query['Base_stakingRecipientHatChangedEvents'], QueryBase_stakingRecipientHatChangedEventsArgs, MeshContext>,
  /** null **/
  Base_stakingCooldownPeriodChangedEvent: InContextSdkMethod<Query['Base_stakingCooldownPeriodChangedEvent'], QueryBase_stakingCooldownPeriodChangedEventArgs, MeshContext>,
  /** null **/
  Base_stakingCooldownPeriodChangedEvents: InContextSdkMethod<Query['Base_stakingCooldownPeriodChangedEvents'], QueryBase_stakingCooldownPeriodChangedEventsArgs, MeshContext>,
  /** null **/
  Base_stakingForgivenEvent: InContextSdkMethod<Query['Base_stakingForgivenEvent'], QueryBase_stakingForgivenEventArgs, MeshContext>,
  /** null **/
  Base_stakingForgivenEvents: InContextSdkMethod<Query['Base_stakingForgivenEvents'], QueryBase_stakingForgivenEventsArgs, MeshContext>,
  /** null **/
  Base_seasonToggle: InContextSdkMethod<Query['Base_seasonToggle'], QueryBase_seasonToggleArgs, MeshContext>,
  /** null **/
  Base_seasonToggles: InContextSdkMethod<Query['Base_seasonToggles'], QueryBase_seasonTogglesArgs, MeshContext>,
  /** null **/
  Base_characterSheetsLevelEligibility: InContextSdkMethod<Query['Base_characterSheetsLevelEligibility'], QueryBase_characterSheetsLevelEligibilityArgs, MeshContext>,
  /** null **/
  Base_characterSheetsLevelEligibilities: InContextSdkMethod<Query['Base_characterSheetsLevelEligibilities'], QueryBase_characterSheetsLevelEligibilitiesArgs, MeshContext>,
  /** null **/
  Base_agreementEligibility: InContextSdkMethod<Query['Base_agreementEligibility'], QueryBase_agreementEligibilityArgs, MeshContext>,
  /** null **/
  Base_agreementEligibilities: InContextSdkMethod<Query['Base_agreementEligibilities'], QueryBase_agreementEligibilitiesArgs, MeshContext>,
  /** null **/
  Base_agreement: InContextSdkMethod<Query['Base_agreement'], QueryBase_agreementArgs, MeshContext>,
  /** null **/
  Base_agreements: InContextSdkMethod<Query['Base_agreements'], QueryBase_agreementsArgs, MeshContext>,
  /** null **/
  Base_agreementHatClaimedWithAgreementEvent: InContextSdkMethod<Query['Base_agreementHatClaimedWithAgreementEvent'], QueryBase_agreementHatClaimedWithAgreementEventArgs, MeshContext>,
  /** null **/
  Base_agreementHatClaimedWithAgreementEvents: InContextSdkMethod<Query['Base_agreementHatClaimedWithAgreementEvents'], QueryBase_agreementHatClaimedWithAgreementEventsArgs, MeshContext>,
  /** null **/
  Base_agreementAgreementSignedEvent: InContextSdkMethod<Query['Base_agreementAgreementSignedEvent'], QueryBase_agreementAgreementSignedEventArgs, MeshContext>,
  /** null **/
  Base_agreementAgreementSignedEvents: InContextSdkMethod<Query['Base_agreementAgreementSignedEvents'], QueryBase_agreementAgreementSignedEventsArgs, MeshContext>,
  /** null **/
  Base_agreementAgreementSetEvent: InContextSdkMethod<Query['Base_agreementAgreementSetEvent'], QueryBase_agreementAgreementSetEventArgs, MeshContext>,
  /** null **/
  Base_agreementAgreementSetEvents: InContextSdkMethod<Query['Base_agreementAgreementSetEvents'], QueryBase_agreementAgreementSetEventsArgs, MeshContext>,
  /** null **/
  Base_agreementOwnerHatSetEvent: InContextSdkMethod<Query['Base_agreementOwnerHatSetEvent'], QueryBase_agreementOwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Base_agreementOwnerHatSetEvents: InContextSdkMethod<Query['Base_agreementOwnerHatSetEvents'], QueryBase_agreementOwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Base_agreementArbitratorHatSetEvent: InContextSdkMethod<Query['Base_agreementArbitratorHatSetEvent'], QueryBase_agreementArbitratorHatSetEventArgs, MeshContext>,
  /** null **/
  Base_agreementArbitratorHatSetEvents: InContextSdkMethod<Query['Base_agreementArbitratorHatSetEvents'], QueryBase_agreementArbitratorHatSetEventsArgs, MeshContext>,
  /** null **/
  Base_agreementRevokedSingleEvent: InContextSdkMethod<Query['Base_agreementRevokedSingleEvent'], QueryBase_agreementRevokedSingleEventArgs, MeshContext>,
  /** null **/
  Base_agreementRevokedSingleEvents: InContextSdkMethod<Query['Base_agreementRevokedSingleEvents'], QueryBase_agreementRevokedSingleEventsArgs, MeshContext>,
  /** null **/
  Base_agreementRevokedMultipleEvent: InContextSdkMethod<Query['Base_agreementRevokedMultipleEvent'], QueryBase_agreementRevokedMultipleEventArgs, MeshContext>,
  /** null **/
  Base_agreementRevokedMultipleEvents: InContextSdkMethod<Query['Base_agreementRevokedMultipleEvents'], QueryBase_agreementRevokedMultipleEventsArgs, MeshContext>,
  /** null **/
  Base_agreementForgivenSingleEvent: InContextSdkMethod<Query['Base_agreementForgivenSingleEvent'], QueryBase_agreementForgivenSingleEventArgs, MeshContext>,
  /** null **/
  Base_agreementForgivenSingleEvents: InContextSdkMethod<Query['Base_agreementForgivenSingleEvents'], QueryBase_agreementForgivenSingleEventsArgs, MeshContext>,
  /** null **/
  Base_agreementForgivenMultipleEvent: InContextSdkMethod<Query['Base_agreementForgivenMultipleEvent'], QueryBase_agreementForgivenMultipleEventArgs, MeshContext>,
  /** null **/
  Base_agreementForgivenMultipleEvents: InContextSdkMethod<Query['Base_agreementForgivenMultipleEvents'], QueryBase_agreementForgivenMultipleEventsArgs, MeshContext>,
  /** null **/
  Base_erc20Eligibility: InContextSdkMethod<Query['Base_erc20Eligibility'], QueryBase_erc20EligibilityArgs, MeshContext>,
  /** null **/
  Base_erc20Eligibilities: InContextSdkMethod<Query['Base_erc20Eligibilities'], QueryBase_erc20EligibilitiesArgs, MeshContext>,
  /** null **/
  Base_erc721Eligibility: InContextSdkMethod<Query['Base_erc721Eligibility'], QueryBase_erc721EligibilityArgs, MeshContext>,
  /** null **/
  Base_erc721Eligibilities: InContextSdkMethod<Query['Base_erc721Eligibilities'], QueryBase_erc721EligibilitiesArgs, MeshContext>,
  /** null **/
  Base_erc1155Eligibility: InContextSdkMethod<Query['Base_erc1155Eligibility'], QueryBase_erc1155EligibilityArgs, MeshContext>,
  /** null **/
  Base_erc1155Eligibilities: InContextSdkMethod<Query['Base_erc1155Eligibilities'], QueryBase_erc1155EligibilitiesArgs, MeshContext>,
  /** null **/
  Base_hatWearingEligibility: InContextSdkMethod<Query['Base_hatWearingEligibility'], QueryBase_hatWearingEligibilityArgs, MeshContext>,
  /** null **/
  Base_hatWearingEligibilities: InContextSdkMethod<Query['Base_hatWearingEligibilities'], QueryBase_hatWearingEligibilitiesArgs, MeshContext>,
  /** null **/
  Base_gitcoinPassportEligibility: InContextSdkMethod<Query['Base_gitcoinPassportEligibility'], QueryBase_gitcoinPassportEligibilityArgs, MeshContext>,
  /** null **/
  Base_gitcoinPassportEligibilities: InContextSdkMethod<Query['Base_gitcoinPassportEligibilities'], QueryBase_gitcoinPassportEligibilitiesArgs, MeshContext>,
  /** null **/
  Base_coLinksEligibility: InContextSdkMethod<Query['Base_coLinksEligibility'], QueryBase_coLinksEligibilityArgs, MeshContext>,
  /** null **/
  Base_coLinksEligibilities: InContextSdkMethod<Query['Base_coLinksEligibilities'], QueryBase_coLinksEligibilitiesArgs, MeshContext>,
  /** null **/
  Base_hatControlledModule: InContextSdkMethod<Query['Base_hatControlledModule'], QueryBase_hatControlledModuleArgs, MeshContext>,
  /** null **/
  Base_hatControlledModules: InContextSdkMethod<Query['Base_hatControlledModules'], QueryBase_hatControlledModulesArgs, MeshContext>,
  /** null **/
  Base_hatControlledModuleWearerStatus: InContextSdkMethod<Query['Base_hatControlledModuleWearerStatus'], QueryBase_hatControlledModuleWearerStatusArgs, MeshContext>,
  /** null **/
  Base_hatControlledModuleWearerStatuses: InContextSdkMethod<Query['Base_hatControlledModuleWearerStatuses'], QueryBase_hatControlledModuleWearerStatusesArgs, MeshContext>,
  /** null **/
  Base_hatControlledModuleHatStatus: InContextSdkMethod<Query['Base_hatControlledModuleHatStatus'], QueryBase_hatControlledModuleHatStatusArgs, MeshContext>,
  /** null **/
  Base_hatControlledModuleHatStatuses: InContextSdkMethod<Query['Base_hatControlledModuleHatStatuses'], QueryBase_hatControlledModuleHatStatusesArgs, MeshContext>,
  /** null **/
  Base_hatControlledWearerStatusSet: InContextSdkMethod<Query['Base_hatControlledWearerStatusSet'], QueryBase_hatControlledWearerStatusSetArgs, MeshContext>,
  /** null **/
  Base_hatControlledWearerStatusSets: InContextSdkMethod<Query['Base_hatControlledWearerStatusSets'], QueryBase_hatControlledWearerStatusSetsArgs, MeshContext>,
  /** null **/
  Base_hatControlledHatStatusSet: InContextSdkMethod<Query['Base_hatControlledHatStatusSet'], QueryBase_hatControlledHatStatusSetArgs, MeshContext>,
  /** null **/
  Base_hatControlledHatStatusSets: InContextSdkMethod<Query['Base_hatControlledHatStatusSets'], QueryBase_hatControlledHatStatusSetsArgs, MeshContext>,
  /** null **/
  Base_publicLockV14Eligibility: InContextSdkMethod<Query['Base_publicLockV14Eligibility'], QueryBase_publicLockV14EligibilityArgs, MeshContext>,
  /** null **/
  Base_publicLockV14Eligibilities: InContextSdkMethod<Query['Base_publicLockV14Eligibilities'], QueryBase_publicLockV14EligibilitiesArgs, MeshContext>,
  /** null **/
  Base_hatsEligibilitiesChain: InContextSdkMethod<Query['Base_hatsEligibilitiesChain'], QueryBase_hatsEligibilitiesChainArgs, MeshContext>,
  /** null **/
  Base_hatsEligibilitiesChains: InContextSdkMethod<Query['Base_hatsEligibilitiesChains'], QueryBase_hatsEligibilitiesChainsArgs, MeshContext>,
  /** null **/
  Base_eligibilitiesRuleset: InContextSdkMethod<Query['Base_eligibilitiesRuleset'], QueryBase_eligibilitiesRulesetArgs, MeshContext>,
  /** null **/
  Base_eligibilitiesRulesets: InContextSdkMethod<Query['Base_eligibilitiesRulesets'], QueryBase_eligibilitiesRulesetsArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2Event: InContextSdkMethod<Query['Base_hatsSignerGateV2Event'], QueryBase_hatsSignerGateV2EventArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGateV2Events: InContextSdkMethod<Query['Base_hatsSignerGateV2Events'], QueryBase_hatsSignerGateV2EventsArgs, MeshContext>,
  /** null **/
  Base_hatsModule: InContextSdkMethod<Query['Base_hatsModule'], QueryBase_hatsModuleArgs, MeshContext>,
  /** null **/
  Base_hatsModules: InContextSdkMethod<Query['Base_hatsModules'], QueryBase_hatsModulesArgs, MeshContext>,
  /** null **/
  Base_hatsModuleEvent: InContextSdkMethod<Query['Base_hatsModuleEvent'], QueryBase_hatsModuleEventArgs, MeshContext>,
  /** null **/
  Base_hatsModuleEvents: InContextSdkMethod<Query['Base_hatsModuleEvents'], QueryBase_hatsModuleEventsArgs, MeshContext>,
  /** null **/
  Base_jokeRaceEvent: InContextSdkMethod<Query['Base_jokeRaceEvent'], QueryBase_jokeRaceEventArgs, MeshContext>,
  /** null **/
  Base_jokeRaceEvents: InContextSdkMethod<Query['Base_jokeRaceEvents'], QueryBase_jokeRaceEventsArgs, MeshContext>,
  /** null **/
  Base_allowlistEvent: InContextSdkMethod<Query['Base_allowlistEvent'], QueryBase_allowlistEventArgs, MeshContext>,
  /** null **/
  Base_allowlistEvents: InContextSdkMethod<Query['Base_allowlistEvents'], QueryBase_allowlistEventsArgs, MeshContext>,
  /** null **/
  Base_electionEvent: InContextSdkMethod<Query['Base_electionEvent'], QueryBase_electionEventArgs, MeshContext>,
  /** null **/
  Base_electionEvents: InContextSdkMethod<Query['Base_electionEvents'], QueryBase_electionEventsArgs, MeshContext>,
  /** null **/
  Base_stakingEvent: InContextSdkMethod<Query['Base_stakingEvent'], QueryBase_stakingEventArgs, MeshContext>,
  /** null **/
  Base_stakingEvents: InContextSdkMethod<Query['Base_stakingEvents'], QueryBase_stakingEventsArgs, MeshContext>,
  /** null **/
  Base_agreementEvent: InContextSdkMethod<Query['Base_agreementEvent'], QueryBase_agreementEventArgs, MeshContext>,
  /** null **/
  Base_agreementEvents: InContextSdkMethod<Query['Base_agreementEvents'], QueryBase_agreementEventsArgs, MeshContext>,
  /** null **/
  Base_hatControlledModuleEvent: InContextSdkMethod<Query['Base_hatControlledModuleEvent'], QueryBase_hatControlledModuleEventArgs, MeshContext>,
  /** null **/
  Base_hatControlledModuleEvents: InContextSdkMethod<Query['Base_hatControlledModuleEvents'], QueryBase_hatControlledModuleEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Base__meta: InContextSdkMethod<Query['Base__meta'], QueryBase__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Base_Ancillary"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
