<template>
  <div>
    <div class="banner">
      <div class="banner__inner">
        <div class="banner__title">富&nbsp;&nbsp;士&nbsp;&nbsp;山</div>
        <div class="banner__subtitle">静冈县 日本</div>
        <div class="banner__button" :class="{banner__button_hover : isHover}" @mouseover="hovered" @mouseout="out">即刻启程</div>
      </div>
      <roateblock></roateblock>
    </div>
  </div>
</template>
<style lang="scss">
  @import "../assets/scss/defined.scss";
  @import "../assets/scss/components/banner.scss"; 
</style>
<script>
import roateblock from './roateblock';
export default {
  name:'banner',
  data(){
    return {
      isHover:false,
    }
  },
  methods:{
    hovered(){
      this.isHover = true;
    },
    out(){
      this.isHover = false;
    }
  },
  components:{
    roateblock,
  }
}
</script>
