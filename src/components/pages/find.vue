<template>
  <div class="find">
    <subBanner :useWhichBanner="whichBanner"></subBanner>
    <div class="col-lg-8 col-lg-offset-2 col-xs-12" style="padding-bottom:60px;">
      <div class="recommend">
        <div class="recommendTitle">推荐驴友</div>
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
            <el-select v-model="sexValue" placeholder="请选择" size="small" @change="sexSelect">
              <el-option v-for="item in sex" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="selectGroup">
            <label for="ageSelect">年龄：</label>
            <el-select v-model="ageValue" placeholder="请选择" size="small" @change="ageSelect">
              <el-option v-for="item in age" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="selectGroup">
            <label for="goneSelect">去过：</label>
            <el-select v-model="wayValue" placeholder="请选择" size="small" @change="waySelect">
              <el-option v-for="item in way" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <el-button type="primary" round  @click="resetUser()" icon="el-icon-refresh" class="selectSubmit">重置</el-button>
      </div>
      <transition name="el-zoom-in-top">
        <div class="selectListin">
          <div class="selectList_i" v-for="item in filterData" :key="item.user_index" @click="showDetail(item)">
              <div class="selectListImg">
                <img :src="item.user_img" alt="">
                <span class="selectListName" v-text="item.user_name"></span>
              </div>
            </div>
        </div>
      </transition>
    </div>
    <transition name="el-fade-in">    
      <router-view :userMessage="userIndex" @closeDialog="hideDetail()"></router-view>
    </transition>
  </div>
</template>
<style lang="scss">
@import "../../assets/scss/defined.scss";
@import "../../assets/scss/pages/find.scss";
</style>
<script>
import subBanner from "./../subBanner";
export default {
  name: "find",
  data() {
    return {
      isShow: false,
      goneSelect: "",
      showFilter: false,
      whichBanner:"findBanner",
      sex:[
        {
          value:'男',
          label:'男'
        },
        {
          value:'女',
          label:'女'
        },
      ],
      age:[
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
          value:'1',
          label:'0处'
        },
        {
          value:'2',
          label:'1~2处'
        },
        {
          value:'4',
          label:'3~4处'
        },
        {
          value:'100',
          label:'5处以上'
        },
      ],
      sexValue:'',
      ageValue:'',
      wayValue:'',
      userIndex:'',
      filterData:[],
      tmpData:[]
    };
  },
  components: {
    subBanner
  },
  methods: {
    showDetail(item) {
      this.isShow = true;
      this.$router.push({path:`/find/finddetail/${item.user_index}`});
    },
    hideDetail() {
      this.isShow = false;
    },
    resetUser(){
      this.filterData =[];
      this.userData.forEach(item => {
      this.filterData.push(item);
    });
      this.sexValue = "";
      this.ageValue = "";
      this.wayValue = "";
      
    },
    sexSelect(){
      this.filterData = this.filterData.filter(item => {
          return item.user_sex == this.sexValue
      })
    },
    ageSelect(){
      this.filterData = this.filterData.filter(item => {
          return parseInt(item.user_age) <= parseInt(this.ageValue) 
      })
    },
    waySelect(){
      this.filterData = this.filterData.filter(item => {
          return item.way_index.length <= parseInt(this.wayValue)
      })
    },
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
  created(){
    this.userData.forEach(item => {
      this.filterData.push(item);
    })
  },
};
</script>
