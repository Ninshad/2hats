// ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../app/hooks'; 

const ProtectedRoute = () => {
  const token = useAppSelector((state) => state.auth.token);
  
  return token ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
