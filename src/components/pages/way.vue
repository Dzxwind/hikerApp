<template>
  <div class="way">
    <subBanner :useWhichBanner="whichBanner"></subBanner>
    <div class="wayWrapper col-lg-8 col-lg-offset-2 col-xs-12">
      <div class="hotRoad">
        <div class="hotTitle">热门路线</div>
        <div class="hotContent">
          <div class="hotContent_i" v-for="(item,index) in wayData" :key="item.way_index" v-if="index < 2"></div>
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
