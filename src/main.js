import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router/router.js'

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import '/node_modules/primeflex/primeflex.css'
import Toolbar from 'primevue/toolbar';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import InputMask from 'primevue/inputmask';
import TabMenu from 'primevue/tabmenu';
import DataView from 'primevue/dataview';
import Menubar from 'primevue/menubar';


const app = createApp(App);



app.component('pv-MenuBar',Menubar)
app.component('pv-TabMenu',TabMenu)
app.component('pv-DataView',DataView)
app.component('pv-input-mask',InputMask)
app.component('pv-button',Button)
app.component('pv-password',Password)
app.component('pv-input-text',InputText)
app.component('pv-card',Card)
app.component('pv-toolbar',Toolbar)
app.use(PrimeVue);
app.use(router);
app.mount('#app');
