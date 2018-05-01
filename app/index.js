import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router
} from 'react-router-dom';

import {
	Provider
} from 'react-redux';
import store from './front/store/store.js'

import App from './front/components/App';

ReactDOM.hydrate((
	<Provider store={store}>
		<Router>
			<App state={window.__PRELOADED_STATE_}/>
		</Router>
	</Provider>
), document.getElementById('root'));
