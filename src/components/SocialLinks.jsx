import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SocialLinks = () => {
    return (
        <div className='my-5'>
            <h1 className='text-[18px] text-accent font-semibold'>Social Links</h1>
            <div className="join join-vertical lg:join-horizontal w-full bg-base-200">
                <button className="btn join-item"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item"><FaXTwitter></FaXTwitter> Twitter</button>
                <button className="btn join-item"><FaLinkedin></FaLinkedin> Linkedin</button>
            </div>
        </div>
    );
};

export default SocialLinks;