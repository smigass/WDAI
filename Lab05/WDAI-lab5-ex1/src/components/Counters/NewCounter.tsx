import styles from '../styles/Counters.module.css'
import {useState} from "react";
import Button from "./Button.tsx";

export default function Counter() {
    const [count, setCount] = useState(0);

    const onClick = () => {
        setCount(count + 1);
    }
    return (
        <div className={styles.counter}>
            <h3>Counter</h3>
            <h5>Button counter: {count}</h5>
            <Button clickAction={onClick} text="Click me" />
        </div>
    )
}