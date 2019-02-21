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
  // 组件内路由守卫
  beforeRouteEnter (to, from, next) {
    alert('这是组件内的beforeRouteEnter被触发')
    console.log(to.name, from.name)
    // 这个时候没有实例化，所以没有实例，要想使用实例，可以在next中添加回调函数
    next(vm => {
      console.log(vm)
    })
  },
  beforeRouteLeave (to, from ,next) {
    alert('这是组建内的beforeRouteLeave被触发')
    const answer = confirm('您确定离开吗？')
    if (answer) next()
    else next(false)
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
