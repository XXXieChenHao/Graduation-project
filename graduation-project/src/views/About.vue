<template>
  <div class="about">
    <MyHeader></MyHeader>
    <div class="banner"></div>
    <img v-for="item in imgArr" :key="item" :src="item" alt="">
  </div>
</template>

<script>
import MyHeader from '@/components/Header'
export default {
  components: {
    MyHeader
  },
  data () {
    return {
      imgArr: [
        'images/imgs/10debefa9ada5f422cc54a562dbe546b.jpg',
        'images/imgs/e11eee612f581faef6d9e56602327420.jpg',
        'images/imgs/53aa285c1eb38c663ddad6d0254726e2.jpg',
        'images/imgs/1fcf3372fbb3667c43b8e3d28a87522f.jpg',
        'images/imgs/38a6a30bc39ff6c7e1889acb1286b3b6.jpg',
        'images/imgs/1f40e32dea3a981ce3afb15be0019f0d.jpg',
        'images/imgs/14769506d72be4fdd590c8ec3a89374d.jpg',
        'images/imgs/35baf3434f6abd770ad353a3c623c4d1.jpg',
        'images/imgs/9d558206957519550716b6cf82587d25.jpg',
        'images/imgs/ae2597694580aa5b6e065f3d3c2373d7.jpg'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .banner {
    width: 100%;
    height: 34rem;
    background-image: url('../assets/imgs/923612c95a79fe791c13fa0809db9e12.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  img {
    width: 100%;
    display: block;
    width: 100%;
    background-size: contain;
  }
</style>
