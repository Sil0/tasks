import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Color } from "react-bootstrap/esm/types";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;
interface ColoredBoxProps {
    index: number;
    setIndex: (num: number) => void;
}

function ChangeColor({ index, setIndex }: ColoredBoxProps): JSX.Element {
    return (
        <Button onClick={() => setIndex((1 + index) % COLORS.length)}>
            Next Color
        </Button>
    );
}

function ColorPreview({ index, setIndex }: ColoredBoxProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[index],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    index={colorIndex}
                    setIndex={setColorIndex}
                ></ChangeColor>
                <ColorPreview
                    index={colorIndex}
                    setIndex={setColorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
