import exp from "constants";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer = "2"
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <div>
                <Form.Group controlId="formName">
                    <Form.Label>Answer:</Form.Label>
                    <Form.Control value={answer} onChange={updateAnswer} />
                </Form.Group>
            </div>
            <div>The square root of 4 is: </div>
            <div>{answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
