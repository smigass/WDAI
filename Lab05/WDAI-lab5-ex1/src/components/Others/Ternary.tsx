import styles from '../styles/Others.module.css'

export default function Ternary() {
    const a = false
    const b = true

    return (
        <div style={{display: "flex", flexDirection: "column", margin: "2rem 0"}}>
            {JSON.stringify({a: a, b: b})}
            <div className={styles.otherDiv}>
                Stwierdzenie a jest: {a ? "Prawdziwe" : "Fałszywe"}
            </div>
            <div className={styles.otherDiv}>
                Stwierdzenie b jest: {b ? "Prawdziwe" : "Fałszywe"}
            </div>
        </div>
    )
}