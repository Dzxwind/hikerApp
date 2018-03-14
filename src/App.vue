<template>
  <div id="app">
    <navbar></navbar>
    <banner></banner>    
    <router-view/>
    <footbar></footbar>
  </div>
</template>

<script>
import navbar from './components/navbar'
import banner from './components/banner'
import footbar from './components/footbar'
export default {
  name: 'app',
  components:{
    navbar,footbar,banner
  }
}

</script>

<style lang="scss">

body{
  margin: 0;
}
#app {
  font-family: "Microsoft YaHei";
}
</style>
