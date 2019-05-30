import React from 'react';
import ReactDOM from 'react-dom';
import { items } from './constants';

import App from './App.js';

ReactDOM.render(
    <App items={items} />,
    document.getElementById("root")
);
