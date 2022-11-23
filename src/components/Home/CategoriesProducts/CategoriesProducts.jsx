import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CateforiesProductItem from './CategoriesProductItem';

const CategoriesProducts = () => {
    const categories = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3 lg:p-20'>
            {
                categories.map(category => <CateforiesProductItem
                    key={category._id}
                    category={category}
                ></CateforiesProductItem>)
            }


        </div>
    );
};

export default CategoriesProducts;