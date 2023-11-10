<script setup lang="ts">
import {useAttrs} from "vue";

const bind = useAttrs()

</script>
<script lang="ts">
export default {
  name: 'FyView'
}
</script>
<template>
  <view v-bind="bind">
    <slot></slot>
  </view>
</template>

<style scoped>

</style>
