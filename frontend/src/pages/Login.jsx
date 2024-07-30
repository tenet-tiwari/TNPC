



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo4 from '../assets/Auth/logo4.svg';

const Login = () => {
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [scholarId, setScholarId] = useState('');
  const [adminPassKey, setAdminPassKey] = useState('');
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleLogin = async () => {
    const loginData = {
      role,
      email,
      password,
    };

    if (role === 'student') {
      loginData.scholarId = scholarId;
    } else {
      loginData.adminPassKey = adminPassKey;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', loginData);
      const { token } = response.data;

      if (token) {
        localStorage.setItem('authToken', token);
      }

      if (role === 'student') {
        navigate('/student-dashboard');
      } else {
        navigate('/admin-dashboard');
      }
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-4 animate-bounce">Login</h1>
      <div className="min-h-screen flex items-center justify-center shadow-2xl bg-gradient-to-r from-blue-100 via-green-100 to-purple-100 animate-gradient-x p-4">
        <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
          <div className="w-full md:w-1/2 p-8 space-y-4">
            <div>
              <label className="block mb-1">Role</label>
              <select 
                value={role} 
                onChange={handleRoleChange} 
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="student">Student</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            
            {role === 'student' ? (
              <>
                <div>
                  <label className="block mb-1">Scholar Id</label>
                  <input 
                    type="text" 
                    value={scholarId} 
                    onChange={(e) => setScholarId(e.target.value)} 
                    className="w-full p-2 border border-gray-300 rounded" 
                  />
                </div>
                <div>
                  <label className="block mb-1">Institute Email</label>
                  <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="w-full p-2 border border-gray-300 rounded" 
                  />
                </div>
                <div>
                  <label className="block mb-1">Password</label>
                  <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="w-full p-2 border border-gray-300 rounded" 
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block mb-1">Admin Pass Key</label>
                  <input 
                    type="password" 
                    value={adminPassKey} 
                    onChange={(e) => setAdminPassKey(e.target.value)} 
                    className="w-full p-2 border border-gray-300 rounded" 
                  />
                </div>
                <div>
                  <label className="block mb-1">Email</label>
                  <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="w-full p-2 border border-gray-300 rounded" 
                  />
                </div>
                <div>
                  <label className="block mb-1">Password</label>
                  <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="w-full p-2 border border-gray-300 rounded" 
                  />
                </div>
              </>
            )}
            <button 
              onClick={handleLogin} 
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
            <p className="text-center mt-4">
              Not registered?{' '}
              <a href="/register" className="text-blue-500 hover:underline">Register</a>
            </p>
          </div>
          <div className="w-full md:w-1/2 relative hidden md:block">
            <img src={logo4} alt="Login" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

