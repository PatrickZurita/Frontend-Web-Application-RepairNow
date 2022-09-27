import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router/router.js'

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import '/node_modules/primeflex/primeflex.css'
import Toolbar from 'primevue/toolbar';


const app = createApp(App);
app.component('pv-toolbar',Toolbar)
app.use(PrimeVue);
app.use(router);
app.mount('#app');
