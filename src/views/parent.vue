<template>
  <div>
    im parent
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到下一页</button>
    <button @click="handleClick('params')">跳转并且传参数</button>
    <button @click="handleClick('query')">跳转并且传递查询参数</button>
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: 'parent',
    methods: {
      handleClick (type) {
        if(type === 'back'){
          // this.$router.back()
          this.$router.go(-1)
        } else if (type === 'push'){
          this.$router.push('/parent/son')
        } else if (type === 'params'){
          // 不同的写法
          // this.$router.push(`/detail/123`)
          // this.$router.push({
          //   path: `/detail/1234`
          // })
          this.$router.push({
            name: 'detail',
            params: {
              id: 123456
            }
          })
        } else if( type === 'query' ){
          this.$router.push({
            name: 'son',
            query: {
              id: 123123123
            }
          })
        }
      }
    }
  }
</script>
