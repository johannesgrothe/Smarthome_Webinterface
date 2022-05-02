/*
* Currently not used, as fetching data is now done via RTK Query
* */


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import ApiRequests, {getAPIAddress} from "../hooks/ApiRequests";
import {Action, AnyAction, createAsyncThunk, createSlice, PayloadAction, Reducer} from "@reduxjs/toolkit";
import {RootState} from "../store/store";

// let username: string = "debug_admin"
// let pwd: string = "yolo"
// let str: string = 'Basic ' + Buffer.from(username + ':' + pwd, 'utf-8').toString('base64')

//  Bridge_info_result:
// {
//   bridge_name?: string,
//   software_commit?: string,
//   software_branch?: string,
//   running_since?: string,
//   platformio_version?: string,
//   git_version?: string,
//   python_version?: string,
//   pipenv_version?: string,
// }



export interface BridgeState {
  value: {
    bridge_name?: string,
    software_commit?: string,
    software_branch?: string,
    running_since?: string,
    platformio_version?: string,
    git_version?: string,
    python_version?: string,
    pipenv_version?: string,
  },
  status: 'idle' | 'loading' | 'failed'
}

const initialState: BridgeState = {
  value: {
    bridge_name: '',
    software_commit: '',
    software_branch: '',
    running_since: '',
    platformio_version: '',
    git_version: '',
    python_version: '',
    pipenv_version: '',
  },
  status: 'idle',
}




export const fetchBridgeData = createAsyncThunk(
  'info/bridge',
  async () => {
    let r = new ApiRequests()
    let url: string = getAPIAddress('info/bridge')
    const response = await r.getInfo(url)
    return response
  }
)

export const InfoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBridgeData.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchBridgeData.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value += action.payload
      })
      .addCase(fetchBridgeData.rejected, (state) => {
        state.status = 'failed'
      })
  }
})

export default InfoSlice.reducer


// export const infoReducer : Reducer<State, Action> = (
//   state: State, action: Action
// ) => {
//   console.log(`state: ${state}, action: ${action}`)
//   return state
// }

// export const infoSlice = createSlice({
//   name: 'info',
//   initialState: {},
//   reducers: {
//     infoReducer
//   }
// })

