import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAPIAddress } from "../utils/getApiAdress";
import ApiConstants from "../system/api_definitions";

export const bridgeSlice = createApi({
  reducerPath: "bridge",
  baseQuery: fetchBaseQuery({ baseUrl: getAPIAddress("") }),
  endpoints: (builder) => ({
    bridgeInfo: builder.query({
      query: (query_args) => ({
        url: ApiConstants.uri_info_bridge,
        method: "GET",
        headers: query_args.headers,
      }),
    }),
    bridgeUpdateCheck: builder.query({
      query: (query_args) => ({
        url: ApiConstants.uri_bridge_update_check,
        method: "GET",
        headers: query_args.headers,
      }),
    }),
    bridgeUpdateExecute: builder.query({
      query: (query_args) => ({
        url: ApiConstants.uri_bridge_update_execute,
        method: "POST",
        headers: query_args.headers,
        body: query_args.body,
      }),
    }),
  }),
});

export const {
  useBridgeInfoQuery,
  useBridgeUpdateCheckQuery,
  useBridgeUpdateExecuteQuery,
} = bridgeSlice;
