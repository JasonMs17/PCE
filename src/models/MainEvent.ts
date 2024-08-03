import mongoose, { Schema, model, models } from 'mongoose';

interface IMainEvent extends Document {
    nama: string;
    email: string;
    universitas: string;
    fakultas: string;
}

const mainEventSchema = new Schema<IMainEvent>({
    nama: { type: String, required: true },
    email: { type: String, required: true },
    universitas: { type: String, required: true },
    fakultas: { type: String, required: true },
});

const modelName = "MainEvent";

let mainEvent = models[modelName] as mongoose.Model<IMainEvent>;

if (!mainEvent) {
    mainEvent = model<IMainEvent>(modelName, mainEventSchema);
}

export default mainEvent;