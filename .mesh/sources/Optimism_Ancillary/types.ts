// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace OptimismAncillaryTypes {
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
  Op_BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Op_Bytes: { input: any; output: any; }
  Op_Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Op_Aggregation_interval =
  | 'hour'
  | 'day';

export type Op_Agreement = {
  id: Scalars['ID']['output'];
  agreementEligibility: Op_AgreementEligibility;
  agreement: Scalars['String']['output'];
  signers: Array<Scalars['String']['output']>;
  graceEndTime: Scalars['BigInt']['output'];
};

/**  Agreement Eligibility  */
export type Op_AgreementEligibility = Op_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  ownerHat: Op_HatAuthority;
  arbitratorHat: Op_HatAuthority;
  currentAgreement: Op_Agreement;
  currentAgreementNumber: Scalars['BigInt']['output'];
  agreements: Array<Op_Agreement>;
  badStandings: Array<Scalars['String']['output']>;
  events: Array<Op_AgreementEvent>;
};


/**  Agreement Eligibility  */
export type Op_AgreementEligibilityagreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Agreement_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Agreement_filter>;
};


/**  Agreement Eligibility  */
export type Op_AgreementEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_AgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_AgreementEvent_filter>;
};

export type Op_AgreementEligibility_filter = {
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
  ownerHat_?: InputMaybe<Op_HatAuthority_filter>;
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
  arbitratorHat_?: InputMaybe<Op_HatAuthority_filter>;
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
  currentAgreement_?: InputMaybe<Op_Agreement_filter>;
  currentAgreementNumber?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentAgreementNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  agreements_?: InputMaybe<Op_Agreement_filter>;
  badStandings?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  events_?: InputMaybe<Op_AgreementEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_AgreementEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_AgreementEligibility_filter>>>;
};

export type Op_AgreementEligibility_orderBy =
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

export type Op_AgreementEvent = {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  agreementEligibilityInstance: Op_AgreementEligibility;
};

export type Op_AgreementEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  agreementEligibilityInstance_?: InputMaybe<Op_AgreementEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_AgreementEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_AgreementEvent_filter>>>;
};

export type Op_AgreementEvent_orderBy =
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

export type Op_Agreement_AgreementSetEvent = Op_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  agreementEligibilityInstance: Op_AgreementEligibility;
  agreement: Scalars['String']['output'];
  grace: Scalars['BigInt']['output'];
};

export type Op_Agreement_AgreementSetEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  agreementEligibilityInstance_?: InputMaybe<Op_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Agreement_AgreementSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Agreement_AgreementSetEvent_filter>>>;
};

export type Op_Agreement_AgreementSetEvent_orderBy =
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

export type Op_Agreement_AgreementSignedEvent = Op_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  agreementEligibilityInstance: Op_AgreementEligibility;
  signer: Scalars['String']['output'];
  agreement: Scalars['String']['output'];
};

export type Op_Agreement_AgreementSignedEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  agreementEligibilityInstance_?: InputMaybe<Op_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Agreement_AgreementSignedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Agreement_AgreementSignedEvent_filter>>>;
};

export type Op_Agreement_AgreementSignedEvent_orderBy =
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

export type Op_Agreement_ArbitratorHatSetEvent = Op_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  agreementEligibilityInstance: Op_AgreementEligibility;
  newArbitratorHat: Scalars['String']['output'];
};

export type Op_Agreement_ArbitratorHatSetEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  agreementEligibilityInstance_?: InputMaybe<Op_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Agreement_ArbitratorHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Agreement_ArbitratorHatSetEvent_filter>>>;
};

export type Op_Agreement_ArbitratorHatSetEvent_orderBy =
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

export type Op_Agreement_HatClaimedWithAgreementEvent = Op_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  agreementEligibilityInstance: Op_AgreementEligibility;
  claimer: Scalars['String']['output'];
  hatId: Scalars['String']['output'];
  agreement: Scalars['String']['output'];
};

export type Op_Agreement_HatClaimedWithAgreementEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  agreementEligibilityInstance_?: InputMaybe<Op_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Agreement_HatClaimedWithAgreementEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Agreement_HatClaimedWithAgreementEvent_filter>>>;
};

export type Op_Agreement_HatClaimedWithAgreementEvent_orderBy =
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

export type Op_Agreement_OwnerHatSetEvent = Op_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  agreementEligibilityInstance: Op_AgreementEligibility;
  newOwnerHat: Scalars['String']['output'];
};

export type Op_Agreement_OwnerHatSetEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  agreementEligibilityInstance_?: InputMaybe<Op_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Agreement_OwnerHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Agreement_OwnerHatSetEvent_filter>>>;
};

export type Op_Agreement_OwnerHatSetEvent_orderBy =
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

export type Op_Agreement_filter = {
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
  agreementEligibility_?: InputMaybe<Op_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Agreement_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Agreement_filter>>>;
};

export type Op_Agreement_orderBy =
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
export type Op_AllowListEligibility = Op_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  ownerHat: Op_HatAuthority;
  arbitratorHat: Op_HatAuthority;
  eligibilityData: Array<Op_AllowListEligibilityData>;
  events: Array<Op_AllowlistEvent>;
};


/**  Allowlist Eligibility  */
export type Op_AllowListEligibilityeligibilityDataArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_AllowListEligibilityData_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_AllowListEligibilityData_filter>;
};


/**  Allowlist Eligibility  */
export type Op_AllowListEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_AllowlistEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_AllowlistEvent_filter>;
};

export type Op_AllowListEligibilityData = {
  id: Scalars['ID']['output'];
  allowListEligibility: Op_AllowListEligibility;
  address: Scalars['String']['output'];
  eligible: Scalars['Boolean']['output'];
  badStanding: Scalars['Boolean']['output'];
};

export type Op_AllowListEligibilityData_filter = {
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
  allowListEligibility_?: InputMaybe<Op_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_AllowListEligibilityData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_AllowListEligibilityData_filter>>>;
};

export type Op_AllowListEligibilityData_orderBy =
  | 'id'
  | 'allowListEligibility'
  | 'allowListEligibility__id'
  | 'allowListEligibility__version'
  | 'allowListEligibility__hatId'
  | 'address'
  | 'eligible'
  | 'badStanding';

export type Op_AllowListEligibility_filter = {
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
  ownerHat_?: InputMaybe<Op_HatAuthority_filter>;
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
  arbitratorHat_?: InputMaybe<Op_HatAuthority_filter>;
  eligibilityData_?: InputMaybe<Op_AllowListEligibilityData_filter>;
  events_?: InputMaybe<Op_AllowlistEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_AllowListEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_AllowListEligibility_filter>>>;
};

export type Op_AllowListEligibility_orderBy =
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

export type Op_AllowlistEvent = {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  allowlistEligibilityInstance: Op_AllowListEligibility;
};

export type Op_AllowlistEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  allowlistEligibilityInstance_?: InputMaybe<Op_AllowListEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_AllowlistEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_AllowlistEvent_filter>>>;
};

export type Op_AllowlistEvent_orderBy =
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

export type Op_Allowlist_AccountAddedEvent = Op_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  allowlistEligibilityInstance: Op_AllowListEligibility;
  account: Scalars['String']['output'];
};

export type Op_Allowlist_AccountAddedEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  allowlistEligibilityInstance_?: InputMaybe<Op_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Allowlist_AccountAddedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Allowlist_AccountAddedEvent_filter>>>;
};

export type Op_Allowlist_AccountAddedEvent_orderBy =
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

export type Op_Allowlist_AccountRemovedEvent = Op_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  allowlistEligibilityInstance: Op_AllowListEligibility;
  account: Scalars['String']['output'];
};

export type Op_Allowlist_AccountRemovedEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  allowlistEligibilityInstance_?: InputMaybe<Op_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Allowlist_AccountRemovedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Allowlist_AccountRemovedEvent_filter>>>;
};

export type Op_Allowlist_AccountRemovedEvent_orderBy =
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

export type Op_Allowlist_AccountStandingChangedEvent = Op_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  allowlistEligibilityInstance: Op_AllowListEligibility;
  account: Scalars['String']['output'];
  standing: Scalars['Boolean']['output'];
};

export type Op_Allowlist_AccountStandingChangedEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  allowlistEligibilityInstance_?: InputMaybe<Op_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Allowlist_AccountStandingChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Allowlist_AccountStandingChangedEvent_filter>>>;
};

export type Op_Allowlist_AccountStandingChangedEvent_orderBy =
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

export type Op_Allowlist_AccountsAddedEvent = Op_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  allowlistEligibilityInstance: Op_AllowListEligibility;
  accounts: Array<Scalars['String']['output']>;
};

export type Op_Allowlist_AccountsAddedEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  allowlistEligibilityInstance_?: InputMaybe<Op_AllowListEligibility_filter>;
  accounts?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Allowlist_AccountsAddedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Allowlist_AccountsAddedEvent_filter>>>;
};

export type Op_Allowlist_AccountsAddedEvent_orderBy =
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

export type Op_Allowlist_AccountsRemovedEvent = Op_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  allowlistEligibilityInstance: Op_AllowListEligibility;
  accounts: Array<Scalars['String']['output']>;
};

export type Op_Allowlist_AccountsRemovedEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  allowlistEligibilityInstance_?: InputMaybe<Op_AllowListEligibility_filter>;
  accounts?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Allowlist_AccountsRemovedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Allowlist_AccountsRemovedEvent_filter>>>;
};

export type Op_Allowlist_AccountsRemovedEvent_orderBy =
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

export type Op_Allowlist_AccountsStandingChangedEvent = Op_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  allowlistEligibilityInstance: Op_AllowListEligibility;
  accounts: Array<Scalars['String']['output']>;
  standings: Array<Scalars['Boolean']['output']>;
};

export type Op_Allowlist_AccountsStandingChangedEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  allowlistEligibilityInstance_?: InputMaybe<Op_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Allowlist_AccountsStandingChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Allowlist_AccountsStandingChangedEvent_filter>>>;
};

export type Op_Allowlist_AccountsStandingChangedEvent_orderBy =
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

export type Op_Allowlist_ArbitratorHatSetEvent = Op_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  allowlistEligibilityInstance: Op_AllowListEligibility;
  newArbitratorHat: Scalars['String']['output'];
};

export type Op_Allowlist_ArbitratorHatSetEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  allowlistEligibilityInstance_?: InputMaybe<Op_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Allowlist_ArbitratorHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Allowlist_ArbitratorHatSetEvent_filter>>>;
};

export type Op_Allowlist_ArbitratorHatSetEvent_orderBy =
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

export type Op_Allowlist_OwnerHatSetEvent = Op_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  allowlistEligibilityInstance: Op_AllowListEligibility;
  newOwnerHat: Scalars['String']['output'];
};

export type Op_Allowlist_OwnerHatSetEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  allowlistEligibilityInstance_?: InputMaybe<Op_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Allowlist_OwnerHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Allowlist_OwnerHatSetEvent_filter>>>;
};

export type Op_Allowlist_OwnerHatSetEvent_orderBy =
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

export type Op_BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Op_Block_height = {
  hash?: InputMaybe<Scalars['Op_Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

/**  Charecter Sheets Level Eligibility  */
export type Op_CharacterSheetsLevelEligibility = Op_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  hatAdmins: Array<Op_HatAuthority>;
};


/**  Charecter Sheets Level Eligibility  */
export type Op_CharacterSheetsLevelEligibilityhatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatAuthority_filter>;
};

export type Op_CharacterSheetsLevelEligibility_filter = {
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
  hatAdmins_?: InputMaybe<Op_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_CharacterSheetsLevelEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_CharacterSheetsLevelEligibility_filter>>>;
};

export type Op_CharacterSheetsLevelEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'hatAdmins';

/**  CoLinks Eligibility  */
export type Op_CoLinksEligibility = Op_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  threshold: Scalars['BigInt']['output'];
};

export type Op_CoLinksEligibility_filter = {
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_CoLinksEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_CoLinksEligibility_filter>>>;
};

export type Op_CoLinksEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'threshold';

export type Op_ElectionEvent = {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  electionEligibilityInstance: Op_HatsElectionEligibility;
};

export type Op_ElectionEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  electionEligibilityInstance_?: InputMaybe<Op_HatsElectionEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_ElectionEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_ElectionEvent_filter>>>;
};

export type Op_ElectionEvent_orderBy =
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

export type Op_ElectionTerm = {
  id: Scalars['ID']['output'];
  hatsElectionEligibility: Op_HatsElectionEligibility;
  /** first term starts when 'elect' is called, next terms start when 'startNextTerm' is called */
  termStartedAt?: Maybe<Scalars['BigInt']['output']>;
  termEnd: Scalars['BigInt']['output'];
  /** election is completed when 'elect' is called */
  electionCompletedAt?: Maybe<Scalars['BigInt']['output']>;
  electedAccounts?: Maybe<Array<Scalars['String']['output']>>;
};

export type Op_ElectionTerm_filter = {
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
  hatsElectionEligibility_?: InputMaybe<Op_HatsElectionEligibility_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_ElectionTerm_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_ElectionTerm_filter>>>;
};

export type Op_ElectionTerm_orderBy =
  | 'id'
  | 'hatsElectionEligibility'
  | 'hatsElectionEligibility__id'
  | 'hatsElectionEligibility__version'
  | 'hatsElectionEligibility__hatId'
  | 'termStartedAt'
  | 'termEnd'
  | 'electionCompletedAt'
  | 'electedAccounts';

export type Op_Election_ElectionCompletedEvent = Op_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  electionEligibilityInstance: Op_HatsElectionEligibility;
  termEnd: Scalars['BigInt']['output'];
  winners: Array<Scalars['String']['output']>;
};

export type Op_Election_ElectionCompletedEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  electionEligibilityInstance_?: InputMaybe<Op_HatsElectionEligibility_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Election_ElectionCompletedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Election_ElectionCompletedEvent_filter>>>;
};

export type Op_Election_ElectionCompletedEvent_orderBy =
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

export type Op_Election_ElectionOpenedEvent = Op_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  electionEligibilityInstance: Op_HatsElectionEligibility;
  nextTermEnd: Scalars['BigInt']['output'];
};

export type Op_Election_ElectionOpenedEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  electionEligibilityInstance_?: InputMaybe<Op_HatsElectionEligibility_filter>;
  nextTermEnd?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_not?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nextTermEnd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Election_ElectionOpenedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Election_ElectionOpenedEvent_filter>>>;
};

export type Op_Election_ElectionOpenedEvent_orderBy =
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

export type Op_Election_NewTermStartedEvent = Op_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  electionEligibilityInstance: Op_HatsElectionEligibility;
  termEnd: Scalars['BigInt']['output'];
};

export type Op_Election_NewTermStartedEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  electionEligibilityInstance_?: InputMaybe<Op_HatsElectionEligibility_filter>;
  termEnd?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_not?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  termEnd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Election_NewTermStartedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Election_NewTermStartedEvent_filter>>>;
};

export type Op_Election_NewTermStartedEvent_orderBy =
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

export type Op_Election_RecalledEvent = Op_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  electionEligibilityInstance: Op_HatsElectionEligibility;
  termEnd: Scalars['BigInt']['output'];
  accounts: Array<Scalars['String']['output']>;
};

export type Op_Election_RecalledEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  electionEligibilityInstance_?: InputMaybe<Op_HatsElectionEligibility_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Election_RecalledEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Election_RecalledEvent_filter>>>;
};

export type Op_Election_RecalledEvent_orderBy =
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

export type Op_EligibilitiesRuleset = {
  id: Scalars['ID']['output'];
  eligibilitiesChain: Op_HatsEligibilitiesChain;
  modules: Array<Op_HatsModule>;
};


export type Op_EligibilitiesRulesetmodulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsModule_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsModule_filter>;
};

export type Op_EligibilitiesRuleset_filter = {
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
  eligibilitiesChain_?: InputMaybe<Op_HatsEligibilitiesChain_filter>;
  modules?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_not?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  modules_?: InputMaybe<Op_HatsModule_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_EligibilitiesRuleset_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_EligibilitiesRuleset_filter>>>;
};

export type Op_EligibilitiesRuleset_orderBy =
  | 'id'
  | 'eligibilitiesChain'
  | 'eligibilitiesChain__id'
  | 'eligibilitiesChain__version'
  | 'eligibilitiesChain__hatId'
  | 'eligibilitiesChain__numRulesets'
  | 'modules';

/**  Erc1155 Eligibility  */
export type Op_Erc1155Eligibility = Op_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  contractAddress: Scalars['String']['output'];
  tokens: Array<Scalars['BigInt']['output']>;
  minBalances: Array<Scalars['BigInt']['output']>;
};

export type Op_Erc1155Eligibility_filter = {
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Erc1155Eligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Erc1155Eligibility_filter>>>;
};

export type Op_Erc1155Eligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'contractAddress'
  | 'tokens'
  | 'minBalances';

/**  Erc20 Eligibility  */
export type Op_Erc20Eligibility = Op_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  token: Scalars['String']['output'];
  minBalance: Scalars['BigInt']['output'];
};

export type Op_Erc20Eligibility_filter = {
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Erc20Eligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Erc20Eligibility_filter>>>;
};

export type Op_Erc20Eligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'token'
  | 'minBalance';

/**  Erc721 Eligibility  */
export type Op_Erc721Eligibility = Op_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  token: Scalars['String']['output'];
  minBalance: Scalars['BigInt']['output'];
};

export type Op_Erc721Eligibility_filter = {
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Erc721Eligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Erc721Eligibility_filter>>>;
};

export type Op_Erc721Eligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'token'
  | 'minBalance';

