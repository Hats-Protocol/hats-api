// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ArbitrumAncillaryTypes {
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

export type Arb_Agreement = {
  id: Scalars['ID']['output'];
  agreementEligibility: Arb_AgreementEligibility;
  agreement: Scalars['String']['output'];
  signers: Array<Scalars['String']['output']>;
  graceEndTime: Scalars['BigInt']['output'];
};

/**  Agreement Eligibility  */
export type Arb_AgreementEligibility = Arb_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  ownerHat: Arb_HatAuthority;
  arbitratorHat: Arb_HatAuthority;
  currentAgreement: Arb_Agreement;
  currentAgreementNumber: Scalars['BigInt']['output'];
  agreements: Array<Arb_Agreement>;
  events: Array<Arb_AgreementEvent>;
};


/**  Agreement Eligibility  */
export type Arb_AgreementEligibilityagreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Agreement_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Agreement_filter>;
};


/**  Agreement Eligibility  */
export type Arb_AgreementEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_AgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_AgreementEvent_filter>;
};

export type Arb_AgreementEligibility_filter = {
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
  ownerHat_?: InputMaybe<Arb_HatAuthority_filter>;
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
  arbitratorHat_?: InputMaybe<Arb_HatAuthority_filter>;
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
  currentAgreement_?: InputMaybe<Arb_Agreement_filter>;
  currentAgreementNumber?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentAgreementNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  agreements_?: InputMaybe<Arb_Agreement_filter>;
  events_?: InputMaybe<Arb_AgreementEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_AgreementEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_AgreementEligibility_filter>>>;
};

export type Arb_AgreementEligibility_orderBy =
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

export type Arb_AgreementEvent = {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  agreementEligibilityInstance: Arb_AgreementEligibility;
};

export type Arb_AgreementEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  agreementEligibilityInstance_?: InputMaybe<Arb_AgreementEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_AgreementEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_AgreementEvent_filter>>>;
};

export type Arb_AgreementEvent_orderBy =
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

export type Arb_Agreement_AgreementSetEvent = Arb_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  agreementEligibilityInstance: Arb_AgreementEligibility;
  agreement: Scalars['String']['output'];
  grace: Scalars['BigInt']['output'];
};

export type Arb_Agreement_AgreementSetEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  agreementEligibilityInstance_?: InputMaybe<Arb_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Agreement_AgreementSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Agreement_AgreementSetEvent_filter>>>;
};

export type Arb_Agreement_AgreementSetEvent_orderBy =
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

export type Arb_Agreement_AgreementSignedEvent = Arb_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  agreementEligibilityInstance: Arb_AgreementEligibility;
  signer: Scalars['String']['output'];
  agreement: Scalars['String']['output'];
};

export type Arb_Agreement_AgreementSignedEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  agreementEligibilityInstance_?: InputMaybe<Arb_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Agreement_AgreementSignedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Agreement_AgreementSignedEvent_filter>>>;
};

export type Arb_Agreement_AgreementSignedEvent_orderBy =
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

export type Arb_Agreement_ArbitratorHatSetEvent = Arb_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  agreementEligibilityInstance: Arb_AgreementEligibility;
  newArbitratorHat: Scalars['String']['output'];
};

export type Arb_Agreement_ArbitratorHatSetEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  agreementEligibilityInstance_?: InputMaybe<Arb_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Agreement_ArbitratorHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Agreement_ArbitratorHatSetEvent_filter>>>;
};

export type Arb_Agreement_ArbitratorHatSetEvent_orderBy =
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

export type Arb_Agreement_HatClaimedWithAgreementEvent = Arb_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  agreementEligibilityInstance: Arb_AgreementEligibility;
  claimer: Scalars['String']['output'];
  hatId: Scalars['String']['output'];
  agreement: Scalars['String']['output'];
};

export type Arb_Agreement_HatClaimedWithAgreementEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  agreementEligibilityInstance_?: InputMaybe<Arb_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Agreement_HatClaimedWithAgreementEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Agreement_HatClaimedWithAgreementEvent_filter>>>;
};

export type Arb_Agreement_HatClaimedWithAgreementEvent_orderBy =
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

export type Arb_Agreement_OwnerHatSetEvent = Arb_AgreementEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  agreementEligibilityInstance: Arb_AgreementEligibility;
  newOwnerHat: Scalars['String']['output'];
};

export type Arb_Agreement_OwnerHatSetEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  agreementEligibilityInstance_?: InputMaybe<Arb_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Agreement_OwnerHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Agreement_OwnerHatSetEvent_filter>>>;
};

export type Arb_Agreement_OwnerHatSetEvent_orderBy =
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

export type Arb_Agreement_filter = {
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
  agreementEligibility_?: InputMaybe<Arb_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Agreement_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Agreement_filter>>>;
};

export type Arb_Agreement_orderBy =
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
export type Arb_AllowListEligibility = Arb_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  ownerHat: Arb_HatAuthority;
  arbitratorHat: Arb_HatAuthority;
  eligibilityData: Array<Arb_AllowListEligibilityData>;
  events: Array<Arb_AllowlistEvent>;
};


/**  Allowlist Eligibility  */
export type Arb_AllowListEligibilityeligibilityDataArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_AllowListEligibilityData_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_AllowListEligibilityData_filter>;
};


/**  Allowlist Eligibility  */
export type Arb_AllowListEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_AllowlistEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_AllowlistEvent_filter>;
};

export type Arb_AllowListEligibilityData = {
  id: Scalars['ID']['output'];
  allowListEligibility: Arb_AllowListEligibility;
  address: Scalars['String']['output'];
  eligible: Scalars['Boolean']['output'];
  badStanding: Scalars['Boolean']['output'];
};

export type Arb_AllowListEligibilityData_filter = {
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
  allowListEligibility_?: InputMaybe<Arb_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_AllowListEligibilityData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_AllowListEligibilityData_filter>>>;
};

export type Arb_AllowListEligibilityData_orderBy =
  | 'id'
  | 'allowListEligibility'
  | 'allowListEligibility__id'
  | 'allowListEligibility__version'
  | 'allowListEligibility__hatId'
  | 'address'
  | 'eligible'
  | 'badStanding';

export type Arb_AllowListEligibility_filter = {
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
  ownerHat_?: InputMaybe<Arb_HatAuthority_filter>;
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
  arbitratorHat_?: InputMaybe<Arb_HatAuthority_filter>;
  eligibilityData_?: InputMaybe<Arb_AllowListEligibilityData_filter>;
  events_?: InputMaybe<Arb_AllowlistEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_AllowListEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_AllowListEligibility_filter>>>;
};

export type Arb_AllowListEligibility_orderBy =
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

export type Arb_AllowlistEvent = {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  allowlistEligibilityInstance: Arb_AllowListEligibility;
};

export type Arb_AllowlistEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  allowlistEligibilityInstance_?: InputMaybe<Arb_AllowListEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_AllowlistEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_AllowlistEvent_filter>>>;
};

export type Arb_AllowlistEvent_orderBy =
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

export type Arb_Allowlist_AccountAddedEvent = Arb_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  allowlistEligibilityInstance: Arb_AllowListEligibility;
  account: Scalars['String']['output'];
};

export type Arb_Allowlist_AccountAddedEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  allowlistEligibilityInstance_?: InputMaybe<Arb_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Allowlist_AccountAddedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Allowlist_AccountAddedEvent_filter>>>;
};

export type Arb_Allowlist_AccountAddedEvent_orderBy =
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

export type Arb_Allowlist_AccountRemovedEvent = Arb_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  allowlistEligibilityInstance: Arb_AllowListEligibility;
  account: Scalars['String']['output'];
};

export type Arb_Allowlist_AccountRemovedEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  allowlistEligibilityInstance_?: InputMaybe<Arb_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Allowlist_AccountRemovedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Allowlist_AccountRemovedEvent_filter>>>;
};

export type Arb_Allowlist_AccountRemovedEvent_orderBy =
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

export type Arb_Allowlist_AccountStandingChangedEvent = Arb_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  allowlistEligibilityInstance: Arb_AllowListEligibility;
  account: Scalars['String']['output'];
  standing: Scalars['Boolean']['output'];
};

export type Arb_Allowlist_AccountStandingChangedEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  allowlistEligibilityInstance_?: InputMaybe<Arb_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Allowlist_AccountStandingChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Allowlist_AccountStandingChangedEvent_filter>>>;
};

export type Arb_Allowlist_AccountStandingChangedEvent_orderBy =
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

export type Arb_Allowlist_AccountsAddedEvent = Arb_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  allowlistEligibilityInstance: Arb_AllowListEligibility;
  accounts: Array<Scalars['String']['output']>;
};

export type Arb_Allowlist_AccountsAddedEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  allowlistEligibilityInstance_?: InputMaybe<Arb_AllowListEligibility_filter>;
  accounts?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Allowlist_AccountsAddedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Allowlist_AccountsAddedEvent_filter>>>;
};

export type Arb_Allowlist_AccountsAddedEvent_orderBy =
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

export type Arb_Allowlist_AccountsRemovedEvent = Arb_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  allowlistEligibilityInstance: Arb_AllowListEligibility;
  accounts: Array<Scalars['String']['output']>;
};

export type Arb_Allowlist_AccountsRemovedEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  allowlistEligibilityInstance_?: InputMaybe<Arb_AllowListEligibility_filter>;
  accounts?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accounts_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Allowlist_AccountsRemovedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Allowlist_AccountsRemovedEvent_filter>>>;
};

export type Arb_Allowlist_AccountsRemovedEvent_orderBy =
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

export type Arb_Allowlist_AccountsStandingChangedEvent = Arb_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  allowlistEligibilityInstance: Arb_AllowListEligibility;
  accounts: Array<Scalars['String']['output']>;
  standings: Array<Scalars['Boolean']['output']>;
};

export type Arb_Allowlist_AccountsStandingChangedEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  allowlistEligibilityInstance_?: InputMaybe<Arb_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Allowlist_AccountsStandingChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Allowlist_AccountsStandingChangedEvent_filter>>>;
};

export type Arb_Allowlist_AccountsStandingChangedEvent_orderBy =
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

export type Arb_Allowlist_ArbitratorHatSetEvent = Arb_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  allowlistEligibilityInstance: Arb_AllowListEligibility;
  newArbitratorHat: Scalars['String']['output'];
};

export type Arb_Allowlist_ArbitratorHatSetEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  allowlistEligibilityInstance_?: InputMaybe<Arb_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Allowlist_ArbitratorHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Allowlist_ArbitratorHatSetEvent_filter>>>;
};

export type Arb_Allowlist_ArbitratorHatSetEvent_orderBy =
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

export type Arb_Allowlist_OwnerHatSetEvent = Arb_AllowlistEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  allowlistEligibilityInstance: Arb_AllowListEligibility;
  newOwnerHat: Scalars['String']['output'];
};

export type Arb_Allowlist_OwnerHatSetEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  allowlistEligibilityInstance_?: InputMaybe<Arb_AllowListEligibility_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Allowlist_OwnerHatSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Allowlist_OwnerHatSetEvent_filter>>>;
};

export type Arb_Allowlist_OwnerHatSetEvent_orderBy =
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

export type Arb_BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Arb_Block_height = {
  hash?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

/**  Charecter Sheets Level Eligibility  */
export type Arb_CharacterSheetsLevelEligibility = Arb_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  hatAdmins: Array<Arb_HatAuthority>;
};


/**  Charecter Sheets Level Eligibility  */
export type Arb_CharacterSheetsLevelEligibilityhatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatAuthority_filter>;
};

export type Arb_CharacterSheetsLevelEligibility_filter = {
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
  hatAdmins_?: InputMaybe<Arb_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_CharacterSheetsLevelEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_CharacterSheetsLevelEligibility_filter>>>;
};

export type Arb_CharacterSheetsLevelEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'hatAdmins';

/**  CoLinks Eligibility  */
export type Arb_CoLinksEligibility = Arb_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  threshold: Scalars['BigInt']['output'];
};

export type Arb_CoLinksEligibility_filter = {
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_CoLinksEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_CoLinksEligibility_filter>>>;
};

export type Arb_CoLinksEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'threshold';

export type Arb_ElectionEvent = {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  electionEligibilityInstance: Arb_HatsElectionEligibility;
};

export type Arb_ElectionEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  electionEligibilityInstance_?: InputMaybe<Arb_HatsElectionEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_ElectionEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_ElectionEvent_filter>>>;
};

export type Arb_ElectionEvent_orderBy =
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

export type Arb_ElectionTerm = {
  id: Scalars['ID']['output'];
  hatsElectionEligibility: Arb_HatsElectionEligibility;
  /** first term starts when 'elect' is called, next terms start when 'startNextTerm' is called */
  termStartedAt?: Maybe<Scalars['BigInt']['output']>;
  termEnd: Scalars['BigInt']['output'];
  /** election is completed when 'elect' is called */
  electionCompletedAt?: Maybe<Scalars['BigInt']['output']>;
  electedAccounts?: Maybe<Array<Scalars['String']['output']>>;
};

export type Arb_ElectionTerm_filter = {
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
  hatsElectionEligibility_?: InputMaybe<Arb_HatsElectionEligibility_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_ElectionTerm_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_ElectionTerm_filter>>>;
};

export type Arb_ElectionTerm_orderBy =
  | 'id'
  | 'hatsElectionEligibility'
  | 'hatsElectionEligibility__id'
  | 'hatsElectionEligibility__version'
  | 'hatsElectionEligibility__hatId'
  | 'termStartedAt'
  | 'termEnd'
  | 'electionCompletedAt'
  | 'electedAccounts';

export type Arb_Election_ElectionCompletedEvent = Arb_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  electionEligibilityInstance: Arb_HatsElectionEligibility;
  termEnd: Scalars['BigInt']['output'];
  winners: Array<Scalars['String']['output']>;
};

export type Arb_Election_ElectionCompletedEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  electionEligibilityInstance_?: InputMaybe<Arb_HatsElectionEligibility_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Election_ElectionCompletedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Election_ElectionCompletedEvent_filter>>>;
};

export type Arb_Election_ElectionCompletedEvent_orderBy =
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

export type Arb_Election_ElectionOpenedEvent = Arb_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  electionEligibilityInstance: Arb_HatsElectionEligibility;
  nextTermEnd: Scalars['BigInt']['output'];
};

export type Arb_Election_ElectionOpenedEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  electionEligibilityInstance_?: InputMaybe<Arb_HatsElectionEligibility_filter>;
  nextTermEnd?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_not?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nextTermEnd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nextTermEnd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Election_ElectionOpenedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Election_ElectionOpenedEvent_filter>>>;
};

export type Arb_Election_ElectionOpenedEvent_orderBy =
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

export type Arb_Election_NewTermStartedEvent = Arb_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  electionEligibilityInstance: Arb_HatsElectionEligibility;
  termEnd: Scalars['BigInt']['output'];
};

export type Arb_Election_NewTermStartedEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  electionEligibilityInstance_?: InputMaybe<Arb_HatsElectionEligibility_filter>;
  termEnd?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_not?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  termEnd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  termEnd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Election_NewTermStartedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Election_NewTermStartedEvent_filter>>>;
};

export type Arb_Election_NewTermStartedEvent_orderBy =
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

export type Arb_Election_RecalledEvent = Arb_ElectionEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  electionEligibilityInstance: Arb_HatsElectionEligibility;
  termEnd: Scalars['BigInt']['output'];
  accounts: Array<Scalars['String']['output']>;
};

