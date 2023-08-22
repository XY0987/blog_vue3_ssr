import { createApp } from "vue";
import App from "../App.vue";

import createRouter from "../router";
import { createWebHashHistory } from "vue-router";
import { createPinia } from "pinia";

let app = createApp(App);

let router = createRouter(createWebHashHistory());
app.use(router);

let pinia = createPinia();
app.use(pinia);

router.isReady().then(() => {
  //等待路由加载完成之后再挂载
  app.mount("#app");
});
