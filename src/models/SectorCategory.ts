import mongoose from "mongoose";

const { Schema, model } = mongoose;

const sectorCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quota: {
    type: Number,
    required: true,
    default: 10,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: Date,
});

const SectorCategory = mongoose.models.SectorCategory || model("SectorCategory", sectorCategorySchema);
export default SectorCategory;
