import mongoose from "mongoose";

const { Schema, SchemaTypes, model } = mongoose;

const mentoringSchema = new Schema({
  name: {
    type: String,
    minLength: 1,
    required: true,
  },
  email: {
    type: String,
    minLength: 4,
    required: true,
  },
  whatsappNumber: {
    type: String,
    minLength: 4,
    required: true,
  },
  schedule: {
    type: Date,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  faculty: {
    type: String,
    required: true,
  },
  major: {
    type: String,
    required: true,
  },
  mentor: {
    type: SchemaTypes.ObjectId,
    ref: "Mentor",
    required: true,
  },
});

const Mentoring = mongoose.models.Mentoring || model("Mentoring", mentoringSchema);
export default Mentoring;
