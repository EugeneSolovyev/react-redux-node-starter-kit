import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

import Home from './Home';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/home' exact render={() => {
                        <Redirect to='/home/ability' />
                    }} />
                </Switch>
            </div>
        );
    }
}

export default App;