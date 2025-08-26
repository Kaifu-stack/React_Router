import React from 'react';

export default function Contact() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 py-16">
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-6">

                {/* Contact Info */}
                <div className="bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 text-white rounded-xl p-6 flex flex-col space-y-6 border border-gray-700">
                    <h1 className="text-3xl font-bold text-cyan-400">Get in Touch</h1>
                    <p className="text-gray-300">Fill in the form to start a conversation</p>

                    {/* Address */}
                    <div className="flex items-center space-x-3 text-pink-400 hover:text-cyan-400 transition-colors duration-300">
                        <span className="text-2xl">📍</span>
                        <span>Dhanbad, Jharkhand, India</span>
                    </div>

                    {/* Email */}
                    <div className="flex items-center space-x-3 text-pink-400 hover:text-cyan-400 transition-colors duration-300">
                        <span className="text-2xl">✉️</span>
                        <span>mdkaifalam7075@gmail.com</span>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="bg-gray-800 rounded-xl p-6 border border-gray-700 flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="border border-cyan-500 rounded-lg p-3 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="border border-cyan-500 rounded-lg p-3 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
                    />
                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="border border-cyan-500 rounded-lg p-3 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-pink-500 to-cyan-400 text-white font-bold py-3 rounded-lg transition-all duration-300"
                    >
                        Submit
                    </button>
                </form>

            </div>
        </div>
    );
}
