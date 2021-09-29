import React, {Component} from "react";
import {Button} from "react-bootstrap";
import DataManager from "../../DataManager";

export default class RotationSpeedButton extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.buttonText = "fiddy %"
        this.characteristic = 2
    }

    handleChange = () => {
        let rotationSpeed;
        if (this.props.data === 0) {
            rotationSpeed = 1
        } else {
            rotationSpeed = 0
        }
        let req = new DataManager();
        const response = req.generateGadgetRequest(this.props.name, this.characteristic, rotationSpeed);
        console.log("response: ", response)
    }

    componentDidMount() {
    }

    render() {
        return (
            <>
                <Button type={"checkbox"}
                        size={"sm"}
                        onClick={this.handleChange}
                        variant={"outline-primary"}
                >{this.buttonText}
                </Button>
            </>
        );
    }
}