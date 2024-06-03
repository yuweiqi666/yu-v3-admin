<template>
  <div class="login-wrapper">
    <div class="login-box">
      <h2 class="login-box-title">
        <common-icon prefix="logo" width="24" height="24" style="vertical-align: -3px; margin-right: 5px"></common-icon>
        <span>Yu-Admin</span>
        <el-tag size="small">1.0.0</el-tag>
      </h2>
      <el-form :model="userForm" :rules="userRules" ref="userFormRef">
        <el-form-item prop="username">
          <el-input :prefix-icon="User" v-model="userForm.username" placeholder="用户名" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input :prefix-icon="Lock" type="password" v-model="userForm.password" placeholder="密码" show-password />
        </el-form-item>
        <el-form-item prop="valiText">
          <el-input :prefix-icon="CircleCheck" v-model="userForm.valiText" placeholder="验证码" />
        </el-form-item>
      </el-form>
      <el-button :loading="loading" type="primary" @click="handleClickLogin">登录</el-button>
    </div>
  </div>
</template>

<script setup lang="ts" name="Login">
import { ref } from 'vue'
import { User, Lock, CircleCheck } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router'
// 表单校验hook
import { useUserRules } from '@/hooks/rules'
const userFormRef = ref()
const { userRules } = useUserRules()
// 用户登陆逻辑hook
import { useUserLogin } from './hooks/useUserLogin'
const { loading, userForm, loginHandler } = useUserLogin()
const $router = useRouter()
const $route = useRoute()
const handleClickLogin = async () => {
  try {
    // 表单校验
    await userFormRef.value.validate()
    // 登陆逻辑
    await loginHandler()
    // 登陆成功后页面跳转
    if ($route.query.redirect) {
      $router.push($route.query.redirect as string)
    } else {
      $router.push('/home')
    }
  } catch (error) {
    // 登陆失败或者表单校验失败或者用户获取失败
  }
}
</script>

<style scoped lang="scss">
.login-wrapper {
  height: 100%;
  background: url('../../assets/images/login-bg.jpg') no-repeat center right;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-box {
    width: 400px;
    height: 472px;
    border-radius: 8px;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
    .login-box-title {
      position: relative;
      font-size: 24px;
      padding: 20px 0;
      line-height: 36px;
      text-align: center;

      .el-tag {
        position: absolute;
        right: -40%;
        top: 20px;
      }
    }
    .el-form {
      padding-top: 30px;
      .el-form-item {
        .el-input {
          width: 340px;
          height: 48px;

          :deep(.el-input__wrapper) {
            background-color: transparent;
            &:hover {
              box-shadow: 0 0 0 1px #dcdfe6 inset;
            }
          }
          :deep(.is-focus) {
            box-shadow: 0 0 0 1px #dcdfe6 inset;
          }
        }
        &.is-error {
          :deep(.el-input__wrapper) {
            box-shadow: 0 0 0 1px #f56c6c inset;
            &:hover {
              box-shadow: 0 0 0 1px #f56c6c inset;
            }
          }
        }
      }
    }
    .el-button {
      width: 340px;
      height: 40px;
      margin: 0 auto;
      margin-top: 10px;
    }
  }
}
</style>
