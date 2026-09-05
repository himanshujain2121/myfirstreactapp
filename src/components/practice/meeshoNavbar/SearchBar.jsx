import React from "react";
import styles from "./Navbar.module.css";

const SearchBar = () => {
    return (
        <div className={styles.searchBox}>

            <span className={styles.searchIcon}>
                🔍
            </span>

            <input
                type="text"
                placeholder="Try Saree, Kurti or Search by Product Code"
            />

        </div>
    );
};

export default SearchBar;