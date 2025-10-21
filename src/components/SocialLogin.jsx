import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <button className='flex gap-2 btn btn-outline btn-primary w-full mb-2'>
                <FcGoogle size={24}></FcGoogle> Login with Google
            </button>
            <button className='flex gap-2 btn btn-outline btn-secondary w-full'>
                <FaGithub size={24}></FaGithub> Login with Github
            </button>
        </div>
    );
};

export default SocialLogin;