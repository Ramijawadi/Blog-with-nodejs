const mongoose = require("mongoose");
const slug = require("slugify");
const marked = require("marked");
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')


const dompurify = createDomPurify(new JSDOM().window)

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

sanitizeHtml : {
    type: String ,
    required : true
}

});

acticleSchema.pre("validate", function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }

  if(this.markdown) {

    this.sanitizeHtml = dompurify.sanitize(marked(this.markdown))
  }
  next();
});

module.exports = mongoose.model("Article", acticleSchema);
