<template>
  <div class="subBanner" :class="useWhichBanner">

  </div>
</template>
<style lang="scss">
@import "../assets/scss/defined.scss";
@import "../assets/scss/components/subBanner.scss";
</style>
<script>
export default {
  name:"subBanner",
  data(){
    return{
      
    }
  },
  props:{
    useWhichBanner:String,
  },
}
</script>
