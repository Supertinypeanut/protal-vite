<template>
  <transition name="too-left" mode="out-in">
    <aside v-if="asideVisible" class="aside">
      <router-link tag="nav" to="/doc/switch">Switch</router-link>
      <router-link tag="nav" to="/doc/button">Button</router-link>
      <router-link tag="nav" to="/doc/dialog">Dialog</router-link>
      <router-link tag="nav" to="/doc/tabs">Tabs</router-link>
    </aside>
  </transition>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
import { router } from '../router'
export default {
  name: 'aside',
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')

    // 移动端切换aside后自动关闭
    const width = document.documentElement.clientWidth
    router.afterEach(() => {
      if (width <= 500) {
        asideVisible.value = false
      }
    })
    return {
      asideVisible,
    }
  },
}
</script>

<style lang="scss" scoped>
.aside {
  width: 240px;
  background-color: rgb(61, 56, 56);
  color: #fff;
  padding-top: 10px;
  a {
    display: block;
    text-align: center;
    height: 32px;
    line-height: 32px;
    cursor: pointer;
    &:hover {
      background-color: rgb(32, 161, 225);
    }
  }
}
@media (max-width: 500px) {
  .aside {
    position: fixed;
    top: 58px;
    height: calc(100vh - 58px);
  }
}
// 抽屉动画  <transition name="too-left">
.too-left-enter-active {
  transition: opacity 0.2s ease;
}
.too-left-leave-active {
  transition: opacity 0.2s ease;
}
.too-left-enter {
  opacity: 0;
}
</style>
