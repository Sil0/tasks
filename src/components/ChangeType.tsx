import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    const swapType = () => {
        setQuestionType(
            questionType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
        console.log(questionType);
    };

    return (
        <span>
            <Button onClick={swapType}>Change Question Type</Button>
            <p>
                {questionType === "multiple_choice_question"
                    ? "Multiple Choice Question"
                    : "Short Answer Question"}
            </p>
        </span>
    );
}
