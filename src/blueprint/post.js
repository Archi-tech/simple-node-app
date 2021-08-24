import Router from "koa-router";
import { getPost } from "../api/post.js";

const router = new Router();

router.get("/post/:pid", async (ctx, next) => {
    const pid = ctx.params.pid;
    const post = await getPost(pid);
    ctx.body = post;
});

export default router;
