import {useState} from "react";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store";

const axios = require('axios').default;

export const getAPIAddress = (path: string) => {
    const API_IP: string = window.location.host.split(':')[0]

    // return `http://localhost:3000/${path}`
    return `http://${API_IP}:3000/${path}`
}


async function GETData<T>(url: string, requestOptions: object) {
    // return await axios.get(url, requestOptions)
    //     .then((result: { data: any; }) => {
    //         console.log(result.data)
    //         return result
    //     })
    // try {
    //     const { data } = await axios.get(url, requestOptions)
    //     return data
    //     // console.log("data: ", data)
    //     // console.log("bridge_info: ", bridge_info)
    // } catch (error) {
    //     console.log(error)
    // }
    return await fetch(url, requestOptions).then(response => {
        return response.json()
    })
}

async function POSTData<T>(url: string, requestOptions: object): Promise<T> {
    let response = await fetch(url, requestOptions)
    return await response.json()
}

async function PUTData<T>(url: string, requestOptions: object): Promise<T> {
    let response = await fetch(url, requestOptions)
    return await response.json()
}

async function ApiGetRequest(url: string){
    //const [isFetching, setFetchingComplete] = useState(false)
    let myHeaders: Headers = new Headers();
    let username: string = "bongobob"
    let pwd: string = "spongobob"
    let str: string = 'Basic ' + Buffer.from(username + ':' + pwd, 'utf-8').toString('base64')
    const headers = {
        Authorization: str
    };
    myHeaders.set('Authorization', 'Basic ' + str)
    let requestOptions: object = {
        method: 'GET',
        headers: headers
    }
    return GETData(url, requestOptions);
}

async function ApiPostRequest<T>(url: string, body: object) {
    let response: Response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(body)
    })
    return await response.json() as Promise<T>
}

export default class ApiRequests {
    public async getInfo(path: string){
        console.log("requesting data from: ", path)
        return ApiGetRequest(path)
    }
}


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

