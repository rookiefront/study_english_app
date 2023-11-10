<script setup lang="ts">
const props = defineProps({
  type: {
    required: true,
    default: 'icon-erweima'
  },
  fontSize: {
    default: undefined
  }
})
</script>
<script lang="ts">
export default {
  name: 'FyIcon'
}
</script>
<template>
  <text class="rk-icon iconfont" :class="props.type" :style="{fontSize: props.fontSize}"></text>
</template>

<style scoped lang="scss">

</style>
