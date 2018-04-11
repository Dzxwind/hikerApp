<template>
  <div class="way">
    <subBanner :useWhichBanner="whichBanner"></subBanner>
    <div class="wayWrapper col-lg-8 col-lg-offset-2 col-xs-12">
      <div class="hotRoad">
        <div class="hotTitle">热门路线</div>
        <div class="hotContent">
          <div class="hotContent_i" v-for="(item,index) in topShow" :key="item.name" v-if="index < 2">
            <div class="hotContentName">{{item.name}}<br>{{item.enName}}</div>
            <div class="hotImg">
              <img :src="item.topImage" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../../assets/scss/defined.scss";
@import "../../assets/scss/pages/way.scss";
</style>
<script>
import subBanner from "./../subBanner";
export default {
  name: "way",
  data() {
    return {
      tabs: [
        {
          name: "接近自然"
        },
        {
          name: "人文之行"
        },
        {
          name: "放松休闲"
        },
        {
          name: "徒步健身"
        },
        {
          name: "梦幻之旅"
        }
      ],
      whichBanner:"wayBanner",
      topShow:[
        {
          name:"香港",
          enName:"HongKong",
          people:"584",
          topImage:require("./../../assets/hotImg1.png")
        },
        {
          name:"普罗旺斯",
          enName:"Provence",
          people:"617",
          topImage:require("./../../assets/hotImg2.png")
        }
      ]
    };
  },
  methods:{

  },
  components:{
    subBanner,
  },
  computed:{
    userData(){
      return this.$store.state.userData;
    },
    wayData(){
      return this.$store.state.wayData;
    },
    articleData(){
      return this.$store.state.articleData;
    },
  },
};
</script>
