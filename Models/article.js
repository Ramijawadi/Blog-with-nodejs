const mongoose = require("mongoose");
const slug = require("slugify");
const marked = require("marked");
const { default: slugify } = require("slugify");

const acticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  descrption: {
    type: String,
  },
  markdown: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
});

acticleSchema.pre("validate", function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

module.exports = mongoose.model("Article", acticleSchema);
