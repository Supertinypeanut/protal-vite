<template>
  <tabBar />
  <section class="section">
    <Aside />
    <div class="banner">
      <h1>Demo UI</h1>
      <h2>一个demo的UI框架</h2>
      <p class="action">
        <a>GitHub</a>
        <a>GitHub</a>
        <a>GitHub</a>
        <a>GitHub</a>
        <a>开始</a>
      </p>
    </div>
  </section>
  <div></div>
</template>

<script lang="ts">
import tabBar from '../components/tabBar.vue'
import Aside from '../components/aside.vue'
export default {
  name: 'Home',
  components: {
    tabBar,
    Aside,
  },
}
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  .banner {
    flex: 1;
    background-color: gainsboro;
    height: calc(100vh - 58px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
