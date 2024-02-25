import { createApp } from 'vue'
import App from './App.vue'

// i18n
import { createI18n } from 'vue-i18n'
import zh from './translations/zh.json'
import en from './translations/en.json'

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('lang') || 'zh',
    messages: {
        'zh': zh,
        'en': en
    }

})

const app = createApp(App)

app.use(i18n)

app.mount('#app')
