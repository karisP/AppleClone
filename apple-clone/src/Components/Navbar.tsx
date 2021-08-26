import React from 'react';
import styles from './Navbar.module.css';

interface IProps {
    toggleOverlay: () => void;
    overlay: boolean;
}

const Navbar = (props: IProps) => {
    const [openNav, setOpenNav] = React.useState<boolean>(false);
    const [clickCounter, setClickCounter] = React.useState<number>(0);
    const onClickMobileNav = () => {
        setOpenNav(!openNav);
        setClickCounter(clickCounter + 1);
    };

    return (
        <div className={props.overlay || openNav ? `${styles.container} ${styles['open-nav']}`: styles.container}>
            <div>
                <div className={!openNav ? styles.hamburger : `${styles.hamburger} ${styles.close}`} onClick={onClickMobileNav}>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles['apple-icon']}></div>
                <div className={styles.tablet}>
                    <img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_store_image__d8z9vxma66c2_large.svg" alt="" />
                    <img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_mac_image__fv4ktb435mum_large.svg" alt="mac" />
                    <img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_ipad_image__fefum478f4uq_large.svg" alt="ipad" />
                    <img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_iphone_image__dhepc4hn14cy_large.svg" alt="iphone" />
                    <img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_watch_image__dfo5u4bhooqe_large.svg" alt="watch" />
                    <img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_tv_image__dtzdy60o3imq_large.svg" alt="tv" />
                    <img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_music_image__bewxrazzig02_large.svg" alt="music" />
                    <img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_support_image__b24reo1n4fbm_large.svg" alt="support" />
                    <button onClick={props.toggleOverlay} className={styles.search}></button>
                </div>
                <div className={!openNav ? styles['cart-icon'] : `${styles['cart-icon']} ${styles.invisible}`}></div>
            </div>
            <div className={props.overlay ? styles['lg-search-dropdown'] : styles.hidden}>
                <div className={styles['search-bar']}>
                    <div>
                        <div className={styles.search}></div>
                        <span>Search apple.com</span>
                        <div className={styles['close-icon']} onClick={props.toggleOverlay}>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <div className={styles.content}>
                        <div>Quick Links</div>
                        <ul>
                            <li>Visiting an Apple Store FAQ</li>
                            <li>Shop Apple Store Online</li>
                            <li>Accessories</li>
                            <li>AirPods</li>
                            <li>AirTag</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={clickCounter === 0 ? styles.hidden : !openNav ? styles['closed-menu'] : styles['mobile-menu']}>
                <div className={styles['search-bar']}>
                    <div><div className={styles.search}></div><span>Search apple.com</span></div>
                </div>
                <ul>
                    <li><img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_store_image__d8z9vxma66c2_small.svg" alt="store" /></li>
                    <li><img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_mac_image__fv4ktb435mum_small.svg" alt="mac" /></li>
                    <li><img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_ipad_image__fefum478f4uq_small.svg" alt="ipad" /></li>
                    <li><img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_iphone_image__dhepc4hn14cy_small.svg" alt="iphone" /></li>
                    <li><img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_watch_image__dfo5u4bhooqe_small.svg" alt="watch" /></li>
                    <li><img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_tv_image__dtzdy60o3imq_small.svg" alt="tv" /></li>
                    <li><img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_music_image__bewxrazzig02_small.svg" alt="music" /></li>
                    <li><img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_support_image__b24reo1n4fbm_small.svg" alt="support" /></li>
                </ul>
            </div>

        </div>
    )
}
export default Navbar;