// models/videoModel.js
import { query } from '../config/db.js';

const getVideos = async () => {
  const result = await query('SELECT * FROM videos ORDER BY sequence ASC');
  return result.rows;
};

const getVideoById = async (id) => {
  const result = await query('SELECT * FROM videos WHERE id = $1', [id]);
  return result.rows[0];
};

const saveProgress = async (userId, videoId, progress) => {
  const result = await query(
    'INSERT INTO progress (user_id, video_id, progress) VALUES ($1, $2, $3) ON CONFLICT (user_id, video_id) DO UPDATE SET progress = $3',
    [userId, videoId, progress]
  );
  return result.rows[0];
};

const getProgressByVideoId = async (videoId) => {
  try {
    console.log("ABCD")
    const result=await query(
      'SELECT * FROM progress WHERE video_id= $1',[videoId]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error('Error fetching progress');
  }
};



// Export all functions properly
export { getVideos, getVideoById, saveProgress, getProgressByVideoId};
