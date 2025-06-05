import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button'; // Assuming you have a Button component
import { Newspaper, Users, BookOpen } from 'lucide-react';

const LandingPage: React.FC = () => {
  // Placeholder news items
  const newsItems = [
    {
      id: 1,
      title: 'Welcome Back to Sunday School!',
      date: 'August 20, 2024',
      summary: 'We are excited to welcome all students and teachers back for a new session. Join us for an orientation on Sunday.',
    },
    {
      id: 2,
      title: 'Annual Charity Drive Announced',
      date: 'August 15, 2024',
      summary: 'This year, our Sunday School will be supporting the local food bank. Donations can be dropped off at the main office.',
    },
    {
      id: 3,
      title: 'Parent-Teacher Meeting Next Week',
      date: 'August 10, 2024',
      summary: 'A meeting for parents and teachers will be held next Saturday to discuss the upcoming curriculum and events.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 font-inter">
      {/* Hero Section */}
      <section className="bg-sky-600 text-white py-20 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold font-poppins mb-6">
            Welcome to the Sunday School Education Portal
          </h1>
          <p className="text-xl font-inter mb-8 text-sky-100">
            Your central hub for admissions, learning, news, and community engagement.
          </p>
          <div className="space-x-4">
            <Button asChild variant="default" size="lg" className="bg-amber-400 hover:bg-amber-500 text-sky-700 font-poppins">
              <Link to="/register">Apply for Admission</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-sky-100 text-sky-100 hover:bg-sky-700 hover:text-white font-poppins">
              <Link to="/login">Portal Login</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links/Features Overview - Optional, can be added later */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold font-poppins text-sky-700 mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <BookOpen size={48} className="text-amber-400 mb-4" />
              <h3 className="text-xl font-poppins text-sky-700 mb-2">Structured Learning</h3>
              <p className="text-slate-600 text-center">
                Engaging lessons and assignments tailored for spiritual growth.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Users size={48} className="text-amber-400 mb-4" />
              <h3 className="text-xl font-poppins text-sky-700 mb-2">Community Portal</h3>
              <p className="text-slate-600 text-center">
                Connect with students, parents, and teachers in a secure environment.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Newspaper size={48} className="text-amber-400 mb-4" />
              <h3 className="text-xl font-poppins text-sky-700 mb-2">Stay Updated</h3>
              <p className="text-slate-600 text-center">
                Get the latest news, event announcements, and important updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section id="latest-news" className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold font-poppins text-sky-700 mb-12 text-center">
            Latest News & Announcements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <h3 className="text-xl font-poppins text-sky-700 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 mb-3">{item.date}</p>
                <p className="text-slate-600 font-inter flex-grow">{item.summary}</p>
                <Button variant="link" className="mt-4 text-sky-600 hover:text-sky-700 p-0 self-start">
                  Read More &rarr;
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
