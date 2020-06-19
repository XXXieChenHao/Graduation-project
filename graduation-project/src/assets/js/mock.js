const Mock = require('mockjs')
var Random = Mock.Random
// 创建模拟数据
var data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|5': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    detail: '@cparagraph()',
    name: '@cname',
    img: '@image()'
  }]
})
Random.sentence()
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/getComment', 'get', data)
