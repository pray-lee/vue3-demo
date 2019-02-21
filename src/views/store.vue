<template>
  <div>
    <!--<a-input @input="handleInput" :value="val"></a-input>-->
    <!--组件的v-model是一种语法糖,如果不用v-model指令，则需要写成上面那样，监听子组件传回来的input事件,并且把value传到子组件的props中-->
    <a-input v-model="val"></a-input>
    <br>
    {{val}}
    <a-show :content="val" />
  </div>
</template>
<script>
  import AInput from '_c/AInput.vue'
  import AShow from '_c/AShow.vue'
  export default {
    name: 'store',
    data() {
      return {
        val: ''
      }
    },
    components: {
      AInput,
      AShow
    },
    // methods: {
    //   handleInput(val) {
    //     this.val = val
    //   }
    // }
  }
</script>
