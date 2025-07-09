<template>
  <div>login</div>
</template>
<script lang="ts" setup>
defineOptions({ name: 'LoginIndex' })
import { useUserStore } from '@/store/user'
const userStore = useUserStore()
console.log(userStore)
</script>
<style lang="less" scoped></style>
