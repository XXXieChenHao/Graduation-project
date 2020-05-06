<template>
  <el-row>
    <el-col :span="24">
      <img v-on:mousedown="down" src="/images/imgs/banner.jfif" alt />
      <div class="live_link">
        <div class="live_box">
          <div class="inner">
            <a :href="item.link" v-for="item in list" :key="item.id" class="list_a">
              <div class="img_box">
                <div class="img" :class="'img' + item.id"></div>
              </div>
              <p>
                {{item.p}}
                <br />
                <span>
                  <b>{{item.b}}</b>
                  {{item.span}}
                </span>
              </p>
            </a>
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
      list: [
        {
          id: 1,
          link: 'http://www.baidu.com',
          p: '27国/百位设计大师的',
          b: '签名',
          span: '正品'
        },
        {
          id: 2,
          link: 'http://www.baidu.com',
          p: '100+精工大厂/100%手检',
          b: '欧标',
          span: '质造'
        },
        {
          id: 3,
          link: 'http://www.baidu.com',
          p: '满¥199',
          b: '免费',
          span: '送装'
        },
        {
          id: 4,
          link: 'http://www.baidu.com',
          p: '延期高利补偿/确保',
          b: '准时',
          span: '交付'
        },
        {
          id: 5,
          link: 'http://www.baidu.com',
          p: '价格保障/变动返差价',
          b: '7日',
          span: '保价'
        },
        {
          id: 6,
          link: 'http://www.baidu.com',
          p: '三年质保',
          b: '7日',
          span: '退换'
        }
      ]
    }
  },
  methods: {
    down: function (e) {
      console.log(e)
      e.preventDefault()
    }
  }
}
</script>

<style lang="less" scoped>
.el-col {
  width: 100%;
  overflow: hidden;
  position: relative;
  img {
    height: 300px;
    display: block;
    position: relative;
    z-index: -1;
  }
}
.live_link {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  top: 0;
  color: #fff;
  text-align: center;
  display: table;
}

.list_a {
  display: table-cell;
  width: 175px;

  &:hover {
    opacity: 0.8;
  }

  p {
    padding-top: 20px;
    color: #fff;
    font-size: 13px;
    line-height: 25px;
  }

  span {
    font-size: 26px;
    font-weight: 400;
    letter-spacing: 8px;
    text-indent: 7px;
    display: inline-block;
  }
}

.live_box {
  display: table-cell;
  vertical-align: middle;
  text-align: center;

  .inner {
    display: table;
    width: 1200px;
    margin: 18px auto 30px;
  }

  .img_box {
    width: 64px;
    height: 64px;
    margin: 0 auto;

    .img {
      width: 64px;
      height: 64px;
      margin: 7.5px auto;
      background-image: url(/images/imgs/icon-banner.png);
      background-repeat: no-repeat;
      position: relative;
      background-size: auto 128px;
    }
  }
}

.img2 {background-position: -62px 0;}
.img3 {background-position: -124px 0;}
.img4 {background-position: -192px 0;}
.img5 {background-position: -254px 0;}
.img6 {background-position: -320px 0;}
</style>
