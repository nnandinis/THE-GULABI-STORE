import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import ProductPrice from './product-price';
import { Product } from '@/types';
import Rating from './rating';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card
      className='w-full max-w-sm'
      style={{
        backgroundColor: 'var(--beige)',
        border: '0.5px solid var(--muted-rose)',
        borderRadius: '12px',
      }}
    >
      <CardHeader className='p-0 items-center'>
        <Link href={`/product/${product.slug}`}>
          <div
            style={{ overflow: 'hidden', borderRadius: '12px 12px 0 0' }}
          >
            <Image
              className='hover:scale-105 transition-transform duration-300'
              src={product.images[0]}
              alt={product.name}
              height={300}
              width={300}
              priority={true}
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className='p-4 grid gap-4'>
        <div
          className='text-xs'
          style={{
            color: 'var(--primary-pink)',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {product.brand}
        </div>
        <span
          style={{
            fontSize: '0.7rem',
            backgroundColor: 'var(--beige)',
            color: 'var(--deep-brown)',
            border: '0.5px solid var(--muted-rose)',
            borderRadius: '20px',
            padding: '2px 10px',
            display: 'inline-block',
          }}
        >
          {product.category}
        </span>
        <Link href={`/product/${product.slug}`}>
          <h2
            className='text-sm font-medium'
            style={{
              fontFamily: "'Playfair Display', serif",
              color: 'var(--deep-brown)',
            }}
          >
            {product.name}
          </h2>
        </Link>
        <div className='flex-between gap-4'>
          <Rating value={Number(product.rating)} />
          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className='text-destructive'>Out Of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
