<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane class="first" label="单品" name="first">
      <div class="single">
        <img src="@/assets/imgs/empty.png" alt />
        <p>世间所有的那些美好,都应值得被好好收藏</p>
        <p>去收藏喜欢的单品吧</p>
      </div>
    </el-tab-pane>
    <el-tab-pane label="设计师" name="second">
      <div
        class="designer"
        @mouseenter="mouse(item.id)"
        @mouseleave="leave(item.id)"
        v-for="item in arr"
        :key="item.id"
      >
        <img :src="item.img" alt style="width: 100%; height: 100%" />
        <div class="preheating" :id="item.id" style="opacity: 0;">
          <h1>{{item.name}}</h1>
          <h3>
            来自
            <em>{{item.city}}</em>
          </h3>
          <p>{{item.detail}}</p>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="其他" name="third">
      <div class="block">
        <span class="demonstration">周</span>
        <el-date-picker v-model="value1" type="week" format="yyyy 第 WW 周" placeholder="选择周"></el-date-picker>
      </div>
      {{value1}}
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data () {
    return {
      value1: '',
      activeName: 'first',
      arr: [
        {
          id: 1,
          img: '/images/upload/designer.jpg',
          name: 'Luca Nichetto',
          city: 'Italy | Sweden',
          detail: 'Elle Décor / Gran Design Award / Salvlati'
        },
        {
          id: 2,
          img: '/images/upload/designer.jpg',
          name: 'Nice Xch',
          city: 'China | menggoling',
          detail: 'HAHAHA / sui bian shi yi shi'
        }
      ]
    }
  },
  created () {

  },
  update () {
    this.mouse()
  },
  methods: {
    mouse: function (index) {
      console.log(index)
      document.getElementById(index).style.opacity = 1
    },
    leave: function (index) {
      document.getElementById(index).style.opacity = 0
    },
    handleClick: function () { }
  }
}
</script>

<style lang="less" scoped>
.first {
  margin-left: 30px;
}
.single {
  height: 500px;
  .img {
    margin-top: 100px;
  }
  p {
    font-size: 22px;
    color: #808080;
    margin-top: 40px;
  }
}
.designer {
  width: 300px;
  height: 300px;
  position: relative;
  float: left;
  margin: 0 15px 15px 0;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    zoom: 1;
    // display: none;
  }
}

.preheating {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  text-align: center;

  h1 {
    height: 70px;
    font-size: 2em;
    line-height: 70px;
    padding: 34% 10px 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
  }
}
</style>
