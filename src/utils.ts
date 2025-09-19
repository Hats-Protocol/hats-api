export const parentHat: (hatId: `0x${string}`) => `0x${string}` | null = (
  hatId
) => {
  let hatLevel = 0;
  for (let i = 0; i < 15; i++) {
    if (
      hatId
        .slice(10 + i * 4)
        .split("")
        .every((char) => char === "0")
    ) {
      hatLevel = i;
      break;
    }
  }

  if (hatLevel === 0) {
    return null;
  } else if (hatLevel < 15) {
    const parent = hatId
      .substring(0, 10 + (hatLevel - 1) * 4)
      .padEnd(66, "0") as `0x${string}`;

    return parent;
  } else {
    throw new Error("Invalid hatId");
  }
};

/**
 * Formats a transaction hash for display by showing first 4 and last 4 characters
 * @param txHash The transaction hash to format
 * @returns Formatted hash like "0x1234...abcd"
 */
export const formatTxHash = (txHash: `0x${string}`): string => {
  if (txHash.length < 10) return txHash;
  return `${txHash.slice(0, 6)}...${txHash.slice(-4)}`;
};
