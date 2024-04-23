// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace CeloAncillaryTypes {
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
  Celo_BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Celo_Bytes: { input: any; output: any; }
  Celo_Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Celo_Aggregation_interval =
  | 'hour'
  | 'day';

export type Celo_Agreement = {
  id: Scalars['ID']['output'];
  agreementEligibility: Celo_AgreementEligibility;
  agreement: Scalars['String']['output'];
  signers: Array<Scalars['String']['output']>;
  graceEndTime: Scalars['BigInt']['output'];
};

export type Celo_AgreementEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  ownerHat: Celo_HatAuthority;
  arbitratorHat: Celo_HatAuthority;
  currentAgreement: Celo_Agreement;
  currentAgreementNumber: Scalars['BigInt']['output'];
  agreements: Array<Celo_Agreement>;
};


export type Celo_AgreementEligibilityagreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Agreement_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Agreement_filter>;
};

export type Celo_AgreementEligibility_filter = {
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
  ownerHat_?: InputMaybe<Celo_HatAuthority_filter>;
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
  arbitratorHat_?: InputMaybe<Celo_HatAuthority_filter>;
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
  currentAgreement_?: InputMaybe<Celo_Agreement_filter>;
  currentAgreementNumber?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentAgreementNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  agreements_?: InputMaybe<Celo_Agreement_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_AgreementEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_AgreementEligibility_filter>>>;
};

export type Celo_AgreementEligibility_orderBy =
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

export type Celo_Agreement_filter = {
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
  agreementEligibility_?: InputMaybe<Celo_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_Agreement_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_Agreement_filter>>>;
};

export type Celo_Agreement_orderBy =
  | 'id'
  | 'agreementEligibility'
  | 'agreementEligibility__id'
  | 'agreementEligibility__hatId'
  | 'agreementEligibility__currentAgreementNumber'
  | 'agreement'
  | 'signers'
  | 'graceEndTime';

export type Celo_AllowListEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  ownerHat: Celo_HatAuthority;
  arbitratorHat: Celo_HatAuthority;
};

export type Celo_AllowListEligibility_filter = {
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
  ownerHat_?: InputMaybe<Celo_HatAuthority_filter>;
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
  arbitratorHat_?: InputMaybe<Celo_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_AllowListEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_AllowListEligibility_filter>>>;
};

export type Celo_AllowListEligibility_orderBy =
  | 'id'
  | 'hatId'
  | 'ownerHat'
  | 'ownerHat__id'
  | 'ownerHat__primaryHatsAccount1ofNAddress'
  | 'arbitratorHat'
  | 'arbitratorHat__id'
  | 'arbitratorHat__primaryHatsAccount1ofNAddress';

export type Celo_BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Celo_Block_height = {
  hash?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Celo_CharacterSheetsLevelEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  hatAdmins: Array<Celo_HatAuthority>;
};


export type Celo_CharacterSheetsLevelEligibilityhatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatAuthority_filter>;
};

export type Celo_CharacterSheetsLevelEligibility_filter = {
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
  hatAdmins_?: InputMaybe<Celo_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_CharacterSheetsLevelEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_CharacterSheetsLevelEligibility_filter>>>;
};

export type Celo_CharacterSheetsLevelEligibility_orderBy =
  | 'id'
  | 'hatId'
  | 'hatAdmins';

export type Celo_ElectionTerm = {
  id: Scalars['ID']['output'];
  hatsElectionEligibility: Celo_HatsElectionEligibility;
  /** first term starts when 'elect' is called, next terms start when 'startNextTerm' is called */
  termStartedAt?: Maybe<Scalars['BigInt']['output']>;
  termEnd: Scalars['BigInt']['output'];
  /** election is completed when 'elect' is called */
  electionCompletedAt?: Maybe<Scalars['BigInt']['output']>;
  electedAccounts?: Maybe<Array<Scalars['String']['output']>>;
};

export type Celo_ElectionTerm_filter = {
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
  hatsElectionEligibility_?: InputMaybe<Celo_HatsElectionEligibility_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_ElectionTerm_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_ElectionTerm_filter>>>;
};

