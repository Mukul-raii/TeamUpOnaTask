import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const Footbar = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 ">
      <div className="container mx-auto flex flex-row justify-between text-lg xs:max-md:text-md ">
        <p>
          Built with 💻 by <a href="#" className="text-purple-400">Nobita</a>
        </p>
        <div className="flex justify-center space-x-4 mt-2 xs:max-md:mt-0 xs:max-md:gap-2 xs:max-md:mr-5 flex-row gap-8">
          <a href="https://github.com/Mukul-raii" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400">
            <FaGithub className="h-6 w-6" />
          </a>
          <a href="https://x.com/nobita_3127" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400">
            <FaTwitter className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footbar;
