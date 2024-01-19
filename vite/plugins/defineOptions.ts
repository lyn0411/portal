import { Plugin } from 'vite'
import DefineOptions from 'unplugin-vue-define-options/vite'

//vue框架
export default (plugins: Plugin[], isBuild: boolean, env: ImportMetaEnv) => {
  plugins.push(DefineOptions())
}
