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
    return hatId
      .substring(0, 10 + hatLevel * 4)
      .padEnd(66, "0") as `0x${string}`;
  } else {
    throw new Error("Invalid hatId");
  }
};
