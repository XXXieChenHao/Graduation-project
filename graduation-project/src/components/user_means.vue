<template>
  <div class="contain clearfixed">
    <div class="show">
      <img class="heading" src="images/imgs/swiper_1.png" alt />
      <div class="info">
        <p>
          <span>昵称：</span>
          {{info.nickname}}
        </p>
        <p>
          <span>姓名：</span>
          {{info.name}}
        </p>
        <p>
          <span>电话：</span>
          {{info.tel}}
        </p>
        <p>
          <span>邮箱：</span>
          {{info.email}}
        </p>
      </div>
      <div class="account">
        <p>账号绑定</p>
      </div>
    </div>
    <div class="add">
      <h4>管理银行卡</h4>
      <span class="add_btn">+ 添加银行卡</span>
    </div>
    <div class="address_bg">
      <div class="address clearfixed">
        <h4>我的收货地址</h4>
        <p v-for="item in addressList" :key="item.id">
          <i>{{item.id}}</i>
          <span>{{item.province}}</span>
          <span>{{item.city}}</span>
          <span>{{item.area}}</span>
          <span>{{item.detail}}</span>
          <em>收货人:</em>
          <span>{{item.name}}</span>
          <em>{{item.tel}}</em>
        </p>
        <el-button type="text" @click="dialogVisible = true">+ 添加收货地址</el-button>
      </div>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button class="button" type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false,
      addressList: [
        {
          id: 1,
          province: '内蒙古自治区',
          city: '包头市',
          area: '昆都仑区',
          detail: '内蒙古科技大学',
          name: '解晨昊',
          tel: '15661690308'
        },
        {
          id: 2,
          province: '北京',
          city: '北京市',
          area: '丰台区',
          detail: '东大街西里',
          name: '开发者',
          tel: '10010010000'
        }
      ],
      info: {
        nickname: '心塞的开发者',
        name: '解晨昊',
        tel: '15661690308',
        email: 'nicexch@126.com'
      }
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>
<style lang="less" scoped>
.contain {
  width: 100%;
  margin: 0 auto;
  min-width: 800px;
}

.show {
  width: 82%;
  margin: 0 auto;
  height: 164px;
  padding: 30px;
  background: #fff;
  position: relative;
  border-bottom: 1px solid #ccc;
  .heading {
    width: 120px;
    height: 120px;
    float: left;
    margin: 22px 30px 22px 0;
    -o-border-radius: 60px;
    -moz-border-radius: 60px;
    -webkit-border-radius: 60px;
    border-radius: 60px;
  }

  .info {
    float: left;
    text-align: left;
    box-sizing: border-box;
    height: 100%;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    p {
      font-size: 16px;
    }

    span {
      margin-right: 20px;
    }
  }

  .account {
    height: 100%;
    float: right;
    width: 30rem;
    text-align: left;
    border-left: 1px solid #ccc;
    padding-left: 30px;
    p {
      font-size: 22px;
      margin-left: 20px;
    }
  }
}

.add {
  width: 82%;
  margin: 0 auto;
  height: 186px;
  padding: 10px 0 32px;
  border-top: #d2d2d2 1px solid;
  position: relative;
  text-align: left;

  h4 {
    height: 32px;
    font-size: 32px;
    color: #000;
    line-height: 32px;
    padding-bottom: 30px;
    font-weight: 400;
    letter-spacing: 2px;
    margin: 40px 0 0 0;
  }
  .add_btn {
    display: inline-block;
    width: 150px;
    height: 40px;
    line-height: 40px;
    border: 2px solid #000;
    border-radius: 40px;
    font-size: 16px;
    color: #000;
    cursor: pointer;
    text-align: center;
    margin-top: 15px;

    &:hover {
      color: #fff;
      background: #000;
    }
  }
}

.address_bg {
  width: 100%;
  // height: 100px;
  background: url("../assets/imgs/addressBg.jpg") center center;
  .address {
    width: 82%;
    margin: 0 auto;

    p {
      text-align: left;
      color: #fff;
      font-size: 20px;
      padding-bottom: 20px;

      i {
        margin-right: 10px;
        &::after {
          content: ":";
        }
      }

      em {
        margin-left: 10px;
        &::before {
          content: "/";
        }
      }
    }
    .ads_btn {
      display: block;
      width: 200px;
      height: 44px;
      line-height: 44px;
      background: #5bb688;
      color: #fff;
      cursor: pointer;
      text-align: center;
      margin-top: 40px;
      margin-bottom: 40px;
      opacity: 0.95;
      font-size: 16px;
      border-radius: 44px;
    }
  }
  h4 {
    color: #fff;
    padding-top: 70px;
    letter-spacing: 2px;
    height: 45px;
    line-height: 45px;
    text-align: left;
    font-size: 30px;
    font-weight: 0;
  }
}

.el-button.el-button--text {
  display: block;
  width: 200px;
  height: 44px;
  background: #5bb688;
  color: #fff;
  cursor: pointer;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
  opacity: 0.95;
  font-size: 16px;
  border-radius: 44px;
}
</style>
