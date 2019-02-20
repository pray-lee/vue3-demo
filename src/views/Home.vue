<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick">go son component with query</button>
    <br>
    从路由传参（函数模式）带过来的type参数是{{type}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  props: {
    type: {
      type: String,
      default: 'home'
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    handleClick () {
      this.$router.push({
        name: 'son',
        query: {
          name: 'hejianping'
        }
      })
    }
  }
}
</script>
