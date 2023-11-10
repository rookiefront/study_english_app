<template>
  <MainLayout>

  </MainLayout>
<!--  <FyView class="content">-->
<!--    <FyView @click="click">-->
<!--      <image class="logo" src="/static/logo.png" />-->
<!--    </FyView>-->
<!--  </FyView>-->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FyView from "@/component/FyView/index.vue";
import MainLayout from "@/layout/index.vue";
const title = ref('Hello')
function click(){
  uni.showToast({
    title: 'hello'
  })
}
</script>

<style>
</style>
