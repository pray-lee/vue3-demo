<template>
  <div class="pane-container">
    <!-- <split-pane :leftOffset="leftOffset" @leftOffsetChange="handleChange"></split-pane> -->
    <split-pane :leftOffset.sync="value"></split-pane>
  </div>
</template>

<script>
import SplitPane from '_c/split-pane'
  export default {
    name: 'Split_Pane',
    data () {
      return {
        value: .9
      }
    },
    components: {
      SplitPane
    },
    methods: {
      // 如果是用sync新写法的话，这里就不用写接收事件了。
      // handleChange (offset) {
      //   this.value = offset
      // }
    }
  }
</script>

<style scoped lang="stylus">
.pane-container
  margin: 20px auto
  width: 600px
  height: 400px
  background: #ff6700
</style>