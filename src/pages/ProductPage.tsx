import { useGetProductsQuery } from '../features/products/productsApi';
import ProductCard from '../components/ProductCard.tsx';
import '../styles/ProductPage.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/auth/authSlice.ts';

const ProductPage = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () =>{
    dispatch(logout());
    navigate('/')
  }

  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <p>Error loading products</p>;


  return (
    <div className="container">
      <div className="header">
        <button className onClick={handleLogout}>Logout</button>
      </div>
    <div className='product-card-container'>
      {data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
};

export default ProductPage;