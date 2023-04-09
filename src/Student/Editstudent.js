import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../Base";
import { AppState } from "../appprovider";
import { Button, TextField } from "@mui/material";

export function EditStudent() {

    const history = useHistory();

    const { student, setStudent } = AppState(); 

    const [idx, setIdx] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [standard, setStandard] = useState("");


    const { id } = useParams();
    const selectedStudent = student.find((stu) => stu.id === id);
  

    useEffect(() => {
        setIdx(selectedStudent.id)
        setName(selectedStudent.name)
        setEmail(selectedStudent.email)
        setAge(selectedStudent.age)
        setStandard(selectedStudent.standard)

    }, []);

    const EditedStudent = () => {
        const editindex = student.findIndex(stu => stu.id === id);
        const editedData = {
            id: idx,
            name,
            email,
            age,
            standard,

        }
        student[editindex] = editedData;
        setStudent([...student]);
        history.push("/")
    }

    return (
        <BaseApp
            title=" Edit Student Data"
        >


            <div className="text-areas">

                <TextField
                    id="fullwidth"
                    label="id"
                    variant="outlined"
                    value={idx}
                    onChange={(event) => setIdx(event.target.value)}
                />


                <TextField
                    id="fullwidth"
                    label="name"
                    variant="outlined"
                    value={name}
                    onChange={(event) => setName(event.target.value)} />

                <TextField
                    id="fullwidth"
                    label="email"
                    variant="outlined"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)} />


                <TextField
                    id="fullwidth"
                    label="age"
                    variant="outlined"
                    value={age}
                    onChange={(event) => setAge(event.target.value)} />

                <TextField
                    id="fullwidth"
                    label="standard"
                    variant="outlined"
                    value={standard}
                    onChange={(event) => setStandard(event.target.value)} />

                <Button
                    variant="contained"
                    color="success"
                    onClick={EditedStudent}>
                    Edit
                </Button>

            </div>

        </BaseApp>
    )
}