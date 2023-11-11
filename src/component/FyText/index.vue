<script setup lang="ts">

</script>
<script lang="ts">
export default {
  name: 'FyText'
}
</script>
<template>
<text :class="$attrs.class" :style="$attrs.style">
  <slot></slot>
</text>
</template>

<style scoped>

</style>
