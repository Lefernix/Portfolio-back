import mongoose from "mongoose";

export const Project = mongoose.model("Project", {  slug: String, title: String, mockup: String, description: String, toolsFront: String, toolsBack: String, architecture: String, url: String  });