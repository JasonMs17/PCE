import mongoose, { Schema, model, models } from 'mongoose';

interface IProject extends Document {
    nama: string;
    email: string;
    no_telp: string;
    universitas: string;
    fakultas: string;
    jurusan: string;
    twibbon?: {
        data: Buffer;
        contentType: string;
    };
}

const projectSchema = new Schema<IProject>({
    nama: { type: String, required: true },
    email: { type: String, required: true },
    no_telp: { type: String, required: true },
    universitas: { type: String, required: true },
    fakultas: { type: String, required: true },
    jurusan: { type: String, required: true },
    twibbon: { 
        data: Buffer,  
        contentType: String,
    },
});

const modelName = "Project";

let Project = models[modelName] as mongoose.Model<IProject>;

if (!Project) {
    Project = model<IProject>(modelName, projectSchema);
}

export default Project;