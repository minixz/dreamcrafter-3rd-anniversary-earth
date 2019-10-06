const Koa = require('koa');
const http2 = require('http2');
const mount = require('koa-mount');
const serve = require('koa-static');
const path = require('path');
const fs = require('fs');

const app = new Koa();
app.use(mount('/dreamcrafter-3rd-anniversary', serve(path.join(__dirname, 'docs'))));

http2
  .createSecureServer(
    {
      key: fs.readFileSync('ssl/localhost-privkey.pem'),
      cert: fs.readFileSync('ssl/localhost-cert.pem'),
    },
    app.callback(),
  )
  .listen(8080);
