import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Silo Murphy UD CISC275 with React Hooks and TypeScript. This is
                my page header.
            </header>
            <p>
                Hello World. This is my webpage.
                <Container>
                    <Row>
                        <Col>
                            Here are three things I like:
                            <ul>
                                <li>math</li>
                                <li>singing</li>
                                <li>rock climbing</li>
                            </ul>
                        </Col>
                        <Col>Here is a nice rectangle.</Col>
                    </Row>
                </Container>
            </p>
        </div>
    );
}

export default App;
