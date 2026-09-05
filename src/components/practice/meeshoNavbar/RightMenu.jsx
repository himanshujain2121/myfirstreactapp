import React from "react";
import styles from "./Navbar.module.css";

const RightMenu = () => {
    return (
        <div className={styles.rightMenu}>

            <div className={styles.menuItem}>
                Become a Supplier
            </div>

            <div className={styles.menuItem}>
                Investor Relations
            </div>

            <div className={styles.profile}>
                <span>♙</span>
                <small>Profile</small>
            </div>

            <div className={styles.cart}>
                <span>🛒</span>
                <small>Cart</small>
            </div>

        </div>
    );
};

export default RightMenu;