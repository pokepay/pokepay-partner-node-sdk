import { Pong } from "../response/Response";
import { Request, Method } from "./Request";

class GetPing implements Request<Pong> {
  readonly __r: Pong | undefined;
  readonly path: string = "/ping";
  readonly method: Method = "GET";
  readonly bodyParams: Object;
  public constructor() {
    this.bodyParams = {};
  }
}

export { GetPing };
