import mongoose, { Schema, SchemaTypes, model, mongo } from "mongoose";

interface IMentoring extends Document {
  name: string;
  email: string;
  whatsappNumber: string;
  university: string;
  faculty: string;
  major: string;
  curriculumVitae: string;
  mentor: Schema.Types.ObjectId;
  sectorCategory: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

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
    unique: true,
  },
  whatsappNumber: {
    type: String,
    minLength: 4,
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
  cv: {
    type: String,
    required: true
  },
  mentor: {
    type: SchemaTypes.ObjectId,
    ref: "Mentor",
    required: true,
  },
  sectorCategory: {
    type: SchemaTypes.ObjectId,
    ref: "SectorCategory",
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: Date,
});

const modelName = "Mentoring";
let Mentoring = mongoose.models[modelName] as mongoose.Model<IMentoring>;

if (!Mentoring) {
  Mentoring = mongoose.model<IMentoring>(modelName, mentoringSchema);
}
export default Mentoring;
