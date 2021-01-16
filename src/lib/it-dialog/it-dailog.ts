import { ItDialog } from './index'
import { createApp, h } from 'vue'

const $itDailog = (options: {
  visible: Boolean
  clickOverlayClose?: Boolean
  close?: Function
  onCancel?: Function
  onSubmit?: Function
}) => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const dailogApp = createApp({
    render() {
      return h(
        ItDialog,
        {
          // 组件 属性/时间 注意事件需要使用`onUpdate:${eventName}`
          ...options,
          'onUpdate:close': () => {
            dailogApp.unmount(div)
            div.remove()
            options?.close?.()
          },
          'onUpdate:onCancel': () => {
            console.log('onCancel')
            options?.onCancel?.()
          },
          'onUpdate:onSubmit': () => {
            console.log('onSubmit')
          },
        },
        {
          title: () => '标题slot',
          // footer: ()=>'conten Slot',
          default: () => 'default slot',
        }
      )
    },
  })

  dailogApp.mount(div)
}

export { $itDailog }
