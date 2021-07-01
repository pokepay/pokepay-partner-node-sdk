import { Client } from "./client";
import { VERSION } from "./version";
import { GetPing, SendEcho } from "./request/Request";

export * from "./client";
export * from "./version";
export * from "./request/Request";
export * from "./response/Response";

async function example(): Promise<void> {
  console.log(`Pokepay partner SDK ${VERSION} example.`);
  try {
    const configPath = process.argv[2];
    if (!configPath) {
      throw new Error(
        "Please specify config file path. ex) $ npm run dev -- config.ini"
      );
    }
    const client = new Client(configPath);
    {
      console.log("\n --- try ping\n\n");
      const req = new GetPing();
      const res = await client.send(req);
      console.log("response:", res);
      console.log("response.object:", res.object);
      console.log("response.object.pong:", res.object.pong);
    }
    {
      console.log("\n --- try echo\n\n");
      const req = new SendEcho({ message: "echo message? echo PLEASE!" });
      const res = await client.send(req);
      console.log("response:", res);
      console.log("response.object:", res.object);
      console.log("response.object.message:", res.object.message);
    }
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}

if (require.main === module) {
  example().then(() => {
    console.log("example finished!");
  });
}
