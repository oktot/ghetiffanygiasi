import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

import './style.scss'
import logoBakaDonoLarge from '../../static/img/svg-icons/bakadono.svg'

class HomePage extends React.Component {
    render() {
        const {route} = this.props
        const page = route.page.data

        return (
            <div className='homepage'>

                <img className='homepage__logo' src={ prefixLink(logoBakaDonoLarge) } alt='Logo'/>

                <h1 className='homepage__title'>{ config.siteTitle }</h1>
                <h2 className='homepage__description'>{ config.siteDescr }</h2>

                <div dangerouslySetInnerHTML={{ __html: page.body}} />

            </div>
        );
    }
}

HomePage.propTypes = {
    page: React.PropTypes.object,
}

export default HomePage
