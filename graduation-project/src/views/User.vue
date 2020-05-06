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
          <el-tab-pane label="我的资料"></el-tab-pane>
          <el-tab-pane label="我的收藏"></el-tab-pane>
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
export default {
  components: {
    MyHeader,
    MyFooter,
    UserVip,
    UserOrder,
    UserDiscount,
    UserMessage,
    UserList
  }
}
</script>

<style lang="less">
.el-header {
  padding: 0;
  position: fixed;
  top: 0;
  z-index: 100;
}
.tabs_box {
  margin: 60px auto 0;
  width: 82%;
  min-height: 60px;
}
.el-tabs {
}
.el-main {
  padding: 0;
  overflow: hidden;
}
</style>
