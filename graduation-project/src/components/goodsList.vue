<template>
  <el-container>
    <div v-for="item in goodsList" :key="item.id">
      <el-header>
        <el-row>
          <el-col :span="24">
            <div>{{item.title}}</div>
            <div>{{item.detail}}</div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="24"></el-col>
          <el-col :span="24"></el-col>
        </el-row>

      </el-main>
    </div>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      goodsList: [
        {
          id: '1',
          title: 'Z Signature 造作代表作',
          detail: '27国100+设计大师签名作品，五年百万用户挚爱',
          list: [
            {
              name: '1',
              price: '1000',
              spec: '3色可选',
              img: 'images/upload/1.jfif',
              hover: {
                title: 'Gorsdfasdf',
                country: 'Spain|Valarea'
              }
            },
            {
              name: '1',
              price: '1000',
              spec: '3色可选',
              img: 'images/upload/1.jfif',
              hover: {
                title: 'Gorsdfasdf',
                country: 'Spain|Valarea'
              }
            },
            {
              name: '1',
              price: '1000',
              spec: '3色可选',
              img: 'images/upload/1.jfif',
              hover: {
                title: 'Gorsdfasdf',
                country: 'Spain|Valarea'
              }
            },
            {
              name: '1',
              price: '1000',
              spec: '3色可选',
              img: 'images/upload/1.jfif',
              hover: {
                title: 'Gorsdfasdf',
                country: 'Spain|Valarea'
              }
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less">
</style>
