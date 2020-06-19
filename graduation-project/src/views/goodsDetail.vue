<template>
  <div class="goodsDetail">
    <my-header></my-header>
    <div class="show">
      <div class="sku_img">
        <img :src="currImg[colorIndex]" alt />
      </div>
      <div class="option">
        <p>COFA®</p>
        <p>¥8999</p>
        <p>设计师手选组合，最高可省¥1318，可以看看</p>
        <p>少部分地区目前物流受限，客服会在发货前跟您确认</p>
        <p>今天下单，将于2020-06-10前发货，大件家具会致电确认</p>
        <dl class="skudesc-box clearfix">
          <dt>
            <span>颜色</span>
          </dt>
          <dd class="colorbox">
            <div
              class="skubox image"
              v-for="(item, index) in color"
              @click="colorChange(index)"
              :key="index"
            >
              <img :src="color[index]" lazy="loaded" />
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <div class="banner">
      <img v-lazy="banner" alt />
    </div>
    <div class="tabs">
      <img v-lazy="spicImg[cIndex]" alt class="tabsImg" />
      <ul class="current">
        <li v-for="(item, index) in currImg" :key="item" :id="index" @click="changeIndex(index)">
          <img v-lazy="item" alt />
        </li>
      </ul>
    </div>
    <div class="goods_list">
      <div class="goods_list_item" v-for="(item, index) in listImg" :key="index">
        <img :src="item" alt />
      </div>
    </div>
    <div class="commit">
      <h3 class="commit_title">评论 & 晒单</h3>
      <div class="commit_box">
        <div class="commit_item" v-for="(item,index) in commitList" :key="index">
          <img class="headimg" :src="item.img" alt />
          <p class="name">{{item.name}}</p>
          <p class="detail">{{item.detail}}</p>
        </div>
      </div>
      <div class="look_more" @click="getInfo">加载更多</div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from '@/components/Header'
import MyFooter from '@/components/Footer'
export default {
  name: 'HelloWorld',
  components: {
    MyHeader,
    MyFooter
  },
  data () {
    return {
      hideType: true,
      cIndex: 0,
      listImg: [],
      banner: '',
      currImg: [],
      spicImg: [],
      color: [],
      colorIndex: 0,
      commitList: []
    }
  },
  mounted () {
    this.getgoodsdetail()
    this.getInfo()
  },
  methods: {
    getInfo () {
      console.log('123')
      this.$http.get('/getComment')
        .then((res) => {
          console.log(res)
          this.commitList = this.commitList.concat(res.data.list)
          console.log(this.commitList)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getgoodsdetail () {
      this.$http.get('http://localhost:8080/getgoodsdetail', { params: { goodsId: 100001 } }).then(res => {
        var data = res.data.data
        this.listImg = data.detailImg
        this.banner = data.banner
        this.currImg = data.curr
        this.spicImg = data.spic
        this.color = data.color
      })
    },
    colorChange (eq) {
      this.colorIndex = eq
    },
    changeIndex (index) {
      console.log(index)
      this.cIndex = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.commit {
  width: 1366px;
  margin: 0 auto;
  .commit_title {
    font-size: 30px;
    height: 60px;
    border-bottom: 1px solid #666;
  }
  .commit_item {
    width: 100%;
    // height: 100px;
    margin: 40px 0;

    .name {
      font-size: 24px;
      margin-left: 80px;
    }

    .detail {
      font-size: 16px;
      margin-left: 80px;
      margin-top: 20px;
    }

    p {
      text-align: left;
    }
  }

  .headimg {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    float: left;
  }
}

.look_more {
  font-size: 24px;
  padding: 10px 30px;
  border: 1px solid #666;
  border-radius: 15px;
  margin-bottom: 40px;
  cursor: pointer;
}

.show {
  width: 84%;
  max-width: 90rem;
  margin: 0 auto;
  padding: 5rem 0 2.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  align-items: flex-start;
  .sku_img {
    margin-right: 0.625rem;
    flex: 2;
    text-align: center;
    img {
      width: 100%;
      height: auto;
    }
  }

  .skudesc-box {
    dt {
      width: 4.6875rem;
      float: left;
      margin-right: 0.3125rem;
      font-size: 0.875rem;
      line-height: 2.5rem;
      position: relative;
      text-align: justify;
      text-justify: inter-ideograph;
      text-align-last: justify;
    }
  }
  .skubox {
    display: inline-block;
    width: 2.5rem;
    padding: 0.1875rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #f6f6f6;
    height: 2.5rem;
    overflow: hidden;
    cursor: pointer;
    margin: 0 10px;
  }

  .colorbox {
    float: left;
  }

  .option {
    flex: 1;

    p {
      margin-bottom: 0.625rem;
      padding: 0.625rem 0.9375rem;
      color: #313131;
      font-size: 0.875rem;
      line-height: 1.5;
      border-radius: 0.125rem;
      text-align: left;

      &:nth-child(1) {
        font-size: 1.625rem;
        line-height: 1.2;
        padding-bottom: 0.625rem;
      }

      &:nth-child(2) {
        padding-bottom: 1.25rem;
        font-size: 1.75rem;
        line-height: 1;
        color: #e56a69;
      }

      &:nth-child(3) {
        background: #e56a69;
        color: #fff;
      }

      &:nth-child(4) {
        background: #ffebe8;
      }

      &:nth-child(5) {
        background: #f9f9f9;
      }
    }
  }
}
.current {
  width: auto;
  max-width: 75rem;
  display: inline-block;

  & li {
    display: inline-block;
    padding: 0 10px;
    margin: 0 10px;

    & img {
      width: 5.625rem;
      height: 5.625rem;
      margin: 0 auto;
    }
  }
}

.tabs {
  margin-top: 1.875rem;
  text-align: center;
}

.tabsImg {
  width: 62.5rem;
  height: 25rem;
  display: block;
  margin: 2.5rem auto;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    padding: 0 10px;
    margin: 0 10px; /*no*/
  }
}

a {
  color: #42b983;
  font-size: 14px;
}

.adbox {
  position: relative;
}

.wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  background: #cccccc;
  margin: 0;
  width: 100%;
  opacity: 0.5;
  pointer-events: none;
  z-index: -10;
}
li:active {
  a:active {
    color: red;
  }
}

.hide {
  pointer-events: none;
}

.goods_list_item {
  position: relative;

  img {
    width: 100%;
    height: auto;
    border-style: none;
    max-width: 100%;
    border: 0;
    vertical-align: top;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
}
</style>
