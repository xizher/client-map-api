import { computed, ComputedRef, Ref, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import useConfig, { IRoute } from './use-config'

export interface IMenuItem extends IRoute {
  key: string
}

export function useSelectedKey () : Ref<string> {
  const [config, loaded] = useConfig()
  const selectedPath = ref('')
  const router = useRouter()
  watch(
    loaded,
    b => b && (selectedPath.value = config.routerConfig.defaultRouteName),
    { immediate: true }
  )
  watch(
    selectedPath,
    path => router.push(path),
    { immediate: true },
  )
  return selectedPath
}

export function useMenuItems () : ComputedRef<IMenuItem[]> {
  const [config, loaded] = useConfig()
  const menuItems = computed(() => {
    if (loaded.value) {
      return config.routerConfig.routes.map(item => ({
        ...item,
        key: item.path
      }))
    }
    return []
  })
  return menuItems
}

function useMenu () : [Ref<string>, ComputedRef<IMenuItem[]>] {
  const selectedKey = useSelectedKey()
  const menuItems = useMenuItems()
  return [selectedKey, menuItems]
}

export default useMenu
