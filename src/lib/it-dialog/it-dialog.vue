<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="it-dialog">
        <div class="it-dialog-overlay" @click="onClickOverlay"></div>
        <div class="it-dialog-wrapper">
          <div class="it-dialog-modal">
            <header>
              <slot name="title">标题</slot>
              <span @click="onClose" class="it-dialog-close"></span>
            </header>
            <main>
              <slot />
            </main>
            <footer>
              <slot name="footer">
                <it-button>取消</it-button>
                <it-button>确定</it-button>
              </slot>
            </footer>
          </div>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ItButton } from '../it-button'
export default defineComponent({
  name: 'it-dialog',
  components: {
    ItButton,
  },
  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  setup() {
    const onClose = () => {
      console.log('onClose')
    }
    const onClickOverlay = () => {
      console.log('onClickOverlay')
    }

    return {
      onClickOverlay,
      onClose,
    }
  },
})
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.it-dialog {
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  &-modal {
    background-color: #fff;
    width: 640px;
    > header {
      padding: 12px 16px;
      border-bottom: 1px solid $border-color;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
    }
    > main {
      padding: 12px 16px;
    }
    > footer {
      border-top: 1px solid $border-color;
      padding: 12px 16px;
      text-align: right;
    }
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
