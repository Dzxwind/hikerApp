<template>
  <div class="bannerIntro">
    <div class="bannerIntroWrapper col-lg-8 col-lg-offset-2 col-xs-12">
      <p>{{details}}</p>
      <div class="closeButton" @click="closeDetail()">关闭</div>
    </div>
  </div>
</template>
<style lang="scss">
  @import "../assets/scss/defined.scss";
  @import "../assets/scss/components/bannerIntro.scss"; 
</style>
<script>
export default {
  name:"bannerIntro",
  data(){
    return{

    }
  },
  props:{
    details:String,
  },
  methods:{
    closeDetail(){
      this.$emit("closeDetail");
    }
  }
}
</script>
