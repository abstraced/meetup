import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import * as atatus from 'atatus-spa';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
atatus.config('adde2723cba74f219e6d43f78ac40f2e').install();



