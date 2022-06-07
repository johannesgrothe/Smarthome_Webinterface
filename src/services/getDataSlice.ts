import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAPIAddress } from "../hooks/ApiRequests";

// let username: string = "bongobob"
// let pwd: string = "spongobob"
// let str: string = 'Basic ' + Buffer.from(username + ':' + pwd, 'utf-8').toString('base64')

// let headers = {
//   Authorization: str
// }

export interface LogInHeaders {
  Authorization: string;
}

export interface LogInRequestArgs {
  path: string;
  headers: LogInHeaders
}



export const getDataSlice = createApi({
  reducerPath: 'getData',
  baseQuery: fetchBaseQuery({
    baseUrl: getAPIAddress('')
  },),
  endpoints: builder => ({
    getData: builder.query({
      query: ( query_args ) => ({
        url: `${query_args.path}`,
        method: 'GET',
        headers: query_args.headers
      })
    }),
    logIn: builder.query({
      query: ( query_args ) => ({
        url: `${query_args.path}`,
        method: 'GET',
        headers: query_args.headers
      })
    }),
  })

})

export const {
  useGetDataQuery,
  useLogInQuery,
} = getDataSlice
