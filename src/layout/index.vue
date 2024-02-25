<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="app-wrapper">
        <!-- 左侧菜单 -->
        <side-bar class="sidebar-container" :style="{  backgroundColor: styles.menuBg }"></side-bar>
        <div class="main-container">
            <!-- 顶部导航 -->
            <div class="fixed-header">
                <nav-bar></nav-bar>
            </div>
            <!-- 内容区 -->
            <app-main></app-main>
        </div>
        
    </div>
</template>
<script setup lang="ts">
    import SideBar from './components/SideBar/index.vue'
    import AppMain from './components/AppMain.vue'
    import NavBar from './components/NavBar.vue'
    import styles from '../styles/variables.module.scss'
</script>
<style lang="scss" scoped>
@import '../styles/mixins.scss';
@import '../styles/variables.module.scss';
.app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    // background-color: #000;
}
.fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    // background-color: #000;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
}

</style>