export type Arb_Election_RecalledEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  electionEligibilityInstance_?: InputMaybe<Arb_HatsElectionEligibility_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Election_RecalledEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Election_RecalledEvent_filter>>>;
};

export type Arb_Election_RecalledEvent_orderBy =
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
export type Arb_Erc1155Eligibility = Arb_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  contractAddress: Scalars['String']['output'];
  tokens: Array<Scalars['BigInt']['output']>;
  minBalances: Array<Scalars['BigInt']['output']>;
};

export type Arb_Erc1155Eligibility_filter = {
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Erc1155Eligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Erc1155Eligibility_filter>>>;
};

export type Arb_Erc1155Eligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'contractAddress'
  | 'tokens'
  | 'minBalances';

/**  Erc20 Eligibility  */
export type Arb_Erc20Eligibility = Arb_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  token: Scalars['String']['output'];
  minBalance: Scalars['BigInt']['output'];
};

export type Arb_Erc20Eligibility_filter = {
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Erc20Eligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Erc20Eligibility_filter>>>;
};

export type Arb_Erc20Eligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'token'
  | 'minBalance';

/**  Erc721 Eligibility  */
export type Arb_Erc721Eligibility = Arb_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  token: Scalars['String']['output'];
  minBalance: Scalars['BigInt']['output'];
};

export type Arb_Erc721Eligibility_filter = {
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Erc721Eligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Erc721Eligibility_filter>>>;
};

export type Arb_Erc721Eligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'token'
  | 'minBalance';

/**  Gitcoin Passport Eligibility  */
export type Arb_GitcoinPassportEligibility = Arb_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  decoder: Scalars['String']['output'];
  scoreCriterion: Scalars['BigInt']['output'];
};

export type Arb_GitcoinPassportEligibility_filter = {
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_GitcoinPassportEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_GitcoinPassportEligibility_filter>>>;
};

export type Arb_GitcoinPassportEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'decoder'
  | 'scoreCriterion';

export type Arb_HatAuthority = {
  id: Scalars['ID']['output'];
  /** pre computed hats account address with a salt value of 1, null only if the hat was not created yet */
  primaryHatsAccount1ofNAddress?: Maybe<Scalars['String']['output']>;
  hatsAccount1ofN: Array<Arb_HatsAccount1ofN>;
  hsgOwner: Array<Arb_HatsSignerGate>;
  hsgSigner: Array<Arb_HatsSignerGate>;
  jokeraceAdmin: Array<Arb_JokeRaceEligibility>;
  allowListOwner: Array<Arb_AllowListEligibility>;
  allowListArbitrator: Array<Arb_AllowListEligibility>;
  electionsBallotBox: Array<Arb_HatsElectionEligibility>;
  electionsAdmin: Array<Arb_HatsElectionEligibility>;
  eligibilityTogglePassthrough: Array<Arb_PassthroughModule>;
  stakingJudge: Array<Arb_StakingEligibility>;
  stakingRecipient: Array<Arb_StakingEligibility>;
  stakingHatAdmins: Array<Arb_StakingEligibility>;
  seasonHatAdmins: Array<Arb_SeasonToggle>;
  characterSheetsLevelHatAdmins: Array<Arb_CharacterSheetsLevelEligibility>;
  agreementOwner: Array<Arb_AgreementEligibility>;
  agreementArbitrator: Array<Arb_AgreementEligibility>;
  baalStakingJudge: Array<Arb_HatsStakingShaman>;
  hatsFarcasterDelegatorOwner: Array<Arb_HatsFarcasterDelegator>;
  hatsFarcasterDelegatorCaster: Array<Arb_HatsFarcasterDelegator>;
};


export type Arb_HatAuthorityhatsAccount1ofNArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsAccount1ofN_filter>;
};


export type Arb_HatAuthorityhsgOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsSignerGate_filter>;
};


export type Arb_HatAuthorityhsgSignerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsSignerGate_filter>;
};


export type Arb_HatAuthorityjokeraceAdminArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_JokeRaceEligibility_filter>;
};


export type Arb_HatAuthorityallowListOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_AllowListEligibility_filter>;
};


export type Arb_HatAuthorityallowListArbitratorArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_AllowListEligibility_filter>;
};


export type Arb_HatAuthorityelectionsBallotBoxArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsElectionEligibility_filter>;
};


export type Arb_HatAuthorityelectionsAdminArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsElectionEligibility_filter>;
};


export type Arb_HatAuthorityeligibilityTogglePassthroughArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_PassthroughModule_filter>;
};


export type Arb_HatAuthoritystakingJudgeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_StakingEligibility_filter>;
};


export type Arb_HatAuthoritystakingRecipientArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_StakingEligibility_filter>;
};


export type Arb_HatAuthoritystakingHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_StakingEligibility_filter>;
};


export type Arb_HatAuthorityseasonHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_SeasonToggle_filter>;
};


export type Arb_HatAuthoritycharacterSheetsLevelHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_CharacterSheetsLevelEligibility_filter>;
};


export type Arb_HatAuthorityagreementOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_AgreementEligibility_filter>;
};


export type Arb_HatAuthorityagreementArbitratorArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_AgreementEligibility_filter>;
};


export type Arb_HatAuthoritybaalStakingJudgeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsStakingShaman_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsStakingShaman_filter>;
};


export type Arb_HatAuthorityhatsFarcasterDelegatorOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsFarcasterDelegator_filter>;
};


export type Arb_HatAuthorityhatsFarcasterDelegatorCasterArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsFarcasterDelegator_filter>;
};

export type Arb_HatAuthority_filter = {
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
  hatsAccount1ofN_?: InputMaybe<Arb_HatsAccount1ofN_filter>;
  hsgOwner_?: InputMaybe<Arb_HatsSignerGate_filter>;
  hsgSigner_?: InputMaybe<Arb_HatsSignerGate_filter>;
  jokeraceAdmin_?: InputMaybe<Arb_JokeRaceEligibility_filter>;
  allowListOwner_?: InputMaybe<Arb_AllowListEligibility_filter>;
  allowListArbitrator_?: InputMaybe<Arb_AllowListEligibility_filter>;
  electionsBallotBox_?: InputMaybe<Arb_HatsElectionEligibility_filter>;
  electionsAdmin_?: InputMaybe<Arb_HatsElectionEligibility_filter>;
  eligibilityTogglePassthrough_?: InputMaybe<Arb_PassthroughModule_filter>;
  stakingJudge_?: InputMaybe<Arb_StakingEligibility_filter>;
  stakingRecipient_?: InputMaybe<Arb_StakingEligibility_filter>;
  stakingHatAdmins_?: InputMaybe<Arb_StakingEligibility_filter>;
  seasonHatAdmins_?: InputMaybe<Arb_SeasonToggle_filter>;
  characterSheetsLevelHatAdmins_?: InputMaybe<Arb_CharacterSheetsLevelEligibility_filter>;
  agreementOwner_?: InputMaybe<Arb_AgreementEligibility_filter>;
  agreementArbitrator_?: InputMaybe<Arb_AgreementEligibility_filter>;
  baalStakingJudge_?: InputMaybe<Arb_HatsStakingShaman_filter>;
  hatsFarcasterDelegatorOwner_?: InputMaybe<Arb_HatsFarcasterDelegator_filter>;
  hatsFarcasterDelegatorCaster_?: InputMaybe<Arb_HatsFarcasterDelegator_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_HatAuthority_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_HatAuthority_filter>>>;
};

export type Arb_HatAuthority_orderBy =
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
export type Arb_HatWearingEligibility = Arb_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  criterionHat: Scalars['String']['output'];
};

export type Arb_HatWearingEligibility_filter = {
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_HatWearingEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_HatWearingEligibility_filter>>>;
};

export type Arb_HatWearingEligibility_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'criterionHat';

export type Arb_HatsAccount1ofN = {
  id: Scalars['ID']['output'];
  accountOfHat: Arb_HatAuthority;
  operations: Array<Arb_HatsAccount1ofNOperation>;
};


export type Arb_HatsAccount1ofNoperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsAccount1ofNOperation_filter>;
};

export type Arb_HatsAccount1ofNOperation = {
  id: Scalars['ID']['output'];
  hatsAccount: Arb_HatsAccount1ofN;
  signer: Scalars['String']['output'];
  to: Scalars['String']['output'];
  value: Scalars['BigInt']['output'];
  callData: Scalars['Arb_Bytes']['output'];
  operationType: Arb_HatsAccountOperationType;
};

export type Arb_HatsAccount1ofNOperation_filter = {
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
  hatsAccount_?: InputMaybe<Arb_HatsAccount1ofN_filter>;
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
  callData?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  callData_not?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  callData_gt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  callData_lt?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  callData_gte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  callData_lte?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  callData_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  callData_not_in?: InputMaybe<Array<Scalars['Arb_Bytes']['input']>>;
  callData_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  callData_not_contains?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  operationType?: InputMaybe<Arb_HatsAccountOperationType>;
  operationType_not?: InputMaybe<Arb_HatsAccountOperationType>;
  operationType_in?: InputMaybe<Array<Arb_HatsAccountOperationType>>;
  operationType_not_in?: InputMaybe<Array<Arb_HatsAccountOperationType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_HatsAccount1ofNOperation_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_HatsAccount1ofNOperation_filter>>>;
};

export type Arb_HatsAccount1ofNOperation_orderBy =
  | 'id'
  | 'hatsAccount'
  | 'hatsAccount__id'
  | 'signer'
  | 'to'
  | 'value'
  | 'callData'
  | 'operationType';

export type Arb_HatsAccount1ofN_filter = {
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
  accountOfHat_?: InputMaybe<Arb_HatAuthority_filter>;
  operations_?: InputMaybe<Arb_HatsAccount1ofNOperation_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_HatsAccount1ofN_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_HatsAccount1ofN_filter>>>;
};

export type Arb_HatsAccount1ofN_orderBy =
  | 'id'
  | 'accountOfHat'
  | 'accountOfHat__id'
  | 'accountOfHat__primaryHatsAccount1ofNAddress'
  | 'operations';

export type Arb_HatsAccountOperationType =
  | 'Call'
  | 'DelegateCall';

/** HatsElection Eligibility */
export type Arb_HatsElectionEligibility = Arb_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  ballotBoxHat: Arb_HatAuthority;
  adminHat: Array<Arb_HatAuthority>;
  terms: Array<Arb_ElectionTerm>;
  currentTerm?: Maybe<Arb_ElectionTerm>;
  events: Array<Arb_ElectionEvent>;
};


/** HatsElection Eligibility */
export type Arb_HatsElectionEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatAuthority_filter>;
};


/** HatsElection Eligibility */
export type Arb_HatsElectionEligibilitytermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_ElectionTerm_filter>;
};


/** HatsElection Eligibility */
export type Arb_HatsElectionEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_ElectionEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_ElectionEvent_filter>;
};

export type Arb_HatsElectionEligibility_filter = {
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
  ballotBoxHat_?: InputMaybe<Arb_HatAuthority_filter>;
  adminHat?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_?: InputMaybe<Arb_HatAuthority_filter>;
  terms_?: InputMaybe<Arb_ElectionTerm_filter>;
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
  currentTerm_?: InputMaybe<Arb_ElectionTerm_filter>;
  events_?: InputMaybe<Arb_ElectionEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_HatsElectionEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_HatsElectionEligibility_filter>>>;
};

export type Arb_HatsElectionEligibility_orderBy =
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

export type Arb_HatsFarcasterDelegator = {
  id: Scalars['ID']['output'];
  caster: Arb_HatAuthority;
  owner: Arb_HatAuthority;
};

export type Arb_HatsFarcasterDelegator_filter = {
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
  caster_?: InputMaybe<Arb_HatAuthority_filter>;
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
  owner_?: InputMaybe<Arb_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_HatsFarcasterDelegator_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_HatsFarcasterDelegator_filter>>>;
};

export type Arb_HatsFarcasterDelegator_orderBy =
  | 'id'
  | 'caster'
  | 'caster__id'
  | 'caster__primaryHatsAccount1ofNAddress'
  | 'owner'
  | 'owner__id'
  | 'owner__primaryHatsAccount1ofNAddress';

/**  *** Modules ***  */
export type Arb_HatsModule = {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
};

export type Arb_HatsModuleEvent = {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
};

export type Arb_HatsModuleEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  and?: InputMaybe<Array<InputMaybe<Arb_HatsModuleEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_HatsModuleEvent_filter>>>;
};

export type Arb_HatsModuleEvent_orderBy =
  | 'id'
  | 'module'
  | 'module__id'
  | 'module__version'
  | 'module__hatId'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID';

export type Arb_HatsModule_filter = {
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_HatsModule_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_HatsModule_filter>>>;
};

export type Arb_HatsModule_orderBy =
  | 'id'
  | 'version'
  | 'hatId';

/**  *** Gates ***  */
export type Arb_HatsSignerGate = {
  id: Scalars['ID']['output'];
  type: Arb_HatsSignerGateType;
  ownerHat: Arb_HatAuthority;
  signerHats: Array<Arb_HatAuthority>;
  safe: Scalars['String']['output'];
  minThreshold: Scalars['BigInt']['output'];
  targetThreshold: Scalars['BigInt']['output'];
  maxSigners: Scalars['BigInt']['output'];
};


/**  *** Gates ***  */
export type Arb_HatsSignerGatesignerHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatAuthority_filter>;
};

export type Arb_HatsSignerGateType =
  | 'Single'
  | 'Multi';

export type Arb_HatsSignerGate_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  type?: InputMaybe<Arb_HatsSignerGateType>;
  type_not?: InputMaybe<Arb_HatsSignerGateType>;
  type_in?: InputMaybe<Array<Arb_HatsSignerGateType>>;
  type_not_in?: InputMaybe<Array<Arb_HatsSignerGateType>>;
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
  ownerHat_?: InputMaybe<Arb_HatAuthority_filter>;
  signerHats?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_?: InputMaybe<Arb_HatAuthority_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_HatsSignerGate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_HatsSignerGate_filter>>>;
};

export type Arb_HatsSignerGate_orderBy =
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

export type Arb_HatsStakingShaman = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  judgeHat: Arb_HatAuthority;
  baal: Scalars['String']['output'];
  stakingProxyImpl: Scalars['String']['output'];
  sharesToken: Scalars['String']['output'];
  minStake: Scalars['BigInt']['output'];
  coolDownBuffer: Scalars['BigInt']['output'];
  stakes: Array<Arb_ShamanStake>;
};


export type Arb_HatsStakingShamanstakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_ShamanStake_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_ShamanStake_filter>;
};

export type Arb_HatsStakingShaman_filter = {
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
  judgeHat_?: InputMaybe<Arb_HatAuthority_filter>;
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
  stakes_?: InputMaybe<Arb_ShamanStake_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_HatsStakingShaman_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_HatsStakingShaman_filter>>>;
};

export type Arb_HatsStakingShaman_orderBy =
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
export type Arb_JokeRaceEligibility = Arb_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  adminHat: Array<Arb_HatAuthority>;
  currentTerm?: Maybe<Arb_JokeRaceEligibilityTerm>;
  nextTerm?: Maybe<Arb_JokeRaceEligibilityTerm>;
  allTerms: Array<Arb_JokeRaceEligibilityTerm>;
  events: Array<Arb_JokeRaceEvent>;
};


/**  Jokerace Eligibility  */
export type Arb_JokeRaceEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatAuthority_filter>;
};


/**  Jokerace Eligibility  */
export type Arb_JokeRaceEligibilityallTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_JokeRaceEligibilityTerm_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_JokeRaceEligibilityTerm_filter>;
};


