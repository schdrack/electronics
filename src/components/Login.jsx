/**
    * @description      : 
    * @author           : Schadrack
    * @group            : 
    * @created          : 29/04/2025 - 12:38:56
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 29/04/2025
    * - Author          : Schadrack
    * - Modification    : 
**/
// components/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Show success message if redirected from registration
  const registrationSuccess = location.state?.registered;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginError('');
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        // Get stored user data (replace with actual API call)
        const userData = JSON.parse(localStorage.getItem('userData'));
        
        if (userData && 
            userData.email === formData.email && 
            userData.password === formData.password) {
          // Login successful - redirect to home
          navigate('/');
        } else {
          setLoginError('Invalid email or password');
        }
        
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      
      {registrationSuccess && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          Registration successful! Please login.
        </div>
      )}
      
      {loginError && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {loginError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-blue-400"
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;