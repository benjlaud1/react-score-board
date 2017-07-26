/*
    ./client/components/Header.jsx
*/

import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

Header.propTypes = {
    title: React.PropTypes.string.isRequired
}
