import { createApp } from 'vue'
import i18n from './internationalization/locales/i18n.js'
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
import Panel from 'primevue/panel';
import Paginator from 'primevue/paginator';
import Dialog from 'primevue/dialog';

const app = createApp(App);

app.component('pv-dialog',Dialog)
app.component('pv-paginator',Paginator)
app.component('pv-panel',Panel)
app.component('pv-menu-bar',Menubar)
app.component('pv-tab-menu',TabMenu)
app.component('pv-data-view',DataView)
app.component('pv-input-mask',InputMask)
app.component('pv-button',Button)
app.component('pv-password',Password)
app.component('pv-input-text',InputText)
app.component('pv-card',Card)
app.component('pv-toolbar',Toolbar)
app.use(PrimeVue);
app.use(i18n)
app.use(router);
app.mount('#app');
