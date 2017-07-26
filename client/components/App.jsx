/*
    ./client/components/App.jsx
*/

import React from 'react';
import Header from './Header.jsx'

export default class App extends React.Component {
    render() {
        return (
            <div className="scoreboard">
                <Header title={this.props.title}/>
                <div className="players">
                    <div className="player">
                        <div className="player-name">
                            Ben Lauderbaugh
                        </div>
                        <div className="player-score">
                            <div className="counter">
                                <button className="counter-action decrement"> - </button>
                                <div className="counter-score">31</div>
                                <button className="counter-action increment"> + </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    title: React.PropTypes.string
}

App.defaultProps = {
    title: "Scoreboard"
}
