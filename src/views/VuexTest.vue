<template>
    <div>
        <p>{{}}</p>
       <button @click="handleChangeUserNameClick">使用action修改user里面的username</button> 
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name:'vuexTest',
    methods:{
        ...mapActions([
            'actionChangeUserName'
        ]),
        handleChangeUserNameClick () {
            // 在没有引入mapActions的时候这样写
            // this.$store.dispatch('actionChangeUserName')

            //引入了action
            this.actionChangeUserName('简写:这是用action改的')
        }
    }
}
</script>
