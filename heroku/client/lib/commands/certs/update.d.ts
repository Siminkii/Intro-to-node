import { Command } from '@heroku-cli/command';
export default class Update extends Command {
    static topic: string;
    static description: string;
    static flags: {
        confirm: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser").CustomOptions>;
        name: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser").CustomOptions>;
        endpoint: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser").CustomOptions>;
        app: import("@oclif/core/lib/interfaces").OptionFlag<string, import("@oclif/core/lib/interfaces/parser").CustomOptions>;
        remote: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser").CustomOptions>;
    };
    static args: {
        CRT: import("@oclif/core/lib/interfaces/parser").Arg<string, Record<string, unknown>>;
        KEY: import("@oclif/core/lib/interfaces/parser").Arg<string, Record<string, unknown>>;
    };
    static examples: string[];
    run(): Promise<void>;
}
