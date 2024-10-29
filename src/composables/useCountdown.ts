import { ref } from 'vue';

/**
 * 使用倒计时
 * @param countTime 倒计时时长
 */
export function useCountdown(countTime: number = 60) {
  /**
   * 倒计时时间
   */
  const count = ref(countTime - 1);
  /**
   * 是否在倒计时的状态
   */
  const isCounting = ref(false);
  /**
   * itervalId
   */
  const intervalId = ref<number | null>(null);

  /**
   * 启动倒计时
   * @param canReset 是否可重置并新开始
   */
  function startCount(canReset = false) {
    // 如果倒计时还在生效
    if (isCounting.value) {
      if (canReset) {
        clear();
        startCount();
      } else {
        console.warn('倒计时还未结束');
      }
    } else {
      // 启动倒计时
      if (count.value >= 1) {
        isCounting.value = true;
        intervalId.value = window.setInterval(() => {
          if (count.value >= 1) {
            count.value--;
          } else {
            clear();
          }
        }, 1000);
      } else {
        console.warn('可用时间不足，请检查倒计时参数');
      }
    }
  }

  /**
   * 方法：清空倒计时
   */
  function clear() {
    if (intervalId.value) {
      clearInterval(intervalId.value);
      intervalId.value = null;
    }

    isCounting.value = false;
    count.value = countTime - 1;
  }

  return {
    count,
    isCounting,

    startCount,
    clear,
  };
}
