import morgan from 'morgan';

export const logger = {
  info: console.log,
  error: console.error,
};

export const httpLogger = morgan('combined');
