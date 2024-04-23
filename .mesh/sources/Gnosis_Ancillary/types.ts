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

export type Gno_AgreementEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  ownerHat: Gno_HatAuthority;
  arbitratorHat: Gno_HatAuthority;
  currentAgreement: Gno_Agreement;
  currentAgreementNumber: Scalars['BigInt']['output'];
  agreements: Array<Gno_Agreement>;
};


export type Gno_AgreementEligibilityagreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_Agreement_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_Agreement_filter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_AgreementEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_AgreementEligibility_filter>>>;
};

export type Gno_AgreementEligibility_orderBy =
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
  | 'agreementEligibility__hatId'
  | 'agreementEligibility__currentAgreementNumber'
  | 'agreement'
  | 'signers'
  | 'graceEndTime';

export type Gno_AllowListEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  ownerHat: Gno_HatAuthority;
  arbitratorHat: Gno_HatAuthority;
};

export type Gno_AllowListEligibility_filter = {
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_AllowListEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_AllowListEligibility_filter>>>;
};

export type Gno_AllowListEligibility_orderBy =
  | 'id'
  | 'hatId'
  | 'ownerHat'
  | 'ownerHat__id'
  | 'ownerHat__primaryHatsAccount1ofNAddress'
  | 'arbitratorHat'
  | 'arbitratorHat__id'
  | 'arbitratorHat__primaryHatsAccount1ofNAddress';

export type Gno_BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Gno_Block_height = {
  hash?: InputMaybe<Scalars['Gno_Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Gno_CharacterSheetsLevelEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  hatAdmins: Array<Gno_HatAuthority>;
};


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
  | 'hatId'
  | 'hatAdmins';

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
  | 'hatsElectionEligibility__hatId'
  | 'termStartedAt'
  | 'termEnd'
  | 'electionCompletedAt'
  | 'electedAccounts';

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
  | 'agreementArbitrator';

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

export type Gno_HatsElectionEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  ballotBoxHat: Gno_HatAuthority;
  adminHat: Array<Gno_HatAuthority>;
  terms: Array<Gno_ElectionTerm>;
  currentTerm?: Maybe<Gno_ElectionTerm>;
};


export type Gno_HatsElectionEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatAuthority_filter>;
};


export type Gno_HatsElectionEligibilitytermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_ElectionTerm_filter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_HatsElectionEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_HatsElectionEligibility_filter>>>;
};

export type Gno_HatsElectionEligibility_orderBy =
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

export type Gno_JokeRaceEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  adminHat: Array<Gno_HatAuthority>;
  currentContest: Scalars['String']['output'];
  currentTermEnd: Scalars['BigInt']['output'];
  currentTopK: Scalars['BigInt']['output'];
};


export type Gno_JokeRaceEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatAuthority_filter>;
};

export type Gno_JokeRaceEligibility_filter = {
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
  adminHat_?: InputMaybe<Gno_HatAuthority_filter>;
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
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_JokeRaceEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_JokeRaceEligibility_filter>>>;
};

export type Gno_JokeRaceEligibility_orderBy =
  | 'id'
  | 'hatId'
  | 'adminHat'
  | 'currentContest'
  | 'currentTermEnd'
  | 'currentTopK';

/** Defines the order direction, either ascending or descending */
export type Gno_OrderDirection =
  | 'asc'
  | 'desc';

