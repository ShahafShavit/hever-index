import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          אינדקס עסקים- חבר
        </div>
        <ul className="flex space-x-4 text-white gap-4">
          <li><a href="https://github.com/ShahafShavit/hever-index?tab=readme-ov-file#אודות" className="hover:text-gray-400">אודות</a></li>
          <li><a href="https://github.com/ShahafShavit/hever-index" className="hover:text-gray-400">Git</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
