// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace PolygonAncillaryTypes {
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
  Pol_BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Pol_Bytes: { input: any; output: any; }
  Pol_Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Pol_Aggregation_interval =
  | 'hour'
  | 'day';

export type Pol_Agreement = {
  id: Scalars['ID']['output'];
  agreementEligibility: Pol_AgreementEligibility;
  agreement: Scalars['String']['output'];
  signers: Array<Scalars['String']['output']>;
  graceEndTime: Scalars['BigInt']['output'];
};

export type Pol_AgreementEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  ownerHat: Pol_HatAuthority;
  arbitratorHat: Pol_HatAuthority;
  currentAgreement: Pol_Agreement;
  currentAgreementNumber: Scalars['BigInt']['output'];
  agreements: Array<Pol_Agreement>;
};


export type Pol_AgreementEligibilityagreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_Agreement_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_Agreement_filter>;
};

export type Pol_AgreementEligibility_filter = {
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
  ownerHat_?: InputMaybe<Pol_HatAuthority_filter>;
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
  arbitratorHat_?: InputMaybe<Pol_HatAuthority_filter>;
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
  currentAgreement_?: InputMaybe<Pol_Agreement_filter>;
  currentAgreementNumber?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentAgreementNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  agreements_?: InputMaybe<Pol_Agreement_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_AgreementEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_AgreementEligibility_filter>>>;
};

export type Pol_AgreementEligibility_orderBy =
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

export type Pol_Agreement_filter = {
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
  agreementEligibility_?: InputMaybe<Pol_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_Agreement_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_Agreement_filter>>>;
};

export type Pol_Agreement_orderBy =
  | 'id'
  | 'agreementEligibility'
  | 'agreementEligibility__id'
  | 'agreementEligibility__hatId'
  | 'agreementEligibility__currentAgreementNumber'
  | 'agreement'
  | 'signers'
  | 'graceEndTime';

export type Pol_AllowListEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  ownerHat: Pol_HatAuthority;
  arbitratorHat: Pol_HatAuthority;
};

export type Pol_AllowListEligibility_filter = {
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
  ownerHat_?: InputMaybe<Pol_HatAuthority_filter>;
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
  arbitratorHat_?: InputMaybe<Pol_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_AllowListEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_AllowListEligibility_filter>>>;
};

export type Pol_AllowListEligibility_orderBy =
  | 'id'
  | 'hatId'
  | 'ownerHat'
  | 'ownerHat__id'
  | 'ownerHat__primaryHatsAccount1ofNAddress'
  | 'arbitratorHat'
  | 'arbitratorHat__id'
  | 'arbitratorHat__primaryHatsAccount1ofNAddress';

export type Pol_BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Pol_Block_height = {
  hash?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Pol_CharacterSheetsLevelEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  hatAdmins: Array<Pol_HatAuthority>;
};


export type Pol_CharacterSheetsLevelEligibilityhatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatAuthority_filter>;
};

export type Pol_CharacterSheetsLevelEligibility_filter = {
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
  hatAdmins_?: InputMaybe<Pol_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_CharacterSheetsLevelEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_CharacterSheetsLevelEligibility_filter>>>;
};

export type Pol_CharacterSheetsLevelEligibility_orderBy =
  | 'id'
  | 'hatId'
  | 'hatAdmins';

export type Pol_ElectionTerm = {
  id: Scalars['ID']['output'];
  hatsElectionEligibility: Pol_HatsElectionEligibility;
  /** first term starts when 'elect' is called, next terms start when 'startNextTerm' is called */
  termStartedAt?: Maybe<Scalars['BigInt']['output']>;
  termEnd: Scalars['BigInt']['output'];
  /** election is completed when 'elect' is called */
  electionCompletedAt?: Maybe<Scalars['BigInt']['output']>;
  electedAccounts?: Maybe<Array<Scalars['String']['output']>>;
};

export type Pol_ElectionTerm_filter = {
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
  hatsElectionEligibility_?: InputMaybe<Pol_HatsElectionEligibility_filter>;
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
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_ElectionTerm_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_ElectionTerm_filter>>>;
};

