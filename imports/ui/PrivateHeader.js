import React, {Component, PropTypes} from 'react';

export default class PrivateHeader extends Component {


    onLogout() {

        Accounts.logout(() => {
            this.props.history.push('/');
        });

    }

    render() {

        return (
            <div>
                <p>{this.props.title}</p>
                <button onClick={this.onLogout.bind(this)}>Logout</button>
            </div>
        );
    }
}

PrivateHeader.propTypes = {
    title: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired
};