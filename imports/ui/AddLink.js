import React, {Component} from 'react';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';

export default class AddLink extends Component {


    onSubmit(e) {
        const url = this.refs.url.value.trim();
        e.preventDefault();

        if (url) {
            Meteor.call('links.insert', url);
            this.refs.url.value = '';
        }

    }
    
    render() {
        return (

            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" ref="url" placeholder="URL"/>
                    <button >Add Link</button>
                </form>
            </div>

        );
    }
}