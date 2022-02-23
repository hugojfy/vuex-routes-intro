<template>
    <div>
    
        <div v-if="errorMessage.length>0" class="alert alert-danger" role="alert">
            {{errorMessage}}
        </div>
        <h1>Crear Cuenta</h1>
        <form class="sign-in-form">
            <div class="mb-3">
                <label for="name" class="form-label">Nombre: </label>
                <input type="text" class="form-control" id="name" v-model="newAccount.name">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Correo Electónico</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp"  v-model="newAccount.email">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="password" v-model="newAccount.password">
            </div>
            <div class="mb-3">
                <label for="passwordConfirm" class="form-label">Repetir Contraseña</label>
                <input type="password" class="form-control" id="passwordConfirm"  v-model="newAccount.passwordConfirm">
            </div>
            
            <button type="submit" class="btn btn-primary" @click.prevent="onSubmit()">Crear Cuenta</button>
            <div class="mb-3">
                <a @click="setHaveAccount()"  class="link-account">Ya tengo cuenta</a>
            </div>
    </form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    components:{

    },
    props:{
        setHaveAccount:Function
    },
    methods:{
        onSubmit(){
            const {name, email, password, passwordConfirm} = this.newAccount;
            if(name.trim()===""||email.trim()===""||password.trim()===""||passwordConfirm.trim()===""){
                return this.errorMessage="Todos los campos son requeridos";
            }
            if(password!==passwordConfirm){
                return this.errorMessage="Las contraseñas no coinciden";
            }
            this.errorMessage="";
            this.$store.dispatch('signupAction',{
                name:this.newAccount.name,
                email:this.newAccount.email
            });
            this.$router.push('/');
        }
    },
    data() {
        return {
            newAccount:{
                name:'',
                email:'',
                password:'',
                passwordConfirm:''
            },
            errorMessage: ""
        }
    },
}
</script>

<style scoped>

.link-account{
    cursor: pointer;
    text-decoration: none;
}
</style>