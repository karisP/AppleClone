import styles from './Navbar.module.css';
const Navbar = () => {
    return(
        <div className={styles.container}>
            <div className={styles.hamburger}></div>
            <div className={styles['apple-icon']}></div>
            <div className={styles['cart-icon']}></div>
        </div>
    )
}
export default Navbar;