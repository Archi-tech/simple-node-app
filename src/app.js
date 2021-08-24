import healthCheckRouter from "./blueprint/healthCheck.js";
import postRouter from "./blueprint/post.js";
import Koa from "koa";

const app = new Koa();

app.use(postRouter.routes());
app.use(healthCheckRouter.routes());
app.listen(8090);
