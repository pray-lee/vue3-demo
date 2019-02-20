<template>
  <div>
    <!--动态参数-->
    detail param : {{$route.params.id}}
    <br />
    <br />
    <br />
    通过路由组件传参的形式{{id}},
    <br>
    <b>在router对应的路由设置中设置了props: true之后，就可以直接访问id了</b>
  </div>
</template>
<script>
  export default {
    name: 'detail',
    // id是路由传过来的参数，需要在路由中设置props: true
    props: {
      id: {
        type: String,
        default: '173'
      }
    }
  }
</script>
