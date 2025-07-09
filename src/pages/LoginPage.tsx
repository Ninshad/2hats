import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../features/auth/authApi';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../features/auth/authSlice';

const LoginPage = () => {
    const [formData, setFormData] = useState({email: '', password: ''});
    // const [loginUser, { data, error, isLoading }] = useLoginUserMutation();
    const [loginUser] = useLoginUserMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const res = await loginUser(formData);
        if('data' in res && res.data?.token) {
            dispatch(setCredentials({ user: formData.email, token: res.data.token}));
            navigate('/products');
        } else {
            alert('Login Failed');
        }
    }
  return (
    <form onSubmit={handleSubmit} className='auth-form'>
        <h2>Login</h2>
        <input type="email" placeholder='Email' onChange={(e) => setFormData({...formData, email: e.target.value})} required />
        <input type="password" placeholder='Password' onChange={(e) => setFormData({...formData, password: e.target.value})} required />
        <button type='submit'>Login</button>
        <p>Don'thave an account? <Link to='/register'>Register</Link></p>
    </form>
  )
}

export default LoginPage
