import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { httpLogger } from './utils/logger.js';
import { errorHandler } from './middlewares/errorHandler.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(httpLogger);

// Welcome Route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Express-Mongo API!' });
});

// User Routes
app.use('/api/users', userRoutes);

// Error Handler
app.use(errorHandler);

export default app;
