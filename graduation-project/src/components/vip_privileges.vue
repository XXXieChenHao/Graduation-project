<template>
<!-- 会员特选 -->
  <div class="vip_privileges">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="升级礼" name="first">
        <ul class="upgrade">
          <li v-for="item in upgrade1" :key="item.name">
            <em>{{item.name}}</em>
            <span>{{item.price}}</span>
            <i>{{item.detail}}</i>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="生日礼" name="second">
        <ul class="upgrade">
          <li v-for="item in upgrade2" :key="item.name">
            <em>{{item.name}}</em>
            <span>{{item.price}}</span>
            <i>{{item.detail}}</i>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="会员价" name="third">
        <p class="text">可享精选商品会员专属优惠，等级越高，优惠力度越大</p>
        <p class="text">专属商品开放时，可从会员中心或首页进入会员专区选购</p>
      </el-tab-pane>
      <el-tab-pane label="晒单返券" name="fourth">
        <p class="text">发布不少于30个字和2张美图的晒单，即可获得对应商品成交价1%的无门槛优惠券，加入精选再得2%的无门槛优惠券</p>
        <p class="text">在小红书、好好住上晒出你的造作好物，带上“造作新家”标签，截图给客服或客户经理，额外获得对应商品成交价各1%的无门槛优惠券</p>
      </el-tab-pane>
      <el-tab-pane label="会员惊喜" name="fifth">
        <p class="text">可参与造作不定期推出的会员惊喜活动</p>
        <p class="text">活动开启时，可从会员中心或首页进入，参加活动</p>
      </el-tab-pane>
      <el-tab-pane label="线下活动" name="sixth">
        <p class="text">Z4、Z5会员享受线下活动优先受邀特权</p>
        <p class="text">举行线下活动时，造作君会优先邀请享有此特权的会员参加</p>
      </el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first',
      upgrade1: [{
        name: 'Z1',
        price: '¥370优惠券',
        detail: '全场通用优惠券礼包，优惠低至98折'
      }, {
        name: 'Z2',
        price: '¥1155优惠券',
        detail: '全场通用优惠券礼包，优惠低至97折'
      }, {
        name: 'Z3',
        price: '¥3375优惠券',
        detail: '全场通用优惠券礼包，优惠低至95折'
      }, {
        name: 'Z4',
        price: '¥4725优惠券',
        detail: '全场通用优惠券礼包，优惠低至93折'
      }, {
        name: 'Z5',
        price: '¥6750优惠券',
        detail: '全场通用优惠券礼包，优惠低至9折'
      }
      ],
      upgrade2: [{
        name: 'Z1',
        price: '',
        detail: '全场通用优惠券礼包，优惠低至95折'
      }, {
        name: 'Z2',
        price: '生日全场94折券',
        detail: '全场通用优惠券礼包，优惠低至94折'
      }, {
        name: 'Z3',
        price: '生日全场95折券',
        detail: '全场通用优惠券礼包，优惠低至92折'
      }, {
        name: 'Z4',
        price: '生日全场9折券',
        detail: '全场通用优惠券礼包，优惠低至9折'
      }, {
        name: 'Z5',
        price: '生日全场88折券',
        detail: '全场通用优惠券礼包，优惠低至88折'
      }
      ]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="less" scoped>

.upgrade {
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  font-size: 1rem;
  li {
    flex: 50%;
    margin-top: 2.5rem;
    em {
    height: 2.4rem;
    line-height: 2.4rem;
    vertical-align: top;
    padding-top: .2rem;
    margin-right: 1.2rem;
    font-size: 1.4rem;
    color: #a0a0a0;
    font-weight: 700;
    font-family: buenosaires;
    }

    span {
      font-size: 1.1rem;
      color: #313131;
      font-weight: 900;
    }

    i {
      line-height: 1.4;
      font-size: .8rem;
      letter-spacing: .5px;
      padding-top: .5rem;
      color: #a0a0a0;
    }
  }
}

  .text{
    width: 100%;
    font-size: 1rem;
    line-height: 1.5;
    padding-top: .75rem;
    letter-spacing: .4px;
  }

.vip_privileges /deep/ .el-tabs--card .el-tabs__header .el-tabs__item  {
  width: 17%!important;
  font-size: 1rem;
}
.vip_privileges /deep/ .el-tabs--card>.el-tabs__header .el-tabs__nav {
  width: 100%;
  padding: 1rem 0;
}
</style>
