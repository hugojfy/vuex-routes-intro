<template>
  <NavBar/>
</template>


<script>
import NavBar from './components/NavBar.vue';
export default {
  name: 'App',
  components:{
    NavBar
  },

}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
