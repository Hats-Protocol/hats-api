# GraphQL Test Queries

This document contains a collection of GraphQL queries for testing various resolver functionalities in the Hats Protocol API.

## Basic Entity Queries

### Basic Hat Query

```graphql
{
  Eth_hats(first: 5) {
    id
    details
    imageUri
    createdAt
    currentSupply
    maxSupply
  }
}
```

### Basic Wearer Query

```graphql
{
  Eth_wearers(first: 5) {
    id
    currentHats {
      id
    }
  }
}
```

## Identity Resolution

### ENS Name Resolution

```graphql
{
  Op_wearers(where: { id_in: ["0x0b5f5a722ac5e8ecedf4da39a656fe5f1e76b34c"] }) {
    id
    ensName
    isContract
    contractName
  }
}
```

### Contract Detection

```graphql
{
  Eth_hats(first: 5) {
    id
    eligibility
    eligibilityIsContract
    eligibilityContractName
    toggle
    toggleIsContract
    toggleContractName
  }
}
```

## Hat Metadata and Status

### Image Validation

```graphql
{
  Eth_hats(first: 5) {
    id
    imageUri
    isImageValid
    nearestImage
  }
}
```

### Dynamic Status

```graphql
{
  Eth_hats(where: { toggle_not: null }, first: 5) {
    id
    toggle
    dynamicStatus
  }
}
```

### Details Metadata (IPFS)

```graphql
{
  Eth_hats(where: { details_starts_with: "ipfs://" }, first: 5) {
    id
    details
    detailsMetadata
  }
}
```

## Eligibility and Authorities

### Eligible Wearers

```graphql
{
  Eth_hats(first: 3) {
    id
    eligibility
    eligibleWearers
    currentSupply
    maxSupply
  }
}
```

### Authority Structure (All Networks)

```graphql
{
  ethereum: Eth_hats(first: 2) {
    id
    authorities {
      id
      primaryHatsAccount1ofNAddress
      hsgOwner {
        id
      }
      hsgSigner {
        id
      }
    }
  }
  optimism: Op_hats(first: 2) {
    id
    authorities {
      id
      primaryHatsAccount1ofNAddress
      hsgOwner {
        id
      }
      hsgSigner {
        id
      }
    }
  }
  arbitrum: Arb_hats(first: 2) {
    id
    authorities {
      id
      primaryHatsAccount1ofNAddress
      hsgOwner {
        id
      }
      hsgSigner {
        id
      }
    }
  }
  gnosis: Gno_hats(first: 2) {
    id
    authorities {
      id
      primaryHatsAccount1ofNAddress
      hsgOwner {
        id
      }
      hsgSigner {
        id
      }
    }
  }
}
```

## Cross-Chain Queries

### Multi-Chain Hat Comparison

```graphql
{
  ethereum: Eth_hats(first: 2) {
    id
    details
    dynamicStatus
    currentSupply
    eligibleWearers
    detailsMetadata
  }
  optimism: Op_hats(first: 2) {
    id
    details
    dynamicStatus
    currentSupply
    eligibleWearers
    detailsMetadata
  }
  arbitrum: Arb_hats(first: 2) {
    id
    details
    dynamicStatus
    currentSupply
    eligibleWearers
    detailsMetadata
  }
  polygon: Pol_hats(first: 2) {
    id
    details
    dynamicStatus
    currentSupply
    eligibleWearers
    detailsMetadata
  }
}
```

### Cross-Chain Identity Resolution

```graphql
{
  ethereum: Eth_wearers(first: 2) {
    id
    ensName
    isContract
    contractName
  }
  optimism: Op_wearers(first: 2) {
    id
    ensName
    isContract
    contractName
  }
  arbitrum: Arb_wearers(first: 2) {
    id
    ensName
    isContract
    contractName
  }
}
```

## Complex Queries

### Full Hat Details with All Resolver Fields

```graphql
{
  Eth_hats(first: 2) {
    id
    details
    detailsMetadata
    imageUri
    isImageValid
    nearestImage
    maxSupply
    currentSupply
    eligibility
    eligibilityIsContract
    eligibilityContractName
    eligibilityEnsName
    toggle
    toggleIsContract
    toggleContractName
    toggleEnsName
    dynamicStatus
    eligibleWearers
    authorities {
      id
      primaryHatsAccount1ofNAddress
      hsgOwner {
        id
      }
      hsgSigner {
        id
      }
    }
  }
}
```

### Wearer Hat Relationships with All Resolver Fields

```graphql
{
  Eth_wearers(first: 3) {
    id
    ensName
    isContract
    contractName
    currentHats {
      id
      details
      detailsMetadata
      imageUri
      isImageValid
      nearestImage
      dynamicStatus
      eligibleWearers
      authorities {
        id
        primaryHatsAccount1ofNAddress
        hsgOwner {
          id
        }
        hsgSigner {
          id
        }
      }
    }
  }
}
```

### Edge Cases

#### Empty or Invalid IPFS Details

```graphql
{
  invalidIpfs: Eth_hats(
    where: { details_not_starts_with: "ipfs://" }
    first: 2
  ) {
    id
    details
    detailsMetadata
  }
  emptyDetails: Eth_hats(where: { details: null }, first: 2) {
    id
    details
    detailsMetadata
  }
}
```

#### Invalid Images

```graphql
{
  invalidImages: Eth_hats(
    where: { imageUri_not_starts_with: "ipfs://" }
    first: 2
  ) {
    id
    imageUri
    isImageValid
    nearestImage
  }
  emptyImages: Eth_hats(where: { imageUri: null }, first: 2) {
    id
    imageUri
    isImageValid
    nearestImage
  }
}
```

## Testing Notes

When using these queries for testing:

1. Compare results between:

   - Local development environment (http://localhost:4000)
   - Staging environment
   - Production environment

2. Check for:

   - Correct data resolution
   - Performance/timing
   - Error handling
   - Cross-chain consistency
   - Resolver edge cases

3. Key areas to validate:

   - ENS name resolution
   - Contract detection
   - IPFS content retrieval
   - Image validation
   - Dynamic status checks
   - Eligibility calculations
   - Cross-chain identity resolution

4. Common edge cases to test:
   - Invalid IPFS hashes
   - Non-existent ENS names
   - Invalid addresses
   - Missing or null fields
   - Maximum supply edge cases
   - Complex tree structures
   - Large result sets

## Future Test Development

These queries can serve as the basis for developing automated tests. Consider:

1. Unit tests for individual resolvers
2. Integration tests for resolver chains
3. Performance tests for complex queries
4. Load tests for concurrent requests
5. Snapshot tests for cross-chain consistency
