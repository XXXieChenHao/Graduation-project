// 时间戳格式化
function formaTime (unixtime) {
  var dateTime = new Date(parseInt(unixtime))
  var year = dateTime.getFullYear()
  var month = dateTime.getMonth() + 1
  var day = dateTime.getDate()
  var now = new Date()
  var nowNew = Date.parse(now.toDateString())
  //  typescript转换写法
  var milliseconds = nowNew - dateTime
  console.log(milliseconds)
  var timeSpanStr = year + '/' + add0(month) + '/' + add0(day) + ''
  //  + ' ' + hour + ':' + minute
  return timeSpanStr
}

//  时间戳转换成日期时间
function formatTimeSmall (unixtime) {
  var dateTime = new Date(parseInt(unixtime))
  var year = dateTime.getFullYear()
  var month = dateTime.getMonth() + 1
  var day = dateTime.getDate()
  var hour = dateTime.getHours()
  var minute = dateTime.getMinutes()
  var second = dateTime.getSeconds()
  var now = new Date()
  var nowNew = Date.parse(now.toDateString())
  //  typescript转换写法
  var milliseconds = nowNew - dateTime
  console.log(milliseconds)
  var timeSpanStr = year + '-' + add0(month) + '-' + add0(day) + ' ' + add0(hour) + ':' + add0(minute) + ':' + add0(second)// + ' ' + hour + ':' + minute
  return timeSpanStr
}

// 时间倒数
function dateCount (time, variable) {
  // 获取现在的时间
  var date = new Date()
  // 获取未来的时间
  var preTime = time + variable * 60 * 60 * 1000
  var until = new Date(preTime)
  var days = (until - date) / 1000 / 3600 / 24
  var day = Math.floor(days)
  var hours = (days - day) * 24
  var hour = Math.floor(hours)
  var minutes = (hours - hour) * 60
  var minute = Math.floor(minutes)
  var seconds = (minutes - minute) * 60
  var second = Math.floor(seconds)
  var temp = variable > 24 ? day + '天' : ''
  var back = '剩余 ' + temp + hour + '小时 ' + minute + ' 分钟 ' + second + ' 秒 '
  if (days <= 0) {
    return '已过期'
  }
  return back
}

function add0 (m) {
  return m < 10 ? '0' + m : m
}

// 数据判空
function distanceEmpty (data) {
  // 如果 data 为数组，则式子为 true
  if (data instanceof Array) {
    // 判断数据是否长度小于1 如果小于返回 true
    return data.length < 1
  } else if (Object.prototype.toString.call(data) === '[object Object]') {
    // 如果数据为对象 判断是否为空，为空返回true
    return JSON.stringify(data) === '{}'
  } else {
    return !data
  }
}

function equals (x, y) {
  var f1 = x instanceof Object
  var f2 = y instanceof Object
  if (!f1 || !f2) {
    return x === y
  }
  if (Object.keys(x).length !== Object.keys(y).length) {
    return false
  }
  var newX = Object.keys(x)
  for (var p in newX) {
    p = newX[p]
    var a = x[p] instanceof Object
    var b = y[p] instanceof Object
    if (a && b) {
      const equal = this.equals(x[p], y[p])
      if (!equal) {
        return equal
      }
    } else if (x[p] !== y[p]) {
      return false
    }
  }
  return true
}

export default {
  formaTime,
  formatTimeSmall,
  dateCount,
  distanceEmpty,
  equals
}
