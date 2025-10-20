import React from 'react';
import logo from '../assets/logo.png'
import MyNav from './MyNav';
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex justify-center flex-col text-center mt-8'>
            <figure className='flex justify-center'>
                <img src={logo} alt="" />
            </figure>
            <p className='text-accent my-5'>Journalism Without Fear or Favour</p>
            <p className='text-accent mb-4'>{format(new Date(), "EEEE, MMMM MM, yyyy")}</p>
            
        </div>
    );
};

export default Header;