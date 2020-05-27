const express = require('express');
var fs = require('fs');

const app = express();
app.listen(8080, () => console.log('服务启动+8080'));

// app.get('/', (req, res) => {
//   res.send('<div>123213</div>')
// })

var loginData = ''
fs.readFile('./login.json', 'utf8', function (err, data) {
  if (err) {
    throw err;
  }
  loginData = data;
})

app.get('/login', (req, res) => {
  var id = req.query.id
  var psw = req.query.password
  var data = JSON.parse(loginData).data
  var flag = false
  for (var i = 0; i < data.length; i++) {
    if (data[i].id == id && data[i].password == psw) {
      flag = true
      break;
    }
  }
  var resData = {
    code: flag ? 1 : 0,
    msg: flag ? '登陆成功' : '账号或密码错误'
  }
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(resData)
})