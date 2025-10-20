import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center bg-base-200  px-3 py-2'>
            <p className='bg-secondary mr-2 text-white  px-3 py-2'>Latest</p>
            <Marquee className='flex gap-5' speed={60} pauseOnHover={true}>
                <p className='font-semibold py-2 px-3'>Lorem ipsum dos deserunt error quos earum placeat.</p>
                <p className='font-semibold py-2 px-3'>Lorem ipsum dos deserunt error quos earum placeat.</p>
                <p className='font-semibold py-2 px-3'>Lorem ipsum dos deserunt error quos earum placeat.</p>
            </Marquee>

        </div>
    );
};

export default LatestNews;