<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <footbar></footbar>
  </div>
</template>

<script>
import navbar from './components/navbar'
import footbar from './components/footbar'
export default {
  name: 'app',
  components:{
    navbar,footbar
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
.router-link-exact-active{
  color: #3eacb9 !important;
  font-weight: bold;
}
</style>
