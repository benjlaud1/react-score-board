/*
    ./client/components/App.jsx
*/

import React from 'react';
import Header from './Header.jsx';
import Player from './Player.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div className="scoreboard">
                <Header title={this.props.title}/>
                <div className="players">
                    <Player name={this.props.name} score={this.props.score}/>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    title: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number
}

App.defaultProps = {
    title: "Scoreboard",
    name: "-",
    score: 0
}
