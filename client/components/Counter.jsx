/*
    ./client/components/Counter.jsx
*/

import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.incrementScore = this.incrementScore.bind(this);
    }

    incrementScore(e) {
        console.log('====================================');
        console.log(e._targetInst);
        console.log('====================================');
        const score = this.props.score + 1;
        this.props.onChange(score)
    }
    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <div className="counter-score">{this.props.score}</div>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        )
    }
}