import mongoose from "mongoose";

const { Schema, SchemaTypes, model } = mongoose;

interface IClassProgram extends Document {
  name: string;
  email: string;
  whatsappNumber: string;
  university: string;
  faculty: string;
  major: string;
  sectorCategory: string;
}

const classProgramSchema = new Schema({
  name: {
    type: String,
    minLength: 1,
    required: true,
  },
  email: {
    type: String,
    minLength: 6,
    required: true,
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
  sectorCategory: [
    {
      type: SchemaTypes.ObjectId,
      ref: "SectorCategory",
      required: true,
    },
  ],
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: Date,
});

const modelName = "ClassProgram";

let ClassProgram = mongoose.models[modelName] as mongoose.Model<IClassProgram>;

if (!ClassProgram) {
  ClassProgram = mongoose.model<IClassProgram>(modelName, classProgramSchema);
}

export default ClassProgram;
