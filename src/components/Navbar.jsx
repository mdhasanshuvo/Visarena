import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext);


    const lists = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allVisa'>All Visa</NavLink></li>
        {
            user && <>
                <li><NavLink to='/addVisa'>Add Visa</NavLink></li>
                <li><NavLink to='/myAddedVisa'>My Added Visas</NavLink></li>
                <li><NavLink to='/appliedVisa'>My Visa Applications</NavLink></li>
            </>
        }
    </>
    const { pathname } = useLocation();
    return (
        <div className={`bg-white border ${pathname === '/auth/login' || pathname === '/auth/register' ? 'h-36' : ''}`}
        >
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {lists}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">VISARENA</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {lists}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="flex items-center gap-3 justify-center">
                                <div>
                                    <img className='w-7 sm:w-9 rounded-full ' src={user?.photoURL} alt="" />
                                </div>
                                <Link onClick={logout} to='/' className='btn btn-primary sm:px-5 text-white  rounded-lg min-h-9 h-9 text-sm'>Log out</Link>
                            </div> :
                            <Link to='/auth/login' className='btn btn-primary sm:px-5 text-white  rounded-lg min-h-9 h-9 text-sm'>Login / Register</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;