import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import MyContainer from '../components/MyContainer';
import LatestNews from '../components/LatestNews';
import LinksPrimary from '../components/LinksPrimary';

const HomeLayout = () => {
    return (
        
        <MyContainer>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
                <nav>
                    <LinksPrimary></LinksPrimary>
                </nav>
            </header>
            <main className='flex justify-between'>
                <section className="left">
                    <LeftSidebar></LeftSidebar>
                </section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="right">
                    <RightSidebar></RightSidebar>
                </section>
            </main>
        </MyContainer>
        
    );
};

export default HomeLayout;