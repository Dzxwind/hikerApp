<template>
  <div class="finddetail">
    <div class="finddetailWrapper col-xs-12">
      <div class="userImg"><img :src="userMessage.user_img" alt=""></div>
      <div class="userDetail">
        <p>昵称:{{userMessage.user_name}}</p>
        <p>性别:{{userMessage.user_sex}}</p>
        <p>年龄:{{userMessage.user_age}}</p>
        <p>曾经去过:{{userMessage.haveGone}}</p>
        <p>个性签名:{{userMessage.user_sign}}</p>
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
    userMessage:Object
  },
  methods:{
    closeDetail(){
      this.$router.push({path:'/find'})
    }
  },
  mounted(){
    console.log(this.userMessage);
  }
}
</script>
