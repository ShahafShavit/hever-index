"use client"; // Add this line at the top

import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import StoresList from './components/StoresList';
import Navbar from './components/Navbar';

const Home: React.FC = () => {
    const [categories, setCategories] = useState<Record<string, string[]>>({});

    useEffect(() => {
        fetch('/api/categories')
            .then(response => response.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div className='layout'>
            <Navbar />
            <div className="container flex">
                
                <Sidebar categories={categories} />
                <StoresList />
            </div>
        </div>
    );
};

export default Home;
