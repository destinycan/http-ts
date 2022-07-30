
import { exit } from 'process';
import app from './app';


const inputPath = process.argv[2];
if (inputPath === undefined) {
  console.log('no input path, skip to flip');
  exit(0);
}

app.flipSharp(inputPath);