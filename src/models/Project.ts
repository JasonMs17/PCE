import mongoose, { Schema, SchemaTypes,model, models, Document } from "mongoose";

interface IProject extends Document {
  namaTim:string; //new
  namaKetua: string;
  nama1: string; //new
  nama2: string; //new
  email: string;
  no_telp: string;
  universitas: string;
  fakultas: string;
  jurusan: string;
  sectorCategory: string; //new
  twibbonUrl: string;
  pembayaranUrl: string; //new 
  isConfirmed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const projectSchema = new Schema<IProject>({
  namaTim: { type: String, required: true },
  namaKetua: { type: String, required: true },
  nama1: { type: String, required: true },
  nama2: { type: String},
  email: { type: String, required: true },
  no_telp: { type: String, required: true },
  universitas: { type: String, required: true },
  fakultas: { type: String, required: true },
  jurusan: { type: String, required: true },
  sectorCategory: {type: String, required: true},
  twibbonUrl: { type: String, required: true},
  pembayaranUrl: { type: String, required: true },
  isConfirmed: { type: Boolean,required: true},
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: Date,
});

const modelName = "Project";

let Project = models[modelName] as mongoose.Model<IProject>;

if (!Project) {
  Project = model<IProject>(modelName, projectSchema);
}

export default Project;
