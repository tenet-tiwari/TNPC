


import React, { useState } from 'react';
import axios from 'axios';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    scholarId: '',
    branch: '',
    email: '',
    query: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:5000/api/query/submit', formData);
      if (response.status === 201) {
        window.alert('Query submitted successfully!');
        setFormData({
          name: '',
          scholarId: '',
          branch: '',
          email: '',
          query: '',
        });
      } else {
        window.alert('Failed to submit query. Please try again.');
      }
    } catch (error) {
      window.alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-100 flex flex-col items-center w-full">
      <div className="w-screen mb-0">
        <form className="bg-gray-500 p-4 rounded w-full text-white" onSubmit={handleSubmit}>
          <h3 className="flex justify-center text-xl text-white font-bold mb-2">Send us a Query</h3>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="w-full p-2 mb-2 rounded bg-gray-700"
            required
          />
          <input
            type="text"
            name="scholarId"
            value={formData.scholarId}
            onChange={handleInputChange}
            placeholder="Scholar ID"
            className="w-full p-2 mb-2 rounded bg-gray-700"
            required
          />
          <input
            type="text"
            name="branch"
            value={formData.branch}
            onChange={handleInputChange}
            placeholder="Branch"
            className="w-full p-2 mb-2 rounded bg-gray-700"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full p-2 mb-2 rounded bg-gray-700"
            required
          />
          <textarea
            name="query"
            value={formData.query}
            onChange={handleInputChange}
            placeholder="Your Query"
            className="w-full p-2 mb-2 rounded bg-gray-700"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-black w-full p-2 rounded hover:bg-gray-800 transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>

      <footer className="bg-gray-800 text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center w-full">
          <div>
            <p className="text-lg font-bold">National Institute of Technology Silchar</p>
            <p>
              Cachar, Assam. Pin Code: 788010.
              <br />
              Phone No.: 03842-242183
              <br />
              Fax: 03842-224797
            </p>
          </div>
          <div>
            <div className="flex justify-center mt-4 space-x-10 animate-pulse">
              <a href="https://x.com/" className="text-gray-300 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="https://youtube.com/@nitsilcharofficialyoutubec1720?si=TfZGpUNq4kNu9V-d" className="text-gray-300 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="https://www.facebook.com" className="text-gray-300 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com" className="text-gray-300 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V8.96h3.56v11.49zM5.34 7.43c-1.14 0-1.89-.75-1.89-1.68 0-.94.76-1.68 1.93-1.68s1.89.74 1.89 1.68c-.01.93-.75 1.68-1.93 1.68zM20.45 20.45h-3.55v-5.59c0-1.4-.5-2.36-1.75-2.36-.96 0-1.53.65-1.78 1.28-.09.21-.11.5-.11.79v5.88h-3.55s.05-9.55 0-10.54h3.55v1.49c.47-.73 1.3-1.79 3.16-1.79 2.31 0 4.04 1.51 4.04 4.76v6.08z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <p className="text-sm text-center py-4">&copy; {new Date().getFullYear()} National Institute of Technology Silchar TNPC. All rights reserved.</p>
      </footer>
    </footer>
  );
};

export default Footer;


