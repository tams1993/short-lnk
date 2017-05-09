import {Meteor} from 'meteor/meteor';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Tracker} from 'meteor/tracker';
import {routes, onAuthChange} from '../imports/routes/routes';
import '../imports/startup/simple-schema-configuration.js';
import {Session} from 'meteor/session';

Tracker.autorun(() => {

    const isAuthenticated = !!Meteor.userId();
    onAuthChange(isAuthenticated);

});


class App extends Component {
    render() {
        return (

            <div>
                {routes}
            </div>
        );
    }
}


Meteor.startup(() => {

    Session.set('showVisible', true);
    ReactDOM.render(<App />, document.getElementById('app'));
});