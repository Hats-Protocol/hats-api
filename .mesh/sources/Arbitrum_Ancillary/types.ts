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

export type Arb_AgreementEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  ownerHat: Arb_HatAuthority;
  arbitratorHat: Arb_HatAuthority;
  currentAgreement: Arb_Agreement;
  currentAgreementNumber: Scalars['BigInt']['output'];
  agreements: Array<Arb_Agreement>;
};


export type Arb_AgreementEligibilityagreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_Agreement_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_Agreement_filter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_AgreementEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_AgreementEligibility_filter>>>;
};

export type Arb_AgreementEligibility_orderBy =
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
  | 'agreementEligibility__hatId'
  | 'agreementEligibility__currentAgreementNumber'
  | 'agreement'
  | 'signers'
  | 'graceEndTime';

export type Arb_AllowListEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  ownerHat: Arb_HatAuthority;
  arbitratorHat: Arb_HatAuthority;
};

export type Arb_AllowListEligibility_filter = {
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_AllowListEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_AllowListEligibility_filter>>>;
};

export type Arb_AllowListEligibility_orderBy =
  | 'id'
  | 'hatId'
  | 'ownerHat'
  | 'ownerHat__id'
  | 'ownerHat__primaryHatsAccount1ofNAddress'
  | 'arbitratorHat'
  | 'arbitratorHat__id'
  | 'arbitratorHat__primaryHatsAccount1ofNAddress';

export type Arb_BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Arb_Block_height = {
  hash?: InputMaybe<Scalars['Arb_Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Arb_CharacterSheetsLevelEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  hatAdmins: Array<Arb_HatAuthority>;
};


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
  | 'hatId'
  | 'hatAdmins';

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
  | 'hatsElectionEligibility__hatId'
  | 'termStartedAt'
  | 'termEnd'
  | 'electionCompletedAt'
  | 'electedAccounts';

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
  | 'agreementArbitrator';

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

export type Arb_HatsElectionEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  ballotBoxHat: Arb_HatAuthority;
  adminHat: Array<Arb_HatAuthority>;
  terms: Array<Arb_ElectionTerm>;
  currentTerm?: Maybe<Arb_ElectionTerm>;
};


export type Arb_HatsElectionEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatAuthority_filter>;
};


export type Arb_HatsElectionEligibilitytermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_ElectionTerm_filter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_HatsElectionEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_HatsElectionEligibility_filter>>>;
};

export type Arb_HatsElectionEligibility_orderBy =
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

export type Arb_JokeRaceEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  adminHat: Array<Arb_HatAuthority>;
  currentContest: Scalars['String']['output'];
  currentTermEnd: Scalars['BigInt']['output'];
  currentTopK: Scalars['BigInt']['output'];
};


export type Arb_JokeRaceEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatAuthority_filter>;
};

export type Arb_JokeRaceEligibility_filter = {
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
  adminHat_?: InputMaybe<Arb_HatAuthority_filter>;
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
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_JokeRaceEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_JokeRaceEligibility_filter>>>;
};

export type Arb_JokeRaceEligibility_orderBy =
  | 'id'
  | 'hatId'
  | 'adminHat'
  | 'currentContest'
  | 'currentTermEnd'
  | 'currentTopK';

/** Defines the order direction, either ascending or descending */
export type Arb_OrderDirection =
  | 'asc'
  | 'desc';

