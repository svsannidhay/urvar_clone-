import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
  name: String,
  type: String,
  location: String,
  quantity: Number,
  imgUrl: String
});

export default mongoose.model('demandCards',cardSchema);