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
  name: 'Doc',
  components: {
    tabBar,
  },
}
</script>

<style lang="scss"></style>
