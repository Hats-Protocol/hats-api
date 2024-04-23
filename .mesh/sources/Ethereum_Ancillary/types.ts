// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace EthereumAncillaryTypes {
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
  Eth_BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Eth_Bytes: { input: any; output: any; }
  Eth_Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Eth_Aggregation_interval =
  | 'hour'
  | 'day';

export type Eth_Agreement = {
  id: Scalars['ID']['output'];
  agreementEligibility: Eth_AgreementEligibility;
  agreement: Scalars['String']['output'];
  signers: Array<Scalars['String']['output']>;
  graceEndTime: Scalars['BigInt']['output'];
};

export type Eth_AgreementEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  ownerHat: Eth_HatAuthority;
  arbitratorHat: Eth_HatAuthority;
  currentAgreement: Eth_Agreement;
  currentAgreementNumber: Scalars['BigInt']['output'];
  agreements: Array<Eth_Agreement>;
};


export type Eth_AgreementEligibilityagreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Agreement_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Agreement_filter>;
};

export type Eth_AgreementEligibility_filter = {
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
  ownerHat_?: InputMaybe<Eth_HatAuthority_filter>;
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
  arbitratorHat_?: InputMaybe<Eth_HatAuthority_filter>;
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
  currentAgreement_?: InputMaybe<Eth_Agreement_filter>;
  currentAgreementNumber?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAgreementNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentAgreementNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  agreements_?: InputMaybe<Eth_Agreement_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_AgreementEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_AgreementEligibility_filter>>>;
};

export type Eth_AgreementEligibility_orderBy =
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

export type Eth_Agreement_filter = {
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
  agreementEligibility_?: InputMaybe<Eth_AgreementEligibility_filter>;
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
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Agreement_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Agreement_filter>>>;
};

export type Eth_Agreement_orderBy =
  | 'id'
  | 'agreementEligibility'
  | 'agreementEligibility__id'
  | 'agreementEligibility__hatId'
  | 'agreementEligibility__currentAgreementNumber'
  | 'agreement'
  | 'signers'
  | 'graceEndTime';

export type Eth_AllowListEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  ownerHat: Eth_HatAuthority;
  arbitratorHat: Eth_HatAuthority;
};

export type Eth_AllowListEligibility_filter = {
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
  ownerHat_?: InputMaybe<Eth_HatAuthority_filter>;
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
  arbitratorHat_?: InputMaybe<Eth_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_AllowListEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_AllowListEligibility_filter>>>;
};

export type Eth_AllowListEligibility_orderBy =
  | 'id'
  | 'hatId'
  | 'ownerHat'
  | 'ownerHat__id'
  | 'ownerHat__primaryHatsAccount1ofNAddress'
  | 'arbitratorHat'
  | 'arbitratorHat__id'
  | 'arbitratorHat__primaryHatsAccount1ofNAddress';

export type Eth_BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Eth_Block_height = {
  hash?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Eth_CharacterSheetsLevelEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  hatAdmins: Array<Eth_HatAuthority>;
};


export type Eth_CharacterSheetsLevelEligibilityhatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatAuthority_filter>;
};

export type Eth_CharacterSheetsLevelEligibility_filter = {
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
  hatAdmins_?: InputMaybe<Eth_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_CharacterSheetsLevelEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_CharacterSheetsLevelEligibility_filter>>>;
};

export type Eth_CharacterSheetsLevelEligibility_orderBy =
  | 'id'
  | 'hatId'
  | 'hatAdmins';

export type Eth_ElectionTerm = {
  id: Scalars['ID']['output'];
  hatsElectionEligibility: Eth_HatsElectionEligibility;
  /** first term starts when 'elect' is called, next terms start when 'startNextTerm' is called */
  termStartedAt?: Maybe<Scalars['BigInt']['output']>;
  termEnd: Scalars['BigInt']['output'];
  /** election is completed when 'elect' is called */
  electionCompletedAt?: Maybe<Scalars['BigInt']['output']>;
  electedAccounts?: Maybe<Array<Scalars['String']['output']>>;
};

export type Eth_ElectionTerm_filter = {
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
  hatsElectionEligibility_?: InputMaybe<Eth_HatsElectionEligibility_filter>;
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
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_ElectionTerm_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_ElectionTerm_filter>>>;
};

