import { store } from "../store/store";

interface LogInHeaders {
  Authorization: string;
}

interface QueryArgs {
  path: string;
  method?: string;
  headers: LogInHeaders;
}

export function BuildQueryArgs(path: string): QueryArgs {
  let auth: string = 'Basic ' + Buffer.from(store.getState().auth.username + ':' + store.getState().auth.password, 'utf-8').toString('base64')

  return {
    path: path,
    headers: {
      Authorization: auth
    },
  };
}