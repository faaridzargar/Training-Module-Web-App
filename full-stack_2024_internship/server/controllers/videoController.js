import {getProgressByVideoId, getVideos, getVideoById, saveProgress } from '../models/videoModel.js';

const getAllVideos = async (req, res) => {
  console.log('GET /api/videos request received');
  try {
    const videos = await getVideos();
    // console.log('Videos retrieved:', videos);
    res.json(videos);
  } catch (err) {
    console.error('Error fetching videos:', err.message);
    res.status(500).json({ error: err.message });
  }
};

const getVideo = async (req, res) => {
  try {
    const video = await getVideoById(req.params.id);
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const updateProgress = async (req, res) => {
  try {
    const { userId, videoId, progress } = req.body;
    await saveProgress(userId, videoId, progress);
    res.status(200).json({ message: 'Progress saved' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProgress = async (req, res) => {
  try {
    console.log("Received request for progress");
    const { id: videoId } = req.params; // Access URL parameter 'id'

    if (!videoId) {
      console.log("No video ID provided");
      return res.status(400).json({ error: 'Video ID is required' });
    }

    const progress = await getProgressByVideoId(videoId);
    console.log("Progress fetched successfully");
    res.json({ progress });
  } catch (err) {
    console.error('Error in getProgress:', err);
    res.status(500).json({ error: err.message });
  }
};


// Export all functions properly
export { getAllVideos, getVideo, updateProgress,getProgress};
