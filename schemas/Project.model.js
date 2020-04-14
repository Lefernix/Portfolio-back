const mongoose = require('mongoose');
const ExpressGraphQL = require("express-graphql")
const {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLNonNull
} = require("graphql")

const projectSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  slug: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  mockup: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  //see more
  image: {
    type: String,
    required: true,
  },
  tools: {
    type: Array,
    required: true,
  },
},
{ timestamps: true });

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;