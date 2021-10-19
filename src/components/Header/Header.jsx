import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.pic}>
                <img
                    src="https://yt3.ggpht.com/a/AATXAJwCCjylyUjn-aF8DFwh-X1L-xZnAccC4YdmSDP6nw=s900-c-k-c0xffffffff-no-rj-mo" alt=""/>
                Robinson Group
            </div>
            <div className={s.phone}>
                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Telephone_icon_blue_gradient.svg/1200px-Telephone_icon_blue_gradient.svg.png" alt=""/>
                 89547893234
            </div>
            <div className={s.place}>
                <img src = "https://cdn.pixabay.com/photo/2013/07/13/14/05/location-162102_1280.png" alt=""/>
                Saint-Petersburg
            </div>

        </div>

    );
}

export default Header;