<template>
  <div class="contain">
    <h2>全品目录/签名设计正品</h2>
    <div class="container">
      <div class="title">沙发</div>
      <div class="item" v-for="(item, index) in list3" :key="index">
        <a href="javscript:;">
          <img v-lazy="item.url" alt />
          <p class="item_title">{{item.title}}</p>
          <p class="price">￥{{item.price}}起</p>
        </a>
        <div class="index-goods-img-hover">
          <div>
            <p>{{item.detail}}</p>
          </div>
        </div>
        <div class="index-goods-title">
          <div>
            <p>{{item.city}}</p>
          </div>
        </div>
      </div>
      <div class="item">
        <a href="Javascript:;" class="button">
          <p>更多</p>
          <p>沙发</p>
        </a>
      </div>
    </div>
    <div class="container">
      <div class="title">椅凳</div>
      <div class="item" v-for="(item, index) in list4" :key="index">
        <a href="javscript:;">
          <img v-lazy="item.url" alt />
          <p class="item_title">{{item.title}}</p>
          <p class="price">￥{{item.price}}起</p>
        </a>
        <div class="index-goods-img-hover">
          <div>
            <p>{{item.detail}}</p>
          </div>
        </div>
        <div class="index-goods-title">
          <div>
            <p>{{item.city}}</p>
          </div>
        </div>
      </div>
      <div class="item">
        <a href="Javascript:;" class="button">
          <p>更多</p>
          <p>椅凳</p>
        </a>
      </div>
    </div>
    <div class="container">
      <div class="title">柜架</div>
      <div class="item" v-for="(item, index) in list5" :key="index">
        <a href="javscript:;">
          <img v-lazy="item.url" alt />
          <p class="item_title">{{item.title}}</p>
          <p class="price">￥{{item.price}}起</p>
        </a>
        <div class="index-goods-img-hover">
          <div>
            <p>{{item.detail}}</p>
          </div>
        </div>
        <div class="index-goods-title">
          <div>
            <p>{{item.city}}</p>
          </div>
        </div>
      </div>
      <div class="item">
        <a href="Javascript:;" class="button">
          <p>更多</p>
          <p>柜架</p>
        </a>
      </div>
    </div>
    <div class="container">
      <div class="title">床·床具</div>
      <div class="item" v-for="(item, index) in list6" :key="index">
        <a href="javscript:;">
          <img v-lazy="item.url" alt />
          <p class="item_title">{{item.title}}</p>
          <p class="price">￥{{item.price}}起</p>
        </a>
        <div class="index-goods-img-hover">
          <div>
            <p>{{item.detail}}</p>
          </div>
        </div>
        <div class="index-goods-title">
          <div>
            <p>{{item.city}}</p>
          </div>
        </div>
      </div>
      <div class="item">
        <a href="Javascript:;" class="button">
          <p>更多</p>
          <p>床·床具</p>
        </a>
      </div>
    </div>
    <div class="container">
      <div class="title">桌几</div>
      <div class="item" v-for="(item, index) in list7" :key="index">
        <a href="javscript:;">
          <img v-lazy="item.url" alt />
          <p class="item_title">{{item.title}}</p>
          <p class="price">￥{{item.price}}起</p>
        </a>
        <div class="index-goods-img-hover">
          <div>
            <p>{{item.detail}}</p>
          </div>
        </div>
        <div class="index-goods-title">
          <div>
            <p>{{item.city}}</p>
          </div>
        </div>
      </div>
      <div class="item">
        <a href="Javascript:;" class="button">
          <p>更多</p>
          <p>桌几</p>
        </a>
      </div>
    </div>
    <div class="container">
      <div class="title">灯具</div>
      <div class="item" v-for="(item, index) in list8" :key="index">
        <a href="javscript:;">
          <img v-lazy="item.url" alt />
          <p class="item_title">{{item.title}}</p>
          <p class="price">￥{{item.price}}起</p>
        </a>
        <div class="index-goods-img-hover">
          <div>
            <p>{{item.detail}}</p>
          </div>
        </div>
        <div class="index-goods-title">
          <div>
            <p>{{item.city}}</p>
          </div>
        </div>
      </div>
      <div class="item">
        <a href="Javascript:;" class="button">
          <p>更多</p>
          <p>灯具</p>
        </a>
      </div>
    </div>
    <div class="container">
      <div class="title">装饰</div>
      <div class="item" v-for="(item, index) in list9" :key="index">
        <a href="javscript:;">
          <img v-lazy="item.url" alt />
          <p class="item_title">{{item.title}}</p>
          <p class="price">￥{{item.price}}起</p>
        </a>
        <div class="index-goods-img-hover">
          <div>
            <p>{{item.detail}}</p>
          </div>
        </div>
        <div class="index-goods-title">
          <div>
            <p>{{item.city}}</p>
          </div>
        </div>
      </div>
      <div class="item">
        <a href="Javascript:;" class="button">
          <p>更多</p>
          <p>装饰</p>
        </a>
      </div>
    </div>
    <div class="container">
      <div class="title">餐具</div>
      <div class="item" v-for="(item, index) in list10" :key="index">
        <a href="javscript:;">
          <img v-lazy="item.url" alt />
          <p class="item_title">{{item.title}}</p>
          <p class="price">￥{{item.price}}起</p>
        </a>
        <div class="index-goods-img-hover">
          <div>
            <p>{{item.detail}}</p>
          </div>
        </div>
        <div class="index-goods-title">
          <div>
            <p>{{item.city}}</p>
          </div>
        </div>
      </div>
      <div class="item">
        <a href="Javascript:;" class="button">
          <p>更多</p>
          <p>餐具</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list3: [],
      list4: [],
      list5: [],
      list6: [],
      list7: [],
      list8: [],
      list9: [],
      list10: []
    }
  },
  created () {
    for (var i = 3; i < 11; i++) {
      this.getImg(i)
    }
  },
  methods: {
    getImg: function (eq) {
      var that = this
      this.$http.get('/api/getImg', { params: { id: eq } })
        .then(res => {
          if (res.data.code === 1) {
            var arr = ['list1', 'list2', 'list3', 'list4', 'list5', 'list6', 'list7', 'list8', 'list9', 'list10']
            that[arr[eq - 1]] = res.data.data
          }
        })
    }
  }
}
</script>

