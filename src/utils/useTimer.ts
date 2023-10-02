import { useEffect, useState } from "react";

export default function useTimer() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    useEffect(()=>{
        if(seconds===60){
            setSeconds(0);
            setMinutes((prev)=>prev+1)
        }
        const timeout = setTimeout(()=>{
            setSeconds((cur)=>cur+1)
        },1000)
        return ()=>clearTimeout(timeout);
    },[seconds]);
    return `${minutes>9?minutes:`0${minutes}`}:${seconds>9?seconds:`0${seconds}`}`;
}
