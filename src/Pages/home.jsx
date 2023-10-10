import React from 'react'

function Home() {
    return (
        <div className="bg-blue-200 w-screen h-screen flex flex-row items-center justify-center">
            <div className="bg-white p-4 rounded shadow-lg">
                <h1 className="text-3xl font-semibold">Welcome to My React App</h1>
                <p><a href="/resume">resume</a></p>
                <p><a href="/todo">todo</a></p>
                <p className="text-gray-600">This is a basic HTML page using React and Tailwind CSS.</p>
            </div>
        </div>
    );
}

export default Home