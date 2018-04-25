import React from 'react'
import Youtube from '../Youtube'

import './style.scss'

class SideBar extends React.Component {
    render() {

        return (
            <div className='sidebar'>
                <Youtube {...this.props} />
		<div className='sidebar__sponsor'>Sponsor</div>
                <div className='sidebar__title'>Important</div>
		<div className='sidebar__link'>
		<a href='/about'>About Bakadono</a>
		<a href='/events/dieu-kien-du-hoc-nhat-ban/'>Điều Kiện Du Học Nhật Bản</a>
		<a href='/nihongo'>Giới thiệu về Tiếng Nhật</a>
		<a href='http://thaoam.com'>Phát triển giao diện Thảo Am</a>
		<a href='/payments'>How to pay? Thanh toán</a>
		</div>
            </div>
        );
    }
}

export default SideBar
