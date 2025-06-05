import React from 'react';

const PrincipalDashboard: React.FC = () => {
  return (
    <div className="p-8 font-inter bg-slate-50 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold font-poppins text-sky-700 mb-8">Principal Dashboard</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-poppins text-slate-700 mb-4">View Students</h2>
            <p className="text-slate-600 mb-4">Browse and manage student records.</p>
            <button className="bg-sky-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-sky-700 transition-colors">
              Student Records
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-poppins text-slate-700 mb-4">View Employees</h2>
            <p className="text-slate-600 mb-4">Access and manage employee information.</p>
            <button className="bg-sky-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-sky-700 transition-colors">
              Employee Records
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-poppins text-slate-700 mb-4">School Analytics</h2>
            <p className="text-slate-600 mb-4">Overview of attendance, results, and admissions.</p>
            <button className="bg-amber-400 text-sky-700 font-semibold px-6 py-2 rounded-lg hover:bg-amber-500 transition-colors">
              View Reports
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default PrincipalDashboard;
