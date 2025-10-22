import React from 'react';
import LinksPrimary from '../components/LinksPrimary';
import { Outlet } from 'react-router';
import MyContainer from '../components/MyContainer';

const AuthLayout = () => {
    return (
        <MyContainer>
            <header>
                <LinksPrimary></LinksPrimary>
            </header>
            <Outlet></Outlet>
        </MyContainer>
    );
};

export default AuthLayout;