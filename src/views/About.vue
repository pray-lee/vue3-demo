<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{content}}
    <br>
    <p>from rootState: {{appName}}</p>
    <p>from rootGetters:{{appVersion}}</p>
    <p>from modules_state:{{username}}</p>
    <p>from modules_getters:{{changename}}</p>
  </div>
</template>
<script>
  import { mapState, mapGetters } from 'vuex'
  export default {
    name: 'about',
    props: {
      content: {
        type: String,
        default: 'about_content'
      }
    },
    computed: {
      ...mapState([
        'appName',
        'username'
      ]),
      ...mapGetters([
        'appVersion',
        'changename'
      ])
    }
  }
</script>
