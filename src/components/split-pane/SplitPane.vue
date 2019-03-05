<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="left" :style="{width: leftOffsetPercent}">
    </div>
    <div class="drag" :style="{left: triggerLeft, width: `${triggerWidth}px`}" @mousedown="handleMousedown"></div>
    <div class="right" :style="{left: leftOffsetPercent}"></div>   
  </div>
</template>

<script>
  export default {
    name: 'SplitPane',
    data () {
      return {
        canMove: false,
        initOffset: 0
      }
    },
    props: {
      leftOffset: {
        type: Number,
        default: .3
      },
      triggerWidth: {
        type: Number,
        default: 80
      },
      min: {
        type: Number,
        default: .1
      },
      max: {
        type: Number,
        default: .9
      }
    },
    computed: {
      leftOffsetPercent () {
        return `${this.leftOffset * 100}%`
      },
      // 在computed里面不能直接使用在computed里定义的其他变量,例如this.leftOffsetPercent不生效。
      triggerLeft () {
        return `calc(${this.leftOffset * 100}% - ${this.triggerWidth/2}px)`
      }
    },
    methods: {
      handleMousedown (event) {
        document.addEventListener('mousemove', this.handleMousemove)
        document.addEventListener('mouseup', this.handleMouseup)

        // 优化鼠标点击有偏移的小bug
        this.initOffset = event.pageX - event.target.getBoundingClientRect().left

        // 按下鼠标，激活可移动开关
        this.canMove = true
      },
      handleMousemove (event) {
        if(!this.canMove) return
        const outerRect = this.$refs.outer.getBoundingClientRect()
        let offset = (event.pageX - this.initOffset + this.triggerWidth / 2 - outerRect.x) / outerRect.width
        if(offset < this.min) offset = this.min
        if(offset > this.max) offset = this.max

        // 由于子组件不能直接修改父组件的值，所以这里使用通信，派发一个事件给父组件
        // this.$emit('leftOffsetChange', offset)

        // 还有一种新写法用于父子组件互动
        this.$emit('update:leftOffset', offset)
      },
      handleMouseup () {
        // 一种方式是解绑
        // document.removeEventListener('mousemove', this.handleMousemove)

        // 另外一种方式, 抬起鼠标，关闭可移动开关
        this.canMove = false
      }
    }
  }
</script>

<style scoped lang="stylus">
.split-pane-wrapper
  position: relative
  height: 100%
  .left, .right
    float: left
    height: 100%
  .left 
    background: #333
  .right
    position: absolute
    right: 0
    bottom: 0;
    background: #ff5252
  .drag
    position: absolute
    z-index: 999
    height: 100%
    top:0
    background:green
</style>