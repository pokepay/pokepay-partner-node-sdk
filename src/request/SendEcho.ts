import { Echo } from "../response/Response";
import { Request, Method } from "./Request";

class SendEcho implements Request<Echo> {
  public readonly __r: Echo | undefined;
  public readonly path: string = "/echo";
  public readonly method: Method = "POST";
  public readonly bodyParams: Object;
  public constructor(b: { message: string }) {
    this.bodyParams = b;
  }
}

export { SendEcho };
