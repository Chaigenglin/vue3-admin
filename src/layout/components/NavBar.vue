<template>
    <div class="navbar">
        <div class="right-menu">
            <!-- 头像 -->
            <el-dropdown class="avatar-container" trigger="click">
                <div class="avatar-wrapper">
                    <el-avatar style="margin-right: 12px;" shape="square" :size="40" :src="store.userInfo.avatar || ''" fit="cover">
                    </el-avatar>
                    <el-icon><Setting /></el-icon>
                </div>
                <template #dropdown>
                    <el-dropdown-menu class="user-dropdown">
                        <router-link to="/">
                            <el-dropdown-item>主页</el-dropdown-item>
                        </router-link>
                        <el-dropdown-item @click="logout" divided>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { useLoginStore } from '@/stores';
    import {Setting} from '@element-plus/icons-vue'
    const store = useLoginStore()
    const logout = ()=> {
        store.logout()
    }
</script>
<style lang="scss" scoped>
    .navbar {
        height: 50px;
        overflow: hidden;
        position: relative;
        background-color: #fff;
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08 );
        .right-menu {
            display: flex;
            align-items:center ;
            height: 100%;
            float: right;
            padding-right: 16px;
            :v-deep(.avatar-container) {
                cursor: pointer;
                .avatar-wrapper {
                    margin-top: 5px;
                    position: relative;
                    .el-avatar {
                        --el-avatar-bg-color: none;
                    }
                }
            }
        }
    }
</style>