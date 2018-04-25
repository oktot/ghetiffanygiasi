import React from 'react'
import { RouteHandler, Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import EventList from '../EventList'

import './style.scss'

class ReleasePage extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data

        return (
            <div className='event-page'>
                <div className='event-page__sidebar'>
                    <EventList {...this.props} />
                </div>
                <div className='event-page__content'>
                    <img className='event-page__cover' src={ prefixLink(`${ post.path }cover.jpg`) } alt={ post.title } />
                    <h1 className='event-page__title'>{ post.title }</h1>
                    <div dangerouslySetInnerHTML={ {    __html: post.body} } />
                </div>
            </div>
        );
    }
}

ReleasePage.propTypes = {
    post: React.PropTypes.object,
    pages: React.PropTypes.array,
}

export default ReleasePage
