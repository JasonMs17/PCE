import mongoose from "mongoose";

const { Schema, SchemaTypes, model } = mongoose;

const mentorSchema = new Schema({
  name: {
    type: String,
    minLength: 1,
    required: true,
  },
  email: {
    type: String,
    minLength: 4,
  },
  quota: {
    type: Number,
    default: 15,
  },
  bookedSlots: {
    type: Number,
    default: 0,
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

const Mentor = mongoose.models.Mentor || model("Mentor", mentorSchema);
export default Mentor;