export type Pol_ElectionTerm_orderBy =
  | 'id'
  | 'hatsElectionEligibility'
  | 'hatsElectionEligibility__id'
  | 'hatsElectionEligibility__hatId'
  | 'termStartedAt'
  | 'termEnd'
  | 'electionCompletedAt'
  | 'electedAccounts';

export type Pol_HatAuthority = {
  id: Scalars['ID']['output'];
  /** pre computed hats account address with a salt value of 1, null only if the hat was not created yet */
  primaryHatsAccount1ofNAddress?: Maybe<Scalars['String']['output']>;
  hatsAccount1ofN: Array<Pol_HatsAccount1ofN>;
  hsgOwner: Array<Pol_HatsSignerGate>;
  hsgSigner: Array<Pol_HatsSignerGate>;
  jokeraceAdmin: Array<Pol_JokeRaceEligibility>;
  allowListOwner: Array<Pol_AllowListEligibility>;
  allowListArbitrator: Array<Pol_AllowListEligibility>;
  electionsBallotBox: Array<Pol_HatsElectionEligibility>;
  electionsAdmin: Array<Pol_HatsElectionEligibility>;
  eligibilityTogglePassthrough: Array<Pol_PassthroughModule>;
  stakingJudge: Array<Pol_StakingEligibility>;
  stakingRecipient: Array<Pol_StakingEligibility>;
  stakingHatAdmins: Array<Pol_StakingEligibility>;
  seasonHatAdmins: Array<Pol_SeasonToggle>;
  characterSheetsLevelHatAdmins: Array<Pol_CharacterSheetsLevelEligibility>;
  agreementOwner: Array<Pol_AgreementEligibility>;
  agreementArbitrator: Array<Pol_AgreementEligibility>;
};


export type Pol_HatAuthorityhatsAccount1ofNArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatsAccount1ofN_filter>;
};


export type Pol_HatAuthorityhsgOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatsSignerGate_filter>;
};


export type Pol_HatAuthorityhsgSignerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatsSignerGate_filter>;
};


export type Pol_HatAuthorityjokeraceAdminArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_JokeRaceEligibility_filter>;
};


export type Pol_HatAuthorityallowListOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_AllowListEligibility_filter>;
};


export type Pol_HatAuthorityallowListArbitratorArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_AllowListEligibility_filter>;
};


export type Pol_HatAuthorityelectionsBallotBoxArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatsElectionEligibility_filter>;
};


export type Pol_HatAuthorityelectionsAdminArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatsElectionEligibility_filter>;
};


export type Pol_HatAuthorityeligibilityTogglePassthroughArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_PassthroughModule_filter>;
};


export type Pol_HatAuthoritystakingJudgeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_StakingEligibility_filter>;
};


export type Pol_HatAuthoritystakingRecipientArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_StakingEligibility_filter>;
};


export type Pol_HatAuthoritystakingHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_StakingEligibility_filter>;
};


export type Pol_HatAuthorityseasonHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_SeasonToggle_filter>;
};


export type Pol_HatAuthoritycharacterSheetsLevelHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_CharacterSheetsLevelEligibility_filter>;
};


export type Pol_HatAuthorityagreementOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_AgreementEligibility_filter>;
};


export type Pol_HatAuthorityagreementArbitratorArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_AgreementEligibility_filter>;
};

export type Pol_HatAuthority_filter = {
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
  hatsAccount1ofN_?: InputMaybe<Pol_HatsAccount1ofN_filter>;
  hsgOwner_?: InputMaybe<Pol_HatsSignerGate_filter>;
  hsgSigner_?: InputMaybe<Pol_HatsSignerGate_filter>;
  jokeraceAdmin_?: InputMaybe<Pol_JokeRaceEligibility_filter>;
  allowListOwner_?: InputMaybe<Pol_AllowListEligibility_filter>;
  allowListArbitrator_?: InputMaybe<Pol_AllowListEligibility_filter>;
  electionsBallotBox_?: InputMaybe<Pol_HatsElectionEligibility_filter>;
  electionsAdmin_?: InputMaybe<Pol_HatsElectionEligibility_filter>;
  eligibilityTogglePassthrough_?: InputMaybe<Pol_PassthroughModule_filter>;
  stakingJudge_?: InputMaybe<Pol_StakingEligibility_filter>;
  stakingRecipient_?: InputMaybe<Pol_StakingEligibility_filter>;
  stakingHatAdmins_?: InputMaybe<Pol_StakingEligibility_filter>;
  seasonHatAdmins_?: InputMaybe<Pol_SeasonToggle_filter>;
  characterSheetsLevelHatAdmins_?: InputMaybe<Pol_CharacterSheetsLevelEligibility_filter>;
  agreementOwner_?: InputMaybe<Pol_AgreementEligibility_filter>;
  agreementArbitrator_?: InputMaybe<Pol_AgreementEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_HatAuthority_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_HatAuthority_filter>>>;
};

