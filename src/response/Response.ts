import { AxiosResponse } from "axios";

class Response<T> {
  public readonly body: Object;
  public readonly object: T;
  public readonly code: number;
  public readonly header: { [key: string]: string };
  public readonly message: Object;

  public constructor(res: AxiosResponse<any>, obj: T) {
    this.body = res.data;
    this.object = obj;
    this.code = res.status;
    this.header = res.headers;
    this.message = res.data;
  }
}

export { Response };
