<script setup lang="ts">
import {onMounted, reactive} from "vue";
import {UniappUnit} from "@/utils/UniappUnit";
import {useSystemStateStore} from "@/store/useSystemState";

const mvvmData = reactive({
  acceptData : {}
})
const systemStateStore = useSystemStateStore()
onMounted(() => {
  const eventChannel = UniappUnit.getPageEventChannel()
  eventChannel.on('acceptData', function(data) {
    mvvmData.acceptData = data
    console.log(mvvmData.acceptData)
  })
})
</script>

<template>
<view>
  {{mvvmData.acceptData}}
  {{systemStateStore}}
</view>
</template>

<style scoped lang="scss">

</style>
