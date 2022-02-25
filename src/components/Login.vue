<template>
<div>
    <div v-if="errorMessage.length>0" class="alert alert-danger" role="alert">
        {{errorMessage}}
    </div>
    <h1>Iniciar Sesión</h1>
    <form class="sign-in-form">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Correo Electónico</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="userData.email">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="userData.password">
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="login()">Iniciar Sesión</button>
        <div class="mb-3">
            <a @click="setHaveAccount()"  class="link-account">No tengo cuenta</a>
        </div>
    </form>
</div>
</template>

<script>
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';


export default {
    name: 'Login',
    components:{

    },
    props:{
        setHaveAccount:Function
    },
    data() {
        return {
            errorMessage:"",
            userData:{
                email:'',
                password:''
            }
        }
    },methods:{
        login(){
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.userData.email, this.userData.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                this.$store.dispatch('signupAction',{
                name:user.email,
                email:user.email
                });
                this.$router.push('/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                this.errorMessage="Usuario Invalido"
            });
        }
    }
}
</script>

<style scoped>

.link-account{
    cursor: pointer;
    text-decoration: none;
}
</style>