import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import ApiRequests, {getAPIAddress} from "../hooks/ApiRequests";

let username: string = "bongobob"
let pwd: string = "spongobob"
let str: string = 'Basic ' + Buffer.from(username + ':' + pwd, 'utf-8').toString('base64')

let headers = {
  Authorization: str
}

export const infoSlice = createApi({
  reducerPath: 'info',
  baseQuery: fetchBaseQuery({
    baseUrl: getAPIAddress('')
  },),
  endpoints: builder => ({
    getInfo: builder.query({
      query: ( name ) => ({
        url: `/info/${name}`,
        method: 'GET',
        headers: headers
      })
    }),
    getClientsInfo: builder.query({
      query: () => 'info/clients'
    }),
    getGadgetsInfo: builder.query({
      query: () => 'info/gadgets'
    }),
  })
})

export const {
  useGetInfoQuery,
  useGetClientsInfoQuery,
  useGetGadgetsInfoQuery,
} = infoSlice