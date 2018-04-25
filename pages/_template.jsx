import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet';
import { config } from 'config'

class Template extends React.Component {
    render() {
        const {location, children} = this.props
        const meta = [{
            name: 'description',
            content: config.siteDescription
        },
	{
            property: 'og:url',
            content: config.siteUrl + this.props.location.pathname
        }, {
            property: 'og:description',
            content: config.siteDescription
        }]
        return (
            <span className='template'>
	    <Helmet meta={meta} /> 
                { children }
            </span>
        );
    }
}

Template.propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object,
    route: React.PropTypes.object,
}

export default Template
