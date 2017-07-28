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
                <Header title={this.state.title}/>
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

App.getInitialState = function () {
    return {
        title: "Scoreboard",
        players: {
            name: "-",
            score: 0,
            id: 0
        }
    }
}

App.defaultProps = {
    title: "Scoreboard",
    players: [
        {
            name: "-",
            score: 0,
            id: 0,
        }
    ]
}
