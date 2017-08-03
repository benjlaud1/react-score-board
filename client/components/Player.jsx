/*
    ./client/components/Player.jsx
*/

import React from 'react';
import Counter from './Counter.jsx';

export default class Player extends React.Component {
    constructor(props) {
        super(props);
        this.changeScore = this.changeScore.bind(this);
    }

    changeScore(newScore) {
        console.log('====================================');
        console.log('newScore:', newScore);
        console.log('====================================');
        console.log('====================================');
        console.log('this:', this);
        console.log('====================================');
        this.props.onChange(newScore);
    }

    render() {
        return (
            <div className="player">
                <div className="player-name">
                    {this.props.name}
                </div>
                <div className="player-score">
                    <Counter score={this.props.score} onChange={this.changeScore}/>
                </div>
            </div>
        )
    }
}