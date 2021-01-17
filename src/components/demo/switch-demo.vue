<template>
  <div>
    <it-switch v-model:value="checkout" />
  </div>
</template>

<script lang="ts">
import { ItSwitch } from '../../lib/it-switch'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {
    ItSwitch,
  },
  setup(prop, context) {
    const checkout = ref(false)
    return { checkout }
  },
})
</script>

<style></style>
