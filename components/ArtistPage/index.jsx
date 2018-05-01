import React from 'react'
import { RouteHandler, Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import ArtistList from '../ArtistList'

import './style.scss'

class ReleasePage extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data

        return (
            <div className='artist-page'>
                <div className='artist-page__sidebar'>
                    <ArtistList {...this.props} />
                </div>
                <div className='artist-page__content'>

                    <div className='artist-page__thumbnail'>
                        <img className='artist-page__cover' src={ prefixLink(`${ post.path }${ post.key }.jpg`) } alt={ post.title } />
                    </div>

                    <h1 className='artist-page__title'>{ post.title }</h1>

                    <div className='artist-page__location'>Made in { post.location }</div>

		    <div className='artist-page__prices'>Đơn giá { post.prices } K</div>

                    { !!post.bandcampLabelTrack ? <iframe className='artist-page__iframe-bandcamp' src={`https://bandcamp.com/EmbeddedPlayer/size=large/bgcol=222222/linkcol=4ec5ec/tracklist=false/artwork=small/track=${ post.bandcampLabelTrack }/transparent=true/`} seamless /> : '' }

                    <ul className='artist-page__soc-ul'>
			{ !!post.orders ? <li className='artist-page__soc-li'><a className='artist-page__soc-a' href={ post.orders } target='_blank'>Gọi ngay</a></li> : '' }
			{ !!post.messages ? <li className='artist-page__soc-li'><a className='artist-page__soc-a' href={ post.messages } target='_blank'>Mua qua Facebook</a></li> : '' }
                        { !!post.soundcloud ? <li className='artist-page__soc-li'><a className='artist-page__soc-a' href={ post.location } target='_blank'>Delivery $ { post.soundcloud }</a></li> : '' }
                        { !!post.facebook ? <li className='artist-page__soc-li'><a className='artist-page__soc-a' href={ post.facebook } target='_blank'>Order now</a></li> : '' }
                        { !!post.mixcloud ? <li className='artist-page__soc-li' style={{display:'none'}}><a className='artist-page__soc-a' href={ post.mixcloud } target='_blank'>mc</a></li> : '' }
                        { !!post.youtube ? <li className='artist-page__soc-li' style={{display:'none'}}><a className='artist-page__soc-a' href={ post.youtube } target='_blank'>yt</a></li> : '' }
                        { !!post.discogs ? <li className='artist-page__soc-li' style={{display:'none'}}><a className='artist-page__soc-a' href={ post.discogs } target='_blank'>dc</a></li> : '' }
                        { !!post.bandcamp ? <li className='artist-page__soc-li'><a className='artist-page__soc-a' href={ post.bandcamp } target='_blank'>bc</a></li> : '' }
                        { !!post.website ? <li className='artist-page__soc-li'><a className='artist-page__soc-a' href={ post.website } target='_blank'>Đặt mua</a></li> : '' }
                    </ul>

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
