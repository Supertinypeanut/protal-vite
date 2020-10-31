<template>
  <aside v-if="asideVisible" class="aside">
    <router-link tag="nav" to="/doc/switch">Switch</router-link>
    <router-link tag="nav" to="/doc/button">Button</router-link>
    <router-link tag="nav" to="/doc/dailog">Didlog</router-link>
    <router-link tag="nav" to="/doc/tabs">Tabs</router-link>
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
  a {
    display: block;
    text-align: center;
    height: 32px;
    cursor: pointer;
    &:hover {
      background-color: rgb(32, 161, 225);
    }
  }
}
</style>
