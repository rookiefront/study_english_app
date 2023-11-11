<template>
  <MainLayout>
    <view class="abced">
      {{$t('soundmark')}}
      <text :style="{color: 'red'}"> {{$t('soundmark')}} </text>
    </view>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layout/index.vue";
</script>

<style>
</style>
