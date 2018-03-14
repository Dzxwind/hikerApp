<template>
  <div class="find">
    <div class="col-lg-8 col-lg-offset-2 col-xs-12">
      <div class="findTitle">发现</div>
      <div class="recommend">
        <div class="recommendTitle">为您推荐</div>
        <div class="recommendList">
          <div class="recommendList_i" v-for="item in recList" :key="item.id">
            <div class="recommendListImg">
              <img :src="item.imgsrc" alt="">
              <div class="recommendListName" v-text="item.name"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../../assets/scss/defined.scss";
@import "../../assets/scss/pages/find.scss";
</style>
<script>
export default {
  name: "find",
  data() {
    return {
      recList: [
        {
          id: "00001",
          name: "测试用户1",
          imgsrc: require("../../assets/headImg1.jpg")
        },
        {
          id: "00002",
          name: "测试用户2",
          imgsrc: require("../../assets/headImg2.jpg")
        },
        {
          id: "00003",
          name: "测试用户3",
          imgsrc: require("../../assets/headImg3.jpg")
        },
        {
          id: "00004",
          name: "测试用户4",
          imgsrc: require("../../assets/headImg1.jpg")
        },
        {
          id: "00005",
          name: "测试用户5",
          imgsrc: require("../../assets/headImg2.jpg")
        },
        {
          id: "00006",
          name: "测试用户6",
          imgsrc: require("../../assets/headImg3.jpg")
        },
      ]
    };
  }
};
</script>
