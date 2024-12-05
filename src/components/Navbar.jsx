import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const lists = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allVisa'>All Visa</NavLink></li>
        <li><NavLink to='/addVisa'>Add Visa</NavLink></li>
        <li><NavLink to='/myAddedVisa'>My Added Visas</NavLink></li>
        <li><NavLink to='/appliedVisa'>My Visa Applications</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
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
                    <Link to='/auth/login' className="btn">Login / Register</Link >
                </div>
            </div>
        </div>
    );
};

export default Navbar;