/**  Gitcoin Passport Eligibility  */
export type Op_GitcoinPassportEligibility = Op_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  decoder: Scalars['String']['output'];
  scoreCriterion: Scalars['BigInt']['output'];
};

export type Op_GitcoinPassportEligibility_filter = {
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_GitcoinPassportEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_GitcoinPassportEligibility_filter>>>;
};

export type Op_GitcoinPassportEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'decoder'
  | 'scoreCriterion';

export type Op_HatAuthority = {
  id: Scalars['ID']['output'];
  /** pre computed hats account address with a salt value of 1, null only if the hat was not created yet */
  primaryHatsAccount1ofNAddress?: Maybe<Scalars['String']['output']>;
  hatsAccount1ofN: Array<Op_HatsAccount1ofN>;
  hsgOwner: Array<Op_HatsSignerGate>;
  hsgSigner: Array<Op_HatsSignerGate>;
  jokeraceAdmin: Array<Op_JokeRaceEligibility>;
  allowListOwner: Array<Op_AllowListEligibility>;
  allowListArbitrator: Array<Op_AllowListEligibility>;
  electionsBallotBox: Array<Op_HatsElectionEligibility>;
  electionsAdmin: Array<Op_HatsElectionEligibility>;
  eligibilityTogglePassthrough: Array<Op_PassthroughModule>;
  stakingJudge: Array<Op_StakingEligibility>;
  stakingRecipient: Array<Op_StakingEligibility>;
  stakingHatAdmins: Array<Op_StakingEligibility>;
  seasonHatAdmins: Array<Op_SeasonToggle>;
  characterSheetsLevelHatAdmins: Array<Op_CharacterSheetsLevelEligibility>;
  agreementOwner: Array<Op_AgreementEligibility>;
  agreementArbitrator: Array<Op_AgreementEligibility>;
  baalStakingJudge: Array<Op_HatsStakingShaman>;
  hatsFarcasterDelegatorOwner: Array<Op_HatsFarcasterDelegator>;
  hatsFarcasterDelegatorCaster: Array<Op_HatsFarcasterDelegator>;
};


export type Op_HatAuthorityhatsAccount1ofNArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsAccount1ofN_filter>;
};


export type Op_HatAuthorityhsgOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsSignerGate_filter>;
};


export type Op_HatAuthorityhsgSignerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsSignerGate_filter>;
};


export type Op_HatAuthorityjokeraceAdminArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_JokeRaceEligibility_filter>;
};


export type Op_HatAuthorityallowListOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_AllowListEligibility_filter>;
};


export type Op_HatAuthorityallowListArbitratorArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_AllowListEligibility_filter>;
};


export type Op_HatAuthorityelectionsBallotBoxArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsElectionEligibility_filter>;
};


export type Op_HatAuthorityelectionsAdminArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsElectionEligibility_filter>;
};


export type Op_HatAuthorityeligibilityTogglePassthroughArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_PassthroughModule_filter>;
};


export type Op_HatAuthoritystakingJudgeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_StakingEligibility_filter>;
};


export type Op_HatAuthoritystakingRecipientArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_StakingEligibility_filter>;
};


export type Op_HatAuthoritystakingHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_StakingEligibility_filter>;
};


export type Op_HatAuthorityseasonHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_SeasonToggle_filter>;
};


export type Op_HatAuthoritycharacterSheetsLevelHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_CharacterSheetsLevelEligibility_filter>;
};


export type Op_HatAuthorityagreementOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_AgreementEligibility_filter>;
};


export type Op_HatAuthorityagreementArbitratorArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_AgreementEligibility_filter>;
};


export type Op_HatAuthoritybaalStakingJudgeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsStakingShaman_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsStakingShaman_filter>;
};


export type Op_HatAuthorityhatsFarcasterDelegatorOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsFarcasterDelegator_filter>;
};


export type Op_HatAuthorityhatsFarcasterDelegatorCasterArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsFarcasterDelegator_filter>;
};

export type Op_HatAuthority_filter = {
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
  hatsAccount1ofN_?: InputMaybe<Op_HatsAccount1ofN_filter>;
  hsgOwner_?: InputMaybe<Op_HatsSignerGate_filter>;
  hsgSigner_?: InputMaybe<Op_HatsSignerGate_filter>;
  jokeraceAdmin_?: InputMaybe<Op_JokeRaceEligibility_filter>;
  allowListOwner_?: InputMaybe<Op_AllowListEligibility_filter>;
  allowListArbitrator_?: InputMaybe<Op_AllowListEligibility_filter>;
  electionsBallotBox_?: InputMaybe<Op_HatsElectionEligibility_filter>;
  electionsAdmin_?: InputMaybe<Op_HatsElectionEligibility_filter>;
  eligibilityTogglePassthrough_?: InputMaybe<Op_PassthroughModule_filter>;
  stakingJudge_?: InputMaybe<Op_StakingEligibility_filter>;
  stakingRecipient_?: InputMaybe<Op_StakingEligibility_filter>;
  stakingHatAdmins_?: InputMaybe<Op_StakingEligibility_filter>;
  seasonHatAdmins_?: InputMaybe<Op_SeasonToggle_filter>;
  characterSheetsLevelHatAdmins_?: InputMaybe<Op_CharacterSheetsLevelEligibility_filter>;
  agreementOwner_?: InputMaybe<Op_AgreementEligibility_filter>;
  agreementArbitrator_?: InputMaybe<Op_AgreementEligibility_filter>;
  baalStakingJudge_?: InputMaybe<Op_HatsStakingShaman_filter>;
  hatsFarcasterDelegatorOwner_?: InputMaybe<Op_HatsFarcasterDelegator_filter>;
  hatsFarcasterDelegatorCaster_?: InputMaybe<Op_HatsFarcasterDelegator_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_HatAuthority_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_HatAuthority_filter>>>;
};

export type Op_HatAuthority_orderBy =
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

/**  Hat Controlled Module  */
export type Op_HatControlledModule = Op_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  controllerHatId: Scalars['String']['output'];
  wearersStatusData: Array<Op_HatControlledModuleWearerStatus>;
  hatsStatusData: Array<Op_HatControlledModuleHatStatus>;
  events: Array<Op_HatControlledModuleEvent>;
};


/**  Hat Controlled Module  */
export type Op_HatControlledModulewearersStatusDataArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatControlledModuleWearerStatus_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatControlledModuleWearerStatus_filter>;
};


/**  Hat Controlled Module  */
export type Op_HatControlledModulehatsStatusDataArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatControlledModuleHatStatus_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatControlledModuleHatStatus_filter>;
};


/**  Hat Controlled Module  */
export type Op_HatControlledModuleeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatControlledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatControlledModuleEvent_filter>;
};

export type Op_HatControlledModuleEvent = {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  hatControlledModuleInstance: Op_HatControlledModule;
};

export type Op_HatControlledModuleEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  hatControlledModuleInstance_?: InputMaybe<Op_HatControlledModule_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_HatControlledModuleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_HatControlledModuleEvent_filter>>>;
};

export type Op_HatControlledModuleEvent_orderBy =
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

export type Op_HatControlledModuleHatStatus = {
  id: Scalars['ID']['output'];
  hatControlledModule: Op_HatControlledModule;
  hatId: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
};

export type Op_HatControlledModuleHatStatus_filter = {
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
  hatControlledModule_?: InputMaybe<Op_HatControlledModule_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_HatControlledModuleHatStatus_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_HatControlledModuleHatStatus_filter>>>;
};

export type Op_HatControlledModuleHatStatus_orderBy =
  | 'id'
  | 'hatControlledModule'
  | 'hatControlledModule__id'
  | 'hatControlledModule__version'
  | 'hatControlledModule__hatId'
  | 'hatControlledModule__controllerHatId'
  | 'hatId'
  | 'active';

export type Op_HatControlledModuleWearerStatus = {
  id: Scalars['ID']['output'];
  hatControlledModule: Op_HatControlledModule;
  hatId: Scalars['String']['output'];
  wearer: Scalars['String']['output'];
  eligible: Scalars['Boolean']['output'];
  standing: Scalars['Boolean']['output'];
};

export type Op_HatControlledModuleWearerStatus_filter = {
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
  hatControlledModule_?: InputMaybe<Op_HatControlledModule_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_HatControlledModuleWearerStatus_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_HatControlledModuleWearerStatus_filter>>>;
};

export type Op_HatControlledModuleWearerStatus_orderBy =
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

export type Op_HatControlledModule_filter = {
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
  wearersStatusData_?: InputMaybe<Op_HatControlledModuleWearerStatus_filter>;
  hatsStatusData_?: InputMaybe<Op_HatControlledModuleHatStatus_filter>;
  events_?: InputMaybe<Op_HatControlledModuleEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_HatControlledModule_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_HatControlledModule_filter>>>;
};

export type Op_HatControlledModule_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'controllerHatId'
  | 'wearersStatusData'
  | 'hatsStatusData'
  | 'events';

export type Op_HatControlled_HatStatusSet = Op_HatControlledModuleEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  hatControlledModuleInstance: Op_HatControlledModule;
  hatId: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
};

export type Op_HatControlled_HatStatusSet_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  hatControlledModuleInstance_?: InputMaybe<Op_HatControlledModule_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_HatControlled_HatStatusSet_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_HatControlled_HatStatusSet_filter>>>;
};

export type Op_HatControlled_HatStatusSet_orderBy =
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

export type Op_HatControlled_WearerStatusSet = Op_HatControlledModuleEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  hatControlledModuleInstance: Op_HatControlledModule;
  wearer: Scalars['String']['output'];
  hatId: Scalars['String']['output'];
  eligible: Scalars['Boolean']['output'];
  standing: Scalars['Boolean']['output'];
};

export type Op_HatControlled_WearerStatusSet_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  hatControlledModuleInstance_?: InputMaybe<Op_HatControlledModule_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_HatControlled_WearerStatusSet_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_HatControlled_WearerStatusSet_filter>>>;
};

export type Op_HatControlled_WearerStatusSet_orderBy =
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
export type Op_HatWearingEligibility = Op_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  criterionHat: Scalars['String']['output'];
};

export type Op_HatWearingEligibility_filter = {
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_HatWearingEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_HatWearingEligibility_filter>>>;
};

export type Op_HatWearingEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'criterionHat';

export type Op_HatsAccount1ofN = {
  id: Scalars['ID']['output'];
  accountOfHat: Op_HatAuthority;
  operations: Array<Op_HatsAccount1ofNOperation>;
};


export type Op_HatsAccount1ofNoperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsAccount1ofNOperation_filter>;
};

export type Op_HatsAccount1ofNOperation = {
  id: Scalars['ID']['output'];
  hatsAccount: Op_HatsAccount1ofN;
  signer: Scalars['String']['output'];
  to: Scalars['String']['output'];
  value: Scalars['BigInt']['output'];
  callData: Scalars['Op_Bytes']['output'];
  operationType: Op_HatsAccountOperationType;
};

export type Op_HatsAccount1ofNOperation_filter = {
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
  hatsAccount_?: InputMaybe<Op_HatsAccount1ofN_filter>;
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
  callData?: InputMaybe<Scalars['Op_Bytes']['input']>;
  callData_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  callData_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  callData_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  callData_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  callData_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  callData_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  callData_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  callData_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  callData_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  operationType?: InputMaybe<Op_HatsAccountOperationType>;
  operationType_not?: InputMaybe<Op_HatsAccountOperationType>;
  operationType_in?: InputMaybe<Array<Op_HatsAccountOperationType>>;
  operationType_not_in?: InputMaybe<Array<Op_HatsAccountOperationType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_HatsAccount1ofNOperation_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_HatsAccount1ofNOperation_filter>>>;
};

export type Op_HatsAccount1ofNOperation_orderBy =
  | 'id'
  | 'hatsAccount'
  | 'hatsAccount__id'
  | 'signer'
  | 'to'
  | 'value'
  | 'callData'
  | 'operationType';

export type Op_HatsAccount1ofN_filter = {
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
  accountOfHat_?: InputMaybe<Op_HatAuthority_filter>;
  operations_?: InputMaybe<Op_HatsAccount1ofNOperation_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_HatsAccount1ofN_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_HatsAccount1ofN_filter>>>;
};

export type Op_HatsAccount1ofN_orderBy =
  | 'id'
  | 'accountOfHat'
  | 'accountOfHat__id'
  | 'accountOfHat__primaryHatsAccount1ofNAddress'
  | 'operations';

export type Op_HatsAccountOperationType =
  | 'Call'
  | 'DelegateCall';

/** HatsElection Eligibility */
export type Op_HatsElectionEligibility = Op_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  ballotBoxHat: Op_HatAuthority;
  adminHat: Array<Op_HatAuthority>;
  terms: Array<Op_ElectionTerm>;
  currentTerm?: Maybe<Op_ElectionTerm>;
  events: Array<Op_ElectionEvent>;
};


/** HatsElection Eligibility */
export type Op_HatsElectionEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatAuthority_filter>;
};


/** HatsElection Eligibility */
export type Op_HatsElectionEligibilitytermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_ElectionTerm_filter>;
};


/** HatsElection Eligibility */
export type Op_HatsElectionEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_ElectionEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_ElectionEvent_filter>;
};

export type Op_HatsElectionEligibility_filter = {
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
  ballotBoxHat_?: InputMaybe<Op_HatAuthority_filter>;
  adminHat?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_?: InputMaybe<Op_HatAuthority_filter>;
  terms_?: InputMaybe<Op_ElectionTerm_filter>;
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
  currentTerm_?: InputMaybe<Op_ElectionTerm_filter>;
  events_?: InputMaybe<Op_ElectionEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_HatsElectionEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_HatsElectionEligibility_filter>>>;
};

export type Op_HatsElectionEligibility_orderBy =
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
export type Op_HatsEligibilitiesChain = Op_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  rulesets: Array<Op_EligibilitiesRuleset>;
  moduleAddresses: Array<Scalars['String']['output']>;
  numRulesets: Scalars['BigInt']['output'];
};


/**  Chains  */
export type Op_HatsEligibilitiesChainrulesetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_EligibilitiesRuleset_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_EligibilitiesRuleset_filter>;
};

export type Op_HatsEligibilitiesChain_filter = {
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
  rulesets_?: InputMaybe<Op_EligibilitiesRuleset_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_HatsEligibilitiesChain_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_HatsEligibilitiesChain_filter>>>;
};

export type Op_HatsEligibilitiesChain_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'rulesets'
  | 'moduleAddresses'
  | 'numRulesets';

export type Op_HatsFarcasterDelegator = {
  id: Scalars['ID']['output'];
  caster: Op_HatAuthority;
  owner: Op_HatAuthority;
};

export type Op_HatsFarcasterDelegator_filter = {
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
  caster_?: InputMaybe<Op_HatAuthority_filter>;
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
  owner_?: InputMaybe<Op_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_HatsFarcasterDelegator_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_HatsFarcasterDelegator_filter>>>;
};

export type Op_HatsFarcasterDelegator_orderBy =
  | 'id'
  | 'caster'
  | 'caster__id'
  | 'caster__primaryHatsAccount1ofNAddress'
  | 'owner'
  | 'owner__id'
  | 'owner__primaryHatsAccount1ofNAddress';

/**  *** Modules ***  */
export type Op_HatsModule = {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
};

export type Op_HatsModuleEvent = {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
};

export type Op_HatsModuleEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_HatsModuleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_HatsModuleEvent_filter>>>;
};

export type Op_HatsModuleEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID';

export type Op_HatsModule_filter = {
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_HatsModule_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_HatsModule_filter>>>;
};

export type Op_HatsModule_orderBy =
  | 'id'
  | 'version'
  | 'hatId';

/**  *** Gates ***  */
export type Op_HatsSignerGate = {
  id: Scalars['ID']['output'];
  type: Op_HatsSignerGateType;
  ownerHat: Op_HatAuthority;
  signerHats: Array<Op_HatAuthority>;
  safe: Scalars['String']['output'];
  minThreshold: Scalars['BigInt']['output'];
  targetThreshold: Scalars['BigInt']['output'];
  maxSigners: Scalars['BigInt']['output'];
};


/**  *** Gates ***  */
export type Op_HatsSignerGatesignerHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatAuthority_filter>;
};

export type Op_HatsSignerGateType =
  | 'Single'
  | 'Multi';

export type Op_HatsSignerGate_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  type?: InputMaybe<Op_HatsSignerGateType>;
  type_not?: InputMaybe<Op_HatsSignerGateType>;
  type_in?: InputMaybe<Array<Op_HatsSignerGateType>>;
  type_not_in?: InputMaybe<Array<Op_HatsSignerGateType>>;
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
  ownerHat_?: InputMaybe<Op_HatAuthority_filter>;
  signerHats?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_?: InputMaybe<Op_HatAuthority_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_HatsSignerGate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_HatsSignerGate_filter>>>;
};

export type Op_HatsSignerGate_orderBy =
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

export type Op_HatsStakingShaman = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  judgeHat: Op_HatAuthority;
  baal: Scalars['String']['output'];
  stakingProxyImpl: Scalars['String']['output'];
  sharesToken: Scalars['String']['output'];
  minStake: Scalars['BigInt']['output'];
  coolDownBuffer: Scalars['BigInt']['output'];
  stakes: Array<Op_ShamanStake>;
};


export type Op_HatsStakingShamanstakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_ShamanStake_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_ShamanStake_filter>;
};

export type Op_HatsStakingShaman_filter = {
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
  judgeHat_?: InputMaybe<Op_HatAuthority_filter>;
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
  stakes_?: InputMaybe<Op_ShamanStake_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_HatsStakingShaman_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_HatsStakingShaman_filter>>>;
};

