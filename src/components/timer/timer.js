import React from "react";


const Timer = () => {
    const [breakTime, setBreakTime] = React.useState(5);
    const [workTime, setWorkTime]= React.useState(25);
    const [minutes, setMinutes] = React.useState(25);
    const [seconds, setSeconds] = React.useState(0);
    const [timerIsWork, setTimerIsWork] = React.useState(false);
    const [onABreak, setOnABreak] = React.useState(false);
    let countDown;

    const IncBreakTime = () => {
        if (breakTime<60)
        setBreakTime((prevState) => prevState+1);
    }

    const DecBreakTime = () => {
        if (breakTime>1)
        setBreakTime((prevState) => prevState-1);
    }

    const IncWorkTime = () => {
        if (workTime<60)
        {
            setWorkTime((prevState) => prevState+1);
            setMinutes((prevState) => prevState+1);
            setSeconds(0);
        }
                    
    }

    const DecWorkTime = () => {
        if (workTime>1) {
            setWorkTime((prevState) => prevState-1);
            setMinutes((prevState) => prevState-1);
            setSeconds(0);
        }
            
    }

    const PlayPause = () => {
        console.log('1 timer is work = ',timerIsWork);
        console.log('(playPause)on a break = ',onABreak);
        
        if(timerIsWork === false){
            console.log('1 timer is work = ',timerIsWork);
            setTimerIsWork((prevState)=>!prevState);
            console.log('2 timer is work = ',timerIsWork);
            let allSeconds = minutes*60+seconds;
            countDown = setInterval(() => {
                allSeconds--;
                if(allSeconds<1){
                    clearInterval(countDown);
                    console.log('stop');
                    StartBreak();
                }
                    
                displayLeftTime(allSeconds);
                console.log('seconds left: ', allSeconds);   
            }, 500);
        }
        else {
            console.log('3 timer is work = ',timerIsWork);
            clearInterval(countDown);
            setTimerIsWork((prevState)=>!prevState);
            console.log('4 timer is work = ',timerIsWork);
        }
        
    }
    
    const displayLeftTime = (allSeconds) => {
        setMinutes(Math.floor(allSeconds/60));
        setSeconds(allSeconds%60);
    }

    const StartBreak = () => {
        if (onABreak === false) {
            console.log('onABreak = ', onABreak);
            console.log('Break started');
            setMinutes(breakTime);
            setSeconds(0);
            //setTimerIsWork((prevState) => !prevState);
            setOnABreak((prevState) => !prevState);
            console.log('2onABreak = ', onABreak);
        }
        else {
            console.log('onABreak = ', onABreak)
            console.log('Work started');
            setMinutes(workTime);
            setSeconds(0);
            //setTimerIsWork((prevState) => !prevState);
            setOnABreak((prevState) => !prevState);
        }
        PlayPause();
    }

    const RESET = () => {
        clearInterval(countDown);
        setTimerIsWork(false);
        setMinutes(25);
        setSeconds(0);
        setBreakTime(5)
        setWorkTime(25);
    }

    return { breakTime, workTime, minutes,seconds, IncBreakTime, DecBreakTime, IncWorkTime, DecWorkTime, PlayPause, RESET };

}

export default Timer;