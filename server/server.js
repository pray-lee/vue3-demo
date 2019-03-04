const http = require('http')
http.createServer((req, res) => {
  console.log(res)
  res.write('{"name": "leexiaoyong"}')
  res.end()
}).listen(3000)
