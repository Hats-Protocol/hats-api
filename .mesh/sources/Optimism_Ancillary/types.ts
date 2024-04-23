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

export type Op_AgreementEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  ownerHat: Op_HatAuthority;
  arbitratorHat: Op_HatAuthority;
  currentAgreement: Op_Agreement;
  currentAgreementNumber: Scalars['BigInt']['output'];
  agreements: Array<Op_Agreement>;
};


export type Op_AgreementEligibilityagreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_Agreement_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_Agreement_filter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_AgreementEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_AgreementEligibility_filter>>>;
};

export type Op_AgreementEligibility_orderBy =
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
  | 'agreementEligibility__hatId'
  | 'agreementEligibility__currentAgreementNumber'
  | 'agreement'
  | 'signers'
  | 'graceEndTime';

export type Op_AllowListEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  ownerHat: Op_HatAuthority;
  arbitratorHat: Op_HatAuthority;
};

export type Op_AllowListEligibility_filter = {
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_AllowListEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_AllowListEligibility_filter>>>;
};

export type Op_AllowListEligibility_orderBy =
  | 'id'
  | 'hatId'
  | 'ownerHat'
  | 'ownerHat__id'
  | 'ownerHat__primaryHatsAccount1ofNAddress'
  | 'arbitratorHat'
  | 'arbitratorHat__id'
  | 'arbitratorHat__primaryHatsAccount1ofNAddress';

export type Op_BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Op_Block_height = {
  hash?: InputMaybe<Scalars['Op_Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Op_CharacterSheetsLevelEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  hatAdmins: Array<Op_HatAuthority>;
};


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
  | 'hatId'
  | 'hatAdmins';

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
  | 'hatsElectionEligibility__hatId'
  | 'termStartedAt'
  | 'termEnd'
  | 'electionCompletedAt'
  | 'electedAccounts';

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
  | 'agreementArbitrator';

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

export type Op_HatsElectionEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  ballotBoxHat: Op_HatAuthority;
  adminHat: Array<Op_HatAuthority>;
  terms: Array<Op_ElectionTerm>;
  currentTerm?: Maybe<Op_ElectionTerm>;
};


export type Op_HatsElectionEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatAuthority_filter>;
};


export type Op_HatsElectionEligibilitytermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_ElectionTerm_filter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_HatsElectionEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_HatsElectionEligibility_filter>>>;
};

export type Op_HatsElectionEligibility_orderBy =
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

export type Op_JokeRaceEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  adminHat: Array<Op_HatAuthority>;
  currentContest: Scalars['String']['output'];
  currentTermEnd: Scalars['BigInt']['output'];
  currentTopK: Scalars['BigInt']['output'];
};


export type Op_JokeRaceEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatAuthority_filter>;
};

export type Op_JokeRaceEligibility_filter = {
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
  adminHat_?: InputMaybe<Op_HatAuthority_filter>;
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
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_JokeRaceEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_JokeRaceEligibility_filter>>>;
};

export type Op_JokeRaceEligibility_orderBy =
  | 'id'
  | 'hatId'
  | 'adminHat'
  | 'currentContest'
  | 'currentTermEnd'
  | 'currentTopK';

/** Defines the order direction, either ascending or descending */
export type Op_OrderDirection =
  | 'asc'
  | 'desc';

