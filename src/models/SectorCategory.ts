import mongoose from "mongoose";

const { Schema, model } = mongoose;

const sectorCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
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
