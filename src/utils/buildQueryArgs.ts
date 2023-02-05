import { Buffer } from "buffer";

interface LogInHeaders {
  Authorization: string;
}

interface QueryArgs {
  path: string;
  method?: string;
  headers: LogInHeaders;
}

export function BuildQueryArgs(path: string, method: string | undefined): QueryArgs {
  const auth: string =
    "Basic " +
    Buffer.from(
      "utf-8"
    ).toString("base64");

  return {
    path: path,
    method,
    headers: {
      Authorization: auth,
    },
  };
}
