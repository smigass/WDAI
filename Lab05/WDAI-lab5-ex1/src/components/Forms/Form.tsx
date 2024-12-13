import {useState} from "react";
import styles from '../styles/Forms.module.css'

export default function Form() {
    const [input, setInput] = useState<string>()
    return (
        <div className={styles.form}>
            <input type={"text"} onChange={(e) => setInput(e.target.value)}/>
            <div>Input value: {input}</div>
        </div>
    )
}