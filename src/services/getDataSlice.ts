import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import ApiRequests, {getAPIAddress} from "../hooks/ApiRequests";

let username: string = "bongobob"
let pwd: string = "spongobob"
let str: string = 'Basic ' + Buffer.from(username + ':' + pwd, 'utf-8').toString('base64')

let headers = {
  Authorization: str
}

export const getDataSlice = createApi({
  reducerPath: 'getData',
  baseQuery: fetchBaseQuery({
    baseUrl: getAPIAddress('')
  },),
  endpoints: builder => ({
    getData: builder.query({
      query: ( path ) => ({
        url: `${path}`,
        method: 'GET',
        headers: headers
      })
    }),
  })
})

export const {
  useGetDataQuery,
} = getDataSlice
