import {getAPIAddress} from "./GetAPIAddress";
import {format} from "react-string-format";
import {Button} from "react-bootstrap";
import React, {useState} from "react";


export default function ToggleGadgetButton({name, data}) {
    const [value, setValue] = useState({})

    function handleChange() {
        console.log("data_value: ", data)
        const gadget_value = data
        let gadget_val;
        if (data != 0) {
            gadget_val = data - gadget_value
        } else {
            gadget_val = 1
        }
        console.log("gadget_value: ", gadget_val)
        const response = generate_request(name, gadget_val)
        console.log("response: ", response)
    };

    async function generate_request(name, data) {

        let req_data = {
            characteristic: 3,
            value: data
        };

        const API_URL = getAPIAddress(format('gadgets/{0}/set_characteristic', name));
        console.log("url", API_URL)
        let response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(req_data)
        });

        let result = await response.json();
        // alert(result.status);
        console.log("result", result)
        window.location.reload()
        return response
    }

    return (
        <>
            <Button   type={"checkbox"}
                      size={"sm"}
                      onClick={handleChange}
                      variant={"outline-primary"}
                      value={value}>ON
            </Button>
        </>
    )
}