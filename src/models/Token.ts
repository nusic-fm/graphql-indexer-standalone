import { model, Schema } from "mongoose";

const tokenSchema = new Schema(
  {
    // _id: String,
    token: Schema.Types.Mixed,
    marketsSummary: [Schema.Types.Mixed],
    sales: [Schema.Types.Mixed],
    platform: String,
    collectionAddress: String,
    // {
    //   collectionName: String,
    //   tokenId: String,
    //   tokenUrlMimeType: String,
    //   name: String,
    //   content: {
    //     mimeType: String,
    //     url: String,
    //     mediaEncoding: {
    //       large: String,
    //       original: String,
    //     },
    //     size: String,
    //   },
    //   collectionAddress: String,
    //   attributes: [], //TODO
    //   description: String,
    //   image: {
    //     mimeType: String,
    //     size: String,
    //     url: String,
    //     mediaEncoding: {
    //       large: String,
    //       poster: String,
    //       original: String,
    //       thumbnail: String,
    //     },
    //   },
    //   lastRefreshTime: String,
    //   metadata: String,
    //   tokenStandard: String,
    //   tokenUrl: String,
    //   mintInfo: [Object],
    //   owner: String,
    // },
  }
  // { _id: false }
);

export default model("Token", tokenSchema, "tokens");
/*

    metadata: {
      animation_url:
        "ipfs://bafybeifvokdylwc6widurlhrzx36vwc7pthd44hwkcckti3ox6fqh7tgky",
      artist: "𝔶𝔲𝔫𝔤.𝔯𝔞𝔧",
      attributes: {
        artist: "𝔶𝔲𝔫𝔤.𝔯𝔞𝔧",
      },
      description:
        "Artwork created using the AI Bot by Wolfbear Studio.\r\n\r\nFirst collector gets the 1/1 artwork that was minted to the impermanent.digital AI gallery airdropped to them.\r\n\r\nAlso being airdropped to the first collector is the Return Ticket NFT\r\n(100 of these have been minted and 36 of them have been sent to all my catalog collectors) The Return Ticket acts as a guestlist NFT to any & all shows of mine that you can make it to + access to a collectors-only discord\r\n\r\nAs always, thank you for listening!\r\n\r\n🎭🌏💙",
      duration: 214.674,
      external_url:
        "https://catalog.works/0x8bcb6e436eb92a2c6459ad64aa3c4c049ffb44ed/reset-1650395709",
      image:
        "ipfs://bafybeig7wzdcacvxbkxmfh2no3szj7cygqrht4xvdjsn7vsmabrysiqz24",
      losslessAudio:
        "ipfs://bafybeifk7xeub5w4yuhoabwvv5m6nwwzjtf6qgct4fwbagdukowrxnxbxq",
      mimeType: "audio/wav",
      name: "𝔶𝔲𝔫𝔤.𝔯𝔞𝔧 - Reset",
      title: "Reset",
      version: "catalog-20220222",
    },
    tokenStandard: "ERC721",
    tokenUrl:
      "ipfs://bafybeiamp6ofubirmpecdq3y7vg7l4xeaz55r7kfcuk4aquvpishlksuky",
    mintInfo: {
      originatorAddress: "0x8bcb6e436eb92a2c6459ad64aa3c4c049ffb44ed",
      price: {
        nativePrice: {
          currency: {
            address: "0x0000000000000000000000000000000000000000",
            decimals: 18,
            name: "ETH",
          },
          decimal: 0,
          raw: "0",
        },
        blockNumber: 14617394,
      },
      toAddress: "0x8bcb6e436eb92a2c6459ad64aa3c4c049ffb44ed",
      mintContext: {
        blockNumber: 14617394,
        transactionHash:
          "0x9fbb1e87a415257e950d4728076ff9d21a4b00797dd899a93d1c2421614cea95",
        blockTimestamp: "2022-04-19T19:16:34+00:00",
      },
    },
    owner: "0xd72cb55fd6e7d94808b27b15f6132cdfcf5a0461",
  },
  marketsSummary: [
    {
      collectionAddress: "0x0bc2a24ce568dad89691116d5b34deb6c203f342",
      marketAddress: "0xe468ce99444174bd3bbbed09209577d25d1ad673",
      marketType: "V2_AUCTION",
      price: {
        chainTokenPrice: {
          raw: "1000000000000000000",
          decimal: 1,
          currency: {
            address: "0x0000000000000000000000000000000000000000",
            decimals: 18,
            name: "ETH",
          },
        },
        blockNumber: 14651184,
      },
      status: "COMPLETED",
      tokenId: "4",
      transactionInfo: {
        blockNumber: 14651184,
        blockTimestamp: "2022-04-25T02:32:56+00:00",
        transactionHash:
          "0x9df75fbef8cf8b55184126006fb96a56d8f415bf5abd3abbf28af4e4d4f13c9f",
      },
    },
  ],
  sales: [
    {
      tokenId: "4",
      saleType: "ZORA_V2_AUCTION_SALE",
      sellerAddress: "0x8bcb6e436eb92a2c6459ad64aa3c4c049ffb44ed",
      saleContractAddress: "0xe468ce99444174bd3bbbed09209577d25d1ad673",
      price: {
        nativePrice: {
          currency: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            decimals: 18,
            name: "WETH",
          },
          decimal: 1,
          raw: "1000000000000000000",
        },
        blockNumber: 14651184,
      },
      collectionAddress: "0x0bc2a24ce568dad89691116d5b34deb6c203f342",
      buyerAddress: "0x1290f0b28f014363a81c3c7c2dff5f7517499e44",
      transactionInfo: {
        transactionHash:
          "0x9df75fbef8cf8b55184126006fb96a56d8f415bf5abd3abbf28af4e4d4f13c9f",
        blockNumber: 14651184,
        blockTimestamp: "2022-04-25T02:32:56+00:00",
      },
    },
  ],
  */
