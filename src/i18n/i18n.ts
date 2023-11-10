import {createI18n} from "vue-i18n";
import LangEN from './lang/en.json'
import LangZHCN from './lang/zh-Hans.json'

const i18n =createI18n({
  // locale: uni.getLocale(),// 获取已设置的语言
  locale: 'zh-Hans',// 获取已设置的语言
  messages:{
    en: LangEN,
    'zh-Hans': LangZHCN,
  }
})
export default i18n
