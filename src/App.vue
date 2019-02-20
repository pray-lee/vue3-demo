<template>
  <div id="app">
    <div id="nav">
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
      <!--<router-link :to="{path: '/'}">Home</router-link> |-->
      <!--<router-link :to="{path: '/about'}">About</router-link>-->
      <router-link :to="{ name: 'home'}">Home</router-link> |
      <router-link :to="{ name: 'about'}">About</router-link>
    </div>
    <router-view/>
    <router-view name="email" class="email"/>
    <router-view name="tel" class="tel"/>
  </div>
</template>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    font-size 12px
    color #2c3e50
    &.router-link-exact-active
      color #42b983
.email
  color: #ff5252
</style>
