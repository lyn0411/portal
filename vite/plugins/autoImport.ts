import { Plugin } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'

//自动导入插件
export default (plugins: Plugin[]) => {
  plugins.push(
    AutoImport({
      resolvers: [ElementPlusResolver({
        importStyle:'sass'
      }), 
        IconsResolver({
          prefix: 'Icon',
        })
      ],
      imports: ['vue', 'vue-router'],
      dirs: ['src/composables'],
      dts: 'types/auto-imports.d.ts',
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle:'sass'
        }),
        VueUseComponentsResolver(),
        IconsResolver({
          enabledCollections: ['ep'],
        }),
      ],
      extensions: ['vue', 'tsx'],
      dirs: ['src/components'],
      directoryAsNamespace: true,
      dts: 'types/components.d.ts',
    }),
  )
}
