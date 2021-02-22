import React, {Component} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {getAPIAddress} from "./components/GetAPIAddress";

export default class ChipPage extends Component {
    constructor() {
        super();
        this.state = {
            clients: [],
        }
    }

    componentDidMount() {
        const API_URL = getAPIAddress("clients")
        fetch(API_URL)
            .then(response => {
                return response.json()
            })
            .then(res => {
                this.setState(res)
                console.log("state", this.state.clients)
            })

    }
    
    render() {
        return(
            <div>
                <Container>
                    {this.state.clients.map((client_info, index) => {
                        return (
                            <Card key={index} value={client_info}>
                                <Card.Title>{client_info.name}</Card.Title>
                                <Card.Body>
                                    <p>boot mode: {client_info.boot_mode}</p>
                                    <p>created: {client_info.created}</p>
                                    <p>is_active: {client_info.is_active}</p>
                                    <p>last_connected: {client_info.last_connected}</p>
                                    {/*<a>port_mapping: {client_data.port_mapping}</a>*/}
                                    <p>sw_branch: {client_info.sw_branch}</p>
                                    <p>sw_uploaded: {client_info.sw_uploaded}</p>
                                    <p>sw_version: {client_info.sw_version}</p>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </Container>
            </div>
        )
    }
}