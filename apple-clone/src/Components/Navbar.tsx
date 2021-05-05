import styles from './Navbar.module.css';
const Navbar = () => {
    return(
        <div className={styles.container}>
            <div className={styles.hamburger}>
                <div></div>
                <div></div>
            </div>
            <div className={styles['apple-icon']}></div>
            <div className={styles.tablet}>
                <div>Mac</div>
                <div>iPad</div>
                <div>iPhone</div>
                <div>Watch</div>
                <div>TV</div>
                <div>Music</div>
                <div>Support</div>
                <div className={styles.search}></div>
            </div>
            <div className={styles['cart-icon']}></div>
        </div>
    )
}
export default Navbar;