export interface ConfigInterface {
  port: number;
  api?: string;
  destination: string;
  proxiedHeaders: string[];
  origins: string[];
}
