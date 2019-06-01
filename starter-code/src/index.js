import React from 'react';
import ReactDOM from 'react-dom';
import { items, heroText } from './constants';

import App from './App.js';

ReactDOM.render(
    <App items={items} heroText={heroText}>
    </App>,
    document.getElementById("root")
);
