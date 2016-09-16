# tus-metadata

[![Build Status](https://travis-ci.org/blockai/tus-metadata.svg?branch=master)](https://travis-ci.org/blockai/tus-metadata)

Encode and decode Tus [Upload-Metatada](http://tus.io/protocols/resumable-upload.html#upload-metadata).

## Install

```bash
npm install --save tus-metadata
```

Requires Node v6+

## Usage

See [./test](./test) directory for usage examples.

**metadata.decode(str)**

Accepts an `Upload-Metadata` encoded string and returns a key/value object.

**metadata.encode(obj)**

Accepts an object and returns an `Upload-Metadata` encoded string.

```javascript
import { encode, decode } from 'tus-metadata'

const str = 'filename d29ybGRfZG9taW5hdGlvbl9wbGFuLnBkZg==, mimetype dGV4dC9wbGFpbgo='

decode(str)
// => {filename: 'world_domination_plan.pdf', mimetype: 'text/plain'}

encode(decode(str))
// => filename d29ybGRfZG9taW5hdGlvbl9wbGFuLnBkZg==,mimetype dGV4dC9wbGFpbgo=
```