import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    const mongoUrl: string = process.env.MONGO_URL ?? 'mongodb://localhost:27017/defaultdb';

await mongoose.connect(mongoUrl);

    console.log("Mongo Connection successfully established.");
  } catch (error) {
    throw new Error("Error connecting to Mongoose");
  }
};

export default connect;