export type Arb_PassthroughModule = {
  id: Scalars['ID']['output'];
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
  | 'hatId'
  | 'passthroughHat'
  | 'passthroughHat__id'
  | 'passthroughHat__primaryHatsAccount1ofNAddress';

export type Query = {
  Arb_hatAuthority?: Maybe<Arb_HatAuthority>;
  Arb_hatAuthorities: Array<Arb_HatAuthority>;
  Arb_hatsSignerGate?: Maybe<Arb_HatsSignerGate>;
  Arb_hatsSignerGates: Array<Arb_HatsSignerGate>;
  Arb_jokeRaceEligibility?: Maybe<Arb_JokeRaceEligibility>;
  Arb_jokeRaceEligibilities: Array<Arb_JokeRaceEligibility>;
  Arb_allowListEligibility?: Maybe<Arb_AllowListEligibility>;
  Arb_allowListEligibilities: Array<Arb_AllowListEligibility>;
  Arb_hatsElectionEligibility?: Maybe<Arb_HatsElectionEligibility>;
  Arb_hatsElectionEligibilities: Array<Arb_HatsElectionEligibility>;
  Arb_electionTerm?: Maybe<Arb_ElectionTerm>;
  Arb_electionTerms: Array<Arb_ElectionTerm>;
  Arb_passthroughModule?: Maybe<Arb_PassthroughModule>;
  Arb_passthroughModules: Array<Arb_PassthroughModule>;
  Arb_stakingEligibility?: Maybe<Arb_StakingEligibility>;
  Arb_stakingEligibilities: Array<Arb_StakingEligibility>;
  Arb_seasonToggle?: Maybe<Arb_SeasonToggle>;
  Arb_seasonToggles: Array<Arb_SeasonToggle>;
  Arb_characterSheetsLevelEligibility?: Maybe<Arb_CharacterSheetsLevelEligibility>;
  Arb_characterSheetsLevelEligibilities: Array<Arb_CharacterSheetsLevelEligibility>;
  Arb_agreementEligibility?: Maybe<Arb_AgreementEligibility>;
  Arb_agreementEligibilities: Array<Arb_AgreementEligibility>;
  Arb_agreement?: Maybe<Arb_Agreement>;
  Arb_agreements: Array<Arb_Agreement>;
  Arb_hatsAccount1OfN?: Maybe<Arb_HatsAccount1ofN>;
  Arb_hatsAccount1OfNs: Array<Arb_HatsAccount1ofN>;
  Arb_hatsAccount1OfNOperation?: Maybe<Arb_HatsAccount1ofNOperation>;
  Arb_hatsAccount1OfNOperations: Array<Arb_HatsAccount1ofNOperation>;
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


export type QueryArb__metaArgs = {
  block?: InputMaybe<Arb_Block_height>;
};

export type Arb_SeasonToggle = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  hatAdmins: Array<Arb_HatAuthority>;
};


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
  | 'hatId'
  | 'hatAdmins';

export type Arb_StakingEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  judgeHat: Arb_HatAuthority;
  recipientHat: Arb_HatAuthority;
  hatAdmins: Array<Arb_HatAuthority>;
};


export type Arb_StakingEligibilityhatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arb_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Arb_OrderDirection>;
  where?: InputMaybe<Arb_HatAuthority_filter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arb_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arb_StakingEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arb_StakingEligibility_filter>>>;
};

