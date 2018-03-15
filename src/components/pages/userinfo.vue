<template>
  <div class="userinfo">
    <div class="userinfoWrapper col-xs-12">
      <div class="userImg"><img :src="userMessage.imgsrc" alt=""></div>
      <div class="userDetail">
        <p>ID:{{userMessage.id}}</p>
        <p>昵称:{{userMessage.name}}</p>
        <p>性别:{{userMessage.sex}}</p>
        <p>年龄:{{userMessage.age}}</p>
        <p>曾经去过:{{haveGone}}</p>
        <p>个性签名:{{userMessage.sign}}</p>
      </div>
      <div class="closeButton" @click="closeDetail()">×</div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../../assets/scss/defined.scss";
@import "../../assets/scss/pages/userinfo.scss";
</style>
<script>
export default {
  name:"userinfo",
  props:['userMessage'],
  data(){
    return{
    }
  },
  computed:{
    haveGone(){
      var fix = "";
      for (let i = 0; i < this.userMessage.gone.length; i++) {
        const element = this.userMessage.gone[i];
        fix = fix + "," + element;
      }
      return fix;
    }
  },
  methods:{
    closeDetail(){
      this.$emit('detailHide');
    }
  }
}
</script>