/**  Jokerace Eligibility  */
export type Arb_JokeRaceEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_JokeRaceEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_JokeRaceEvent_filter>;
};

export type Arb_JokeRaceEligibilityTerm = {
  id: Scalars['ID']['output'];
  jokeRaceEligibility: Arb_JokeRaceEligibility;
  termStartedAt?: Maybe<Scalars['BigInt']['output']>;
  termEndsAt: Scalars['BigInt']['output'];
  topK: Scalars['BigInt']['output'];
  transitionPeriod: Scalars['BigInt']['output'];
  contest: Scalars['String']['output'];
  winners?: Maybe<Array<Scalars['String']['output']>>;
};

export type Arb_JokeRaceEligibilityTerm_filter = {
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
  jokeRaceEligibility_?: InputMaybe<Arb_JokeRaceEligibility_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_JokeRaceEligibilityTerm_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_JokeRaceEligibilityTerm_filter>>>;
};

export type Arb_JokeRaceEligibilityTerm_orderBy =
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

export type Arb_JokeRaceEligibility_filter = {
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
  adminHat_?: InputMaybe<Arb_HatAuthority_filter>;
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
  currentTerm_?: InputMaybe<Arb_JokeRaceEligibilityTerm_filter>;
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
  nextTerm_?: InputMaybe<Arb_JokeRaceEligibilityTerm_filter>;
  allTerms_?: InputMaybe<Arb_JokeRaceEligibilityTerm_filter>;
  events_?: InputMaybe<Arb_JokeRaceEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_JokeRaceEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_JokeRaceEligibility_filter>>>;
};

export type Arb_JokeRaceEligibility_orderBy =
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

export type Arb_JokeRaceEvent = {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  jokeRaceEligibilityInstance: Arb_JokeRaceEligibility;
};

export type Arb_JokeRaceEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  jokeRaceEligibilityInstance_?: InputMaybe<Arb_JokeRaceEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_JokeRaceEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_JokeRaceEvent_filter>>>;
};

export type Arb_JokeRaceEvent_orderBy =
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

export type Arb_JokeRace_NextTermSetEvent = Arb_JokeRaceEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  jokeRaceEligibilityInstance: Arb_JokeRaceEligibility;
  newContest: Scalars['String']['output'];
  newTopK: Scalars['BigInt']['output'];
  newTermEnd: Scalars['BigInt']['output'];
  newTransitionPeriod: Scalars['BigInt']['output'];
};

export type Arb_JokeRace_NextTermSetEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  jokeRaceEligibilityInstance_?: InputMaybe<Arb_JokeRaceEligibility_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_JokeRace_NextTermSetEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_JokeRace_NextTermSetEvent_filter>>>;
};

export type Arb_JokeRace_NextTermSetEvent_orderBy =
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

export type Arb_JokeRace_TermStartedEvent = Arb_JokeRaceEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  jokeRaceEligibilityInstance: Arb_JokeRaceEligibility;
  contest: Scalars['String']['output'];
  topK: Scalars['BigInt']['output'];
  termEnd: Scalars['BigInt']['output'];
  transitionPeriod: Scalars['BigInt']['output'];
};

export type Arb_JokeRace_TermStartedEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  jokeRaceEligibilityInstance_?: InputMaybe<Arb_JokeRaceEligibility_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_JokeRace_TermStartedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_JokeRace_TermStartedEvent_filter>>>;
};

export type Arb_JokeRace_TermStartedEvent_orderBy =
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
export type Arb_OrderDirection =
  | 'asc'
  | 'desc';

/**  Passthrough Module  */
export type Arb_PassthroughModule = Arb_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  passthroughHat: Arb_HatAuthority;
};

export type Arb_PassthroughModule_filter = {
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
  passthroughHat_?: InputMaybe<Arb_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_PassthroughModule_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_PassthroughModule_filter>>>;
};

export type Arb_PassthroughModule_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'passthroughHat'
  | 'passthroughHat__id'
  | 'passthroughHat__primaryHatsAccount1ofNAddress';

export type Query = {
  Arb_hatAuthority?: Maybe<Arb_HatAuthority>;
  Arb_hatAuthorities: Array<Arb_HatAuthority>;
  Arb_hatsSignerGate?: Maybe<Arb_HatsSignerGate>;
  Arb_hatsSignerGates: Array<Arb_HatsSignerGate>;
  Arb_hatsAccount1OfN?: Maybe<Arb_HatsAccount1ofN>;
  Arb_hatsAccount1OfNs: Array<Arb_HatsAccount1ofN>;
  Arb_hatsAccount1OfNOperation?: Maybe<Arb_HatsAccount1ofNOperation>;
  Arb_hatsAccount1OfNOperations: Array<Arb_HatsAccount1ofNOperation>;
  Arb_hatsStakingShaman?: Maybe<Arb_HatsStakingShaman>;
  Arb_hatsStakingShamans: Array<Arb_HatsStakingShaman>;
  Arb_shamanStake?: Maybe<Arb_ShamanStake>;
  Arb_shamanStakes: Array<Arb_ShamanStake>;
  Arb_hatsFarcasterDelegator?: Maybe<Arb_HatsFarcasterDelegator>;
  Arb_hatsFarcasterDelegators: Array<Arb_HatsFarcasterDelegator>;
  Arb_jokeRaceEligibility?: Maybe<Arb_JokeRaceEligibility>;
  Arb_jokeRaceEligibilities: Array<Arb_JokeRaceEligibility>;
  Arb_jokeRaceEligibilityTerm?: Maybe<Arb_JokeRaceEligibilityTerm>;
  Arb_jokeRaceEligibilityTerms: Array<Arb_JokeRaceEligibilityTerm>;
  Arb_jokeRaceNextTermSetEvent?: Maybe<Arb_JokeRace_NextTermSetEvent>;
  Arb_jokeRaceNextTermSetEvents: Array<Arb_JokeRace_NextTermSetEvent>;
  Arb_jokeRaceTermStartedEvent?: Maybe<Arb_JokeRace_TermStartedEvent>;
  Arb_jokeRaceTermStartedEvents: Array<Arb_JokeRace_TermStartedEvent>;
  Arb_allowListEligibility?: Maybe<Arb_AllowListEligibility>;
  Arb_allowListEligibilities: Array<Arb_AllowListEligibility>;
  Arb_allowListEligibilityData?: Maybe<Arb_AllowListEligibilityData>;
  Arb_allowListEligibilityDatas: Array<Arb_AllowListEligibilityData>;
  Arb_allowlistAccountAddedEvent?: Maybe<Arb_Allowlist_AccountAddedEvent>;
  Arb_allowlistAccountAddedEvents: Array<Arb_Allowlist_AccountAddedEvent>;
  Arb_allowlistAccountsAddedEvent?: Maybe<Arb_Allowlist_AccountsAddedEvent>;
  Arb_allowlistAccountsAddedEvents: Array<Arb_Allowlist_AccountsAddedEvent>;
  Arb_allowlistAccountRemovedEvent?: Maybe<Arb_Allowlist_AccountRemovedEvent>;
  Arb_allowlistAccountRemovedEvents: Array<Arb_Allowlist_AccountRemovedEvent>;
  Arb_allowlistAccountsRemovedEvent?: Maybe<Arb_Allowlist_AccountsRemovedEvent>;
  Arb_allowlistAccountsRemovedEvents: Array<Arb_Allowlist_AccountsRemovedEvent>;
  Arb_allowlistAccountStandingChangedEvent?: Maybe<Arb_Allowlist_AccountStandingChangedEvent>;
  Arb_allowlistAccountStandingChangedEvents: Array<Arb_Allowlist_AccountStandingChangedEvent>;
  Arb_allowlistAccountsStandingChangedEvent?: Maybe<Arb_Allowlist_AccountsStandingChangedEvent>;
  Arb_allowlistAccountsStandingChangedEvents: Array<Arb_Allowlist_AccountsStandingChangedEvent>;
  Arb_allowlistOwnerHatSetEvent?: Maybe<Arb_Allowlist_OwnerHatSetEvent>;
  Arb_allowlistOwnerHatSetEvents: Array<Arb_Allowlist_OwnerHatSetEvent>;
  Arb_allowlistArbitratorHatSetEvent?: Maybe<Arb_Allowlist_ArbitratorHatSetEvent>;
  Arb_allowlistArbitratorHatSetEvents: Array<Arb_Allowlist_ArbitratorHatSetEvent>;
  Arb_hatsElectionEligibility?: Maybe<Arb_HatsElectionEligibility>;
  Arb_hatsElectionEligibilities: Array<Arb_HatsElectionEligibility>;
  Arb_electionTerm?: Maybe<Arb_ElectionTerm>;
  Arb_electionTerms: Array<Arb_ElectionTerm>;
  Arb_electionElectionOpenedEvent?: Maybe<Arb_Election_ElectionOpenedEvent>;
  Arb_electionElectionOpenedEvents: Array<Arb_Election_ElectionOpenedEvent>;
  Arb_electionElectionCompletedEvent?: Maybe<Arb_Election_ElectionCompletedEvent>;
  Arb_electionElectionCompletedEvents: Array<Arb_Election_ElectionCompletedEvent>;
  Arb_electionNewTermStartedEvent?: Maybe<Arb_Election_NewTermStartedEvent>;
  Arb_electionNewTermStartedEvents: Array<Arb_Election_NewTermStartedEvent>;
  Arb_electionRecalledEvent?: Maybe<Arb_Election_RecalledEvent>;
  Arb_electionRecalledEvents: Array<Arb_Election_RecalledEvent>;
  Arb_passthroughModule?: Maybe<Arb_PassthroughModule>;
  Arb_passthroughModules: Array<Arb_PassthroughModule>;
  Arb_stakingEligibility?: Maybe<Arb_StakingEligibility>;
  Arb_stakingEligibilities: Array<Arb_StakingEligibility>;
  Arb_stake?: Maybe<Arb_Stake>;
  Arb_stakes: Array<Arb_Stake>;
  Arb_stakingStakedEvent?: Maybe<Arb_Staking_StakedEvent>;
  Arb_stakingStakedEvents: Array<Arb_Staking_StakedEvent>;
  Arb_stakingUnstakeBegunEvent?: Maybe<Arb_Staking_UnstakeBegunEvent>;
  Arb_stakingUnstakeBegunEvents: Array<Arb_Staking_UnstakeBegunEvent>;
  Arb_stakingSlashedEvent?: Maybe<Arb_Staking_SlashedEvent>;
  Arb_stakingSlashedEvents: Array<Arb_Staking_SlashedEvent>;
  Arb_stakingMinStakeChangedEvent?: Maybe<Arb_Staking_MinStakeChangedEvent>;
  Arb_stakingMinStakeChangedEvents: Array<Arb_Staking_MinStakeChangedEvent>;
  Arb_stakingJudgeHatChangedEvent?: Maybe<Arb_Staking_JudgeHatChangedEvent>;
  Arb_stakingJudgeHatChangedEvents: Array<Arb_Staking_JudgeHatChangedEvent>;
  Arb_stakingRecipientHatChangedEvent?: Maybe<Arb_Staking_RecipientHatChangedEvent>;
  Arb_stakingRecipientHatChangedEvents: Array<Arb_Staking_RecipientHatChangedEvent>;
  Arb_stakingCooldownPeriodChangedEvent?: Maybe<Arb_Staking_CooldownPeriodChangedEvent>;
  Arb_stakingCooldownPeriodChangedEvents: Array<Arb_Staking_CooldownPeriodChangedEvent>;
  Arb_stakingForgivenEvent?: Maybe<Arb_Staking_ForgivenEvent>;
  Arb_stakingForgivenEvents: Array<Arb_Staking_ForgivenEvent>;
  Arb_seasonToggle?: Maybe<Arb_SeasonToggle>;
  Arb_seasonToggles: Array<Arb_SeasonToggle>;
  Arb_characterSheetsLevelEligibility?: Maybe<Arb_CharacterSheetsLevelEligibility>;
  Arb_characterSheetsLevelEligibilities: Array<Arb_CharacterSheetsLevelEligibility>;
  Arb_agreementEligibility?: Maybe<Arb_AgreementEligibility>;
  Arb_agreementEligibilities: Array<Arb_AgreementEligibility>;
  Arb_agreement?: Maybe<Arb_Agreement>;
  Arb_agreements: Array<Arb_Agreement>;
  Arb_agreementHatClaimedWithAgreementEvent?: Maybe<Arb_Agreement_HatClaimedWithAgreementEvent>;
  Arb_agreementHatClaimedWithAgreementEvents: Array<Arb_Agreement_HatClaimedWithAgreementEvent>;
  Arb_agreementAgreementSignedEvent?: Maybe<Arb_Agreement_AgreementSignedEvent>;
  Arb_agreementAgreementSignedEvents: Array<Arb_Agreement_AgreementSignedEvent>;
  Arb_agreementAgreementSetEvent?: Maybe<Arb_Agreement_AgreementSetEvent>;
  Arb_agreementAgreementSetEvents: Array<Arb_Agreement_AgreementSetEvent>;
  Arb_agreementOwnerHatSetEvent?: Maybe<Arb_Agreement_OwnerHatSetEvent>;
  Arb_agreementOwnerHatSetEvents: Array<Arb_Agreement_OwnerHatSetEvent>;
  Arb_agreementArbitratorHatSetEvent?: Maybe<Arb_Agreement_ArbitratorHatSetEvent>;
  Arb_agreementArbitratorHatSetEvents: Array<Arb_Agreement_ArbitratorHatSetEvent>;
  Arb_erc20Eligibility?: Maybe<Arb_Erc20Eligibility>;
  Arb_erc20Eligibilities: Array<Arb_Erc20Eligibility>;
  Arb_erc721Eligibility?: Maybe<Arb_Erc721Eligibility>;
  Arb_erc721Eligibilities: Array<Arb_Erc721Eligibility>;
  Arb_erc1155Eligibility?: Maybe<Arb_Erc1155Eligibility>;
  Arb_erc1155Eligibilities: Array<Arb_Erc1155Eligibility>;
  Arb_hatWearingEligibility?: Maybe<Arb_HatWearingEligibility>;
  Arb_hatWearingEligibilities: Array<Arb_HatWearingEligibility>;
  Arb_gitcoinPassportEligibility?: Maybe<Arb_GitcoinPassportEligibility>;
  Arb_gitcoinPassportEligibilities: Array<Arb_GitcoinPassportEligibility>;
  Arb_coLinksEligibility?: Maybe<Arb_CoLinksEligibility>;
  Arb_coLinksEligibilities: Array<Arb_CoLinksEligibility>;
  Arb_hatsModule?: Maybe<Arb_HatsModule>;
  Arb_hatsModules: Array<Arb_HatsModule>;
  Arb_hatsModuleEvent?: Maybe<Arb_HatsModuleEvent>;
  Arb_hatsModuleEvents: Array<Arb_HatsModuleEvent>;
  Arb_jokeRaceEvent?: Maybe<Arb_JokeRaceEvent>;
  Arb_jokeRaceEvents: Array<Arb_JokeRaceEvent>;
  Arb_allowlistEvent?: Maybe<Arb_AllowlistEvent>;
  Arb_allowlistEvents: Array<Arb_AllowlistEvent>;
  Arb_electionEvent?: Maybe<Arb_ElectionEvent>;
  Arb_electionEvents: Array<Arb_ElectionEvent>;
  Arb_stakingEvent?: Maybe<Arb_StakingEvent>;
  Arb_stakingEvents: Array<Arb_StakingEvent>;
  Arb_agreementEvent?: Maybe<Arb_AgreementEvent>;
  Arb_agreementEvents: Array<Arb_AgreementEvent>;
  /** Access to subgraph metadata */
  Arb__meta?: Maybe<Arb__Meta_>;
};


