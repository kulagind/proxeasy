import { ClientRequest } from "http";
import { Request } from "http-proxy-middleware/dist/types";

export function proxyHeadersFactory(headers: string[]): (proxyReq: ClientRequest, req: Request) => void {
    return function (proxyReq: ClientRequest, req: Request): void {
        headers.forEach(header => {
            proxyReq.setHeader(header, req.header(header) ?? '');
        });
    }
}
