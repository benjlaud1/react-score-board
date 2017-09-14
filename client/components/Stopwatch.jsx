/*
    ./client/components/Stopwatch.jsx
*/

import React from 'react';

export default class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <div className="stopwatch-time">0</div>
                <button>Start</button>
                <button>Reset</button>
            </div>
        )
    }

}