export type Celo_ElectionTerm_orderBy =
  | 'id'
  | 'hatsElectionEligibility'
  | 'hatsElectionEligibility__id'
  | 'hatsElectionEligibility__hatId'
  | 'termStartedAt'
  | 'termEnd'
  | 'electionCompletedAt'
  | 'electedAccounts';

export type Celo_HatAuthority = {
  id: Scalars['ID']['output'];
  /** pre computed hats account address with a salt value of 1, null only if the hat was not created yet */
  primaryHatsAccount1ofNAddress?: Maybe<Scalars['String']['output']>;
  hatsAccount1ofN: Array<Celo_HatsAccount1ofN>;
  hsgOwner: Array<Celo_HatsSignerGate>;
  hsgSigner: Array<Celo_HatsSignerGate>;
  jokeraceAdmin: Array<Celo_JokeRaceEligibility>;
  allowListOwner: Array<Celo_AllowListEligibility>;
  allowListArbitrator: Array<Celo_AllowListEligibility>;
  electionsBallotBox: Array<Celo_HatsElectionEligibility>;
  electionsAdmin: Array<Celo_HatsElectionEligibility>;
  eligibilityTogglePassthrough: Array<Celo_PassthroughModule>;
  stakingJudge: Array<Celo_StakingEligibility>;
  stakingRecipient: Array<Celo_StakingEligibility>;
  stakingHatAdmins: Array<Celo_StakingEligibility>;
  seasonHatAdmins: Array<Celo_SeasonToggle>;
  characterSheetsLevelHatAdmins: Array<Celo_CharacterSheetsLevelEligibility>;
  agreementOwner: Array<Celo_AgreementEligibility>;
  agreementArbitrator: Array<Celo_AgreementEligibility>;
};


export type Celo_HatAuthorityhatsAccount1ofNArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsAccount1ofN_filter>;
};


export type Celo_HatAuthorityhsgOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGate_filter>;
};


export type Celo_HatAuthorityhsgSignerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGate_filter>;
};


export type Celo_HatAuthorityjokeraceAdminArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_JokeRaceEligibility_filter>;
};


export type Celo_HatAuthorityallowListOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_AllowListEligibility_filter>;
};


export type Celo_HatAuthorityallowListArbitratorArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_AllowListEligibility_filter>;
};


export type Celo_HatAuthorityelectionsBallotBoxArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsElectionEligibility_filter>;
};


export type Celo_HatAuthorityelectionsAdminArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsElectionEligibility_filter>;
};


export type Celo_HatAuthorityeligibilityTogglePassthroughArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_PassthroughModule_filter>;
};


export type Celo_HatAuthoritystakingJudgeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_StakingEligibility_filter>;
};


export type Celo_HatAuthoritystakingRecipientArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_StakingEligibility_filter>;
};


export type Celo_HatAuthoritystakingHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_StakingEligibility_filter>;
};


export type Celo_HatAuthorityseasonHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_SeasonToggle_filter>;
};


export type Celo_HatAuthoritycharacterSheetsLevelHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_CharacterSheetsLevelEligibility_filter>;
};


export type Celo_HatAuthorityagreementOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_AgreementEligibility_filter>;
};


export type Celo_HatAuthorityagreementArbitratorArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_AgreementEligibility_filter>;
};

export type Celo_HatAuthority_filter = {
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
  hatsAccount1ofN_?: InputMaybe<Celo_HatsAccount1ofN_filter>;
  hsgOwner_?: InputMaybe<Celo_HatsSignerGate_filter>;
  hsgSigner_?: InputMaybe<Celo_HatsSignerGate_filter>;
  jokeraceAdmin_?: InputMaybe<Celo_JokeRaceEligibility_filter>;
  allowListOwner_?: InputMaybe<Celo_AllowListEligibility_filter>;
  allowListArbitrator_?: InputMaybe<Celo_AllowListEligibility_filter>;
  electionsBallotBox_?: InputMaybe<Celo_HatsElectionEligibility_filter>;
  electionsAdmin_?: InputMaybe<Celo_HatsElectionEligibility_filter>;
  eligibilityTogglePassthrough_?: InputMaybe<Celo_PassthroughModule_filter>;
  stakingJudge_?: InputMaybe<Celo_StakingEligibility_filter>;
  stakingRecipient_?: InputMaybe<Celo_StakingEligibility_filter>;
  stakingHatAdmins_?: InputMaybe<Celo_StakingEligibility_filter>;
  seasonHatAdmins_?: InputMaybe<Celo_SeasonToggle_filter>;
  characterSheetsLevelHatAdmins_?: InputMaybe<Celo_CharacterSheetsLevelEligibility_filter>;
  agreementOwner_?: InputMaybe<Celo_AgreementEligibility_filter>;
  agreementArbitrator_?: InputMaybe<Celo_AgreementEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatAuthority_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatAuthority_filter>>>;
};

