import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import Menu from './menu';
import CategoryDrawer from './category-drawer';
import Search from './search';

const Header = () => {
  return (
    <header className='w-full border-b dark:bg-[#1A0E0A] dark:border-[#4A2C2A]'>
      <div className='wrapper flex-between'>
        <div className='flex-start'>
          <CategoryDrawer />
          <Link href='/' className='flex-start ml-4'>
            <Image
              src='/images/logo.png'
              alt={`${APP_NAME} logo`}
              height={100}
              width={100}
              priority={true}
            />
            <span className='hidden lg:block text-3xl ml-3' style={{ fontFamily: "'Playfair Display', serif", color: 'var(--deep-brown)', fontWeight: 900 }}>
              The Gulabi Store
            </span>
          </Link>
        </div>
        <div className='hidden md:block'>
          <Search />
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
