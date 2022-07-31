import express from 'express';
import cors from 'cors';
import ratingController from "./rating/ratingController";

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/hello', (req, res) => {
  res.json('Hello World!');
});

router.get('/ratings', ratingController.get);

export default router;
