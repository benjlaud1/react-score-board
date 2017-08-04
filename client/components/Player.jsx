/*
    ./client/components/Player.jsx
*/

import React from 'react';
import Counter from './Counter.jsx';

export default class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            score: this.props.score,
        };
        this.changeScore = this.changeScore.bind(this);
    }

    changeScore(newScore) {
        this.setState({
            score: newScore
        })
    }

    render() {
        return (
            <div className="player">
                <div className="player-name">
                    {this.state.name}
                </div>
                <div className="player-score">
                    <Counter score={this.state.score} onChange={this.changeScore}/>
                </div>
            </div>
        )
    }
}