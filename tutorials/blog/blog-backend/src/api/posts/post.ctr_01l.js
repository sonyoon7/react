import Post from "../../models/post";
import mongoose from "mongoose";
import Joi from "joi";

const { ObjectId } = mongoose.Types;

export const write = async ctx => {
  const { title, body, tags } = ctx.request.body;
  const post = new Post({
    title,
    body,
    tags,
  });

  try {
    await post.save();
    ctx.body = post; // response
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const list = async ctx => {
  try {
    const posts = await Post.find().exec();
    ctx.body = posts;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const read = async ctx => {
  const { id } = ctx.params;
  //   console.log(id);
  try {
    const post = await Post.findById(id).exec();
    // console.log(post);
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const remove = async ctx => {
  const { id } = ctx.params;
  //   console.log(id);
  try {
    const post = await Post.findByIdAndRemove(id).exec();
    // console.log(post);
    ctx.status = 204; //성공 후 응답은 없음
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const update = async ctx => {
  const { id } = ctx.params;
  //   console.log(id);
  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true, //이값을 설정하면 업데이트되 데이터를 반환
      //false 일 때는 업데이트 되기 전의 데이터를 반환
    }).exec();
    // console.log(post);
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (error) {
    ctx.throw(500, error);
  }
};

//ObjectId 검증
//  잘못 된 Id를 요청 했다면 클라이언트가 요청을 잘못 보낸 것이니 400 Bad Request오류를 띄워야 함

export const checkObjectId = (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }
  return next();
};