export type Pol_HatAuthority_orderBy =
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

export type Pol_HatsAccount1ofN = {
  id: Scalars['ID']['output'];
  accountOfHat: Pol_HatAuthority;
  operations: Array<Pol_HatsAccount1ofNOperation>;
};


export type Pol_HatsAccount1ofNoperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatsAccount1ofNOperation_filter>;
};

export type Pol_HatsAccount1ofNOperation = {
  id: Scalars['ID']['output'];
  hatsAccount: Pol_HatsAccount1ofN;
  signer: Scalars['String']['output'];
  to: Scalars['String']['output'];
  value: Scalars['BigInt']['output'];
  callData: Scalars['Pol_Bytes']['output'];
  operationType: Pol_HatsAccountOperationType;
};

export type Pol_HatsAccount1ofNOperation_filter = {
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
  hatsAccount_?: InputMaybe<Pol_HatsAccount1ofN_filter>;
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
  callData?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  callData_not?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  callData_gt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  callData_lt?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  callData_gte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  callData_lte?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  callData_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  callData_not_in?: InputMaybe<Array<Scalars['Pol_Bytes']['input']>>;
  callData_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  callData_not_contains?: InputMaybe<Scalars['Pol_Bytes']['input']>;
  operationType?: InputMaybe<Pol_HatsAccountOperationType>;
  operationType_not?: InputMaybe<Pol_HatsAccountOperationType>;
  operationType_in?: InputMaybe<Array<Pol_HatsAccountOperationType>>;
  operationType_not_in?: InputMaybe<Array<Pol_HatsAccountOperationType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_HatsAccount1ofNOperation_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_HatsAccount1ofNOperation_filter>>>;
};

export type Pol_HatsAccount1ofNOperation_orderBy =
  | 'id'
  | 'hatsAccount'
  | 'hatsAccount__id'
  | 'signer'
  | 'to'
  | 'value'
  | 'callData'
  | 'operationType';

export type Pol_HatsAccount1ofN_filter = {
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
  accountOfHat_?: InputMaybe<Pol_HatAuthority_filter>;
  operations_?: InputMaybe<Pol_HatsAccount1ofNOperation_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_HatsAccount1ofN_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_HatsAccount1ofN_filter>>>;
};

export type Pol_HatsAccount1ofN_orderBy =
  | 'id'
  | 'accountOfHat'
  | 'accountOfHat__id'
  | 'accountOfHat__primaryHatsAccount1ofNAddress'
  | 'operations';

export type Pol_HatsAccountOperationType =
  | 'Call'
  | 'DelegateCall';

export type Pol_HatsElectionEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  ballotBoxHat: Pol_HatAuthority;
  adminHat: Array<Pol_HatAuthority>;
  terms: Array<Pol_ElectionTerm>;
  currentTerm?: Maybe<Pol_ElectionTerm>;
};


export type Pol_HatsElectionEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatAuthority_filter>;
};


export type Pol_HatsElectionEligibilitytermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_ElectionTerm_filter>;
};

export type Pol_HatsElectionEligibility_filter = {
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
  ballotBoxHat_?: InputMaybe<Pol_HatAuthority_filter>;
  adminHat?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_?: InputMaybe<Pol_HatAuthority_filter>;
  terms_?: InputMaybe<Pol_ElectionTerm_filter>;
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
  currentTerm_?: InputMaybe<Pol_ElectionTerm_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_HatsElectionEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_HatsElectionEligibility_filter>>>;
};

export type Pol_HatsElectionEligibility_orderBy =
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