export type Op_PassthroughModule = {
  id: Scalars['ID']['output'];
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
  | 'hatId'
  | 'passthroughHat'
  | 'passthroughHat__id'
  | 'passthroughHat__primaryHatsAccount1ofNAddress';

export type Query = {
  Op_hatAuthority?: Maybe<Op_HatAuthority>;
  Op_hatAuthorities: Array<Op_HatAuthority>;
  Op_hatsSignerGate?: Maybe<Op_HatsSignerGate>;
  Op_hatsSignerGates: Array<Op_HatsSignerGate>;
  Op_jokeRaceEligibility?: Maybe<Op_JokeRaceEligibility>;
  Op_jokeRaceEligibilities: Array<Op_JokeRaceEligibility>;
  Op_allowListEligibility?: Maybe<Op_AllowListEligibility>;
  Op_allowListEligibilities: Array<Op_AllowListEligibility>;
  Op_hatsElectionEligibility?: Maybe<Op_HatsElectionEligibility>;
  Op_hatsElectionEligibilities: Array<Op_HatsElectionEligibility>;
  Op_electionTerm?: Maybe<Op_ElectionTerm>;
  Op_electionTerms: Array<Op_ElectionTerm>;
  Op_passthroughModule?: Maybe<Op_PassthroughModule>;
  Op_passthroughModules: Array<Op_PassthroughModule>;
  Op_stakingEligibility?: Maybe<Op_StakingEligibility>;
  Op_stakingEligibilities: Array<Op_StakingEligibility>;
  Op_seasonToggle?: Maybe<Op_SeasonToggle>;
  Op_seasonToggles: Array<Op_SeasonToggle>;
  Op_characterSheetsLevelEligibility?: Maybe<Op_CharacterSheetsLevelEligibility>;
  Op_characterSheetsLevelEligibilities: Array<Op_CharacterSheetsLevelEligibility>;
  Op_agreementEligibility?: Maybe<Op_AgreementEligibility>;
  Op_agreementEligibilities: Array<Op_AgreementEligibility>;
  Op_agreement?: Maybe<Op_Agreement>;
  Op_agreements: Array<Op_Agreement>;
  Op_hatsAccount1OfN?: Maybe<Op_HatsAccount1ofN>;
  Op_hatsAccount1OfNs: Array<Op_HatsAccount1ofN>;
  Op_hatsAccount1OfNOperation?: Maybe<Op_HatsAccount1ofNOperation>;
  Op_hatsAccount1OfNOperations: Array<Op_HatsAccount1ofNOperation>;
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


export type QueryOp__metaArgs = {
  block?: InputMaybe<Op_Block_height>;
};

export type Op_SeasonToggle = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  hatAdmins: Array<Op_HatAuthority>;
};


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
  | 'hatId'
  | 'hatAdmins';

export type Op_StakingEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  judgeHat: Op_HatAuthority;
  recipientHat: Op_HatAuthority;
  hatAdmins: Array<Op_HatAuthority>;
};


export type Op_StakingEligibilityhatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Op_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Op_OrderDirection>;
  where?: InputMaybe<Op_HatAuthority_filter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Op_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Op_StakingEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Op_StakingEligibility_filter>>>;
};

