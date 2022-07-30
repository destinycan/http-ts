#!/usr/bin/env ts-node

import { exit } from 'process';
import sharp from 'sharp';
import axios from 'axios';
import fs from 'fs';

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
  let dest: string = `img/${fName}-flip.jpg`;
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

const inputPath = process.argv[2];
if (inputPath === undefined) {
  console.log('no input path, skip to flip');
  exit(0);
}

flipSharp(inputPath);
