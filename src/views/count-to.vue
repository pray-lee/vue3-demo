<template>
  <div>
    <count-to :endVal="endVal" ref="countTo">
      <span slot="left">总金额:</span>
      <span slot="right">元</span>
    </count-to>
    <button @click="getCount">获取count-to组件里面的number</button>
  </div>
</template>

<script>
import CountTo from '_c/count-to'
  export default {
    name: 'count_to',
    data () {
      return {
        endVal: 100,
      }
    },
    components: {
      CountTo
    },
    methods: {
      getCount () {
        // 在组件标签上设置ref,就可以获取到组件内部设置的属性和方法, getNumber方法在组建内部
        console.log(this.$refs.countTo.getNumber(), this.$refs.countTo.counter)
      }
    }
  }
</script>

<style scoped>

</style>