const mongoose = require("mongoose");

const applyJobSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  job_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "jobs",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  media_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "medias",
  },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "accepted", "rejected"],
  },
});

module.exports = mongoose.model("applies_jobs", applyJobSchema);
