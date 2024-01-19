
import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import { parseEnv } from './vite/util'
import setupPlugins from './vite/plugins'
import alias from './vite/alias'
import Icons from 'unplugin-icons/vite'
export default defineConfig(({command, mode }) => {
  const isBuild = command == 'build'
  const env = parseEnv(loadEnv(mode,process.cwd()))
  const ipAddress = ""

  return{
    plugins:[
      ...setupPlugins(isBuild,env),
      Icons({
        autoInstall:true
      })
    ],
    resolve:{
      alias
    },
    base:isBuild ? '/' : './',
    build:{
      outDir:'dist',
      emptyOutDir:true,
      rollupOptions:{
        input:{
          index:fileURLToPath(new URL('index.html', import.meta.url))
        },
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          // 解决打包时Some chunks are larger警告
          manualChunks(id) {
              if (id.includes('node_modules')) {
                return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString()
              }
          }
        }
      }
    },
    server:{
      host:true,
      port:80,
      proxy:{
        '/api':{
          target:ipAddress,
          ws:true,
          changeOrigin:true
        }
      },

    },
    css:{
      preprocessorOptions:{
        scss:{
          additionalData: `@use "@/assets/global.scss" as *;`
        }
      }
    }
  }
})