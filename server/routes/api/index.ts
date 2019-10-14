import * as express from 'express';
import eventRoutes from './events';
import jobRoutes from './jobs';
import twilioRoutes from './twilio';
import userRoutes from './users';
import offerRoutes from './offers';
import postback from './postback';
import clicks from './clicks';

const router = express.Router();

router.use('/events', eventRoutes);
router.use('/jobs', jobRoutes);
router.use('/twilio', twilioRoutes);
router.use('/user', userRoutes);
router.use('/offers', offerRoutes);
router.use('/postback', postback);
router.use('/click', clicks);

export default router;