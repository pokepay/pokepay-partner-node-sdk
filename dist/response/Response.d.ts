import { AxiosResponse } from "axios";
declare class Response<T> {
    body: Object;
    object: T;
    code: number;
    header: {
        [key: string]: string;
    };
    message: Object;
    constructor(res: AxiosResponse<any>, obj: T);
}
export { Response };
export * from "./Echo";
