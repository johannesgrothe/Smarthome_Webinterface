import {Button} from "react-bootstrap";
import React, {Component} from "react";
import DataManager from "../../DataManager";


export default class ToggleClientButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client_name: this.props.name
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange() {
        let req = new DataManager()
        const response = req.generateClientRequest()
        console.log("response from ToggleStatus request (POST): ", response)
        this.props.clientFn()
    }

    componentDidMount() {
    }

    render() {
        return (
            <>
                <Button   type={"checkbox"}
                          size={"sm"}
                          onClick={this.handleChange}
                          variant={"outline-primary"}
                          >
                    restart
                </Button>
            </>
        )
    }


}