export type Celo_HatAuthority_orderBy =
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

export type Celo_HatsAccount1ofN = {
  id: Scalars['ID']['output'];
  accountOfHat: Celo_HatAuthority;
  operations: Array<Celo_HatsAccount1ofNOperation>;
};


export type Celo_HatsAccount1ofNoperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsAccount1ofNOperation_filter>;
};

export type Celo_HatsAccount1ofNOperation = {
  id: Scalars['ID']['output'];
  hatsAccount: Celo_HatsAccount1ofN;
  signer: Scalars['String']['output'];
  to: Scalars['String']['output'];
  value: Scalars['BigInt']['output'];
  callData: Scalars['Celo_Bytes']['output'];
  operationType: Celo_HatsAccountOperationType;
};

export type Celo_HatsAccount1ofNOperation_filter = {
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
  hatsAccount_?: InputMaybe<Celo_HatsAccount1ofN_filter>;
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
  callData?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  callData_not?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  callData_gt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  callData_lt?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  callData_gte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  callData_lte?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  callData_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  callData_not_in?: InputMaybe<Array<Scalars['Celo_Bytes']['input']>>;
  callData_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  callData_not_contains?: InputMaybe<Scalars['Celo_Bytes']['input']>;
  operationType?: InputMaybe<Celo_HatsAccountOperationType>;
  operationType_not?: InputMaybe<Celo_HatsAccountOperationType>;
  operationType_in?: InputMaybe<Array<Celo_HatsAccountOperationType>>;
  operationType_not_in?: InputMaybe<Array<Celo_HatsAccountOperationType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsAccount1ofNOperation_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsAccount1ofNOperation_filter>>>;
};

export type Celo_HatsAccount1ofNOperation_orderBy =
  | 'id'
  | 'hatsAccount'
  | 'hatsAccount__id'
  | 'signer'
  | 'to'
  | 'value'
  | 'callData'
  | 'operationType';

export type Celo_HatsAccount1ofN_filter = {
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
  accountOfHat_?: InputMaybe<Celo_HatAuthority_filter>;
  operations_?: InputMaybe<Celo_HatsAccount1ofNOperation_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsAccount1ofN_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsAccount1ofN_filter>>>;
};

export type Celo_HatsAccount1ofN_orderBy =
  | 'id'
  | 'accountOfHat'
  | 'accountOfHat__id'
  | 'accountOfHat__primaryHatsAccount1ofNAddress'
  | 'operations';

export type Celo_HatsAccountOperationType =
  | 'Call'
  | 'DelegateCall';

export type Celo_HatsElectionEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  ballotBoxHat: Celo_HatAuthority;
  adminHat: Array<Celo_HatAuthority>;
  terms: Array<Celo_ElectionTerm>;
  currentTerm?: Maybe<Celo_ElectionTerm>;
};


export type Celo_HatsElectionEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatAuthority_filter>;
};


export type Celo_HatsElectionEligibilitytermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_ElectionTerm_filter>;
};

export type Celo_HatsElectionEligibility_filter = {
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
  ballotBoxHat_?: InputMaybe<Celo_HatAuthority_filter>;
  adminHat?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_?: InputMaybe<Celo_HatAuthority_filter>;
  terms_?: InputMaybe<Celo_ElectionTerm_filter>;
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
  currentTerm_?: InputMaybe<Celo_ElectionTerm_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsElectionEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsElectionEligibility_filter>>>;
};

export type Celo_HatsElectionEligibility_orderBy =
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