export type Eth_ElectionTerm_orderBy =
  | 'id'
  | 'hatsElectionEligibility'
  | 'hatsElectionEligibility__id'
  | 'hatsElectionEligibility__hatId'
  | 'termStartedAt'
  | 'termEnd'
  | 'electionCompletedAt'
  | 'electedAccounts';

export type Eth_HatAuthority = {
  id: Scalars['ID']['output'];
  /** pre computed hats account address with a salt value of 1, null only if the hat was not created yet */
  primaryHatsAccount1ofNAddress?: Maybe<Scalars['String']['output']>;
  hatsAccount1ofN: Array<Eth_HatsAccount1ofN>;
  hsgOwner: Array<Eth_HatsSignerGate>;
  hsgSigner: Array<Eth_HatsSignerGate>;
  jokeraceAdmin: Array<Eth_JokeRaceEligibility>;
  allowListOwner: Array<Eth_AllowListEligibility>;
  allowListArbitrator: Array<Eth_AllowListEligibility>;
  electionsBallotBox: Array<Eth_HatsElectionEligibility>;
  electionsAdmin: Array<Eth_HatsElectionEligibility>;
  eligibilityTogglePassthrough: Array<Eth_PassthroughModule>;
  stakingJudge: Array<Eth_StakingEligibility>;
  stakingRecipient: Array<Eth_StakingEligibility>;
  stakingHatAdmins: Array<Eth_StakingEligibility>;
  seasonHatAdmins: Array<Eth_SeasonToggle>;
  characterSheetsLevelHatAdmins: Array<Eth_CharacterSheetsLevelEligibility>;
  agreementOwner: Array<Eth_AgreementEligibility>;
  agreementArbitrator: Array<Eth_AgreementEligibility>;
};


export type Eth_HatAuthorityhatsAccount1ofNArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsAccount1ofN_filter>;
};


export type Eth_HatAuthorityhsgOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGate_filter>;
};


export type Eth_HatAuthorityhsgSignerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGate_filter>;
};


export type Eth_HatAuthorityjokeraceAdminArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_JokeRaceEligibility_filter>;
};


export type Eth_HatAuthorityallowListOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_AllowListEligibility_filter>;
};


export type Eth_HatAuthorityallowListArbitratorArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_AllowListEligibility_filter>;
};


export type Eth_HatAuthorityelectionsBallotBoxArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsElectionEligibility_filter>;
};


export type Eth_HatAuthorityelectionsAdminArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsElectionEligibility_filter>;
};


export type Eth_HatAuthorityeligibilityTogglePassthroughArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_PassthroughModule_filter>;
};


export type Eth_HatAuthoritystakingJudgeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_StakingEligibility_filter>;
};


export type Eth_HatAuthoritystakingRecipientArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_StakingEligibility_filter>;
};


export type Eth_HatAuthoritystakingHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_StakingEligibility_filter>;
};


export type Eth_HatAuthorityseasonHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_SeasonToggle_filter>;
};


export type Eth_HatAuthoritycharacterSheetsLevelHatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_CharacterSheetsLevelEligibility_filter>;
};


export type Eth_HatAuthorityagreementOwnerArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_AgreementEligibility_filter>;
};


export type Eth_HatAuthorityagreementArbitratorArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_AgreementEligibility_filter>;
};

export type Eth_HatAuthority_filter = {
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
  hatsAccount1ofN_?: InputMaybe<Eth_HatsAccount1ofN_filter>;
  hsgOwner_?: InputMaybe<Eth_HatsSignerGate_filter>;
  hsgSigner_?: InputMaybe<Eth_HatsSignerGate_filter>;
  jokeraceAdmin_?: InputMaybe<Eth_JokeRaceEligibility_filter>;
  allowListOwner_?: InputMaybe<Eth_AllowListEligibility_filter>;
  allowListArbitrator_?: InputMaybe<Eth_AllowListEligibility_filter>;
  electionsBallotBox_?: InputMaybe<Eth_HatsElectionEligibility_filter>;
  electionsAdmin_?: InputMaybe<Eth_HatsElectionEligibility_filter>;
  eligibilityTogglePassthrough_?: InputMaybe<Eth_PassthroughModule_filter>;
  stakingJudge_?: InputMaybe<Eth_StakingEligibility_filter>;
  stakingRecipient_?: InputMaybe<Eth_StakingEligibility_filter>;
  stakingHatAdmins_?: InputMaybe<Eth_StakingEligibility_filter>;
  seasonHatAdmins_?: InputMaybe<Eth_SeasonToggle_filter>;
  characterSheetsLevelHatAdmins_?: InputMaybe<Eth_CharacterSheetsLevelEligibility_filter>;
  agreementOwner_?: InputMaybe<Eth_AgreementEligibility_filter>;
  agreementArbitrator_?: InputMaybe<Eth_AgreementEligibility_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatAuthority_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatAuthority_filter>>>;
};

