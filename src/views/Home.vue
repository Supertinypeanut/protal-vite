<template>
  <tabBar />
  <section class="banner">
    <h1>Demo UI</h1>
    <h2>一个demo的UI框架</h2>
    <p class="action">
      <a>GitHub</a>
      <a>GitHub</a>
      <a>GitHub</a>
      <a>GitHub</a>
      <a>开始</a>
    </p>
  </section>
  <div></div>
</template>

<script lang="ts">
import tabBar from '../components/tabBar.vue'
export default {
  name: 'Home',
  components: {
    tabBar,
  },
}
</script>

<style lang="scss" scoped>
.banner {
  background-color: gainsboro;
  height: calc(100vh - 58px);
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
