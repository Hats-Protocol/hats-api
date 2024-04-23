// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { findAndParseConfig } from '@graphql-mesh/cli';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { EthereumAncillaryTypes } from './sources/Ethereum_Ancillary/types';
import type { EthereumMainTypes } from './sources/Ethereum_Main/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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
  Eth_hat?: Maybe<Eth_Hat>;
  Eth_hats: Array<Eth_Hat>;
  Eth_wearer?: Maybe<Eth_Wearer>;
  Eth_wearers: Array<Eth_Wearer>;
  Eth_tree?: Maybe<Eth_Tree>;
  Eth_trees: Array<Eth_Tree>;
  Eth_hatCreatedEvent?: Maybe<Eth_HatCreatedEvent>;
  Eth_hatCreatedEvents: Array<Eth_HatCreatedEvent>;
  Eth_hatMintedEvent?: Maybe<Eth_HatMintedEvent>;
  Eth_hatMintedEvents: Array<Eth_HatMintedEvent>;
  Eth_hatBurnedEvent?: Maybe<Eth_HatBurnedEvent>;
  Eth_hatBurnedEvents: Array<Eth_HatBurnedEvent>;
  Eth_hatStatusChangedEvent?: Maybe<Eth_HatStatusChangedEvent>;
  Eth_hatStatusChangedEvents: Array<Eth_HatStatusChangedEvent>;
  Eth_hatDetailsChangedEvent?: Maybe<Eth_HatDetailsChangedEvent>;
  Eth_hatDetailsChangedEvents: Array<Eth_HatDetailsChangedEvent>;
  Eth_hatEligibilityChangedEvent?: Maybe<Eth_HatEligibilityChangedEvent>;
  Eth_hatEligibilityChangedEvents: Array<Eth_HatEligibilityChangedEvent>;
  Eth_hatToggleChangedEvent?: Maybe<Eth_HatToggleChangedEvent>;
  Eth_hatToggleChangedEvents: Array<Eth_HatToggleChangedEvent>;
  Eth_hatMutabilityChangedEvent?: Maybe<Eth_HatMutabilityChangedEvent>;
  Eth_hatMutabilityChangedEvents: Array<Eth_HatMutabilityChangedEvent>;
  Eth_hatMaxSupplyChangedEvent?: Maybe<Eth_HatMaxSupplyChangedEvent>;
  Eth_hatMaxSupplyChangedEvents: Array<Eth_HatMaxSupplyChangedEvent>;
  Eth_hatImageURIChangedEvent?: Maybe<Eth_HatImageURIChangedEvent>;
  Eth_hatImageURIChangedEvents: Array<Eth_HatImageURIChangedEvent>;
  Eth_topHatLinkRequestedEvent?: Maybe<Eth_TopHatLinkRequestedEvent>;
  Eth_topHatLinkRequestedEvents: Array<Eth_TopHatLinkRequestedEvent>;
  Eth_topHatLinkedEvent?: Maybe<Eth_TopHatLinkedEvent>;
  Eth_topHatLinkedEvents: Array<Eth_TopHatLinkedEvent>;
  Eth_wearerStandingChangedEvent?: Maybe<Eth_WearerStandingChangedEvent>;
  Eth_wearerStandingChangedEvents: Array<Eth_WearerStandingChangedEvent>;
  Eth_claimsHatter?: Maybe<Eth_ClaimsHatter>;
  Eth_claimsHatters: Array<Eth_ClaimsHatter>;
  Eth_hatsEvent?: Maybe<Eth_HatsEvent>;
  Eth_hatsEvents: Array<Eth_HatsEvent>;
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


export type QueryEth_hatArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Hat_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Hat_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_wearerArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_wearersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Wearer_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Wearer_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_treeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_treesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Tree_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Tree_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatCreatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatCreatedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatMintedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatMintedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatMintedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatMintedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatBurnedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatBurnedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatBurnedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatBurnedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatStatusChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatStatusChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatStatusChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatStatusChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatDetailsChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatDetailsChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatDetailsChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatDetailsChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatEligibilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatEligibilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatEligibilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatEligibilityChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatToggleChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatToggleChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatToggleChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatToggleChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatMutabilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatMutabilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatMutabilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatMutabilityChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatMaxSupplyChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatMaxSupplyChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatMaxSupplyChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatMaxSupplyChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatImageURIChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatImageURIChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatImageURIChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatImageURIChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_topHatLinkRequestedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_topHatLinkRequestedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_TopHatLinkRequestedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_TopHatLinkRequestedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_topHatLinkedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_topHatLinkedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_TopHatLinkedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_TopHatLinkedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_wearerStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_wearerStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_WearerStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_WearerStandingChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_claimsHatterArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_claimsHattersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_ClaimsHatter_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type QueryEth_hatsEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};

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
  Eth_hat?: Maybe<Eth_Hat>;
  Eth_hats: Array<Eth_Hat>;
  Eth_wearer?: Maybe<Eth_Wearer>;
  Eth_wearers: Array<Eth_Wearer>;
  Eth_tree?: Maybe<Eth_Tree>;
  Eth_trees: Array<Eth_Tree>;
  Eth_hatCreatedEvent?: Maybe<Eth_HatCreatedEvent>;
  Eth_hatCreatedEvents: Array<Eth_HatCreatedEvent>;
  Eth_hatMintedEvent?: Maybe<Eth_HatMintedEvent>;
  Eth_hatMintedEvents: Array<Eth_HatMintedEvent>;
  Eth_hatBurnedEvent?: Maybe<Eth_HatBurnedEvent>;
  Eth_hatBurnedEvents: Array<Eth_HatBurnedEvent>;
  Eth_hatStatusChangedEvent?: Maybe<Eth_HatStatusChangedEvent>;
  Eth_hatStatusChangedEvents: Array<Eth_HatStatusChangedEvent>;
  Eth_hatDetailsChangedEvent?: Maybe<Eth_HatDetailsChangedEvent>;
  Eth_hatDetailsChangedEvents: Array<Eth_HatDetailsChangedEvent>;
  Eth_hatEligibilityChangedEvent?: Maybe<Eth_HatEligibilityChangedEvent>;
  Eth_hatEligibilityChangedEvents: Array<Eth_HatEligibilityChangedEvent>;
  Eth_hatToggleChangedEvent?: Maybe<Eth_HatToggleChangedEvent>;
  Eth_hatToggleChangedEvents: Array<Eth_HatToggleChangedEvent>;
  Eth_hatMutabilityChangedEvent?: Maybe<Eth_HatMutabilityChangedEvent>;
  Eth_hatMutabilityChangedEvents: Array<Eth_HatMutabilityChangedEvent>;
  Eth_hatMaxSupplyChangedEvent?: Maybe<Eth_HatMaxSupplyChangedEvent>;
  Eth_hatMaxSupplyChangedEvents: Array<Eth_HatMaxSupplyChangedEvent>;
  Eth_hatImageURIChangedEvent?: Maybe<Eth_HatImageURIChangedEvent>;
  Eth_hatImageURIChangedEvents: Array<Eth_HatImageURIChangedEvent>;
  Eth_topHatLinkRequestedEvent?: Maybe<Eth_TopHatLinkRequestedEvent>;
  Eth_topHatLinkRequestedEvents: Array<Eth_TopHatLinkRequestedEvent>;
  Eth_topHatLinkedEvent?: Maybe<Eth_TopHatLinkedEvent>;
  Eth_topHatLinkedEvents: Array<Eth_TopHatLinkedEvent>;
  Eth_wearerStandingChangedEvent?: Maybe<Eth_WearerStandingChangedEvent>;
  Eth_wearerStandingChangedEvents: Array<Eth_WearerStandingChangedEvent>;
  Eth_claimsHatter?: Maybe<Eth_ClaimsHatter>;
  Eth_claimsHatters: Array<Eth_ClaimsHatter>;
  Eth_hatsEvent?: Maybe<Eth_HatsEvent>;
  Eth_hatsEvents: Array<Eth_HatsEvent>;
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


export type SubscriptionEth_hatArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Hat_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Hat_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_wearerArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_wearersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Wearer_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Wearer_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_treeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_treesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Tree_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Tree_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatCreatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatCreatedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatCreatedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatMintedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatMintedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatMintedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatMintedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatBurnedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatBurnedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatBurnedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatBurnedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatStatusChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatStatusChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatStatusChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatStatusChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatDetailsChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatDetailsChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatDetailsChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatDetailsChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatEligibilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatEligibilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatEligibilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatEligibilityChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatToggleChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatToggleChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatToggleChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatToggleChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatMutabilityChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatMutabilityChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatMutabilityChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatMutabilityChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatMaxSupplyChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatMaxSupplyChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatMaxSupplyChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatMaxSupplyChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatImageURIChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatImageURIChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatImageURIChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatImageURIChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_topHatLinkRequestedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_topHatLinkRequestedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_TopHatLinkRequestedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_TopHatLinkRequestedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_topHatLinkedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_topHatLinkedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_TopHatLinkedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_TopHatLinkedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_wearerStandingChangedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_wearerStandingChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_WearerStandingChangedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_WearerStandingChangedEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_claimsHatterArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_claimsHattersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_ClaimsHatter_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
};


export type SubscriptionEth_hatsEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsEvent_filter>;
  block?: InputMaybe<Eth_Block_height>;
  subgraphError?: Eth__SubgraphErrorPolicy_;
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

export type Eth_ClaimsHatter = {
  id: Scalars['ID']['output'];
  claimableHats: Array<Eth_Hat>;
  claimableForHats: Array<Eth_Hat>;
};


export type Eth_ClaimsHatterclaimableHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Hat_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Hat_filter>;
};


export type Eth_ClaimsHatterclaimableForHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Hat_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Hat_filter>;
};

export type Eth_ClaimsHatter_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  claimableHats?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableHats_?: InputMaybe<Eth_Hat_filter>;
  claimableForHats?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_not?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  claimableForHats_?: InputMaybe<Eth_Hat_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_ClaimsHatter_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_ClaimsHatter_filter>>>;
};

export type Eth_ClaimsHatter_orderBy =
  | 'id'
  | 'claimableHats'
  | 'claimableForHats';

export type Eth_Hat = {
  id: Scalars['ID']['output'];
  prettyId: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  details: Scalars['String']['output'];
  maxSupply: Scalars['BigInt']['output'];
  eligibility: Scalars['String']['output'];
  toggle: Scalars['String']['output'];
  mutable: Scalars['Boolean']['output'];
  imageUri: Scalars['String']['output'];
  levelAtLocalTree: Scalars['Int']['output'];
  currentSupply: Scalars['BigInt']['output'];
  tree: Eth_Tree;
  wearers: Array<Eth_Wearer>;
  admin: Eth_Hat;
  badStandings: Array<Eth_Wearer>;
  claimableBy: Array<Eth_ClaimsHatter>;
  claimableForBy: Array<Eth_ClaimsHatter>;
  linkRequestFromTree: Array<Eth_Tree>;
  subHats: Array<Eth_Hat>;
  linkedTrees: Array<Eth_Tree>;
  events: Array<Eth_HatsEvent>;
  detailsMetadata?: Maybe<Scalars['String']['output']>;
  authorities: Eth_HatAuthority;
};


export type Eth_HatwearersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Wearer_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Wearer_filter>;
};


export type Eth_HatbadStandingsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Wearer_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Wearer_filter>;
};


export type Eth_HatclaimableByArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_ClaimsHatter_filter>;
};


export type Eth_HatclaimableForByArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_ClaimsHatter_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_ClaimsHatter_filter>;
};


export type Eth_HatlinkRequestFromTreeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Tree_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Tree_filter>;
};


export type Eth_HatsubHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Hat_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Hat_filter>;
};


export type Eth_HatlinkedTreesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Tree_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Tree_filter>;
};


export type Eth_HateventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsEvent_filter>;
};

export type Eth_HatBurnedEvent = Eth_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Eth_Tree;
  hat: Eth_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  wearer: Eth_Wearer;
  operator: Scalars['String']['output'];
};

export type Eth_HatBurnedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Eth_Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Eth_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
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
  wearer_?: InputMaybe<Eth_Wearer_filter>;
  operator?: InputMaybe<Scalars['String']['input']>;
  operator_not?: InputMaybe<Scalars['String']['input']>;
  operator_gt?: InputMaybe<Scalars['String']['input']>;
  operator_lt?: InputMaybe<Scalars['String']['input']>;
  operator_gte?: InputMaybe<Scalars['String']['input']>;
  operator_lte?: InputMaybe<Scalars['String']['input']>;
  operator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  operator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  operator_contains?: InputMaybe<Scalars['String']['input']>;
  operator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  operator_not_contains?: InputMaybe<Scalars['String']['input']>;
  operator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  operator_starts_with?: InputMaybe<Scalars['String']['input']>;
  operator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  operator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operator_ends_with?: InputMaybe<Scalars['String']['input']>;
  operator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  operator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatBurnedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatBurnedEvent_filter>>>;
};

export type Eth_HatBurnedEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'wearer'
  | 'wearer__id'
  | 'operator';

export type Eth_HatCreatedEvent = Eth_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Eth_Tree;
  hat: Eth_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  hatDetails: Scalars['String']['output'];
  hatMaxSupply: Scalars['BigInt']['output'];
  hatEligibility: Scalars['String']['output'];
  hatToggle: Scalars['String']['output'];
  hatMutable: Scalars['Boolean']['output'];
  hatImageUri: Scalars['String']['output'];
};

