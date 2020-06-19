var fs = require('fs');

function readBook() {
	var loginData = ''
 fs.readFile('./login.json', 'utf8', function (err, data) {
    if (err) {
      throw err;
    }
   loginData =  data;
  })
  return loginData
}

console.log(readBook())