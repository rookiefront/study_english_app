<template>
  <MainLayout>
    <FyView class="abced">
      {{$t('soundmark')}}
      <FyText :style="{color: 'red'}"> {{$t('soundmark')}} </FyText>
    </FyView>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layout/index.vue";
import {onMounted} from "vue";
import {UniappUnit } from "@/utils/UniappUnit";
import FyView from "@/component/FyView/index.vue";
import FyText from "@/component/FyText/index.vue";

onMounted(() => {

})
</script>

<style>
</style>