export type Eth_HatCreatedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Eth_Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Eth_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  hatDetails?: InputMaybe<Scalars['String']['input']>;
  hatDetails_not?: InputMaybe<Scalars['String']['input']>;
  hatDetails_gt?: InputMaybe<Scalars['String']['input']>;
  hatDetails_lt?: InputMaybe<Scalars['String']['input']>;
  hatDetails_gte?: InputMaybe<Scalars['String']['input']>;
  hatDetails_lte?: InputMaybe<Scalars['String']['input']>;
  hatDetails_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatDetails_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatDetails_contains?: InputMaybe<Scalars['String']['input']>;
  hatDetails_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatDetails_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatDetails_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatDetails_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatDetails_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatDetails_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatDetails_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatDetails_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatDetails_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatDetails_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatDetails_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatMaxSupply?: InputMaybe<Scalars['BigInt']['input']>;
  hatMaxSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  hatMaxSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  hatMaxSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  hatMaxSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  hatMaxSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  hatMaxSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hatMaxSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hatEligibility?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_not?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_gt?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_lt?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_gte?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_lte?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatEligibility_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatEligibility_contains?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatEligibility_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatToggle?: InputMaybe<Scalars['String']['input']>;
  hatToggle_not?: InputMaybe<Scalars['String']['input']>;
  hatToggle_gt?: InputMaybe<Scalars['String']['input']>;
  hatToggle_lt?: InputMaybe<Scalars['String']['input']>;
  hatToggle_gte?: InputMaybe<Scalars['String']['input']>;
  hatToggle_lte?: InputMaybe<Scalars['String']['input']>;
  hatToggle_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatToggle_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatToggle_contains?: InputMaybe<Scalars['String']['input']>;
  hatToggle_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatToggle_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatToggle_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatToggle_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatToggle_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatToggle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatToggle_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatToggle_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatToggle_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatToggle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatToggle_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatMutable?: InputMaybe<Scalars['Boolean']['input']>;
  hatMutable_not?: InputMaybe<Scalars['Boolean']['input']>;
  hatMutable_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  hatMutable_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  hatImageUri?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_not?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_gt?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_lt?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_gte?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_lte?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatImageUri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatImageUri_contains?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatImageUri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatCreatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatCreatedEvent_filter>>>;
};

export type Eth_HatCreatedEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'hatDetails'
  | 'hatMaxSupply'
  | 'hatEligibility'
  | 'hatToggle'
  | 'hatMutable'
  | 'hatImageUri';

export type Eth_HatDetailsChangedEvent = Eth_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Eth_Tree;
  hat: Eth_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  hatNewDetails: Scalars['String']['output'];
};

export type Eth_HatDetailsChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Eth_Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Eth_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  hatNewDetails?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_not?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_gt?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_lt?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_gte?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_lte?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatNewDetails_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatNewDetails_contains?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatNewDetails_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatDetailsChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatDetailsChangedEvent_filter>>>;
};

export type Eth_HatDetailsChangedEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'hatNewDetails';

export type Eth_HatEligibilityChangedEvent = Eth_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Eth_Tree;
  hat: Eth_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  hatNewEligibility: Scalars['String']['output'];
};

export type Eth_HatEligibilityChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Eth_Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Eth_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  hatNewEligibility?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_not?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_gt?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_lt?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_gte?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_lte?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatNewEligibility_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatNewEligibility_contains?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatNewEligibility_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatEligibilityChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatEligibilityChangedEvent_filter>>>;
};

export type Eth_HatEligibilityChangedEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'hatNewEligibility';

export type Eth_HatImageURIChangedEvent = Eth_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Eth_Tree;
  hat: Eth_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  hatNewImageURI: Scalars['String']['output'];
};

export type Eth_HatImageURIChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Eth_Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Eth_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  hatNewImageURI?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_not?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_gt?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_lt?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_gte?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_lte?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatNewImageURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatNewImageURI_contains?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatNewImageURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatImageURIChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatImageURIChangedEvent_filter>>>;
};

export type Eth_HatImageURIChangedEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'hatNewImageURI';

export type Eth_HatMaxSupplyChangedEvent = Eth_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Eth_Tree;
  hat: Eth_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  hatNewMaxSupply: Scalars['BigInt']['output'];
};

export type Eth_HatMaxSupplyChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Eth_Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Eth_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  hatNewMaxSupply?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  hatNewMaxSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hatNewMaxSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatMaxSupplyChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatMaxSupplyChangedEvent_filter>>>;
};

export type Eth_HatMaxSupplyChangedEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'hatNewMaxSupply';

export type Eth_HatMintedEvent = Eth_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Eth_Tree;
  hat: Eth_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  wearer: Eth_Wearer;
  operator: Scalars['String']['output'];
};

export type Eth_HatMintedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Eth_Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Eth_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
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
  wearer_?: InputMaybe<Eth_Wearer_filter>;
  operator?: InputMaybe<Scalars['String']['input']>;
  operator_not?: InputMaybe<Scalars['String']['input']>;
  operator_gt?: InputMaybe<Scalars['String']['input']>;
  operator_lt?: InputMaybe<Scalars['String']['input']>;
  operator_gte?: InputMaybe<Scalars['String']['input']>;
  operator_lte?: InputMaybe<Scalars['String']['input']>;
  operator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  operator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  operator_contains?: InputMaybe<Scalars['String']['input']>;
  operator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  operator_not_contains?: InputMaybe<Scalars['String']['input']>;
  operator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  operator_starts_with?: InputMaybe<Scalars['String']['input']>;
  operator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  operator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operator_ends_with?: InputMaybe<Scalars['String']['input']>;
  operator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  operator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatMintedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatMintedEvent_filter>>>;
};

export type Eth_HatMintedEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'wearer'
  | 'wearer__id'
  | 'operator';

export type Eth_HatMutabilityChangedEvent = Eth_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Eth_Tree;
  hat: Eth_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
};

export type Eth_HatMutabilityChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Eth_Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Eth_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatMutabilityChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatMutabilityChangedEvent_filter>>>;
};

export type Eth_HatMutabilityChangedEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID';

export type Eth_HatStatusChangedEvent = Eth_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Eth_Tree;
  hat: Eth_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  hatNewStatus: Scalars['Boolean']['output'];
};

export type Eth_HatStatusChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Eth_Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Eth_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  hatNewStatus?: InputMaybe<Scalars['Boolean']['input']>;
  hatNewStatus_not?: InputMaybe<Scalars['Boolean']['input']>;
  hatNewStatus_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  hatNewStatus_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatStatusChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatStatusChangedEvent_filter>>>;
};

export type Eth_HatStatusChangedEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'hatNewStatus';

export type Eth_HatToggleChangedEvent = Eth_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Eth_Tree;
  hat: Eth_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  hatNewToggle: Scalars['String']['output'];
};

export type Eth_HatToggleChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Eth_Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Eth_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  hatNewToggle?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_not?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_gt?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_lt?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_gte?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_lte?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatNewToggle_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hatNewToggle_contains?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_not_contains?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hatNewToggle_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatToggleChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatToggleChangedEvent_filter>>>;
};

export type Eth_HatToggleChangedEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'hatNewToggle';

export type Eth_Hat_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  prettyId?: InputMaybe<Scalars['String']['input']>;
  prettyId_not?: InputMaybe<Scalars['String']['input']>;
  prettyId_gt?: InputMaybe<Scalars['String']['input']>;
  prettyId_lt?: InputMaybe<Scalars['String']['input']>;
  prettyId_gte?: InputMaybe<Scalars['String']['input']>;
  prettyId_lte?: InputMaybe<Scalars['String']['input']>;
  prettyId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  prettyId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  prettyId_contains?: InputMaybe<Scalars['String']['input']>;
  prettyId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  prettyId_not_contains?: InputMaybe<Scalars['String']['input']>;
  prettyId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  prettyId_starts_with?: InputMaybe<Scalars['String']['input']>;
  prettyId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  prettyId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  prettyId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  prettyId_ends_with?: InputMaybe<Scalars['String']['input']>;
  prettyId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  prettyId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  prettyId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  status_not?: InputMaybe<Scalars['Boolean']['input']>;
  status_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  status_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  details?: InputMaybe<Scalars['String']['input']>;
  details_not?: InputMaybe<Scalars['String']['input']>;
  details_gt?: InputMaybe<Scalars['String']['input']>;
  details_lt?: InputMaybe<Scalars['String']['input']>;
  details_gte?: InputMaybe<Scalars['String']['input']>;
  details_lte?: InputMaybe<Scalars['String']['input']>;
  details_in?: InputMaybe<Array<Scalars['String']['input']>>;
  details_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  details_contains?: InputMaybe<Scalars['String']['input']>;
  details_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  details_not_contains?: InputMaybe<Scalars['String']['input']>;
  details_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  details_starts_with?: InputMaybe<Scalars['String']['input']>;
  details_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  details_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  details_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  details_ends_with?: InputMaybe<Scalars['String']['input']>;
  details_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  details_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  details_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  maxSupply?: InputMaybe<Scalars['BigInt']['input']>;
  maxSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  maxSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eligibility?: InputMaybe<Scalars['String']['input']>;
  eligibility_not?: InputMaybe<Scalars['String']['input']>;
  eligibility_gt?: InputMaybe<Scalars['String']['input']>;
  eligibility_lt?: InputMaybe<Scalars['String']['input']>;
  eligibility_gte?: InputMaybe<Scalars['String']['input']>;
  eligibility_lte?: InputMaybe<Scalars['String']['input']>;
  eligibility_in?: InputMaybe<Array<Scalars['String']['input']>>;
  eligibility_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  eligibility_contains?: InputMaybe<Scalars['String']['input']>;
  eligibility_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  eligibility_not_contains?: InputMaybe<Scalars['String']['input']>;
  eligibility_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  eligibility_starts_with?: InputMaybe<Scalars['String']['input']>;
  eligibility_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  eligibility_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  eligibility_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  eligibility_ends_with?: InputMaybe<Scalars['String']['input']>;
  eligibility_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  eligibility_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  eligibility_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  toggle?: InputMaybe<Scalars['String']['input']>;
  toggle_not?: InputMaybe<Scalars['String']['input']>;
  toggle_gt?: InputMaybe<Scalars['String']['input']>;
  toggle_lt?: InputMaybe<Scalars['String']['input']>;
  toggle_gte?: InputMaybe<Scalars['String']['input']>;
  toggle_lte?: InputMaybe<Scalars['String']['input']>;
  toggle_in?: InputMaybe<Array<Scalars['String']['input']>>;
  toggle_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  toggle_contains?: InputMaybe<Scalars['String']['input']>;
  toggle_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  toggle_not_contains?: InputMaybe<Scalars['String']['input']>;
  toggle_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  toggle_starts_with?: InputMaybe<Scalars['String']['input']>;
  toggle_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  toggle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  toggle_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  toggle_ends_with?: InputMaybe<Scalars['String']['input']>;
  toggle_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  toggle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  toggle_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mutable?: InputMaybe<Scalars['Boolean']['input']>;
  mutable_not?: InputMaybe<Scalars['Boolean']['input']>;
  mutable_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  mutable_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  imageUri?: InputMaybe<Scalars['String']['input']>;
  imageUri_not?: InputMaybe<Scalars['String']['input']>;
  imageUri_gt?: InputMaybe<Scalars['String']['input']>;
  imageUri_lt?: InputMaybe<Scalars['String']['input']>;
  imageUri_gte?: InputMaybe<Scalars['String']['input']>;
  imageUri_lte?: InputMaybe<Scalars['String']['input']>;
  imageUri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  imageUri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  imageUri_contains?: InputMaybe<Scalars['String']['input']>;
  imageUri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  imageUri_not_contains?: InputMaybe<Scalars['String']['input']>;
  imageUri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  imageUri_starts_with?: InputMaybe<Scalars['String']['input']>;
  imageUri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  imageUri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  imageUri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  imageUri_ends_with?: InputMaybe<Scalars['String']['input']>;
  imageUri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  imageUri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  imageUri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  levelAtLocalTree?: InputMaybe<Scalars['Int']['input']>;
  levelAtLocalTree_not?: InputMaybe<Scalars['Int']['input']>;
  levelAtLocalTree_gt?: InputMaybe<Scalars['Int']['input']>;
  levelAtLocalTree_lt?: InputMaybe<Scalars['Int']['input']>;
  levelAtLocalTree_gte?: InputMaybe<Scalars['Int']['input']>;
  levelAtLocalTree_lte?: InputMaybe<Scalars['Int']['input']>;
  levelAtLocalTree_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  levelAtLocalTree_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  currentSupply?: InputMaybe<Scalars['BigInt']['input']>;
  currentSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Eth_Tree_filter>;
  wearers?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  wearers_?: InputMaybe<Eth_Wearer_filter>;
  admin?: InputMaybe<Scalars['String']['input']>;
  admin_not?: InputMaybe<Scalars['String']['input']>;
  admin_gt?: InputMaybe<Scalars['String']['input']>;
  admin_lt?: InputMaybe<Scalars['String']['input']>;
  admin_gte?: InputMaybe<Scalars['String']['input']>;
  admin_lte?: InputMaybe<Scalars['String']['input']>;
  admin_in?: InputMaybe<Array<Scalars['String']['input']>>;
  admin_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  admin_contains?: InputMaybe<Scalars['String']['input']>;
  admin_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_not_contains?: InputMaybe<Scalars['String']['input']>;
  admin_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_starts_with?: InputMaybe<Scalars['String']['input']>;
  admin_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  admin_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_ends_with?: InputMaybe<Scalars['String']['input']>;
  admin_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  admin_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_?: InputMaybe<Eth_Hat_filter>;
  badStandings?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  badStandings_?: InputMaybe<Eth_Wearer_filter>;
  claimableBy_?: InputMaybe<Eth_ClaimsHatter_filter>;
  claimableForBy_?: InputMaybe<Eth_ClaimsHatter_filter>;
  linkRequestFromTree_?: InputMaybe<Eth_Tree_filter>;
  subHats_?: InputMaybe<Eth_Hat_filter>;
  linkedTrees_?: InputMaybe<Eth_Tree_filter>;
  events_?: InputMaybe<Eth_HatsEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Hat_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Hat_filter>>>;
};

export type Eth_Hat_orderBy =
  | 'id'
  | 'prettyId'
  | 'status'
  | 'createdAt'
  | 'details'
  | 'maxSupply'
  | 'eligibility'
  | 'toggle'
  | 'mutable'
  | 'imageUri'
  | 'levelAtLocalTree'
  | 'currentSupply'
  | 'tree'
  | 'tree__id'
  | 'wearers'
  | 'admin'
  | 'admin__id'
  | 'admin__prettyId'
  | 'admin__status'
  | 'admin__createdAt'
  | 'admin__details'
  | 'admin__maxSupply'
  | 'admin__eligibility'
  | 'admin__toggle'
  | 'admin__mutable'
  | 'admin__imageUri'
  | 'admin__levelAtLocalTree'
  | 'admin__currentSupply'
  | 'badStandings'
  | 'claimableBy'
  | 'claimableForBy'
  | 'linkRequestFromTree'
  | 'subHats'
  | 'linkedTrees'
  | 'events';

