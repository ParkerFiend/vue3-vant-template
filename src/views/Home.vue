<template>
  <PanelContainer>
    <template #default>
      <van-button @click="link">测试按钮</van-button>

      <div class="border">边框</div>
    </template>
  </PanelContainer>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
// import { useRouter } from 'vue-router'

import PanelContainer from '@/components/PanelContainer.vue';
import { useAppStore } from '@/store/modules/app';

// const router = useRouter()
const userStore = useAppStore();

const link = () => {
  console.log('link');
  // router.push({
  //   path: '/',
  // })
};

onMounted(() => {
  userStore.getUserList();
});
</script>

<style lang="scss" scoped>
.border {
  @include mixins.set-border;

  padding-top: 20px;
}
</style>
