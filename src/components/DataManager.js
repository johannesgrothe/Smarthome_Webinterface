import {getAPIAddress} from "./GetAPIAddress";
import {format} from "react-string-format";
import {Component} from "react";


async function get_data(path) {
    const API_URL = getAPIAddress(path)
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
    return result
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

    async generateClientRequest(name, characteristic, data) {
        return generate_request(name, characteristic, data);
    }
}