export type Eth_HatAuthority_orderBy =
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

export type Eth_HatsAccount1ofN = {
  id: Scalars['ID']['output'];
  accountOfHat: Eth_HatAuthority;
  operations: Array<Eth_HatsAccount1ofNOperation>;
};


export type Eth_HatsAccount1ofNoperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsAccount1ofNOperation_filter>;
};

export type Eth_HatsAccount1ofNOperation = {
  id: Scalars['ID']['output'];
  hatsAccount: Eth_HatsAccount1ofN;
  signer: Scalars['String']['output'];
  to: Scalars['String']['output'];
  value: Scalars['BigInt']['output'];
  callData: Scalars['Eth_Bytes']['output'];
  operationType: Eth_HatsAccountOperationType;
};

export type Eth_HatsAccount1ofNOperation_filter = {
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
  hatsAccount_?: InputMaybe<Eth_HatsAccount1ofN_filter>;
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
  callData?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  callData_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  callData_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  callData_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  callData_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  callData_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  callData_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  callData_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  callData_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  callData_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  operationType?: InputMaybe<Eth_HatsAccountOperationType>;
  operationType_not?: InputMaybe<Eth_HatsAccountOperationType>;
  operationType_in?: InputMaybe<Array<Eth_HatsAccountOperationType>>;
  operationType_not_in?: InputMaybe<Array<Eth_HatsAccountOperationType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsAccount1ofNOperation_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsAccount1ofNOperation_filter>>>;
};

export type Eth_HatsAccount1ofNOperation_orderBy =
  | 'id'
  | 'hatsAccount'
  | 'hatsAccount__id'
  | 'signer'
  | 'to'
  | 'value'
  | 'callData'
  | 'operationType';

export type Eth_HatsAccount1ofN_filter = {
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
  accountOfHat_?: InputMaybe<Eth_HatAuthority_filter>;
  operations_?: InputMaybe<Eth_HatsAccount1ofNOperation_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsAccount1ofN_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsAccount1ofN_filter>>>;
};

export type Eth_HatsAccount1ofN_orderBy =
  | 'id'
  | 'accountOfHat'
  | 'accountOfHat__id'
  | 'accountOfHat__primaryHatsAccount1ofNAddress'
  | 'operations';

export type Eth_HatsAccountOperationType =
  | 'Call'
  | 'DelegateCall';

export type Eth_HatsElectionEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  ballotBoxHat: Eth_HatAuthority;
  adminHat: Array<Eth_HatAuthority>;
  terms: Array<Eth_ElectionTerm>;
  currentTerm?: Maybe<Eth_ElectionTerm>;
};


export type Eth_HatsElectionEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatAuthority_filter>;
};


export type Eth_HatsElectionEligibilitytermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_ElectionTerm_filter>;
};

export type Eth_HatsElectionEligibility_filter = {
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
  ballotBoxHat_?: InputMaybe<Eth_HatAuthority_filter>;
  adminHat?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  adminHat_?: InputMaybe<Eth_HatAuthority_filter>;
  terms_?: InputMaybe<Eth_ElectionTerm_filter>;
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
  currentTerm_?: InputMaybe<Eth_ElectionTerm_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsElectionEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsElectionEligibility_filter>>>;
};

export type Eth_HatsElectionEligibility_orderBy =
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

