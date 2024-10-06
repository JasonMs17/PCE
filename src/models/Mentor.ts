import mongoose, { Schema, SchemaTypes } from "mongoose";

interface IMentor extends Document {
  name: string;
  email: string;
  quota: number;
  sectorCategory: Schema.Types.ObjectId;
  linkedin: string;
  createdAt: Date;
  updatedAt: Date;
}

const mentorSchema = new Schema({
  name: {
    type: String,
    minLength: 1,
    required: true,
  },
  email: {
    type: String,
    minLength: 4,
    unique: true,
  },
  quota: {
    type: Number,
    default: 15,
  },
  sectorCategory: {
    type: SchemaTypes.ObjectId,
    ref: "SectorCategory",
    required: true,
  },
  linkedin: {
    type: String,
    minLength: 1,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: Date,
});

const modelName = "Mentor";

let Mentor = mongoose.models[modelName] as mongoose.Model<IMentor>;

if (!Mentor) {
  Mentor = mongoose.model<IMentor>(modelName, mentorSchema);
}
export default Mentor;
