<template>
  <nav class="topnav">
    <span class="mobileMeun" @click="mobileToggle" />
    <div class="logo" @click="toggle">LOGO</div>
    <ul class="meun">
      <router-link to="/">菜单1</router-link>
      <router-link to="/doc">菜单2</router-link>
    </ul>
  </nav>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
export default {
  name: 'TabBar',
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const width = document.documentElement.clientWidth
    const toggle = () => {
      if (width > 500) {
        asideVisible.value = !asideVisible.value
      }
    }
    const mobileToggle = () => {
      if (width <= 500) {
        asideVisible.value = !asideVisible.value
      }
    }
    return {
      toggle,
      asideVisible,
      mobileToggle,
    }
  },
}
</script>

<style lang="scss" scoped>
.topnav {
  position: relative;
  height: 58px;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  .mobileMeun {
    display: none;
  }
  .logo {
    padding-left: 28px;
    width: 300px;
    font-size: 28px;
    font-weight: 600;
  }
  .meun {
    flex: 1;
    display: flex;
    a + a {
      margin-left: 12px;
    }
  }
  @media screen and (max-width: 500px) {
    .mobileMeun {
      position: absolute;
      width: 30px;
      height: 30px;
      background-color: #cac;
      top: 15px;
      left: 30px;
      display: inline-block;
    }
    .logo {
      width: 82px;
    }
    .meun {
      display: none;
    }
  }
}
</style>
