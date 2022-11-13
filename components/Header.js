import Image from 'next/image';

function Header() {
  return (
    <div className="">
      {/* Left - Logo */}
      <div className="flex justify-between bg-white max-w-6xl">
        <div className="relative hidden lg:inline-grid h-24 w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            fill
            style={{ objectFit: 'contain' }}
            alt="Instagram Logo"
          />
        </div>
        <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            fill
            style={{ objectFit: 'contain' }}
            alt="Instagram Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
