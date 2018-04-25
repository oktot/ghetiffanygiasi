import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import Ink from 'react-ink'

import './style.scss'

class EventList extends React.Component {
    render() {
        const pageLinks = []

        const sortedPages = sortBy(this.props.route.pages, (page) => access(page, 'data.id')).reverse()
        sortedPages.forEach((page) => {
            if (access(page, 'file.ext') === 'md' && access(page, 'data.category') === 'events') {
                const id = access(page, 'data.id') || page.path
                const key = access(page, 'data.key') || page.path
                const title = access(page, 'data.title') || page.path

                pageLinks.push(
                    <li key={ key }>
                        <Link to={ prefixLink(page.path) } className='event-list__link' activeClassName='is-selected' >
                            <img className='event-list__cover' src={ prefixLink(`${ page.path }cover.jpg`) } />
                            <div className='event-list__title'>{ title }</div>
                            <Ink />
                        </Link>
                    </li>
                )
            }
        })

        return (
            <ul className='event-list'>
                { pageLinks }
            </ul>
        );
    }
}

EventList.propTypes = {
    route: React.PropTypes.object,
}

export default EventList
