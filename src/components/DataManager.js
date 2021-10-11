import {getAPIAddress} from "./GetAPIAddress";
import {format} from "react-string-format";
import {Component} from "react";


async function get_data(path) {
    const API_URL = getAPIAddress(path)
    return await fetch(API_URL)
        .then(response => {
            return response.json()
        })
}

async function generate_request(name, characteristic, data) {
    let req_data = {
        characteristic: characteristic,
        value: data

    };

    const API_URL = getAPIAddress(format('sync/gadget', name));
    let response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(req_data)
    });

    return await response.json()
}



export default class DataManager extends Component {
    constructor(props) {
        super(props);
    }

    async getInfo(path) {
        return get_data(path);
    }

    async generateGadgetRequest(name, characteristic, data) {
        return generate_request(name, characteristic, data);
    }

    async generateClientRequest(name, data) {
        return generate_request(name, data);
    }
}