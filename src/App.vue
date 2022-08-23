<template>
  <!-- https://next.router.vuejs.org/guide/migration/index.html#router-view-keep-alive-and-transition -->
  <router-view v-slot="{ Component }">
    <transition>
      <!-- 需要keep-alive的组件定义name时添加KA前缀 -->
      <keep-alive :include="/KA/">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
import { getAppEnvConfig } from '@/utils/env'

import { useAppStore } from '@/store/modules/app'

const appStore = useAppStore()

const { apiDomain } = getAppEnvConfig()
console.log(apiDomain)
appStore.initApp()
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body,
#app {
  height: 100%;
  overflow: auto;
}
</style>
