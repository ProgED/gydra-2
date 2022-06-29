import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import mesagePlugin from './utils/mesage.plugin'
import 'materialize-css/dist/js/materialize.min'

createApp(App).use(store).use(router).use(mesagePlugin).mount('#app')
