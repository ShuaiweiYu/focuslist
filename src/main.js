import { createApp } from 'vue'
import App from './App.vue'

// i18n
import { createI18n } from 'vue-i18n'
import zh from './translations/zh.json'
import en from './translations/en.json'

function onSwitchLocale(locale) {
    const locales = ["zh-CN", "en-US"];
    if (locale && locales.includes(locale)) {
        i18n.locale = locale;
        localStorage.setItem("lang", locale);
        return true;
    } else {
        return false;
    }
}


const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('lang') || 'en-US',
    messages: {
        'zh-CN': zh,
        'en-US': en
    }

})

function switchLocale(){
    const language = navigator.language;
    onSwitchLocale(language);
}

switchLocale()

const app = createApp(App)

app.use(i18n)

app.mount('#app')