export type Celo_HatsSignerGate = {
  id: Scalars['ID']['output'];
  type: Celo_HatsSignerGateType;
  ownerHat: Celo_HatAuthority;
  signerHats: Array<Celo_HatAuthority>;
  safe: Scalars['String']['output'];
  minThreshold: Scalars['BigInt']['output'];
  targetThreshold: Scalars['BigInt']['output'];
  maxSigners: Scalars['BigInt']['output'];
};


export type Celo_HatsSignerGatesignerHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatAuthority_filter>;
};

export type Celo_HatsSignerGateType =
  | 'Single'
  | 'Multi';

export type Celo_HatsSignerGate_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  type?: InputMaybe<Celo_HatsSignerGateType>;
  type_not?: InputMaybe<Celo_HatsSignerGateType>;
  type_in?: InputMaybe<Array<Celo_HatsSignerGateType>>;
  type_not_in?: InputMaybe<Array<Celo_HatsSignerGateType>>;
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
  ownerHat_?: InputMaybe<Celo_HatAuthority_filter>;
  signerHats?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_?: InputMaybe<Celo_HatAuthority_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_HatsSignerGate_filter>>>;
};

export type Celo_HatsSignerGate_orderBy =
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

export type Celo_JokeRaceEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  adminHat: Array<Celo_HatAuthority>;
  currentContest: Scalars['String']['output'];
  currentTermEnd: Scalars['BigInt']['output'];
  currentTopK: Scalars['BigInt']['output'];
};


export type Celo_JokeRaceEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatAuthority_filter>;
};

export type Celo_JokeRaceEligibility_filter = {
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
  adminHat_?: InputMaybe<Celo_HatAuthority_filter>;
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
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_JokeRaceEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_JokeRaceEligibility_filter>>>;
};

export type Celo_JokeRaceEligibility_orderBy =
  | 'id'
  | 'hatId'
  | 'adminHat'
  | 'currentContest'
  | 'currentTermEnd'
  | 'currentTopK';

/** Defines the order direction, either ascending or descending */
export type Celo_OrderDirection =
  | 'asc'
  | 'desc';

export type Celo_PassthroughModule = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  passthroughHat: Celo_HatAuthority;
};

export type Celo_PassthroughModule_filter = {
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
  passthroughHat_?: InputMaybe<Celo_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_PassthroughModule_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_PassthroughModule_filter>>>;
};

export type Celo_PassthroughModule_orderBy =
  | 'id'
  | 'hatId'
  | 'passthroughHat'
  | 'passthroughHat__id'
  | 'passthroughHat__primaryHatsAccount1ofNAddress';

export type Query = {
  Celo_hatAuthority?: Maybe<Celo_HatAuthority>;
  Celo_hatAuthorities: Array<Celo_HatAuthority>;
  Celo_hatsSignerGate?: Maybe<Celo_HatsSignerGate>;
  Celo_hatsSignerGates: Array<Celo_HatsSignerGate>;
  Celo_jokeRaceEligibility?: Maybe<Celo_JokeRaceEligibility>;
  Celo_jokeRaceEligibilities: Array<Celo_JokeRaceEligibility>;
  Celo_allowListEligibility?: Maybe<Celo_AllowListEligibility>;
  Celo_allowListEligibilities: Array<Celo_AllowListEligibility>;
  Celo_hatsElectionEligibility?: Maybe<Celo_HatsElectionEligibility>;
  Celo_hatsElectionEligibilities: Array<Celo_HatsElectionEligibility>;
  Celo_electionTerm?: Maybe<Celo_ElectionTerm>;
  Celo_electionTerms: Array<Celo_ElectionTerm>;
  Celo_passthroughModule?: Maybe<Celo_PassthroughModule>;
  Celo_passthroughModules: Array<Celo_PassthroughModule>;
  Celo_stakingEligibility?: Maybe<Celo_StakingEligibility>;
  Celo_stakingEligibilities: Array<Celo_StakingEligibility>;
  Celo_seasonToggle?: Maybe<Celo_SeasonToggle>;
  Celo_seasonToggles: Array<Celo_SeasonToggle>;
  Celo_characterSheetsLevelEligibility?: Maybe<Celo_CharacterSheetsLevelEligibility>;
  Celo_characterSheetsLevelEligibilities: Array<Celo_CharacterSheetsLevelEligibility>;
  Celo_agreementEligibility?: Maybe<Celo_AgreementEligibility>;
  Celo_agreementEligibilities: Array<Celo_AgreementEligibility>;
  Celo_agreement?: Maybe<Celo_Agreement>;
  Celo_agreements: Array<Celo_Agreement>;
  Celo_hatsAccount1OfN?: Maybe<Celo_HatsAccount1ofN>;
  Celo_hatsAccount1OfNs: Array<Celo_HatsAccount1ofN>;
  Celo_hatsAccount1OfNOperation?: Maybe<Celo_HatsAccount1ofNOperation>;
  Celo_hatsAccount1OfNOperations: Array<Celo_HatsAccount1ofNOperation>;
  /** Access to subgraph metadata */
  Celo__meta?: Maybe<Celo__Meta_>;
};


