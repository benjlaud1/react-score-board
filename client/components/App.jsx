/*
    ./client/components/App.jsx
*/

import React from 'react';
import Header from './Header.jsx';
import Player from './Player.jsx';

let addedScores = 0

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Scoreboard",
            playerCount: this.props.players.length,
            scoreTotal: this.props.players.map((player) => player.score).reduce((a, b) => a + b, 0),
            players: this.props.players,
        };
    }

    render() {
        return (
            <div className="scoreboard">
                <Header title={this.state.title} playerCount={this.state.playerCount} scoreTotal={this.state.scoreTotal}/>
                <div className="players">
                    {this.state.players.map(function (player) {
                        return <Player name={player.name} score={player.score} key={player.id}/>
                    })}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    title: React.PropTypes.string.isRequired,
    players: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        score: React.PropTypes.number.isRequired,
        id: React.PropTypes.number.isRequired,
    })).isRequired
}

App.defaultProps = {
    title: "",
    players: [{
        name: "-",
        score: 0,
        id: 0
    }]
}