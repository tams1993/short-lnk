import {BrowserRouter as Router, Route, Switch, Link as mLink, Redirect} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';
import React, {Component} from 'react';


import Signup from '../ui/Signup';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';
import createHistory from 'history/createBrowserHistory';

const unAuthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];
const history = createHistory(this.props);

export const onAuthChange = (isAuthenticated) => {
    const pathName = history.location.pathname;
    const isUnAuthenticatedPage = unAuthenticatedPages.includes(pathName);
    const isAuthenticatedPage = authenticatedPages.includes(pathName);


    if (isUnAuthenticatedPage && isAuthenticated) {
        history.push('/links');
    } else if (isAuthenticatedPage && !isAuthenticated) {
        history.push('/');
    }
};

export const routes = (
    <Router >
        <div>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/links" exact component={Link}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
);