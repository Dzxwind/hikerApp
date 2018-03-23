<template>
  <div class="way">
    <subBanner :useWhichBanner="whichBanner"></subBanner>
    <div class="wayWrapper col-lg-8 col-lg-offset-2 col-xs-12">
      <div class="way__header">
        <div class="way__title">路线</div>
        <div class="way__nav">
          <ul>
            <li v-for="(tab,index) in tabs" :key="tab.name" v-text="tab.name" :class="{active:isActive}" v-if="index < 8" @click="changeNav()"></li>
          </ul>
        </div>
      </div>
      <div class="way__hr"></div>
      <div class="way__list">
        <div class="way__list_i" v-for="roadItem in roadList" v-bind:key="roadItem.name">
          <img :src="roadItem.src">
        </div>
      </div>
    </div>
    <router-view></router-view>
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
          name: "红色旅行"
        },
        {
          name: "徒步健身"
        },
        {
          name: "梦幻之旅"
        }
      ],
      roadList: [
        {
          name: "五龙潭",
          src: require("../../assets/roadItem1.jpeg"),
          intro:
            "宁波五龙潭风景名胜区是“宁波新十景”、AAAA级风景区，也是浙江宁波第一家通过ISO9000国际质量认证体系的旅游风景区，位于宁波市西南鄞州龙观乡，距宁波市区约35公里，是一处以自然风光为依托，中华龙文化、浙东山乡风情、民俗民风为文化内涵，以溪流飞瀑、怪石险峰为特色的风景名胜区。"
        },
        {
          name: "五龙潭1",
          src: require("../../assets/roadItem1.jpeg"),
          intro:
            "宁波五龙潭风景名胜区是“宁波新十景”、AAAA级风景区，也是浙江宁波第一家通过ISO9000国际质量认证体系的旅游风景区，位于宁波市西南鄞州龙观乡，距宁波市区约35公里，是一处以自然风光为依托，中华龙文化、浙东山乡风情、民俗民风为文化内涵，以溪流飞瀑、怪石险峰为特色的风景名胜区。"
        },
        {
          name: "五龙潭2",
          src: require("../../assets/roadItem1.jpeg"),
          intro:
            "宁波五龙潭风景名胜区是“宁波新十景”、AAAA级风景区，也是浙江宁波第一家通过ISO9000国际质量认证体系的旅游风景区，位于宁波市西南鄞州龙观乡，距宁波市区约35公里，是一处以自然风光为依托，中华龙文化、浙东山乡风情、民俗民风为文化内涵，以溪流飞瀑、怪石险峰为特色的风景名胜区。"
        },
        {
          name: "五龙潭3",
          src: require("../../assets/roadItem1.jpeg"),
          intro:
            "宁波五龙潭风景名胜区是“宁波新十景”、AAAA级风景区，也是浙江宁波第一家通过ISO9000国际质量认证体系的旅游风景区，位于宁波市西南鄞州龙观乡，距宁波市区约35公里，是一处以自然风光为依托，中华龙文化、浙东山乡风情、民俗民风为文化内涵，以溪流飞瀑、怪石险峰为特色的风景名胜区。"
        },
        {
          name: "五龙潭4",
          src: require("../../assets/roadItem1.jpeg"),
          intro:
            "宁波五龙潭风景名胜区是“宁波新十景”、AAAA级风景区，也是浙江宁波第一家通过ISO9000国际质量认证体系的旅游风景区，位于宁波市西南鄞州龙观乡，距宁波市区约35公里，是一处以自然风光为依托，中华龙文化、浙东山乡风情、民俗民风为文化内涵，以溪流飞瀑、怪石险峰为特色的风景名胜区。"
        },
        {
          name: "五龙潭5",
          src: require("../../assets/roadItem1.jpeg"),
          intro:
            "宁波五龙潭风景名胜区是“宁波新十景”、AAAA级风景区，也是浙江宁波第一家通过ISO9000国际质量认证体系的旅游风景区，位于宁波市西南鄞州龙观乡，距宁波市区约35公里，是一处以自然风光为依托，中华龙文化、浙东山乡风情、民俗民风为文化内涵，以溪流飞瀑、怪石险峰为特色的风景名胜区。"
        },
        {
          name: "五龙潭6",
          src: require("../../assets/roadItem1.jpeg"),
          intro:
            "宁波五龙潭风景名胜区是“宁波新十景”、AAAA级风景区，也是浙江宁波第一家通过ISO9000国际质量认证体系的旅游风景区，位于宁波市西南鄞州龙观乡，距宁波市区约35公里，是一处以自然风光为依托，中华龙文化、浙东山乡风情、民俗民风为文化内涵，以溪流飞瀑、怪石险峰为特色的风景名胜区。"
        },
        {
          name: "五龙潭7",
          src: require("../../assets/roadItem1.jpeg"),
          intro:
            "宁波五龙潭风景名胜区是“宁波新十景”、AAAA级风景区，也是浙江宁波第一家通过ISO9000国际质量认证体系的旅游风景区，位于宁波市西南鄞州龙观乡，距宁波市区约35公里，是一处以自然风光为依托，中华龙文化、浙东山乡风情、民俗民风为文化内涵，以溪流飞瀑、怪石险峰为特色的风景名胜区。"
        }
      ],
      isActive:false,
      whichBanner:"wayBanner",
    };
  },
  methods:{
    changeNav(){
      this.isActive = true;
    },
    // 使用json数据
    test(response){
      console.log(response.data);
    }
  },
  components:{
    subBanner,
  },
  created(){
    // 请求json
    this.$http.get('./static/data/way.json')
    .then((response) => {
      this.test(response);
    })
  }
};
</script>
