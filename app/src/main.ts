import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'
import { vLongpress } from '@nanogiants/vue3-longpress';

import App from './App.vue'
import './assets/settings.css'
import './assets/base.css'

const app = createApp(App)

app.directive('use-longpress', vLongpress)
app.use(createPinia())
app.use(MotionPlugin)
app.mount('#app')