export type Eth_HatsSignerGate = {
  id: Scalars['ID']['output'];
  type: Eth_HatsSignerGateType;
  ownerHat: Eth_HatAuthority;
  signerHats: Array<Eth_HatAuthority>;
  safe: Scalars['String']['output'];
  minThreshold: Scalars['BigInt']['output'];
  targetThreshold: Scalars['BigInt']['output'];
  maxSigners: Scalars['BigInt']['output'];
};


export type Eth_HatsSignerGatesignerHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatAuthority_filter>;
};

export type Eth_HatsSignerGateType =
  | 'Single'
  | 'Multi';

export type Eth_HatsSignerGate_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  type?: InputMaybe<Eth_HatsSignerGateType>;
  type_not?: InputMaybe<Eth_HatsSignerGateType>;
  type_in?: InputMaybe<Array<Eth_HatsSignerGateType>>;
  type_not_in?: InputMaybe<Array<Eth_HatsSignerGateType>>;
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
  ownerHat_?: InputMaybe<Eth_HatAuthority_filter>;
  signerHats?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signerHats_?: InputMaybe<Eth_HatAuthority_filter>;
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
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsSignerGate_filter>>>;
};

export type Eth_HatsSignerGate_orderBy =
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

export type Eth_JokeRaceEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  adminHat: Array<Eth_HatAuthority>;
  currentContest: Scalars['String']['output'];
  currentTermEnd: Scalars['BigInt']['output'];
  currentTopK: Scalars['BigInt']['output'];
};


export type Eth_JokeRaceEligibilityadminHatArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatAuthority_filter>;
};

export type Eth_JokeRaceEligibility_filter = {
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
  adminHat_?: InputMaybe<Eth_HatAuthority_filter>;
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
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_JokeRaceEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_JokeRaceEligibility_filter>>>;
};

export type Eth_JokeRaceEligibility_orderBy =
  | 'id'
  | 'hatId'
  | 'adminHat'
  | 'currentContest'
  | 'currentTermEnd'
  | 'currentTopK';

/** Defines the order direction, either ascending or descending */
export type Eth_OrderDirection =
  | 'asc'
  | 'desc';

export type Eth_PassthroughModule = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  passthroughHat: Eth_HatAuthority;
};

export type Eth_PassthroughModule_filter = {
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
  passthroughHat_?: InputMaybe<Eth_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_PassthroughModule_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_PassthroughModule_filter>>>;
};

export type Eth_PassthroughModule_orderBy =
  | 'id'
  | 'hatId'
  | 'passthroughHat'
  | 'passthroughHat__id'
  | 'passthroughHat__primaryHatsAccount1ofNAddress';

export type Query = {
  Eth_hatAuthority?: Maybe<Eth_HatAuthority>;
  Eth_hatAuthorities: Array<Eth_HatAuthority>;
  Eth_hatsSignerGate?: Maybe<Eth_HatsSignerGate>;
  Eth_hatsSignerGates: Array<Eth_HatsSignerGate>;
  Eth_jokeRaceEligibility?: Maybe<Eth_JokeRaceEligibility>;
  Eth_jokeRaceEligibilities: Array<Eth_JokeRaceEligibility>;
  Eth_allowListEligibility?: Maybe<Eth_AllowListEligibility>;
  Eth_allowListEligibilities: Array<Eth_AllowListEligibility>;
  Eth_hatsElectionEligibility?: Maybe<Eth_HatsElectionEligibility>;
  Eth_hatsElectionEligibilities: Array<Eth_HatsElectionEligibility>;
  Eth_electionTerm?: Maybe<Eth_ElectionTerm>;
  Eth_electionTerms: Array<Eth_ElectionTerm>;
  Eth_passthroughModule?: Maybe<Eth_PassthroughModule>;
  Eth_passthroughModules: Array<Eth_PassthroughModule>;
  Eth_stakingEligibility?: Maybe<Eth_StakingEligibility>;
  Eth_stakingEligibilities: Array<Eth_StakingEligibility>;
  Eth_seasonToggle?: Maybe<Eth_SeasonToggle>;
  Eth_seasonToggles: Array<Eth_SeasonToggle>;
  Eth_characterSheetsLevelEligibility?: Maybe<Eth_CharacterSheetsLevelEligibility>;
  Eth_characterSheetsLevelEligibilities: Array<Eth_CharacterSheetsLevelEligibility>;
  Eth_agreementEligibility?: Maybe<Eth_AgreementEligibility>;
  Eth_agreementEligibilities: Array<Eth_AgreementEligibility>;
  Eth_agreement?: Maybe<Eth_Agreement>;
  Eth_agreements: Array<Eth_Agreement>;
  Eth_hatsAccount1OfN?: Maybe<Eth_HatsAccount1ofN>;
  Eth_hatsAccount1OfNs: Array<Eth_HatsAccount1ofN>;
  Eth_hatsAccount1OfNOperation?: Maybe<Eth_HatsAccount1ofNOperation>;
  Eth_hatsAccount1OfNOperations: Array<Eth_HatsAccount1ofNOperation>;
  /** Access to subgraph metadata */
  Eth__meta?: Maybe<Eth__Meta_>;
};


