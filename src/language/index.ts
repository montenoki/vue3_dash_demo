import { createI18n, I18nOptions } from 'vue-i18n'
const modules = import.meta.globEager('./*')

function loadLocaleMessages(): any {
    let message: any = {}
    getLocateFiles(modules, message)
    return message
}

function getLocateFiles(mList: any, msg: any) {
    for (let path in mList) {
        if (mList[path].default) {
            let pathName = path.substr(path.lastIndexOf('/') + 1, 5)
            if (msg[pathName]) {
                msg[pathName] = {
                    ...mList[pathName],
                    ...mList[path].default
                }
            } else {
                msg[pathName] = mList[path].default
            }
        }
    }
}
const i18n = createI18n({
    legacy: false,
    useScope: "global",
    globalInjection: true,
    locale: navigator.language || import.meta.env.VUE_APP_LOCALE || "en-US",
    fallbackLocale: navigator.language || import.meta.env.VUE_APP_FALLBACK_LOCALE || "en-US",
    messages: loadLocaleMessages(),
    silentTranslationWarn: true
} as I18nOptions)

export default i18n;