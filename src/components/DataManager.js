import {getAPIAddress} from "./GetAPIAddress";
import {format} from "react-string-format";
import {Component} from "react";


async function get_data(path) {
    const API_URL = getAPIAddress("info")
    let response = fetch(API_URL)
        .then(response => {
            return response.json()
        })
    return response
}

async function generate_request(name, characteristic, data) {
    let req_data = {
        characteristic: characteristic,
        value: data
    };

    const API_URL = getAPIAddress(format('gadgets/{0}/set_characteristic', name));
    let response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(req_data)
    });

    let result = await response.json();
    let res = result["status"]
    console.log("result", res)
    if (/successful/i.test(res)) {
        // window.location.reload()
    }
    return response
}



export default class DataManager extends Component {
    constructor() {
        super();
    }

    getBridgeInfo = (path) => {
        return get_data(path);
    }

    generateGadgetRequest = (name, characteristic, data) => {
        return generate_request(name, characteristic, data);
    }

    generateClientRequest = (name, characteristic, data) => {
        return generate_request(name, characteristic, data);
    }
}