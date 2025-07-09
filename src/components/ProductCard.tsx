import '../styles/ProductCard.css';
import { type Product } from '../features/products/productsApi';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const navigate = useNavigate()
  
  return (
    <div className="card">
      <img src={product.avatar} alt={product.first_name} />
      <div className="hover-icons">
        <i onClick={() => navigate('./wishlist')}><FaHeart className='icon-heart'/></i>
        <i><FaShoppingCart className='icon-cart'/></i>
      </div>
      <p style={{ textAlign: 'center', marginTop: '0.5rem' }}>{product.first_name}</p>
    </div>
  );
};

export default ProductCard;