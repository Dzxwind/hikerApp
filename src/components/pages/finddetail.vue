<template>
  <div class="finddetail">
    <div class="finddetailWrapper col-xs-12">
      <div class="userImg"><img :src="userMessage.user_img" alt=""></div>
      <div class="userDetail">
        <p>昵称:{{userMessage.user_name}}</p>
        <p>性别:{{userMessage.user_sex}}</p>
        <p>年龄:{{userMessage.user_age}}</p>
        <p>个性签名:{{userMessage.user_sign}}</p>
        <p>曾经去过:<span v-for="item in wayMessage" :key="item.way_id" @click="linkWay()">{{item.way_name}},</span></p>
        <p>游记:<span v-for="item in articleMessage" :key="item.article_id" @click="linkArticle()">《{{item.article_name}}》<br /></span></p>
      </div>
      <div class="closeButton" @click="closeDetail()">×</div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../../assets/scss/defined.scss";
@import "../../assets/scss/pages/finddetail.scss";
</style>
<script>
export default {
  name:'finddetail',
  props:{
    userMessage:Object,
    wayMessage:Array,
    articleMessage:Array
  },
  methods:{
    closeDetail(){
      this.$emit('closeDialog');
      this.$router.push({path:'/find'});
    },
    linkWay(){
      this.$router.push({path:'/way/waydetail'});      
    },
    linkArticle(){
      this.$router.push({path:'/article/articledetail'});      
    }
  },
}
</script>
