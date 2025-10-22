import React from 'react';
import MyNav from './MyNav';
import user from '../assets/user.png'
import { Link } from 'react-router';

const LinksPrimary = () => {
    return (
        <div className='flex justify-between my-6'>
            <div></div>
            <div>
                <ol className='flex gap-5'>
                    <MyNav to={'/'}><li>Home</li></MyNav>
                    <MyNav to={'/about'}><li>About</li></MyNav>
                    <MyNav to={'/career'}><li>Career</li></MyNav>
                </ol>
            </div>
            <div className='flex gap-2'>
                <img src={user} alt="" />
                <Link to={'/auth/login'} className='btn btn-primary px-10'>Login</Link>
            </div>
        </div>
    );
};

export default LinksPrimary;