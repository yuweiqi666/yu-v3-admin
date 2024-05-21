<template>
  <div>
    login页面
    <el-button type="primary" size="large">Primary</el-button>
    <div v-for="(i, index) in 5" :key="i">{{ i }}{{ index }}</div>
    <el-space wrap>
      <el-card v-for="i in 3" :key="i" class="box-card" style="width: 250px">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
            <el-button class="button" text>Operation button</el-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ 'List item ' + o }}
        </div>
      </el-card>
    </el-space>
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
