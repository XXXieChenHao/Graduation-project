<template>
  <div class="caontant">
    <div class="box">
      <h2>Z Signature 造作代表作</h2>
      <h5>27国100+设计大师签名作品，五年百万用户挚爱</h5>
      <div class="contain">
        <div class="item flex4" v-for="(item, index) in list1" :key="index">
          <a href="javascript:;" class="item_a">
            <img :src="item.url" class="imgUrl" />
          </a>
          <div class="text">
            <p class="title">{{item.title}}</p>
            <p class="price">￥{{item.price}}起</p>
          </div>
          <router-link to="goodsDetail">
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
          </router-link>
        </div>
      </div>
    </div>
    <div class="box">
      <h2>Z Room 造作推荐房间组搭</h2>
      <h5>8组客厅/卧室/餐厅最美搭配方案，点亮全家</h5>
      <div class="contain">
        <div class="flex3" v-for="(item, index) in list2" :key="index">
          <a href="javascript:;" class="a100">
            <img :src="item.url" class="img100" />
          </a>
          <p class="title left">{{item.title}}</p>
          <p class="discrib left">{{item.discrib}}</p>
        </div>
      </div>
    </div>
    <div class="box flex2">
      <div class="img_left">
        <img class="imgW100" src="images/upload/a2b1fdac9975136c777b2fc25e202d74.jpg" alt />
      </div>
      <div class="img_right">
        <img class="small" src="images/upload/0cc022f8e3453bf37c8a6b60dcbbe1d9.jpg" alt />
        <img class="small" src="images/upload/242f00e1594d1758f65b50b9f8108d30.jpg" alt />
        <img class="big" src="images/upload/2cb9bbff33943e7b566f8057759c0973.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list1: [],
      list2: []
    }
  },
  created () {
    for (var i = 1; i < 3; i++) {
      this.getImg(i)
    }
  },
  methods: {
    getImg: function (eq) {
      this.$http.get('http://localhost:8080/getImg', { params: { id: eq } })
        .then(res => {
          if (res.data.code === 1) {
            switch (eq) {
              case 1:
                this.list1 = res.data.data
                break
              case 2:
                this.list2 = res.data.data
                break
              default:
                break
            }
          }
        })
    }
  }
}
</script>

<style lang="less" scoped>
.caontant {
  margin: 0 auto;
  overflow-x: hidden;

  .box {
    margin-top: 80px;
  }

  h2 {
    font-size: 30px;
  }

  h5 {
    font-size: 24px;
    margin: 10px;
  }

  .flex2 {
    width: 1290px;
    height: auto;
    margin: 0 auto;
    height: 428px;
    margin-bottom: 40px;
  }
  .flex4 {
    flex: 25%;
  }

  .flex3 {
    display: inline-block;
    width: 32% !important;
    margin-right: 0 !important;
    padding-bottom: 30px;
  }
  .a100 {
    width: 100%;
    height: 100%;
  }
  .img100 {
    width: 100%;
    height: auto;
  }
  .contain {
    width: 1290px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .item {
      height: 394px;
      margin: 20px 0 0;
      position: relative;
    }

    .item_a {
      height: 310px;
    }

    .imgUrl {
      width: 100%;
      height: 310px;
      max-width: 310px;
      max-height: 310px;
      display: block;
      margin: 0 auto;
    }
    .title {
      font-size: 20px;
      font-weight: 900;
    }
    .price {
      font-size: 16px;
      margin-top: 8px;
    }
  }
  .img_left {
    width: 662px;
    height: 428px;
    float: left;
    position: relative;
  }

  .img_right {
    width: 618px;
    float: right;
  }
  .imgW100 {
    width: 100%;
    height: 100%;
  }

  .small {
    width: 299px;
    height: 209px;
    float: left;
    margin-left: 10px;
  }
  .big {
    width: 608px;
    height: 209px;
    float: left;
    margin: 10px 0 0 10px;
  }
}

.flex4:hover .index-goods-img-hover {
  opacity: 1;
}

.flex4:hover .index-goods-title {
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
</style>
