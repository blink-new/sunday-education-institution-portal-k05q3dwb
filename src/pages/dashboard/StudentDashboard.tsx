import React from 'react';

const StudentDashboard: React.FC = () => {
  return (
    <div className="p-8 font-inter bg-slate-50 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold font-poppins text-sky-700 mb-8">Student Dashboard</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-poppins text-slate-700 mb-4">My Assignments</h2>
            <p className="text-slate-600 mb-2">No new assignments. Check back later!</p>
            {/* Placeholder for assignment list */}
            <a href="#" className="text-sky-600 hover:text-sky-700 font-semibold">View All Assignments &rarr;</a>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-poppins text-slate-700 mb-4">My Results</h2>
            <p className="text-slate-600 mb-2">Your latest results will appear here.</p>
            {/* Placeholder for results */}
            <a href="#" className="text-sky-600 hover:text-sky-700 font-semibold">View My Grades &rarr;</a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-poppins text-slate-700 mb-4">Latest News & Announcements</h2>
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-amber-400 bg-amber-50">
              <h3 className="font-semibold text-slate-700">Upcoming Exam Registration</h3>
              <p className="text-sm text-slate-600">Registration for the mid-term exams opens next Monday. Don't miss the deadline!</p>
            </div>
            <div className="p-4 border-l-4 border-sky-400 bg-sky-50">
              <h3 className="font-semibold text-slate-700">Holiday Notice</h3>
              <p className="text-sm text-slate-600">The school will be closed for the upcoming public holiday. Classes resume the following week.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudentDashboard;