export type Eth_HatsEvent = {
  id: Scalars['ID']['output'];
  tree: Eth_Tree;
  hat: Eth_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
};

export type Eth_HatsEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Eth_Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Eth_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_HatsEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_HatsEvent_filter>>>;
};

export type Eth_HatsEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID';

export type Eth_TopHatLinkRequestedEvent = Eth_HatsEvent & {
  /** tree field is the tree that is being linked, hat field is the tree top hat */
  id: Scalars['ID']['output'];
  tree: Eth_Tree;
  hat: Eth_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  newAdmin: Eth_Hat;
};

export type Eth_TopHatLinkRequestedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Eth_Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Eth_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  newAdmin?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not?: InputMaybe<Scalars['String']['input']>;
  newAdmin_gt?: InputMaybe<Scalars['String']['input']>;
  newAdmin_lt?: InputMaybe<Scalars['String']['input']>;
  newAdmin_gte?: InputMaybe<Scalars['String']['input']>;
  newAdmin_lte?: InputMaybe<Scalars['String']['input']>;
  newAdmin_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newAdmin_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newAdmin_contains?: InputMaybe<Scalars['String']['input']>;
  newAdmin_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not_contains?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdmin_starts_with?: InputMaybe<Scalars['String']['input']>;
  newAdmin_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdmin_ends_with?: InputMaybe<Scalars['String']['input']>;
  newAdmin_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdmin_?: InputMaybe<Eth_Hat_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_TopHatLinkRequestedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_TopHatLinkRequestedEvent_filter>>>;
};

export type Eth_TopHatLinkRequestedEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'newAdmin'
  | 'newAdmin__id'
  | 'newAdmin__prettyId'
  | 'newAdmin__status'
  | 'newAdmin__createdAt'
  | 'newAdmin__details'
  | 'newAdmin__maxSupply'
  | 'newAdmin__eligibility'
  | 'newAdmin__toggle'
  | 'newAdmin__mutable'
  | 'newAdmin__imageUri'
  | 'newAdmin__levelAtLocalTree'
  | 'newAdmin__currentSupply';

export type Eth_TopHatLinkedEvent = Eth_HatsEvent & {
  /** tree field is the tree that is being linked, hat field is the tree top hat */
  id: Scalars['ID']['output'];
  tree: Eth_Tree;
  hat: Eth_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  newAdmin: Eth_Hat;
};

export type Eth_TopHatLinkedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Eth_Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Eth_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  newAdmin?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not?: InputMaybe<Scalars['String']['input']>;
  newAdmin_gt?: InputMaybe<Scalars['String']['input']>;
  newAdmin_lt?: InputMaybe<Scalars['String']['input']>;
  newAdmin_gte?: InputMaybe<Scalars['String']['input']>;
  newAdmin_lte?: InputMaybe<Scalars['String']['input']>;
  newAdmin_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newAdmin_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newAdmin_contains?: InputMaybe<Scalars['String']['input']>;
  newAdmin_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not_contains?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdmin_starts_with?: InputMaybe<Scalars['String']['input']>;
  newAdmin_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdmin_ends_with?: InputMaybe<Scalars['String']['input']>;
  newAdmin_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  newAdmin_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newAdmin_?: InputMaybe<Eth_Hat_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_TopHatLinkedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_TopHatLinkedEvent_filter>>>;
};

export type Eth_TopHatLinkedEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'newAdmin'
  | 'newAdmin__id'
  | 'newAdmin__prettyId'
  | 'newAdmin__status'
  | 'newAdmin__createdAt'
  | 'newAdmin__details'
  | 'newAdmin__maxSupply'
  | 'newAdmin__eligibility'
  | 'newAdmin__toggle'
  | 'newAdmin__mutable'
  | 'newAdmin__imageUri'
  | 'newAdmin__levelAtLocalTree'
  | 'newAdmin__currentSupply';

export type Eth_Tree = {
  /** Tree ID is its top hat domain - first 4 bytes of the top hat ID */
  id: Scalars['ID']['output'];
  childOfTree?: Maybe<Eth_Tree>;
  linkedToHat?: Maybe<Eth_Hat>;
  requestedLinkToTree?: Maybe<Eth_Tree>;
  requestedLinkToHat?: Maybe<Eth_Hat>;
  linkRequestFromTree: Array<Eth_Tree>;
  hats: Array<Eth_Hat>;
  parentOfTrees: Array<Eth_Tree>;
  events: Array<Eth_HatsEvent>;
};


export type Eth_TreelinkRequestFromTreeArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Tree_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Tree_filter>;
};


export type Eth_TreehatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Hat_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Hat_filter>;
};


export type Eth_TreeparentOfTreesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Tree_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Tree_filter>;
};


export type Eth_TreeeventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatsEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatsEvent_filter>;
};

export type Eth_Tree_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  childOfTree?: InputMaybe<Scalars['String']['input']>;
  childOfTree_not?: InputMaybe<Scalars['String']['input']>;
  childOfTree_gt?: InputMaybe<Scalars['String']['input']>;
  childOfTree_lt?: InputMaybe<Scalars['String']['input']>;
  childOfTree_gte?: InputMaybe<Scalars['String']['input']>;
  childOfTree_lte?: InputMaybe<Scalars['String']['input']>;
  childOfTree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  childOfTree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  childOfTree_contains?: InputMaybe<Scalars['String']['input']>;
  childOfTree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  childOfTree_not_contains?: InputMaybe<Scalars['String']['input']>;
  childOfTree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  childOfTree_starts_with?: InputMaybe<Scalars['String']['input']>;
  childOfTree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  childOfTree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  childOfTree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  childOfTree_ends_with?: InputMaybe<Scalars['String']['input']>;
  childOfTree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  childOfTree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  childOfTree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  childOfTree_?: InputMaybe<Eth_Tree_filter>;
  linkedToHat?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_not?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_gt?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_lt?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_gte?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_lte?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  linkedToHat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  linkedToHat_contains?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_starts_with?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_ends_with?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedToHat_?: InputMaybe<Eth_Hat_filter>;
  requestedLinkToTree?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_not?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_gt?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_lt?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_gte?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_lte?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  requestedLinkToTree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  requestedLinkToTree_contains?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_not_contains?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_starts_with?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_ends_with?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToTree_?: InputMaybe<Eth_Tree_filter>;
  requestedLinkToHat?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_not?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_gt?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_lt?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_gte?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_lte?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  requestedLinkToHat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  requestedLinkToHat_contains?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_not_contains?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_starts_with?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_ends_with?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requestedLinkToHat_?: InputMaybe<Eth_Hat_filter>;
  linkRequestFromTree_?: InputMaybe<Eth_Tree_filter>;
  hats_?: InputMaybe<Eth_Hat_filter>;
  parentOfTrees_?: InputMaybe<Eth_Tree_filter>;
  events_?: InputMaybe<Eth_HatsEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Tree_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Tree_filter>>>;
};

export type Eth_Tree_orderBy =
  | 'id'
  | 'childOfTree'
  | 'childOfTree__id'
  | 'linkedToHat'
  | 'linkedToHat__id'
  | 'linkedToHat__prettyId'
  | 'linkedToHat__status'
  | 'linkedToHat__createdAt'
  | 'linkedToHat__details'
  | 'linkedToHat__maxSupply'
  | 'linkedToHat__eligibility'
  | 'linkedToHat__toggle'
  | 'linkedToHat__mutable'
  | 'linkedToHat__imageUri'
  | 'linkedToHat__levelAtLocalTree'
  | 'linkedToHat__currentSupply'
  | 'requestedLinkToTree'
  | 'requestedLinkToTree__id'
  | 'requestedLinkToHat'
  | 'requestedLinkToHat__id'
  | 'requestedLinkToHat__prettyId'
  | 'requestedLinkToHat__status'
  | 'requestedLinkToHat__createdAt'
  | 'requestedLinkToHat__details'
  | 'requestedLinkToHat__maxSupply'
  | 'requestedLinkToHat__eligibility'
  | 'requestedLinkToHat__toggle'
  | 'requestedLinkToHat__mutable'
  | 'requestedLinkToHat__imageUri'
  | 'requestedLinkToHat__levelAtLocalTree'
  | 'requestedLinkToHat__currentSupply'
  | 'linkRequestFromTree'
  | 'hats'
  | 'parentOfTrees'
  | 'events';

export type Eth_Wearer = {
  id: Scalars['ID']['output'];
  currentHats: Array<Eth_Hat>;
  mintEvent: Array<Eth_HatMintedEvent>;
  burnEvent: Array<Eth_HatBurnedEvent>;
};


export type Eth_WearercurrentHatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_Hat_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_Hat_filter>;
};


export type Eth_WearermintEventArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatMintedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatMintedEvent_filter>;
};


export type Eth_WearerburnEventArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eth_HatBurnedEvent_orderBy>;
  orderDirection?: InputMaybe<Eth_OrderDirection>;
  where?: InputMaybe<Eth_HatBurnedEvent_filter>;
};

export type Eth_WearerStandingChangedEvent = Eth_HatsEvent & {
  id: Scalars['ID']['output'];
  tree: Eth_Tree;
  hat: Eth_Hat;
  blockNumber: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionID: Scalars['Eth_Bytes']['output'];
  wearer: Eth_Wearer;
  wearerStanding: Scalars['Boolean']['output'];
};

export type Eth_WearerStandingChangedEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tree?: InputMaybe<Scalars['String']['input']>;
  tree_not?: InputMaybe<Scalars['String']['input']>;
  tree_gt?: InputMaybe<Scalars['String']['input']>;
  tree_lt?: InputMaybe<Scalars['String']['input']>;
  tree_gte?: InputMaybe<Scalars['String']['input']>;
  tree_lte?: InputMaybe<Scalars['String']['input']>;
  tree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tree_contains?: InputMaybe<Scalars['String']['input']>;
  tree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains?: InputMaybe<Scalars['String']['input']>;
  tree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tree_?: InputMaybe<Eth_Tree_filter>;
  hat?: InputMaybe<Scalars['String']['input']>;
  hat_not?: InputMaybe<Scalars['String']['input']>;
  hat_gt?: InputMaybe<Scalars['String']['input']>;
  hat_lt?: InputMaybe<Scalars['String']['input']>;
  hat_gte?: InputMaybe<Scalars['String']['input']>;
  hat_lte?: InputMaybe<Scalars['String']['input']>;
  hat_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hat_contains?: InputMaybe<Scalars['String']['input']>;
  hat_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains?: InputMaybe<Scalars['String']['input']>;
  hat_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hat_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hat_?: InputMaybe<Eth_Hat_filter>;
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
  transactionID?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lt?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_gte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_lte?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Eth_Bytes']['input']>>;
  transactionID_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
  transactionID_not_contains?: InputMaybe<Scalars['Eth_Bytes']['input']>;
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
  wearer_?: InputMaybe<Eth_Wearer_filter>;
  wearerStanding?: InputMaybe<Scalars['Boolean']['input']>;
  wearerStanding_not?: InputMaybe<Scalars['Boolean']['input']>;
  wearerStanding_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  wearerStanding_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_WearerStandingChangedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_WearerStandingChangedEvent_filter>>>;
};

export type Eth_WearerStandingChangedEvent_orderBy =
  | 'id'
  | 'tree'
  | 'tree__id'
  | 'hat'
  | 'hat__id'
  | 'hat__prettyId'
  | 'hat__status'
  | 'hat__createdAt'
  | 'hat__details'
  | 'hat__maxSupply'
  | 'hat__eligibility'
  | 'hat__toggle'
  | 'hat__mutable'
  | 'hat__imageUri'
  | 'hat__levelAtLocalTree'
  | 'hat__currentSupply'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionID'
  | 'wearer'
  | 'wearer__id'
  | 'wearerStanding';

export type Eth_Wearer_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  currentHats_?: InputMaybe<Eth_Hat_filter>;
  mintEvent_?: InputMaybe<Eth_HatMintedEvent_filter>;
  burnEvent_?: InputMaybe<Eth_HatBurnedEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Eth_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eth_Wearer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Eth_Wearer_filter>>>;
};