export type Pol_HatsSignerGate = {
  id: Scalars['ID']['output'];
  type: Pol_HatsSignerGateType;
  ownerHat: Pol_HatAuthority;
  signerHats: Array<Pol_HatAuthority>;
  safe: Scalars['String']['output'];
  minThreshold: Scalars['BigInt']['output'];
  targetThreshold: Scalars['BigInt']['output'];
  maxSigners: Scalars['BigInt']['output'];
};


export type Pol_HatsSignerGatesignerHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatAuthority_filter>;
};

export type Pol_HatsSignerGateType =
  | 'Single'
  | 'Multi';

export type Pol_HatsSignerGate_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  type?: InputMaybe<Pol_HatsSignerGateType>;
  type_not?: InputMaybe<Pol_HatsSignerGateType>;
  type_in?: InputMaybe<Array<Pol_HatsSignerGateType>>;
  type_not_in?: InputMaybe<Array<Pol_HatsSignerGateType>>;
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
  ownerHat_?: InputMaybe<Pol_HatAuthority_filter>;
  signerHats?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_?: InputMaybe<Pol_HatAuthority_filter>;
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
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_HatsSignerGate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_HatsSignerGate_filter>>>;
};

export type Pol_HatsSignerGate_orderBy =
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

export type Pol_JokeRaceEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  adminHat: Array<Pol_HatAuthority>;
  currentContest: Scalars['String']['output'];
  currentTermEnd: Scalars['BigInt']['output'];
  currentTopK: Scalars['BigInt']['output'];
};


export type Pol_JokeRaceEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatAuthority_filter>;
};

export type Pol_JokeRaceEligibility_filter = {
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
  adminHat_?: InputMaybe<Pol_HatAuthority_filter>;
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
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_JokeRaceEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_JokeRaceEligibility_filter>>>;
};

export type Pol_JokeRaceEligibility_orderBy =
  | 'id'
  | 'hatId'
  | 'adminHat'
  | 'currentContest'
  | 'currentTermEnd'
  | 'currentTopK';

/** Defines the order direction, either ascending or descending */
export type Pol_OrderDirection =
  | 'asc'
  | 'desc';

export type Pol_PassthroughModule = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  passthroughHat: Pol_HatAuthority;
};

export type Pol_PassthroughModule_filter = {
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
  passthroughHat_?: InputMaybe<Pol_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_PassthroughModule_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_PassthroughModule_filter>>>;
};

export type Pol_PassthroughModule_orderBy =
  | 'id'
  | 'hatId'
  | 'passthroughHat'
  | 'passthroughHat__id'
  | 'passthroughHat__primaryHatsAccount1ofNAddress';

export type Query = {
  Pol_hatAuthority?: Maybe<Pol_HatAuthority>;
  Pol_hatAuthorities: Array<Pol_HatAuthority>;
  Pol_hatsSignerGate?: Maybe<Pol_HatsSignerGate>;
  Pol_hatsSignerGates: Array<Pol_HatsSignerGate>;
  Pol_jokeRaceEligibility?: Maybe<Pol_JokeRaceEligibility>;
  Pol_jokeRaceEligibilities: Array<Pol_JokeRaceEligibility>;
  Pol_allowListEligibility?: Maybe<Pol_AllowListEligibility>;
  Pol_allowListEligibilities: Array<Pol_AllowListEligibility>;
  Pol_hatsElectionEligibility?: Maybe<Pol_HatsElectionEligibility>;
  Pol_hatsElectionEligibilities: Array<Pol_HatsElectionEligibility>;
  Pol_electionTerm?: Maybe<Pol_ElectionTerm>;
  Pol_electionTerms: Array<Pol_ElectionTerm>;
  Pol_passthroughModule?: Maybe<Pol_PassthroughModule>;
  Pol_passthroughModules: Array<Pol_PassthroughModule>;
  Pol_stakingEligibility?: Maybe<Pol_StakingEligibility>;
  Pol_stakingEligibilities: Array<Pol_StakingEligibility>;
  Pol_seasonToggle?: Maybe<Pol_SeasonToggle>;
  Pol_seasonToggles: Array<Pol_SeasonToggle>;
  Pol_characterSheetsLevelEligibility?: Maybe<Pol_CharacterSheetsLevelEligibility>;
  Pol_characterSheetsLevelEligibilities: Array<Pol_CharacterSheetsLevelEligibility>;
  Pol_agreementEligibility?: Maybe<Pol_AgreementEligibility>;
  Pol_agreementEligibilities: Array<Pol_AgreementEligibility>;
  Pol_agreement?: Maybe<Pol_Agreement>;
  Pol_agreements: Array<Pol_Agreement>;
  Pol_hatsAccount1OfN?: Maybe<Pol_HatsAccount1ofN>;
  Pol_hatsAccount1OfNs: Array<Pol_HatsAccount1ofN>;
  Pol_hatsAccount1OfNOperation?: Maybe<Pol_HatsAccount1ofNOperation>;
  Pol_hatsAccount1OfNOperations: Array<Pol_HatsAccount1ofNOperation>;
  /** Access to subgraph metadata */
  Pol__meta?: Maybe<Pol__Meta_>;
};


