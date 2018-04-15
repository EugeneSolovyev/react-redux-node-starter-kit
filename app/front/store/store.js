// TODO Why Redux-DevTool doesn't work? How to make to work it correct?

import {
	createStore,
	applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

function mainReducer(store = {}, action) {
	return {
		init: 'WORKS!!!',
	};
}

const store = createStore(
	mainReducer,
	applyMiddleware(thunk)
);

export default store;
