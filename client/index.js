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
        id: 1,
    },
    {
        name: "Cayla Lauderbaugh",
        score: 36,
        id: 2,
    },
    {
        name: "Victoria Lauderbaugh",
        score: 30,
        id: 3,
    },
]

ReactDOM.render( <App players={PLAYERS}/>, document.getElementById('root') );