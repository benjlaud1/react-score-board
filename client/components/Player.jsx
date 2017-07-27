/*
    ./client/components/Player.jsx
*/

import React from 'react';
import Counter from './Counter.jsx';

export default class Player extends React.Component {
    render() {
        return (
            <div className="player">
                <div className="player-name">
                    {this.props.name}
                </div>
                <div className="player-score">
                    <Counter score={this.props.score}/>
                </div>
            </div>
        )
    }
}