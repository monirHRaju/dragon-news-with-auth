import React, { Suspense } from 'react';
import Category from './Category';

const LeftSidebar = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
                <Category></Category>
            </Suspense>
        </div>
    );
};

export default LeftSidebar;