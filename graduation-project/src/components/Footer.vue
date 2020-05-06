<template>
  <div class="footer">
    <div class="main w80 warpper">
      <ul>
        <li class="first">
          <a href="###">
            <img src="@/assets/imgs/d9621af23d11fbb037fd75e2d3e27bdc.png" alt />
            <p>zaozuo.com</p>
          </a>
          <span class="iconfont icon-weibo"></span>
          <span class="iconfont icon-weixin"></span>
        </li>
        <li class="second">
          <dl>
            <dt>关于造作新家</dt>
            <dd>
              <a href="###">团队介绍</a>
            </dd>
            <dd>
              <a href="###">设计师团</a>
            </dd>
            <dd>
              <a href="###">媒体报道</a>
            </dd>
            <dd>
              <a href="###">加入造作新家</a>
            </dd>
            <dd>
              <a href="###">Designer Hiring</a>
            </dd>
          </dl>

          <dl>
            <dt>服务支持</dt>
            <dd>
              <a href="###">服务保障</a>
            </dd>
            <dd>
              <a href="###">用户协议</a>
            </dd>
            <dd>
              <a href="###">物流售后服务</a>
            </dd>
          </dl>

          <dl>
            <dt>商业合作</dt>

            <dd>
              <a href="###">集合采购</a>
            </dd>
            <dd>
              <a href="###">伙伴加盟</a>
            </dd>
            <dd>
              <a href="###">品牌合作</a>
            </dd>
            <dd>
              <a href="###">媒体合作</a>
            </dd>
            <dd>
              <a href="###">设计师入驻</a>
            </dd>
          </dl>
        </li>
        <li>
          <div class="contact-us">
            <a href="###">联系我们</a>
            <p class="tel">
              400-6636-926
              <span>（9:00~21:00）</span>
            </p>
            <div class="server-online">在线客服</div>
            <div class="shop-entry">
              <a href="###">造作新家全国实体店</a>
            </div>
          </div>
        </li>
      </ul>
      <div class="line">
        <p>Copyright © 2018 zaozuo.com Inc.All Rights Reserved. 北京造化科技有限公司</p>
        <p>
          <span>版权所有</span>
          <a target="_blank" rel="nofollow">京ICP备14049641号-1</a>
          <a target="_blank" class="last-child" rel="nofollow">增值电信业务经营许可证：京ICP证150098号</a>
        </p>
        <p>
          <a style="padding-left: 0">造作新家</a>官网-全球设计师创作
          <a style="padding-left: 0">家居品牌</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.footer {
  background: #272727;
  color: #fff;
  overflow: hidden;
}
.main {
  min-width: 1200px;
  margin-top: 100px;
  height: 250px;
  ul {
    height: 100%;
    display: flex;
    justify-content: space-around;
    li {
      height: 100%;
    }
    li:nth-child(1) {
      flex: 1;
      border-right: 1px solid #ccc;
    }
    li:nth-child(2) {
      flex: 2;
      border-right: 1px solid #ccc;
    }
    li:nth-child(3) {
      flex: 1;
    }
  }
}
.line {
  margin-top: 40px;
  padding-top: 45px;
  border-top: #a0a0a0 1px solid;
  color: #a0a0a0;
}
.first {
  text-align: left;
  a {
    display: block;
    color: #fff;
    font-size: 18px;
    line-height: 30px;
    padding: 10px 0 0 5px;
  }
}
.icon-weibo,
.icon-weixin {
  display: inline-block;
  font-size: 40px;
  margin-top: 35px;
  margin-left: 5px;
}
.second {
  display: flex;
  justify-content: space-evenly;
  dt {
    display: inline-block;
    margin-bottom: 10px;
    color: #a0a0a0;
    line-height: 40px;
    border-bottom: #a0a0a0 1px solid;
    cursor: text;
  }
  dd {
    a {
      color: #d2d2d2;
      display: block;
      line-height: 34px;
      white-space: nowrap;
    }
  }
}

.contact-us {
  width: auto;
  float: right;
  color: #fff;
  text-align: left;
}
.contact-us > a {
  line-height: 30px;
  padding-top: 5px;
  color: #a0a0a0;
  cursor: text;
}
.tel {
  font-size: 22px;
  line-height: 32px;
  font-weight: 400;
  span {
    display: inline-block;
    font-size: 14px;
    margin-left: 20px;
    vertical-align: top;
  }
}
.server-online {
  width: 80px;
  height: 28px;
  margin: 10px 0 15px;
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  line-height: 28px;
  text-align: center;
  cursor: pointer;
  border-radius: 14px;
  -moz-border-radius: 14px;
  -o-border-radius: 14px;
  -webkit-border-radius: 14px;
}
.shop-entry {
  width: 100%;
  padding-top: 30px;
  a {
    display: block;
    width: 96%;
    height: 40px;
    background: #fff;
    border: transparent 1px solid;
    font-size: 13px;
    line-height: 41px;
    color: #000;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background: #000;
      color: #fff;
      border: 1px solid #fff;
    }
  }
}
.line {
  a {
    padding-left: 2px;
    color: #a0a0a0;
  }
}
</style>
