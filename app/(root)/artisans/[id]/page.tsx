import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArtisanById } from '@/lib/actions/artisan.actions';
import { formatCurrency } from '@/lib/utils';
import type { Artisan } from '@/types';

const playfair = { fontFamily: "'Playfair Display', serif" };
const poppins = { fontFamily: "'Poppins', sans-serif" };

const cardStyle: CSSProperties = {
  backgroundColor: 'var(--beige)',
  borderRadius: 12,
  border: '0.5px solid var(--muted-rose)',
  boxShadow: '0 2px 12px rgba(74,44,42,0.07)',
  overflow: 'hidden',
};

export default async function ArtisanDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const raw = await getArtisanById(id);
  if (!raw) notFound();
  const artisan = raw as Artisan;

  const igHandle = artisan.instagramHandle?.replace('@', '') ?? '';
  const igUrl =
    artisan.instagramHandle && igHandle
      ? `https://instagram.com/${igHandle}`
      : null;

  return (
    <div
      style={{
        ...poppins,
        background: 'var(--soft-blush)',
        color: 'var(--deep-brown)',
        marginTop: '-0.5rem',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '3rem 2rem',
        }}
      >
        <Link
          href='/artisans'
          style={{
            ...poppins,
            color: 'var(--primary-pink)',
            fontSize: '0.9rem',
            padding: '1rem 2rem',
            display: 'block',
            textDecoration: 'none',
          }}
        >
          ← Back to Artisan Directory
        </Link>

        {/* Hero */}
        <section
          className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10'
          style={{ alignItems: 'start' }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 420,
              borderRadius: '0.75rem',
              overflow: 'hidden',
            }}
            className='rounded-xl'
          >
            <Image
              src={artisan.profileImage}
              alt={artisan.name}
              fill
              sizes='(max-width: 1024px) 100vw, 50vw'
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div>
            <span
              style={{
                ...poppins,
                display: 'inline-block',
                background: '#FAD4E0',
                color: 'var(--primary-pink)',
                borderRadius: 20,
                padding: '2px 12px',
                fontSize: '0.7rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              {artisan.craft}
            </span>
            <h1
              style={{
                ...playfair,
                fontSize: '2.5rem',
                color: 'var(--deep-brown)',
                marginTop: '1rem',
                marginBottom: 0,
                lineHeight: 1.2,
              }}
            >
              {artisan.name}
            </h1>
            <p
              style={{
                ...poppins,
                fontSize: '1rem',
                color: 'var(--muted-rose)',
                marginTop: '0.75rem',
                marginBottom: 0,
              }}
            >
              📍 {artisan.location}
            </p>
            <p
              style={{
                ...poppins,
                fontSize: '1rem',
                color: 'var(--muted-rose)',
                marginTop: '0.35rem',
                marginBottom: 0,
              }}
            >
              🏺 {artisan.yearsOfExperience} years of experience
            </p>
            <p
              style={{
                ...poppins,
                marginTop: '1.25rem',
                marginBottom: 0,
                lineHeight: 1.65,
              }}
            >
              {artisan.bio}
            </p>

            <h2
              style={{
                ...playfair,
                fontSize: '1.35rem',
                marginTop: '2rem',
                marginBottom: '0.75rem',
              }}
            >
              Get in Touch
            </h2>
            <div style={{ ...poppins, fontSize: '0.95rem', lineHeight: 1.8 }}>
              {artisan.phone ? (
                <p style={{ margin: '0.25rem 0' }}>
                  📞{' '}
                  <a
                    href={`tel:${artisan.phone.replace(/\s/g, '')}`}
                    style={{ color: 'var(--deep-brown)' }}
                  >
                    {artisan.phone}
                  </a>
                </p>
              ) : null}
              {artisan.email ? (
                <p style={{ margin: '0.25rem 0' }}>
                  ✉️{' '}
                  <a
                    href={`mailto:${artisan.email}`}
                    style={{ color: 'var(--deep-brown)' }}
                  >
                    {artisan.email}
                  </a>
                </p>
              ) : null}
              {artisan.instagramHandle && igUrl ? (
                <p style={{ margin: '0.25rem 0' }}>
                  📸{' '}
                  <a
                    href={igUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ color: 'var(--deep-brown)' }}
                  >
                    {artisan.instagramHandle}
                  </a>
                </p>
              ) : null}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        {artisan.portfolioImages?.length ? (
          <section style={{ paddingTop: '3rem' }}>
            <h2
              style={{
                ...playfair,
                fontSize: '1.75rem',
                marginBottom: '1.25rem',
              }}
            >
              Portfolio
            </h2>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {artisan.portfolioImages.map((src, index) => (
                <div
                  key={`${src}-${index}`}
                  style={{
                    position: 'relative',
                    height: 220,
                    borderRadius: 8,
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={src}
                    alt={`${artisan.name} portfolio ${index + 1}`}
                    fill
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* Products */}
        {artisan.products && artisan.products.length > 0 ? (
          <section style={{ paddingTop: '3rem' }}>
            <h2
              style={{
                ...playfair,
                fontSize: '1.75rem',
                marginBottom: '1.25rem',
              }}
            >
              Products by {artisan.name}
            </h2>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {artisan.products.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.slug}`}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                  }}
                >
                  <article style={{ ...cardStyle, height: '100%' }}>
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: 200,
                      }}
                    >
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ padding: '1.25rem' }}>
                      <h3
                        style={{
                          ...playfair,
                          fontSize: '1.15rem',
                          margin: 0,
                          color: 'var(--deep-brown)',
                        }}
                      >
                        {product.name}
                      </h3>
                      <p
                        style={{
                          ...poppins,
                          marginTop: '0.5rem',
                          marginBottom: 0,
                          fontWeight: 600,
                          color: 'var(--primary-pink)',
                        }}
                      >
                        {formatCurrency(product.price)}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
