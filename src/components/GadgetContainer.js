import React, {Component} from "react";
import {Card, Col} from "react-bootstrap";

export default class GadgetContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.gadget_data,
            // characteristics: this.props.data.characteristics,
            gadget_characteristic: []


        }
        // console.log("My test", gadget_data)
        console.log("data: ", this.state.data)
        // console.log("boolean: ", this.state.data == gadget_data)
    }
    render() {
        return(
            <Card>
                <Card.Title>
                    <div>
                        <p>
                            Name: {this.state.data.name}<br/>
                            type: {this.state.data.type}
                        </p>
                    </div>
                </Card.Title>
                <Card.Body>
                    <a>characteristics: {this.state.data.characteristics.map((gadget_characteristic, index) => {
                        console.log("gadget_characteristic: ", gadget_characteristic);
                        return (
                            <div>
                                <p>
                                    max: {gadget_characteristic.max}<br/>
                                    min: {gadget_characteristic.min}<br/>
                                    step: {gadget_characteristic.step}<br/>
                                    {/*<a>port_mapping: {this.gadget_data.port_mapping}</a>*/}
                                    type: {gadget_characteristic.type}<br/>
                                    value: {gadget_characteristic.value}<br/>
                                </p>
                            </div>
                        // <p xs={12} md={6} lg={4} style={{marginTop:10}}>
                        //     <GadgetContainer gagdet_data={gadget_characteristic} key={index}/>
                        // </p>
                        )
                    })}
                    </a>

                    {/*<p>max: {this.state.gadget_data.characteristics.max}</p>*/}
                    {/*<p>min: {this.state.gadget_data.characteristics.min}</p>*/}
                    {/*<p>step: {this.state.gadget_data.characteristics.step}</p>*/}
                    {/*/!*<a>port_mapping: {this.gadget_data.port_mapping}</a>*!/*/}
                    {/*<p>type: {this.state.gadget_data.characteristics.type}</p>*/}
                    {/*<p>value: {this.state.gadget_data.characteristics.value}</p>*/}
                    {/*<p>type: {this.state.gadget_data.type}</p>*/}
                </Card.Body>
            </Card>
        )
    }
}