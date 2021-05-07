import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
  name: String,
  type: String,
  certification: String,
  quantity: Number,
  imgUrl: String
});

export default mongoose.model('supplyCards',cardSchema);