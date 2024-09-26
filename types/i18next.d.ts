// import the original type declarations
import "i18next"

// import all namespaces (for the default language, only)
import type en from "@/i18n/locales/en.json"
import type zhCN from "@/i18n/locales/zh-CN.json"
import viVN from "./locales/vi-VN.json"

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: "vi"
    // custom resources type
    resources: {
      en: typeof en
      zhCN: typeof zhCN
      viVN: typeof viVN
    }
  }
}
