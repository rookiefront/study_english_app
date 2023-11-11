<script setup lang="ts">
import { UniappUnit } from "@/utils/UniappUnit";
import {computed, onMounted, reactive, ref} from "vue";
import FyView from "@/component/FyView/index.vue";
import FyIcon from "@/component/FyIcon/index.vue";

const barHeight = ref(0)
const statusBar = ref(0)
const className = ref({})
const props = defineProps({
  showFloor: {
    type: Boolean,
    default: true
  },
  showBack: {
    type: Boolean,
    default: true
  }
})
const mvvmData = reactive({
  floor: [
    {
      label: '主页',
      url: '/pages/index/index',
      icon: 'icon-shouyeshouye'
    },
    {
      label: '关于',
      url: '/pages/about/index',
      icon: 'icon-guanyuwomen'
    }
  ]
})
onMounted(async () => {
  const r = await UniappUnit.getBarHeight()
  barHeight.value = r.customBar
  statusBar.value = r.statusBar
  className.value = UniappUnit.browser
})

const  showBack = computed(() => {
  let currentPages = getCurrentPages();
  console.log(currentPages)
  if (currentPages.length == 1){
    return  false
  }
  return true
})

function goPage(row:any){
  console.log(row)
  // uni.redirectTo({
  //   url: row.url
  // })
}
function onBack(){
  uni.navigateBack()
}
</script>
<script lang="ts">
export default {
  name: 'MainLayout',
}
</script>
<template>
  <FyView class="main-layout" v-if="barHeight">
    <FyView :style="{height: barHeight + 'px'}" class="main-bar-header" :class="className"  style="display: flex;flex-direction: column">
      <FyView :style="{height: statusBar + 'px'}">
        &nbsp;
      </FyView>
      <FyView style="flex: 1;display: flex;justify-content: space-between;align-items: center">
        <FyView style="width: 50rpx">
          <image src="/static/images/back.png" style="height: 50rpx;width: 50rpx;margin-left: 20rpx" @click="onBack" v-if="showBack"></image>
        </FyView>
        <FyView style="flex:1;text-align: center">
          {{$t('global.title')}}
        </FyView>
        <FyView style="width: 50rpx"></FyView>
      </FyView>
    </FyView>
    <FyView class="main-layout-warp">
      <slot></slot>
    </FyView>
    <FyView v-if="props.showFloor" class="layout-floor">
      <FyView v-for="(item) in mvvmData.floor" :key="item.label" class="layout-floor-item" @click="goPage(item)">
        <FyIcon :type="item.icon" class="c-icon" font-size="60rpx"></FyIcon>
        <FyView class="c-label">
          {{item.label}}
        </FyView>
      </FyView>
    </FyView>
  </FyView>
</template>
<style  lang="scss">
$borderColor: #f2f2f2;
.main-layout{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
}
.main-bar-header{
  border: 1px solid $borderColor;
}
.main-layout-warp{
  flex: 1;
  display: flex;
  position: relative;
  padding: 15rpx;
}
.layout-floor{
  display: flex;
  .layout-floor-item{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid $borderColor;
    padding: 10rpx 0;
    border-right: 1px solid $borderColor;
    flex-direction: column;
    &:last-child{
      border-right: unset;
    }
  }
}
</style>
