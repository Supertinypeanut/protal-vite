<template>
  <tabBar />
  <section class="section">
    <Aside />
    <div class="banner">
      <router-view />
    </div>
  </section>
  <div></div>
</template>

<script lang="ts">
import tabBar from '../components/tabBar.vue'
import Aside from '../components/aside.vue'
export default {
  name: 'Doc',
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
