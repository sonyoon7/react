import mongoose from "mongoose";

const { Schema } = mongoose;

//title, body, tags, publishedDate 네가지 필드가 있는 스키마와 관련된 코드는  models폴더에서 작성
const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String],
  publishedDate: {
    type: Date,
    default: Date.now,
  },
});
