<template>
  <el-row>
    <!-- 个人中心部分 -->
    <el-col class="title" :span="24">
      <el-image src="/images/upload/pic.jpg" fit="cover"></el-image>
      <span class="span">解晨昊</span>
      <a href="###" target="_blank" class="target_btn">了解会员体系</a>
    </el-col>
    <!-- 会员部分 -->
    <el-col class="center">
      <h1>成为会员，享受丰富特权</h1>
      <div class="array clearfixed">
        <dt class="item" v-for="(item,index) in resData" :key="index">
          <div class="icon_zaozuosvg_medal"></div>
          <b>{{item.name}}</b>
          <span class="mt">{{item.detail}}</span>
          <span>{{item.discount}}</span>
          <div class="tips" v-if="item.money">{{item.money}}</div>
        </dt>
      </div>
      <h1>完善任意3项资料即可快速成为会员，享受特权</h1>
      <div class="to_set">
        <div class="set_box clearfixed">
          <a class="go_btn" id="goto_set" href="###">
            去设置 >
          </a>
          <div class="go_title">
            完善个人资料
            <span>了解你多一点，好让造作君为你准备更贴心的惊喜</span>
          </div>
          <div class="go_body">
            <span>设置头像</span>
            <span>设置生日</span>
            <span>设置昵称</span>
            <span>设置性别</span>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      resData: [
        {
          name: '升级礼',
          detail: '累计¥16000全场券',
          discount: '低至9折',
          money: '￥16000'
        },
        {
          name: '生日礼',
          detail: '￥400精选实物礼',
          discount: '全场88折通用券',
          money: '￥400'
        },
        {
          name: '专属会员价',
          detail: '精选商品会员专属优惠',
          money: '专属折扣'
        },
        {
          name: '晒单返券',
          detail: '成交价5%全场券奖励',
          money: '5%'
        },
        {
          name: '会员惊喜',
          detail: '不定期会员专属活动',
          discount: '给你惊喜'
        },
        {
          name: '线下活动',
          detail: '线下活动优先受邀'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.title {
  padding: 2rem 0 1rem 3.2rem;
  border-bottom: 0.6rem solid #f6f6f6;
  .el-image {
    width: 5.5rem;
    height: 5.5rem;
    min-width: 100px;
    min-height: 100px;
    border-radius: 50%;
    border: 1px solid #c4c4c4;
    float: left;
    vertical-align: middle;
  }
  .span {
    float: left;
    margin: 1.7rem 0 0 2rem;
    font-size: 1rem;
    line-height: 1;
    padding-top: 0.6rem;
    text-align: center;
    font-weight: 700;
  }
  .target_btn {
    margin-top: 1.6rem;
    margin-right: 4rem;
    width: auto;
    height: 2rem;
    line-height: 2rem;
    float: right;
    margin-top: 0.8rem;
    padding: 0 2rem;
    border: #a0a0a0 1px solid;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    font-size: 0.9rem;
    color: #313131;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s linear;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    -ms-transition: all 0.2s linear;
  }
}
.center {
  h1 {
    font-size: 1.3rem;
    line-height: 1;
    margin: 2.2rem auto 1.6rem;
  }
  .array {
    padding: 1rem;
    padding-left: 0;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    border-radius: 5px;
    border: #d2d2d2 1px solid;
  }
  .item {
    width: 25%;
    height: 10rem;
    padding-top: 2.5rem;
    float: left;
    color: #313131;
    position: relative;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;

    b {
      color: #313131;
    }
    .mt {
      margin-top: 0.5rem;
      font-size: 0.8rem;
    }
    .tips {
      width: auto;
      height: 1.5rem;
      line-height: 1.6rem;
      position: absolute;
      left: 58%;
      top: 0;
      z-index: 2;
      padding: 0 0.5rem;
      font-size: 0.9rem;
      color: #fff;
      background: #e56a69;
      -webkit-border-radius: 0.75rem;
      -moz-border-radius: 0.75rem;
      -ms-border-radius: 0.75rem;
      border-radius: 0.75rem;
      font-weight: 700;
    }
    span {
      font-size: 0.8rem;
      line-height: 1.3;
      letter-spacing: 0;
      display: block;
      color: #a0a0a0;
    }
  }
}
.to_set {
  display: inline-block;
  min-width: 35rem;
  padding: 2.4rem 6.5rem;
  text-align: center;
  font-size: 0;
  background: #fff;
  border: #d2d2d2 1px solid;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  .set_box {
    display: inline-block;
    width: 100%;
    text-align: center;
  }
  .go_btn {
    width: auto;
    height: 1.5rem;
    float: right;
    line-height: 1.5rem;
    margin: 1.3rem auto 0rem;
    padding: 0.4rem 1.4rem 0.4rem 1.7rem;
    background: #313131;
    color: #fff;
    font-size: 0.8rem;
    -webkit-border-radius: 2.3rem;
    -moz-border-radius: 2.3rem;
    border-radius: 2.3rem;
    cursor: pointer;
    font-weight: 700;
    transition: all 0.2s linear;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    -ms-transition: all 0.2s linear;
  }
  .go_title {
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: left;
    letter-spacing: 0;
    font-weight: 700;
    span {
      font-size: 0.8rem;
      display: block;
      line-height: 1;
      margin-top: 2px;
      font-weight: 400;
      color: #a0a0a0;
    }
  }
  .go_body {
    margin-top: 0.75rem;
    text-align: left;
    font-size: 0;
    color: #707070;
    letter-spacing: 0;
    span {
      display: inline-block;
      padding-right: 1.6rem;
      font-size: 0.8rem;
      &::before {
        content: "";
        display: inline-block;
        width: 10px;
        height: 10px;
        margin-right: 5px;
        background: #707070;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        -webkit-transform: scale(0.4);
        -moz-transform: scale(0.4);
        -ms-transform: scale(0.4);
        -o-transform: scale(0.4);
        transform: scale(0.4);
      }
    }
  }
}
</style>
