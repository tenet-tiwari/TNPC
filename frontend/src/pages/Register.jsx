
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo3 from '../assets/Auth/logo3.svg';

const Register = () => {
  const [role, setRole] = useState('student');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('Male');
  const [scholarId, setScholarId] = useState('');
  const [branch, setBranch] = useState('CSE');
  const [passingYear, setPassingYear] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminPassKey, setAdminPassKey] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleRegister = async () => {
    const formData = new FormData();
    formData.append('role', role);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('gender', gender);
    formData.append('scholarId', scholarId);
    formData.append('branch', branch);
    formData.append('passingYear', passingYear);
    formData.append('adminPassKey', adminPassKey);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post('https://tnpc.onrender.com/api/auth/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

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
      console.error('Registration error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-4 animate-bounce">Register</h1>
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 shadow-2xl bg-gradient-to-r from-blue-100 via-green-100 to-purple-100 animate-gradient-x p-4">
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
                  <label className="block mb-1">Student Name</label>
                  <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className="w-full p-2 border border-gray-300 rounded" 
                  />
                </div>
                <div>
                  <label className="block mb-1">Gender</label>
                  <select 
                    value={gender} 
                    onChange={handleGenderChange} 
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1">Scholar ID</label>
                  <input 
                    type="text" 
                    value={scholarId} 
                    onChange={(e) => setScholarId(e.target.value)} 
                    className="w-full p-2 border border-gray-300 rounded" 
                  />
                </div>
                <div>
                  <label className="block mb-1">Branch</label>
                  <select 
                    value={branch} 
                    onChange={handleBranchChange} 
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                    <option value="ME">ME</option>
                    <option value="CE">CE</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1">Passing Year</label>
                  <input 
                    type="text" 
                    value={passingYear} 
                    onChange={(e) => setPassingYear(e.target.value)} 
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
                <div>
                  <label className="block mb-1">Image</label>
                  <input 
                    type="file" 
                    onChange={handleImageChange} 
                    className="w-full p-2 border border-gray-300 rounded" 
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block mb-1">Admin Name</label>
                  <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className="w-full p-2 border border-gray-300 rounded" 
                  />
                </div>
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
                <div>
                  <label className="block mb-1">Image</label>
                  <input 
                    type="file" 
                    onChange={handleImageChange} 
                    className="w-full p-2 border border-gray-300 rounded" 
                  />
                </div>
              </>
            )}
            <button 
              onClick={handleRegister} 
              className="w-full bg-blue-400 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Register
            </button>
            <p className="text-center mt-4">
              Already registered?{' '}
              <a href="/login" className="text-blue-500 hover:underline">Login</a>
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-cover bg-center relative hidden md:block">
            <img src={logo3} alt="Register" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

