import React, { useEffect, useState } from "react";
import './css/Stopwatch.css';

const Stopwatch = () => {
   

    return (
        <div>
            <div className="stopwatch_interface">
                {/* <div className="inputs">
                        <input className="hh_input" placeholder="hh"/>
                        <input className="mm_input" placeholder="mm"/>
                        <input className="ss_input" placeholder="ss"/>
                    </div> */}

                <div className="operation_buttons">
                    {/* <button onClick={handleStartButton}>Start</button>
                    <button onClick={handleStopButton}>Stop</button>
                    <button onClick={handlePauseButton}>Pause</button> */}
                </div>

                <div className="display">
                    <h1>00:</h1>
                    <h1>00:</h1>
                    <h1>00</h1>
                </div>

            </div>
        </div>
    )
};

export default Stopwatch;