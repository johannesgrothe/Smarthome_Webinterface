import React, {Component} from "react";
import {Button} from "react-bootstrap";
import DataManager from "../../DataManager";

export default class LightLevelButton extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.buttonText = "duster"
        this.characteristic = 1
    }

    handleChange = () => {
        let lightLevel;
        if (this.props.data === 0) {
            lightLevel = 1
        } else {
            lightLevel = 0
        }
        let req = new DataManager();
        const response = req.generateGadgetRequest(this.props.name, this.characteristic, lightLevel);
        console.log("response: ", response)
    }

    componentDidMount() {
    }

    render() {
        return(
            <>
                <Button
                    type={"checkbox"}
                    size={"sm"}
                    onClick={this.handleChange}
                    variant={"outline-primary"}
                >{this.buttonText}
                </Button>
            </>
        )
    }
}