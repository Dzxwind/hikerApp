<template>
  <div class="index" :plain="true">
    <banner></banner>
    <findbutton></findbutton>
    <roadlist></roadlist>
    <diarylist></diarylist>
  </div>
</template>
<style lang="scss">
@import "../../assets/scss/defined.scss";
.index {
  @include clearfix;
}
</style>
<script>
import banner from "./../banner";
import findbutton from "./findbutton";
import roadlist from "./roadlist";
import diarylist from "./diarylist";
export default {
  name: "index",
  components: {
    banner,
    findbutton,
    roadlist,
    diarylist
  },
  mounted() {
    this.$message({
      showClose: true,
      message: "建议您在1920*1080分辨率下查看",
      center: true
    });
  }
};
</script>