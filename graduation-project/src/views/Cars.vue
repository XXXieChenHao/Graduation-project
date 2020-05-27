<template>
  <el-container>
    <el-header>
      <my-header></my-header>
    </el-header>
    <el-main>
      <div class="cars">
        <h2>商品</h2>
        <ul>
          <li>
            <img src alt />
            <div class="detail"></div>
          </li>
          <li></li>
        </ul>
      </div>
      <div class="order"></div>
    </el-main>
    <el-footer>
      <my-footer></my-footer>
    </el-footer>
  </el-container>
</template>

<script>
import MyHeader from '@/components/Header'
import MyFooter from '@/components/Footer'
export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style lang="less" scoped>
.el-header,
.el-footer {
  padding: 0;
}
.el-main {
  padding: 0;
}
.cars {
  width: 70%;
  background: #fff;
  padding: 40px 0 0;
  margin: 0 auto;

  h2 {
    font-size: 30px;
    text-align: left;
    padding-left: 20px;
    padding-bottom: 20px;
    border-bottom: 5px solid #e4e4e4;
  }

  ul {
    li {
      height: 170px;
    }
  }
}
.order {
  width: 100%;
  height: 60px;
  // position: fixed;
  left: 0;
  bottom: 0;
  z-index: 3;
  padding: 20px 0;
  border-top: #d2d2d2 1px solid;
  border-bottom: #d2d2d2 1px solid;
  background: #fff;

  .detail {
    width: 15.6rem;
    height: 100%;
    float: none;
    padding-right: 1rem;
    display: table-cell;
    vertical-align: top;
  }
}
</style>
