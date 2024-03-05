import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isHidden, setHidden] = useState<boolean>(true);
    return (
        <span>
            <Button onClick={() => setHidden(!isHidden)}>Reveal Answer</Button>
            {!isHidden && <p>42</p>}
        </span>
    );
}
