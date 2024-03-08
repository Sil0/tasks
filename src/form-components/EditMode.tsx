import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [inEditMode, setInEditMode] = useState<boolean>(false);

    function updateEnrollment(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setInEditMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>{inEditMode ? "Edit Mode" : "View Mode"}</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="is-edit-check"
                    label="edit-mode"
                    checked={inEditMode}
                    onChange={updateEditMode}
                />
            </div>

            <div>
                {inEditMode ? (
                    <Form.Check
                        type="checkbox"
                        id="is-stuent-check"
                        label="Student?"
                        checked={isStudent}
                        onChange={updateEnrollment}
                    />
                ) : (
                    <></>
                )}
            </div>

            <div>
                {inEditMode ? (
                    <Form.Group controlId="studentName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={updateName}
                            type="text"
                        />
                    </Form.Group>
                ) : (
                    <></>
                )}
            </div>

            <div>
                {name} is {isStudent ? "" : "not "}a student.
            </div>
        </div>
    );
}
