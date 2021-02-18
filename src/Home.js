import React, {Component, useEffect, useState} from 'react';
import styled from 'styled-components';
import {Card, Col, Container, Row} from "react-bootstrap";
import {NodePath as axios} from "@babel/traverse";



export default class MainPage extends Component {
    constructor(){
        super();
        this.state= {
            info: [],
        };
    }

componentDidMount() {
    const MY_API_URL = "192.168.178.158:4999/info"
    console.log("huhu");
    fetch(MY_API_URL)
        .then(result => {
            console.log(result);
            return result.json();})
        .then(json => {
            console.log(json);
            return "fck ya all"
        });
        // .then(res => {
        //     let data = res.results.map((body) => {
        //         return (
        //             <div key={data.results}>
        //             </div>
        //         )
        //     })
        //     this.setState({info: data});
        //     console.log("state", this.state.info)
        //
}
    // const [data, setData] = useState({res: [], isFetching: false});
    // useEffect(() => {
    //     const fetchBody = async () => {
    //         try {
    //             setData({res: data.body, isFetching: true});
    //             let response;
    //             [response] = await Promise.all([axios.get(MY_API_URL)]);
    //             setData({res: [response].data, isFetching: false});
    //         } catch (e) {
    //             console.log(e);
    //             setData({res: data.body, isFetching: false});
    //         }
    //     };
    //     fetchBody();
    // }, []);

    render() {
        return(
            <Container width="90%">
                <Row className="justify-content-center">
                    <Col>
                        <Card>
                            <Card.Body> Bridge Name  </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row height="30%">
                    <Col>
                        <Card>
                            <Card.Body>Number of Chips connected to Bridge: ${this.state.info}</Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>This is some text within a card body.</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <div>
                        {}
                    </div>
                </Row>
            </Container>
        )
    }

}
