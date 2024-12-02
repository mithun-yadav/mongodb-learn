import dotenv from 'dotenv';
import app from './app.js';
import { connectDB } from './config/db.js';
import { logger } from './utils/logger.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});
