import Image from 'next/image';
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  HeartIcon,
  UserGroupIcon,
  PaperAirplaneIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';
import { HomeIcon } from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto">
        {/* Left - Logo */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://i.imgur.com/7NZo3rC.png"
            fill
            style={{ objectFit: 'contain' }}
            alt="Instagram Logo"
          />
        </div>
        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://i.imgur.com/KEnzPwS.png"
            fill
            style={{ objectFit: 'contain' }}
            alt="Instagram Logo"
          />
        </div>

        {/* Middle - Search input field */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right - Icons */}
        <div className="flex items-center justify-end space-x-2 sm:space-x-4">
          <HomeIcon className="navBtn" />
          <Bars3Icon className="h-6 shrink-0 md:hidden cursor-pointer" />

          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn -rotate-45" />
            <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center animate-pulse">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          <Image
            src="https://i.imgur.com/tQ7EcAl.jpg"
            width={40}
            height={40}
            alt="Profile picture"
            className="h-10 w-10 object-cover rounded-full cursor-pointer shrink-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
