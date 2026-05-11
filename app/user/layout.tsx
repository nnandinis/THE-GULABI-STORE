import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '@/components/shared/header/menu';
import MainNav from './main-nav';

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className='flex flex-col overflow-x-hidden'>
        <div className='border-b container mx-auto'>
          <div className='flex items-center h-20 px-4'>
            <Link href='/' className='flex items-center shrink-0'>
              <Image
                src='/images/logo.png'
                height={100}
                width={100}
                alt={APP_NAME}
                className='h-16 w-auto object-contain'
              />
            </Link>
            <MainNav className='mx-6 shrink-0' />
            <div className='ml-auto items-center flex space-x-4 min-w-0'>
              <Menu />
            </div>
          </div>
        </div>

        <div className='flex-1 space-y-4 p-8 pt-6 container mx-auto'>
          {children}
        </div>
      </div>
    </>
  );
}
