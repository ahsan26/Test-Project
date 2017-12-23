import React from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";

export default class Counter extends React.Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Counter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Row>
                            <Col md={3}>
                                <Button onClick={this.props.decreament}>Decreament</Button>
                            </Col>
                            <Col md={6}>
                                <p style={Styles.counter}>{this.props.counter}</p>
                            </Col>
                            <Col md={3}>
                                <Button onClick={this.props.increament}>Increament</Button>
                            </Col>
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="danger" onClick={this.props.close}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const Styles = {
    counter: {
        textAlign: "center"
    }
}