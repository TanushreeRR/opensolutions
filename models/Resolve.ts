import mongoose from "mongoose";

const { Schema } = mongoose;

const ResolveSchema = new Schema(
  {
    name: {
      type: String,
      unique: false,
      required: true,
    },
    contact: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Resolve || mongoose.model("Resolve", ResolveSchema);