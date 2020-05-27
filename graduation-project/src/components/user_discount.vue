<template>
  <div class="main">
    <el-tabs type="card" v-model="activeName">
      <el-tab-pane label="优惠券" name="first">
        <el-input class="code" placeholder="输入兑换码" v-model="input" clearable></el-input>
        <div class="btn">兑换</div>
        <el-tooltip class="tooltip" effect="dark" content="sdafjhsdfhafhk" placement="bottom-end">
          <span>使用说明</span>
        </el-tooltip>
      </el-tab-pane>
      <el-tab-pane label="礼品卡" name="second">
        <el-input class="card" placeholder="输入卡号" v-model="card" clearable></el-input>
        <el-input class="code" placeholder="输入兑换码" v-model="input" clearable></el-input>
        <div class="btn">兑换</div>
      </el-tab-pane>
    </el-tabs>
    <div class="show">
      <p>“春天责备没有灵魂的人。责备我不开花，不繁茂，即将速朽，</p>
      <p>没有灵魂。”——周云蓬</p>
      <p>但不要责备我们，正在准备中，优惠券马上就有。</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {
      input: '',
      card: '',
      activeName: 'first'
    }
  },
  methods: {
    discount: function () {
      var that = this
      this.$http.get('http://localhost:8088/discount', { params: { ipt: that.input } })
        .then(function (res) {
          console.log(res)
          if (res.data.code === 1) {
            that.code = false
            console.log('123')
            that.$options.methods.LoginCode(that)
          } else {
            console.log('333')
            that.code = true
          }
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped lang="less">
.main {
  .card {
    float: left;
    width: 200px;
    margin: 20px 20px 20px 0px;
  }
  .code {
    float: left;
    width: 280px;
    margin: 20px 0;
  }
  .btn {
    margin: 22px 10px;
    width: 50px;
    height: 36px;
    font-size: 14px;
    color: #fff;
    text-align: center;
    line-height: 36px;
    cursor: pointer;
    vertical-align: top;
    background: #000;
    transition: background 0.2s;
    float: left;
    &:hover {
      background: rgba(0, 0, 0, 0.8);
    }
  }
}
.show {
  padding-top: 40px;
  margin-bottom: 188px;
  p {
    color: #a0a0a0;
    text-align: center;
    font-size: 14px;
    line-height: 48px;
    padding: 0;
  }
}
</style>
