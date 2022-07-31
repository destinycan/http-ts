#!/usr/bin/env ts-node

import sharp from 'sharp';
import axios from 'axios';
import fs from 'fs';
import path from 'path';

async function flipSharp(inputPath: string) {
  let imgPath: string | Buffer;
  if (inputPath.startsWith("http://") || inputPath.startsWith("https://")) {
    const imageResponse = await axios({url: inputPath, responseType: 'arraybuffer'});
    imgPath = Buffer.from(imageResponse.data, 'binary')
  } else {
    if (! fs.existsSync(inputPath)) {
      console.log(`path [${inputPath}] does not exist`);
      return false;
    }
    imgPath = inputPath;
  }

  let fName: string = inputPath.split('/').reverse()[0];
  const imgDir: string = path.resolve(`${__dirname}/../img`);
  let dest: string = `${imgDir}/${fName}-flip.jpg`;
  if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir);
  }
  try {
    await sharp(imgPath)
    .flip()
    .flop()
    .toFile(dest);
  return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export default { flipSharp };