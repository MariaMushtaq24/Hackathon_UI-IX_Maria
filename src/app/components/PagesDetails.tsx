import React from 'react';

const Pages = () => {
  const mainPages = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Products', link: '/products' },
    { name: 'Shop', link: '/shop' },
    { name: 'Pages', link: '/pages' },
  ];

  return (
    <div className="min-h-screen bg-[#029FAE] py-8">
      <div className="container sm:px-8 md:px-16 lg:px-28 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Main Pages of the Website</h1>
        
        <ul className="space-y-8">
          {mainPages.map((page, index) => (
            <li key={index} className="bg-gray-100 font-semi-bold shadow-md rounded-md p-4 hover:text-[#029FAE] transition-all">
              <a href={page.link} className="text-xl text-black hover:text-[#029FAE]">{page.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pages;