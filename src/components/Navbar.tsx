import React from 'react';
import { Link } from 'react-router-dom';
import { Home, LogIn, UserPlus, LayoutDashboard } from 'lucide-react';

const Navbar: React.FC = () => {
  // Simulate user role - replace with actual auth context later
  const userRole = localStorage.getItem('userRole'); // e.g., 'student', 'admin'

  const getDashboardLink = () => {
    switch (userRole) {
      case 'student':
        return "/dashboard/student";
      case 'employee':
        return "/dashboard/employee";
      case 'principal':
        return "/dashboard/principal";
      case 'admin':
        return "/dashboard/admin";
      default:
        return "/login"; // Fallback if role not set or unknown
    }
  };

  return (
    <nav className="bg-sky-600 p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold font-poppins">
          Sunday School
        </Link>
        <div className="space-x-4 flex items-center">
          <Link to="/" className="text-sky-100 hover:text-white font-inter flex items-center">
            <Home size={20} className="mr-1" /> Home
          </Link>
          
          {userRole ? (
            <Link to={getDashboardLink()} className="text-sky-100 hover:text-white font-inter flex items-center">
              <LayoutDashboard size={20} className="mr-1" /> Dashboard
            </Link>
          ) : (
            <>
              <Link to="/login" className="text-sky-100 hover:text-white font-inter flex items-center">
                <LogIn size={20} className="mr-1" /> Login
              </Link>
              <Link to="/register" className="text-sky-100 hover:text-white font-inter flex items-center">
                <UserPlus size={20} className="mr-1" /> Register
              </Link>
            </>
          )}
          {/* We can add a logout button here when a user is logged in */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
