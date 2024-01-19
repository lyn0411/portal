import { Plugin } from 'vite'
import autoImport from './autoImport'
import  defineOptions  from './defineOptions'
import setupVue from './vue'

const plugins: Plugin[] = []

export default function setupPlugins(isBuild: boolean, env: ImportMetaEnv) {
  setupVue(plugins)
  autoImport(plugins)
  defineOptions(plugins,isBuild, env)
  return plugins
}
