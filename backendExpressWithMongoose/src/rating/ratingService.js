import Rating from './ratingModel';

export const ratingService = {
  async getAll() {
    return Rating.find({});
  },
};
