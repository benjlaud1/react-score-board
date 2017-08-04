/*
    ./client/components/Counter.jsx
*/

import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.incrementScore = this.incrementScore.bind(this);
        this.decrementScore = this.decrementScore.bind(this);
    }

    incrementScore(e) {
        const score = this.props.score + 1;
        this.props.onChange(score);
    }

    decrementScore(e) {
        const score = (this.props.score - 1 < 0 ? 0 : this.props.score - 1);
        this.props.onChange(score);
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
                <div className="counter-score">{this.props.score}</div>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        )
    }
}