import React, { useEffect, useState } from 'react';

import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';

const AboutMe = () => {
    // this will be used to open/close the menu
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        document.title = 'Jaxon Adams - About Me';
    }, []);

    return (
        <div className='about-me'>
            <Header showMenu={showMenu} setShowMenu={setShowMenu} />
            <Menu showMenu={showMenu} />
            Hello, world!
        </div>
    );
};

export default AboutMe;