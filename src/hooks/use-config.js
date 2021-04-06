/* eslint-disable @typescript-eslint/ban-types */
import { reactive, ref } from 'vue'
import createFetch from '@xizher/fetch-helper'
import { baseUtils } from '@xizher/js-utils'

const config = reactive({})
const loaded = ref(false)

export function useInitConfig () {
  return createFetch()
    .setUrl('/config.json')
    .mountGet()
    .then(res => res.json())
    .then(res => {
      baseUtils.$extend(true, config, res)
      document.title = config.appName
      loaded.value = true
    })
}

export default function () {
  return [config, loaded]
}
