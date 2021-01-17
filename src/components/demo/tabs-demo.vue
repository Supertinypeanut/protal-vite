<template>
  <div>
    <it-tabs v-model:selected="selected">
      <it-tab name="one" title="标题一">内容一</it-tab>
      <it-tab name="two" title="标题二">内容二</it-tab>
      <it-tab name="three" title="标题三">内容三</it-tab>
    </it-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ItTabs, ItTab } from '../../lib/it-tabs'
export default defineComponent({
  name: 'tabs-demo',
  components: {
    ItTab,
    ItTabs,
  },
  setup() {
    const selected = ref('one')

    return {
      selected,
    }
  },
})
</script>

<style></style>
