import styles from '../styles/Counters.module.css'
import {useEffect, useState} from "react";

export default function CounterEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Hello World!')
    }, []);

    useEffect(() => {
        console.log('Licznik zwiększył się do: ' + count)
    }, [count]);

    return (
        <div className={styles.counter}>
            <h3>Counter</h3>
            <h5>Button counter: {count}</h5>
            <button onClick={() => {setCount(count + 1)}}>Click</button>
        </div>
    )
}