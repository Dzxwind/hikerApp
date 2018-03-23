<template>
  <div class="find">
    <subBanner :useWhichBanner="whichBanner"></subBanner>
    <div class="col-lg-8 col-lg-offset-2 col-xs-12">
      <div class="findTitle">发现</div>
      <div class="recommend">
        <div class="recommendTitle">为您推荐</div>
        <div class="recommendList">
          <div class="recommendList_i" v-for="(item,index) in userData" v-if="index < 5" :key="item.user_id" @click="showDetail(item)" >
            <div class="recommendListImg">
              <img :src="item.user_img" alt="">
              <span class="recommendListName" v-text="item.user_name"></span>
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
            <option>男</option>
            <option>女</option>
          </select>
          <label for="ageSelect">年龄：</label>
          <select v-model="ageSelect" id="ageSelect">
            <option disabled value="">请选择</option>
            <option value="0">20岁以下</option>
            <option value="1">21~30岁</option>
            <option value="2">31~40岁</option>
            <option value="3">41岁以上</option>
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
      <!-- <transition name="fade">
        <div class="selectListin">
          <div class="selectList_i" v-for="item in filterList" v-if="showFilter" :key="item.id" @click="showDetail(item)" >
              <div class="selectListImg">
                <img :src="item.imgsrc" alt="">
                <span class="selectListName" v-text="item.name"></span>
              </div>
            </div>
        </div>
      </transition> -->
    </div>
    <transition name="el-fade-in">
      <myMask v-if="isShow"></myMask>    
    </transition>
    <router-view :userMessage="userMessage"></router-view>
  </div>
</template>
<style lang="scss">
@import "../../assets/scss/defined.scss";
@import "../../assets/scss/pages/find.scss";
</style>
<script>
import myMask from "./../mask";
import subBanner from "./../subBanner";
export default {
  name: "find",
  data() {
    return {
      userData: [],
      isShow: false,
      userMessage: {},
      sexSelect: "",
      ageSelect: "",
      goneSelect: "",
      showFilter: false,
      whichBanner:"findBanner",
    };
  },
  components: {
    myMask,
    subBanner
  },
  methods: {
    showDetail(item) {
      this.userMessage = item;
      this.isShow = true;
      this.$router.push({path:'/find/finddetail'})
    },
    hideDetail() {
      this.userMessage = {};
      this.isShow = false;
    },
    selectUser() {
      this.showFilter = true;
    },
    getData(response){
      this.userData = response.data;
    }
  },
  // computed: {
  //   filterList() {
  //     var sexSelect = this.sexSelect;
  //     var ageSelect = this.ageSelect;
  //     var goneSelect = this.goneSelect;
  //     return this.userData.filter(filterItem => {
  //       return (
  //         filterItem.sex == sexSelect &&
  //         filterItem.ageSelector == ageSelect &&
  //         filterItem.gone.length == goneSelect
  //       );
  //     });
  //   }
  // },
  created(){
    // 请求json
    this.$http.get('./static/data/user.json')
    .then((response) => {
      this.getData(response);
      console.log(this.userData[0])
    })
  }
};
</script>
