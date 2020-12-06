<template>
  <Switch v-model:value="checkout" />
</template>

<script lang="ts">
import { Switch } from '../../lib/switch'
import { ref } from 'vue'
export default {
  components: {
    Switch,
  },
  setup(prop, context) {
    const checkout = ref(false)
    return { checkout }
  },
}
</script>

<style></style>
