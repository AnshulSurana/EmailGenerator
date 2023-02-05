import express from 'express';
import cors from 'cors';
import config from '../config/default.js';

import log from './logger/index.js';
import routes from './routes.js';

const port = config["port"] as number;
const host = config["host"] as string;

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
  log.info(`Server listing at http://${host}:${port}`);
  routes(app);
});

export default app;
