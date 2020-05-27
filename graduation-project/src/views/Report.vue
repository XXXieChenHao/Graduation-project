<template>
  <div>
    <el-container>
      <el-header>
        <MyHeader></MyHeader>
      </el-header>
      <el-main>
        <h2>造作生活家会员体系介绍</h2>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="造作生活家会员有哪些特权" name="1">
            <div>
              <VipPrivileges></VipPrivileges>
            </div>
            <div></div>
          </el-collapse-item>
          <el-collapse-item title="如何成为造作生活家会员" name="2">
            <div style="display: block;" class="how">
              <h4>成长值达到150即可自动成为造作生活家会员，你可以通过以下方式快速积累成长值，成为会员：</h4>
              <p>• 完善手机号、性别、生日等个人资料</p>
              <p>• 完成150元以上的订单支付</p>
              <p class="pd-fix">
                获取成长值的详细方式，可至
                <i class="goto-growdetail">如何获取成长值</i>处查看
              </p>
            </div>
          </el-collapse-item>
          <el-collapse-item title="如何提升会员等级" name="3">
            <div style="display: block;">
              <h4>各等级与成长值的对应表如下：</h4>
              <div class="member">
                <table class="member-table center">
                  <tbody>
                    <tr>
                      <th>等级</th>
                      <th>Z1</th>
                      <th>Z2</th>
                      <th>Z3</th>
                      <th>Z4</th>
                      <th>Z5</th>
                    </tr>
                    <tr>
                      <td>成长值</td>
                      <td>150-999</td>
                      <td>1000-2999</td>
                      <td>3000-9999</td>
                      <td>10000-29999</td>
                      <td>30000以上</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text">成长值达标，即可自动升级</p>
              <p class="text">
                获取成长值的详细方式，可至
                <i class="goto-growdetail">如何获取成长值</i>处查看
              </p>
            </div>
          </el-collapse-item>
          <el-collapse-item title="如何获取成长值" name="4">
            <div class="member">
              <table class="member-table table2">
                <tbody>
                  <tr>
                    <th>行为</th>
                    <th>成长值奖励</th>
                  </tr>
                  <tr>
                    <td>购物</td>
                    <td>自2017年11月4日起，按实际支付金额的100%奖励成长值。优惠券、代金券等不参与成长值奖励。在造作新家App或官网确认收货后，成长值奖励自动充入账户（购买时已奖励过成长值的除外）</td>
                  </tr>
                  <tr>
                    <td>完善个人资料</td>
                    <td>设置头像、昵称、性别、生日，绑定手机号、邮箱，每项可获得50成长值，每项只奖励一次</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </el-collapse-item>
          <el-collapse-item title="我的成长值明细" name="5">
            <div class="member">
              <table class="member-table">
                <tbody>
                  <tr>
                    <th>行为</th>
                    <th>成长值</th>
                    <th>时间</th>
                    </tr>
                    <tr>
                      <td>完善个人信息</td>
                      <td>50</td>
                      <td>2020-05-02</td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </el-collapse-item>
        </el-collapse>
      </el-main>
      <el-footer>
        <MyFooter></MyFooter>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from '@/components/Header'
import MyFooter from '@/components/Footer'
import VipPrivileges from '@/components/vip_privileges.vue'
export default {
  components: {
    MyHeader,
    VipPrivileges,
    MyFooter
  },
  data () {
    return {
      activeNames: []
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>
<style lang="less" scoped>
.el-main {
  width: 82%;
  height: auto;
  margin: 7rem auto 4.5rem;
  text-align: left;

  h2 {
    text-align: left;
    font-size: 2rem;
    line-height: 1;
    margin-bottom: 3.5rem;
  }

  /deep/ .el-collapse .el-collapse-item__header {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1;
    cursor: pointer;
    padding: 1.8rem 0rem;
  }
}

.how {
  overflow: hidden;
  font-size: 0.9rem;

  h4 {
    font-size: 1rem;
    line-height: 2rem;
    padding-bottom: 0.4rem;
    letter-spacing: 0.5px;
  }
  p {
    font-size: 0.8rem;
    line-height: 1.5rem;
    padding-top: 0.2rem;
    letter-spacing: 0.5px;
    color: #707070;
  }
}

.member {
    padding: 1%;
    background: #f6f6f6;
    margin-top: .6rem;
    margin-bottom: 2rem;
}

.member-table {
  width: 100%;
}

.member-table tr {
  border-bottom: #d2d2d2 1px solid;
}

.member-table tr th{
    line-height: 1.5rem;
    padding: 1rem 2rem;
    font-weight: 400;
    font-size: .8rem;
}

.member-table tr td{
       line-height: 1.5rem;
    padding: 1rem 2rem;
    font-weight: 400;
    font-size: .8rem;
 }

.table2 {
  td {
    &:nth-child(1) {

      width: 6rem;
    }
  }
}
</style>
