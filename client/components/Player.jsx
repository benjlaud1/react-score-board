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