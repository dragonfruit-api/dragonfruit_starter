import React from 'react';
import ReactDOM from 'react-dom';
import AtRest from 'react-at-rest';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

AtRest.Store.API_PATH_PREFIX = 'http://localhost:1235/api';

ReactDOM.render((<App />), document.getElementById('root'));
registerServiceWorker();
