<template>
  <div class="way">
    <subBanner :useWhichBanner="whichBanner"></subBanner>
    <div class="wayWrapper col-lg-8 col-lg-offset-2 col-xs-12" v-if="!isShow">
      <div class="hotRoad">
        <div class="hotTitle">热门路线</div>
        <div class="hotContent">
          <div class="hotContent_i" v-for="(item,index) in topShow" :key="item.name" v-if="index < 2" @click="linkHotDetail(item)">
            <div class="hotContentName">{{item.name}}<br>{{item.enName}}</div>
            <div class="hotNumber">{{item.people}}人去过</div>
            <div class="hotImg">
              <img :src="item.topImage" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="hr"></div>
      <div class="roadList">
        <div class="roadListTitle">推荐路线</div>
        <el-tabs v-model="activeName">
          <el-tab-pane v-for="item in tabs" :key="item.id" :label="item.name" :name="item.id">
            <div class="wayList" v-for="subItem in wayData" :key="subItem.way_index" v-if="item.id === subItem.way_section" :style="{backgroundImage:'url(' + subItem.way_img + ')'}" @click="linkDetail(subItem)">
              <div class="wayText">
                <div class="wayName">{{subItem.way_name}}</div>
                <div class="waySubName">{{subItem.way_subname}}</div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <router-view v-if="isShow"></router-view>
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
          id:'0',
          name: "接近自然"
        },
        {
          id:'1',
          name: "人文之行"
        },
        {
          id:'2',
          name: "放松休闲"
        },
        {
          id:'3',
          name: "徒步健身"
        },
        {
          id:'4',
          name: "梦幻之旅"
        }
      ],
      whichBanner: "wayBanner",
      topShow: [
        {
          name: "香港",
          enName: "HongKong",
          people: "584",
          topImage: require("./../../assets/hotImg1.png"),
          link:"10"
        },
        {
          name: "普罗旺斯",
          enName: "Provence",
          people: "617",
          topImage: require("./../../assets/hotImg2.png"),
          link:"4"
        }
      ],
      activeName: '0',
      isShow:false
    };
  },
  methods: {
    linkHotDetail(item){
      this.isShow = true;
      this.$router.push({path:`/way/waydetail/${item.link}`});
    },
    linkDetail(subItem){
      this.isShow = true;
      this.$router.push({path:`/way/waydetail/${subItem.way_index}`});
    }
  },
  components: {
    subBanner,
  },
  computed: {
    userData() {
      return this.$store.state.userData;
    },
    wayData() {
      return this.$store.state.wayData;
    },
    articleData() {
      return this.$store.state.articleData;
    }
  },
};
</script>
