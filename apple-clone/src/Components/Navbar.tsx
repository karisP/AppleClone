import React from 'react';
import styles from './Navbar.module.css';
const Navbar = () => {
    const [openNav, setOpenNav] = React.useState<boolean>(false);
    const onClickMobileNav = () => {
        setOpenNav(!openNav);
    }

    return (
        <div className={!openNav ? styles.container : `${styles.container} ${styles.mobile}`}>
            <div>
                <div className={!openNav ? styles.hamburger : `${styles.hamburger} ${styles.close}`} onClick={onClickMobileNav}>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles['apple-icon']}></div>
                <div className={styles.tablet}>
                    <img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_mac_image__fv4ktb435mum_large.svg" alt="mac" />
                    <img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_ipad_image__fefum478f4uq_large.svg" alt="ipad" />
                    <img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_iphone_image__dhepc4hn14cy_large.svg" alt="iphone" />
                    <img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_watch_image__dfo5u4bhooqe_large.svg" alt="watch" />
                    <img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_tv_image__dtzdy60o3imq_large.svg" alt="tv" />
                    <img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_music_image__bewxrazzig02_large.svg" alt="music" />
                    <img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_support_image__b24reo1n4fbm_large.svg" alt="support" />
                    <div className={styles.search}></div>
                </div>
                <div className={!openNav ? styles['cart-icon'] : `${styles['cart-icon']} ${styles.invisible}`}></div>
            </div>
            {
                openNav ?
                <div className={styles['mobile-menu']}>
                    <div className={styles['search-bar']}>
                        <div><div className={styles.search}></div><span>Search apple.com</span></div>
                    </div>
                    <ul>
                        <li><img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_mac_image__fv4ktb435mum_small.svg" alt="mac" /></li>
                        <li><img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_ipad_image__fefum478f4uq_small.svg" alt="ipad" /></li>
                        <li><img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_iphone_image__dhepc4hn14cy_small.svg" alt="iphone" /></li>
                        <li><img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_watch_image__dfo5u4bhooqe_small.svg" alt="watch" /></li>
                        <li><img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_tv_image__dtzdy60o3imq_small.svg" alt="tv" /></li>
                        <li><img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_music_image__bewxrazzig02_small.svg" alt="music" /></li>
                        <li><img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_support_image__b24reo1n4fbm_small.svg" alt="support" /></li>
                    </ul>
                </div> 
                :
                null
            }
        </div>
    )
}
export default Navbar;