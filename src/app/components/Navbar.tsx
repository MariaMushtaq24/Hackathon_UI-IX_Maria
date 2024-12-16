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
      <div className="lex justify-between items-center bg-gray-100 border-4 border-green-500 px-4 sm:px-12 md:px-28">
        <div className="container mx-auto flex justify-between items-center">
          {/* logo */}
          <div className="flex items-center space-x-2 size-8">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAk1BMVEX///8AgAAAfgAAegDk8eQAfAAAdwDn8Oc1jDUAcwAAdQD7/vsxiDHQ39Dq8+o7kDvw9vBDkkOLuYt4tHjR5NHa69qRvZGBr4Fzq3O61LpLlkvM48wSgBK+2r6GuoZeol57sHtUmFSnzKdXolc4kzix0bFurG4lhiWdxp1Pnk9joWMciRwAhgAvjy8mjCZnqWeYvJh96p9TAAAGV0lEQVR4nO2b7XaqOhCGm4SkCj2ICNQCgqKglqr7/q/uAIIfyESwQPZei+dPu5aYeZ0kk8kkvL0NDAwMDAwMDAwMDHBRFC1DvfBek+s3sgaUlgRJobWcf/urlW3b05RJyuiGj1tG92QPT9Kv2avV6nu+tELzl4JUY44YowmYA7qF9yDGSUuModOX9LqPrAkjqAOovNVf85ekjxl+buBVXeNvo7mmxYh1piiDIKvhsNf8cXdeKmBxI2eZdidjqQx2g/qaDEL70JQwtupqcuLuu66AejX7rsNJ94is19GkTvvUlPgqrCFq1XEoKIPJ8zkY9DLvbqH+s3hluv12XgrbPRF16t1RSQdu+euz01eAuoN88jQpcyGiEHrnjShBmrijyuo5HBTQPUdUz3HzigvnfIYrSBOicLoQChpSiag5GEB1AUHqDI41QJOyFuYpJEPxU/sRpgnJC0CUOhYnikEj3RApCsr13n8wJrLca+KZpFPymGDEZtDsSwe7urD8uLdZSJHtLaQ6+z/F9Ggv6w2V1w4UCqrw4s7DA8anpnUO89BxH1K8aF6tUvROu5CsXisHeR32IFnXG0ya6TiOefusJXemyb+xo5hGyXCBs5xuMXI/bM+5Pn3qyFcYqRcjpmd/uNjd2lF5jDl+GsGy54nsX2Spm44C6WWlM2eMFYbHm7vN8s69dQnFl3JW2EkHkkv4XtwZxiS6enBenmfssmnddNGBtDC9I6WeYKPio4rtApvlqrpIRklRlAofDRczYFFlt0glNLv9UXXII5RZtSVg82yKoSqzGBWuan1UsaJOVp3oymkRZldttdgfKoe2XYXz7bBTnb7Rb+VNW1UbxZN8yMG1ofMJAnnkfEIBfIvkjlIiYLgme0ATMlmMKvVQPuegLAX/xJv93j/Nl596gpWS/vO5nJ/89WRzRNmDJBV4ZzOvkRkcw1/QsovjYt7mT+DEB2g7mu5P3i50JElTUt6qyD7RVMlYBF60no62KPHoWRqJ8mfAohP55JQPWB521ThpUWZoE1nhwpCaZGW5RMl0Qmu+QanfSL5Bl8BRQT85G1BcRNDgsPaCygWzoTgz9PZFjILtJqKWcC6HjeKXtnV2mHbs+W95pN6LsmBRdN2algd2cAaZiKoI9dePXz8rfMYRjn7JQAdDArqGlGrS6WU6X2Fg6d5ydsbzrF0Qho4pqdwu57kiCQm8xQ0f1Oo2NWOx807+5IgpSWPWNW5mIYxQdLD9yAsWJhAyeNljOpQDnujyIZMmOckM+iGZZTBoZ02f9dJ4r4dGeaY4nJ1Susy8KeWc5rbl401rqmNFq0MSQmmT1TDRRtDInwXGTVM8R42zvPeL8wQ5rzWqEUbHJIA2knMnjTAZb/R8h25yHFUUFXQ4O8Fr5U0Noilq5p5qKKEfvpVEdB12A5kUQZpTVsSzCZNbEHRpj8koOsKaNteFY8dA7S0KKnSBtjA73U53xyfCirAFlNml80jNgXKuvsCb8HHNV8RqQuOqNU0RdgZyRq7KjcCcuS8qE7Y/Qoc6nlYukzuhnsqWvEe+hI4pUl1Id4QdrGWiqg9Hpa1IUcBFDm0kUhSqPjFSJiIHlQtcLvFFTr8P4BbATGCgwhNgs8vZi3Uvyq7W1FHVtR7UB0QBVaxeALeYmkBPgce1f+XBttJBJbgulSleJkpgRkXB8henLNQxeAqKCsTddYnAIk3lEUAvEPhWkLglGVqOU3i1rC5hvOqcshSiiqz4peeZAFXMBgqGF1/taM9TkNLZE00JRtTNKyCAJHkNLTD3zjKiLT6/KdOhmvMRmLsPax8cSOHye7o5HmPXvbbRAnljrhu7x8NkNQ8avj2Tv31VvH8ltcPNa1maBhyB/Sv8lerDWpOhTczgqSN05jv8c5VW0cwIwxlCwR9CyWZuBYtnZz6/Q9EkyQh3uo0JUAS6F5UWlSlJtLkJ8Y/XtrTgJ05bTs/ksyODOqJKqwyBrxq/SHnPW0NUuZ7Huf/8qijSXFT5K+2LKv/sv0FUeSdQQ1T5Fkn7osq3n2qIevhK7Tfw6uKUko8aP7t8ksrZZ7yIWtozAXXhO+7fzMTu729ulDmVLNS4aGBubzoQkzpv3zXEdJtbkFZknMOmzvPnmyN908KCPKlpQfvvwvOU/iWUzi0MDAwMDAwMDAwM/Kv8D3trhHLcp6snAAAAAElFTkSuQmCC" alt="Comforty Logo"  />
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
            <a href="/Product" className="hover:text-teal-600">
              Product
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
          <a href="Product.html" className="hover:text-teal-600">
            Product
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
