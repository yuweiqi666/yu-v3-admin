<template>
  <div>
    login页面
    <div v-for="(i, index) in 5" :key="i">{{ i }}{{ index }}</div>
  </div>
</template>

<script setup lang="ts" name="">
// import { useUserStore } from '@/store/user/index'
// const userStore = useUserStore()
// userStore.fetchLogin({
//   username: '123',
//   password: 111
// })
function test(a: any) {
  console.log(a)
}

const user = {
  v: '1'
}
console.log(user)

test(1)
const a = 'vuesss'
console.log(a)
</script>

<style scoped lang="scss"></style>