export type QueryArb_hatAuthorityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatAuthoritiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatAuthority_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatsSignerGateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatsSignerGatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsSignerGate_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatsAccount1OfNArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatsAccount1OfNsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsAccount1ofN_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatsAccount1OfNOperationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatsAccount1OfNOperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsAccount1ofNOperation_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatsStakingShamanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatsStakingShamansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsStakingShaman_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsStakingShaman_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_shamanStakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_shamanStakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_ShamanStake_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_ShamanStake_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatsFarcasterDelegatorArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatsFarcasterDelegatorsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsFarcasterDelegator_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_jokeRaceEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_jokeRaceEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_JokeRaceEligibility_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_jokeRaceEligibilityTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_jokeRaceEligibilityTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_JokeRaceEligibilityTerm_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_JokeRaceEligibilityTerm_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_jokeRaceNextTermSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_jokeRaceNextTermSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_JokeRace_NextTermSetEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_JokeRace_NextTermSetEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_jokeRaceTermStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_jokeRaceTermStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_JokeRace_TermStartedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_JokeRace_TermStartedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_allowListEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_allowListEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_AllowListEligibility_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_allowListEligibilityDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_allowListEligibilityDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_AllowListEligibilityData_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_AllowListEligibilityData_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_allowlistAccountAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_allowlistAccountAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Allowlist_AccountAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Allowlist_AccountAddedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_allowlistAccountsAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_allowlistAccountsAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Allowlist_AccountsAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Allowlist_AccountsAddedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_allowlistAccountRemovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_allowlistAccountRemovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Allowlist_AccountRemovedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Allowlist_AccountRemovedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_allowlistAccountsRemovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_allowlistAccountsRemovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Allowlist_AccountsRemovedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Allowlist_AccountsRemovedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_allowlistAccountStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_allowlistAccountStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Allowlist_AccountStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Allowlist_AccountStandingChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_allowlistAccountsStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_allowlistAccountsStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Allowlist_AccountsStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Allowlist_AccountsStandingChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_allowlistOwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_allowlistOwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Allowlist_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Allowlist_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_allowlistArbitratorHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_allowlistArbitratorHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Allowlist_ArbitratorHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Allowlist_ArbitratorHatSetEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatsElectionEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatsElectionEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsElectionEligibility_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_electionTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_electionTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_ElectionTerm_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_electionElectionOpenedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_electionElectionOpenedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Election_ElectionOpenedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Election_ElectionOpenedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_electionElectionCompletedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_electionElectionCompletedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Election_ElectionCompletedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Election_ElectionCompletedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_electionNewTermStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_electionNewTermStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Election_NewTermStartedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Election_NewTermStartedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_electionRecalledEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_electionRecalledEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Election_RecalledEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Election_RecalledEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_passthroughModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_passthroughModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_PassthroughModule_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_stakingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_stakingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_StakingEligibility_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_stakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_stakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Stake_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Stake_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_stakingStakedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_stakingStakedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Staking_StakedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Staking_StakedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_stakingUnstakeBegunEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_stakingUnstakeBegunEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Staking_UnstakeBegunEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Staking_UnstakeBegunEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_stakingSlashedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_stakingSlashedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Staking_SlashedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Staking_SlashedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_stakingMinStakeChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_stakingMinStakeChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Staking_MinStakeChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Staking_MinStakeChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_stakingJudgeHatChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_stakingJudgeHatChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Staking_JudgeHatChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Staking_JudgeHatChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_stakingRecipientHatChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_stakingRecipientHatChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Staking_RecipientHatChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Staking_RecipientHatChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_stakingCooldownPeriodChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_stakingCooldownPeriodChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Staking_CooldownPeriodChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Staking_CooldownPeriodChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_stakingForgivenEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_stakingForgivenEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Staking_ForgivenEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Staking_ForgivenEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_seasonToggleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_seasonTogglesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_SeasonToggle_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_characterSheetsLevelEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_characterSheetsLevelEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_CharacterSheetsLevelEligibility_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_agreementEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_agreementEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_AgreementEligibility_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_agreementArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_agreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Agreement_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Agreement_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_agreementHatClaimedWithAgreementEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_agreementHatClaimedWithAgreementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Agreement_HatClaimedWithAgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Agreement_HatClaimedWithAgreementEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_agreementAgreementSignedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_agreementAgreementSignedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Agreement_AgreementSignedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Agreement_AgreementSignedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_agreementAgreementSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_agreementAgreementSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Agreement_AgreementSetEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Agreement_AgreementSetEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_agreementOwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_agreementOwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Agreement_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Agreement_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_agreementArbitratorHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_agreementArbitratorHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Agreement_ArbitratorHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Agreement_ArbitratorHatSetEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_erc20EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_erc20EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Erc20Eligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Erc20Eligibility_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_erc721EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_erc721EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Erc721Eligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Erc721Eligibility_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_erc1155EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_erc1155EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Erc1155Eligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Erc1155Eligibility_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatWearingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatWearingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatWearingEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatWearingEligibility_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_gitcoinPassportEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_gitcoinPassportEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_GitcoinPassportEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_GitcoinPassportEligibility_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_coLinksEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_coLinksEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_CoLinksEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_CoLinksEligibility_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatsModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatsModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsModule_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsModule_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatsModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_hatsModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsModuleEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_jokeRaceEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_jokeRaceEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_JokeRaceEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_JokeRaceEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_allowlistEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_allowlistEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_AllowlistEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_AllowlistEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_electionEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_electionEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_ElectionEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_ElectionEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_stakingEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_stakingEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_StakingEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_StakingEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_agreementEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb_agreementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_AgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_AgreementEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type QueryArb__metaArgs = {
  block?: InputMaybe<Arb_Block_height>;
};

/**  Season Toggle  */
export type Arb_SeasonToggle = Arb_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  hatAdmins: Array<Arb_HatAuthority>;
};


/**  Season Toggle  */
export type Arb_SeasonTogglehatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatAuthority_filter>;
};

export type Arb_SeasonToggle_filter = {
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
  hatAdmins_?: InputMaybe<Arb_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_SeasonToggle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_SeasonToggle_filter>>>;
};

export type Arb_SeasonToggle_orderBy =
  | 'id'
  | 'version'
  | 'hatId'
  | 'hatAdmins';

export type Arb_ShamanStake = {
  id: Scalars['ID']['output'];
  stakingShaman: Arb_HatsStakingShaman;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  unstakingAmount: Scalars['BigInt']['output'];
  canUnstakeAfter: Scalars['BigInt']['output'];
};

export type Arb_ShamanStake_filter = {
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
  stakingShaman_?: InputMaybe<Arb_HatsStakingShaman_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_ShamanStake_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_ShamanStake_filter>>>;
};

export type Arb_ShamanStake_orderBy =
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

export type Arb_Stake = {
  id: Scalars['ID']['output'];
  stakingEligiblity: Arb_StakingEligibility;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  slashed: Scalars['Boolean']['output'];
  cooldownAmount: Scalars['BigInt']['output'];
  cooldownEndsAt: Scalars['BigInt']['output'];
};

export type Arb_Stake_filter = {
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
  stakingEligiblity_?: InputMaybe<Arb_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Stake_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Stake_filter>>>;
};

export type Arb_Stake_orderBy =
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
export type Arb_StakingEligibility = Arb_HatsModule & {
  id: Scalars['ID']['output'];
  version?: Maybe<Scalars['String']['output']>;
  hatId: Scalars['String']['output'];
  token: Scalars['String']['output'];
  judgeHat: Arb_HatAuthority;
  recipientHat: Arb_HatAuthority;
  hatAdmins: Array<Arb_HatAuthority>;
  minStake: Scalars['BigInt']['output'];
  cooldownPeriod: Scalars['BigInt']['output'];
  totalSlashedStakes: Scalars['BigInt']['output'];
  stakes: Array<Arb_Stake>;
  events: Array<Arb_StakingEvent>;
};


/**  Staking Eligibility  */
export type Arb_StakingEligibilityhatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatAuthority_filter>;
};


/**  Staking Eligibility  */
export type Arb_StakingEligibilitystakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Stake_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Stake_filter>;
};


/**  Staking Eligibility  */
export type Arb_StakingEligibilityeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_StakingEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_StakingEvent_filter>;
};

export type Arb_StakingEligibility_filter = {
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
  judgeHat_?: InputMaybe<Arb_HatAuthority_filter>;
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
  recipientHat_?: InputMaybe<Arb_HatAuthority_filter>;
  hatAdmins?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_?: InputMaybe<Arb_HatAuthority_filter>;
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
  stakes_?: InputMaybe<Arb_Stake_filter>;
  events_?: InputMaybe<Arb_StakingEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_StakingEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_StakingEligibility_filter>>>;
};

export type Arb_StakingEligibility_orderBy =
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

export type Arb_StakingEvent = {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  stakingEligibilityInstance: Arb_StakingEligibility;
};

export type Arb_StakingEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  stakingEligibilityInstance_?: InputMaybe<Arb_StakingEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_StakingEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_StakingEvent_filter>>>;
};

export type Arb_StakingEvent_orderBy =
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

export type Arb_Staking_CooldownPeriodChangedEvent = Arb_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  stakingEligibilityInstance: Arb_StakingEligibility;
  newDelay: Scalars['BigInt']['output'];
};

export type Arb_Staking_CooldownPeriodChangedEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  stakingEligibilityInstance_?: InputMaybe<Arb_StakingEligibility_filter>;
  newDelay?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_not?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newDelay_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newDelay_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Staking_CooldownPeriodChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Staking_CooldownPeriodChangedEvent_filter>>>;
};

export type Arb_Staking_CooldownPeriodChangedEvent_orderBy =
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

export type Arb_Staking_ForgivenEvent = Arb_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  stakingEligibilityInstance: Arb_StakingEligibility;
  staker: Scalars['String']['output'];
};

export type Arb_Staking_ForgivenEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  stakingEligibilityInstance_?: InputMaybe<Arb_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Staking_ForgivenEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Staking_ForgivenEvent_filter>>>;
};

export type Arb_Staking_ForgivenEvent_orderBy =
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

export type Arb_Staking_JudgeHatChangedEvent = Arb_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  stakingEligibilityInstance: Arb_StakingEligibility;
  newJudgeHat: Scalars['String']['output'];
};

export type Arb_Staking_JudgeHatChangedEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  stakingEligibilityInstance_?: InputMaybe<Arb_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Staking_JudgeHatChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Staking_JudgeHatChangedEvent_filter>>>;
};

export type Arb_Staking_JudgeHatChangedEvent_orderBy =
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

export type Arb_Staking_MinStakeChangedEvent = Arb_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  stakingEligibilityInstance: Arb_StakingEligibility;
  newMinStake: Scalars['BigInt']['output'];
};

export type Arb_Staking_MinStakeChangedEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  stakingEligibilityInstance_?: InputMaybe<Arb_StakingEligibility_filter>;
  newMinStake?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_not?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newMinStake_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newMinStake_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Staking_MinStakeChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Staking_MinStakeChangedEvent_filter>>>;
};

export type Arb_Staking_MinStakeChangedEvent_orderBy =
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

export type Arb_Staking_RecipientHatChangedEvent = Arb_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  stakingEligibilityInstance: Arb_StakingEligibility;
  newRecipientHat: Scalars['String']['output'];
};

export type Arb_Staking_RecipientHatChangedEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  stakingEligibilityInstance_?: InputMaybe<Arb_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Staking_RecipientHatChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Staking_RecipientHatChangedEvent_filter>>>;
};

export type Arb_Staking_RecipientHatChangedEvent_orderBy =
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

export type Arb_Staking_SlashedEvent = Arb_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  stakingEligibilityInstance: Arb_StakingEligibility;
  wearer: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
};

export type Arb_Staking_SlashedEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  stakingEligibilityInstance_?: InputMaybe<Arb_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Staking_SlashedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Staking_SlashedEvent_filter>>>;
};

export type Arb_Staking_SlashedEvent_orderBy =
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

export type Arb_Staking_StakedEvent = Arb_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  stakingEligibilityInstance: Arb_StakingEligibility;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
};

export type Arb_Staking_StakedEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  stakingEligibilityInstance_?: InputMaybe<Arb_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Staking_StakedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Staking_StakedEvent_filter>>>;
};

export type Arb_Staking_StakedEvent_orderBy =
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

export type Arb_Staking_UnstakeBegunEvent = Arb_StakingEvent & {
  id: Scalars['ID']['output'];
  module: Arb_HatsModule;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Arb_Bytes']['output'];
  stakingEligibilityInstance: Arb_StakingEligibility;
  staker: Scalars['String']['output'];
  amount: Scalars['BigInt']['output'];
  cooldownEnd: Scalars['BigInt']['output'];
};

export type Arb_Staking_UnstakeBegunEvent_filter = {
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
  module_?: InputMaybe<Arb_HatsModule_filter>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  stakingEligibilityInstance_?: InputMaybe<Arb_StakingEligibility_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_Staking_UnstakeBegunEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_Staking_UnstakeBegunEvent_filter>>>;
};

