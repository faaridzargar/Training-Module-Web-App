import { Router } from 'express';
import {getAllVideos, getVideo, updateProgress,getProgress } from '../controllers/videoController.js';

const router = Router();


router.get('/', getAllVideos);
router.get('/:id', getVideo);
router.post('/progress', updateProgress);
router.get('/progress/video/:id', getProgress);

export default router;