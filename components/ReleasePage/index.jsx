import React from 'react'
import { RouteHandler, Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import ReleaseList from '../ReleaseList'

import './style.scss';

class ReleasePage extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data

        return (
            <div className='release-page'>
                <div className='release-page__sidebar'>
                    <ReleaseList {...this.props} />
                </div>
                <div className='release-page__content'>
                    <h1 className='release-page__title'>{ post.title }</h1>
                    <img className='release-page__cover' src={ prefixLink(`${ post.path }cover.jpg`) } alt={ post.title } />
                    { !!post.bandcampAlbum ? <iframe className='release-page__iframe-bandcamp' src={`https://bandcamp.com/EmbeddedPlayer/album=${ post.bandcampAlbum }/size=large/bgcol=ccc/linkcol=4ec5ec/artwork=small/transparent=true/`} seamless /> : '' }

		    { !!post.YoutubeID ? 
			         <div className='youtube'>
					 <div className='youtube__wrapper'>
						 <iframe className='youtube__iframe' data-autoplay='1' frameborder='0'  src={`https://www.youtube.com/embed/${ post.YoutubeID }`} allowFullScreen />
					</div>
				 </div> : '' }
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
