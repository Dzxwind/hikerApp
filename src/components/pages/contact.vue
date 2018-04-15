<template>
  <div class="contact">
    <subBanner :useWhichBanner="whichBanner"></subBanner>
    <div class="col-lg-8 col-lg-offset-2 col-xs-12 contactWrapper">
      <div class="contactUs">
        <div class="contactTitle">联系我们</div>
        <div class="contactWords">
          <div class="contactSubTitle">浙江嗨客旅游有限公司</div>
          <div class="contactText">
            <p v-for="item in contactWay" :key="item.title">{{item.title}}:{{item.content}}</p>
          </div>
        </div>
        <div class="contactLogo">
          <img src="./../../assets/logoFont.png" alt="">
        </div>
        <div class="contactMap">
          <div id="mymap"></div>    
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../../assets/scss/defined.scss";
@import "../../assets/scss/pages/contact.scss";
.anchorBL {
  display: none;
}
</style>
<script>
import subBanner from "./../subBanner";
export default {
  data() {
    return {
      whichBanner: "contactBanner",
      contactWay: [
        {
          title: "邮政编码",
          content: "123456"
        },
        {
          title: "服务热线",
          content: "4008123123"
        },
        {
          title: "手机",
          content: "13123456789"
        },
        {
          title: "QQ",
          content: "123456789"
        },
        {
          title: "公司地址",
          content: "浙江省宁波市海曙区虚构路22号虚构大厦601室"
        }
      ]
    };
  },
  methods: {
    baiduMap() {
      // var trash = document.querySelectorAll('#mymap .anchorBL');
      // console.log(trash);

      // 百度地图API功能
      var map = new BMap.Map("mymap"); // 创建Map实例
      map.centerAndZoom(new BMap.Point(121.48848, 29.890014), 16); // 初始化地图,设置中心点坐标和地图级别
      //添加地图类型控件
      map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        })
      );
      map.setCurrentCity("宁波"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      var point = new BMap.Marker(new BMap.Point(121.48848, 29.890014)); // 创建点
      map.addOverlay(point);
      var local = new BMap.LocalSearch(map, {
        renderOptions: { map: map }
      });
    }
  },
  components: {
    subBanner
  },
  mounted() {
    this.baiduMap();
  }
};
</script>
