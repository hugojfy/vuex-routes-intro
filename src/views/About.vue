<template>
  <div class="home">
    <About/>
  </div>
</template>

<script>
// @ is an alias to /src
import About from '@/pages/About.vue';

export default {
  name: 'Home',
  components: {
    About
  }
}
</script>
