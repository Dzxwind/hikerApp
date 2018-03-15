<template>
  <div class="roadlist">
    <div class="road__wrapper col-lg-8 col-lg-offset-2 col-xs-12">
      <div class="road__header">
        <div class="road__title">路线</div>
        <div class="road__nav">
          <ul>
            <li>一花，一草，皆是好去处</li>
            <li class="more" @click="toMore()">更多>>></li>
          </ul>
        </div>
      </div>
      <div class="road__list">
        <div class="road__list_i" v-for="roadItem in roadList" v-bind:key="roadItem.name">
          <img :src="roadItem.src">
          </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import "../../assets/scss/defined.scss";
  @import "../../assets/scss/pages/roadlist.scss";
</style>
<script>
export default {
  name:'roadlist',
  data() {
    return{
      isActive:false,
      roadList:[
        {
          name:"五龙潭",
          src:require("../../assets/roadItem1.jpeg"),
          liked:false
        },
        {
          name:"五龙潭1",
          src:require("../../assets/roadItem1.jpeg"),
          liked:false
        },
        {
          name:"五龙潭2",
          src:require("../../assets/roadItem1.jpeg"),
          liked:false
        },
        {
          name:"五龙潭3",
          src:require("../../assets/roadItem1.jpeg"),
          liked:false
        },
        {
          name:"五龙潭4",
          src:require("../../assets/roadItem1.jpeg"),
          liked:false
        },
        {
          name:"五龙潭5",
          src:require("../../assets/roadItem1.jpeg"),
          liked:false
        },
        {
          name:"五龙潭6",
          src:require("../../assets/roadItem1.jpeg"),
          liked:false
        },
        {
          name:"五龙潭7",
          src:require("../../assets/roadItem1.jpeg"),
          liked:false
        },
      ]
    }
  },
  methods:{
    toMore(){
      this.$router.push({path:'/way'});
    }    
  }
}
</script>
