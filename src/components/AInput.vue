<template>
    <div>
      <input type="text" @input="handleInput" :value="value">
    </div>
</template>

<script>
  export default {
    name: "AInput",
    props: {
      value:{
        type: [String, Number],
        default: ''
      }
    },
    methods: {
      handleInput(event) {
        const val = event.target.value
        this.$emit('input', val)
      }
    }
  }
</script>

<style scoped>

</style>
