import type { PluginOption } from 'vite'

import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'

import { configHtmlPlugin } from './html'
import { configCompressPlugin } from './compress'
import { vantPlugin } from './vant'

export function createPlugins(viteEnv: ViteEnv) {
  const { VITE_ENV, VITE_LEGACY, VITE_BUILD_COMPRESS } = viteEnv

  const isBuild = VITE_ENV !== 'dev'
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue({
      reactivityTransform: true,
    }),
    // vueJsx(),
    vantPlugin(),
  ]

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild))

  // The following plugins only work in the production environment
  if (isBuild) {
    // @vitejs/plugin-legacy
    VITE_LEGACY && vitePlugins.push(legacy())

    // rollup-plugin-gzip
    vitePlugins.push(configCompressPlugin(VITE_BUILD_COMPRESS))
  }

  return vitePlugins
}
