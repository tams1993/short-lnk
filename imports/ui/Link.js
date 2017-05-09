import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilter from './LinksListFilter';

export default (props) => {


    if (!Meteor.userId()) {
        return (props.history.push('/'));
    } else {
        return (

            <div>
                <PrivateHeader title="Your Link" history={props.history}/>
                <div className="page-content">
                    <LinksListFilter />
                    <AddLink />
                    <LinksList />
                </div>
            </div>
        );
    }


}
