<template>
<div>
    <div v-if="errorMessage.length>0" class="alert alert-danger" role="alert">
        {{errorMessage}}
    </div>
    <h1>Iniciar Sesión</h1>
    <form class="sign-in-form">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Correo Electónico</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="errorMessage='No estás registrado'">Iniciar Sesión</button>
        <div class="mb-3">
            <a @click="setHaveAccount()"  class="link-account">No tengo cuenta</a>
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
    data() {
        return {
            errorMessage:""
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