import ProductList from '@/components/shared/product/product-list';
import {
  getLatestProducts,
  getFeaturedProducts,
} from '@/lib/actions/product.actions';
import ProductCarousel from '@/components/shared/product/product-carousel';
import ViewAllProductsButton from '@/components/view-all-products-button';
import IconBoxes from '@/components/icon-boxes';
import DealCountdown from '@/components/deal-countdown';

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();

  return (
    <>
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <ProductList data={latestProducts} title='Newest Arrivals' limit={4} />
      <ViewAllProductsButton />
      <div
        style={{
          textAlign: 'center',
          padding: '2rem 0 1rem',
          fontFamily: "'Playfair Display', serif",
          color: 'var(--deep-brown)',
        }}
      >
        <h2 style={{ fontSize: '1.8rem', fontWeight: 600 }}>
          Crafted with Heart, Shipped from Jaipur
        </h2>
        <p
          style={{
            color: 'var(--muted-rose)',
            fontFamily: 'Poppins, sans-serif',
            marginTop: '0.5rem',
          }}
        >
          Every piece tells a story of Rajasthan's living craft traditions
        </p>
        <hr
          style={{
            borderColor: 'var(--gold)',
            opacity: 0.4,
            maxWidth: '200px',
            margin: '1rem auto 0',
          }}
        />
      </div>
      <DealCountdown />
      <IconBoxes />
    </>
  );
};

export default Homepage;
