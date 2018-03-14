<template>
  <div class="diarylistOut">
    <div class="diarylist__wrapper col-lg-8 col-lg-offset-2 col-xs-12">
      <div class="diary__title">游记
        <a @click="moreClick()">更多>>></a>
      </div>
      <div class="diarylist">
        <div class="diarylist_i" v-for="diary in diarys"  v-bind:key="diary.diaryId">
          <div class="diary_iTitle" v-text="diary.title"></div>
          <div class="diary_iContent col-xs-12 col-lg-9" v-text="diary.content"></div>
          <div class="diary_iImg col-xs-12 col-lg-3"><img :src="diary.imgSrc"></div>
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
      diarys:[
        {
          diaryId:"001",
          title:"国庆奥地利、捷克之行",
          time:"2018.3.12",
          authorId:"001",
          authorName:"Chist",
          imgSrc:require("../../assets/diaryImg.png"),
          content:"下午17点30左右去南京火车站→在火车站吃晚饭→坐火车去上海（G7025，19:00―20:39）→在上海火车站南广场坐五号线去浦东机场T2（约40分钟-1小时到达，上海火车站发车时间：5:30-21:30，间隔：15-25分，票价：16-22元，电话：68346830）→晚上21:30到俄航柜台办理值机（俄航check in的人非常多，建议提前4个小时到机场）→逛日上免税店（上海浦东机场T1和T2的入境免税店是24小时开放的，是为了方便那些出境时购买存放了免税品的旅客"
        },
        {
          diaryId:"002",
          title:"国庆奥地利、捷克之行",
          time:"2018.3.12",
          authorId:"001",
          authorName:"Chist",
          imgSrc:require("../../assets/diaryImg.png"),
          content:"下午17点30左右去南京火车站→在火车站吃晚饭→坐火车去上海（G7025，19:00―20:39）→在上海火车站南广场坐五号线去浦东机场T2（约40分钟-1小时到达，上海火车站发车时间：5:30-21:30，间隔：15-25分，票价：16-22元，电话：68346830）→晚上21:30到俄航柜台办理值机（俄航check in的人非常多，建议提前4个小时到机场）→逛日上免税店（上海浦东机场T1和T2的入境免税店是24小时开放的，是为了方便那些出境时购买存放了免税品的旅客"
        },
        {
          diaryId:"003",
          title:"国庆奥地利、捷克之行",
          time:"2018.3.12",
          authorId:"001",
          authorName:"Chist",
          imgSrc:require("../../assets/diaryImg.png"),
          content:"下午17点30左右去南京火车站→在火车站吃晚饭→坐火车去上海（G7025，19:00―20:39）→在上海火车站南广场坐五号线去浦东机场T2（约40分钟-1小时到达，上海火车站发车时间：5:30-21:30，间隔：15-25分，票价：16-22元，电话：68346830）→晚上21:30到俄航柜台办理值机（俄航check in的人非常多，建议提前4个小时到机场）→逛日上免税店（上海浦东机场T1和T2的入境免税店是24小时开放的，是为了方便那些出境时购买存放了免税品的旅客"
        }
      ]
    }
  },
  methods:{
    moreClick(){
      this.$router.push({path: '/diary'});
    }
  }
}
</script>
