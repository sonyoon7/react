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
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
});

//model 함수는  두개의 인자 값이 필요 스키마이름, 스키마 객체
const Post = mongoose.model("Post", PostSchema);
export default Post;
