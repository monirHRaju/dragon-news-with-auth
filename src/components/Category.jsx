import React, { use } from 'react';
import { NavLink } from 'react-router';
import MyCategoryLink from './MyCategoryLink';

const categoryPromise = fetch('/categories.json').then(res => res.json())

const Category = () => {
    const categories = use(categoryPromise)
    console.log(categories);
    
    return (
        <div>
            <h1 className='font-semibold'>All Category</h1>
            <div className='grid col-span-1'>
                {
                    categories.map(category => 
                        <MyCategoryLink 
                        to={`/category/${category.id}`} 
                        className='text-accent mt-2 p-2 hover:bg-base-300'>
                            {category.name}
                        </MyCategoryLink>
                    )
                }
            </div>
        </div>
    );
};

export default Category;