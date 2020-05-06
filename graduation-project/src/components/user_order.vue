<template>
  <div class="main">
    <el-tabs type="border-card">
      <el-tab-pane label="未付款">
        <span class="tips">好期待，马上就能见到你</span>
        <div class="order clearfixed" v-for="(item,index) in res" :key="index">
          <div class="order_price">
            <span>{{item.price}}</span>
            <i>{{item.discount}}</i>
          </div>
          <div class="order_title">
            <i class="clearfixed order_text">
              <em>单号</em>
              <em class="detail">{{item.orderId}}</em>
            </i>
            <i class="clearfixed order_text">
              <em>收货信息</em>
              <em class="detail">{{item.detail}}</em>
            </i>
          </div>
          <div class="card">
            <a href="###">
              <img :src="item.img" alt />
            </a>
            <div class="info">
              <p class="info_line">
                <span>{{item.name}}</span>
                <i>
                  <em>￥{{item.goodsPrice}}</em>
                  <s>￥{{item.shopPrice}}</s>
                  <em class="val">X{{item.num}}</em>
                </i>
              </p>
              <p class="info_line spic">{{item.spic}}</p>
              <p class="time">{{item.time}}</p>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已付款">
        <div class="empty clearfixed" style="display: block;">
          <img src="@/assets/imgs/empty.png" alt />
          <p>您还没有任何订单</p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已入手好物">
        <div class="empty clearfixed" style="display: block;">
          <img src="@/assets/imgs/empty.png" alt />
          <p>您还没有任何订单</p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="其他渠道订单">
        <div class="empty clearfixed" style="display: block;">
          <img src="@/assets/imgs/empty.png" alt />
          <p>您还没有任何订单</p>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      res: [
        {
          price: '￥3840',
          discount: '活动优惠: -￥759',
          orderId: '7426331588476139728',
          detail:
            '解晨昊 ／ 15661690308 ／ 内蒙古自治区 包头 昆都仑区 内蒙古科技大学',
          img: 'images/upload/order.png',
          name: '鹅卵石沙发',
          goodsPrice: '4140 ',
          shopPrice: '4599',
          num: '1',
          spic: '晨灰格/三人座',
          time: '预计2020-06-01前发货'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  // background: #eee;
  .tips {
    font-size: 24px;
    line-height: 70px;
    padding-left: 20px;
    margin-bottom: -25px;
    font-weight: 400;
    display: block;
    background: #eee;
  }
}
.empty {
  width: 100%;
  height: auto;
  padding: 150px 0;
  img {
    margin: 40px auto;
    width: 128px;
    height: 128px;
  }
  p {
    font-size: 1.2rem;
    color: #c4c3c3;
    text-align: center;
  }
}
.order {
  margin-top: 25px;
  // background: #eee;
  position: relative;
  padding-bottom: 10px;
  .order_price {
    font-size: 20px;
    padding: 25px 20px 0 19px;
    text-align: left;
    span {
      font-weight: 700;
      margin-right: 10px;
    }
    i {
      font-size: 13px;
      color: #a0a0a0;
      padding-right: 5px;
    }
  }
  .order_title {
    height: auto;
    padding: 15px 20px 0;
    font-size: 13px;
    position: relative;
    text-align: left;
    i {
      display: block;
      line-height: 20px;
      padding: 2px 0;
      color: #707070;
      em {
        min-width: 75px;
        max-width: 600px;
        float: left;
        position: relative;
        .detail {
          max-width: none;
          float: none;
          padding-left: 75px;
          display: block;
        }
      }
    }
    .order_text {
    }
  }
  .card {
    a {
      width: 190px;
      height: 130px;
      float: left;
      margin: 20px;
      position: relative;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .info {
      padding: 25px 70px 0 0;
      position: relative;
      height: 150px;
      padding-right: 0;
      float: left;
      padding-top: 0;
      .info_line {
        height: 30px;
        line-height: 30px;
        margin-top: 15px;
        font-size: 16px;
        width: 100%;
        float: left;
        text-align: left;
      }
      .spic {
        font-size: 13px;
        color: #707070;
      }
      s {
        font-size: 15px;
        color: #a0a0a0;
        position: relative;
        display: inline-block;
      }
      .val {
        padding-left: 8px;
      }
      .time {
        min-height: 0;
        margin: 0;
        height: auto;
        overflow: inherit;
        position: absolute;
        bottom: 0;
      }
    }
  }
}
</style>
