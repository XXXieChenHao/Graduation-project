<template>
  <div class="box">
    <div class="full clearfixed">
      <h2>精选自10万+生活家晒单/证言造作美学</h2>
      <a class="full_item" v-for="(item, index) in list" :key="index">
        <img :src="item.url" alt />
        <div class="layer">
          <p class="info">{{item.detail}}</p>
        </div>
      </a>
    </div>
    <div class="container">
      <h2 class="zStores">Z Stores 全国实体门店</h2>
      <ul class="flex clearfixed">
        <li>
          <img src="images/upload/b81653ccdd82eba6ac684c65c427d864.jpg" alt />
        </li>
        <li>
          <img src="images/upload/c456e632bdea70711828918081c6fa92.jpg" alt />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: ''
    }
  },
  created () {
    this.getImg(11)
  },
  ready () {
    this.ahover()
  },
  methods: {
    getImg: function (eq) {
      var that = this
      this.$http.get('http://localhost:8080/getImg', { params: { id: 11 } })
        .then(res => {
          if (res.data.code === 1) {
            that.list = res.data.data
          }
        })
    },
    ahover: function () {
      var item = document.getElementsByClassName('layer')
      console.log(item)
      for (var i = 0; i < item.length; i++) {
        console.log(item[i])
        item[i].onmouseover = function () {
          console.log('123')
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
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

  .layer {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    opacity: 0;
    background: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    transition: 1s;
  }

  .layer:hover {
    opacity: 1;
  }

  .info {
    width: 60%;
    height: 54px;
    margin: 15px auto 0;
    font-size: 16px;
    line-height: 18px;
    overflow: hidden;
    position: relative;
    word-wrap: break-word;
    color: #313131;
    margin-top: 114px;
    text-align: center;
  }
}
.zStores {
  font-size: 28px;
  line-height: 28px;
  display: block;
  font-weight: 700;
  margin-top: 40px;
}

.flex {
  width: 1366px;
  margin: 0 auto 120px;
}
.flex li {
  float: left;
  width: 637px;
  margin-left: 20px;
}

.flex li img {
  width: 100%;
}

.flex li:nth-child(1) {
  margin-left: 0;
}
</style>
