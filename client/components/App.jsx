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
                    <Player players={this.props.players}/>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    title: React.PropTypes.string.isRequired,
    players: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        score: React.PropTypes.number.isRequired
    })).isRequired
}

App.defaultProps = {
    title: "Scoreboard",
    players: [
        {
            name: "-",
            score: 0
        }
    ]
}