export type QueryPol_hatAuthorityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatAuthoritiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatAuthority_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatsSignerGateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatsSignerGatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatsSignerGate_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_jokeRaceEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_jokeRaceEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_JokeRaceEligibility_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_allowListEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_allowListEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_AllowListEligibility_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatsElectionEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatsElectionEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatsElectionEligibility_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_electionTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_electionTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_ElectionTerm_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_passthroughModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_passthroughModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_PassthroughModule_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_stakingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_stakingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_StakingEligibility_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_seasonToggleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_seasonTogglesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_SeasonToggle_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_characterSheetsLevelEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_characterSheetsLevelEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_CharacterSheetsLevelEligibility_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_agreementEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_agreementEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_AgreementEligibility_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_agreementArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_agreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_Agreement_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_Agreement_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatsAccount1OfNArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatsAccount1OfNsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatsAccount1ofN_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatsAccount1OfNOperationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol_hatsAccount1OfNOperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatsAccount1ofNOperation_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type QueryPol__metaArgs = {
  block?: InputMaybe<Pol_Block_height>;
};

export type Pol_SeasonToggle = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  hatAdmins: Array<Pol_HatAuthority>;
};


export type Pol_SeasonTogglehatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatAuthority_filter>;
};

export type Pol_SeasonToggle_filter = {
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
  hatAdmins_?: InputMaybe<Pol_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_SeasonToggle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_SeasonToggle_filter>>>;
};

export type Pol_SeasonToggle_orderBy =
  | 'id'
  | 'hatId'
  | 'hatAdmins';

export type Pol_StakingEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  judgeHat: Pol_HatAuthority;
  recipientHat: Pol_HatAuthority;
  hatAdmins: Array<Pol_HatAuthority>;
};


export type Pol_StakingEligibilityhatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatAuthority_filter>;
};

export type Pol_StakingEligibility_filter = {
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
  judgeHat_?: InputMaybe<Pol_HatAuthority_filter>;
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
  recipientHat_?: InputMaybe<Pol_HatAuthority_filter>;
  hatAdmins?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_?: InputMaybe<Pol_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Pol_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pol_StakingEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pol_StakingEligibility_filter>>>;
};

export type Pol_StakingEligibility_orderBy =
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
  Pol_hatAuthority?: Maybe<Pol_HatAuthority>;
  Pol_hatAuthorities: Array<Pol_HatAuthority>;
  Pol_hatsSignerGate?: Maybe<Pol_HatsSignerGate>;
  Pol_hatsSignerGates: Array<Pol_HatsSignerGate>;
  Pol_jokeRaceEligibility?: Maybe<Pol_JokeRaceEligibility>;
  Pol_jokeRaceEligibilities: Array<Pol_JokeRaceEligibility>;
  Pol_allowListEligibility?: Maybe<Pol_AllowListEligibility>;
  Pol_allowListEligibilities: Array<Pol_AllowListEligibility>;
  Pol_hatsElectionEligibility?: Maybe<Pol_HatsElectionEligibility>;
  Pol_hatsElectionEligibilities: Array<Pol_HatsElectionEligibility>;
  Pol_electionTerm?: Maybe<Pol_ElectionTerm>;
  Pol_electionTerms: Array<Pol_ElectionTerm>;
  Pol_passthroughModule?: Maybe<Pol_PassthroughModule>;
  Pol_passthroughModules: Array<Pol_PassthroughModule>;
  Pol_stakingEligibility?: Maybe<Pol_StakingEligibility>;
  Pol_stakingEligibilities: Array<Pol_StakingEligibility>;
  Pol_seasonToggle?: Maybe<Pol_SeasonToggle>;
  Pol_seasonToggles: Array<Pol_SeasonToggle>;
  Pol_characterSheetsLevelEligibility?: Maybe<Pol_CharacterSheetsLevelEligibility>;
  Pol_characterSheetsLevelEligibilities: Array<Pol_CharacterSheetsLevelEligibility>;
  Pol_agreementEligibility?: Maybe<Pol_AgreementEligibility>;
  Pol_agreementEligibilities: Array<Pol_AgreementEligibility>;
  Pol_agreement?: Maybe<Pol_Agreement>;
  Pol_agreements: Array<Pol_Agreement>;
  Pol_hatsAccount1OfN?: Maybe<Pol_HatsAccount1ofN>;
  Pol_hatsAccount1OfNs: Array<Pol_HatsAccount1ofN>;
  Pol_hatsAccount1OfNOperation?: Maybe<Pol_HatsAccount1ofNOperation>;
  Pol_hatsAccount1OfNOperations: Array<Pol_HatsAccount1ofNOperation>;
  /** Access to subgraph metadata */
  Pol__meta?: Maybe<Pol__Meta_>;
};


