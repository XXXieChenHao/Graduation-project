<template>
  <div class="login">
    <ul class="login-header">
      <li class="first">快捷登录</li>
      <li class="active">密码登录</li>
    </ul>
    <ul class="login-content">
      <!-- 快捷登录 -->
      <li class="code-login none">
        <div class="input_box">
          <input type="text" placeholder="请输入手机号" maxlength="11" autocomplete="off" />
        </div>
        <div class="code_area clearfixed">
          <div class="input_area">
            <input autocomplete="off" maxlength="4" placeholder="请输入验证码" id="code" />
          </div>
          <input type="button" class="code_btn disabled" value="获取验证码" />
        </div>
        <div class="tips">请输入正确的验证码</div>
        <div class="login_btn" id="login">登录</div>
      </li>
      <!-- 密码登录 -->
      <li class="psw-login">
        <div class="input_box">
          <input autocomplete="off" placeholder="手机号／邮箱" id="phone_num_passwd" />
        </div>
        <div class="code_area clearfixed">
          <div class="input_box">
            <input autocomplete="off" maxlength="12" type="password" placeholder="密码" id="password" />
          </div>
        </div>
        <div class="tips">请输入正确的验证码</div>
        <div class="login_btn disabled" id="login">登录</div>

        <div class="forget_box clearfixed">
          <a class="forget_btn" href="###">忘记密码</a>
        </div>
      </li>
    </ul>

    <p class="register">
      还没有账号？
      <a id="register" @click="hrefRegister" href="javascript: void(0);">立即注册</a>
    </p>
  </div>
</template>

<style lang="less" scoped>

.login {
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

.login-header {
  margin-top: 4rem;
  margin-bottom: 3rem;
  text-align: center;
  font-size: 0;

  li {
    display: inline-block;
    font-size: 1.2rem;
    line-height: 1.5rem;
    height: 1.5rem;
    overflow: hidden;
    font-weight: 700;
    color: #a0a0a0;
    padding: 0 2rem;
    cursor: pointer;
    letter-spacing: 1px;
  }
  .first {
    border-right: 2px solid #d2d2d2;
  }
  .active {
    color: #000;
  }
}

.input_box {
  position: relative;
  box-sizing: border-box;
  padding: 0.8rem 0;
  width: 100%;
  height: 3rem;
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
    width: 12.2rem;
    float: left;
    position: relative;
    box-sizing: border-box;
    padding: 0.8rem 0;
    height: 3rem;
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
.forget_box {
  margin: 1rem 0 2.3rem;
  .forget_btn {
    float: left;
    font-size: 0.9rem;
    color: #707070;
    line-height: 1;
    cursor: pointer;
  }
}
.register {
  // width: 29rem;
  margin: 0 -4.5rem;
  height: 3.5rem;
  line-height: 3.5rem;
  font-size: 0.9rem;
  color: #a0a0a0;
  background: #f6f6f6;
  text-align: center;
  a {
    color: #000;
    cursor: pointer;
  }
}
</style>
