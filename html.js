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
          {head.meta.toComponent()}
        </head>
        <body>
          <div id="react-mount" style={{width:'100%'}} dangerouslySetInnerHTML={ {    __html: this.props.body} } />
          <script src={ prefixLink(`/bundle.js?t=${BUILD_TIME}`) } />
		          { process.env.NODE_ENV === 'production' ? GoogleAnalyticsSetup : null }
        </body>
      </html>
    )
  },
})

function buildGoogleAdSense() {
  const js = `
  (adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: 'ca-pub-IDHERE',
    enable_page_level_ads: true
  });
  `;

  return <script
    dangerouslySetInnerHTML={{ __html: js }}
  />;
}

function buildGoogleAnalyticsSetup() {
  const js = `
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-IDHERE-1', 'auto');
  ga('send', 'pageview');
  `;

  return <script
    dangerouslySetInnerHTML={{ __html: js }}
  />;
}
