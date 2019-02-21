<template>
  <div id="store">
    <h2>text</h2>
    <input type="text" v-model="text">
    <p>{{text}}</p>
    <hr>
    <h2>radio</h2>
    <input type="radio" v-model="sex" value="男" name="sex">
    <input type="radio" v-model="sex" value="女" name="sex">
    <p>{{sex}}</p>
    <hr>
    <h2>checkbox</h2>
    <input type="checkbox" v-model="foods" value="苹果" name="food">
    <input type="checkbox" v-model="foods" value="香蕉" name="food">
    <input type="checkbox" v-model="foods" value="梨" name="food">
    <p>{{foods}}</p>
    <hr>
  </div>
</template>
<script>
  export default {
    name: 'store',
    data() {
      return {
        text: '',
        sex: '',
        foods: []
      }
    }
  }
</script>
