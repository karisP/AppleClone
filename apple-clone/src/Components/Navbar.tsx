import styles from './Navbar.module.css';
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.hamburger}>
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
                <div className={styles['cart-icon']}></div>
            </div>
        </div>
    )
}
export default Navbar;