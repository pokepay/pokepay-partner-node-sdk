import { AxiosResponse } from "axios";

class Response<T> {
  public body: Object;
  public object: T;
  public code: number;
  public header: { [key: string]: string };
  public message: Object;

  public constructor(res: AxiosResponse<any>, obj: T) {
    this.body = res.data;
    this.object = obj;
    this.code = res.status;
    this.header = res.headers;
    this.message = res.data;
  }
}

export { Response };
export * from "./Echo";
export * from "./Pong";
