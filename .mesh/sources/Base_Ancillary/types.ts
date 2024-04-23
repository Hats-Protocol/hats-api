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

export type Base_AgreementEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  ownerHat: Base_HatAuthority;
  arbitratorHat: Base_HatAuthority;
  currentAgreement: Base_Agreement;
  currentAgreementNumber: Scalars['BigInt']['output'];
  agreements: Array<Base_Agreement>;
};


export type Base_AgreementEligibilityagreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Agreement_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Agreement_filter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_AgreementEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_AgreementEligibility_filter>>>;
};

export type Base_AgreementEligibility_orderBy =
  | 'id'
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
  | 'agreements';

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
  | 'agreementEligibility__hatId'
  | 'agreementEligibility__currentAgreementNumber'
  | 'agreement'
  | 'signers'
  | 'graceEndTime';

export type Base_AllowListEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  ownerHat: Base_HatAuthority;
  arbitratorHat: Base_HatAuthority;
};

export type Base_AllowListEligibility_filter = {
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_AllowListEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_AllowListEligibility_filter>>>;
};

export type Base_AllowListEligibility_orderBy =
  | 'id'
  | 'hatId'
  | 'ownerHat'
  | 'ownerHat__id'
  | 'ownerHat__primaryHatsAccount1ofNAddress'
  | 'arbitratorHat'
  | 'arbitratorHat__id'
  | 'arbitratorHat__primaryHatsAccount1ofNAddress';

export type Base_BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Base_Block_height = {
  hash?: InputMaybe<Scalars['Base_Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Base_CharacterSheetsLevelEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  hatAdmins: Array<Base_HatAuthority>;
};


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
  | 'hatId'
  | 'hatAdmins';

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
  | 'hatsElectionEligibility__hatId'
  | 'termStartedAt'
  | 'termEnd'
  | 'electionCompletedAt'
  | 'electedAccounts';

export type Base_HatAuthority = {
  id: Scalars['ID']['output'];
  /** pre computed hats account address with a salt value of 1, null only if the hat was not created yet */
  primaryHatsAccount1ofNAddress?: Maybe<Scalars['String']['output']>;
  hatsAccount1ofN: Array<Base_HatsAccount1ofN>;
  hsgOwner: Array<Base_HatsSignerGate>;
  hsgSigner: Array<Base_HatsSignerGate>;
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
  | 'agreementArbitrator';

export type Base_HatsAccount1ofN = {
  id: Scalars['ID']['output'];
  accountOfHat: Base_HatAuthority;
  operations: Array<Base_HatsAccount1ofNOperation>;
};


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

export type Base_HatsElectionEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  ballotBoxHat: Base_HatAuthority;
  adminHat: Array<Base_HatAuthority>;
  terms: Array<Base_ElectionTerm>;
  currentTerm?: Maybe<Base_ElectionTerm>;
};


export type Base_HatsElectionEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatAuthority_filter>;
};


export type Base_HatsElectionEligibilitytermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_ElectionTerm_filter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_HatsElectionEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_HatsElectionEligibility_filter>>>;
};

export type Base_HatsElectionEligibility_orderBy =
  | 'id'
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
  | 'currentTerm__electionCompletedAt';

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

export type Base_JokeRaceEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  adminHat: Array<Base_HatAuthority>;
  currentContest: Scalars['String']['output'];
  currentTermEnd: Scalars['BigInt']['output'];
  currentTopK: Scalars['BigInt']['output'];
};


export type Base_JokeRaceEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatAuthority_filter>;
};

