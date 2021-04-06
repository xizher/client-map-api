import { onMounted, onUnmounted, ref } from 'vue'
import { WebMap, Basemap, MapCursor } from '@xizher/leaflet'
import useConfig from '../use-config'

let webMap = null
const loaded = ref(false)

export function initWebMap (id) {
  loaded.value = false
  const config = useConfig()[0].webMapConfig.leaflet
  webMap = new WebMap(id, config.webMapOptions)
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
