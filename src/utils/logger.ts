import logger from 'pino';
import dayjs from 'dayjs';

const log = logger({
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        timestampKey: 'time',
      }  
    }

  })



export default log;