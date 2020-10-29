<template>
  <aside v-if="asideVisible" class="aside">
    <nav>Switch</nav>
    <nav>Button</nav>
    <nav>Textarea</nav>
    <nav>Didlog</nav>
  </aside>
</template>

<script lang="ts">
import { inject } from 'vue'
export default {
  name: 'aside',
  setup() {
    const asideVisible = inject('asideVisible')
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
  padding-top: 30px;
  nav {
    text-align: center;
    height: 32px;
    &:hover {
      background-color: rgb(32, 161, 225);
    }
  }
}
</style>
