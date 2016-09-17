import test from 'blue-tape'
import { encode, decode } from '../src'

const str = 'filename d29ybGRfZG9taW5hdGlvbl9wbGFuLnBkZg==,mimetype dGV4dC9wbGFpbg=='

test((t) => {
  const obj = decode(str)
  t.deepEqual(obj, {
    filename: 'world_domination_plan.pdf',
    mimetype: 'text/plain',
  })
  t.equal(encode(obj), 'filename d29ybGRfZG9taW5hdGlvbl9wbGFuLnBkZg==,mimetype dGV4dC9wbGFpbg==')
  t.end()
})

// TODO?
/*
const invalidStrings = [
  'filename d29ybGRfZG9taW5hdGlvbl9wbGFuLnBkZg==, foo YmFy',
  'filename d29ybGRfZG9taW5hdGlvbl9wbGFuLnBkZg== foo, YmFy',
  'filename',
  'file name woot',
  'file,name YmFy',
]
*/
