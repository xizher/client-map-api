import { createApp } from 'vue'
import App from './App.vue'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './styles/index.css'
import { useInitConfig } from './hooks/use-config'
import initRouter from './router'

useInitConfig().then(() => {
  createApp(App)
    .use(initRouter())
    .use(antd)
    .mount('#app')
})
