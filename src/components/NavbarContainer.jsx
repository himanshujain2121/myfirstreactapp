import React from 'react'
import styles from "./Navbar.module.css";

const NavbarContainer = () => {
    const categories = [
        "Popular",
        "Kurti, Saree & Lehenga",
        "Women Western",
        "Lingerie",
        "Men",
        "Kids & Toys",
        "Home & Kitchen",
        "Beauty & Health",
        "Jewellery & Accessories",
        "Bags & Footwear",
        "Electronics",
        "Watches",
        "Sports & Fitness",
        "Car & Motorbike",
        "Office Supplies"
    ];

    return (
        <>
            {/* Top Navbar */}
            <div className={styles.topNavbar}>

                {/* Logo */}
                <div className={styles.logo}>
                    meesho
                </div>

                {/* Search */}
                <div className={styles.searchBox}>

                    <span className={styles.searchIcon}>
                        🔍
                    </span>

                    <input
                        type="text"
                        placeholder="Try Saree, Kurti or Search by Product Code"
                    />

                </div>

                {/* Right Menu */}
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
            </div>

            {/* Category Navbar */}
            <div className={styles.categoryNavbar}>

                {categories.map((category) => (
                    <div
                        key={category}
                        className={styles.category}
                    >
                        {category}
                    </div>
                ))}

            </div>
        </>
    );
};

export default NavbarContainer
