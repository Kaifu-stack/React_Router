import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden rounded-lg sm:mx-16 mx-2 sm:py-16">
                {/* Hero Section */}
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl text-gray-100">
                            Welcome to Kaifu's Hub
                            <span className="hidden sm:block text-4xl">Explore. Create. Innovate.</span>
                        </h2>

                        {/* Button */}
                        <Link
                            className="inline-flex items-center px-6 py-3 font-medium rounded-md 
                                       bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 
                                       text-white transition-all duration-300 hover:opacity-90"
                            to="/about"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>

                {/* Background Image */}
                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
                    <img
                        className="w-96 rounded-xl border border-gray-700"
                        src="https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=800&auto=format&fit=crop&q=60"
                        alt="Futuristic city background"
                    />
                </div>
            </aside>

            {/* Featured Section */}
            <div className="grid place-items-center sm:mt-20">
                <img
                    className="sm:w-96 w-48 rounded-xl border border-gray-700"
                    src="https://plus.unsplash.com/premium_photo-1690297733164-958ea1f806ab?w=800&auto=format&fit=crop&q=60"
                    alt="Neon tech device"
                />
            </div>

            {/* Call to Action */}
            <h1 className="text-center text-sm sm:text-5xl py-10 font-medium text-gray-100">
                Your Gateway to Next-Gen Tech & Design
            </h1>
        </div>
    );
}