export type Op_StakingEligibility_orderBy =
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
  Op_hatAuthority?: Maybe<Op_HatAuthority>;
  Op_hatAuthorities: Array<Op_HatAuthority>;
  Op_hatsSignerGate?: Maybe<Op_HatsSignerGate>;
  Op_hatsSignerGates: Array<Op_HatsSignerGate>;
  Op_jokeRaceEligibility?: Maybe<Op_JokeRaceEligibility>;
  Op_jokeRaceEligibilities: Array<Op_JokeRaceEligibility>;
  Op_allowListEligibility?: Maybe<Op_AllowListEligibility>;
  Op_allowListEligibilities: Array<Op_AllowListEligibility>;
  Op_hatsElectionEligibility?: Maybe<Op_HatsElectionEligibility>;
  Op_hatsElectionEligibilities: Array<Op_HatsElectionEligibility>;
  Op_electionTerm?: Maybe<Op_ElectionTerm>;
  Op_electionTerms: Array<Op_ElectionTerm>;
  Op_passthroughModule?: Maybe<Op_PassthroughModule>;
  Op_passthroughModules: Array<Op_PassthroughModule>;
  Op_stakingEligibility?: Maybe<Op_StakingEligibility>;
  Op_stakingEligibilities: Array<Op_StakingEligibility>;
  Op_seasonToggle?: Maybe<Op_SeasonToggle>;
  Op_seasonToggles: Array<Op_SeasonToggle>;
  Op_characterSheetsLevelEligibility?: Maybe<Op_CharacterSheetsLevelEligibility>;
  Op_characterSheetsLevelEligibilities: Array<Op_CharacterSheetsLevelEligibility>;
  Op_agreementEligibility?: Maybe<Op_AgreementEligibility>;
  Op_agreementEligibilities: Array<Op_AgreementEligibility>;
  Op_agreement?: Maybe<Op_Agreement>;
  Op_agreements: Array<Op_Agreement>;
  Op_hatsAccount1OfN?: Maybe<Op_HatsAccount1ofN>;
  Op_hatsAccount1OfNs: Array<Op_HatsAccount1ofN>;
  Op_hatsAccount1OfNOperation?: Maybe<Op_HatsAccount1ofNOperation>;
  Op_hatsAccount1OfNOperations: Array<Op_HatsAccount1ofNOperation>;
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
  Op_jokeRaceEligibility: InContextSdkMethod<Query['Op_jokeRaceEligibility'], QueryOp_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  Op_jokeRaceEligibilities: InContextSdkMethod<Query['Op_jokeRaceEligibilities'], QueryOp_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  Op_allowListEligibility: InContextSdkMethod<Query['Op_allowListEligibility'], QueryOp_allowListEligibilityArgs, MeshContext>,
  /** null **/
  Op_allowListEligibilities: InContextSdkMethod<Query['Op_allowListEligibilities'], QueryOp_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  Op_hatsElectionEligibility: InContextSdkMethod<Query['Op_hatsElectionEligibility'], QueryOp_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  Op_hatsElectionEligibilities: InContextSdkMethod<Query['Op_hatsElectionEligibilities'], QueryOp_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  Op_electionTerm: InContextSdkMethod<Query['Op_electionTerm'], QueryOp_electionTermArgs, MeshContext>,
  /** null **/
  Op_electionTerms: InContextSdkMethod<Query['Op_electionTerms'], QueryOp_electionTermsArgs, MeshContext>,
  /** null **/
  Op_passthroughModule: InContextSdkMethod<Query['Op_passthroughModule'], QueryOp_passthroughModuleArgs, MeshContext>,
  /** null **/
  Op_passthroughModules: InContextSdkMethod<Query['Op_passthroughModules'], QueryOp_passthroughModulesArgs, MeshContext>,
  /** null **/
  Op_stakingEligibility: InContextSdkMethod<Query['Op_stakingEligibility'], QueryOp_stakingEligibilityArgs, MeshContext>,
  /** null **/
  Op_stakingEligibilities: InContextSdkMethod<Query['Op_stakingEligibilities'], QueryOp_stakingEligibilitiesArgs, MeshContext>,
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
  Op_hatsAccount1OfN: InContextSdkMethod<Query['Op_hatsAccount1OfN'], QueryOp_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  Op_hatsAccount1OfNs: InContextSdkMethod<Query['Op_hatsAccount1OfNs'], QueryOp_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  Op_hatsAccount1OfNOperation: InContextSdkMethod<Query['Op_hatsAccount1OfNOperation'], QueryOp_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  Op_hatsAccount1OfNOperations: InContextSdkMethod<Query['Op_hatsAccount1OfNOperations'], QueryOp_hatsAccount1OfNOperationsArgs, MeshContext>,
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
  Op_jokeRaceEligibility: InContextSdkMethod<Subscription['Op_jokeRaceEligibility'], SubscriptionOp_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  Op_jokeRaceEligibilities: InContextSdkMethod<Subscription['Op_jokeRaceEligibilities'], SubscriptionOp_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  Op_allowListEligibility: InContextSdkMethod<Subscription['Op_allowListEligibility'], SubscriptionOp_allowListEligibilityArgs, MeshContext>,
  /** null **/
  Op_allowListEligibilities: InContextSdkMethod<Subscription['Op_allowListEligibilities'], SubscriptionOp_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  Op_hatsElectionEligibility: InContextSdkMethod<Subscription['Op_hatsElectionEligibility'], SubscriptionOp_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  Op_hatsElectionEligibilities: InContextSdkMethod<Subscription['Op_hatsElectionEligibilities'], SubscriptionOp_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  Op_electionTerm: InContextSdkMethod<Subscription['Op_electionTerm'], SubscriptionOp_electionTermArgs, MeshContext>,
  /** null **/
  Op_electionTerms: InContextSdkMethod<Subscription['Op_electionTerms'], SubscriptionOp_electionTermsArgs, MeshContext>,
  /** null **/
  Op_passthroughModule: InContextSdkMethod<Subscription['Op_passthroughModule'], SubscriptionOp_passthroughModuleArgs, MeshContext>,
  /** null **/
  Op_passthroughModules: InContextSdkMethod<Subscription['Op_passthroughModules'], SubscriptionOp_passthroughModulesArgs, MeshContext>,
  /** null **/
  Op_stakingEligibility: InContextSdkMethod<Subscription['Op_stakingEligibility'], SubscriptionOp_stakingEligibilityArgs, MeshContext>,
  /** null **/
  Op_stakingEligibilities: InContextSdkMethod<Subscription['Op_stakingEligibilities'], SubscriptionOp_stakingEligibilitiesArgs, MeshContext>,
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
  Op_hatsAccount1OfN: InContextSdkMethod<Subscription['Op_hatsAccount1OfN'], SubscriptionOp_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  Op_hatsAccount1OfNs: InContextSdkMethod<Subscription['Op_hatsAccount1OfNs'], SubscriptionOp_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  Op_hatsAccount1OfNOperation: InContextSdkMethod<Subscription['Op_hatsAccount1OfNOperation'], SubscriptionOp_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  Op_hatsAccount1OfNOperations: InContextSdkMethod<Subscription['Op_hatsAccount1OfNOperations'], SubscriptionOp_hatsAccount1OfNOperationsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Op__meta: InContextSdkMethod<Subscription['Op__meta'], SubscriptionOp__metaArgs, MeshContext>
  };

  export type Context = {
      ["Optimism_Ancillary"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
