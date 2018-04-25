import React from 'react'

import './style.scss'

class Youtube extends React.Component {
    render() {

        return (
            <div className='youtube'>
                <div className='youtube__wrapper'>
                    <iframe className='youtube__iframe' data-autoplay='1' frameborder='0'  src='https://www.youtube.com/embed/fev33_mIIUA' allowFullScreen />
                </div>
            </div>
        );
    }
}

export default Youtube
