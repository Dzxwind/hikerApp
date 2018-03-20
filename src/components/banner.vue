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
            "富士山被日本人民誉为“圣岳”，是日本民族的象征。作为日本的国家象征之一，在全球享有盛誉。它也经常被称作“芙蓉峰”或“富岳”以及“不二的高岭”。自古以来，这座山的名字就经常在日本的传统诗歌“和歌”中出现。日本诗人曾用“玉扇倒悬东海天”、“富士白雪映朝阳”等诗句赞美它。"
        },
        {
          bannerTitle: "毛里求斯",
          bannerSubtitle: "毛里求斯",
          bannerDetails:
            "富士山被日本人民誉为“圣岳”，是日本民族的象征。作为日本的国家象征之一，在全球享有盛誉。它也经常被称作“芙蓉峰”或“富岳”以及“不二的高岭”。自古以来，这座山的名字就经常在日本的传统诗歌“和歌”中出现。日本诗人曾用“玉扇倒悬东海天”、“富士白雪映朝阳”等诗句赞美它。"
        },
        {
          bannerTitle: "圣托里尼",
          bannerSubtitle: "希腊",
          bannerDetails:
            "富士山被日本人民誉为“圣岳”，是日本民族的象征。作为日本的国家象征之一，在全球享有盛誉。它也经常被称作“芙蓉峰”或“富岳”以及“不二的高岭”。自古以来，这座山的名字就经常在日本的传统诗歌“和歌”中出现。日本诗人曾用“玉扇倒悬东海天”、“富士白雪映朝阳”等诗句赞美它。"
        },
        {
          bannerTitle: "克里特岛",
          bannerSubtitle: "希腊",
          bannerDetails:
            "富士山被日本人民誉为“圣岳”，是日本民族的象征。作为日本的国家象征之一，在全球享有盛誉。它也经常被称作“芙蓉峰”或“富岳”以及“不二的高岭”。自古以来，这座山的名字就经常在日本的传统诗歌“和歌”中出现。日本诗人曾用“玉扇倒悬东海天”、“富士白雪映朝阳”等诗句赞美它。"
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