export type Op_HatsStakingShaman_orderBy =
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
export type Op_JokeRaceEligibility = Op_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  adminHat: Array<Op_HatAuthority>;
  currentTerm?: Maybe<Op_JokeRaceEligibilityTerm>;
  nextTerm?: Maybe<Op_JokeRaceEligibilityTerm>;
  allTerms: Array<Op_JokeRaceEligibilityTerm>;
  events: Array<Op_JokeRaceEvent>;
};


/**  Jokerace Eligibility  */
export type Op_JokeRaceEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatAuthority_filter>;
};


/**  Jokerace Eligibility  */
export type Op_JokeRaceEligibilityallTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_JokeRaceEligibilityTerm_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_JokeRaceEligibilityTerm_filter>;
};


/**  Jokerace Eligibility  */
export type Op_JokeRaceEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_JokeRaceEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_JokeRaceEvent_filter>;
};

export type Op_JokeRaceEligibilityTerm = {
  id: Scalars['ID']['output'];
  jokeRaceEligibility: Op_JokeRaceEligibility;
  termStartedAt?: Maybe<Scalars['BigInt']['output']>;
  termEndsAt: Scalars['BigInt']['output'];
  topK: Scalars['BigInt']['output'];
  transitionPeriod: Scalars['BigInt']['output'];
  contest: Scalars['String']['output'];
  winners?: Maybe<Array<Scalars['String']['output']>>;
};

export type Op_JokeRaceEligibilityTerm_filter = {
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
  jokeRaceEligibility_?: InputMaybe<Op_JokeRaceEligibility_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_JokeRaceEligibilityTerm_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_JokeRaceEligibilityTerm_filter>>>;
};

export type Op_JokeRaceEligibilityTerm_orderBy =
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

export type Op_JokeRaceEligibility_filter = {
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
  adminHat_?: InputMaybe<Op_HatAuthority_filter>;
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
  currentTerm_?: InputMaybe<Op_JokeRaceEligibilityTerm_filter>;
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
  nextTerm_?: InputMaybe<Op_JokeRaceEligibilityTerm_filter>;
  allTerms_?: InputMaybe<Op_JokeRaceEligibilityTerm_filter>;
  events_?: InputMaybe<Op_JokeRaceEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_JokeRaceEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_JokeRaceEligibility_filter>>>;
};

export type Op_JokeRaceEligibility_orderBy =
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

export type Op_JokeRaceEvent = {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  jokeRaceEligibilityInstance: Op_JokeRaceEligibility;
};

export type Op_JokeRaceEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  jokeRaceEligibilityInstance_?: InputMaybe<Op_JokeRaceEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_JokeRaceEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_JokeRaceEvent_filter>>>;
};

export type Op_JokeRaceEvent_orderBy =
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

export type Op_JokeRace_NextTermSetEvent = Op_JokeRaceEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  jokeRaceEligibilityInstance: Op_JokeRaceEligibility;
  newContest: Scalars['String']['output'];
  newTopK: Scalars['BigInt']['output'];
  newTermEnd: Scalars['BigInt']['output'];
  newTransitionPeriod: Scalars['BigInt']['output'];
};

export type Op_JokeRace_NextTermSetEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  jokeRaceEligibilityInstance_?: InputMaybe<Op_JokeRaceEligibility_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_JokeRace_NextTermSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_JokeRace_NextTermSetEvent_filter>>>;
};

export type Op_JokeRace_NextTermSetEvent_orderBy =
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

export type Op_JokeRace_TermStartedEvent = Op_JokeRaceEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  jokeRaceEligibilityInstance: Op_JokeRaceEligibility;
  contest: Scalars['String']['output'];
  topK: Scalars['BigInt']['output'];
  termEnd: Scalars['BigInt']['output'];
  transitionPeriod: Scalars['BigInt']['output'];
};

export type Op_JokeRace_TermStartedEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  jokeRaceEligibilityInstance_?: InputMaybe<Op_JokeRaceEligibility_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_JokeRace_TermStartedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_JokeRace_TermStartedEvent_filter>>>;
};

export type Op_JokeRace_TermStartedEvent_orderBy =
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
export type Op_OrderDirection =
  | 'asc'
  | 'desc';

/**  Passthrough Module  */
export type Op_PassthroughModule = Op_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  passthroughHat: Op_HatAuthority;
};

export type Op_PassthroughModule_filter = {
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
  passthroughHat_?: InputMaybe<Op_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_PassthroughModule_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_PassthroughModule_filter>>>;
};

export type Op_PassthroughModule_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'passthroughHat'
  | 'passthroughHat__id'
  | 'passthroughHat__primaryHatsAccount1ofNAddress';

/**  Public Lock V14 Eligibility  */
export type Op_PublicLockV14Eligibility = Op_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  lock: Scalars['String']['output'];
  referrer: Scalars['String']['output'];
  referrerFeePercentage: Scalars['BigInt']['output'];
};

export type Op_PublicLockV14Eligibility_filter = {
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_PublicLockV14Eligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_PublicLockV14Eligibility_filter>>>;
};

export type Op_PublicLockV14Eligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'lock'
  | 'referrer'
  | 'referrerFeePercentage';

export type Query = {
  Op_hatAuthority?: Maybe<Op_HatAuthority>;
  Op_hatAuthorities: Array<Op_HatAuthority>;
  Op_hatsSignerGate?: Maybe<Op_HatsSignerGate>;
  Op_hatsSignerGates: Array<Op_HatsSignerGate>;
  Op_hatsAccount1OfN?: Maybe<Op_HatsAccount1ofN>;
  Op_hatsAccount1OfNs: Array<Op_HatsAccount1ofN>;
  Op_hatsAccount1OfNOperation?: Maybe<Op_HatsAccount1ofNOperation>;
  Op_hatsAccount1OfNOperations: Array<Op_HatsAccount1ofNOperation>;
  Op_hatsStakingShaman?: Maybe<Op_HatsStakingShaman>;
  Op_hatsStakingShamans: Array<Op_HatsStakingShaman>;
  Op_shamanStake?: Maybe<Op_ShamanStake>;
  Op_shamanStakes: Array<Op_ShamanStake>;
  Op_hatsFarcasterDelegator?: Maybe<Op_HatsFarcasterDelegator>;
  Op_hatsFarcasterDelegators: Array<Op_HatsFarcasterDelegator>;
  Op_jokeRaceEligibility?: Maybe<Op_JokeRaceEligibility>;
  Op_jokeRaceEligibilities: Array<Op_JokeRaceEligibility>;
  Op_jokeRaceEligibilityTerm?: Maybe<Op_JokeRaceEligibilityTerm>;
  Op_jokeRaceEligibilityTerms: Array<Op_JokeRaceEligibilityTerm>;
  Op_jokeRaceNextTermSetEvent?: Maybe<Op_JokeRace_NextTermSetEvent>;
  Op_jokeRaceNextTermSetEvents: Array<Op_JokeRace_NextTermSetEvent>;
  Op_jokeRaceTermStartedEvent?: Maybe<Op_JokeRace_TermStartedEvent>;
  Op_jokeRaceTermStartedEvents: Array<Op_JokeRace_TermStartedEvent>;
  Op_allowListEligibility?: Maybe<Op_AllowListEligibility>;
  Op_allowListEligibilities: Array<Op_AllowListEligibility>;
  Op_allowListEligibilityData?: Maybe<Op_AllowListEligibilityData>;
  Op_allowListEligibilityDatas: Array<Op_AllowListEligibilityData>;
  Op_allowlistAccountAddedEvent?: Maybe<Op_Allowlist_AccountAddedEvent>;
  Op_allowlistAccountAddedEvents: Array<Op_Allowlist_AccountAddedEvent>;
  Op_allowlistAccountsAddedEvent?: Maybe<Op_Allowlist_AccountsAddedEvent>;
  Op_allowlistAccountsAddedEvents: Array<Op_Allowlist_AccountsAddedEvent>;
  Op_allowlistAccountRemovedEvent?: Maybe<Op_Allowlist_AccountRemovedEvent>;
  Op_allowlistAccountRemovedEvents: Array<Op_Allowlist_AccountRemovedEvent>;
  Op_allowlistAccountsRemovedEvent?: Maybe<Op_Allowlist_AccountsRemovedEvent>;
  Op_allowlistAccountsRemovedEvents: Array<Op_Allowlist_AccountsRemovedEvent>;
  Op_allowlistAccountStandingChangedEvent?: Maybe<Op_Allowlist_AccountStandingChangedEvent>;
  Op_allowlistAccountStandingChangedEvents: Array<Op_Allowlist_AccountStandingChangedEvent>;
  Op_allowlistAccountsStandingChangedEvent?: Maybe<Op_Allowlist_AccountsStandingChangedEvent>;
  Op_allowlistAccountsStandingChangedEvents: Array<Op_Allowlist_AccountsStandingChangedEvent>;
  Op_allowlistOwnerHatSetEvent?: Maybe<Op_Allowlist_OwnerHatSetEvent>;
  Op_allowlistOwnerHatSetEvents: Array<Op_Allowlist_OwnerHatSetEvent>;
  Op_allowlistArbitratorHatSetEvent?: Maybe<Op_Allowlist_ArbitratorHatSetEvent>;
  Op_allowlistArbitratorHatSetEvents: Array<Op_Allowlist_ArbitratorHatSetEvent>;
  Op_hatsElectionEligibility?: Maybe<Op_HatsElectionEligibility>;
  Op_hatsElectionEligibilities: Array<Op_HatsElectionEligibility>;
  Op_electionTerm?: Maybe<Op_ElectionTerm>;
  Op_electionTerms: Array<Op_ElectionTerm>;
  Op_electionElectionOpenedEvent?: Maybe<Op_Election_ElectionOpenedEvent>;
  Op_electionElectionOpenedEvents: Array<Op_Election_ElectionOpenedEvent>;
  Op_electionElectionCompletedEvent?: Maybe<Op_Election_ElectionCompletedEvent>;
  Op_electionElectionCompletedEvents: Array<Op_Election_ElectionCompletedEvent>;
  Op_electionNewTermStartedEvent?: Maybe<Op_Election_NewTermStartedEvent>;
  Op_electionNewTermStartedEvents: Array<Op_Election_NewTermStartedEvent>;
  Op_electionRecalledEvent?: Maybe<Op_Election_RecalledEvent>;
  Op_electionRecalledEvents: Array<Op_Election_RecalledEvent>;
  Op_passthroughModule?: Maybe<Op_PassthroughModule>;
  Op_passthroughModules: Array<Op_PassthroughModule>;
  Op_stakingEligibility?: Maybe<Op_StakingEligibility>;
  Op_stakingEligibilities: Array<Op_StakingEligibility>;
  Op_stake?: Maybe<Op_Stake>;
  Op_stakes: Array<Op_Stake>;
  Op_stakingStakedEvent?: Maybe<Op_Staking_StakedEvent>;
  Op_stakingStakedEvents: Array<Op_Staking_StakedEvent>;
  Op_stakingUnstakeBegunEvent?: Maybe<Op_Staking_UnstakeBegunEvent>;
  Op_stakingUnstakeBegunEvents: Array<Op_Staking_UnstakeBegunEvent>;
  Op_stakingSlashedEvent?: Maybe<Op_Staking_SlashedEvent>;
  Op_stakingSlashedEvents: Array<Op_Staking_SlashedEvent>;
  Op_stakingMinStakeChangedEvent?: Maybe<Op_Staking_MinStakeChangedEvent>;
  Op_stakingMinStakeChangedEvents: Array<Op_Staking_MinStakeChangedEvent>;
  Op_stakingJudgeHatChangedEvent?: Maybe<Op_Staking_JudgeHatChangedEvent>;
  Op_stakingJudgeHatChangedEvents: Array<Op_Staking_JudgeHatChangedEvent>;
  Op_stakingRecipientHatChangedEvent?: Maybe<Op_Staking_RecipientHatChangedEvent>;
  Op_stakingRecipientHatChangedEvents: Array<Op_Staking_RecipientHatChangedEvent>;
  Op_stakingCooldownPeriodChangedEvent?: Maybe<Op_Staking_CooldownPeriodChangedEvent>;
  Op_stakingCooldownPeriodChangedEvents: Array<Op_Staking_CooldownPeriodChangedEvent>;
  Op_stakingForgivenEvent?: Maybe<Op_Staking_ForgivenEvent>;
  Op_stakingForgivenEvents: Array<Op_Staking_ForgivenEvent>;
  Op_seasonToggle?: Maybe<Op_SeasonToggle>;
  Op_seasonToggles: Array<Op_SeasonToggle>;
  Op_characterSheetsLevelEligibility?: Maybe<Op_CharacterSheetsLevelEligibility>;
  Op_characterSheetsLevelEligibilities: Array<Op_CharacterSheetsLevelEligibility>;
  Op_agreementEligibility?: Maybe<Op_AgreementEligibility>;
  Op_agreementEligibilities: Array<Op_AgreementEligibility>;
  Op_agreement?: Maybe<Op_Agreement>;
  Op_agreements: Array<Op_Agreement>;
  Op_agreementHatClaimedWithAgreementEvent?: Maybe<Op_Agreement_HatClaimedWithAgreementEvent>;
  Op_agreementHatClaimedWithAgreementEvents: Array<Op_Agreement_HatClaimedWithAgreementEvent>;
  Op_agreementAgreementSignedEvent?: Maybe<Op_Agreement_AgreementSignedEvent>;
  Op_agreementAgreementSignedEvents: Array<Op_Agreement_AgreementSignedEvent>;
  Op_agreementAgreementSetEvent?: Maybe<Op_Agreement_AgreementSetEvent>;
  Op_agreementAgreementSetEvents: Array<Op_Agreement_AgreementSetEvent>;
  Op_agreementOwnerHatSetEvent?: Maybe<Op_Agreement_OwnerHatSetEvent>;
  Op_agreementOwnerHatSetEvents: Array<Op_Agreement_OwnerHatSetEvent>;
  Op_agreementArbitratorHatSetEvent?: Maybe<Op_Agreement_ArbitratorHatSetEvent>;
  Op_agreementArbitratorHatSetEvents: Array<Op_Agreement_ArbitratorHatSetEvent>;
  Op_erc20Eligibility?: Maybe<Op_Erc20Eligibility>;
  Op_erc20Eligibilities: Array<Op_Erc20Eligibility>;
  Op_erc721Eligibility?: Maybe<Op_Erc721Eligibility>;
  Op_erc721Eligibilities: Array<Op_Erc721Eligibility>;
  Op_erc1155Eligibility?: Maybe<Op_Erc1155Eligibility>;
  Op_erc1155Eligibilities: Array<Op_Erc1155Eligibility>;
  Op_hatWearingEligibility?: Maybe<Op_HatWearingEligibility>;
  Op_hatWearingEligibilities: Array<Op_HatWearingEligibility>;
  Op_gitcoinPassportEligibility?: Maybe<Op_GitcoinPassportEligibility>;
  Op_gitcoinPassportEligibilities: Array<Op_GitcoinPassportEligibility>;
  Op_coLinksEligibility?: Maybe<Op_CoLinksEligibility>;
  Op_coLinksEligibilities: Array<Op_CoLinksEligibility>;
  Op_hatControlledModule?: Maybe<Op_HatControlledModule>;
  Op_hatControlledModules: Array<Op_HatControlledModule>;
  Op_hatControlledModuleWearerStatus?: Maybe<Op_HatControlledModuleWearerStatus>;
  Op_hatControlledModuleWearerStatuses: Array<Op_HatControlledModuleWearerStatus>;
  Op_hatControlledModuleHatStatus?: Maybe<Op_HatControlledModuleHatStatus>;
  Op_hatControlledModuleHatStatuses: Array<Op_HatControlledModuleHatStatus>;
  Op_hatControlledWearerStatusSet?: Maybe<Op_HatControlled_WearerStatusSet>;
  Op_hatControlledWearerStatusSets: Array<Op_HatControlled_WearerStatusSet>;
  Op_hatControlledHatStatusSet?: Maybe<Op_HatControlled_HatStatusSet>;
  Op_hatControlledHatStatusSets: Array<Op_HatControlled_HatStatusSet>;
  Op_publicLockV14Eligibility?: Maybe<Op_PublicLockV14Eligibility>;
  Op_publicLockV14Eligibilities: Array<Op_PublicLockV14Eligibility>;
  Op_hatsEligibilitiesChain?: Maybe<Op_HatsEligibilitiesChain>;
  Op_hatsEligibilitiesChains: Array<Op_HatsEligibilitiesChain>;
  Op_eligibilitiesRuleset?: Maybe<Op_EligibilitiesRuleset>;
  Op_eligibilitiesRulesets: Array<Op_EligibilitiesRuleset>;
  Op_hatsModule?: Maybe<Op_HatsModule>;
  Op_hatsModules: Array<Op_HatsModule>;
  Op_hatsModuleEvent?: Maybe<Op_HatsModuleEvent>;
  Op_hatsModuleEvents: Array<Op_HatsModuleEvent>;
  Op_jokeRaceEvent?: Maybe<Op_JokeRaceEvent>;
  Op_jokeRaceEvents: Array<Op_JokeRaceEvent>;
  Op_allowlistEvent?: Maybe<Op_AllowlistEvent>;
  Op_allowlistEvents: Array<Op_AllowlistEvent>;
  Op_electionEvent?: Maybe<Op_ElectionEvent>;
  Op_electionEvents: Array<Op_ElectionEvent>;
  Op_stakingEvent?: Maybe<Op_StakingEvent>;
  Op_stakingEvents: Array<Op_StakingEvent>;
  Op_agreementEvent?: Maybe<Op_AgreementEvent>;
  Op_agreementEvents: Array<Op_AgreementEvent>;
  Op_hatControlledModuleEvent?: Maybe<Op_HatControlledModuleEvent>;
  Op_hatControlledModuleEvents: Array<Op_HatControlledModuleEvent>;
  /** Access to subgraph metadata */
  Op__meta?: Maybe<Op__Meta_>;
};


