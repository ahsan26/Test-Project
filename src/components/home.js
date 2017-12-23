import React, { Component } from 'react';
import Counter from "../components/counter";
import { Button } from "react-bootstrap";

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        }
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }
    close() {
        this.setState({ showModal: false });
    }
    open() {
        this.setState({ showModal: true });
    }
    render() {
        const { counterVal, increament, decreament } = this.props;
        return (
            <div>
                <Button onClick={_ => { this.setState({ showModal: true }); }}>Show Counter</Button>
                <Counter showModal={this.state.showModal} increament={increament} decreament={decreament} close={this.close} counter={counterVal} />
            </div>
        );
    }
}