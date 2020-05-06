<template>
  <div class="navigator">
    <ul class="nav">
      <li v-for="(item,index) in nav" :key="index">
        <div class="tag">
          <a :href="item.link">{{item.name}}</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.navigator {
  width: 100%;

  .nav {
    width: 100%;
    margin: 40px auto 0;
    position: relative;
    text-align: center;
    font-size: 0;
    li {
      display: inline-block;
      font-size: 14px;
      padding-left: 32px;
      padding-right: 32px;
      padding-bottom: 10px;
      cursor: pointer;
      line-height: 1;

      .tag {
        padding-bottom: 5px;
        border-bottom: 3px solid transparent;
        font-size: 14px;
        line-height: 1;
        color: #313131;
      }

      a {
        padding-bottom: 5px;
        border-bottom: 3px solid transparent;
        font-size: 14px;
        line-height: 1;
        color: #313131;
        font-weight: bolder;
      }

      .active {
        display: block;
        font-size: 14px;
        color: #313131;
        font-weight: 700;
        line-height: 1;
        padding-bottom: 5px;
        border-bottom: 3px solid #000;
      }
    }
  }
}
</style>

<script>
export default {
  data () {
    return {
      nav: [
        { name: '首页', link: '###' },
        { name: '沙发', link: '###' },
        { name: '柜架', link: '###' },
        { name: '床·床具', link: '###' },
        { name: '椅凳', link: '###' },
        { name: '桌几', link: '###' },
        { name: '灯具', link: '###' },
        { name: '家纺', link: '###' },
        { name: '装饰', link: '###' },
        { name: '餐具', link: '###' },
        { name: '系列', link: '###' }
      ]
    }
  }
}
</script>