export type Gno_PassthroughModule = {
  id: Scalars['ID']['output'];
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
  | 'hatId'
  | 'passthroughHat'
  | 'passthroughHat__id'
  | 'passthroughHat__primaryHatsAccount1ofNAddress';

export type Query = {
  Gno_hatAuthority?: Maybe<Gno_HatAuthority>;
  Gno_hatAuthorities: Array<Gno_HatAuthority>;
  Gno_hatsSignerGate?: Maybe<Gno_HatsSignerGate>;
  Gno_hatsSignerGates: Array<Gno_HatsSignerGate>;
  Gno_jokeRaceEligibility?: Maybe<Gno_JokeRaceEligibility>;
  Gno_jokeRaceEligibilities: Array<Gno_JokeRaceEligibility>;
  Gno_allowListEligibility?: Maybe<Gno_AllowListEligibility>;
  Gno_allowListEligibilities: Array<Gno_AllowListEligibility>;
  Gno_hatsElectionEligibility?: Maybe<Gno_HatsElectionEligibility>;
  Gno_hatsElectionEligibilities: Array<Gno_HatsElectionEligibility>;
  Gno_electionTerm?: Maybe<Gno_ElectionTerm>;
  Gno_electionTerms: Array<Gno_ElectionTerm>;
  Gno_passthroughModule?: Maybe<Gno_PassthroughModule>;
  Gno_passthroughModules: Array<Gno_PassthroughModule>;
  Gno_stakingEligibility?: Maybe<Gno_StakingEligibility>;
  Gno_stakingEligibilities: Array<Gno_StakingEligibility>;
  Gno_seasonToggle?: Maybe<Gno_SeasonToggle>;
  Gno_seasonToggles: Array<Gno_SeasonToggle>;
  Gno_characterSheetsLevelEligibility?: Maybe<Gno_CharacterSheetsLevelEligibility>;
  Gno_characterSheetsLevelEligibilities: Array<Gno_CharacterSheetsLevelEligibility>;
  Gno_agreementEligibility?: Maybe<Gno_AgreementEligibility>;
  Gno_agreementEligibilities: Array<Gno_AgreementEligibility>;
  Gno_agreement?: Maybe<Gno_Agreement>;
  Gno_agreements: Array<Gno_Agreement>;
  Gno_hatsAccount1OfN?: Maybe<Gno_HatsAccount1ofN>;
  Gno_hatsAccount1OfNs: Array<Gno_HatsAccount1ofN>;
  Gno_hatsAccount1OfNOperation?: Maybe<Gno_HatsAccount1ofNOperation>;
  Gno_hatsAccount1OfNOperations: Array<Gno_HatsAccount1ofNOperation>;
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


export type QueryGno__metaArgs = {
  block?: InputMaybe<Gno_Block_height>;
};

export type Gno_SeasonToggle = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  hatAdmins: Array<Gno_HatAuthority>;
};


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
  | 'hatId'
  | 'hatAdmins';

export type Gno_StakingEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  judgeHat: Gno_HatAuthority;
  recipientHat: Gno_HatAuthority;
  hatAdmins: Array<Gno_HatAuthority>;
};


export type Gno_StakingEligibilityhatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Gno_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Gno_OrderDirection>;
  where?: InputMaybe<Gno_HatAuthority_filter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Gno_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gno_StakingEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gno_StakingEligibility_filter>>>;
};

