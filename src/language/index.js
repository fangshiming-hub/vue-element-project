import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getLocalStorage } from '../common/utils/util'

import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang

import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n)

const messages = {
    en: {
        ...enLocale,
        ...elementEnLocale
    },
    zh: {
        ...zhLocale,
        ...elementZhLocale
    }
}

export function getLanguage() {
    //defullt is zh
    const chooseLanguage = getLocalStorage('language') || 'zh'
    return chooseLanguage
}

const i18n = new VueI18n({
    // set locale
    // options: en | zh 
    locale: getLanguage(),
    // set locale messages
    messages
})

export default i18n