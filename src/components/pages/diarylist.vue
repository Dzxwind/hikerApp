<template>
  <div class="diarylistOut">
    <div class="diarylist__wrapper col-lg-8 col-lg-offset-2 col-xs-12">
      <div class="diary__title">游记
        <a @click="moreClick()">更多>>></a>
      </div>
      <div class="diarylist">
        <div class="diarylist_i" v-for="(item,index) in articleData"  v-bind:key="item.diaryId" v-if="index < 3">
          <div class="diary_iTitle" v-text="item.article_name" @click="linkDetail(item)"></div>
          <div class="diary_iContent col-xs-12 col-lg-9" v-text="item.article_content"></div>
          <div class="diary_iImg col-xs-12 col-lg-3"><img :src="item.article_img" @click="linkDetail(item)"></div>
          <div class="diary_iHr"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../../assets/scss/defined.scss";
@import "../../assets/scss/pages/diarylist.scss";
</style>
<script>
export default {
  name:'diarylist',
  data(){
    return{
    }
  },
  computed:{
    articleData() {
      return this.$store.state.articleData;
    }
  },
  methods:{
    moreClick(){
      this.$router.push({path: '/article'});
    },
    linkDetail(item){
      this.$router.push({path:`/article/articledetail/${item.article_index}`})
    }
  }
}
</script>
