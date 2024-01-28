import Link from 'next/link';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className='flex flex-col relative items-center'>
      <div
        className='cursor-pointer text-white text-2xl md:text-xl z-10'
        onClick={handleMenuToggle}
      >
        {menuOpen ? (
          <IoCloseOutline style={{ width: '1.5em', height: '1.5em' }} />
        ) : (
          <RxHamburgerMenu style={{ width: '1.5em', height: '1.5em' }} />
        )}
      </div>

      {menuOpen && (
        <div className='absolute top-16 bg-gray-800 bg-opacity-75 p-8 z-20'>
          <div className='flex flex-col items-center justify-center gap-4'>
            <Link href='/'>Weather App</Link>
            <Link href='/week1'>Week 1</Link>
            <Link href='/week2'>Week 2</Link>
            <Link href='/week3'>Week 3</Link>
            <Link href='/week4'>Week 4</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


