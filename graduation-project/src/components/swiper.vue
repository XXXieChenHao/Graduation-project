<template>
  <el-carousel indicator-position="outside" height="32rem">
    <el-carousel-item v-for="item in imgArr" :key="item.id">
      <img :src="item.src" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data () {
    return {
      imgArr: [
        { id: 1, src: 'images/imgs/swiper_1.png' },
        { id: 2, src: 'images/imgs/swiper_2.png' },
        { id: 3, src: 'images/imgs/swiper_3.png' },
        { id: 4, src: 'images/imgs/swiper_4.png' },
        { id: 5, src: 'images/imgs/swiper_5.png' }
      ]
    }
  }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__container {
    height: 32rem;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  img {
    width: 100%;
    height: 100%;
  }
</style>
