import React from "react";
import '../../index.css';
import Timer from "../timer/timer";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Clock = () => {
    
    const { breakTime, workTime, IncBreakTime, DecBreakTime, IncWorkTime, DecWorkTime, PlayPause, minutes, seconds, RESET } = Timer();
    
    const minStyle = () => {
        let min = minutes;
        if (min>9) return min;
        else return ("0"+min);
    }

    const secStyle = () => {
        let sec = seconds;
        if (sec>9) return sec;
        else return ("0"+sec);
    }

    return ( 
        <div className="container" >
            
            <div className="frame"> 
                <div className="title"> 
                    <h3>25+5 Clock</h3> 
                </div>
                
                <div className="settings" >
                    <div className="time-set">
                        <div className="label" >
                            Break time
                        </div>
                        
                        <div className="controls">
                            <button onClick={DecBreakTime} >-</button>
                            <h3>{breakTime}</h3>
                            <button onClick={IncBreakTime} >+</button>
                        </div>
                    </div>
                    <div className="time-set">
                        <div className="label" > 
                            Work Time
                        </div>
                        <div className="controls">
                            <button onClick={DecWorkTime} >-</button>
                            <h3>{workTime}</h3>
                            <button onClick={IncWorkTime} >+</button>
                        </div>             
                    </div>                   
                </div>
                
                <div className="display">
                    <h3>Time left:</h3>
                    <div className="time-left">
                        {minStyle()}:{secStyle()}
                    </div>    
                    <div className="controls">
                            <button onClick={PlayPause} ><FontAwesomeIcon icon={faPlay} /></button>
                            <button onClick={RESET} ><FontAwesomeIcon icon={faRotateLeft} /></button>
                    </div>
                     
                    
                </div>
            
            </div>
        </div>
        

    )}

    export default Clock;