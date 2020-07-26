import React, { useState } from 'react';

function Room(props) {
    const [lit, selit] = useState(true);
    const [brightness, setBrightness] = useState(10);

    const BRIGHT = () => {
        if (lit) {
            return (
                <div className>
                    <h4>BRIGHTNESS</h4>
                    <h6>{brightness}</h6>
                    <button className="brightness" onClick={() => { if (brightness <= 2) { return null } else { setBrightness(brightness - 1) } }}>-</button>
                    <button className="brightness" onClick={() => { if (brightness > 9) { return null } else { setBrightness(brightness + 1) } }}>+</button>
                </div>
            );
        } else {
            return <div></div>
        }
    }

    const brt = () => {
        if (lit) {
            return (
                { backgroundColor: `rgba(0,0,0,${1- brightness/10})` }
            );
        } else {
            return null
        }
    }

    return (
        <div className={`center room ${lit ? 'light' : 'dark'}`} style={brt()}>
            <button onClick={() => selit(true)} className="on_off">
                ON
            </button>
            <button onClick={() => selit(false)} className="on_off">
                OFF
            </button>
            <div>
                <h3>Light is  <b>{lit ? 'ON' : 'OFF'}</b></h3>
            </div>
            {BRIGHT()}
        </div>
    );
}

export default Room;