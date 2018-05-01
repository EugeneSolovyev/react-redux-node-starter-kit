import {
    renderToString
} from 'react-dom/server';
import React from 'react';
import {
    matchPath,
    StaticRouter,
} from 'react-router-dom';
import {
	Provider
} from 'react-redux';

import routes from './routes';
import renderFullPage from './renderFullPage';
import App from '../front/components/App';
import store from '../front/store/store';

import getCurrentState from '../services/getCurrentState';

export default function router(req, res) {
    const match = routes.reduce((acc, route) => matchPath(req.url, {
        path: route,
        exact: true
    }) || acc, null);

    if (!match) {
        res.status(404).send('<h1>Sorry...Page not found</h1>');
        return;
    }

    return getCurrentState.init()
        .then(response => {
            const state = {
                list: _.get(response, 'data.rates', {})
            };
            const context = {
                name: 'Romachka vernis pizduk ya vse proshchu'
            };
            const html = renderToString(
                <Provider store={store}>
					<StaticRouter context={context}>
						<App state={state} />
					</StaticRouter>
                </Provider>
            );

            res.status(200).send(renderFullPage(html, state));
        })
        .catch(err => {
            res.status(404).send(`${err}. Ooooooops...`);
        })
}
