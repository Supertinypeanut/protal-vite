<template>
  <div>
    <it-button @click="onShowDialog">open dialog</it-button>
    <it-dialog :visible="visible" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ItDialog } from '../../lib/it-dialog'
import { ItButton } from '../../lib/it-button'
export default defineComponent({
  components: {
    ItDialog,
    ItButton,
  },
  setup() {
    const visible = ref(false)
    const onShowDialog = () => [(visible.value = true)]
    return {
      visible,
      onShowDialog,
    }
  },
})
</script>
