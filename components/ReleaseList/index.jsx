import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import Ink from 'react-ink'

import './style.scss'

class ReleaseList extends React.Component {
    render() {
        const pageLinks = []

        const sortedPages = sortBy(this.props.route.pages, (page) => access(page, 'data.id')).reverse()
        sortedPages.forEach((page) => {
            if (access(page, 'file.ext') === 'md' && access(page, 'data.category') === 'releases') {
                const id = access(page, 'data.id') || page.path
                const key = access(page, 'data.key') || page.path
                const title = access(page, 'data.title') || page.path

                pageLinks.push(
                    <Link to={ prefixLink(page.path) } className='release-list__link' key={ key } activeClassName='is-selected' >
                        <img className='release-list__cover' src={ prefixLink(`${ page.path }cover.jpg`) } />
                        <div className='release-list__title'>{ title }</div>
                        <Ink />
                    </Link>
                )
            }
        })

        return (
            <div className='release-list'>
                { pageLinks }
            </div>
        );
    }
}

ReleaseList.propTypes = {
    route: React.PropTypes.object,
}

export default ReleaseList
