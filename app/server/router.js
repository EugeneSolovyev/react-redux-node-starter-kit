import {
    renderToString
} from 'react-dom/server';
import React from 'react';
import {
    matchPath,
    StaticRouter,
} from 'react-router-dom';

import routes from './routes';
import renderFullPage from './renderFullPage';
import App from '../components/App';

import getCurrentState from '../services/getCurrentState';

export default function router(req, res) {
    const match = routes.reduce((acc, route) => matchPath(req.url, {
        path: route,
        exact: true
    }) || acc, null);

    if (!match) {
        res.status(404).send('page not found');
        return;
    }

    return getCurrentState.withAbility()
        .then(response => {
            const state = {
                list: _.get(response, 'data.rates', {})
            };
            const context = {};

            const html = renderToString(
                <StaticRouter context={context}>
                    <App state={state} />
                </StaticRouter>
            );

            res.status(200).send(renderFullPage(html, state));
        })
        .catch(err => {
            res.status(404).send(`${err}. Ooooooops...`);
        })
}