<style lang="less" scoped>
.contain {
  width: 1290px;
  margin: 0 auto;

  h2 {
    margin: 80px auto;
    font-size: 30px;
  }

  .title {
    width: 100%;
    font-size: 24px;
    line-height: 50px;
    border-bottom: 1px solid #d2d2d2;
    text-align: left;
    font-weight: 900;
  }

  .container {
    width: 1296px;
    height: auto;
    padding-bottom: 55px;
    overflow: hidden;
    margin: 0 auto;
  }

  .item {
    width: 310px;
    height: 394px;
    float: left;
    margin: 20px 14px 0 0;
    position: relative;
    a {
      height: 310px;
      width: 100%;
      display: inline-block;

      img {
        width: 90%;
        margin: 30px auto 0;
      }
    }
    .item_title {
      font-size: 20px;
      font-weight: 900;
    }
    .price {
      font-size: 16px;
      margin-top: 8px;
    }

    .button {
      width: 150px;
      height: 150px;
      border: 9px solid #707070;
      box-sizing: border-box;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -75px;
      margin-top: -75px;
      color: #313131;
      transition: 0.2s border-color, 0.2s color;

      & > p:first-child {
        margin-top: 1.2rem;
      }
      p {
        font-size: 1.1rem;
        line-height: 2rem;
        text-align: center;
        position: relative;
      }
    }
  }
}
.item:hover .index-goods-img-hover {
  opacity: 1;
}

.item:hover .index-goods-title {
  opacity: 1;
}

.index-goods-title {
  font-size: 16px;
  height: 84px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #fff;
  opacity: 0;
  transition: 0.5s;
}

.index-goods-img-hover {
  display: table;
  width: 101%;
  height: 310px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  background: rgba(255, 255, 255, 0.7);
  transition: 0.5s;

  div {
    width: 100%;
    display: table-cell;
    vertical-align: middle;
    padding: 0 20%;
    position: relative;

    p {
      padding: 15px 8px;
      border: 6px solid #535353;
      font-size: 15px;
      line-height: 21px;
      color: #373737;
      text-align: center;
      display: table;
      margin: 0 auto;
    }
  }
}
.full {
  width: 100%;
  border-top: 10px solid #f6f6f6;

  .full_item {
    width: 20%;
    height: 380px;
    border-right: #fff 5px solid;
    min-height: 224px;
    float: left;
    border: #fff 1px solid;
    position: relative;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    cursor: pointer;
    overflow: hidden;
  }
}
</style>
