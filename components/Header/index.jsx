import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Ink from 'react-ink'
import HeaderLogo from '../HeaderLogo'
import MainMenu from '../MainMenu'
import SocNav from '../SocNav'

import './style.scss'

class Header extends React.Component {
    render() {

        return (
            <div>

                <div className='header'>
                    <div className='header__wrapper'>

                        <div className='header__header-logo'>
                            <HeaderLogo {...this.props} />
                        </div>

                        <div className='header__mainmenu'>
                            <MainMenu {...this.props} />
                        </div>

                        <div className='header__socnav'>
                            <SocNav {...this.props} />
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Header
