import Link from 'next/link';
import { Instagram, Mail } from 'lucide-react';

const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? 'https://www.instagram.com/gulabistore';

const shopCategories = [
  { label: 'Block Print Textiles', slug: 'Block Print Textiles' },
  { label: 'Blue Pottery', slug: 'Blue Pottery' },
  { label: 'Meenakari Jewellery', slug: 'Meenakari Jewellery' },
] as const;

const Footer = () => {
  return (
    <footer className='mt-auto w-full overflow-x-hidden bg-[#2C1810] text-[#FAF5F0]'>
      <div className='mx-auto w-full max-w-7xl px-4 py-10 sm:px-5 md:px-8 md:py-12 lg:px-10'>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-4 lg:gap-10'>
          {/* Brand */}
          <div className='space-y-4'>
            <p className='font-display text-2xl font-semibold tracking-tight sm:text-[1.65rem]'>
              Gulabi Store
            </p>
            <p className='max-w-xs text-sm leading-relaxed text-[#FAF5F0]/85'>
              Authentic Jaipur handicrafts, shipped with love
            </p>
            <div className='flex items-center gap-3 pt-1'>
              <a
                href={INSTAGRAM_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='flex h-10 w-10 items-center justify-center rounded-full border border-[#FAF5F0]/25 text-[#FAF5F0] transition-colors hover:border-[#FAF5F0]/50 hover:bg-[#FAF5F0]/10'
                aria-label='The Gulabi Store on Instagram'
              >
                <Instagram className='h-[1.125rem] w-[1.125rem]' strokeWidth={1.75} />
              </a>
              <a
                href='mailto:hello@gulabistore.com'
                className='flex h-10 w-10 items-center justify-center rounded-full border border-[#FAF5F0]/25 text-[#FAF5F0] transition-colors hover:border-[#FAF5F0]/50 hover:bg-[#FAF5F0]/10'
                aria-label='Email The Gulabi Store'
              >
                <Mail className='h-[1.125rem] w-[1.125rem]' strokeWidth={1.75} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h2 className='mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#FAF5F0]/60'>
              Shop
            </h2>
            <ul className='space-y-3 text-sm'>
              <li>
                <Link
                  href='/search'
                  className='text-[#FAF5F0]/90 transition-colors hover:text-[#FAF5F0]'
                >
                  All Products
                </Link>
              </li>
              {shopCategories.map(({ label, slug }) => (
                <li key={slug}>
                  <Link
                    href={`/search?category=${encodeURIComponent(slug)}`}
                    className='text-[#FAF5F0]/90 transition-colors hover:text-[#FAF5F0]'
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h2 className='mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#FAF5F0]/60'>
              Discover
            </h2>
            <ul className='space-y-3 text-sm'>
              <li>
                <Link
                  href='/artisans'
                  className='text-[#FAF5F0]/90 transition-colors hover:text-[#FAF5F0]'
                >
                  Meet Our Artisans
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-[#FAF5F0]/90 transition-colors hover:text-[#FAF5F0]'
                >
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className='mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#FAF5F0]/60'>
              Contact
            </h2>
            <ul className='space-y-3 text-sm leading-relaxed text-[#FAF5F0]/90'>
              <li>Jaipur, Rajasthan, India</li>
              <li>
                <a
                  href='mailto:hello@gulabistore.com'
                  className='transition-colors hover:text-[#FAF5F0]'
                >
                  hello@gulabistore.com
                </a>
              </li>
              <li>
                <a href='tel:+919829100000' className='transition-colors hover:text-[#FAF5F0]'>
                  +91 98291 00000
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-[#FAF5F0]/12'>
        <div className='mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-center text-xs text-[#FAF5F0]/65 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:text-left md:px-8 lg:px-10'>
          <p>© 2025 The Gulabi Store. All rights reserved.</p>
          <p>Made with 💗 in Jaipur</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
