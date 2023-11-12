<template>
  <MainLayout>
    <view>
      <view>
        元音 | 单元音 | 前元音
      </view>
      <view>
      </view>
    </view>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layout/index.vue";
import {reactive} from "vue";
const mvvmData = reactive({
  soundmark: [
    {
      label: '元音 | 单元音 | 前元音',
      value: [
        {
          tag: 'i:',
        },
        {
          tag: 'ɪ',
        },
        {
          tag: 'e',
        },
        {
          tag: 'æ',
        }
      ]
    },
    {
      label: '元音 | 单元音 | 中元音',
      value: [
        {
          tag: 'ɜ:',
        },
        {
          tag: 'ə',
        },
        {
          tag: 'ʌ',
        },
      ]
    },
    {
      label: '元音 | 单元音 | 后元音',
      value: [
        {
          tag: 'u:',
        },
        {
          tag: 'ʊ',
        },
        {
          tag: 'ɔ:',
        },
        {
          tag: 'ɒ',
        },
        {
          tag: 'ɑ:',
        },
      ]
    },
    {
      label: '双元音 | 开合双元音',
      value: [
        {
          tag: 'eɪ',
        },
        {
          tag: 'aɪ',
        },
        {
          tag: 'ɔɪ',
        },
        {
          tag: 'aʊ',
        },
        {
          tag: 'əʊ',
        },
      ]
    },
    {
      label: '双元音 | 开合双元音',
      value: [

        {
          tag: 'ɪe',
        },
        {
          tag: 'eə',
        },
        {
          tag: 'ʊə',
        },
      ]
    },
    {
      label: '辅音 | 爆破音 | 清辅音',
      value: [
        {
          tag: 'p',
        },
        {
          tag: 't',
        },
        {
          tag: 'k',
        },
      ]
    },
    {
      label: '辅音 | 爆破音 | 浊辅音',
      value: [
        {
          tag: 'b',
        },
        {
          tag: 'd',
        },
        {
          tag: 'g',
        },
      ]
    },
    {
      label: '辅音 | 摩擦音 | 清辅音',
      value: [
        {
          tag: 'f',
        },
        {
          tag: 's',
        },
        {
          tag: 'ʃ',
        },
        {
          tag: 'θ',
        },
        {
          tag: 'h',
        },
      ]
    },
    {
      label: '辅音 | 摩擦音 | 浊辅音',
      value: [
        {
          tag: 'v',
        },
        {
          tag: 'z',
        },
        {
          tag: 'ʒ',
        },
        {
          tag: 'ð',
        },
        {
          tag: 'r',
        },
      ]
    },
    {
      label: '辅音 | 破擦音 | 清辅音',
      value: [
        {
          tag: 'tʃ',
        },
        {
          tag: 'tr',
        },
        {
          tag: 'ts',
        },
      ]
    },
    {
      label: '辅音 | 破擦音 | 浊辅音',
      value: [
        {
          tag: 'dʒ',
        },
        {
          tag: 'dr',
        },
        {
          tag: 'dz',
        },
      ]
    },
    {
      label: '辅音 | 鼻音 | 浊辅音',
      value: [
        {
          tag: 'm',
        },
        {
          tag: 'n',
        },
        {
          tag: 'ŋ',
        },
      ]
    },
    {
      label: '辅音 | 舌则音 | 浊辅音',
      value: [
        {
          tag: 'ǀ',
        },
      ]
    },
    {
      label: '辅音 | 半元音 | 浊辅音',
      value: [
        {
          tag: 'j',
        },
        {
          tag: 'w',
        },
      ]
    }
  ]
})
</script>

<style>
</style>
