import { defineStore } from "pinia";
import dayjs from "dayjs";
type SystemState = {
  isInsideFirstSystem: boolean,
  appStartTime: any,
  switchTabBarTotal: number
}
export const useSystemStateStore = defineStore('useSystemStateStore', {
  state(){
    return <SystemState>{
      isInsideFirstSystem: true,
      switchTabBarTotal: 0,
      appStartTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
    }
  },
  getters: {

  },
  actions: {
    clear(){
    }
  }
})