export type Base_JokeRaceEligibility_filter = {
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
  adminHat?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_?: InputMaybe<Base_HatAuthority_filter>;
  currentContest?: InputMaybe<Scalars['String']['input']>;
  currentContest_not?: InputMaybe<Scalars['String']['input']>;
  currentContest_gt?: InputMaybe<Scalars['String']['input']>;
  currentContest_lt?: InputMaybe<Scalars['String']['input']>;
  currentContest_gte?: InputMaybe<Scalars['String']['input']>;
  currentContest_lte?: InputMaybe<Scalars['String']['input']>;
  currentContest_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currentContest_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currentContest_contains?: InputMaybe<Scalars['String']['input']>;
  currentContest_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currentContest_not_contains?: InputMaybe<Scalars['String']['input']>;
  currentContest_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currentContest_starts_with?: InputMaybe<Scalars['String']['input']>;
  currentContest_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentContest_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  currentContest_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentContest_ends_with?: InputMaybe<Scalars['String']['input']>;
  currentContest_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentContest_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  currentContest_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentTermEnd?: InputMaybe<Scalars['BigInt']['input']>;
  currentTermEnd_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentTermEnd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentTermEnd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentTermEnd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentTermEnd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentTermEnd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentTermEnd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentTopK?: InputMaybe<Scalars['BigInt']['input']>;
  currentTopK_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentTopK_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentTopK_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentTopK_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentTopK_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentTopK_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentTopK_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_JokeRaceEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_JokeRaceEligibility_filter>>>;
};

export type Base_JokeRaceEligibility_orderBy =
  | 'id'
  | 'hatId'
  | 'adminHat'
  | 'currentContest'
  | 'currentTermEnd'
  | 'currentTopK';

/** Defines the order direction, either ascending or descending */
export type Base_OrderDirection =
  | 'asc'
  | 'desc';

export type Base_PassthroughModule = {
  id: Scalars['ID']['output'];
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
  | 'hatId'
  | 'passthroughHat'
  | 'passthroughHat__id'
  | 'passthroughHat__primaryHatsAccount1ofNAddress';

export type Query = {
  Base_hatAuthority?: Maybe<Base_HatAuthority>;
  Base_hatAuthorities: Array<Base_HatAuthority>;
  Base_hatsSignerGate?: Maybe<Base_HatsSignerGate>;
  Base_hatsSignerGates: Array<Base_HatsSignerGate>;
  Base_jokeRaceEligibility?: Maybe<Base_JokeRaceEligibility>;
  Base_jokeRaceEligibilities: Array<Base_JokeRaceEligibility>;
  Base_allowListEligibility?: Maybe<Base_AllowListEligibility>;
  Base_allowListEligibilities: Array<Base_AllowListEligibility>;
  Base_hatsElectionEligibility?: Maybe<Base_HatsElectionEligibility>;
  Base_hatsElectionEligibilities: Array<Base_HatsElectionEligibility>;
  Base_electionTerm?: Maybe<Base_ElectionTerm>;
  Base_electionTerms: Array<Base_ElectionTerm>;
  Base_passthroughModule?: Maybe<Base_PassthroughModule>;
  Base_passthroughModules: Array<Base_PassthroughModule>;
  Base_stakingEligibility?: Maybe<Base_StakingEligibility>;
  Base_stakingEligibilities: Array<Base_StakingEligibility>;
  Base_seasonToggle?: Maybe<Base_SeasonToggle>;
  Base_seasonToggles: Array<Base_SeasonToggle>;
  Base_characterSheetsLevelEligibility?: Maybe<Base_CharacterSheetsLevelEligibility>;
  Base_characterSheetsLevelEligibilities: Array<Base_CharacterSheetsLevelEligibility>;
  Base_agreementEligibility?: Maybe<Base_AgreementEligibility>;
  Base_agreementEligibilities: Array<Base_AgreementEligibility>;
  Base_agreement?: Maybe<Base_Agreement>;
  Base_agreements: Array<Base_Agreement>;
  Base_hatsAccount1OfN?: Maybe<Base_HatsAccount1ofN>;
  Base_hatsAccount1OfNs: Array<Base_HatsAccount1ofN>;
  Base_hatsAccount1OfNOperation?: Maybe<Base_HatsAccount1ofNOperation>;
  Base_hatsAccount1OfNOperations: Array<Base_HatsAccount1ofNOperation>;
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


export type QueryBase__metaArgs = {
  block?: InputMaybe<Base_Block_height>;
};

export type Base_SeasonToggle = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  hatAdmins: Array<Base_HatAuthority>;
};


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
  | 'hatId'
  | 'hatAdmins';

export type Base_StakingEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  judgeHat: Base_HatAuthority;
  recipientHat: Base_HatAuthority;
  hatAdmins: Array<Base_HatAuthority>;
};


