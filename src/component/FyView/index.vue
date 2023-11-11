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
  <view :class="bind.class">
    <slot></slot>
  </view>
</template>

<style scoped>

</style>
