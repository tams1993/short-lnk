import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom';
import {Accounts} from 'meteor/accounts-base';



class Signup extends Component {

    constructor() {
        super();
        this.state = {
            error: ''
        };

    }

    componentDidMount() {

        if (Meteor.userId()) {
            <Link to="/links"/>
            console.log('back Call');

        }
    }

    onSubmit(e) {
        e.preventDefault();

        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        if(password.length < 9) {
            return this.setState({error: 'Password must be more than 9 characters long'});
        }

        Accounts.createUser({
            email,
            password
        }, (error)=> {

            if(error) {

                this.setState({
                    error: error.reason
                });

            } else {
                this.setState({
                    error: ''
                })
                this.props.history.replace('/links');

            }


        });


        // this.setState({
        //     error: 'Something wrong'
        // });
    }

    render() {
        return (

            <div>
                <h1>Join Short Link</h1>

                {this.state.error ? <p>{this.state.error}</p> : undefined }

                <form onSubmit={this.onSubmit.bind(this)} noValidate>
                    <input type="email" name="email" placeholder="Email" ref="email"/>
                    <input type="password" name="password" placeholder="Password" ref="password"/>
                    <button >Create Account</button>
                </form>

                <Link to="/">Already have an account? </Link>
            </div>
        );

    }
}

export default Signup;