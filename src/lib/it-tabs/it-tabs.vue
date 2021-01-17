<template>
  <div class="it-tabs">
    <div ref="navTitle" class="nav-title">
      <div
        @click="onClickTitle(c)"
        :class="{
          title: true,
          'title-selected': c.props.name === selected,
        }"
        v-for="c in tabList"
        :key="c.props.name"
        :ref="
          (el) => {
            if (el && c.props.name === selected) selectTitleEl = el
          }
        "
      >
        {{ c.props.title }}
      </div>
      <span ref="selectLine" class="select-line"></span>
    </div>
    <component class="" v-for="c in tabList" :key="c.props.name" :is="c" />
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, onMounted, watchEffect, ref } from 'vue'
import { ItTab } from './index'
export default defineComponent({
  name: 'it-tabs',
  props: {
    selected: {
      type: String,
      required: true,
    },
  },
  setup(props, context: SetupContext) {
    const getSlots: any = context.slots.default
    const tabList = getSlots().filter((tab: any) => {
      if (tab.type !== ItTab)
        throw Error(`${tab.type}组件类型错误，请使用tab组件`)
      return true
    })

    // 计算选中title元素
    const navTitle = ref<HTMLDivElement>(null)
    const selectTitleEl = ref<HTMLDivElement>(null)
    const selectLine = ref<HTMLDivElement>(null)
    onMounted(() => {
      watchEffect(() => {
        const { left: navTitleLeft } = navTitle.value.getBoundingClientRect()
        const {
          left: selectTitleElLeft,
          width,
        } = selectTitleEl.value.getBoundingClientRect()
        const left = selectTitleElLeft - navTitleLeft

        selectLine.value.style.width = `${width}px`
        selectLine.value.style.left = `${left}px`
      })
    })

    const onClickTitle = (c: any) => {
      console.log(c.props.name)
      context.emit('update:selected', c.props.name)
    }

    return {
      tabList,
      onClickTitle,
      selectTitleEl,
      navTitle,
      selectLine,
    }
  },
})
</script>

<style lang="scss">
.nav-title {
  display: flex;
  border-bottom: 1px solid #ccc;
  position: relative;
  .title {
    padding: 5px 0;
    &:not(:first-child) {
      margin-left: 10px;
    }
    &-selected {
      color: aquamarine;
    }
  }
  .select-line {
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: aquamarine;
    height: 1px;
  }
}
</style>
