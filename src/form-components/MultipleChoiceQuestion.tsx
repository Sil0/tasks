import React, { useState } from "react";
import { Form } from "react-bootstrap";
MultipleChoiceQuestion.defaultProps = {
    options: ["zero", "one", "infinitely many"],
    expectedAnswer: ["one"]
};

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [currentChoice, setCurrentChoice] = useState<string>(options[0]);

    function changeChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrentChoice(event.target.value);
    }

    return (
        <div>
            <h3>How many Solutions to 2x=x</h3>
            <Form.Group controlId="Options">
                <Form.Select value={currentChoice} onChange={changeChoice}>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <h3>
                Your current choice is that there are {currentChoice} solutions
            </h3>
            <h3>{currentChoice === expectedAnswer ? "✔️" : "❌"}</h3>
        </div>
    );
}
