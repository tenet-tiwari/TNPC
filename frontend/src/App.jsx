// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import StudentDashboard from './pages/StudentDashboard';
// import EditProfile from './pages/EditProfile';
// import JobPostingPage from './pages/JobPostingPage';
// import JobDescriptionPage from './pages/JobDescriptionPage';
// import ApplicationPage from './pages/ApplicationPage';
// import EventSessionPage from './pages/EventSessionPage';
// import TrainingCoursesPage from './pages/TrainingCoursesPage';
// import AdminDashboard from './pages/AdminDashboard';
// import NewJobPosting from './pages/NewJobPosting';
// import NewTraining from './pages/NewTraining';
// import NewEvent from './pages/NewEvent';
// import PlacementStats from './pages/PlacementStats';
// import JobPosting from './pages/JobPosting';
// import JobApplications from './pages/JobApplications';
// import ProtectedRoute from './components/ProtectedRoute';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/student-dashboard" element={<ProtectedRoute><StudentDashboard /></ProtectedRoute>} />
//         <Route path="/edit-profile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
//         <Route path="/job-postings" element={<ProtectedRoute><JobPostingPage /></ProtectedRoute>} />
//         <Route path="/job-description/:id" element={<ProtectedRoute><JobDescriptionPage /></ProtectedRoute>} />
//         <Route path="/job-description/:id/apply" element={<ProtectedRoute><ApplicationPage /></ProtectedRoute>} />
//         <Route path="/events-sessions" element={<ProtectedRoute><EventSessionPage /></ProtectedRoute>} />
//         <Route path="/training-courses" element={<ProtectedRoute><TrainingCoursesPage /></ProtectedRoute>} />
//         <Route path="/admin-dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
//         <Route path="/admin/add-job-posting" element={<ProtectedRoute><NewJobPosting /></ProtectedRoute>} />
//         <Route path="/admin/add-training-course" element={<ProtectedRoute><NewTraining /></ProtectedRoute>} />
//         <Route path="/admin/add-session-event" element={<ProtectedRoute><NewEvent /></ProtectedRoute>} />
//         <Route path="/admin/change-placement-stats" element={<ProtectedRoute><PlacementStats /></ProtectedRoute>} />
//         <Route path="/admin/job-posting" element={<ProtectedRoute><JobPosting /></ProtectedRoute>} />
//         <Route path="/admin/job-description/:id" element={<ProtectedRoute><JobApplications /></ProtectedRoute>} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {RouteProvider } from './context/RouteContext';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import StudentDashboard from './pages/StudentDashboard';
import EditProfile from './pages/EditProfile';
import JobPostingPage from './pages/JobPostingPage';
import JobDescriptionPage from './pages/JobDescriptionPage';
import ApplicationPage from './pages/ApplicationPage';
import EventSessionPage from './pages/EventSessionPage';
import TrainingCoursesPage from './pages/TrainingCoursesPage';
import AdminDashboard from './pages/AdminDashboard';
import NewJobPosting from './pages/NewJobPosting';
import NewTraining from './pages/NewTraining';
import NewEvent from './pages/NewEvent';
import PlacementStats from './pages/PlacementStats';
import JobPosting from './pages/JobPosting';
import JobApplications from './pages/JobApplications';
import ProtectedRoute from './components/ProtectedRoute';
import NotAuthorized from './pages/NotAuthorized';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <RouteProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student-dashboard" element={<ProtectedRoute requiredRole="student"><StudentDashboard /></ProtectedRoute>} />
        <Route path="/edit-profile" element={<ProtectedRoute requiredRole="student"><EditProfile /></ProtectedRoute>} />
        <Route path="/job-postings" element={<ProtectedRoute requiredRole="student"><JobPostingPage /></ProtectedRoute>} />
        <Route path="/job-description/:id" element={<ProtectedRoute requiredRole="student"><JobDescriptionPage /></ProtectedRoute>} />
        <Route path="/job-description/:id/apply" element={<ProtectedRoute requiredRole="student"><ApplicationPage /></ProtectedRoute>} />
        <Route path="/events-sessions" element={<ProtectedRoute requiredRole="student"><EventSessionPage /></ProtectedRoute>} />
        <Route path="/training-courses" element={<ProtectedRoute requiredRole="student"><TrainingCoursesPage /></ProtectedRoute>} />
        <Route path="/admin-dashboard" element={<ProtectedRoute requiredRole="admin"><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/add-job-posting" element={<ProtectedRoute requiredRole="admin"><NewJobPosting /></ProtectedRoute>} />
        <Route path="/admin/add-training-course" element={<ProtectedRoute requiredRole="admin"><NewTraining /></ProtectedRoute>} />
        <Route path="/admin/add-session-event" element={<ProtectedRoute requiredRole="admin"><NewEvent /></ProtectedRoute>} />
        <Route path="/admin/change-placement-stats" element={<ProtectedRoute requiredRole="admin"><PlacementStats /></ProtectedRoute>} />
        <Route path="/admin/job-posting" element={<ProtectedRoute requiredRole="admin"><JobPosting /></ProtectedRoute>} />
        <Route path="/admin/job-description/:id" element={<ProtectedRoute requiredRole="admin"><JobApplications /></ProtectedRoute>} />
        <Route path="/not-authorized" element={<NotAuthorized />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
    </RouteProvider>
  );
};

export default App;

