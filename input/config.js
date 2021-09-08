const fs = require("fs");
const width = 5100;
const height = 3300;
const dir = __dirname;
const description = "The MetaEyes Collection, 100 Eyes looking deeply through the Metaverse";
const baseImageUri = "https://nft.com";
const startEditionFrom = 1;
const endEditionAt = 10;
const editionSize = 10;
const raceWeights = [
  {
    value: "skull",
    from: 1,
    to: editionSize,
  },
];

const races = {
  skull: {
    name: "Skull",
    layers: [
      {
        name: "Permanent Background",
        elements: [
          {
            id: 0,
            name: "Permanent Background",
            path: `${dir}/permanentBackground.PNG`,
            weight: 100, //100%.
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Background",
        elements: [
          {
            id: 0,
            name: "White",
            path: `${dir}/1-backgrounds/whiteBackground.PNG`,
            weight: 100, //40%
          },
          {
            id: 1,
            name: "Yellow",
            path: `${dir}/1-backgrounds/yellowBackground.PNG`,
            weight: 60, //15%
          },
          {
            id: 2,
            name: "Green",
            path: `${dir}/1-backgrounds/greenBackground.PNG`,
            weight: 45, //15%
          },
          {
            id: 3,
            name: "Pink",
            path: `${dir}/1-backgrounds/pinkBackground.PNG`,
            weight: 30, //15%
          },
          {
            id: 4,
            name: "Red",
            path: `${dir}/1-backgrounds/redBackground.PNG`,
            weight: 15, //10% 
          },
          {
            id: 5,
            name: "Purple",
            path: `${dir}/1-backgrounds/purpleBackground.PNG`,
            weight: 5, //5% 
          },

        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Iris",
        elements: [
          {
            id: 0,
            name: "No Iris Color",
            path: `${dir}/nothing.PNG`,
            weight: 100, //48%.
          },
          {
            id: 1,
            name: "Aqua",
            path: `${dir}/2-iris/irisAqua.PNG`,
            weight: 52, //10%
          },
          {
            id: 2,
            name: "Yellow",
            path: `${dir}/2-iris/irisYellow.PNG`,
            weight: 42, //10%
          },
          {
            id: 3,
            name: "Blue",
            path: `${dir}/2-iris/irisBlue.PNG`,
            weight: 32, //8%
          },
          {
            id: 4,
            name: "Green",
            path: `${dir}/2-iris/irisGreen.PNG`,
            weight: 24, //8%
          },
          {
            id: 5,
            name: "Pink",
            path: `${dir}/2-iris/irisPink.PNG`,
            weight: 16, //8%
          },
          {
            id: 6,
            name: "Purple",
            path: `${dir}/2-iris/irisPurple.PNG`,
            weight: 8, //4%
          },
          {
            id: 7,
            name: "Red",
            path: `${dir}/2-iris/irisRed.PNG`,
            weight: 4, //2%
          },
          {
            id: 8,
            name: "Sharingan",
            path: `${dir}/2-iris/irisSharingan.PNG`,
            weight: 2, //2%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Eye Linework",
        elements: [
          {
            id: 0,
            name: "Regular",
            path: `${dir}/3-eyeLineWork/eyeLineWork-regular.PNG`,
            weight: 100, //96%
          },
          {
            id: 1,
            name: "Special 1",
            path: `${dir}/3-eyeLineWork/eyeLineWork-special1.PNG`,
            weight: 4, //2%
          },
          {
            id: 2,
            name: "Special 2",
            path: `${dir}/3-eyeLineWork/eyeLineWork-special2.PNG`,
            weight: 2, //2%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Pupil",
        elements: [
          {
            id: 0,
            name: "No Crypto Pupil",
            path: `${dir}/nothing.PNG`,
            weight: 100, //68%
          },
          {
            id: 1,
            name: "Cosmos",
            path: `${dir}/4-logos/logoCosmos.PNG`,
            weight: 32, //8%
          },
          {
            id: 2,
            name: "Binance",
            path: `${dir}/4-logos/logoBinance.PNG`,
            weight: 24, //8%
          },
          {
            id: 3,
            name: "Solana",
            path: `${dir}/4-logos/logoSolana.PNG`,
            weight: 18, //4%
          },
          {
            id: 4,
            name: "Cake",
            path: `${dir}/4-logos/logoCake.PNG`,
            weight: 14, //4%
          },
          {
            id: 5,
            name: "Matic",
            path: `${dir}/4-logos/logoMatic.PNG`,
            weight: 10, //4%
          },
          {
            id: 6,
            name: "Cardano",
            path: `${dir}/4-logos/logoCardano.PNG`,
            weight: 6, //2%
          },
          {
            id: 7,
            name: "Etherium",
            path: `${dir}/4-logos/logoEtherium.PNG`,
            weight: 4, //2%
          },
          {
            id: 8,
            name: "Bitcoin",
            path: `${dir}/4-logos/logoBitcoin.PNG`,
            weight: 2, //2%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Accessory",
        elements: [
          {
            id: 0,
            name: "No Accessory",
            path: `${dir}/nothing.PNG`,
            weight: 100, //80%
          },
          {
            id: 1,
            name: "Lower Pearcing",
            path: `${dir}/5-acessories/acessoryLowerPearcing.PNG`,
            weight: 20, //8%
          },
          {
            id: 2,
            name: "Upper Pearcing",
            path: `${dir}/5-acessories/acessoryUpperPearcing.PNG`,
            weight: 12, //8%
          },
          {
            id: 3,
            name: "Water Drops",
            path: `${dir}/5-acessories/acessoryTearDrops.PNG`,
            weight: 6, //2%
          },
          {
            id: 4,
            name: "Trident",
            path: `${dir}/5-acessories/acessoryTrident.PNG`,
            weight: 4, //2%
          },
          {
            id: 5,
            name: "Eherium Pearcing",
            path: `${dir}/5-acessories/acessoryEthereumPearcing.PNG`,
            weight: 2, //2%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
    ],
  },
};

module.exports = {
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  endEditionAt,
  races,
  raceWeights,
};
