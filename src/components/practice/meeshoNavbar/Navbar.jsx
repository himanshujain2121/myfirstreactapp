import React from "react";
import styles from "./Navbar.module.css";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import RightMenu from "./RightMenu";
import CategoryMenu from "./CategoryMenu";

const Navbar = () => {
    return (
        <>
            <div className={styles.topNavbar}>
                <Logo />
                <SearchBar />
                <RightMenu />
            </div>

            <CategoryMenu />
        </>
    );
};

export default Navbar;