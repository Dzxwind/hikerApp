<template>
  <div class="roadlist">
    <div class="road__wrapper col-lg-8 col-lg-offset-2 col-xs-12">
      <div class="road__header">
        <div class="road__title">路线</div>
        <div class="road__nav">
          <ul>
            <li v-for="(tab,index) in tabs" v-bind:key="tab.name" v-text="tab.name" :class="{active:isActive}" v-if="index < 8"></li>
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
      tabs:[
        {
          name:"接近自然"
        },
        {
          name:"人文之行"
        },
        {
          name:"放松休闲"
        },
        {
          name:"红色旅行"
        },
        {
          name:"徒步健身"
        },
        {
          name:"梦幻之旅"
        },
      ],
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
