# http-ts
http &amp; transform stream

## Requirements
- typescript
- ts-node
- jest
- npm


## How to Use
### use ts-node
- `ts-node src/main.ts <path|url>`
### use npm
1. `npm run build`
2. `node --max-old-space-size=256 dist/main.js <path|url>`

## Testing
### How to use
- `npm test`

### Testing cases
#### expect `succes`
1. `path` input
2. `url` input

#### expect `fail`
1. `path` does not exist
2. wrong `url`

## Design Principles
- use typescript
- a function support flip both X and Y axis
- input can be `path` or `url`
- error handling

### Function support flip

- according to the size limitation of the requirements, `sharp` is a better choice to deal with it.
  - https://www.npmjs.com/package/@types/sharp

### Deal with different input <path|url> 
- `sharp` only support buffer or path string, which means we need to convert url input into buffer, there are several steps we need to do for this:
    1. get image from the url through http client service
    2. put the file into buffer

### Error handling
1. no input
1. empty input
2. handle wrong path or wrong url