export type Base_StakingEligibilityhatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatAuthority_filter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Base_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Base_StakingEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Base_StakingEligibility_filter>>>;
};

export type Base_StakingEligibility_orderBy =
  | 'id'
  | 'hatId'
  | 'judgeHat'
  | 'judgeHat__id'
  | 'judgeHat__primaryHatsAccount1ofNAddress'
  | 'recipientHat'
  | 'recipientHat__id'
  | 'recipientHat__primaryHatsAccount1ofNAddress'
  | 'hatAdmins';

export type Subscription = {
  Base_hatAuthority?: Maybe<Base_HatAuthority>;
  Base_hatAuthorities: Array<Base_HatAuthority>;
  Base_hatsSignerGate?: Maybe<Base_HatsSignerGate>;
  Base_hatsSignerGates: Array<Base_HatsSignerGate>;
  Base_jokeRaceEligibility?: Maybe<Base_JokeRaceEligibility>;
  Base_jokeRaceEligibilities: Array<Base_JokeRaceEligibility>;
  Base_allowListEligibility?: Maybe<Base_AllowListEligibility>;
  Base_allowListEligibilities: Array<Base_AllowListEligibility>;
  Base_hatsElectionEligibility?: Maybe<Base_HatsElectionEligibility>;
  Base_hatsElectionEligibilities: Array<Base_HatsElectionEligibility>;
  Base_electionTerm?: Maybe<Base_ElectionTerm>;
  Base_electionTerms: Array<Base_ElectionTerm>;
  Base_passthroughModule?: Maybe<Base_PassthroughModule>;
  Base_passthroughModules: Array<Base_PassthroughModule>;
  Base_stakingEligibility?: Maybe<Base_StakingEligibility>;
  Base_stakingEligibilities: Array<Base_StakingEligibility>;
  Base_seasonToggle?: Maybe<Base_SeasonToggle>;
  Base_seasonToggles: Array<Base_SeasonToggle>;
  Base_characterSheetsLevelEligibility?: Maybe<Base_CharacterSheetsLevelEligibility>;
  Base_characterSheetsLevelEligibilities: Array<Base_CharacterSheetsLevelEligibility>;
  Base_agreementEligibility?: Maybe<Base_AgreementEligibility>;
  Base_agreementEligibilities: Array<Base_AgreementEligibility>;
  Base_agreement?: Maybe<Base_Agreement>;
  Base_agreements: Array<Base_Agreement>;
  Base_hatsAccount1OfN?: Maybe<Base_HatsAccount1ofN>;
  Base_hatsAccount1OfNs: Array<Base_HatsAccount1ofN>;
  Base_hatsAccount1OfNOperation?: Maybe<Base_HatsAccount1ofNOperation>;
  Base_hatsAccount1OfNOperations: Array<Base_HatsAccount1ofNOperation>;
  /** Access to subgraph metadata */
  Base__meta?: Maybe<Base__Meta_>;
};


export type SubscriptionBase_hatAuthorityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatAuthoritiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatAuthority_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatsSignerGateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatsSignerGatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsSignerGate_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_jokeRaceEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_jokeRaceEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_JokeRaceEligibility_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_allowListEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_allowListEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_AllowListEligibility_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatsElectionEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatsElectionEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsElectionEligibility_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_electionTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_electionTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_ElectionTerm_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_passthroughModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_passthroughModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_PassthroughModule_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_stakingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_stakingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_StakingEligibility_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_seasonToggleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_seasonTogglesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_SeasonToggle_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_characterSheetsLevelEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_characterSheetsLevelEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_CharacterSheetsLevelEligibility_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_agreementEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_agreementEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_AgreementEligibility_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_agreementArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_agreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_Agreement_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_Agreement_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatsAccount1OfNArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatsAccount1OfNsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsAccount1ofN_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatsAccount1OfNOperationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase_hatsAccount1OfNOperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Base_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Base_OrderDirection>;
  where?: InputMaybe<Base_HatsAccount1ofNOperation_filter>;
  block?: InputMaybe<Base_Block_height>;
  subgraphError?: Base__SubgraphErrorPolicy_;
};


