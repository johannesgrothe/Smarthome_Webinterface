import {getAPIAddress} from "../../GetAPIAddress";
import {format} from "react-string-format";
import {Button, Card} from "react-bootstrap";
import React, {useState} from "react";


export default function ToggleClientButton({name}) {
    const [value, setValue] = useState({})

    function handleChange(val) {
        setValue(val)
        alert("Client was restartet")
        const response = generate_request(name)
        console.log("response: ", response)
    }

    async function generate_request(name) {
        const API_URL = getAPIAddress(format('clients/{0}/restart', name));
        let response = await fetch(API_URL, {
            method: 'POST',
        });
        let result = await response.json();
        // alert(result.status);
        // console.log("result", result)
        if (/successful/i.test(result)) {
            window.location.reload()
        }
        return response
    }

    return (
        <>
            <Button   type={"checkbox"}
                      size={"sm"}
                      onClick={handleChange}
                      variant={"outline-primary"}
                      value={value}>
                restart
            </Button>
        </>
    )
}