export type Arb_StakingEligibility_orderBy =
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
  Arb_hatAuthority?: Maybe<Arb_HatAuthority>;
  Arb_hatAuthorities: Array<Arb_HatAuthority>;
  Arb_hatsSignerGate?: Maybe<Arb_HatsSignerGate>;
  Arb_hatsSignerGates: Array<Arb_HatsSignerGate>;
  Arb_jokeRaceEligibility?: Maybe<Arb_JokeRaceEligibility>;
  Arb_jokeRaceEligibilities: Array<Arb_JokeRaceEligibility>;
  Arb_allowListEligibility?: Maybe<Arb_AllowListEligibility>;
  Arb_allowListEligibilities: Array<Arb_AllowListEligibility>;
  Arb_hatsElectionEligibility?: Maybe<Arb_HatsElectionEligibility>;
  Arb_hatsElectionEligibilities: Array<Arb_HatsElectionEligibility>;
  Arb_electionTerm?: Maybe<Arb_ElectionTerm>;
  Arb_electionTerms: Array<Arb_ElectionTerm>;
  Arb_passthroughModule?: Maybe<Arb_PassthroughModule>;
  Arb_passthroughModules: Array<Arb_PassthroughModule>;
  Arb_stakingEligibility?: Maybe<Arb_StakingEligibility>;
  Arb_stakingEligibilities: Array<Arb_StakingEligibility>;
  Arb_seasonToggle?: Maybe<Arb_SeasonToggle>;
  Arb_seasonToggles: Array<Arb_SeasonToggle>;
  Arb_characterSheetsLevelEligibility?: Maybe<Arb_CharacterSheetsLevelEligibility>;
  Arb_characterSheetsLevelEligibilities: Array<Arb_CharacterSheetsLevelEligibility>;
  Arb_agreementEligibility?: Maybe<Arb_AgreementEligibility>;
  Arb_agreementEligibilities: Array<Arb_AgreementEligibility>;
  Arb_agreement?: Maybe<Arb_Agreement>;
  Arb_agreements: Array<Arb_Agreement>;
  Arb_hatsAccount1OfN?: Maybe<Arb_HatsAccount1ofN>;
  Arb_hatsAccount1OfNs: Array<Arb_HatsAccount1ofN>;
  Arb_hatsAccount1OfNOperation?: Maybe<Arb_HatsAccount1ofNOperation>;
  Arb_hatsAccount1OfNOperations: Array<Arb_HatsAccount1ofNOperation>;
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
  Arb_jokeRaceEligibility: InContextSdkMethod<Query['Arb_jokeRaceEligibility'], QueryArb_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  Arb_jokeRaceEligibilities: InContextSdkMethod<Query['Arb_jokeRaceEligibilities'], QueryArb_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_allowListEligibility: InContextSdkMethod<Query['Arb_allowListEligibility'], QueryArb_allowListEligibilityArgs, MeshContext>,
  /** null **/
  Arb_allowListEligibilities: InContextSdkMethod<Query['Arb_allowListEligibilities'], QueryArb_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_hatsElectionEligibility: InContextSdkMethod<Query['Arb_hatsElectionEligibility'], QueryArb_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  Arb_hatsElectionEligibilities: InContextSdkMethod<Query['Arb_hatsElectionEligibilities'], QueryArb_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_electionTerm: InContextSdkMethod<Query['Arb_electionTerm'], QueryArb_electionTermArgs, MeshContext>,
  /** null **/
  Arb_electionTerms: InContextSdkMethod<Query['Arb_electionTerms'], QueryArb_electionTermsArgs, MeshContext>,
  /** null **/
  Arb_passthroughModule: InContextSdkMethod<Query['Arb_passthroughModule'], QueryArb_passthroughModuleArgs, MeshContext>,
  /** null **/
  Arb_passthroughModules: InContextSdkMethod<Query['Arb_passthroughModules'], QueryArb_passthroughModulesArgs, MeshContext>,
  /** null **/
  Arb_stakingEligibility: InContextSdkMethod<Query['Arb_stakingEligibility'], QueryArb_stakingEligibilityArgs, MeshContext>,
  /** null **/
  Arb_stakingEligibilities: InContextSdkMethod<Query['Arb_stakingEligibilities'], QueryArb_stakingEligibilitiesArgs, MeshContext>,
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
  Arb_hatsAccount1OfN: InContextSdkMethod<Query['Arb_hatsAccount1OfN'], QueryArb_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  Arb_hatsAccount1OfNs: InContextSdkMethod<Query['Arb_hatsAccount1OfNs'], QueryArb_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  Arb_hatsAccount1OfNOperation: InContextSdkMethod<Query['Arb_hatsAccount1OfNOperation'], QueryArb_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  Arb_hatsAccount1OfNOperations: InContextSdkMethod<Query['Arb_hatsAccount1OfNOperations'], QueryArb_hatsAccount1OfNOperationsArgs, MeshContext>,
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
  Arb_jokeRaceEligibility: InContextSdkMethod<Subscription['Arb_jokeRaceEligibility'], SubscriptionArb_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  Arb_jokeRaceEligibilities: InContextSdkMethod<Subscription['Arb_jokeRaceEligibilities'], SubscriptionArb_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_allowListEligibility: InContextSdkMethod<Subscription['Arb_allowListEligibility'], SubscriptionArb_allowListEligibilityArgs, MeshContext>,
  /** null **/
  Arb_allowListEligibilities: InContextSdkMethod<Subscription['Arb_allowListEligibilities'], SubscriptionArb_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_hatsElectionEligibility: InContextSdkMethod<Subscription['Arb_hatsElectionEligibility'], SubscriptionArb_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  Arb_hatsElectionEligibilities: InContextSdkMethod<Subscription['Arb_hatsElectionEligibilities'], SubscriptionArb_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  Arb_electionTerm: InContextSdkMethod<Subscription['Arb_electionTerm'], SubscriptionArb_electionTermArgs, MeshContext>,
  /** null **/
  Arb_electionTerms: InContextSdkMethod<Subscription['Arb_electionTerms'], SubscriptionArb_electionTermsArgs, MeshContext>,
  /** null **/
  Arb_passthroughModule: InContextSdkMethod<Subscription['Arb_passthroughModule'], SubscriptionArb_passthroughModuleArgs, MeshContext>,
  /** null **/
  Arb_passthroughModules: InContextSdkMethod<Subscription['Arb_passthroughModules'], SubscriptionArb_passthroughModulesArgs, MeshContext>,
  /** null **/
  Arb_stakingEligibility: InContextSdkMethod<Subscription['Arb_stakingEligibility'], SubscriptionArb_stakingEligibilityArgs, MeshContext>,
  /** null **/
  Arb_stakingEligibilities: InContextSdkMethod<Subscription['Arb_stakingEligibilities'], SubscriptionArb_stakingEligibilitiesArgs, MeshContext>,
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
  Arb_hatsAccount1OfN: InContextSdkMethod<Subscription['Arb_hatsAccount1OfN'], SubscriptionArb_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  Arb_hatsAccount1OfNs: InContextSdkMethod<Subscription['Arb_hatsAccount1OfNs'], SubscriptionArb_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  Arb_hatsAccount1OfNOperation: InContextSdkMethod<Subscription['Arb_hatsAccount1OfNOperation'], SubscriptionArb_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  Arb_hatsAccount1OfNOperations: InContextSdkMethod<Subscription['Arb_hatsAccount1OfNOperations'], SubscriptionArb_hatsAccount1OfNOperationsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Arb__meta: InContextSdkMethod<Subscription['Arb__meta'], SubscriptionArb__metaArgs, MeshContext>
  };

  export type Context = {
      ["Arbitrum_Ancillary"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
