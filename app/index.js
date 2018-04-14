import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router
} from 'react-router-dom';

import App from './components/App';

ReactDOM.hydrate((
    <Router>
        <App state={window.__PRELOADED_STATE__}/>
    </Router>
), document.getElementById('root'));