export type Arb_Staking_UnstakeBegunEvent_orderBy =
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
  Arb_hatAuthority?: Maybe<Arb_HatAuthority>;
  Arb_hatAuthorities: Array<Arb_HatAuthority>;
  Arb_hatsSignerGate?: Maybe<Arb_HatsSignerGate>;
  Arb_hatsSignerGates: Array<Arb_HatsSignerGate>;
  Arb_hatsAccount1OfN?: Maybe<Arb_HatsAccount1ofN>;
  Arb_hatsAccount1OfNs: Array<Arb_HatsAccount1ofN>;
  Arb_hatsAccount1OfNOperation?: Maybe<Arb_HatsAccount1ofNOperation>;
  Arb_hatsAccount1OfNOperations: Array<Arb_HatsAccount1ofNOperation>;
  Arb_hatsStakingShaman?: Maybe<Arb_HatsStakingShaman>;
  Arb_hatsStakingShamans: Array<Arb_HatsStakingShaman>;
  Arb_shamanStake?: Maybe<Arb_ShamanStake>;
  Arb_shamanStakes: Array<Arb_ShamanStake>;
  Arb_hatsFarcasterDelegator?: Maybe<Arb_HatsFarcasterDelegator>;
  Arb_hatsFarcasterDelegators: Array<Arb_HatsFarcasterDelegator>;
  Arb_jokeRaceEligibility?: Maybe<Arb_JokeRaceEligibility>;
  Arb_jokeRaceEligibilities: Array<Arb_JokeRaceEligibility>;
  Arb_jokeRaceEligibilityTerm?: Maybe<Arb_JokeRaceEligibilityTerm>;
  Arb_jokeRaceEligibilityTerms: Array<Arb_JokeRaceEligibilityTerm>;
  Arb_jokeRaceNextTermSetEvent?: Maybe<Arb_JokeRace_NextTermSetEvent>;
  Arb_jokeRaceNextTermSetEvents: Array<Arb_JokeRace_NextTermSetEvent>;
  Arb_jokeRaceTermStartedEvent?: Maybe<Arb_JokeRace_TermStartedEvent>;
  Arb_jokeRaceTermStartedEvents: Array<Arb_JokeRace_TermStartedEvent>;
  Arb_allowListEligibility?: Maybe<Arb_AllowListEligibility>;
  Arb_allowListEligibilities: Array<Arb_AllowListEligibility>;
  Arb_allowListEligibilityData?: Maybe<Arb_AllowListEligibilityData>;
  Arb_allowListEligibilityDatas: Array<Arb_AllowListEligibilityData>;
  Arb_allowlistAccountAddedEvent?: Maybe<Arb_Allowlist_AccountAddedEvent>;
  Arb_allowlistAccountAddedEvents: Array<Arb_Allowlist_AccountAddedEvent>;
  Arb_allowlistAccountsAddedEvent?: Maybe<Arb_Allowlist_AccountsAddedEvent>;
  Arb_allowlistAccountsAddedEvents: Array<Arb_Allowlist_AccountsAddedEvent>;
  Arb_allowlistAccountRemovedEvent?: Maybe<Arb_Allowlist_AccountRemovedEvent>;
  Arb_allowlistAccountRemovedEvents: Array<Arb_Allowlist_AccountRemovedEvent>;
  Arb_allowlistAccountsRemovedEvent?: Maybe<Arb_Allowlist_AccountsRemovedEvent>;
  Arb_allowlistAccountsRemovedEvents: Array<Arb_Allowlist_AccountsRemovedEvent>;
  Arb_allowlistAccountStandingChangedEvent?: Maybe<Arb_Allowlist_AccountStandingChangedEvent>;
  Arb_allowlistAccountStandingChangedEvents: Array<Arb_Allowlist_AccountStandingChangedEvent>;
  Arb_allowlistAccountsStandingChangedEvent?: Maybe<Arb_Allowlist_AccountsStandingChangedEvent>;
  Arb_allowlistAccountsStandingChangedEvents: Array<Arb_Allowlist_AccountsStandingChangedEvent>;
  Arb_allowlistOwnerHatSetEvent?: Maybe<Arb_Allowlist_OwnerHatSetEvent>;
  Arb_allowlistOwnerHatSetEvents: Array<Arb_Allowlist_OwnerHatSetEvent>;
  Arb_allowlistArbitratorHatSetEvent?: Maybe<Arb_Allowlist_ArbitratorHatSetEvent>;
  Arb_allowlistArbitratorHatSetEvents: Array<Arb_Allowlist_ArbitratorHatSetEvent>;
  Arb_hatsElectionEligibility?: Maybe<Arb_HatsElectionEligibility>;
  Arb_hatsElectionEligibilities: Array<Arb_HatsElectionEligibility>;
  Arb_electionTerm?: Maybe<Arb_ElectionTerm>;
  Arb_electionTerms: Array<Arb_ElectionTerm>;
  Arb_electionElectionOpenedEvent?: Maybe<Arb_Election_ElectionOpenedEvent>;
  Arb_electionElectionOpenedEvents: Array<Arb_Election_ElectionOpenedEvent>;
  Arb_electionElectionCompletedEvent?: Maybe<Arb_Election_ElectionCompletedEvent>;
  Arb_electionElectionCompletedEvents: Array<Arb_Election_ElectionCompletedEvent>;
  Arb_electionNewTermStartedEvent?: Maybe<Arb_Election_NewTermStartedEvent>;
  Arb_electionNewTermStartedEvents: Array<Arb_Election_NewTermStartedEvent>;
  Arb_electionRecalledEvent?: Maybe<Arb_Election_RecalledEvent>;
  Arb_electionRecalledEvents: Array<Arb_Election_RecalledEvent>;
  Arb_passthroughModule?: Maybe<Arb_PassthroughModule>;
  Arb_passthroughModules: Array<Arb_PassthroughModule>;
  Arb_stakingEligibility?: Maybe<Arb_StakingEligibility>;
  Arb_stakingEligibilities: Array<Arb_StakingEligibility>;
  Arb_stake?: Maybe<Arb_Stake>;
  Arb_stakes: Array<Arb_Stake>;
  Arb_stakingStakedEvent?: Maybe<Arb_Staking_StakedEvent>;
  Arb_stakingStakedEvents: Array<Arb_Staking_StakedEvent>;
  Arb_stakingUnstakeBegunEvent?: Maybe<Arb_Staking_UnstakeBegunEvent>;
  Arb_stakingUnstakeBegunEvents: Array<Arb_Staking_UnstakeBegunEvent>;
  Arb_stakingSlashedEvent?: Maybe<Arb_Staking_SlashedEvent>;
  Arb_stakingSlashedEvents: Array<Arb_Staking_SlashedEvent>;
  Arb_stakingMinStakeChangedEvent?: Maybe<Arb_Staking_MinStakeChangedEvent>;
  Arb_stakingMinStakeChangedEvents: Array<Arb_Staking_MinStakeChangedEvent>;
  Arb_stakingJudgeHatChangedEvent?: Maybe<Arb_Staking_JudgeHatChangedEvent>;
  Arb_stakingJudgeHatChangedEvents: Array<Arb_Staking_JudgeHatChangedEvent>;
  Arb_stakingRecipientHatChangedEvent?: Maybe<Arb_Staking_RecipientHatChangedEvent>;
  Arb_stakingRecipientHatChangedEvents: Array<Arb_Staking_RecipientHatChangedEvent>;
  Arb_stakingCooldownPeriodChangedEvent?: Maybe<Arb_Staking_CooldownPeriodChangedEvent>;
  Arb_stakingCooldownPeriodChangedEvents: Array<Arb_Staking_CooldownPeriodChangedEvent>;
  Arb_stakingForgivenEvent?: Maybe<Arb_Staking_ForgivenEvent>;
  Arb_stakingForgivenEvents: Array<Arb_Staking_ForgivenEvent>;
  Arb_seasonToggle?: Maybe<Arb_SeasonToggle>;
  Arb_seasonToggles: Array<Arb_SeasonToggle>;
  Arb_characterSheetsLevelEligibility?: Maybe<Arb_CharacterSheetsLevelEligibility>;
  Arb_characterSheetsLevelEligibilities: Array<Arb_CharacterSheetsLevelEligibility>;
  Arb_agreementEligibility?: Maybe<Arb_AgreementEligibility>;
  Arb_agreementEligibilities: Array<Arb_AgreementEligibility>;
  Arb_agreement?: Maybe<Arb_Agreement>;
  Arb_agreements: Array<Arb_Agreement>;
  Arb_agreementHatClaimedWithAgreementEvent?: Maybe<Arb_Agreement_HatClaimedWithAgreementEvent>;
  Arb_agreementHatClaimedWithAgreementEvents: Array<Arb_Agreement_HatClaimedWithAgreementEvent>;
  Arb_agreementAgreementSignedEvent?: Maybe<Arb_Agreement_AgreementSignedEvent>;
  Arb_agreementAgreementSignedEvents: Array<Arb_Agreement_AgreementSignedEvent>;
  Arb_agreementAgreementSetEvent?: Maybe<Arb_Agreement_AgreementSetEvent>;
  Arb_agreementAgreementSetEvents: Array<Arb_Agreement_AgreementSetEvent>;
  Arb_agreementOwnerHatSetEvent?: Maybe<Arb_Agreement_OwnerHatSetEvent>;
  Arb_agreementOwnerHatSetEvents: Array<Arb_Agreement_OwnerHatSetEvent>;
  Arb_agreementArbitratorHatSetEvent?: Maybe<Arb_Agreement_ArbitratorHatSetEvent>;
  Arb_agreementArbitratorHatSetEvents: Array<Arb_Agreement_ArbitratorHatSetEvent>;
  Arb_erc20Eligibility?: Maybe<Arb_Erc20Eligibility>;
  Arb_erc20Eligibilities: Array<Arb_Erc20Eligibility>;
  Arb_erc721Eligibility?: Maybe<Arb_Erc721Eligibility>;
  Arb_erc721Eligibilities: Array<Arb_Erc721Eligibility>;
  Arb_erc1155Eligibility?: Maybe<Arb_Erc1155Eligibility>;
  Arb_erc1155Eligibilities: Array<Arb_Erc1155Eligibility>;
  Arb_hatWearingEligibility?: Maybe<Arb_HatWearingEligibility>;
  Arb_hatWearingEligibilities: Array<Arb_HatWearingEligibility>;
  Arb_gitcoinPassportEligibility?: Maybe<Arb_GitcoinPassportEligibility>;
  Arb_gitcoinPassportEligibilities: Array<Arb_GitcoinPassportEligibility>;
  Arb_coLinksEligibility?: Maybe<Arb_CoLinksEligibility>;
  Arb_coLinksEligibilities: Array<Arb_CoLinksEligibility>;
  Arb_hatsModule?: Maybe<Arb_HatsModule>;
  Arb_hatsModules: Array<Arb_HatsModule>;
  Arb_hatsModuleEvent?: Maybe<Arb_HatsModuleEvent>;
  Arb_hatsModuleEvents: Array<Arb_HatsModuleEvent>;
  Arb_jokeRaceEvent?: Maybe<Arb_JokeRaceEvent>;
  Arb_jokeRaceEvents: Array<Arb_JokeRaceEvent>;
  Arb_allowlistEvent?: Maybe<Arb_AllowlistEvent>;
  Arb_allowlistEvents: Array<Arb_AllowlistEvent>;
  Arb_electionEvent?: Maybe<Arb_ElectionEvent>;
  Arb_electionEvents: Array<Arb_ElectionEvent>;
  Arb_stakingEvent?: Maybe<Arb_StakingEvent>;
  Arb_stakingEvents: Array<Arb_StakingEvent>;
  Arb_agreementEvent?: Maybe<Arb_AgreementEvent>;
  Arb_agreementEvents: Array<Arb_AgreementEvent>;
  /** Access to subgraph metadata */
  Arb__meta?: Maybe<Arb__Meta_>;
};


export type SubscriptionArb_hatAuthorityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatAuthoritiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatAuthority_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatsSignerGateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatsSignerGatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsSignerGate_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatsAccount1OfNArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatsAccount1OfNsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsAccount1ofN_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatsAccount1OfNOperationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatsAccount1OfNOperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsAccount1ofNOperation_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatsStakingShamanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatsStakingShamansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsStakingShaman_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsStakingShaman_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_shamanStakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_shamanStakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_ShamanStake_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_ShamanStake_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatsFarcasterDelegatorArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatsFarcasterDelegatorsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsFarcasterDelegator_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsFarcasterDelegator_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_jokeRaceEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_jokeRaceEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_JokeRaceEligibility_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_jokeRaceEligibilityTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_jokeRaceEligibilityTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_JokeRaceEligibilityTerm_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_JokeRaceEligibilityTerm_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_jokeRaceNextTermSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_jokeRaceNextTermSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_JokeRace_NextTermSetEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_JokeRace_NextTermSetEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_jokeRaceTermStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_jokeRaceTermStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_JokeRace_TermStartedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_JokeRace_TermStartedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_allowListEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_allowListEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_AllowListEligibility_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_allowListEligibilityDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_allowListEligibilityDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_AllowListEligibilityData_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_AllowListEligibilityData_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_allowlistAccountAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_allowlistAccountAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Allowlist_AccountAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Allowlist_AccountAddedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_allowlistAccountsAddedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_allowlistAccountsAddedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Allowlist_AccountsAddedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Allowlist_AccountsAddedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_allowlistAccountRemovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_allowlistAccountRemovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Allowlist_AccountRemovedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Allowlist_AccountRemovedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_allowlistAccountsRemovedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_allowlistAccountsRemovedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Allowlist_AccountsRemovedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Allowlist_AccountsRemovedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_allowlistAccountStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_allowlistAccountStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Allowlist_AccountStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Allowlist_AccountStandingChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_allowlistAccountsStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_allowlistAccountsStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Allowlist_AccountsStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Allowlist_AccountsStandingChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_allowlistOwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_allowlistOwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Allowlist_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Allowlist_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_allowlistArbitratorHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_allowlistArbitratorHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Allowlist_ArbitratorHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Allowlist_ArbitratorHatSetEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatsElectionEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatsElectionEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsElectionEligibility_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_electionTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_electionTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_ElectionTerm_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_electionElectionOpenedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_electionElectionOpenedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Election_ElectionOpenedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Election_ElectionOpenedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_electionElectionCompletedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_electionElectionCompletedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Election_ElectionCompletedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Election_ElectionCompletedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_electionNewTermStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_electionNewTermStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Election_NewTermStartedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Election_NewTermStartedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_electionRecalledEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_electionRecalledEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Election_RecalledEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Election_RecalledEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_passthroughModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_passthroughModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_PassthroughModule_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_stakingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_stakingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_StakingEligibility_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_stakeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_stakesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Stake_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Stake_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_stakingStakedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_stakingStakedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Staking_StakedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Staking_StakedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_stakingUnstakeBegunEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_stakingUnstakeBegunEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Staking_UnstakeBegunEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Staking_UnstakeBegunEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_stakingSlashedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_stakingSlashedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Staking_SlashedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Staking_SlashedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_stakingMinStakeChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_stakingMinStakeChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Staking_MinStakeChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Staking_MinStakeChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_stakingJudgeHatChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_stakingJudgeHatChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Staking_JudgeHatChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Staking_JudgeHatChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_stakingRecipientHatChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_stakingRecipientHatChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Staking_RecipientHatChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Staking_RecipientHatChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_stakingCooldownPeriodChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_stakingCooldownPeriodChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Staking_CooldownPeriodChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Staking_CooldownPeriodChangedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_stakingForgivenEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_stakingForgivenEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Staking_ForgivenEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Staking_ForgivenEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_seasonToggleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_seasonTogglesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_SeasonToggle_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_characterSheetsLevelEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_characterSheetsLevelEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_CharacterSheetsLevelEligibility_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_agreementEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_agreementEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_AgreementEligibility_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_agreementArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_agreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Agreement_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Agreement_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_agreementHatClaimedWithAgreementEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_agreementHatClaimedWithAgreementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Agreement_HatClaimedWithAgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Agreement_HatClaimedWithAgreementEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_agreementAgreementSignedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_agreementAgreementSignedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Agreement_AgreementSignedEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Agreement_AgreementSignedEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_agreementAgreementSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_agreementAgreementSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Agreement_AgreementSetEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Agreement_AgreementSetEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_agreementOwnerHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_agreementOwnerHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Agreement_OwnerHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Agreement_OwnerHatSetEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_agreementArbitratorHatSetEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_agreementArbitratorHatSetEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Agreement_ArbitratorHatSetEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Agreement_ArbitratorHatSetEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_erc20EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_erc20EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Erc20Eligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Erc20Eligibility_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_erc721EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_erc721EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Erc721Eligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Erc721Eligibility_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_erc1155EligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_erc1155EligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Erc1155Eligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Erc1155Eligibility_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatWearingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatWearingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatWearingEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatWearingEligibility_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_gitcoinPassportEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_gitcoinPassportEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_GitcoinPassportEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_GitcoinPassportEligibility_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_coLinksEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_coLinksEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_CoLinksEligibility_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_CoLinksEligibility_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatsModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatsModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsModule_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsModule_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatsModuleEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_hatsModuleEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatsModuleEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatsModuleEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_jokeRaceEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_jokeRaceEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_JokeRaceEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_JokeRaceEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_allowlistEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_allowlistEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_AllowlistEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_AllowlistEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_electionEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_electionEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_ElectionEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_ElectionEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_stakingEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_stakingEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_StakingEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_StakingEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_agreementEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb_agreementEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_AgreementEvent_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_AgreementEvent_filter>;
  block?: InputMaybe<Arb_Block_height>;
  subgraphError?: Arb__SubgraphErrorPolicy_;
};