export type SubscriptionPol_hatAuthorityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatAuthoritiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatAuthority_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatsSignerGateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatsSignerGatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatsSignerGate_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_jokeRaceEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_jokeRaceEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_JokeRaceEligibility_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_allowListEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_allowListEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_AllowListEligibility_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatsElectionEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatsElectionEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatsElectionEligibility_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_electionTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_electionTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_ElectionTerm_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_passthroughModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_passthroughModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_PassthroughModule_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_stakingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_stakingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_StakingEligibility_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_seasonToggleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_seasonTogglesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_SeasonToggle_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_characterSheetsLevelEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_characterSheetsLevelEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_CharacterSheetsLevelEligibility_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_agreementEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_agreementEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_AgreementEligibility_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_agreementArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_agreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_Agreement_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_Agreement_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatsAccount1OfNArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatsAccount1OfNsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatsAccount1ofN_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatsAccount1OfNOperationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol_hatsAccount1OfNOperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pol_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Pol_OrderDirection>;
  where?: InputMaybe<Pol_HatsAccount1ofNOperation_filter>;
  block?: InputMaybe<Pol_Block_height>;
  subgraphError?: Pol__SubgraphErrorPolicy_;
};


export type SubscriptionPol__metaArgs = {
  block?: InputMaybe<Pol_Block_height>;
};

export type Pol__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Pol_Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Pol_Bytes']['output']>;
};

