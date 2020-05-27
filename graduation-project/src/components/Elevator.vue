<template>
  <dl class="elevator">
    <dt class="icon-app icon-css" id="jump_app">
      <router-link to="/downApp"></router-link>
      <div class="icontitle">
        <p>下载App</p>
      </div>
    </dt>
    <dt class="icon-service icon-css" href="javascript:void(0)" target>
      <div class="icontitle">客服</div>
    </dt>
    <dt class="icon-top icon-css" @click="returntop" style="display: block;">
      <div class="icontitle">回顶部</div>
    </dt>
  </dl>
</template>

<script>
export default {
  methods: {
    returntop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="less" scoped>
.elevator {
  width: 80px;
  height: auto;
  position: fixed;
  right: -2px;
  bottom: 12%;
  z-index: 5;
  padding: 0 3px;
  background-color: rgba(255, 255, 255, 0.9);
  border: #a0a0a0 1px solid;
  border-right: 0;
  zoom: 0.8;
  .icon-css {
    width: 70px;
    height: 70px;
    display: block;
    margin-top: 7px;
    margin-left: 5px;
    margin-bottom: 30px;
    background-image: url("../assets/imgs/sidebar-icon_a1de432.png");
    position: relative;
    cursor: pointer;
  }

  .icon-app {
    background-position: -1260px 0;
  }
  .icon-service {
    background-position: -980px 0;
  }
  .icon-top {
    background-position: -770px 0;
  }

  .icontitle {
    content: "";
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    position: absolute;
    bottom: -20px;
    left: 0;
    z-index: 2;
    color: #707070;
    text-align: center;
  }
}
</style>
