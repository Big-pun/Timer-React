import React, { useEffect } from 'react';
import { useState } from 'react';

import './Timer.css';

const Timer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "June, 01, 2025";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='timer'>
            <h1>Timer</h1>
            <p>{deadline}</p>
            <div className='countdown'>
                <p>{days} days</p>
                <p>{hours} hours</p>
                <p>{minutes} minutes</p>
                <p>{seconds} seconds</p>
            </div>
        </div>
    );
};

export default Timer;