<template>
  <MainLayout>
    <view>
      <view v-for="item in mvvmData.soundmark">
        <view>
          <text> {{item.label}} </text>
        </view>
        <view class="soundmark-row">
          <view v-for="t in item.value" class="soundmark-row-box" @click="onClickSoundmark(t)">
            {{t.tag}}
          </view>
        </view>
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

function onClickSoundmark(soundmark){
  uni.navigateTo({
    url: '/pages/soundmarkDetails/index',
    success: function (res){
      // 通过eventChannel向被打开页面传送数据
      res.eventChannel.emit('acceptData', soundmark as any)
    }
  })
}
</script>

<style scoped lang="scss">
.soundmark-row{
  display: flex;
  padding: 10rpx;
  .soundmark-row-box{
    margin-right: 10px;
    height: 35rpx;
    width: 35rpx;
    padding: 5rpx;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
