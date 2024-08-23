import express from 'express';
import pkg from 'body-parser';
import cors from 'cors';
import { connect } from './config/db.js';
import videoRoutes from './routes/videos.js';

const { json } = pkg;

const app = express();

app.use(cors());
app.use(json());

connect();


app.use('/api/videos', videoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
