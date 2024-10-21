import mongoose, { Schema, Document } from "mongoose";

export interface IArticle extends Document {
  title: string;
  body: string;
  thumbnail: string;
  author: string;
  isPublished: boolean,
  published_date: Date;
  createdAt: Date;
  updatedAt: Date;
}

const articleSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  thumbnail: { type: String, required: true },
  author: { type: String, required: true },
  published_date: { type: Date, default: Date.now },
  isPublished: { type: Boolean, default: false },
}, { timestamps: true }); 

const modelName = "Article";

let Article = mongoose.models[modelName] as mongoose.Model<IArticle>;

if (!Article) {
  Article = mongoose.model<IArticle>(modelName, articleSchema);
}
export default Article;
