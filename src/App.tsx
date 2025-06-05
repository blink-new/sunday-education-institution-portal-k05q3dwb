import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StudentDashboard from './pages/dashboard/StudentDashboard';
import EmployeeDashboard from './pages/dashboard/EmployeeDashboard';
import PrincipalDashboard from './pages/dashboard/PrincipalDashboard';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// For now, we'll simulate auth state. Replace with actual auth logic later.
const isAuthenticated = () => {
  return !!localStorage.getItem('userRole'); 
};

const getUserRole = () => {
  return localStorage.getItem('userRole') as 'student' | 'employee' | 'principal' | 'admin' | null;
};

interface ProtectedRouteProps {
  element: React.ReactElement;
  allowedRoles?: Array<'student' | 'employee' | 'principal' | 'admin'>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, allowedRoles }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  const userRole = getUserRole();
  if (allowedRoles && userRole && !allowedRoles.includes(userRole)) {
    alert('Access Denied. You do not have permission to view this page.');
    // Redirect to a default accessible page or a specific unauthorized page
    // For now, redirecting to student dashboard or home if role mismatch
    // This logic needs refinement based on actual application flow
    return <Navigate to={userRole === 'student' ? '/dashboard/student' : '/'} replace />;
  }
  return element;
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Protected Dashboard Routes */}
            <Route 
              path="/dashboard/student" 
              element={<ProtectedRoute element={<StudentDashboard />} allowedRoles={['student', 'admin', 'principal']} />}
            />
            <Route 
              path="/dashboard/employee" 
              element={<ProtectedRoute element={<EmployeeDashboard />} allowedRoles={['employee', 'admin', 'principal']} />}
            />
            <Route 
              path="/dashboard/principal" 
              element={<ProtectedRoute element={<PrincipalDashboard />} allowedRoles={['principal', 'admin']} />}
            />
            <Route 
              path="/dashboard/admin" 
              element={<ProtectedRoute element={<AdminDashboard />} allowedRoles={['admin']} />}
            />
            
            {/* Redirect to login if trying to access a dashboard route without being authenticated */}
            <Route path="/dashboard" element={<Navigate to="/login" />} /> 

            {/* Fallback for unknown routes - maybe a 404 page later */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
