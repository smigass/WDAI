import {useEffect, useState} from "react";

export default function LoginButton({p, q, text}: { p: string, q: string,text:string }) {
    const [blocked, setBlocked] = useState<boolean>(false)

    useEffect(() => {
        if(q === p && p === '') {
            setBlocked(true)
        }
        else {
            setBlocked(false)
        }
    }, [q, p])

    const handleClick = () => {
        if (p === q) {
            alert("Successfully logged in")
            return
        }
        alert("Provided passwords are not the same")
    }

    return (
        <button onClick={handleClick} disabled={blocked}>
            {text}
        </button>
    )
}