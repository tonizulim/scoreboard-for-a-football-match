import { useEffect, useState, useRef } from 'react'
import './sat.css';

import Score from './score';

function Sat(){

    const [isRunning, setIsRunning]=useState(false);
    const [Time, setTime] = useState(0);
    const StartTime=useRef(0);
    const interval = useRef(null);

    useEffect(()=>{
        if(isRunning){
            interval.current=setInterval(()=>{
                setTime(Date.now() - StartTime.current);
            },1000);
        }
        return ()=>clearInterval(interval.current);
    },
    [isRunning]
    )

    function start(){
        setIsRunning(true);
        StartTime.current=Date.now()-Time;
    }

    function pause(){
        setIsRunning(false);
    }

    function restart(){
        setIsRunning(false);
        setTime(0);
        window.location.reload();
    }

    function formatTime(){
        let min=Math.floor(Time / 1000 / 60 % 60);
        let sec=Math.floor(Time / 1000  % 60);

        min<10? min="0"+min : min;
        
        sec<10? sec="0"+sec : sec;

        if(min==90){
            restart();
        }
        return `${min}:${sec}`;
    }

    function start_pause(){
        if(isRunning){
            pause();
        }
        else{
            start();
        }
    }

    return(
        <>
            <div id="main_box">

                <div id="stoperica">
                    <h1>{formatTime()}</h1>
                    <button onClick={start_pause}>{isRunning? "pause":"start"}</button>
                    <button onClick={restart}>reset</button>
                </div>
                
                <Score isRunning={isRunning} Time={Time}></Score>
                
            </div>
        
        </>
    )
}

export default Sat;