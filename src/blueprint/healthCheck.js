import Router from "koa-router";
const router = new Router();

router.get("/health_check", (ctx, next) => {
    ctx.body = "OK";
});

export default router;
