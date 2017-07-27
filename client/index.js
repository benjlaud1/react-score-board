/*
    ./client/index.js
    webpack entry file
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const PLAYERS = [
    {
        name: "Ben Lauderbaugh",
        score: 35
    },
    {
        name: "Cayla Lauderbaugh",
        score: 36
    },
    {
        name: "Victoria Lauderbaugh",
        score: 30
    },
]

ReactDOM.render( <App players={PLAYERS}/>, document.getElementById('root') );