import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAPIAddress } from "../hooks/ApiRequests";

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
