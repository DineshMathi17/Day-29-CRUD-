import React from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Base";
import { AppState } from "../appprovider";

export default function StudentComponent() {

    const { student, setStudent } = AppState();

    const history = useHistory();

    const studentDelete = (idx) => {
        const studentAlterList = student.filter((stu) => stu.id !== idx);
        setStudent(studentAlterList)
    }
    
    return (
        <BaseApp
            title="Student list"
        >

            <div className="stu-com" >

                {
                    student.map((students, index) => (
                        <div key={index} className="stu-com2">
                            <h1>{students.name}</h1>
                            <p>Standard: {students.standard}</p>
                            <p>Email: {students.email}</p>
                            <p>Age: {students.age}</p>

                            <div className="btn-group">
                                <button
                                    className="btn btn-view"
                                    onClick={() => history.push(`/student/view/${index}`)}
                                >View</button>

                                <button
                                    className="btn btn-edit"
                                    onClick={() => history.push(`/student/edit/${students.id}`)}
                                >Edit</button>

                                <button
                                    className="btn btn-delete"
                                    onClick={() => studentDelete(students.id)}
                                >Delete</button>
                            </div>
                        </div>

                    ))


                }

            </div>


        </BaseApp>
    )
}