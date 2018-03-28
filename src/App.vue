<template>
  <div id="app">
    <navbar></navbar>
    <router-view v-if="isDataGet"/>
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
  },
  data(){
    return{
      isDataGet:false
    }
  },
  methods:{
    getUserData(){
      return this.$http.get('./static/data/user.json')
    },
    getWayData(){
      return this.$http.get('./static/data/way.json')
    },
    getArticleData(){
      return this.$http.get('./static/data/article.json')
    }
  },
  created(){
    // this.$http.get('./static/data/user.json')
    // .then((response) => {
    //   this.$store.state.userData = response.data;
    // });
    // this.$http.get('./static/data/article.json')
    // .then((response) => {
    //   this.$store.state.articleData = response.data;
    // });
    // this.$http.get('./static/data/way.json')
    // .then((response) => {
    //   this.$store.state.wayData = response.data;
    // });
    var that = this;
    this.$http.all([this.getUserData(),this.getWayData(),this.getArticleData()])
    .then((that.$http.spread(function (user,way,article) {
      that.$store.state.userData = user.data;
      that.$store.state.articleData = way.data;
      that.$store.state.wayData = article.data;
      that.isDataGet = true;
    })))
  },
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
