const fs = require("fs");

//value of the NFT is specific using the width and height variables
const width = 450;
const height = 450;
const dir = __dirname;

// description give details about your NFT
const description = "This is an NFT made by the coolest generative code.";
const baseImageUri = "https://hashlips/nft";
const startEditionFrom = 1;
const endEditionAt = 10;

//editionSize specific the numbers of NFT we are creating
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
        name: "Background",
        elements: [
          {
            id: 0,
            name: "Light blue",
            path: `${dir}/1-background/LightBlue.png`,
            weight: 100, //100
          },
          {
            id: 1,
            name: "Orange",
            path: `${dir}/1-background/Orange.png`,
            weight: 80, //100
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Suit",
        elements: [
          {
            id: 0,
            name: "Regular",
            path: `${dir}/2-suit/Regular.png`,
            weight: 100, //100
          },
          {
            id: 1,
            name: "Orange",
            path: `${dir}/2-suit/Orange.png`,
            weight: 20, //100
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Shoulder",
        elements: [
          {
            id: 0,
            name: "LunaFlag",
            path: `${dir}/3-shoulder/LunaFlag.png`,
            weight: 100, //100
          },
          {
            id: 1,
            name: "USA",
            path: `${dir}/3-shoulder/USA.png`,
            weight: 90,//100
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Pin",
        elements: [
          {
            id: 0,
            name: "Smiley",
            path: `${dir}/4-pin/Smiley.png`,
            weight: 100, //100
          },
          {
            id: 1,
            name: "LunaBluePin",
            path: `${dir}/4-pin/LunaBluePin.png`,
            weight: 90,  //100
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Race",
        elements: [
          {
            id: 0,
            name: "Skull",
            path: `${dir}/5-skin/Skull.png`,
            weight: 100, //100
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Facial hair",
        elements: [
          {
            id: 0,
            name: "No facial hair",
            path: `${dir}/6-facial-hair/NoFacialHair.png`,
            weight: 100,  //100
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Mask",
        elements: [
          {
            id: 0,
            name: "No mask",
            path: `${dir}/7-mask/NoMask.png`,
            weight: 100, //100
          },
          {
            id: 1,
            name: "Medical",
            path: `${dir}/7-mask/mask.png`,
            weight: 5, //100
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Hair",
        elements: [
          {
            id: 0,
            name: "Blonde bun",
            path: `${dir}/8-hair/BlondeBun.png`,
            weight: 100,  //100
          },
          {
            id: 1,
            name: "Pink",
            path: `${dir}/8-hair/Pink.png`,
            weight: 91, //100
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Accessories",
        elements: [
          {
            id: 0,
            name: "No accessories",
            path: `${dir}/9-accessories/NoAcc.png`,
            weight: 100, //100
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Headwear",
        elements: [
          {
            id: 0,
            name: "Glass dome",
            path: `${dir}/10-headwear/GlassDome.png`,
            weight: 100,  //100
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
