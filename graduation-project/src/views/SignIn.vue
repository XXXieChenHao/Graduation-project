<template>
  <el-container>
    <el-header height="50px">
      <my-header></my-header>
    </el-header>
    <el-main>
      <div class="moveBg" :style="[bgPosition]">
        <sigin></sigin>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import MyHeader from '@/components/Header'
import sigin from '@/components/Sigin'
export default {
  components: {
    sigin,
    MyHeader
  },
  data () {
    return {
      widthCenter: '',
      heightCenter: '',
      bgPosition: {}
    }
  },
  mounted () {
    this.widthCenter = window.screen.availHeight / 2
    this.heightCenter = window.screen.availHeight / 2
    this.systemInfo()
    console.log(this.widthCenter)
  },
  methods: {
    systemInfo () {
      var that = this
      var width = this.widthCenter
      var height = this.heightCenter
      document.onmousemove = function (e) {
        // var top = -(e.pageY - height) / 25 - 45 + 'px'
        // var left = -(e.pageX - width) / 25 - 176 + 'px'
        var top = (-(e.pageY - height) / 25 - 45) / 20 + 'rem'
        var left = (-(e.pageX - width) / 25 - 176) / 20 + 'rem'
        that.bgPosition = {
          top,
          left
        }
      }
    },
    hrefRegister () {
      this.$router.push({ path: '/sigin' })
    }
  }
}
</script>

<style lang="less" scoped>
body {
  height: 100%;
  overflow-x: hidden;
}
.el-header {
  background: #272727;
  color: #fff;
  z-index: 5;
  position: fixed;
  top: 0;
  padding: 0;
  width: 100%;
}

.el-main {
  padding: 0;
}

.moveBg {
  width: 120%;
  height: 120%;
  position: absolute;
  left: -10%;
  top: -5%;
  z-index: 1;
  background: url("/images/imgs/login_bg.jpg") no-repeat 50% 0;
  background-repeat: repeat\0;
  background-size: auto 100%;
}
</style>
