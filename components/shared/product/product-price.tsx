import { cn } from '@/lib/utils';

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  const intValue = Math.round(value).toString();

  return (
    <p className={cn('text-2xl', className)}>
      <span className='text-xs align-super'>₹</span>
      {intValue}
    </p>
  );
};

export default ProductPrice;
