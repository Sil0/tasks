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
                Silo Murphy UD CISC275 with React Hooks and TypeScript.
            </header>
            <h1>This is my page header.</h1>
            <p>Hello World. This is my webpage.</p>
            <Container>
                <Row>
                    <Col>
                        Here are three things I like:
                        <ol>
                            <li>math</li>
                            <li>rock climbing</li>
                            <li>singing</li>
                        </ol>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <div
                            style={{
                                border: "1px solid red",
                                padding: "4px",
                                width: "500px",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        Here is a cool image.
                        <img
                            src={require("./images/cool_dinosaur.jpeg")}
                            alt="A cool picture of a dinosaur"
                        />
                        <div
                            style={{
                                border: "1px solid red",
                                padding: "4px",
                                width: "50px",
                                height: "10px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
