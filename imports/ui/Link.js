import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {Links} from '../api/links';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';

export default (props) => {

    console.log(props);

    if (!Meteor.userId) {
        return (props.history.push('/'));
    } else {
        return (

            <div>
                <PrivateHeader title="Your Link" history={this.props.history}/>
                <LinksList />
                <AddLink />

            </div>
        );
    }


}

// class Link extends Component {
//
//     redirect() {
//         this.props.history.push('/');
//     }
//
//     render() {
//         if (!Meteor.userId) {
//             return (this.redirect.bind(this));
//         } else {
//
//             return (
//
//                 <div>
//
//                     <PrivateHeader title="Your Link" history={this.props.history}/>
//                     <LinksList />
//                     <AddLink />
//
//                 </div>
//             );
//         }
//     }
// }

// export default Link;