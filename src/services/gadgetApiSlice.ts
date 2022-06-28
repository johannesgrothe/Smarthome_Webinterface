import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAPIAddress } from "../utils/getApiAdress";

export const gadgetSlice = createApi({
  reducerPath: 'gadget',
  baseQuery: fetchBaseQuery({ baseUrl: getAPIAddress('') }),
  endpoints: ( builder ) => ({
    gadgetInfo: builder.query({
      query: (query_args) => ({
        url: `${query_args.path}`,
        method: 'GET',
        headers: query_args.headers
      })
    }),
  })
})

export const { useGadgetInfoQuery } = gadgetSlice