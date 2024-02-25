<template>
    <div class="login-container">
        <!-- username -->
        <el-form ref="loginFormRef" class="login-form" :model="loginForm" :rules="loginRules">
            <div class="title-container">
                <h3 class="title">用户登录</h3>
            </div>
            <el-form-item prop="username">
                <span class="svg-container">
                    <el-icon><Avatar /></el-icon>
                </span>
                <el-input v-model="loginForm.username" placeholder="用户名" type="text" name="username"></el-input>
            </el-form-item>
            <!-- password -->
            <el-form-item prop="password">
                <span class="svg-container">
                    <el-icon><Lock /></el-icon>
                </span>
                <el-input v-model="loginForm.password" placeholder="密码" :type="passwordType" name="password"></el-input>
                <span class="svg-container" @click="switchPassword">
                    <el-icon>
                        <View v-if="passwordType === 'password'" />
                        <Hide v-if="passwordType === 'text'" />
                    </el-icon>
                </span>
            </el-form-item>
            <!-- 登录按钮 -->
            <el-button type="primary" style="width: 100%; margin-bottom: 30px;" @click="handleLogin" :loading="loading">登录</el-button>
        </el-form>

    </div>
</template>
    
<script setup lang='ts'>
import {Avatar, Lock, View, Hide} from '@element-plus/icons-vue'
import type { FormRules, FormInstance } from 'element-plus'
import { reactive, ref } from 'vue'
import { validatePassword, type LoginForm } from './login'
import { useLoginStore } from '@/stores/index'
// import myIcon from '@/components/myIcon/myIcon.vue'
// 登录表单
const loginForm = reactive<LoginForm>({
    username: 'admin',
    password: '000000'
})
const loginRules = reactive<FormRules>({
    username: [
        {
            required: true,
            trigger: 'blur',
            message: '请输入用户名'
        }
    ],
    password: [
        {
            required: true,
            trigger: 'blur',
            validator: validatePassword,
        }
    ]
})
// 切换密码是否可见
const passwordType = ref('password')
const switchPassword = () => {
    if (passwordType.value === 'password') {
        passwordType.value = 'text'
    } else {
        passwordType.value = 'password'
    }
}
// 登录
const loading = ref(false)
const loginFormRef = ref<FormInstance>()
const store = useLoginStore()
const handleLogin = () => {
    // 表单校验
    console.log(loginFormRef.value);
    
    loginFormRef.value?.validate(vaild => {
        if(!vaild) return
        loading.value = true
        store.login(loginForm).then((res) => {
            console.log(res);
            loading.value = false
        })
        .catch(err => {
            console.log(err)
            loading.value = false
            
        })
    })
    // 登录动作

    // 登录后处理
}
</script>
    
<style lang="scss" scoped>
    $bg: #2d3a4b;
    $dark_gray: #889aa4;
    $light_gray: #eee;
    $cursor: #fff;
    .login-container {
        min-height: 100%;
        width: 100%;
        background-color: $bg;
        overflow: hidden;
        .login-form {
            position: relative;
            width: 520px;
            padding: 160px 35px 0;
            margin: 0 auto;
            overflow: hidden;
            :deep(.el-input__wrapper) {
                background: transparent;
                box-shadow: none;
                width: 100%;
            }
            :deep(.el-form-item) {
                border: 1px solid rgba(255, 255, 255, .1);
                background-color: rgba(0, 0, 0, .1);
                border-radius:  5px;
                color:  #454545;
            }
            :deep(.el-input) {
                display: inline-block;
                height: 47px;
                line-height: 47px;
                width: 85%;
                input {
                    background: transparent;
                    border: none;
                    border-radius: 0px;
                    padding: 12px 5px 12px 15px;
                    color: $light_gray;
                    caret-color: $cursor;
                }
            }
        }
        .svg-container {
            padding: 6px 5px 5px 15px;
            color: $dark_gray;
            vertical-align: middle;
            display: inline-block;
        }
        .title-container {
            position: relative;
            .title {
                font-size: 26px;
                color: $light_gray;
                margin: 0px auto 40px auto;
                text-align: center;
                font-weight: bold;
            }
        }
        .show-pwd {
            position: absolute;
            right: 10px;
            top: 7px;
            font-size: 16px;
            color: $dark_gray;
            cursor: pointer;
            user-select: none;
        }
    }
</style>