import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router/router.js';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import InputMask from 'primevue/inputmask';
import Password from 'primevue/password';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import '/node_modules/primeflex/primeflex.css'
import Toolbar from 'primevue/toolbar';


const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.mount('#app');
app.component('pv-toolbar',Toolbar);
app.component('InputText', InputText);
app.component('InputNumber', InputNumber);
app.component('InputMask', InputMask);
app.component('Password', Password);