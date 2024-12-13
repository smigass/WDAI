import Student from "./Student.ts";
import styles from '../styles/Students.module.css'
export default function Students() {
    const students: Student[] = [
        {
            firstName: "Szymon",
            lastName: "Migas",
            year: 2
        },
        {
            firstName: "Jaś",
            lastName: "Fasola",
            year: 1
        }
    ]
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
        </>
    )
}