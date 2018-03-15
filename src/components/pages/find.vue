<template>
  <div class="find">
    <div class="col-lg-8 col-lg-offset-2 col-xs-12">
      <div class="findTitle">发现</div>
      <div class="recommend">
        <div class="recommendTitle">为您推荐</div>
        <div class="recommendList">
          <div class="recommendList_i" v-for="(item,index) in recList" v-if="index < 5" :key="item.id" @click="showDetail(item)" >
            <div class="recommendListImg">
              <img :src="item.imgsrc" alt="">
              <span class="recommendListName" v-text="item.name"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="selectForm">
        <div class="selectTitle">寻找驴友</div>
        <div class="selectList">
          <label for="sexSelect">性别：</label>
          <select v-model="sexSelect" id="sexSelect">
            <option disabled value="">请选择</option>
            <option value="male">男</option>
            <option value="female">女</option>
            <option value="all">不限</option>
          </select>
          <label for="ageSelect">年龄：</label>
          <select v-model="ageSelect" id="ageSelect">
            <option disabled value="">请选择</option>
            <option value="20">20岁以下</option>
            <option value="30">21~30岁</option>
            <option value="40">31~40岁</option>
            <option>41岁以上</option>
          </select>
          <label for="goneSelect">曾经去过：</label>
          <select v-model="goneSelect" id="goneSelect">
            <option disabled value="">请选择</option>
            <option value="0">0处</option>
            <option value="1">1处</option>
            <option value="2">2处</option>
            <option value="3">3处及以上</option>
          </select>
        </div>
        <div class="selectSubmit" @click="selectUser()"><img src="../../assets/search.png">搜索</div>
      </div>
      <div class="selectListin">
        <div class="selectList_i" v-for="(item,index) in recList" v-if="index < 5" :key="item.id" @click="showDetail(item)" >
            <div class="selectListImg">
              <img :src="item.imgsrc" alt="">
              <span class="selectListName" v-text="item.name"></span>
            </div>
          </div>
      </div>
    </div>
    <transition name="fade2">
      <userinfo :userMessage="userMessage" v-if="isShow" @detailHide="hideDetail()"></userinfo>
    </transition>
    <transition name="fade">
      <myMask v-if="isShow"></myMask>    
    </transition>
  </div>
</template>
<style lang="scss">
@import "../../assets/scss/defined.scss";
@import "../../assets/scss/pages/find.scss";
</style>
<script>
import userinfo from "./userinfo";
import myMask from "./../mask";
export default {
  name: "find",
  data() {
    return {
      recList: [
        {
          id: "00001",
          name: "测试用户1",
          age: "25",
          sex: "女",
          gone: ["北京", "洛阳"],
          sign: "没有人是在快乐中成熟的。痛苦的收获是成长，成长的代价是痛苦。",
          imgsrc: require("../../assets/headImg1.jpg")
        },
        {
          id: "00002",
          name: "测试用户2",
          age: "22",
          sex: "女",
          gone: ["南京", "承德"],
          sign: "我很丑可是我有音乐和啤酒。",
          imgsrc: require("../../assets/headImg2.jpg")
        },
        {
          id: "00003",
          name: "测试用户3",
          age: "26",
          sex: "男",
          gone: ["黄山", "丽江", "香格里拉"],
          sign:
            "每一个暴肥的现在，都有一个微胖的曾经，我不禁感慨，原来我瘦过。",
          imgsrc: require("../../assets/headImg3.jpg")
        },
        {
          id: "00004",
          name: "测试用户4",
          age: "28",
          sex: "女",
          gone: ["呼伦贝尔", "厦门"],
          sign: "就算全世界的人说你不好，我也愿与全世界为敌",
          imgsrc: require("../../assets/headImg4.jpg")
        },
        {
          id: "00005",
          name: "测试用户5",
          age: "24",
          sex: "女",
          gone: ["南宁", "杭州"],
          sign: "每个人的心中都会装着自己不愿说出来的心酸和无奈",
          imgsrc: require("../../assets/headImg5.jpg")
        },
        {
          id: "00006",
          name: "测试用户6",
          age: "23",
          sex: "男",
          gone: ["开封", "泰山"],
          sign: "君为伊醉笑痴狂，伊为君撕心断肠。",
          imgsrc: require("../../assets/headImg1.jpg")
        },
        {
          id: "00007",
          name: "测试用户7",
          age: "31",
          sex: "男",
          gone: ["开封", "泰山"],
          sign: "君为伊醉笑痴狂，伊为君撕心断肠。",
          imgsrc: require("../../assets/headImg2.jpg")
        },
        {
          id: "00008",
          name: "测试用户8",
          age: "45",
          sex: "男",
          gone: ["开封", "泰山", "庐山"],
          sign: "君为伊醉笑痴狂，伊为君撕心断肠。",
          imgsrc: require("../../assets/headImg2.jpg")
        }
      ],
      isShow: false,
      userMessage: {},
      sexSelect: "",
      ageSelect: "",
      goneSelect: ""
    };
  },
  components: {
    userinfo,
    myMask
  },
  methods: {
    showDetail(item) {
      this.userMessage = item;
      this.isShow = true;
    },
    hideDetail() {
      this.userMessage = {};
      this.isShow = false;
    },
    selectUser() {
      console.log(this.sexSelect);
      console.log(this.ageSelect);
      console.log(this.goneSelect);
    }
  }
};
</script>
