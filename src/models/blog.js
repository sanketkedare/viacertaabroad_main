import mongoose from "mongoose";

const bulletPointSchema = new mongoose.Schema({
  title: { type: String, required: true },
  info: { type: String, required: true },
}, { _id: false });

const subtopicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  intro: { type: String },
  info: { type: String },
  bulletpoints: [bulletPointSchema],
  ending: { type: String },
}, { _id: false });

const tableSchema = new mongoose.Schema({
  headings: [{ type: String }],
  fields: [{ type: String }],
}, { _id: false });

const authorSchema = new mongoose.Schema({
  name: { type: String },
  image: { type: String },
}, { _id: false });

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  intro: { type: String },
  subtopics: [subtopicSchema],
  country: { type: String },
  date: { type: String },
  thumbnail: { type: String },
  meta: { type: String },
  table: tableSchema,
  author: authorSchema,
  image: { type: String, required: true },
}, {
  timestamps: true,
});

const Blog = mongoose.models.blogs || mongoose.model("blogs", blogSchema);

export default Blog;
