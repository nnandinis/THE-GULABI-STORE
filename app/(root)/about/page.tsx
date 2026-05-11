import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
};

const fullBleed = {
  width: '100vw',
  maxWidth: '100vw',
  marginLeft: 'calc(50% - 50vw)',
  marginRight: 'calc(50% - 50vw)',
  position: 'relative' as const,
  boxSizing: 'border-box' as const,
};

const inner = {
  maxWidth: '72rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '1.25rem',
  paddingRight: '1.25rem',
};

const playfair = { fontFamily: "'Playfair Display', serif" };
const poppins = { fontFamily: "'Poppins', sans-serif" };

export default function AboutPage() {
  return (
    <div
      style={{
        ...poppins,
        color: 'var(--deep-brown)',
        marginTop: '-0.5rem',
        paddingBottom: '3rem',
      }}
    >
      {/* 1. Hero */}
      <section
        style={{
          ...fullBleed,
          backgroundColor: '#F2D9E0',
          padding: 'clamp(3.5rem, 10vw, 6rem) 1.25rem',
          textAlign: 'center',
          borderBottom: '1px solid color-mix(in srgb, var(--gold) 35%, transparent)',
        }}
      >
        <div style={inner}>
          <h1
            style={{
              ...playfair,
              fontSize: 'clamp(2.5rem, 6vw, 3.75rem)',
              fontWeight: 600,
              lineHeight: 1.12,
              color: 'var(--deep-brown)',
              margin: 0,
              marginBottom: '1.25rem',
            }}
          >
            Our Story
          </h1>
          <p
            style={{
              ...poppins,
              fontSize: 'clamp(1.05rem, 2.2vw, 1.25rem)',
              fontWeight: 400,
              lineHeight: 1.65,
              color: 'var(--deep-brown)',
              maxWidth: '36rem',
              margin: '0 auto',
              opacity: 0.92,
            }}
          >
            Born in the lanes of Jaipur, built for the world.
          </p>
        </div>
      </section>

      {/* 2. What We Do */}
      <section
        style={{
          ...fullBleed,
          backgroundColor: '#FAF0F3',
          padding: 'clamp(3rem, 8vw, 5rem) 0',
        }}
      >
        <div
          style={{
            ...inner,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(2rem, 5vw, 3.5rem)',
            alignItems: 'center',
          }}
        >
          <div>
            <h2
              style={{
                ...playfair,
                fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)',
                fontWeight: 600,
                color: 'var(--deep-brown)',
                margin: 0,
                marginBottom: '1.25rem',
              }}
            >
              What We Do
            </h2>
            <div
              style={{
                width: '3.5rem',
                height: '2px',
                background: 'linear-gradient(90deg, var(--gold), var(--primary-pink))',
                marginBottom: '1.5rem',
                borderRadius: '2px',
              }}
            />
            <p
              style={{
                ...poppins,
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'var(--deep-brown)',
                margin: 0,
                opacity: 0.95,
              }}
            >
              The Gulabi Store connects Jaipur&apos;s master artisans directly with
              buyers across India — no middlemen, no compromise. We bring you
              authentic block prints, blue pottery, meenakari jewellery, lac
              bangles, and more, each piece handcrafted by generations of skilled
              craftspeople. When you shop here, artisans earn fairly and craft
              traditions survive.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '0.875rem',
              padding: '1rem',
              backgroundColor: '#E8C4CF',
              borderRadius: '16px',
              boxShadow: '0 20px 50px rgba(74, 44, 42, 0.08)',
            }}
          >
            {[
              {
                emoji: '🧵',
                title: 'Block Printing',
                descriptor: 'Sanganer & Bagru traditions',
              },
              {
                emoji: '🏺',
                title: 'Blue Pottery',
                descriptor: 'Persian art, Jaipur heart',
              },
              {
                emoji: '💍',
                title: 'Meenakari',
                descriptor: 'Mughal enamel craft',
              },
              {
                emoji: '🪬',
                title: 'Lac Bangles',
                descriptor: 'Maniharon ka Rasta',
              },
            ].map((card) => (
              <article
                key={card.title}
                style={{
                  backgroundColor: '#F5DDE4',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  textAlign: 'center',
                  border: '1px solid var(--gold)',
                }}
              >
                <div
                  style={{
                    fontSize: '2rem',
                    marginBottom: '0.5rem',
                    lineHeight: 1,
                  }}
                  aria-hidden
                >
                  {card.emoji}
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: 'var(--deep-brown)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    ...poppins,
                    color: 'var(--muted-rose)',
                    fontSize: '0.75rem',
                    marginTop: '0.25rem',
                    marginBottom: 0,
                  }}
                >
                  {card.descriptor}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why We Exist */}
      <section
        style={{
          ...fullBleed,
          backgroundColor: '#F2D9E0',
          padding: 'clamp(3rem, 8vw, 5rem) 1.25rem',
          borderTop: '1px solid color-mix(in srgb, var(--muted-rose) 25%, transparent)',
          borderBottom: '1px solid color-mix(in srgb, var(--muted-rose) 25%, transparent)',
        }}
      >
        <div style={{ ...inner, maxWidth: '48rem' }}>
          <p
            style={{
              ...poppins,
              fontSize: '0.75rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase' as const,
              color: 'var(--muted-rose)',
              margin: 0,
              marginBottom: '0.75rem',
              fontWeight: 500,
            }}
          >
            Why We Exist
          </p>
          <h2
            style={{
              ...playfair,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)',
              fontWeight: 600,
              color: 'var(--deep-brown)',
              margin: 0,
              marginBottom: '1.25rem',
            }}
          >
            Bridging the Digital Divide
          </h2>
          <p
            style={{
              ...poppins,
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: 'var(--deep-brown)',
              margin: 0,
              opacity: 0.95,
            }}
          >
            Most of Jaipur&apos;s finest artisans are masters of their craft but
            strangers to the internet. They have no Instagram, no website, no way
            to reach customers beyond their local market. The Gulabi Store changes
            that — we handle the photography, the listings, the orders, and the
            delivery, so artisans can focus entirely on what they do best:
            creating.
          </p>
        </div>
      </section>

      {/* 4. Our Vision */}
      <section
        style={{
          ...fullBleed,
          backgroundColor: '#FAF0F3',
          padding: 'clamp(3rem, 8vw, 5rem) 1.25rem',
          textAlign: 'center',
        }}
      >
        <div style={{ ...inner, maxWidth: '44rem' }}>
          <h2
            style={{
              ...playfair,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)',
              fontWeight: 600,
              color: 'var(--deep-brown)',
              margin: 0,
              marginBottom: '1.25rem',
            }}
          >
            Empowering the Women of Rajasthan
          </h2>
          <p
            style={{
              ...poppins,
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: 'var(--deep-brown)',
              margin: 0,
              opacity: 0.95,
            }}
          >
            A significant portion of Jaipur&apos;s craft workforce are women —
            skilled artisans who work from home, supporting their families through
            their craft. Our long-term vision is to specifically uplift and
            spotlight these women, giving them fair wages, recognition, and a
            global platform.
          </p>
        </div>
      </section>

      {/* 5. Future Goals */}
      <section
        style={{
          ...fullBleed,
          backgroundColor: '#F2D9E0',
          padding: 'clamp(3rem, 8vw, 5rem) 0 4rem',
        }}
      >
        <div style={inner}>
          <h2
            style={{
              ...playfair,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)',
              fontWeight: 600,
              color: 'var(--deep-brown)',
              textAlign: 'center',
              margin: 0,
              marginBottom: '2.5rem',
            }}
          >
            Future Goals
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                title: 'Artisan Directory',
                body: 'Browse the profiles, portfolios, and stories of the craftspeople behind every product. Launching soon.',
              },
              {
                title: 'Custom Orders',
                body: 'Request personalised, made-to-order pieces directly from artisans — your vision, their hands.',
              },
              {
                title: 'Across Rajasthan',
                body: 'Expanding from Jaipur to Jodhpur, Udaipur, and Bikaner, bringing more regional crafts to the world.',
              },
              {
                title: 'Artisan Workshops',
                body: 'Hands-on craft learning experiences with master artisans — coming soon.',
              },
            ].map((card) => (
              <article
                key={card.title}
                style={{
                  backgroundColor: '#FAF0F3',
                  border: '2px solid var(--gold)',
                  borderRadius: '14px',
                  padding: '1.75rem 1.5rem',
                  boxShadow: '0 8px 28px rgba(74, 44, 42, 0.06)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
              >
                <h3
                  style={{
                    ...playfair,
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--deep-brown)',
                    margin: 0,
                    marginBottom: '0.75rem',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    ...poppins,
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    color: 'var(--deep-brown)',
                    margin: 0,
                    opacity: 0.9,
                  }}
                >
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Closing quote */}
      <section
        style={{
          ...fullBleed,
          backgroundColor: '#E8C4CF',
          padding: 'clamp(3rem, 8vw, 4.5rem) 1.25rem',
          textAlign: 'center',
        }}
      >
        <blockquote
          style={{
            ...playfair,
            fontSize: 'clamp(1.35rem, 3.5vw, 1.85rem)',
            fontStyle: 'italic',
            fontWeight: 500,
            color: 'var(--deep-brown)',
            margin: 0,
            maxWidth: '36rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.45,
            position: 'relative',
          }}
        >
          <span
            style={{
              color: 'var(--gold)',
              fontSize: '2.5rem',
              lineHeight: 0,
              verticalAlign: '-0.15em',
              marginRight: '0.15em',
              opacity: 0.85,
            }}
            aria-hidden
          >
            &ldquo;
          </span>
          Every piece you buy keeps an art form alive.
          <span
            style={{
              color: 'var(--gold)',
              fontSize: '2.5rem',
              lineHeight: 0,
              verticalAlign: '-0.15em',
              marginLeft: '0.1em',
              opacity: 0.85,
            }}
            aria-hidden
          >
            &rdquo;
          </span>
        </blockquote>
      </section>
    </div>
  );
}
