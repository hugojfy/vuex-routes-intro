<template>
    <div v-if="loaded">
        <h1>About </h1>
        <h2>userName: {{$store.getters.userData.name}}</h2>
        <h2>Email: {{$store.getters.userData.email}}</h2>
    </div>
</template>

<script>
export default {
    name: "About",
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