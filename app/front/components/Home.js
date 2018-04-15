import React from 'react';
import {
	withRouter
} from "react-router-dom";
import {
	bindActionCreators
} from 'redux';
import {
	connect
} from 'react-redux';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			init: this.props.init,
		}
	}
    render() {
        return (
            <div>It is Home Component! {this.state.init}</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        init: state.init
    }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
 
	}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
