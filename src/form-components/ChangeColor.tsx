import React, { useState } from "react";
import { Form } from "react-bootstrap";
export const COLORS = [
    "red",
    "blue",
    "green",
    "cyan",
    "magenta",
    "orange",
    "purple",
    "white",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [currentColor, chooseCurrentColor] = useState<string>("");

    function colorChange(event: React.ChangeEvent<HTMLInputElement>) {
        chooseCurrentColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color) => (
                <Form.Check
                    key={color}
                    type="radio"
                    inline
                    name="Colors"
                    onChange={colorChange}
                    id={`color: ${color}`}
                    label={color}
                    value={color}
                    checked={currentColor === color}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: currentColor,
                    color: "white",
                    padding: "10px",
                    marginTop: "10px"
                }}
            >
                {currentColor}
            </div>
        </div>
    );
}
