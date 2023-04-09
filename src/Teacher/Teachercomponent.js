import React from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Base";
import { AppState } from "../appprovider";


export default function TeacherComponent() {

    const { teacher, setTeacher } = AppState();

    const history = useHistory();

    const teacherDelete = (idx) => {
        const teacherAlterList = teacher.filter((tea) => tea.id !== idx);
        setTeacher(teacherAlterList)
    }
    return (
        <BaseApp
            title="Teacher List"
        >

            <div className="tea-com">
                {
                    teacher.map((teachers, index) => (
                        <div key={index} className="tea-com2">
                            <h1>{teachers.name}</h1>
                            <p>Subject : {teachers.subject}</p>
                            <p>Email: {teachers.email}</p>
                            <p>Age: {teachers.age}</p>


                            <div className="btn-group">
                                <button
                                    className="btn btn-view"
                                    onClick={() => history.push(`/teacher/view/${index}`)}
                                >View</button>

                                <button
                                    className="btn btn-edit"
                                    onClick={() => history.push(`/teacher/edit/${teachers.id}`)}
                                >Edit</button>

                                <button
                                    className="btn btn-delete"
                                    onClick={() => teacherDelete(teachers.id)}
                                >Delete</button>
                            </div>
                        </div>

                    ))


                }
            </div>


        </BaseApp>
    )
}