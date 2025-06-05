import React from 'react';

const EmployeeDashboard: React.FC = () => {
  return (
    <div className="p-8 font-inter bg-slate-50 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold font-poppins text-sky-700 mb-8">Employee Dashboard</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-poppins text-slate-700 mb-4">Mark Attendance</h2>
            <p className="text-slate-600 mb-4">Select class and date to mark student attendance.</p>
            {/* Placeholder for attendance marking tool */}
            <button className="bg-sky-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-sky-700 transition-colors">
              Open Attendance Register
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-poppins text-slate-700 mb-4">Publish Assignments</h2>
            <p className="text-slate-600 mb-4">Create and publish new assignments for your classes.</p>
            {/* Placeholder for assignment publishing tool */}
            <button className="bg-amber-400 text-sky-700 font-semibold px-6 py-2 rounded-lg hover:bg-amber-500 transition-colors">
              Create New Assignment
            </button>
          </div>
        </div>
        
        {/* Add more sections like view student results, etc. */}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
