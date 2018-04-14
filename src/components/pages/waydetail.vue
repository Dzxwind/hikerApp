<template>
  <div class="waydetail">
    <div class="waydetailWrapper col-xs-12 col-lg-8 col-lg-offset-2">
      <div class="titleBox">
        <div class="title">
          {{wayIntro.way_name}}
        </div>
        <div class="subTitle">          
          <span class="locate">
            <img src="./../../assets/locate.png" alt="">雅典
          </span>
          <span class="read">浏览：117</span>
        </div>
      </div>
      <div class="hr"></div>
      <div class="imageBox">
        <img :src="wayIntro.way_img" alt="">
      </div>
      <div class="contentBox">
        {{wayIntro.way_intro}}
        <div class="userBox">
          <div class="user_i" v-for="(item,index) in userInfo" :key="item.user_index" v-if="index < 4" :style="{backgroundImage:'url(' + item.user_img + ')'}" @click="linkUser(item)"></div>
          <span>等{{userInfo.length}}人去过</span>
        </div>
      </div>
      <div class="articleBox" v-if="articleInfo">
        <div class="articleTitle">相关游记</div>
        <div class="articleBoxWrapper">
          <div class="articleBox_i" v-for="(item,index) in articleInfo" v-if="index < 2" :key="item.article_index" @click="linkarticle(item)">
            <img :src="item.article_img" alt="">
            <div class="articleName">{{item.article_name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../../assets/scss/defined.scss";
@import "../../assets/scss/pages/waydetail.scss";
</style>
<script>
export default {
  name: "waydetail",
  computed: {
    userData() {
      return this.$store.state.userData;
    },
    wayData() {
      return this.$store.state.wayData;
    },
    articleData() {
      return this.$store.state.articleData;
    },
    wayIntro() {
      for (let i = 0; i < this.wayData.length; i++) {
        if (this.$route.params.wayIndex == this.wayData[i].way_index) {
          return this.wayData[i];
        }
      }
    },
    userInfo() {
      let tmpDatas = [];
      for (let j = 0; j < this.userData.length; j++) {
        for (let i = 0; i < this.userData[j].way_index.length; i++) {
          if (this.$route.params.wayIndex == this.userData[j].way_index[i]) {
            tmpDatas.push(this.userData[j]);
          }
        }
      }
      return tmpDatas;
    },
    articleInfo(){
      let tmpDatas2 = [];
      for (let j = 0; j < this.articleData.length; j++) {
          if (this.$route.params.wayIndex == this.articleData[j].way_index) {
            tmpDatas2.push(this.articleData[j]);
        }        
      }
      if (tmpDatas2.length != 0) {
        return tmpDatas2;
      }else if (tmpDatas2.length == 0){
        tmpDatas2 = false;
        return tmpDatas2;
      }
    }
  },
  methods:{
    linkUser(item){
      this.$router.push({path:`/find/finddetail/${item.user_index}`})
    },
    linkarticle(item){
      this.$router.push({path:`/article/articledetail/${item.user_index}`})
    }
  }
};
</script>
