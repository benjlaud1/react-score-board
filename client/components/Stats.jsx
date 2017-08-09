/*
    ./client/components/Stats.jsx
*/

import React from 'react';

export default class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <table className="stats">
                <tbody>
                    <tr>
                        <td>Players:</td>
                        <td>{this.props.playerCount}</td>
                    </tr>
                    <tr>
                        <td>Total Points:</td>
                        <td>{this.props.scoreTotal}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}