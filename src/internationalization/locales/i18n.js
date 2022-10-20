import {createI18n} from 'vue-i18n'
import en from '../languages/en.json'
import es from '../languages/es.json'


const i18n=createI18n({
    locale:"es",
    messages:{
        en:en,
        es:es 
    }
})

export default i18n;