export type SubscriptionArb__metaArgs = {
  block?: InputMaybe<Arb_Block_height>;
};

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
  Arb_hatAuthority: InContextSdkMethod<Query['Arb_hatAuthority'], QueryArb_hatAuthorityArgs, MeshContext>,
  /** null **/
  Arb_hatAuthorities: InContextSdkMethod<Query['Arb_hatAuthorities'], QueryArb_hatAuthoritiesArgs, MeshContext>,
  /** null **/
  Arb_hatsSignerGate: InContextSdkMethod<Query['Arb_hatsSignerGate'], QueryArb_hatsSignerGateArgs, MeshContext>,
  /** null **/
  Arb_hatsSignerGates: InContextSdkMethod<Query['Arb_hatsSignerGates'], QueryArb_hatsSignerGatesArgs, MeshContext>,
  /** null **/
  Arb_hatsAccount1OfN: InContextSdkMethod<Query['Arb_hatsAccount1OfN'], QueryArb_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  Arb_hatsAccount1OfNs: InContextSdkMethod<Query['Arb_hatsAccount1OfNs'], QueryArb_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  Arb_hatsAccount1OfNOperation: InContextSdkMethod<Query['Arb_hatsAccount1OfNOperation'], QueryArb_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  Arb_hatsAccount1OfNOperations: InContextSdkMethod<Query['Arb_hatsAccount1OfNOperations'], QueryArb_hatsAccount1OfNOperationsArgs, MeshContext>,
  /** null **/
  Arb_hatsStakingShaman: InContextSdkMethod<Query['Arb_hatsStakingShaman'], QueryArb_hatsStakingShamanArgs, MeshContext>,
  /** null **/
  Arb_hatsStakingShamans: InContextSdkMethod<Query['Arb_hatsStakingShamans'], QueryArb_hatsStakingShamansArgs, MeshContext>,
  /** null **/
  Arb_shamanStake: InContextSdkMethod<Query['Arb_shamanStake'], QueryArb_shamanStakeArgs, MeshContext>,
  /** null **/
  Arb_shamanStakes: InContextSdkMethod<Query['Arb_shamanStakes'], QueryArb_shamanStakesArgs, MeshContext>,
  /** null **/
  Arb_hatsFarcasterDelegator: InContextSdkMethod<Query['Arb_hatsFarcasterDelegator'], QueryArb_hatsFarcasterDelegatorArgs, MeshContext>,
  /** null **/
  Arb_hatsFarcasterDelegators: InContextSdkMethod<Query['Arb_hatsFarcasterDelegators'], QueryArb_hatsFarcasterDelegatorsArgs, MeshContext>,
  /** null **/
  Arb_jokeRaceEligibility: InContextSdkMethod<Query['Arb_jokeRaceEligibility'], QueryArb_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  Arb_jokeRaceEligibilities: InContextSdkMethod<Query['Arb_jokeRaceEligibilities'], QueryArb_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_jokeRaceEligibilityTerm: InContextSdkMethod<Query['Arb_jokeRaceEligibilityTerm'], QueryArb_jokeRaceEligibilityTermArgs, MeshContext>,
  /** null **/
  Arb_jokeRaceEligibilityTerms: InContextSdkMethod<Query['Arb_jokeRaceEligibilityTerms'], QueryArb_jokeRaceEligibilityTermsArgs, MeshContext>,
  /** null **/
  Arb_jokeRaceNextTermSetEvent: InContextSdkMethod<Query['Arb_jokeRaceNextTermSetEvent'], QueryArb_jokeRaceNextTermSetEventArgs, MeshContext>,
  /** null **/
  Arb_jokeRaceNextTermSetEvents: InContextSdkMethod<Query['Arb_jokeRaceNextTermSetEvents'], QueryArb_jokeRaceNextTermSetEventsArgs, MeshContext>,
  /** null **/
  Arb_jokeRaceTermStartedEvent: InContextSdkMethod<Query['Arb_jokeRaceTermStartedEvent'], QueryArb_jokeRaceTermStartedEventArgs, MeshContext>,
  /** null **/
  Arb_jokeRaceTermStartedEvents: InContextSdkMethod<Query['Arb_jokeRaceTermStartedEvents'], QueryArb_jokeRaceTermStartedEventsArgs, MeshContext>,
  /** null **/
  Arb_allowListEligibility: InContextSdkMethod<Query['Arb_allowListEligibility'], QueryArb_allowListEligibilityArgs, MeshContext>,
  /** null **/
  Arb_allowListEligibilities: InContextSdkMethod<Query['Arb_allowListEligibilities'], QueryArb_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_allowListEligibilityData: InContextSdkMethod<Query['Arb_allowListEligibilityData'], QueryArb_allowListEligibilityDataArgs, MeshContext>,
  /** null **/
  Arb_allowListEligibilityDatas: InContextSdkMethod<Query['Arb_allowListEligibilityDatas'], QueryArb_allowListEligibilityDatasArgs, MeshContext>,
  /** null **/
  Arb_allowlistAccountAddedEvent: InContextSdkMethod<Query['Arb_allowlistAccountAddedEvent'], QueryArb_allowlistAccountAddedEventArgs, MeshContext>,
  /** null **/
  Arb_allowlistAccountAddedEvents: InContextSdkMethod<Query['Arb_allowlistAccountAddedEvents'], QueryArb_allowlistAccountAddedEventsArgs, MeshContext>,
  /** null **/
  Arb_allowlistAccountsAddedEvent: InContextSdkMethod<Query['Arb_allowlistAccountsAddedEvent'], QueryArb_allowlistAccountsAddedEventArgs, MeshContext>,
  /** null **/
  Arb_allowlistAccountsAddedEvents: InContextSdkMethod<Query['Arb_allowlistAccountsAddedEvents'], QueryArb_allowlistAccountsAddedEventsArgs, MeshContext>,
  /** null **/
  Arb_allowlistAccountRemovedEvent: InContextSdkMethod<Query['Arb_allowlistAccountRemovedEvent'], QueryArb_allowlistAccountRemovedEventArgs, MeshContext>,
  /** null **/
  Arb_allowlistAccountRemovedEvents: InContextSdkMethod<Query['Arb_allowlistAccountRemovedEvents'], QueryArb_allowlistAccountRemovedEventsArgs, MeshContext>,
  /** null **/
  Arb_allowlistAccountsRemovedEvent: InContextSdkMethod<Query['Arb_allowlistAccountsRemovedEvent'], QueryArb_allowlistAccountsRemovedEventArgs, MeshContext>,
  /** null **/
  Arb_allowlistAccountsRemovedEvents: InContextSdkMethod<Query['Arb_allowlistAccountsRemovedEvents'], QueryArb_allowlistAccountsRemovedEventsArgs, MeshContext>,
  /** null **/
  Arb_allowlistAccountStandingChangedEvent: InContextSdkMethod<Query['Arb_allowlistAccountStandingChangedEvent'], QueryArb_allowlistAccountStandingChangedEventArgs, MeshContext>,
  /** null **/
  Arb_allowlistAccountStandingChangedEvents: InContextSdkMethod<Query['Arb_allowlistAccountStandingChangedEvents'], QueryArb_allowlistAccountStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_allowlistAccountsStandingChangedEvent: InContextSdkMethod<Query['Arb_allowlistAccountsStandingChangedEvent'], QueryArb_allowlistAccountsStandingChangedEventArgs, MeshContext>,
  /** null **/
  Arb_allowlistAccountsStandingChangedEvents: InContextSdkMethod<Query['Arb_allowlistAccountsStandingChangedEvents'], QueryArb_allowlistAccountsStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_allowlistOwnerHatSetEvent: InContextSdkMethod<Query['Arb_allowlistOwnerHatSetEvent'], QueryArb_allowlistOwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Arb_allowlistOwnerHatSetEvents: InContextSdkMethod<Query['Arb_allowlistOwnerHatSetEvents'], QueryArb_allowlistOwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Arb_allowlistArbitratorHatSetEvent: InContextSdkMethod<Query['Arb_allowlistArbitratorHatSetEvent'], QueryArb_allowlistArbitratorHatSetEventArgs, MeshContext>,
  /** null **/
  Arb_allowlistArbitratorHatSetEvents: InContextSdkMethod<Query['Arb_allowlistArbitratorHatSetEvents'], QueryArb_allowlistArbitratorHatSetEventsArgs, MeshContext>,
  /** null **/
  Arb_hatsElectionEligibility: InContextSdkMethod<Query['Arb_hatsElectionEligibility'], QueryArb_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  Arb_hatsElectionEligibilities: InContextSdkMethod<Query['Arb_hatsElectionEligibilities'], QueryArb_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_electionTerm: InContextSdkMethod<Query['Arb_electionTerm'], QueryArb_electionTermArgs, MeshContext>,
  /** null **/
  Arb_electionTerms: InContextSdkMethod<Query['Arb_electionTerms'], QueryArb_electionTermsArgs, MeshContext>,
  /** null **/
  Arb_electionElectionOpenedEvent: InContextSdkMethod<Query['Arb_electionElectionOpenedEvent'], QueryArb_electionElectionOpenedEventArgs, MeshContext>,
  /** null **/
  Arb_electionElectionOpenedEvents: InContextSdkMethod<Query['Arb_electionElectionOpenedEvents'], QueryArb_electionElectionOpenedEventsArgs, MeshContext>,
  /** null **/
  Arb_electionElectionCompletedEvent: InContextSdkMethod<Query['Arb_electionElectionCompletedEvent'], QueryArb_electionElectionCompletedEventArgs, MeshContext>,
  /** null **/
  Arb_electionElectionCompletedEvents: InContextSdkMethod<Query['Arb_electionElectionCompletedEvents'], QueryArb_electionElectionCompletedEventsArgs, MeshContext>,
  /** null **/
  Arb_electionNewTermStartedEvent: InContextSdkMethod<Query['Arb_electionNewTermStartedEvent'], QueryArb_electionNewTermStartedEventArgs, MeshContext>,
  /** null **/
  Arb_electionNewTermStartedEvents: InContextSdkMethod<Query['Arb_electionNewTermStartedEvents'], QueryArb_electionNewTermStartedEventsArgs, MeshContext>,
  /** null **/
  Arb_electionRecalledEvent: InContextSdkMethod<Query['Arb_electionRecalledEvent'], QueryArb_electionRecalledEventArgs, MeshContext>,
  /** null **/
  Arb_electionRecalledEvents: InContextSdkMethod<Query['Arb_electionRecalledEvents'], QueryArb_electionRecalledEventsArgs, MeshContext>,
  /** null **/
  Arb_passthroughModule: InContextSdkMethod<Query['Arb_passthroughModule'], QueryArb_passthroughModuleArgs, MeshContext>,
  /** null **/
  Arb_passthroughModules: InContextSdkMethod<Query['Arb_passthroughModules'], QueryArb_passthroughModulesArgs, MeshContext>,
  /** null **/
  Arb_stakingEligibility: InContextSdkMethod<Query['Arb_stakingEligibility'], QueryArb_stakingEligibilityArgs, MeshContext>,
  /** null **/
  Arb_stakingEligibilities: InContextSdkMethod<Query['Arb_stakingEligibilities'], QueryArb_stakingEligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_stake: InContextSdkMethod<Query['Arb_stake'], QueryArb_stakeArgs, MeshContext>,
  /** null **/
  Arb_stakes: InContextSdkMethod<Query['Arb_stakes'], QueryArb_stakesArgs, MeshContext>,
  /** null **/
  Arb_stakingStakedEvent: InContextSdkMethod<Query['Arb_stakingStakedEvent'], QueryArb_stakingStakedEventArgs, MeshContext>,
  /** null **/
  Arb_stakingStakedEvents: InContextSdkMethod<Query['Arb_stakingStakedEvents'], QueryArb_stakingStakedEventsArgs, MeshContext>,
  /** null **/
  Arb_stakingUnstakeBegunEvent: InContextSdkMethod<Query['Arb_stakingUnstakeBegunEvent'], QueryArb_stakingUnstakeBegunEventArgs, MeshContext>,
  /** null **/
  Arb_stakingUnstakeBegunEvents: InContextSdkMethod<Query['Arb_stakingUnstakeBegunEvents'], QueryArb_stakingUnstakeBegunEventsArgs, MeshContext>,
  /** null **/
  Arb_stakingSlashedEvent: InContextSdkMethod<Query['Arb_stakingSlashedEvent'], QueryArb_stakingSlashedEventArgs, MeshContext>,
  /** null **/
  Arb_stakingSlashedEvents: InContextSdkMethod<Query['Arb_stakingSlashedEvents'], QueryArb_stakingSlashedEventsArgs, MeshContext>,
  /** null **/
  Arb_stakingMinStakeChangedEvent: InContextSdkMethod<Query['Arb_stakingMinStakeChangedEvent'], QueryArb_stakingMinStakeChangedEventArgs, MeshContext>,
  /** null **/
  Arb_stakingMinStakeChangedEvents: InContextSdkMethod<Query['Arb_stakingMinStakeChangedEvents'], QueryArb_stakingMinStakeChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_stakingJudgeHatChangedEvent: InContextSdkMethod<Query['Arb_stakingJudgeHatChangedEvent'], QueryArb_stakingJudgeHatChangedEventArgs, MeshContext>,
  /** null **/
  Arb_stakingJudgeHatChangedEvents: InContextSdkMethod<Query['Arb_stakingJudgeHatChangedEvents'], QueryArb_stakingJudgeHatChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_stakingRecipientHatChangedEvent: InContextSdkMethod<Query['Arb_stakingRecipientHatChangedEvent'], QueryArb_stakingRecipientHatChangedEventArgs, MeshContext>,
  /** null **/
  Arb_stakingRecipientHatChangedEvents: InContextSdkMethod<Query['Arb_stakingRecipientHatChangedEvents'], QueryArb_stakingRecipientHatChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_stakingCooldownPeriodChangedEvent: InContextSdkMethod<Query['Arb_stakingCooldownPeriodChangedEvent'], QueryArb_stakingCooldownPeriodChangedEventArgs, MeshContext>,
  /** null **/
  Arb_stakingCooldownPeriodChangedEvents: InContextSdkMethod<Query['Arb_stakingCooldownPeriodChangedEvents'], QueryArb_stakingCooldownPeriodChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_stakingForgivenEvent: InContextSdkMethod<Query['Arb_stakingForgivenEvent'], QueryArb_stakingForgivenEventArgs, MeshContext>,
  /** null **/
  Arb_stakingForgivenEvents: InContextSdkMethod<Query['Arb_stakingForgivenEvents'], QueryArb_stakingForgivenEventsArgs, MeshContext>,
  /** null **/
  Arb_seasonToggle: InContextSdkMethod<Query['Arb_seasonToggle'], QueryArb_seasonToggleArgs, MeshContext>,
  /** null **/
  Arb_seasonToggles: InContextSdkMethod<Query['Arb_seasonToggles'], QueryArb_seasonTogglesArgs, MeshContext>,
  /** null **/
  Arb_characterSheetsLevelEligibility: InContextSdkMethod<Query['Arb_characterSheetsLevelEligibility'], QueryArb_characterSheetsLevelEligibilityArgs, MeshContext>,
  /** null **/
  Arb_characterSheetsLevelEligibilities: InContextSdkMethod<Query['Arb_characterSheetsLevelEligibilities'], QueryArb_characterSheetsLevelEligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_agreementEligibility: InContextSdkMethod<Query['Arb_agreementEligibility'], QueryArb_agreementEligibilityArgs, MeshContext>,
  /** null **/
  Arb_agreementEligibilities: InContextSdkMethod<Query['Arb_agreementEligibilities'], QueryArb_agreementEligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_agreement: InContextSdkMethod<Query['Arb_agreement'], QueryArb_agreementArgs, MeshContext>,
  /** null **/
  Arb_agreements: InContextSdkMethod<Query['Arb_agreements'], QueryArb_agreementsArgs, MeshContext>,
  /** null **/
  Arb_agreementHatClaimedWithAgreementEvent: InContextSdkMethod<Query['Arb_agreementHatClaimedWithAgreementEvent'], QueryArb_agreementHatClaimedWithAgreementEventArgs, MeshContext>,
  /** null **/
  Arb_agreementHatClaimedWithAgreementEvents: InContextSdkMethod<Query['Arb_agreementHatClaimedWithAgreementEvents'], QueryArb_agreementHatClaimedWithAgreementEventsArgs, MeshContext>,
  /** null **/
  Arb_agreementAgreementSignedEvent: InContextSdkMethod<Query['Arb_agreementAgreementSignedEvent'], QueryArb_agreementAgreementSignedEventArgs, MeshContext>,
  /** null **/
  Arb_agreementAgreementSignedEvents: InContextSdkMethod<Query['Arb_agreementAgreementSignedEvents'], QueryArb_agreementAgreementSignedEventsArgs, MeshContext>,
  /** null **/
  Arb_agreementAgreementSetEvent: InContextSdkMethod<Query['Arb_agreementAgreementSetEvent'], QueryArb_agreementAgreementSetEventArgs, MeshContext>,
  /** null **/
  Arb_agreementAgreementSetEvents: InContextSdkMethod<Query['Arb_agreementAgreementSetEvents'], QueryArb_agreementAgreementSetEventsArgs, MeshContext>,
  /** null **/
  Arb_agreementOwnerHatSetEvent: InContextSdkMethod<Query['Arb_agreementOwnerHatSetEvent'], QueryArb_agreementOwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Arb_agreementOwnerHatSetEvents: InContextSdkMethod<Query['Arb_agreementOwnerHatSetEvents'], QueryArb_agreementOwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Arb_agreementArbitratorHatSetEvent: InContextSdkMethod<Query['Arb_agreementArbitratorHatSetEvent'], QueryArb_agreementArbitratorHatSetEventArgs, MeshContext>,
  /** null **/
  Arb_agreementArbitratorHatSetEvents: InContextSdkMethod<Query['Arb_agreementArbitratorHatSetEvents'], QueryArb_agreementArbitratorHatSetEventsArgs, MeshContext>,
  /** null **/
  Arb_erc20Eligibility: InContextSdkMethod<Query['Arb_erc20Eligibility'], QueryArb_erc20EligibilityArgs, MeshContext>,
  /** null **/
  Arb_erc20Eligibilities: InContextSdkMethod<Query['Arb_erc20Eligibilities'], QueryArb_erc20EligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_erc721Eligibility: InContextSdkMethod<Query['Arb_erc721Eligibility'], QueryArb_erc721EligibilityArgs, MeshContext>,
  /** null **/
  Arb_erc721Eligibilities: InContextSdkMethod<Query['Arb_erc721Eligibilities'], QueryArb_erc721EligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_erc1155Eligibility: InContextSdkMethod<Query['Arb_erc1155Eligibility'], QueryArb_erc1155EligibilityArgs, MeshContext>,
  /** null **/
  Arb_erc1155Eligibilities: InContextSdkMethod<Query['Arb_erc1155Eligibilities'], QueryArb_erc1155EligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_hatWearingEligibility: InContextSdkMethod<Query['Arb_hatWearingEligibility'], QueryArb_hatWearingEligibilityArgs, MeshContext>,
  /** null **/
  Arb_hatWearingEligibilities: InContextSdkMethod<Query['Arb_hatWearingEligibilities'], QueryArb_hatWearingEligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_gitcoinPassportEligibility: InContextSdkMethod<Query['Arb_gitcoinPassportEligibility'], QueryArb_gitcoinPassportEligibilityArgs, MeshContext>,
  /** null **/
  Arb_gitcoinPassportEligibilities: InContextSdkMethod<Query['Arb_gitcoinPassportEligibilities'], QueryArb_gitcoinPassportEligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_coLinksEligibility: InContextSdkMethod<Query['Arb_coLinksEligibility'], QueryArb_coLinksEligibilityArgs, MeshContext>,
  /** null **/
  Arb_coLinksEligibilities: InContextSdkMethod<Query['Arb_coLinksEligibilities'], QueryArb_coLinksEligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_hatsModule: InContextSdkMethod<Query['Arb_hatsModule'], QueryArb_hatsModuleArgs, MeshContext>,
  /** null **/
  Arb_hatsModules: InContextSdkMethod<Query['Arb_hatsModules'], QueryArb_hatsModulesArgs, MeshContext>,
  /** null **/
  Arb_hatsModuleEvent: InContextSdkMethod<Query['Arb_hatsModuleEvent'], QueryArb_hatsModuleEventArgs, MeshContext>,
  /** null **/
  Arb_hatsModuleEvents: InContextSdkMethod<Query['Arb_hatsModuleEvents'], QueryArb_hatsModuleEventsArgs, MeshContext>,
  /** null **/
  Arb_jokeRaceEvent: InContextSdkMethod<Query['Arb_jokeRaceEvent'], QueryArb_jokeRaceEventArgs, MeshContext>,
  /** null **/
  Arb_jokeRaceEvents: InContextSdkMethod<Query['Arb_jokeRaceEvents'], QueryArb_jokeRaceEventsArgs, MeshContext>,
  /** null **/
  Arb_allowlistEvent: InContextSdkMethod<Query['Arb_allowlistEvent'], QueryArb_allowlistEventArgs, MeshContext>,
  /** null **/
  Arb_allowlistEvents: InContextSdkMethod<Query['Arb_allowlistEvents'], QueryArb_allowlistEventsArgs, MeshContext>,
  /** null **/
  Arb_electionEvent: InContextSdkMethod<Query['Arb_electionEvent'], QueryArb_electionEventArgs, MeshContext>,
  /** null **/
  Arb_electionEvents: InContextSdkMethod<Query['Arb_electionEvents'], QueryArb_electionEventsArgs, MeshContext>,
  /** null **/
  Arb_stakingEvent: InContextSdkMethod<Query['Arb_stakingEvent'], QueryArb_stakingEventArgs, MeshContext>,
  /** null **/
  Arb_stakingEvents: InContextSdkMethod<Query['Arb_stakingEvents'], QueryArb_stakingEventsArgs, MeshContext>,
  /** null **/
  Arb_agreementEvent: InContextSdkMethod<Query['Arb_agreementEvent'], QueryArb_agreementEventArgs, MeshContext>,
  /** null **/
  Arb_agreementEvents: InContextSdkMethod<Query['Arb_agreementEvents'], QueryArb_agreementEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Arb__meta: InContextSdkMethod<Query['Arb__meta'], QueryArb__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  Arb_hatAuthority: InContextSdkMethod<Subscription['Arb_hatAuthority'], SubscriptionArb_hatAuthorityArgs, MeshContext>,
  /** null **/
  Arb_hatAuthorities: InContextSdkMethod<Subscription['Arb_hatAuthorities'], SubscriptionArb_hatAuthoritiesArgs, MeshContext>,
  /** null **/
  Arb_hatsSignerGate: InContextSdkMethod<Subscription['Arb_hatsSignerGate'], SubscriptionArb_hatsSignerGateArgs, MeshContext>,
  /** null **/
  Arb_hatsSignerGates: InContextSdkMethod<Subscription['Arb_hatsSignerGates'], SubscriptionArb_hatsSignerGatesArgs, MeshContext>,
  /** null **/
  Arb_hatsAccount1OfN: InContextSdkMethod<Subscription['Arb_hatsAccount1OfN'], SubscriptionArb_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  Arb_hatsAccount1OfNs: InContextSdkMethod<Subscription['Arb_hatsAccount1OfNs'], SubscriptionArb_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  Arb_hatsAccount1OfNOperation: InContextSdkMethod<Subscription['Arb_hatsAccount1OfNOperation'], SubscriptionArb_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  Arb_hatsAccount1OfNOperations: InContextSdkMethod<Subscription['Arb_hatsAccount1OfNOperations'], SubscriptionArb_hatsAccount1OfNOperationsArgs, MeshContext>,
  /** null **/
  Arb_hatsStakingShaman: InContextSdkMethod<Subscription['Arb_hatsStakingShaman'], SubscriptionArb_hatsStakingShamanArgs, MeshContext>,
  /** null **/
  Arb_hatsStakingShamans: InContextSdkMethod<Subscription['Arb_hatsStakingShamans'], SubscriptionArb_hatsStakingShamansArgs, MeshContext>,
  /** null **/
  Arb_shamanStake: InContextSdkMethod<Subscription['Arb_shamanStake'], SubscriptionArb_shamanStakeArgs, MeshContext>,
  /** null **/
  Arb_shamanStakes: InContextSdkMethod<Subscription['Arb_shamanStakes'], SubscriptionArb_shamanStakesArgs, MeshContext>,
  /** null **/
  Arb_hatsFarcasterDelegator: InContextSdkMethod<Subscription['Arb_hatsFarcasterDelegator'], SubscriptionArb_hatsFarcasterDelegatorArgs, MeshContext>,
  /** null **/
  Arb_hatsFarcasterDelegators: InContextSdkMethod<Subscription['Arb_hatsFarcasterDelegators'], SubscriptionArb_hatsFarcasterDelegatorsArgs, MeshContext>,
  /** null **/
  Arb_jokeRaceEligibility: InContextSdkMethod<Subscription['Arb_jokeRaceEligibility'], SubscriptionArb_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  Arb_jokeRaceEligibilities: InContextSdkMethod<Subscription['Arb_jokeRaceEligibilities'], SubscriptionArb_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_jokeRaceEligibilityTerm: InContextSdkMethod<Subscription['Arb_jokeRaceEligibilityTerm'], SubscriptionArb_jokeRaceEligibilityTermArgs, MeshContext>,
  /** null **/
  Arb_jokeRaceEligibilityTerms: InContextSdkMethod<Subscription['Arb_jokeRaceEligibilityTerms'], SubscriptionArb_jokeRaceEligibilityTermsArgs, MeshContext>,
  /** null **/
  Arb_jokeRaceNextTermSetEvent: InContextSdkMethod<Subscription['Arb_jokeRaceNextTermSetEvent'], SubscriptionArb_jokeRaceNextTermSetEventArgs, MeshContext>,
  /** null **/
  Arb_jokeRaceNextTermSetEvents: InContextSdkMethod<Subscription['Arb_jokeRaceNextTermSetEvents'], SubscriptionArb_jokeRaceNextTermSetEventsArgs, MeshContext>,
  /** null **/
  Arb_jokeRaceTermStartedEvent: InContextSdkMethod<Subscription['Arb_jokeRaceTermStartedEvent'], SubscriptionArb_jokeRaceTermStartedEventArgs, MeshContext>,
  /** null **/
  Arb_jokeRaceTermStartedEvents: InContextSdkMethod<Subscription['Arb_jokeRaceTermStartedEvents'], SubscriptionArb_jokeRaceTermStartedEventsArgs, MeshContext>,
  /** null **/
  Arb_allowListEligibility: InContextSdkMethod<Subscription['Arb_allowListEligibility'], SubscriptionArb_allowListEligibilityArgs, MeshContext>,
  /** null **/
  Arb_allowListEligibilities: InContextSdkMethod<Subscription['Arb_allowListEligibilities'], SubscriptionArb_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_allowListEligibilityData: InContextSdkMethod<Subscription['Arb_allowListEligibilityData'], SubscriptionArb_allowListEligibilityDataArgs, MeshContext>,
  /** null **/
  Arb_allowListEligibilityDatas: InContextSdkMethod<Subscription['Arb_allowListEligibilityDatas'], SubscriptionArb_allowListEligibilityDatasArgs, MeshContext>,
  /** null **/
  Arb_allowlistAccountAddedEvent: InContextSdkMethod<Subscription['Arb_allowlistAccountAddedEvent'], SubscriptionArb_allowlistAccountAddedEventArgs, MeshContext>,
  /** null **/
  Arb_allowlistAccountAddedEvents: InContextSdkMethod<Subscription['Arb_allowlistAccountAddedEvents'], SubscriptionArb_allowlistAccountAddedEventsArgs, MeshContext>,
  /** null **/
  Arb_allowlistAccountsAddedEvent: InContextSdkMethod<Subscription['Arb_allowlistAccountsAddedEvent'], SubscriptionArb_allowlistAccountsAddedEventArgs, MeshContext>,
  /** null **/
  Arb_allowlistAccountsAddedEvents: InContextSdkMethod<Subscription['Arb_allowlistAccountsAddedEvents'], SubscriptionArb_allowlistAccountsAddedEventsArgs, MeshContext>,
  /** null **/
  Arb_allowlistAccountRemovedEvent: InContextSdkMethod<Subscription['Arb_allowlistAccountRemovedEvent'], SubscriptionArb_allowlistAccountRemovedEventArgs, MeshContext>,
  /** null **/
  Arb_allowlistAccountRemovedEvents: InContextSdkMethod<Subscription['Arb_allowlistAccountRemovedEvents'], SubscriptionArb_allowlistAccountRemovedEventsArgs, MeshContext>,
  /** null **/
  Arb_allowlistAccountsRemovedEvent: InContextSdkMethod<Subscription['Arb_allowlistAccountsRemovedEvent'], SubscriptionArb_allowlistAccountsRemovedEventArgs, MeshContext>,
  /** null **/
  Arb_allowlistAccountsRemovedEvents: InContextSdkMethod<Subscription['Arb_allowlistAccountsRemovedEvents'], SubscriptionArb_allowlistAccountsRemovedEventsArgs, MeshContext>,
  /** null **/
  Arb_allowlistAccountStandingChangedEvent: InContextSdkMethod<Subscription['Arb_allowlistAccountStandingChangedEvent'], SubscriptionArb_allowlistAccountStandingChangedEventArgs, MeshContext>,
  /** null **/
  Arb_allowlistAccountStandingChangedEvents: InContextSdkMethod<Subscription['Arb_allowlistAccountStandingChangedEvents'], SubscriptionArb_allowlistAccountStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_allowlistAccountsStandingChangedEvent: InContextSdkMethod<Subscription['Arb_allowlistAccountsStandingChangedEvent'], SubscriptionArb_allowlistAccountsStandingChangedEventArgs, MeshContext>,
  /** null **/
  Arb_allowlistAccountsStandingChangedEvents: InContextSdkMethod<Subscription['Arb_allowlistAccountsStandingChangedEvents'], SubscriptionArb_allowlistAccountsStandingChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_allowlistOwnerHatSetEvent: InContextSdkMethod<Subscription['Arb_allowlistOwnerHatSetEvent'], SubscriptionArb_allowlistOwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Arb_allowlistOwnerHatSetEvents: InContextSdkMethod<Subscription['Arb_allowlistOwnerHatSetEvents'], SubscriptionArb_allowlistOwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Arb_allowlistArbitratorHatSetEvent: InContextSdkMethod<Subscription['Arb_allowlistArbitratorHatSetEvent'], SubscriptionArb_allowlistArbitratorHatSetEventArgs, MeshContext>,
  /** null **/
  Arb_allowlistArbitratorHatSetEvents: InContextSdkMethod<Subscription['Arb_allowlistArbitratorHatSetEvents'], SubscriptionArb_allowlistArbitratorHatSetEventsArgs, MeshContext>,
  /** null **/
  Arb_hatsElectionEligibility: InContextSdkMethod<Subscription['Arb_hatsElectionEligibility'], SubscriptionArb_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  Arb_hatsElectionEligibilities: InContextSdkMethod<Subscription['Arb_hatsElectionEligibilities'], SubscriptionArb_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_electionTerm: InContextSdkMethod<Subscription['Arb_electionTerm'], SubscriptionArb_electionTermArgs, MeshContext>,
  /** null **/
  Arb_electionTerms: InContextSdkMethod<Subscription['Arb_electionTerms'], SubscriptionArb_electionTermsArgs, MeshContext>,
  /** null **/
  Arb_electionElectionOpenedEvent: InContextSdkMethod<Subscription['Arb_electionElectionOpenedEvent'], SubscriptionArb_electionElectionOpenedEventArgs, MeshContext>,
  /** null **/
  Arb_electionElectionOpenedEvents: InContextSdkMethod<Subscription['Arb_electionElectionOpenedEvents'], SubscriptionArb_electionElectionOpenedEventsArgs, MeshContext>,
  /** null **/
  Arb_electionElectionCompletedEvent: InContextSdkMethod<Subscription['Arb_electionElectionCompletedEvent'], SubscriptionArb_electionElectionCompletedEventArgs, MeshContext>,
  /** null **/
  Arb_electionElectionCompletedEvents: InContextSdkMethod<Subscription['Arb_electionElectionCompletedEvents'], SubscriptionArb_electionElectionCompletedEventsArgs, MeshContext>,
  /** null **/
  Arb_electionNewTermStartedEvent: InContextSdkMethod<Subscription['Arb_electionNewTermStartedEvent'], SubscriptionArb_electionNewTermStartedEventArgs, MeshContext>,
  /** null **/
  Arb_electionNewTermStartedEvents: InContextSdkMethod<Subscription['Arb_electionNewTermStartedEvents'], SubscriptionArb_electionNewTermStartedEventsArgs, MeshContext>,
  /** null **/
  Arb_electionRecalledEvent: InContextSdkMethod<Subscription['Arb_electionRecalledEvent'], SubscriptionArb_electionRecalledEventArgs, MeshContext>,
  /** null **/
  Arb_electionRecalledEvents: InContextSdkMethod<Subscription['Arb_electionRecalledEvents'], SubscriptionArb_electionRecalledEventsArgs, MeshContext>,
  /** null **/
  Arb_passthroughModule: InContextSdkMethod<Subscription['Arb_passthroughModule'], SubscriptionArb_passthroughModuleArgs, MeshContext>,
  /** null **/
  Arb_passthroughModules: InContextSdkMethod<Subscription['Arb_passthroughModules'], SubscriptionArb_passthroughModulesArgs, MeshContext>,
  /** null **/
  Arb_stakingEligibility: InContextSdkMethod<Subscription['Arb_stakingEligibility'], SubscriptionArb_stakingEligibilityArgs, MeshContext>,
  /** null **/
  Arb_stakingEligibilities: InContextSdkMethod<Subscription['Arb_stakingEligibilities'], SubscriptionArb_stakingEligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_stake: InContextSdkMethod<Subscription['Arb_stake'], SubscriptionArb_stakeArgs, MeshContext>,
  /** null **/
  Arb_stakes: InContextSdkMethod<Subscription['Arb_stakes'], SubscriptionArb_stakesArgs, MeshContext>,
  /** null **/
  Arb_stakingStakedEvent: InContextSdkMethod<Subscription['Arb_stakingStakedEvent'], SubscriptionArb_stakingStakedEventArgs, MeshContext>,
  /** null **/
  Arb_stakingStakedEvents: InContextSdkMethod<Subscription['Arb_stakingStakedEvents'], SubscriptionArb_stakingStakedEventsArgs, MeshContext>,
  /** null **/
  Arb_stakingUnstakeBegunEvent: InContextSdkMethod<Subscription['Arb_stakingUnstakeBegunEvent'], SubscriptionArb_stakingUnstakeBegunEventArgs, MeshContext>,
  /** null **/
  Arb_stakingUnstakeBegunEvents: InContextSdkMethod<Subscription['Arb_stakingUnstakeBegunEvents'], SubscriptionArb_stakingUnstakeBegunEventsArgs, MeshContext>,
  /** null **/
  Arb_stakingSlashedEvent: InContextSdkMethod<Subscription['Arb_stakingSlashedEvent'], SubscriptionArb_stakingSlashedEventArgs, MeshContext>,
  /** null **/
  Arb_stakingSlashedEvents: InContextSdkMethod<Subscription['Arb_stakingSlashedEvents'], SubscriptionArb_stakingSlashedEventsArgs, MeshContext>,
  /** null **/
  Arb_stakingMinStakeChangedEvent: InContextSdkMethod<Subscription['Arb_stakingMinStakeChangedEvent'], SubscriptionArb_stakingMinStakeChangedEventArgs, MeshContext>,
  /** null **/
  Arb_stakingMinStakeChangedEvents: InContextSdkMethod<Subscription['Arb_stakingMinStakeChangedEvents'], SubscriptionArb_stakingMinStakeChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_stakingJudgeHatChangedEvent: InContextSdkMethod<Subscription['Arb_stakingJudgeHatChangedEvent'], SubscriptionArb_stakingJudgeHatChangedEventArgs, MeshContext>,
  /** null **/
  Arb_stakingJudgeHatChangedEvents: InContextSdkMethod<Subscription['Arb_stakingJudgeHatChangedEvents'], SubscriptionArb_stakingJudgeHatChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_stakingRecipientHatChangedEvent: InContextSdkMethod<Subscription['Arb_stakingRecipientHatChangedEvent'], SubscriptionArb_stakingRecipientHatChangedEventArgs, MeshContext>,
  /** null **/
  Arb_stakingRecipientHatChangedEvents: InContextSdkMethod<Subscription['Arb_stakingRecipientHatChangedEvents'], SubscriptionArb_stakingRecipientHatChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_stakingCooldownPeriodChangedEvent: InContextSdkMethod<Subscription['Arb_stakingCooldownPeriodChangedEvent'], SubscriptionArb_stakingCooldownPeriodChangedEventArgs, MeshContext>,
  /** null **/
  Arb_stakingCooldownPeriodChangedEvents: InContextSdkMethod<Subscription['Arb_stakingCooldownPeriodChangedEvents'], SubscriptionArb_stakingCooldownPeriodChangedEventsArgs, MeshContext>,
  /** null **/
  Arb_stakingForgivenEvent: InContextSdkMethod<Subscription['Arb_stakingForgivenEvent'], SubscriptionArb_stakingForgivenEventArgs, MeshContext>,
  /** null **/
  Arb_stakingForgivenEvents: InContextSdkMethod<Subscription['Arb_stakingForgivenEvents'], SubscriptionArb_stakingForgivenEventsArgs, MeshContext>,
  /** null **/
  Arb_seasonToggle: InContextSdkMethod<Subscription['Arb_seasonToggle'], SubscriptionArb_seasonToggleArgs, MeshContext>,
  /** null **/
  Arb_seasonToggles: InContextSdkMethod<Subscription['Arb_seasonToggles'], SubscriptionArb_seasonTogglesArgs, MeshContext>,
  /** null **/
  Arb_characterSheetsLevelEligibility: InContextSdkMethod<Subscription['Arb_characterSheetsLevelEligibility'], SubscriptionArb_characterSheetsLevelEligibilityArgs, MeshContext>,
  /** null **/
  Arb_characterSheetsLevelEligibilities: InContextSdkMethod<Subscription['Arb_characterSheetsLevelEligibilities'], SubscriptionArb_characterSheetsLevelEligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_agreementEligibility: InContextSdkMethod<Subscription['Arb_agreementEligibility'], SubscriptionArb_agreementEligibilityArgs, MeshContext>,
  /** null **/
  Arb_agreementEligibilities: InContextSdkMethod<Subscription['Arb_agreementEligibilities'], SubscriptionArb_agreementEligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_agreement: InContextSdkMethod<Subscription['Arb_agreement'], SubscriptionArb_agreementArgs, MeshContext>,
  /** null **/
  Arb_agreements: InContextSdkMethod<Subscription['Arb_agreements'], SubscriptionArb_agreementsArgs, MeshContext>,
  /** null **/
  Arb_agreementHatClaimedWithAgreementEvent: InContextSdkMethod<Subscription['Arb_agreementHatClaimedWithAgreementEvent'], SubscriptionArb_agreementHatClaimedWithAgreementEventArgs, MeshContext>,
  /** null **/
  Arb_agreementHatClaimedWithAgreementEvents: InContextSdkMethod<Subscription['Arb_agreementHatClaimedWithAgreementEvents'], SubscriptionArb_agreementHatClaimedWithAgreementEventsArgs, MeshContext>,
  /** null **/
  Arb_agreementAgreementSignedEvent: InContextSdkMethod<Subscription['Arb_agreementAgreementSignedEvent'], SubscriptionArb_agreementAgreementSignedEventArgs, MeshContext>,
  /** null **/
  Arb_agreementAgreementSignedEvents: InContextSdkMethod<Subscription['Arb_agreementAgreementSignedEvents'], SubscriptionArb_agreementAgreementSignedEventsArgs, MeshContext>,
  /** null **/
  Arb_agreementAgreementSetEvent: InContextSdkMethod<Subscription['Arb_agreementAgreementSetEvent'], SubscriptionArb_agreementAgreementSetEventArgs, MeshContext>,
  /** null **/
  Arb_agreementAgreementSetEvents: InContextSdkMethod<Subscription['Arb_agreementAgreementSetEvents'], SubscriptionArb_agreementAgreementSetEventsArgs, MeshContext>,
  /** null **/
  Arb_agreementOwnerHatSetEvent: InContextSdkMethod<Subscription['Arb_agreementOwnerHatSetEvent'], SubscriptionArb_agreementOwnerHatSetEventArgs, MeshContext>,
  /** null **/
  Arb_agreementOwnerHatSetEvents: InContextSdkMethod<Subscription['Arb_agreementOwnerHatSetEvents'], SubscriptionArb_agreementOwnerHatSetEventsArgs, MeshContext>,
  /** null **/
  Arb_agreementArbitratorHatSetEvent: InContextSdkMethod<Subscription['Arb_agreementArbitratorHatSetEvent'], SubscriptionArb_agreementArbitratorHatSetEventArgs, MeshContext>,
  /** null **/
  Arb_agreementArbitratorHatSetEvents: InContextSdkMethod<Subscription['Arb_agreementArbitratorHatSetEvents'], SubscriptionArb_agreementArbitratorHatSetEventsArgs, MeshContext>,
  /** null **/
  Arb_erc20Eligibility: InContextSdkMethod<Subscription['Arb_erc20Eligibility'], SubscriptionArb_erc20EligibilityArgs, MeshContext>,
  /** null **/
  Arb_erc20Eligibilities: InContextSdkMethod<Subscription['Arb_erc20Eligibilities'], SubscriptionArb_erc20EligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_erc721Eligibility: InContextSdkMethod<Subscription['Arb_erc721Eligibility'], SubscriptionArb_erc721EligibilityArgs, MeshContext>,
  /** null **/
  Arb_erc721Eligibilities: InContextSdkMethod<Subscription['Arb_erc721Eligibilities'], SubscriptionArb_erc721EligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_erc1155Eligibility: InContextSdkMethod<Subscription['Arb_erc1155Eligibility'], SubscriptionArb_erc1155EligibilityArgs, MeshContext>,
  /** null **/
  Arb_erc1155Eligibilities: InContextSdkMethod<Subscription['Arb_erc1155Eligibilities'], SubscriptionArb_erc1155EligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_hatWearingEligibility: InContextSdkMethod<Subscription['Arb_hatWearingEligibility'], SubscriptionArb_hatWearingEligibilityArgs, MeshContext>,
  /** null **/
  Arb_hatWearingEligibilities: InContextSdkMethod<Subscription['Arb_hatWearingEligibilities'], SubscriptionArb_hatWearingEligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_gitcoinPassportEligibility: InContextSdkMethod<Subscription['Arb_gitcoinPassportEligibility'], SubscriptionArb_gitcoinPassportEligibilityArgs, MeshContext>,
  /** null **/
  Arb_gitcoinPassportEligibilities: InContextSdkMethod<Subscription['Arb_gitcoinPassportEligibilities'], SubscriptionArb_gitcoinPassportEligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_coLinksEligibility: InContextSdkMethod<Subscription['Arb_coLinksEligibility'], SubscriptionArb_coLinksEligibilityArgs, MeshContext>,
  /** null **/
  Arb_coLinksEligibilities: InContextSdkMethod<Subscription['Arb_coLinksEligibilities'], SubscriptionArb_coLinksEligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_hatsModule: InContextSdkMethod<Subscription['Arb_hatsModule'], SubscriptionArb_hatsModuleArgs, MeshContext>,
  /** null **/
  Arb_hatsModules: InContextSdkMethod<Subscription['Arb_hatsModules'], SubscriptionArb_hatsModulesArgs, MeshContext>,
  /** null **/
  Arb_hatsModuleEvent: InContextSdkMethod<Subscription['Arb_hatsModuleEvent'], SubscriptionArb_hatsModuleEventArgs, MeshContext>,
  /** null **/
  Arb_hatsModuleEvents: InContextSdkMethod<Subscription['Arb_hatsModuleEvents'], SubscriptionArb_hatsModuleEventsArgs, MeshContext>,
  /** null **/
  Arb_jokeRaceEvent: InContextSdkMethod<Subscription['Arb_jokeRaceEvent'], SubscriptionArb_jokeRaceEventArgs, MeshContext>,
  /** null **/
  Arb_jokeRaceEvents: InContextSdkMethod<Subscription['Arb_jokeRaceEvents'], SubscriptionArb_jokeRaceEventsArgs, MeshContext>,
  /** null **/
  Arb_allowlistEvent: InContextSdkMethod<Subscription['Arb_allowlistEvent'], SubscriptionArb_allowlistEventArgs, MeshContext>,
  /** null **/
  Arb_allowlistEvents: InContextSdkMethod<Subscription['Arb_allowlistEvents'], SubscriptionArb_allowlistEventsArgs, MeshContext>,
  /** null **/
  Arb_electionEvent: InContextSdkMethod<Subscription['Arb_electionEvent'], SubscriptionArb_electionEventArgs, MeshContext>,
  /** null **/
  Arb_electionEvents: InContextSdkMethod<Subscription['Arb_electionEvents'], SubscriptionArb_electionEventsArgs, MeshContext>,
  /** null **/
  Arb_stakingEvent: InContextSdkMethod<Subscription['Arb_stakingEvent'], SubscriptionArb_stakingEventArgs, MeshContext>,
  /** null **/
  Arb_stakingEvents: InContextSdkMethod<Subscription['Arb_stakingEvents'], SubscriptionArb_stakingEventsArgs, MeshContext>,
  /** null **/
  Arb_agreementEvent: InContextSdkMethod<Subscription['Arb_agreementEvent'], SubscriptionArb_agreementEventArgs, MeshContext>,
  /** null **/
  Arb_agreementEvents: InContextSdkMethod<Subscription['Arb_agreementEvents'], SubscriptionArb_agreementEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Arb__meta: InContextSdkMethod<Subscription['Arb__meta'], SubscriptionArb__metaArgs, MeshContext>
  };

  export type Context = {
      ["Arbitrum_Ancillary"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
