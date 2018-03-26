<template>
  <div class="find">
    <subBanner :useWhichBanner="whichBanner"></subBanner>
    <div class="col-lg-8 col-lg-offset-2 col-xs-12" style="padding-bottom:60px;">
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
          <div class="selectGroup">
            <label for="sexSelect">性别：</label>
            <el-select v-model="sexValue" placeholder="请选择" size="small">
              <el-option v-for="item in sex" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="selectGroup">
            <label for="ageSelect">年龄：</label>
            <el-select v-model="ageValue" placeholder="请选择" size="small">
              <el-option v-for="item in age" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="selectGroup">
            <label for="goneSelect">去过：</label>
            <el-select v-model="wayValue" placeholder="请选择" size="small">
              <el-option v-for="item in way" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <el-button type="primary" round  @click="selectUser()" class="selectSubmit" icon="el-icon-search">搜索</el-button>
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
    <transition name="el-fade-in">    
      <router-view :userMessage="userMessage" :wayMessage="wayMessage" :articleMessage="articleMessage" @closeDialog="hideDetail()"></router-view>
    </transition>
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
      wayData: [],
      articleData: [],
      isShow: false,
      userMessage: {},
      wayMessage: [],
      articleMessage: [],
      sexSelect: "",
      ageSelect: "",
      goneSelect: "",
      showFilter: false,
      whichBanner:"findBanner",
      sex:[
        {
          value:'all',
          label:'不限'
        },
        {
          value:'male',
          label:'男'
        },
        {
          value:'female',
          label:'女'
        },
      ],
      age:[
        {
          value:'all',
          label:'不限'
        },
        {
          value:'20',
          label:'20岁以下'
        },
        {
          value:'30',
          label:'21~30岁'
        },
        {
          value:'40',
          label:'31~40岁'
        },
        {
          value:'70',
          label:'41岁以上'
        },
      ],
      way:[
        {
          value:'all',
          label:'不限'
        },
        {
          value:'1',
          label:'0处'
        },
        {
          value:'2',
          label:'1~2处'
        },
        {
          value:'4',
          label:'3~4'
        },
        {
          value:'100',
          label:'5处以上'
        },
      ],
      sexValue:'',
      ageValue:'',
      wayValue:'',
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
      this.$router.push({path:'/find/finddetail'});
      for (let i = 0; i < this.wayData.length; i++) {
        for (let j = 0; j < item.way_index.length; j++) {
          if (item.way_index[j] == this.wayData[i].way_index) {
            this.wayMessage.push(this.wayData[i]);
          }
        }
      }
      for (let i = 0; i < this.articleData.length; i++) {
        for (let j = 0; j < item.article_index.length; j++) {
          if (item.article_index[j] == this.articleData[i].article_index) {
            this.articleMessage.push(this.articleData[i]);
          }
        }
      }
    },
    compare(item){

    },
    hideDetail() {
      this.userMessage = {};
      this.wayMessage = [];
      this.articleMessage = [];
      this.isShow = false;
    },
    selectUser() {
      this.showFilter = true;
    },
    getUserData(response){
      this.userData = response.data;
    },
    getWayData(response){
      this.wayData = response.data;
    },
    getArticleData(response){
      this.articleData = response.data;
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
      this.getUserData(response);
    });
    this.$http.get('./static/data/way.json')
    .then((response) => {
      this.getWayData(response);
    });
    this.$http.get('./static/data/article.json')
    .then((response) => {
      this.getArticleData(response);
    });
  }
};
</script>
