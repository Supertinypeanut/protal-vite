<template>
  <nav>
    <span>导航：</span>
    <router-link to="/">首页</router-link>
    <router-link to="/content">内容</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
