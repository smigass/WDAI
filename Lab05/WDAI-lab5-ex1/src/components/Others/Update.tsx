import styles from '../styles/Others.module.css'
import {useState} from "react";

export default function Update() {
    const initialTomato = {
        name: 'Tomato',
        price: 50
    }
    const [object, setObject] = useState(initialTomato)


    return(
        <div className={styles.otherDiv}>
            <h3>Current {object.name} price: {object.price}</h3>
            <button onClick={() => {
                setObject(prevState => ({...prevState, price:100}))
            }}>Update price</button>
        </div>
    )
}