<template>
  <nav class="topnav">
    <div class="logo">LOGO</div>
    <ul class="meun">
      <router-link to="/">菜单1</router-link>
      <router-link to="/doc">菜单2</router-link>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'TabBar',
}
</script>

<style lang="scss" scoped>
.topnav {
  height: 58px;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  .logo {
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
}
</style>
