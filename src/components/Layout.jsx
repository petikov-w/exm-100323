import { NavLink, Outlet } from 'react-router-dom';
import React, { Fragment } from 'react';
const Layout = () => {
    return (
        <>
            <header>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/posts'>Blog</NavLink>
                <NavLink to='/about'>About</NavLink>
            </header>

            <main className='container'>
                <Outlet />
            </main>

            <footer className='container'>
                © {new Date().getFullYear()} Petikov Vladimir
            </footer>
        </>
    );
};

export { Layout };