export type QueryEth_hatAuthorityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatAuthoritiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatAuthority_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsSignerGatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGate_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_jokeRaceEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_jokeRaceEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_JokeRaceEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_allowListEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_allowListEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_AllowListEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsElectionEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsElectionEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsElectionEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_electionTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_electionTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_ElectionTerm_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_passthroughModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_passthroughModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_PassthroughModule_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_stakingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_stakingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_StakingEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_seasonToggleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_seasonTogglesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_SeasonToggle_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_characterSheetsLevelEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_characterSheetsLevelEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_CharacterSheetsLevelEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_agreementEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_agreementEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_AgreementEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_agreementArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_agreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Agreement_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Agreement_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsAccount1OfNArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsAccount1OfNsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsAccount1ofN_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsAccount1OfNOperationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsAccount1OfNOperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsAccount1ofNOperation_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth__metaArgs = {
  block?: InputMaybe<Eth_Block_height>;
};

export type Eth_SeasonToggle = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  hatAdmins: Array<Eth_HatAuthority>;
};


export type Eth_SeasonTogglehatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatAuthority_filter>;
};

export type Eth_SeasonToggle_filter = {
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
  hatAdmins_?: InputMaybe<Eth_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_SeasonToggle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_SeasonToggle_filter>>>;
};

export type Eth_SeasonToggle_orderBy =
  | 'id'
  | 'hatId'
  | 'hatAdmins';

export type Eth_StakingEligibility = {
  id: Scalars['ID']['output'];
  hatId: Scalars['String']['output'];
  judgeHat: Eth_HatAuthority;
  recipientHat: Eth_HatAuthority;
  hatAdmins: Array<Eth_HatAuthority>;
};


export type Eth_StakingEligibilityhatAdminsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatAuthority_filter>;
};

export type Eth_StakingEligibility_filter = {
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
  judgeHat_?: InputMaybe<Eth_HatAuthority_filter>;
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
  recipientHat_?: InputMaybe<Eth_HatAuthority_filter>;
  hatAdmins?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  hatAdmins_?: InputMaybe<Eth_HatAuthority_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_StakingEligibility_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_StakingEligibility_filter>>>;
};

