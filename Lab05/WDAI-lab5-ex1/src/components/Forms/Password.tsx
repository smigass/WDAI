import styles from '../styles/Forms.module.css'
import {useState} from "react";

export default function Password() {
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    return (
        <div className={styles.passwordContainer}>
            <label htmlFor="password">Password</label>
            <input id={"password"} onChange={e => setPassword(e.target.value)}/>
            <label htmlFor="password_confirmation">Confirm Password</label>
            <input id={"password_confirmation"} onChange={e => setConfirmPassword(e.target.value)}/>
            <div>
                {(confirmPassword === '' && password === '') &&
                    <span style={{color: '#FF0000', fontWeight: 'bold'}}>Please enter password</span>
                }
                {confirmPassword !== password &&
                    <span style={{color: '#ff9900', fontWeight: 'bold'}}>Please check password</span>
                }
            </div>
        </div>
    )
}