
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TrainingCoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        window.alert('No token found. Please log in.');
        return;
      }
      try {
        const response = await axios.get('http://localhost:5000/api/training/all', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCourses(response.data);
      } catch (error) {
        setError('Failed to fetch courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div className="text-center text-xl font-semibold">Loading courses...</div>;
  }

  if (error) {
    return <div className="text-center text-xl font-semibold text-red-600">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 via-pink-100 to-red-200 animate-gradient-x p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-blue-950 text-white p-3 rounded-xl flex justify-center">Available Training Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <div key={course._id} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">{course.trainingTopic}</h2>
              <h3 className="text-lg font-medium mb-4 text-blue-600">Tutor: {course.
                tutorName}</h3>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <Link to={course.link}>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  Attend Course
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingCoursesPage;

