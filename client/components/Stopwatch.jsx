/*
    ./client/components/Stopwatch.jsx
*/

import React from 'react';

export default class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false
        }
    }

    render() {
        let startStop
        if (this.state.running) {
            startStop = <button>Stop</button>
        } else {
            startStop = <button>Start</button>
        }
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <div className="stopwatch-time">0</div>
                { startStop }
                <button>Reset</button>
            </div>
        )
    }

}