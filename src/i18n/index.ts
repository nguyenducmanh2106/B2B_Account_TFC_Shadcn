import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
// import Backend from "i18next-http-backend"
import { initReactI18next } from "react-i18next"

// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init
import en from "./locales/en.json"
import zhCN from "./locales/zh-CN.json"
import viVN from "./locales/vi-VN.json"

const resources = {
  en: {
    translation: en,
  },
  zh: {
    translation: zhCN,
  },
  vi: {
    translation: viVN,
  }
}
export const languages = [
  {
    value: "en",
    label: "English",
    icon: "🇬🇧",
  },
  // {
  //   value: "zh",
  //   label: "中文",
  //   icon: "🇨🇳",
  // },
  {
    value: "vi",
    label: "Tiếng Việt",
    icon: "vi",
  },
]
i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  // .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: 'vi',
    resources,
    fallbackLng: "vi",
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export { default as i18n } from "i18next"
