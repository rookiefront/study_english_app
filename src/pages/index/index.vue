<template>
  <MainLayout>
    <FyView class="abced">
      {{$t('soundmark')}}
    </FyView>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layout/index.vue";
import {onMounted} from "vue";
import {UniappUnit } from "@/utils/UniappUnit";
import FyView from "@/component/FyView/index.vue";

onMounted(() => {

})
</script>

<style>
</style>
