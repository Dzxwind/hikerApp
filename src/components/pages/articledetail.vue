<template>
  <div class="articledetial">
    <div class="articledetailWrapper col-xs-12 col-lg-8 col-lg-offset-2">
      <div class="titleBox">
        <div class="title">
          {{articleInfo.article_name}}
        </div>
        <div class="subTitle">
          <span class="user" @click="linkUser">
            <img :src="userInfo.user_img" alt="">{{userInfo.user_name}}
          </span>          
          <span class="locate" @click="linkWay">
            <img src="./../../assets/locate.png" alt="">{{wayInfo.way_name}}
          </span>
          <span class="read">浏览：117</span>
        </div>
      </div>
      <div class="hr"></div>
      <div class="imageBox">
        <img :src="articleInfo.article_img" alt="">
      </div>
      <div class="contentBox">
        {{articleInfo.article_content}}
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../../assets/scss/defined.scss";
@import "../../assets/scss/pages/articledetail.scss";
</style>
<script>
export default {
  name:'articledetail',
  computed:{
    userData() {
      return this.$store.state.userData;
    },
    wayData() {
      return this.$store.state.wayData;
    },
    articleData() {
      return this.$store.state.articleData;
    },
    articleInfo(){
      for (let i = 0; i < this.articleData.length; i++) {
        if (this.$route.params.articleIndex == this.articleData[i].article_index) {
          return this.articleData[i];
        }
      }
    },
    userInfo(){
      for (let i = 0; i < this.userData.length; i++) {
        for (let j = 0; j < this.userData[i].article_index.length; j++) {
          if (this.$route.params.articleIndex == this.userData[i].article_index[j]) {
            return this.userData[i]
          }        
        }
      }
    },
    wayInfo(){
      for (let i = 0; i < this.wayData.length; i++) {
        for (let j = 0; j < this.wayData[i].article_index.length; j++) {
          if (this.$route.params.articleIndex == this.wayData[i].article_index[j]) {
            return this.wayData[i]
          }        
        }
      }
    },
  },
  methods:{
    linkUser(){
      this.$router.push({path:`/find/finddetail/${this.userInfo.user_index}`})
    },
    linkWay(){
      this.$router.push({path:`/way/waydetail/${this.wayInfo.way_index}`})
    }
  }
}
</script>
