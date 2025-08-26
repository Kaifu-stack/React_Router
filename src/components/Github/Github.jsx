import React from 'react';

function Github() {
    return (
        <div className="flex flex-col items-center bg-black/50 p-6 rounded-xl space-y-6">
            <h1 className="text-3xl font-bold text-cyan-400">
                GitHub Profile Stats
            </h1>

            {/* GitHub Stats Card */}
            <img
                src="https://github-readme-stats.vercel.app/api?username=Kaifu-stack&show_icons=true&theme=tokyonight"
                alt="GitHub Stats"
                className="rounded-xl border-4 border-pink-500 shadow-lg"
            />

            {/* GitHub Top Languages Card */}
            <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Kaifu-stack&layout=compact&theme=tokyonight"
                alt="Top Languages"
                className="rounded-xl border-4 border-pink-500 shadow-lg"
            />
        </div>
    );
}

export default Github;
