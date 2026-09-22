import React, { useEffect, useState } from 'react';

const FunctionBasedHooks = () => {
    let [count, setCount] = useState(0);
    let [userName, setUserName] = useState("Guest");
    
    // 1. State to store the products from the API
    let [products, setProducts] = useState([]);
    let [loading, setLoading] = useState(true);

    let inc = () => {
        setCount(count + 1);
    };

    let changeName = () => {
        setUserName("rakesh");
    };

    // 2. useEffect to fetch data on component mount
    useEffect(() => {
        console.log("I am useEffect (Fetching products...)");

        // Fetching data from Fake Store API
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false); // Stop loading once data is fetched
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                setLoading(false);
            });

    }, []); // Empty dependency array [] ensures this runs ONLY ONCE when the component mounts

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>Count: {count}</h1>
            <button onClick={inc}>Increment</button>
            <hr />
            <h2>Name : {userName}</h2>
            <button onClick={changeName}>Change Name</button>
            
            <hr />
            <h2>Products from API:</h2>
            {loading ? (
                <p>Loading products...</p>
            ) : (
                <ul>
                    {products.map((item) => (
                        <li key={item.id} style={{ marginBottom: '10px' }}>
                            <strong>{item.title}</strong> - ${item.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FunctionBasedHooks;