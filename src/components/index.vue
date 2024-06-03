<template>
  <svg :style="{ width: width + 'px', height: height + 'px' }">
    <use :xlink:href="`#icon-${prefix}`" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts" name="CommonIcon">
withDefaults(
  defineProps<{
    width?: string
    height?: string
    color?: string
    prefix: string
  }>(),
  {
    width: '16',
    height: '16'
  }
)
</script>

<style scoped lang="scss"></style>
