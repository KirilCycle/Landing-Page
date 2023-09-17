import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'
import components from '@/components/UI/index.js'
import svgcomponents from '@/svg/index'

const app = createApp(App)

components.forEach((comp) => app.component(comp.name, comp))
svgcomponents.forEach((comp) => app.component(comp.name, comp))


app.use(router)
app.mount('#app')



