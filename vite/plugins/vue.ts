import { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'

//vue框架
export default (plugins: Plugin[]) => {
  plugins.push(vue({ reactivityTransform: true }))
}
