<template>
  <div>
    <button @click="handleClick">点我一下</button>
  </div>
</template>
<script>
  export default {
    name: 'busTest',
    mounted() {
      this.$bus.$on('clicked', message => {
        alert(`received---${message}`)
      })
    },
    methods: {
      handleClick() {
        // emit
        this.$bus.$emit('clicked', 'hello dad...')
      }
    }
  }
</script>
