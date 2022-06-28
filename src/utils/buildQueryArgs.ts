import { store } from "../store/store";
import { Buffer } from "buffer";

interface LogInHeaders {
  Authorization: string;
}

interface QueryArgs {
  path: string;
  method?: string;
  headers: LogInHeaders;
}

export function BuildQueryArgs(path: string): QueryArgs {

  let auth: string = 'Basic ' + Buffer.from('as:as', 'utf-8').toString('base64')
  // TODO: after adding login use this instead of current
  // auth = 'Basic ' + Buffer.from(store.getState().auth.username + ':' + store.getState().auth.password, 'utf-8').toString('base64')

  return {
    path: path,
    headers: {
      Authorization: auth
    },
  };
}