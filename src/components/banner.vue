<template>
  <div class="banner">
    <el-carousel trigger="click" class="bannerWrapper">
      <el-carousel-item v-for="item in banners" :key="item.bannerTitle">
        <div class="banner__inner">
          <div class="banner__title">{{item.bannerTitle}}</div>
          <div class="banner__subtitle">{{item.bannerSubtitle}}</div>
        </div>
        <transition name="fade">
          <bannerIntro v-if="detailShow" @closeDetail="bannerDetail()" :details="item.bannerDetails"></bannerIntro>
        </transition>
        <div class="banner__button" :class="{banner__button_hover : isHover}" @mouseover="hovered" @mouseout="out" @click="bannerDetail()">{{buttonTitle}}</div>
        <roateblock></roateblock>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<style lang="scss">
@import "../assets/scss/defined.scss";
@import "../assets/scss/components/banner.scss";
</style>
<script>
import roateblock from "./roateblock";
import bannerIntro from "./bannerIntro";
export default {
  name: "banner",
  data() {
    return {
      isHover: false,
      detailShow: false,
      buttonTitle: "即刻启程",
      banners: [
        {
          bannerTitle: "富士山",
          bannerSubtitle: "日本",
          bannerDetails:
            "富士山被日本人民誉为“圣岳”，是日本民族的象征。作为日本的国家象征之一，在全球享有盛誉。它也经常被称作“芙蓉峰”或“富岳”以及“不二的高岭”。自古以来，这座山的名字就经常在日本的传统诗歌“和歌”中出现。日本诗人曾用“玉扇倒悬东海天”、“富士白雪映朝阳”等诗句赞美它。"
        },
        {
          bannerTitle: "尼亚加拉",
          bannerSubtitle: "加拿大",
          bannerDetails:
            "尼亚加拉瀑布位于加拿大安大略省和美国纽约州的交界处，瀑布源头为尼亚加拉河，主瀑布位于加拿大境内，是瀑布的最佳观赏地；在美国境内瀑布由月亮岛隔开，观赏的是瀑布侧面。同时，该瀑布也是世界第一大跨国瀑布。"
        },
        {
          bannerTitle: "毛里求斯",
          bannerSubtitle: "毛里求斯",
          bannerDetails:
            "毛里求斯共和国为非洲东部一岛国，位于印度洋西南方，距马达加斯加约800公里，与非洲大陆相距2200公里。作为火山岛国，毛里求斯四周被珊瑚礁环绕，岛上地貌千姿百态，沿海是狭窄平原，中部是高原山地，有多座山脉和孤立的山峰。"
        },
        {
          bannerTitle: "圣托里尼",
          bannerSubtitle: "希腊",
          bannerDetails:
            "圣托里尼岛由3个小岛组成，其中2个岛有人居住，中间的1个岛是沉睡的火山岛。历史上，这里曾发生多次火山爆发，以公元前1500年最为严重，岛屿中心大面积塌陷，原来圆形的岛屿呈现了现在的月牙状。圣托里尼岛的首府是费拉市，位于岛的西岸。"
        },
        {
          bannerTitle: "克里特岛",
          bannerSubtitle: "希腊",
          bannerDetails:
            "克里特岛位于地中海东部的中间，是希腊的第一大岛，总面积约8336平方公里，人口：约60.1万。行政上属于克里特大区。克里特岛是爱琴海最南面的皇冠，是美不胜收的度假之地。"
        },
      ]
    };
  },
  methods: {
    hovered() {
      this.isHover = true;
    },
    out() {
      this.isHover = false;
    },
    bannerDetail() {
      if (this.detailShow) {
        this.detailShow = false;
      } else {
        this.detailShow = true;
      }
    }
  },
  components: {
    roateblock,
    bannerIntro
  }
};
</script>
