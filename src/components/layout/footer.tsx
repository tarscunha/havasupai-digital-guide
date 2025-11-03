'use client';

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8 px-6 md:px-12 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/b/b8/National_Park_Service_%2848754079298%29.jpg')",
        }}
      />
      <div className="container mx-auto text-center relative z-10">
        <p>&copy; {currentYear} Havasupai Tribe. All Rights Reserved.</p>
        <p className="text-sm mt-2 opacity-80">Respect the land, respect the culture.</p>
      </div>
    </footer>
  );
};

export default Footer;
