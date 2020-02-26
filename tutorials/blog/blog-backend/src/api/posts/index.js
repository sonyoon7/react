import Router from "koa-router";
const posts = new Router();
import * as postsCtrl from "./posts.ctrl";

// const printInfo = ctx => {
//   ctx.body = {
//     method: ctx.method,
//     path: ctx.path,
//     params: ctx.params,
//     query: ctx.query,
//   };
// };

// posts.get("/", printInfo);
// posts.post("/", printInfo);
// posts.get("/:id", printInfo);
// posts.delete("/:id", printInfo);
// posts.put("/:id", printInfo);
// posts.patch("/:id", printInfo);

posts.get("/", postsCtrl.list);
posts.post("/", postsCtrl.write);

const post = new Router(); // /api/posts/:id
post.get("/", postsCtrl.read);
post.delete("/", postsCtrl.remove);
// posts.put("/:id", postsCtrl.replace);
post.patch("/", postsCtrl.update);

posts.use("/:id", postsCtrl.checkObjectId, post.routes());

export default posts;
