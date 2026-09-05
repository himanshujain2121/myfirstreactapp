import React from "react";
import styles from "./Navbar.module.css";

const CategoryMenu = () => {

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
    );
};

export default CategoryMenu;