export type QueryCelo_hatAuthorityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatAuthoritiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatAuthority_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsSignerGatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGate_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_jokeRaceEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_jokeRaceEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_JokeRaceEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_allowListEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_allowListEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_AllowListEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsElectionEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsElectionEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsElectionEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_electionTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_electionTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_ElectionTerm_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_passthroughModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_passthroughModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_PassthroughModule_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_stakingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_stakingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_StakingEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_seasonToggleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_seasonTogglesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_SeasonToggle_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_characterSheetsLevelEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_characterSheetsLevelEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_CharacterSheetsLevelEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_agreementEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_agreementEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_AgreementEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_agreementArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_agreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Agreement_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Agreement_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsAccount1OfNArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsAccount1OfNsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsAccount1ofN_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsAccount1OfNOperationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo_hatsAccount1OfNOperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsAccount1ofNOperation_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type QueryCelo__metaArgs = {
  block?: InputMaybe<Celo_Block_height>;
};

export type Celo_SeasonToggle = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  hatAdmins: Array<Celo_HatAuthority>;
};


export type Celo_SeasonTogglehatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatAuthority_filter>;
};

export type Celo_SeasonToggle_filter = {
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
  hatAdmins_?: InputMaybe<Celo_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_SeasonToggle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_SeasonToggle_filter>>>;
};

export type Celo_SeasonToggle_orderBy =
  | 'id'
  | 'hatId'
  | 'hatAdmins';

export type Celo_StakingEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  judgeHat: Celo_HatAuthority;
  recipientHat: Celo_HatAuthority;
  hatAdmins: Array<Celo_HatAuthority>;
};


export type Celo_StakingEligibilityhatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatAuthority_filter>;
};

export type Celo_StakingEligibility_filter = {
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
  judgeHat_?: InputMaybe<Celo_HatAuthority_filter>;
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
  recipientHat_?: InputMaybe<Celo_HatAuthority_filter>;
  hatAdmins?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_?: InputMaybe<Celo_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Celo_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Celo_StakingEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Celo_StakingEligibility_filter>>>;
};