export type Eth_StakingEligibility_orderBy =
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
  Eth_hatAuthority?: Maybe<Eth_HatAuthority>;
  Eth_hatAuthorities: Array<Eth_HatAuthority>;
  Eth_hatsSignerGate?: Maybe<Eth_HatsSignerGate>;
  Eth_hatsSignerGates: Array<Eth_HatsSignerGate>;
  Eth_jokeRaceEligibility?: Maybe<Eth_JokeRaceEligibility>;
  Eth_jokeRaceEligibilities: Array<Eth_JokeRaceEligibility>;
  Eth_allowListEligibility?: Maybe<Eth_AllowListEligibility>;
  Eth_allowListEligibilities: Array<Eth_AllowListEligibility>;
  Eth_hatsElectionEligibility?: Maybe<Eth_HatsElectionEligibility>;
  Eth_hatsElectionEligibilities: Array<Eth_HatsElectionEligibility>;
  Eth_electionTerm?: Maybe<Eth_ElectionTerm>;
  Eth_electionTerms: Array<Eth_ElectionTerm>;
  Eth_passthroughModule?: Maybe<Eth_PassthroughModule>;
  Eth_passthroughModules: Array<Eth_PassthroughModule>;
  Eth_stakingEligibility?: Maybe<Eth_StakingEligibility>;
  Eth_stakingEligibilities: Array<Eth_StakingEligibility>;
  Eth_seasonToggle?: Maybe<Eth_SeasonToggle>;
  Eth_seasonToggles: Array<Eth_SeasonToggle>;
  Eth_characterSheetsLevelEligibility?: Maybe<Eth_CharacterSheetsLevelEligibility>;
  Eth_characterSheetsLevelEligibilities: Array<Eth_CharacterSheetsLevelEligibility>;
  Eth_agreementEligibility?: Maybe<Eth_AgreementEligibility>;
  Eth_agreementEligibilities: Array<Eth_AgreementEligibility>;
  Eth_agreement?: Maybe<Eth_Agreement>;
  Eth_agreements: Array<Eth_Agreement>;
  Eth_hatsAccount1OfN?: Maybe<Eth_HatsAccount1ofN>;
  Eth_hatsAccount1OfNs: Array<Eth_HatsAccount1ofN>;
  Eth_hatsAccount1OfNOperation?: Maybe<Eth_HatsAccount1ofNOperation>;
  Eth_hatsAccount1OfNOperations: Array<Eth_HatsAccount1ofNOperation>;
  /** Access to subgraph metadata */
  Eth__meta?: Maybe<Eth__Meta_>;
};


export type SubscriptionEth_hatAuthorityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatAuthoritiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatAuthority_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatAuthority_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsSignerGatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsSignerGate_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsSignerGate_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_jokeRaceEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_jokeRaceEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_JokeRaceEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_JokeRaceEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_allowListEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_allowListEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_AllowListEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_AllowListEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsElectionEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsElectionEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsElectionEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsElectionEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_electionTermArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_electionTermsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_ElectionTerm_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_ElectionTerm_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_passthroughModuleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_passthroughModulesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_PassthroughModule_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_PassthroughModule_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_stakingEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_stakingEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_StakingEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_StakingEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_seasonToggleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_seasonTogglesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_SeasonToggle_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_SeasonToggle_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_characterSheetsLevelEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_characterSheetsLevelEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_CharacterSheetsLevelEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_CharacterSheetsLevelEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_agreementEligibilityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_agreementEligibilitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_AgreementEligibility_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_AgreementEligibility_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_agreementArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_agreementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Agreement_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Agreement_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsAccount1OfNArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsAccount1OfNsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsAccount1ofN_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsAccount1ofN_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsAccount1OfNOperationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsAccount1OfNOperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsAccount1ofNOperation_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsAccount1ofNOperation_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth__metaArgs = {
  block?: InputMaybe<Eth_Block_height>;
};

export type Eth__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Eth_Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Eth_Bytes']['output']>;
};

