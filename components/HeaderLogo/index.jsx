import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Ink from 'react-ink'

import './style.scss'
import iconBakadonoLogo from '../../static/img/svg-icons/bakadono.svg'

class HeaderLogo extends React.Component {
    render() {

        return (
            <div className='header-logo'>

                <Link to={ prefixLink('/')} className='header-logo__link' activeClassName='is-selected' onlyActiveOnIndex>
                    <img className='header-logo__link-icon' src={ prefixLink(iconBakadonoLogo) }/>
                    <div className='header-logo__link-name'>
                        <div className='header-logo__link-name-title'>{ config.siteTitle }</div>
                        <div className='header-logo__link-name-subtitle'>{ config.siteDescr }</div>
                    </div>
                    <Ink />
                </Link>

            </div>
        );
    }
}

export default HeaderLogo