export type QueryOp_hatAuthorityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatAuthoritiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatAuthority_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatsSignerGateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatsSignerGatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsSignerGate_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatsAccount1OfNArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatsAccount1OfNsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsAccount1ofN_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatsAccount1OfNOperationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatsAccount1OfNOperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsAccount1ofNOperation_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatsStakingShamanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatsStakingShamansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsStakingShaman_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsStakingShaman_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_shamanStakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_shamanStakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_ShamanStake_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_ShamanStake_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatsFarcasterDelegatorArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatsFarcasterDelegatorsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsFarcasterDelegator_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_jokeRaceEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_jokeRaceEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_JokeRaceEligibility_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_jokeRaceEligibilityTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_jokeRaceEligibilityTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_JokeRaceEligibilityTerm_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_JokeRaceEligibilityTerm_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_jokeRaceNextTermSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_jokeRaceNextTermSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_JokeRace_NextTermSetEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_JokeRace_NextTermSetEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_jokeRaceTermStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_jokeRaceTermStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_JokeRace_TermStartedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_JokeRace_TermStartedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_allowListEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_allowListEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_AllowListEligibility_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_allowListEligibilityDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_allowListEligibilityDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_AllowListEligibilityData_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_AllowListEligibilityData_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_allowlistAccountAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_allowlistAccountAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Allowlist_AccountAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Allowlist_AccountAddedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_allowlistAccountsAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_allowlistAccountsAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Allowlist_AccountsAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Allowlist_AccountsAddedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_allowlistAccountRemovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_allowlistAccountRemovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Allowlist_AccountRemovedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Allowlist_AccountRemovedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_allowlistAccountsRemovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_allowlistAccountsRemovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Allowlist_AccountsRemovedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Allowlist_AccountsRemovedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_allowlistAccountStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_allowlistAccountStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Allowlist_AccountStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Allowlist_AccountStandingChangedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_allowlistAccountsStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_allowlistAccountsStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Allowlist_AccountsStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Allowlist_AccountsStandingChangedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_allowlistOwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_allowlistOwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Allowlist_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Allowlist_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_allowlistArbitratorHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_allowlistArbitratorHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Allowlist_ArbitratorHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Allowlist_ArbitratorHatSetEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatsElectionEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatsElectionEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsElectionEligibility_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_electionTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_electionTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_ElectionTerm_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_electionElectionOpenedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_electionElectionOpenedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Election_ElectionOpenedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Election_ElectionOpenedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_electionElectionCompletedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_electionElectionCompletedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Election_ElectionCompletedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Election_ElectionCompletedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_electionNewTermStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_electionNewTermStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Election_NewTermStartedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Election_NewTermStartedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_electionRecalledEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_electionRecalledEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Election_RecalledEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Election_RecalledEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_passthroughModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_passthroughModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_PassthroughModule_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_stakingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_stakingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_StakingEligibility_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_stakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_stakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Stake_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Stake_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_stakingStakedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_stakingStakedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Staking_StakedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Staking_StakedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_stakingUnstakeBegunEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_stakingUnstakeBegunEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Staking_UnstakeBegunEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Staking_UnstakeBegunEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_stakingSlashedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_stakingSlashedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Staking_SlashedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Staking_SlashedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_stakingMinStakeChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_stakingMinStakeChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Staking_MinStakeChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Staking_MinStakeChangedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_stakingJudgeHatChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_stakingJudgeHatChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Staking_JudgeHatChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Staking_JudgeHatChangedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_stakingRecipientHatChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_stakingRecipientHatChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Staking_RecipientHatChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Staking_RecipientHatChangedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_stakingCooldownPeriodChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_stakingCooldownPeriodChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Staking_CooldownPeriodChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Staking_CooldownPeriodChangedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_stakingForgivenEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_stakingForgivenEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Staking_ForgivenEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Staking_ForgivenEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_seasonToggleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_seasonTogglesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_SeasonToggle_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_characterSheetsLevelEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_characterSheetsLevelEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_CharacterSheetsLevelEligibility_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_agreementEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_agreementEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_AgreementEligibility_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_agreementArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_agreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Agreement_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Agreement_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_agreementHatClaimedWithAgreementEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_agreementHatClaimedWithAgreementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Agreement_HatClaimedWithAgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Agreement_HatClaimedWithAgreementEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_agreementAgreementSignedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_agreementAgreementSignedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Agreement_AgreementSignedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Agreement_AgreementSignedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_agreementAgreementSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_agreementAgreementSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Agreement_AgreementSetEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Agreement_AgreementSetEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_agreementOwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_agreementOwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Agreement_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Agreement_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_agreementArbitratorHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_agreementArbitratorHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Agreement_ArbitratorHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Agreement_ArbitratorHatSetEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_erc20EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_erc20EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Erc20Eligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Erc20Eligibility_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_erc721EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_erc721EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Erc721Eligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Erc721Eligibility_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_erc1155EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_erc1155EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Erc1155Eligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Erc1155Eligibility_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatWearingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatWearingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatWearingEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatWearingEligibility_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_gitcoinPassportEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_gitcoinPassportEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_GitcoinPassportEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_GitcoinPassportEligibility_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_coLinksEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_coLinksEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_CoLinksEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_CoLinksEligibility_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatControlledModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatControlledModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatControlledModule_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatControlledModule_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatControlledModuleWearerStatusArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatControlledModuleWearerStatusesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatControlledModuleWearerStatus_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatControlledModuleWearerStatus_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatControlledModuleHatStatusArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatControlledModuleHatStatusesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatControlledModuleHatStatus_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatControlledModuleHatStatus_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatControlledWearerStatusSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatControlledWearerStatusSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatControlled_WearerStatusSet_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatControlled_WearerStatusSet_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatControlledHatStatusSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatControlledHatStatusSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatControlled_HatStatusSet_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatControlled_HatStatusSet_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_publicLockV14EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_publicLockV14EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_PublicLockV14Eligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_PublicLockV14Eligibility_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatsEligibilitiesChainArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatsEligibilitiesChainsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsEligibilitiesChain_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsEligibilitiesChain_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_eligibilitiesRulesetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_eligibilitiesRulesetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_EligibilitiesRuleset_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_EligibilitiesRuleset_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatsModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatsModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsModule_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsModule_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatsModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatsModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsModuleEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_jokeRaceEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_jokeRaceEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_JokeRaceEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_JokeRaceEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_allowlistEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_allowlistEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_AllowlistEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_AllowlistEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_electionEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_electionEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_ElectionEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_ElectionEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_stakingEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_stakingEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_StakingEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_StakingEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_agreementEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_agreementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_AgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_AgreementEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatControlledModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp_hatControlledModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatControlledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatControlledModuleEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type QueryOp__metaArgs = {
  block?: InputMaybe<Op_Block_height>;
};

/**  Season Toggle  */
export type Op_SeasonToggle = Op_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  hatAdmins: Array<Op_HatAuthority>;
};


/**  Season Toggle  */
export type Op_SeasonTogglehatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatAuthority_filter>;
};

export type Op_SeasonToggle_filter = {
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
  hatAdmins_?: InputMaybe<Op_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_SeasonToggle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_SeasonToggle_filter>>>;
};

export type Op_SeasonToggle_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'hatAdmins';

export type Op_ShamanStake = {
  id: Scalars['ID']['output'];
  stakingShaman: Op_HatsStakingShaman;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  unstakingAmount: Scalars['BigInt']['output'];
  canUnstakeAfter: Scalars['BigInt']['output'];
};

export type Op_ShamanStake_filter = {
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
  stakingShaman_?: InputMaybe<Op_HatsStakingShaman_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_ShamanStake_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_ShamanStake_filter>>>;
};

export type Op_ShamanStake_orderBy =
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

export type Op_Stake = {
  id: Scalars['ID']['output'];
  stakingEligiblity: Op_StakingEligibility;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  slashed: Scalars['Boolean']['output'];
  cooldownAmount: Scalars['BigInt']['output'];
  cooldownEndsAt: Scalars['BigInt']['output'];
};

export type Op_Stake_filter = {
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
  stakingEligiblity_?: InputMaybe<Op_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Stake_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Stake_filter>>>;
};

export type Op_Stake_orderBy =
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
export type Op_StakingEligibility = Op_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  token: Scalars['String']['output'];
  judgeHat: Op_HatAuthority;
  recipientHat: Op_HatAuthority;
  hatAdmins: Array<Op_HatAuthority>;
  minStake: Scalars['BigInt']['output'];
  cooldownPeriod: Scalars['BigInt']['output'];
  totalSlashedStakes: Scalars['BigInt']['output'];
  stakes: Array<Op_Stake>;
  events: Array<Op_StakingEvent>;
};


/**  Staking Eligibility  */
export type Op_StakingEligibilityhatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatAuthority_filter>;
};


/**  Staking Eligibility  */
export type Op_StakingEligibilitystakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Stake_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Stake_filter>;
};


/**  Staking Eligibility  */
export type Op_StakingEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_StakingEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_StakingEvent_filter>;
};

export type Op_StakingEligibility_filter = {
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
  judgeHat_?: InputMaybe<Op_HatAuthority_filter>;
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
  recipientHat_?: InputMaybe<Op_HatAuthority_filter>;
  hatAdmins?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_?: InputMaybe<Op_HatAuthority_filter>;
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
  stakes_?: InputMaybe<Op_Stake_filter>;
  events_?: InputMaybe<Op_StakingEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_StakingEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_StakingEligibility_filter>>>;
};

export type Op_StakingEligibility_orderBy =
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

export type Op_StakingEvent = {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  stakingEligibilityInstance: Op_StakingEligibility;
};

export type Op_StakingEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  stakingEligibilityInstance_?: InputMaybe<Op_StakingEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_StakingEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_StakingEvent_filter>>>;
};

export type Op_StakingEvent_orderBy =
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

export type Op_Staking_CooldownPeriodChangedEvent = Op_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  stakingEligibilityInstance: Op_StakingEligibility;
  newDelay: Scalars['BigInt']['output'];
};

export type Op_Staking_CooldownPeriodChangedEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  stakingEligibilityInstance_?: InputMaybe<Op_StakingEligibility_filter>;
  newDelay?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_not?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newDelay_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Staking_CooldownPeriodChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Staking_CooldownPeriodChangedEvent_filter>>>;
};

export type Op_Staking_CooldownPeriodChangedEvent_orderBy =
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

export type Op_Staking_ForgivenEvent = Op_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  stakingEligibilityInstance: Op_StakingEligibility;
  staker: Scalars['String']['output'];
};

export type Op_Staking_ForgivenEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  stakingEligibilityInstance_?: InputMaybe<Op_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Staking_ForgivenEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Staking_ForgivenEvent_filter>>>;
};

export type Op_Staking_ForgivenEvent_orderBy =
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

export type Op_Staking_JudgeHatChangedEvent = Op_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  stakingEligibilityInstance: Op_StakingEligibility;
  newJudgeHat: Scalars['String']['output'];
};

export type Op_Staking_JudgeHatChangedEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  stakingEligibilityInstance_?: InputMaybe<Op_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Staking_JudgeHatChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Staking_JudgeHatChangedEvent_filter>>>;
};

export type Op_Staking_JudgeHatChangedEvent_orderBy =
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

export type Op_Staking_MinStakeChangedEvent = Op_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  stakingEligibilityInstance: Op_StakingEligibility;
  newMinStake: Scalars['BigInt']['output'];
};

export type Op_Staking_MinStakeChangedEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  stakingEligibilityInstance_?: InputMaybe<Op_StakingEligibility_filter>;
  newMinStake?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_not?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newMinStake_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Staking_MinStakeChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Staking_MinStakeChangedEvent_filter>>>;
};

export type Op_Staking_MinStakeChangedEvent_orderBy =
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

export type Op_Staking_RecipientHatChangedEvent = Op_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  stakingEligibilityInstance: Op_StakingEligibility;
  newRecipientHat: Scalars['String']['output'];
};

export type Op_Staking_RecipientHatChangedEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  stakingEligibilityInstance_?: InputMaybe<Op_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Staking_RecipientHatChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Staking_RecipientHatChangedEvent_filter>>>;
};

export type Op_Staking_RecipientHatChangedEvent_orderBy =
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

export type Op_Staking_SlashedEvent = Op_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  stakingEligibilityInstance: Op_StakingEligibility;
  wearer: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
};

export type Op_Staking_SlashedEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  stakingEligibilityInstance_?: InputMaybe<Op_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Staking_SlashedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Staking_SlashedEvent_filter>>>;
};

export type Op_Staking_SlashedEvent_orderBy =
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

export type Op_Staking_StakedEvent = Op_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  stakingEligibilityInstance: Op_StakingEligibility;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
};

export type Op_Staking_StakedEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  stakingEligibilityInstance_?: InputMaybe<Op_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Staking_StakedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Staking_StakedEvent_filter>>>;
};

export type Op_Staking_StakedEvent_orderBy =
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

export type Op_Staking_UnstakeBegunEvent = Op_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Op_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Op_Bytes']['output'];
  stakingEligibilityInstance: Op_StakingEligibility;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  cooldownEnd: Scalars['BigInt']['output'];
};

export type Op_Staking_UnstakeBegunEvent_filter = {
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
  module_?: InputMaybe<Op_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionID?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Op_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Op_Bytes']['input']>;
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
  stakingEligibilityInstance_?: InputMaybe<Op_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_Staking_UnstakeBegunEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_Staking_UnstakeBegunEvent_filter>>>;
};

