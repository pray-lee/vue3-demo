<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{content}}
    <br>
    <p>from rootState: {{appName}}</p>
    <p>from rootGetters:{{appVersion}}</p>
    <p>from modules_state:{{username}}</p>
    <p>from modules_changed_state:{{$store.state.user.username}}</p>
    <p>from modules_getters:{{changename}}</p>
    <button @click="handleChangeAppName">修改appName</button>
  </div>
</template>
<script>
  import { mapState, mapGetters, mapMutations } from 'vuex'
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
      ]),
    },
    methods: {
      // mapMutations是在methods里。mapState和mapGetters是在computed里。切记
      ...mapMutations([
        'SET_APP_NAME',
        'SET_USER_NAME'
      ]),
      handleChangeAppName () {
        // 映射了mapMutations之后就不用写下面注释掉的这句话了。
        // this.$store.commit('SET_APP_NAME', '已经修改了')

        // user模块里面的mutations, actions, getters都会被暴露到全局,所以直接在mapMutations里面引入之后，直接像下面一样使用就可以了
        // this.SET_USER_NAME({changedName:'修改user里的username'})
        this.SET_USER_NAME('修改user里的username')
        this.SET_APP_NAME('已经修改了')
      }
    }
  }
</script>
