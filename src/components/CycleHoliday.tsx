import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Thanksgiving"
    | "SpringFestival"
    | "Halloween"
    | "Easter";

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("Christmas");

    const nextInYear: Record<Holiday, Holiday> = {
        Christmas: "SpringFestival",
        SpringFestival: "Easter",
        Easter: "Halloween",
        Halloween: "Thanksgiving",
        Thanksgiving: "Christmas"
    };
    const nextAlphabetically: Record<Holiday, Holiday> = {
        Christmas: "Easter",
        Easter: "Halloween",
        Halloween: "SpringFestival",
        SpringFestival: "Thanksgiving",
        Thanksgiving: "Christmas"
    };
    const emojis: Record<Holiday, string> = {
        Christmas: "🎄",
        Easter: "🐇 ",
        Halloween: "🎃",
        SpringFestival: "🏮",
        Thanksgiving: "🦃 "
    };

    return (
        <span>
            <p>Holiday: {emojis[currentHoliday]}</p>
            <Button
                onClick={() => setCurrentHoliday(nextInYear[currentHoliday])}
            >
                Advance by Year
            </Button>
            <Button
                onClick={() =>
                    setCurrentHoliday(nextAlphabetically[currentHoliday])
                }
            >
                Advance by Alphabet
            </Button>
        </span>
    );
}
