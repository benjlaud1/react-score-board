/*
    ./client/components/Header.jsx
*/

import React from 'react';
import Stats from './Stats.jsx';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Stats playerCount={this.props.playerCount}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

