import {createContext, useContext, useState } from "react";
import { studentdata, teccherdata } from "./data";

const AppContext = createContext();

const AppProvider =({children})=>{

    const [student,setStudent]=useState(studentdata);
    const [teacher,setTeacher] = useState(teccherdata);

    return(

        <AppContext.Provider
        value={{
            student,
            setStudent,
            teacher,
            setTeacher
        }}
        >
            {children}
        </AppContext.Provider>
    )
}
export const AppState = () =>{
    return useContext(AppContext)
}
export default AppProvider