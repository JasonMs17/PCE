import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string;
}

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const modelName = "User";

let User = mongoose.models[modelName] as mongoose.Model<IUser>;

if (!User) {
  User = mongoose.model<IUser>(modelName, userSchema);
}
export default User;

