<template>
  <div class="contact">
    <subBanner :useWhichBanner="whichBanner"></subBanner>
    <div class="col-lg-8 col-lg-offset-2 col-xs-12">
      <div class="test"></div>
    </div>
  </div>
</template>
<style scoped>
.test{
  height: 600px;
}
</style>
<script>
import subBanner from "./../subBanner";
export default {
  data(){
    return{
      whichBanner:"contactBanner",
    }
  },
  components:{
    subBanner,
  }
}
</script>
