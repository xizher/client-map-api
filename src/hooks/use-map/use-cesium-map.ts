import { onMounted, onUnmounted, Ref, ref } from 'vue'
import { WebMap, Basemap, MapCursor } from '@xizher/cesium'
import useConfig from '../use-config'

let webMap: WebMap | null = null
const loaded = ref(false)

export function initWebMap (id: string) : Ref<boolean> {
  loaded.value = false
  const [config] = useConfig()
  const olConfig = config.webMapConfig.cesium
  webMap = new WebMap(id, olConfig.webMapOptions)
    .use(new Basemap(olConfig.basemapOptions))
    .use(new MapCursor())
  onMounted(() => (webMap as WebMap).mount())
  const handler = (webMap as WebMap).on('loaded', () => {
    loaded.value = true
    // eslint-disable-next-line
    // @ts-ignore
    window.webMap = webMap // debug
  })
  onUnmounted(() => handler.remove())
  return loaded
}

function useWebMap () : [WebMap, Ref<boolean>] {
  return [webMap as WebMap, loaded]
}

export default useWebMap