export type Eth_Wearer_orderBy =
  | 'id'
  | 'currentHats'
  | 'mintEvent'
  | 'burnEvent';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  Eth_HatsEvent: ( Eth_HatBurnedEvent ) | ( Eth_HatCreatedEvent ) | ( Eth_HatDetailsChangedEvent ) | ( Eth_HatEligibilityChangedEvent ) | ( Eth_HatImageURIChangedEvent ) | ( Eth_HatMaxSupplyChangedEvent ) | ( Eth_HatMintedEvent ) | ( Eth_HatMutabilityChangedEvent ) | ( Eth_HatStatusChangedEvent ) | ( Eth_HatToggleChangedEvent ) | ( Eth_TopHatLinkRequestedEvent ) | ( Eth_TopHatLinkedEvent ) | ( Eth_WearerStandingChangedEvent );
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  Eth_Aggregation_interval: Eth_Aggregation_interval;
  Eth_Agreement: ResolverTypeWrapper<Eth_Agreement>;
  Eth_AgreementEligibility: ResolverTypeWrapper<Eth_AgreementEligibility>;
  Eth_AgreementEligibility_filter: Eth_AgreementEligibility_filter;
  Eth_AgreementEligibility_orderBy: Eth_AgreementEligibility_orderBy;
  Eth_Agreement_filter: Eth_Agreement_filter;
  Eth_Agreement_orderBy: Eth_Agreement_orderBy;
  Eth_AllowListEligibility: ResolverTypeWrapper<Eth_AllowListEligibility>;
  Eth_AllowListEligibility_filter: Eth_AllowListEligibility_filter;
  Eth_AllowListEligibility_orderBy: Eth_AllowListEligibility_orderBy;
  Eth_BigDecimal: ResolverTypeWrapper<Scalars['Eth_BigDecimal']['output']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  Eth_BlockChangedFilter: Eth_BlockChangedFilter;
  Eth_Block_height: Eth_Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Eth_Bytes: ResolverTypeWrapper<Scalars['Eth_Bytes']['output']>;
  Eth_CharacterSheetsLevelEligibility: ResolverTypeWrapper<Eth_CharacterSheetsLevelEligibility>;
  Eth_CharacterSheetsLevelEligibility_filter: Eth_CharacterSheetsLevelEligibility_filter;
  Eth_CharacterSheetsLevelEligibility_orderBy: Eth_CharacterSheetsLevelEligibility_orderBy;
  Eth_ElectionTerm: ResolverTypeWrapper<Eth_ElectionTerm>;
  Eth_ElectionTerm_filter: Eth_ElectionTerm_filter;
  Eth_ElectionTerm_orderBy: Eth_ElectionTerm_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Eth_HatAuthority: ResolverTypeWrapper<Eth_HatAuthority>;
  Eth_HatAuthority_filter: Eth_HatAuthority_filter;
  Eth_HatAuthority_orderBy: Eth_HatAuthority_orderBy;
  Eth_HatsAccount1ofN: ResolverTypeWrapper<Eth_HatsAccount1ofN>;
  Eth_HatsAccount1ofNOperation: ResolverTypeWrapper<Eth_HatsAccount1ofNOperation>;
  Eth_HatsAccount1ofNOperation_filter: Eth_HatsAccount1ofNOperation_filter;
  Eth_HatsAccount1ofNOperation_orderBy: Eth_HatsAccount1ofNOperation_orderBy;
  Eth_HatsAccount1ofN_filter: Eth_HatsAccount1ofN_filter;
  Eth_HatsAccount1ofN_orderBy: Eth_HatsAccount1ofN_orderBy;
  Eth_HatsAccountOperationType: Eth_HatsAccountOperationType;
  Eth_HatsElectionEligibility: ResolverTypeWrapper<Eth_HatsElectionEligibility>;
  Eth_HatsElectionEligibility_filter: Eth_HatsElectionEligibility_filter;
  Eth_HatsElectionEligibility_orderBy: Eth_HatsElectionEligibility_orderBy;
  Eth_HatsSignerGate: ResolverTypeWrapper<Eth_HatsSignerGate>;
  Eth_HatsSignerGateType: Eth_HatsSignerGateType;
  Eth_HatsSignerGate_filter: Eth_HatsSignerGate_filter;
  Eth_HatsSignerGate_orderBy: Eth_HatsSignerGate_orderBy;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Eth_Int8: ResolverTypeWrapper<Scalars['Eth_Int8']['output']>;
  Eth_JokeRaceEligibility: ResolverTypeWrapper<Eth_JokeRaceEligibility>;
  Eth_JokeRaceEligibility_filter: Eth_JokeRaceEligibility_filter;
  Eth_JokeRaceEligibility_orderBy: Eth_JokeRaceEligibility_orderBy;
  Eth_OrderDirection: Eth_OrderDirection;
  Eth_PassthroughModule: ResolverTypeWrapper<Eth_PassthroughModule>;
  Eth_PassthroughModule_filter: Eth_PassthroughModule_filter;
  Eth_PassthroughModule_orderBy: Eth_PassthroughModule_orderBy;
  Eth_SeasonToggle: ResolverTypeWrapper<Eth_SeasonToggle>;
  Eth_SeasonToggle_filter: Eth_SeasonToggle_filter;
  Eth_SeasonToggle_orderBy: Eth_SeasonToggle_orderBy;
  Eth_StakingEligibility: ResolverTypeWrapper<Eth_StakingEligibility>;
  Eth_StakingEligibility_filter: Eth_StakingEligibility_filter;
  Eth_StakingEligibility_orderBy: Eth_StakingEligibility_orderBy;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']['output']>;
  Eth__Block_: ResolverTypeWrapper<Eth__Block_>;
  Eth__Meta_: ResolverTypeWrapper<Eth__Meta_>;
  Eth__SubgraphErrorPolicy_: Eth__SubgraphErrorPolicy_;
  Eth_ClaimsHatter: ResolverTypeWrapper<Eth_ClaimsHatter>;
  Eth_ClaimsHatter_filter: Eth_ClaimsHatter_filter;
  Eth_ClaimsHatter_orderBy: Eth_ClaimsHatter_orderBy;
  Eth_Hat: ResolverTypeWrapper<Eth_Hat>;
  Eth_HatBurnedEvent: ResolverTypeWrapper<Eth_HatBurnedEvent>;
  Eth_HatBurnedEvent_filter: Eth_HatBurnedEvent_filter;
  Eth_HatBurnedEvent_orderBy: Eth_HatBurnedEvent_orderBy;
  Eth_HatCreatedEvent: ResolverTypeWrapper<Eth_HatCreatedEvent>;
  Eth_HatCreatedEvent_filter: Eth_HatCreatedEvent_filter;
  Eth_HatCreatedEvent_orderBy: Eth_HatCreatedEvent_orderBy;
  Eth_HatDetailsChangedEvent: ResolverTypeWrapper<Eth_HatDetailsChangedEvent>;
  Eth_HatDetailsChangedEvent_filter: Eth_HatDetailsChangedEvent_filter;
  Eth_HatDetailsChangedEvent_orderBy: Eth_HatDetailsChangedEvent_orderBy;
  Eth_HatEligibilityChangedEvent: ResolverTypeWrapper<Eth_HatEligibilityChangedEvent>;
  Eth_HatEligibilityChangedEvent_filter: Eth_HatEligibilityChangedEvent_filter;
  Eth_HatEligibilityChangedEvent_orderBy: Eth_HatEligibilityChangedEvent_orderBy;
  Eth_HatImageURIChangedEvent: ResolverTypeWrapper<Eth_HatImageURIChangedEvent>;
  Eth_HatImageURIChangedEvent_filter: Eth_HatImageURIChangedEvent_filter;
  Eth_HatImageURIChangedEvent_orderBy: Eth_HatImageURIChangedEvent_orderBy;
  Eth_HatMaxSupplyChangedEvent: ResolverTypeWrapper<Eth_HatMaxSupplyChangedEvent>;
  Eth_HatMaxSupplyChangedEvent_filter: Eth_HatMaxSupplyChangedEvent_filter;
  Eth_HatMaxSupplyChangedEvent_orderBy: Eth_HatMaxSupplyChangedEvent_orderBy;
  Eth_HatMintedEvent: ResolverTypeWrapper<Eth_HatMintedEvent>;
  Eth_HatMintedEvent_filter: Eth_HatMintedEvent_filter;
  Eth_HatMintedEvent_orderBy: Eth_HatMintedEvent_orderBy;
  Eth_HatMutabilityChangedEvent: ResolverTypeWrapper<Eth_HatMutabilityChangedEvent>;
  Eth_HatMutabilityChangedEvent_filter: Eth_HatMutabilityChangedEvent_filter;
  Eth_HatMutabilityChangedEvent_orderBy: Eth_HatMutabilityChangedEvent_orderBy;
  Eth_HatStatusChangedEvent: ResolverTypeWrapper<Eth_HatStatusChangedEvent>;
  Eth_HatStatusChangedEvent_filter: Eth_HatStatusChangedEvent_filter;
  Eth_HatStatusChangedEvent_orderBy: Eth_HatStatusChangedEvent_orderBy;
  Eth_HatToggleChangedEvent: ResolverTypeWrapper<Eth_HatToggleChangedEvent>;
  Eth_HatToggleChangedEvent_filter: Eth_HatToggleChangedEvent_filter;
  Eth_HatToggleChangedEvent_orderBy: Eth_HatToggleChangedEvent_orderBy;
  Eth_Hat_filter: Eth_Hat_filter;
  Eth_Hat_orderBy: Eth_Hat_orderBy;
  Eth_HatsEvent: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Eth_HatsEvent']>;
  Eth_HatsEvent_filter: Eth_HatsEvent_filter;
  Eth_HatsEvent_orderBy: Eth_HatsEvent_orderBy;
  Eth_TopHatLinkRequestedEvent: ResolverTypeWrapper<Eth_TopHatLinkRequestedEvent>;
  Eth_TopHatLinkRequestedEvent_filter: Eth_TopHatLinkRequestedEvent_filter;
  Eth_TopHatLinkRequestedEvent_orderBy: Eth_TopHatLinkRequestedEvent_orderBy;
  Eth_TopHatLinkedEvent: ResolverTypeWrapper<Eth_TopHatLinkedEvent>;
  Eth_TopHatLinkedEvent_filter: Eth_TopHatLinkedEvent_filter;
  Eth_TopHatLinkedEvent_orderBy: Eth_TopHatLinkedEvent_orderBy;
  Eth_Tree: ResolverTypeWrapper<Eth_Tree>;
  Eth_Tree_filter: Eth_Tree_filter;
  Eth_Tree_orderBy: Eth_Tree_orderBy;
  Eth_Wearer: ResolverTypeWrapper<Eth_Wearer>;
  Eth_WearerStandingChangedEvent: ResolverTypeWrapper<Eth_WearerStandingChangedEvent>;
  Eth_WearerStandingChangedEvent_filter: Eth_WearerStandingChangedEvent_filter;
  Eth_WearerStandingChangedEvent_orderBy: Eth_WearerStandingChangedEvent_orderBy;
  Eth_Wearer_filter: Eth_Wearer_filter;
  Eth_Wearer_orderBy: Eth_Wearer_orderBy;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Subscription: {};
  Eth_Agreement: Eth_Agreement;
  Eth_AgreementEligibility: Eth_AgreementEligibility;
  Eth_AgreementEligibility_filter: Eth_AgreementEligibility_filter;
  Eth_Agreement_filter: Eth_Agreement_filter;
  Eth_AllowListEligibility: Eth_AllowListEligibility;
  Eth_AllowListEligibility_filter: Eth_AllowListEligibility_filter;
  Eth_BigDecimal: Scalars['Eth_BigDecimal']['output'];
  BigInt: Scalars['BigInt']['output'];
  Eth_BlockChangedFilter: Eth_BlockChangedFilter;
  Eth_Block_height: Eth_Block_height;
  Boolean: Scalars['Boolean']['output'];
  Eth_Bytes: Scalars['Eth_Bytes']['output'];
  Eth_CharacterSheetsLevelEligibility: Eth_CharacterSheetsLevelEligibility;
  Eth_CharacterSheetsLevelEligibility_filter: Eth_CharacterSheetsLevelEligibility_filter;
  Eth_ElectionTerm: Eth_ElectionTerm;
  Eth_ElectionTerm_filter: Eth_ElectionTerm_filter;
  Float: Scalars['Float']['output'];
  Eth_HatAuthority: Eth_HatAuthority;
  Eth_HatAuthority_filter: Eth_HatAuthority_filter;
  Eth_HatsAccount1ofN: Eth_HatsAccount1ofN;
  Eth_HatsAccount1ofNOperation: Eth_HatsAccount1ofNOperation;
  Eth_HatsAccount1ofNOperation_filter: Eth_HatsAccount1ofNOperation_filter;
  Eth_HatsAccount1ofN_filter: Eth_HatsAccount1ofN_filter;
  Eth_HatsElectionEligibility: Eth_HatsElectionEligibility;
  Eth_HatsElectionEligibility_filter: Eth_HatsElectionEligibility_filter;
  Eth_HatsSignerGate: Eth_HatsSignerGate;
  Eth_HatsSignerGate_filter: Eth_HatsSignerGate_filter;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Eth_Int8: Scalars['Eth_Int8']['output'];
  Eth_JokeRaceEligibility: Eth_JokeRaceEligibility;
  Eth_JokeRaceEligibility_filter: Eth_JokeRaceEligibility_filter;
  Eth_PassthroughModule: Eth_PassthroughModule;
  Eth_PassthroughModule_filter: Eth_PassthroughModule_filter;
  Eth_SeasonToggle: Eth_SeasonToggle;
  Eth_SeasonToggle_filter: Eth_SeasonToggle_filter;
  Eth_StakingEligibility: Eth_StakingEligibility;
  Eth_StakingEligibility_filter: Eth_StakingEligibility_filter;
  String: Scalars['String']['output'];
  Timestamp: Scalars['Timestamp']['output'];
  Eth__Block_: Eth__Block_;
  Eth__Meta_: Eth__Meta_;
  Eth_ClaimsHatter: Eth_ClaimsHatter;
  Eth_ClaimsHatter_filter: Eth_ClaimsHatter_filter;
  Eth_Hat: Eth_Hat;
  Eth_HatBurnedEvent: Eth_HatBurnedEvent;
  Eth_HatBurnedEvent_filter: Eth_HatBurnedEvent_filter;
  Eth_HatCreatedEvent: Eth_HatCreatedEvent;
  Eth_HatCreatedEvent_filter: Eth_HatCreatedEvent_filter;
  Eth_HatDetailsChangedEvent: Eth_HatDetailsChangedEvent;
  Eth_HatDetailsChangedEvent_filter: Eth_HatDetailsChangedEvent_filter;
  Eth_HatEligibilityChangedEvent: Eth_HatEligibilityChangedEvent;
  Eth_HatEligibilityChangedEvent_filter: Eth_HatEligibilityChangedEvent_filter;
  Eth_HatImageURIChangedEvent: Eth_HatImageURIChangedEvent;
  Eth_HatImageURIChangedEvent_filter: Eth_HatImageURIChangedEvent_filter;
  Eth_HatMaxSupplyChangedEvent: Eth_HatMaxSupplyChangedEvent;
  Eth_HatMaxSupplyChangedEvent_filter: Eth_HatMaxSupplyChangedEvent_filter;
  Eth_HatMintedEvent: Eth_HatMintedEvent;
  Eth_HatMintedEvent_filter: Eth_HatMintedEvent_filter;
  Eth_HatMutabilityChangedEvent: Eth_HatMutabilityChangedEvent;
  Eth_HatMutabilityChangedEvent_filter: Eth_HatMutabilityChangedEvent_filter;
  Eth_HatStatusChangedEvent: Eth_HatStatusChangedEvent;
  Eth_HatStatusChangedEvent_filter: Eth_HatStatusChangedEvent_filter;
  Eth_HatToggleChangedEvent: Eth_HatToggleChangedEvent;
  Eth_HatToggleChangedEvent_filter: Eth_HatToggleChangedEvent_filter;
  Eth_Hat_filter: Eth_Hat_filter;
  Eth_HatsEvent: ResolversInterfaceTypes<ResolversParentTypes>['Eth_HatsEvent'];
  Eth_HatsEvent_filter: Eth_HatsEvent_filter;
  Eth_TopHatLinkRequestedEvent: Eth_TopHatLinkRequestedEvent;
  Eth_TopHatLinkRequestedEvent_filter: Eth_TopHatLinkRequestedEvent_filter;
  Eth_TopHatLinkedEvent: Eth_TopHatLinkedEvent;
  Eth_TopHatLinkedEvent_filter: Eth_TopHatLinkedEvent_filter;
  Eth_Tree: Eth_Tree;
  Eth_Tree_filter: Eth_Tree_filter;
  Eth_Wearer: Eth_Wearer;
  Eth_WearerStandingChangedEvent: Eth_WearerStandingChangedEvent;
  Eth_WearerStandingChangedEvent_filter: Eth_WearerStandingChangedEvent_filter;
  Eth_Wearer_filter: Eth_Wearer_filter;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String']['input'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String']['input'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  Eth_hatAuthority?: Resolver<Maybe<ResolversTypes['Eth_HatAuthority']>, ParentType, ContextType, RequireFields<QueryEth_hatAuthorityArgs, 'id' | 'subgraphError'>>;
  Eth_hatAuthorities?: Resolver<Array<ResolversTypes['Eth_HatAuthority']>, ParentType, ContextType, RequireFields<QueryEth_hatAuthoritiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatsSignerGate?: Resolver<Maybe<ResolversTypes['Eth_HatsSignerGate']>, ParentType, ContextType, RequireFields<QueryEth_hatsSignerGateArgs, 'id' | 'subgraphError'>>;
  Eth_hatsSignerGates?: Resolver<Array<ResolversTypes['Eth_HatsSignerGate']>, ParentType, ContextType, RequireFields<QueryEth_hatsSignerGatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_jokeRaceEligibility?: Resolver<Maybe<ResolversTypes['Eth_JokeRaceEligibility']>, ParentType, ContextType, RequireFields<QueryEth_jokeRaceEligibilityArgs, 'id' | 'subgraphError'>>;
  Eth_jokeRaceEligibilities?: Resolver<Array<ResolversTypes['Eth_JokeRaceEligibility']>, ParentType, ContextType, RequireFields<QueryEth_jokeRaceEligibilitiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_allowListEligibility?: Resolver<Maybe<ResolversTypes['Eth_AllowListEligibility']>, ParentType, ContextType, RequireFields<QueryEth_allowListEligibilityArgs, 'id' | 'subgraphError'>>;
  Eth_allowListEligibilities?: Resolver<Array<ResolversTypes['Eth_AllowListEligibility']>, ParentType, ContextType, RequireFields<QueryEth_allowListEligibilitiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatsElectionEligibility?: Resolver<Maybe<ResolversTypes['Eth_HatsElectionEligibility']>, ParentType, ContextType, RequireFields<QueryEth_hatsElectionEligibilityArgs, 'id' | 'subgraphError'>>;
  Eth_hatsElectionEligibilities?: Resolver<Array<ResolversTypes['Eth_HatsElectionEligibility']>, ParentType, ContextType, RequireFields<QueryEth_hatsElectionEligibilitiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_electionTerm?: Resolver<Maybe<ResolversTypes['Eth_ElectionTerm']>, ParentType, ContextType, RequireFields<QueryEth_electionTermArgs, 'id' | 'subgraphError'>>;
  Eth_electionTerms?: Resolver<Array<ResolversTypes['Eth_ElectionTerm']>, ParentType, ContextType, RequireFields<QueryEth_electionTermsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_passthroughModule?: Resolver<Maybe<ResolversTypes['Eth_PassthroughModule']>, ParentType, ContextType, RequireFields<QueryEth_passthroughModuleArgs, 'id' | 'subgraphError'>>;
  Eth_passthroughModules?: Resolver<Array<ResolversTypes['Eth_PassthroughModule']>, ParentType, ContextType, RequireFields<QueryEth_passthroughModulesArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_stakingEligibility?: Resolver<Maybe<ResolversTypes['Eth_StakingEligibility']>, ParentType, ContextType, RequireFields<QueryEth_stakingEligibilityArgs, 'id' | 'subgraphError'>>;
  Eth_stakingEligibilities?: Resolver<Array<ResolversTypes['Eth_StakingEligibility']>, ParentType, ContextType, RequireFields<QueryEth_stakingEligibilitiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_seasonToggle?: Resolver<Maybe<ResolversTypes['Eth_SeasonToggle']>, ParentType, ContextType, RequireFields<QueryEth_seasonToggleArgs, 'id' | 'subgraphError'>>;
  Eth_seasonToggles?: Resolver<Array<ResolversTypes['Eth_SeasonToggle']>, ParentType, ContextType, RequireFields<QueryEth_seasonTogglesArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_characterSheetsLevelEligibility?: Resolver<Maybe<ResolversTypes['Eth_CharacterSheetsLevelEligibility']>, ParentType, ContextType, RequireFields<QueryEth_characterSheetsLevelEligibilityArgs, 'id' | 'subgraphError'>>;
  Eth_characterSheetsLevelEligibilities?: Resolver<Array<ResolversTypes['Eth_CharacterSheetsLevelEligibility']>, ParentType, ContextType, RequireFields<QueryEth_characterSheetsLevelEligibilitiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_agreementEligibility?: Resolver<Maybe<ResolversTypes['Eth_AgreementEligibility']>, ParentType, ContextType, RequireFields<QueryEth_agreementEligibilityArgs, 'id' | 'subgraphError'>>;
  Eth_agreementEligibilities?: Resolver<Array<ResolversTypes['Eth_AgreementEligibility']>, ParentType, ContextType, RequireFields<QueryEth_agreementEligibilitiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_agreement?: Resolver<Maybe<ResolversTypes['Eth_Agreement']>, ParentType, ContextType, RequireFields<QueryEth_agreementArgs, 'id' | 'subgraphError'>>;
  Eth_agreements?: Resolver<Array<ResolversTypes['Eth_Agreement']>, ParentType, ContextType, RequireFields<QueryEth_agreementsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatsAccount1OfN?: Resolver<Maybe<ResolversTypes['Eth_HatsAccount1ofN']>, ParentType, ContextType, RequireFields<QueryEth_hatsAccount1OfNArgs, 'id' | 'subgraphError'>>;
  Eth_hatsAccount1OfNs?: Resolver<Array<ResolversTypes['Eth_HatsAccount1ofN']>, ParentType, ContextType, RequireFields<QueryEth_hatsAccount1OfNsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatsAccount1OfNOperation?: Resolver<Maybe<ResolversTypes['Eth_HatsAccount1ofNOperation']>, ParentType, ContextType, RequireFields<QueryEth_hatsAccount1OfNOperationArgs, 'id' | 'subgraphError'>>;
  Eth_hatsAccount1OfNOperations?: Resolver<Array<ResolversTypes['Eth_HatsAccount1ofNOperation']>, ParentType, ContextType, RequireFields<QueryEth_hatsAccount1OfNOperationsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth__meta?: Resolver<Maybe<ResolversTypes['Eth__Meta_']>, ParentType, ContextType, Partial<QueryEth__metaArgs>>;
  Eth_hat?: Resolver<Maybe<ResolversTypes['Eth_Hat']>, ParentType, ContextType, RequireFields<QueryEth_hatArgs, 'id' | 'subgraphError'>>;
  Eth_hats?: Resolver<Array<ResolversTypes['Eth_Hat']>, ParentType, ContextType, RequireFields<QueryEth_hatsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_wearer?: Resolver<Maybe<ResolversTypes['Eth_Wearer']>, ParentType, ContextType, RequireFields<QueryEth_wearerArgs, 'id' | 'subgraphError'>>;
  Eth_wearers?: Resolver<Array<ResolversTypes['Eth_Wearer']>, ParentType, ContextType, RequireFields<QueryEth_wearersArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_tree?: Resolver<Maybe<ResolversTypes['Eth_Tree']>, ParentType, ContextType, RequireFields<QueryEth_treeArgs, 'id' | 'subgraphError'>>;
  Eth_trees?: Resolver<Array<ResolversTypes['Eth_Tree']>, ParentType, ContextType, RequireFields<QueryEth_treesArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatCreatedEvent?: Resolver<Maybe<ResolversTypes['Eth_HatCreatedEvent']>, ParentType, ContextType, RequireFields<QueryEth_hatCreatedEventArgs, 'id' | 'subgraphError'>>;
  Eth_hatCreatedEvents?: Resolver<Array<ResolversTypes['Eth_HatCreatedEvent']>, ParentType, ContextType, RequireFields<QueryEth_hatCreatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatMintedEvent?: Resolver<Maybe<ResolversTypes['Eth_HatMintedEvent']>, ParentType, ContextType, RequireFields<QueryEth_hatMintedEventArgs, 'id' | 'subgraphError'>>;
  Eth_hatMintedEvents?: Resolver<Array<ResolversTypes['Eth_HatMintedEvent']>, ParentType, ContextType, RequireFields<QueryEth_hatMintedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatBurnedEvent?: Resolver<Maybe<ResolversTypes['Eth_HatBurnedEvent']>, ParentType, ContextType, RequireFields<QueryEth_hatBurnedEventArgs, 'id' | 'subgraphError'>>;
  Eth_hatBurnedEvents?: Resolver<Array<ResolversTypes['Eth_HatBurnedEvent']>, ParentType, ContextType, RequireFields<QueryEth_hatBurnedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatStatusChangedEvent?: Resolver<Maybe<ResolversTypes['Eth_HatStatusChangedEvent']>, ParentType, ContextType, RequireFields<QueryEth_hatStatusChangedEventArgs, 'id' | 'subgraphError'>>;
  Eth_hatStatusChangedEvents?: Resolver<Array<ResolversTypes['Eth_HatStatusChangedEvent']>, ParentType, ContextType, RequireFields<QueryEth_hatStatusChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatDetailsChangedEvent?: Resolver<Maybe<ResolversTypes['Eth_HatDetailsChangedEvent']>, ParentType, ContextType, RequireFields<QueryEth_hatDetailsChangedEventArgs, 'id' | 'subgraphError'>>;
  Eth_hatDetailsChangedEvents?: Resolver<Array<ResolversTypes['Eth_HatDetailsChangedEvent']>, ParentType, ContextType, RequireFields<QueryEth_hatDetailsChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatEligibilityChangedEvent?: Resolver<Maybe<ResolversTypes['Eth_HatEligibilityChangedEvent']>, ParentType, ContextType, RequireFields<QueryEth_hatEligibilityChangedEventArgs, 'id' | 'subgraphError'>>;
  Eth_hatEligibilityChangedEvents?: Resolver<Array<ResolversTypes['Eth_HatEligibilityChangedEvent']>, ParentType, ContextType, RequireFields<QueryEth_hatEligibilityChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatToggleChangedEvent?: Resolver<Maybe<ResolversTypes['Eth_HatToggleChangedEvent']>, ParentType, ContextType, RequireFields<QueryEth_hatToggleChangedEventArgs, 'id' | 'subgraphError'>>;
  Eth_hatToggleChangedEvents?: Resolver<Array<ResolversTypes['Eth_HatToggleChangedEvent']>, ParentType, ContextType, RequireFields<QueryEth_hatToggleChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatMutabilityChangedEvent?: Resolver<Maybe<ResolversTypes['Eth_HatMutabilityChangedEvent']>, ParentType, ContextType, RequireFields<QueryEth_hatMutabilityChangedEventArgs, 'id' | 'subgraphError'>>;
  Eth_hatMutabilityChangedEvents?: Resolver<Array<ResolversTypes['Eth_HatMutabilityChangedEvent']>, ParentType, ContextType, RequireFields<QueryEth_hatMutabilityChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatMaxSupplyChangedEvent?: Resolver<Maybe<ResolversTypes['Eth_HatMaxSupplyChangedEvent']>, ParentType, ContextType, RequireFields<QueryEth_hatMaxSupplyChangedEventArgs, 'id' | 'subgraphError'>>;
  Eth_hatMaxSupplyChangedEvents?: Resolver<Array<ResolversTypes['Eth_HatMaxSupplyChangedEvent']>, ParentType, ContextType, RequireFields<QueryEth_hatMaxSupplyChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatImageURIChangedEvent?: Resolver<Maybe<ResolversTypes['Eth_HatImageURIChangedEvent']>, ParentType, ContextType, RequireFields<QueryEth_hatImageURIChangedEventArgs, 'id' | 'subgraphError'>>;
  Eth_hatImageURIChangedEvents?: Resolver<Array<ResolversTypes['Eth_HatImageURIChangedEvent']>, ParentType, ContextType, RequireFields<QueryEth_hatImageURIChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_topHatLinkRequestedEvent?: Resolver<Maybe<ResolversTypes['Eth_TopHatLinkRequestedEvent']>, ParentType, ContextType, RequireFields<QueryEth_topHatLinkRequestedEventArgs, 'id' | 'subgraphError'>>;
  Eth_topHatLinkRequestedEvents?: Resolver<Array<ResolversTypes['Eth_TopHatLinkRequestedEvent']>, ParentType, ContextType, RequireFields<QueryEth_topHatLinkRequestedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_topHatLinkedEvent?: Resolver<Maybe<ResolversTypes['Eth_TopHatLinkedEvent']>, ParentType, ContextType, RequireFields<QueryEth_topHatLinkedEventArgs, 'id' | 'subgraphError'>>;
  Eth_topHatLinkedEvents?: Resolver<Array<ResolversTypes['Eth_TopHatLinkedEvent']>, ParentType, ContextType, RequireFields<QueryEth_topHatLinkedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_wearerStandingChangedEvent?: Resolver<Maybe<ResolversTypes['Eth_WearerStandingChangedEvent']>, ParentType, ContextType, RequireFields<QueryEth_wearerStandingChangedEventArgs, 'id' | 'subgraphError'>>;
  Eth_wearerStandingChangedEvents?: Resolver<Array<ResolversTypes['Eth_WearerStandingChangedEvent']>, ParentType, ContextType, RequireFields<QueryEth_wearerStandingChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_claimsHatter?: Resolver<Maybe<ResolversTypes['Eth_ClaimsHatter']>, ParentType, ContextType, RequireFields<QueryEth_claimsHatterArgs, 'id' | 'subgraphError'>>;
  Eth_claimsHatters?: Resolver<Array<ResolversTypes['Eth_ClaimsHatter']>, ParentType, ContextType, RequireFields<QueryEth_claimsHattersArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatsEvent?: Resolver<Maybe<ResolversTypes['Eth_HatsEvent']>, ParentType, ContextType, RequireFields<QueryEth_hatsEventArgs, 'id' | 'subgraphError'>>;
  Eth_hatsEvents?: Resolver<Array<ResolversTypes['Eth_HatsEvent']>, ParentType, ContextType, RequireFields<QueryEth_hatsEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  Eth_hatAuthority?: SubscriptionResolver<Maybe<ResolversTypes['Eth_HatAuthority']>, "Eth_hatAuthority", ParentType, ContextType, RequireFields<SubscriptionEth_hatAuthorityArgs, 'id' | 'subgraphError'>>;
  Eth_hatAuthorities?: SubscriptionResolver<Array<ResolversTypes['Eth_HatAuthority']>, "Eth_hatAuthorities", ParentType, ContextType, RequireFields<SubscriptionEth_hatAuthoritiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatsSignerGate?: SubscriptionResolver<Maybe<ResolversTypes['Eth_HatsSignerGate']>, "Eth_hatsSignerGate", ParentType, ContextType, RequireFields<SubscriptionEth_hatsSignerGateArgs, 'id' | 'subgraphError'>>;
  Eth_hatsSignerGates?: SubscriptionResolver<Array<ResolversTypes['Eth_HatsSignerGate']>, "Eth_hatsSignerGates", ParentType, ContextType, RequireFields<SubscriptionEth_hatsSignerGatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_jokeRaceEligibility?: SubscriptionResolver<Maybe<ResolversTypes['Eth_JokeRaceEligibility']>, "Eth_jokeRaceEligibility", ParentType, ContextType, RequireFields<SubscriptionEth_jokeRaceEligibilityArgs, 'id' | 'subgraphError'>>;
  Eth_jokeRaceEligibilities?: SubscriptionResolver<Array<ResolversTypes['Eth_JokeRaceEligibility']>, "Eth_jokeRaceEligibilities", ParentType, ContextType, RequireFields<SubscriptionEth_jokeRaceEligibilitiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_allowListEligibility?: SubscriptionResolver<Maybe<ResolversTypes['Eth_AllowListEligibility']>, "Eth_allowListEligibility", ParentType, ContextType, RequireFields<SubscriptionEth_allowListEligibilityArgs, 'id' | 'subgraphError'>>;
  Eth_allowListEligibilities?: SubscriptionResolver<Array<ResolversTypes['Eth_AllowListEligibility']>, "Eth_allowListEligibilities", ParentType, ContextType, RequireFields<SubscriptionEth_allowListEligibilitiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatsElectionEligibility?: SubscriptionResolver<Maybe<ResolversTypes['Eth_HatsElectionEligibility']>, "Eth_hatsElectionEligibility", ParentType, ContextType, RequireFields<SubscriptionEth_hatsElectionEligibilityArgs, 'id' | 'subgraphError'>>;
  Eth_hatsElectionEligibilities?: SubscriptionResolver<Array<ResolversTypes['Eth_HatsElectionEligibility']>, "Eth_hatsElectionEligibilities", ParentType, ContextType, RequireFields<SubscriptionEth_hatsElectionEligibilitiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_electionTerm?: SubscriptionResolver<Maybe<ResolversTypes['Eth_ElectionTerm']>, "Eth_electionTerm", ParentType, ContextType, RequireFields<SubscriptionEth_electionTermArgs, 'id' | 'subgraphError'>>;
  Eth_electionTerms?: SubscriptionResolver<Array<ResolversTypes['Eth_ElectionTerm']>, "Eth_electionTerms", ParentType, ContextType, RequireFields<SubscriptionEth_electionTermsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_passthroughModule?: SubscriptionResolver<Maybe<ResolversTypes['Eth_PassthroughModule']>, "Eth_passthroughModule", ParentType, ContextType, RequireFields<SubscriptionEth_passthroughModuleArgs, 'id' | 'subgraphError'>>;
  Eth_passthroughModules?: SubscriptionResolver<Array<ResolversTypes['Eth_PassthroughModule']>, "Eth_passthroughModules", ParentType, ContextType, RequireFields<SubscriptionEth_passthroughModulesArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_stakingEligibility?: SubscriptionResolver<Maybe<ResolversTypes['Eth_StakingEligibility']>, "Eth_stakingEligibility", ParentType, ContextType, RequireFields<SubscriptionEth_stakingEligibilityArgs, 'id' | 'subgraphError'>>;
  Eth_stakingEligibilities?: SubscriptionResolver<Array<ResolversTypes['Eth_StakingEligibility']>, "Eth_stakingEligibilities", ParentType, ContextType, RequireFields<SubscriptionEth_stakingEligibilitiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_seasonToggle?: SubscriptionResolver<Maybe<ResolversTypes['Eth_SeasonToggle']>, "Eth_seasonToggle", ParentType, ContextType, RequireFields<SubscriptionEth_seasonToggleArgs, 'id' | 'subgraphError'>>;
  Eth_seasonToggles?: SubscriptionResolver<Array<ResolversTypes['Eth_SeasonToggle']>, "Eth_seasonToggles", ParentType, ContextType, RequireFields<SubscriptionEth_seasonTogglesArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_characterSheetsLevelEligibility?: SubscriptionResolver<Maybe<ResolversTypes['Eth_CharacterSheetsLevelEligibility']>, "Eth_characterSheetsLevelEligibility", ParentType, ContextType, RequireFields<SubscriptionEth_characterSheetsLevelEligibilityArgs, 'id' | 'subgraphError'>>;
  Eth_characterSheetsLevelEligibilities?: SubscriptionResolver<Array<ResolversTypes['Eth_CharacterSheetsLevelEligibility']>, "Eth_characterSheetsLevelEligibilities", ParentType, ContextType, RequireFields<SubscriptionEth_characterSheetsLevelEligibilitiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_agreementEligibility?: SubscriptionResolver<Maybe<ResolversTypes['Eth_AgreementEligibility']>, "Eth_agreementEligibility", ParentType, ContextType, RequireFields<SubscriptionEth_agreementEligibilityArgs, 'id' | 'subgraphError'>>;
  Eth_agreementEligibilities?: SubscriptionResolver<Array<ResolversTypes['Eth_AgreementEligibility']>, "Eth_agreementEligibilities", ParentType, ContextType, RequireFields<SubscriptionEth_agreementEligibilitiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_agreement?: SubscriptionResolver<Maybe<ResolversTypes['Eth_Agreement']>, "Eth_agreement", ParentType, ContextType, RequireFields<SubscriptionEth_agreementArgs, 'id' | 'subgraphError'>>;
  Eth_agreements?: SubscriptionResolver<Array<ResolversTypes['Eth_Agreement']>, "Eth_agreements", ParentType, ContextType, RequireFields<SubscriptionEth_agreementsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatsAccount1OfN?: SubscriptionResolver<Maybe<ResolversTypes['Eth_HatsAccount1ofN']>, "Eth_hatsAccount1OfN", ParentType, ContextType, RequireFields<SubscriptionEth_hatsAccount1OfNArgs, 'id' | 'subgraphError'>>;
  Eth_hatsAccount1OfNs?: SubscriptionResolver<Array<ResolversTypes['Eth_HatsAccount1ofN']>, "Eth_hatsAccount1OfNs", ParentType, ContextType, RequireFields<SubscriptionEth_hatsAccount1OfNsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatsAccount1OfNOperation?: SubscriptionResolver<Maybe<ResolversTypes['Eth_HatsAccount1ofNOperation']>, "Eth_hatsAccount1OfNOperation", ParentType, ContextType, RequireFields<SubscriptionEth_hatsAccount1OfNOperationArgs, 'id' | 'subgraphError'>>;
  Eth_hatsAccount1OfNOperations?: SubscriptionResolver<Array<ResolversTypes['Eth_HatsAccount1ofNOperation']>, "Eth_hatsAccount1OfNOperations", ParentType, ContextType, RequireFields<SubscriptionEth_hatsAccount1OfNOperationsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth__meta?: SubscriptionResolver<Maybe<ResolversTypes['Eth__Meta_']>, "Eth__meta", ParentType, ContextType, Partial<SubscriptionEth__metaArgs>>;
  Eth_hat?: SubscriptionResolver<Maybe<ResolversTypes['Eth_Hat']>, "Eth_hat", ParentType, ContextType, RequireFields<SubscriptionEth_hatArgs, 'id' | 'subgraphError'>>;
  Eth_hats?: SubscriptionResolver<Array<ResolversTypes['Eth_Hat']>, "Eth_hats", ParentType, ContextType, RequireFields<SubscriptionEth_hatsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_wearer?: SubscriptionResolver<Maybe<ResolversTypes['Eth_Wearer']>, "Eth_wearer", ParentType, ContextType, RequireFields<SubscriptionEth_wearerArgs, 'id' | 'subgraphError'>>;
  Eth_wearers?: SubscriptionResolver<Array<ResolversTypes['Eth_Wearer']>, "Eth_wearers", ParentType, ContextType, RequireFields<SubscriptionEth_wearersArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_tree?: SubscriptionResolver<Maybe<ResolversTypes['Eth_Tree']>, "Eth_tree", ParentType, ContextType, RequireFields<SubscriptionEth_treeArgs, 'id' | 'subgraphError'>>;
  Eth_trees?: SubscriptionResolver<Array<ResolversTypes['Eth_Tree']>, "Eth_trees", ParentType, ContextType, RequireFields<SubscriptionEth_treesArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatCreatedEvent?: SubscriptionResolver<Maybe<ResolversTypes['Eth_HatCreatedEvent']>, "Eth_hatCreatedEvent", ParentType, ContextType, RequireFields<SubscriptionEth_hatCreatedEventArgs, 'id' | 'subgraphError'>>;
  Eth_hatCreatedEvents?: SubscriptionResolver<Array<ResolversTypes['Eth_HatCreatedEvent']>, "Eth_hatCreatedEvents", ParentType, ContextType, RequireFields<SubscriptionEth_hatCreatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatMintedEvent?: SubscriptionResolver<Maybe<ResolversTypes['Eth_HatMintedEvent']>, "Eth_hatMintedEvent", ParentType, ContextType, RequireFields<SubscriptionEth_hatMintedEventArgs, 'id' | 'subgraphError'>>;
  Eth_hatMintedEvents?: SubscriptionResolver<Array<ResolversTypes['Eth_HatMintedEvent']>, "Eth_hatMintedEvents", ParentType, ContextType, RequireFields<SubscriptionEth_hatMintedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatBurnedEvent?: SubscriptionResolver<Maybe<ResolversTypes['Eth_HatBurnedEvent']>, "Eth_hatBurnedEvent", ParentType, ContextType, RequireFields<SubscriptionEth_hatBurnedEventArgs, 'id' | 'subgraphError'>>;
  Eth_hatBurnedEvents?: SubscriptionResolver<Array<ResolversTypes['Eth_HatBurnedEvent']>, "Eth_hatBurnedEvents", ParentType, ContextType, RequireFields<SubscriptionEth_hatBurnedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatStatusChangedEvent?: SubscriptionResolver<Maybe<ResolversTypes['Eth_HatStatusChangedEvent']>, "Eth_hatStatusChangedEvent", ParentType, ContextType, RequireFields<SubscriptionEth_hatStatusChangedEventArgs, 'id' | 'subgraphError'>>;
  Eth_hatStatusChangedEvents?: SubscriptionResolver<Array<ResolversTypes['Eth_HatStatusChangedEvent']>, "Eth_hatStatusChangedEvents", ParentType, ContextType, RequireFields<SubscriptionEth_hatStatusChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatDetailsChangedEvent?: SubscriptionResolver<Maybe<ResolversTypes['Eth_HatDetailsChangedEvent']>, "Eth_hatDetailsChangedEvent", ParentType, ContextType, RequireFields<SubscriptionEth_hatDetailsChangedEventArgs, 'id' | 'subgraphError'>>;
  Eth_hatDetailsChangedEvents?: SubscriptionResolver<Array<ResolversTypes['Eth_HatDetailsChangedEvent']>, "Eth_hatDetailsChangedEvents", ParentType, ContextType, RequireFields<SubscriptionEth_hatDetailsChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatEligibilityChangedEvent?: SubscriptionResolver<Maybe<ResolversTypes['Eth_HatEligibilityChangedEvent']>, "Eth_hatEligibilityChangedEvent", ParentType, ContextType, RequireFields<SubscriptionEth_hatEligibilityChangedEventArgs, 'id' | 'subgraphError'>>;
  Eth_hatEligibilityChangedEvents?: SubscriptionResolver<Array<ResolversTypes['Eth_HatEligibilityChangedEvent']>, "Eth_hatEligibilityChangedEvents", ParentType, ContextType, RequireFields<SubscriptionEth_hatEligibilityChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatToggleChangedEvent?: SubscriptionResolver<Maybe<ResolversTypes['Eth_HatToggleChangedEvent']>, "Eth_hatToggleChangedEvent", ParentType, ContextType, RequireFields<SubscriptionEth_hatToggleChangedEventArgs, 'id' | 'subgraphError'>>;
  Eth_hatToggleChangedEvents?: SubscriptionResolver<Array<ResolversTypes['Eth_HatToggleChangedEvent']>, "Eth_hatToggleChangedEvents", ParentType, ContextType, RequireFields<SubscriptionEth_hatToggleChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatMutabilityChangedEvent?: SubscriptionResolver<Maybe<ResolversTypes['Eth_HatMutabilityChangedEvent']>, "Eth_hatMutabilityChangedEvent", ParentType, ContextType, RequireFields<SubscriptionEth_hatMutabilityChangedEventArgs, 'id' | 'subgraphError'>>;
  Eth_hatMutabilityChangedEvents?: SubscriptionResolver<Array<ResolversTypes['Eth_HatMutabilityChangedEvent']>, "Eth_hatMutabilityChangedEvents", ParentType, ContextType, RequireFields<SubscriptionEth_hatMutabilityChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatMaxSupplyChangedEvent?: SubscriptionResolver<Maybe<ResolversTypes['Eth_HatMaxSupplyChangedEvent']>, "Eth_hatMaxSupplyChangedEvent", ParentType, ContextType, RequireFields<SubscriptionEth_hatMaxSupplyChangedEventArgs, 'id' | 'subgraphError'>>;
  Eth_hatMaxSupplyChangedEvents?: SubscriptionResolver<Array<ResolversTypes['Eth_HatMaxSupplyChangedEvent']>, "Eth_hatMaxSupplyChangedEvents", ParentType, ContextType, RequireFields<SubscriptionEth_hatMaxSupplyChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatImageURIChangedEvent?: SubscriptionResolver<Maybe<ResolversTypes['Eth_HatImageURIChangedEvent']>, "Eth_hatImageURIChangedEvent", ParentType, ContextType, RequireFields<SubscriptionEth_hatImageURIChangedEventArgs, 'id' | 'subgraphError'>>;
  Eth_hatImageURIChangedEvents?: SubscriptionResolver<Array<ResolversTypes['Eth_HatImageURIChangedEvent']>, "Eth_hatImageURIChangedEvents", ParentType, ContextType, RequireFields<SubscriptionEth_hatImageURIChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_topHatLinkRequestedEvent?: SubscriptionResolver<Maybe<ResolversTypes['Eth_TopHatLinkRequestedEvent']>, "Eth_topHatLinkRequestedEvent", ParentType, ContextType, RequireFields<SubscriptionEth_topHatLinkRequestedEventArgs, 'id' | 'subgraphError'>>;
  Eth_topHatLinkRequestedEvents?: SubscriptionResolver<Array<ResolversTypes['Eth_TopHatLinkRequestedEvent']>, "Eth_topHatLinkRequestedEvents", ParentType, ContextType, RequireFields<SubscriptionEth_topHatLinkRequestedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_topHatLinkedEvent?: SubscriptionResolver<Maybe<ResolversTypes['Eth_TopHatLinkedEvent']>, "Eth_topHatLinkedEvent", ParentType, ContextType, RequireFields<SubscriptionEth_topHatLinkedEventArgs, 'id' | 'subgraphError'>>;
  Eth_topHatLinkedEvents?: SubscriptionResolver<Array<ResolversTypes['Eth_TopHatLinkedEvent']>, "Eth_topHatLinkedEvents", ParentType, ContextType, RequireFields<SubscriptionEth_topHatLinkedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_wearerStandingChangedEvent?: SubscriptionResolver<Maybe<ResolversTypes['Eth_WearerStandingChangedEvent']>, "Eth_wearerStandingChangedEvent", ParentType, ContextType, RequireFields<SubscriptionEth_wearerStandingChangedEventArgs, 'id' | 'subgraphError'>>;
  Eth_wearerStandingChangedEvents?: SubscriptionResolver<Array<ResolversTypes['Eth_WearerStandingChangedEvent']>, "Eth_wearerStandingChangedEvents", ParentType, ContextType, RequireFields<SubscriptionEth_wearerStandingChangedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_claimsHatter?: SubscriptionResolver<Maybe<ResolversTypes['Eth_ClaimsHatter']>, "Eth_claimsHatter", ParentType, ContextType, RequireFields<SubscriptionEth_claimsHatterArgs, 'id' | 'subgraphError'>>;
  Eth_claimsHatters?: SubscriptionResolver<Array<ResolversTypes['Eth_ClaimsHatter']>, "Eth_claimsHatters", ParentType, ContextType, RequireFields<SubscriptionEth_claimsHattersArgs, 'skip' | 'first' | 'subgraphError'>>;
  Eth_hatsEvent?: SubscriptionResolver<Maybe<ResolversTypes['Eth_HatsEvent']>, "Eth_hatsEvent", ParentType, ContextType, RequireFields<SubscriptionEth_hatsEventArgs, 'id' | 'subgraphError'>>;
  Eth_hatsEvents?: SubscriptionResolver<Array<ResolversTypes['Eth_HatsEvent']>, "Eth_hatsEvents", ParentType, ContextType, RequireFields<SubscriptionEth_hatsEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
}>;

