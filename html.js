import React from 'react'
import DocumentTitle from 'react-document-title'
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  displayName: 'HTML',
  propTypes: {
    body: React.PropTypes.string,
  },
  render() {
    const {body, route} = this.props
    const title = DocumentTitle.rewind();
	const head = Helmet.rewind();
	const GoogleAdSenseSetup = buildGoogleAdSense();
	const GoogleAnalyticsSetup = buildGoogleAnalyticsSetup();

    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={ {    __html: require('!raw!postcss!./public/styles.css')} } />
    }

    return (
      <html lang="en">
        <head>
		<script async src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' />
		  { process.env.NODE_ENV === 'production' ? GoogleAdSenseSetup : null }
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=5.0" />
          <title>{ title }</title>
          { css }
          <link rel="shortcut icon" href='/bakadono_favicon_32plus144@.png' />
          <link rel="apple-touch-icon" href='/bakadono_favicon_32plus144@.png' />
          <meta property="og:image" content='/bakadono-144@.png' />
	  <meta name="google-site-verification" content='d9ktQdSdvZcuuwxBsSsreBoPrB667YE1gWzvdlYHhV0' />
          <meta name="format-detection" content='telephone=no' />
          {head.meta.toComponent()}
        </head>
        <body>
          <div id="react-mount" style={{width:'100%'}} dangerouslySetInnerHTML={ {    __html: this.props.body} } />
          <script src={ prefixLink(`/bundle.js?t=${BUILD_TIME}`) } />
          <script async src='https://www.googletagmanager.com/gtag/js?id=UA-118443043-1' />
		          { process.env.NODE_ENV === 'production' ? GoogleAnalyticsSetup : null }
        </body>
      </html>
    )
  },
})

function buildGoogleAdSense() {
  const js = `
  (adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: 'ca-pub-4519014656821945',
    enable_page_level_ads: true
  });
  `;

  return <script
    dangerouslySetInnerHTML={{ __html: js }}
  />;
}

function buildGoogleAnalyticsSetup() {
  const js = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-118443043-1');
  `;

  return <script
    dangerouslySetInnerHTML={{ __html: js }}
  />;
}
