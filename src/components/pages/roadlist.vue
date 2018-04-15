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
      <div class="road__newlist">
        <div v-for="(item,index) in wayData" :key="item.way_name" class="col-lg-3 col-xs-6 road__newlist_i" v-if="index<8">
          <el-card :body-style="{ padding: '0px' }">
            <div class="roadImg">
              <img :src="item.way_img" class="image">
            </div>
            <div style="padding: 14px;">
              <span>{{item.way_name}}</span>
              <div class="bottom clearfix">
                <el-button type="success" round class="button" @click="goDetail(item)">详情</el-button>
              </div>
            </div>
          </el-card>
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
    }
  },
  methods:{
    toMore(){
      this.$router.push({path:'/way'});
    },
    goDetail(item){
      this.$router.push({path:`/way/waydetail/${item.way_index}`})
    }    
  },
  computed:{
    wayData() {
      return this.$store.state.wayData;
    },
  }
}
</script>
