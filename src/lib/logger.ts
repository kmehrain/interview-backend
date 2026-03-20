import { createLogger, format, transports } from 'winston';

const isProduction = process.env.NODE_ENV === 'production';

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: isProduction
    ? format.combine(
        format.timestamp(),
        format.errors({ stack: true }),
        format.json()
      )
    : format.combine(
        format.colorize(),
        format.timestamp(),
        format.errors({ stack: true }),
        format.printf(({ level, message, timestamp, stack }) => {
          return `${timestamp} [${level}] ${stack || message}`;
        })
      ),
  transports: [new transports.Console()],
});

export default logger;