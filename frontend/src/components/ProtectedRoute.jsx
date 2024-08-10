// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem('authToken');

//   if (!token) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;

// import React, { useEffect, useState } from 'react';
// import { Navigate } from 'react-router-dom';
// import axios from 'axios';

// const ProtectedRoute = ({ children, requiredRole }) => {
//   const [isAuthorized, setIsAuthorized] = useState(null);

//   useEffect(() => {
//     const verifyTokenAndRole = async () => {
//       const token = localStorage.getItem('authToken');

//       if (!token) {
//         setIsAuthorized(false);
//         return;
//       }

//       try {
//         const response = await axios.get('http://localhost:5000/api/auth/verification', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const { role } = response.data;

//         if (requiredRole && role !== requiredRole) {
//           setIsAuthorized(false);
//         } else {
//           setIsAuthorized(true);
//         }
//       } catch (error) {
//         setIsAuthorized(false);
//       }
//     };

//     verifyTokenAndRole();
//   }, [requiredRole]);

//   if (isAuthorized === null) {
//     return <div>Loading...</div>; // Show a loading indicator while checking authorization
//   }

//   if (!isAuthorized) {
//     // return <Navigate to="/" replace />;
//     return null;
//   }

//   return children;
// };

// export default ProtectedRoute;










// src/components/ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRoute } from '../../src/context/RouteContext';

const ProtectedRoute = ({ children, requiredRole }) => {
  const [isAuthorized, setIsAuthorized] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { previousRoute, setPreviousRoute } = useRoute();

  useEffect(() => {
    // console.log('ProtectedRoute previousRoute:', previousRoute); // Debugging statement
  }, [previousRoute]);

  useEffect(() => {
    const verifyTokenAndRole = async () => {
      const token = localStorage.getItem('authToken');

      if (!token) {
        setIsAuthorized(false);
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/auth/verification', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { role } = response.data;

        if (requiredRole && role !== requiredRole) {
          setIsAuthorized(false);
        } else {
          setIsAuthorized(true);
        }
      } catch (error) {
        setIsAuthorized(false);
      }
    };

    verifyTokenAndRole();
  }, [requiredRole]);

  useEffect(() => {
    if (isAuthorized === false) {
      // Redirect to the previous route or fallback page
      console.log(previousRoute);
      navigate(previousRoute || '/not-authorized', { replace: true });
    } else if (isAuthorized === true) {
      setPreviousRoute(location.pathname); // Track the successful route
    }
  }, [isAuthorized, navigate, previousRoute, location.pathname, setPreviousRoute]);

  if (isAuthorized === null) {
    return <div>Loading...</div>; // Show a loading indicator while checking authorization
  }

  if (!isAuthorized) {
    return null; // Do not render anything if unauthorized
  }

  return children;
};

export default ProtectedRoute;



