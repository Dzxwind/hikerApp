<template>
  <div class="finddetail">
    <div class="finddetailWrapper col-xs-12">
      <div class="userImg"><img :src="userIntro.user_img" alt=""></div>
      <div class="userDetail">
        <p>昵称:{{userIntro.user_name}}</p>
        <p>性别:{{userIntro.user_sex}}</p>
        <p>年龄:{{userIntro.user_age}}</p>
        <p>个性签名:{{userIntro.user_sign}}</p>
        <p>曾经去过:<span v-for="item in wayInfo" :key="item.way_id" @click="linkWay()">{{item.way_name}},</span></p>
        <p>游记:<span v-for="item in articleInfo" :key="item.article_id" @click="linkArticle()">《{{item.article_name}}》<br /></span></p>
      </div>
      <div class="closeButton" @click="closeDetail()">×</div>
      <div class="backButton" @click="back()"><i class="el-icon-arrow-left"></i></div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../../assets/scss/defined.scss";
@import "../../assets/scss/pages/finddetail.scss";
</style>
<script>
export default {
  name: "finddetail",
  data() {
    return {
      // userIntro: {},
    };
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
    },
    userIntro() {
      for (let i = 0; i < this.userData.length; i++) {
        if (this.$route.params.userIndex == this.userData[i].user_index) {
          return this.userData[i];
        }
      }
    },
    wayInfo(){
      let tmpDatas = [];
      for (let j = 0; j < this.wayData.length; j++) {
        for (let i = 0; i < this.wayData[j].user_index.length; i++) {
          if (this.$route.params.userIndex == this.wayData[j].user_index[i]) {
            tmpDatas.push(this.wayData[j]);
          }
        }        
      }
      return tmpDatas;
    },
    articleInfo(){
      let tmpDatas2 = [];
      for (let j = 0; j < this.articleData.length; j++) {
          if (this.$route.params.userIndex == this.articleData[j].user_index) {
            tmpDatas.push(this.articleData[j]);
        }        
      }
      return tmpDatas2;
    }
  },
  methods: {
    closeDetail() {
      this.$emit("closeDialog");
      this.$router.push({ path: "/find" });
    },
    linkWay() {
      this.wayMessage.push({path:`/way/waydetail/${this.wayData[i].way_index}`});
    },
    linkArticle() {
      this.$router.push({ path: "/article/articledetail" });
    },
    back(){
      this.$emit("closeDialog");
      this.$router.go(-1);
    }
    // getWay(){
    //   for (let i = 0; i < this.articleData.length; i++) {
    //     for (let j = 0; j < item.article_index.length; j++) {
    //       if (item.article_index[j] == this.articleData[i].article_index) {
    //         this.articleMessage.push(this.articleData[i]);
    //       }
    //     }
    //   }
    // }
  }
};
</script>
