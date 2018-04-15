<template>
<div class="col-lg-12">
  <div class="navList" :class="{navList_fixed : isfixed,navList_animate : isslide}">
    <div class="logo"><img src="./../assets/logo.png" alt=""></div>
    <div class="pcLink">
      <router-link to="/">首&nbsp;&nbsp;页</router-link>
      <router-link to="/find">发&nbsp;&nbsp;现</router-link>
      <router-link to="/way">路&nbsp;&nbsp;线</router-link>
      <router-link to="/article">游&nbsp;&nbsp;记</router-link>
      <router-link to="/contact">联&nbsp;&nbsp;系</router-link>
    </div>
    <div class="mobileLink">
      <div class="mobile__button" @click="menuSwitch()"><img src="../assets/menu.png" alt=""></div>
      <div class="mobile__navList" v-if="isslide" :class="{mobile__navList_animate : isshow}">
        <router-link to="/">首页</router-link>
        <router-link to="find">发现</router-link>
        <router-link to="way">路线</router-link>
        <router-link to="article">游记</router-link>
        <router-link to="contact">联系</router-link>
      </div>
    </div>
  </div>
</div>
  
</template>
<style lang="scss">
  @import "../assets/scss/defined.scss";
  @import "../assets/scss/components/navbar.scss"; 
</style>
<script>
  export default {
  name: 'navbar',
  data(){
    return {
      scroll:'',
      isfixed:false,
      isslide:false,
      isshow:false,
    }
  },
  methods:{
    scrolled(){
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (this.scroll > 50) {
        this.isfixed = true;
      } else{
        this.isfixed = false;
      }
    },
    menuSwitch(){
      if (this.isslide == false) {
        this.isslide = !this.isslide;
        setTimeout(() => {
          this.isshow = !this.isshow;
        }, 500);        
      } else{
        this.isshow = !this.isshow;
        setTimeout(() => {
          this.isslide = !this.isslide;
        }, 500);  
      }
    }
  },
  mounted() {
    let that = this;
    window.addEventListener('scroll', that.scrolled);
  },
}
</script>