<template>
  <div>
    <slot name="left"></slot>
    <span :id="elemId" ref="number"></span>
    <slot name="right"></slot>
  </div>
</template>

<script>
  import CountUp from 'countup'
  export default {
    props: {
      endVal: {
        type: Number,
        required: true,
      },
      startVal: {
        type: Number,
        default: 0
      },
      decimals: {
        type: Number,
        default: 0
      },
      duration: {
        type: Number,
        default: 10
      },
      useEasing: {
        type: Boolean,
        default: true
      },
      separator: {
        type: String,
        default: ','
      }
    },
    name: 'countUp',
    computed: {
      elemId () {
        return `count_to_${this._uid}`
      }
    },
    data () {
      return {
        counter: {}
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.counter = new CountUp(this.elemId, this.endVal)
        this.counter.start()
      })
    },
    methods: {
      getNumber() {
        return this.$refs.number.innerText
      }
    }
  }
</script>

<style scoped>

</style>