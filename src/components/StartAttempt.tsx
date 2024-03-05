import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [inProgress, setInProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    const updateAttempts = () => {
        console.log(inProgress);
        console.log(attempts);
        if (attempts > 0) {
            setAttempts(attempts - 1);
            setInProgress(true);
        } else {
            setInProgress(false);
        }
    };
    const updateProgress = () => {
        setInProgress(!inProgress);
    };
    return (
        <div>
            <p> {inProgress ? "Attempt in progress" : "Start Attempt"}</p>
            <Button
                onClick={updateAttempts}
                disabled={inProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <p> Attempts Remaining: {attempts}</p>
            <Button onClick={updateProgress} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttempts(attempts + 1)}
                disabled={inProgress}
            >
                Mulligan
            </Button>
        </div>
    );
}
