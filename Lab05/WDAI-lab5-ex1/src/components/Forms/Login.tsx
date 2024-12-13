import styles from '../styles/Forms.module.css'
import {useState} from "react";
import LoginButton from "./LoginButton.tsx";

export default function Login() {
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    return (
        <div className={styles.passwordContainer}>
            <label htmlFor="password">Password</label>
            <input id={"password"} onChange={e => setPassword(e.target.value)}/>
            <label htmlFor="password_confirmation">Confirm Password</label>
            <input id={"password_confirmation"} onChange={e => setConfirmPassword(e.target.value)}/>
            <div>
                <LoginButton p={password} q={confirmPassword} text={'Login'}/>
            </div>
        </div>
    )
}