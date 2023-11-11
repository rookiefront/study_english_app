<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import FyView from "@/component/FyView/index.vue";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style></style>
<template>
  <FyView>
    app
  </FyView>
</template>