export type SubscriptionBase__metaArgs = {
  block?: InputMaybe<Base_Block_height>;
};

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
  Base_jokeRaceEligibility: InContextSdkMethod<Query['Base_jokeRaceEligibility'], QueryBase_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  Base_jokeRaceEligibilities: InContextSdkMethod<Query['Base_jokeRaceEligibilities'], QueryBase_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  Base_allowListEligibility: InContextSdkMethod<Query['Base_allowListEligibility'], QueryBase_allowListEligibilityArgs, MeshContext>,
  /** null **/
  Base_allowListEligibilities: InContextSdkMethod<Query['Base_allowListEligibilities'], QueryBase_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  Base_hatsElectionEligibility: InContextSdkMethod<Query['Base_hatsElectionEligibility'], QueryBase_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  Base_hatsElectionEligibilities: InContextSdkMethod<Query['Base_hatsElectionEligibilities'], QueryBase_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  Base_electionTerm: InContextSdkMethod<Query['Base_electionTerm'], QueryBase_electionTermArgs, MeshContext>,
  /** null **/
  Base_electionTerms: InContextSdkMethod<Query['Base_electionTerms'], QueryBase_electionTermsArgs, MeshContext>,
  /** null **/
  Base_passthroughModule: InContextSdkMethod<Query['Base_passthroughModule'], QueryBase_passthroughModuleArgs, MeshContext>,
  /** null **/
  Base_passthroughModules: InContextSdkMethod<Query['Base_passthroughModules'], QueryBase_passthroughModulesArgs, MeshContext>,
  /** null **/
  Base_stakingEligibility: InContextSdkMethod<Query['Base_stakingEligibility'], QueryBase_stakingEligibilityArgs, MeshContext>,
  /** null **/
  Base_stakingEligibilities: InContextSdkMethod<Query['Base_stakingEligibilities'], QueryBase_stakingEligibilitiesArgs, MeshContext>,
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
  Base_hatsAccount1OfN: InContextSdkMethod<Query['Base_hatsAccount1OfN'], QueryBase_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  Base_hatsAccount1OfNs: InContextSdkMethod<Query['Base_hatsAccount1OfNs'], QueryBase_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  Base_hatsAccount1OfNOperation: InContextSdkMethod<Query['Base_hatsAccount1OfNOperation'], QueryBase_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  Base_hatsAccount1OfNOperations: InContextSdkMethod<Query['Base_hatsAccount1OfNOperations'], QueryBase_hatsAccount1OfNOperationsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Base__meta: InContextSdkMethod<Query['Base__meta'], QueryBase__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  Base_hatAuthority: InContextSdkMethod<Subscription['Base_hatAuthority'], SubscriptionBase_hatAuthorityArgs, MeshContext>,
  /** null **/
  Base_hatAuthorities: InContextSdkMethod<Subscription['Base_hatAuthorities'], SubscriptionBase_hatAuthoritiesArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGate: InContextSdkMethod<Subscription['Base_hatsSignerGate'], SubscriptionBase_hatsSignerGateArgs, MeshContext>,
  /** null **/
  Base_hatsSignerGates: InContextSdkMethod<Subscription['Base_hatsSignerGates'], SubscriptionBase_hatsSignerGatesArgs, MeshContext>,
  /** null **/
  Base_jokeRaceEligibility: InContextSdkMethod<Subscription['Base_jokeRaceEligibility'], SubscriptionBase_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  Base_jokeRaceEligibilities: InContextSdkMethod<Subscription['Base_jokeRaceEligibilities'], SubscriptionBase_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  Base_allowListEligibility: InContextSdkMethod<Subscription['Base_allowListEligibility'], SubscriptionBase_allowListEligibilityArgs, MeshContext>,
  /** null **/
  Base_allowListEligibilities: InContextSdkMethod<Subscription['Base_allowListEligibilities'], SubscriptionBase_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  Base_hatsElectionEligibility: InContextSdkMethod<Subscription['Base_hatsElectionEligibility'], SubscriptionBase_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  Base_hatsElectionEligibilities: InContextSdkMethod<Subscription['Base_hatsElectionEligibilities'], SubscriptionBase_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  Base_electionTerm: InContextSdkMethod<Subscription['Base_electionTerm'], SubscriptionBase_electionTermArgs, MeshContext>,
  /** null **/
  Base_electionTerms: InContextSdkMethod<Subscription['Base_electionTerms'], SubscriptionBase_electionTermsArgs, MeshContext>,
  /** null **/
  Base_passthroughModule: InContextSdkMethod<Subscription['Base_passthroughModule'], SubscriptionBase_passthroughModuleArgs, MeshContext>,
  /** null **/
  Base_passthroughModules: InContextSdkMethod<Subscription['Base_passthroughModules'], SubscriptionBase_passthroughModulesArgs, MeshContext>,
  /** null **/
  Base_stakingEligibility: InContextSdkMethod<Subscription['Base_stakingEligibility'], SubscriptionBase_stakingEligibilityArgs, MeshContext>,
  /** null **/
  Base_stakingEligibilities: InContextSdkMethod<Subscription['Base_stakingEligibilities'], SubscriptionBase_stakingEligibilitiesArgs, MeshContext>,
  /** null **/
  Base_seasonToggle: InContextSdkMethod<Subscription['Base_seasonToggle'], SubscriptionBase_seasonToggleArgs, MeshContext>,
  /** null **/
  Base_seasonToggles: InContextSdkMethod<Subscription['Base_seasonToggles'], SubscriptionBase_seasonTogglesArgs, MeshContext>,
  /** null **/
  Base_characterSheetsLevelEligibility: InContextSdkMethod<Subscription['Base_characterSheetsLevelEligibility'], SubscriptionBase_characterSheetsLevelEligibilityArgs, MeshContext>,
  /** null **/
  Base_characterSheetsLevelEligibilities: InContextSdkMethod<Subscription['Base_characterSheetsLevelEligibilities'], SubscriptionBase_characterSheetsLevelEligibilitiesArgs, MeshContext>,
  /** null **/
  Base_agreementEligibility: InContextSdkMethod<Subscription['Base_agreementEligibility'], SubscriptionBase_agreementEligibilityArgs, MeshContext>,
  /** null **/
  Base_agreementEligibilities: InContextSdkMethod<Subscription['Base_agreementEligibilities'], SubscriptionBase_agreementEligibilitiesArgs, MeshContext>,
  /** null **/
  Base_agreement: InContextSdkMethod<Subscription['Base_agreement'], SubscriptionBase_agreementArgs, MeshContext>,
  /** null **/
  Base_agreements: InContextSdkMethod<Subscription['Base_agreements'], SubscriptionBase_agreementsArgs, MeshContext>,
  /** null **/
  Base_hatsAccount1OfN: InContextSdkMethod<Subscription['Base_hatsAccount1OfN'], SubscriptionBase_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  Base_hatsAccount1OfNs: InContextSdkMethod<Subscription['Base_hatsAccount1OfNs'], SubscriptionBase_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  Base_hatsAccount1OfNOperation: InContextSdkMethod<Subscription['Base_hatsAccount1OfNOperation'], SubscriptionBase_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  Base_hatsAccount1OfNOperations: InContextSdkMethod<Subscription['Base_hatsAccount1OfNOperations'], SubscriptionBase_hatsAccount1OfNOperationsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Base__meta: InContextSdkMethod<Subscription['Base__meta'], SubscriptionBase__metaArgs, MeshContext>
  };

  export type Context = {
      ["Base_Ancillary"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
