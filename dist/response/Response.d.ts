import { AxiosResponse } from "axios";
declare class Response<T> {
    readonly body: Object;
    readonly object: T;
    readonly code: number;
    readonly header: {
        [key: string]: string;
    };
    readonly message: Object;
    constructor(res: AxiosResponse<any>, obj: T);
}
export { Response };
