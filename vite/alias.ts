// import { fileURLToPath, URL } from 'node:url'

// const alias = {
//     '@': fileURLToPath(new URL('../src', import.meta.url))
// }

// export default alias
import path from 'path'
import { AliasOptions } from 'vite'

const alias = {
  '@': path.resolve(__dirname, '../src'),
  '#': path.resolve(__dirname, '../types'),
} as AliasOptions

export default alias
