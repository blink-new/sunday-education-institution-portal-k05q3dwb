import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sky-700 text-sky-100 p-6 text-center font-inter mt-12">
      <p>&copy; {new Date().getFullYear()} Sunday School Education Portal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
