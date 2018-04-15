<template>
  <div class="article">
    <subBanner :useWhichBanner="whichBanner"></subBanner>
    <div class="col-lg-8 col-lg-offset-2 col-xs-12 articleWrapper" v-if="!isShow">
      <div class="articleTitle">精选游记</div>
      <div class="articleList">
        <div class="articleList_i" v-for="item in articleData" :key="item.article_index">
          <div class="articleImg" :style="{backgroundImage:'url(' + item.article_img + ')'}" @click="linkDetail(item)">
            <!-- <img :src="item.article_img" alt=""> -->
          </div>
          <div class="articleInfo" @click="linkDetail(item)">
            {{item.article_name}}
          </div>
          <div class="userInfo">
            <div class="userImg">
              <img :src="userData[item.user_index].user_img" alt="">
            </div>
            <div class="userName">
              {{userData[item.user_index].user_name}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view v-if="isShow"></router-view>
  </div>
</template>
<style scoped lang="scss">
@import "../../assets/scss/defined.scss";
@import "../../assets/scss/pages/article.scss";
</style>
<script>
import subBanner from "./../subBanner";
export default {
  data(){
    return{
      whichBanner:"articleBanner",
      isShow:false
    }
  },
  components:{
    subBanner,
  },
  computed: {
    userData() {
      return this.$store.state.userData;
    },
    wayData() {
      return this.$store.state.wayData;
    },
    articleData() {
      return this.$store.state.articleData;
    }
  },
  methods:{
    linkDetail(item){
      this.isShow = true;
      this.$router.push({path:`/article/articledetail/${item.article_index}`});
    }
  }
}
</script>
