#!/usr/bin/env ts-node

import * as Jimp from 'jimp';
import { exit } from 'process';

async function flip(imgPath: string) {
  const fName = imgPath.split('/').reverse()[0];
  const dest = `img/${fName}-flip.jpg`;
  await Jimp.read(imgPath)
    .then(image => {
      image.flip(true, true, flipErr => {
        if (flipErr !== null) {
          console.log(flipErr);
        }

      })
      .write(dest);
    })
    .catch(error => {
      console.log(error);
    });
    console.log(`file result in ${dest}`);
}

const imgPath = process.argv[2];
if (imgPath === undefined) {
  console.log('no input path, skip to flip');
  exit(0);
}

flip(imgPath);