/** The type for the top-level _meta field */
export type Eth__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: Eth__Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type Eth__SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  Eth_hatAuthority: InContextSdkMethod<Query['Eth_hatAuthority'], QueryEth_hatAuthorityArgs, MeshContext>,
  /** null **/
  Eth_hatAuthorities: InContextSdkMethod<Query['Eth_hatAuthorities'], QueryEth_hatAuthoritiesArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGate: InContextSdkMethod<Query['Eth_hatsSignerGate'], QueryEth_hatsSignerGateArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGates: InContextSdkMethod<Query['Eth_hatsSignerGates'], QueryEth_hatsSignerGatesArgs, MeshContext>,
  /** null **/
  Eth_jokeRaceEligibility: InContextSdkMethod<Query['Eth_jokeRaceEligibility'], QueryEth_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  Eth_jokeRaceEligibilities: InContextSdkMethod<Query['Eth_jokeRaceEligibilities'], QueryEth_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_allowListEligibility: InContextSdkMethod<Query['Eth_allowListEligibility'], QueryEth_allowListEligibilityArgs, MeshContext>,
  /** null **/
  Eth_allowListEligibilities: InContextSdkMethod<Query['Eth_allowListEligibilities'], QueryEth_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_hatsElectionEligibility: InContextSdkMethod<Query['Eth_hatsElectionEligibility'], QueryEth_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  Eth_hatsElectionEligibilities: InContextSdkMethod<Query['Eth_hatsElectionEligibilities'], QueryEth_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_electionTerm: InContextSdkMethod<Query['Eth_electionTerm'], QueryEth_electionTermArgs, MeshContext>,
  /** null **/
  Eth_electionTerms: InContextSdkMethod<Query['Eth_electionTerms'], QueryEth_electionTermsArgs, MeshContext>,
  /** null **/
  Eth_passthroughModule: InContextSdkMethod<Query['Eth_passthroughModule'], QueryEth_passthroughModuleArgs, MeshContext>,
  /** null **/
  Eth_passthroughModules: InContextSdkMethod<Query['Eth_passthroughModules'], QueryEth_passthroughModulesArgs, MeshContext>,
  /** null **/
  Eth_stakingEligibility: InContextSdkMethod<Query['Eth_stakingEligibility'], QueryEth_stakingEligibilityArgs, MeshContext>,
  /** null **/
  Eth_stakingEligibilities: InContextSdkMethod<Query['Eth_stakingEligibilities'], QueryEth_stakingEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_seasonToggle: InContextSdkMethod<Query['Eth_seasonToggle'], QueryEth_seasonToggleArgs, MeshContext>,
  /** null **/
  Eth_seasonToggles: InContextSdkMethod<Query['Eth_seasonToggles'], QueryEth_seasonTogglesArgs, MeshContext>,
  /** null **/
  Eth_characterSheetsLevelEligibility: InContextSdkMethod<Query['Eth_characterSheetsLevelEligibility'], QueryEth_characterSheetsLevelEligibilityArgs, MeshContext>,
  /** null **/
  Eth_characterSheetsLevelEligibilities: InContextSdkMethod<Query['Eth_characterSheetsLevelEligibilities'], QueryEth_characterSheetsLevelEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_agreementEligibility: InContextSdkMethod<Query['Eth_agreementEligibility'], QueryEth_agreementEligibilityArgs, MeshContext>,
  /** null **/
  Eth_agreementEligibilities: InContextSdkMethod<Query['Eth_agreementEligibilities'], QueryEth_agreementEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_agreement: InContextSdkMethod<Query['Eth_agreement'], QueryEth_agreementArgs, MeshContext>,
  /** null **/
  Eth_agreements: InContextSdkMethod<Query['Eth_agreements'], QueryEth_agreementsArgs, MeshContext>,
  /** null **/
  Eth_hatsAccount1OfN: InContextSdkMethod<Query['Eth_hatsAccount1OfN'], QueryEth_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  Eth_hatsAccount1OfNs: InContextSdkMethod<Query['Eth_hatsAccount1OfNs'], QueryEth_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  Eth_hatsAccount1OfNOperation: InContextSdkMethod<Query['Eth_hatsAccount1OfNOperation'], QueryEth_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  Eth_hatsAccount1OfNOperations: InContextSdkMethod<Query['Eth_hatsAccount1OfNOperations'], QueryEth_hatsAccount1OfNOperationsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Eth__meta: InContextSdkMethod<Query['Eth__meta'], QueryEth__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  Eth_hatAuthority: InContextSdkMethod<Subscription['Eth_hatAuthority'], SubscriptionEth_hatAuthorityArgs, MeshContext>,
  /** null **/
  Eth_hatAuthorities: InContextSdkMethod<Subscription['Eth_hatAuthorities'], SubscriptionEth_hatAuthoritiesArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGate: InContextSdkMethod<Subscription['Eth_hatsSignerGate'], SubscriptionEth_hatsSignerGateArgs, MeshContext>,
  /** null **/
  Eth_hatsSignerGates: InContextSdkMethod<Subscription['Eth_hatsSignerGates'], SubscriptionEth_hatsSignerGatesArgs, MeshContext>,
  /** null **/
  Eth_jokeRaceEligibility: InContextSdkMethod<Subscription['Eth_jokeRaceEligibility'], SubscriptionEth_jokeRaceEligibilityArgs, MeshContext>,
  /** null **/
  Eth_jokeRaceEligibilities: InContextSdkMethod<Subscription['Eth_jokeRaceEligibilities'], SubscriptionEth_jokeRaceEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_allowListEligibility: InContextSdkMethod<Subscription['Eth_allowListEligibility'], SubscriptionEth_allowListEligibilityArgs, MeshContext>,
  /** null **/
  Eth_allowListEligibilities: InContextSdkMethod<Subscription['Eth_allowListEligibilities'], SubscriptionEth_allowListEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_hatsElectionEligibility: InContextSdkMethod<Subscription['Eth_hatsElectionEligibility'], SubscriptionEth_hatsElectionEligibilityArgs, MeshContext>,
  /** null **/
  Eth_hatsElectionEligibilities: InContextSdkMethod<Subscription['Eth_hatsElectionEligibilities'], SubscriptionEth_hatsElectionEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_electionTerm: InContextSdkMethod<Subscription['Eth_electionTerm'], SubscriptionEth_electionTermArgs, MeshContext>,
  /** null **/
  Eth_electionTerms: InContextSdkMethod<Subscription['Eth_electionTerms'], SubscriptionEth_electionTermsArgs, MeshContext>,
  /** null **/
  Eth_passthroughModule: InContextSdkMethod<Subscription['Eth_passthroughModule'], SubscriptionEth_passthroughModuleArgs, MeshContext>,
  /** null **/
  Eth_passthroughModules: InContextSdkMethod<Subscription['Eth_passthroughModules'], SubscriptionEth_passthroughModulesArgs, MeshContext>,
  /** null **/
  Eth_stakingEligibility: InContextSdkMethod<Subscription['Eth_stakingEligibility'], SubscriptionEth_stakingEligibilityArgs, MeshContext>,
  /** null **/
  Eth_stakingEligibilities: InContextSdkMethod<Subscription['Eth_stakingEligibilities'], SubscriptionEth_stakingEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_seasonToggle: InContextSdkMethod<Subscription['Eth_seasonToggle'], SubscriptionEth_seasonToggleArgs, MeshContext>,
  /** null **/
  Eth_seasonToggles: InContextSdkMethod<Subscription['Eth_seasonToggles'], SubscriptionEth_seasonTogglesArgs, MeshContext>,
  /** null **/
  Eth_characterSheetsLevelEligibility: InContextSdkMethod<Subscription['Eth_characterSheetsLevelEligibility'], SubscriptionEth_characterSheetsLevelEligibilityArgs, MeshContext>,
  /** null **/
  Eth_characterSheetsLevelEligibilities: InContextSdkMethod<Subscription['Eth_characterSheetsLevelEligibilities'], SubscriptionEth_characterSheetsLevelEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_agreementEligibility: InContextSdkMethod<Subscription['Eth_agreementEligibility'], SubscriptionEth_agreementEligibilityArgs, MeshContext>,
  /** null **/
  Eth_agreementEligibilities: InContextSdkMethod<Subscription['Eth_agreementEligibilities'], SubscriptionEth_agreementEligibilitiesArgs, MeshContext>,
  /** null **/
  Eth_agreement: InContextSdkMethod<Subscription['Eth_agreement'], SubscriptionEth_agreementArgs, MeshContext>,
  /** null **/
  Eth_agreements: InContextSdkMethod<Subscription['Eth_agreements'], SubscriptionEth_agreementsArgs, MeshContext>,
  /** null **/
  Eth_hatsAccount1OfN: InContextSdkMethod<Subscription['Eth_hatsAccount1OfN'], SubscriptionEth_hatsAccount1OfNArgs, MeshContext>,
  /** null **/
  Eth_hatsAccount1OfNs: InContextSdkMethod<Subscription['Eth_hatsAccount1OfNs'], SubscriptionEth_hatsAccount1OfNsArgs, MeshContext>,
  /** null **/
  Eth_hatsAccount1OfNOperation: InContextSdkMethod<Subscription['Eth_hatsAccount1OfNOperation'], SubscriptionEth_hatsAccount1OfNOperationArgs, MeshContext>,
  /** null **/
  Eth_hatsAccount1OfNOperations: InContextSdkMethod<Subscription['Eth_hatsAccount1OfNOperations'], SubscriptionEth_hatsAccount1OfNOperationsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Eth__meta: InContextSdkMethod<Subscription['Eth__meta'], SubscriptionEth__metaArgs, MeshContext>
  };

  export type Context = {
      ["Ethereum_Ancillary"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
