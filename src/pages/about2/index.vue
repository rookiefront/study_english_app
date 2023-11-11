<script setup lang="ts">

import MainLayout from "@/layout/index.vue";
import {onMounted} from "vue";
import { onLoad } from "@dcloudio/uni-app";
import {useSystemStateStore} from "@/store/useSystemState";
const systemStateStore =  useSystemStateStore()
onMounted(() =>{
})
// onLoad((option) => {
//   // const eventChannel = this.getOpenerEventChannel();
//   // console.log(eventChannel)
//   const pages = getCurrentPages();  // 无需import
//   const page = pages[pages.length - 1];
//   const eventChannel = page.getOpenerEventChannel();
//   // eventChannel.emit('acceptDataFromOpenedPage', { data: 'data from test page' });
//   // eventChannel.emit('someEvent', { data: 'data from test page for someEvent' });
// // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
//   eventChannel.on('acceptDataFromOpenerPage', function (data) {
//     console.log(data)
//   })
// })
</script>

<template>
  <MainLayout>
  </MainLayout>
</template>

<style scoped>

</style>
