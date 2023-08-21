const origin = "https://deep-index.moralis.io";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImEyNTgxYThmLTg4NWYtNDEwZi04ZWQxLTYxMDg3ZjQwNjZhMiIsIm9yZ0lkIjoiMzUzODE4IiwidXNlcklkIjoiMzYzNjQ4IiwidHlwZUlkIjoiNTRjZmNjZmUtOGIwMS00ZTIzLTk0MzktYmZmNGY5MWNmMmE1IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2OTI0NjM3OTcsImV4cCI6NDg0ODIyMzc5N30.ykzymB0EqrjuqwteCm9DobrFEKOaUsxpJu_ZfDucxZI";

export const getContractNFTs = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getContractTrades = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}/trades`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("marketplace", "opensea");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getNFTTransfers = async (tokenAddress, tokenId) => {
  const url = new URL(
    `${origin}/api/v2/nft/${tokenAddress}/${tokenId}/transfers`
  );
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};
