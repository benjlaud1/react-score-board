/*
    ./client/components/App.jsx
*/

import React from 'react';
import Header from './Header.jsx';
import Player from './Player.jsx';
const players = [
    {
        name: "ben",
        score: 30,
        id: 1
    }
]

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Scoreboard",
            playerCount: this.props.players.length,
            players: this.props.players,
        };
    }

    render() {
        return (
            <div className="scoreboard">
                <Header title={this.state.title} playerCount={this.state.playerCount}/>
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