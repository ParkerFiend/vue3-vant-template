import type { Plugin } from 'vite'

import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

export function vantPlugin(): Plugin | Plugin[] {
  return Components({
    resolvers: [VantResolver()],
    dts: 'types/components.d.ts',
  })
}
