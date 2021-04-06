import { onMounted, onUnmounted, ref } from 'vue'
import { WebMap, Basemap, MapCursor } from '@xizher/esri'
import useConfig from '../use-config'

let webMap = null
const loaded = ref(false)

export function initWebMap (id, mode) {
  loaded.value = false
  const config = useConfig()[0].webMapConfig.arcgisjsapi
  webMap = new WebMap(id, {
    ...config.webMapOptions, mode
  })
    .use(new Basemap(config.basemapOptions))
    .use(new MapCursor())
  onMounted(() => webMap.mount())
  const handler = webMap.on('loaded', () => {
    loaded.value = true
    window.webMap = webMap // debug
  })
  onUnmounted(() => handler.remove())
  return loaded
}

/** @returns { [WebMap, import('vue').Ref<boolean>] } */
function useWebMap () {
  return [webMap, loaded]
}

export default useWebMap
