  
import { Project } from "./models/Project.model";

export const resolvers = {
  Query: {
    projects: () => Project.find()
  },
  Mutation: {
    createProject: async (_, { slug, title, mockup, description, tools }) => {
      const project = new Project({ slug, title, mockup, description, tools });
      await project.save();
      console.log(project)
      return project;
    }
  }
};