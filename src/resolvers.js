  
import { Project } from "./models/Project.model";

export const resolvers = {
  Query: {
    projects: () => Project.find()
  },
  Mutation: {
    createProject: async (_, { slug, title, mockup, description, toolsFront, toolsBack, architecture, url }) => {
      const project = new Project({ slug, title, mockup, description, toolsFront, toolsBack, architecture, url });
      await project.save();
      return project;
    }
  }
};