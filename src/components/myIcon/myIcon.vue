<template>
    <!-- 展示外部图标 -->
    <div v-if="externalFlag" :style="styleExternalIcon" class="svg-external-icon svg-icon" :class="className"></div>
    <!-- 展示内部图标 -->
    <svg v-else :class="className" aria-hidden="true">
        <use :xlink:href="iconName" />
    </svg>
</template>
    
<script setup lang='ts'>
import { computed } from 'vue'
import type { iconProps } from './types'
import { isExternal } from '@/utils/vaildate'
const props = withDefaults(defineProps<iconProps>(), {
    className: ''
})
// 判断是否外部样式
const externalFlag = computed( () => isExternal(props.icon))
// 外部图标样式
const styleExternalIcon = computed(() => {
    return {
        mask: `url(${props.icon}) no-repeat 50% 50%`,
        '-weikit-mask': `url(${props.icon}) no-repeat 50% 50%`
    }
})
// 内部图标
const iconName = computed(() => `#icon-${props.icon}`)
</script>
    
<style lang="scss" scoped>
    .svg-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    .svg-external-icon {
        background-color: currentColor;
        mask-size: cover !important;
        display: inline-block;
    }
</style>