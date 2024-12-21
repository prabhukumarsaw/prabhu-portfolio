import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Page Not Found</p>
      <Link href="/">
        <a className="text-blue-400 hover:text-blue-300">Go back to Home</a>
      </Link>
    </div>
  );
};

export default NotFound;
