import React from 'react';
import SocialLinks from './SocialLinks';
import Qzone from './Qzone';
import SocialLogin from './SocialLogin';

const RightSidebar = () => {
    return (
        <div className='sticky top-0 '>
            <SocialLogin></SocialLogin>
            <SocialLinks></SocialLinks>
            <Qzone></Qzone>
        </div>
    );
};

export default RightSidebar;