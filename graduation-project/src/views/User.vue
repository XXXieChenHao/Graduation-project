<template>
  <el-container>
    <el-header>
      <my-header></my-header>
    </el-header>
    <el-main>
      <div class="tabs_box">
        <el-tabs>
          <el-tab-pane label="会员中心">
            <UserVip></UserVip>
          </el-tab-pane>
          <el-tab-pane label="我的订单">
            <UserOrder></UserOrder>
          </el-tab-pane>
          <el-tab-pane label="我的优惠券&礼品卡">
            <UserDiscount></UserDiscount>
          </el-tab-pane>
          <el-tab-pane label="我的消息">
            <UserMessage></UserMessage>
          </el-tab-pane>
          <el-tab-pane label="我的晒单">
            <UserList></UserList>
          </el-tab-pane>
          <el-tab-pane class="pane" label="我的资料">
            <UserMeans></UserMeans>
          </el-tab-pane>
          <el-tab-pane label="我的收藏">
            <UserCollect></UserCollect>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-main>
    <my-footer></my-footer>
  </el-container>
</template>

<script>
import MyHeader from '@/components/Header'
import MyFooter from '@/components/Footer'
import UserVip from '@/components/user_vip'
import UserOrder from '@/components/user_order'
import UserDiscount from '@/components/user_discount'
import UserMessage from '@/components/user_message'
import UserList from '@/components/user_list'
import UserMeans from '@/components/user_means'
import UserCollect from '@/components/user_collect'
export default {
  components: {
    MyHeader,
    MyFooter,
    UserVip,
    UserOrder,
    UserDiscount,
    UserMessage,
    UserList,
    UserMeans,
    UserCollect
  },
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
  padding: 0;
  position: fixed;
  top: 0;
  z-index: 100;
}
.tabs_box {
  margin: 60px auto 0;
  width: 100%;
  min-height: 60px;
}
.el-main {
  padding: 0;
  overflow: hidden;
}

/deep/ .el-tabs__nav-scroll {
  width: 82%;
  margin: 0 auto;
}

/deep/ .el-tabs__content .el-tabs__nav-scroll {
  width: 100%;
  margin: 0 auto;
}

/deep/ .el-tabs__content .el-tabs__nav-wrap::after {
  height: 0;
}

/deep/ .el-tabs__content .el-tabs__nav-scroll {
}

.el-tab-pane {
  width: 82%;
  margin: 0 auto;
}

.pane {
  width: 100%;
}
</style>
