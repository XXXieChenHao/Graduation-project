const express = require('express')
const path = require('path')
var querystring = require('querystring')
var fs = require('fs')

const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.listen(8080, () => console.log('服务启动+8080'))
// 密码登录接口
app.get('/login', (req, res) => {
  var loginData = ''
  var id = req.query.id.split(',')
  var psw = req.query.password.split(',')
  var arr = []
  var brr = []
  id.forEach(e => {
    arr.push(String.fromCharCode(e))
  })
  psw.forEach(e => {
    brr.push(String.fromCharCode(e))
  })
  fs.readFile('./login.json', 'utf8', function (err, data) {
    if (err) {
      throw err
    }
    loginData = JSON.parse(data).data
    var flag = false
    loginData.forEach(item => {
      if (item.id == arr.join('') && item.password == brr.join('')) {
        flag = true
      }
    })
    var resData = {
      code: flag ? 1 : 0,
      msg: flag ? '登陆成功' : '账号或密码错误'
    }
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send(resData)
  })
})

// 快速登陆接口
app.post('/telLogin', (req, res) => {
  var arr = []
  new Promise(resolve => {
    req.on('data', buffer => {
      arr.push(buffer)	//创建一个数组，把每次传递过来的数据保存
    })

    req.on('end', () => {
      let buf = Buffer.concat(arr)	//使用concat把数据连接起来
      let post = buf.toString()//解析数据
      return resolve(post)
    })
  }).then(data => {
    var result = data.split('"')
    var tel = result[3]
    var r_code = result[7]
    var loginData = ''
    var msg = ''
    var flag = false
    fs.readFile('./tel.json', 'utf8', function (err, data) {
      if (err) {
        throw err
      }
      file = data
      loginData = JSON.parse(data)
      var token = ''
      for (var i = 0; i < loginData.length; i++) {
        if (loginData[i].tel == tel) {
          if (r_code == '1111') {
            msg = '登陆成功，正在重定向...'
            code = 1
            token = 'e12jzh123jjhkbzxcg665176zxc87dg8d7as8t67rz7x64c7a876zx87c6zx87ca47d475sad47657x23423zxcv12vhgf12'
            break
          } else {
            msg = '对不起，请检查验证码'
            code = -1
            break
          }
        } else {
          msg = '对不起，账号不存在'
          code = -1
        }
      }
      var resData = {
        code,
        msg,
        token
      }
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.send(resData)
    })
  })
})

// 首页接口
app.get('/getImg', (req, response) => {
  var id = req.query.id
  var folder = './public/' + id
  var resData = {}
  resData.code = 1
  new Promise(resolve => {
    fs.readFile('./public/' + id + '/data.json', 'utf8', function (err, data) {
      if (err) {
        throw err
      }
      resolve(JSON.parse(data).data)
    })
  }).then(res => {
    var data = res
    return new Promise(resolve => {
      fs.readdir(folder, (err, files) => {
        data.forEach((item, index) => {
          item.url = 'http://localhost:8080/' + id + '/' + files[index]
        })
        resolve(data)
      })
    })
  }).then(res => {
    resData.data = res
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send(resData)
  })
})

// 获取商品详情
app.get('/getgoodsdetail', (req, response) => {
  var goodsId = req.query.goodsId
  var folder = './public/goodsdetail/' + goodsId
  var resData = {}
  resData.code = 1
  var data = {}
  data.banner = ''
  data.detailImg = []
  data.spicImg = []
  data.spic = []
  data.curr = []
  data.color = []
  new Promise(resolve => {
    fs.readdir(folder, (err, files) => {
      files.forEach((item, index) => {
        var url = 'http://localhost:8080/goodsdetail/' + goodsId + '/'
        if (item.indexOf('detail') != -1) {
          // 商品详情图片
          data.detailImg.push(url + item)
        } else if (item.indexOf('goods') != -1) {
          data.curr.push(url + item)
        } else if (item.indexOf('banner') != -1) {
          data.banner = url + item
        } else if (item.indexOf('spic') != -1) {
          data.spic.push(url + item)
        } else if (item.indexOf('color') != -1) {
          data.color.push(url + item)
        }
      })
      resData.data = data
      resolve(resData)
    })
  }).then(res => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send(res)
  })
})

// 注册
app.post('/register', (req, res) => {
  var arr = []
  new Promise(resolve => {
    req.on('data', buffer => {
      arr.push(buffer)	//创建一个数组，把每次传递过来的数据保存
    })

    req.on('end', () => {
      let buf = Buffer.concat(arr)	//使用concat把数据连接起来
      let post = buf.toString()//解析数据
      return resolve(post)
    })
  }).then(data => {
    var result = data.split('"')
    var tel = result[3]
    var r_code = result[7]
    var loginData = ''
    var code = 0
    var msg = ''
    var token = ''
    fs.readFile('./tel.json', 'utf8', function (err, data) {
      if (err) {
        throw err
      }
      loginData = JSON.parse(data)
      var telflag = false
      var flag = false
      for (var i = 0; i < loginData.length; i++) {
        if (loginData[i].tel == tel) {
          msg = '对不起，账号已存在'
          code = 0
          telflag = true
          break
        }
      }
      for (var j = 0; j < loginData.length; j++) {
        if (!telflag) {
          // 账号不存在
          if (r_code == '1111') {
            msg = '注册成功，正在登录中'
            code = 1
            token = 'e12jzh123jjhkbzxcg665176zxc87dg8d7as8t67rz7x64c7a876zx87c6zx87ca47d475sad47657x23423zxcv12vhgf12'
            flag = true
          } else {
            msg = '对不起，验证码错误'
            code = -1
          }
        }
      }
      if (flag) {
        var obj = {
          tel,
          code: '1111'
        }
        loginData.push(obj)
        fs.writeFile('./tel.json', JSON.stringify(loginData), function (err) {
          return
        })
      }

      var resData = {
        code,
        msg,
        token
      }
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.send(resData)
    })
  })

})
