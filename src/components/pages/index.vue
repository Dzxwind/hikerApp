<template>
  <div class="index">
    <banner></banner>
    <findbutton></findbutton>
    <roadlist></roadlist>
    <diarylist></diarylist>
  </div>
</template>
<style lang="scss">
@import "../../assets/scss/defined.scss";
.index{
  @include clearfix;
}
</style>
<script>
import banner from './../banner'
import findbutton from './findbutton'
import roadlist from './roadlist'
import diarylist from './diarylist'
  export default {
  name: 'index',
  components:{
    banner,
    findbutton,
    roadlist,
    diarylist,
  }
}
</script>