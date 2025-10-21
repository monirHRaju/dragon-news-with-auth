import React, { Suspense } from 'react';
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
                <section className='mx-auto'>
                    <LatestNews></LatestNews>
                </section>
                <nav>
                    <LinksPrimary></LinksPrimary>
                </nav>
            </header>
            <main className='grid grid-cols-12 gap-4'>
                <section className="left col-span-3 sticky top-0 h-fit">
                    
                        <LeftSidebar></LeftSidebar>
               
                </section>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
                <section className="right col-span-3">
                    <RightSidebar></RightSidebar>
                </section>
            </main>
        </MyContainer>
        
    );
};

export default HomeLayout;