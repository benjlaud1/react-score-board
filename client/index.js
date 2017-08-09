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
        score: 35,
        id: 0,
    },
    {
        name: "Cayla Lauderbaugh",
        score: 36,
        id: 1,
    },
    {
        name: "Victoria Lauderbaugh",
        score: 30,
        id: 2,
    },
    {
        name: "Ottoleigh Lauderbaugh",
        score: 26,
        id: 4,
    },
]

const addPlayer = (addName) => {
    PLAYERS.push({
        name: addName,
        score: 0,
        id: PLAYERS.length
    })
}

ReactDOM.render( <App players={PLAYERS} addPlayer={addPlayer}/>, document.getElementById('root') );