export type Op_Staking_UnstakeBegunEvent_orderBy =
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
  Op_hatAuthority?: Maybe<Op_HatAuthority>;
  Op_hatAuthorities: Array<Op_HatAuthority>;
  Op_hatsSignerGate?: Maybe<Op_HatsSignerGate>;
  Op_hatsSignerGates: Array<Op_HatsSignerGate>;
  Op_hatsAccount1OfN?: Maybe<Op_HatsAccount1ofN>;
  Op_hatsAccount1OfNs: Array<Op_HatsAccount1ofN>;
  Op_hatsAccount1OfNOperation?: Maybe<Op_HatsAccount1ofNOperation>;
  Op_hatsAccount1OfNOperations: Array<Op_HatsAccount1ofNOperation>;
  Op_hatsStakingShaman?: Maybe<Op_HatsStakingShaman>;
  Op_hatsStakingShamans: Array<Op_HatsStakingShaman>;
  Op_shamanStake?: Maybe<Op_ShamanStake>;
  Op_shamanStakes: Array<Op_ShamanStake>;
  Op_hatsFarcasterDelegator?: Maybe<Op_HatsFarcasterDelegator>;
  Op_hatsFarcasterDelegators: Array<Op_HatsFarcasterDelegator>;
  Op_jokeRaceEligibility?: Maybe<Op_JokeRaceEligibility>;
  Op_jokeRaceEligibilities: Array<Op_JokeRaceEligibility>;
  Op_jokeRaceEligibilityTerm?: Maybe<Op_JokeRaceEligibilityTerm>;
  Op_jokeRaceEligibilityTerms: Array<Op_JokeRaceEligibilityTerm>;
  Op_jokeRaceNextTermSetEvent?: Maybe<Op_JokeRace_NextTermSetEvent>;
  Op_jokeRaceNextTermSetEvents: Array<Op_JokeRace_NextTermSetEvent>;
  Op_jokeRaceTermStartedEvent?: Maybe<Op_JokeRace_TermStartedEvent>;
  Op_jokeRaceTermStartedEvents: Array<Op_JokeRace_TermStartedEvent>;
  Op_allowListEligibility?: Maybe<Op_AllowListEligibility>;
  Op_allowListEligibilities: Array<Op_AllowListEligibility>;
  Op_allowListEligibilityData?: Maybe<Op_AllowListEligibilityData>;
  Op_allowListEligibilityDatas: Array<Op_AllowListEligibilityData>;
  Op_allowlistAccountAddedEvent?: Maybe<Op_Allowlist_AccountAddedEvent>;
  Op_allowlistAccountAddedEvents: Array<Op_Allowlist_AccountAddedEvent>;
  Op_allowlistAccountsAddedEvent?: Maybe<Op_Allowlist_AccountsAddedEvent>;
  Op_allowlistAccountsAddedEvents: Array<Op_Allowlist_AccountsAddedEvent>;
  Op_allowlistAccountRemovedEvent?: Maybe<Op_Allowlist_AccountRemovedEvent>;
  Op_allowlistAccountRemovedEvents: Array<Op_Allowlist_AccountRemovedEvent>;
  Op_allowlistAccountsRemovedEvent?: Maybe<Op_Allowlist_AccountsRemovedEvent>;
  Op_allowlistAccountsRemovedEvents: Array<Op_Allowlist_AccountsRemovedEvent>;
  Op_allowlistAccountStandingChangedEvent?: Maybe<Op_Allowlist_AccountStandingChangedEvent>;
  Op_allowlistAccountStandingChangedEvents: Array<Op_Allowlist_AccountStandingChangedEvent>;
  Op_allowlistAccountsStandingChangedEvent?: Maybe<Op_Allowlist_AccountsStandingChangedEvent>;
  Op_allowlistAccountsStandingChangedEvents: Array<Op_Allowlist_AccountsStandingChangedEvent>;
  Op_allowlistOwnerHatSetEvent?: Maybe<Op_Allowlist_OwnerHatSetEvent>;
  Op_allowlistOwnerHatSetEvents: Array<Op_Allowlist_OwnerHatSetEvent>;
  Op_allowlistArbitratorHatSetEvent?: Maybe<Op_Allowlist_ArbitratorHatSetEvent>;
  Op_allowlistArbitratorHatSetEvents: Array<Op_Allowlist_ArbitratorHatSetEvent>;
  Op_hatsElectionEligibility?: Maybe<Op_HatsElectionEligibility>;
  Op_hatsElectionEligibilities: Array<Op_HatsElectionEligibility>;
  Op_electionTerm?: Maybe<Op_ElectionTerm>;
  Op_electionTerms: Array<Op_ElectionTerm>;
  Op_electionElectionOpenedEvent?: Maybe<Op_Election_ElectionOpenedEvent>;
  Op_electionElectionOpenedEvents: Array<Op_Election_ElectionOpenedEvent>;
  Op_electionElectionCompletedEvent?: Maybe<Op_Election_ElectionCompletedEvent>;
  Op_electionElectionCompletedEvents: Array<Op_Election_ElectionCompletedEvent>;
  Op_electionNewTermStartedEvent?: Maybe<Op_Election_NewTermStartedEvent>;
  Op_electionNewTermStartedEvents: Array<Op_Election_NewTermStartedEvent>;
  Op_electionRecalledEvent?: Maybe<Op_Election_RecalledEvent>;
  Op_electionRecalledEvents: Array<Op_Election_RecalledEvent>;
  Op_passthroughModule?: Maybe<Op_PassthroughModule>;
  Op_passthroughModules: Array<Op_PassthroughModule>;
  Op_stakingEligibility?: Maybe<Op_StakingEligibility>;
  Op_stakingEligibilities: Array<Op_StakingEligibility>;
  Op_stake?: Maybe<Op_Stake>;
  Op_stakes: Array<Op_Stake>;
  Op_stakingStakedEvent?: Maybe<Op_Staking_StakedEvent>;
  Op_stakingStakedEvents: Array<Op_Staking_StakedEvent>;
  Op_stakingUnstakeBegunEvent?: Maybe<Op_Staking_UnstakeBegunEvent>;
  Op_stakingUnstakeBegunEvents: Array<Op_Staking_UnstakeBegunEvent>;
  Op_stakingSlashedEvent?: Maybe<Op_Staking_SlashedEvent>;
  Op_stakingSlashedEvents: Array<Op_Staking_SlashedEvent>;
  Op_stakingMinStakeChangedEvent?: Maybe<Op_Staking_MinStakeChangedEvent>;
  Op_stakingMinStakeChangedEvents: Array<Op_Staking_MinStakeChangedEvent>;
  Op_stakingJudgeHatChangedEvent?: Maybe<Op_Staking_JudgeHatChangedEvent>;
  Op_stakingJudgeHatChangedEvents: Array<Op_Staking_JudgeHatChangedEvent>;
  Op_stakingRecipientHatChangedEvent?: Maybe<Op_Staking_RecipientHatChangedEvent>;
  Op_stakingRecipientHatChangedEvents: Array<Op_Staking_RecipientHatChangedEvent>;
  Op_stakingCooldownPeriodChangedEvent?: Maybe<Op_Staking_CooldownPeriodChangedEvent>;
  Op_stakingCooldownPeriodChangedEvents: Array<Op_Staking_CooldownPeriodChangedEvent>;
  Op_stakingForgivenEvent?: Maybe<Op_Staking_ForgivenEvent>;
  Op_stakingForgivenEvents: Array<Op_Staking_ForgivenEvent>;
  Op_seasonToggle?: Maybe<Op_SeasonToggle>;
  Op_seasonToggles: Array<Op_SeasonToggle>;
  Op_characterSheetsLevelEligibility?: Maybe<Op_CharacterSheetsLevelEligibility>;
  Op_characterSheetsLevelEligibilities: Array<Op_CharacterSheetsLevelEligibility>;
  Op_agreementEligibility?: Maybe<Op_AgreementEligibility>;
  Op_agreementEligibilities: Array<Op_AgreementEligibility>;
  Op_agreement?: Maybe<Op_Agreement>;
  Op_agreements: Array<Op_Agreement>;
  Op_agreementHatClaimedWithAgreementEvent?: Maybe<Op_Agreement_HatClaimedWithAgreementEvent>;
  Op_agreementHatClaimedWithAgreementEvents: Array<Op_Agreement_HatClaimedWithAgreementEvent>;
  Op_agreementAgreementSignedEvent?: Maybe<Op_Agreement_AgreementSignedEvent>;
  Op_agreementAgreementSignedEvents: Array<Op_Agreement_AgreementSignedEvent>;
  Op_agreementAgreementSetEvent?: Maybe<Op_Agreement_AgreementSetEvent>;
  Op_agreementAgreementSetEvents: Array<Op_Agreement_AgreementSetEvent>;
  Op_agreementOwnerHatSetEvent?: Maybe<Op_Agreement_OwnerHatSetEvent>;
  Op_agreementOwnerHatSetEvents: Array<Op_Agreement_OwnerHatSetEvent>;
  Op_agreementArbitratorHatSetEvent?: Maybe<Op_Agreement_ArbitratorHatSetEvent>;
  Op_agreementArbitratorHatSetEvents: Array<Op_Agreement_ArbitratorHatSetEvent>;
  Op_erc20Eligibility?: Maybe<Op_Erc20Eligibility>;
  Op_erc20Eligibilities: Array<Op_Erc20Eligibility>;
  Op_erc721Eligibility?: Maybe<Op_Erc721Eligibility>;
  Op_erc721Eligibilities: Array<Op_Erc721Eligibility>;
  Op_erc1155Eligibility?: Maybe<Op_Erc1155Eligibility>;
  Op_erc1155Eligibilities: Array<Op_Erc1155Eligibility>;
  Op_hatWearingEligibility?: Maybe<Op_HatWearingEligibility>;
  Op_hatWearingEligibilities: Array<Op_HatWearingEligibility>;
  Op_gitcoinPassportEligibility?: Maybe<Op_GitcoinPassportEligibility>;
  Op_gitcoinPassportEligibilities: Array<Op_GitcoinPassportEligibility>;
  Op_coLinksEligibility?: Maybe<Op_CoLinksEligibility>;
  Op_coLinksEligibilities: Array<Op_CoLinksEligibility>;
  Op_hatControlledModule?: Maybe<Op_HatControlledModule>;
  Op_hatControlledModules: Array<Op_HatControlledModule>;
  Op_hatControlledModuleWearerStatus?: Maybe<Op_HatControlledModuleWearerStatus>;
  Op_hatControlledModuleWearerStatuses: Array<Op_HatControlledModuleWearerStatus>;
  Op_hatControlledModuleHatStatus?: Maybe<Op_HatControlledModuleHatStatus>;
  Op_hatControlledModuleHatStatuses: Array<Op_HatControlledModuleHatStatus>;
  Op_hatControlledWearerStatusSet?: Maybe<Op_HatControlled_WearerStatusSet>;
  Op_hatControlledWearerStatusSets: Array<Op_HatControlled_WearerStatusSet>;
  Op_hatControlledHatStatusSet?: Maybe<Op_HatControlled_HatStatusSet>;
  Op_hatControlledHatStatusSets: Array<Op_HatControlled_HatStatusSet>;
  Op_publicLockV14Eligibility?: Maybe<Op_PublicLockV14Eligibility>;
  Op_publicLockV14Eligibilities: Array<Op_PublicLockV14Eligibility>;
  Op_hatsEligibilitiesChain?: Maybe<Op_HatsEligibilitiesChain>;
  Op_hatsEligibilitiesChains: Array<Op_HatsEligibilitiesChain>;
  Op_eligibilitiesRuleset?: Maybe<Op_EligibilitiesRuleset>;
  Op_eligibilitiesRulesets: Array<Op_EligibilitiesRuleset>;
  Op_hatsModule?: Maybe<Op_HatsModule>;
  Op_hatsModules: Array<Op_HatsModule>;
  Op_hatsModuleEvent?: Maybe<Op_HatsModuleEvent>;
  Op_hatsModuleEvents: Array<Op_HatsModuleEvent>;
  Op_jokeRaceEvent?: Maybe<Op_JokeRaceEvent>;
  Op_jokeRaceEvents: Array<Op_JokeRaceEvent>;
  Op_allowlistEvent?: Maybe<Op_AllowlistEvent>;
  Op_allowlistEvents: Array<Op_AllowlistEvent>;
  Op_electionEvent?: Maybe<Op_ElectionEvent>;
  Op_electionEvents: Array<Op_ElectionEvent>;
  Op_stakingEvent?: Maybe<Op_StakingEvent>;
  Op_stakingEvents: Array<Op_StakingEvent>;
  Op_agreementEvent?: Maybe<Op_AgreementEvent>;
  Op_agreementEvents: Array<Op_AgreementEvent>;
  Op_hatControlledModuleEvent?: Maybe<Op_HatControlledModuleEvent>;
  Op_hatControlledModuleEvents: Array<Op_HatControlledModuleEvent>;
  /** Access to subgraph metadata */
  Op__meta?: Maybe<Op__Meta_>;
};


export type SubscriptionOp_hatAuthorityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatAuthoritiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatAuthority_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatsSignerGateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatsSignerGatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsSignerGate_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatsAccount1OfNArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatsAccount1OfNsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsAccount1ofN_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatsAccount1OfNOperationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatsAccount1OfNOperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsAccount1ofNOperation_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatsStakingShamanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatsStakingShamansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsStakingShaman_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsStakingShaman_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_shamanStakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_shamanStakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_ShamanStake_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_ShamanStake_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatsFarcasterDelegatorArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatsFarcasterDelegatorsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsFarcasterDelegator_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_jokeRaceEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_jokeRaceEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_JokeRaceEligibility_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_jokeRaceEligibilityTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_jokeRaceEligibilityTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_JokeRaceEligibilityTerm_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_JokeRaceEligibilityTerm_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_jokeRaceNextTermSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_jokeRaceNextTermSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_JokeRace_NextTermSetEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_JokeRace_NextTermSetEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_jokeRaceTermStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_jokeRaceTermStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_JokeRace_TermStartedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_JokeRace_TermStartedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_allowListEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_allowListEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_AllowListEligibility_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_allowListEligibilityDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_allowListEligibilityDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_AllowListEligibilityData_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_AllowListEligibilityData_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_allowlistAccountAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_allowlistAccountAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Allowlist_AccountAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Allowlist_AccountAddedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_allowlistAccountsAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_allowlistAccountsAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Allowlist_AccountsAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Allowlist_AccountsAddedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_allowlistAccountRemovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_allowlistAccountRemovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Allowlist_AccountRemovedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Allowlist_AccountRemovedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_allowlistAccountsRemovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_allowlistAccountsRemovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Allowlist_AccountsRemovedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Allowlist_AccountsRemovedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_allowlistAccountStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_allowlistAccountStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Allowlist_AccountStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Allowlist_AccountStandingChangedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_allowlistAccountsStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_allowlistAccountsStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Allowlist_AccountsStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Allowlist_AccountsStandingChangedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_allowlistOwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_allowlistOwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Allowlist_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Allowlist_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_allowlistArbitratorHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_allowlistArbitratorHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Allowlist_ArbitratorHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Allowlist_ArbitratorHatSetEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatsElectionEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatsElectionEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsElectionEligibility_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_electionTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_electionTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_ElectionTerm_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_electionElectionOpenedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_electionElectionOpenedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Election_ElectionOpenedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Election_ElectionOpenedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_electionElectionCompletedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_electionElectionCompletedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Election_ElectionCompletedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Election_ElectionCompletedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_electionNewTermStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_electionNewTermStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Election_NewTermStartedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Election_NewTermStartedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_electionRecalledEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_electionRecalledEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Election_RecalledEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Election_RecalledEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_passthroughModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_passthroughModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_PassthroughModule_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_stakingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_stakingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_StakingEligibility_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_stakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_stakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Stake_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Stake_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_stakingStakedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_stakingStakedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Staking_StakedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Staking_StakedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_stakingUnstakeBegunEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_stakingUnstakeBegunEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Staking_UnstakeBegunEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Staking_UnstakeBegunEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_stakingSlashedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_stakingSlashedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Staking_SlashedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Staking_SlashedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_stakingMinStakeChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_stakingMinStakeChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Staking_MinStakeChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Staking_MinStakeChangedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_stakingJudgeHatChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_stakingJudgeHatChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Staking_JudgeHatChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Staking_JudgeHatChangedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_stakingRecipientHatChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_stakingRecipientHatChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Staking_RecipientHatChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Staking_RecipientHatChangedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_stakingCooldownPeriodChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_stakingCooldownPeriodChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Staking_CooldownPeriodChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Staking_CooldownPeriodChangedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_stakingForgivenEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_stakingForgivenEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Staking_ForgivenEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Staking_ForgivenEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_seasonToggleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_seasonTogglesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_SeasonToggle_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_characterSheetsLevelEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_characterSheetsLevelEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_CharacterSheetsLevelEligibility_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_agreementEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_agreementEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_AgreementEligibility_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_agreementArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_agreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Agreement_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Agreement_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_agreementHatClaimedWithAgreementEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_agreementHatClaimedWithAgreementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Agreement_HatClaimedWithAgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Agreement_HatClaimedWithAgreementEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_agreementAgreementSignedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_agreementAgreementSignedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Agreement_AgreementSignedEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Agreement_AgreementSignedEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_agreementAgreementSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_agreementAgreementSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Agreement_AgreementSetEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Agreement_AgreementSetEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_agreementOwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_agreementOwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Agreement_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Agreement_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_agreementArbitratorHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_agreementArbitratorHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Agreement_ArbitratorHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Agreement_ArbitratorHatSetEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_erc20EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_erc20EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Erc20Eligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Erc20Eligibility_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_erc721EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_erc721EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Erc721Eligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Erc721Eligibility_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_erc1155EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_erc1155EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Erc1155Eligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Erc1155Eligibility_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatWearingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatWearingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatWearingEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatWearingEligibility_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_gitcoinPassportEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_gitcoinPassportEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_GitcoinPassportEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_GitcoinPassportEligibility_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_coLinksEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_coLinksEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_CoLinksEligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_CoLinksEligibility_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatControlledModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatControlledModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatControlledModule_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatControlledModule_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatControlledModuleWearerStatusArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatControlledModuleWearerStatusesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatControlledModuleWearerStatus_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatControlledModuleWearerStatus_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatControlledModuleHatStatusArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatControlledModuleHatStatusesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatControlledModuleHatStatus_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatControlledModuleHatStatus_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatControlledWearerStatusSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatControlledWearerStatusSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatControlled_WearerStatusSet_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatControlled_WearerStatusSet_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatControlledHatStatusSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatControlledHatStatusSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatControlled_HatStatusSet_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatControlled_HatStatusSet_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_publicLockV14EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_publicLockV14EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_PublicLockV14Eligibility_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_PublicLockV14Eligibility_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatsEligibilitiesChainArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatsEligibilitiesChainsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsEligibilitiesChain_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsEligibilitiesChain_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_eligibilitiesRulesetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_eligibilitiesRulesetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_EligibilitiesRuleset_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_EligibilitiesRuleset_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatsModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatsModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsModule_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsModule_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatsModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatsModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatsModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatsModuleEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_jokeRaceEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_jokeRaceEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_JokeRaceEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_JokeRaceEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_allowlistEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_allowlistEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_AllowlistEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_AllowlistEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_electionEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_electionEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_ElectionEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_ElectionEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_stakingEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_stakingEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_StakingEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_StakingEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_agreementEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_agreementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_AgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_AgreementEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatControlledModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp_hatControlledModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatControlledModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatControlledModuleEvent_filter>;
  block?: InputMaybe<Op_Block_height>;
  subgraphError?: Op__SubgraphErrorPolicy_;
};


export type SubscriptionOp__metaArgs = {
  block?: InputMaybe<Op_Block_height>;
};

export type Op__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Op_Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Op_Bytes']['output']>;
};

