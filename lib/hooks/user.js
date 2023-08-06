import logger from "@root/setup/logger";
import sha512 from "@root/utils/sha512";
const log = logger('hooks/user');
export function hook_addAndUpdateUser(options) {
    if (options.args.data?.password) {
        options.args.data.password = sha512(options.args.data.password);
    }
    return options;
}
function normalizeUser(user = {}) {
    return {
        ...user,
        password: undefined,
    };
}
export function hook_queryUser(options) {
    if (options.schemaOptions.isLocal) {
        // ignore if current execution is from local schema
        return options;
    }
    options.results = Array.isArray(options.results)
        ? options.results.map(normalizeUser)
        : normalizeUser(options.results);
    return options;
}