export type Eth_AgreementResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_Agreement'] = ResolversParentTypes['Eth_Agreement']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  agreementEligibility?: Resolver<ResolversTypes['Eth_AgreementEligibility'], ParentType, ContextType>;
  agreement?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  signers?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  graceEndTime?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_AgreementEligibilityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_AgreementEligibility'] = ResolversParentTypes['Eth_AgreementEligibility']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  hatId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownerHat?: Resolver<ResolversTypes['Eth_HatAuthority'], ParentType, ContextType>;
  arbitratorHat?: Resolver<ResolversTypes['Eth_HatAuthority'], ParentType, ContextType>;
  currentAgreement?: Resolver<ResolversTypes['Eth_Agreement'], ParentType, ContextType>;
  currentAgreementNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  agreements?: Resolver<Array<ResolversTypes['Eth_Agreement']>, ParentType, ContextType, RequireFields<Eth_AgreementEligibilityagreementsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_AllowListEligibilityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_AllowListEligibility'] = ResolversParentTypes['Eth_AllowListEligibility']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  hatId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownerHat?: Resolver<ResolversTypes['Eth_HatAuthority'], ParentType, ContextType>;
  arbitratorHat?: Resolver<ResolversTypes['Eth_HatAuthority'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface Eth_BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Eth_BigDecimal'], any> {
  name: 'Eth_BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface Eth_BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Eth_Bytes'], any> {
  name: 'Eth_Bytes';
}

export type Eth_CharacterSheetsLevelEligibilityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_CharacterSheetsLevelEligibility'] = ResolversParentTypes['Eth_CharacterSheetsLevelEligibility']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  hatId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hatAdmins?: Resolver<Array<ResolversTypes['Eth_HatAuthority']>, ParentType, ContextType, RequireFields<Eth_CharacterSheetsLevelEligibilityhatAdminsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_ElectionTermResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_ElectionTerm'] = ResolversParentTypes['Eth_ElectionTerm']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  hatsElectionEligibility?: Resolver<ResolversTypes['Eth_HatsElectionEligibility'], ParentType, ContextType>;
  termStartedAt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  termEnd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  electionCompletedAt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  electedAccounts?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_HatAuthorityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_HatAuthority'] = ResolversParentTypes['Eth_HatAuthority']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  primaryHatsAccount1ofNAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hatsAccount1ofN?: Resolver<Array<ResolversTypes['Eth_HatsAccount1ofN']>, ParentType, ContextType, RequireFields<Eth_HatAuthorityhatsAccount1ofNArgs, 'skip' | 'first'>>;
  hsgOwner?: Resolver<Array<ResolversTypes['Eth_HatsSignerGate']>, ParentType, ContextType, RequireFields<Eth_HatAuthorityhsgOwnerArgs, 'skip' | 'first'>>;
  hsgSigner?: Resolver<Array<ResolversTypes['Eth_HatsSignerGate']>, ParentType, ContextType, RequireFields<Eth_HatAuthorityhsgSignerArgs, 'skip' | 'first'>>;
  jokeraceAdmin?: Resolver<Array<ResolversTypes['Eth_JokeRaceEligibility']>, ParentType, ContextType, RequireFields<Eth_HatAuthorityjokeraceAdminArgs, 'skip' | 'first'>>;
  allowListOwner?: Resolver<Array<ResolversTypes['Eth_AllowListEligibility']>, ParentType, ContextType, RequireFields<Eth_HatAuthorityallowListOwnerArgs, 'skip' | 'first'>>;
  allowListArbitrator?: Resolver<Array<ResolversTypes['Eth_AllowListEligibility']>, ParentType, ContextType, RequireFields<Eth_HatAuthorityallowListArbitratorArgs, 'skip' | 'first'>>;
  electionsBallotBox?: Resolver<Array<ResolversTypes['Eth_HatsElectionEligibility']>, ParentType, ContextType, RequireFields<Eth_HatAuthorityelectionsBallotBoxArgs, 'skip' | 'first'>>;
  electionsAdmin?: Resolver<Array<ResolversTypes['Eth_HatsElectionEligibility']>, ParentType, ContextType, RequireFields<Eth_HatAuthorityelectionsAdminArgs, 'skip' | 'first'>>;
  eligibilityTogglePassthrough?: Resolver<Array<ResolversTypes['Eth_PassthroughModule']>, ParentType, ContextType, RequireFields<Eth_HatAuthorityeligibilityTogglePassthroughArgs, 'skip' | 'first'>>;
  stakingJudge?: Resolver<Array<ResolversTypes['Eth_StakingEligibility']>, ParentType, ContextType, RequireFields<Eth_HatAuthoritystakingJudgeArgs, 'skip' | 'first'>>;
  stakingRecipient?: Resolver<Array<ResolversTypes['Eth_StakingEligibility']>, ParentType, ContextType, RequireFields<Eth_HatAuthoritystakingRecipientArgs, 'skip' | 'first'>>;
  stakingHatAdmins?: Resolver<Array<ResolversTypes['Eth_StakingEligibility']>, ParentType, ContextType, RequireFields<Eth_HatAuthoritystakingHatAdminsArgs, 'skip' | 'first'>>;
  seasonHatAdmins?: Resolver<Array<ResolversTypes['Eth_SeasonToggle']>, ParentType, ContextType, RequireFields<Eth_HatAuthorityseasonHatAdminsArgs, 'skip' | 'first'>>;
  characterSheetsLevelHatAdmins?: Resolver<Array<ResolversTypes['Eth_CharacterSheetsLevelEligibility']>, ParentType, ContextType, RequireFields<Eth_HatAuthoritycharacterSheetsLevelHatAdminsArgs, 'skip' | 'first'>>;
  agreementOwner?: Resolver<Array<ResolversTypes['Eth_AgreementEligibility']>, ParentType, ContextType, RequireFields<Eth_HatAuthorityagreementOwnerArgs, 'skip' | 'first'>>;
  agreementArbitrator?: Resolver<Array<ResolversTypes['Eth_AgreementEligibility']>, ParentType, ContextType, RequireFields<Eth_HatAuthorityagreementArbitratorArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_HatsAccount1ofNResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_HatsAccount1ofN'] = ResolversParentTypes['Eth_HatsAccount1ofN']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  accountOfHat?: Resolver<ResolversTypes['Eth_HatAuthority'], ParentType, ContextType>;
  operations?: Resolver<Array<ResolversTypes['Eth_HatsAccount1ofNOperation']>, ParentType, ContextType, RequireFields<Eth_HatsAccount1ofNoperationsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_HatsAccount1ofNOperationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_HatsAccount1ofNOperation'] = ResolversParentTypes['Eth_HatsAccount1ofNOperation']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  hatsAccount?: Resolver<ResolversTypes['Eth_HatsAccount1ofN'], ParentType, ContextType>;
  signer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  callData?: Resolver<ResolversTypes['Eth_Bytes'], ParentType, ContextType>;
  operationType?: Resolver<ResolversTypes['Eth_HatsAccountOperationType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_HatsElectionEligibilityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_HatsElectionEligibility'] = ResolversParentTypes['Eth_HatsElectionEligibility']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  hatId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ballotBoxHat?: Resolver<ResolversTypes['Eth_HatAuthority'], ParentType, ContextType>;
  adminHat?: Resolver<Array<ResolversTypes['Eth_HatAuthority']>, ParentType, ContextType, RequireFields<Eth_HatsElectionEligibilityadminHatArgs, 'skip' | 'first'>>;
  terms?: Resolver<Array<ResolversTypes['Eth_ElectionTerm']>, ParentType, ContextType, RequireFields<Eth_HatsElectionEligibilitytermsArgs, 'skip' | 'first'>>;
  currentTerm?: Resolver<Maybe<ResolversTypes['Eth_ElectionTerm']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_HatsSignerGateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_HatsSignerGate'] = ResolversParentTypes['Eth_HatsSignerGate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Eth_HatsSignerGateType'], ParentType, ContextType>;
  ownerHat?: Resolver<ResolversTypes['Eth_HatAuthority'], ParentType, ContextType>;
  signerHats?: Resolver<Array<ResolversTypes['Eth_HatAuthority']>, ParentType, ContextType, RequireFields<Eth_HatsSignerGatesignerHatsArgs, 'skip' | 'first'>>;
  safe?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  minThreshold?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  targetThreshold?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  maxSigners?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface Eth_Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Eth_Int8'], any> {
  name: 'Eth_Int8';
}

