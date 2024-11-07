// const mongoose = require('mongoose');

// const linkSchema = new mongoose.Schema({
//   linkId: {
//     type: Number,
//     unique: true,
//     required: true,
//   },
//   url: {
//     type: String,
//     required: true,
//   },
//   requiresVpn: {
//     type: Boolean,
//     default: false,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   // Add any additional fields you need
// });

// const Link = mongoose.model('Link', linkSchema);

// module.exports = Link;




// const mongoose = require('mongoose');

// const linkSchema = new mongoose.Schema({
//   linkId: {
//     type: Number,
//     unique: true,
//     required: true,
//   },
//   url: {
//     type: String,
//     required: true,
//   },
//   requiresVpn: {
//     type: Boolean,
//     default: false,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// linkSchema.pre('save', async function (next) {
//   if (this.isNew) {
//     const lastLink = await mongoose
//       .model('Link')
//       .findOne({}, {}, { sort: { linkId: -1 } });
//     this.linkId = lastLink ? lastLink.linkId + 1 : 1000;
//   }
//   next();
// });

// const Link = mongoose.model('Link', linkSchema);

// module.exports = Link;


// const mongoose = require('mongoose');
// const autoIncrement = require('mongoose-sequence')(mongoose);

// const linkSchema = new mongoose.Schema({
//   linkId: { type: Number, unique: true },
//   url: { type: String, required: true },
//   requiresVpn: { type: Boolean, default: false },
//   createdAt: { type: Date, default: Date.now },
// });

// // Add auto-increment plugin to generate linkId
// linkSchema.plugin(autoIncrement, { inc_field: 'linkId', start_seq: 1000 });

// module.exports = mongoose.model('Link', linkSchema);



const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);

const linkSchema = new mongoose.Schema({
  linkId: { type: Number, unique: true },
  url: { type: String, required: true },
  requiresVpn: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

linkSchema.plugin(autoIncrement, { inc_field: 'linkId', start_seq: 1000 });

module.exports = mongoose.model('Link', linkSchema);