export type Celo_StakingEligibility_orderBy =
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
  Celo_hatAuthority?: Maybe<Celo_HatAuthority>;
  Celo_hatAuthorities: Array<Celo_HatAuthority>;
  Celo_hatsSignerGate?: Maybe<Celo_HatsSignerGate>;
  Celo_hatsSignerGates: Array<Celo_HatsSignerGate>;
  Celo_jokeRaceEligibility?: Maybe<Celo_JokeRaceEligibility>;
  Celo_jokeRaceEligibilities: Array<Celo_JokeRaceEligibility>;
  Celo_allowListEligibility?: Maybe<Celo_AllowListEligibility>;
  Celo_allowListEligibilities: Array<Celo_AllowListEligibility>;
  Celo_hatsElectionEligibility?: Maybe<Celo_HatsElectionEligibility>;
  Celo_hatsElectionEligibilities: Array<Celo_HatsElectionEligibility>;
  Celo_electionTerm?: Maybe<Celo_ElectionTerm>;
  Celo_electionTerms: Array<Celo_ElectionTerm>;
  Celo_passthroughModule?: Maybe<Celo_PassthroughModule>;
  Celo_passthroughModules: Array<Celo_PassthroughModule>;
  Celo_stakingEligibility?: Maybe<Celo_StakingEligibility>;
  Celo_stakingEligibilities: Array<Celo_StakingEligibility>;
  Celo_seasonToggle?: Maybe<Celo_SeasonToggle>;
  Celo_seasonToggles: Array<Celo_SeasonToggle>;
  Celo_characterSheetsLevelEligibility?: Maybe<Celo_CharacterSheetsLevelEligibility>;
  Celo_characterSheetsLevelEligibilities: Array<Celo_CharacterSheetsLevelEligibility>;
  Celo_agreementEligibility?: Maybe<Celo_AgreementEligibility>;
  Celo_agreementEligibilities: Array<Celo_AgreementEligibility>;
  Celo_agreement?: Maybe<Celo_Agreement>;
  Celo_agreements: Array<Celo_Agreement>;
  Celo_hatsAccount1OfN?: Maybe<Celo_HatsAccount1ofN>;
  Celo_hatsAccount1OfNs: Array<Celo_HatsAccount1ofN>;
  Celo_hatsAccount1OfNOperation?: Maybe<Celo_HatsAccount1ofNOperation>;
  Celo_hatsAccount1OfNOperations: Array<Celo_HatsAccount1ofNOperation>;
  /** Access to subgraph metadata */
  Celo__meta?: Maybe<Celo__Meta_>;
};


export type SubscriptionCelo_hatAuthorityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatAuthoritiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatAuthority_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsSignerGatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsSignerGate_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_jokeRaceEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_jokeRaceEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_JokeRaceEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_allowListEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_allowListEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_AllowListEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsElectionEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsElectionEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsElectionEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_electionTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_electionTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_ElectionTerm_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_passthroughModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_passthroughModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_PassthroughModule_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_stakingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_stakingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_StakingEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_seasonToggleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_seasonTogglesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_SeasonToggle_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_characterSheetsLevelEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_characterSheetsLevelEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_CharacterSheetsLevelEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_agreementEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_agreementEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_AgreementEligibility_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_agreementArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_agreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_Agreement_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_Agreement_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsAccount1OfNArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsAccount1OfNsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsAccount1ofN_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsAccount1OfNOperationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo_hatsAccount1OfNOperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Celo_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Celo_OrderDirection>;
  where?: InputMaybe<Celo_HatsAccount1ofNOperation_filter>;
  block?: InputMaybe<Celo_Block_height>;
  subgraphError?: Celo__SubgraphErrorPolicy_;
};


export type SubscriptionCelo__metaArgs = {
  block?: InputMaybe<Celo_Block_height>;
};

export type Celo__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Celo_Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Celo_Bytes']['output']>;
};

