import mongoose, { Schema } from "mongoose";

const photoSchema = new Schema({
  imageURL: { type: String, maxlength: 150},
  public_id: { type: String, maxlength: 150},
});

const Photo = mongoose.model("photo", photoSchema);
export default Photo;
