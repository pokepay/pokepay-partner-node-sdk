import { Echo } from "../response/Response";
import { Request, Method } from "./Request";

class SendEcho implements Request<Echo> {
  readonly __r: Echo | undefined;
  readonly path: string = "/echo";
  readonly method: Method = "POST";
  readonly bodyParams: Object;
  public constructor(b: { message: string }) {
    this.bodyParams = b;
  }
}

export { SendEcho };
