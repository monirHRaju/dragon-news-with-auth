import React from 'react';
import swimmingImg from '../assets/swimming.png'
import playgroundImg from '../assets/playground.png'
import classImg from '../assets/class.png'

const Qzone = () => {
    return (
        <div className='bg-base-200 p-2 mt-4'>
            <h1 className='text-[18px] text-accent font-semibold'>Q-Zone</h1>
            <div className='space-y-5'>
                <img src={swimmingImg} alt="" />
                <img src={playgroundImg} alt="" />
                <img src={classImg} alt="" />
            </div>
        </div>
    );
};

export default Qzone;