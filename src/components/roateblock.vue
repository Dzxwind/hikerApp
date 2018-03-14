<template>
<div class="roateBlock">
    <div class="roateAllBlock">
      <div class="outBlock">
      </div>
      <div class="innerBlock">
        <div class="arrow">
          <!-- <span>^</span> -->
        </div>
      </div>
  </div>
</div>
</template>
<style scoped>
@keyframes scalebox{
  0% {
    transform: scale(1) rotate(45deg);
  }
  50%{
    transform: scale(.6) rotate(45deg);
  }
  100%{
    transform: scale(1) rotate(45deg);    
  }
}


.roateAllBlock{
  position: relative;
  /* animation: roatebox 1s 2s infinite; */
}

  .outBlock{
    width: 60px;
    height: 60px;
    border: solid 1px rgba(255,255,255,.6);
    position: absolute;
    animation: scalebox 2s infinite;
  }

  .innerBlock{
    width: 30px;
    height: 30px;
    transform: rotate(45deg);
    border: 5px solid #fff;
    position: absolute;
    top: 15px;
    left: 15px;
  }

  .arrow{
    transform: rotate(-45deg);
    /* position: absolute; */
  }

  .arrow span{
    display: block;
    width: 100%;
    height: 100%;
    color: #fff;
    text-align: center;
    line-height: 20px;
  }
</style>
<script>
   export default {
  name: 'roateblock',
}
</script>