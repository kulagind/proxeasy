import { EXPECTED_ARGS } from "../constants/expected-args";
import { ArgsInterface } from "../models/args.interface";

export function parseArgs(): ArgsInterface {
    const args = process.argv.slice(2);
    return args.reduce((acc, arg) => {
        const [key, ...rest] = arg.split('=');
        const value = rest.join('=');
        return EXPECTED_ARGS.includes(key)
            ? { ...acc, [key]: +value || value }
            : acc;
    }, {}) as ArgsInterface;
}
