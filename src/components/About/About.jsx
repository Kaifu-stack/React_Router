import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="py-16 bg-gray-900 relative overflow-hidden min-h-screen">
            {/* Soft Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-gray-900 to-blue-800 opacity-25"></div>

            <div className="container mx-auto px-6 md:px-12 xl:px-6 relative z-10">
                <div className="md:flex md:items-center md:gap-12 lg:gap-16 space-y-8 md:space-y-0">

                    {/* Image Section */}
                    <div className="md:w-5/12">
                        <img
                            src="https://images.unsplash.com/photo-1729710877235-28d1e82d0442?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="About Me"
                            className="rounded-xl shadow-lg transform transition duration-500 hover:scale-105"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="md:w-7/12 lg:w-6/12 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-300 leading-tight">
                            Passionate React Developer Crafting Beautiful Interfaces
                        </h2>
                        <p className="text-gray-300 text-lg md:text-base">
                            I love building <span className="text-pink-400 font-semibold">modern, responsive, and interactive web applications</span> using React and Tailwind CSS.
                            My focus is on creating <span className="text-cyan-400 font-semibold">clean code, great user experience, and scalable solutions</span>.
                        </p>
                        <p className="text-gray-300 text-lg md:text-base">
                            Always exploring new technologies and frameworks, I strive to improve and learn every day.
                            Collaboration, problem-solving, and creativity are my key strengths.
                        </p>

                        {/* Call to Action */}
                        <Link
                            to="/contact"
                            className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-pink-500 to-cyan-400 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            Contact Me
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}
