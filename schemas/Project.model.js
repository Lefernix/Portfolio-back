const mongoose = require('mongoose');


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
  template: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  //see more
  tools: {
    type: Array,
    required: true,
  },
},
{ timestamps: true });

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;