import Student from "./Student.ts";
import styles from '../styles/Students.module.css'
import AddStudent, {formData} from "./AddStudent.tsx";
import {useState} from "react";

export default function StudentsManager() {

    const [students, setStudents] = useState<Student[]>([])
    const [hook, setHook] = useState(0)

    const addStudent = (studentData: formData) => {
        const {firstname, lastname, year} = studentData;
        if(firstname === '' || lastname === '' ||  isNaN(year)) {
            alert("Please fill all fields");
            return;
        }
        const exists = students.find(student => student.firstName === firstname && student.lastName === lastname);
        console.log(students)
        if (!exists){
            setHook(hook + 1)
            setStudents([...students, {firstName: firstname, lastName: lastname, year: year}])
        } else alert("Student already exists")

    }

    return (
        <>
            <table border={1} className={styles.studentTable}>
                <thead>
                <tr>
                    <th>Lp.</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Year</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student, i) => (
                    <tr key={i + 1}>
                        <td>{i + 1}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.year}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <AddStudent addStudent={addStudent} hook={hook}/>
        </>
    )
}