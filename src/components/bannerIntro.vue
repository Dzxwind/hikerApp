<template>
  <div class="bannerIntro">
    <div class="bannerIntroWrapper col-lg-8 col-lg-offset-2 col-xs-12">
      <p>富士山被日本人民誉为“圣岳”，是日本民族的象征。作为日本的国家象征之一，在全球享有盛誉。它也经常被称作“芙蓉峰”或“富岳”以及“不二的高岭”。自古以来，这座山的名字就经常在日本的传统诗歌“和歌”中出现。日本诗人曾用“玉扇倒悬东海天”、“富士白雪映朝阳”等诗句赞美它。</p>
      <div class="closeButton" @click="closeDetail()">关闭</div>
    </div>
  </div>
</template>
<style lang="scss">
  @import "../assets/scss/defined.scss";
  @import "../assets/scss/components/bannerIntro.scss"; 
</style>
<script>
export default {
  name:"bannerIntro",
  data(){
    return{

    }
  },
  methods:{
    closeDetail(){
      this.$emit("closeDetail");
    }
  }
}
</script>
