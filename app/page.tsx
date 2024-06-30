"use client"; // Add this line at the top

import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import StoresList from './components/StoresList';

const Home: React.FC = () => {
    const [categories, setCategories] = useState<Record<string, string[]>>({});

    useEffect(() => {
        fetch('/api/categories')
            .then(response => response.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div className="container flex">
            <Sidebar categories={categories} />
            <StoresList />
        </div>
    );
};

export default Home;
