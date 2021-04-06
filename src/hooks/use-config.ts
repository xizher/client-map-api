/* eslint-disable @typescript-eslint/ban-types */
import { reactive, Ref, ref } from 'vue'
import createFetch from '@xizher/fetch-helper'
import { baseUtils } from '@xizher/js-utils'
import * as ol from '@xizher/ol'
import * as cesium from '@xizher/cesium'
import * as esri from '@xizher/esri'
import * as leaflet from '@xizher/leaflet'

export interface IRoute {
  name: string
  path: string
}

export interface IConfig {
  appName: string
  routerConfig: {
    defaultRouteName: string
    routes: IRoute[]
  }
  webMapConfig: {
    ol: {
      webMapOptions: ol.IWebMapOptions
      basemapOptions: ol.IBasemapOptions
    }
    cesium: {
      webMapOptions: cesium.IWebMapOptions
      basemapOptions: cesium.IBasemapOptions
    }
    arcgisjsapi: {
      webMapOptions: esri.IWebMapOptions
      basemapOptions: esri.IBasemapOptions
    }
    arcgisjsapi3d: {
      webMapOptions: esri.IWebMapOptions
      basemapOptions: esri.IBasemapOptions
    }
    leaflet: {
      webMapOptions: leaflet.IWebMapOptions
      basemapOptions: leaflet.IBasemapOptions
    }
  }
}

export type Config = IConfig | {}

const config: Config = reactive({})
const loaded = ref(false)

export function useInitConfig () : Promise<void> {
  return createFetch()
    .setUrl('/config.json')
    .mountGet()
    .then(res => res.json())
    .then(res => {
      baseUtils.$extend(true, config, res)
      document.title = (config as IConfig).appName
      loaded.value = true
    })
}

export default function () : [IConfig, Ref<boolean>] {
  return [config as IConfig, loaded]
}
