<template>
  <div class="content">
    <i class="iconfont icon-iconfontjiantou1" @click="back"></i>
    <h2>欢迎加入造作新家</h2>
    <div class="input_box">
      <input autocomplete="off" maxlength="11" @input="telIpt" placeholder="请输入手机号" id="tel" />
    </div>
    <div class="code_area clearfixed">
      <div class="input_area">
        <input autocomplete="off" maxlength="4" placeholder="请输入验证码" id="code" @input="codeIpt" />
      </div>
      <input
        type="button"
        id="code_btn"
        class="code_btn disabled"
        disabled
        @click="sendMessage"
        value="获取验证码"
      />
    </div>
    <div class="tips"></div>
    <div class="login_btn disabled" id="login" @click="register">注册</div>
    <p class="hint">
      注册代表你已同意
      <a href="https://www.zaozuo.com/agreement">《造作用户协议》</a>
      <router-link to="/Login">前往登录</router-link>
    </p>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  methods: {
    back () {
      this.$router.push({ path: '/' })
    },
    sendMessage () {
      var that = this
      var time = 5
      that.$message({
        message: '验证码发送成功',
        type: 'success'
      })
      var timer = setInterval(() => {
        time -= 1
        if (time === 0) {
          $('#code_btn').val('发送验证码')
          $('#code_btn').removeAttr('disabled')
          clearInterval(timer)
        } else {
          $('#code_btn').val(time)
          $('#code_btn').attr('disabled', 'disabled')
        }
      }, 1000)
    },
    telIpt () {
      var val = $('#tel').val()
      if (val.trim() === '') {
        $('#code_btn').addClass('disabled')
        $('#code_btn').attr('disabled', 'disabled')
      } else {
        $('#code_btn').removeClass('disabled')
        $('#code_btn').removeAttr('disabled')
      }
    },
    register: function () {
      var tel = $('#tel').val()
      var code = $('#code').val()
      var that = this
      var param = {
        tel,
        code
      }
      this.$http.post('/api/register', param, {
        emulateJSON: true
      }).then(res => {
        if (res.data.code === 0) {
          this.$message({
            message: res.data.msg,
            type: 'error'
          })
        } else if (res.data.code === 1) {
          this.$message({
            message: res.data.msg,
            type: 'success',
            onClose: function () {
              sessionStorage.setItem('token', res.data.token)
              that.$router.push({ name: 'User' })
            }
          })
        } else if (res.data.code === -1) {
          this.$message({
            message: res.data.msg,
            type: 'error'
          })
        }
      })
    },
    open (msg) {
      this.$message(msg)
    },
    codeIpt () {
      var length = $('#code').val().length
      if (length === 4) {
        $('#login').removeClass('disabled')
        $('#login').removeAttr('disabled')
      } else {
        $('#login').addClass('disabled')
        $('#login').attr('disabled', 'disabled')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  min-width: 410px;
  min-height: 300px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  background: #fff;
  border-radius: 2px;
  padding: 0 4.5rem;
  width: 29rem;
  height: 29.3rem;
  overflow: hidden;
  z-index: 3;
}
.iconfont {
  position: absolute;
  font-size: 1rem;
  top: 1.5rem;
  left: 1.5rem;
  cursor: pointer;
}
h2 {
  margin-top: 5rem;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.2rem;
  color: #000;
  line-height: 1.2rem;
}
.input_box {
  position: relative;
  box-sizing: border-box;
  padding: 0.8rem 0;
  width: 100%;
  // height: 3rem;
  border-bottom: 1px solid #d2d2d2;
  overflow: hidden;
  input {
    width: 100%;
    font-size: 0.9rem;
    line-height: 1;
    color: #000;
    cursor: text;
    background: #fff;
    border: 0;
  }
}
.code_area {
  margin-top: 1.5rem;
  .input_area {
    // width: 12.2rem;
    float: left;
    position: relative;
    box-sizing: border-box;
    padding: 0.8rem 0;
    // height: 3rem;
    border-bottom: 1px solid #d2d2d2;
    overflow: hidden;
    input {
      width: 100%;
      font-size: 0.9rem;
      line-height: 1;
      color: #000;
      cursor: text;
    }
  }
  .code_btn {
    float: left;
    margin: 0.25rem 0 0 1.1rem;
    width: 6.7rem;
    height: 2.75rem;
    border-radius: 2px;
    background: #000;
    color: #fff;
    line-height: 2.75rem;
    text-align: center;
    font-size: 0.9rem;
    cursor: pointer;
    min-width: 100px;
    min-height: 30px;
  }
}
.tips {
  // display: none;
  float: left;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #e56a69;
  line-height: 1;
  text-align: left;
}
.login_btn {
  margin-top: 3rem;
  width: 100%;
  height: 2.7rem;
  background: #000;
  text-align: center;
  line-height: 2.7rem;
  color: #fff;
  border-radius: 2px;
  font-size: 0.9rem;
  cursor: pointer;
}
.hint {
  margin-top: 2rem;
  margin-bottom: 5rem;
  font-size: 0.9rem;
  line-height: 1;
  color: #a0a0a0;
  text-align: center;
  a {
    display: inline-block;
    color: #000;
    cursor: pointer;
  }
}
</style>
