import mongoose, { Mongoose } from "mongoose";
import 'dotenv/config';

const database_url = process.env.DATABASE_URL;

if (!database_url) {
  throw new Error("Missing environment for database url");
}

interface Cached {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  var mongoose: Cached;
}

let cached: Cached = global.mongoose || { conn: null, promise: null };

export async function connectToDatabase(): Promise<Mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!database_url) {
    throw new Error("Missing environment for database url");
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(database_url)
      .then((mongoose) => mongoose)
      .catch((error) => {
        cached.promise = null;
        throw error;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export async function disconnectFromDatabase(): Promise<void> {
  if (cached.conn) {
    try {
      await mongoose.disconnect();
      cached.conn = null;
      cached.promise = null;
    } catch (error) {
      console.error("Error disconnecting from database:", error);
    }
  }
}
