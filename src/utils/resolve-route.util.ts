import { Request } from 'http-proxy-middleware/dist/types';
import { ConfigInterface } from '../models/config.interface';

export function resolveRouteFactory({ destination }: ConfigInterface): (req: Request) => string {
  return function (req: Request): string {
    return destination;
  }
}
