import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';
import createHistory from 'history/createBrowserHistory';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            redirect: false,
            error:''
        };


    }

    componentDidMount() {

        if (Meteor.userId()) {
            createHistory(this.props).push('/links');
            console.log('back Call');

        }
    }

    onSubmit(e) {
        e.preventDefault();

        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();
        Meteor.loginWithPassword({email}, password, (err) => {

            if(err) {

                this.setState({
                    error: err.reason
                })

            } else{
                this.setState({
                    error: ''
                })
                this.props.history.replace('/links');
            }

        });

    }

    render() {

        if (Meteor.userId()) {
            return <Redirect to="/links"/>;

        } else {
            return (

                <div >
                    <h1>Short Link</h1>

                    {this.state.error ? <p>{this.state.error}</p> : undefined }

                    <form onSubmit={this.onSubmit.bind(this)} noValidate>
                        <input type="email" name="email" placeholder="Email" ref="email"/>
                        <input type="password" name="password" placeholder="Password" ref="password"/>
                        <button >Login</button>
                    </form>

                    <Link to="/signup"> Have an account? </Link>
                </div>

            );
        }


    }
}

export default Login;