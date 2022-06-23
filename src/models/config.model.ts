import * as fs from 'fs';
import * as path from 'path';
import { ConfigInterface } from './config.interface';

export class ConfigModel {

    private static instance: ConfigModel;

    private _value!: ConfigInterface;

    private constructor(config: string) {
        this.read(path.join(process.env.PROJECT_PATH ?? __dirname, config));
    }

    static getInstance(config?: string): ConfigModel {
        if (!ConfigModel.instance) {
            ConfigModel.instance = new ConfigModel(config || 'config.json');
        }
        return ConfigModel.instance;
    }

    read(path: string): ConfigModel {
        try {
            const rawConfig = fs.readFileSync(path, {encoding: 'utf8'});
            this._value = this.parseConfig(rawConfig);
        } catch (e) {
            throw new Error(
              'You should put config into app directory and provide config path as argument --config=<name>'
            );
        }
        return this;
    }

    private parseConfig(buffer: string): ConfigInterface {
        return JSON.parse(buffer);
    }

    get value(): ConfigInterface {
        return this._value;
    }
}
