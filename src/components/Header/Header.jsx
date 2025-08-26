import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-black/85 border-b border-cyan-400 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    {/* Logo with Space Theme */}
                    <Link to="/" className="flex items-center space-x-3">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg"
                            className="w-12 h-12 rounded-full border border-cyan-400 object-cover"
                            alt="Space Logo"
                        />
                        <span className="text-xl font-semibold text-white tracking-wide">
                            KaifuHub
                        </span>
                    </Link>

                    {/* Login & Get Started Buttons */}
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-4 py-2 rounded-md transition-colors duration-200 mr-2 text-base"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black px-4 py-2 rounded-md transition-colors duration-200 text-base"
                        >
                            Get started
                        </Link>
                    </div>

                    {/* Navigation Menu */}
                    <div className="hidden lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 text-base font-medium">
                            {['Home', 'About', 'Contact', 'Github'].map((item) => (
                                <li key={item}>
                                    <NavLink
                                        to={`/${item === 'Home' ? '' : item}`}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 transition-colors duration-200 
                      ${isActive ? 'text-pink-400' : 'text-cyan-400 hover:text-pink-400'} 
                      lg:p-0`
                                        }
                                    >
                                        {item}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
