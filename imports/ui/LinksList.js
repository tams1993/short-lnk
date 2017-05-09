import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Links} from '../api/links';
import LinksListItem from './LinksListItem';
import {Session} from 'meteor/session';
import Flipmove from 'react-flip-move';

export default class LinksList extends Component {

    constructor(props) {

        super(props);
        this.state = {
            links: []
        };

    }

    componentDidMount() {

        this.linksTracker = Tracker.autorun(() => {
            Meteor.subscribe('links');
            const links = Links.find({
                visible: Session.get('showVisible')
            }).fetch();
            this.setState({
                links
            });
        });


    }

    componentWillUnmount() {

        this.linksTracker.stop();

    }

    renderLinksListItems() {

        if (this.state.links.length === 0) {
            return <div className="item"><p className="item__status-message"> No links found. </p></div>
        }

        return this.state.links.map((link) => {

            const shortUrl = Meteor.absoluteUrl(link._id);

            return (
                //
                //<p key={link._id}>{link.url}</p>

                <LinksListItem key={link._id} shortUrl={shortUrl} {...link} />
            );

        });
    }

    render() {
        return (

            <div >
                <Flipmove maintainContainerHeight={true} >
                    {this.renderLinksListItems()}
                </Flipmove>
            </div>

        );
    }

};