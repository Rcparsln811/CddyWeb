import React from 'react';
import './css/Header.css';
import cddy from './images/yuvarlak.png'

function Header() {
    return (
        <div className='header' >

            <img src={cddy} style={{ width: '100px', paddingLeft: '40px' }} />
            <div className='title'>Cedidiyespor Fifa</div>
            <a className='instatitle' href='https://www.instagram.com/cddyfifa/' >CddyFifa</a>
        </div>
    )
}

export default Header