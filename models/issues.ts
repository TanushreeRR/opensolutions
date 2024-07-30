import mongoose from "mongoose";

const { Schema } = mongoose;

const IssueSchema = new Schema(
  {
    
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

export default mongoose.models.Issue || mongoose.model("Issue", IssueSchema);