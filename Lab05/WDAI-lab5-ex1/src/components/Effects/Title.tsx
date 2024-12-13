import {useEffect, useState} from "react";

export default function Title() {
    const [title, setTitle] = useState("Title");

    useEffect(() => {
        document.title = title;
    }, [title]);
    return (
        <>
            <h3>Change Title</h3>
            <input type={"text"}
            onChange={(e) => {
                setTitle(e.target.value)
            }}
            value={title}/>
        </>)
}