import { createSSRApp } from "vue";
import App from "./App.vue";
import VueI18n from './i18n/i18n'
import {UniappUnit} from "@/utils/UniappUnit";
import './static/iconfont/iconfont.css'
const { t } = VueI18n.global
UniappUnit.$t = t
UniappUnit.execCurrentBrowser()
export function createApp() {
  const app = createSSRApp(App);
  app.use(VueI18n)
  return {
    app,
  };
}
