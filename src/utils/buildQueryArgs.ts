import { store } from "../store/store";
import { Buffer } from "buffer";

interface LogInHeaders {
  Authorization: string;
}

interface QueryArgs {
  method?: string;
  headers: LogInHeaders;
  body?: string;
}

export function BuildQueryArgs(body?: string | undefined): QueryArgs {
  const auth: string =
    "Basic " +
    Buffer.from(
      store.getState().auth.username + ":" + store.getState().auth.password,
      "utf-8"
    ).toString("base64");

  return body
    ? {
        headers: {
          Authorization: auth,
        },
      }
    : {
        headers: {
          Authorization: auth,
        },
        body: body,
      };
}
