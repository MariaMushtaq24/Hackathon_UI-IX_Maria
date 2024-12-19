"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { CiCircleAlert } from "react-icons/ci";
import { BsCartDash } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="">
      {/* TopBar */}
      <div className="bg-[#272343] text-gray-200 py-1 md:flex justify-between items-center sm:px-12 md:px-28">
        <div className="text-sm flex">
          <FaCheck /> Free shipping on all orders over $50
        </div>
        <div className="flex items-center space-x-6 text-sm">
          <div>Eng</div>
          <div>FAQs</div>
          <div className="flex items-center space-x-1">
            <CiCircleAlert size={14} />
            <span>Need Help</span>
          </div>
        </div>
      </div>

      {/*MidBar*/}
      <div className="lex justify-between items-center bg-gray-100 border-8 border-gray-100 px-4 sm:px-12 md:px-28">
        <div className="container mx-auto flex justify-between items-center">
          {/* logo */}
          <div className="flex items-center space-x-2 size-8">
          <img src="/images/Logo icon.png" alt="Comforty Logo" />
            <span className="text-xl font-bold text-gray-600">Comforty</span>
          </div>

          {/* cart */}
          <div className="relative hidden md:flex justify-between items-center">
            <BsCartDash size={25} className="text-gray-700" />
            <span className="absolute top-0 right-0 bg-teal-600 text-white text-xs rounded-full px-1">
              2
            </span>
          </div>

          {/* mobile menu */}
          <div className="md:hidden flex items-center">
            <FaBars
              size={20}
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer text-gray-800"
            />
          </div>
        </div>
      </div>

      {/*Navbar Menu and Contact*/}
      <div className="hidden py-2 bg-white md:flex justify-between px-28">
        <div className="container flex justify-between">
          {/* Links */}
          <div className="flex space-x-5 font-thin text-gray-700">
            <a href="/Home" className="hover:text-teal-600">
              Home
            </a>
            <a href="/Shop" className="hover:text-teal-600">
              Shop
            </a>
            <a href="/Products" className="hover:text-teal-600">
              Products
            </a>
            <a href="/Pages" className="hover:text-teal-600">
              Pages
            </a>
            <a href="/About" className="hover:text-teal-600">
              About
            </a>
          </div>
          {/* contact */}
          <div className="display: flex; flex-direction: row; align-items: flex-start; padding: 0px; gap: 8px; margin: 0 auto; width:168px; height: 15px;">
            <span className="text-gray-800">Contact: </span>
            <span className="text-gray-500">(808) 555-0111</span>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white py-2 space-y-1 text-gray-700">
          <a href="Home.html" className="hover:text-teal-600">
            Home
          </a>
          <a href="Shop.html" className="hover:text-teal-600">
            Shop
          </a>
          <a href="Products.html" className="hover:text-teal-600">
            Products
          </a>
          <a href="Pages.html" className="hover:text-teal-600">
            Pages
          </a>
          <a href="About.html" className="hover:text-teal-600">
            About
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
