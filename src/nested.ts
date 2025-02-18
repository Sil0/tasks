import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import {
    duplicateQuestion,
    makeBlankQuestion,
    renameQuestion
} from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedQuestions = questions.filter(
        (qst: Question): boolean => qst.published
    );
    return publishedQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const isEmptyQuestion = (qst: Question): boolean =>
        qst.body === "" && qst.expected === "" && qst.options.length === 0;
    const nonEmptyQuestions = questions.filter(
        (qst: Question): boolean => !isEmptyQuestion(qst)
    );
    return nonEmptyQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const targetIndex = questions.findIndex(
        (qst: Question): boolean => qst.id === id
    );
    if (targetIndex === -1) {
        return null;
    } else {
        return questions[targetIndex];
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter((qst: Question): boolean => qst.id !== id);
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((qst: Question): string => qst.name);
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    return questions.reduce(
        (acc, currentQuestion) => acc + currentQuestion.points,
        0
    );
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    return sumPoints(getPublishedQuestions(questions));
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const table = questions.map(
        (qst: Question): string =>
            "\n" +
            [
                qst.id,
                qst.name,
                qst.options.length,
                qst.points,
                qst.published
            ].join()
    );
    return table.reduce(
        (acc, line) => acc + line,
        "id,name,options,points,published"
    );
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map(
        (qst: Question): Answer => ({
            questionId: qst.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map(
        (qst: Question): Question => ({ ...qst, published: true })
    );
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) {
        return true;
    }
    const sampleType = questions[0].type;
    return questions.every((qst: Question): boolean => qst.type === sampleType);
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    return [...questions, makeBlankQuestion(id, name, type)];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const targetIndex = questions.findIndex(
        (qst: Question): boolean => qst.id === targetId
    );
    if (targetIndex === -1) {
        return [...questions];
    } else {
        const renamedQuestion = renameQuestion(questions[targetIndex], newName);
        return [
            ...questions.slice(0, targetIndex),
            renamedQuestion,
            ...questions.slice(targetIndex + 1)
        ];
    }
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const targetIndex = questions.findIndex(
        (qst: Question): boolean => qst.id === targetId
    );
    if (targetIndex === -1) {
        return [...questions];
    }
    const oldQuestionType = questions[targetIndex].type;
    let retypedQuestion: Question;
    if (
        newQuestionType === "short_answer_question" &&
        oldQuestionType === "multiple_choice_question"
    ) {
        retypedQuestion = {
            ...questions[targetIndex],
            type: newQuestionType,
            options: []
        };
    } else {
        retypedQuestion = {
            ...questions[targetIndex],
            type: newQuestionType
        };
    }
    return [
        ...questions.slice(0, targetIndex),
        retypedQuestion,
        ...questions.slice(targetIndex + 1)
    ];
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
function addOption(qst: Question, index: number, opt: string) {
    return {
        ...qst,
        options: [
            ...qst.options.slice(0, index),
            opt,
            ...qst.options.slice(index + 1)
        ]
    };
}

export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    let output: Question[];
    if (targetOptionIndex === -1) {
        output = questions.map(
            (qst: Question): Question =>
                qst.id === targetId
                    ? { ...qst, options: [...qst.options, newOption] }
                    : qst
        );
    } else {
        output = questions.map(
            (qst: Question): Question =>
                qst.id === targetId
                    ? addOption(qst, targetOptionIndex, newOption)
                    : qst
        );
    }
    return output;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const targetIndex = questions.findIndex(
        (qst: Question): boolean => qst.id === targetId
    );
    if (targetIndex === -1) {
        return [
            ...questions,
            duplicateQuestion(newId, questions[questions.length - 1])
        ];
    } else {
        return [
            ...questions.slice(0, targetIndex + 1),
            duplicateQuestion(newId, questions[targetIndex]),
            ...questions.slice(targetIndex + 1)
        ];
    }
}
