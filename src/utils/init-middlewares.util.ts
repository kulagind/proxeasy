import { Application } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { proxyHeadersFactory } from './proxy-headers.util';
import { resolveRouteFactory } from './resolve-route.util';
import { ConfigInterface } from '../models/config.interface';
import cors from 'cors';

export async function initMiddlewares(app: Application, config: ConfigInterface) {
  app.use(cors({
    origin: config.origins ?? [],
    optionsSuccessStatus: 200,
  }));

  app.use(config.api || '/', createProxyMiddleware({
    router: resolveRouteFactory(config),
    changeOrigin: true,
    ws: true,
    onProxyReq: proxyHeadersFactory(config.proxiedHeaders),
  }));
}
