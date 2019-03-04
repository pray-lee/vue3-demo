<template>
  <div>
    <button @click="getUserInfo">获取用户信息</button>
  </div>
</template>

<script>
import { userInfo } from '@/api/user'
  export default {
    methods: {
      getUserInfo () {
        userInfo().then(res => {
          console.log(res)
        })
      }
    } 
  }
</script>

<style scoped>

</style>