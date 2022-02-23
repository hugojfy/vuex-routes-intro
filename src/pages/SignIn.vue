<template>
    <div class="sign-in-form">
        <Login  :setHaveAccount="setHaveAccount" v-if="haveAccount"/> 
        <Signup :setHaveAccount="setHaveAccount" v-else/>
    </div>
</template>

<script>
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';

export default {
    name: 'SignIn',
    components:{
        Login,
        Signup
    },
    data() {
        return {
            haveAccount: true
        }
    },
    methods:{
        setHaveAccount(){
            this.haveAccount=!this.haveAccount;
        }
    }

}
</script>

<style scoped>
.sign-in-form{
    padding: 50px 250px 0px 250px;
}
@media(max-width:1200px){
    .sign-in-form{
        padding: 50px 50px 0px 50px;
    }
}   
</style>

