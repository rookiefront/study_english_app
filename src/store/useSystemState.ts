import { defineStore } from "pinia";
type SystemState = {
  isInsideFirstSystem: boolean
}
export const useSystemStateStore = defineStore('useSystemStateStore', {
  state(){
    return <SystemState>{
      isInsideFirstSystem: true,
    }
  },
  getters: {

  },
  actions: {
    clear(){
    }
  }
})
