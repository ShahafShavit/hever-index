"use client"; // Add this line at the top

import Link from 'next/link';
import React from 'react';
import styles from './StoreCard.module.css';

interface StoreCardProps {
    name: string;
    store_id: number;
    discount: number;
    imageUrl: string;
    hever_url: string;
    website_url: string;
}

const StoreCard: React.FC<StoreCardProps> = ({ name, store_id, discount, imageUrl, hever_url, website_url }) => {
    return (
        <div className="store-card border rounded shadow-md p-4 flex flex-col items-center w-full bg-neutral-800">
            <div className="image-placeholder bg-gray-800 w-full h-24 flex items-center justify-center mb-4">
                {imageUrl ? (
                    <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                ) : (
                    <span className="text-gray-500">250×100 Image</span>
                )}
            </div>
            <div className="store-info text-center w-full flex flex-col flex-grow">
                <h3 className="text-xl font-bold truncate" title={name}>{name}</h3>
                <p>{Math.round(discount * 100)}% הנחה</p>
                <div className="flex justify-center mt-2 space-x-2 gap-3">
                    <Link href={hever_url} legacyBehavior>
                        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
                            אתר חבר
                        </a>
                    </Link>
                    {website_url ? (
                        <Link href={"https://" + website_url} legacyBehavior>
                            <a className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded">
                                אתר עסק
                            </a>
                        </Link>
                    ) : (
                        <a className="bg-gray-500 text-white font-bold py-1 px-3 rounded cursor-not-allowed">
                            אתר עסק
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StoreCard;