export type Eth_JokeRaceEligibilityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_JokeRaceEligibility'] = ResolversParentTypes['Eth_JokeRaceEligibility']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  hatId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  adminHat?: Resolver<Array<ResolversTypes['Eth_HatAuthority']>, ParentType, ContextType, RequireFields<Eth_JokeRaceEligibilityadminHatArgs, 'skip' | 'first'>>;
  currentContest?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currentTermEnd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  currentTopK?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_PassthroughModuleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_PassthroughModule'] = ResolversParentTypes['Eth_PassthroughModule']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  hatId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  passthroughHat?: Resolver<ResolversTypes['Eth_HatAuthority'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_SeasonToggleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_SeasonToggle'] = ResolversParentTypes['Eth_SeasonToggle']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  hatId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hatAdmins?: Resolver<Array<ResolversTypes['Eth_HatAuthority']>, ParentType, ContextType, RequireFields<Eth_SeasonTogglehatAdminsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_StakingEligibilityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_StakingEligibility'] = ResolversParentTypes['Eth_StakingEligibility']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  hatId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  judgeHat?: Resolver<ResolversTypes['Eth_HatAuthority'], ParentType, ContextType>;
  recipientHat?: Resolver<ResolversTypes['Eth_HatAuthority'], ParentType, ContextType>;
  hatAdmins?: Resolver<Array<ResolversTypes['Eth_HatAuthority']>, ParentType, ContextType, RequireFields<Eth_StakingEligibilityhatAdminsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type Eth__Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth__Block_'] = ResolversParentTypes['Eth__Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Eth_Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parentHash?: Resolver<Maybe<ResolversTypes['Eth_Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth__Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth__Meta_'] = ResolversParentTypes['Eth__Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['Eth__Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_ClaimsHatterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_ClaimsHatter'] = ResolversParentTypes['Eth_ClaimsHatter']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  claimableHats?: Resolver<Array<ResolversTypes['Eth_Hat']>, ParentType, ContextType, RequireFields<Eth_ClaimsHatterclaimableHatsArgs, 'skip' | 'first'>>;
  claimableForHats?: Resolver<Array<ResolversTypes['Eth_Hat']>, ParentType, ContextType, RequireFields<Eth_ClaimsHatterclaimableForHatsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_HatResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_Hat'] = ResolversParentTypes['Eth_Hat']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  prettyId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  details?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maxSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  eligibility?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toggle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mutable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  imageUri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  levelAtLocalTree?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  currentSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tree?: Resolver<ResolversTypes['Eth_Tree'], ParentType, ContextType>;
  wearers?: Resolver<Array<ResolversTypes['Eth_Wearer']>, ParentType, ContextType, RequireFields<Eth_HatwearersArgs, 'skip' | 'first'>>;
  admin?: Resolver<ResolversTypes['Eth_Hat'], ParentType, ContextType>;
  badStandings?: Resolver<Array<ResolversTypes['Eth_Wearer']>, ParentType, ContextType, RequireFields<Eth_HatbadStandingsArgs, 'skip' | 'first'>>;
  claimableBy?: Resolver<Array<ResolversTypes['Eth_ClaimsHatter']>, ParentType, ContextType, RequireFields<Eth_HatclaimableByArgs, 'skip' | 'first'>>;
  claimableForBy?: Resolver<Array<ResolversTypes['Eth_ClaimsHatter']>, ParentType, ContextType, RequireFields<Eth_HatclaimableForByArgs, 'skip' | 'first'>>;
  linkRequestFromTree?: Resolver<Array<ResolversTypes['Eth_Tree']>, ParentType, ContextType, RequireFields<Eth_HatlinkRequestFromTreeArgs, 'skip' | 'first'>>;
  subHats?: Resolver<Array<ResolversTypes['Eth_Hat']>, ParentType, ContextType, RequireFields<Eth_HatsubHatsArgs, 'skip' | 'first'>>;
  linkedTrees?: Resolver<Array<ResolversTypes['Eth_Tree']>, ParentType, ContextType, RequireFields<Eth_HatlinkedTreesArgs, 'skip' | 'first'>>;
  events?: Resolver<Array<ResolversTypes['Eth_HatsEvent']>, ParentType, ContextType, RequireFields<Eth_HateventsArgs, 'skip' | 'first'>>;
  detailsMetadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorities?: Resolver<ResolversTypes['Eth_HatAuthority'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_HatBurnedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_HatBurnedEvent'] = ResolversParentTypes['Eth_HatBurnedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tree?: Resolver<ResolversTypes['Eth_Tree'], ParentType, ContextType>;
  hat?: Resolver<ResolversTypes['Eth_Hat'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Eth_Bytes'], ParentType, ContextType>;
  wearer?: Resolver<ResolversTypes['Eth_Wearer'], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_HatCreatedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_HatCreatedEvent'] = ResolversParentTypes['Eth_HatCreatedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tree?: Resolver<ResolversTypes['Eth_Tree'], ParentType, ContextType>;
  hat?: Resolver<ResolversTypes['Eth_Hat'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Eth_Bytes'], ParentType, ContextType>;
  hatDetails?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hatMaxSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  hatEligibility?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hatToggle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hatMutable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hatImageUri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_HatDetailsChangedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_HatDetailsChangedEvent'] = ResolversParentTypes['Eth_HatDetailsChangedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tree?: Resolver<ResolversTypes['Eth_Tree'], ParentType, ContextType>;
  hat?: Resolver<ResolversTypes['Eth_Hat'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Eth_Bytes'], ParentType, ContextType>;
  hatNewDetails?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_HatEligibilityChangedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_HatEligibilityChangedEvent'] = ResolversParentTypes['Eth_HatEligibilityChangedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tree?: Resolver<ResolversTypes['Eth_Tree'], ParentType, ContextType>;
  hat?: Resolver<ResolversTypes['Eth_Hat'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Eth_Bytes'], ParentType, ContextType>;
  hatNewEligibility?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_HatImageURIChangedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_HatImageURIChangedEvent'] = ResolversParentTypes['Eth_HatImageURIChangedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tree?: Resolver<ResolversTypes['Eth_Tree'], ParentType, ContextType>;
  hat?: Resolver<ResolversTypes['Eth_Hat'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Eth_Bytes'], ParentType, ContextType>;
  hatNewImageURI?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_HatMaxSupplyChangedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_HatMaxSupplyChangedEvent'] = ResolversParentTypes['Eth_HatMaxSupplyChangedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tree?: Resolver<ResolversTypes['Eth_Tree'], ParentType, ContextType>;
  hat?: Resolver<ResolversTypes['Eth_Hat'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Eth_Bytes'], ParentType, ContextType>;
  hatNewMaxSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_HatMintedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_HatMintedEvent'] = ResolversParentTypes['Eth_HatMintedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tree?: Resolver<ResolversTypes['Eth_Tree'], ParentType, ContextType>;
  hat?: Resolver<ResolversTypes['Eth_Hat'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Eth_Bytes'], ParentType, ContextType>;
  wearer?: Resolver<ResolversTypes['Eth_Wearer'], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_HatMutabilityChangedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_HatMutabilityChangedEvent'] = ResolversParentTypes['Eth_HatMutabilityChangedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tree?: Resolver<ResolversTypes['Eth_Tree'], ParentType, ContextType>;
  hat?: Resolver<ResolversTypes['Eth_Hat'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Eth_Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_HatStatusChangedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_HatStatusChangedEvent'] = ResolversParentTypes['Eth_HatStatusChangedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tree?: Resolver<ResolversTypes['Eth_Tree'], ParentType, ContextType>;
  hat?: Resolver<ResolversTypes['Eth_Hat'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Eth_Bytes'], ParentType, ContextType>;
  hatNewStatus?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_HatToggleChangedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_HatToggleChangedEvent'] = ResolversParentTypes['Eth_HatToggleChangedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tree?: Resolver<ResolversTypes['Eth_Tree'], ParentType, ContextType>;
  hat?: Resolver<ResolversTypes['Eth_Hat'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Eth_Bytes'], ParentType, ContextType>;
  hatNewToggle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_HatsEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_HatsEvent'] = ResolversParentTypes['Eth_HatsEvent']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Eth_HatBurnedEvent' | 'Eth_HatCreatedEvent' | 'Eth_HatDetailsChangedEvent' | 'Eth_HatEligibilityChangedEvent' | 'Eth_HatImageURIChangedEvent' | 'Eth_HatMaxSupplyChangedEvent' | 'Eth_HatMintedEvent' | 'Eth_HatMutabilityChangedEvent' | 'Eth_HatStatusChangedEvent' | 'Eth_HatToggleChangedEvent' | 'Eth_TopHatLinkRequestedEvent' | 'Eth_TopHatLinkedEvent' | 'Eth_WearerStandingChangedEvent', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tree?: Resolver<ResolversTypes['Eth_Tree'], ParentType, ContextType>;
  hat?: Resolver<ResolversTypes['Eth_Hat'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Eth_Bytes'], ParentType, ContextType>;
}>;

export type Eth_TopHatLinkRequestedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_TopHatLinkRequestedEvent'] = ResolversParentTypes['Eth_TopHatLinkRequestedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tree?: Resolver<ResolversTypes['Eth_Tree'], ParentType, ContextType>;
  hat?: Resolver<ResolversTypes['Eth_Hat'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Eth_Bytes'], ParentType, ContextType>;
  newAdmin?: Resolver<ResolversTypes['Eth_Hat'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_TopHatLinkedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_TopHatLinkedEvent'] = ResolversParentTypes['Eth_TopHatLinkedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tree?: Resolver<ResolversTypes['Eth_Tree'], ParentType, ContextType>;
  hat?: Resolver<ResolversTypes['Eth_Hat'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Eth_Bytes'], ParentType, ContextType>;
  newAdmin?: Resolver<ResolversTypes['Eth_Hat'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_TreeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_Tree'] = ResolversParentTypes['Eth_Tree']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  childOfTree?: Resolver<Maybe<ResolversTypes['Eth_Tree']>, ParentType, ContextType>;
  linkedToHat?: Resolver<Maybe<ResolversTypes['Eth_Hat']>, ParentType, ContextType>;
  requestedLinkToTree?: Resolver<Maybe<ResolversTypes['Eth_Tree']>, ParentType, ContextType>;
  requestedLinkToHat?: Resolver<Maybe<ResolversTypes['Eth_Hat']>, ParentType, ContextType>;
  linkRequestFromTree?: Resolver<Array<ResolversTypes['Eth_Tree']>, ParentType, ContextType, RequireFields<Eth_TreelinkRequestFromTreeArgs, 'skip' | 'first'>>;
  hats?: Resolver<Array<ResolversTypes['Eth_Hat']>, ParentType, ContextType, RequireFields<Eth_TreehatsArgs, 'skip' | 'first'>>;
  parentOfTrees?: Resolver<Array<ResolversTypes['Eth_Tree']>, ParentType, ContextType, RequireFields<Eth_TreeparentOfTreesArgs, 'skip' | 'first'>>;
  events?: Resolver<Array<ResolversTypes['Eth_HatsEvent']>, ParentType, ContextType, RequireFields<Eth_TreeeventsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_WearerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_Wearer'] = ResolversParentTypes['Eth_Wearer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  currentHats?: Resolver<Array<ResolversTypes['Eth_Hat']>, ParentType, ContextType, RequireFields<Eth_WearercurrentHatsArgs, 'skip' | 'first'>>;
  mintEvent?: Resolver<Array<ResolversTypes['Eth_HatMintedEvent']>, ParentType, ContextType, RequireFields<Eth_WearermintEventArgs, 'skip' | 'first'>>;
  burnEvent?: Resolver<Array<ResolversTypes['Eth_HatBurnedEvent']>, ParentType, ContextType, RequireFields<Eth_WearerburnEventArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Eth_WearerStandingChangedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Eth_WearerStandingChangedEvent'] = ResolversParentTypes['Eth_WearerStandingChangedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tree?: Resolver<ResolversTypes['Eth_Tree'], ParentType, ContextType>;
  hat?: Resolver<ResolversTypes['Eth_Hat'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Eth_Bytes'], ParentType, ContextType>;
  wearer?: Resolver<ResolversTypes['Eth_Wearer'], ParentType, ContextType>;
  wearerStanding?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Eth_Agreement?: Eth_AgreementResolvers<ContextType>;
  Eth_AgreementEligibility?: Eth_AgreementEligibilityResolvers<ContextType>;
  Eth_AllowListEligibility?: Eth_AllowListEligibilityResolvers<ContextType>;
  Eth_BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Eth_Bytes?: GraphQLScalarType;
  Eth_CharacterSheetsLevelEligibility?: Eth_CharacterSheetsLevelEligibilityResolvers<ContextType>;
  Eth_ElectionTerm?: Eth_ElectionTermResolvers<ContextType>;
  Eth_HatAuthority?: Eth_HatAuthorityResolvers<ContextType>;
  Eth_HatsAccount1ofN?: Eth_HatsAccount1ofNResolvers<ContextType>;
  Eth_HatsAccount1ofNOperation?: Eth_HatsAccount1ofNOperationResolvers<ContextType>;
  Eth_HatsElectionEligibility?: Eth_HatsElectionEligibilityResolvers<ContextType>;
  Eth_HatsSignerGate?: Eth_HatsSignerGateResolvers<ContextType>;
  Eth_Int8?: GraphQLScalarType;
  Eth_JokeRaceEligibility?: Eth_JokeRaceEligibilityResolvers<ContextType>;
  Eth_PassthroughModule?: Eth_PassthroughModuleResolvers<ContextType>;
  Eth_SeasonToggle?: Eth_SeasonToggleResolvers<ContextType>;
  Eth_StakingEligibility?: Eth_StakingEligibilityResolvers<ContextType>;
  Timestamp?: GraphQLScalarType;
  Eth__Block_?: Eth__Block_Resolvers<ContextType>;
  Eth__Meta_?: Eth__Meta_Resolvers<ContextType>;
  Eth_ClaimsHatter?: Eth_ClaimsHatterResolvers<ContextType>;
  Eth_Hat?: Eth_HatResolvers<ContextType>;
  Eth_HatBurnedEvent?: Eth_HatBurnedEventResolvers<ContextType>;
  Eth_HatCreatedEvent?: Eth_HatCreatedEventResolvers<ContextType>;
  Eth_HatDetailsChangedEvent?: Eth_HatDetailsChangedEventResolvers<ContextType>;
  Eth_HatEligibilityChangedEvent?: Eth_HatEligibilityChangedEventResolvers<ContextType>;
  Eth_HatImageURIChangedEvent?: Eth_HatImageURIChangedEventResolvers<ContextType>;
  Eth_HatMaxSupplyChangedEvent?: Eth_HatMaxSupplyChangedEventResolvers<ContextType>;
  Eth_HatMintedEvent?: Eth_HatMintedEventResolvers<ContextType>;
  Eth_HatMutabilityChangedEvent?: Eth_HatMutabilityChangedEventResolvers<ContextType>;
  Eth_HatStatusChangedEvent?: Eth_HatStatusChangedEventResolvers<ContextType>;
  Eth_HatToggleChangedEvent?: Eth_HatToggleChangedEventResolvers<ContextType>;
  Eth_HatsEvent?: Eth_HatsEventResolvers<ContextType>;
  Eth_TopHatLinkRequestedEvent?: Eth_TopHatLinkRequestedEventResolvers<ContextType>;
  Eth_TopHatLinkedEvent?: Eth_TopHatLinkedEventResolvers<ContextType>;
  Eth_Tree?: Eth_TreeResolvers<ContextType>;
  Eth_Wearer?: Eth_WearerResolvers<ContextType>;
  Eth_WearerStandingChangedEvent?: Eth_WearerStandingChangedEventResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = EthereumAncillaryTypes.Context & EthereumMainTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export function getMeshOptions() {
  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
  return findAndParseConfig({
    dir: baseDir,
    artifactsDir: ".mesh",
    configName: "mesh",
    additionalPackagePrefixes: [],
    initialLoggerPrefix: "🕸️  Mesh",
  });
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: undefined,
  })
}

let meshInstance$: Promise<MeshInstance> | undefined;

export const pollingInterval = null;

export function getBuiltMesh(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    if (pollingInterval) {
      setInterval(() => {
        getMeshOptions()
        .then(meshOptions => getMesh(meshOptions))
        .then(newMesh =>
          meshInstance$.then(oldMesh => {
            oldMesh.destroy()
            meshInstance$ = Promise.resolve(newMesh)
          })
        ).catch(err => {
          console.error("Mesh polling failed so the existing version will be used:", err);
        });
      }, pollingInterval)
    }
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));