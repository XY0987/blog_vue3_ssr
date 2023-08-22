let express = require("express");

let server = express();
import createApp from "../app";
import { renderToString } from "@vue/server-renderer";
// 部署静态资源
server.use(express.static("build"));

import createRouter from "../router";
// 内存路由=>node用
import { createMemoryHistory } from "vue-router";
import { createPinia } from "pinia";

server.get("/*", async (req, res) => {
  let app = createApp();
  let router = createRouter(createMemoryHistory());
  /* 
  服务器端和客户端都注册路由的原因是为了实现路由同步
  用户进入页面时将渲染好的字符串返回(服务器端返回正确的html字符串)
  在页面跳转可以无刷新跳转(客户端可以继续跳转)
  */
  app.use(router);
  // 跳转页面(路由跳转完成之后再渲染)
  await router.push(req.url || "/");
  await router.isReady(); //等待(异步)路由加载完成,再渲染页面
  // 创建pinia
  const pinpa = createPinia();
  app.use(pinpa);
  // 注册路由
  let appStringHtml = await renderToString(app);
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
  <div id="app">    
    ${appStringHtml}
  </div>
  <script src="/client/client_bundle.js"></script>
  </body>
  </html>
  `);
});

server.listen(3000, () => {
  console.log("服务器启动成功");
});
