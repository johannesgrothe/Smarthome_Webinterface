import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAPIAddress } from "../utils/getApiAdress";


export const bridgeSlice = createApi({
  reducerPath: 'bridge',
  baseQuery: fetchBaseQuery({baseUrl: getAPIAddress('')}),
  endpoints: (builder) => ({
    bridgeInfo: builder.query({
      query: (query_args) => ({
        url: `${query_args.path}`,
        method: 'GET',
        headers: query_args.headers
      })
    }),
  })
})

export const { useBridgeInfoQuery } = bridgeSlice