<template>
  <div class="index">
    <el-container>
      <el-header height="50">
        <my-header></my-header>
      </el-header>
      <el-main>
        <!-- 导航栏部分 -->
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <i class="icon_zaozuo">
                ZAOZUO造作新家
                <div class="icon_right">
                  <a href="###" @click="hrefLogin">
                    <span class="iconfont icon-geren"></span>
                  </a>
                  <router-link to="/cars">
                  <a href="###">
                    <span class="iconfont icon-gouwuche"></span>
                  </a>
                  </router-link>
                </div>
              </i>
            </div>
          </el-col>
          <el-col :span="24">
            <navigator></navigator>
          </el-col>
        </el-row>

        <!-- 轮播图部分 -->
        <swiper></swiper>

        <!-- 商品列表部分 -->

        <goods-list></goods-list>

        <!-- banner部分 -->
        <banner></banner>
      </el-main>
      <el-footer height="551px">
        <my-footer></my-footer>
      </el-footer>
    </el-container>
    <Elevator></Elevator>
  </div>
</template>

<script>
import MyHeader from '@/components/Header'
import MyFooter from '@/components/Footer'
import Navigator from '@/components/navigator'
import Swiper from '@/components/swiper'
import GoodsList from '@/components/goodsList'
import Banner from '@/components/Banner'
import Elevator from '@/components/Elevator'

export default {
  methods: {
    hrefLogin () {
      var token = localStorage.getItem('token')
      if (token === 'exist') {
        this.$router.push({ path: '/user' })
      } else {
        this.$router.push({ path: '/signIn' })
      }
    }
  },
  components: {
    MyHeader,
    MyFooter,
    Navigator,
    Swiper,
    GoodsList,
    Banner,
    Elevator
  }
}
</script>
<style lang="less" scoped>
.icon_right {
  position: absolute;
  right: 0;
  top: 2rem;
  color: #000;
  width: 7.5rem;
  height: 1.8rem;
  font-size: 0.75rem;
  line-height: 1.8rem;
  display: flex;
  justify-content: space-around;
}
.grid-content {
  width: 64.8rem;
  position: relative;
  margin: 0 auto;
  padding-top: 30px;
}
.el-main {
  padding: 0;
  overflow: hidden;
}

.el-header,
.el-footer {
  padding: 0;
  background: #272727;
  color: #fff;
}
.el-footer {
  overflow: hidden;
}

.icon_zaozuo {
  display: block;
  line-height: 1;
  font-size: 2.5rem;
  margin: 0 auto;
  position: relative;
  top: -3px;
  font-style: normal;
  font-weight: bolder;
  color: #000;
  padding-top: 50px;
}

.icon_zaozuo span {
  font-size: 1.3rem;
  color: #333;
}
</style>
