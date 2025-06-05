import React from 'react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="p-8 font-inter bg-slate-50 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold font-poppins text-sky-700 mb-8">Admin Dashboard</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-poppins text-slate-700 mb-4">Manage Admissions</h2>
            <p className="text-slate-600 mb-4">Review applications and grant admissions.</p>
            <button className="bg-sky-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-sky-700 transition-colors">
              View Applications
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-poppins text-slate-700 mb-4">Manage Users</h2>
            <p className="text-slate-600 mb-4">Control student, employee, and principal accounts.</p>
            <button className="bg-sky-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-sky-700 transition-colors">
              User Management
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-poppins text-slate-700 mb-4">System Settings</h2>
            <p className="text-slate-600 mb-4">Configure portal settings and manage content.</p>
            <button className="bg-amber-400 text-sky-700 font-semibold px-6 py-2 rounded-lg hover:bg-amber-500 transition-colors">
              Go to Settings
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-poppins text-slate-700 mb-4">Exam Registration Control</h2>
            <p className="text-slate-600 mb-4">Oversee and manage exam registrations.</p>
            <button className="bg-sky-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-sky-700 transition-colors">
              Exam Registrations
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-poppins text-slate-700 mb-4">Result Publishing Control</h2>
            <p className="text-slate-600 mb-4">Approve and publish student results.</p>
            <button className="bg-sky-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-sky-700 transition-colors">
              Publish Results
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AdminDashboard;
