<script setup lang="ts">
import {UniappUnit} from "@/utils/UniappUnit";
import {computed, onMounted, reactive, ref} from "vue";
import FyIcon from "@/component/FyIcon/index.vue";
import {useSystemStateStore} from "@/store/useSystemState";

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
  isApp: false,
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
    },
    {
      label: '关于2',
      url: '/pages/about2/index',
      icon: 'icon-guanyuwomen'
    }
  ]
})
const systemStateStore = useSystemStateStore()

onMounted(async () => {
  // uni.hideTabBar()
  const r = await UniappUnit.getBarHeight()
  barHeight.value = r.customBar
  statusBar.value = r.statusBar
  className.value = UniappUnit.browser

  if (systemStateStore.isInsideFirstSystem) {
    uni.hideTabBar()
    uni.showLoading({
      mask: true,
      title: '初始化'
    })
    if (mvvmData.floor.length > 1){
      for (const mvvmDataKey in mvvmData.floor) {
        if (mvvmDataKey == '0'){
          continue
        }
        await initSwitch(mvvmData.floor[mvvmDataKey].url)
      }
      await initSwitch(mvvmData.floor[0].url)
    }
    setTimeout(() => {
      uni.hideLoading()
    },1000)
    systemStateStore.isInsideFirstSystem = false
  }

})

async function initSwitch(url: string){
  await new Promise((resolve) => {
    uni.switchTab({
      url: url,
      success: function (){
        resolve(true)
      }
    })
  })
}

const showBack = computed(() => {
  let currentPages = getCurrentPages();
  if (currentPages.length == 1) {
    return false
  }
  return true
})

function goPage(row: any) {
  uni.switchTab({
    url: row.url,
  })
}

function onBack() {
  uni.navigateBack()
}
</script>
<script lang="ts">
export default {
  name: 'MainLayout',
}
</script>
<template>
  <view class="main-layout" v-if="barHeight">
    <view :style="{height: barHeight + 'px'}" class="main-bar-header" :class="className"
            style="display: flex;flex-direction: column">
      <view :style="{height: statusBar + 'px'}">
        &nbsp;
      </view>
      <view style="flex: 1;display: flex;justify-content: space-between;align-items: center">
        <view style="width: 50rpx">
          <image src="/static/images/back.png" style="height: 50rpx;width: 50rpx;margin-left: 20rpx" @click="onBack"  v-if="showBack"></image>
        </view>
        <view style="flex:1;text-align: center">
          {{ $t('global.title') }}
        </view>
        <view style="width: 50rpx"></view>
      </view>
    </view>
    <view class="main-layout-warp">
      <slot v-if="!systemStateStore.isInsideFirstSystem"></slot>
    </view>
    <view v-if="props.showFloor" class="layout-floor">
      <view v-for="(item) in mvvmData.floor" :key="item.label" class="layout-floor-item" @click="goPage(item)">
        <FyIcon :type="item.icon" class="c-icon" font-size="60rpx"></FyIcon>
        <view class="c-label">
          {{ item.label }}
        </view>
      </view>
    </view>
  </view>
</template>
<style lang="scss">
$borderColor: #f2f2f2;

.main-layout {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
}

.main-bar-header {
  border: 1px solid $borderColor;
}

.main-layout-warp {
  flex: 1;
  display: flex;
  position: relative;
  padding: 15 rpx;
}

.layout-floor {
  display: flex;

  .layout-floor-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid $borderColor;
    padding: 10 rpx 0;
    border-right: 1px solid $borderColor;
    flex-direction: column;

    &:last-child {
      border-right: unset;
    }
  }
}
</style>
