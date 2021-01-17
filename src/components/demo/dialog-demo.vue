<template>
  <div>
    <it-button @click="onShowDialog">open dialog</it-button>
    <it-dialog :visible="visible" @update:close="close">
      dailog content
    </it-dialog>

    <it-button @click="openFnDailog">函数dailog</it-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, wa } from 'vue'
import { ItDialog, $itDailog } from '../../lib/it-dialog'
import { ItButton } from '../../lib/it-button'
export default defineComponent({
  components: {
    ItDialog,
    ItButton,
  },
  setup() {
    const visible = ref(false)
    const onShowDialog = () => {
      visible.value = true
    }
    const close = () => {
      visible.value = false
    }

    const openFnDailog = () => {
      $itDailog({
        visible: true,
        close,
      })
    }

    return {
      visible,
      onShowDialog,
      openFnDailog,
      close,
    }
  },
})
</script>
