import React from "react";
import { useState } from "react";
import './Timer.css'

function Timer(props) {

    return <div className="timer-div">
        <div>Timer :  {props.time} second</div>
    </div>
}
export default Timer;