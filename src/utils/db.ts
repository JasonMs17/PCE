import mongoose, { Mongoose } from "mongoose";

const database_url = process.env.DATABASE_URL;
if (!database_url) {
  throw new Error("Missing environment for database url");
}
// console.log(`Database URL: ${database_url}\n`);

// console.log(`Build interface for cached`);

interface Cached {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
  timeout: NodeJS.Timeout | null;
}

// console.log(`Declare global for mongoose with data type cached`);
declare global {
  var mongoose: Cached;
}

// console.log(`Assign global mongoose to cached`);
let cached: Cached = global.mongoose;

if (!cached) {
  // console.log(`is cached? ${cached}`);

  cached = global.mongoose = { conn: null, promise: null, timeout: null };
  // console.log(`is cached value? ${cached}`);
}

const IDLE_TIMEOUT_MS = 60000;

async function connectWithRetry(retries = 5, delay = 5000): Promise<Mongoose> {
  if (!database_url) {
    throw new Error("Missing environment for database url");
  }
  const opts = {
    maxPoolSize: 100,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  };
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      return await mongoose.connect(database_url, opts);
    } catch (error) {
      if (attempt < retries - 1) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        throw error;
      }
    }
  }
  throw new Error("Failed to connect to the database after several retries.");
}

async function closeConnection() {
  if (cached.conn) {
    // console.log("Closing idle connection");
    try {
      await mongoose.disconnect();
    } catch (error) {
      // console.error("Error closing MongoDB connection:", error);
    } finally {
      cached.conn = null;
      cached.promise = null;
      cached.timeout = null;
    }
  }
}

function resetIdleTimeout() {
  if (cached.timeout) {
    clearTimeout(cached.timeout);
  }
  cached.timeout = setTimeout(closeConnection, IDLE_TIMEOUT_MS);
}

export async function connectToDatabase(): Promise<Mongoose> {
  // console.log("Connect to database start");

  if (cached.conn) {
    // console.log("Connection already established");
    return cached.conn;
  }

  if (!cached.promise) {
    // console.log("Promise for connection not established");

    cached.promise = connectWithRetry()
      .then((mongoose) => {
        // console.log("Promise for connection established");
        return mongoose;
      })
      .catch((error) => {
        // console.error("Error connecting to database:", error.message, error.stack);
        cached.promise = null;
        throw error;
      });
  }
  cached.conn = await cached.promise;
  resetIdleTimeout();
  // console.log(`value of cached connection after assigned by cached promise: ${cached.conn} - ${cached}`);

  return cached.conn;
}

process.on("SIGINT", async () => {
  // console.log("SIGINT received, closing MongoDB connection.");
  await closeConnection();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  // console.log("SIGTERM received, closing MongoDB connection.");
  await closeConnection();
  process.exit(0);
});

//no need
// export async function disconnectFromDatabase() {
//   if (cached.conn) {
//     try {
//       await mongoose.disconnect();
//       cached.conn = null;
//       cached.promise = null;
//     } catch (error) {
//       console.error("Error disconnecting from database:", error);
//     }
//   }
// }
