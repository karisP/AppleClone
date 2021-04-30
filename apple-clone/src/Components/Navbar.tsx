import * as React from 'react';
import styles from './Navbar.module.css';
console.log(styles);
const Navbar = () => {
    return(
        <div className={styles.container}>
            <div className={styles.hamburger}>1</div>
            <div className={styles['apple-icon']}>2</div>
            <div className={styles['cart-icon']}>3</div>
        </div>
    )
}
export default Navbar;