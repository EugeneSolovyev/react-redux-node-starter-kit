import {
	createStore,
	applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import { 
	composeWithDevTools 
} from 'redux-devtools-extension';

function mainReducer(store = {}, action) {
	return {
		init: 'ROMA VERNIS YA VSE PROSHU'
	};
}

const store = createStore(
	mainReducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
);

export default store;
