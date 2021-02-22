import React, {Component} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {getAPIAddress} from "./components/GetAPIAddress";
import ClientContainer from "./components/ClientContainer";

export default class ClientPage extends Component {
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
                            <ClientContainer client_data={client_info} key={index}/>
                        )
                    })}
                </Container>
            </div>
        )
    }
}

