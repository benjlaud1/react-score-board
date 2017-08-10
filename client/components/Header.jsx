/*
    ./client/components/Header.jsx
*/

import React from 'react';
import Stats from './Stats.jsx';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.scoreTotal = this.props.players.reduce((a, b) => a + b.score, 0)
    }
    render() {
        return (
            <div className="header">
                <Stats playerCount={this.props.players.length} scoreTotal={this.scoreTotal}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

