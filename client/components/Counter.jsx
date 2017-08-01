/*
    ./client/components/Counter.jsx
*/

import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.incrementScore = function (e) {
            console.log('====================================');
            console.log(e);
            console.log('====================================');
            this.setState({
                score: (this.state.score + 1)
            })
        }
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