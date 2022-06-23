import express, { Application } from 'express';
import { parseArgs } from './utils/parse-args.util';
import { initMiddlewares } from './utils/init-middlewares.util';
import * as path from 'path';
import { ConfigModel } from './models/config.model';

process.env.PROJECT_PATH = path.resolve(__dirname);

const args = parseArgs();
const config = ConfigModel.getInstance(args.config);

async function start(): Promise<void> {
  try {
    const app: Application = express();
    const port = process.env.PORT ?? config.value.port ?? 80;

    await initMiddlewares(app, config.value);

    app.listen(port);
  } catch (e) {
    console.log(e);
  }
}

start();
