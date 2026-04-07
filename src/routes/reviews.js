import express from 'express';
import reviewsController from '../controllers/reviewsController.js';

const router = express.Router();

router.route("/")
.get(reviewsController.getReviews)
.post(reviewsController.postReviews)

router.route("/:id")
.put(reviewsController.putReviews)
.delete(reviewsController.deleteReviews)


export default router;