// Scoreboard component

import React from 'react';
const Scoreboard = ({ totalClicks, score }) => {
    return (
        <div className="scoreboard">
            <p>Total Clicks: {totalClicks}</p>
            <p>Score: {score}</p>
        </div>
    );
};

export default Scoreboard;
