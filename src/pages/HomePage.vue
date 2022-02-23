<template>
    <div v-if="loaded">
        <h1>Home</h1>
        <h2>Bienvenido {{$store.getters.userData.name}}</h2>
    </div>
</template>

<script>
export default {
    name: "HomePage",
    data() {
        return {
            loaded:false
        }
    },methods:{
        getData(){
            if(!this.$store.getters.activedAccount){
                window.location.href="/sign-in"
                }else{
                    this.loaded=true;
            }
        }
    },
    watch:{
        '$store.getters.userData':{
            handler(){
                this.getData();
            },
            immediate: true
        }
    }
    }
</script>