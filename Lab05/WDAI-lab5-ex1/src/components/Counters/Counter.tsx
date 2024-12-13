import styles from '../styles/Counters.module.css'
import {useState} from "react";

export default function Counter() {
    let [count, setCount] = useState(0);


    return (
        <div className={styles.counter}>
            <h3>Counter</h3>
            <h5>Button counter: {count}</h5>
            <button onClick={() => {setCount(count + 1)}}>Click</button>
        </div>
    )
}