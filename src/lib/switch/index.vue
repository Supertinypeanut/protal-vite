<template>
  <span
    class="__jzh-switch"
    :class="{ __choose: value }"
    @click="toggle"
  ></span>
</template>

<script lang="ts">
export default {
  props: {
    value: Boolean,
  },
  setup(props: any, context: any) {
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    return { toggle }
  },
}
</script>

<style lang="scss" scoped>
.__jzh-switch {
  margin: 0;
  display: inline-block;
  position: relative;
  width: 40px;
  height: 20px;
  border: 1px solid #dcdfe6;
  outline: none;
  border-radius: 10px;
  box-sizing: border-box;
  background: #dcdfe6;
  cursor: pointer;
  transition: border-color 0.3s, background-color 0.3s;
  vertical-align: middle;
  border-color: rgb(255, 73, 73);
  background-color: rgb(255, 73, 73);
  &::after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    border-radius: 100%;
    transition: all 0.3s;
    width: 16px;
    height: 16px;
    background-color: #fff;
  }
  &.__choose {
    border-color: rgb(19, 206, 102);
    background-color: rgb(19, 206, 102);
    &::after {
      left: 100%;
      transform: translateX(-18px);
    }
  }
}
</style>
