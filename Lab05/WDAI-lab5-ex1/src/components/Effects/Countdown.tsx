import {useEffect, useState} from "react";

export default function Countdown() {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState<number>(15000);

    useEffect(() => {
        let intervalID: number;
        if (isActive) {
            intervalID = setInterval(() => {
                console.log('ing')
                if (timeLeft > 0) {
                    setTimeLeft(timeLeft - 10);
                }
            }, 10);
        }
        return () => {
            if (intervalID) {
                clearInterval(intervalID);
            }
        }
    }, [isActive, timeLeft]);


    return (
        <div>
            <h1>Odliczanie</h1>
            Pozostały czas: {(timeLeft / 1000).toFixed(1)}sek
            <button onClick={() => setIsActive(!isActive)} disabled={timeLeft <= 0}>
                {timeLeft <= 0 ? 'Odliczanie zakończone.' : (isActive ? 'Stop' : 'Start')}
            </button>
        </div>
    )
}