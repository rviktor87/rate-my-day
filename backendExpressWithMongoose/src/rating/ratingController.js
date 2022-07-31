import {ratingService} from "./ratingService";

export default {
  async get(req, res, next) {
    try {
      const ratings = await ratingService.getAll();
      res.status(200).json({ ratings });
    } catch (error) {
      next(error);
    }
  },
};
