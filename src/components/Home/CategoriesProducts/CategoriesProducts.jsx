import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoriesProductItem from './CategoriesProductItem';

const CategoriesProducts = () => {
    const categories = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3 lg:p-20'>
            {
                categories.map(category => <CategoriesProductItem
                    key={category._id}
                    category={category}
                ></CategoriesProductItem>)
            }


        </div>
    );
};

export default CategoriesProducts;