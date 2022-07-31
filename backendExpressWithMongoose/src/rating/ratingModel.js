import {model, Schema} from 'mongoose';

const RatingSchema = new Schema({
  name: String
});

export default model('Rating', RatingSchema);
