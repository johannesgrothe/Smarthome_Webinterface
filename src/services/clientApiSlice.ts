import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAPIAddress } from "../utils/getApiAdress";

export const clientSlice = createApi({
  reducerPath: "client",
  baseQuery: fetchBaseQuery({ baseUrl: getAPIAddress("") }),
  endpoints: (builder) => ({
    clientInfo: builder.query({
      query: (query_args) => ({
        url: `${query_args.path}`,
        method: "GET",
        headers: query_args.headers,
      }),
    }),
  }),
});

export const { useClientInfoQuery } = clientSlice;
