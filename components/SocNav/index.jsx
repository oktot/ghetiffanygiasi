import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Ink from 'react-ink'

import './style.scss'
import iconYoutube from '../../static/img/svg-icons/youtube.svg'
import iconFacebook from '../../static/img/svg-icons/facebook.svg'
import iconBandcamp from '../../static/img/svg-icons/bandcamp.svg'

class SocNav extends React.Component {
    render() {

        return (
            <div className='socnav'>

                <a href={ config.siteYoutubeUrl } className='socnav__link' target='_blank'>
                    <img className='socnav__link-icon' src={ prefixLink(iconYoutube) }/>
                    <span className='socnav__link-name'>youtube</span>
                    <Ink />
                </a>

                <a href={ config.siteFacebookUrl } className='socnav__link' target='_blank'>
                    <img className='socnav__link-icon' src={ prefixLink(iconFacebook) }/>
                    <span className='socnav__link-name'>facebook</span>
                    <Ink />
                </a>

                <a href={ config.siteBandcampUrl } className='socnav__link' target='_blank'>
                    <img className='socnav__link-icon' src={ prefixLink(iconBandcamp) }/>
                    <span className='socnav__link-name'>bandcamp</span>
                    <Ink />
                </a>

            </div>
        );
    }
}

export default SocNav