/** The type for the top-level _meta field */
export type Pol__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: Pol__Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type Pol__SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  Pol_hatAuthority: InContextSdkMethod<Query['Pol_hatAuthority'], QueryPol_hatAuthorityArgs, MeshContext>,
  /** null **/
  Pol_hatAuthorities: InContextSdkMethod<Query['Pol_hatAuthorities'], QueryPol_hatAuthoritiesArgs, MeshContext>,
  /** null **/
  Pol_hatsSignerGate: InContextSdkMethod<Query['Pol_hatsSignerGate'], QueryPol_hatsSignerGateArgs, MeshContext>,
  /** null **/
  Pol_hatsSignerGates: InContextSdkMethod<Query['Pol_hatsSignerGates'], QueryPol_hatsSignerGatesArgs, MeshContext>,
  /** null **/
  Pol_jokeRaceEligibility: InContextSdkMethod<Query['Pol_jokeRaceEligibility'], QueryPol_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  Pol_jokeRaceEligibilities: InContextSdkMethod<Query['Pol_jokeRaceEligibilities'], QueryPol_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  Pol_allowListEligibility: InContextSdkMethod<Query['Pol_allowListEligibility'], QueryPol_allowListEligibilityArgs, MeshContext>,
  /** null **/
  Pol_allowListEligibilities: InContextSdkMethod<Query['Pol_allowListEligibilities'], QueryPol_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  Pol_hatsElectionEligibility: InContextSdkMethod<Query['Pol_hatsElectionEligibility'], QueryPol_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  Pol_hatsElectionEligibilities: InContextSdkMethod<Query['Pol_hatsElectionEligibilities'], QueryPol_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  Pol_electionTerm: InContextSdkMethod<Query['Pol_electionTerm'], QueryPol_electionTermArgs, MeshContext>,
  /** null **/
  Pol_electionTerms: InContextSdkMethod<Query['Pol_electionTerms'], QueryPol_electionTermsArgs, MeshContext>,
  /** null **/
  Pol_passthroughModule: InContextSdkMethod<Query['Pol_passthroughModule'], QueryPol_passthroughModuleArgs, MeshContext>,
  /** null **/
  Pol_passthroughModules: InContextSdkMethod<Query['Pol_passthroughModules'], QueryPol_passthroughModulesArgs, MeshContext>,
  /** null **/
  Pol_stakingEligibility: InContextSdkMethod<Query['Pol_stakingEligibility'], QueryPol_stakingEligibilityArgs, MeshContext>,
  /** null **/
  Pol_stakingEligibilities: InContextSdkMethod<Query['Pol_stakingEligibilities'], QueryPol_stakingEligibilitiesArgs, MeshContext>,
  /** null **/
  Pol_seasonToggle: InContextSdkMethod<Query['Pol_seasonToggle'], QueryPol_seasonToggleArgs, MeshContext>,
  /** null **/
  Pol_seasonToggles: InContextSdkMethod<Query['Pol_seasonToggles'], QueryPol_seasonTogglesArgs, MeshContext>,
  /** null **/
  Pol_characterSheetsLevelEligibility: InContextSdkMethod<Query['Pol_characterSheetsLevelEligibility'], QueryPol_characterSheetsLevelEligibilityArgs, MeshContext>,
  /** null **/
  Pol_characterSheetsLevelEligibilities: InContextSdkMethod<Query['Pol_characterSheetsLevelEligibilities'], QueryPol_characterSheetsLevelEligibilitiesArgs, MeshContext>,
  /** null **/
  Pol_agreementEligibility: InContextSdkMethod<Query['Pol_agreementEligibility'], QueryPol_agreementEligibilityArgs, MeshContext>,
  /** null **/
  Pol_agreementEligibilities: InContextSdkMethod<Query['Pol_agreementEligibilities'], QueryPol_agreementEligibilitiesArgs, MeshContext>,
  /** null **/
  Pol_agreement: InContextSdkMethod<Query['Pol_agreement'], QueryPol_agreementArgs, MeshContext>,
  /** null **/
  Pol_agreements: InContextSdkMethod<Query['Pol_agreements'], QueryPol_agreementsArgs, MeshContext>,
  /** null **/
  Pol_hatsAccount1OfN: InContextSdkMethod<Query['Pol_hatsAccount1OfN'], QueryPol_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  Pol_hatsAccount1OfNs: InContextSdkMethod<Query['Pol_hatsAccount1OfNs'], QueryPol_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  Pol_hatsAccount1OfNOperation: InContextSdkMethod<Query['Pol_hatsAccount1OfNOperation'], QueryPol_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  Pol_hatsAccount1OfNOperations: InContextSdkMethod<Query['Pol_hatsAccount1OfNOperations'], QueryPol_hatsAccount1OfNOperationsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Pol__meta: InContextSdkMethod<Query['Pol__meta'], QueryPol__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  Pol_hatAuthority: InContextSdkMethod<Subscription['Pol_hatAuthority'], SubscriptionPol_hatAuthorityArgs, MeshContext>,
  /** null **/
  Pol_hatAuthorities: InContextSdkMethod<Subscription['Pol_hatAuthorities'], SubscriptionPol_hatAuthoritiesArgs, MeshContext>,
  /** null **/
  Pol_hatsSignerGate: InContextSdkMethod<Subscription['Pol_hatsSignerGate'], SubscriptionPol_hatsSignerGateArgs, MeshContext>,
  /** null **/
  Pol_hatsSignerGates: InContextSdkMethod<Subscription['Pol_hatsSignerGates'], SubscriptionPol_hatsSignerGatesArgs, MeshContext>,
  /** null **/
  Pol_jokeRaceEligibility: InContextSdkMethod<Subscription['Pol_jokeRaceEligibility'], SubscriptionPol_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  Pol_jokeRaceEligibilities: InContextSdkMethod<Subscription['Pol_jokeRaceEligibilities'], SubscriptionPol_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  Pol_allowListEligibility: InContextSdkMethod<Subscription['Pol_allowListEligibility'], SubscriptionPol_allowListEligibilityArgs, MeshContext>,
  /** null **/
  Pol_allowListEligibilities: InContextSdkMethod<Subscription['Pol_allowListEligibilities'], SubscriptionPol_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  Pol_hatsElectionEligibility: InContextSdkMethod<Subscription['Pol_hatsElectionEligibility'], SubscriptionPol_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  Pol_hatsElectionEligibilities: InContextSdkMethod<Subscription['Pol_hatsElectionEligibilities'], SubscriptionPol_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  Pol_electionTerm: InContextSdkMethod<Subscription['Pol_electionTerm'], SubscriptionPol_electionTermArgs, MeshContext>,
  /** null **/
  Pol_electionTerms: InContextSdkMethod<Subscription['Pol_electionTerms'], SubscriptionPol_electionTermsArgs, MeshContext>,
  /** null **/
  Pol_passthroughModule: InContextSdkMethod<Subscription['Pol_passthroughModule'], SubscriptionPol_passthroughModuleArgs, MeshContext>,
  /** null **/
  Pol_passthroughModules: InContextSdkMethod<Subscription['Pol_passthroughModules'], SubscriptionPol_passthroughModulesArgs, MeshContext>,
  /** null **/
  Pol_stakingEligibility: InContextSdkMethod<Subscription['Pol_stakingEligibility'], SubscriptionPol_stakingEligibilityArgs, MeshContext>,
  /** null **/
  Pol_stakingEligibilities: InContextSdkMethod<Subscription['Pol_stakingEligibilities'], SubscriptionPol_stakingEligibilitiesArgs, MeshContext>,
  /** null **/
  Pol_seasonToggle: InContextSdkMethod<Subscription['Pol_seasonToggle'], SubscriptionPol_seasonToggleArgs, MeshContext>,
  /** null **/
  Pol_seasonToggles: InContextSdkMethod<Subscription['Pol_seasonToggles'], SubscriptionPol_seasonTogglesArgs, MeshContext>,
  /** null **/
  Pol_characterSheetsLevelEligibility: InContextSdkMethod<Subscription['Pol_characterSheetsLevelEligibility'], SubscriptionPol_characterSheetsLevelEligibilityArgs, MeshContext>,
  /** null **/
  Pol_characterSheetsLevelEligibilities: InContextSdkMethod<Subscription['Pol_characterSheetsLevelEligibilities'], SubscriptionPol_characterSheetsLevelEligibilitiesArgs, MeshContext>,
  /** null **/
  Pol_agreementEligibility: InContextSdkMethod<Subscription['Pol_agreementEligibility'], SubscriptionPol_agreementEligibilityArgs, MeshContext>,
  /** null **/
  Pol_agreementEligibilities: InContextSdkMethod<Subscription['Pol_agreementEligibilities'], SubscriptionPol_agreementEligibilitiesArgs, MeshContext>,
  /** null **/
  Pol_agreement: InContextSdkMethod<Subscription['Pol_agreement'], SubscriptionPol_agreementArgs, MeshContext>,
  /** null **/
  Pol_agreements: InContextSdkMethod<Subscription['Pol_agreements'], SubscriptionPol_agreementsArgs, MeshContext>,
  /** null **/
  Pol_hatsAccount1OfN: InContextSdkMethod<Subscription['Pol_hatsAccount1OfN'], SubscriptionPol_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  Pol_hatsAccount1OfNs: InContextSdkMethod<Subscription['Pol_hatsAccount1OfNs'], SubscriptionPol_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  Pol_hatsAccount1OfNOperation: InContextSdkMethod<Subscription['Pol_hatsAccount1OfNOperation'], SubscriptionPol_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  Pol_hatsAccount1OfNOperations: InContextSdkMethod<Subscription['Pol_hatsAccount1OfNOperations'], SubscriptionPol_hatsAccount1OfNOperationsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Pol__meta: InContextSdkMethod<Subscription['Pol__meta'], SubscriptionPol__metaArgs, MeshContext>
  };

  export type Context = {
      ["Polygon_Ancillary"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