/** The type for the top-level _meta field */
export type Op__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: Op__Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type Op__SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  Op_hatAuthority: InContextSdkMethod<Query['Op_hatAuthority'], QueryOp_hatAuthorityArgs, MeshContext>,
  /** null **/
  Op_hatAuthorities: InContextSdkMethod<Query['Op_hatAuthorities'], QueryOp_hatAuthoritiesArgs, MeshContext>,
  /** null **/
  Op_hatsSignerGate: InContextSdkMethod<Query['Op_hatsSignerGate'], QueryOp_hatsSignerGateArgs, MeshContext>,
  /** null **/
  Op_hatsSignerGates: InContextSdkMethod<Query['Op_hatsSignerGates'], QueryOp_hatsSignerGatesArgs, MeshContext>,
  /** null **/
  Op_hatsAccount1OfN: InContextSdkMethod<Query['Op_hatsAccount1OfN'], QueryOp_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  Op_hatsAccount1OfNs: InContextSdkMethod<Query['Op_hatsAccount1OfNs'], QueryOp_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  Op_hatsAccount1OfNOperation: InContextSdkMethod<Query['Op_hatsAccount1OfNOperation'], QueryOp_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  Op_hatsAccount1OfNOperations: InContextSdkMethod<Query['Op_hatsAccount1OfNOperations'], QueryOp_hatsAccount1OfNOperationsArgs, MeshContext>,
  /** null **/
  Op_hatsStakingShaman: InContextSdkMethod<Query['Op_hatsStakingShaman'], QueryOp_hatsStakingShamanArgs, MeshContext>,
  /** null **/
  Op_hatsStakingShamans: InContextSdkMethod<Query['Op_hatsStakingShamans'], QueryOp_hatsStakingShamansArgs, MeshContext>,
  /** null **/
  Op_shamanStake: InContextSdkMethod<Query['Op_shamanStake'], QueryOp_shamanStakeArgs, MeshContext>,
  /** null **/
  Op_shamanStakes: InContextSdkMethod<Query['Op_shamanStakes'], QueryOp_shamanStakesArgs, MeshContext>,
  /** null **/
  Op_hatsFarcasterDelegator: InContextSdkMethod<Query['Op_hatsFarcasterDelegator'], QueryOp_hatsFarcasterDelegatorArgs, MeshContext>,
  /** null **/
  Op_hatsFarcasterDelegators: InContextSdkMethod<Query['Op_hatsFarcasterDelegators'], QueryOp_hatsFarcasterDelegatorsArgs, MeshContext>,
  /** null **/
  Op_jokeRaceEligibility: InContextSdkMethod<Query['Op_jokeRaceEligibility'], QueryOp_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  Op_jokeRaceEligibilities: InContextSdkMethod<Query['Op_jokeRaceEligibilities'], QueryOp_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  Op_jokeRaceEligibilityTerm: InContextSdkMethod<Query['Op_jokeRaceEligibilityTerm'], QueryOp_jokeRaceEligibilityTermArgs, MeshContext>,
  /** null **/
  Op_jokeRaceEligibilityTerms: InContextSdkMethod<Query['Op_jokeRaceEligibilityTerms'], QueryOp_jokeRaceEligibilityTermsArgs, MeshContext>,
  /** null **/
  Op_jokeRaceNextTermSetEvent: InContextSdkMethod<Query['Op_jokeRaceNextTermSetEvent'], QueryOp_jokeRaceNextTermSetEventArgs, MeshContext>,
  /** null **/
  Op_jokeRaceNextTermSetEvents: InContextSdkMethod<Query['Op_jokeRaceNextTermSetEvents'], QueryOp_jokeRaceNextTermSetEventsArgs, MeshContext>,
  /** null **/
  Op_jokeRaceTermStartedEvent: InContextSdkMethod<Query['Op_jokeRaceTermStartedEvent'], QueryOp_jokeRaceTermStartedEventArgs, MeshContext>,
  /** null **/
  Op_jokeRaceTermStartedEvents: InContextSdkMethod<Query['Op_jokeRaceTermStartedEvents'], QueryOp_jokeRaceTermStartedEventsArgs, MeshContext>,
  /** null **/
  Op_allowListEligibility: InContextSdkMethod<Query['Op_allowListEligibility'], QueryOp_allowListEligibilityArgs, MeshContext>,
  /** null **/
  Op_allowListEligibilities: InContextSdkMethod<Query['Op_allowListEligibilities'], QueryOp_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  Op_allowListEligibilityData: InContextSdkMethod<Query['Op_allowListEligibilityData'], QueryOp_allowListEligibilityDataArgs, MeshContext>,
  /** null **/
  Op_allowListEligibilityDatas: InContextSdkMethod<Query['Op_allowListEligibilityDatas'], QueryOp_allowListEligibilityDatasArgs, MeshContext>,
  /** null **/
  Op_allowlistAccountAddedEvent: InContextSdkMethod<Query['Op_allowlistAccountAddedEvent'], QueryOp_allowlistAccountAddedEventArgs, MeshContext>,
  /** null **/
  Op_allowlistAccountAddedEvents: InContextSdkMethod<Query['Op_allowlistAccountAddedEvents'], QueryOp_allowlistAccountAddedEventsArgs, MeshContext>,
  /** null **/
  Op_allowlistAccountsAddedEvent: InContextSdkMethod<Query['Op_allowlistAccountsAddedEvent'], QueryOp_allowlistAccountsAddedEventArgs, MeshContext>,
  /** null **/
  Op_allowlistAccountsAddedEvents: InContextSdkMethod<Query['Op_allowlistAccountsAddedEvents'], QueryOp_allowlistAccountsAddedEventsArgs, MeshContext>,
  /** null **/
  Op_allowlistAccountRemovedEvent: InContextSdkMethod<Query['Op_allowlistAccountRemovedEvent'], QueryOp_allowlistAccountRemovedEventArgs, MeshContext>,
  /** null **/
  Op_allowlistAccountRemovedEvents: InContextSdkMethod<Query['Op_allowlistAccountRemovedEvents'], QueryOp_allowlistAccountRemovedEventsArgs, MeshContext>,
  /** null **/
  Op_allowlistAccountsRemovedEvent: InContextSdkMethod<Query['Op_allowlistAccountsRemovedEvent'], QueryOp_allowlistAccountsRemovedEventArgs, MeshContext>,
  /** null **/
  Op_allowlistAccountsRemovedEvents: InContextSdkMethod<Query['Op_allowlistAccountsRemovedEvents'], QueryOp_allowlistAccountsRemovedEventsArgs, MeshContext>,
  /** null **/
  Op_allowlistAccountStandingChangedEvent: InContextSdkMethod<Query['Op_allowlistAccountStandingChangedEvent'], QueryOp_allowlistAccountStandingChangedEventArgs, MeshContext>,
  /** null **/
  Op_allowlistAccountStandingChangedEvents: InContextSdkMethod<Query['Op_allowlistAccountStandingChangedEvents'], QueryOp_allowlistAccountStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Op_allowlistAccountsStandingChangedEvent: InContextSdkMethod<Query['Op_allowlistAccountsStandingChangedEvent'], QueryOp_allowlistAccountsStandingChangedEventArgs, MeshContext>,
  /** null **/
  Op_allowlistAccountsStandingChangedEvents: InContextSdkMethod<Query['Op_allowlistAccountsStandingChangedEvents'], QueryOp_allowlistAccountsStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Op_allowlistOwnerHatSetEvent: InContextSdkMethod<Query['Op_allowlistOwnerHatSetEvent'], QueryOp_allowlistOwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Op_allowlistOwnerHatSetEvents: InContextSdkMethod<Query['Op_allowlistOwnerHatSetEvents'], QueryOp_allowlistOwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Op_allowlistArbitratorHatSetEvent: InContextSdkMethod<Query['Op_allowlistArbitratorHatSetEvent'], QueryOp_allowlistArbitratorHatSetEventArgs, MeshContext>,
  /** null **/
  Op_allowlistArbitratorHatSetEvents: InContextSdkMethod<Query['Op_allowlistArbitratorHatSetEvents'], QueryOp_allowlistArbitratorHatSetEventsArgs, MeshContext>,
  /** null **/
  Op_hatsElectionEligibility: InContextSdkMethod<Query['Op_hatsElectionEligibility'], QueryOp_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  Op_hatsElectionEligibilities: InContextSdkMethod<Query['Op_hatsElectionEligibilities'], QueryOp_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  Op_electionTerm: InContextSdkMethod<Query['Op_electionTerm'], QueryOp_electionTermArgs, MeshContext>,
  /** null **/
  Op_electionTerms: InContextSdkMethod<Query['Op_electionTerms'], QueryOp_electionTermsArgs, MeshContext>,
  /** null **/
  Op_electionElectionOpenedEvent: InContextSdkMethod<Query['Op_electionElectionOpenedEvent'], QueryOp_electionElectionOpenedEventArgs, MeshContext>,
  /** null **/
  Op_electionElectionOpenedEvents: InContextSdkMethod<Query['Op_electionElectionOpenedEvents'], QueryOp_electionElectionOpenedEventsArgs, MeshContext>,
  /** null **/
  Op_electionElectionCompletedEvent: InContextSdkMethod<Query['Op_electionElectionCompletedEvent'], QueryOp_electionElectionCompletedEventArgs, MeshContext>,
  /** null **/
  Op_electionElectionCompletedEvents: InContextSdkMethod<Query['Op_electionElectionCompletedEvents'], QueryOp_electionElectionCompletedEventsArgs, MeshContext>,
  /** null **/
  Op_electionNewTermStartedEvent: InContextSdkMethod<Query['Op_electionNewTermStartedEvent'], QueryOp_electionNewTermStartedEventArgs, MeshContext>,
  /** null **/
  Op_electionNewTermStartedEvents: InContextSdkMethod<Query['Op_electionNewTermStartedEvents'], QueryOp_electionNewTermStartedEventsArgs, MeshContext>,
  /** null **/
  Op_electionRecalledEvent: InContextSdkMethod<Query['Op_electionRecalledEvent'], QueryOp_electionRecalledEventArgs, MeshContext>,
  /** null **/
  Op_electionRecalledEvents: InContextSdkMethod<Query['Op_electionRecalledEvents'], QueryOp_electionRecalledEventsArgs, MeshContext>,
  /** null **/
  Op_passthroughModule: InContextSdkMethod<Query['Op_passthroughModule'], QueryOp_passthroughModuleArgs, MeshContext>,
  /** null **/
  Op_passthroughModules: InContextSdkMethod<Query['Op_passthroughModules'], QueryOp_passthroughModulesArgs, MeshContext>,
  /** null **/
  Op_stakingEligibility: InContextSdkMethod<Query['Op_stakingEligibility'], QueryOp_stakingEligibilityArgs, MeshContext>,
  /** null **/
  Op_stakingEligibilities: InContextSdkMethod<Query['Op_stakingEligibilities'], QueryOp_stakingEligibilitiesArgs, MeshContext>,
  /** null **/
  Op_stake: InContextSdkMethod<Query['Op_stake'], QueryOp_stakeArgs, MeshContext>,
  /** null **/
  Op_stakes: InContextSdkMethod<Query['Op_stakes'], QueryOp_stakesArgs, MeshContext>,
  /** null **/
  Op_stakingStakedEvent: InContextSdkMethod<Query['Op_stakingStakedEvent'], QueryOp_stakingStakedEventArgs, MeshContext>,
  /** null **/
  Op_stakingStakedEvents: InContextSdkMethod<Query['Op_stakingStakedEvents'], QueryOp_stakingStakedEventsArgs, MeshContext>,
  /** null **/
  Op_stakingUnstakeBegunEvent: InContextSdkMethod<Query['Op_stakingUnstakeBegunEvent'], QueryOp_stakingUnstakeBegunEventArgs, MeshContext>,
  /** null **/
  Op_stakingUnstakeBegunEvents: InContextSdkMethod<Query['Op_stakingUnstakeBegunEvents'], QueryOp_stakingUnstakeBegunEventsArgs, MeshContext>,
  /** null **/
  Op_stakingSlashedEvent: InContextSdkMethod<Query['Op_stakingSlashedEvent'], QueryOp_stakingSlashedEventArgs, MeshContext>,
  /** null **/
  Op_stakingSlashedEvents: InContextSdkMethod<Query['Op_stakingSlashedEvents'], QueryOp_stakingSlashedEventsArgs, MeshContext>,
  /** null **/
  Op_stakingMinStakeChangedEvent: InContextSdkMethod<Query['Op_stakingMinStakeChangedEvent'], QueryOp_stakingMinStakeChangedEventArgs, MeshContext>,
  /** null **/
  Op_stakingMinStakeChangedEvents: InContextSdkMethod<Query['Op_stakingMinStakeChangedEvents'], QueryOp_stakingMinStakeChangedEventsArgs, MeshContext>,
  /** null **/
  Op_stakingJudgeHatChangedEvent: InContextSdkMethod<Query['Op_stakingJudgeHatChangedEvent'], QueryOp_stakingJudgeHatChangedEventArgs, MeshContext>,
  /** null **/
  Op_stakingJudgeHatChangedEvents: InContextSdkMethod<Query['Op_stakingJudgeHatChangedEvents'], QueryOp_stakingJudgeHatChangedEventsArgs, MeshContext>,
  /** null **/
  Op_stakingRecipientHatChangedEvent: InContextSdkMethod<Query['Op_stakingRecipientHatChangedEvent'], QueryOp_stakingRecipientHatChangedEventArgs, MeshContext>,
  /** null **/
  Op_stakingRecipientHatChangedEvents: InContextSdkMethod<Query['Op_stakingRecipientHatChangedEvents'], QueryOp_stakingRecipientHatChangedEventsArgs, MeshContext>,
  /** null **/
  Op_stakingCooldownPeriodChangedEvent: InContextSdkMethod<Query['Op_stakingCooldownPeriodChangedEvent'], QueryOp_stakingCooldownPeriodChangedEventArgs, MeshContext>,
  /** null **/
  Op_stakingCooldownPeriodChangedEvents: InContextSdkMethod<Query['Op_stakingCooldownPeriodChangedEvents'], QueryOp_stakingCooldownPeriodChangedEventsArgs, MeshContext>,
  /** null **/
  Op_stakingForgivenEvent: InContextSdkMethod<Query['Op_stakingForgivenEvent'], QueryOp_stakingForgivenEventArgs, MeshContext>,
  /** null **/
  Op_stakingForgivenEvents: InContextSdkMethod<Query['Op_stakingForgivenEvents'], QueryOp_stakingForgivenEventsArgs, MeshContext>,
  /** null **/
  Op_seasonToggle: InContextSdkMethod<Query['Op_seasonToggle'], QueryOp_seasonToggleArgs, MeshContext>,
  /** null **/
  Op_seasonToggles: InContextSdkMethod<Query['Op_seasonToggles'], QueryOp_seasonTogglesArgs, MeshContext>,
  /** null **/
  Op_characterSheetsLevelEligibility: InContextSdkMethod<Query['Op_characterSheetsLevelEligibility'], QueryOp_characterSheetsLevelEligibilityArgs, MeshContext>,
  /** null **/
  Op_characterSheetsLevelEligibilities: InContextSdkMethod<Query['Op_characterSheetsLevelEligibilities'], QueryOp_characterSheetsLevelEligibilitiesArgs, MeshContext>,
  /** null **/
  Op_agreementEligibility: InContextSdkMethod<Query['Op_agreementEligibility'], QueryOp_agreementEligibilityArgs, MeshContext>,
  /** null **/
  Op_agreementEligibilities: InContextSdkMethod<Query['Op_agreementEligibilities'], QueryOp_agreementEligibilitiesArgs, MeshContext>,
  /** null **/
  Op_agreement: InContextSdkMethod<Query['Op_agreement'], QueryOp_agreementArgs, MeshContext>,
  /** null **/
  Op_agreements: InContextSdkMethod<Query['Op_agreements'], QueryOp_agreementsArgs, MeshContext>,
  /** null **/
  Op_agreementHatClaimedWithAgreementEvent: InContextSdkMethod<Query['Op_agreementHatClaimedWithAgreementEvent'], QueryOp_agreementHatClaimedWithAgreementEventArgs, MeshContext>,
  /** null **/
  Op_agreementHatClaimedWithAgreementEvents: InContextSdkMethod<Query['Op_agreementHatClaimedWithAgreementEvents'], QueryOp_agreementHatClaimedWithAgreementEventsArgs, MeshContext>,
  /** null **/
  Op_agreementAgreementSignedEvent: InContextSdkMethod<Query['Op_agreementAgreementSignedEvent'], QueryOp_agreementAgreementSignedEventArgs, MeshContext>,
  /** null **/
  Op_agreementAgreementSignedEvents: InContextSdkMethod<Query['Op_agreementAgreementSignedEvents'], QueryOp_agreementAgreementSignedEventsArgs, MeshContext>,
  /** null **/
  Op_agreementAgreementSetEvent: InContextSdkMethod<Query['Op_agreementAgreementSetEvent'], QueryOp_agreementAgreementSetEventArgs, MeshContext>,
  /** null **/
  Op_agreementAgreementSetEvents: InContextSdkMethod<Query['Op_agreementAgreementSetEvents'], QueryOp_agreementAgreementSetEventsArgs, MeshContext>,
  /** null **/
  Op_agreementOwnerHatSetEvent: InContextSdkMethod<Query['Op_agreementOwnerHatSetEvent'], QueryOp_agreementOwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Op_agreementOwnerHatSetEvents: InContextSdkMethod<Query['Op_agreementOwnerHatSetEvents'], QueryOp_agreementOwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Op_agreementArbitratorHatSetEvent: InContextSdkMethod<Query['Op_agreementArbitratorHatSetEvent'], QueryOp_agreementArbitratorHatSetEventArgs, MeshContext>,
  /** null **/
  Op_agreementArbitratorHatSetEvents: InContextSdkMethod<Query['Op_agreementArbitratorHatSetEvents'], QueryOp_agreementArbitratorHatSetEventsArgs, MeshContext>,
  /** null **/
  Op_erc20Eligibility: InContextSdkMethod<Query['Op_erc20Eligibility'], QueryOp_erc20EligibilityArgs, MeshContext>,
  /** null **/
  Op_erc20Eligibilities: InContextSdkMethod<Query['Op_erc20Eligibilities'], QueryOp_erc20EligibilitiesArgs, MeshContext>,
  /** null **/
  Op_erc721Eligibility: InContextSdkMethod<Query['Op_erc721Eligibility'], QueryOp_erc721EligibilityArgs, MeshContext>,
  /** null **/
  Op_erc721Eligibilities: InContextSdkMethod<Query['Op_erc721Eligibilities'], QueryOp_erc721EligibilitiesArgs, MeshContext>,
  /** null **/
  Op_erc1155Eligibility: InContextSdkMethod<Query['Op_erc1155Eligibility'], QueryOp_erc1155EligibilityArgs, MeshContext>,
  /** null **/
  Op_erc1155Eligibilities: InContextSdkMethod<Query['Op_erc1155Eligibilities'], QueryOp_erc1155EligibilitiesArgs, MeshContext>,
  /** null **/
  Op_hatWearingEligibility: InContextSdkMethod<Query['Op_hatWearingEligibility'], QueryOp_hatWearingEligibilityArgs, MeshContext>,
  /** null **/
  Op_hatWearingEligibilities: InContextSdkMethod<Query['Op_hatWearingEligibilities'], QueryOp_hatWearingEligibilitiesArgs, MeshContext>,
  /** null **/
  Op_gitcoinPassportEligibility: InContextSdkMethod<Query['Op_gitcoinPassportEligibility'], QueryOp_gitcoinPassportEligibilityArgs, MeshContext>,
  /** null **/
  Op_gitcoinPassportEligibilities: InContextSdkMethod<Query['Op_gitcoinPassportEligibilities'], QueryOp_gitcoinPassportEligibilitiesArgs, MeshContext>,
  /** null **/
  Op_coLinksEligibility: InContextSdkMethod<Query['Op_coLinksEligibility'], QueryOp_coLinksEligibilityArgs, MeshContext>,
  /** null **/
  Op_coLinksEligibilities: InContextSdkMethod<Query['Op_coLinksEligibilities'], QueryOp_coLinksEligibilitiesArgs, MeshContext>,
  /** null **/
  Op_hatControlledModule: InContextSdkMethod<Query['Op_hatControlledModule'], QueryOp_hatControlledModuleArgs, MeshContext>,
  /** null **/
  Op_hatControlledModules: InContextSdkMethod<Query['Op_hatControlledModules'], QueryOp_hatControlledModulesArgs, MeshContext>,
  /** null **/
  Op_hatControlledModuleWearerStatus: InContextSdkMethod<Query['Op_hatControlledModuleWearerStatus'], QueryOp_hatControlledModuleWearerStatusArgs, MeshContext>,
  /** null **/
  Op_hatControlledModuleWearerStatuses: InContextSdkMethod<Query['Op_hatControlledModuleWearerStatuses'], QueryOp_hatControlledModuleWearerStatusesArgs, MeshContext>,
  /** null **/
  Op_hatControlledModuleHatStatus: InContextSdkMethod<Query['Op_hatControlledModuleHatStatus'], QueryOp_hatControlledModuleHatStatusArgs, MeshContext>,
  /** null **/
  Op_hatControlledModuleHatStatuses: InContextSdkMethod<Query['Op_hatControlledModuleHatStatuses'], QueryOp_hatControlledModuleHatStatusesArgs, MeshContext>,
  /** null **/
  Op_hatControlledWearerStatusSet: InContextSdkMethod<Query['Op_hatControlledWearerStatusSet'], QueryOp_hatControlledWearerStatusSetArgs, MeshContext>,
  /** null **/
  Op_hatControlledWearerStatusSets: InContextSdkMethod<Query['Op_hatControlledWearerStatusSets'], QueryOp_hatControlledWearerStatusSetsArgs, MeshContext>,
  /** null **/
  Op_hatControlledHatStatusSet: InContextSdkMethod<Query['Op_hatControlledHatStatusSet'], QueryOp_hatControlledHatStatusSetArgs, MeshContext>,
  /** null **/
  Op_hatControlledHatStatusSets: InContextSdkMethod<Query['Op_hatControlledHatStatusSets'], QueryOp_hatControlledHatStatusSetsArgs, MeshContext>,
  /** null **/
  Op_publicLockV14Eligibility: InContextSdkMethod<Query['Op_publicLockV14Eligibility'], QueryOp_publicLockV14EligibilityArgs, MeshContext>,
  /** null **/
  Op_publicLockV14Eligibilities: InContextSdkMethod<Query['Op_publicLockV14Eligibilities'], QueryOp_publicLockV14EligibilitiesArgs, MeshContext>,
  /** null **/
  Op_hatsEligibilitiesChain: InContextSdkMethod<Query['Op_hatsEligibilitiesChain'], QueryOp_hatsEligibilitiesChainArgs, MeshContext>,
  /** null **/
  Op_hatsEligibilitiesChains: InContextSdkMethod<Query['Op_hatsEligibilitiesChains'], QueryOp_hatsEligibilitiesChainsArgs, MeshContext>,
  /** null **/
  Op_eligibilitiesRuleset: InContextSdkMethod<Query['Op_eligibilitiesRuleset'], QueryOp_eligibilitiesRulesetArgs, MeshContext>,
  /** null **/
  Op_eligibilitiesRulesets: InContextSdkMethod<Query['Op_eligibilitiesRulesets'], QueryOp_eligibilitiesRulesetsArgs, MeshContext>,
  /** null **/
  Op_hatsModule: InContextSdkMethod<Query['Op_hatsModule'], QueryOp_hatsModuleArgs, MeshContext>,
  /** null **/
  Op_hatsModules: InContextSdkMethod<Query['Op_hatsModules'], QueryOp_hatsModulesArgs, MeshContext>,
  /** null **/
  Op_hatsModuleEvent: InContextSdkMethod<Query['Op_hatsModuleEvent'], QueryOp_hatsModuleEventArgs, MeshContext>,
  /** null **/
  Op_hatsModuleEvents: InContextSdkMethod<Query['Op_hatsModuleEvents'], QueryOp_hatsModuleEventsArgs, MeshContext>,
  /** null **/
  Op_jokeRaceEvent: InContextSdkMethod<Query['Op_jokeRaceEvent'], QueryOp_jokeRaceEventArgs, MeshContext>,
  /** null **/
  Op_jokeRaceEvents: InContextSdkMethod<Query['Op_jokeRaceEvents'], QueryOp_jokeRaceEventsArgs, MeshContext>,
  /** null **/
  Op_allowlistEvent: InContextSdkMethod<Query['Op_allowlistEvent'], QueryOp_allowlistEventArgs, MeshContext>,
  /** null **/
  Op_allowlistEvents: InContextSdkMethod<Query['Op_allowlistEvents'], QueryOp_allowlistEventsArgs, MeshContext>,
  /** null **/
  Op_electionEvent: InContextSdkMethod<Query['Op_electionEvent'], QueryOp_electionEventArgs, MeshContext>,
  /** null **/
  Op_electionEvents: InContextSdkMethod<Query['Op_electionEvents'], QueryOp_electionEventsArgs, MeshContext>,
  /** null **/
  Op_stakingEvent: InContextSdkMethod<Query['Op_stakingEvent'], QueryOp_stakingEventArgs, MeshContext>,
  /** null **/
  Op_stakingEvents: InContextSdkMethod<Query['Op_stakingEvents'], QueryOp_stakingEventsArgs, MeshContext>,
  /** null **/
  Op_agreementEvent: InContextSdkMethod<Query['Op_agreementEvent'], QueryOp_agreementEventArgs, MeshContext>,
  /** null **/
  Op_agreementEvents: InContextSdkMethod<Query['Op_agreementEvents'], QueryOp_agreementEventsArgs, MeshContext>,
  /** null **/
  Op_hatControlledModuleEvent: InContextSdkMethod<Query['Op_hatControlledModuleEvent'], QueryOp_hatControlledModuleEventArgs, MeshContext>,
  /** null **/
  Op_hatControlledModuleEvents: InContextSdkMethod<Query['Op_hatControlledModuleEvents'], QueryOp_hatControlledModuleEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Op__meta: InContextSdkMethod<Query['Op__meta'], QueryOp__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  Op_hatAuthority: InContextSdkMethod<Subscription['Op_hatAuthority'], SubscriptionOp_hatAuthorityArgs, MeshContext>,
  /** null **/
  Op_hatAuthorities: InContextSdkMethod<Subscription['Op_hatAuthorities'], SubscriptionOp_hatAuthoritiesArgs, MeshContext>,
  /** null **/
  Op_hatsSignerGate: InContextSdkMethod<Subscription['Op_hatsSignerGate'], SubscriptionOp_hatsSignerGateArgs, MeshContext>,
  /** null **/
  Op_hatsSignerGates: InContextSdkMethod<Subscription['Op_hatsSignerGates'], SubscriptionOp_hatsSignerGatesArgs, MeshContext>,
  /** null **/
  Op_hatsAccount1OfN: InContextSdkMethod<Subscription['Op_hatsAccount1OfN'], SubscriptionOp_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  Op_hatsAccount1OfNs: InContextSdkMethod<Subscription['Op_hatsAccount1OfNs'], SubscriptionOp_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  Op_hatsAccount1OfNOperation: InContextSdkMethod<Subscription['Op_hatsAccount1OfNOperation'], SubscriptionOp_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  Op_hatsAccount1OfNOperations: InContextSdkMethod<Subscription['Op_hatsAccount1OfNOperations'], SubscriptionOp_hatsAccount1OfNOperationsArgs, MeshContext>,
  /** null **/
  Op_hatsStakingShaman: InContextSdkMethod<Subscription['Op_hatsStakingShaman'], SubscriptionOp_hatsStakingShamanArgs, MeshContext>,
  /** null **/
  Op_hatsStakingShamans: InContextSdkMethod<Subscription['Op_hatsStakingShamans'], SubscriptionOp_hatsStakingShamansArgs, MeshContext>,
  /** null **/
  Op_shamanStake: InContextSdkMethod<Subscription['Op_shamanStake'], SubscriptionOp_shamanStakeArgs, MeshContext>,
  /** null **/
  Op_shamanStakes: InContextSdkMethod<Subscription['Op_shamanStakes'], SubscriptionOp_shamanStakesArgs, MeshContext>,
  /** null **/
  Op_hatsFarcasterDelegator: InContextSdkMethod<Subscription['Op_hatsFarcasterDelegator'], SubscriptionOp_hatsFarcasterDelegatorArgs, MeshContext>,
  /** null **/
  Op_hatsFarcasterDelegators: InContextSdkMethod<Subscription['Op_hatsFarcasterDelegators'], SubscriptionOp_hatsFarcasterDelegatorsArgs, MeshContext>,
  /** null **/
  Op_jokeRaceEligibility: InContextSdkMethod<Subscription['Op_jokeRaceEligibility'], SubscriptionOp_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  Op_jokeRaceEligibilities: InContextSdkMethod<Subscription['Op_jokeRaceEligibilities'], SubscriptionOp_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  Op_jokeRaceEligibilityTerm: InContextSdkMethod<Subscription['Op_jokeRaceEligibilityTerm'], SubscriptionOp_jokeRaceEligibilityTermArgs, MeshContext>,
  /** null **/
  Op_jokeRaceEligibilityTerms: InContextSdkMethod<Subscription['Op_jokeRaceEligibilityTerms'], SubscriptionOp_jokeRaceEligibilityTermsArgs, MeshContext>,
  /** null **/
  Op_jokeRaceNextTermSetEvent: InContextSdkMethod<Subscription['Op_jokeRaceNextTermSetEvent'], SubscriptionOp_jokeRaceNextTermSetEventArgs, MeshContext>,
  /** null **/
  Op_jokeRaceNextTermSetEvents: InContextSdkMethod<Subscription['Op_jokeRaceNextTermSetEvents'], SubscriptionOp_jokeRaceNextTermSetEventsArgs, MeshContext>,
  /** null **/
  Op_jokeRaceTermStartedEvent: InContextSdkMethod<Subscription['Op_jokeRaceTermStartedEvent'], SubscriptionOp_jokeRaceTermStartedEventArgs, MeshContext>,
  /** null **/
  Op_jokeRaceTermStartedEvents: InContextSdkMethod<Subscription['Op_jokeRaceTermStartedEvents'], SubscriptionOp_jokeRaceTermStartedEventsArgs, MeshContext>,
  /** null **/
  Op_allowListEligibility: InContextSdkMethod<Subscription['Op_allowListEligibility'], SubscriptionOp_allowListEligibilityArgs, MeshContext>,
  /** null **/
  Op_allowListEligibilities: InContextSdkMethod<Subscription['Op_allowListEligibilities'], SubscriptionOp_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  Op_allowListEligibilityData: InContextSdkMethod<Subscription['Op_allowListEligibilityData'], SubscriptionOp_allowListEligibilityDataArgs, MeshContext>,
  /** null **/
  Op_allowListEligibilityDatas: InContextSdkMethod<Subscription['Op_allowListEligibilityDatas'], SubscriptionOp_allowListEligibilityDatasArgs, MeshContext>,
  /** null **/
  Op_allowlistAccountAddedEvent: InContextSdkMethod<Subscription['Op_allowlistAccountAddedEvent'], SubscriptionOp_allowlistAccountAddedEventArgs, MeshContext>,
  /** null **/
  Op_allowlistAccountAddedEvents: InContextSdkMethod<Subscription['Op_allowlistAccountAddedEvents'], SubscriptionOp_allowlistAccountAddedEventsArgs, MeshContext>,
  /** null **/
  Op_allowlistAccountsAddedEvent: InContextSdkMethod<Subscription['Op_allowlistAccountsAddedEvent'], SubscriptionOp_allowlistAccountsAddedEventArgs, MeshContext>,
  /** null **/
  Op_allowlistAccountsAddedEvents: InContextSdkMethod<Subscription['Op_allowlistAccountsAddedEvents'], SubscriptionOp_allowlistAccountsAddedEventsArgs, MeshContext>,
  /** null **/
  Op_allowlistAccountRemovedEvent: InContextSdkMethod<Subscription['Op_allowlistAccountRemovedEvent'], SubscriptionOp_allowlistAccountRemovedEventArgs, MeshContext>,
  /** null **/
  Op_allowlistAccountRemovedEvents: InContextSdkMethod<Subscription['Op_allowlistAccountRemovedEvents'], SubscriptionOp_allowlistAccountRemovedEventsArgs, MeshContext>,
  /** null **/
  Op_allowlistAccountsRemovedEvent: InContextSdkMethod<Subscription['Op_allowlistAccountsRemovedEvent'], SubscriptionOp_allowlistAccountsRemovedEventArgs, MeshContext>,
  /** null **/
  Op_allowlistAccountsRemovedEvents: InContextSdkMethod<Subscription['Op_allowlistAccountsRemovedEvents'], SubscriptionOp_allowlistAccountsRemovedEventsArgs, MeshContext>,
  /** null **/
  Op_allowlistAccountStandingChangedEvent: InContextSdkMethod<Subscription['Op_allowlistAccountStandingChangedEvent'], SubscriptionOp_allowlistAccountStandingChangedEventArgs, MeshContext>,
  /** null **/
  Op_allowlistAccountStandingChangedEvents: InContextSdkMethod<Subscription['Op_allowlistAccountStandingChangedEvents'], SubscriptionOp_allowlistAccountStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Op_allowlistAccountsStandingChangedEvent: InContextSdkMethod<Subscription['Op_allowlistAccountsStandingChangedEvent'], SubscriptionOp_allowlistAccountsStandingChangedEventArgs, MeshContext>,
  /** null **/
  Op_allowlistAccountsStandingChangedEvents: InContextSdkMethod<Subscription['Op_allowlistAccountsStandingChangedEvents'], SubscriptionOp_allowlistAccountsStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Op_allowlistOwnerHatSetEvent: InContextSdkMethod<Subscription['Op_allowlistOwnerHatSetEvent'], SubscriptionOp_allowlistOwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Op_allowlistOwnerHatSetEvents: InContextSdkMethod<Subscription['Op_allowlistOwnerHatSetEvents'], SubscriptionOp_allowlistOwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Op_allowlistArbitratorHatSetEvent: InContextSdkMethod<Subscription['Op_allowlistArbitratorHatSetEvent'], SubscriptionOp_allowlistArbitratorHatSetEventArgs, MeshContext>,
  /** null **/
  Op_allowlistArbitratorHatSetEvents: InContextSdkMethod<Subscription['Op_allowlistArbitratorHatSetEvents'], SubscriptionOp_allowlistArbitratorHatSetEventsArgs, MeshContext>,
  /** null **/
  Op_hatsElectionEligibility: InContextSdkMethod<Subscription['Op_hatsElectionEligibility'], SubscriptionOp_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  Op_hatsElectionEligibilities: InContextSdkMethod<Subscription['Op_hatsElectionEligibilities'], SubscriptionOp_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  Op_electionTerm: InContextSdkMethod<Subscription['Op_electionTerm'], SubscriptionOp_electionTermArgs, MeshContext>,
  /** null **/
  Op_electionTerms: InContextSdkMethod<Subscription['Op_electionTerms'], SubscriptionOp_electionTermsArgs, MeshContext>,
  /** null **/
  Op_electionElectionOpenedEvent: InContextSdkMethod<Subscription['Op_electionElectionOpenedEvent'], SubscriptionOp_electionElectionOpenedEventArgs, MeshContext>,
  /** null **/
  Op_electionElectionOpenedEvents: InContextSdkMethod<Subscription['Op_electionElectionOpenedEvents'], SubscriptionOp_electionElectionOpenedEventsArgs, MeshContext>,
  /** null **/
  Op_electionElectionCompletedEvent: InContextSdkMethod<Subscription['Op_electionElectionCompletedEvent'], SubscriptionOp_electionElectionCompletedEventArgs, MeshContext>,
  /** null **/
  Op_electionElectionCompletedEvents: InContextSdkMethod<Subscription['Op_electionElectionCompletedEvents'], SubscriptionOp_electionElectionCompletedEventsArgs, MeshContext>,
  /** null **/
  Op_electionNewTermStartedEvent: InContextSdkMethod<Subscription['Op_electionNewTermStartedEvent'], SubscriptionOp_electionNewTermStartedEventArgs, MeshContext>,
  /** null **/
  Op_electionNewTermStartedEvents: InContextSdkMethod<Subscription['Op_electionNewTermStartedEvents'], SubscriptionOp_electionNewTermStartedEventsArgs, MeshContext>,
  /** null **/
  Op_electionRecalledEvent: InContextSdkMethod<Subscription['Op_electionRecalledEvent'], SubscriptionOp_electionRecalledEventArgs, MeshContext>,
  /** null **/
  Op_electionRecalledEvents: InContextSdkMethod<Subscription['Op_electionRecalledEvents'], SubscriptionOp_electionRecalledEventsArgs, MeshContext>,
  /** null **/
  Op_passthroughModule: InContextSdkMethod<Subscription['Op_passthroughModule'], SubscriptionOp_passthroughModuleArgs, MeshContext>,
  /** null **/
  Op_passthroughModules: InContextSdkMethod<Subscription['Op_passthroughModules'], SubscriptionOp_passthroughModulesArgs, MeshContext>,
  /** null **/
  Op_stakingEligibility: InContextSdkMethod<Subscription['Op_stakingEligibility'], SubscriptionOp_stakingEligibilityArgs, MeshContext>,
  /** null **/
  Op_stakingEligibilities: InContextSdkMethod<Subscription['Op_stakingEligibilities'], SubscriptionOp_stakingEligibilitiesArgs, MeshContext>,
  /** null **/
  Op_stake: InContextSdkMethod<Subscription['Op_stake'], SubscriptionOp_stakeArgs, MeshContext>,
  /** null **/
  Op_stakes: InContextSdkMethod<Subscription['Op_stakes'], SubscriptionOp_stakesArgs, MeshContext>,
  /** null **/
  Op_stakingStakedEvent: InContextSdkMethod<Subscription['Op_stakingStakedEvent'], SubscriptionOp_stakingStakedEventArgs, MeshContext>,
  /** null **/
  Op_stakingStakedEvents: InContextSdkMethod<Subscription['Op_stakingStakedEvents'], SubscriptionOp_stakingStakedEventsArgs, MeshContext>,
  /** null **/
  Op_stakingUnstakeBegunEvent: InContextSdkMethod<Subscription['Op_stakingUnstakeBegunEvent'], SubscriptionOp_stakingUnstakeBegunEventArgs, MeshContext>,
  /** null **/
  Op_stakingUnstakeBegunEvents: InContextSdkMethod<Subscription['Op_stakingUnstakeBegunEvents'], SubscriptionOp_stakingUnstakeBegunEventsArgs, MeshContext>,
  /** null **/
  Op_stakingSlashedEvent: InContextSdkMethod<Subscription['Op_stakingSlashedEvent'], SubscriptionOp_stakingSlashedEventArgs, MeshContext>,
  /** null **/
  Op_stakingSlashedEvents: InContextSdkMethod<Subscription['Op_stakingSlashedEvents'], SubscriptionOp_stakingSlashedEventsArgs, MeshContext>,
  /** null **/
  Op_stakingMinStakeChangedEvent: InContextSdkMethod<Subscription['Op_stakingMinStakeChangedEvent'], SubscriptionOp_stakingMinStakeChangedEventArgs, MeshContext>,
  /** null **/
  Op_stakingMinStakeChangedEvents: InContextSdkMethod<Subscription['Op_stakingMinStakeChangedEvents'], SubscriptionOp_stakingMinStakeChangedEventsArgs, MeshContext>,
  /** null **/
  Op_stakingJudgeHatChangedEvent: InContextSdkMethod<Subscription['Op_stakingJudgeHatChangedEvent'], SubscriptionOp_stakingJudgeHatChangedEventArgs, MeshContext>,
  /** null **/
  Op_stakingJudgeHatChangedEvents: InContextSdkMethod<Subscription['Op_stakingJudgeHatChangedEvents'], SubscriptionOp_stakingJudgeHatChangedEventsArgs, MeshContext>,
  /** null **/
  Op_stakingRecipientHatChangedEvent: InContextSdkMethod<Subscription['Op_stakingRecipientHatChangedEvent'], SubscriptionOp_stakingRecipientHatChangedEventArgs, MeshContext>,
  /** null **/
  Op_stakingRecipientHatChangedEvents: InContextSdkMethod<Subscription['Op_stakingRecipientHatChangedEvents'], SubscriptionOp_stakingRecipientHatChangedEventsArgs, MeshContext>,
  /** null **/
  Op_stakingCooldownPeriodChangedEvent: InContextSdkMethod<Subscription['Op_stakingCooldownPeriodChangedEvent'], SubscriptionOp_stakingCooldownPeriodChangedEventArgs, MeshContext>,
  /** null **/
  Op_stakingCooldownPeriodChangedEvents: InContextSdkMethod<Subscription['Op_stakingCooldownPeriodChangedEvents'], SubscriptionOp_stakingCooldownPeriodChangedEventsArgs, MeshContext>,
  /** null **/
  Op_stakingForgivenEvent: InContextSdkMethod<Subscription['Op_stakingForgivenEvent'], SubscriptionOp_stakingForgivenEventArgs, MeshContext>,
  /** null **/
  Op_stakingForgivenEvents: InContextSdkMethod<Subscription['Op_stakingForgivenEvents'], SubscriptionOp_stakingForgivenEventsArgs, MeshContext>,
  /** null **/
  Op_seasonToggle: InContextSdkMethod<Subscription['Op_seasonToggle'], SubscriptionOp_seasonToggleArgs, MeshContext>,
  /** null **/
  Op_seasonToggles: InContextSdkMethod<Subscription['Op_seasonToggles'], SubscriptionOp_seasonTogglesArgs, MeshContext>,
  /** null **/
  Op_characterSheetsLevelEligibility: InContextSdkMethod<Subscription['Op_characterSheetsLevelEligibility'], SubscriptionOp_characterSheetsLevelEligibilityArgs, MeshContext>,
  /** null **/
  Op_characterSheetsLevelEligibilities: InContextSdkMethod<Subscription['Op_characterSheetsLevelEligibilities'], SubscriptionOp_characterSheetsLevelEligibilitiesArgs, MeshContext>,
  /** null **/
  Op_agreementEligibility: InContextSdkMethod<Subscription['Op_agreementEligibility'], SubscriptionOp_agreementEligibilityArgs, MeshContext>,
  /** null **/
  Op_agreementEligibilities: InContextSdkMethod<Subscription['Op_agreementEligibilities'], SubscriptionOp_agreementEligibilitiesArgs, MeshContext>,
  /** null **/
  Op_agreement: InContextSdkMethod<Subscription['Op_agreement'], SubscriptionOp_agreementArgs, MeshContext>,
  /** null **/
  Op_agreements: InContextSdkMethod<Subscription['Op_agreements'], SubscriptionOp_agreementsArgs, MeshContext>,
  /** null **/
  Op_agreementHatClaimedWithAgreementEvent: InContextSdkMethod<Subscription['Op_agreementHatClaimedWithAgreementEvent'], SubscriptionOp_agreementHatClaimedWithAgreementEventArgs, MeshContext>,
  /** null **/
  Op_agreementHatClaimedWithAgreementEvents: InContextSdkMethod<Subscription['Op_agreementHatClaimedWithAgreementEvents'], SubscriptionOp_agreementHatClaimedWithAgreementEventsArgs, MeshContext>,
  /** null **/
  Op_agreementAgreementSignedEvent: InContextSdkMethod<Subscription['Op_agreementAgreementSignedEvent'], SubscriptionOp_agreementAgreementSignedEventArgs, MeshContext>,
  /** null **/
  Op_agreementAgreementSignedEvents: InContextSdkMethod<Subscription['Op_agreementAgreementSignedEvents'], SubscriptionOp_agreementAgreementSignedEventsArgs, MeshContext>,
  /** null **/
  Op_agreementAgreementSetEvent: InContextSdkMethod<Subscription['Op_agreementAgreementSetEvent'], SubscriptionOp_agreementAgreementSetEventArgs, MeshContext>,
  /** null **/
  Op_agreementAgreementSetEvents: InContextSdkMethod<Subscription['Op_agreementAgreementSetEvents'], SubscriptionOp_agreementAgreementSetEventsArgs, MeshContext>,
  /** null **/
  Op_agreementOwnerHatSetEvent: InContextSdkMethod<Subscription['Op_agreementOwnerHatSetEvent'], SubscriptionOp_agreementOwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Op_agreementOwnerHatSetEvents: InContextSdkMethod<Subscription['Op_agreementOwnerHatSetEvents'], SubscriptionOp_agreementOwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Op_agreementArbitratorHatSetEvent: InContextSdkMethod<Subscription['Op_agreementArbitratorHatSetEvent'], SubscriptionOp_agreementArbitratorHatSetEventArgs, MeshContext>,
  /** null **/
  Op_agreementArbitratorHatSetEvents: InContextSdkMethod<Subscription['Op_agreementArbitratorHatSetEvents'], SubscriptionOp_agreementArbitratorHatSetEventsArgs, MeshContext>,
  /** null **/
  Op_erc20Eligibility: InContextSdkMethod<Subscription['Op_erc20Eligibility'], SubscriptionOp_erc20EligibilityArgs, MeshContext>,
  /** null **/
  Op_erc20Eligibilities: InContextSdkMethod<Subscription['Op_erc20Eligibilities'], SubscriptionOp_erc20EligibilitiesArgs, MeshContext>,
  /** null **/
  Op_erc721Eligibility: InContextSdkMethod<Subscription['Op_erc721Eligibility'], SubscriptionOp_erc721EligibilityArgs, MeshContext>,
  /** null **/
  Op_erc721Eligibilities: InContextSdkMethod<Subscription['Op_erc721Eligibilities'], SubscriptionOp_erc721EligibilitiesArgs, MeshContext>,
  /** null **/
  Op_erc1155Eligibility: InContextSdkMethod<Subscription['Op_erc1155Eligibility'], SubscriptionOp_erc1155EligibilityArgs, MeshContext>,
  /** null **/
  Op_erc1155Eligibilities: InContextSdkMethod<Subscription['Op_erc1155Eligibilities'], SubscriptionOp_erc1155EligibilitiesArgs, MeshContext>,
  /** null **/
  Op_hatWearingEligibility: InContextSdkMethod<Subscription['Op_hatWearingEligibility'], SubscriptionOp_hatWearingEligibilityArgs, MeshContext>,
  /** null **/
  Op_hatWearingEligibilities: InContextSdkMethod<Subscription['Op_hatWearingEligibilities'], SubscriptionOp_hatWearingEligibilitiesArgs, MeshContext>,
  /** null **/
  Op_gitcoinPassportEligibility: InContextSdkMethod<Subscription['Op_gitcoinPassportEligibility'], SubscriptionOp_gitcoinPassportEligibilityArgs, MeshContext>,
  /** null **/
  Op_gitcoinPassportEligibilities: InContextSdkMethod<Subscription['Op_gitcoinPassportEligibilities'], SubscriptionOp_gitcoinPassportEligibilitiesArgs, MeshContext>,
  /** null **/
  Op_coLinksEligibility: InContextSdkMethod<Subscription['Op_coLinksEligibility'], SubscriptionOp_coLinksEligibilityArgs, MeshContext>,
  /** null **/
  Op_coLinksEligibilities: InContextSdkMethod<Subscription['Op_coLinksEligibilities'], SubscriptionOp_coLinksEligibilitiesArgs, MeshContext>,
  /** null **/
  Op_hatControlledModule: InContextSdkMethod<Subscription['Op_hatControlledModule'], SubscriptionOp_hatControlledModuleArgs, MeshContext>,
  /** null **/
  Op_hatControlledModules: InContextSdkMethod<Subscription['Op_hatControlledModules'], SubscriptionOp_hatControlledModulesArgs, MeshContext>,
  /** null **/
  Op_hatControlledModuleWearerStatus: InContextSdkMethod<Subscription['Op_hatControlledModuleWearerStatus'], SubscriptionOp_hatControlledModuleWearerStatusArgs, MeshContext>,
  /** null **/
  Op_hatControlledModuleWearerStatuses: InContextSdkMethod<Subscription['Op_hatControlledModuleWearerStatuses'], SubscriptionOp_hatControlledModuleWearerStatusesArgs, MeshContext>,
  /** null **/
  Op_hatControlledModuleHatStatus: InContextSdkMethod<Subscription['Op_hatControlledModuleHatStatus'], SubscriptionOp_hatControlledModuleHatStatusArgs, MeshContext>,
  /** null **/
  Op_hatControlledModuleHatStatuses: InContextSdkMethod<Subscription['Op_hatControlledModuleHatStatuses'], SubscriptionOp_hatControlledModuleHatStatusesArgs, MeshContext>,
  /** null **/
  Op_hatControlledWearerStatusSet: InContextSdkMethod<Subscription['Op_hatControlledWearerStatusSet'], SubscriptionOp_hatControlledWearerStatusSetArgs, MeshContext>,
  /** null **/
  Op_hatControlledWearerStatusSets: InContextSdkMethod<Subscription['Op_hatControlledWearerStatusSets'], SubscriptionOp_hatControlledWearerStatusSetsArgs, MeshContext>,
  /** null **/
  Op_hatControlledHatStatusSet: InContextSdkMethod<Subscription['Op_hatControlledHatStatusSet'], SubscriptionOp_hatControlledHatStatusSetArgs, MeshContext>,
  /** null **/
  Op_hatControlledHatStatusSets: InContextSdkMethod<Subscription['Op_hatControlledHatStatusSets'], SubscriptionOp_hatControlledHatStatusSetsArgs, MeshContext>,
  /** null **/
  Op_publicLockV14Eligibility: InContextSdkMethod<Subscription['Op_publicLockV14Eligibility'], SubscriptionOp_publicLockV14EligibilityArgs, MeshContext>,
  /** null **/
  Op_publicLockV14Eligibilities: InContextSdkMethod<Subscription['Op_publicLockV14Eligibilities'], SubscriptionOp_publicLockV14EligibilitiesArgs, MeshContext>,
  /** null **/
  Op_hatsEligibilitiesChain: InContextSdkMethod<Subscription['Op_hatsEligibilitiesChain'], SubscriptionOp_hatsEligibilitiesChainArgs, MeshContext>,
  /** null **/
  Op_hatsEligibilitiesChains: InContextSdkMethod<Subscription['Op_hatsEligibilitiesChains'], SubscriptionOp_hatsEligibilitiesChainsArgs, MeshContext>,
  /** null **/
  Op_eligibilitiesRuleset: InContextSdkMethod<Subscription['Op_eligibilitiesRuleset'], SubscriptionOp_eligibilitiesRulesetArgs, MeshContext>,
  /** null **/
  Op_eligibilitiesRulesets: InContextSdkMethod<Subscription['Op_eligibilitiesRulesets'], SubscriptionOp_eligibilitiesRulesetsArgs, MeshContext>,
  /** null **/
  Op_hatsModule: InContextSdkMethod<Subscription['Op_hatsModule'], SubscriptionOp_hatsModuleArgs, MeshContext>,
  /** null **/
  Op_hatsModules: InContextSdkMethod<Subscription['Op_hatsModules'], SubscriptionOp_hatsModulesArgs, MeshContext>,
  /** null **/
  Op_hatsModuleEvent: InContextSdkMethod<Subscription['Op_hatsModuleEvent'], SubscriptionOp_hatsModuleEventArgs, MeshContext>,
  /** null **/
  Op_hatsModuleEvents: InContextSdkMethod<Subscription['Op_hatsModuleEvents'], SubscriptionOp_hatsModuleEventsArgs, MeshContext>,
  /** null **/
  Op_jokeRaceEvent: InContextSdkMethod<Subscription['Op_jokeRaceEvent'], SubscriptionOp_jokeRaceEventArgs, MeshContext>,
  /** null **/
  Op_jokeRaceEvents: InContextSdkMethod<Subscription['Op_jokeRaceEvents'], SubscriptionOp_jokeRaceEventsArgs, MeshContext>,
  /** null **/
  Op_allowlistEvent: InContextSdkMethod<Subscription['Op_allowlistEvent'], SubscriptionOp_allowlistEventArgs, MeshContext>,
  /** null **/
  Op_allowlistEvents: InContextSdkMethod<Subscription['Op_allowlistEvents'], SubscriptionOp_allowlistEventsArgs, MeshContext>,
  /** null **/
  Op_electionEvent: InContextSdkMethod<Subscription['Op_electionEvent'], SubscriptionOp_electionEventArgs, MeshContext>,
  /** null **/
  Op_electionEvents: InContextSdkMethod<Subscription['Op_electionEvents'], SubscriptionOp_electionEventsArgs, MeshContext>,
  /** null **/
  Op_stakingEvent: InContextSdkMethod<Subscription['Op_stakingEvent'], SubscriptionOp_stakingEventArgs, MeshContext>,
  /** null **/
  Op_stakingEvents: InContextSdkMethod<Subscription['Op_stakingEvents'], SubscriptionOp_stakingEventsArgs, MeshContext>,
  /** null **/
  Op_agreementEvent: InContextSdkMethod<Subscription['Op_agreementEvent'], SubscriptionOp_agreementEventArgs, MeshContext>,
  /** null **/
  Op_agreementEvents: InContextSdkMethod<Subscription['Op_agreementEvents'], SubscriptionOp_agreementEventsArgs, MeshContext>,
  /** null **/
  Op_hatControlledModuleEvent: InContextSdkMethod<Subscription['Op_hatControlledModuleEvent'], SubscriptionOp_hatControlledModuleEventArgs, MeshContext>,
  /** null **/
  Op_hatControlledModuleEvents: InContextSdkMethod<Subscription['Op_hatControlledModuleEvents'], SubscriptionOp_hatControlledModuleEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Op__meta: InContextSdkMethod<Subscription['Op__meta'], SubscriptionOp__metaArgs, MeshContext>
  };

  export type Context = {
      ["Optimism_Ancillary"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
