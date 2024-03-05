import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

function displayGameMessage(rollOne: number, rollTwo: number): string {
    let message: string;
    if (rollOne !== rollTwo) {
        message = "Game In Progress";
    } else {
        if (rollOne === 1) {
            message = "You Lose";
        } else {
            message = "You Win";
        }
    }
    return message;
}
export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(3);
    const [rightDie, setRightDie] = useState<number>(2);

    return (
        <div>
            <span data-testid="left-die">
                <Button onClick={() => setLeftDie(d6())}>Roll Left</Button>

                <p>Left Roll: {leftDie}</p>
            </span>

            <span data-testid="right-die">
                <Button onClick={() => setRightDie(d6())}>Roll Right</Button>

                <p>Right Roll: {rightDie}</p>
            </span>
            <p>{displayGameMessage(leftDie, rightDie)}</p>
        </div>
    );
}
