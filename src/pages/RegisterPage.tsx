import { useRegisterUserMutation } from '../features/auth/authApi';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../features/auth/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import { useState, type FormEvent } from 'react';
import { type AppDispatch } from '../app/store';
// import '../styles/AuthForm.css';

const RegisterPage = () => {
  const [registerUser] = useRegisterUserMutation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await registerUser(formData);
    if ('data' in res && res.data?.token) {
      dispatch(setCredentials({ user: formData.email, token: res.data.token }));
      navigate('/products');
    } else {
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Register</h2>
      <input placeholder="Email" type="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
      <input placeholder="Password" type="password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
      <button type="submit">Register</button>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </form>
  );
};

export default RegisterPage;