"use client"; // Add this line at the top

import React from 'react';
import Link from 'next/link';

interface SidebarProps {
    categories: Record<string, string[]>;
}

const Sidebar: React.FC<SidebarProps> = ({ categories }) => (
    <div className="sidebar p-4 bg-gray-20">
        {Object.keys(categories).map((category) => (
            <div key={category} className="mb-4">
                <h2 className="font-bold">{category}</h2>
                <ul>
                    {categories[category].map((subCategory, index) => (
                        <li key={index} className="ml-4">
                            <Link legacyBehavior href={`#${subCategory}`}>
                                <a>{subCategory}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);

export default Sidebar;
