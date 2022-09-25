import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

import '/node_modules/primeflex/primeflex.css'

const app = createApp(App);

app.use(PrimeVue);

app.mount('#app')
