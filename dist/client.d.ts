import { Request } from "./request/Request";
import { Response } from "./response/Response";
declare class Client {
    private static encrypt_data;
    private static decrypt_data;
    private static checkURL;
    private static readConf;
    private static sharedConf;
    private static sharedHttpsAgent;
    private conf;
    private httpsAgent;
    constructor(configPath: string, sharedClient?: boolean);
    send<R>(req: Request<R>): Promise<Response<R>>;
}
export { Client };
