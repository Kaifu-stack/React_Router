import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 border-t border-gray-700">
            <div className="mx-auto w-full max-w-screen-xl p-6 lg:py-10">
                <div className="md:flex md:justify-between">
                    {/* Logo with Branding */}
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center space-x-3">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg"
                                className="w-12 h-12 rounded-full border border-cyan-400 object-cover"
                                alt="Space Logo"
                            />
                            <span className="text-lg font-semibold text-white tracking-wide">
                                KaifuHub
                            </span>
                        </Link>
                    </div>

                    {/* Links Section */}
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 text-sm">
                        <div>
                            <h2 className="mb-6 font-semibold text-cyan-400 uppercase">
                                Resources
                            </h2>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/" className="hover:text-pink-400 transition">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:text-pink-400 transition">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 font-semibold text-cyan-400 uppercase">
                                Follow Us
                            </h2>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="https://github.com/Kaifu-stack"
                                        className="hover:text-pink-400 transition"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:text-pink-400 transition">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 font-semibold text-cyan-400 uppercase">
                                Legal
                            </h2>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="#" className="hover:text-pink-400 transition">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-pink-400 transition">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-700" />

                {/* Bottom Section */}
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2023{' '}
                        <a href="https://github.com/Kaifu-stack" className="text-cyan-400 hover:text-pink-400">
                            Md Kaif Alam
                        </a>{' '}
                        . All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}
