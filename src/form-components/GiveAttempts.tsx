import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [enteredAmount, setEnteredAmount] = useState<number>(0);

    function useAttempts() {
        setAttempts(attempts - 1);
    }

    function gainAttempt() {
        if (!isNaN(enteredAmount)) {
            setAttempts(attempts + enteredAmount);
        }
    }

    function handleAttemptChange(event: React.ChangeEvent<HTMLInputElement>) {
        const userInput = event.target.value;
        if (!isNaN(Number(userInput))) {
            setEnteredAmount(parseInt(userInput, 10));
        }
    }

    function displayAttempts(att: number) {
        return `attempts left: ${att}`;
    }

    return (
        <div>
            <Form.Group controlId="formAttemptsLeft">
                <Form.Label>Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    onChange={handleAttemptChange}
                />{" "}
                <Button onClick={useAttempts} disabled={attempts <= 0}>
                    use
                </Button>{" "}
                <Button onClick={gainAttempt}>gain</Button>
                <h3>{displayAttempts(attempts)}</h3>
            </Form.Group>
        </div>
    );
}
