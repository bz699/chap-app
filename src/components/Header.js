import React from 'react';
import './Header.css';

const HeaderLogo = 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/c9/f4/3d/c9f43d5f-27e0-e4cd-9778-bc72e7509a70/source/256x256bb.jpg';

function Header() {
    return (
        <header className="header">
            <img src={HeaderLogo} alt='a face with moustache' className='headerLogo'></img>
            <a href="https://framacarte.org/fr/map/implantation-des-cameras-de-videoprotection-a-bord_20547#14/44.8359/-0.5577">Be safe. We are watching.</a>
        </header>
    );
}

export default Header;