export type Gno_StakingEligibility_orderBy =
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
  Gno_hatAuthority?: Maybe<Gno_HatAuthority>;
  Gno_hatAuthorities: Array<Gno_HatAuthority>;
  Gno_hatsSignerGate?: Maybe<Gno_HatsSignerGate>;
  Gno_hatsSignerGates: Array<Gno_HatsSignerGate>;
  Gno_jokeRaceEligibility?: Maybe<Gno_JokeRaceEligibility>;
  Gno_jokeRaceEligibilities: Array<Gno_JokeRaceEligibility>;
  Gno_allowListEligibility?: Maybe<Gno_AllowListEligibility>;
  Gno_allowListEligibilities: Array<Gno_AllowListEligibility>;
  Gno_hatsElectionEligibility?: Maybe<Gno_HatsElectionEligibility>;
  Gno_hatsElectionEligibilities: Array<Gno_HatsElectionEligibility>;
  Gno_electionTerm?: Maybe<Gno_ElectionTerm>;
  Gno_electionTerms: Array<Gno_ElectionTerm>;
  Gno_passthroughModule?: Maybe<Gno_PassthroughModule>;
  Gno_passthroughModules: Array<Gno_PassthroughModule>;
  Gno_stakingEligibility?: Maybe<Gno_StakingEligibility>;
  Gno_stakingEligibilities: Array<Gno_StakingEligibility>;
  Gno_seasonToggle?: Maybe<Gno_SeasonToggle>;
  Gno_seasonToggles: Array<Gno_SeasonToggle>;
  Gno_characterSheetsLevelEligibility?: Maybe<Gno_CharacterSheetsLevelEligibility>;
  Gno_characterSheetsLevelEligibilities: Array<Gno_CharacterSheetsLevelEligibility>;
  Gno_agreementEligibility?: Maybe<Gno_AgreementEligibility>;
  Gno_agreementEligibilities: Array<Gno_AgreementEligibility>;
  Gno_agreement?: Maybe<Gno_Agreement>;
  Gno_agreements: Array<Gno_Agreement>;
  Gno_hatsAccount1OfN?: Maybe<Gno_HatsAccount1ofN>;
  Gno_hatsAccount1OfNs: Array<Gno_HatsAccount1ofN>;
  Gno_hatsAccount1OfNOperation?: Maybe<Gno_HatsAccount1ofNOperation>;
  Gno_hatsAccount1OfNOperations: Array<Gno_HatsAccount1ofNOperation>;
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
  Gno_jokeRaceEligibility: InContextSdkMethod<Query['Gno_jokeRaceEligibility'], QueryGno_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  Gno_jokeRaceEligibilities: InContextSdkMethod<Query['Gno_jokeRaceEligibilities'], QueryGno_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_allowListEligibility: InContextSdkMethod<Query['Gno_allowListEligibility'], QueryGno_allowListEligibilityArgs, MeshContext>,
  /** null **/
  Gno_allowListEligibilities: InContextSdkMethod<Query['Gno_allowListEligibilities'], QueryGno_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_hatsElectionEligibility: InContextSdkMethod<Query['Gno_hatsElectionEligibility'], QueryGno_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  Gno_hatsElectionEligibilities: InContextSdkMethod<Query['Gno_hatsElectionEligibilities'], QueryGno_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_electionTerm: InContextSdkMethod<Query['Gno_electionTerm'], QueryGno_electionTermArgs, MeshContext>,
  /** null **/
  Gno_electionTerms: InContextSdkMethod<Query['Gno_electionTerms'], QueryGno_electionTermsArgs, MeshContext>,
  /** null **/
  Gno_passthroughModule: InContextSdkMethod<Query['Gno_passthroughModule'], QueryGno_passthroughModuleArgs, MeshContext>,
  /** null **/
  Gno_passthroughModules: InContextSdkMethod<Query['Gno_passthroughModules'], QueryGno_passthroughModulesArgs, MeshContext>,
  /** null **/
  Gno_stakingEligibility: InContextSdkMethod<Query['Gno_stakingEligibility'], QueryGno_stakingEligibilityArgs, MeshContext>,
  /** null **/
  Gno_stakingEligibilities: InContextSdkMethod<Query['Gno_stakingEligibilities'], QueryGno_stakingEligibilitiesArgs, MeshContext>,
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
  Gno_hatsAccount1OfN: InContextSdkMethod<Query['Gno_hatsAccount1OfN'], QueryGno_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  Gno_hatsAccount1OfNs: InContextSdkMethod<Query['Gno_hatsAccount1OfNs'], QueryGno_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  Gno_hatsAccount1OfNOperation: InContextSdkMethod<Query['Gno_hatsAccount1OfNOperation'], QueryGno_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  Gno_hatsAccount1OfNOperations: InContextSdkMethod<Query['Gno_hatsAccount1OfNOperations'], QueryGno_hatsAccount1OfNOperationsArgs, MeshContext>,
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
  Gno_jokeRaceEligibility: InContextSdkMethod<Subscription['Gno_jokeRaceEligibility'], SubscriptionGno_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  Gno_jokeRaceEligibilities: InContextSdkMethod<Subscription['Gno_jokeRaceEligibilities'], SubscriptionGno_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_allowListEligibility: InContextSdkMethod<Subscription['Gno_allowListEligibility'], SubscriptionGno_allowListEligibilityArgs, MeshContext>,
  /** null **/
  Gno_allowListEligibilities: InContextSdkMethod<Subscription['Gno_allowListEligibilities'], SubscriptionGno_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_hatsElectionEligibility: InContextSdkMethod<Subscription['Gno_hatsElectionEligibility'], SubscriptionGno_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  Gno_hatsElectionEligibilities: InContextSdkMethod<Subscription['Gno_hatsElectionEligibilities'], SubscriptionGno_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  Gno_electionTerm: InContextSdkMethod<Subscription['Gno_electionTerm'], SubscriptionGno_electionTermArgs, MeshContext>,
  /** null **/
  Gno_electionTerms: InContextSdkMethod<Subscription['Gno_electionTerms'], SubscriptionGno_electionTermsArgs, MeshContext>,
  /** null **/
  Gno_passthroughModule: InContextSdkMethod<Subscription['Gno_passthroughModule'], SubscriptionGno_passthroughModuleArgs, MeshContext>,
  /** null **/
  Gno_passthroughModules: InContextSdkMethod<Subscription['Gno_passthroughModules'], SubscriptionGno_passthroughModulesArgs, MeshContext>,
  /** null **/
  Gno_stakingEligibility: InContextSdkMethod<Subscription['Gno_stakingEligibility'], SubscriptionGno_stakingEligibilityArgs, MeshContext>,
  /** null **/
  Gno_stakingEligibilities: InContextSdkMethod<Subscription['Gno_stakingEligibilities'], SubscriptionGno_stakingEligibilitiesArgs, MeshContext>,
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
  Gno_hatsAccount1OfN: InContextSdkMethod<Subscription['Gno_hatsAccount1OfN'], SubscriptionGno_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  Gno_hatsAccount1OfNs: InContextSdkMethod<Subscription['Gno_hatsAccount1OfNs'], SubscriptionGno_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  Gno_hatsAccount1OfNOperation: InContextSdkMethod<Subscription['Gno_hatsAccount1OfNOperation'], SubscriptionGno_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  Gno_hatsAccount1OfNOperations: InContextSdkMethod<Subscription['Gno_hatsAccount1OfNOperations'], SubscriptionGno_hatsAccount1OfNOperationsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Gno__meta: InContextSdkMethod<Subscription['Gno__meta'], SubscriptionGno__metaArgs, MeshContext>
  };

  export type Context = {
      ["Gnosis_Ancillary"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
