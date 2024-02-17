import mongoose from "mongoose";

// schema

let modelSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
  },
});

let model: any;

try {
  model = mongoose.model("chats");
} catch (error) {
  model = mongoose.model("chats", modelSchema);
}

export { model };