/** The type for the top-level _meta field */
export type Celo__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: Celo__Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type Celo__SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  Celo_hatAuthority: InContextSdkMethod<Query['Celo_hatAuthority'], QueryCelo_hatAuthorityArgs, MeshContext>,
  /** null **/
  Celo_hatAuthorities: InContextSdkMethod<Query['Celo_hatAuthorities'], QueryCelo_hatAuthoritiesArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGate: InContextSdkMethod<Query['Celo_hatsSignerGate'], QueryCelo_hatsSignerGateArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGates: InContextSdkMethod<Query['Celo_hatsSignerGates'], QueryCelo_hatsSignerGatesArgs, MeshContext>,
  /** null **/
  Celo_jokeRaceEligibility: InContextSdkMethod<Query['Celo_jokeRaceEligibility'], QueryCelo_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  Celo_jokeRaceEligibilities: InContextSdkMethod<Query['Celo_jokeRaceEligibilities'], QueryCelo_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_allowListEligibility: InContextSdkMethod<Query['Celo_allowListEligibility'], QueryCelo_allowListEligibilityArgs, MeshContext>,
  /** null **/
  Celo_allowListEligibilities: InContextSdkMethod<Query['Celo_allowListEligibilities'], QueryCelo_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_hatsElectionEligibility: InContextSdkMethod<Query['Celo_hatsElectionEligibility'], QueryCelo_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  Celo_hatsElectionEligibilities: InContextSdkMethod<Query['Celo_hatsElectionEligibilities'], QueryCelo_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_electionTerm: InContextSdkMethod<Query['Celo_electionTerm'], QueryCelo_electionTermArgs, MeshContext>,
  /** null **/
  Celo_electionTerms: InContextSdkMethod<Query['Celo_electionTerms'], QueryCelo_electionTermsArgs, MeshContext>,
  /** null **/
  Celo_passthroughModule: InContextSdkMethod<Query['Celo_passthroughModule'], QueryCelo_passthroughModuleArgs, MeshContext>,
  /** null **/
  Celo_passthroughModules: InContextSdkMethod<Query['Celo_passthroughModules'], QueryCelo_passthroughModulesArgs, MeshContext>,
  /** null **/
  Celo_stakingEligibility: InContextSdkMethod<Query['Celo_stakingEligibility'], QueryCelo_stakingEligibilityArgs, MeshContext>,
  /** null **/
  Celo_stakingEligibilities: InContextSdkMethod<Query['Celo_stakingEligibilities'], QueryCelo_stakingEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_seasonToggle: InContextSdkMethod<Query['Celo_seasonToggle'], QueryCelo_seasonToggleArgs, MeshContext>,
  /** null **/
  Celo_seasonToggles: InContextSdkMethod<Query['Celo_seasonToggles'], QueryCelo_seasonTogglesArgs, MeshContext>,
  /** null **/
  Celo_characterSheetsLevelEligibility: InContextSdkMethod<Query['Celo_characterSheetsLevelEligibility'], QueryCelo_characterSheetsLevelEligibilityArgs, MeshContext>,
  /** null **/
  Celo_characterSheetsLevelEligibilities: InContextSdkMethod<Query['Celo_characterSheetsLevelEligibilities'], QueryCelo_characterSheetsLevelEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_agreementEligibility: InContextSdkMethod<Query['Celo_agreementEligibility'], QueryCelo_agreementEligibilityArgs, MeshContext>,
  /** null **/
  Celo_agreementEligibilities: InContextSdkMethod<Query['Celo_agreementEligibilities'], QueryCelo_agreementEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_agreement: InContextSdkMethod<Query['Celo_agreement'], QueryCelo_agreementArgs, MeshContext>,
  /** null **/
  Celo_agreements: InContextSdkMethod<Query['Celo_agreements'], QueryCelo_agreementsArgs, MeshContext>,
  /** null **/
  Celo_hatsAccount1OfN: InContextSdkMethod<Query['Celo_hatsAccount1OfN'], QueryCelo_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  Celo_hatsAccount1OfNs: InContextSdkMethod<Query['Celo_hatsAccount1OfNs'], QueryCelo_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  Celo_hatsAccount1OfNOperation: InContextSdkMethod<Query['Celo_hatsAccount1OfNOperation'], QueryCelo_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  Celo_hatsAccount1OfNOperations: InContextSdkMethod<Query['Celo_hatsAccount1OfNOperations'], QueryCelo_hatsAccount1OfNOperationsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Celo__meta: InContextSdkMethod<Query['Celo__meta'], QueryCelo__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  Celo_hatAuthority: InContextSdkMethod<Subscription['Celo_hatAuthority'], SubscriptionCelo_hatAuthorityArgs, MeshContext>,
  /** null **/
  Celo_hatAuthorities: InContextSdkMethod<Subscription['Celo_hatAuthorities'], SubscriptionCelo_hatAuthoritiesArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGate: InContextSdkMethod<Subscription['Celo_hatsSignerGate'], SubscriptionCelo_hatsSignerGateArgs, MeshContext>,
  /** null **/
  Celo_hatsSignerGates: InContextSdkMethod<Subscription['Celo_hatsSignerGates'], SubscriptionCelo_hatsSignerGatesArgs, MeshContext>,
  /** null **/
  Celo_jokeRaceEligibility: InContextSdkMethod<Subscription['Celo_jokeRaceEligibility'], SubscriptionCelo_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  Celo_jokeRaceEligibilities: InContextSdkMethod<Subscription['Celo_jokeRaceEligibilities'], SubscriptionCelo_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_allowListEligibility: InContextSdkMethod<Subscription['Celo_allowListEligibility'], SubscriptionCelo_allowListEligibilityArgs, MeshContext>,
  /** null **/
  Celo_allowListEligibilities: InContextSdkMethod<Subscription['Celo_allowListEligibilities'], SubscriptionCelo_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_hatsElectionEligibility: InContextSdkMethod<Subscription['Celo_hatsElectionEligibility'], SubscriptionCelo_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  Celo_hatsElectionEligibilities: InContextSdkMethod<Subscription['Celo_hatsElectionEligibilities'], SubscriptionCelo_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_electionTerm: InContextSdkMethod<Subscription['Celo_electionTerm'], SubscriptionCelo_electionTermArgs, MeshContext>,
  /** null **/
  Celo_electionTerms: InContextSdkMethod<Subscription['Celo_electionTerms'], SubscriptionCelo_electionTermsArgs, MeshContext>,
  /** null **/
  Celo_passthroughModule: InContextSdkMethod<Subscription['Celo_passthroughModule'], SubscriptionCelo_passthroughModuleArgs, MeshContext>,
  /** null **/
  Celo_passthroughModules: InContextSdkMethod<Subscription['Celo_passthroughModules'], SubscriptionCelo_passthroughModulesArgs, MeshContext>,
  /** null **/
  Celo_stakingEligibility: InContextSdkMethod<Subscription['Celo_stakingEligibility'], SubscriptionCelo_stakingEligibilityArgs, MeshContext>,
  /** null **/
  Celo_stakingEligibilities: InContextSdkMethod<Subscription['Celo_stakingEligibilities'], SubscriptionCelo_stakingEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_seasonToggle: InContextSdkMethod<Subscription['Celo_seasonToggle'], SubscriptionCelo_seasonToggleArgs, MeshContext>,
  /** null **/
  Celo_seasonToggles: InContextSdkMethod<Subscription['Celo_seasonToggles'], SubscriptionCelo_seasonTogglesArgs, MeshContext>,
  /** null **/
  Celo_characterSheetsLevelEligibility: InContextSdkMethod<Subscription['Celo_characterSheetsLevelEligibility'], SubscriptionCelo_characterSheetsLevelEligibilityArgs, MeshContext>,
  /** null **/
  Celo_characterSheetsLevelEligibilities: InContextSdkMethod<Subscription['Celo_characterSheetsLevelEligibilities'], SubscriptionCelo_characterSheetsLevelEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_agreementEligibility: InContextSdkMethod<Subscription['Celo_agreementEligibility'], SubscriptionCelo_agreementEligibilityArgs, MeshContext>,
  /** null **/
  Celo_agreementEligibilities: InContextSdkMethod<Subscription['Celo_agreementEligibilities'], SubscriptionCelo_agreementEligibilitiesArgs, MeshContext>,
  /** null **/
  Celo_agreement: InContextSdkMethod<Subscription['Celo_agreement'], SubscriptionCelo_agreementArgs, MeshContext>,
  /** null **/
  Celo_agreements: InContextSdkMethod<Subscription['Celo_agreements'], SubscriptionCelo_agreementsArgs, MeshContext>,
  /** null **/
  Celo_hatsAccount1OfN: InContextSdkMethod<Subscription['Celo_hatsAccount1OfN'], SubscriptionCelo_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  Celo_hatsAccount1OfNs: InContextSdkMethod<Subscription['Celo_hatsAccount1OfNs'], SubscriptionCelo_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  Celo_hatsAccount1OfNOperation: InContextSdkMethod<Subscription['Celo_hatsAccount1OfNOperation'], SubscriptionCelo_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  Celo_hatsAccount1OfNOperations: InContextSdkMethod<Subscription['Celo_hatsAccount1OfNOperations'], SubscriptionCelo_hatsAccount1OfNOperationsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Celo__meta: InContextSdkMethod<Subscription['Celo__meta'], SubscriptionCelo__metaArgs, MeshContext>
  };

  export type Context = {
      ["Celo_Ancillary"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
