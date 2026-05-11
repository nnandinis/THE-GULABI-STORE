import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllArtisans } from '@/lib/actions/artisan.actions';
import type { Artisan } from '@/types';

export const metadata: Metadata = {
  title: 'Artisan Directory',
};

const fullBleed = {
  width: '100vw',
  maxWidth: '100vw',
  marginLeft: 'calc(50% - 50vw)',
  marginRight: 'calc(50% - 50vw)',
  position: 'relative' as const,
  boxSizing: 'border-box' as const,
};

const playfair = { fontFamily: "'Playfair Display', serif" };
const poppins = { fontFamily: "'Poppins', sans-serif" };

export default async function ArtisansPage() {
  const artisans = (await getAllArtisans()) as Artisan[];

  return (
    <div style={{ ...poppins, color: 'var(--deep-brown)', marginTop: '-0.5rem' }}>
      {/* Hero */}
      <section
        style={{
          ...fullBleed,
          background: '#F2D9E0',
          padding: '4rem 1.25rem',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            ...playfair,
            fontSize: '3rem',
            color: 'var(--deep-brown)',
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Meet Our Artisans
        </h1>
        <p
          style={{
            ...poppins,
            color: 'var(--muted-rose)',
            marginTop: '1rem',
            marginBottom: 0,
            fontSize: '1.05rem',
          }}
        >
          The hands and hearts behind every piece
        </p>
      </section>

      {/* Featured badge */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2.5rem',
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
        }}
      >
        <span
          style={{
            ...poppins,
            display: 'inline-block',
            backgroundColor: 'var(--primary-pink)',
            color: '#fff',
            padding: '6px 18px',
            borderRadius: '9999px',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.04em',
          }}
        >
          Featured Artisans
        </span>
      </div>

      {/* Grid */}
      <div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        style={{
          maxWidth: 1200,
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '3rem 1.25rem',
        }}
      >
        {artisans.map((artisan) => (
          <article
            key={artisan.id}
            style={{
              backgroundColor: 'var(--beige)',
              borderRadius: 12,
              border: '0.5px solid var(--muted-rose)',
              boxShadow: '0 2px 12px rgba(74,44,42,0.07)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 380,
              }}
            >
              <Image
                src={artisan.profileImage}
                alt={artisan.name}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px'
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  ...poppins,
                  alignSelf: 'flex-start',
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
              <h2
                style={{
                  ...playfair,
                  color: 'var(--deep-brown)',
                  fontSize: '1.2rem',
                  marginTop: '0.5rem',
                  marginBottom: 0,
                  lineHeight: 1.3,
                }}
              >
                {artisan.name}
              </h2>
              <p
                style={{
                  ...poppins,
                  fontSize: '0.85rem',
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
                  fontSize: '0.85rem',
                  color: 'var(--muted-rose)',
                  marginTop: '0.35rem',
                  marginBottom: 0,
                }}
              >
                🏺 {artisan.yearsOfExperience} years of experience
              </p>
              <Link
                href={`/artisans/${artisan.id}`}
                style={{
                  ...poppins,
                  display: 'block',
                  width: '100%',
                  textAlign: 'center',
                  backgroundColor: 'var(--primary-pink)',
                  color: '#fff',
                  borderRadius: 8,
                  padding: '0.6rem',
                  marginTop: '1rem',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                View Profile →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
