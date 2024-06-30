"use client";

import React, { useEffect, useState, useRef, useCallback } from 'react';
import StoreCard from './StoreCard';

interface Store {
    id: number;
    store_id: number;
    title: string;
    discount: number;
    main_category: string;
    sub_category: string;
    link: string;
    url: string;
    image_url: string;
}

const StoresList: React.FC = () => {
    const [stores, setStores] = useState<Store[]>([]);
    const [visibleStores, setVisibleStores] = useState<Store[]>([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 20;
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        fetch('/api/stores')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setStores(data);
                setVisibleStores(data.slice(0, itemsPerPage));
            })
            .catch(error => console.error('Fetch error:', error));
    }, []);

    useEffect(() => {
        if (page > 1) {
            setVisibleStores(prevVisibleStores => [
                ...prevVisibleStores,
                ...stores.slice((page - 1) * itemsPerPage, page * itemsPerPage)
            ]);
        }
    }, [page, stores]);

    const lastStoreElementRef = useCallback((node: HTMLDivElement | null) => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && page * itemsPerPage < stores.length) {
                setPage(prevPage => prevPage + 1);
            }
        });
        if (node) observer.current.observe(node);
    }, [page, stores.length]);

    return (
        <div className="stores-list p-4 w-full h-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 "> {/*auto-rows-[235px]*/}
            {visibleStores.map((store, index) => {
                if (visibleStores.length === index + 1) {
                    return (
                        <div ref={lastStoreElementRef} key={store.id} className='h-full'>
                            <StoreCard 
                                key={store.id} 
                                name={store.title} 
                                store_id={store.store_id}
                                discount={store.discount} 
                                imageUrl={`/images/image_${store.store_id}.gif`} 
                                hever_url={store.url} 
                                website_url={store.link} 
                            />
                        </div>
                    );
                } else {
                    return (
                        <StoreCard 
                            key={store.id} 
                            name={store.title} 
                            store_id={store.store_id}
                            discount={store.discount} 
                            imageUrl={`/images/image_${store.store_id}.gif`} 
                            hever_url={store.url} 
                            website_url={store.link} 
                        />
                    );
                }
            })}
        </div>
    );
};

export default StoresList;
