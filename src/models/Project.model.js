import mongoose from "mongoose";

export const Project = mongoose.model("Project", {  slug: String, title: String, mockup: String, description: String, tools: String  });