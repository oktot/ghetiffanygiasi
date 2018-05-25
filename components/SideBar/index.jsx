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
		<a href='/about/'>Ghế tiffany giá sỉ</a>
		<a href='http://midorishop.com.vn'>Thương hiệu Midori</a>
		<a href='/payments/'>How to pay? Thanh toán</a>
		<a href='/help'>Hướng dẫn đặt - mua hàng</a>
		</div>
            </div>
        );
    }
}

export default SideBar
