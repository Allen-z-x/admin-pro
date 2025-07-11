<template>
  <!-- 开启顶部安全区适配 -->
  <van-nav-bar safe-area-inset-top />
  <router-view></router-view>
  <!-- 开启底部安全区适配 -->
  <van-number-keyboard safe-area-inset-bottom />
</template>
<script setup></script>
<style lang="less">
#app {
  width: 100vw;
  height: 100vh;
}
</style>
