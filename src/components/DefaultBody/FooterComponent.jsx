import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

class FooterComponent extends Component {

    render() {
        return (
            <Card bg="dark" text="light" className="fixed-bottom">
                <Card.Header>© Hamsite 2019</Card.Header>
            </Card>
        );
    }
}

export default FooterComponent;