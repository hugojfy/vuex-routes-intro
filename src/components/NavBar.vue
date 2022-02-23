<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Vuex-Routes</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link  class="nav-link" to="/">Home</router-link> 
                </li>
                <li class="nav-item">
                    <router-link  class="nav-link" to="/about">About</router-link>
                </li>
            </ul>
        </div>
        <div class="form-inline">
            <ul class="navbar-nav">
                <li v-if="$store.getters.activedAccount" class="nav-item">
                    <a @click="$store.dispatch('signoutAction')" class="nav-link signout" to="/sign-in">Cerrar Sesión</a>
                </li>
            </ul>  
        </div>
    </nav>
    <router-view/>
</template>

<script>
export default {
    name:'NavBar'
}
</script>

<style scoped>
.signout{
    cursor: pointer;
}
</style>