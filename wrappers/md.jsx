import React from 'react'
import Helmet from 'react-helmet'
import DocumentTitle from 'react-document-title'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomePage from '../components/HomePage'
import ReleasePage from '../components/ReleasePage'
import ReleaseList from '../components/ReleaseList'
import ArtistList from '../components/ArtistList'
import ArtistPage from '../components/ArtistPage'
import EventList from '../components/EventList'
import EventPage from '../components/EventPage'
import SideBar from '../components/SideBar'
import { config } from 'config'

import './style.scss'

class MarkdownWrapper extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data
        let layout, template

        layout = post.layout

        if (layout === 'HomePage') {
            template = <HomePage {...this.props} />
        } else if (layout === 'Releases') {
            template = <ReleaseList {...this.props} />
        } else if (layout === 'ReleasePage') {
            template = <ReleasePage {...this.props} />
        } else if (layout === 'Artists') {
            template = <ArtistList {...this.props} />
        } else if (layout === 'ArtistPage') {
            template = <ArtistPage {...this.props} />
        } else if (layout === 'Events') {
            template = <EventList {...this.props} />
        } else if (layout === 'EventPage') {
            template = <EventPage {...this.props} />
        }

        return (
            <DocumentTitle title={ `${post.title} • ${config.siteTitle}` }>
                <div className='flex-sticky'>
                    <div className='flex-sticky__content'>
                        <Header {...this.props} />
			<Helmet

			 meta={[
                  {
                      name: 'keywords',
                      content: `${post.keywords}`,
                  },
		  {
                      name: 'google-site-verification',
                      content: `Hge9PQ8E1-XySRnTbzWVISM19EkdWQt9MqKV_bu4zKc`,
                  },
		  {
                      name: 'description',
                      content: `${post.meta}`,
                  },
                  {
                      name: 'og:title',
                      content: `${post.title}`,
                  },
                ]}
		/>

                        <div className='main-container'>
                            <div className='main-container__content'>
                                { template }
                            </div>
                            <SideBar {...this.props} />
                        </div>

                    </div>
                    <div className='flex-sticky__footer'>
                        <Footer {...this.props} />
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}

MarkdownWrapper.propTypes = {
    route: React.PropTypes.object,
}

export default MarkdownWrapper
